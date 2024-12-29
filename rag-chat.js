import { pipeline } from '@xenova/transformers';
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "@langchain/core/documents";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import promptSync from 'prompt-sync';
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const RAG_STORE_PATH = path.join(__dirname, 'rag-store');

class LocalEmbeddings {
  constructor() {
    this.pipe = null;
  }

  async init() {
    this.pipe = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  }

  async embedDocuments(texts) {
    if (!this.pipe) await this.init();
    const embeddings = [];
    for (const text of texts) {
      const result = await this.pipe(text, { pooling: 'mean', normalize: true });
      embeddings.push(Array.from(result.data));
    }
    return embeddings;
  }

  async embedQuery(text) {
    return (await this.embedDocuments([text]))[0];
  }
}

class LocalLLM {
  constructor() {
    this.pipe = null;
  }

  async init() {
    this.pipe = await pipeline('text2text-generation', 'Xenova/flan-t5-small');
  }

  async predict(text) {
    if (!this.pipe) await this.init();
    const result = await this.pipe(text, {
      max_new_tokens: 100,
      temperature: 0.7
    });
    return result[0].generated_text;
  }
}

async function processDocuments(urls) {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
  });
  
  let allDocs = [];
  for (const url of urls) {
    console.log(`Loading ${url}`);
    const loader = new CheerioWebBaseLoader(url);
    const docs = await loader.load();
    const splitDocs = await textSplitter.splitDocuments(docs);
    allDocs.push(...splitDocs);
  }

  const inputDocument = new Document({ 
    pageContent: "This is a Surface Pro 11th edition. It features the latest Intel processor, all-day battery life, and a stunning touchscreen display. Perfect for students and professionals." 
  });
  const splitCustomDoc = await textSplitter.splitDocuments([inputDocument]);
  allDocs.push(...splitCustomDoc);

  return allDocs;
}

async function main() {
  try {
    const embeddings = new LocalEmbeddings();
    const llm = new LocalLLM();
    
    const urls = 
    [
      "https://en.wikipedia.org/wiki/Ratan_Tata",
      "https://www.formula1.com/en/results/2024/races/1245/azerbaijan/race-result"
    ];
    const allDocs = await processDocuments(urls);

    const vectorstore = await HNSWLib.fromDocuments(allDocs, embeddings);
    await vectorstore.save(RAG_STORE_PATH);

    const retriever = vectorstore.asRetriever();
    
    let data = {
      fpData: {
        name: "Rie",
        age: 20,
        gender: "Female",
        email: "rie@gmail.com",
        profession: "Student",
      },
      campaign: {
        productName: "Surface Pro 11th edition",
        objective: "Sell the product",
      }
    };

    const promptText = `
      Product assistant chatbot for ${data.campaign.productName}.
      Visitor: ${data.fpData.name}, ${data.fpData.profession}
      Generate friendly greeting with product details.
    `;

    const initialResponse = await llm.predict(promptText);
    const chatHistory = [
      new HumanMessage(promptText),
      new AIMessage(initialResponse),
    ];

    const inputPrompt = promptSync({ sigint: true });
    console.log('\nAI:', initialResponse, '\n');

    while (true) {
      const input = inputPrompt("Question: ");
      if (!input) continue;
      
      const context = await retriever.getRelevantDocuments(input);
      
      const userInput = `
        Context: ${context.map(doc => doc.pageContent).join('\n')}
        Chat history: ${chatHistory.map(msg => msg.content).join('\n')}
        Question: ${input}
        Generate helpful response:
      `;
      
      const response = await llm.predict(userInput);
      console.log('\nAI:', response, '\n');
      
      chatHistory.push(new HumanMessage(input));
      chatHistory.push(new AIMessage(response));
    }
  } catch (error) {
    console.error('Error:::', error);
  }
}

main()
