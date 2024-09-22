function renderAd() {
  try {

    console.log('window.chatAds values: ', window.chatAds)
    console.log('window.chatAds values: ', window.chatAdsFPData)
    // Check if necessary global variables are defined
    if (!window.chatAds || !window.chatAds.domID || !window.chatAdsFPData) {
      console.error("Required global variables are missing.");
      return;
    }

    let domID = window.chatAds.domID;
    let campaignID = window.chatAds.campaignID;

    let fpData = window.chatAdsFPData;
    let adElement = document.getElementById(domID);

    // Ensure adElement exists before proceeding
    if (!adElement) {
      console.error("DOM element with the specified ID not found:", domID);
      return;
    }

    // Apply styles to the ad element
    // adElement.style.background = '#ebf7f9';
    // adElement.style.border = '1px solid #ccc';
    // adElement.style.padding = '10px';

    // Ad creative (image)


    // Injecting the ad content into the element, creating an isolated React root
    adElement.innerHTML = ` 
  

        <div class="ad-content">
          <div id="root"></div> <!-- Isolated React container -->
        </div>

    `;

    // Dynamically load the external script (React app.js) during runtime
    loadAppScript();

  } catch (error) {
    console.error("Error in renderAd function:", error);
  }
}

function loadAppScript() {
  try {
    // Check if the script is already loaded to avoid duplicates
    const existingScript = document.querySelector('script[src="https://maheshwaran-p.github.io/whatsapp_promotional_images/app.js"]');

    if (!existingScript) {
      let script = document.createElement("script");
      script.src = "https://maheshwaran-p.github.io/whatsapp_promotional_images/app.js";
      script.async = true;

      script.onload = function () {
        console.log("App.js loaded successfully.");
        // You can call any initialization function from the app.js here if needed
        if (typeof window.initApp === 'function') {
          window.initApp();  // Assuming initApp is the initialization function in app.js
        }
      };

      script.onerror = function () {
        console.error("Failed to load the external app.js script.");
      };

      document.body.appendChild(script);
    } else {
      console.log("App.js is already loaded.");
    }
  } catch (error) {
    console.error("Error loading the app.js script:", error);
  }
}

// Initialize the ad after window.chatAds is defined
// window.chatAds = { domID: 'chat-ad', campaignID: 35 };
// window.chatAdsFPData = {
//   name: "Joel Samuel Raj",
//   gender: "M",
//   email: "joel.sr1024@gmail.com",
//   age: 22
// }
window.campaignID = window.chatAds.campaignID;
renderAd();

// Load additional external scripts if needed
