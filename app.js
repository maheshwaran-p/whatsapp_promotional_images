"use strict";(()=>{var Xz=Object.create;var h0=Object.defineProperty;var Zz=Object.getOwnPropertyDescriptor;var Jz=Object.getOwnPropertyNames;var e8=Object.getPrototypeOf,t8=Object.prototype.hasOwnProperty;var Se=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),g0=(e,t)=>{for(var n in t)h0(e,n,{get:t[n],enumerable:!0})},n8=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Jz(t))!t8.call(e,o)&&o!==n&&h0(e,o,{get:()=>t[o],enumerable:!(r=Zz(t,o))||r.enumerable});return e};var Q=(e,t,n)=>(n=e!=null?Xz(e8(e)):{},n8(t||!e||!e.__esModule?h0(n,"default",{value:e,enumerable:!0}):n,e));var G2=Se(He=>{"use strict";var ec=Symbol.for("react.element"),r8=Symbol.for("react.portal"),o8=Symbol.for("react.fragment"),i8=Symbol.for("react.strict_mode"),a8=Symbol.for("react.profiler"),l8=Symbol.for("react.provider"),s8=Symbol.for("react.context"),u8=Symbol.for("react.forward_ref"),c8=Symbol.for("react.suspense"),p8=Symbol.for("react.memo"),f8=Symbol.for("react.lazy"),F2=Symbol.iterator;function d8(e){return e===null||typeof e!="object"?null:(e=F2&&e[F2]||e["@@iterator"],typeof e=="function"?e:null)}var U2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j2=Object.assign,H2={};function is(e,t,n){this.props=e,this.context=t,this.refs=H2,this.updater=n||U2}is.prototype.isReactComponent={};is.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};is.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W2(){}W2.prototype=is.prototype;function v0(e,t,n){this.props=e,this.context=t,this.refs=H2,this.updater=n||U2}var y0=v0.prototype=new W2;y0.constructor=v0;j2(y0,is.prototype);y0.isPureReactComponent=!0;var z2=Array.isArray,q2=Object.prototype.hasOwnProperty,x0={current:null},V2={key:!0,ref:!0,__self:!0,__source:!0};function K2(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)q2.call(t,r)&&!V2.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ec,type:e,key:i,ref:a,props:o,_owner:x0.current}}function m8(e,t){return{$$typeof:ec,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w0(e){return typeof e=="object"&&e!==null&&e.$$typeof===ec}function h8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var B2=/\/+/g;function b0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?h8(""+e.key):t.toString(36)}function Od(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ec:case r8:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+b0(a,0):r,z2(o)?(n="",e!=null&&(n=e.replace(B2,"$&/")+"/"),Od(o,t,n,"",function(p){return p})):o!=null&&(w0(o)&&(o=m8(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(B2,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",z2(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+b0(i,s);a+=Od(i,t,n,c,o)}else if(c=d8(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+b0(i,s++),a+=Od(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Td(e,t,n){if(e==null)return e;var r=[],o=0;return Od(e,r,"","",function(i){return t.call(n,i,o++)}),r}function g8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $n={current:null},Pd={transition:null},b8={ReactCurrentDispatcher:$n,ReactCurrentBatchConfig:Pd,ReactCurrentOwner:x0};function $2(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Td,forEach:function(e,t,n){Td(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Td(e,function(){t++}),t},toArray:function(e){return Td(e,function(t){return t})||[]},only:function(e){if(!w0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};He.Component=is;He.Fragment=o8;He.Profiler=a8;He.PureComponent=v0;He.StrictMode=i8;He.Suspense=c8;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b8;He.act=$2;He.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=j2({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=x0.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)q2.call(t,c)&&!V2.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var p=0;p<c;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:ec,type:e.type,key:o,ref:i,props:r,_owner:a}};He.createContext=function(e){return e={$$typeof:s8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l8,_context:e},e.Consumer=e};He.createElement=K2;He.createFactory=function(e){var t=K2.bind(null,e);return t.type=e,t};He.createRef=function(){return{current:null}};He.forwardRef=function(e){return{$$typeof:u8,render:e}};He.isValidElement=w0;He.lazy=function(e){return{$$typeof:f8,_payload:{_status:-1,_result:e},_init:g8}};He.memo=function(e,t){return{$$typeof:p8,type:e,compare:t===void 0?null:t}};He.startTransition=function(e){var t=Pd.transition;Pd.transition={};try{e()}finally{Pd.transition=t}};He.unstable_act=$2;He.useCallback=function(e,t){return $n.current.useCallback(e,t)};He.useContext=function(e){return $n.current.useContext(e)};He.useDebugValue=function(){};He.useDeferredValue=function(e){return $n.current.useDeferredValue(e)};He.useEffect=function(e,t){return $n.current.useEffect(e,t)};He.useId=function(){return $n.current.useId()};He.useImperativeHandle=function(e,t,n){return $n.current.useImperativeHandle(e,t,n)};He.useInsertionEffect=function(e,t){return $n.current.useInsertionEffect(e,t)};He.useLayoutEffect=function(e,t){return $n.current.useLayoutEffect(e,t)};He.useMemo=function(e,t){return $n.current.useMemo(e,t)};He.useReducer=function(e,t,n){return $n.current.useReducer(e,t,n)};He.useRef=function(e){return $n.current.useRef(e)};He.useState=function(e){return $n.current.useState(e)};He.useSyncExternalStore=function(e,t,n){return $n.current.useSyncExternalStore(e,t,n)};He.useTransition=function(){return $n.current.useTransition()};He.version="18.3.1"});var Re=Se((zJ,Q2)=>{"use strict";Q2.exports=G2()});var iC=Se(ut=>{"use strict";function C0(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Id(o,t))e[r]=t,e[n]=o,n=r;else break e}}function ao(e){return e.length===0?null:e[0]}function Ld(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var a=2*(r+1)-1,s=e[a],c=a+1,p=e[c];if(0>Id(s,n))c<o&&0>Id(p,s)?(e[r]=p,e[c]=n,r=c):(e[r]=s,e[a]=n,r=a);else if(c<o&&0>Id(p,n))e[r]=p,e[c]=n,r=c;else break e}}return t}function Id(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Y2=performance,ut.unstable_now=function(){return Y2.now()}):(k0=Date,X2=k0.now(),ut.unstable_now=function(){return k0.now()-X2});var Y2,k0,X2,Oo=[],Wi=[],v8=1,Ur=null,Ln=3,Md=!1,Ya=!1,nc=!1,eC=typeof setTimeout=="function"?setTimeout:null,tC=typeof clearTimeout=="function"?clearTimeout:null,Z2=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E0(e){for(var t=ao(Wi);t!==null;){if(t.callback===null)Ld(Wi);else if(t.startTime<=e)Ld(Wi),t.sortIndex=t.expirationTime,C0(Oo,t);else break;t=ao(Wi)}}function R0(e){if(nc=!1,E0(e),!Ya)if(ao(Oo)!==null)Ya=!0,O0(T0);else{var t=ao(Wi);t!==null&&P0(R0,t.startTime-e)}}function T0(e,t){Ya=!1,nc&&(nc=!1,tC(rc),rc=-1),Md=!0;var n=Ln;try{for(E0(t),Ur=ao(Oo);Ur!==null&&(!(Ur.expirationTime>t)||e&&!oC());){var r=Ur.callback;if(typeof r=="function"){Ur.callback=null,Ln=Ur.priorityLevel;var o=r(Ur.expirationTime<=t);t=ut.unstable_now(),typeof o=="function"?Ur.callback=o:Ur===ao(Oo)&&Ld(Oo),E0(t)}else Ld(Oo);Ur=ao(Oo)}if(Ur!==null)var i=!0;else{var a=ao(Wi);a!==null&&P0(R0,a.startTime-t),i=!1}return i}finally{Ur=null,Ln=n,Md=!1}}var Dd=!1,Ad=null,rc=-1,nC=5,rC=-1;function oC(){return!(ut.unstable_now()-rC<nC)}function S0(){if(Ad!==null){var e=ut.unstable_now();rC=e;var t=!0;try{t=Ad(!0,e)}finally{t?tc():(Dd=!1,Ad=null)}}else Dd=!1}var tc;typeof Z2=="function"?tc=function(){Z2(S0)}:typeof MessageChannel<"u"?(_0=new MessageChannel,J2=_0.port2,_0.port1.onmessage=S0,tc=function(){J2.postMessage(null)}):tc=function(){eC(S0,0)};var _0,J2;function O0(e){Ad=e,Dd||(Dd=!0,tc())}function P0(e,t){rc=eC(function(){e(ut.unstable_now())},t)}ut.unstable_IdlePriority=5;ut.unstable_ImmediatePriority=1;ut.unstable_LowPriority=4;ut.unstable_NormalPriority=3;ut.unstable_Profiling=null;ut.unstable_UserBlockingPriority=2;ut.unstable_cancelCallback=function(e){e.callback=null};ut.unstable_continueExecution=function(){Ya||Md||(Ya=!0,O0(T0))};ut.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nC=0<e?Math.floor(1e3/e):5};ut.unstable_getCurrentPriorityLevel=function(){return Ln};ut.unstable_getFirstCallbackNode=function(){return ao(Oo)};ut.unstable_next=function(e){switch(Ln){case 1:case 2:case 3:var t=3;break;default:t=Ln}var n=Ln;Ln=t;try{return e()}finally{Ln=n}};ut.unstable_pauseExecution=function(){};ut.unstable_requestPaint=function(){};ut.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ln;Ln=e;try{return t()}finally{Ln=n}};ut.unstable_scheduleCallback=function(e,t,n){var r=ut.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:v8++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,C0(Wi,e),ao(Oo)===null&&e===ao(Wi)&&(nc?(tC(rc),rc=-1):nc=!0,P0(R0,n-r))):(e.sortIndex=o,C0(Oo,e),Ya||Md||(Ya=!0,O0(T0))),e};ut.unstable_shouldYield=oC;ut.unstable_wrapCallback=function(e){var t=Ln;return function(){var n=Ln;Ln=t;try{return e.apply(this,arguments)}finally{Ln=n}}}});var lC=Se((UJ,aC)=>{"use strict";aC.exports=iC()});var pR=Se(Rr=>{"use strict";var y8=Re(),Cr=lC();function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mE=new Set,Cc={};function ul(e,t){Es(e,t),Es(e+"Capture",t)}function Es(e,t){for(Cc[e]=t,e=0;e<t.length;e++)mE.add(t[e])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),J0=Object.prototype.hasOwnProperty,x8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sC={},uC={};function w8(e){return J0.call(uC,e)?!0:J0.call(sC,e)?!1:x8.test(e)?uC[e]=!0:(sC[e]=!0,!1)}function k8(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S8(e,t,n,r){if(t===null||typeof t>"u"||k8(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Yn(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rn[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rn[t]=new Yn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rn[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rn[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rn[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rn[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rn[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rn[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rn[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vv=/[\-:]([a-z])/g;function Kv(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vv,Kv);Rn[t]=new Yn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vv,Kv);Rn[t]=new Yn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vv,Kv);Rn[t]=new Yn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});function $v(e,t,n,r){var o=Rn.hasOwnProperty(t)?Rn[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S8(t,n,o,r)&&(n=null),r||o===null?w8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mi=y8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nd=Symbol.for("react.element"),ss=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),ev=Symbol.for("react.profiler"),hE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),tv=Symbol.for("react.suspense"),nv=Symbol.for("react.suspense_list"),Yv=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var bE=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var cC=Symbol.iterator;function oc(e){return e===null||typeof e!="object"?null:(e=cC&&e[cC]||e["@@iterator"],typeof e=="function"?e:null)}var Rt=Object.assign,I0;function fc(e){if(I0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I0=t&&t[1]||""}return`
`+I0+e}var A0=!1;function L0(e,t){if(!e||A0)return"";A0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{A0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fc(e):""}function _8(e){switch(e.tag){case 5:return fc(e.type);case 16:return fc("Lazy");case 13:return fc("Suspense");case 19:return fc("SuspenseList");case 0:case 2:case 15:return e=L0(e.type,!1),e;case 11:return e=L0(e.type.render,!1),e;case 1:return e=L0(e.type,!0),e;default:return""}}function rv(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case us:return"Fragment";case ss:return"Portal";case ev:return"Profiler";case Gv:return"StrictMode";case tv:return"Suspense";case nv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gE:return(e.displayName||"Context")+".Consumer";case hE:return(e._context.displayName||"Context")+".Provider";case Qv:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yv:return t=e.displayName||null,t!==null?t:rv(e.type)||"Memo";case Vi:t=e._payload,e=e._init;try{return rv(e(t))}catch{}}return null}function C8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rv(t);case 8:return t===Gv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ia(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E8(e){var t=vE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fd(e){e._valueTracker||(e._valueTracker=E8(e))}function yE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ov(e,t){var n=t.checked;return Rt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pC(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ia(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xE(e,t){t=t.checked,t!=null&&$v(e,"checked",t,!1)}function iv(e,t){xE(e,t);var n=ia(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?av(e,t.type,n):t.hasOwnProperty("defaultValue")&&av(e,t.type,ia(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fC(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function av(e,t,n){(t!=="number"||pm(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dc=Array.isArray;function xs(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ia(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function lv(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(X(91));return Rt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dC(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(X(92));if(dc(n)){if(1<n.length)throw Error(X(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ia(n)}}function wE(e,t){var n=ia(t.value),r=ia(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mC(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sv(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zd,SE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zd=zd||document.createElement("div"),zd.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zd.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ec(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R8=["Webkit","ms","Moz","O"];Object.keys(gc).forEach(function(e){R8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gc[t]=gc[e]})});function _E(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gc.hasOwnProperty(e)&&gc[e]?(""+t).trim():t+"px"}function CE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_E(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var T8=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uv(e,t){if(t){if(T8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(X(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(X(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(X(61))}if(t.style!=null&&typeof t.style!="object")throw Error(X(62))}}function cv(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=null;function Xv(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fv=null,ws=null,ks=null;function hC(e){if(e=qc(e)){if(typeof fv!="function")throw Error(X(280));var t=e.stateNode;t&&(t=Bm(t),fv(e.stateNode,e.type,t))}}function EE(e){ws?ks?ks.push(e):ks=[e]:ws=e}function RE(){if(ws){var e=ws,t=ks;if(ks=ws=null,hC(e),t)for(e=0;e<t.length;e++)hC(t[e])}}function TE(e,t){return e(t)}function OE(){}var M0=!1;function PE(e,t,n){if(M0)return e(t,n);M0=!0;try{return TE(e,t,n)}finally{M0=!1,(ws!==null||ks!==null)&&(OE(),RE())}}function Rc(e,t){var n=e.stateNode;if(n===null)return null;var r=Bm(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(X(231,t,typeof n));return n}var dv=!1;if(ci)try{as={},Object.defineProperty(as,"passive",{get:function(){dv=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{dv=!1}var as;function O8(e,t,n,r,o,i,a,s,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(f){this.onError(f)}}var bc=!1,fm=null,dm=!1,mv=null,P8={onError:function(e){bc=!0,fm=e}};function I8(e,t,n,r,o,i,a,s,c){bc=!1,fm=null,O8.apply(P8,arguments)}function A8(e,t,n,r,o,i,a,s,c){if(I8.apply(this,arguments),bc){if(bc){var p=fm;bc=!1,fm=null}else throw Error(X(198));dm||(dm=!0,mv=p)}}function cl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function IE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gC(e){if(cl(e)!==e)throw Error(X(188))}function L8(e){var t=e.alternate;if(!t){if(t=cl(e),t===null)throw Error(X(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return gC(o),e;if(i===r)return gC(o),t;i=i.sibling}throw Error(X(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(X(189))}}if(n.alternate!==r)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?e:t}function AE(e){return e=L8(e),e!==null?LE(e):null}function LE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=LE(e);if(t!==null)return t;e=e.sibling}return null}var ME=Cr.unstable_scheduleCallback,bC=Cr.unstable_cancelCallback,M8=Cr.unstable_shouldYield,D8=Cr.unstable_requestPaint,Wt=Cr.unstable_now,N8=Cr.unstable_getCurrentPriorityLevel,Zv=Cr.unstable_ImmediatePriority,DE=Cr.unstable_UserBlockingPriority,mm=Cr.unstable_NormalPriority,F8=Cr.unstable_LowPriority,NE=Cr.unstable_IdlePriority,Dm=null,Lo=null;function z8(e){if(Lo&&typeof Lo.onCommitFiberRoot=="function")try{Lo.onCommitFiberRoot(Dm,e,void 0,(e.current.flags&128)===128)}catch{}}var po=Math.clz32?Math.clz32:j8,B8=Math.log,U8=Math.LN2;function j8(e){return e>>>=0,e===0?32:31-(B8(e)/U8|0)|0}var Bd=64,Ud=4194304;function mc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hm(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=mc(s):(i&=a,i!==0&&(r=mc(i)))}else a=n&~o,a!==0?r=mc(a):i!==0&&(r=mc(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-po(t),o=1<<n,r|=e[n],t&=~o;return r}function H8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W8(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-po(i),s=1<<a,c=o[a];c===-1?(!(s&n)||s&r)&&(o[a]=H8(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function hv(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function FE(){var e=Bd;return Bd<<=1,!(Bd&4194240)&&(Bd=64),e}function D0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-po(t),e[t]=n}function q8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-po(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Jv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-po(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ze=0;function zE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var BE,ey,UE,jE,HE,gv=!1,jd=[],Xi=null,Zi=null,Ji=null,Tc=new Map,Oc=new Map,$i=[],V8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vC(e,t){switch(e){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Tc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(t.pointerId)}}function ic(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=qc(t),t!==null&&ey(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function K8(e,t,n,r,o){switch(t){case"focusin":return Xi=ic(Xi,e,t,n,r,o),!0;case"dragenter":return Zi=ic(Zi,e,t,n,r,o),!0;case"mouseover":return Ji=ic(Ji,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tc.set(i,ic(Tc.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Oc.set(i,ic(Oc.get(i)||null,e,t,n,r,o)),!0}return!1}function WE(e){var t=Ja(e.target);if(t!==null){var n=cl(t);if(n!==null){if(t=n.tag,t===13){if(t=IE(n),t!==null){e.blockedOn=t,HE(e.priority,function(){UE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tm(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bv(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pv=r,n.target.dispatchEvent(r),pv=null}else return t=qc(n),t!==null&&ey(t),e.blockedOn=n,!1;t.shift()}return!0}function yC(e,t,n){tm(e)&&n.delete(t)}function $8(){gv=!1,Xi!==null&&tm(Xi)&&(Xi=null),Zi!==null&&tm(Zi)&&(Zi=null),Ji!==null&&tm(Ji)&&(Ji=null),Tc.forEach(yC),Oc.forEach(yC)}function ac(e,t){e.blockedOn===t&&(e.blockedOn=null,gv||(gv=!0,Cr.unstable_scheduleCallback(Cr.unstable_NormalPriority,$8)))}function Pc(e){function t(o){return ac(o,e)}if(0<jd.length){ac(jd[0],e);for(var n=1;n<jd.length;n++){var r=jd[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xi!==null&&ac(Xi,e),Zi!==null&&ac(Zi,e),Ji!==null&&ac(Ji,e),Tc.forEach(t),Oc.forEach(t),n=0;n<$i.length;n++)r=$i[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)WE(n),n.blockedOn===null&&$i.shift()}var Ss=mi.ReactCurrentBatchConfig,gm=!0;function G8(e,t,n,r){var o=Ze,i=Ss.transition;Ss.transition=null;try{Ze=1,ty(e,t,n,r)}finally{Ze=o,Ss.transition=i}}function Q8(e,t,n,r){var o=Ze,i=Ss.transition;Ss.transition=null;try{Ze=4,ty(e,t,n,r)}finally{Ze=o,Ss.transition=i}}function ty(e,t,n,r){if(gm){var o=bv(e,t,n,r);if(o===null)H0(e,t,r,bm,n),vC(e,r);else if(K8(o,e,t,n,r))r.stopPropagation();else if(vC(e,r),t&4&&-1<V8.indexOf(e)){for(;o!==null;){var i=qc(o);if(i!==null&&BE(i),i=bv(e,t,n,r),i===null&&H0(e,t,r,bm,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else H0(e,t,r,null,n)}}var bm=null;function bv(e,t,n,r){if(bm=null,e=Xv(r),e=Ja(e),e!==null)if(t=cl(e),t===null)e=null;else if(n=t.tag,n===13){if(e=IE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bm=e,null}function qE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N8()){case Zv:return 1;case DE:return 4;case mm:case F8:return 16;case NE:return 536870912;default:return 16}default:return 16}}var Qi=null,ny=null,nm=null;function VE(){if(nm)return nm;var e,t=ny,n=t.length,r,o="value"in Qi?Qi.value:Qi.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return nm=o.slice(e,1<r?1-r:void 0)}function rm(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hd(){return!0}function xC(){return!1}function Er(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hd:xC,this.isPropagationStopped=xC,this}return Rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hd)},persist:function(){},isPersistent:Hd}),t}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ry=Er(Ls),Wc=Rt({},Ls,{view:0,detail:0}),Y8=Er(Wc),N0,F0,lc,Nm=Rt({},Wc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oy,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lc&&(lc&&e.type==="mousemove"?(N0=e.screenX-lc.screenX,F0=e.screenY-lc.screenY):F0=N0=0,lc=e),N0)},movementY:function(e){return"movementY"in e?e.movementY:F0}}),wC=Er(Nm),X8=Rt({},Nm,{dataTransfer:0}),Z8=Er(X8),J8=Rt({},Wc,{relatedTarget:0}),z0=Er(J8),eB=Rt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),tB=Er(eB),nB=Rt({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rB=Er(nB),oB=Rt({},Ls,{data:0}),kC=Er(oB),iB={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aB={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lB={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sB(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lB[e])?!!t[e]:!1}function oy(){return sB}var uB=Rt({},Wc,{key:function(e){if(e.key){var t=iB[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rm(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aB[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oy,charCode:function(e){return e.type==="keypress"?rm(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rm(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cB=Er(uB),pB=Rt({},Nm,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),SC=Er(pB),fB=Rt({},Wc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oy}),dB=Er(fB),mB=Rt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),hB=Er(mB),gB=Rt({},Nm,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bB=Er(gB),vB=[9,13,27,32],iy=ci&&"CompositionEvent"in window,vc=null;ci&&"documentMode"in document&&(vc=document.documentMode);var yB=ci&&"TextEvent"in window&&!vc,KE=ci&&(!iy||vc&&8<vc&&11>=vc),_C=" ",CC=!1;function $E(e,t){switch(e){case"keyup":return vB.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function GE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cs=!1;function xB(e,t){switch(e){case"compositionend":return GE(t);case"keypress":return t.which!==32?null:(CC=!0,_C);case"textInput":return e=t.data,e===_C&&CC?null:e;default:return null}}function wB(e,t){if(cs)return e==="compositionend"||!iy&&$E(e,t)?(e=VE(),nm=ny=Qi=null,cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return KE&&t.locale!=="ko"?null:t.data;default:return null}}var kB={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function EC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kB[e.type]:t==="textarea"}function QE(e,t,n,r){EE(r),t=vm(t,"onChange"),0<t.length&&(n=new ry("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yc=null,Ic=null;function SB(e){a5(e,0)}function Fm(e){var t=ds(e);if(yE(t))return e}function _B(e,t){if(e==="change")return t}var YE=!1;ci&&(ci?(qd="oninput"in document,qd||(B0=document.createElement("div"),B0.setAttribute("oninput","return;"),qd=typeof B0.oninput=="function"),Wd=qd):Wd=!1,YE=Wd&&(!document.documentMode||9<document.documentMode));var Wd,qd,B0;function RC(){yc&&(yc.detachEvent("onpropertychange",XE),Ic=yc=null)}function XE(e){if(e.propertyName==="value"&&Fm(Ic)){var t=[];QE(t,Ic,e,Xv(e)),PE(SB,t)}}function CB(e,t,n){e==="focusin"?(RC(),yc=t,Ic=n,yc.attachEvent("onpropertychange",XE)):e==="focusout"&&RC()}function EB(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fm(Ic)}function RB(e,t){if(e==="click")return Fm(t)}function TB(e,t){if(e==="input"||e==="change")return Fm(t)}function OB(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mo=typeof Object.is=="function"?Object.is:OB;function Ac(e,t){if(mo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!J0.call(t,o)||!mo(e[o],t[o]))return!1}return!0}function TC(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function OC(e,t){var n=TC(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=TC(n)}}function ZE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ZE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function JE(){for(var e=window,t=pm();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pm(e.document)}return t}function ay(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PB(e){var t=JE(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ZE(n.ownerDocument.documentElement,n)){if(r!==null&&ay(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=OC(n,i);var a=OC(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var IB=ci&&"documentMode"in document&&11>=document.documentMode,ps=null,vv=null,xc=null,yv=!1;function PC(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yv||ps==null||ps!==pm(r)||(r=ps,"selectionStart"in r&&ay(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xc&&Ac(xc,r)||(xc=r,r=vm(vv,"onSelect"),0<r.length&&(t=new ry("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ps)))}function Vd(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fs={animationend:Vd("Animation","AnimationEnd"),animationiteration:Vd("Animation","AnimationIteration"),animationstart:Vd("Animation","AnimationStart"),transitionend:Vd("Transition","TransitionEnd")},U0={},e5={};ci&&(e5=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function zm(e){if(U0[e])return U0[e];if(!fs[e])return e;var t=fs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in e5)return U0[e]=t[n];return e}var t5=zm("animationend"),n5=zm("animationiteration"),r5=zm("animationstart"),o5=zm("transitionend"),i5=new Map,IC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function la(e,t){i5.set(e,t),ul(t,[e])}for(Kd=0;Kd<IC.length;Kd++)$d=IC[Kd],AC=$d.toLowerCase(),LC=$d[0].toUpperCase()+$d.slice(1),la(AC,"on"+LC);var $d,AC,LC,Kd;la(t5,"onAnimationEnd");la(n5,"onAnimationIteration");la(r5,"onAnimationStart");la("dblclick","onDoubleClick");la("focusin","onFocus");la("focusout","onBlur");la(o5,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);ul("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ul("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ul("onBeforeInput",["compositionend","keypress","textInput","paste"]);ul("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ul("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ul("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AB=new Set("cancel close invalid load scroll toggle".split(" ").concat(hc));function MC(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A8(r,t,void 0,e),e.currentTarget=null}function a5(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;MC(o,s,p),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,p=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;MC(o,s,p),i=c}}}if(dm)throw e=mv,dm=!1,mv=null,e}function ft(e,t){var n=t[_v];n===void 0&&(n=t[_v]=new Set);var r=e+"__bubble";n.has(r)||(l5(t,e,2,!1),n.add(r))}function j0(e,t,n){var r=0;t&&(r|=4),l5(n,e,r,t)}var Gd="_reactListening"+Math.random().toString(36).slice(2);function Lc(e){if(!e[Gd]){e[Gd]=!0,mE.forEach(function(n){n!=="selectionchange"&&(AB.has(n)||j0(n,!1,e),j0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gd]||(t[Gd]=!0,j0("selectionchange",!1,t))}}function l5(e,t,n,r){switch(qE(t)){case 1:var o=G8;break;case 4:o=Q8;break;default:o=ty}n=o.bind(null,t,n,e),o=void 0,!dv||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function H0(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ja(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}PE(function(){var p=i,f=Xv(n),m=[];e:{var h=i5.get(e);if(h!==void 0){var g=ry,v=e;switch(e){case"keypress":if(rm(n)===0)break e;case"keydown":case"keyup":g=cB;break;case"focusin":v="focus",g=z0;break;case"focusout":v="blur",g=z0;break;case"beforeblur":case"afterblur":g=z0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wC;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Z8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dB;break;case t5:case n5:case r5:g=tB;break;case o5:g=hB;break;case"scroll":g=Y8;break;case"wheel":g=bB;break;case"copy":case"cut":case"paste":g=rB;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=SC}var w=(t&4)!==0,_=!w&&e==="scroll",y=w?h!==null?h+"Capture":null:h;w=[];for(var x=p,S;x!==null;){S=x;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,y!==null&&(T=Rc(x,y),T!=null&&w.push(Mc(x,T,S)))),_)break;x=x.return}0<w.length&&(h=new g(h,v,null,n,f),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==pv&&(v=n.relatedTarget||n.fromElement)&&(Ja(v)||v[pi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=p,v=v?Ja(v):null,v!==null&&(_=cl(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=p),g!==v)){if(w=wC,T="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=SC,T="onPointerLeave",y="onPointerEnter",x="pointer"),_=g==null?h:ds(g),S=v==null?h:ds(v),h=new w(T,x+"leave",g,n,f),h.target=_,h.relatedTarget=S,T=null,Ja(f)===p&&(w=new w(y,x+"enter",v,n,f),w.target=S,w.relatedTarget=_,T=w),_=T,g&&v)t:{for(w=g,y=v,x=0,S=w;S;S=ls(S))x++;for(S=0,T=y;T;T=ls(T))S++;for(;0<x-S;)w=ls(w),x--;for(;0<S-x;)y=ls(y),S--;for(;x--;){if(w===y||y!==null&&w===y.alternate)break t;w=ls(w),y=ls(y)}w=null}else w=null;g!==null&&DC(m,h,g,w,!1),v!==null&&_!==null&&DC(m,_,v,w,!0)}}e:{if(h=p?ds(p):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=_B;else if(EC(h))if(YE)I=TB;else{I=EB;var R=CB}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=RB);if(I&&(I=I(e,p))){QE(m,I,n,f);break e}R&&R(e,h,p),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&av(h,"number",h.value)}switch(R=p?ds(p):window,e){case"focusin":(EC(R)||R.contentEditable==="true")&&(ps=R,vv=p,xc=null);break;case"focusout":xc=vv=ps=null;break;case"mousedown":yv=!0;break;case"contextmenu":case"mouseup":case"dragend":yv=!1,PC(m,n,f);break;case"selectionchange":if(IB)break;case"keydown":case"keyup":PC(m,n,f)}var D;if(iy)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else cs?$E(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(KE&&n.locale!=="ko"&&(cs||z!=="onCompositionStart"?z==="onCompositionEnd"&&cs&&(D=VE()):(Qi=f,ny="value"in Qi?Qi.value:Qi.textContent,cs=!0)),R=vm(p,z),0<R.length&&(z=new kC(z,e,null,n,f),m.push({event:z,listeners:R}),D?z.data=D:(D=GE(n),D!==null&&(z.data=D)))),(D=yB?xB(e,n):wB(e,n))&&(p=vm(p,"onBeforeInput"),0<p.length&&(f=new kC("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:p}),f.data=D))}a5(m,t)})}function Mc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vm(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Rc(e,n),i!=null&&r.unshift(Mc(e,i,o)),i=Rc(e,t),i!=null&&r.push(Mc(e,i,o))),e=e.return}return r}function ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function DC(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,p=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&p!==null&&(s=p,o?(c=Rc(n,i),c!=null&&a.unshift(Mc(n,c,s))):o||(c=Rc(n,i),c!=null&&a.push(Mc(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var LB=/\r\n?/g,MB=/\u0000|\uFFFD/g;function NC(e){return(typeof e=="string"?e:""+e).replace(LB,`
`).replace(MB,"")}function Qd(e,t,n){if(t=NC(t),NC(e)!==t&&n)throw Error(X(425))}function ym(){}var xv=null,wv=null;function kv(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sv=typeof setTimeout=="function"?setTimeout:void 0,DB=typeof clearTimeout=="function"?clearTimeout:void 0,FC=typeof Promise=="function"?Promise:void 0,NB=typeof queueMicrotask=="function"?queueMicrotask:typeof FC<"u"?function(e){return FC.resolve(null).then(e).catch(FB)}:Sv;function FB(e){setTimeout(function(){throw e})}function W0(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Pc(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Pc(t)}function ea(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zC(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Ao="__reactFiber$"+Ms,Dc="__reactProps$"+Ms,pi="__reactContainer$"+Ms,_v="__reactEvents$"+Ms,zB="__reactListeners$"+Ms,BB="__reactHandles$"+Ms;function Ja(e){var t=e[Ao];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[Ao]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zC(e);e!==null;){if(n=e[Ao])return n;e=zC(e)}return t}e=n,n=e.parentNode}return null}function qc(e){return e=e[Ao]||e[pi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ds(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(X(33))}function Bm(e){return e[Dc]||null}var Cv=[],ms=-1;function sa(e){return{current:e}}function dt(e){0>ms||(e.current=Cv[ms],Cv[ms]=null,ms--)}function ct(e,t){ms++,Cv[ms]=e.current,e.current=t}var aa={},Fn=sa(aa),sr=sa(!1),ol=aa;function Rs(e,t){var n=e.type.contextTypes;if(!n)return aa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ur(e){return e=e.childContextTypes,e!=null}function xm(){dt(sr),dt(Fn)}function BC(e,t,n){if(Fn.current!==aa)throw Error(X(168));ct(Fn,t),ct(sr,n)}function s5(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(X(108,C8(e)||"Unknown",o));return Rt({},n,r)}function wm(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||aa,ol=Fn.current,ct(Fn,e),ct(sr,sr.current),!0}function UC(e,t,n){var r=e.stateNode;if(!r)throw Error(X(169));n?(e=s5(e,t,ol),r.__reactInternalMemoizedMergedChildContext=e,dt(sr),dt(Fn),ct(Fn,e)):dt(sr),ct(sr,n)}var ai=null,Um=!1,q0=!1;function u5(e){ai===null?ai=[e]:ai.push(e)}function UB(e){Um=!0,u5(e)}function ua(){if(!q0&&ai!==null){q0=!0;var e=0,t=Ze;try{var n=ai;for(Ze=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ai=null,Um=!1}catch(o){throw ai!==null&&(ai=ai.slice(e+1)),ME(Zv,ua),o}finally{Ze=t,q0=!1}}return null}var hs=[],gs=0,km=null,Sm=0,jr=[],Hr=0,il=null,li=1,si="";function Xa(e,t){hs[gs++]=Sm,hs[gs++]=km,km=e,Sm=t}function c5(e,t,n){jr[Hr++]=li,jr[Hr++]=si,jr[Hr++]=il,il=e;var r=li;e=si;var o=32-po(r)-1;r&=~(1<<o),n+=1;var i=32-po(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,li=1<<32-po(t)+o|n<<o|r,si=i+e}else li=1<<i|n<<o|r,si=e}function ly(e){e.return!==null&&(Xa(e,1),c5(e,1,0))}function sy(e){for(;e===km;)km=hs[--gs],hs[gs]=null,Sm=hs[--gs],hs[gs]=null;for(;e===il;)il=jr[--Hr],jr[Hr]=null,si=jr[--Hr],jr[Hr]=null,li=jr[--Hr],jr[Hr]=null}var _r=null,Sr=null,yt=!1,co=null;function p5(e,t){var n=Wr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jC(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_r=e,Sr=ea(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_r=e,Sr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=il!==null?{id:li,overflow:si}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_r=e,Sr=null,!0):!1;default:return!1}}function Ev(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rv(e){if(yt){var t=Sr;if(t){var n=t;if(!jC(e,t)){if(Ev(e))throw Error(X(418));t=ea(n.nextSibling);var r=_r;t&&jC(e,t)?p5(r,n):(e.flags=e.flags&-4097|2,yt=!1,_r=e)}}else{if(Ev(e))throw Error(X(418));e.flags=e.flags&-4097|2,yt=!1,_r=e}}}function HC(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_r=e}function Yd(e){if(e!==_r)return!1;if(!yt)return HC(e),yt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kv(e.type,e.memoizedProps)),t&&(t=Sr)){if(Ev(e))throw f5(),Error(X(418));for(;t;)p5(e,t),t=ea(t.nextSibling)}if(HC(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Sr=ea(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Sr=null}}else Sr=_r?ea(e.stateNode.nextSibling):null;return!0}function f5(){for(var e=Sr;e;)e=ea(e.nextSibling)}function Ts(){Sr=_r=null,yt=!1}function uy(e){co===null?co=[e]:co.push(e)}var jB=mi.ReactCurrentBatchConfig;function sc(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(X(309));var r=n.stateNode}if(!r)throw Error(X(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(X(284));if(!n._owner)throw Error(X(290,e))}return e}function Xd(e,t){throw e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function WC(e){var t=e._init;return t(e._payload)}function d5(e){function t(y,x){if(e){var S=y.deletions;S===null?(y.deletions=[x],y.flags|=16):S.push(x)}}function n(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function r(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function o(y,x){return y=oa(y,x),y.index=0,y.sibling=null,y}function i(y,x,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<x?(y.flags|=2,x):S):(y.flags|=2,x)):(y.flags|=1048576,x)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,x,S,T){return x===null||x.tag!==6?(x=X0(S,y.mode,T),x.return=y,x):(x=o(x,S),x.return=y,x)}function c(y,x,S,T){var I=S.type;return I===us?f(y,x,S.props.children,T,S.key):x!==null&&(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vi&&WC(I)===x.type)?(T=o(x,S.props),T.ref=sc(y,x,S),T.return=y,T):(T=cm(S.type,S.key,S.props,null,y.mode,T),T.ref=sc(y,x,S),T.return=y,T)}function p(y,x,S,T){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Z0(S,y.mode,T),x.return=y,x):(x=o(x,S.children||[]),x.return=y,x)}function f(y,x,S,T,I){return x===null||x.tag!==7?(x=rl(S,y.mode,T,I),x.return=y,x):(x=o(x,S),x.return=y,x)}function m(y,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=X0(""+x,y.mode,S),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nd:return S=cm(x.type,x.key,x.props,null,y.mode,S),S.ref=sc(y,null,x),S.return=y,S;case ss:return x=Z0(x,y.mode,S),x.return=y,x;case Vi:var T=x._init;return m(y,T(x._payload),S)}if(dc(x)||oc(x))return x=rl(x,y.mode,S,null),x.return=y,x;Xd(y,x)}return null}function h(y,x,S,T){var I=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return I!==null?null:s(y,x,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nd:return S.key===I?c(y,x,S,T):null;case ss:return S.key===I?p(y,x,S,T):null;case Vi:return I=S._init,h(y,x,I(S._payload),T)}if(dc(S)||oc(S))return I!==null?null:f(y,x,S,T,null);Xd(y,S)}return null}function g(y,x,S,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return y=y.get(S)||null,s(x,y,""+T,I);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Nd:return y=y.get(T.key===null?S:T.key)||null,c(x,y,T,I);case ss:return y=y.get(T.key===null?S:T.key)||null,p(x,y,T,I);case Vi:var R=T._init;return g(y,x,S,R(T._payload),I)}if(dc(T)||oc(T))return y=y.get(S)||null,f(x,y,T,I,null);Xd(x,T)}return null}function v(y,x,S,T){for(var I=null,R=null,D=x,z=x=0,U=null;D!==null&&z<S.length;z++){D.index>z?(U=D,D=null):U=D.sibling;var A=h(y,D,S[z],T);if(A===null){D===null&&(D=U);break}e&&D&&A.alternate===null&&t(y,D),x=i(A,x,z),R===null?I=A:R.sibling=A,R=A,D=U}if(z===S.length)return n(y,D),yt&&Xa(y,z),I;if(D===null){for(;z<S.length;z++)D=m(y,S[z],T),D!==null&&(x=i(D,x,z),R===null?I=D:R.sibling=D,R=D);return yt&&Xa(y,z),I}for(D=r(y,D);z<S.length;z++)U=g(D,y,z,S[z],T),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?z:U.key),x=i(U,x,z),R===null?I=U:R.sibling=U,R=U);return e&&D.forEach(function(te){return t(y,te)}),yt&&Xa(y,z),I}function w(y,x,S,T){var I=oc(S);if(typeof I!="function")throw Error(X(150));if(S=I.call(S),S==null)throw Error(X(151));for(var R=I=null,D=x,z=x=0,U=null,A=S.next();D!==null&&!A.done;z++,A=S.next()){D.index>z?(U=D,D=null):U=D.sibling;var te=h(y,D,A.value,T);if(te===null){D===null&&(D=U);break}e&&D&&te.alternate===null&&t(y,D),x=i(te,x,z),R===null?I=te:R.sibling=te,R=te,D=U}if(A.done)return n(y,D),yt&&Xa(y,z),I;if(D===null){for(;!A.done;z++,A=S.next())A=m(y,A.value,T),A!==null&&(x=i(A,x,z),R===null?I=A:R.sibling=A,R=A);return yt&&Xa(y,z),I}for(D=r(y,D);!A.done;z++,A=S.next())A=g(D,y,z,A.value,T),A!==null&&(e&&A.alternate!==null&&D.delete(A.key===null?z:A.key),x=i(A,x,z),R===null?I=A:R.sibling=A,R=A);return e&&D.forEach(function(Z){return t(y,Z)}),yt&&Xa(y,z),I}function _(y,x,S,T){if(typeof S=="object"&&S!==null&&S.type===us&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Nd:e:{for(var I=S.key,R=x;R!==null;){if(R.key===I){if(I=S.type,I===us){if(R.tag===7){n(y,R.sibling),x=o(R,S.props.children),x.return=y,y=x;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vi&&WC(I)===R.type){n(y,R.sibling),x=o(R,S.props),x.ref=sc(y,R,S),x.return=y,y=x;break e}n(y,R);break}else t(y,R);R=R.sibling}S.type===us?(x=rl(S.props.children,y.mode,T,S.key),x.return=y,y=x):(T=cm(S.type,S.key,S.props,null,y.mode,T),T.ref=sc(y,x,S),T.return=y,y=T)}return a(y);case ss:e:{for(R=S.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(y,x.sibling),x=o(x,S.children||[]),x.return=y,y=x;break e}else{n(y,x);break}else t(y,x);x=x.sibling}x=Z0(S,y.mode,T),x.return=y,y=x}return a(y);case Vi:return R=S._init,_(y,x,R(S._payload),T)}if(dc(S))return v(y,x,S,T);if(oc(S))return w(y,x,S,T);Xd(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(y,x.sibling),x=o(x,S),x.return=y,y=x):(n(y,x),x=X0(S,y.mode,T),x.return=y,y=x),a(y)):n(y,x)}return _}var Os=d5(!0),m5=d5(!1),_m=sa(null),Cm=null,bs=null,cy=null;function py(){cy=bs=Cm=null}function fy(e){var t=_m.current;dt(_m),e._currentValue=t}function Tv(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _s(e,t){Cm=e,cy=bs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lr=!0),e.firstContext=null)}function Vr(e){var t=e._currentValue;if(cy!==e)if(e={context:e,memoizedValue:t,next:null},bs===null){if(Cm===null)throw Error(X(308));bs=e,Cm.dependencies={lanes:0,firstContext:e}}else bs=bs.next=e;return t}var el=null;function dy(e){el===null?el=[e]:el.push(e)}function h5(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,dy(t)):(n.next=o.next,o.next=n),t.interleaved=n,fi(e,r)}function fi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ki=!1;function my(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g5(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ui(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ta(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ve&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fi(e,n)}return o=r.interleaved,o===null?(t.next=t,dy(r)):(t.next=o.next,o.next=t),r.interleaved=t,fi(e,n)}function om(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jv(e,n)}}function qC(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Em(e,t,n,r){var o=e.updateQueue;Ki=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,p=c.next;c.next=null,a===null?i=p:a.next=p,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=p:s.next=p,f.lastBaseUpdate=c))}if(i!==null){var m=o.baseState;a=0,f=p=c=null,s=i;do{var h=s.lane,g=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(g,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,m,h):v,h==null)break e;m=Rt({},m,h);break e;case 2:Ki=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(p=f=g,c=m):f=f.next=g,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(c=m),o.baseState=c,o.firstBaseUpdate=p,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ll|=a,e.lanes=a,e.memoizedState=m}}function VC(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(X(191,o));o.call(r)}}}var Vc={},Mo=sa(Vc),Nc=sa(Vc),Fc=sa(Vc);function tl(e){if(e===Vc)throw Error(X(174));return e}function hy(e,t){switch(ct(Fc,t),ct(Nc,e),ct(Mo,Vc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sv(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sv(t,e)}dt(Mo),ct(Mo,t)}function Ps(){dt(Mo),dt(Nc),dt(Fc)}function b5(e){tl(Fc.current);var t=tl(Mo.current),n=sv(t,e.type);t!==n&&(ct(Nc,e),ct(Mo,n))}function gy(e){Nc.current===e&&(dt(Mo),dt(Nc))}var Ct=sa(0);function Rm(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var V0=[];function by(){for(var e=0;e<V0.length;e++)V0[e]._workInProgressVersionPrimary=null;V0.length=0}var im=mi.ReactCurrentDispatcher,K0=mi.ReactCurrentBatchConfig,al=0,Et=null,en=null,fn=null,Tm=!1,wc=!1,zc=0,HB=0;function Mn(){throw Error(X(321))}function vy(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mo(e[n],t[n]))return!1;return!0}function yy(e,t,n,r,o,i){if(al=i,Et=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,im.current=e===null||e.memoizedState===null?KB:$B,e=n(r,o),wc){i=0;do{if(wc=!1,zc=0,25<=i)throw Error(X(301));i+=1,fn=en=null,t.updateQueue=null,im.current=GB,e=n(r,o)}while(wc)}if(im.current=Om,t=en!==null&&en.next!==null,al=0,fn=en=Et=null,Tm=!1,t)throw Error(X(300));return e}function xy(){var e=zc!==0;return zc=0,e}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Et.memoizedState=fn=e:fn=fn.next=e,fn}function Kr(){if(en===null){var e=Et.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var t=fn===null?Et.memoizedState:fn.next;if(t!==null)fn=t,en=e;else{if(e===null)throw Error(X(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},fn===null?Et.memoizedState=fn=e:fn=fn.next=e}return fn}function Bc(e,t){return typeof t=="function"?t(e):t}function $0(e){var t=Kr(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var r=en,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,c=null,p=i;do{var f=p.lane;if((al&f)===f)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var m={lane:f,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(s=c=m,a=r):c=c.next=m,Et.lanes|=f,ll|=f}p=p.next}while(p!==null&&p!==i);c===null?a=r:c.next=s,mo(r,t.memoizedState)||(lr=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Et.lanes|=i,ll|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function G0(e){var t=Kr(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);mo(i,t.memoizedState)||(lr=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function v5(){}function y5(e,t){var n=Et,r=Kr(),o=t(),i=!mo(r.memoizedState,o);if(i&&(r.memoizedState=o,lr=!0),r=r.queue,wy(k5.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fn!==null&&fn.memoizedState.tag&1){if(n.flags|=2048,Uc(9,w5.bind(null,n,r,o,t),void 0,null),dn===null)throw Error(X(349));al&30||x5(n,t,o)}return o}function x5(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Et.updateQueue,t===null?(t={lastEffect:null,stores:null},Et.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w5(e,t,n,r){t.value=n,t.getSnapshot=r,S5(t)&&_5(e)}function k5(e,t,n){return n(function(){S5(t)&&_5(e)})}function S5(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mo(e,n)}catch{return!0}}function _5(e){var t=fi(e,1);t!==null&&fo(t,e,1,-1)}function KC(e){var t=Io();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:e},t.queue=e,e=e.dispatch=VB.bind(null,Et,e),[t.memoizedState,e]}function Uc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Et.updateQueue,t===null?(t={lastEffect:null,stores:null},Et.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function C5(){return Kr().memoizedState}function am(e,t,n,r){var o=Io();Et.flags|=e,o.memoizedState=Uc(1|t,n,void 0,r===void 0?null:r)}function jm(e,t,n,r){var o=Kr();r=r===void 0?null:r;var i=void 0;if(en!==null){var a=en.memoizedState;if(i=a.destroy,r!==null&&vy(r,a.deps)){o.memoizedState=Uc(t,n,i,r);return}}Et.flags|=e,o.memoizedState=Uc(1|t,n,i,r)}function $C(e,t){return am(8390656,8,e,t)}function wy(e,t){return jm(2048,8,e,t)}function E5(e,t){return jm(4,2,e,t)}function R5(e,t){return jm(4,4,e,t)}function T5(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function O5(e,t,n){return n=n!=null?n.concat([e]):null,jm(4,4,T5.bind(null,t,e),n)}function ky(){}function P5(e,t){var n=Kr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vy(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function I5(e,t){var n=Kr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vy(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function A5(e,t,n){return al&21?(mo(n,t)||(n=FE(),Et.lanes|=n,ll|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lr=!0),e.memoizedState=n)}function WB(e,t){var n=Ze;Ze=n!==0&&4>n?n:4,e(!0);var r=K0.transition;K0.transition={};try{e(!1),t()}finally{Ze=n,K0.transition=r}}function L5(){return Kr().memoizedState}function qB(e,t,n){var r=ra(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},M5(e))D5(t,n);else if(n=h5(e,t,n,r),n!==null){var o=Qn();fo(n,e,r,o),N5(n,t,r)}}function VB(e,t,n){var r=ra(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(M5(e))D5(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,mo(s,a)){var c=t.interleaved;c===null?(o.next=o,dy(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=h5(e,t,o,r),n!==null&&(o=Qn(),fo(n,e,r,o),N5(n,t,r))}}function M5(e){var t=e.alternate;return e===Et||t!==null&&t===Et}function D5(e,t){wc=Tm=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function N5(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jv(e,n)}}var Om={readContext:Vr,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},KB={readContext:Vr,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:Vr,useEffect:$C,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,am(4194308,4,T5.bind(null,t,e),n)},useLayoutEffect:function(e,t){return am(4194308,4,e,t)},useInsertionEffect:function(e,t){return am(4,2,e,t)},useMemo:function(e,t){var n=Io();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Io();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qB.bind(null,Et,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:KC,useDebugValue:ky,useDeferredValue:function(e){return Io().memoizedState=e},useTransition:function(){var e=KC(!1),t=e[0];return e=WB.bind(null,e[1]),Io().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Et,o=Io();if(yt){if(n===void 0)throw Error(X(407));n=n()}else{if(n=t(),dn===null)throw Error(X(349));al&30||x5(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,$C(k5.bind(null,r,i,e),[e]),r.flags|=2048,Uc(9,w5.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Io(),t=dn.identifierPrefix;if(yt){var n=si,r=li;n=(r&~(1<<32-po(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=HB++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$B={readContext:Vr,useCallback:P5,useContext:Vr,useEffect:wy,useImperativeHandle:O5,useInsertionEffect:E5,useLayoutEffect:R5,useMemo:I5,useReducer:$0,useRef:C5,useState:function(){return $0(Bc)},useDebugValue:ky,useDeferredValue:function(e){var t=Kr();return A5(t,en.memoizedState,e)},useTransition:function(){var e=$0(Bc)[0],t=Kr().memoizedState;return[e,t]},useMutableSource:v5,useSyncExternalStore:y5,useId:L5,unstable_isNewReconciler:!1},GB={readContext:Vr,useCallback:P5,useContext:Vr,useEffect:wy,useImperativeHandle:O5,useInsertionEffect:E5,useLayoutEffect:R5,useMemo:I5,useReducer:G0,useRef:C5,useState:function(){return G0(Bc)},useDebugValue:ky,useDeferredValue:function(e){var t=Kr();return en===null?t.memoizedState=e:A5(t,en.memoizedState,e)},useTransition:function(){var e=G0(Bc)[0],t=Kr().memoizedState;return[e,t]},useMutableSource:v5,useSyncExternalStore:y5,useId:L5,unstable_isNewReconciler:!1};function so(e,t){if(e&&e.defaultProps){t=Rt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ov(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hm={isMounted:function(e){return(e=e._reactInternals)?cl(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qn(),o=ra(e),i=ui(r,o);i.payload=t,n!=null&&(i.callback=n),t=ta(e,i,o),t!==null&&(fo(t,e,o,r),om(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qn(),o=ra(e),i=ui(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ta(e,i,o),t!==null&&(fo(t,e,o,r),om(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qn(),r=ra(e),o=ui(n,r);o.tag=2,t!=null&&(o.callback=t),t=ta(e,o,r),t!==null&&(fo(t,e,r,n),om(t,e,r))}};function GC(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ac(n,r)||!Ac(o,i):!0}function F5(e,t,n){var r=!1,o=aa,i=t.contextType;return typeof i=="object"&&i!==null?i=Vr(i):(o=ur(t)?ol:Fn.current,r=t.contextTypes,i=(r=r!=null)?Rs(e,o):aa),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hm,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function QC(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hm.enqueueReplaceState(t,t.state,null)}function Pv(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},my(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Vr(i):(i=ur(t)?ol:Fn.current,o.context=Rs(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ov(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Hm.enqueueReplaceState(o,o.state,null),Em(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Is(e,t){try{var n="",r=t;do n+=_8(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Q0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Iv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QB=typeof WeakMap=="function"?WeakMap:Map;function z5(e,t,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Im||(Im=!0,jv=r),Iv(e,t)},n}function B5(e,t,n){n=ui(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Iv(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Iv(e,t),typeof r!="function"&&(na===null?na=new Set([this]):na.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function YC(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QB;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=u9.bind(null,e,t,n),t.then(e,e))}function XC(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ZC(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ui(-1,1),t.tag=2,ta(n,t,1))),n.lanes|=1),e)}var YB=mi.ReactCurrentOwner,lr=!1;function Gn(e,t,n,r){t.child=e===null?m5(t,null,n,r):Os(t,e.child,n,r)}function JC(e,t,n,r,o){n=n.render;var i=t.ref;return _s(t,o),r=yy(e,t,n,r,i,o),n=xy(),e!==null&&!lr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,di(e,t,o)):(yt&&n&&ly(t),t.flags|=1,Gn(e,t,r,o),t.child)}function eE(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Py(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,U5(e,t,i,r,o)):(e=cm(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ac,n(a,r)&&e.ref===t.ref)return di(e,t,o)}return t.flags|=1,e=oa(i,r),e.ref=t.ref,e.return=t,t.child=e}function U5(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ac(i,r)&&e.ref===t.ref)if(lr=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(lr=!0);else return t.lanes=e.lanes,di(e,t,o)}return Av(e,t,n,r,o)}function j5(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ys,kr),kr|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ct(ys,kr),kr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ct(ys,kr),kr|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ct(ys,kr),kr|=r;return Gn(e,t,o,n),t.child}function H5(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Av(e,t,n,r,o){var i=ur(n)?ol:Fn.current;return i=Rs(t,i),_s(t,o),n=yy(e,t,n,r,i,o),r=xy(),e!==null&&!lr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,di(e,t,o)):(yt&&r&&ly(t),t.flags|=1,Gn(e,t,n,o),t.child)}function tE(e,t,n,r,o){if(ur(n)){var i=!0;wm(t)}else i=!1;if(_s(t,o),t.stateNode===null)lm(e,t),F5(t,n,r),Pv(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,p=n.contextType;typeof p=="object"&&p!==null?p=Vr(p):(p=ur(n)?ol:Fn.current,p=Rs(t,p));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==p)&&QC(t,a,r,p),Ki=!1;var h=t.memoizedState;a.state=h,Em(t,r,a,o),c=t.memoizedState,s!==r||h!==c||sr.current||Ki?(typeof f=="function"&&(Ov(t,n,f,r),c=t.memoizedState),(s=Ki||GC(t,n,s,r,h,c,p))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=p,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,g5(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:so(t.type,s),a.props=p,m=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Vr(c):(c=ur(n)?ol:Fn.current,c=Rs(t,c));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||h!==c)&&QC(t,a,r,c),Ki=!1,h=t.memoizedState,a.state=h,Em(t,r,a,o);var v=t.memoizedState;s!==m||h!==v||sr.current||Ki?(typeof g=="function"&&(Ov(t,n,g,r),v=t.memoizedState),(p=Ki||GC(t,n,p,r,h,v,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=p):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Lv(e,t,n,r,i,o)}function Lv(e,t,n,r,o,i){H5(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&UC(t,n,!1),di(e,t,i);r=t.stateNode,YB.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Os(t,e.child,null,i),t.child=Os(t,null,s,i)):Gn(e,t,s,i),t.memoizedState=r.state,o&&UC(t,n,!0),t.child}function W5(e){var t=e.stateNode;t.pendingContext?BC(e,t.pendingContext,t.pendingContext!==t.context):t.context&&BC(e,t.context,!1),hy(e,t.containerInfo)}function nE(e,t,n,r,o){return Ts(),uy(o),t.flags|=256,Gn(e,t,n,r),t.child}var Mv={dehydrated:null,treeContext:null,retryLane:0};function Dv(e){return{baseLanes:e,cachePool:null,transitions:null}}function q5(e,t,n){var r=t.pendingProps,o=Ct.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ct(Ct,o&1),e===null)return Rv(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Vm(a,r,0,null),e=rl(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Dv(n),t.memoizedState=Mv,e):Sy(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return XB(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=oa(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=oa(s,i):(i=rl(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Dv(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Mv,r}return i=e.child,e=i.sibling,r=oa(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sy(e,t){return t=Vm({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zd(e,t,n,r){return r!==null&&uy(r),Os(t,e.child,null,n),e=Sy(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function XB(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Q0(Error(X(422))),Zd(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Vm({mode:"visible",children:r.children},o,0,null),i=rl(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Os(t,e.child,null,a),t.child.memoizedState=Dv(a),t.memoizedState=Mv,i);if(!(t.mode&1))return Zd(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(X(419)),r=Q0(i,r,void 0),Zd(e,t,a,r)}if(s=(a&e.childLanes)!==0,lr||s){if(r=dn,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fi(e,o),fo(r,e,o,-1))}return Oy(),r=Q0(Error(X(421))),Zd(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=c9.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Sr=ea(o.nextSibling),_r=t,yt=!0,co=null,e!==null&&(jr[Hr++]=li,jr[Hr++]=si,jr[Hr++]=il,li=e.id,si=e.overflow,il=t),t=Sy(t,r.children),t.flags|=4096,t)}function rE(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tv(e.return,t,n)}function Y0(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function V5(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Gn(e,t,r.children,n),r=Ct.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rE(e,n,t);else if(e.tag===19)rE(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ct(Ct,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Rm(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Y0(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Rm(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Y0(t,!0,n,null,i);break;case"together":Y0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lm(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function di(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ll|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,n=oa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ZB(e,t,n){switch(t.tag){case 3:W5(t),Ts();break;case 5:b5(t);break;case 1:ur(t.type)&&wm(t);break;case 4:hy(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ct(_m,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ct(Ct,Ct.current&1),t.flags|=128,null):n&t.child.childLanes?q5(e,t,n):(ct(Ct,Ct.current&1),e=di(e,t,n),e!==null?e.sibling:null);ct(Ct,Ct.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return V5(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ct(Ct,Ct.current),r)break;return null;case 22:case 23:return t.lanes=0,j5(e,t,n)}return di(e,t,n)}var K5,Nv,$5,G5;K5=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nv=function(){};$5=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tl(Mo.current);var i=null;switch(n){case"input":o=ov(e,o),r=ov(e,r),i=[];break;case"select":o=Rt({},o,{value:void 0}),r=Rt({},r,{value:void 0}),i=[];break;case"textarea":o=lv(e,o),r=lv(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ym)}uv(n,r);var a;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var s=o[p];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Cc.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var c=r[p];if(s=o?.[p],r.hasOwnProperty(p)&&c!==s&&(c!=null||s!=null))if(p==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Cc.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&ft("scroll",e),i||s===c||(i=[])):(i=i||[]).push(p,c))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};G5=function(e,t,n,r){n!==r&&(t.flags|=4)};function uc(e,t){if(!yt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Dn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function JB(e,t,n){var r=t.pendingProps;switch(sy(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(t),null;case 1:return ur(t.type)&&xm(),Dn(t),null;case 3:return r=t.stateNode,Ps(),dt(sr),dt(Fn),by(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yd(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,co!==null&&(qv(co),co=null))),Nv(e,t),Dn(t),null;case 5:gy(t);var o=tl(Fc.current);if(n=t.type,e!==null&&t.stateNode!=null)$5(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(X(166));return Dn(t),null}if(e=tl(Mo.current),Yd(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ao]=t,r[Dc]=i,e=(t.mode&1)!==0,n){case"dialog":ft("cancel",r),ft("close",r);break;case"iframe":case"object":case"embed":ft("load",r);break;case"video":case"audio":for(o=0;o<hc.length;o++)ft(hc[o],r);break;case"source":ft("error",r);break;case"img":case"image":case"link":ft("error",r),ft("load",r);break;case"details":ft("toggle",r);break;case"input":pC(r,i),ft("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ft("invalid",r);break;case"textarea":dC(r,i),ft("invalid",r)}uv(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Qd(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Qd(r.textContent,s,e),o=["children",""+s]):Cc.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ft("scroll",r)}switch(n){case"input":Fd(r),fC(r,i,!0);break;case"textarea":Fd(r),mC(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ym)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ao]=t,e[Dc]=r,K5(e,t,!1,!1),t.stateNode=e;e:{switch(a=cv(n,r),n){case"dialog":ft("cancel",e),ft("close",e),o=r;break;case"iframe":case"object":case"embed":ft("load",e),o=r;break;case"video":case"audio":for(o=0;o<hc.length;o++)ft(hc[o],e);o=r;break;case"source":ft("error",e),o=r;break;case"img":case"image":case"link":ft("error",e),ft("load",e),o=r;break;case"details":ft("toggle",e),o=r;break;case"input":pC(e,r),o=ov(e,r),ft("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Rt({},r,{value:void 0}),ft("invalid",e);break;case"textarea":dC(e,r),o=lv(e,r),ft("invalid",e);break;default:o=r}uv(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?CE(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&SE(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ec(e,c):typeof c=="number"&&Ec(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Cc.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ft("scroll",e):c!=null&&$v(e,i,c,a))}switch(n){case"input":Fd(e),fC(e,r,!1);break;case"textarea":Fd(e),mC(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ia(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xs(e,!!r.multiple,i,!1):r.defaultValue!=null&&xs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ym)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Dn(t),null;case 6:if(e&&t.stateNode!=null)G5(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(X(166));if(n=tl(Fc.current),tl(Mo.current),Yd(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ao]=t,(i=r.nodeValue!==n)&&(e=_r,e!==null))switch(e.tag){case 3:Qd(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qd(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ao]=t,t.stateNode=r}return Dn(t),null;case 13:if(dt(Ct),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(yt&&Sr!==null&&t.mode&1&&!(t.flags&128))f5(),Ts(),t.flags|=98560,i=!1;else if(i=Yd(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(X(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(X(317));i[Ao]=t}else Ts(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Dn(t),i=!1}else co!==null&&(qv(co),co=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ct.current&1?tn===0&&(tn=3):Oy())),t.updateQueue!==null&&(t.flags|=4),Dn(t),null);case 4:return Ps(),Nv(e,t),e===null&&Lc(t.stateNode.containerInfo),Dn(t),null;case 10:return fy(t.type._context),Dn(t),null;case 17:return ur(t.type)&&xm(),Dn(t),null;case 19:if(dt(Ct),i=t.memoizedState,i===null)return Dn(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)uc(i,!1);else{if(tn!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Rm(e),a!==null){for(t.flags|=128,uc(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ct(Ct,Ct.current&1|2),t.child}e=e.sibling}i.tail!==null&&Wt()>As&&(t.flags|=128,r=!0,uc(i,!1),t.lanes=4194304)}else{if(!r)if(e=Rm(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!yt)return Dn(t),null}else 2*Wt()-i.renderingStartTime>As&&n!==1073741824&&(t.flags|=128,r=!0,uc(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Wt(),t.sibling=null,n=Ct.current,ct(Ct,r?n&1|2:n&1),t):(Dn(t),null);case 22:case 23:return Ty(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kr&1073741824&&(Dn(t),t.subtreeFlags&6&&(t.flags|=8192)):Dn(t),null;case 24:return null;case 25:return null}throw Error(X(156,t.tag))}function e9(e,t){switch(sy(t),t.tag){case 1:return ur(t.type)&&xm(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ps(),dt(sr),dt(Fn),by(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gy(t),null;case 13:if(dt(Ct),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Ts()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return dt(Ct),null;case 4:return Ps(),null;case 10:return fy(t.type._context),null;case 22:case 23:return Ty(),null;case 24:return null;default:return null}}var Jd=!1,Nn=!1,t9=typeof WeakSet=="function"?WeakSet:Set,le=null;function vs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Mt(e,t,r)}else n.current=null}function Fv(e,t,n){try{n()}catch(r){Mt(e,t,r)}}var oE=!1;function n9(e,t){if(xv=gm,e=JE(),ay(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,p=0,f=0,m=e,h=null;t:for(;;){for(var g;m!==n||o!==0&&m.nodeType!==3||(s=a+o),m!==i||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break t;if(h===n&&++p===o&&(s=a),h===i&&++f===r&&(c=a),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wv={focusedElem:e,selectionRange:n},gm=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:so(t.type,w),_);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(T){Mt(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return v=oE,oE=!1,v}function kc(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fv(t,n,i)}o=o.next}while(o!==r)}}function Wm(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zv(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Q5(e){var t=e.alternate;t!==null&&(e.alternate=null,Q5(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ao],delete t[Dc],delete t[_v],delete t[zB],delete t[BB])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Y5(e){return e.tag===5||e.tag===3||e.tag===4}function iE(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Y5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ym));else if(r!==4&&(e=e.child,e!==null))for(Bv(e,t,n),e=e.sibling;e!==null;)Bv(e,t,n),e=e.sibling}function Uv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uv(e,t,n),e=e.sibling;e!==null;)Uv(e,t,n),e=e.sibling}var Cn=null,uo=!1;function qi(e,t,n){for(n=n.child;n!==null;)X5(e,t,n),n=n.sibling}function X5(e,t,n){if(Lo&&typeof Lo.onCommitFiberUnmount=="function")try{Lo.onCommitFiberUnmount(Dm,n)}catch{}switch(n.tag){case 5:Nn||vs(n,t);case 6:var r=Cn,o=uo;Cn=null,qi(e,t,n),Cn=r,uo=o,Cn!==null&&(uo?(e=Cn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Cn.removeChild(n.stateNode));break;case 18:Cn!==null&&(uo?(e=Cn,n=n.stateNode,e.nodeType===8?W0(e.parentNode,n):e.nodeType===1&&W0(e,n),Pc(e)):W0(Cn,n.stateNode));break;case 4:r=Cn,o=uo,Cn=n.stateNode.containerInfo,uo=!0,qi(e,t,n),Cn=r,uo=o;break;case 0:case 11:case 14:case 15:if(!Nn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Fv(n,t,a),o=o.next}while(o!==r)}qi(e,t,n);break;case 1:if(!Nn&&(vs(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Mt(n,t,s)}qi(e,t,n);break;case 21:qi(e,t,n);break;case 22:n.mode&1?(Nn=(r=Nn)||n.memoizedState!==null,qi(e,t,n),Nn=r):qi(e,t,n);break;default:qi(e,t,n)}}function aE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t9),t.forEach(function(r){var o=p9.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lo(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Cn=s.stateNode,uo=!1;break e;case 3:Cn=s.stateNode.containerInfo,uo=!0;break e;case 4:Cn=s.stateNode.containerInfo,uo=!0;break e}s=s.return}if(Cn===null)throw Error(X(160));X5(i,a,o),Cn=null,uo=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(p){Mt(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Z5(t,e),t=t.sibling}function Z5(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lo(t,e),Po(e),r&4){try{kc(3,e,e.return),Wm(3,e)}catch(w){Mt(e,e.return,w)}try{kc(5,e,e.return)}catch(w){Mt(e,e.return,w)}}break;case 1:lo(t,e),Po(e),r&512&&n!==null&&vs(n,n.return);break;case 5:if(lo(t,e),Po(e),r&512&&n!==null&&vs(n,n.return),e.flags&32){var o=e.stateNode;try{Ec(o,"")}catch(w){Mt(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&xE(o,i),cv(s,a);var p=cv(s,i);for(a=0;a<c.length;a+=2){var f=c[a],m=c[a+1];f==="style"?CE(o,m):f==="dangerouslySetInnerHTML"?SE(o,m):f==="children"?Ec(o,m):$v(o,f,m,p)}switch(s){case"input":iv(o,i);break;case"textarea":wE(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?xs(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?xs(o,!!i.multiple,i.defaultValue,!0):xs(o,!!i.multiple,i.multiple?[]:"",!1))}o[Dc]=i}catch(w){Mt(e,e.return,w)}}break;case 6:if(lo(t,e),Po(e),r&4){if(e.stateNode===null)throw Error(X(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Mt(e,e.return,w)}}break;case 3:if(lo(t,e),Po(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pc(t.containerInfo)}catch(w){Mt(e,e.return,w)}break;case 4:lo(t,e),Po(e);break;case 13:lo(t,e),Po(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ey=Wt())),r&4&&aE(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Nn=(p=Nn)||f,lo(t,e),Nn=p):lo(t,e),Po(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!f&&e.mode&1)for(le=e,f=e.child;f!==null;){for(m=le=f;le!==null;){switch(h=le,g=h.child,h.tag){case 0:case 11:case 14:case 15:kc(4,h,h.return);break;case 1:vs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Mt(r,n,w)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){sE(m);continue}}g!==null?(g.return=h,le=g):sE(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,p?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=_E("display",a))}catch(w){Mt(e,e.return,w)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=p?"":m.memoizedProps}catch(w){Mt(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:lo(t,e),Po(e),r&4&&aE(e);break;case 21:break;default:lo(t,e),Po(e)}}function Po(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Y5(n)){var r=n;break e}n=n.return}throw Error(X(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ec(o,""),r.flags&=-33);var i=iE(e);Uv(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=iE(e);Bv(e,s,a);break;default:throw Error(X(161))}}catch(c){Mt(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r9(e,t,n){le=e,J5(e,t,n)}function J5(e,t,n){for(var r=(e.mode&1)!==0;le!==null;){var o=le,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Jd;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Nn;s=Jd;var p=Nn;if(Jd=a,(Nn=c)&&!p)for(le=o;le!==null;)a=le,c=a.child,a.tag===22&&a.memoizedState!==null?uE(o):c!==null?(c.return=a,le=c):uE(o);for(;i!==null;)le=i,J5(i,t,n),i=i.sibling;le=o,Jd=s,Nn=p}lE(e,t,n)}else o.subtreeFlags&8772&&i!==null?(i.return=o,le=i):lE(e,t,n)}}function lE(e){for(;le!==null;){var t=le;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Nn||Wm(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Nn)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:so(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&VC(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}VC(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var f=p.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Pc(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}Nn||t.flags&512&&zv(t)}catch(h){Mt(t,t.return,h)}}if(t===e){le=null;break}if(n=t.sibling,n!==null){n.return=t.return,le=n;break}le=t.return}}function sE(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var n=t.sibling;if(n!==null){n.return=t.return,le=n;break}le=t.return}}function uE(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wm(4,t)}catch(c){Mt(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Mt(t,o,c)}}var i=t.return;try{zv(t)}catch(c){Mt(t,i,c)}break;case 5:var a=t.return;try{zv(t)}catch(c){Mt(t,a,c)}}}catch(c){Mt(t,t.return,c)}if(t===e){le=null;break}var s=t.sibling;if(s!==null){s.return=t.return,le=s;break}le=t.return}}var o9=Math.ceil,Pm=mi.ReactCurrentDispatcher,_y=mi.ReactCurrentOwner,qr=mi.ReactCurrentBatchConfig,Ve=0,dn=null,Qt=null,En=0,kr=0,ys=sa(0),tn=0,jc=null,ll=0,qm=0,Cy=0,Sc=null,ar=null,Ey=0,As=1/0,ii=null,Im=!1,jv=null,na=null,em=!1,Yi=null,Am=0,_c=0,Hv=null,sm=-1,um=0;function Qn(){return Ve&6?Wt():sm!==-1?sm:sm=Wt()}function ra(e){return e.mode&1?Ve&2&&En!==0?En&-En:jB.transition!==null?(um===0&&(um=FE()),um):(e=Ze,e!==0||(e=window.event,e=e===void 0?16:qE(e.type)),e):1}function fo(e,t,n,r){if(50<_c)throw _c=0,Hv=null,Error(X(185));Hc(e,n,r),(!(Ve&2)||e!==dn)&&(e===dn&&(!(Ve&2)&&(qm|=n),tn===4&&Gi(e,En)),cr(e,r),n===1&&Ve===0&&!(t.mode&1)&&(As=Wt()+500,Um&&ua()))}function cr(e,t){var n=e.callbackNode;W8(e,t);var r=hm(e,e===dn?En:0);if(r===0)n!==null&&bC(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bC(n),t===1)e.tag===0?UB(cE.bind(null,e)):u5(cE.bind(null,e)),NB(function(){!(Ve&6)&&ua()}),n=null;else{switch(zE(r)){case 1:n=Zv;break;case 4:n=DE;break;case 16:n=mm;break;case 536870912:n=NE;break;default:n=mm}n=lR(n,eR.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eR(e,t){if(sm=-1,um=0,Ve&6)throw Error(X(327));var n=e.callbackNode;if(Cs()&&e.callbackNode!==n)return null;var r=hm(e,e===dn?En:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Lm(e,r);else{t=r;var o=Ve;Ve|=2;var i=nR();(dn!==e||En!==t)&&(ii=null,As=Wt()+500,nl(e,t));do try{l9();break}catch(s){tR(e,s)}while(!0);py(),Pm.current=i,Ve=o,Qt!==null?t=0:(dn=null,En=0,t=tn)}if(t!==0){if(t===2&&(o=hv(e),o!==0&&(r=o,t=Wv(e,o))),t===1)throw n=jc,nl(e,0),Gi(e,r),cr(e,Wt()),n;if(t===6)Gi(e,r);else{if(o=e.current.alternate,!(r&30)&&!i9(o)&&(t=Lm(e,r),t===2&&(i=hv(e),i!==0&&(r=i,t=Wv(e,i))),t===1))throw n=jc,nl(e,0),Gi(e,r),cr(e,Wt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(X(345));case 2:Za(e,ar,ii);break;case 3:if(Gi(e,r),(r&130023424)===r&&(t=Ey+500-Wt(),10<t)){if(hm(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qn(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sv(Za.bind(null,e,ar,ii),t);break}Za(e,ar,ii);break;case 4:if(Gi(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-po(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Wt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*o9(r/1960))-r,10<r){e.timeoutHandle=Sv(Za.bind(null,e,ar,ii),r);break}Za(e,ar,ii);break;case 5:Za(e,ar,ii);break;default:throw Error(X(329))}}}return cr(e,Wt()),e.callbackNode===n?eR.bind(null,e):null}function Wv(e,t){var n=Sc;return e.current.memoizedState.isDehydrated&&(nl(e,t).flags|=256),e=Lm(e,t),e!==2&&(t=ar,ar=n,t!==null&&qv(t)),e}function qv(e){ar===null?ar=e:ar.push.apply(ar,e)}function i9(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mo(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gi(e,t){for(t&=~Cy,t&=~qm,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-po(t),r=1<<n;e[n]=-1,t&=~r}}function cE(e){if(Ve&6)throw Error(X(327));Cs();var t=hm(e,0);if(!(t&1))return cr(e,Wt()),null;var n=Lm(e,t);if(e.tag!==0&&n===2){var r=hv(e);r!==0&&(t=r,n=Wv(e,r))}if(n===1)throw n=jc,nl(e,0),Gi(e,t),cr(e,Wt()),n;if(n===6)throw Error(X(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Za(e,ar,ii),cr(e,Wt()),null}function Ry(e,t){var n=Ve;Ve|=1;try{return e(t)}finally{Ve=n,Ve===0&&(As=Wt()+500,Um&&ua())}}function sl(e){Yi!==null&&Yi.tag===0&&!(Ve&6)&&Cs();var t=Ve;Ve|=1;var n=qr.transition,r=Ze;try{if(qr.transition=null,Ze=1,e)return e()}finally{Ze=r,qr.transition=n,Ve=t,!(Ve&6)&&ua()}}function Ty(){kr=ys.current,dt(ys)}function nl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,DB(n)),Qt!==null)for(n=Qt.return;n!==null;){var r=n;switch(sy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xm();break;case 3:Ps(),dt(sr),dt(Fn),by();break;case 5:gy(r);break;case 4:Ps();break;case 13:dt(Ct);break;case 19:dt(Ct);break;case 10:fy(r.type._context);break;case 22:case 23:Ty()}n=n.return}if(dn=e,Qt=e=oa(e.current,null),En=kr=t,tn=0,jc=null,Cy=qm=ll=0,ar=Sc=null,el!==null){for(t=0;t<el.length;t++)if(n=el[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}el=null}return e}function tR(e,t){do{var n=Qt;try{if(py(),im.current=Om,Tm){for(var r=Et.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Tm=!1}if(al=0,fn=en=Et=null,wc=!1,zc=0,_y.current=null,n===null||n.return===null){tn=1,jc=t,Qt=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=En,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,f=s,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=XC(a);if(g!==null){g.flags&=-257,ZC(g,a,s,i,t),g.mode&1&&YC(i,p,t),t=g,c=p;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){YC(i,p,t),Oy();break e}c=Error(X(426))}}else if(yt&&s.mode&1){var _=XC(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ZC(_,a,s,i,t),uy(Is(c,s));break e}}i=c=Is(c,s),tn!==4&&(tn=2),Sc===null?Sc=[i]:Sc.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=z5(i,c,t);qC(i,y);break e;case 1:s=c;var x=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(na===null||!na.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var T=B5(i,s,t);qC(i,T);break e}}i=i.return}while(i!==null)}oR(n)}catch(I){t=I,Qt===n&&n!==null&&(Qt=n=n.return);continue}break}while(!0)}function nR(){var e=Pm.current;return Pm.current=Om,e===null?Om:e}function Oy(){(tn===0||tn===3||tn===2)&&(tn=4),dn===null||!(ll&268435455)&&!(qm&268435455)||Gi(dn,En)}function Lm(e,t){var n=Ve;Ve|=2;var r=nR();(dn!==e||En!==t)&&(ii=null,nl(e,t));do try{a9();break}catch(o){tR(e,o)}while(!0);if(py(),Ve=n,Pm.current=r,Qt!==null)throw Error(X(261));return dn=null,En=0,tn}function a9(){for(;Qt!==null;)rR(Qt)}function l9(){for(;Qt!==null&&!M8();)rR(Qt)}function rR(e){var t=aR(e.alternate,e,kr);e.memoizedProps=e.pendingProps,t===null?oR(e):Qt=t,_y.current=null}function oR(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e9(n,t),n!==null){n.flags&=32767,Qt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tn=6,Qt=null;return}}else if(n=JB(n,t,kr),n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);tn===0&&(tn=5)}function Za(e,t,n){var r=Ze,o=qr.transition;try{qr.transition=null,Ze=1,s9(e,t,n,r)}finally{qr.transition=o,Ze=r}return null}function s9(e,t,n,r){do Cs();while(Yi!==null);if(Ve&6)throw Error(X(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(X(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(q8(e,i),e===dn&&(Qt=dn=null,En=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||em||(em=!0,lR(mm,function(){return Cs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qr.transition,qr.transition=null;var a=Ze;Ze=1;var s=Ve;Ve|=4,_y.current=null,n9(e,n),Z5(n,e),PB(wv),gm=!!xv,wv=xv=null,e.current=n,r9(n,e,o),D8(),Ve=s,Ze=a,qr.transition=i}else e.current=n;if(em&&(em=!1,Yi=e,Am=o),i=e.pendingLanes,i===0&&(na=null),z8(n.stateNode,r),cr(e,Wt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Im)throw Im=!1,e=jv,jv=null,e;return Am&1&&e.tag!==0&&Cs(),i=e.pendingLanes,i&1?e===Hv?_c++:(_c=0,Hv=e):_c=0,ua(),null}function Cs(){if(Yi!==null){var e=zE(Am),t=qr.transition,n=Ze;try{if(qr.transition=null,Ze=16>e?16:e,Yi===null)var r=!1;else{if(e=Yi,Yi=null,Am=0,Ve&6)throw Error(X(331));var o=Ve;for(Ve|=4,le=e.current;le!==null;){var i=le,a=i.child;if(le.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var p=s[c];for(le=p;le!==null;){var f=le;switch(f.tag){case 0:case 11:case 15:kc(8,f,i)}var m=f.child;if(m!==null)m.return=f,le=m;else for(;le!==null;){f=le;var h=f.sibling,g=f.return;if(Q5(f),f===p){le=null;break}if(h!==null){h.return=g,le=h;break}le=g}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}le=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,le=a;else e:for(;le!==null;){if(i=le,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kc(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,le=y;break e}le=i.return}}var x=e.current;for(le=x;le!==null;){a=le;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,le=S;else e:for(a=x;le!==null;){if(s=le,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wm(9,s)}}catch(I){Mt(s,s.return,I)}if(s===a){le=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,le=T;break e}le=s.return}}if(Ve=o,ua(),Lo&&typeof Lo.onPostCommitFiberRoot=="function")try{Lo.onPostCommitFiberRoot(Dm,e)}catch{}r=!0}return r}finally{Ze=n,qr.transition=t}}return!1}function pE(e,t,n){t=Is(n,t),t=z5(e,t,1),e=ta(e,t,1),t=Qn(),e!==null&&(Hc(e,1,t),cr(e,t))}function Mt(e,t,n){if(e.tag===3)pE(e,e,n);else for(;t!==null;){if(t.tag===3){pE(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(na===null||!na.has(r))){e=Is(n,e),e=B5(t,e,1),t=ta(t,e,1),e=Qn(),t!==null&&(Hc(t,1,e),cr(t,e));break}}t=t.return}}function u9(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qn(),e.pingedLanes|=e.suspendedLanes&n,dn===e&&(En&n)===n&&(tn===4||tn===3&&(En&130023424)===En&&500>Wt()-Ey?nl(e,0):Cy|=n),cr(e,t)}function iR(e,t){t===0&&(e.mode&1?(t=Ud,Ud<<=1,!(Ud&130023424)&&(Ud=4194304)):t=1);var n=Qn();e=fi(e,t),e!==null&&(Hc(e,t,n),cr(e,n))}function c9(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),iR(e,n)}function p9(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(X(314))}r!==null&&r.delete(t),iR(e,n)}var aR;aR=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||sr.current)lr=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lr=!1,ZB(e,t,n);lr=!!(e.flags&131072)}else lr=!1,yt&&t.flags&1048576&&c5(t,Sm,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;lm(e,t),e=t.pendingProps;var o=Rs(t,Fn.current);_s(t,n),o=yy(null,t,r,e,o,n);var i=xy();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ur(r)?(i=!0,wm(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,my(t),o.updater=Hm,t.stateNode=o,o._reactInternals=t,Pv(t,r,e,n),t=Lv(null,t,r,!0,i,n)):(t.tag=0,yt&&i&&ly(t),Gn(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(lm(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=d9(r),e=so(r,e),o){case 0:t=Av(null,t,r,e,n);break e;case 1:t=tE(null,t,r,e,n);break e;case 11:t=JC(null,t,r,e,n);break e;case 14:t=eE(null,t,r,so(r.type,e),n);break e}throw Error(X(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:so(r,o),Av(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:so(r,o),tE(e,t,r,o,n);case 3:e:{if(W5(t),e===null)throw Error(X(387));r=t.pendingProps,i=t.memoizedState,o=i.element,g5(e,t),Em(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Is(Error(X(423)),t),t=nE(e,t,r,n,o);break e}else if(r!==o){o=Is(Error(X(424)),t),t=nE(e,t,r,n,o);break e}else for(Sr=ea(t.stateNode.containerInfo.firstChild),_r=t,yt=!0,co=null,n=m5(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),r===o){t=di(e,t,n);break e}Gn(e,t,r,n)}t=t.child}return t;case 5:return b5(t),e===null&&Rv(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,kv(r,o)?a=null:i!==null&&kv(r,i)&&(t.flags|=32),H5(e,t),Gn(e,t,a,n),t.child;case 6:return e===null&&Rv(t),null;case 13:return q5(e,t,n);case 4:return hy(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Os(t,null,r,n):Gn(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:so(r,o),JC(e,t,r,o,n);case 7:return Gn(e,t,t.pendingProps,n),t.child;case 8:return Gn(e,t,t.pendingProps.children,n),t.child;case 12:return Gn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ct(_m,r._currentValue),r._currentValue=a,i!==null)if(mo(i.value,a)){if(i.children===o.children&&!sr.current){t=di(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=ui(-1,n&-n),c.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var f=p.pending;f===null?c.next=c:(c.next=f.next,f.next=c),p.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Tv(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(X(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Tv(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Gn(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_s(t,n),o=Vr(o),r=r(o),t.flags|=1,Gn(e,t,r,n),t.child;case 14:return r=t.type,o=so(r,t.pendingProps),o=so(r.type,o),eE(e,t,r,o,n);case 15:return U5(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:so(r,o),lm(e,t),t.tag=1,ur(r)?(e=!0,wm(t)):e=!1,_s(t,n),F5(t,r,o),Pv(t,r,o,n),Lv(null,t,r,!0,e,n);case 19:return V5(e,t,n);case 22:return j5(e,t,n)}throw Error(X(156,t.tag))};function lR(e,t){return ME(e,t)}function f9(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(e,t,n,r){return new f9(e,t,n,r)}function Py(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d9(e){if(typeof e=="function")return Py(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qv)return 11;if(e===Yv)return 14}return 2}function oa(e,t){var n=e.alternate;return n===null?(n=Wr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function cm(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Py(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case us:return rl(n.children,o,i,t);case Gv:a=8,o|=8;break;case ev:return e=Wr(12,n,t,o|2),e.elementType=ev,e.lanes=i,e;case tv:return e=Wr(13,n,t,o),e.elementType=tv,e.lanes=i,e;case nv:return e=Wr(19,n,t,o),e.elementType=nv,e.lanes=i,e;case bE:return Vm(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hE:a=10;break e;case gE:a=9;break e;case Qv:a=11;break e;case Yv:a=14;break e;case Vi:a=16,r=null;break e}throw Error(X(130,e==null?e:typeof e,""))}return t=Wr(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rl(e,t,n,r){return e=Wr(7,e,r,t),e.lanes=n,e}function Vm(e,t,n,r){return e=Wr(22,e,r,t),e.elementType=bE,e.lanes=n,e.stateNode={isHidden:!1},e}function X0(e,t,n){return e=Wr(6,e,null,t),e.lanes=n,e}function Z0(e,t,n){return t=Wr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m9(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=D0(0),this.expirationTimes=D0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=D0(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Iy(e,t,n,r,o,i,a,s,c){return e=new m9(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Wr(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},my(i),e}function h9(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sR(e){if(!e)return aa;e=e._reactInternals;e:{if(cl(e)!==e||e.tag!==1)throw Error(X(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ur(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(X(171))}if(e.tag===1){var n=e.type;if(ur(n))return s5(e,n,t)}return t}function uR(e,t,n,r,o,i,a,s,c){return e=Iy(n,r,!0,e,o,i,a,s,c),e.context=sR(null),n=e.current,r=Qn(),o=ra(n),i=ui(r,o),i.callback=t??null,ta(n,i,o),e.current.lanes=o,Hc(e,o,r),cr(e,r),e}function Km(e,t,n,r){var o=t.current,i=Qn(),a=ra(o);return n=sR(n),t.context===null?t.context=n:t.pendingContext=n,t=ui(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ta(o,t,a),e!==null&&(fo(e,o,a,i),om(e,o,a)),a}function Mm(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fE(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ay(e,t){fE(e,t),(e=e.alternate)&&fE(e,t)}function g9(){return null}var cR=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ly(e){this._internalRoot=e}$m.prototype.render=Ly.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));Km(e,t,null,null)};$m.prototype.unmount=Ly.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sl(function(){Km(null,e,null,null)}),t[pi]=null}};function $m(e){this._internalRoot=e}$m.prototype.unstable_scheduleHydration=function(e){if(e){var t=jE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$i.length&&t!==0&&t<$i[n].priority;n++);$i.splice(n,0,e),n===0&&WE(e)}};function My(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dE(){}function b9(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var p=Mm(a);i.call(p)}}var a=uR(t,r,e,0,null,!1,!1,"",dE);return e._reactRootContainer=a,e[pi]=a.current,Lc(e.nodeType===8?e.parentNode:e),sl(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var p=Mm(c);s.call(p)}}var c=Iy(e,0,!1,null,null,!1,!1,"",dE);return e._reactRootContainer=c,e[pi]=c.current,Lc(e.nodeType===8?e.parentNode:e),sl(function(){Km(t,c,n,r)}),c}function Qm(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=Mm(a);s.call(c)}}Km(t,a,e,o)}else a=b9(n,t,e,o,r);return Mm(a)}BE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mc(t.pendingLanes);n!==0&&(Jv(t,n|1),cr(t,Wt()),!(Ve&6)&&(As=Wt()+500,ua()))}break;case 13:sl(function(){var r=fi(e,1);if(r!==null){var o=Qn();fo(r,e,1,o)}}),Ay(e,1)}};ey=function(e){if(e.tag===13){var t=fi(e,134217728);if(t!==null){var n=Qn();fo(t,e,134217728,n)}Ay(e,134217728)}};UE=function(e){if(e.tag===13){var t=ra(e),n=fi(e,t);if(n!==null){var r=Qn();fo(n,e,t,r)}Ay(e,t)}};jE=function(){return Ze};HE=function(e,t){var n=Ze;try{return Ze=e,t()}finally{Ze=n}};fv=function(e,t,n){switch(t){case"input":if(iv(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bm(r);if(!o)throw Error(X(90));yE(r),iv(r,o)}}}break;case"textarea":wE(e,n);break;case"select":t=n.value,t!=null&&xs(e,!!n.multiple,t,!1)}};TE=Ry;OE=sl;var v9={usingClientEntryPoint:!1,Events:[qc,ds,Bm,EE,RE,Ry]},cc={findFiberByHostInstance:Ja,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y9={bundleType:cc.bundleType,version:cc.version,rendererPackageName:cc.rendererPackageName,rendererConfig:cc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=AE(e),e===null?null:e.stateNode},findFiberByHostInstance:cc.findFiberByHostInstance||g9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(pc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!pc.isDisabled&&pc.supportsFiber))try{Dm=pc.inject(y9),Lo=pc}catch{}var pc;Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v9;Rr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!My(t))throw Error(X(200));return h9(e,t,null,n)};Rr.createRoot=function(e,t){if(!My(e))throw Error(X(299));var n=!1,r="",o=cR;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Iy(e,1,!1,null,null,n,!1,r,o),e[pi]=t.current,Lc(e.nodeType===8?e.parentNode:e),new Ly(t)};Rr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=AE(t),e=e===null?null:e.stateNode,e};Rr.flushSync=function(e){return sl(e)};Rr.hydrate=function(e,t,n){if(!Gm(t))throw Error(X(200));return Qm(null,e,t,!0,n)};Rr.hydrateRoot=function(e,t,n){if(!My(e))throw Error(X(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=cR;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=uR(t,null,e,1,n??null,o,!1,i,a),e[pi]=t.current,Lc(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $m(t)};Rr.render=function(e,t,n){if(!Gm(t))throw Error(X(200));return Qm(null,e,t,!1,n)};Rr.unmountComponentAtNode=function(e){if(!Gm(e))throw Error(X(40));return e._reactRootContainer?(sl(function(){Qm(null,null,e,!1,function(){e._reactRootContainer=null,e[pi]=null})}),!0):!1};Rr.unstable_batchedUpdates=Ry;Rr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gm(n))throw Error(X(200));if(e==null||e._reactInternals===void 0)throw Error(X(38));return Qm(e,t,n,!1,r)};Rr.version="18.3.1-next-f1338f8080-20240426"});var Dy=Se((HJ,dR)=>{"use strict";function fR(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fR)}catch(e){console.error(e)}}fR(),dR.exports=pR()});var hR=Se(Ny=>{"use strict";var mR=Dy();Ny.createRoot=mR.createRoot,Ny.hydrateRoot=mR.hydrateRoot;var WJ});var DR=Se(nh=>{"use strict";var R9=Re(),T9=Symbol.for("react.element"),O9=Symbol.for("react.fragment"),P9=Object.prototype.hasOwnProperty,I9=R9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A9={key:!0,ref:!0,__self:!0,__source:!0};function MR(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)P9.call(t,r)&&!A9.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:T9,type:e,key:i,ref:a,props:o,_owner:I9.current}}nh.Fragment=O9;nh.jsx=MR;nh.jsxs=MR});var xt=Se((hte,NR)=>{"use strict";NR.exports=DR()});var VT=Se((lre,qT)=>{"use strict";function kj(e){if(typeof e=="number")return e>>>0===e&&e>=0&&e<=4294967295?e:null;if(typeof e!="string")return null;let t=_j(),n;if(n=t.hex6.exec(e))return parseInt(n[1]+"ff",16)>>>0;let r=Cj(e);return r??((n=t.rgb.exec(e))?(yi(n[1])<<24|yi(n[2])<<16|yi(n[3])<<8|255)>>>0:(n=t.rgba.exec(e))?n[6]!==void 0?(yi(n[6])<<24|yi(n[7])<<16|yi(n[8])<<8|wh(n[9]))>>>0:(yi(n[2])<<24|yi(n[3])<<16|yi(n[4])<<8|wh(n[5]))>>>0:(n=t.hex3.exec(e))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0:(n=t.hex8.exec(e))?parseInt(n[1],16)>>>0:(n=t.hex4.exec(e))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0:(n=t.hsl.exec(e))?(bx(xh(n[1]),ha(n[2]),ha(n[3]))|255)>>>0:(n=t.hsla.exec(e))?n[6]!==void 0?(bx(xh(n[6]),ha(n[7]),ha(n[8]))|wh(n[9]))>>>0:(bx(xh(n[2]),ha(n[3]),ha(n[4]))|wh(n[5]))>>>0:(n=t.hwb.exec(e))?(Sj(xh(n[1]),ha(n[2]),ha(n[3]))|255)>>>0:null)}function Vs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function bx(e,t,n){let r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=Vs(o,r,e+1/3),a=Vs(o,r,e),s=Vs(o,r,e-1/3);return Math.round(i*255)<<24|Math.round(a*255)<<16|Math.round(s*255)<<8}function Sj(e,t,n){if(t+n>=1){let a=Math.round(t*255/(t+n));return a<<24|a<<16|a<<8}let r=Vs(0,1,e+1/3)*(1-t-n)+t,o=Vs(0,1,e)*(1-t-n)+t,i=Vs(0,1,e-1/3)*(1-t-n)+t;return Math.round(r*255)<<24|Math.round(o*255)<<16|Math.round(i*255)<<8}var vn="[-+]?\\d*\\.?\\d+",ma=vn+"%";function vx(...e){return"\\(\\s*("+e.join(")\\s*,?\\s*(")+")\\s*\\)"}function HT(...e){return"\\(\\s*("+e.slice(0,e.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+e[e.length-1]+")\\s*\\)"}function WT(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var yx;function _j(){return yx===void 0&&(yx={rgb:new RegExp("rgb"+vx(vn,vn,vn)),rgba:new RegExp("rgba("+WT(vn,vn,vn,vn)+"|"+HT(vn,vn,vn,vn)+")"),hsl:new RegExp("hsl"+vx(vn,ma,ma)),hsla:new RegExp("hsla("+WT(vn,ma,ma,vn)+"|"+HT(vn,ma,ma,vn)+")"),hwb:new RegExp("hwb"+vx(vn,ma,ma)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),yx}function yi(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function xh(e){return(parseFloat(e)%360+360)%360/360}function wh(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function ha(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function Cj(e){switch(e){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}qT.exports=kj});var Sx=Se(kx=>{"use strict";Object.defineProperty(kx,"__esModule",{value:!0});kx.default=jj;function jj(e){return e.charAt(0).toUpperCase()+e.slice(1)}});var XT=Se(_x=>{"use strict";Object.defineProperty(_x,"__esModule",{value:!0});_x.default=Vj;var Hj=Sx(),Wj=qj(Hj);function qj(e){return e&&e.__esModule?e:{default:e}}function Vj(e,t,n){var r=e[t];if(r&&n.hasOwnProperty(t))for(var o=(0,Wj.default)(t),i=0;i<r.length;++i){var a=r[i]+o;n[a]||(n[a]=n[t])}return n}});var ZT=Se(Cx=>{"use strict";Object.defineProperty(Cx,"__esModule",{value:!0});Cx.default=Kj;function Kj(e,t,n,r,o){for(var i=0,a=e.length;i<a;++i){var s=e[i](t,n,r,o);if(s)return s}}});var eO=Se(Ex=>{"use strict";Object.defineProperty(Ex,"__esModule",{value:!0});Ex.default=$j;function JT(e,t){e.indexOf(t)===-1&&e.push(t)}function $j(e,t){if(Array.isArray(t))for(var n=0,r=t.length;n<r;++n)JT(e,t[n]);else JT(e,t)}});var tO=Se(Rx=>{"use strict";Object.defineProperty(Rx,"__esModule",{value:!0});Rx.default=Gj;function Gj(e){return e instanceof Object&&!Array.isArray(e)}});var rO=Se(Tx=>{"use strict";Object.defineProperty(Tx,"__esModule",{value:!0});Tx.default=nH;var Qj=XT(),Yj=Sh(Qj),Xj=ZT(),nO=Sh(Xj),Zj=eO(),Jj=Sh(Zj),eH=tO(),tH=Sh(eH);function Sh(e){return e&&e.__esModule?e:{default:e}}function nH(e){var t=e.prefixMap,n=e.plugins;return function r(o){for(var i in o){var a=o[i];if((0,tH.default)(a))o[i]=r(a);else if(Array.isArray(a)){for(var s=[],c=0,p=a.length;c<p;++c){var f=(0,nO.default)(n,i,a[c],o,t);(0,Jj.default)(s,f||a[c])}s.length>0&&(o[i]=s)}else{var m=(0,nO.default)(n,i,a,o,t);m&&(o[i]=m),o=(0,Yj.default)(t,i,o)}}return o}}});var oO=Se(Ox=>{"use strict";Object.defineProperty(Ox,"__esModule",{value:!0});Ox.default=rH;function rH(){return null}});var lO=Se(Ix=>{"use strict";Object.defineProperty(Ix,"__esModule",{value:!0});Ix.default=aO;function _h(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_h=function(n){return typeof n}:_h=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_h(e)}function oH(e){return sH(e)||lH(e)||aH(e)||iH()}function iH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aH(e,t){if(e){if(typeof e=="string")return Px(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Px(e,t)}}function lH(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function sH(e){if(Array.isArray(e))return Px(e)}function Px(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function iO(e){return e.filter(function(t,n){return e.lastIndexOf(t)===n})}function aO(e){for(var t=0,n=arguments.length<=1?0:arguments.length-1;t<n;++t){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];for(var o in r){var i=r[o],a=e[o];if(a&&i){if(Array.isArray(a)){e[o]=iO(a.concat(i));continue}if(Array.isArray(i)){e[o]=iO([a].concat(oH(i)));continue}if(_h(i)==="object"){e[o]=aO({},a,i);continue}}e[o]=i}}return e}});var Mx=Se(Lx=>{"use strict";Object.defineProperty(Lx,"__esModule",{value:!0});Lx.default=fH;var uH=/-([a-z])/g,cH=/^Ms/g,Ax={};function pH(e){return e[1].toUpperCase()}function fH(e){if(Ax.hasOwnProperty(e))return Ax[e];var t=e.replace(uH,pH).replace(cH,"ms");return Ax[e]=t,t}});var uO=Se((Pre,sO)=>{"use strict";var dH=/[A-Z]/g,mH=/^ms-/,Dx={};function hH(e){return"-"+e.toLowerCase()}function gH(e){if(Dx.hasOwnProperty(e))return Dx[e];var t=e.replace(dH,hH);return Dx[e]=mH.test(t)?"-"+t:t}sO.exports=gH});var Ks=Se(Nx=>{"use strict";Object.defineProperty(Nx,"__esModule",{value:!0});Nx.default=xH;var bH=uO(),vH=yH(bH);function yH(e){return e&&e.__esModule?e:{default:e}}function xH(e){return(0,vH.default)(e)}});var zx=Se(Fx=>{"use strict";Object.defineProperty(Fx,"__esModule",{value:!0});Fx.default=_H;var wH=Ks(),kH=SH(wH);function SH(e){return e&&e.__esModule?e:{default:e}}function _H(e,t){return(0,kH.default)(e)+":"+t}});var cO=Se(Bx=>{"use strict";Object.defineProperty(Bx,"__esModule",{value:!0});Bx.default=TH;var CH=zx(),EH=RH(CH);function RH(e){return e&&e.__esModule?e:{default:e}}function TH(e){var t="";for(var n in e){var r=e[n];typeof r!="string"&&typeof r!="number"||(t&&(t+=";"),t+=(0,EH.default)(n,r))}return t}});var pO=Se(Ux=>{"use strict";Object.defineProperty(Ux,"__esModule",{value:!0});Ux.default=PH;var OH=/^(Webkit|Moz|O|ms)/;function PH(e){return OH.test(e)}});var Ch=Se(jx=>{"use strict";Object.defineProperty(jx,"__esModule",{value:!0});jx.default=AH;var IH=/-webkit-|-moz-|-ms-/;function AH(e){return typeof e=="string"&&IH.test(e)}});var bO=Se(Wx=>{"use strict";Object.defineProperty(Wx,"__esModule",{value:!0});Wx.default=FH;var LH=Ks(),MH=DH(LH);function DH(e){return e&&e.__esModule?e:{default:e}}var sp={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fO=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],dO=["Webkit","ms","Moz","O"];function NH(e,t){return e+t.charAt(0).toUpperCase()+t.slice(1)}for(Eh=0,mO=fO.length;Eh<mO;++Eh)for(Hx=fO[Eh],sp[Hx]=!0,Rh=0,hO=dO.length;Rh<hO;++Rh)sp[NH(dO[Rh],Hx)]=!0;var Hx,Rh,hO,Eh,mO;for(gO in sp)sp[(0,MH.default)(gO)]=!0;var gO;function FH(e){return sp.hasOwnProperty(e)}});var Vx=Se(qx=>{"use strict";Object.defineProperty(qx,"__esModule",{value:!0});qx.default=BH;var zH=/^(ms|Webkit|Moz|O)/;function BH(e){var t=e.replace(zH,"");return t.charAt(0).toLowerCase()+t.slice(1)}});var yO=Se(Kx=>{"use strict";Object.defineProperty(Kx,"__esModule",{value:!0});Kx.default=qH;var UH=Mx(),jH=vO(UH),HH=Vx(),WH=vO(HH);function vO(e){return e&&e.__esModule?e:{default:e}}function qH(e){return(0,WH.default)((0,jH.default)(e))}});var xO=Se($x=>{"use strict";Object.defineProperty($x,"__esModule",{value:!0});$x.default=GH;var VH=Ks(),KH=$H(VH);function $H(e){return e&&e.__esModule?e:{default:e}}function GH(e,t){return t.join(";"+(0,KH.default)(e)+":")}});var wO=Se(Gx=>{"use strict";Object.defineProperty(Gx,"__esModule",{value:!0});Gx.default=YH;var QH=/(-ms-|-webkit-|-moz-|-o-)/g;function YH(e){return typeof e=="string"?e.replace(QH,""):e}});var Qx=Se(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.unprefixValue=pt.unprefixProperty=pt.resolveArrayValue=pt.normalizeProperty=pt.isUnitlessProperty=pt.isPrefixedValue=pt.isPrefixedProperty=pt.hyphenateProperty=pt.cssifyObject=pt.cssifyDeclaration=pt.camelCaseProperty=pt.assignStyle=void 0;var XH=lO(),ZH=Gr(XH),JH=Mx(),eW=Gr(JH),tW=zx(),nW=Gr(tW),rW=cO(),oW=Gr(rW),iW=Ks(),aW=Gr(iW),lW=pO(),sW=Gr(lW),uW=Ch(),cW=Gr(uW),pW=bO(),fW=Gr(pW),dW=yO(),mW=Gr(dW),hW=xO(),gW=Gr(hW),bW=Vx(),vW=Gr(bW),yW=wO(),xW=Gr(yW);function Gr(e){return e&&e.__esModule?e:{default:e}}pt.assignStyle=ZH.default;pt.camelCaseProperty=eW.default;pt.cssifyDeclaration=nW.default;pt.cssifyObject=oW.default;pt.hyphenateProperty=aW.default;pt.isPrefixedProperty=sW.default;pt.isPrefixedValue=cW.default;pt.isUnitlessProperty=fW.default;pt.normalizeProperty=mW.default;pt.resolveArrayValue=gW.default;pt.unprefixProperty=vW.default;pt.unprefixValue=xW.default});var kO=Se(Yx=>{"use strict";Object.defineProperty(Yx,"__esModule",{value:!0});Yx.default=_W;var wW=Qx(),kW=/cross-fade\(/g,SW=["-webkit-",""];function _W(e,t){if(typeof t=="string"&&!(0,wW.isPrefixedValue)(t)&&t.indexOf("cross-fade(")!==-1)return SW.map(function(n){return t.replace(kW,n+"cross-fade(")})}});var SO=Se(Xx=>{"use strict";Object.defineProperty(Xx,"__esModule",{value:!0});Xx.default=RW;var CW=["-webkit-","-moz-",""],EW={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function RW(e,t){if(e==="cursor"&&EW.hasOwnProperty(t))return CW.map(function(n){return n+t})}});var _O=Se(Zx=>{"use strict";Object.defineProperty(Zx,"__esModule",{value:!0});Zx.default=IW;var TW=Qx(),OW=/filter\(/g,PW=["-webkit-",""];function IW(e,t){if(typeof t=="string"&&!(0,TW.isPrefixedValue)(t)&&t.indexOf("filter(")!==-1)return PW.map(function(n){return t.replace(OW,n+"filter(")})}});var CO=Se(Jx=>{"use strict";Object.defineProperty(Jx,"__esModule",{value:!0});Jx.default=NW;var AW=Ch(),LW=MW(AW);function MW(e){return e&&e.__esModule?e:{default:e}}var DW=["-webkit-",""];function NW(e,t){if(typeof t=="string"&&!(0,LW.default)(t)&&t.indexOf("image-set(")>-1)return DW.map(function(n){return t.replace(/image-set\(/g,n+"image-set(")})}});var RO=Se(ew=>{"use strict";Object.defineProperty(ew,"__esModule",{value:!0});ew.default=FW;var EO={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function FW(e,t,n){if(Object.prototype.hasOwnProperty.call(EO,e))for(var r=EO[e],o=0,i=r.length;o<i;++o)n[r[o]]=t}});var TO=Se(tw=>{"use strict";Object.defineProperty(tw,"__esModule",{value:!0});tw.default=zW;function zW(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}});var OO=Se(nw=>{"use strict";Object.defineProperty(nw,"__esModule",{value:!0});nw.default=HW;var BW=["-webkit-","-moz-",""],UW={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},jW={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function HW(e,t){if(UW.hasOwnProperty(e)&&jW.hasOwnProperty(t))return BW.map(function(n){return n+t})}});var IO=Se(ow=>{"use strict";Object.defineProperty(ow,"__esModule",{value:!0});ow.default=XW;var WW=Ks(),qW=rw(WW),VW=Ch(),KW=rw(VW),$W=Sx(),PO=rw($W);function rw(e){return e&&e.__esModule?e:{default:e}}var GW={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},QW={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function YW(e,t){if((0,KW.default)(e))return e;for(var n=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g),r=0,o=n.length;r<o;++r){var i=n[r],a=[i];for(var s in t){var c=(0,qW.default)(s);if(i.indexOf(c)>-1&&c!=="order")for(var p=t[s],f=0,m=p.length;f<m;++f)a.unshift(i.replace(c,QW[p[f]]+c))}n[r]=a.join(",")}return n.join(",")}function XW(e,t,n,r){if(typeof t=="string"&&GW.hasOwnProperty(e)){var o=YW(t,r),i=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s){return!/-moz-|-ms-/.test(s)}).join(",");if(e.indexOf("Webkit")>-1)return i;var a=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s){return!/-webkit-|-ms-/.test(s)}).join(",");return e.indexOf("Moz")>-1?a:(n["Webkit"+(0,PO.default)(e)]=i,n["Moz"+(0,PO.default)(e)]=a,o)}}});var nP=Se(Sw=>{"use strict";Object.defineProperty(Sw,"__esModule",{value:!0});Sw.localizeStyle=bq;var Oh=new WeakMap,tP="$$css$localize";function eP(e,t){var n={};for(var r in e)if(r!==tP){var o=e[r];Array.isArray(o)?n[r]=t?o[1]:o[0]:n[r]=o}return n}function bq(e,t){if(e[tP]!=null){var n=t?1:0;if(Oh.has(e)){var r=Oh.get(e),o=r[n];return o==null&&(o=eP(e,t),r[n]=o,Oh.set(e,r)),o}var i=eP(e,t),a=new Array(2);return a[n]=i,Oh.set(e,a),i}return e}});var oP=Se((hoe,rP)=>{rP.exports=nP()});var sP=Se(Ph=>{"use strict";Object.defineProperty(Ph,"__esModule",{value:!0});Ph.styleq=void 0;var Cq=new WeakMap,Eq="$$css";function aP(e){var t,n,r;return e!=null&&(t=e.disableCache===!0,n=e.disableMix===!0,r=e.transform),function(){for(var i=[],a="",s=null,c=t?null:Cq,p=new Array(arguments.length),f=0;f<arguments.length;f++)p[f]=arguments[f];for(;p.length>0;){var m=p.pop();if(!(m==null||m===!1)){if(Array.isArray(m)){for(var h=0;h<m.length;h++)p.push(m[h]);continue}var g=r!=null?r(m):m;if(g.$$css){var v="";if(c!=null&&c.has(g)){var w=c.get(g);w!=null&&(v=w[0],i.push.apply(i,w[1]),c=w[2])}else{var _=[];for(var y in g){var x=g[y];y!==Eq&&(typeof x=="string"||x===null?i.includes(y)||(i.push(y),c!=null&&_.push(y),typeof x=="string"&&(v+=v?" "+x:x)):console.error("styleq: ".concat(y," typeof ").concat(String(x),' is not "string" or "null".')))}if(c!=null){var S=new WeakMap;c.set(g,[v,_,S]),c=S}}v&&(a=a?v+" "+a:v)}else if(n)s==null&&(s={}),s=Object.assign({},g,s);else{var T=null;for(var I in g){var R=g[I];R!==void 0&&(i.includes(I)||(R!=null&&(s==null&&(s={}),T==null&&(T={}),T[I]=R),i.push(I),c=null))}T!=null&&(s=Object.assign(T,s))}}}var D=[a,s];return D}}var lP=aP();Ph.styleq=lP;lP.factory=aP});var Yr=Se((zie,uI)=>{"use strict";var qV=function(e){};function VV(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(qV(t),!e){var i;if(t===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=0;i=new Error(t.replace(/%s/g,function(){return String(r[a++])})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}uI.exports=VV});var wI=Se((iae,xI)=>{"use strict";function Hh(e){return function(){return e}}var vl=function(){};vl.thatReturns=Hh;vl.thatReturnsFalse=Hh(!1);vl.thatReturnsTrue=Hh(!0);vl.thatReturnsNull=Hh(null);vl.thatReturnsThis=function(){return this};vl.thatReturnsArgument=function(e){return e};xI.exports=vl});var SI=Se((aae,kI)=>{"use strict";var JV=wI(),eK=JV;kI.exports=eK});var VI=Se((Jae,tg)=>{"use strict";function qI(e,t){if(e!=null)return e;var n=new Error(t!==void 0?t:"Got unexpected "+e);throw n.framesToPop=1,n}tg.exports=qI;tg.exports.default=qI;Object.defineProperty(tg.exports,"__esModule",{value:!0})});var wA=Se((Kse,xA)=>{var gA=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,YK=/\n/g,XK=/^\s*/,ZK=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,JK=/^:\s*/,e$=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,t$=/^[;\s]*/,n$=/^\s+|\s+$/g,r$=`
`,bA="/",vA="*",_l="",o$="comment",i$="declaration";xA.exports=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function o(w){var _=w.match(YK);_&&(n+=_.length);var y=w.lastIndexOf(r$);r=~y?w.length-y:r+w.length}function i(){var w={line:n,column:r};return function(_){return _.position=new a(w),f(),_}}function a(w){this.start=w,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;var s=[];function c(w){var _=new Error(t.source+":"+n+":"+r+": "+w);if(_.reason=w,_.filename=t.source,_.line=n,_.column=r,_.source=e,t.silent)s.push(_);else throw _}function p(w){var _=w.exec(e);if(_){var y=_[0];return o(y),e=e.slice(y.length),_}}function f(){p(XK)}function m(w){var _;for(w=w||[];_=h();)_!==!1&&w.push(_);return w}function h(){var w=i();if(!(bA!=e.charAt(0)||vA!=e.charAt(1))){for(var _=2;_l!=e.charAt(_)&&(vA!=e.charAt(_)||bA!=e.charAt(_+1));)++_;if(_+=2,_l===e.charAt(_-1))return c("End of comment missing");var y=e.slice(2,_-2);return r+=2,o(y),e=e.slice(_),r+=2,w({type:o$,comment:y})}}function g(){var w=i(),_=p(ZK);if(_){if(h(),!p(JK))return c("property missing ':'");var y=p(e$),x=w({type:i$,property:yA(_[0].replace(gA,_l)),value:y?yA(y[0].replace(gA,_l)):_l});return p(t$),x}}function v(){var w=[];m(w);for(var _;_=g();)_!==!1&&(w.push(_),m(w));return w}return f(),v()};function yA(e){return e?e.replace(n$,_l):_l}});var kA=Se(Op=>{"use strict";var a$=Op&&Op.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Op,"__esModule",{value:!0});Op.default=s$;var l$=a$(wA());function s$(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,l$.default)(e),o=typeof t=="function";return r.forEach(function(i){if(i.type==="declaration"){var a=i.property,s=i.value;o?t(a,s,i):s&&(n=n||{},n[a]=s)}}),n}});var jL=Se((Eme,UL)=>{"use strict";var Dg=Object.prototype.hasOwnProperty,BL=Object.prototype.toString,LL=Object.defineProperty,ML=Object.getOwnPropertyDescriptor,DL=function(t){return typeof Array.isArray=="function"?Array.isArray(t):BL.call(t)==="[object Array]"},NL=function(t){if(!t||BL.call(t)!=="[object Object]")return!1;var n=Dg.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Dg.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var o;for(o in t);return typeof o>"u"||Dg.call(t,o)},FL=function(t,n){LL&&n.name==="__proto__"?LL(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},zL=function(t,n){if(n==="__proto__")if(Dg.call(t,n)){if(ML)return ML(t,n).value}else return;return t[n]};UL.exports=function e(){var t,n,r,o,i,a,s=arguments[0],c=1,p=arguments.length,f=!1;for(typeof s=="boolean"&&(f=s,s=arguments[1]||{},c=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});c<p;++c)if(t=arguments[c],t!=null)for(n in t)r=zL(s,n),o=zL(t,n),s!==o&&(f&&o&&(NL(o)||(i=DL(o)))?(i?(i=!1,a=r&&DL(r)?r:[]):a=r&&NL(r)?r:{},FL(s,{name:n,newValue:e(f,a,o)})):typeof o<"u"&&FL(s,{name:n,newValue:o}));return s}});var b6=Se((pu,ef)=>{(function(){var e,t="4.17.21",n=200,r="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",i="Invalid `variable` option passed into `_.template`",a="__lodash_hash_undefined__",s=500,c="__lodash_placeholder__",p=1,f=2,m=4,h=1,g=2,v=1,w=2,_=4,y=8,x=16,S=32,T=64,I=128,R=256,D=512,z=30,U="...",A=800,te=16,Z=1,G=2,ie=3,ee=1/0,fe=9007199254740991,Me=17976931348623157e292,ce=NaN,Le=4294967295,P=Le-1,$e=Le>>>1,ln=[["ary",I],["bind",v],["bindKey",w],["curry",y],["curryRight",x],["flip",D],["partial",S],["partialRight",T],["rearg",R]],L="[object Arguments]",tt="[object Array]",xn="[object AsyncFunction]",wn="[object Boolean]",$t="[object Date]",Ie="[object DOMException]",sn="[object Error]",Tt="[object Function]",un="[object GeneratorFunction]",st="[object Map]",kn="[object Number]",eo="[object Null]",Ot="[object Object]",Pt="[object Promise]",Ir="[object Proxy]",er="[object RegExp]",Ut="[object Set]",On="[object String]",hr="[object Symbol]",_o="[object Undefined]",Sn="[object WeakMap]",tr="[object WeakSet]",Wn="[object ArrayBuffer]",H="[object DataView]",J="[object Float32Array]",de="[object Float64Array]",_e="[object Int8Array]",ze="[object Int16Array]",It="[object Int32Array]",Gt="[object Uint8Array]",pe="[object Uint8ClampedArray]",q="[object Uint16Array]",re="[object Uint32Array]",be=/\b__p \+= '';/g,he=/\b(__p \+=) '' \+/g,xe=/(__e\(.*?\)|\b__t\)) \+\n'';/g,At=/&(?:amp|lt|gt|quot|#39);/g,Pn=/[&<>"']/g,Aa=RegExp(At.source),$o=RegExp(Pn.source),Go=/<%-([\s\S]+?)%>/g,Pi=/<%([\s\S]+?)%>/g,La=/<%=([\s\S]+?)%>/g,zl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ii=/^\w*$/,Ma=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Co=/[\\^$.*+?()[\]{}|]/g,Bl=RegExp(Co.source),Ai=/^\s+/,Da=/\s/,ff=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,df=/\{\n\/\* \[wrapped with (.+)\] \*/,mf=/,? & /,hf=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,gf=/[()=,{}\[\]\/\s]/,bf=/\\(\\)?/g,vf=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Na=/\w*$/,Fa=/^[-+]0x[0-9a-f]+$/i,yf=/^0b[01]+$/i,xf=/^\[object .+?Constructor\]$/,xu=/^0o[0-7]+$/i,sb=/^(?:0|[1-9]\d*)$/,za=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ba=/($^)/,se=/['\n\r\u2028\u2029\\]/g,Ul="\\ud800-\\udfff",to="\\u0300-\\u036f",wf="\\ufe20-\\ufe2f",kf="\\u20d0-\\u20ff",wu=to+wf+kf,ku="\\u2700-\\u27bf",Su="a-z\\xdf-\\xf6\\xf8-\\xff",Sf="\\xac\\xb1\\xd7\\xf7",_f="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Cf="\\u2000-\\u206f",Ef=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_u="A-Z\\xc0-\\xd6\\xd8-\\xde",Cu="\\ufe0e\\ufe0f",Eu=Sf+_f+Cf+Ef,jl="['\u2019]",Rf="["+Ul+"]",Ru="["+Eu+"]",Ua="["+wu+"]",Tu="\\d+",Tf="["+ku+"]",Ou="["+Su+"]",Pu="[^"+Ul+Eu+Tu+ku+Su+_u+"]",Hl="\\ud83c[\\udffb-\\udfff]",Of="(?:"+Ua+"|"+Hl+")",Wl="[^"+Ul+"]",ql="(?:\\ud83c[\\udde6-\\uddff]){2}",Vl="[\\ud800-\\udbff][\\udc00-\\udfff]",Qo="["+_u+"]",Iu="\\u200d",Au="(?:"+Ou+"|"+Pu+")",Pf="(?:"+Qo+"|"+Pu+")",Lu="(?:"+jl+"(?:d|ll|m|re|s|t|ve))?",Mu="(?:"+jl+"(?:D|LL|M|RE|S|T|VE))?",Du=Of+"?",Nu="["+Cu+"]?",If="(?:"+Iu+"(?:"+[Wl,ql,Vl].join("|")+")"+Nu+Du+")*",Af="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lf="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fu=Nu+Du+If,Mf="(?:"+[Tf,ql,Vl].join("|")+")"+Fu,Df="(?:"+[Wl+Ua+"?",Ua,ql,Vl,Rf].join("|")+")",Nf=RegExp(jl,"g"),Ff=RegExp(Ua,"g"),Kl=RegExp(Hl+"(?="+Hl+")|"+Df+Fu,"g"),zf=RegExp([Qo+"?"+Ou+"+"+Lu+"(?="+[Ru,Qo,"$"].join("|")+")",Pf+"+"+Mu+"(?="+[Ru,Qo+Au,"$"].join("|")+")",Qo+"?"+Au+"+"+Lu,Qo+"+"+Mu,Lf,Af,Tu,Mf].join("|"),"g"),Bf=RegExp("["+Iu+Ul+wu+Cu+"]"),zu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ub=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Uf=-1,nt={};nt[J]=nt[de]=nt[_e]=nt[ze]=nt[It]=nt[Gt]=nt[pe]=nt[q]=nt[re]=!0,nt[L]=nt[tt]=nt[Wn]=nt[wn]=nt[H]=nt[$t]=nt[sn]=nt[Tt]=nt[st]=nt[kn]=nt[Ot]=nt[er]=nt[Ut]=nt[On]=nt[Sn]=!1;var Ye={};Ye[L]=Ye[tt]=Ye[Wn]=Ye[H]=Ye[wn]=Ye[$t]=Ye[J]=Ye[de]=Ye[_e]=Ye[ze]=Ye[It]=Ye[st]=Ye[kn]=Ye[Ot]=Ye[er]=Ye[Ut]=Ye[On]=Ye[hr]=Ye[Gt]=Ye[pe]=Ye[q]=Ye[re]=!0,Ye[sn]=Ye[Tt]=Ye[Sn]=!1;var jf={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Hf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h3={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},g3={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},b3=parseFloat,v3=parseInt,PS=typeof global=="object"&&global&&global.Object===Object&&global,y3=typeof self=="object"&&self&&self.Object===Object&&self,cn=PS||y3||Function("return this")(),cb=typeof pu=="object"&&pu&&!pu.nodeType&&pu,ja=cb&&typeof ef=="object"&&ef&&!ef.nodeType&&ef,IS=ja&&ja.exports===cb,pb=IS&&PS.process,Ar=function(){try{var N=ja&&ja.require&&ja.require("util").types;return N||pb&&pb.binding&&pb.binding("util")}catch{}}(),AS=Ar&&Ar.isArrayBuffer,LS=Ar&&Ar.isDate,MS=Ar&&Ar.isMap,DS=Ar&&Ar.isRegExp,NS=Ar&&Ar.isSet,FS=Ar&&Ar.isTypedArray;function gr(N,W,j){switch(j.length){case 0:return N.call(W);case 1:return N.call(W,j[0]);case 2:return N.call(W,j[0],j[1]);case 3:return N.call(W,j[0],j[1],j[2])}return N.apply(W,j)}function x3(N,W,j,ae){for(var Oe=-1,Ge=N==null?0:N.length;++Oe<Ge;){var Zt=N[Oe];W(ae,Zt,j(Zt),N)}return ae}function Lr(N,W){for(var j=-1,ae=N==null?0:N.length;++j<ae&&W(N[j],j,N)!==!1;);return N}function w3(N,W){for(var j=N==null?0:N.length;j--&&W(N[j],j,N)!==!1;);return N}function zS(N,W){for(var j=-1,ae=N==null?0:N.length;++j<ae;)if(!W(N[j],j,N))return!1;return!0}function Li(N,W){for(var j=-1,ae=N==null?0:N.length,Oe=0,Ge=[];++j<ae;){var Zt=N[j];W(Zt,j,N)&&(Ge[Oe++]=Zt)}return Ge}function Wf(N,W){var j=N==null?0:N.length;return!!j&&$l(N,W,0)>-1}function fb(N,W,j){for(var ae=-1,Oe=N==null?0:N.length;++ae<Oe;)if(j(W,N[ae]))return!0;return!1}function vt(N,W){for(var j=-1,ae=N==null?0:N.length,Oe=Array(ae);++j<ae;)Oe[j]=W(N[j],j,N);return Oe}function Mi(N,W){for(var j=-1,ae=W.length,Oe=N.length;++j<ae;)N[Oe+j]=W[j];return N}function db(N,W,j,ae){var Oe=-1,Ge=N==null?0:N.length;for(ae&&Ge&&(j=N[++Oe]);++Oe<Ge;)j=W(j,N[Oe],Oe,N);return j}function k3(N,W,j,ae){var Oe=N==null?0:N.length;for(ae&&Oe&&(j=N[--Oe]);Oe--;)j=W(j,N[Oe],Oe,N);return j}function mb(N,W){for(var j=-1,ae=N==null?0:N.length;++j<ae;)if(W(N[j],j,N))return!0;return!1}var S3=hb("length");function _3(N){return N.split("")}function C3(N){return N.match(hf)||[]}function BS(N,W,j){var ae;return j(N,function(Oe,Ge,Zt){if(W(Oe,Ge,Zt))return ae=Ge,!1}),ae}function qf(N,W,j,ae){for(var Oe=N.length,Ge=j+(ae?1:-1);ae?Ge--:++Ge<Oe;)if(W(N[Ge],Ge,N))return Ge;return-1}function $l(N,W,j){return W===W?F3(N,W,j):qf(N,US,j)}function E3(N,W,j,ae){for(var Oe=j-1,Ge=N.length;++Oe<Ge;)if(ae(N[Oe],W))return Oe;return-1}function US(N){return N!==N}function jS(N,W){var j=N==null?0:N.length;return j?bb(N,W)/j:ce}function hb(N){return function(W){return W==null?e:W[N]}}function gb(N){return function(W){return N==null?e:N[W]}}function HS(N,W,j,ae,Oe){return Oe(N,function(Ge,Zt,at){j=ae?(ae=!1,Ge):W(j,Ge,Zt,at)}),j}function R3(N,W){var j=N.length;for(N.sort(W);j--;)N[j]=N[j].value;return N}function bb(N,W){for(var j,ae=-1,Oe=N.length;++ae<Oe;){var Ge=W(N[ae]);Ge!==e&&(j=j===e?Ge:j+Ge)}return j}function vb(N,W){for(var j=-1,ae=Array(N);++j<N;)ae[j]=W(j);return ae}function T3(N,W){return vt(W,function(j){return[j,N[j]]})}function WS(N){return N&&N.slice(0,$S(N)+1).replace(Ai,"")}function br(N){return function(W){return N(W)}}function yb(N,W){return vt(W,function(j){return N[j]})}function Bu(N,W){return N.has(W)}function qS(N,W){for(var j=-1,ae=N.length;++j<ae&&$l(W,N[j],0)>-1;);return j}function VS(N,W){for(var j=N.length;j--&&$l(W,N[j],0)>-1;);return j}function O3(N,W){for(var j=N.length,ae=0;j--;)N[j]===W&&++ae;return ae}var P3=gb(jf),I3=gb(Hf);function A3(N){return"\\"+g3[N]}function L3(N,W){return N==null?e:N[W]}function Gl(N){return Bf.test(N)}function M3(N){return zu.test(N)}function D3(N){for(var W,j=[];!(W=N.next()).done;)j.push(W.value);return j}function xb(N){var W=-1,j=Array(N.size);return N.forEach(function(ae,Oe){j[++W]=[Oe,ae]}),j}function KS(N,W){return function(j){return N(W(j))}}function Di(N,W){for(var j=-1,ae=N.length,Oe=0,Ge=[];++j<ae;){var Zt=N[j];(Zt===W||Zt===c)&&(N[j]=c,Ge[Oe++]=j)}return Ge}function Vf(N){var W=-1,j=Array(N.size);return N.forEach(function(ae){j[++W]=ae}),j}function N3(N){var W=-1,j=Array(N.size);return N.forEach(function(ae){j[++W]=[ae,ae]}),j}function F3(N,W,j){for(var ae=j-1,Oe=N.length;++ae<Oe;)if(N[ae]===W)return ae;return-1}function z3(N,W,j){for(var ae=j+1;ae--;)if(N[ae]===W)return ae;return ae}function Ql(N){return Gl(N)?U3(N):S3(N)}function no(N){return Gl(N)?j3(N):_3(N)}function $S(N){for(var W=N.length;W--&&Da.test(N.charAt(W)););return W}var B3=gb(h3);function U3(N){for(var W=Kl.lastIndex=0;Kl.test(N);)++W;return W}function j3(N){return N.match(Kl)||[]}function H3(N){return N.match(zf)||[]}var W3=function N(W){W=W==null?cn:Ni.defaults(cn.Object(),W,Ni.pick(cn,ub));var j=W.Array,ae=W.Date,Oe=W.Error,Ge=W.Function,Zt=W.Math,at=W.Object,wb=W.RegExp,q3=W.String,Mr=W.TypeError,Kf=j.prototype,V3=Ge.prototype,Yl=at.prototype,$f=W["__core-js_shared__"],Gf=V3.toString,Xe=Yl.hasOwnProperty,K3=0,GS=function(){var l=/[^.]+$/.exec($f&&$f.keys&&$f.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""}(),Qf=Yl.toString,$3=Gf.call(at),G3=cn._,Q3=wb("^"+Gf.call(Xe).replace(Co,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Yf=IS?W.Buffer:e,Fi=W.Symbol,Xf=W.Uint8Array,QS=Yf?Yf.allocUnsafe:e,Zf=KS(at.getPrototypeOf,at),YS=at.create,XS=Yl.propertyIsEnumerable,Jf=Kf.splice,ZS=Fi?Fi.isConcatSpreadable:e,Uu=Fi?Fi.iterator:e,Ha=Fi?Fi.toStringTag:e,ed=function(){try{var l=$a(at,"defineProperty");return l({},"",{}),l}catch{}}(),Y3=W.clearTimeout!==cn.clearTimeout&&W.clearTimeout,X3=ae&&ae.now!==cn.Date.now&&ae.now,Z3=W.setTimeout!==cn.setTimeout&&W.setTimeout,td=Zt.ceil,nd=Zt.floor,kb=at.getOwnPropertySymbols,J3=Yf?Yf.isBuffer:e,JS=W.isFinite,eM=Kf.join,tM=KS(at.keys,at),Jt=Zt.max,In=Zt.min,nM=ae.now,rM=W.parseInt,e_=Zt.random,oM=Kf.reverse,Sb=$a(W,"DataView"),ju=$a(W,"Map"),_b=$a(W,"Promise"),Xl=$a(W,"Set"),Hu=$a(W,"WeakMap"),Wu=$a(at,"create"),rd=Hu&&new Hu,Zl={},iM=Ga(Sb),aM=Ga(ju),lM=Ga(_b),sM=Ga(Xl),uM=Ga(Hu),od=Fi?Fi.prototype:e,qu=od?od.valueOf:e,t_=od?od.toString:e;function C(l){if(Lt(l)&&!Ae(l)&&!(l instanceof We)){if(l instanceof Dr)return l;if(Xe.call(l,"__wrapped__"))return n2(l)}return new Dr(l)}var Jl=function(){function l(){}return function(u){if(!_t(u))return{};if(YS)return YS(u);l.prototype=u;var d=new l;return l.prototype=e,d}}();function id(){}function Dr(l,u){this.__wrapped__=l,this.__actions__=[],this.__chain__=!!u,this.__index__=0,this.__values__=e}C.templateSettings={escape:Go,evaluate:Pi,interpolate:La,variable:"",imports:{_:C}},C.prototype=id.prototype,C.prototype.constructor=C,Dr.prototype=Jl(id.prototype),Dr.prototype.constructor=Dr;function We(l){this.__wrapped__=l,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Le,this.__views__=[]}function cM(){var l=new We(this.__wrapped__);return l.__actions__=nr(this.__actions__),l.__dir__=this.__dir__,l.__filtered__=this.__filtered__,l.__iteratees__=nr(this.__iteratees__),l.__takeCount__=this.__takeCount__,l.__views__=nr(this.__views__),l}function pM(){if(this.__filtered__){var l=new We(this);l.__dir__=-1,l.__filtered__=!0}else l=this.clone(),l.__dir__*=-1;return l}function fM(){var l=this.__wrapped__.value(),u=this.__dir__,d=Ae(l),b=u<0,k=d?l.length:0,E=_D(0,k,this.__views__),O=E.start,M=E.end,F=M-O,V=b?M:O-1,K=this.__iteratees__,$=K.length,ne=0,ue=In(F,this.__takeCount__);if(!d||!b&&k==F&&ue==F)return C_(l,this.__actions__);var we=[];e:for(;F--&&ne<ue;){V+=u;for(var Fe=-1,ke=l[V];++Fe<$;){var je=K[Fe],qe=je.iteratee,xr=je.type,Kn=qe(ke);if(xr==G)ke=Kn;else if(!Kn){if(xr==Z)continue e;break e}}we[ne++]=ke}return we}We.prototype=Jl(id.prototype),We.prototype.constructor=We;function Wa(l){var u=-1,d=l==null?0:l.length;for(this.clear();++u<d;){var b=l[u];this.set(b[0],b[1])}}function dM(){this.__data__=Wu?Wu(null):{},this.size=0}function mM(l){var u=this.has(l)&&delete this.__data__[l];return this.size-=u?1:0,u}function hM(l){var u=this.__data__;if(Wu){var d=u[l];return d===a?e:d}return Xe.call(u,l)?u[l]:e}function gM(l){var u=this.__data__;return Wu?u[l]!==e:Xe.call(u,l)}function bM(l,u){var d=this.__data__;return this.size+=this.has(l)?0:1,d[l]=Wu&&u===e?a:u,this}Wa.prototype.clear=dM,Wa.prototype.delete=mM,Wa.prototype.get=hM,Wa.prototype.has=gM,Wa.prototype.set=bM;function Yo(l){var u=-1,d=l==null?0:l.length;for(this.clear();++u<d;){var b=l[u];this.set(b[0],b[1])}}function vM(){this.__data__=[],this.size=0}function yM(l){var u=this.__data__,d=ad(u,l);if(d<0)return!1;var b=u.length-1;return d==b?u.pop():Jf.call(u,d,1),--this.size,!0}function xM(l){var u=this.__data__,d=ad(u,l);return d<0?e:u[d][1]}function wM(l){return ad(this.__data__,l)>-1}function kM(l,u){var d=this.__data__,b=ad(d,l);return b<0?(++this.size,d.push([l,u])):d[b][1]=u,this}Yo.prototype.clear=vM,Yo.prototype.delete=yM,Yo.prototype.get=xM,Yo.prototype.has=wM,Yo.prototype.set=kM;function Xo(l){var u=-1,d=l==null?0:l.length;for(this.clear();++u<d;){var b=l[u];this.set(b[0],b[1])}}function SM(){this.size=0,this.__data__={hash:new Wa,map:new(ju||Yo),string:new Wa}}function _M(l){var u=vd(this,l).delete(l);return this.size-=u?1:0,u}function CM(l){return vd(this,l).get(l)}function EM(l){return vd(this,l).has(l)}function RM(l,u){var d=vd(this,l),b=d.size;return d.set(l,u),this.size+=d.size==b?0:1,this}Xo.prototype.clear=SM,Xo.prototype.delete=_M,Xo.prototype.get=CM,Xo.prototype.has=EM,Xo.prototype.set=RM;function qa(l){var u=-1,d=l==null?0:l.length;for(this.__data__=new Xo;++u<d;)this.add(l[u])}function TM(l){return this.__data__.set(l,a),this}function OM(l){return this.__data__.has(l)}qa.prototype.add=qa.prototype.push=TM,qa.prototype.has=OM;function ro(l){var u=this.__data__=new Yo(l);this.size=u.size}function PM(){this.__data__=new Yo,this.size=0}function IM(l){var u=this.__data__,d=u.delete(l);return this.size=u.size,d}function AM(l){return this.__data__.get(l)}function LM(l){return this.__data__.has(l)}function MM(l,u){var d=this.__data__;if(d instanceof Yo){var b=d.__data__;if(!ju||b.length<n-1)return b.push([l,u]),this.size=++d.size,this;d=this.__data__=new Xo(b)}return d.set(l,u),this.size=d.size,this}ro.prototype.clear=PM,ro.prototype.delete=IM,ro.prototype.get=AM,ro.prototype.has=LM,ro.prototype.set=MM;function n_(l,u){var d=Ae(l),b=!d&&Qa(l),k=!d&&!b&&Hi(l),E=!d&&!b&&!k&&rs(l),O=d||b||k||E,M=O?vb(l.length,q3):[],F=M.length;for(var V in l)(u||Xe.call(l,V))&&!(O&&(V=="length"||k&&(V=="offset"||V=="parent")||E&&(V=="buffer"||V=="byteLength"||V=="byteOffset")||ti(V,F)))&&M.push(V);return M}function r_(l){var u=l.length;return u?l[Db(0,u-1)]:e}function DM(l,u){return yd(nr(l),Va(u,0,l.length))}function NM(l){return yd(nr(l))}function Cb(l,u,d){(d!==e&&!oo(l[u],d)||d===e&&!(u in l))&&Zo(l,u,d)}function Vu(l,u,d){var b=l[u];(!(Xe.call(l,u)&&oo(b,d))||d===e&&!(u in l))&&Zo(l,u,d)}function ad(l,u){for(var d=l.length;d--;)if(oo(l[d][0],u))return d;return-1}function FM(l,u,d,b){return zi(l,function(k,E,O){u(b,k,d(k),O)}),b}function o_(l,u){return l&&Ro(u,pn(u),l)}function zM(l,u){return l&&Ro(u,or(u),l)}function Zo(l,u,d){u=="__proto__"&&ed?ed(l,u,{configurable:!0,enumerable:!0,value:d,writable:!0}):l[u]=d}function Eb(l,u){for(var d=-1,b=u.length,k=j(b),E=l==null;++d<b;)k[d]=E?e:a0(l,u[d]);return k}function Va(l,u,d){return l===l&&(d!==e&&(l=l<=d?l:d),u!==e&&(l=l>=u?l:u)),l}function Nr(l,u,d,b,k,E){var O,M=u&p,F=u&f,V=u&m;if(d&&(O=k?d(l,b,k,E):d(l)),O!==e)return O;if(!_t(l))return l;var K=Ae(l);if(K){if(O=ED(l),!M)return nr(l,O)}else{var $=An(l),ne=$==Tt||$==un;if(Hi(l))return T_(l,M);if($==Ot||$==L||ne&&!k){if(O=F||ne?{}:$_(l),!M)return F?hD(l,zM(O,l)):mD(l,o_(O,l))}else{if(!Ye[$])return k?l:{};O=RD(l,$,M)}}E||(E=new ro);var ue=E.get(l);if(ue)return ue;E.set(l,O),k2(l)?l.forEach(function(ke){O.add(Nr(ke,u,d,ke,l,E))}):x2(l)&&l.forEach(function(ke,je){O.set(je,Nr(ke,u,d,je,l,E))});var we=V?F?Kb:Vb:F?or:pn,Fe=K?e:we(l);return Lr(Fe||l,function(ke,je){Fe&&(je=ke,ke=l[je]),Vu(O,je,Nr(ke,u,d,je,l,E))}),O}function BM(l){var u=pn(l);return function(d){return i_(d,l,u)}}function i_(l,u,d){var b=d.length;if(l==null)return!b;for(l=at(l);b--;){var k=d[b],E=u[k],O=l[k];if(O===e&&!(k in l)||!E(O))return!1}return!0}function a_(l,u,d){if(typeof l!="function")throw new Mr(o);return Zu(function(){l.apply(e,d)},u)}function Ku(l,u,d,b){var k=-1,E=Wf,O=!0,M=l.length,F=[],V=u.length;if(!M)return F;d&&(u=vt(u,br(d))),b?(E=fb,O=!1):u.length>=n&&(E=Bu,O=!1,u=new qa(u));e:for(;++k<M;){var K=l[k],$=d==null?K:d(K);if(K=b||K!==0?K:0,O&&$===$){for(var ne=V;ne--;)if(u[ne]===$)continue e;F.push(K)}else E(u,$,b)||F.push(K)}return F}var zi=L_(Eo),l_=L_(Tb,!0);function UM(l,u){var d=!0;return zi(l,function(b,k,E){return d=!!u(b,k,E),d}),d}function ld(l,u,d){for(var b=-1,k=l.length;++b<k;){var E=l[b],O=u(E);if(O!=null&&(M===e?O===O&&!yr(O):d(O,M)))var M=O,F=E}return F}function jM(l,u,d,b){var k=l.length;for(d=De(d),d<0&&(d=-d>k?0:k+d),b=b===e||b>k?k:De(b),b<0&&(b+=k),b=d>b?0:_2(b);d<b;)l[d++]=u;return l}function s_(l,u){var d=[];return zi(l,function(b,k,E){u(b,k,E)&&d.push(b)}),d}function _n(l,u,d,b,k){var E=-1,O=l.length;for(d||(d=OD),k||(k=[]);++E<O;){var M=l[E];u>0&&d(M)?u>1?_n(M,u-1,d,b,k):Mi(k,M):b||(k[k.length]=M)}return k}var Rb=M_(),u_=M_(!0);function Eo(l,u){return l&&Rb(l,u,pn)}function Tb(l,u){return l&&u_(l,u,pn)}function sd(l,u){return Li(u,function(d){return ni(l[d])})}function Ka(l,u){u=Ui(u,l);for(var d=0,b=u.length;l!=null&&d<b;)l=l[To(u[d++])];return d&&d==b?l:e}function c_(l,u,d){var b=u(l);return Ae(l)?b:Mi(b,d(l))}function qn(l){return l==null?l===e?_o:eo:Ha&&Ha in at(l)?SD(l):ND(l)}function Ob(l,u){return l>u}function HM(l,u){return l!=null&&Xe.call(l,u)}function WM(l,u){return l!=null&&u in at(l)}function qM(l,u,d){return l>=In(u,d)&&l<Jt(u,d)}function Pb(l,u,d){for(var b=d?fb:Wf,k=l[0].length,E=l.length,O=E,M=j(E),F=1/0,V=[];O--;){var K=l[O];O&&u&&(K=vt(K,br(u))),F=In(K.length,F),M[O]=!d&&(u||k>=120&&K.length>=120)?new qa(O&&K):e}K=l[0];var $=-1,ne=M[0];e:for(;++$<k&&V.length<F;){var ue=K[$],we=u?u(ue):ue;if(ue=d||ue!==0?ue:0,!(ne?Bu(ne,we):b(V,we,d))){for(O=E;--O;){var Fe=M[O];if(!(Fe?Bu(Fe,we):b(l[O],we,d)))continue e}ne&&ne.push(we),V.push(ue)}}return V}function VM(l,u,d,b){return Eo(l,function(k,E,O){u(b,d(k),E,O)}),b}function $u(l,u,d){u=Ui(u,l),l=X_(l,u);var b=l==null?l:l[To(zr(u))];return b==null?e:gr(b,l,d)}function p_(l){return Lt(l)&&qn(l)==L}function KM(l){return Lt(l)&&qn(l)==Wn}function $M(l){return Lt(l)&&qn(l)==$t}function Gu(l,u,d,b,k){return l===u?!0:l==null||u==null||!Lt(l)&&!Lt(u)?l!==l&&u!==u:GM(l,u,d,b,Gu,k)}function GM(l,u,d,b,k,E){var O=Ae(l),M=Ae(u),F=O?tt:An(l),V=M?tt:An(u);F=F==L?Ot:F,V=V==L?Ot:V;var K=F==Ot,$=V==Ot,ne=F==V;if(ne&&Hi(l)){if(!Hi(u))return!1;O=!0,K=!1}if(ne&&!K)return E||(E=new ro),O||rs(l)?q_(l,u,d,b,k,E):wD(l,u,F,d,b,k,E);if(!(d&h)){var ue=K&&Xe.call(l,"__wrapped__"),we=$&&Xe.call(u,"__wrapped__");if(ue||we){var Fe=ue?l.value():l,ke=we?u.value():u;return E||(E=new ro),k(Fe,ke,d,b,E)}}return ne?(E||(E=new ro),kD(l,u,d,b,k,E)):!1}function QM(l){return Lt(l)&&An(l)==st}function Ib(l,u,d,b){var k=d.length,E=k,O=!b;if(l==null)return!E;for(l=at(l);k--;){var M=d[k];if(O&&M[2]?M[1]!==l[M[0]]:!(M[0]in l))return!1}for(;++k<E;){M=d[k];var F=M[0],V=l[F],K=M[1];if(O&&M[2]){if(V===e&&!(F in l))return!1}else{var $=new ro;if(b)var ne=b(V,K,F,l,u,$);if(!(ne===e?Gu(K,V,h|g,b,$):ne))return!1}}return!0}function f_(l){if(!_t(l)||ID(l))return!1;var u=ni(l)?Q3:xf;return u.test(Ga(l))}function YM(l){return Lt(l)&&qn(l)==er}function XM(l){return Lt(l)&&An(l)==Ut}function ZM(l){return Lt(l)&&Cd(l.length)&&!!nt[qn(l)]}function d_(l){return typeof l=="function"?l:l==null?ir:typeof l=="object"?Ae(l)?g_(l[0],l[1]):h_(l):D2(l)}function Ab(l){if(!Xu(l))return tM(l);var u=[];for(var d in at(l))Xe.call(l,d)&&d!="constructor"&&u.push(d);return u}function JM(l){if(!_t(l))return DD(l);var u=Xu(l),d=[];for(var b in l)b=="constructor"&&(u||!Xe.call(l,b))||d.push(b);return d}function Lb(l,u){return l<u}function m_(l,u){var d=-1,b=rr(l)?j(l.length):[];return zi(l,function(k,E,O){b[++d]=u(k,E,O)}),b}function h_(l){var u=Gb(l);return u.length==1&&u[0][2]?Q_(u[0][0],u[0][1]):function(d){return d===l||Ib(d,l,u)}}function g_(l,u){return Yb(l)&&G_(u)?Q_(To(l),u):function(d){var b=a0(d,l);return b===e&&b===u?l0(d,l):Gu(u,b,h|g)}}function ud(l,u,d,b,k){l!==u&&Rb(u,function(E,O){if(k||(k=new ro),_t(E))eD(l,u,O,d,ud,b,k);else{var M=b?b(Zb(l,O),E,O+"",l,u,k):e;M===e&&(M=E),Cb(l,O,M)}},or)}function eD(l,u,d,b,k,E,O){var M=Zb(l,d),F=Zb(u,d),V=O.get(F);if(V){Cb(l,d,V);return}var K=E?E(M,F,d+"",l,u,O):e,$=K===e;if($){var ne=Ae(F),ue=!ne&&Hi(F),we=!ne&&!ue&&rs(F);K=F,ne||ue||we?Ae(M)?K=M:jt(M)?K=nr(M):ue?($=!1,K=T_(F,!0)):we?($=!1,K=O_(F,!0)):K=[]:Ju(F)||Qa(F)?(K=M,Qa(M)?K=C2(M):(!_t(M)||ni(M))&&(K=$_(F))):$=!1}$&&(O.set(F,K),k(K,F,b,E,O),O.delete(F)),Cb(l,d,K)}function b_(l,u){var d=l.length;if(d)return u+=u<0?d:0,ti(u,d)?l[u]:e}function v_(l,u,d){u.length?u=vt(u,function(E){return Ae(E)?function(O){return Ka(O,E.length===1?E[0]:E)}:E}):u=[ir];var b=-1;u=vt(u,br(ve()));var k=m_(l,function(E,O,M){var F=vt(u,function(V){return V(E)});return{criteria:F,index:++b,value:E}});return R3(k,function(E,O){return dD(E,O,d)})}function tD(l,u){return y_(l,u,function(d,b){return l0(l,b)})}function y_(l,u,d){for(var b=-1,k=u.length,E={};++b<k;){var O=u[b],M=Ka(l,O);d(M,O)&&Qu(E,Ui(O,l),M)}return E}function nD(l){return function(u){return Ka(u,l)}}function Mb(l,u,d,b){var k=b?E3:$l,E=-1,O=u.length,M=l;for(l===u&&(u=nr(u)),d&&(M=vt(l,br(d)));++E<O;)for(var F=0,V=u[E],K=d?d(V):V;(F=k(M,K,F,b))>-1;)M!==l&&Jf.call(M,F,1),Jf.call(l,F,1);return l}function x_(l,u){for(var d=l?u.length:0,b=d-1;d--;){var k=u[d];if(d==b||k!==E){var E=k;ti(k)?Jf.call(l,k,1):zb(l,k)}}return l}function Db(l,u){return l+nd(e_()*(u-l+1))}function rD(l,u,d,b){for(var k=-1,E=Jt(td((u-l)/(d||1)),0),O=j(E);E--;)O[b?E:++k]=l,l+=d;return O}function Nb(l,u){var d="";if(!l||u<1||u>fe)return d;do u%2&&(d+=l),u=nd(u/2),u&&(l+=l);while(u);return d}function Be(l,u){return Jb(Y_(l,u,ir),l+"")}function oD(l){return r_(os(l))}function iD(l,u){var d=os(l);return yd(d,Va(u,0,d.length))}function Qu(l,u,d,b){if(!_t(l))return l;u=Ui(u,l);for(var k=-1,E=u.length,O=E-1,M=l;M!=null&&++k<E;){var F=To(u[k]),V=d;if(F==="__proto__"||F==="constructor"||F==="prototype")return l;if(k!=O){var K=M[F];V=b?b(K,F,M):e,V===e&&(V=_t(K)?K:ti(u[k+1])?[]:{})}Vu(M,F,V),M=M[F]}return l}var w_=rd?function(l,u){return rd.set(l,u),l}:ir,aD=ed?function(l,u){return ed(l,"toString",{configurable:!0,enumerable:!1,value:u0(u),writable:!0})}:ir;function lD(l){return yd(os(l))}function Fr(l,u,d){var b=-1,k=l.length;u<0&&(u=-u>k?0:k+u),d=d>k?k:d,d<0&&(d+=k),k=u>d?0:d-u>>>0,u>>>=0;for(var E=j(k);++b<k;)E[b]=l[b+u];return E}function sD(l,u){var d;return zi(l,function(b,k,E){return d=u(b,k,E),!d}),!!d}function cd(l,u,d){var b=0,k=l==null?b:l.length;if(typeof u=="number"&&u===u&&k<=$e){for(;b<k;){var E=b+k>>>1,O=l[E];O!==null&&!yr(O)&&(d?O<=u:O<u)?b=E+1:k=E}return k}return Fb(l,u,ir,d)}function Fb(l,u,d,b){var k=0,E=l==null?0:l.length;if(E===0)return 0;u=d(u);for(var O=u!==u,M=u===null,F=yr(u),V=u===e;k<E;){var K=nd((k+E)/2),$=d(l[K]),ne=$!==e,ue=$===null,we=$===$,Fe=yr($);if(O)var ke=b||we;else V?ke=we&&(b||ne):M?ke=we&&ne&&(b||!ue):F?ke=we&&ne&&!ue&&(b||!Fe):ue||Fe?ke=!1:ke=b?$<=u:$<u;ke?k=K+1:E=K}return In(E,P)}function k_(l,u){for(var d=-1,b=l.length,k=0,E=[];++d<b;){var O=l[d],M=u?u(O):O;if(!d||!oo(M,F)){var F=M;E[k++]=O===0?0:O}}return E}function S_(l){return typeof l=="number"?l:yr(l)?ce:+l}function vr(l){if(typeof l=="string")return l;if(Ae(l))return vt(l,vr)+"";if(yr(l))return t_?t_.call(l):"";var u=l+"";return u=="0"&&1/l==-ee?"-0":u}function Bi(l,u,d){var b=-1,k=Wf,E=l.length,O=!0,M=[],F=M;if(d)O=!1,k=fb;else if(E>=n){var V=u?null:yD(l);if(V)return Vf(V);O=!1,k=Bu,F=new qa}else F=u?[]:M;e:for(;++b<E;){var K=l[b],$=u?u(K):K;if(K=d||K!==0?K:0,O&&$===$){for(var ne=F.length;ne--;)if(F[ne]===$)continue e;u&&F.push($),M.push(K)}else k(F,$,d)||(F!==M&&F.push($),M.push(K))}return M}function zb(l,u){return u=Ui(u,l),l=X_(l,u),l==null||delete l[To(zr(u))]}function __(l,u,d,b){return Qu(l,u,d(Ka(l,u)),b)}function pd(l,u,d,b){for(var k=l.length,E=b?k:-1;(b?E--:++E<k)&&u(l[E],E,l););return d?Fr(l,b?0:E,b?E+1:k):Fr(l,b?E+1:0,b?k:E)}function C_(l,u){var d=l;return d instanceof We&&(d=d.value()),db(u,function(b,k){return k.func.apply(k.thisArg,Mi([b],k.args))},d)}function Bb(l,u,d){var b=l.length;if(b<2)return b?Bi(l[0]):[];for(var k=-1,E=j(b);++k<b;)for(var O=l[k],M=-1;++M<b;)M!=k&&(E[k]=Ku(E[k]||O,l[M],u,d));return Bi(_n(E,1),u,d)}function E_(l,u,d){for(var b=-1,k=l.length,E=u.length,O={};++b<k;){var M=b<E?u[b]:e;d(O,l[b],M)}return O}function Ub(l){return jt(l)?l:[]}function jb(l){return typeof l=="function"?l:ir}function Ui(l,u){return Ae(l)?l:Yb(l,u)?[l]:t2(Qe(l))}var uD=Be;function ji(l,u,d){var b=l.length;return d=d===e?b:d,!u&&d>=b?l:Fr(l,u,d)}var R_=Y3||function(l){return cn.clearTimeout(l)};function T_(l,u){if(u)return l.slice();var d=l.length,b=QS?QS(d):new l.constructor(d);return l.copy(b),b}function Hb(l){var u=new l.constructor(l.byteLength);return new Xf(u).set(new Xf(l)),u}function cD(l,u){var d=u?Hb(l.buffer):l.buffer;return new l.constructor(d,l.byteOffset,l.byteLength)}function pD(l){var u=new l.constructor(l.source,Na.exec(l));return u.lastIndex=l.lastIndex,u}function fD(l){return qu?at(qu.call(l)):{}}function O_(l,u){var d=u?Hb(l.buffer):l.buffer;return new l.constructor(d,l.byteOffset,l.length)}function P_(l,u){if(l!==u){var d=l!==e,b=l===null,k=l===l,E=yr(l),O=u!==e,M=u===null,F=u===u,V=yr(u);if(!M&&!V&&!E&&l>u||E&&O&&F&&!M&&!V||b&&O&&F||!d&&F||!k)return 1;if(!b&&!E&&!V&&l<u||V&&d&&k&&!b&&!E||M&&d&&k||!O&&k||!F)return-1}return 0}function dD(l,u,d){for(var b=-1,k=l.criteria,E=u.criteria,O=k.length,M=d.length;++b<O;){var F=P_(k[b],E[b]);if(F){if(b>=M)return F;var V=d[b];return F*(V=="desc"?-1:1)}}return l.index-u.index}function I_(l,u,d,b){for(var k=-1,E=l.length,O=d.length,M=-1,F=u.length,V=Jt(E-O,0),K=j(F+V),$=!b;++M<F;)K[M]=u[M];for(;++k<O;)($||k<E)&&(K[d[k]]=l[k]);for(;V--;)K[M++]=l[k++];return K}function A_(l,u,d,b){for(var k=-1,E=l.length,O=-1,M=d.length,F=-1,V=u.length,K=Jt(E-M,0),$=j(K+V),ne=!b;++k<K;)$[k]=l[k];for(var ue=k;++F<V;)$[ue+F]=u[F];for(;++O<M;)(ne||k<E)&&($[ue+d[O]]=l[k++]);return $}function nr(l,u){var d=-1,b=l.length;for(u||(u=j(b));++d<b;)u[d]=l[d];return u}function Ro(l,u,d,b){var k=!d;d||(d={});for(var E=-1,O=u.length;++E<O;){var M=u[E],F=b?b(d[M],l[M],M,d,l):e;F===e&&(F=l[M]),k?Zo(d,M,F):Vu(d,M,F)}return d}function mD(l,u){return Ro(l,Qb(l),u)}function hD(l,u){return Ro(l,V_(l),u)}function fd(l,u){return function(d,b){var k=Ae(d)?x3:FM,E=u?u():{};return k(d,l,ve(b,2),E)}}function es(l){return Be(function(u,d){var b=-1,k=d.length,E=k>1?d[k-1]:e,O=k>2?d[2]:e;for(E=l.length>3&&typeof E=="function"?(k--,E):e,O&&Vn(d[0],d[1],O)&&(E=k<3?e:E,k=1),u=at(u);++b<k;){var M=d[b];M&&l(u,M,b,E)}return u})}function L_(l,u){return function(d,b){if(d==null)return d;if(!rr(d))return l(d,b);for(var k=d.length,E=u?k:-1,O=at(d);(u?E--:++E<k)&&b(O[E],E,O)!==!1;);return d}}function M_(l){return function(u,d,b){for(var k=-1,E=at(u),O=b(u),M=O.length;M--;){var F=O[l?M:++k];if(d(E[F],F,E)===!1)break}return u}}function gD(l,u,d){var b=u&v,k=Yu(l);function E(){var O=this&&this!==cn&&this instanceof E?k:l;return O.apply(b?d:this,arguments)}return E}function D_(l){return function(u){u=Qe(u);var d=Gl(u)?no(u):e,b=d?d[0]:u.charAt(0),k=d?ji(d,1).join(""):u.slice(1);return b[l]()+k}}function ts(l){return function(u){return db(L2(A2(u).replace(Nf,"")),l,"")}}function Yu(l){return function(){var u=arguments;switch(u.length){case 0:return new l;case 1:return new l(u[0]);case 2:return new l(u[0],u[1]);case 3:return new l(u[0],u[1],u[2]);case 4:return new l(u[0],u[1],u[2],u[3]);case 5:return new l(u[0],u[1],u[2],u[3],u[4]);case 6:return new l(u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return new l(u[0],u[1],u[2],u[3],u[4],u[5],u[6])}var d=Jl(l.prototype),b=l.apply(d,u);return _t(b)?b:d}}function bD(l,u,d){var b=Yu(l);function k(){for(var E=arguments.length,O=j(E),M=E,F=ns(k);M--;)O[M]=arguments[M];var V=E<3&&O[0]!==F&&O[E-1]!==F?[]:Di(O,F);if(E-=V.length,E<d)return U_(l,u,dd,k.placeholder,e,O,V,e,e,d-E);var K=this&&this!==cn&&this instanceof k?b:l;return gr(K,this,O)}return k}function N_(l){return function(u,d,b){var k=at(u);if(!rr(u)){var E=ve(d,3);u=pn(u),d=function(M){return E(k[M],M,k)}}var O=l(u,d,b);return O>-1?k[E?u[O]:O]:e}}function F_(l){return ei(function(u){var d=u.length,b=d,k=Dr.prototype.thru;for(l&&u.reverse();b--;){var E=u[b];if(typeof E!="function")throw new Mr(o);if(k&&!O&&bd(E)=="wrapper")var O=new Dr([],!0)}for(b=O?b:d;++b<d;){E=u[b];var M=bd(E),F=M=="wrapper"?$b(E):e;F&&Xb(F[0])&&F[1]==(I|y|S|R)&&!F[4].length&&F[9]==1?O=O[bd(F[0])].apply(O,F[3]):O=E.length==1&&Xb(E)?O[M]():O.thru(E)}return function(){var V=arguments,K=V[0];if(O&&V.length==1&&Ae(K))return O.plant(K).value();for(var $=0,ne=d?u[$].apply(this,V):K;++$<d;)ne=u[$].call(this,ne);return ne}})}function dd(l,u,d,b,k,E,O,M,F,V){var K=u&I,$=u&v,ne=u&w,ue=u&(y|x),we=u&D,Fe=ne?e:Yu(l);function ke(){for(var je=arguments.length,qe=j(je),xr=je;xr--;)qe[xr]=arguments[xr];if(ue)var Kn=ns(ke),wr=O3(qe,Kn);if(b&&(qe=I_(qe,b,k,ue)),E&&(qe=A_(qe,E,O,ue)),je-=wr,ue&&je<V){var Ht=Di(qe,Kn);return U_(l,u,dd,ke.placeholder,d,qe,Ht,M,F,V-je)}var io=$?d:this,oi=ne?io[l]:l;return je=qe.length,M?qe=FD(qe,M):we&&je>1&&qe.reverse(),K&&F<je&&(qe.length=F),this&&this!==cn&&this instanceof ke&&(oi=Fe||Yu(oi)),oi.apply(io,qe)}return ke}function z_(l,u){return function(d,b){return VM(d,l,u(b),{})}}function md(l,u){return function(d,b){var k;if(d===e&&b===e)return u;if(d!==e&&(k=d),b!==e){if(k===e)return b;typeof d=="string"||typeof b=="string"?(d=vr(d),b=vr(b)):(d=S_(d),b=S_(b)),k=l(d,b)}return k}}function Wb(l){return ei(function(u){return u=vt(u,br(ve())),Be(function(d){var b=this;return l(u,function(k){return gr(k,b,d)})})})}function hd(l,u){u=u===e?" ":vr(u);var d=u.length;if(d<2)return d?Nb(u,l):u;var b=Nb(u,td(l/Ql(u)));return Gl(u)?ji(no(b),0,l).join(""):b.slice(0,l)}function vD(l,u,d,b){var k=u&v,E=Yu(l);function O(){for(var M=-1,F=arguments.length,V=-1,K=b.length,$=j(K+F),ne=this&&this!==cn&&this instanceof O?E:l;++V<K;)$[V]=b[V];for(;F--;)$[V++]=arguments[++M];return gr(ne,k?d:this,$)}return O}function B_(l){return function(u,d,b){return b&&typeof b!="number"&&Vn(u,d,b)&&(d=b=e),u=ri(u),d===e?(d=u,u=0):d=ri(d),b=b===e?u<d?1:-1:ri(b),rD(u,d,b,l)}}function gd(l){return function(u,d){return typeof u=="string"&&typeof d=="string"||(u=Br(u),d=Br(d)),l(u,d)}}function U_(l,u,d,b,k,E,O,M,F,V){var K=u&y,$=K?O:e,ne=K?e:O,ue=K?E:e,we=K?e:E;u|=K?S:T,u&=~(K?T:S),u&_||(u&=~(v|w));var Fe=[l,u,k,ue,$,we,ne,M,F,V],ke=d.apply(e,Fe);return Xb(l)&&Z_(ke,Fe),ke.placeholder=b,J_(ke,l,u)}function qb(l){var u=Zt[l];return function(d,b){if(d=Br(d),b=b==null?0:In(De(b),292),b&&JS(d)){var k=(Qe(d)+"e").split("e"),E=u(k[0]+"e"+(+k[1]+b));return k=(Qe(E)+"e").split("e"),+(k[0]+"e"+(+k[1]-b))}return u(d)}}var yD=Xl&&1/Vf(new Xl([,-0]))[1]==ee?function(l){return new Xl(l)}:f0;function j_(l){return function(u){var d=An(u);return d==st?xb(u):d==Ut?N3(u):T3(u,l(u))}}function Jo(l,u,d,b,k,E,O,M){var F=u&w;if(!F&&typeof l!="function")throw new Mr(o);var V=b?b.length:0;if(V||(u&=~(S|T),b=k=e),O=O===e?O:Jt(De(O),0),M=M===e?M:De(M),V-=k?k.length:0,u&T){var K=b,$=k;b=k=e}var ne=F?e:$b(l),ue=[l,u,d,b,k,K,$,E,O,M];if(ne&&MD(ue,ne),l=ue[0],u=ue[1],d=ue[2],b=ue[3],k=ue[4],M=ue[9]=ue[9]===e?F?0:l.length:Jt(ue[9]-V,0),!M&&u&(y|x)&&(u&=~(y|x)),!u||u==v)var we=gD(l,u,d);else u==y||u==x?we=bD(l,u,M):(u==S||u==(v|S))&&!k.length?we=vD(l,u,d,b):we=dd.apply(e,ue);var Fe=ne?w_:Z_;return J_(Fe(we,ue),l,u)}function H_(l,u,d,b){return l===e||oo(l,Yl[d])&&!Xe.call(b,d)?u:l}function W_(l,u,d,b,k,E){return _t(l)&&_t(u)&&(E.set(u,l),ud(l,u,e,W_,E),E.delete(u)),l}function xD(l){return Ju(l)?e:l}function q_(l,u,d,b,k,E){var O=d&h,M=l.length,F=u.length;if(M!=F&&!(O&&F>M))return!1;var V=E.get(l),K=E.get(u);if(V&&K)return V==u&&K==l;var $=-1,ne=!0,ue=d&g?new qa:e;for(E.set(l,u),E.set(u,l);++$<M;){var we=l[$],Fe=u[$];if(b)var ke=O?b(Fe,we,$,u,l,E):b(we,Fe,$,l,u,E);if(ke!==e){if(ke)continue;ne=!1;break}if(ue){if(!mb(u,function(je,qe){if(!Bu(ue,qe)&&(we===je||k(we,je,d,b,E)))return ue.push(qe)})){ne=!1;break}}else if(!(we===Fe||k(we,Fe,d,b,E))){ne=!1;break}}return E.delete(l),E.delete(u),ne}function wD(l,u,d,b,k,E,O){switch(d){case H:if(l.byteLength!=u.byteLength||l.byteOffset!=u.byteOffset)return!1;l=l.buffer,u=u.buffer;case Wn:return!(l.byteLength!=u.byteLength||!E(new Xf(l),new Xf(u)));case wn:case $t:case kn:return oo(+l,+u);case sn:return l.name==u.name&&l.message==u.message;case er:case On:return l==u+"";case st:var M=xb;case Ut:var F=b&h;if(M||(M=Vf),l.size!=u.size&&!F)return!1;var V=O.get(l);if(V)return V==u;b|=g,O.set(l,u);var K=q_(M(l),M(u),b,k,E,O);return O.delete(l),K;case hr:if(qu)return qu.call(l)==qu.call(u)}return!1}function kD(l,u,d,b,k,E){var O=d&h,M=Vb(l),F=M.length,V=Vb(u),K=V.length;if(F!=K&&!O)return!1;for(var $=F;$--;){var ne=M[$];if(!(O?ne in u:Xe.call(u,ne)))return!1}var ue=E.get(l),we=E.get(u);if(ue&&we)return ue==u&&we==l;var Fe=!0;E.set(l,u),E.set(u,l);for(var ke=O;++$<F;){ne=M[$];var je=l[ne],qe=u[ne];if(b)var xr=O?b(qe,je,ne,u,l,E):b(je,qe,ne,l,u,E);if(!(xr===e?je===qe||k(je,qe,d,b,E):xr)){Fe=!1;break}ke||(ke=ne=="constructor")}if(Fe&&!ke){var Kn=l.constructor,wr=u.constructor;Kn!=wr&&"constructor"in l&&"constructor"in u&&!(typeof Kn=="function"&&Kn instanceof Kn&&typeof wr=="function"&&wr instanceof wr)&&(Fe=!1)}return E.delete(l),E.delete(u),Fe}function ei(l){return Jb(Y_(l,e,i2),l+"")}function Vb(l){return c_(l,pn,Qb)}function Kb(l){return c_(l,or,V_)}var $b=rd?function(l){return rd.get(l)}:f0;function bd(l){for(var u=l.name+"",d=Zl[u],b=Xe.call(Zl,u)?d.length:0;b--;){var k=d[b],E=k.func;if(E==null||E==l)return k.name}return u}function ns(l){var u=Xe.call(C,"placeholder")?C:l;return u.placeholder}function ve(){var l=C.iteratee||c0;return l=l===c0?d_:l,arguments.length?l(arguments[0],arguments[1]):l}function vd(l,u){var d=l.__data__;return PD(u)?d[typeof u=="string"?"string":"hash"]:d.map}function Gb(l){for(var u=pn(l),d=u.length;d--;){var b=u[d],k=l[b];u[d]=[b,k,G_(k)]}return u}function $a(l,u){var d=L3(l,u);return f_(d)?d:e}function SD(l){var u=Xe.call(l,Ha),d=l[Ha];try{l[Ha]=e;var b=!0}catch{}var k=Qf.call(l);return b&&(u?l[Ha]=d:delete l[Ha]),k}var Qb=kb?function(l){return l==null?[]:(l=at(l),Li(kb(l),function(u){return XS.call(l,u)}))}:d0,V_=kb?function(l){for(var u=[];l;)Mi(u,Qb(l)),l=Zf(l);return u}:d0,An=qn;(Sb&&An(new Sb(new ArrayBuffer(1)))!=H||ju&&An(new ju)!=st||_b&&An(_b.resolve())!=Pt||Xl&&An(new Xl)!=Ut||Hu&&An(new Hu)!=Sn)&&(An=function(l){var u=qn(l),d=u==Ot?l.constructor:e,b=d?Ga(d):"";if(b)switch(b){case iM:return H;case aM:return st;case lM:return Pt;case sM:return Ut;case uM:return Sn}return u});function _D(l,u,d){for(var b=-1,k=d.length;++b<k;){var E=d[b],O=E.size;switch(E.type){case"drop":l+=O;break;case"dropRight":u-=O;break;case"take":u=In(u,l+O);break;case"takeRight":l=Jt(l,u-O);break}}return{start:l,end:u}}function CD(l){var u=l.match(df);return u?u[1].split(mf):[]}function K_(l,u,d){u=Ui(u,l);for(var b=-1,k=u.length,E=!1;++b<k;){var O=To(u[b]);if(!(E=l!=null&&d(l,O)))break;l=l[O]}return E||++b!=k?E:(k=l==null?0:l.length,!!k&&Cd(k)&&ti(O,k)&&(Ae(l)||Qa(l)))}function ED(l){var u=l.length,d=new l.constructor(u);return u&&typeof l[0]=="string"&&Xe.call(l,"index")&&(d.index=l.index,d.input=l.input),d}function $_(l){return typeof l.constructor=="function"&&!Xu(l)?Jl(Zf(l)):{}}function RD(l,u,d){var b=l.constructor;switch(u){case Wn:return Hb(l);case wn:case $t:return new b(+l);case H:return cD(l,d);case J:case de:case _e:case ze:case It:case Gt:case pe:case q:case re:return O_(l,d);case st:return new b;case kn:case On:return new b(l);case er:return pD(l);case Ut:return new b;case hr:return fD(l)}}function TD(l,u){var d=u.length;if(!d)return l;var b=d-1;return u[b]=(d>1?"& ":"")+u[b],u=u.join(d>2?", ":" "),l.replace(ff,`{
/* [wrapped with `+u+`] */
`)}function OD(l){return Ae(l)||Qa(l)||!!(ZS&&l&&l[ZS])}function ti(l,u){var d=typeof l;return u=u??fe,!!u&&(d=="number"||d!="symbol"&&sb.test(l))&&l>-1&&l%1==0&&l<u}function Vn(l,u,d){if(!_t(d))return!1;var b=typeof u;return(b=="number"?rr(d)&&ti(u,d.length):b=="string"&&u in d)?oo(d[u],l):!1}function Yb(l,u){if(Ae(l))return!1;var d=typeof l;return d=="number"||d=="symbol"||d=="boolean"||l==null||yr(l)?!0:Ii.test(l)||!zl.test(l)||u!=null&&l in at(u)}function PD(l){var u=typeof l;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?l!=="__proto__":l===null}function Xb(l){var u=bd(l),d=C[u];if(typeof d!="function"||!(u in We.prototype))return!1;if(l===d)return!0;var b=$b(d);return!!b&&l===b[0]}function ID(l){return!!GS&&GS in l}var AD=$f?ni:m0;function Xu(l){var u=l&&l.constructor,d=typeof u=="function"&&u.prototype||Yl;return l===d}function G_(l){return l===l&&!_t(l)}function Q_(l,u){return function(d){return d==null?!1:d[l]===u&&(u!==e||l in at(d))}}function LD(l){var u=Sd(l,function(b){return d.size===s&&d.clear(),b}),d=u.cache;return u}function MD(l,u){var d=l[1],b=u[1],k=d|b,E=k<(v|w|I),O=b==I&&d==y||b==I&&d==R&&l[7].length<=u[8]||b==(I|R)&&u[7].length<=u[8]&&d==y;if(!(E||O))return l;b&v&&(l[2]=u[2],k|=d&v?0:_);var M=u[3];if(M){var F=l[3];l[3]=F?I_(F,M,u[4]):M,l[4]=F?Di(l[3],c):u[4]}return M=u[5],M&&(F=l[5],l[5]=F?A_(F,M,u[6]):M,l[6]=F?Di(l[5],c):u[6]),M=u[7],M&&(l[7]=M),b&I&&(l[8]=l[8]==null?u[8]:In(l[8],u[8])),l[9]==null&&(l[9]=u[9]),l[0]=u[0],l[1]=k,l}function DD(l){var u=[];if(l!=null)for(var d in at(l))u.push(d);return u}function ND(l){return Qf.call(l)}function Y_(l,u,d){return u=Jt(u===e?l.length-1:u,0),function(){for(var b=arguments,k=-1,E=Jt(b.length-u,0),O=j(E);++k<E;)O[k]=b[u+k];k=-1;for(var M=j(u+1);++k<u;)M[k]=b[k];return M[u]=d(O),gr(l,this,M)}}function X_(l,u){return u.length<2?l:Ka(l,Fr(u,0,-1))}function FD(l,u){for(var d=l.length,b=In(u.length,d),k=nr(l);b--;){var E=u[b];l[b]=ti(E,d)?k[E]:e}return l}function Zb(l,u){if(!(u==="constructor"&&typeof l[u]=="function")&&u!="__proto__")return l[u]}var Z_=e2(w_),Zu=Z3||function(l,u){return cn.setTimeout(l,u)},Jb=e2(aD);function J_(l,u,d){var b=u+"";return Jb(l,TD(b,zD(CD(b),d)))}function e2(l){var u=0,d=0;return function(){var b=nM(),k=te-(b-d);if(d=b,k>0){if(++u>=A)return arguments[0]}else u=0;return l.apply(e,arguments)}}function yd(l,u){var d=-1,b=l.length,k=b-1;for(u=u===e?b:u;++d<u;){var E=Db(d,k),O=l[E];l[E]=l[d],l[d]=O}return l.length=u,l}var t2=LD(function(l){var u=[];return l.charCodeAt(0)===46&&u.push(""),l.replace(Ma,function(d,b,k,E){u.push(k?E.replace(bf,"$1"):b||d)}),u});function To(l){if(typeof l=="string"||yr(l))return l;var u=l+"";return u=="0"&&1/l==-ee?"-0":u}function Ga(l){if(l!=null){try{return Gf.call(l)}catch{}try{return l+""}catch{}}return""}function zD(l,u){return Lr(ln,function(d){var b="_."+d[0];u&d[1]&&!Wf(l,b)&&l.push(b)}),l.sort()}function n2(l){if(l instanceof We)return l.clone();var u=new Dr(l.__wrapped__,l.__chain__);return u.__actions__=nr(l.__actions__),u.__index__=l.__index__,u.__values__=l.__values__,u}function BD(l,u,d){(d?Vn(l,u,d):u===e)?u=1:u=Jt(De(u),0);var b=l==null?0:l.length;if(!b||u<1)return[];for(var k=0,E=0,O=j(td(b/u));k<b;)O[E++]=Fr(l,k,k+=u);return O}function UD(l){for(var u=-1,d=l==null?0:l.length,b=0,k=[];++u<d;){var E=l[u];E&&(k[b++]=E)}return k}function jD(){var l=arguments.length;if(!l)return[];for(var u=j(l-1),d=arguments[0],b=l;b--;)u[b-1]=arguments[b];return Mi(Ae(d)?nr(d):[d],_n(u,1))}var HD=Be(function(l,u){return jt(l)?Ku(l,_n(u,1,jt,!0)):[]}),WD=Be(function(l,u){var d=zr(u);return jt(d)&&(d=e),jt(l)?Ku(l,_n(u,1,jt,!0),ve(d,2)):[]}),qD=Be(function(l,u){var d=zr(u);return jt(d)&&(d=e),jt(l)?Ku(l,_n(u,1,jt,!0),e,d):[]});function VD(l,u,d){var b=l==null?0:l.length;return b?(u=d||u===e?1:De(u),Fr(l,u<0?0:u,b)):[]}function KD(l,u,d){var b=l==null?0:l.length;return b?(u=d||u===e?1:De(u),u=b-u,Fr(l,0,u<0?0:u)):[]}function $D(l,u){return l&&l.length?pd(l,ve(u,3),!0,!0):[]}function GD(l,u){return l&&l.length?pd(l,ve(u,3),!0):[]}function QD(l,u,d,b){var k=l==null?0:l.length;return k?(d&&typeof d!="number"&&Vn(l,u,d)&&(d=0,b=k),jM(l,u,d,b)):[]}function r2(l,u,d){var b=l==null?0:l.length;if(!b)return-1;var k=d==null?0:De(d);return k<0&&(k=Jt(b+k,0)),qf(l,ve(u,3),k)}function o2(l,u,d){var b=l==null?0:l.length;if(!b)return-1;var k=b-1;return d!==e&&(k=De(d),k=d<0?Jt(b+k,0):In(k,b-1)),qf(l,ve(u,3),k,!0)}function i2(l){var u=l==null?0:l.length;return u?_n(l,1):[]}function YD(l){var u=l==null?0:l.length;return u?_n(l,ee):[]}function XD(l,u){var d=l==null?0:l.length;return d?(u=u===e?1:De(u),_n(l,u)):[]}function ZD(l){for(var u=-1,d=l==null?0:l.length,b={};++u<d;){var k=l[u];b[k[0]]=k[1]}return b}function a2(l){return l&&l.length?l[0]:e}function JD(l,u,d){var b=l==null?0:l.length;if(!b)return-1;var k=d==null?0:De(d);return k<0&&(k=Jt(b+k,0)),$l(l,u,k)}function eN(l){var u=l==null?0:l.length;return u?Fr(l,0,-1):[]}var tN=Be(function(l){var u=vt(l,Ub);return u.length&&u[0]===l[0]?Pb(u):[]}),nN=Be(function(l){var u=zr(l),d=vt(l,Ub);return u===zr(d)?u=e:d.pop(),d.length&&d[0]===l[0]?Pb(d,ve(u,2)):[]}),rN=Be(function(l){var u=zr(l),d=vt(l,Ub);return u=typeof u=="function"?u:e,u&&d.pop(),d.length&&d[0]===l[0]?Pb(d,e,u):[]});function oN(l,u){return l==null?"":eM.call(l,u)}function zr(l){var u=l==null?0:l.length;return u?l[u-1]:e}function iN(l,u,d){var b=l==null?0:l.length;if(!b)return-1;var k=b;return d!==e&&(k=De(d),k=k<0?Jt(b+k,0):In(k,b-1)),u===u?z3(l,u,k):qf(l,US,k,!0)}function aN(l,u){return l&&l.length?b_(l,De(u)):e}var lN=Be(l2);function l2(l,u){return l&&l.length&&u&&u.length?Mb(l,u):l}function sN(l,u,d){return l&&l.length&&u&&u.length?Mb(l,u,ve(d,2)):l}function uN(l,u,d){return l&&l.length&&u&&u.length?Mb(l,u,e,d):l}var cN=ei(function(l,u){var d=l==null?0:l.length,b=Eb(l,u);return x_(l,vt(u,function(k){return ti(k,d)?+k:k}).sort(P_)),b});function pN(l,u){var d=[];if(!(l&&l.length))return d;var b=-1,k=[],E=l.length;for(u=ve(u,3);++b<E;){var O=l[b];u(O,b,l)&&(d.push(O),k.push(b))}return x_(l,k),d}function e0(l){return l==null?l:oM.call(l)}function fN(l,u,d){var b=l==null?0:l.length;return b?(d&&typeof d!="number"&&Vn(l,u,d)?(u=0,d=b):(u=u==null?0:De(u),d=d===e?b:De(d)),Fr(l,u,d)):[]}function dN(l,u){return cd(l,u)}function mN(l,u,d){return Fb(l,u,ve(d,2))}function hN(l,u){var d=l==null?0:l.length;if(d){var b=cd(l,u);if(b<d&&oo(l[b],u))return b}return-1}function gN(l,u){return cd(l,u,!0)}function bN(l,u,d){return Fb(l,u,ve(d,2),!0)}function vN(l,u){var d=l==null?0:l.length;if(d){var b=cd(l,u,!0)-1;if(oo(l[b],u))return b}return-1}function yN(l){return l&&l.length?k_(l):[]}function xN(l,u){return l&&l.length?k_(l,ve(u,2)):[]}function wN(l){var u=l==null?0:l.length;return u?Fr(l,1,u):[]}function kN(l,u,d){return l&&l.length?(u=d||u===e?1:De(u),Fr(l,0,u<0?0:u)):[]}function SN(l,u,d){var b=l==null?0:l.length;return b?(u=d||u===e?1:De(u),u=b-u,Fr(l,u<0?0:u,b)):[]}function _N(l,u){return l&&l.length?pd(l,ve(u,3),!1,!0):[]}function CN(l,u){return l&&l.length?pd(l,ve(u,3)):[]}var EN=Be(function(l){return Bi(_n(l,1,jt,!0))}),RN=Be(function(l){var u=zr(l);return jt(u)&&(u=e),Bi(_n(l,1,jt,!0),ve(u,2))}),TN=Be(function(l){var u=zr(l);return u=typeof u=="function"?u:e,Bi(_n(l,1,jt,!0),e,u)});function ON(l){return l&&l.length?Bi(l):[]}function PN(l,u){return l&&l.length?Bi(l,ve(u,2)):[]}function IN(l,u){return u=typeof u=="function"?u:e,l&&l.length?Bi(l,e,u):[]}function t0(l){if(!(l&&l.length))return[];var u=0;return l=Li(l,function(d){if(jt(d))return u=Jt(d.length,u),!0}),vb(u,function(d){return vt(l,hb(d))})}function s2(l,u){if(!(l&&l.length))return[];var d=t0(l);return u==null?d:vt(d,function(b){return gr(u,e,b)})}var AN=Be(function(l,u){return jt(l)?Ku(l,u):[]}),LN=Be(function(l){return Bb(Li(l,jt))}),MN=Be(function(l){var u=zr(l);return jt(u)&&(u=e),Bb(Li(l,jt),ve(u,2))}),DN=Be(function(l){var u=zr(l);return u=typeof u=="function"?u:e,Bb(Li(l,jt),e,u)}),NN=Be(t0);function FN(l,u){return E_(l||[],u||[],Vu)}function zN(l,u){return E_(l||[],u||[],Qu)}var BN=Be(function(l){var u=l.length,d=u>1?l[u-1]:e;return d=typeof d=="function"?(l.pop(),d):e,s2(l,d)});function u2(l){var u=C(l);return u.__chain__=!0,u}function UN(l,u){return u(l),l}function xd(l,u){return u(l)}var jN=ei(function(l){var u=l.length,d=u?l[0]:0,b=this.__wrapped__,k=function(E){return Eb(E,l)};return u>1||this.__actions__.length||!(b instanceof We)||!ti(d)?this.thru(k):(b=b.slice(d,+d+(u?1:0)),b.__actions__.push({func:xd,args:[k],thisArg:e}),new Dr(b,this.__chain__).thru(function(E){return u&&!E.length&&E.push(e),E}))});function HN(){return u2(this)}function WN(){return new Dr(this.value(),this.__chain__)}function qN(){this.__values__===e&&(this.__values__=S2(this.value()));var l=this.__index__>=this.__values__.length,u=l?e:this.__values__[this.__index__++];return{done:l,value:u}}function VN(){return this}function KN(l){for(var u,d=this;d instanceof id;){var b=n2(d);b.__index__=0,b.__values__=e,u?k.__wrapped__=b:u=b;var k=b;d=d.__wrapped__}return k.__wrapped__=l,u}function $N(){var l=this.__wrapped__;if(l instanceof We){var u=l;return this.__actions__.length&&(u=new We(this)),u=u.reverse(),u.__actions__.push({func:xd,args:[e0],thisArg:e}),new Dr(u,this.__chain__)}return this.thru(e0)}function GN(){return C_(this.__wrapped__,this.__actions__)}var QN=fd(function(l,u,d){Xe.call(l,d)?++l[d]:Zo(l,d,1)});function YN(l,u,d){var b=Ae(l)?zS:UM;return d&&Vn(l,u,d)&&(u=e),b(l,ve(u,3))}function XN(l,u){var d=Ae(l)?Li:s_;return d(l,ve(u,3))}var ZN=N_(r2),JN=N_(o2);function e7(l,u){return _n(wd(l,u),1)}function t7(l,u){return _n(wd(l,u),ee)}function n7(l,u,d){return d=d===e?1:De(d),_n(wd(l,u),d)}function c2(l,u){var d=Ae(l)?Lr:zi;return d(l,ve(u,3))}function p2(l,u){var d=Ae(l)?w3:l_;return d(l,ve(u,3))}var r7=fd(function(l,u,d){Xe.call(l,d)?l[d].push(u):Zo(l,d,[u])});function o7(l,u,d,b){l=rr(l)?l:os(l),d=d&&!b?De(d):0;var k=l.length;return d<0&&(d=Jt(k+d,0)),Ed(l)?d<=k&&l.indexOf(u,d)>-1:!!k&&$l(l,u,d)>-1}var i7=Be(function(l,u,d){var b=-1,k=typeof u=="function",E=rr(l)?j(l.length):[];return zi(l,function(O){E[++b]=k?gr(u,O,d):$u(O,u,d)}),E}),a7=fd(function(l,u,d){Zo(l,d,u)});function wd(l,u){var d=Ae(l)?vt:m_;return d(l,ve(u,3))}function l7(l,u,d,b){return l==null?[]:(Ae(u)||(u=u==null?[]:[u]),d=b?e:d,Ae(d)||(d=d==null?[]:[d]),v_(l,u,d))}var s7=fd(function(l,u,d){l[d?0:1].push(u)},function(){return[[],[]]});function u7(l,u,d){var b=Ae(l)?db:HS,k=arguments.length<3;return b(l,ve(u,4),d,k,zi)}function c7(l,u,d){var b=Ae(l)?k3:HS,k=arguments.length<3;return b(l,ve(u,4),d,k,l_)}function p7(l,u){var d=Ae(l)?Li:s_;return d(l,_d(ve(u,3)))}function f7(l){var u=Ae(l)?r_:oD;return u(l)}function d7(l,u,d){(d?Vn(l,u,d):u===e)?u=1:u=De(u);var b=Ae(l)?DM:iD;return b(l,u)}function m7(l){var u=Ae(l)?NM:lD;return u(l)}function h7(l){if(l==null)return 0;if(rr(l))return Ed(l)?Ql(l):l.length;var u=An(l);return u==st||u==Ut?l.size:Ab(l).length}function g7(l,u,d){var b=Ae(l)?mb:sD;return d&&Vn(l,u,d)&&(u=e),b(l,ve(u,3))}var b7=Be(function(l,u){if(l==null)return[];var d=u.length;return d>1&&Vn(l,u[0],u[1])?u=[]:d>2&&Vn(u[0],u[1],u[2])&&(u=[u[0]]),v_(l,_n(u,1),[])}),kd=X3||function(){return cn.Date.now()};function v7(l,u){if(typeof u!="function")throw new Mr(o);return l=De(l),function(){if(--l<1)return u.apply(this,arguments)}}function f2(l,u,d){return u=d?e:u,u=l&&u==null?l.length:u,Jo(l,I,e,e,e,e,u)}function d2(l,u){var d;if(typeof u!="function")throw new Mr(o);return l=De(l),function(){return--l>0&&(d=u.apply(this,arguments)),l<=1&&(u=e),d}}var n0=Be(function(l,u,d){var b=v;if(d.length){var k=Di(d,ns(n0));b|=S}return Jo(l,b,u,d,k)}),m2=Be(function(l,u,d){var b=v|w;if(d.length){var k=Di(d,ns(m2));b|=S}return Jo(u,b,l,d,k)});function h2(l,u,d){u=d?e:u;var b=Jo(l,y,e,e,e,e,e,u);return b.placeholder=h2.placeholder,b}function g2(l,u,d){u=d?e:u;var b=Jo(l,x,e,e,e,e,e,u);return b.placeholder=g2.placeholder,b}function b2(l,u,d){var b,k,E,O,M,F,V=0,K=!1,$=!1,ne=!0;if(typeof l!="function")throw new Mr(o);u=Br(u)||0,_t(d)&&(K=!!d.leading,$="maxWait"in d,E=$?Jt(Br(d.maxWait)||0,u):E,ne="trailing"in d?!!d.trailing:ne);function ue(Ht){var io=b,oi=k;return b=k=e,V=Ht,O=l.apply(oi,io),O}function we(Ht){return V=Ht,M=Zu(je,u),K?ue(Ht):O}function Fe(Ht){var io=Ht-F,oi=Ht-V,N2=u-io;return $?In(N2,E-oi):N2}function ke(Ht){var io=Ht-F,oi=Ht-V;return F===e||io>=u||io<0||$&&oi>=E}function je(){var Ht=kd();if(ke(Ht))return qe(Ht);M=Zu(je,Fe(Ht))}function qe(Ht){return M=e,ne&&b?ue(Ht):(b=k=e,O)}function xr(){M!==e&&R_(M),V=0,b=F=k=M=e}function Kn(){return M===e?O:qe(kd())}function wr(){var Ht=kd(),io=ke(Ht);if(b=arguments,k=this,F=Ht,io){if(M===e)return we(F);if($)return R_(M),M=Zu(je,u),ue(F)}return M===e&&(M=Zu(je,u)),O}return wr.cancel=xr,wr.flush=Kn,wr}var y7=Be(function(l,u){return a_(l,1,u)}),x7=Be(function(l,u,d){return a_(l,Br(u)||0,d)});function w7(l){return Jo(l,D)}function Sd(l,u){if(typeof l!="function"||u!=null&&typeof u!="function")throw new Mr(o);var d=function(){var b=arguments,k=u?u.apply(this,b):b[0],E=d.cache;if(E.has(k))return E.get(k);var O=l.apply(this,b);return d.cache=E.set(k,O)||E,O};return d.cache=new(Sd.Cache||Xo),d}Sd.Cache=Xo;function _d(l){if(typeof l!="function")throw new Mr(o);return function(){var u=arguments;switch(u.length){case 0:return!l.call(this);case 1:return!l.call(this,u[0]);case 2:return!l.call(this,u[0],u[1]);case 3:return!l.call(this,u[0],u[1],u[2])}return!l.apply(this,u)}}function k7(l){return d2(2,l)}var S7=uD(function(l,u){u=u.length==1&&Ae(u[0])?vt(u[0],br(ve())):vt(_n(u,1),br(ve()));var d=u.length;return Be(function(b){for(var k=-1,E=In(b.length,d);++k<E;)b[k]=u[k].call(this,b[k]);return gr(l,this,b)})}),r0=Be(function(l,u){var d=Di(u,ns(r0));return Jo(l,S,e,u,d)}),v2=Be(function(l,u){var d=Di(u,ns(v2));return Jo(l,T,e,u,d)}),_7=ei(function(l,u){return Jo(l,R,e,e,e,u)});function C7(l,u){if(typeof l!="function")throw new Mr(o);return u=u===e?u:De(u),Be(l,u)}function E7(l,u){if(typeof l!="function")throw new Mr(o);return u=u==null?0:Jt(De(u),0),Be(function(d){var b=d[u],k=ji(d,0,u);return b&&Mi(k,b),gr(l,this,k)})}function R7(l,u,d){var b=!0,k=!0;if(typeof l!="function")throw new Mr(o);return _t(d)&&(b="leading"in d?!!d.leading:b,k="trailing"in d?!!d.trailing:k),b2(l,u,{leading:b,maxWait:u,trailing:k})}function T7(l){return f2(l,1)}function O7(l,u){return r0(jb(u),l)}function P7(){if(!arguments.length)return[];var l=arguments[0];return Ae(l)?l:[l]}function I7(l){return Nr(l,m)}function A7(l,u){return u=typeof u=="function"?u:e,Nr(l,m,u)}function L7(l){return Nr(l,p|m)}function M7(l,u){return u=typeof u=="function"?u:e,Nr(l,p|m,u)}function D7(l,u){return u==null||i_(l,u,pn(u))}function oo(l,u){return l===u||l!==l&&u!==u}var N7=gd(Ob),F7=gd(function(l,u){return l>=u}),Qa=p_(function(){return arguments}())?p_:function(l){return Lt(l)&&Xe.call(l,"callee")&&!XS.call(l,"callee")},Ae=j.isArray,z7=AS?br(AS):KM;function rr(l){return l!=null&&Cd(l.length)&&!ni(l)}function jt(l){return Lt(l)&&rr(l)}function B7(l){return l===!0||l===!1||Lt(l)&&qn(l)==wn}var Hi=J3||m0,U7=LS?br(LS):$M;function j7(l){return Lt(l)&&l.nodeType===1&&!Ju(l)}function H7(l){if(l==null)return!0;if(rr(l)&&(Ae(l)||typeof l=="string"||typeof l.splice=="function"||Hi(l)||rs(l)||Qa(l)))return!l.length;var u=An(l);if(u==st||u==Ut)return!l.size;if(Xu(l))return!Ab(l).length;for(var d in l)if(Xe.call(l,d))return!1;return!0}function W7(l,u){return Gu(l,u)}function q7(l,u,d){d=typeof d=="function"?d:e;var b=d?d(l,u):e;return b===e?Gu(l,u,e,d):!!b}function o0(l){if(!Lt(l))return!1;var u=qn(l);return u==sn||u==Ie||typeof l.message=="string"&&typeof l.name=="string"&&!Ju(l)}function V7(l){return typeof l=="number"&&JS(l)}function ni(l){if(!_t(l))return!1;var u=qn(l);return u==Tt||u==un||u==xn||u==Ir}function y2(l){return typeof l=="number"&&l==De(l)}function Cd(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=fe}function _t(l){var u=typeof l;return l!=null&&(u=="object"||u=="function")}function Lt(l){return l!=null&&typeof l=="object"}var x2=MS?br(MS):QM;function K7(l,u){return l===u||Ib(l,u,Gb(u))}function $7(l,u,d){return d=typeof d=="function"?d:e,Ib(l,u,Gb(u),d)}function G7(l){return w2(l)&&l!=+l}function Q7(l){if(AD(l))throw new Oe(r);return f_(l)}function Y7(l){return l===null}function X7(l){return l==null}function w2(l){return typeof l=="number"||Lt(l)&&qn(l)==kn}function Ju(l){if(!Lt(l)||qn(l)!=Ot)return!1;var u=Zf(l);if(u===null)return!0;var d=Xe.call(u,"constructor")&&u.constructor;return typeof d=="function"&&d instanceof d&&Gf.call(d)==$3}var i0=DS?br(DS):YM;function Z7(l){return y2(l)&&l>=-fe&&l<=fe}var k2=NS?br(NS):XM;function Ed(l){return typeof l=="string"||!Ae(l)&&Lt(l)&&qn(l)==On}function yr(l){return typeof l=="symbol"||Lt(l)&&qn(l)==hr}var rs=FS?br(FS):ZM;function J7(l){return l===e}function eF(l){return Lt(l)&&An(l)==Sn}function tF(l){return Lt(l)&&qn(l)==tr}var nF=gd(Lb),rF=gd(function(l,u){return l<=u});function S2(l){if(!l)return[];if(rr(l))return Ed(l)?no(l):nr(l);if(Uu&&l[Uu])return D3(l[Uu]());var u=An(l),d=u==st?xb:u==Ut?Vf:os;return d(l)}function ri(l){if(!l)return l===0?l:0;if(l=Br(l),l===ee||l===-ee){var u=l<0?-1:1;return u*Me}return l===l?l:0}function De(l){var u=ri(l),d=u%1;return u===u?d?u-d:u:0}function _2(l){return l?Va(De(l),0,Le):0}function Br(l){if(typeof l=="number")return l;if(yr(l))return ce;if(_t(l)){var u=typeof l.valueOf=="function"?l.valueOf():l;l=_t(u)?u+"":u}if(typeof l!="string")return l===0?l:+l;l=WS(l);var d=yf.test(l);return d||xu.test(l)?v3(l.slice(2),d?2:8):Fa.test(l)?ce:+l}function C2(l){return Ro(l,or(l))}function oF(l){return l?Va(De(l),-fe,fe):l===0?l:0}function Qe(l){return l==null?"":vr(l)}var iF=es(function(l,u){if(Xu(u)||rr(u)){Ro(u,pn(u),l);return}for(var d in u)Xe.call(u,d)&&Vu(l,d,u[d])}),E2=es(function(l,u){Ro(u,or(u),l)}),Rd=es(function(l,u,d,b){Ro(u,or(u),l,b)}),aF=es(function(l,u,d,b){Ro(u,pn(u),l,b)}),lF=ei(Eb);function sF(l,u){var d=Jl(l);return u==null?d:o_(d,u)}var uF=Be(function(l,u){l=at(l);var d=-1,b=u.length,k=b>2?u[2]:e;for(k&&Vn(u[0],u[1],k)&&(b=1);++d<b;)for(var E=u[d],O=or(E),M=-1,F=O.length;++M<F;){var V=O[M],K=l[V];(K===e||oo(K,Yl[V])&&!Xe.call(l,V))&&(l[V]=E[V])}return l}),cF=Be(function(l){return l.push(e,W_),gr(R2,e,l)});function pF(l,u){return BS(l,ve(u,3),Eo)}function fF(l,u){return BS(l,ve(u,3),Tb)}function dF(l,u){return l==null?l:Rb(l,ve(u,3),or)}function mF(l,u){return l==null?l:u_(l,ve(u,3),or)}function hF(l,u){return l&&Eo(l,ve(u,3))}function gF(l,u){return l&&Tb(l,ve(u,3))}function bF(l){return l==null?[]:sd(l,pn(l))}function vF(l){return l==null?[]:sd(l,or(l))}function a0(l,u,d){var b=l==null?e:Ka(l,u);return b===e?d:b}function yF(l,u){return l!=null&&K_(l,u,HM)}function l0(l,u){return l!=null&&K_(l,u,WM)}var xF=z_(function(l,u,d){u!=null&&typeof u.toString!="function"&&(u=Qf.call(u)),l[u]=d},u0(ir)),wF=z_(function(l,u,d){u!=null&&typeof u.toString!="function"&&(u=Qf.call(u)),Xe.call(l,u)?l[u].push(d):l[u]=[d]},ve),kF=Be($u);function pn(l){return rr(l)?n_(l):Ab(l)}function or(l){return rr(l)?n_(l,!0):JM(l)}function SF(l,u){var d={};return u=ve(u,3),Eo(l,function(b,k,E){Zo(d,u(b,k,E),b)}),d}function _F(l,u){var d={};return u=ve(u,3),Eo(l,function(b,k,E){Zo(d,k,u(b,k,E))}),d}var CF=es(function(l,u,d){ud(l,u,d)}),R2=es(function(l,u,d,b){ud(l,u,d,b)}),EF=ei(function(l,u){var d={};if(l==null)return d;var b=!1;u=vt(u,function(E){return E=Ui(E,l),b||(b=E.length>1),E}),Ro(l,Kb(l),d),b&&(d=Nr(d,p|f|m,xD));for(var k=u.length;k--;)zb(d,u[k]);return d});function RF(l,u){return T2(l,_d(ve(u)))}var TF=ei(function(l,u){return l==null?{}:tD(l,u)});function T2(l,u){if(l==null)return{};var d=vt(Kb(l),function(b){return[b]});return u=ve(u),y_(l,d,function(b,k){return u(b,k[0])})}function OF(l,u,d){u=Ui(u,l);var b=-1,k=u.length;for(k||(k=1,l=e);++b<k;){var E=l==null?e:l[To(u[b])];E===e&&(b=k,E=d),l=ni(E)?E.call(l):E}return l}function PF(l,u,d){return l==null?l:Qu(l,u,d)}function IF(l,u,d,b){return b=typeof b=="function"?b:e,l==null?l:Qu(l,u,d,b)}var O2=j_(pn),P2=j_(or);function AF(l,u,d){var b=Ae(l),k=b||Hi(l)||rs(l);if(u=ve(u,4),d==null){var E=l&&l.constructor;k?d=b?new E:[]:_t(l)?d=ni(E)?Jl(Zf(l)):{}:d={}}return(k?Lr:Eo)(l,function(O,M,F){return u(d,O,M,F)}),d}function LF(l,u){return l==null?!0:zb(l,u)}function MF(l,u,d){return l==null?l:__(l,u,jb(d))}function DF(l,u,d,b){return b=typeof b=="function"?b:e,l==null?l:__(l,u,jb(d),b)}function os(l){return l==null?[]:yb(l,pn(l))}function NF(l){return l==null?[]:yb(l,or(l))}function FF(l,u,d){return d===e&&(d=u,u=e),d!==e&&(d=Br(d),d=d===d?d:0),u!==e&&(u=Br(u),u=u===u?u:0),Va(Br(l),u,d)}function zF(l,u,d){return u=ri(u),d===e?(d=u,u=0):d=ri(d),l=Br(l),qM(l,u,d)}function BF(l,u,d){if(d&&typeof d!="boolean"&&Vn(l,u,d)&&(u=d=e),d===e&&(typeof u=="boolean"?(d=u,u=e):typeof l=="boolean"&&(d=l,l=e)),l===e&&u===e?(l=0,u=1):(l=ri(l),u===e?(u=l,l=0):u=ri(u)),l>u){var b=l;l=u,u=b}if(d||l%1||u%1){var k=e_();return In(l+k*(u-l+b3("1e-"+((k+"").length-1))),u)}return Db(l,u)}var UF=ts(function(l,u,d){return u=u.toLowerCase(),l+(d?I2(u):u)});function I2(l){return s0(Qe(l).toLowerCase())}function A2(l){return l=Qe(l),l&&l.replace(za,P3).replace(Ff,"")}function jF(l,u,d){l=Qe(l),u=vr(u);var b=l.length;d=d===e?b:Va(De(d),0,b);var k=d;return d-=u.length,d>=0&&l.slice(d,k)==u}function HF(l){return l=Qe(l),l&&$o.test(l)?l.replace(Pn,I3):l}function WF(l){return l=Qe(l),l&&Bl.test(l)?l.replace(Co,"\\$&"):l}var qF=ts(function(l,u,d){return l+(d?"-":"")+u.toLowerCase()}),VF=ts(function(l,u,d){return l+(d?" ":"")+u.toLowerCase()}),KF=D_("toLowerCase");function $F(l,u,d){l=Qe(l),u=De(u);var b=u?Ql(l):0;if(!u||b>=u)return l;var k=(u-b)/2;return hd(nd(k),d)+l+hd(td(k),d)}function GF(l,u,d){l=Qe(l),u=De(u);var b=u?Ql(l):0;return u&&b<u?l+hd(u-b,d):l}function QF(l,u,d){l=Qe(l),u=De(u);var b=u?Ql(l):0;return u&&b<u?hd(u-b,d)+l:l}function YF(l,u,d){return d||u==null?u=0:u&&(u=+u),rM(Qe(l).replace(Ai,""),u||0)}function XF(l,u,d){return(d?Vn(l,u,d):u===e)?u=1:u=De(u),Nb(Qe(l),u)}function ZF(){var l=arguments,u=Qe(l[0]);return l.length<3?u:u.replace(l[1],l[2])}var JF=ts(function(l,u,d){return l+(d?"_":"")+u.toLowerCase()});function ez(l,u,d){return d&&typeof d!="number"&&Vn(l,u,d)&&(u=d=e),d=d===e?Le:d>>>0,d?(l=Qe(l),l&&(typeof u=="string"||u!=null&&!i0(u))&&(u=vr(u),!u&&Gl(l))?ji(no(l),0,d):l.split(u,d)):[]}var tz=ts(function(l,u,d){return l+(d?" ":"")+s0(u)});function nz(l,u,d){return l=Qe(l),d=d==null?0:Va(De(d),0,l.length),u=vr(u),l.slice(d,d+u.length)==u}function rz(l,u,d){var b=C.templateSettings;d&&Vn(l,u,d)&&(u=e),l=Qe(l),u=Rd({},u,b,H_);var k=Rd({},u.imports,b.imports,H_),E=pn(k),O=yb(k,E),M,F,V=0,K=u.interpolate||Ba,$="__p += '",ne=wb((u.escape||Ba).source+"|"+K.source+"|"+(K===La?vf:Ba).source+"|"+(u.evaluate||Ba).source+"|$","g"),ue="//# sourceURL="+(Xe.call(u,"sourceURL")?(u.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Uf+"]")+`
`;l.replace(ne,function(ke,je,qe,xr,Kn,wr){return qe||(qe=xr),$+=l.slice(V,wr).replace(se,A3),je&&(M=!0,$+=`' +
__e(`+je+`) +
'`),Kn&&(F=!0,$+=`';
`+Kn+`;
__p += '`),qe&&($+=`' +
((__t = (`+qe+`)) == null ? '' : __t) +
'`),V=wr+ke.length,ke}),$+=`';
`;var we=Xe.call(u,"variable")&&u.variable;if(!we)$=`with (obj) {
`+$+`
}
`;else if(gf.test(we))throw new Oe(i);$=(F?$.replace(be,""):$).replace(he,"$1").replace(xe,"$1;"),$="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(M?", __e = _.escape":"")+(F?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var Fe=M2(function(){return Ge(E,ue+"return "+$).apply(e,O)});if(Fe.source=$,o0(Fe))throw Fe;return Fe}function oz(l){return Qe(l).toLowerCase()}function iz(l){return Qe(l).toUpperCase()}function az(l,u,d){if(l=Qe(l),l&&(d||u===e))return WS(l);if(!l||!(u=vr(u)))return l;var b=no(l),k=no(u),E=qS(b,k),O=VS(b,k)+1;return ji(b,E,O).join("")}function lz(l,u,d){if(l=Qe(l),l&&(d||u===e))return l.slice(0,$S(l)+1);if(!l||!(u=vr(u)))return l;var b=no(l),k=VS(b,no(u))+1;return ji(b,0,k).join("")}function sz(l,u,d){if(l=Qe(l),l&&(d||u===e))return l.replace(Ai,"");if(!l||!(u=vr(u)))return l;var b=no(l),k=qS(b,no(u));return ji(b,k).join("")}function uz(l,u){var d=z,b=U;if(_t(u)){var k="separator"in u?u.separator:k;d="length"in u?De(u.length):d,b="omission"in u?vr(u.omission):b}l=Qe(l);var E=l.length;if(Gl(l)){var O=no(l);E=O.length}if(d>=E)return l;var M=d-Ql(b);if(M<1)return b;var F=O?ji(O,0,M).join(""):l.slice(0,M);if(k===e)return F+b;if(O&&(M+=F.length-M),i0(k)){if(l.slice(M).search(k)){var V,K=F;for(k.global||(k=wb(k.source,Qe(Na.exec(k))+"g")),k.lastIndex=0;V=k.exec(K);)var $=V.index;F=F.slice(0,$===e?M:$)}}else if(l.indexOf(vr(k),M)!=M){var ne=F.lastIndexOf(k);ne>-1&&(F=F.slice(0,ne))}return F+b}function cz(l){return l=Qe(l),l&&Aa.test(l)?l.replace(At,B3):l}var pz=ts(function(l,u,d){return l+(d?" ":"")+u.toUpperCase()}),s0=D_("toUpperCase");function L2(l,u,d){return l=Qe(l),u=d?e:u,u===e?M3(l)?H3(l):C3(l):l.match(u)||[]}var M2=Be(function(l,u){try{return gr(l,e,u)}catch(d){return o0(d)?d:new Oe(d)}}),fz=ei(function(l,u){return Lr(u,function(d){d=To(d),Zo(l,d,n0(l[d],l))}),l});function dz(l){var u=l==null?0:l.length,d=ve();return l=u?vt(l,function(b){if(typeof b[1]!="function")throw new Mr(o);return[d(b[0]),b[1]]}):[],Be(function(b){for(var k=-1;++k<u;){var E=l[k];if(gr(E[0],this,b))return gr(E[1],this,b)}})}function mz(l){return BM(Nr(l,p))}function u0(l){return function(){return l}}function hz(l,u){return l==null||l!==l?u:l}var gz=F_(),bz=F_(!0);function ir(l){return l}function c0(l){return d_(typeof l=="function"?l:Nr(l,p))}function vz(l){return h_(Nr(l,p))}function yz(l,u){return g_(l,Nr(u,p))}var xz=Be(function(l,u){return function(d){return $u(d,l,u)}}),wz=Be(function(l,u){return function(d){return $u(l,d,u)}});function p0(l,u,d){var b=pn(u),k=sd(u,b);d==null&&!(_t(u)&&(k.length||!b.length))&&(d=u,u=l,l=this,k=sd(u,pn(u)));var E=!(_t(d)&&"chain"in d)||!!d.chain,O=ni(l);return Lr(k,function(M){var F=u[M];l[M]=F,O&&(l.prototype[M]=function(){var V=this.__chain__;if(E||V){var K=l(this.__wrapped__),$=K.__actions__=nr(this.__actions__);return $.push({func:F,args:arguments,thisArg:l}),K.__chain__=V,K}return F.apply(l,Mi([this.value()],arguments))})}),l}function kz(){return cn._===this&&(cn._=G3),this}function f0(){}function Sz(l){return l=De(l),Be(function(u){return b_(u,l)})}var _z=Wb(vt),Cz=Wb(zS),Ez=Wb(mb);function D2(l){return Yb(l)?hb(To(l)):nD(l)}function Rz(l){return function(u){return l==null?e:Ka(l,u)}}var Tz=B_(),Oz=B_(!0);function d0(){return[]}function m0(){return!1}function Pz(){return{}}function Iz(){return""}function Az(){return!0}function Lz(l,u){if(l=De(l),l<1||l>fe)return[];var d=Le,b=In(l,Le);u=ve(u),l-=Le;for(var k=vb(b,u);++d<l;)u(d);return k}function Mz(l){return Ae(l)?vt(l,To):yr(l)?[l]:nr(t2(Qe(l)))}function Dz(l){var u=++K3;return Qe(l)+u}var Nz=md(function(l,u){return l+u},0),Fz=qb("ceil"),zz=md(function(l,u){return l/u},1),Bz=qb("floor");function Uz(l){return l&&l.length?ld(l,ir,Ob):e}function jz(l,u){return l&&l.length?ld(l,ve(u,2),Ob):e}function Hz(l){return jS(l,ir)}function Wz(l,u){return jS(l,ve(u,2))}function qz(l){return l&&l.length?ld(l,ir,Lb):e}function Vz(l,u){return l&&l.length?ld(l,ve(u,2),Lb):e}var Kz=md(function(l,u){return l*u},1),$z=qb("round"),Gz=md(function(l,u){return l-u},0);function Qz(l){return l&&l.length?bb(l,ir):0}function Yz(l,u){return l&&l.length?bb(l,ve(u,2)):0}return C.after=v7,C.ary=f2,C.assign=iF,C.assignIn=E2,C.assignInWith=Rd,C.assignWith=aF,C.at=lF,C.before=d2,C.bind=n0,C.bindAll=fz,C.bindKey=m2,C.castArray=P7,C.chain=u2,C.chunk=BD,C.compact=UD,C.concat=jD,C.cond=dz,C.conforms=mz,C.constant=u0,C.countBy=QN,C.create=sF,C.curry=h2,C.curryRight=g2,C.debounce=b2,C.defaults=uF,C.defaultsDeep=cF,C.defer=y7,C.delay=x7,C.difference=HD,C.differenceBy=WD,C.differenceWith=qD,C.drop=VD,C.dropRight=KD,C.dropRightWhile=$D,C.dropWhile=GD,C.fill=QD,C.filter=XN,C.flatMap=e7,C.flatMapDeep=t7,C.flatMapDepth=n7,C.flatten=i2,C.flattenDeep=YD,C.flattenDepth=XD,C.flip=w7,C.flow=gz,C.flowRight=bz,C.fromPairs=ZD,C.functions=bF,C.functionsIn=vF,C.groupBy=r7,C.initial=eN,C.intersection=tN,C.intersectionBy=nN,C.intersectionWith=rN,C.invert=xF,C.invertBy=wF,C.invokeMap=i7,C.iteratee=c0,C.keyBy=a7,C.keys=pn,C.keysIn=or,C.map=wd,C.mapKeys=SF,C.mapValues=_F,C.matches=vz,C.matchesProperty=yz,C.memoize=Sd,C.merge=CF,C.mergeWith=R2,C.method=xz,C.methodOf=wz,C.mixin=p0,C.negate=_d,C.nthArg=Sz,C.omit=EF,C.omitBy=RF,C.once=k7,C.orderBy=l7,C.over=_z,C.overArgs=S7,C.overEvery=Cz,C.overSome=Ez,C.partial=r0,C.partialRight=v2,C.partition=s7,C.pick=TF,C.pickBy=T2,C.property=D2,C.propertyOf=Rz,C.pull=lN,C.pullAll=l2,C.pullAllBy=sN,C.pullAllWith=uN,C.pullAt=cN,C.range=Tz,C.rangeRight=Oz,C.rearg=_7,C.reject=p7,C.remove=pN,C.rest=C7,C.reverse=e0,C.sampleSize=d7,C.set=PF,C.setWith=IF,C.shuffle=m7,C.slice=fN,C.sortBy=b7,C.sortedUniq=yN,C.sortedUniqBy=xN,C.split=ez,C.spread=E7,C.tail=wN,C.take=kN,C.takeRight=SN,C.takeRightWhile=_N,C.takeWhile=CN,C.tap=UN,C.throttle=R7,C.thru=xd,C.toArray=S2,C.toPairs=O2,C.toPairsIn=P2,C.toPath=Mz,C.toPlainObject=C2,C.transform=AF,C.unary=T7,C.union=EN,C.unionBy=RN,C.unionWith=TN,C.uniq=ON,C.uniqBy=PN,C.uniqWith=IN,C.unset=LF,C.unzip=t0,C.unzipWith=s2,C.update=MF,C.updateWith=DF,C.values=os,C.valuesIn=NF,C.without=AN,C.words=L2,C.wrap=O7,C.xor=LN,C.xorBy=MN,C.xorWith=DN,C.zip=NN,C.zipObject=FN,C.zipObjectDeep=zN,C.zipWith=BN,C.entries=O2,C.entriesIn=P2,C.extend=E2,C.extendWith=Rd,p0(C,C),C.add=Nz,C.attempt=M2,C.camelCase=UF,C.capitalize=I2,C.ceil=Fz,C.clamp=FF,C.clone=I7,C.cloneDeep=L7,C.cloneDeepWith=M7,C.cloneWith=A7,C.conformsTo=D7,C.deburr=A2,C.defaultTo=hz,C.divide=zz,C.endsWith=jF,C.eq=oo,C.escape=HF,C.escapeRegExp=WF,C.every=YN,C.find=ZN,C.findIndex=r2,C.findKey=pF,C.findLast=JN,C.findLastIndex=o2,C.findLastKey=fF,C.floor=Bz,C.forEach=c2,C.forEachRight=p2,C.forIn=dF,C.forInRight=mF,C.forOwn=hF,C.forOwnRight=gF,C.get=a0,C.gt=N7,C.gte=F7,C.has=yF,C.hasIn=l0,C.head=a2,C.identity=ir,C.includes=o7,C.indexOf=JD,C.inRange=zF,C.invoke=kF,C.isArguments=Qa,C.isArray=Ae,C.isArrayBuffer=z7,C.isArrayLike=rr,C.isArrayLikeObject=jt,C.isBoolean=B7,C.isBuffer=Hi,C.isDate=U7,C.isElement=j7,C.isEmpty=H7,C.isEqual=W7,C.isEqualWith=q7,C.isError=o0,C.isFinite=V7,C.isFunction=ni,C.isInteger=y2,C.isLength=Cd,C.isMap=x2,C.isMatch=K7,C.isMatchWith=$7,C.isNaN=G7,C.isNative=Q7,C.isNil=X7,C.isNull=Y7,C.isNumber=w2,C.isObject=_t,C.isObjectLike=Lt,C.isPlainObject=Ju,C.isRegExp=i0,C.isSafeInteger=Z7,C.isSet=k2,C.isString=Ed,C.isSymbol=yr,C.isTypedArray=rs,C.isUndefined=J7,C.isWeakMap=eF,C.isWeakSet=tF,C.join=oN,C.kebabCase=qF,C.last=zr,C.lastIndexOf=iN,C.lowerCase=VF,C.lowerFirst=KF,C.lt=nF,C.lte=rF,C.max=Uz,C.maxBy=jz,C.mean=Hz,C.meanBy=Wz,C.min=qz,C.minBy=Vz,C.stubArray=d0,C.stubFalse=m0,C.stubObject=Pz,C.stubString=Iz,C.stubTrue=Az,C.multiply=Kz,C.nth=aN,C.noConflict=kz,C.noop=f0,C.now=kd,C.pad=$F,C.padEnd=GF,C.padStart=QF,C.parseInt=YF,C.random=BF,C.reduce=u7,C.reduceRight=c7,C.repeat=XF,C.replace=ZF,C.result=OF,C.round=$z,C.runInContext=N,C.sample=f7,C.size=h7,C.snakeCase=JF,C.some=g7,C.sortedIndex=dN,C.sortedIndexBy=mN,C.sortedIndexOf=hN,C.sortedLastIndex=gN,C.sortedLastIndexBy=bN,C.sortedLastIndexOf=vN,C.startCase=tz,C.startsWith=nz,C.subtract=Gz,C.sum=Qz,C.sumBy=Yz,C.template=rz,C.times=Lz,C.toFinite=ri,C.toInteger=De,C.toLength=_2,C.toLower=oz,C.toNumber=Br,C.toSafeInteger=oF,C.toString=Qe,C.toUpper=iz,C.trim=az,C.trimEnd=lz,C.trimStart=sz,C.truncate=uz,C.unescape=cz,C.uniqueId=Dz,C.upperCase=pz,C.upperFirst=s0,C.each=c2,C.eachRight=p2,C.first=a2,p0(C,function(){var l={};return Eo(C,function(u,d){Xe.call(C.prototype,d)||(l[d]=u)}),l}(),{chain:!1}),C.VERSION=t,Lr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(l){C[l].placeholder=C}),Lr(["drop","take"],function(l,u){We.prototype[l]=function(d){d=d===e?1:Jt(De(d),0);var b=this.__filtered__&&!u?new We(this):this.clone();return b.__filtered__?b.__takeCount__=In(d,b.__takeCount__):b.__views__.push({size:In(d,Le),type:l+(b.__dir__<0?"Right":"")}),b},We.prototype[l+"Right"]=function(d){return this.reverse()[l](d).reverse()}}),Lr(["filter","map","takeWhile"],function(l,u){var d=u+1,b=d==Z||d==ie;We.prototype[l]=function(k){var E=this.clone();return E.__iteratees__.push({iteratee:ve(k,3),type:d}),E.__filtered__=E.__filtered__||b,E}}),Lr(["head","last"],function(l,u){var d="take"+(u?"Right":"");We.prototype[l]=function(){return this[d](1).value()[0]}}),Lr(["initial","tail"],function(l,u){var d="drop"+(u?"":"Right");We.prototype[l]=function(){return this.__filtered__?new We(this):this[d](1)}}),We.prototype.compact=function(){return this.filter(ir)},We.prototype.find=function(l){return this.filter(l).head()},We.prototype.findLast=function(l){return this.reverse().find(l)},We.prototype.invokeMap=Be(function(l,u){return typeof l=="function"?new We(this):this.map(function(d){return $u(d,l,u)})}),We.prototype.reject=function(l){return this.filter(_d(ve(l)))},We.prototype.slice=function(l,u){l=De(l);var d=this;return d.__filtered__&&(l>0||u<0)?new We(d):(l<0?d=d.takeRight(-l):l&&(d=d.drop(l)),u!==e&&(u=De(u),d=u<0?d.dropRight(-u):d.take(u-l)),d)},We.prototype.takeRightWhile=function(l){return this.reverse().takeWhile(l).reverse()},We.prototype.toArray=function(){return this.take(Le)},Eo(We.prototype,function(l,u){var d=/^(?:filter|find|map|reject)|While$/.test(u),b=/^(?:head|last)$/.test(u),k=C[b?"take"+(u=="last"?"Right":""):u],E=b||/^find/.test(u);k&&(C.prototype[u]=function(){var O=this.__wrapped__,M=b?[1]:arguments,F=O instanceof We,V=M[0],K=F||Ae(O),$=function(je){var qe=k.apply(C,Mi([je],M));return b&&ne?qe[0]:qe};K&&d&&typeof V=="function"&&V.length!=1&&(F=K=!1);var ne=this.__chain__,ue=!!this.__actions__.length,we=E&&!ne,Fe=F&&!ue;if(!E&&K){O=Fe?O:new We(this);var ke=l.apply(O,M);return ke.__actions__.push({func:xd,args:[$],thisArg:e}),new Dr(ke,ne)}return we&&Fe?l.apply(this,M):(ke=this.thru($),we?b?ke.value()[0]:ke.value():ke)})}),Lr(["pop","push","shift","sort","splice","unshift"],function(l){var u=Kf[l],d=/^(?:push|sort|unshift)$/.test(l)?"tap":"thru",b=/^(?:pop|shift)$/.test(l);C.prototype[l]=function(){var k=arguments;if(b&&!this.__chain__){var E=this.value();return u.apply(Ae(E)?E:[],k)}return this[d](function(O){return u.apply(Ae(O)?O:[],k)})}}),Eo(We.prototype,function(l,u){var d=C[u];if(d){var b=d.name+"";Xe.call(Zl,b)||(Zl[b]=[]),Zl[b].push({name:u,func:d})}}),Zl[dd(e,w).name]=[{name:"wrapper",func:e}],We.prototype.clone=cM,We.prototype.reverse=pM,We.prototype.value=fM,C.prototype.at=jN,C.prototype.chain=HN,C.prototype.commit=WN,C.prototype.next=qN,C.prototype.plant=KN,C.prototype.reverse=$N,C.prototype.toJSON=C.prototype.valueOf=C.prototype.value=GN,C.prototype.first=C.prototype.head,Uu&&(C.prototype[Uu]=VN),C},Ni=W3();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(cn._=Ni,define(function(){return Ni})):ja?((ja.exports=Ni)._=Ni,cb._=Ni):cn._=Ni}).call(pu)});var d3=Q(hR(),1);var s3=Q(Re(),1);var $r=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};var ho=typeof window>"u"||"Deno"in globalThis;function zn(){}function vR(e,t){return typeof e=="function"?e(t):e}function Kc(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ym(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ca(e,t){return typeof e=="function"?e(t):e}function Tr(e,t){return typeof e=="function"?e(t):e}function zy(e,t){let{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:s}=e;if(a){if(r){if(t.queryHash!==$c(a,t.options))return!1}else if(!Ds(t.queryKey,a))return!1}if(n!=="all"){let c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||o&&o!==t.state.fetchStatus||i&&!i(t))}function By(e,t){let{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(hi(t.options.mutationKey)!==hi(i))return!1}else if(!Ds(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function $c(e,t){return(t?.queryKeyHashFn||hi)(e)}function hi(e){return JSON.stringify(e,(t,n)=>Fy(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Ds(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Ds(e[n],t[n])):!1}function yR(e,t){if(e===t)return e;let n=gR(e)&&gR(t);if(n||Fy(e)&&Fy(t)){let r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,s=n?[]:{},c=0;for(let p=0;p<a;p++){let f=n?p:i[p];(!n&&r.includes(f)||n)&&e[f]===void 0&&t[f]===void 0?(s[f]=void 0,c++):(s[f]=yR(e[f],t[f]),s[f]===e[f]&&e[f]!==void 0&&c++)}return o===a&&c===o?e:s}return t}function Ns(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function gR(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Fy(e){if(!bR(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!bR(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function bR(e){return Object.prototype.toString.call(e)==="[object Object]"}function xR(e){return new Promise(t=>{setTimeout(t,e)})}function Gc(e,t,n){if(typeof n.structuralSharing=="function")return n.structuralSharing(e,t);if(n.structuralSharing!==!1){if(0)try{}catch(r){}return yR(e,t)}return t}function wR(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function kR(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Uy=Symbol();function Xm(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===Uy?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var x9=class extends $r{#e;#t;#r;constructor(){super(),this.#r=e=>{if(!ho&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Fs=new x9;var w9=class extends $r{#e=!0;#t;#r;constructor(){super(),this.#r=e=>{if(!ho&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(n=>{n(e)}))}isOnline(){return this.#e}},zs=new w9;function k9(e){return Math.min(1e3*2**e,3e4)}function jy(e){return(e??"online")==="online"?zs.isOnline():!0}var SR=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Zm(e){return e instanceof SR}function Jm(e){let t=!1,n=0,r=!1,o,i,a,s=new Promise((y,x)=>{i=y,a=x}),c=y=>{r||(v(new SR(y)),e.abort?.())},p=()=>{t=!0},f=()=>{t=!1},m=()=>Fs.isFocused()&&(e.networkMode==="always"||zs.isOnline())&&e.canRun(),h=()=>jy(e.networkMode)&&e.canRun(),g=y=>{r||(r=!0,e.onSuccess?.(y),o?.(),i(y))},v=y=>{r||(r=!0,e.onError?.(y),o?.(),a(y))},w=()=>new Promise(y=>{o=x=>{(r||m())&&y(x)},e.onPause?.()}).then(()=>{o=void 0,r||e.onContinue?.()}),_=()=>{if(r)return;let y,x=n===0?e.initialPromise:void 0;try{y=x??e.fn()}catch(S){y=Promise.reject(S)}Promise.resolve(y).then(g).catch(S=>{if(r)return;let T=e.retry??(ho?0:3),I=e.retryDelay??k9,R=typeof I=="function"?I(n,S):I,D=T===!0||typeof T=="number"&&n<T||typeof T=="function"&&T(n,S);if(t||!D){v(S);return}n++,e.onFail?.(n,S),xR(R).then(()=>m()?void 0:w()).then(()=>{t?v(S):_()})})};return{promise:s,cancel:c,continue:()=>(o?.(),s),cancelRetry:p,continueRetry:f,canStart:h,start:()=>(h()?_():w().then(_),s)}}function S9(){let e=[],t=0,n=s=>{s()},r=s=>{s()},o=s=>setTimeout(s,0),i=s=>{t?e.push(s):o(()=>{n(s)})},a=()=>{let s=e;e=[],s.length&&o(()=>{r(()=>{s.forEach(c=>{n(c)})})})};return{batch:s=>{let c;t++;try{c=s()}finally{t--,t||a()}return c},batchCalls:s=>(...c)=>{i(()=>{s(...c)})},schedule:i,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{r=s},setScheduler:s=>{o=s}}}var Je=S9();var eh=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Kc(this.gcTime)&&(this.#e=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ho?1/0:5*60*1e3))}clearGcTimeout(){this.#e&&(clearTimeout(this.#e),this.#e=void 0)}};var _R=class extends eh{#e;#t;#r;#n;#a;#i;constructor(e){super(),this.#i=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=_9(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#n?.promise}setOptions(e){this.options={...this.#a,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#r.remove(this)}setData(e,t){let n=Gc(this.state.data,e,this.options);return this.#o({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e,t){this.#o({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#n?.promise;return this.#n?.cancel(e),t?t.then(zn).catch(zn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>Tr(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!Ym(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#n?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#n?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#n&&(this.#i?this.#n.cancel({revert:!0}):this.#n.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(e,t){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#n)return this.#n.continueRetry(),this.#n.promise}if(e&&this.setOptions(e),!this.options.queryFn){let s=this.observers.find(c=>c.options.queryFn);s&&this.setOptions(s.options)}let n=new AbortController,r=s=>{Object.defineProperty(s,"signal",{enumerable:!0,get:()=>(this.#i=!0,n.signal)})},o=()=>{let s=Xm(this.options,t),c={queryKey:this.queryKey,meta:this.meta};return r(c),this.#i=!1,this.options.persister?this.options.persister(s,c,this):s(c)},i={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};r(i),this.options.behavior?.onFetch(i,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==i.fetchOptions?.meta)&&this.#o({type:"fetch",meta:i.fetchOptions?.meta});let a=s=>{Zm(s)&&s.silent||this.#o({type:"error",error:s}),Zm(s)||(this.#r.config.onError?.(s,this),this.#r.config.onSettled?.(this.state.data,s,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#n=Jm({initialPromise:t?.initialPromise,fn:i.fetchFn,abort:n.abort.bind(n),onSuccess:s=>{if(s===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(s)}catch(c){a(c);return}this.#r.config.onSuccess?.(s,this),this.#r.config.onSettled?.(s,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(s,c)=>{this.#o({type:"failed",failureCount:s,error:c})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0}),this.#n.start()}#o(e){let t=n=>{switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Hy(n.data,this.options),fetchMeta:e.meta??null};case"success":return{...n,data:e.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;return Zm(r)&&r.revert&&this.#t?{...this.#t,fetchStatus:"idle"}:{...n,error:r,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=t(this.state),Je.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}};function Hy(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:jy(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function _9(e){let t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var CR=class extends $r{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,o=t.queryHash??$c(r,t),i=this.get(o);return i||(i=new _R({cache:this,queryKey:r,queryHash:o,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(i)),i}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Je.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(n=>zy(t,n))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(n=>zy(e,n)):t}notify(e){Je.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){Je.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Je.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}};var ER=class extends eh{#e;#t;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||Wy(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){this.#r=Jm({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(r,o)=>{this.#n({type:"failed",failureCount:r,error:o})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});let t=this.state.status==="pending",n=!this.#r.canStart();try{if(!t){this.#n({type:"pending",variables:e,isPaused:n}),await this.#t.config.onMutate?.(e,this);let o=await this.options.onMutate?.(e);o!==this.state.context&&this.#n({type:"pending",context:o,variables:e,isPaused:n})}let r=await this.#r.start();return await this.#t.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#t.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#n({type:"success",data:r}),r}catch(r){try{throw await this.#t.config.onError?.(r,e,this.state.context,this),await this.options.onError?.(r,e,this.state.context),await this.#t.config.onSettled?.(void 0,r,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,r,e,this.state.context),r}finally{this.#n({type:"error",error:r})}}finally{this.#t.runNext(this)}}#n(e){let t=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),Je.batch(()=>{this.#e.forEach(n=>{n.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function Wy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var RR=class extends $r{constructor(e={}){super(),this.config=e,this.#e=new Map,this.#t=Date.now()}#e;#t;build(e,t,n){let r=new ER({mutationCache:this,mutationId:++this.#t,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){let t=th(e),n=this.#e.get(t)??[];n.push(e),this.#e.set(t,n),this.notify({type:"added",mutation:e})}remove(e){let t=th(e);if(this.#e.has(t)){let n=this.#e.get(t)?.filter(r=>r!==e);n&&(n.length===0?this.#e.delete(t):this.#e.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#e.get(th(e))?.find(n=>n.state.status==="pending");return!t||t===e}runNext(e){return this.#e.get(th(e))?.find(n=>n!==e&&n.state.isPaused)?.continue()??Promise.resolve()}clear(){Je.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#e.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(n=>By(t,n))}findAll(e={}){return this.getAll().filter(t=>By(e,t))}notify(e){Je.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(t=>t.state.isPaused);return Je.batch(()=>Promise.all(e.map(t=>t.continue().catch(zn))))}};function th(e){return e.options.scope?.id??String(e.mutationId)}function Qc(e){return{onFetch:(t,n)=>{let r=async()=>{let o=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],s=t.state.data?.pageParams||[],c={pages:[],pageParams:[]},p=!1,f=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?p=!0:t.signal.addEventListener("abort",()=>{p=!0}),t.signal)})},m=Xm(t.options,t.fetchOptions),h=async(v,w,_)=>{if(p)return Promise.reject();if(w==null&&v.pages.length)return Promise.resolve(v);let y={queryKey:t.queryKey,pageParam:w,direction:_?"backward":"forward",meta:t.options.meta};f(y);let x=await m(y),{maxPages:S}=t.options,T=_?kR:wR;return{pages:T(v.pages,x,S),pageParams:T(v.pageParams,w,S)}},g;if(i&&a.length){let v=i==="backward",w=v?TR:qy,_={pages:a,pageParams:s},y=w(o,_);g=await h(_,y,v)}else{g=await h(c,s[0]??o.initialPageParam);let v=e??a.length;for(let w=1;w<v;w++){let _=qy(o,g);if(_==null)break;g=await h(g,_)}}return g};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=r}}}function qy(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function TR(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}function OR(e,t){return t?qy(e,t)!=null:!1}function PR(e,t){return!t||!e.getPreviousPageParam?!1:TR(e,t)!=null}var Vy=class{#e;#t;#r;#n;#a;#i;#o;#l;constructor(e={}){this.#e=e.queryCache||new CR,this.#t=e.mutationCache||new RR,this.#r=e.defaultOptions||{},this.#n=new Map,this.#a=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#o=Fs.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#l=zs.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#o?.(),this.#o=void 0,this.#l?.(),this.#l=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),r=this.#e.build(this,n);return e.revalidateIfStale&&r.isStaleByTime(ca(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:n})=>{let r=n.data;return[t,r]})}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=vR(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Je.batch(()=>this.#e.findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;Je.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){let n=this.#e,r={type:"active",...e};return Je.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){let n={revert:!0,...t},r=Je.batch(()=>this.#e.findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(zn).catch(zn)}invalidateQueries(e={},t={}){return Je.batch(()=>{if(this.#e.findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();let n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){let n={...t,cancelRefetch:t?.cancelRefetch??!0},r=Je.batch(()=>this.#e.findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(zn)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(zn)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(ca(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(zn).catch(zn)}fetchInfiniteQuery(e){return e.behavior=Qc(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(zn).catch(zn)}resumePausedMutations(){return zs.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#r}setDefaultOptions(e){this.#r=e}setQueryDefaults(e,t){this.#n.set(hi(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#n.values()],n={};return t.forEach(r=>{Ds(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){this.#a.set(hi(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#a.values()],n={};return t.forEach(r=>{Ds(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#r.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=$c(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Uy&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#r.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};var LR=class extends $r{constructor(e,t){super(),this.options=t,this.#e=e,this.#o=null,this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#r=void 0;#n=void 0;#a;#i;#o;#l;#f;#d;#u;#c;#s;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),IR(this.#t,this.options)?this.#p():this.updateResult(),this.#v())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ky(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ky(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#y(),this.#x(),this.#t.removeObserver(this)}setOptions(e,t){let n=this.options,r=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Tr(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#t.setOptions(this.options),n._defaulted&&!Ns(this.options,n)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});let o=this.hasListeners();o&&AR(this.#t,r,this.options,n)&&this.#p(),this.updateResult(t),o&&(this.#t!==r||Tr(this.options.enabled,this.#t)!==Tr(n.enabled,this.#t)||ca(this.options.staleTime,this.#t)!==ca(n.staleTime,this.#t))&&this.#h();let i=this.#g();o&&(this.#t!==r||Tr(this.options.enabled,this.#t)!==Tr(n.enabled,this.#t)||i!==this.#s)&&this.#b(i)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return E9(this,n)&&(this.#n=n,this.#i=this.options,this.#a=this.#t.state),n}getCurrentResult(){return this.#n}trackResult(e,t){let n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),t?.(r),e[r])})}),n}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#p({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#n))}#p(e){this.#w();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(zn)),t}#h(){this.#y();let e=ca(this.options.staleTime,this.#t);if(ho||this.#n.isStale||!Kc(e))return;let n=Ym(this.#n.dataUpdatedAt,e)+1;this.#u=setTimeout(()=>{this.#n.isStale||this.updateResult()},n)}#g(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#b(e){this.#x(),this.#s=e,!(ho||Tr(this.options.enabled,this.#t)===!1||!Kc(this.#s)||this.#s===0)&&(this.#c=setInterval(()=>{(this.options.refetchIntervalInBackground||Fs.isFocused())&&this.#p()},this.#s))}#v(){this.#h(),this.#b(this.#g())}#y(){this.#u&&(clearTimeout(this.#u),this.#u=void 0)}#x(){this.#c&&(clearInterval(this.#c),this.#c=void 0)}createResult(e,t){let n=this.#t,r=this.options,o=this.#n,i=this.#a,a=this.#i,c=e!==n?e.state:this.#r,{state:p}=e,f={...p},m=!1,h;if(t._optimisticResults){let R=this.hasListeners(),D=!R&&IR(e,t),z=R&&AR(e,n,t,r);(D||z)&&(f={...f,...Hy(p.data,e.options)}),t._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:g,errorUpdatedAt:v,status:w}=f;if(t.select&&f.data!==void 0)if(o&&f.data===i?.data&&t.select===this.#l)h=this.#f;else try{this.#l=t.select,h=t.select(f.data),h=Gc(o?.data,h,t),this.#f=h,this.#o=null}catch(R){this.#o=R}else h=f.data;if(t.placeholderData!==void 0&&h===void 0&&w==="pending"){let R;if(o?.isPlaceholderData&&t.placeholderData===a?.placeholderData)R=o.data;else if(R=typeof t.placeholderData=="function"?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,t.select&&R!==void 0)try{R=t.select(R),this.#o=null}catch(D){this.#o=D}R!==void 0&&(w="success",h=Gc(o?.data,R,t),m=!0)}this.#o&&(g=this.#o,h=this.#f,v=Date.now(),w="error");let _=f.fetchStatus==="fetching",y=w==="pending",x=w==="error",S=y&&_,T=h!==void 0;return{status:w,fetchStatus:f.fetchStatus,isPending:y,isSuccess:w==="success",isError:x,isInitialLoading:S,isLoading:S,data:h,dataUpdatedAt:f.dataUpdatedAt,error:g,errorUpdatedAt:v,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:_,isRefetching:_&&!y,isLoadingError:x&&!T,isPaused:f.fetchStatus==="paused",isPlaceholderData:m,isRefetchError:x&&T,isStale:$y(e,t),refetch:this.refetch}}updateResult(e){let t=this.#n,n=this.createResult(this.#t,this.options);if(this.#a=this.#t.state,this.#i=this.options,this.#a.data!==void 0&&(this.#d=this.#t),Ns(n,t))return;this.#n=n;let r={},o=()=>{if(!t)return!0;let{notifyOnChangeProps:i}=this.options,a=typeof i=="function"?i():i;if(a==="all"||!a&&!this.#m.size)return!0;let s=new Set(a??this.#m);return this.options.throwOnError&&s.add("error"),Object.keys(this.#n).some(c=>{let p=c;return this.#n[p]!==t[p]&&s.has(p)})};e?.listeners!==!1&&o()&&(r.listeners=!0),this.#k({...r,...e})}#w(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;let t=this.#t;this.#t=e,this.#r=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#v()}#k(e){Je.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#n)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function C9(e,t){return Tr(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function IR(e,t){return C9(e,t)||e.state.data!==void 0&&Ky(e,t,t.refetchOnMount)}function Ky(e,t,n){if(Tr(t.enabled,e)!==!1){let r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&$y(e,t)}return!1}function AR(e,t,n,r){return(e!==t||Tr(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&$y(e,n)}function $y(e,t){return Tr(t.enabled,e)!==!1&&e.isStaleByTime(ca(t.staleTime,e))}function E9(e,t){return!Ns(e.getCurrentResult(),t)}var Gy=class extends LR{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:Qc()},t)}getOptimisticResult(e){return e.behavior=Qc(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:o,isRefetching:i,isError:a,isRefetchError:s}=r,c=n.fetchMeta?.fetchMore?.direction,p=a&&c==="forward",f=o&&c==="forward",m=a&&c==="backward",h=o&&c==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:OR(t,n.data),hasPreviousPage:PR(t,n.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:m,isFetchingPreviousPage:h,isRefetchError:s&&!p&&!m,isRefetching:i&&!f&&!h}}};var Qy=class extends $r{#e;#t=void 0;#r;#n;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),Ns(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&hi(t.mutationKey)!==hi(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#a(),this.#i(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#a(),this.#i()}mutate(e,t){return this.#n=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#a(){let e=this.#r?.state??Wy();this.#t={...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset}}#i(e){Je.batch(()=>{if(this.#n&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context;e?.type==="success"?(this.#n.onSuccess?.(e.data,t,n),this.#n.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#n.onError?.(e.error,t,n),this.#n.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(t=>{t(this.#t)})})}};var Bs=Q(Re(),1),FR=Q(xt(),1),Yy=Bs.createContext(void 0),Do=e=>{let t=Bs.useContext(Yy);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Xy=({client:e,children:t})=>(Bs.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,FR.jsx)(Yy.Provider,{value:e,children:t}));var rh=Q(Re(),1),zR=rh.createContext(!1),BR=()=>rh.useContext(zR),bte=zR.Provider;var Yc=Q(Re(),1),L9=Q(xt(),1);function M9(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var D9=Yc.createContext(M9()),UR=()=>Yc.useContext(D9);var HR=Q(Re(),1);function oh(e,t){return typeof e=="function"?e(...t):!!e}function jR(){}var WR=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},qR=e=>{HR.useEffect(()=>{e.clearReset()},[e])},VR=({result:e,errorResetBoundary:t,throwOnError:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&oh(n,[e.error,r]);var KR=e=>{e.suspense&&(typeof e.staleTime!="number"&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))};var $R=(e,t)=>e?.suspense&&t.isPending,GR=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});var pa=Q(Re(),1);function QR(e,t,n){let r=Do(n),o=BR(),i=UR(),a=r.defaultQueryOptions(e);r.getDefaultOptions().queries?._experimental_beforeQuery?.(a),a._optimisticResults=o?"isRestoring":"optimistic",KR(a),WR(a,i),qR(i);let[s]=pa.useState(()=>new t(r,a)),c=s.getOptimisticResult(a);if(pa.useSyncExternalStore(pa.useCallback(p=>{let f=o?()=>{}:s.subscribe(Je.batchCalls(p));return s.updateResult(),f},[s,o]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),pa.useEffect(()=>{s.setOptions(a,{listeners:!1})},[a,s]),$R(a,c))throw GR(a,s,i);if(VR({result:c,errorResetBoundary:i,throwOnError:a.throwOnError,query:r.getQueryCache().get(a.queryHash)}))throw c.error;return r.getDefaultOptions().queries?._experimental_afterQuery?.(a,c),a.notifyOnChangeProps?c:s.trackResult(c)}var gi=Q(Re(),1);function Xc(e,t){let n=Do(t),[r]=gi.useState(()=>new Qy(n,e));gi.useEffect(()=>{r.setOptions(e)},[r,e]);let o=gi.useSyncExternalStore(gi.useCallback(a=>r.subscribe(Je.batchCalls(a)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),i=gi.useCallback((a,s)=>{r.mutate(a,s).catch(jR)},[r]);if(o.error&&oh(r.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:i,mutateAsync:o.mutate}}function Zy(e,t){return QR(e,Gy,t)}var ot=Q(Re());var nT=Q(Re());function N9(e){if(Array.isArray(e))return e}function F9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return s}}function ex(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rT(e,t){if(e){if(typeof e=="string")return ex(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ex(e,t)}}function z9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ih(e,t){return N9(e)||F9(e,t)||rT(e,t)||z9()}function mn(e){"@babel/helpers - typeof";return mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mn(e)}function wt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t){for(var r=[],o=0;o<t.length;o++){var i=t[o];if(i){var a=mn(i);if(a==="string"||a==="number")r.push(i);else if(a==="object"){var s=Array.isArray(i)?i:Object.entries(i).map(function(c){var p=ih(c,2),f=p[0],m=p[1];return m?f:null});r=s.length?r.concat(s.filter(function(c){return!!c})):r}}}return r.join(" ").trim()}}function B9(e){if(Array.isArray(e))return ex(e)}function U9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ah(e){return B9(e)||U9(e)||rT(e)||j9()}function nx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H9(e,t){if(mn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oT(e){var t=H9(e,"string");return mn(t)==="symbol"?t:String(t)}function YR(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oT(r.key),r)}}function rx(e,t,n){return t&&YR(e.prototype,t),n&&YR(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function lh(e,t,n){return t=oT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jy(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=W9(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(p){throw p},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){n=n.call(e)},n:function(){var p=n.next();return i=p.done,p},e:function(p){a=!0,s=p},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}}}function W9(e,t){if(e){if(typeof e=="string")return XR(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return XR(e,t)}}function XR(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ce=function(){function e(){nx(this,e)}return rx(e,null,[{key:"innerWidth",value:function(n){if(n){var r=n.offsetWidth,o=getComputedStyle(n);return r=r+(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),r}return 0}},{key:"width",value:function(n){if(n){var r=n.offsetWidth,o=getComputedStyle(n);return r=r-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),r}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}},{key:"getOuterWidth",value:function(n,r){if(n){var o=n.getBoundingClientRect().width||n.offsetWidth;if(r){var i=getComputedStyle(n);o=o+(parseFloat(i.marginLeft)+parseFloat(i.marginRight))}return o}return 0}},{key:"getOuterHeight",value:function(n,r){if(n){var o=n.getBoundingClientRect().height||n.offsetHeight;if(r){var i=getComputedStyle(n);o=o+(parseFloat(i.marginTop)+parseFloat(i.marginBottom))}return o}return 0}},{key:"getClientHeight",value:function(n,r){if(n){var o=n.clientHeight;if(r){var i=getComputedStyle(n);o=o+(parseFloat(i.marginTop)+parseFloat(i.marginBottom))}return o}return 0}},{key:"getClientWidth",value:function(n,r){if(n){var o=n.clientWidth;if(r){var i=getComputedStyle(n);o=o+(parseFloat(i.marginLeft)+parseFloat(i.marginRight))}return o}return 0}},{key:"getViewport",value:function(){var n=window,r=document,o=r.documentElement,i=r.getElementsByTagName("body")[0],a=n.innerWidth||o.clientWidth||i.clientWidth,s=n.innerHeight||o.clientHeight||i.clientHeight;return{width:a,height:s}}},{key:"getOffset",value:function(n){if(n){var r=n.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(n){if(n)for(var r=n.parentNode.childNodes,o=0,i=0;i<r.length;i++){if(r[i]===n)return o;r[i].nodeType===1&&o++}return-1}},{key:"addMultipleClasses",value:function(n,r){if(n&&r)if(n.classList)for(var o=r.split(" "),i=0;i<o.length;i++)n.classList.add(o[i]);else for(var a=r.split(" "),s=0;s<a.length;s++)n.className=n.className+(" "+a[s])}},{key:"removeMultipleClasses",value:function(n,r){if(n&&r)if(n.classList)for(var o=r.split(" "),i=0;i<o.length;i++)n.classList.remove(o[i]);else for(var a=r.split(" "),s=0;s<a.length;s++)n.className=n.className.replace(new RegExp("(^|\\b)"+a[s].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(n,r){n&&r&&(n.classList?n.classList.add(r):n.className=n.className+(" "+r))}},{key:"removeClass",value:function(n,r){n&&r&&(n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(n,r){return n?n.classList?n.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(n.className):!1}},{key:"addStyles",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n&&Object.entries(r).forEach(function(o){var i=ih(o,2),a=i[0],s=i[1];return n.style[a]=s})}},{key:"find",value:function(n,r){return n?Array.from(n.querySelectorAll(r)):[]}},{key:"findSingle",value:function(n,r){return n?n.querySelector(r):null}},{key:"setAttributes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n){var i=function a(s,c){var p,f,m=n!=null&&(p=n.$attrs)!==null&&p!==void 0&&p[s]?[n==null||(f=n.$attrs)===null||f===void 0?void 0:f[s]]:[];return[c].flat().reduce(function(h,g){if(g!=null){var v=mn(g);if(v==="string"||v==="number")h.push(g);else if(v==="object"){var w=Array.isArray(g)?a(s,g):Object.entries(g).map(function(_){var y=ih(_,2),x=y[0],S=y[1];return s==="style"&&(S||S===0)?"".concat(x.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(S):S?x:void 0});h=w.length?h.concat(w.filter(function(_){return!!_})):h}}return h},m)};Object.entries(o).forEach(function(a){var s=ih(a,2),c=s[0],p=s[1];if(p!=null){var f=c.match(/^on(.+)/);f?n.addEventListener(f[1].toLowerCase(),p):c==="p-bind"?r.setAttributes(n,p):(p=c==="class"?ah(new Set(i("class",p))).join(" ").trim():c==="style"?i("style",p).join(";").trim():p,(n.$attrs=n.$attrs||{})&&(n.$attrs[c]=p),n.setAttribute(c,p))}})}}},{key:"getAttribute",value:function(n,r){if(n){var o=n.getAttribute(r);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}},{key:"isAttributeEquals",value:function(n,r,o){return n?this.getAttribute(n,r)===o:!1}},{key:"isAttributeNotEquals",value:function(n,r,o){return!this.isAttributeEquals(n,r,o)}},{key:"getHeight",value:function(n){if(n){var r=n.offsetHeight,o=getComputedStyle(n);return r=r-(parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth)),r}return 0}},{key:"getWidth",value:function(n){if(n){var r=n.offsetWidth,o=getComputedStyle(n);return r=r-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth)),r}return 0}},{key:"alignOverlay",value:function(n,r,o){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;n&&r&&(o==="self"?this.relativePosition(n,r):(i&&(n.style.minWidth=e.getOuterWidth(r)+"px"),this.absolutePosition(n,r)))}},{key:"absolutePosition",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(n&&r){var i=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),a=i.height,s=i.width,c=r.offsetHeight,p=r.offsetWidth,f=r.getBoundingClientRect(),m=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),g=this.getViewport(),v,w;f.top+c+a>g.height?(v=f.top+m-a,v<0&&(v=m),n.style.transformOrigin="bottom"):(v=c+f.top+m,n.style.transformOrigin="top");var _=f.left,y=o==="left"?0:s-p;_+p+s>g.width?w=Math.max(0,_+h+p-s):w=_-y+h,n.style.top=v+"px",n.style.left=w+"px"}}},{key:"relativePosition",value:function(n,r){if(n&&r){var o=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),i=r.offsetHeight,a=r.getBoundingClientRect(),s=this.getViewport(),c,p;a.top+i+o.height>s.height?(c=-1*o.height,a.top+c<0&&(c=-1*a.top),n.style.transformOrigin="bottom"):(c=i,n.style.transformOrigin="top"),o.width>s.width?p=a.left*-1:a.left+o.width>s.width?p=(a.left+o.width-s.width)*-1:p=0,n.style.top=c+"px",n.style.left=p+"px"}}},{key:"flipfitCollision",value:function(n,r){var o=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",s=arguments.length>4?arguments[4]:void 0;if(n&&r){var c=r.getBoundingClientRect(),p=this.getViewport(),f=i.split(" "),m=a.split(" "),h=function(y,x){return x?+y.substring(y.search(/(\+|-)/g))||0:y.substring(0,y.search(/(\+|-)/g))||y},g={my:{x:h(f[0]),y:h(f[1]||f[0]),offsetX:h(f[0],!0),offsetY:h(f[1]||f[0],!0)},at:{x:h(m[0]),y:h(m[1]||m[0]),offsetX:h(m[0],!0),offsetY:h(m[1]||m[0],!0)}},v={left:function(){var y=g.my.offsetX+g.at.offsetX;return y+c.left+(g.my.x==="left"?0:-1*(g.my.x==="center"?o.getOuterWidth(n)/2:o.getOuterWidth(n)))},top:function(){var y=g.my.offsetY+g.at.offsetY;return y+c.top+(g.my.y==="top"?0:-1*(g.my.y==="center"?o.getOuterHeight(n)/2:o.getOuterHeight(n)))}},w={count:{x:0,y:0},left:function(){var y=v.left(),x=e.getWindowScrollLeft();n.style.left=y+x+"px",this.count.x===2?(n.style.left=x+"px",this.count.x=0):y<0&&(this.count.x++,g.my.x="left",g.at.x="right",g.my.offsetX*=-1,g.at.offsetX*=-1,this.right())},right:function(){var y=v.left()+e.getOuterWidth(r),x=e.getWindowScrollLeft();n.style.left=y+x+"px",this.count.x===2?(n.style.left=p.width-e.getOuterWidth(n)+x+"px",this.count.x=0):y+e.getOuterWidth(n)>p.width&&(this.count.x++,g.my.x="right",g.at.x="left",g.my.offsetX*=-1,g.at.offsetX*=-1,this.left())},top:function(){var y=v.top(),x=e.getWindowScrollTop();n.style.top=y+x+"px",this.count.y===2?(n.style.left=x+"px",this.count.y=0):y<0&&(this.count.y++,g.my.y="top",g.at.y="bottom",g.my.offsetY*=-1,g.at.offsetY*=-1,this.bottom())},bottom:function(){var y=v.top()+e.getOuterHeight(r),x=e.getWindowScrollTop();n.style.top=y+x+"px",this.count.y===2?(n.style.left=p.height-e.getOuterHeight(n)+x+"px",this.count.y=0):y+e.getOuterHeight(r)>p.height&&(this.count.y++,g.my.y="bottom",g.at.y="top",g.my.offsetY*=-1,g.at.offsetY*=-1,this.top())},center:function(y){if(y==="y"){var x=v.top()+e.getOuterHeight(r)/2;n.style.top=x+e.getWindowScrollTop()+"px",x<0?this.bottom():x+e.getOuterHeight(r)>p.height&&this.top()}else{var S=v.left()+e.getOuterWidth(r)/2;n.style.left=S+e.getWindowScrollLeft()+"px",S<0?this.left():S+e.getOuterWidth(n)>p.width&&this.right()}}};w[g.at.x]("x"),w[g.at.y]("y"),this.isFunction(s)&&s(g)}}},{key:"findCollisionPosition",value:function(n){if(n){var r=n==="top"||n==="bottom",o=n==="left"?"right":"left",i=n==="top"?"bottom":"top";return r?{axis:"y",my:"center ".concat(i),at:"center ".concat(n)}:{axis:"x",my:"".concat(o," center"),at:"".concat(n," center")}}}},{key:"getParents",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.parentNode===null?r:this.getParents(n.parentNode,r.concat([n.parentNode]))}},{key:"getScrollableParents",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=[];if(n){var i=this.getParents(n),a=/(auto|scroll)/,s=function(S){var T=S?getComputedStyle(S):null;return T&&(a.test(T.getPropertyValue("overflow"))||a.test(T.getPropertyValue("overflow-x"))||a.test(T.getPropertyValue("overflow-y")))},c=function(S){r?o.push(S.nodeName==="BODY"||S.nodeName==="HTML"||S.nodeType===9?window:S):o.push(S)},p=Jy(i),f;try{for(p.s();!(f=p.n()).done;){var m=f.value,h=m.nodeType===1&&m.dataset.scrollselectors;if(h){var g=h.split(","),v=Jy(g),w;try{for(v.s();!(w=v.n()).done;){var _=w.value,y=this.findSingle(m,_);y&&s(y)&&c(y)}}catch(x){v.e(x)}finally{v.f()}}m.nodeType===1&&s(m)&&c(m)}}catch(x){p.e(x)}finally{p.f()}}return o.some(function(x){return x===document.body||x===window})||o.push(window),o}},{key:"getHiddenElementOuterHeight",value:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var r=n.offsetHeight;return n.style.display="none",n.style.visibility="visible",r}return 0}},{key:"getHiddenElementOuterWidth",value:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var r=n.offsetWidth;return n.style.display="none",n.style.visibility="visible",r}return 0}},{key:"getHiddenElementDimensions",value:function(n){var r={};return n&&(n.style.visibility="hidden",n.style.display="block",r.width=n.offsetWidth,r.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible"),r}},{key:"fadeIn",value:function(n,r){if(n){n.style.opacity=0;var o=+new Date,i=0,a=function s(){i=+n.style.opacity+(new Date().getTime()-o)/r,n.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};a()}}},{key:"fadeOut",value:function(n,r){if(n)var o=1,i=50,a=i/r,s=setInterval(function(){o=o-a,o<=0&&(o=0,clearInterval(s)),n.style.opacity=o},i)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(n){return!!(n&&n.constructor&&n.call&&n.apply)}},{key:"appendChild",value:function(n,r){if(this.isElement(r))r.appendChild(n);else if(r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(n);else throw new Error("Cannot append "+r+" to "+n)}},{key:"removeChild",value:function(n,r){if(this.isElement(r))r.removeChild(n);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(n);else throw new Error("Cannot remove "+n+" from "+r)}},{key:"isElement",value:function(n){return(typeof HTMLElement>"u"?"undefined":mn(HTMLElement))==="object"?n instanceof HTMLElement:n&&mn(n)==="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}},{key:"scrollInView",value:function(n,r){var o=getComputedStyle(n).getPropertyValue("border-top-width"),i=o?parseFloat(o):0,a=getComputedStyle(n).getPropertyValue("padding-top"),s=a?parseFloat(a):0,c=n.getBoundingClientRect(),p=r.getBoundingClientRect(),f=p.top+document.body.scrollTop-(c.top+document.body.scrollTop)-i-s,m=n.scrollTop,h=n.clientHeight,g=this.getOuterHeight(r);f<0?n.scrollTop=m+f:f+g>h&&(n.scrollTop=m+f-h+g)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(n){if(n){var r=getComputedStyle(n);return n.offsetWidth-n.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);var i=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=i,i}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var n=this.resolveUserAgent();this.browser={},n.browser&&(this.browser[n.browser]=!0,this.browser.version=n.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var n=navigator.userAgent.toLowerCase(),r=/(chrome)[ ]([\w.]+)/.exec(n)||/(webkit)[ ]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];return{browser:r[1]||"",version:r[2]||"0"}}},{key:"blockBodyScroll",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",r=!!document.body.style.getPropertyValue("--scrollbar-width");!r&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,n)}},{key:"unblockBodyScroll",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,n)}},{key:"isVisible",value:function(n){return n&&(n.clientHeight!==0||n.getClientRects().length!==0||getComputedStyle(n).display!=="none")}},{key:"isExist",value:function(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&n.parentNode)}},{key:"getFocusableElements",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=e.find(n,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(r,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r)),i=[],a=Jy(o),s;try{for(a.s();!(s=a.n()).done;){var c=s.value;getComputedStyle(c).display!=="none"&&getComputedStyle(c).visibility!=="hidden"&&i.push(c)}}catch(p){a.e(p)}finally{a.f()}return i}},{key:"getFirstFocusableElement",value:function(n,r){var o=e.getFocusableElements(n,r);return o.length>0?o[0]:null}},{key:"getLastFocusableElement",value:function(n,r){var o=e.getFocusableElements(n,r);return o.length>0?o[o.length-1]:null}},{key:"focus",value:function(n,r){var o=r===void 0?!0:!r;n&&document.activeElement!==n&&n.focus({preventScroll:o})}},{key:"focusFirstElement",value:function(n,r){if(n){var o=e.getFirstFocusableElement(n);return o&&e.focus(o,r),o}}},{key:"getCursorOffset",value:function(n,r,o,i){if(n){var a=getComputedStyle(n),s=document.createElement("div");s.style.position="absolute",s.style.top="0px",s.style.left="0px",s.style.visibility="hidden",s.style.pointerEvents="none",s.style.overflow=a.overflow,s.style.width=a.width,s.style.height=a.height,s.style.padding=a.padding,s.style.border=a.border,s.style.overflowWrap=a.overflowWrap,s.style.whiteSpace=a.whiteSpace,s.style.lineHeight=a.lineHeight,s.innerHTML=r.replace(/\r\n|\r|\n/g,"<br />");var c=document.createElement("span");c.textContent=i,s.appendChild(c);var p=document.createTextNode(o);s.appendChild(p),document.body.appendChild(s);var f=c.offsetLeft,m=c.offsetTop,h=c.clientHeight;return document.body.removeChild(s),{left:Math.abs(f-n.scrollLeft),top:Math.abs(m-n.scrollTop)+h}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(n,r,o){n[r].apply(n,o)}},{key:"isClickable",value:function(n){var r=n.nodeName,o=n.parentElement&&n.parentElement.nodeName;return r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||this.hasClass(n,"p-button")||this.hasClass(n.parentElement,"p-button")||this.hasClass(n.parentElement,"p-checkbox")||this.hasClass(n.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(n,r){if(typeof r=="string")n.style.cssText=this.style;else for(var o in this.style)n.style[o]=r[o]}},{key:"exportCSV",value:function(n,r){var o=new Blob([n],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,r+".csv");else{var i=e.saveAs({name:r+".csv",src:URL.createObjectURL(o)});i||(n="data:text/csv;charset=utf-8,"+n,window.open(encodeURI(n)))}}},{key:"saveAs",value:function(n){if(n){var r=document.createElement("a");if(r.download!==void 0){var o=n.name,i=n.src;return r.setAttribute("href",i),r.setAttribute("download",o),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}}return!1}},{key:"createInlineStyle",value:function(n,r){var o=document.createElement("style");return e.addNonce(o,n),r||(r=document.head),r.appendChild(o),o}},{key:"removeInlineStyle",value:function(n){if(this.isExist(n)){try{n.parentNode.removeChild(n)}catch{}n=null}return n}},{key:"addNonce",value:function(n,r){try{r||(r=process.env.REACT_APP_CSS_NONCE)}catch{}r&&n.setAttribute("nonce",r)}},{key:"getTargetElement",value:function(n){if(!n)return null;if(n==="document")return document;if(n==="window")return window;if(mn(n)==="object"&&n.hasOwnProperty("current"))return this.isExist(n.current)?n.current:null;var r=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},o=r(n)?n():n;return o&&o.nodeType===9||this.isExist(o)?o:null}},{key:"getAttributeNames",value:function(n){var r,o,i;for(o=[],i=n.attributes,r=0;r<i.length;++r)o.push(i[r].nodeName);return o.sort(),o}},{key:"isEqualElement",value:function(n,r){var o,i,a,s,c;if(o=e.getAttributeNames(n),i=e.getAttributeNames(r),o.join(",")!==i.join(","))return!1;for(var p=0;p<o.length;++p)if(a=o[p],a==="style")for(var f=n.style,m=r.style,h=/^\d+$/,g=0,v=Object.keys(f);g<v.length;g++){var w=v[g];if(!h.test(w)&&f[w]!==m[w])return!1}else if(n.getAttribute(a)!==r.getAttribute(a))return!1;for(s=n.firstChild,c=r.firstChild;s&&c;s=s.nextSibling,c=c.nextSibling){if(s.nodeType!==c.nodeType)return!1;if(s.nodeType===1){if(!e.isEqualElement(s,c))return!1}else if(s.nodeValue!==c.nodeValue)return!1}return!(s||c)}},{key:"hasCSSAnimation",value:function(n){if(n){var r=getComputedStyle(n),o=parseFloat(r.getPropertyValue("animation-duration")||"0");return o>0}return!1}},{key:"hasCSSTransition",value:function(n){if(n){var r=getComputedStyle(n),o=parseFloat(r.getPropertyValue("transition-duration")||"0");return o>0}return!1}}])}();lh(Ce,"DATA_PROPS",["data-"]);lh(Ce,"ARIA_PROPS",["aria","focus-target"]);function tx(){return tx=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tx.apply(this,arguments)}function q9(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=V9(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(p){throw p},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){n=n.call(e)},n:function(){var p=n.next();return i=p.done,p},e:function(p){a=!0,s=p},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}}}function V9(e,t){if(e){if(typeof e=="string")return ZR(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ZR(e,t)}}function ZR(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ye=function(){function e(){nx(this,e)}return rx(e,null,[{key:"equals",value:function(n,r,o){return o&&n&&mn(n)==="object"&&r&&mn(r)==="object"?this.deepEquals(this.resolveFieldData(n,o),this.resolveFieldData(r,o)):this.deepEquals(n,r)}},{key:"deepEquals",value:function(n,r){if(n===r)return!0;if(n&&r&&mn(n)==="object"&&mn(r)==="object"){var o=Array.isArray(n),i=Array.isArray(r),a,s,c;if(o&&i){if(s=n.length,s!==r.length)return!1;for(a=s;a--!==0;)if(!this.deepEquals(n[a],r[a]))return!1;return!0}if(o!==i)return!1;var p=n instanceof Date,f=r instanceof Date;if(p!==f)return!1;if(p&&f)return n.getTime()===r.getTime();var m=n instanceof RegExp,h=r instanceof RegExp;if(m!==h)return!1;if(m&&h)return n.toString()===r.toString();var g=Object.keys(n);if(s=g.length,s!==Object.keys(r).length)return!1;for(a=s;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,g[a]))return!1;for(a=s;a--!==0;)if(c=g[a],!this.deepEquals(n[c],r[c]))return!1;return!0}return n!==n&&r!==r}},{key:"resolveFieldData",value:function(n,r){if(!n||!r)return null;try{var o=n[r];if(this.isNotEmpty(o))return o}catch{}if(Object.keys(n).length){if(this.isFunction(r))return r(n);if(this.isNotEmpty(n[r]))return n[r];if(r.indexOf(".")===-1)return n[r];for(var i=r.split("."),a=n,s=0,c=i.length;s<c;++s){if(a==null)return null;a=a[i[s]]}return a}return null}},{key:"findDiffKeys",value:function(n,r){return!n||!r?{}:Object.keys(n).filter(function(o){return!r.hasOwnProperty(o)}).reduce(function(o,i){return o[i]=n[i],o},{})}},{key:"reduceKeys",value:function(n,r){var o={};return!n||!r||r.length===0||Object.keys(n).filter(function(i){return r.some(function(a){return i.startsWith(a)})}).forEach(function(i){o[i]=n[i],delete n[i]}),o}},{key:"reorderArray",value:function(n,r,o){n&&r!==o&&(o>=n.length&&(o=o%n.length,r=r%n.length),n.splice(o,0,n.splice(r,1)[0]))}},{key:"findIndexInList",value:function(n,r,o){var i=this;return r?o?r.findIndex(function(a){return i.equals(a,n,o)}):r.findIndex(function(a){return a===n}):-1}},{key:"getJSXElement",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return this.isFunction(n)?n.apply(void 0,o):n}},{key:"getItemValue",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return this.isFunction(n)?n.apply(void 0,o):n}},{key:"getProp",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n?n[r]:void 0;return i===void 0?o[r]:i}},{key:"getPropCaseInsensitive",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.toFlatCase(r);for(var a in n)if(n.hasOwnProperty(a)&&this.toFlatCase(a)===i)return n[a];for(var s in o)if(o.hasOwnProperty(s)&&this.toFlatCase(s)===i)return o[s]}},{key:"getMergedProps",value:function(n,r){return Object.assign({},r,n)}},{key:"getDiffProps",value:function(n,r){return this.findDiffKeys(n,r)}},{key:"getPropValue",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return this.isFunction(n)?n.apply(void 0,o):n}},{key:"getComponentProp",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(n)?this.getProp(n.props,r,o):void 0}},{key:"getComponentProps",value:function(n,r){return this.isNotEmpty(n)?this.getMergedProps(n.props,r):void 0}},{key:"getComponentDiffProps",value:function(n,r){return this.isNotEmpty(n)?this.getDiffProps(n.props,r):void 0}},{key:"isValidChild",value:function(n,r,o){if(n){var i,a=this.getComponentProp(n,"__TYPE")||(n.type?n.type.displayName:void 0);!a&&n!==null&&n!==void 0&&(i=n.type)!==null&&i!==void 0&&(i=i._payload)!==null&&i!==void 0&&i.value&&(a=n.type._payload.value.find(function(p){return p===r}));var s=a===r;try{var c}catch{}return s}return!1}},{key:"getRefElement",value:function(n){return n?mn(n)==="object"&&n.hasOwnProperty("current")?n.current:n:null}},{key:"combinedRefs",value:function(n,r){n&&r&&(typeof r=="function"?r(n.current):r.current=n.current)}},{key:"removeAccents",value:function(n){return n&&n.search(/[\xC0-\xFF]/g)>-1&&(n=n.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),n}},{key:"toFlatCase",value:function(n){return this.isNotEmpty(n)&&this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}},{key:"toCapitalCase",value:function(n){return this.isNotEmpty(n)&&this.isString(n)?n[0].toUpperCase()+n.slice(1):n}},{key:"trim",value:function(n){return this.isNotEmpty(n)&&this.isString(n)?n.trim():n}},{key:"isEmpty",value:function(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&mn(n)==="object"&&Object.keys(n).length===0}},{key:"isNotEmpty",value:function(n){return!this.isEmpty(n)}},{key:"isFunction",value:function(n){return!!(n&&n.constructor&&n.call&&n.apply)}},{key:"isObject",value:function(n){return n!==null&&n instanceof Object&&n.constructor===Object}},{key:"isDate",value:function(n){return n!==null&&n instanceof Date&&n.constructor===Date}},{key:"isArray",value:function(n){return n!==null&&Array.isArray(n)}},{key:"isString",value:function(n){return n!==null&&typeof n=="string"}},{key:"isPrintableCharacter",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}},{key:"isLetter",value:function(n){return/^[a-zA-Z\u00C0-\u017F]$/.test(n)}},{key:"isScalar",value:function(n){return n!=null&&(typeof n=="string"||typeof n=="number"||typeof n=="bigint"||typeof n=="boolean")}},{key:"findLast",value:function(n,r){var o;if(this.isNotEmpty(n))try{o=n.findLast(r)}catch{o=ah(n).reverse().find(r)}return o}},{key:"findLastIndex",value:function(n,r){var o=-1;if(this.isNotEmpty(n))try{o=n.findLastIndex(r)}catch{o=n.lastIndexOf(ah(n).reverse().find(r))}return o}},{key:"sort",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,s=this.compare(n,r,i,o),c=o;return(this.isEmpty(n)||this.isEmpty(r))&&(c=a===1?o:a),c*s}},{key:"compare",value:function(n,r,o){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=-1,s=this.isEmpty(n),c=this.isEmpty(r);return s&&c?a=0:s?a=i:c?a=-i:typeof n=="string"&&typeof r=="string"?a=o(n,r):a=n<r?-1:n>r?1:0,a}},{key:"localeComparator",value:function(n){return new Intl.Collator(n,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(n,r){var o=q9(n),i;try{for(o.s();!(i=o.n()).done;){var a=i.value;if(a.key===r)return a.children||[];if(a.children){var s=this.findChildrenByKey(a.children,r);if(s.length>0)return s}}}catch(c){o.e(c)}finally{o.f()}return[]}},{key:"mutateFieldData",value:function(n,r,o){if(!(mn(n)!=="object"||typeof r!="string"))for(var i=r.split("."),a=n,s=0,c=i.length;s<c;++s){if(s+1-c===0){a[i[s]]=o;break}a[i[s]]||(a[i[s]]={}),a=a[i[s]]}}}])}();function JR(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function K9(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?JR(Object(n),!0).forEach(function(r){lh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):JR(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var iT=function(){function e(){nx(this,e)}return rx(e,null,[{key:"getJSXIcon",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=null;if(n!==null){var a=mn(n),s=wt(r.className,a==="string"&&n);if(i=nT.createElement("span",tx({},r,{className:s})),a!=="string"){var c=K9({iconProps:r,element:i},o);return ye.getJSXElement(n,c)}}return i}}])}();function eT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eT(Object(n),!0).forEach(function(r){lh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var n=function(a){return typeof a=="function"},r=t.classNameMergeFunction,o=n(r);return e.reduce(function(i,a){if(!a)return i;var s=function(){var f=a[c];if(c==="style")i.style=tT(tT({},i.style),a.style);else if(c==="className"){var m="";o?m=r(i.className,a.className):m=[i.className,a.className].join(" ").trim(),i.className=m||void 0}else if(n(f)){var h=i[c];i[c]=h?function(){h.apply(void 0,arguments),f.apply(void 0,arguments)}:f}else i[c]=f};for(var c in a)s();return i},{})}}function $9(){var e=[],t=function(s,c){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,f=o(s,c,p),m=f.value+(f.key===s?0:p)+1;return e.push({key:s,value:m}),m},n=function(s){e=e.filter(function(c){return c.value!==s})},r=function(s,c){return o(s,c).value},o=function(s,c){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return ah(e).reverse().find(function(f){return c?!0:f.key===s})||{key:s,value:p}},i=function(s){return s&&parseInt(s.style.zIndex,10)||0};return{get:i,set:function(s,c,p,f){c&&(c.style.zIndex=String(t(s,p,f)))},clear:function(s){s&&(n(js.get(s)),s.style.zIndex="")},getCurrent:function(s,c){return r(s,c)}}}var js=$9();var Dt=Q(Re()),Ke=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"}),Vte=Object.freeze({AND:"and",OR:"or"});function Zc(e){"@babel/helpers - typeof";return Zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zc(e)}function G9(e,t){if(Zc(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Zc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sT(e){var t=G9(e,"string");return Zc(t)==="symbol"?t:String(t)}function Or(e,t,n){return t=sT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,sT(r.key),r)}}function Q9(e,t,n){return t&&aT(e.prototype,t),n&&aT(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Tn=Q9(function e(){Y9(this,e)});Or(Tn,"ripple",!1);Or(Tn,"inputStyle","outlined");Or(Tn,"locale","en");Or(Tn,"appendTo",null);Or(Tn,"cssTransition",!0);Or(Tn,"autoZIndex",!0);Or(Tn,"hideOverlaysOnDocumentScrolling",!1);Or(Tn,"nonce",null);Or(Tn,"nullSortOrder",1);Or(Tn,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});Or(Tn,"pt",void 0);Or(Tn,"filterMatchModeOptions",{text:[Ke.STARTS_WITH,Ke.CONTAINS,Ke.NOT_CONTAINS,Ke.ENDS_WITH,Ke.EQUALS,Ke.NOT_EQUALS],numeric:[Ke.EQUALS,Ke.NOT_EQUALS,Ke.LESS_THAN,Ke.LESS_THAN_OR_EQUAL_TO,Ke.GREATER_THAN,Ke.GREATER_THAN_OR_EQUAL_TO],date:[Ke.DATE_IS,Ke.DATE_IS_NOT,Ke.DATE_BEFORE,Ke.DATE_AFTER]});Or(Tn,"changeTheme",function(e,t,n,r){var o,i=document.getElementById(n);if(!i)throw Error("Element with id ".concat(n," not found."));var a=i.getAttribute("href").replace(e,t),s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("id",n),s.setAttribute("href",a),s.addEventListener("load",function(){r&&r()}),(o=i.parentNode)===null||o===void 0||o.replaceChild(s,i)});var Kte=Object.freeze({SUCCESS:"success",INFO:"info",WARN:"warn",ERROR:"error",SECONDARY:"secondary",CONTRAST:"contrast"}),$te=Object.freeze({ADDRESS_BOOK:"pi pi-address-book",ALIGN_CENTER:"pi pi-align-center",ALIGN_JUSTIFY:"pi pi-align-justify",ALIGN_LEFT:"pi pi-align-left",ALIGN_RIGHT:"pi pi-align-right",AMAZON:"pi pi-amazon",ANDROID:"pi pi-android",ANGLE_DOUBLE_DOWN:"pi pi-angle-double-down",ANGLE_DOUBLE_LEFT:"pi pi-angle-double-left",ANGLE_DOUBLE_RIGHT:"pi pi-angle-double-right",ANGLE_DOUBLE_UP:"pi pi-angle-double-up",ANGLE_DOWN:"pi pi-angle-down",ANGLE_LEFT:"pi pi-angle-left",ANGLE_RIGHT:"pi pi-angle-right",ANGLE_UP:"pi pi-angle-up",APPLE:"pi pi-apple",ARROW_CIRCLE_DOWN:"pi pi-arrow-circle-down",ARROW_CIRCLE_LEFT:"pi pi-arrow-circle-left",ARROW_CIRCLE_RIGHT:"pi pi-arrow-circle-right",ARROW_CIRCLE_UP:"pi pi-arrow-circle-up",ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER:"pi pi-arrow-down-left-and-arrow-up-right-to-center",ARROW_DOWN_LEFT:"pi pi-arrow-down-left",ARROW_DOWN_RIGHT:"pi pi-arrow-down-right",ARROW_DOWN:"pi pi-arrow-down",ARROW_LEFT:"pi pi-arrow-left",ARROW_RIGHT_ARROW_LEFT:"pi pi-arrow-right-arrow-left",ARROW_RIGHT:"pi pi-arrow-right",ARROW_UP_LEFT:"pi pi-arrow-up-left",ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER:"pi pi-arrow-up-right-and-arrow-down-left-from-center",ARROW_UP_RIGHT:"pi pi-arrow-up-right",ARROW_UP:"pi pi-arrow-up",ARROWS_ALT:"pi pi-arrows-alt",ARROWS_H:"pi pi-arrows-h",ARROWS_V:"pi pi-arrows-v",ASTERISK:"pi pi-asterisk",AT:"pi pi-at",BACKWARD:"pi pi-backward",BAN:"pi pi-ban",BARCODE:"pi pi-barcode",BARS:"pi pi-bars",BELL_SLASH:"pi pi-bell-slash",BELL:"pi pi-bell",BITCOIN:"pi pi-bitcoin",BOLT:"pi pi-bolt",BOOK:"pi pi-book",BOOKMARK_FILL:"pi pi-bookmark-fill",BOOKMARK:"pi pi-bookmark",BOX:"pi pi-box",BRIEFCASE:"pi pi-briefcase",BUILDING_COLUMNS:"pi pi-building-columns",BUILDING:"pi pi-building",BULLSEYE:"pi pi-bullseye",CALCULATOR:"pi pi-calculator",CALENDAR_CLOCK:"pi pi-calendar-clock",CALENDAR_MINUS:"pi pi-calendar-minus",CALENDAR_PLUS:"pi pi-calendar-plus",CALENDAR_TIMES:"pi pi-calendar-times",CALENDAR:"pi pi-calendar",CAMERA:"pi pi-camera",CAR:"pi pi-car",CARET_DOWN:"pi pi-caret-down",CARET_LEFT:"pi pi-caret-left",CARET_RIGHT:"pi pi-caret-right",CARET_UP:"pi pi-caret-up",CART_ARROW_DOWN:"pi pi-cart-arrow-down",CART_MINUS:"pi pi-cart-minus",CART_PLUS:"pi pi-cart-plus",CHART_BAR:"pi pi-chart-bar",CHART_LINE:"pi pi-chart-line",CHART_PIE:"pi pi-chart-pie",CHART_SCATTER:"pi pi-chart-scatter",CHECK_CIRCLE:"pi pi-check-circle",CHECK_SQUARE:"pi pi-check-square",CHECK:"pi pi-check",CHEVRON_CIRCLE_DOWN:"pi pi-chevron-circle-down",CHEVRON_CIRCLE_LEFT:"pi pi-chevron-circle-left",CHEVRON_CIRCLE_RIGHT:"pi pi-chevron-circle-right",CHEVRON_CIRCLE_UP:"pi pi-chevron-circle-up",CHEVRON_DOWN:"pi pi-chevron-down",CHEVRON_LEFT:"pi pi-chevron-left",CHEVRON_RIGHT:"pi pi-chevron-right",CHEVRON_UP:"pi pi-chevron-up",CIRCLE_FILL:"pi pi-circle-fill",CIRCLE_OFF:"pi pi-circle-off",CIRCLE_ON:"pi pi-circle-on",CIRCLE:"pi pi-circle",CLIPBOARD:"pi pi-clipboard",CLOCK:"pi pi-clock",CLONE:"pi pi-clone",CLOUD_DOWNLOAD:"pi pi-cloud-download",CLOUD_UPLOAD:"pi pi-cloud-upload",CLOUD:"pi pi-cloud",CODE:"pi pi-code",COG:"pi pi-cog",COMMENT:"pi pi-comment",COMMENTS:"pi pi-comments",COMPASS:"pi pi-compass",COPY:"pi pi-copy",CREDIT_CARD:"pi pi-credit-card",CROWN:"pi pi-crown",DATABASE:"pi pi-database",DELETE_LEFT:"pi pi-delete-left",DESKTOP:"pi pi-desktop",DIRECTIONS_ALT:"pi pi-directions-alt",DIRECTIONS:"pi pi-directions",DISCORD:"pi pi-discord",DOLLAR:"pi pi-dollar",DOWNLOAD:"pi pi-download",EJECT:"pi pi-eject",ELLIPSIS_H:"pi pi-ellipsis-h",ELLIPSIS_V:"pi pi-ellipsis-v",ENVELOPE:"pi pi-envelope",EQUALS:"pi pi-equals",ERASER:"pi pi-eraser",ETHEREUM:"pi pi-ethereum",EURO:"pi pi-euro",EXCLAMATION_CIRCLE:"pi pi-exclamation-circle",EXCLAMATION_TRIANGLE:"pi pi-exclamation-triangle",EXPAND:"pi pi-expand",EXTERNAL_LINK:"pi pi-external-link",EYE_SLASH:"pi pi-eye-slash",EYE:"pi pi-eye",FACE_SMILE:"pi pi-face-smile",FACEBOOK:"pi pi-facebook",FAST_BACKWARD:"pi pi-fast-backward",FAST_FORWARD:"pi pi-fast-forward",FILE_ARROW_UP:"pi pi-file-arrow-up",FILE_CHECK:"pi pi-file-check",FILE_EDIT:"pi pi-file-edit",FILE_EXCEL:"pi pi-file-excel",FILE_EXPORT:"pi pi-file-export",FILE_IMPORT:"pi pi-file-import",FILE_O:"pi pi-file-o",FILE_PDF:"pi pi-file-pdf",FILE_PLUS:"pi pi-file-plus",FILE_WORD:"pi pi-file-word",FILE:"pi pi-file",FILTER_FILL:"pi pi-filter-fill",FILTER_SLASH:"pi pi-filter-slash",FILTER:"pi pi-filter",FLAG_FILL:"pi pi-flag-fill",FLAG:"pi pi-flag",FOLDER_OPEN:"pi pi-folder-open",FOLDER_PLUS:"pi pi-folder-plus",FOLDER:"pi pi-folder",FORWARD:"pi pi-forward",GAUGE:"pi pi-gauge",GIFT:"pi pi-gift",GITHUB:"pi pi-github",GLOBE:"pi pi-globe",GOOGLE:"pi pi-google",GRADUATION_CAP:"pi pi-graduation-cap",HAMMER:"pi pi-hammer",HASHTAG:"pi pi-hashtag",HEADPHONES:"pi pi-headphones",HEART_FILL:"pi pi-heart-fill",HEART:"pi pi-heart",HISTORY:"pi pi-history",HOME:"pi pi-home",HOURGLASS:"pi pi-hourglass",ID_CARD:"pi pi-id-card",IMAGE:"pi pi-image",IMAGES:"pi pi-images",INBOX:"pi pi-inbox",INDIAN_RUPEE:"pi pi-indian-rupee",INFO_CIRCLE:"pi pi-info-circle",INFO:"pi pi-info",INSTAGRAM:"pi pi-instagram",KEY:"pi pi-key",LANGUAGE:"pi pi-language",LIGHTBULB:"pi pi-lightbulb",LINK:"pi pi-link",LINKEDIN:"pi pi-linkedin",LIST_CHECK:"pi pi-list-check",LIST:"pi pi-list",LOCK_OPEN:"pi pi-lock-open",LOCK:"pi pi-lock",MAP_MARKER:"pi pi-map-marker",MAP:"pi pi-map",MARS:"pi pi-mars",MEGAPHONE:"pi pi-megaphone",MICROCHIP_AI:"pi pi-microchip-ai",MICROCHIP:"pi pi-microchip",MICROPHONE:"pi pi-microphone",MICROSOFT:"pi pi-microsoft",MINUS_CIRCLE:"pi pi-minus-circle",MINUS:"pi pi-minus",MOBILE:"pi pi-mobile",MONEY_BILL:"pi pi-money-bill",MOON:"pi pi-moon",OBJECTS_COLUMN:"pi pi-objects-column",PALETTE:"pi pi-palette",PAPERCLIP:"pi pi-paperclip",PAUSE_CIRCLE:"pi pi-pause-circle",PAUSE:"pi pi-pause",PAYPAL:"pi pi-paypal",PEN_TO_SQUARE:"pi pi-pen-to-square",PENCIL:"pi pi-pencil",PERCENTAGE:"pi pi-percentage",PHONE:"pi pi-phone",PINTEREST:"pi pi-pinterest",PLAY_CIRCLE:"pi pi-play-circle",PLAY:"pi pi-play",PLUS_CIRCLE:"pi pi-plus-circle",PLUS:"pi pi-plus",POUND:"pi pi-pound",POWER_OFF:"pi pi-power-off",PRIME:"pi pi-prime",PRINT:"pi pi-print",QRCODE:"pi pi-qrcode",QUESTION_CIRCLE:"pi pi-question-circle",QUESTION:"pi pi-question",RECEIPT:"pi pi-receipt",REDDIT:"pi pi-reddit",REFRESH:"pi pi-refresh",REPLAY:"pi pi-replay",REPLY:"pi pi-reply",SAVE:"pi pi-save",SEARCH_MINUS:"pi pi-search-minus",SEARCH_PLUS:"pi pi-search-plus",SEARCH:"pi pi-search",SEND:"pi pi-send",SERVER:"pi pi-server",SHARE_ALT:"pi pi-share-alt",SHIELD:"pi pi-shield",SHOP:"pi pi-shop",SHOPPING_BAG:"pi pi-shopping-bag",SHOPPING_CART:"pi pi-shopping-cart",SIGN_IN:"pi pi-sign-in",SIGN_OUT:"pi pi-sign-out",SITEMAP:"pi pi-sitemap",SLACK:"pi pi-slack",SLIDERS_H:"pi pi-sliders-h",SLIDERS_V:"pi pi-sliders-v",SORT_ALPHA_DOWN_ALT:"pi pi-sort-alpha-down-alt",SORT_ALPHA_DOWN:"pi pi-sort-alpha-down",SORT_ALPHA_UP_ALT:"pi pi-sort-alpha-up-alt",SORT_ALPHA_UP:"pi pi-sort-alpha-up",SORT_ALT_SLASH:"pi pi-sort-alt-slash",SORT_ALT:"pi pi-sort-alt",SORT_AMOUNT_DOWN_ALT:"pi pi-sort-amount-down-alt",SORT_AMOUNT_DOWN:"pi pi-sort-amount-down",SORT_AMOUNT_UP_ALT:"pi pi-sort-amount-up-alt",SORT_AMOUNT_UP:"pi pi-sort-amount-up",SORT_DOWN_FILL:"pi pi-sort-down-fill",SORT_DOWN:"pi pi-sort-down",SORT_NUMERIC_DOWN_ALT:"pi pi-sort-numeric-down-alt",SORT_NUMERIC_DOWN:"pi pi-sort-numeric-down",SORT_NUMERIC_UP_ALT:"pi pi-sort-numeric-up-alt",SORT_NUMERIC_UP:"pi pi-sort-numeric-up",SORT_UP_FILL:"pi pi-sort-up-fill",SORT_UP:"pi pi-sort-up",SORT:"pi pi-sort",SPARKLES:"pi pi-sparkles",SPINNER_DOTTED:"pi pi-spinner-dotted",SPINNER:"pi pi-spinner",STAR_FILL:"pi pi-star-fill",STAR_HALF_FILL:"pi pi-star-half-fill",STAR_HALF:"pi pi-star-half",STAR:"pi pi-star",STEP_BACKWARD_ALT:"pi pi-step-backward-alt",STEP_BACKWARD:"pi pi-step-backward",STEP_FORWARD_ALT:"pi pi-step-forward-alt",STEP_FORWARD:"pi pi-step-forward",STOP_CIRCLE:"pi pi-stop-circle",STOP:"pi pi-stop",STOPWATCH:"pi pi-stopwatch",SUN:"pi pi-sun",SYNC:"pi pi-sync",TABLE:"pi pi-table",TABLET:"pi pi-tablet",TAG:"pi pi-tag",TAGS:"pi pi-tags",TELEGRAM:"pi pi-telegram",TH_LARGE:"pi pi-th-large",THUMBS_DOWN_FILL:"pi pi-thumbs-down-fill",THUMBS_DOWN:"pi pi-thumbs-down",THUMBS_UP_FILL:"pi pi-thumbs-up-fill",THUMBS_UP:"pi pi-thumbs-up",THUMBTACK:"pi pi-thumbtack",TICKET:"pi pi-ticket",TIKTOK:"pi pi-tiktok",TIMES_CIRCLE:"pi pi-times-circle",TIMES:"pi pi-times",TRASH:"pi pi-trash",TROPHY:"pi pi-trophy",TRUCK:"pi pi-truck",TURKISH_LIRA:"pi pi-turkish-lira",TWITCH:"pi pi-twitch",TWITTER:"pi pi-twitter",UNDO:"pi pi-undo",UNLOCK:"pi pi-unlock",UPLOAD:"pi pi-upload",USER_EDIT:"pi pi-user-edit",USER_MINUS:"pi pi-user-minus",USER_PLUS:"pi pi-user-plus",USER:"pi pi-user",USERS:"pi pi-users",VENUS:"pi pi-venus",VERIFIED:"pi pi-verified",VIDEO:"pi pi-video",VIMEO:"pi pi-vimeo",VOLUME_DOWN:"pi pi-volume-down",VOLUME_OFF:"pi pi-volume-off",VOLUME_UP:"pi pi-volume-up",WALLET:"pi pi-wallet",WAREHOUSE:"pi pi-warehouse",WAVE_PULSE:"pi pi-wave-pulse",WHATSAPP:"pi pi-whatsapp",WIFI:"pi pi-wifi",WINDOW_MAXIMIZE:"pi pi-window-maximize",WINDOW_MINIMIZE:"pi pi-window-minimize",WRENCH:"pi pi-wrench",YOUTUBE:"pi pi-youtube"}),Gte=Object.freeze({DESC:-1,UNSORTED:0,ASC:1});function X9(e){if(Array.isArray(e))return e}function Z9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return s}}function lT(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J9(e,t){if(e){if(typeof e=="string")return lT(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lT(e,t)}}function eU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xn(e,t){return X9(e)||Z9(e,t)||J9(e,t)||eU()}var Bn=Dt.default.createContext(),uT=function(t){var n=t.value||{},r=(0,Dt.useState)(n.ripple||!1),o=Xn(r,2),i=o[0],a=o[1],s=(0,Dt.useState)(n.inputStyle||"outlined"),c=Xn(s,2),p=c[0],f=c[1],m=(0,Dt.useState)(n.locale||"en"),h=Xn(m,2),g=h[0],v=h[1],w=(0,Dt.useState)(n.appendTo||null),_=Xn(w,2),y=_[0],x=_[1],S=(0,Dt.useState)(n.styleContainer||null),T=Xn(S,2),I=T[0],R=T[1],D=(0,Dt.useState)(n.cssTransition||!0),z=Xn(D,2),U=z[0],A=z[1],te=(0,Dt.useState)(n.autoZIndex||!0),Z=Xn(te,2),G=Z[0],ie=Z[1],ee=(0,Dt.useState)(n.hideOverlaysOnDocumentScrolling||!1),fe=Xn(ee,2),Me=fe[0],ce=fe[1],Le=(0,Dt.useState)(n.nonce||null),P=Xn(Le,2),$e=P[0],ln=P[1],L=(0,Dt.useState)(n.nullSortOrder||1),tt=Xn(L,2),xn=tt[0],wn=tt[1],$t=(0,Dt.useState)(n.zIndex||{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200}),Ie=Xn($t,2),sn=Ie[0],Tt=Ie[1],un=(0,Dt.useState)(n.ptOptions||{mergeSections:!0,mergeProps:!0}),st=Xn(un,2),kn=st[0],eo=st[1],Ot=(0,Dt.useState)(n.pt||void 0),Pt=Xn(Ot,2),Ir=Pt[0],er=Pt[1],Ut=(0,Dt.useState)(n.unstyled||!1),On=Xn(Ut,2),hr=On[0],_o=On[1],Sn=(0,Dt.useState)(n.filterMatchModeOptions||{text:[Ke.STARTS_WITH,Ke.CONTAINS,Ke.NOT_CONTAINS,Ke.ENDS_WITH,Ke.EQUALS,Ke.NOT_EQUALS],numeric:[Ke.EQUALS,Ke.NOT_EQUALS,Ke.LESS_THAN,Ke.LESS_THAN_OR_EQUAL_TO,Ke.GREATER_THAN,Ke.GREATER_THAN_OR_EQUAL_TO],date:[Ke.DATE_IS,Ke.DATE_IS_NOT,Ke.DATE_BEFORE,Ke.DATE_AFTER]}),tr=Xn(Sn,2),Wn=tr[0],H=tr[1],J=function(ze,It,Gt,pe){var q,re=document.getElementById(Gt);if(!re)throw Error("Element with id ".concat(Gt," not found."));var be=re.getAttribute("href").replace(ze,It),he=document.createElement("link");he.setAttribute("rel","stylesheet"),he.setAttribute("id",Gt),he.setAttribute("href",be),he.addEventListener("load",function(){pe&&pe()}),(q=re.parentNode)===null||q===void 0||q.replaceChild(he,re)};Dt.default.useEffect(function(){Tn.ripple=i},[i]),Dt.default.useEffect(function(){Tn.inputStyle=p},[p]),Dt.default.useEffect(function(){Tn.locale=g},[g]);var de={changeTheme:J,ripple:i,setRipple:a,inputStyle:p,setInputStyle:f,locale:g,setLocale:v,appendTo:y,setAppendTo:x,styleContainer:I,setStyleContainer:R,cssTransition:U,setCssTransition:A,autoZIndex:G,setAutoZIndex:ie,hideOverlaysOnDocumentScrolling:Me,setHideOverlaysOnDocumentScrolling:ce,nonce:$e,setNonce:ln,nullSortOrder:xn,setNullSortOrder:wn,zIndex:sn,setZIndex:Tt,ptOptions:kn,setPtOptions:eo,pt:Ir,setPt:er,filterMatchModeOptions:Wn,setFilterMatchModeOptions:H,unstyled:hr,setUnstyled:_o};return Dt.default.createElement(Bn.Provider,{value:de},t.children)},pr=Tn;var mt=Q(Re()),No=Q(Re());function tU(e){if(Array.isArray(e))return e}function nU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return s}}function ox(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pT(e,t){if(e){if(typeof e=="string")return ox(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ox(e,t)}}function rU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fT(e,t){return tU(e)||nU(e,t)||pT(e,t)||rU()}var sh=function(t){var n=mt.useRef(null);return mt.useEffect(function(){return n.current=t,function(){n.current=null}},[t]),n.current},Fo=function(t){return mt.useEffect(function(){return t},[])},oU=function(t){var n=t.target,r=n===void 0?"document":n,o=t.type,i=t.listener,a=t.options,s=t.when,c=s===void 0?!0:s,p=mt.useRef(null),f=mt.useRef(null),m=sh(i),h=sh(a),g=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=x.target;ye.isNotEmpty(S)&&(v(),(x.when||c)&&(p.current=Ce.getTargetElement(S))),!f.current&&p.current&&(f.current=function(T){return i&&i(T)},p.current.addEventListener(o,f.current,a))},v=function(){f.current&&(p.current.removeEventListener(o,f.current,a),f.current=null)},w=function(){v(),m=null,h=null},_=mt.useCallback(function(){c?p.current=Ce.getTargetElement(r):(v(),p.current=null)},[r,c]);return mt.useEffect(function(){_()},[_]),mt.useEffect(function(){var y="".concat(m)!=="".concat(i),x=h!==a,S=f.current;S&&(y||x)?(v(),c&&g()):S||w()},[i,a,c]),Fo(function(){w()}),[g,v]};function iU(e){if(Array.isArray(e))return ox(e)}function aU(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cT(e){return iU(e)||aU(e)||pT(e)||lU()}var dT={SIDEBAR:100,SLIDE_MENU:200,DIALOG:300,IMAGE:400,MENU:500,OVERLAY_PANEL:600,PASSWORD:700,CASCADE_SELECT:800,SPLIT_BUTTON:900,SPEED_DIAL:1e3,TOOLTIP:1200},mT={escKeyListeners:new Map,onGlobalKeyDown:function(t){if(t.code==="Escape"){var n=mT.escKeyListeners,r=Math.max.apply(Math,cT(n.keys())),o=n.get(r),i=Math.max.apply(Math,cT(o.keys())),a=o.get(i);a(t)}},refreshGlobalKeyDownListener:function(){var t=Ce.getTargetElement("document");this.escKeyListeners.size>0?t.addEventListener("keydown",this.onGlobalKeyDown):t.removeEventListener("keydown",this.onGlobalKeyDown)},addListener:function(t,n){var r=this,o=fT(n,2),i=o[0],a=o[1],s=this.escKeyListeners;s.has(i)||s.set(i,new Map);var c=s.get(i);if(c.has(a))throw new Error("Unexpected: global esc key listener with priority [".concat(i,", ").concat(a,"] already exists."));return c.set(a,t),this.refreshGlobalKeyDownListener(),function(){c.delete(a),c.size===0&&s.delete(i),r.refreshGlobalKeyDownListener()}}},hT=function(t){var n=t.callback,r=t.when,o=t.priority;(0,No.useEffect)(function(){if(r)return mT.addListener(n,o)},[n,r,o])};var bi=function(){var t=(0,No.useContext)(Bn);return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return Us(r,t?.ptOptions)}},fa=function(t){var n=mt.useRef(!1);return mt.useEffect(function(){if(!n.current)return n.current=!0,t&&t()},[])};var gT=function(t){var n=t.target,r=t.listener,o=t.options,i=t.when,a=i===void 0?!0:i,s=mt.useContext(Bn),c=mt.useRef(null),p=mt.useRef(null),f=mt.useRef([]),m=sh(r),h=sh(o),g=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ye.isNotEmpty(x.target)&&(v(),(x.when||a)&&(c.current=Ce.getTargetElement(x.target))),!p.current&&c.current){var S=s?s.hideOverlaysOnDocumentScrolling:pr.hideOverlaysOnDocumentScrolling,T=f.current=Ce.getScrollableParents(c.current,S);p.current=function(I){return r&&r(I)},T.forEach(function(I){return I.addEventListener("scroll",p.current,o)})}},v=function(){if(p.current){var x=f.current;x.forEach(function(S){return S.removeEventListener("scroll",p.current,o)}),p.current=null}},w=function(){v(),f.current=null,m=null,h=null},_=mt.useCallback(function(){a?c.current=Ce.getTargetElement(n):(v(),c.current=null)},[n,a]);return mt.useEffect(function(){_()},[_]),mt.useEffect(function(){var y="".concat(m)!=="".concat(r),x=h!==o,S=p.current;S&&(y||x)?(v(),a&&g()):S||w()},[r,o,a]),Fo(function(){w()}),[g,v]},bT=function(t){var n=t.listener,r=t.when,o=r===void 0?!0:r;return oU({target:"window",type:"resize",listener:n,when:o})};var sU=0,pl=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(0,No.useState)(!1),o=fT(r,2),i=o[0],a=o[1],s=(0,No.useRef)(null),c=(0,No.useContext)(Bn),p=Ce.isClient()?window.document:void 0,f=n.document,m=f===void 0?p:f,h=n.manual,g=h===void 0?!1:h,v=n.name,w=v===void 0?"style_".concat(++sU):v,_=n.id,y=_===void 0?void 0:_,x=n.media,S=x===void 0?void 0:x,T=function(U){var A=U.querySelector('style[data-primereact-style-id="'.concat(w,'"]'));if(A)return A;if(y!==void 0){var te=m.getElementById(y);if(te)return te}return m.createElement("style")},I=function(U){i&&t!==U&&(s.current.textContent=U)},R=function(){if(!(!m||i)){var U=c?.styleContainer||m.head;s.current=T(U),s.current.isConnected||(s.current.type="text/css",y&&(s.current.id=y),S&&(s.current.media=S),Ce.addNonce(s.current,c&&c.nonce||pr.nonce),U.appendChild(s.current),w&&s.current.setAttribute("data-primereact-style-id",w)),s.current.textContent=t,a(!0)}},D=function(){!m||!s.current||(Ce.removeInlineStyle(s.current),a(!1))};return(0,No.useEffect)(function(){g||R()},[g]),{id:y,name:w,update:I,unload:D,load:R,isLoaded:i}};var go=function(t,n){var r=mt.useRef(!1);return mt.useEffect(function(){if(!r.current){r.current=!0;return}return t&&t()},n)};function ix(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function uU(e){if(Array.isArray(e))return ix(e)}function cU(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pU(e,t){if(e){if(typeof e=="string")return ix(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ix(e,t)}}function fU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vT(e){return uU(e)||cU(e)||pU(e)||fU()}function Jc(e){"@babel/helpers - typeof";return Jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jc(e)}function dU(e,t){if(Jc(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Jc(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mU(e){var t=dU(e,"string");return Jc(t)==="symbol"?t:String(t)}function ax(e,t,n){return t=mU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yT(Object(n),!0).forEach(function(r){ax(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var hU=`
.p-hidden-accessible {
    border: 0;
    padding: 0;
    margin: -1px;
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,gU=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}
`,bU=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,vU=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,yU=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(gU,`
    `).concat(bU,`
    `).concat(vU,`
}
`),rt={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.css,r=hn(hn({},t.defaultProps),rt.defaultProps),o={},i=function(f){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return rt.context=m,rt.cProps=f,ye.getMergedProps(f,r)},a=function(f){return ye.getDiffProps(f,r)},s=function(){var f,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;m.hasOwnProperty("pt")&&m.pt!==void 0&&(m=m.pt);var w=h,_=/./g.test(w)&&!!g[w.split(".")[0]],y=_?ye.toFlatCase(w.split(".")[1]):ye.toFlatCase(w),x=g.hostName&&ye.toFlatCase(g.hostName),S=x||g.props&&g.props.__TYPE&&ye.toFlatCase(g.props.__TYPE)||"",T=y==="transition",I="data-pc-",R=function Me(ce){return ce!=null&&ce.props?ce.hostName?ce.props.__TYPE===ce.hostName?ce.props:Me(ce.parent):ce.parent:void 0},D=function(ce){var Le,P;return((Le=g.props)===null||Le===void 0?void 0:Le[ce])||((P=R(g))===null||P===void 0?void 0:P[ce])};rt.cParams=g,rt.cName=S;var z=D("ptOptions")||rt.context.ptOptions||{},U=z.mergeSections,A=U===void 0?!0:U,te=z.mergeProps,Z=te===void 0?!1:te,G=function(){var ce=da.apply(void 0,arguments);return Array.isArray(ce)?{className:wt.apply(void 0,vT(ce))}:ye.isString(ce)?{className:ce}:ce!=null&&ce.hasOwnProperty("className")&&Array.isArray(ce.className)?{className:wt.apply(void 0,vT(ce.className))}:ce},ie=v?_?xT(G,w,g):wT(G,w,g):void 0,ee=_?void 0:ch(uh(m,S),G,w,g),fe=!T&&hn(hn({},y==="root"&&ax({},"".concat(I,"name"),g.props&&g.props.__parentMetadata?ye.toFlatCase(g.props.__TYPE):S)),{},ax({},"".concat(I,"section"),y));return A||!A&&ee?Z?Us([ie,ee,Object.keys(fe).length?fe:{}],{classNameMergeFunction:(f=rt.context.ptOptions)===null||f===void 0?void 0:f.classNameMergeFunction}):hn(hn(hn({},ie),ee),Object.keys(fe).length?fe:{}):hn(hn({},ee),Object.keys(fe).length?fe:{})},c=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=f.props,h=f.state,g=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s((m||{}).pt,S,hn(hn({},f),T))},v=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return s(S,T,I,!1)},w=function(){return rt.context.unstyled||pr.unstyled||m.unstyled},_=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return w()?void 0:da(n&&n.classes,S,hn({props:m,state:h},T))},y=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(I){var R,D=da(n&&n.inlineStyles,S,hn({props:m,state:h},T)),z=da(o,S,hn({props:m,state:h},T));return Us([z,D],{classNameMergeFunction:(R=rt.context.ptOptions)===null||R===void 0?void 0:R.classNameMergeFunction})}};return{ptm:g,ptmo:v,sx:y,cx:_,isUnstyled:w}};return hn(hn({getProps:i,getOtherProps:a,setMetaData:c},t),{},{defaultProps:r})}},da=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=String(ye.toFlatCase(n)).split("."),i=o.shift(),a=ye.isNotEmpty(t)?Object.keys(t).find(function(s){return ye.toFlatCase(s)===i}):"";return i?ye.isObject(t)?e(ye.getItemValue(t[a],r),o.join("."),r):void 0:ye.getItemValue(t,r)},uh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=t?._usept,i=function(s){var c,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=r?r(s):s,m=ye.toFlatCase(n);return(c=p?m!==rt.cName?f?.[m]:void 0:f?.[m])!==null&&c!==void 0?c:f};return ye.isNotEmpty(o)?{_usept:o,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)},ch=function(t,n,r,o){var i=function(w){return n(w,r,o)};if(t!=null&&t.hasOwnProperty("_usept")){var a=t._usept||rt.context.ptOptions||{},s=a.mergeSections,c=s===void 0?!0:s,p=a.mergeProps,f=p===void 0?!1:p,m=a.classNameMergeFunction,h=i(t.originalValue),g=i(t.value);return h===void 0&&g===void 0?void 0:ye.isString(g)?g:ye.isString(h)?h:c||!c&&g?f?Us([h,g],{classNameMergeFunction:m}):hn(hn({},h),g):g}return i(t)},xU=function(){return uh(rt.context.pt||pr.pt,void 0,function(t){return ye.getItemValue(t,rt.cParams)})},wU=function(){return uh(rt.context.pt||pr.pt,void 0,function(t){return da(t,rt.cName,rt.cParams)||ye.getItemValue(t,rt.cParams)})},xT=function(t,n,r){return ch(xU(),t,n,r)},wT=function(t,n,r){return ch(wU(),t,n,r)},fl=function(t){var n=arguments.length>2?arguments[2]:void 0,r=n.name,o=n.styled,i=o===void 0?!1:o,a=n.hostName,s=a===void 0?"":a,c=xT(da,"global.css",rt.cParams),p=ye.toFlatCase(r),f=pl(hU,{name:"base",manual:!0}),m=f.load,h=pl(yU,{name:"common",manual:!0}),g=h.load,v=pl(c,{name:"global",manual:!0}),w=v.load,_=pl(t,{name:r,manual:!0}),y=_.load,x=function(T){if(!s){var I=ch(uh((rt.cProps||{}).pt,p),da,"hooks.".concat(T)),R=wT(da,"hooks.".concat(T));I?.(),R?.()}};x("useMountEffect"),fa(function(){m(),w(),g(),i||y()}),go(function(){x("useUpdateEffect")}),Fo(function(){x("useUnmountEffect")})};var dl=Q(Re());var ep={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(t){return ye.getMergedProps(t,ep.defaultProps)},getOtherProps:function(t){return ye.getDiffProps(t,ep.defaultProps)},getPTI:function(t){var n=ye.isEmpty(t.label),r=ep.getOtherProps(t),o={className:wt("p-icon",{"p-icon-spin":t.spin},t.className),role:n?void 0:"img","aria-label":n?void 0:t.label,"aria-hidden":n};return ye.getMergedProps(r,o)}};function lx(){return lx=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lx.apply(this,arguments)}var sx=dl.memo(dl.forwardRef(function(e,t){var n=ep.getPTI(e);return dl.createElement("svg",lx({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),dl.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"}))}));sx.displayName="SpinnerIcon";var Zn=Q(Re());function ux(){return ux=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ux.apply(this,arguments)}function tp(e){"@babel/helpers - typeof";return tp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tp(e)}function kU(e,t){if(tp(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(tp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function SU(e){var t=kU(e,"string");return tp(t)==="symbol"?t:String(t)}function _U(e,t,n){return t=SU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CU(e){if(Array.isArray(e))return e}function EU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return s}}function kT(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function RU(e,t){if(e){if(typeof e=="string")return kT(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kT(e,t)}}function TU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OU(e,t){return CU(e)||EU(e,t)||RU(e,t)||TU()}var PU=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,IU={root:"p-ink"},Hs=rt.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:PU,classes:IU},getProps:function(t){return ye.getMergedProps(t,Hs.defaultProps)},getOtherProps:function(t){return ye.getDiffProps(t,Hs.defaultProps)}});function ST(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function AU(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ST(Object(n),!0).forEach(function(r){_U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ST(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var cx=Zn.memo(Zn.forwardRef(function(e,t){var n=Zn.useState(!1),r=OU(n,2),o=r[0],i=r[1],a=Zn.useRef(null),s=Zn.useRef(null),c=bi(),p=Zn.useContext(Bn),f=Hs.getProps(e,p),m=p&&p.ripple||pr.ripple,h={props:f};pl(Hs.css.styles,{name:"ripple",manual:!m});var g=Hs.setMetaData(AU({},h)),v=g.ptm,w=g.cx,_=function(){return a.current&&a.current.parentElement},y=function(){s.current&&s.current.addEventListener("pointerdown",S)},x=function(){s.current&&s.current.removeEventListener("pointerdown",S)},S=function(U){var A=Ce.getOffset(s.current),te=U.pageX-A.left+document.body.scrollTop-Ce.getWidth(a.current)/2,Z=U.pageY-A.top+document.body.scrollLeft-Ce.getHeight(a.current)/2;T(te,Z)},T=function(U,A){!a.current||getComputedStyle(a.current,null).display==="none"||(Ce.removeClass(a.current,"p-ink-active"),R(),a.current.style.top=A+"px",a.current.style.left=U+"px",Ce.addClass(a.current,"p-ink-active"))},I=function(U){Ce.removeClass(U.currentTarget,"p-ink-active")},R=function(){if(a.current&&!Ce.getHeight(a.current)&&!Ce.getWidth(a.current)){var U=Math.max(Ce.getOuterWidth(s.current),Ce.getOuterHeight(s.current));a.current.style.height=U+"px",a.current.style.width=U+"px"}};if(Zn.useImperativeHandle(t,function(){return{props:f,getInk:function(){return a.current},getTarget:function(){return s.current}}}),fa(function(){i(!0)}),go(function(){o&&a.current&&(s.current=_(),R(),y())},[o]),go(function(){a.current&&!s.current&&(s.current=_(),R(),y())}),Fo(function(){a.current&&(s.current=null,x())}),!m)return null;var D=c({"aria-hidden":!0,className:wt(w("root"))},Hs.getOtherProps(f),v("root"));return Zn.createElement("span",ux({role:"presentation",ref:a},D,{onAnimationEnd:I}))}));cx.displayName="Ripple";var ht=Q(Re());var Ws=Q(Re()),CT=Q(Dy());function LU(e){if(Array.isArray(e))return e}function MU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return s}}function _T(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function DU(e,t){if(e){if(typeof e=="string")return _T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _T(e,t)}}function NU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FU(e,t){return LU(e)||MU(e,t)||DU(e,t)||NU()}var px={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(t){return ye.getMergedProps(t,px.defaultProps)},getOtherProps:function(t){return ye.getDiffProps(t,px.defaultProps)}},fx=Ws.memo(function(e){var t=px.getProps(e),n=Ws.useContext(Bn),r=Ws.useState(t.visible&&Ce.isClient()),o=FU(r,2),i=o[0],a=o[1];fa(function(){Ce.isClient()&&!i&&(a(!0),t.onMounted&&t.onMounted())}),go(function(){t.onMounted&&t.onMounted()},[i]),Fo(function(){t.onUnmounted&&t.onUnmounted()});var s=t.element||t.children;if(s&&i){var c=t.appendTo||n&&n.appendTo||pr.appendTo;return ye.isFunction(c)&&(c=c()),c||(c=document.body),c==="self"?s:CT.default.createPortal(s,c)}return null});fx.displayName="Portal";function fh(){return fh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fh.apply(this,arguments)}function rp(e){"@babel/helpers - typeof";return rp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rp(e)}function zU(e,t){if(rp(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(rp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function BU(e){var t=zU(e,"string");return rp(t)==="symbol"?t:String(t)}function RT(e,t,n){return t=BU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dx(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function UU(e){if(Array.isArray(e))return dx(e)}function jU(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function TT(e,t){if(e){if(typeof e=="string")return dx(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dx(e,t)}}function HU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WU(e){return UU(e)||jU(e)||TT(e)||HU()}function qU(e){if(Array.isArray(e))return e}function VU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw o}}return s}}function KU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function np(e,t){return qU(e)||VU(e,t)||TT(e,t)||KU()}var $U={root:function(t){var n=t.positionState,r=t.classNameState;return wt("p-tooltip p-component",RT({},"p-tooltip-".concat(n),!0),r)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},GU={arrow:function(t){var n=t.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},QU=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,ph=rt.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:$U,styles:QU,inlineStyles:GU}});function ET(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function YU(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ET(Object(n),!0).forEach(function(r){RT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ET(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var op=ht.memo(ht.forwardRef(function(e,t){var n=bi(),r=ht.useContext(Bn),o=ph.getProps(e,r),i=ht.useState(!1),a=np(i,2),s=a[0],c=a[1],p=ht.useState(o.position||"right"),f=np(p,2),m=f[0],h=f[1],g=ht.useState(""),v=np(g,2),w=v[0],_=v[1],y={props:o,state:{visible:s,position:m,className:w},context:{right:m==="right",left:m==="left",top:m==="top",bottom:m==="bottom"}},x=ph.setMetaData(y),S=x.ptm,T=x.cx,I=x.sx,R=x.isUnstyled;fl(ph.css.styles,R,{name:"tooltip"}),hT({callback:function(){Pt()},when:o.closeOnEscape,priority:[dT.TOOLTIP,0]});var D=ht.useRef(null),z=ht.useRef(null),U=ht.useRef(null),A=ht.useRef(null),te=ht.useRef(!0),Z=ht.useRef({}),G=ht.useRef(null),ie=bT({listener:function(q){!Ce.isTouchDevice()&&Pt(q)}}),ee=np(ie,2),fe=ee[0],Me=ee[1],ce=gT({target:U.current,listener:function(q){Pt(q)},when:s}),Le=np(ce,2),P=Le[0],$e=Le[1],ln=function(q){return!(o.content||Ie(q,"tooltip"))},L=function(q){return!(o.content||Ie(q,"tooltip")||o.children)},tt=function(q){return Ie(q,"mousetrack")||o.mouseTrack},xn=function(q){return Ie(q,"disabled")==="true"||sn(q,"disabled")||o.disabled},wn=function(q){return Ie(q,"showondisabled")||o.showOnDisabled},$t=function(){return Ie(U.current,"autohide")||o.autoHide},Ie=function(q,re){return sn(q,"data-pr-".concat(re))?q.getAttribute("data-pr-".concat(re)):null},sn=function(q,re){return q&&q.hasAttribute(re)},Tt=function(q){var re=[Ie(q,"showevent")||o.showEvent],be=[Ie(q,"hideevent")||o.hideEvent];if(tt(q))re=["mousemove"],be=["mouseleave"];else{var he=Ie(q,"event")||o.event;he==="focus"&&(re=["focus"],be=["blur"]),he==="both"&&(re=["focus","mouseenter"],be=["blur","mouseleave"])}return{showEvents:re,hideEvents:be}},un=function(q){return Ie(q,"position")||m},st=function(q){var re=Ie(q,"mousetracktop")||o.mouseTrackTop,be=Ie(q,"mousetrackleft")||o.mouseTrackLeft;return{top:re,left:be}},kn=function(q,re){if(z.current){var be=Ie(q,"tooltip")||o.content;be?(z.current.innerHTML="",z.current.appendChild(document.createTextNode(be)),re()):o.children&&re()}},eo=function(q){kn(U.current,function(){var re=G.current,be=re.pageX,he=re.pageY;o.autoZIndex&&!js.get(D.current)&&js.set("tooltip",D.current,r&&r.autoZIndex||pr.autoZIndex,o.baseZIndex||r&&r.zIndex.tooltip||pr.zIndex.tooltip),D.current.style.left="",D.current.style.top="",$t()&&(D.current.style.pointerEvents="none");var xe=tt(U.current)||q==="mouse";(xe&&!A.current||xe)&&(A.current={width:Ce.getOuterWidth(D.current),height:Ce.getOuterHeight(D.current)}),Ir(U.current,{x:be,y:he},q)})},Ot=function(q){U.current=q.currentTarget;var re=xn(U.current),be=L(wn(U.current)&&re?U.current.firstChild:U.current);if(!(be||re))if(G.current=q,s)Sn("updateDelay",eo);else{var he=tr(o.onBeforeShow,{originalEvent:q,target:U.current});he&&Sn("showDelay",function(){c(!0),tr(o.onShow,{originalEvent:q,target:U.current})})}},Pt=function(q){if(Wn(),s){var re=tr(o.onBeforeHide,{originalEvent:q,target:U.current});re&&Sn("hideDelay",function(){!$t()&&te.current===!1||(js.clear(D.current),Ce.removeClass(D.current,"p-tooltip-active"),c(!1),tr(o.onHide,{originalEvent:q,target:U.current}))})}},Ir=function(q,re,be){var he=0,xe=0,At=be||m;if((tt(q)||At=="mouse")&&re){var Pn={width:Ce.getOuterWidth(D.current),height:Ce.getOuterHeight(D.current)};he=re.x,xe=re.y;var Aa=st(q),$o=Aa.top,Go=Aa.left;switch(At){case"left":he=he-(Pn.width+Go),xe=xe-(Pn.height/2-$o);break;case"right":case"mouse":he=he+Go,xe=xe-(Pn.height/2-$o);break;case"top":he=he-(Pn.width/2-Go),xe=xe-(Pn.height+$o);break;case"bottom":he=he-(Pn.width/2-Go),xe=xe+$o;break}he<=0||A.current.width>Pn.width?(D.current.style.left="0px",D.current.style.right=window.innerWidth-Pn.width-he+"px"):(D.current.style.right="",D.current.style.left=he+"px"),D.current.style.top=xe+"px",Ce.addClass(D.current,"p-tooltip-active")}else{var Pi=Ce.findCollisionPosition(At),La=Ie(q,"my")||o.my||Pi.my,zl=Ie(q,"at")||o.at||Pi.at;D.current.style.padding="0px",Ce.flipfitCollision(D.current,q,La,zl,function(Ii){var Ma=Ii.at,Co=Ma.x,Bl=Ma.y,Ai=Ii.my.x,Da=o.at?Co!=="center"&&Co!==Ai?Co:Bl:Ii.at["".concat(Pi.axis)];D.current.style.padding="",h(Da),er(Da),Ce.addClass(D.current,"p-tooltip-active")})}},er=function(q){if(D.current){var re=getComputedStyle(D.current);q==="left"?D.current.style.left=parseFloat(re.left)-parseFloat(re.paddingLeft)*2+"px":q==="top"&&(D.current.style.top=parseFloat(re.top)-parseFloat(re.paddingTop)*2+"px")}},Ut=function(){$t()||(te.current=!1)},On=function(q){$t()||(te.current=!0,Pt(q))},hr=function(q){if(q){var re=Tt(q),be=re.showEvents,he=re.hideEvents,xe=H(q);be.forEach(function(At){return xe?.addEventListener(At,Ot)}),he.forEach(function(At){return xe?.addEventListener(At,Pt)})}},_o=function(q){if(q){var re=Tt(q),be=re.showEvents,he=re.hideEvents,xe=H(q);be.forEach(function(At){return xe?.removeEventListener(At,Ot)}),he.forEach(function(At){return xe?.removeEventListener(At,Pt)})}},Sn=function(q,re){Wn();var be=Ie(U.current,q.toLowerCase())||o[q];be?Z.current["".concat(q)]=setTimeout(function(){return re()},be):re()},tr=function(q){if(q){for(var re=arguments.length,be=new Array(re>1?re-1:0),he=1;he<re;he++)be[he-1]=arguments[he];var xe=q.apply(void 0,be);return xe===void 0&&(xe=!0),xe}return!0},Wn=function(){Object.values(Z.current).forEach(function(q){return clearTimeout(q)})},H=function(q){if(q){if(wn(q)){if(!q.hasWrapper){var re=document.createElement("div"),be=q.nodeName==="INPUT";return be?Ce.addMultipleClasses(re,"p-tooltip-target-wrapper p-inputwrapper"):Ce.addClass(re,"p-tooltip-target-wrapper"),q.parentNode.insertBefore(re,q),re.appendChild(q),q.hasWrapper=!0,re}return q.parentElement}else if(q.hasWrapper){var he;(he=q.parentElement).replaceWith.apply(he,WU(q.parentElement.childNodes)),delete q.hasWrapper}return q}return null},J=function(q){_e(q),de(q)},de=function(q){ze(q||o.target,hr)},_e=function(q){ze(q||o.target,_o)},ze=function(q,re){if(q=ye.getRefElement(q),q)if(Ce.isElement(q))re(q);else{var be=function(xe){var At=Ce.find(document,xe);At.forEach(function(Pn){re(Pn)})};q instanceof Array?q.forEach(function(he){be(he)}):be(q)}};fa(function(){s&&U.current&&xn(U.current)&&Pt()}),go(function(){return de(),function(){_e()}},[Ot,Pt,o.target]),go(function(){if(s){var pe=un(U.current),q=Ie(U.current,"classname");h(pe),_(q),eo(pe),fe(),P()}else h(o.position||"right"),_(""),U.current=null,A.current=null,te.current=!0;return function(){Me(),$e()}},[s]),go(function(){var pe=un(U.current);s&&pe!=="mouse"&&Sn("updateDelay",function(){kn(U.current,function(){Ir(U.current)})})},[o.content]),Fo(function(){Pt(),js.clear(D.current)}),ht.useImperativeHandle(t,function(){return{props:o,updateTargetEvents:J,loadTargetEvents:de,unloadTargetEvents:_e,show:Ot,hide:Pt,getElement:function(){return D.current},getTarget:function(){return U.current}}});var It=function(){var q=ln(U.current),re=n({id:o.id,className:wt(o.className,T("root",{positionState:m,classNameState:w})),style:o.style,role:"tooltip","aria-hidden":s,onMouseEnter:function(At){return Ut()},onMouseLeave:function(At){return On(At)}},ph.getOtherProps(o),S("root")),be=n({className:T("arrow"),style:I("arrow",YU({},y))},S("arrow")),he=n({className:T("text")},S("text"));return ht.createElement("div",fh({ref:D},re),ht.createElement("div",be),ht.createElement("div",fh({ref:z},he),q&&o.children))};if(s){var Gt=It();return ht.createElement(fx,{element:Gt,appendTo:o.appendTo,visible:!0})}return null}));op.displayName="Tooltip";function ip(){return ip=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ip.apply(this,arguments)}function ap(e){"@babel/helpers - typeof";return ap=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ap(e)}function XU(e,t){if(ap(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ap(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ZU(e){var t=XU(e,"string");return ap(t)==="symbol"?t:String(t)}function vi(e,t,n){return t=ZU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var JU={root:function(t){var n=t.props;return wt("p-badge p-component",vi({"p-badge-no-gutter":ye.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":ye.isEmpty(n.value),"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge"},"p-badge-".concat(n.severity),n.severity!==null))}},ej=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,dh=rt.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:JU,styles:ej}});function OT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?OT(Object(n),!0).forEach(function(r){vi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):OT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var IT=ot.memo(ot.forwardRef(function(e,t){var n=bi(),r=ot.useContext(Bn),o=dh.getProps(e,r),i=dh.setMetaData(tj({props:o},o.__parentMetadata)),a=i.ptm,s=i.cx,c=i.isUnstyled;fl(dh.css.styles,c,{name:"badge"});var p=ot.useRef(null);ot.useImperativeHandle(t,function(){return{props:o,getElement:function(){return p.current}}});var f=n({ref:p,style:o.style,className:wt(o.className,s("root"))},dh.getOtherProps(o),a("root"));return ot.createElement("span",f,o.value)}));IT.displayName="Badge";var nj={icon:function(t){var n=t.props;return wt("p-button-icon p-c",vi({},"p-button-icon-".concat(n.iconPos),n.label))},loadingIcon:function(t){var n=t.props,r=t.className;return wt(r,{"p-button-loading-icon":n.loading})},label:"p-button-label p-c",root:function(t){var n=t.props,r=t.size,o=t.disabled;return wt("p-button p-component",vi(vi(vi(vi({"p-button-icon-only":(n.icon||n.loading)&&!n.label&&!n.children,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-disabled":o,"p-button-loading":n.loading,"p-button-outlined":n.outlined,"p-button-raised":n.raised,"p-button-link":n.link,"p-button-text":n.text,"p-button-rounded":n.rounded,"p-button-loading-label-only":n.loading&&!n.icon&&n.label},"p-button-loading-".concat(n.iconPos),n.loading&&n.label),"p-button-".concat(r),r),"p-button-".concat(n.severity),n.severity),"p-button-plain",n.plain))}},mh=rt.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,plain:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:nj}});function PT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function mx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?PT(Object(n),!0).forEach(function(r){vi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var qs=ot.memo(ot.forwardRef(function(e,t){var n=bi(),r=ot.useContext(Bn),o=mh.getProps(e,r),i=o.disabled||o.loading,a=mx(mx({props:o},o.__parentMetadata),{},{context:{disabled:i}}),s=mh.setMetaData(a),c=s.ptm,p=s.cx,f=s.isUnstyled;fl(mh.css.styles,f,{name:"button",styled:!0});var m=ot.useRef(t);if(ot.useEffect(function(){ye.combinedRefs(m,t)},[m,t]),o.visible===!1)return null;var h=function(){var U=wt("p-button-icon p-c",vi({},"p-button-icon-".concat(o.iconPos),o.label)),A=n({className:p("icon")},c("icon"));U=wt(U,{"p-button-loading-icon":o.loading});var te=n({className:p("loadingIcon",{className:U})},c("loadingIcon")),Z=o.loading?o.loadingIcon||ot.createElement(sx,ip({},te,{spin:!0})):o.icon;return iT.getJSXIcon(Z,mx({},A),{props:o})},g=function(){var U=n({className:p("label")},c("label"));return o.label?ot.createElement("span",U,o.label):!o.children&&!o.label&&ot.createElement("span",ip({},U,{dangerouslySetInnerHTML:{__html:"&nbsp;"}}))},v=function(){if(o.badge){var U=n({className:wt(o.badgeClassName),value:o.badge,unstyled:o.unstyled,__parentMetadata:{parent:a}},c("badge"));return ot.createElement(IT,U,o.badge)}return null},w=!i||o.tooltipOptions&&o.tooltipOptions.showOnDisabled,_=ye.isNotEmpty(o.tooltip)&&w,y={large:"lg",small:"sm"},x=y[o.size],S=h(),T=g(),I=v(),R=o.label?o.label+(o.badge?" "+o.badge:""):o["aria-label"],D=n({ref:m,"aria-label":R,"data-pc-autofocus":o.autoFocus,className:wt(o.className,p("root",{size:x,disabled:i})),disabled:i},mh.getOtherProps(o),c("root"));return ot.createElement(ot.Fragment,null,ot.createElement("button",D,S,T,o.children,I,ot.createElement(cx,null)),_&&ot.createElement(op,ip({target:m,content:o.tooltip,pt:c("tooltip")},o.tooltipOptions)))}));qs.displayName="Button";var gn=Q(Re());function hx(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rj(e){if(Array.isArray(e))return hx(e)}function oj(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ij(e,t){if(e){if(typeof e=="string")return hx(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hx(e,t)}}function aj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lj(e){return rj(e)||oj(e)||ij(e)||aj()}var ml={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(t){return ml.DEFAULT_MASKS[t]?ml.DEFAULT_MASKS[t]:t},onBeforeInput:function(t,n,r){r||!Ce.isAndroid()||this.validateKey(t,t.data,n)},onKeyPress:function(t,n,r){r||Ce.isAndroid()||t.ctrlKey||t.altKey||t.metaKey||this.validateKey(t,t.key,n)},onPaste:function(t,n,r){if(!r){var o=this.getRegex(n),i=t.clipboardData.getData("text");lj(i).forEach(function(a){if(!o.test(a))return t.preventDefault(),!1})}},validateKey:function(t,n,r){if(n!=null){var o=n.length<=2;if(o){var i=this.getRegex(r);i.test(n)||t.preventDefault()}}},validate:function(t,n){var r=t.target.value,o=!0,i=this.getRegex(n);return r&&!i.test(r)&&(o=!1),o}};function gh(){return gh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gh.apply(this,arguments)}function lp(e){"@babel/helpers - typeof";return lp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lp(e)}function sj(e,t){if(lp(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(lp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uj(e){var t=sj(e,"string");return lp(t)==="symbol"?t:String(t)}function cj(e,t,n){return t=uj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pj={root:function(t){var n=t.props,r=t.isFilled,o=t.context;return wt("p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":r,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":o&&o.inputStyle==="filled"})}},hh=rt.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1},css:{classes:pj}});function AT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function LT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?AT(Object(n),!0).forEach(function(r){cj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var gx=gn.memo(gn.forwardRef(function(e,t){var n=bi(),r=gn.useContext(Bn),o=hh.getProps(e,r),i=hh.setMetaData(LT(LT({props:o},o.__parentMetadata),{},{context:{disabled:o.disabled}})),a=i.ptm,s=i.cx,c=i.isUnstyled;fl(hh.css.styles,c,{name:"inputtext",styled:!0});var p=gn.useRef(t),f=function(x){o.onKeyDown&&o.onKeyDown(x),o.keyfilter&&ml.onKeyPress(x,o.keyfilter,o.validateOnly)},m=function(x){o.onBeforeInput&&o.onBeforeInput(x),o.keyfilter&&ml.onBeforeInput(x,o.keyfilter,o.validateOnly)},h=function(x){var S=x.target,T=!0;o.keyfilter&&o.validateOnly&&(T=ml.validate(x,o.keyfilter)),o.onInput&&o.onInput(x,T),ye.isNotEmpty(S.value)?Ce.addClass(S,"p-filled"):Ce.removeClass(S,"p-filled")},g=function(x){o.onPaste&&o.onPaste(x),o.keyfilter&&ml.onPaste(x,o.keyfilter,o.validateOnly)};gn.useEffect(function(){ye.combinedRefs(p,t)},[p,t]);var v=gn.useMemo(function(){return ye.isNotEmpty(o.value)||ye.isNotEmpty(o.defaultValue)},[o.value,o.defaultValue]),w=ye.isNotEmpty(o.tooltip),_=n({className:wt(o.className,s("root",{context:r,isFilled:v})),onBeforeInput:m,onInput:h,onKeyDown:f,onPaste:g},hh.getOtherProps(o),a("root"));return gn.createElement(gn.Fragment,null,gn.createElement("input",gh({ref:p},_)),w&&gn.createElement(op,gh({target:p,content:o.tooltip,pt:a("tooltip")},o.tooltipOptions)))}));gx.displayName="InputText";var bt=Q(Re(),1);var fj=e=>e.disabled||Array.isArray(e.accessibilityStates)&&e.accessibilityStates.indexOf("disabled")>-1,MT=fj;var dj={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},mj=e=>{var t=e.accessibilityRole,n=e.role,r=n||t;if(r){var o=dj[r];if(o!==null)return o||r}},bh=mj;var hj={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},gj={},bj=function(t){t===void 0&&(t=gj);var n=t.role||t.accessibilityRole;if(n==="label")return"label";var r=bh(t);if(r){if(r==="heading"){var o=t.accessibilityLevel||t["aria-level"];return o!=null?"h"+o:"h1"}return hj[r]}},DT=bj;var vj={isDisabled:MT,propsToAccessibilityComponent:DT,propsToAriaRole:bh},vh=vj;function hl(e){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hl(e)}function NT(e,t){if(hl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(hl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function FT(e){var t=NT(e,"string");return hl(t)=="symbol"?t:t+""}function zT(e,t,n){return(t=FT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?BT(Object(n),!0).forEach(function(r){zT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):BT(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}var yh={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},yj=["ms","Moz","O","Webkit"],xj=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1);Object.keys(yh).forEach(e=>{yj.forEach(t=>{yh[xj(t,e)]=yh[e]})});var UT=yh;var wj=e=>e==="currentcolor"||e==="currentColor"||e==="inherit"||e.indexOf("var(")===0,jT=wj;var KT=Q(VT()),Ej=e=>{if(e==null)return e;var t=(0,KT.default)(e);if(t!=null)return t=(t<<24|t>>>8)>>>0,t},$T=Ej;var Rj=function(t,n){if(n===void 0&&(n=1),t!=null){if(typeof t=="string"&&jT(t))return t;var r=$T(t);if(r!=null){var o=r>>16&255,i=r>>8&255,a=r&255,s=(r>>24&255)/255,c=(s*n).toFixed(2);return"rgba("+o+","+i+","+a+","+c+")"}}},kh=Rj;var Tj={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function fr(e,t){var n=e;return(t==null||!UT[t])&&typeof e=="number"?n=e+"px":t!=null&&Tj[t]&&(n=kh(e)),n}var Oj=!!(typeof window<"u"&&window.document&&window.document.createElement),Nt=Oj;var Pj={},Ij=!Nt||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),Aj="monospace,monospace",GT='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',Lj={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},Mj=(e,t)=>{if(!e)return Pj;var n={},r=function(){var s=e[o];if(s==null)return"continue";if(o==="backgroundClip")s==="text"&&(n.backgroundClip=s,n.WebkitBackgroundClip=s);else if(o==="flex")s===-1?(n.flexGrow=0,n.flexShrink=1,n.flexBasis="auto"):n.flex=s;else if(o==="font")n[o]=s.replace("System",GT);else if(o==="fontFamily")if(s.indexOf("System")>-1){var c=s.split(/,\s*/);c[c.indexOf("System")]=GT,n[o]=c.join(",")}else s==="monospace"?n[o]=Aj:n[o]=s;else if(o==="textDecorationLine")Ij?n.textDecorationLine=s:n.textDecoration=s;else if(o==="writingDirection")n.direction=s;else{var p=fr(e[o],o),f=Lj[o];t&&o==="inset"?(e.insetInline==null&&(n.left=p,n.right=p),e.insetBlock==null&&(n.top=p,n.bottom=p)):t&&o==="margin"?(e.marginInline==null&&(n.marginLeft=p,n.marginRight=p),e.marginBlock==null&&(n.marginTop=p,n.marginBottom=p)):t&&o==="padding"?(e.paddingInline==null&&(n.paddingLeft=p,n.paddingRight=p),e.paddingBlock==null&&(n.paddingTop=p,n.paddingBottom=p)):f?f.forEach((m,h)=>{e[m]==null&&(n[m]=p)}):n[o]=p}};for(var o in e)var i=r();return n},xx=Mj;function Dj(e,t){for(var n=e.length,r=t^n,o=0,i;n>=4;)i=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16),i^=i>>>24,i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^i,n-=4,++o;switch(n){case 3:r^=(e.charCodeAt(o+2)&255)<<16;case 2:r^=(e.charCodeAt(o+1)&255)<<8;case 1:r^=e.charCodeAt(o)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var Nj=e=>Dj(e,1).toString(36),QT=Nj;var Fj=/[A-Z]/g,zj=/^ms-/,wx={};function Bj(e){return"-"+e.toLowerCase()}function Uj(e){if(e in wx)return wx[e];var t=e.replace(Fj,Bj);return wx[e]=zj.test(t)?"-"+t:t}var YT=Uj;var HO=Q(rO());var AO=Q(oO()),LO=Q(kO()),MO=Q(SO()),DO=Q(_O()),NO=Q(CO()),FO=Q(RO()),zO=Q(TO()),BO=Q(OO()),UO=Q(IO()),lt=["Webkit"],ZW=["Moz"],JW=["Webkit","Moz"],Ft=["Webkit","ms"],eq=["Webkit","Moz","ms"],jO={plugins:[AO.default,LO.default,MO.default,DO.default,NO.default,FO.default,zO.default,BO.default,UO.default],prefixMap:{appearance:eq,userSelect:JW,textEmphasisPosition:Ft,textEmphasis:Ft,textEmphasisStyle:Ft,textEmphasisColor:Ft,boxDecorationBreak:Ft,clipPath:lt,maskImage:Ft,maskMode:Ft,maskRepeat:Ft,maskPosition:Ft,maskClip:Ft,maskOrigin:Ft,maskSize:Ft,maskComposite:Ft,mask:Ft,maskBorderSource:Ft,maskBorderMode:Ft,maskBorderSlice:Ft,maskBorderWidth:Ft,maskBorderOutset:Ft,maskBorderRepeat:Ft,maskBorder:Ft,maskType:Ft,textDecorationStyle:lt,textDecorationSkip:lt,textDecorationLine:lt,textDecorationColor:lt,filter:lt,breakAfter:lt,breakBefore:lt,breakInside:lt,columnCount:lt,columnFill:lt,columnGap:lt,columnRule:lt,columnRuleColor:lt,columnRuleStyle:lt,columnRuleWidth:lt,columns:lt,columnSpan:lt,columnWidth:lt,backdropFilter:lt,hyphens:lt,flowInto:lt,flowFrom:lt,regionFragment:lt,textOrientation:lt,tabSize:ZW,fontKerning:lt,textSizeAdjust:lt}};var tq=(0,HO.default)(jO),WO=tq;var nq=["animationKeyframes"],qO=new Map,rq={},oq=1,iq=3,aq={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},iw="borderTopLeftRadius",aw="borderTopRightRadius",lw="borderBottomLeftRadius",sw="borderBottomRightRadius",uw="borderLeftColor",cw="borderLeftStyle",pw="borderLeftWidth",fw="borderRightColor",dw="borderRightStyle",mw="borderRightWidth",hw="right",gw="marginLeft",bw="marginRight",vw="paddingLeft",yw="paddingRight",xw="left",Th={[iw]:aw,[aw]:iw,[lw]:sw,[sw]:lw,[uw]:fw,[cw]:dw,[pw]:mw,[fw]:uw,[dw]:cw,[mw]:pw,[xw]:hw,[gw]:bw,[bw]:gw,[vw]:yw,[yw]:vw,[hw]:xw},up={borderStartStartRadius:iw,borderStartEndRadius:aw,borderEndStartRadius:lw,borderEndEndRadius:sw,borderInlineStartColor:uw,borderInlineStartStyle:cw,borderInlineStartWidth:pw,borderInlineEndColor:fw,borderInlineEndStyle:dw,borderInlineEndWidth:mw,insetInlineEnd:hw,insetInlineStart:xw,marginInlineStart:gw,marginInlineEnd:bw,paddingInlineStart:vw,paddingInlineEnd:yw},VO=["clear","float","textAlign"];function KO(e){var t={$$css:!0},n=[];function r(o,i,a){var s=lq(a,i),c=i+s,p=qO.get(c),f;if(p!=null)f=p[0],n.push(p[1]);else{var m=o!==i?c:s;f=ww("r",o,m);var h=aq[o]||iq,g=sq(f,i,a),v=[g,h];n.push(v),qO.set(c,[f,v])}return f}return Object.keys(e).sort().forEach(o=>{var i=e[o];if(i!=null){var a;if(VO.indexOf(o)>-1){var s=r(o,o,"left"),c=r(o,o,"right");i==="start"?a=[s,c]:i==="end"&&(a=[c,s])}var p=up[o];if(p!=null){var f=r(o,p,i),m=r(o,Th[p],i);a=[f,m]}if(o==="transitionProperty"){for(var h=Array.isArray(i)?i:[i],g=[],v=0;v<h.length;v++){var w=h[v];typeof w=="string"&&up[w]!=null&&g.push(v)}if(g.length>0){var _=[...h],y=[...h];g.forEach(x=>{var S=_[x];if(typeof S=="string"){var T=up[S],I=Th[T];_[x]=T,y[x]=I;var R=r(o,o,_),D=r(o,o,y);a=[R,D]}})}}a==null?a=r(o,o,i):t.$$css$localize=!0,t[o]=a}}),[t,n]}function $O(e,t){var n={$$css:!0},r=[],o=e.animationKeyframes,i=bn(e,nq),a=ww("css",t,JSON.stringify(e)),s="."+a,c;if(o!=null){var p=QO(o),f=p[0],m=p[1];c=f.join(","),r.push(...m)}var h=xi(Te(Te({},i),{},{animationName:c}));return r.push(""+s+h),n[a]=a,[n,[[r,oq]]]}function GO(e,t){var n=e||rq,r={},o={},i=function(){var p=n[a],f=a,m=p;if(!Object.prototype.hasOwnProperty.call(n,a)||p==null)return"continue";VO.indexOf(a)>-1&&(p==="start"?m=t?"right":"left":p==="end"&&(m=t?"left":"right"));var h=up[a];if(h!=null&&(f=t?Th[h]:h),a==="transitionProperty"){var g=Array.isArray(p)?p:[p];g.forEach((v,w)=>{if(typeof v=="string"){var _=up[v];_!=null&&(g[w]=t?Th[_]:_,m=g.join(" "))}})}r[f]||(o[f]=m),f===a&&(r[f]=!0)};for(var a in n)var s=i();return xx(o,!0)}function lq(e,t){var n=fr(e,t);return typeof n!="string"?JSON.stringify(n||""):n}function sq(e,t,n){var r=[],o="."+e;switch(t){case"animationKeyframes":{var i=QO(n),a=i[0],s=i[1],c=xi({animationName:a.join(",")});r.push(""+o+c,...s);break}case"placeholderTextColor":{var p=xi({color:n,opacity:1});r.push(o+"::-webkit-input-placeholder"+p,o+"::-moz-placeholder"+p,o+":-ms-input-placeholder"+p,o+"::placeholder"+p);break}case"pointerEvents":{var f=n;if(n==="auto"||n==="box-only"){if(f="auto!important",n==="box-only"){var m=xi({pointerEvents:"none"});r.push(o+">*"+m)}}else if((n==="none"||n==="box-none")&&(f="none!important",n==="box-none")){var h=xi({pointerEvents:"auto"});r.push(o+">*"+h)}var g=xi({pointerEvents:f});r.push(""+o+g);break}case"scrollbarWidth":{n==="none"&&r.push(o+"::-webkit-scrollbar{display:none}");var v=xi({scrollbarWidth:n});r.push(""+o+v);break}default:{var w=xi({[t]:n});r.push(""+o+w);break}}return r}function xi(e){var t=WO(xx(e)),n=Object.keys(t).map(r=>{var o=t[r],i=YT(r);return Array.isArray(o)?o.map(a=>i+":"+a).join(";"):i+":"+o}).sort().join(";");return"{"+n+";}"}function ww(e,t,n){var r=QT(t+n);return e+"-"+r}function uq(e){var t=["-webkit-",""],n=ww("r","animation",JSON.stringify(e)),r="{"+Object.keys(e).map(i=>{var a=e[i],s=xi(a);return""+i+s}).join("")+"}",o=t.map(i=>"@"+i+"keyframes "+n+r);return[n,o]}function QO(e){if(typeof e=="number")throw new Error("Invalid CSS keyframes type: "+typeof e);var t=[],n=[],r=Array.isArray(e)?e:[e];return r.forEach(o=>{if(typeof o=="string")t.push(o);else{var i=uq(o),a=i[0],s=i[1];t.push(a),n.push(...s)}}),[t,n]}function cp(e,t,n){if(Nt){var r=t??document,o=r.getElementById(e);if(o==null)if(o=document.createElement("style"),o.setAttribute("id",e),typeof n=="string"&&o.appendChild(document.createTextNode(n)),r instanceof ShadowRoot)r.insertBefore(o,r.firstChild);else{var i=r.head;i&&i.insertBefore(o,i.firstChild)}return o.sheet}else return null}var cq=Array.prototype.slice;function pp(e){var t={},n={};if(e!=null){var r;cq.call(e.cssRules).forEach((a,s)=>{var c=a.cssText;if(c.indexOf("stylesheet-group")>-1)r=dq(a),t[r]={start:s,rules:[c]};else{var p=XO(c);p!=null&&(n[p]=!0,t[r].rules.push(c))}})}function o(a,s,c){var p=YO(t),f=p.indexOf(s),m=f+1,h=p[m],g=h!=null&&t[h].start!=null?t[h].start:a.cssRules.length,v=hq(a,c,g);if(v){t[s].start==null&&(t[s].start=g);for(var w=m;w<p.length;w+=1){var _=p[w],y=t[_].start||0;t[_].start=y+1}}return v}var i={getTextContent(){return YO(t).map(a=>{var s=t[a].rules,c=s.shift();return s.sort(),s.unshift(c),s.join(`
`)}).join(`
`)},insert(a,s){var c=Number(s);if(t[c]==null){var p=pq(c);t[c]={start:null,rules:[p]},e!=null&&o(e,c,p)}var f=XO(a);if(f!=null&&n[f]==null&&(n[f]=!0,t[c].rules.push(a),e!=null)){var m=o(e,c,a);m||t[c].rules.pop()}}};return i}function pq(e){return'[stylesheet-group="'+e+'"]{}'}var fq=/["']/g;function dq(e){return Number(e.selectorText.split(fq)[1])}function YO(e){return Object.keys(e).map(Number).sort((t,n)=>t>n?1:-1)}var mq=/\s*([,])\s*/g;function XO(e){var t=e.split("{")[0].trim();return t!==""?t.replace(mq,"$1"):null}function hq(e,t,n){try{return e.insertRule(t,n),!0}catch{return!1}}var gq="react-native-stylesheet",kw=new WeakMap,bo=[],ZO=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function JO(e,t){t===void 0&&(t=gq);var n;if(Nt){var r=e!=null?e.getRootNode():document;if(bo.length===0)n=pp(cp(t)),ZO.forEach(s=>{n.insert(s,0)}),kw.set(r,bo.length),bo.push(n);else{var o=kw.get(r);if(o==null){var i=bo[0],a=i!=null?i.getTextContent():"";n=pp(cp(t,r,a)),kw.set(r,bo.length),bo.push(n)}else n=bo[o]}}else bo.length===0?(n=pp(cp(t)),ZO.forEach(s=>{n.insert(s,0)}),bo.push(n)):n=bo[0];return{getTextContent(){return n.getTextContent()},id:t,insert(s,c){bo.forEach(p=>{p.insert(s,c)})}}}var uP=Q(oP());var vq={},iP={height:0,width:0},yq=e=>{var t=e.shadowColor,n=e.shadowOffset,r=e.shadowOpacity,o=e.shadowRadius,i=n||iP,a=i.height,s=i.width,c=fr(s),p=fr(a),f=fr(o||0),m=kh(t||"black",r);if(m!=null&&c!=null&&p!=null&&f!=null)return c+" "+p+" "+f+" "+m},xq=e=>{var t=e.textShadowColor,n=e.textShadowOffset,r=e.textShadowRadius,o=n||iP,i=o.height,a=o.width,s=r||0,c=fr(a),p=fr(i),f=fr(s),m=fr(t,"textShadowColor");if(m&&(i!==0||a!==0||s!==0)&&c!=null&&p!=null&&f!=null)return c+" "+p+" "+f+" "+m},wq=e=>{var t=Object.keys(e)[0],n=e[t];if(t==="matrix"||t==="matrix3d")return t+"("+n.join(",")+")";var r=fr(n,t);return t+"("+r+")"},kq=e=>e.map(wq).join(" "),Sq={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},_q={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},_w=function(t,n){n===void 0&&(n={});var r=t||vq,o={};if(n.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var i=yq(r);if(i!=null&&o.boxShadow==null){var a=r.boxShadow,s=a?a+", "+i:i;o.boxShadow=s}}if(n.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var c=xq(r);if(c!=null&&o.textShadow==null){var p=r.textShadow,f=p?p+", "+c:c;o.textShadow=f}}for(var m in r)if(!(_q[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var h=r[m],g=Sq[m]||m,v=h;!Object.prototype.hasOwnProperty.call(r,m)||g!==m&&r[g]!=null||(g==="aspectRatio"&&typeof v=="number"?o[g]=v.toString():g==="fontVariant"?(Array.isArray(v)&&v.length>0&&(v=v.join(" ")),o[g]=v):g==="textAlignVertical"?r.verticalAlign==null&&(o.verticalAlign=v==="center"?"middle":v):g==="transform"?(Array.isArray(v)&&(v=kq(v)),o.transform=v):o[g]=v)}return o};var cP=Q(sP());var Rq=["writingDirection"],pP=new WeakMap,Ih=JO(),fP={shadow:!0,textShadow:!0};function Tq(e,t){t===void 0&&(t={});var n=t,r=n.writingDirection,o=bn(n,Rq),i=r==="rtl";return cP.styleq.factory({transform(a){var s=pP.get(a);return s!=null?(0,uP.localizeStyle)(s,i):_w(a,Te(Te({},fP),o))}})(e)}function dP(e){e.forEach(t=>{var n=t[0],r=t[1];Ih!=null&&n.forEach(o=>{Ih.insert(o,r)})})}function Oq(e){var t=KO(_w(e,fP)),n=t[0],r=t[1];return dP(r),n}function Pq(e,t){var n=$O(e,t),r=n[0],o=n[1];return dP(o),r}var mP={position:"absolute",left:0,right:0,top:0,bottom:0},Iq=hP({x:Te({},mP)}).x;function hP(e){return Object.keys(e).forEach(t=>{var n=e[t];if(n!=null&&n.$$css!==!0){var r;t.indexOf("$raw")>-1?r=Pq(n,t.split("$raw")[0]):r=Oq(n),pP.set(n,r)}}),e}function Aq(e,t){if(0){var n;if(n>2)var r}return[e,t]}function Lq(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.flat(1/0),o={},i=0;i<r.length;i++){var a=r[i];a!=null&&typeof a=="object"&&Object.assign(o,a)}return o}function Mq(){return{id:Ih.id,textContent:Ih.getTextContent()}}function wi(e,t){t===void 0&&(t={});var n=t.writingDirection==="rtl",r=Tq(e,t);return Array.isArray(r)&&r[1]!=null&&(r[1]=GO(r[1],n)),r}wi.absoluteFill=Iq;wi.absoluteFillObject=mP;wi.create=hP;wi.compose=Aq;wi.flatten=Lq;wi.getSheet=Mq;wi.hairlineWidth=1;Nt&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=wi.flatten);var Dq=wi,nn=Dq;var Nq=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],Fq={},zq=Object.prototype.hasOwnProperty,Bq=Array.isArray,Uq=/[A-Z]/g;function jq(e){return"-"+e.toLowerCase()}function Hq(e){return e.replace(Uq,jq)}function $s(e){return Bq(e)?e.join(" "):e}var Wq=nn.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),qq=(e,t,n)=>{t||(t=Fq);var r=t,o=r["aria-activedescendant"],i=r.accessibilityActiveDescendant,a=r["aria-atomic"],s=r.accessibilityAtomic,c=r["aria-autocomplete"],p=r.accessibilityAutoComplete,f=r["aria-busy"],m=r.accessibilityBusy,h=r["aria-checked"],g=r.accessibilityChecked,v=r["aria-colcount"],w=r.accessibilityColumnCount,_=r["aria-colindex"],y=r.accessibilityColumnIndex,x=r["aria-colspan"],S=r.accessibilityColumnSpan,T=r["aria-controls"],I=r.accessibilityControls,R=r["aria-current"],D=r.accessibilityCurrent,z=r["aria-describedby"],U=r.accessibilityDescribedBy,A=r["aria-details"],te=r.accessibilityDetails,Z=r["aria-disabled"],G=r.accessibilityDisabled,ie=r["aria-errormessage"],ee=r.accessibilityErrorMessage,fe=r["aria-expanded"],Me=r.accessibilityExpanded,ce=r["aria-flowto"],Le=r.accessibilityFlowTo,P=r["aria-haspopup"],$e=r.accessibilityHasPopup,ln=r["aria-hidden"],L=r.accessibilityHidden,tt=r["aria-invalid"],xn=r.accessibilityInvalid,wn=r["aria-keyshortcuts"],$t=r.accessibilityKeyShortcuts,Ie=r["aria-label"],sn=r.accessibilityLabel,Tt=r["aria-labelledby"],un=r.accessibilityLabelledBy,st=r["aria-level"],kn=r.accessibilityLevel,eo=r["aria-live"],Ot=r.accessibilityLiveRegion,Pt=r["aria-modal"],Ir=r.accessibilityModal,er=r["aria-multiline"],Ut=r.accessibilityMultiline,On=r["aria-multiselectable"],hr=r.accessibilityMultiSelectable,_o=r["aria-orientation"],Sn=r.accessibilityOrientation,tr=r["aria-owns"],Wn=r.accessibilityOwns,H=r["aria-placeholder"],J=r.accessibilityPlaceholder,de=r["aria-posinset"],_e=r.accessibilityPosInSet,ze=r["aria-pressed"],It=r.accessibilityPressed,Gt=r["aria-readonly"],pe=r.accessibilityReadOnly,q=r["aria-required"],re=r.accessibilityRequired,be=r.role,he=r.accessibilityRole,xe=r["aria-roledescription"],At=r.accessibilityRoleDescription,Pn=r["aria-rowcount"],Aa=r.accessibilityRowCount,$o=r["aria-rowindex"],Go=r.accessibilityRowIndex,Pi=r["aria-rowspan"],La=r.accessibilityRowSpan,zl=r["aria-selected"],Ii=r.accessibilitySelected,Ma=r["aria-setsize"],Co=r.accessibilitySetSize,Bl=r["aria-sort"],Ai=r.accessibilitySort,Da=r["aria-valuemax"],ff=r.accessibilityValueMax,df=r["aria-valuemin"],mf=r.accessibilityValueMin,hf=r["aria-valuenow"],gf=r.accessibilityValueNow,bf=r["aria-valuetext"],vf=r.accessibilityValueText,Na=r.dataSet,Fa=r.focusable,yf=r.id,xf=r.nativeID,xu=r.pointerEvents,sb=r.style,za=r.tabIndex,Ba=r.testID,se=bn(r,Nq);G!=null&&void 0;var Ul=Z||G,to=vh.propsToAriaRole(t);i!=null&&void 0;var wf=o??i;wf!=null&&(se["aria-activedescendant"]=wf),s!=null&&void 0;var kf=a!=null?o:s;kf!=null&&(se["aria-atomic"]=kf),p!=null&&void 0;var wu=c??p;wu!=null&&(se["aria-autocomplete"]=wu),m!=null&&void 0;var ku=f??m;ku!=null&&(se["aria-busy"]=ku),g!=null&&void 0;var Su=h??g;Su!=null&&(se["aria-checked"]=Su),w!=null&&void 0;var Sf=v??w;Sf!=null&&(se["aria-colcount"]=Sf),y!=null&&void 0;var _f=_??y;_f!=null&&(se["aria-colindex"]=_f),S!=null&&void 0;var Cf=x??S;Cf!=null&&(se["aria-colspan"]=Cf),I!=null&&void 0;var Ef=T??I;Ef!=null&&(se["aria-controls"]=$s(Ef)),D!=null&&void 0;var _u=R??D;_u!=null&&(se["aria-current"]=_u),U!=null&&void 0;var Cu=z??U;Cu!=null&&(se["aria-describedby"]=$s(Cu)),te!=null&&void 0;var Eu=A??te;Eu!=null&&(se["aria-details"]=Eu),Ul===!0&&(se["aria-disabled"]=!0,(e==="button"||e==="form"||e==="input"||e==="select"||e==="textarea")&&(se.disabled=!0)),ee!=null&&void 0;var jl=ie??ee;jl!=null&&(se["aria-errormessage"]=jl),Me!=null&&void 0;var Rf=fe??Me;Rf!=null&&(se["aria-expanded"]=Rf),Le!=null&&void 0;var Ru=ce??Le;Ru!=null&&(se["aria-flowto"]=$s(Ru)),$e!=null&&void 0;var Ua=P??$e;Ua!=null&&(se["aria-haspopup"]=Ua),L!=null&&void 0;var Tu=ln??L;Tu===!0&&(se["aria-hidden"]=Tu),xn!=null&&void 0;var Tf=tt??xn;Tf!=null&&(se["aria-invalid"]=Tf),$t!=null&&void 0;var Ou=wn??$t;Ou!=null&&(se["aria-keyshortcuts"]=$s(Ou)),sn!=null&&void 0;var Pu=Ie??sn;Pu!=null&&(se["aria-label"]=Pu),un!=null&&void 0;var Hl=Tt??un;Hl!=null&&(se["aria-labelledby"]=$s(Hl)),kn!=null&&void 0;var Of=st??kn;Of!=null&&(se["aria-level"]=Of),Ot!=null&&void 0;var Wl=eo??Ot;Wl!=null&&(se["aria-live"]=Wl==="none"?"off":Wl),Ir!=null&&void 0;var ql=Pt??Ir;ql!=null&&(se["aria-modal"]=ql),Ut!=null&&void 0;var Vl=er??Ut;Vl!=null&&(se["aria-multiline"]=Vl),hr!=null&&void 0;var Qo=On??hr;Qo!=null&&(se["aria-multiselectable"]=Qo),Sn!=null&&void 0;var Iu=_o??Sn;Iu!=null&&(se["aria-orientation"]=Iu),Wn!=null&&void 0;var Au=tr??Wn;Au!=null&&(se["aria-owns"]=$s(Au)),J!=null&&void 0;var Pf=H??J;Pf!=null&&(se["aria-placeholder"]=Pf),_e!=null&&void 0;var Lu=de??_e;Lu!=null&&(se["aria-posinset"]=Lu),It!=null&&void 0;var Mu=ze??It;Mu!=null&&(se["aria-pressed"]=Mu),pe!=null&&void 0;var Du=Gt??pe;Du!=null&&(se["aria-readonly"]=Du,(e==="input"||e==="select"||e==="textarea")&&(se.readOnly=!0)),re!=null&&void 0;var Nu=q??re;Nu!=null&&(se["aria-required"]=Nu,(e==="input"||e==="select"||e==="textarea")&&(se.required=re)),he!=null&&void 0,to!=null&&(se.role=to==="none"?"presentation":to),At!=null&&void 0;var If=xe??At;If!=null&&(se["aria-roledescription"]=If),Aa!=null&&void 0;var Af=Pn??Aa;Af!=null&&(se["aria-rowcount"]=Af),Go!=null&&void 0;var Lf=$o??Go;Lf!=null&&(se["aria-rowindex"]=Lf),La!=null&&void 0;var Fu=Pi??La;Fu!=null&&(se["aria-rowspan"]=Fu),Ii!=null&&void 0;var Mf=zl??Ii;Mf!=null&&(se["aria-selected"]=Mf),Co!=null&&void 0;var Df=Ma??Co;Df!=null&&(se["aria-setsize"]=Df),Ai!=null&&void 0;var Nf=Bl??Ai;Nf!=null&&(se["aria-sort"]=Nf),ff!=null&&void 0;var Ff=Da??ff;Ff!=null&&(se["aria-valuemax"]=Ff),mf!=null&&void 0;var Kl=df??mf;Kl!=null&&(se["aria-valuemin"]=Kl),gf!=null&&void 0;var zf=hf??gf;zf!=null&&(se["aria-valuenow"]=zf),vf!=null&&void 0;var Bf=bf??vf;if(Bf!=null&&(se["aria-valuetext"]=Bf),Na!=null){for(var zu in Na)if(zq.call(Na,zu)){var ub=Hq(zu),Uf=Na[zu];Uf!=null&&(se["data-"+ub]=Uf)}}za===0||za==="0"||za===-1||za==="-1"?se.tabIndex=za:(Fa!=null&&void 0,Fa===!1&&(se.tabIndex="-1"),e==="a"||e==="button"||e==="input"||e==="select"||e==="textarea"?(Fa===!1||G===!0)&&(se.tabIndex="-1"):to==="button"||to==="checkbox"||to==="link"||to==="radio"||to==="textbox"||to==="switch"?Fa!==!1&&(se.tabIndex="0"):Fa===!0&&(se.tabIndex="0")),xu!=null&&void 0;var nt=nn([sb,xu&&Wq[xu]],Te({writingDirection:"ltr"},n)),Ye=nt[0],jf=nt[1];Ye&&(se.className=Ye),jf&&(se.style=jf),xf!=null&&void 0;var Hf=yf??xf;return Hf!=null&&(se.id=Hf),Ba!=null&&(se["data-testid"]=Ba),se.type==null&&e==="button"&&(se.type="button"),se},gP=qq;var Ew=Q(Re());var Gs=Q(Re());var Vq=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),Kq=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),bP=new Map;function vP(e){var t=bP.get(e);if(t)return t;var n=!1;if(Intl.Locale){var r=new Intl.Locale(e).maximize().script;n=Vq.has(r)}else{var o=e.split("-")[0];n=Kq.has(o)}return bP.set(e,n),n}var $q={direction:"ltr",locale:"en-US"},yP=(0,Gs.createContext)($q);function Cw(e){return vP(e)?"rtl":"ltr"}function xP(e){var t=e.direction,n=e.locale,r=e.children,o=t||n;return o?Gs.default.createElement(yP.Provider,{children:r,value:{direction:n?Cw(n):t,locale:n}}):r}function wP(){return(0,Gs.useContext)(yP)}var Gq=(e,t,n)=>{var r;e&&e.constructor===String&&(r=vh.propsToAccessibilityComponent(t));var o=r||e,i=gP(o,t,n),a=Ew.default.createElement(o,i),s=i.dir?Ew.default.createElement(xP,{children:a,direction:i.dir,locale:i.lang}):a;return s},kP=Gq;var Qq=e=>{if(e!=null){var t=e.nodeType===1;if(t&&typeof e.getBoundingClientRect=="function")return e.getBoundingClientRect()}},fp=Qq;var Ah={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},Yq=["ms","Moz","O","Webkit"],Xq=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1);Object.keys(Ah).forEach(e=>{Yq.forEach(t=>{Ah[Xq(t,e)]=Ah[e]})});var Rw=Ah;function Zq(e,t,n){var r=t==null||typeof t=="boolean"||t==="";return r?"":!n&&typeof t=="number"&&t!==0&&!(Rw.hasOwnProperty(e)&&Rw[e])?t+"px":(""+t).trim()}var SP=Zq;function Jq(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=SP(r,t[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,i):n[r]=i}}var _P=Jq;var CP=e=>{var t=e.offsetHeight,n=e.offsetWidth,r=e.offsetLeft,o=e.offsetTop;for(e=e.offsetParent;e&&e.nodeType===1;)r+=e.offsetLeft+e.clientLeft-e.scrollLeft,o+=e.offsetTop+e.clientTop-e.scrollTop,e=e.offsetParent;return o-=window.scrollY,r-=window.scrollX,{width:n,height:t,top:o,left:r}},EP=(e,t,n)=>{var r=t||e&&e.parentNode;e&&r&&setTimeout(()=>{if(e.isConnected&&r.isConnected){var o=CP(r),i=CP(e),a=i.height,s=i.left,c=i.top,p=i.width,f=s-o.left,m=c-o.top;n(f,m,p,a,s,c)}},0)},eV={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},tV={blur(e){try{e.blur()}catch{}},focus(e){try{var t=e.nodeName;e.getAttribute("tabIndex")==null&&e.isContentEditable!==!0&&eV[t]==null&&e.setAttribute("tabIndex","-1"),e.focus()}catch{}},measure(e,t){EP(e,null,t)},measureInWindow(e,t){e&&setTimeout(()=>{var n=fp(e),r=n.height,o=n.left,i=n.top,a=n.width;t(o,i,a,r)},0)},measureLayout(e,t,n,r){EP(e,t,r)},updateView(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=t[n];switch(n){case"style":{_P(e,r);break}case"class":case"className":{e.setAttribute("class",r);break}case"text":case"value":e.value=r;break;default:e.setAttribute(n,r)}}},configureNextLayoutAnimation(e,t){t()},setLayoutAnimationEnabledExperimental(){}},vo=tV;var nV={OS:"web",select:e=>"web"in e?e.web:e.default,get isTesting(){return!1}},Lh=nV;function yn(){return yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yn.apply(null,arguments)}var gl=Q(Re());var RP={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},TP={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},OP={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},PP={onBlur:!0,onFocus:!0},IP={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},AP={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},LP={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},MP={style:!0};function Tw(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&t[r]===!0&&(n[r]=e[r]);return n}var Mh=Q(Re());var oV=Nt?Mh.useLayoutEffect:Mh.useEffect,Ow=oV;var Iw="__reactLayoutHandler",iV=!Nt,Pw=null;function aV(){return Nt&&typeof window.ResizeObserver<"u"&&Pw==null&&(Pw=new window.ResizeObserver(function(e){e.forEach(t=>{var n=t.target,r=n[Iw];typeof r=="function"&&vo.measure(n,(o,i,a,s,c,p)=>{var f={nativeEvent:{layout:{x:o,y:i,width:a,height:s,left:c,top:p}},timeStamp:Date.now()};Object.defineProperty(f.nativeEvent,"target",{enumerable:!0,get:()=>t.target}),r(f)})})})),Pw}function Aw(e,t){var n=aV();Ow(()=>{var r=e.current;r!=null&&(r[Iw]=t)},[e,t]),Ow(()=>{var r=e.current;return r!=null&&n!=null&&(typeof r[Iw]=="function"?n.observe(r):n.unobserve(r)),()=>{r!=null&&n!=null&&n.unobserve(r)}},[e,n])}var DP=Q(Re());var rie=Q(Re());function dp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){t.forEach(i=>{if(i!=null){if(typeof i=="function"){i(o);return}if(typeof i=="object"){i.current=o;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(i))}})}}function mp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return DP.useMemo(()=>dp(...t),[...t])}var FP=Q(Re()),NP=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function Lw(e){var t=FP.useRef(NP);return t.current===NP&&(t.current=e()),t.current}function Mw(e){var t=e.pointerEvents,n=e.style,r=Lw(()=>o=>{o!=null&&(o.measure=i=>vo.measure(o,i),o.measureLayout=(i,a,s)=>vo.measureLayout(o,i,s,a),o.measureInWindow=i=>vo.measureInWindow(o,i))});return r}var ki=Q(Re());var zP=()=>{},lV={},sV=[];function BP(e){return e>20?e%20:e}function Dh(e,t){var n,r=!1,o,i,a=e.changedTouches,s=e.type,c=e.metaKey===!0,p=e.shiftKey===!0,f=a&&a[0].force||0,m=BP(a&&a[0].identifier||0),h=a&&a[0].clientX||e.clientX,g=a&&a[0].clientY||e.clientY,v=a&&a[0].pageX||e.pageX,w=a&&a[0].pageY||e.pageY,_=typeof e.preventDefault=="function"?e.preventDefault.bind(e):zP,y=e.timeStamp;function x(D){return Array.prototype.slice.call(D).map(z=>({force:z.force,identifier:BP(z.identifier),get locationX(){return I(z.clientX)},get locationY(){return R(z.clientY)},pageX:z.pageX,pageY:z.pageY,target:z.target,timestamp:y}))}if(a!=null)o=x(a),i=x(e.touches);else{var S=[{force:f,identifier:m,get locationX(){return I(h)},get locationY(){return R(g)},pageX:v,pageY:w,target:e.target,timestamp:y}];o=S,i=s==="mouseup"||s==="dragstart"?sV:S}var T={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:e.defaultPrevented,dispatchConfig:lV,eventPhase:e.eventPhase,isDefaultPrevented(){return e.defaultPrevented},isPropagationStopped(){return r},isTrusted:e.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:c,shiftKey:p,changedTouches:o,force:f,identifier:m,get locationX(){return I(h)},get locationY(){return R(g)},pageX:v,pageY:w,target:e.target,timestamp:y,touches:i,type:s},persist:zP,preventDefault:_,stopPropagation(){r=!0},target:e.target,timeStamp:y,touchHistory:t.touchHistory};function I(D){if(n=n||fp(T.currentTarget),n)return D-n.left}function R(D){if(n=n||fp(T.currentTarget),n)return D-n.top}return T}var uV="mousedown",cV="mousemove",pV="mouseup",fV="dragstart",dV="touchstart",mV="touchmove",hV="touchend",gV="touchcancel",bV="scroll",vV="select",yV="selectionchange";function Nh(e){return e===dV||e===uV}function Fh(e){return e===mV||e===cV}function zh(e){return e===hV||e===pV||Dw(e)}function Dw(e){return e===gV||e===fV}function UP(e){return e===bV}function jP(e){return e===vV||e===yV}function Nw(){var e=window.getSelection(),t=e.toString(),n=e.anchorNode,r=e.focusNode,o=n&&n.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return t.length>=1&&t!==`
`&&o}var WP="__reactResponderId";function xV(e){if(e.type==="selectionchange"){var t=window.getSelection().anchorNode;return HP(t)}else{var n=e.composedPath!=null?e.composedPath():HP(e.target);return n}}function HP(e){for(var t=[];e!=null&&e!==document.body;)t.push(e),e=e.parentNode;return t}function wV(e){return e!=null?e[WP]:null}function qP(e,t){e!=null&&(e[WP]=t)}function VP(e){for(var t=[],n=[],r=xV(e),o=0;o<r.length;o++){var i=r[o],a=wV(i);a!=null&&(t.push(a),n.push(i))}return{idPath:t,nodePath:n}}function KP(e,t){var n=e.length,r=t.length;if(n===0||r===0||e[n-1]!==t[r-1])return null;var o=e[0],i=0,a=t[0],s=0;n-r>0&&(i=n-r,o=e[i],n=r),r-n>0&&(s=r-n,a=t[s],r=n);for(var c=n;c--;){if(o===a)return o;o=e[i++],a=t[s++]}return null}function $P(e,t){if(!t||t.length===0)return!1;for(var n=0;n<t.length;n++){var r=t[n].target;if(r!=null&&e.contains(r))return!0}return!1}function GP(e){return e.type==="selectionchange"?Nw():e.type==="select"}function QP(e){var t=e.altKey,n=e.button,r=e.buttons,o=e.ctrlKey,i=e.type,a=i==="touchstart"||i==="touchmove",s=i==="mousedown"&&(n===0||r===1),c=i==="mousemove"&&r===1,p=t===!1&&o===!1;return!!(a||s&&p||c&&p)}var YP=!1,Bh=20;function Qr(e){return e.timeStamp||e.timestamp}function kV(e){return{touchActive:!0,startPageX:e.pageX,startPageY:e.pageY,startTimeStamp:Qr(e),currentPageX:e.pageX,currentPageY:e.pageY,currentTimeStamp:Qr(e),previousPageX:e.pageX,previousPageY:e.pageY,previousTimeStamp:Qr(e)}}function SV(e,t){e.touchActive=!0,e.startPageX=t.pageX,e.startPageY=t.pageY,e.startTimeStamp=Qr(t),e.currentPageX=t.pageX,e.currentPageY=t.pageY,e.currentTimeStamp=Qr(t),e.previousPageX=t.pageX,e.previousPageY=t.pageY,e.previousTimeStamp=Qr(t)}function Fw(e){var t=e.identifier;return t==null&&console.error("Touch object is missing identifier."),YP&&t>Bh&&console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.",t,Bh),t}function _V(e,t){var n=Fw(e),r=t.touchBank[n];r?SV(r,e):t.touchBank[n]=kV(e),t.mostRecentTimeStamp=Qr(e)}function CV(e,t){var n=t.touchBank[Fw(e)];n?(n.touchActive=!0,n.previousPageX=n.currentPageX,n.previousPageY=n.currentPageY,n.previousTimeStamp=n.currentTimeStamp,n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Qr(e),t.mostRecentTimeStamp=Qr(e)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+XP(e)+`
`,"Touch Bank: "+ZP(t))}function EV(e,t){var n=t.touchBank[Fw(e)];n?(n.touchActive=!1,n.previousPageX=n.currentPageX,n.previousPageY=n.currentPageY,n.previousTimeStamp=n.currentTimeStamp,n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Qr(e),t.mostRecentTimeStamp=Qr(e)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+XP(e)+`
`,"Touch Bank: "+ZP(t))}function XP(e){return JSON.stringify({identifier:e.identifier,pageX:e.pageX,pageY:e.pageY,timestamp:Qr(e)})}function ZP(e){var t=e.touchBank,n=JSON.stringify(t.slice(0,Bh));return t.length>Bh&&(n+=" (original size: "+t.length+")"),n}var Uh=class{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(t,n){var r=this._touchHistory;if(Fh(t))n.changedTouches.forEach(c=>CV(c,r));else if(Nh(t))n.changedTouches.forEach(c=>_V(c,r)),r.numberActiveTouches=n.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=n.touches[0].identifier);else if(zh(t)&&(n.changedTouches.forEach(c=>EV(c,r)),r.numberActiveTouches=n.touches.length,r.numberActiveTouches===1)){for(var o=r.touchBank,i=0;i<o.length;i++){var a=o[i];if(a!=null&&a.touchActive){r.indexOfSingleActiveTouch=i;break}}if(YP){var s=o[r.indexOfSingleActiveTouch];s!=null&&s.touchActive||console.error("Cannot find single active touch.")}}}get touchHistory(){return this._touchHistory}};var RV={},JP=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],eI=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],TV=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],OV={touchstart:JP,mousedown:JP,touchmove:eI,mousemove:eI,scroll:TV},Bw={id:null,idPath:null,node:null},jh=new Map,ga=!1,zo=0,Bo={id:null,node:null,idPath:null},Uw=new Uh;function hp(e){Bo=e}function gp(e){var t=jh.get(e);return t??RV}function zw(e){var t=e.type,n=e.target;if(t==="touchstart"&&(ga=!0),(t==="touchmove"||zo>1)&&(ga=!1),!(t==="mousedown"&&ga||t==="mousemove"&&ga||t==="mousemove"&&zo<1)){if(ga&&t==="mouseup"){zo===0&&(ga=!1);return}var r=Nh(t)&&QP(e),o=Fh(t),i=zh(t),a=UP(t),s=jP(t),c=Dh(e,Uw);(r||o||i)&&(e.touches?zo=e.touches.length:r?zo=1:i&&(zo=0),Uw.recordTouchTrack(t,c.nativeEvent));var p=VP(e),f=!1,m;if(r||o||a&&zo>0){var h=Bo.idPath,g=p.idPath;if(h!=null&&g!=null){var v=KP(h,g);if(v!=null){var w=g.indexOf(v),_=w+(v===Bo.id?1:0);p={idPath:g.slice(_),nodePath:p.nodePath.slice(_)}}else p=null}p!=null&&(m=PV(p,e,c),m!=null&&(IV(c,m),f=!0))}if(Bo.id!=null&&Bo.node!=null){var y=Bo,x=y.id,S=y.node,T=gp(x),I=T.onResponderStart,R=T.onResponderMove,D=T.onResponderEnd,z=T.onResponderRelease,U=T.onResponderTerminate,A=T.onResponderTerminationRequest;if(c.bubbles=!1,c.cancelable=!1,c.currentTarget=S,r)I!=null&&(c.dispatchConfig.registrationName="onResponderStart",I(c));else if(o)R!=null&&(c.dispatchConfig.registrationName="onResponderMove",R(c));else{var te=Dw(t)||t==="contextmenu"||t==="blur"&&n===window||t==="blur"&&n.contains(S)&&e.relatedTarget!==S||a&&zo===0||a&&n.contains(S)&&n!==S||s&&GP(e),Z=i&&!te&&!$P(S,e.touches);if(i&&D!=null&&(c.dispatchConfig.registrationName="onResponderEnd",D(c)),Z&&(z!=null&&(c.dispatchConfig.registrationName="onResponderRelease",z(c)),hp(Bw)),te){var G=!0;(t==="contextmenu"||t==="scroll"||t==="selectionchange")&&(f?G=!1:A!=null&&(c.dispatchConfig.registrationName="onResponderTerminationRequest",A(c)===!1&&(G=!1))),G&&(U!=null&&(c.dispatchConfig.registrationName="onResponderTerminate",U(c)),hp(Bw),ga=!1,zo=0)}}}}}function PV(e,t,n){var r=OV[t.type];if(r!=null){for(var o=e.idPath,i=e.nodePath,a=r[0],s=r[1],c=r[2].bubbles,p=function(R,D,z){var U=gp(R),A=U[z];if(A!=null&&(n.currentTarget=D,A(n)===!0)){var te=o.slice(o.indexOf(R));return{id:R,node:D,idPath:te}}},f=o.length-1;f>=0;f--){var m=o[f],h=i[f],g=p(m,h,a);if(g!=null)return g;if(n.isPropagationStopped()===!0)return}if(c)for(var v=0;v<o.length;v++){var w=o[v],_=i[v],y=p(w,_,s);if(y!=null)return y;if(n.isPropagationStopped()===!0)return}else{var x=o[0],S=i[0],T=t.target;if(T===S)return p(x,S,s)}}}function IV(e,t){var n=Bo,r=n.id,o=n.node,i=t.id,a=t.node,s=gp(i),c=s.onResponderGrant,p=s.onResponderReject;if(e.bubbles=!1,e.cancelable=!1,e.currentTarget=a,r==null)c!=null&&(e.currentTarget=a,e.dispatchConfig.registrationName="onResponderGrant",c(e)),hp(t);else{var f=gp(r),m=f.onResponderTerminate,h=f.onResponderTerminationRequest,g=!0;h!=null&&(e.currentTarget=o,e.dispatchConfig.registrationName="onResponderTerminationRequest",h(e)===!1&&(g=!1)),g?(m!=null&&(e.currentTarget=o,e.dispatchConfig.registrationName="onResponderTerminate",m(e)),c!=null&&(e.currentTarget=a,e.dispatchConfig.registrationName="onResponderGrant",c(e)),hp(t)):p!=null&&(e.currentTarget=a,e.dispatchConfig.registrationName="onResponderReject",p(e))}}var AV=["blur","scroll"],LV=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function tI(){Nt&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",zw),LV.forEach(e=>{document.addEventListener(e,zw)}),AV.forEach(e=>{document.addEventListener(e,zw,!0)}),window.__reactResponderSystemActive=!0)}function nI(e,t,n){qP(t,e),jh.set(e,n)}function jw(e){Bo.id===e&&MV(),jh.has(e)&&jh.delete(e)}function MV(){var e=Bo,t=e.id,n=e.node;if(t!=null&&n!=null){var r=gp(t),o=r.onResponderTerminate;if(o!=null){var i=Dh({},Uw);i.currentTarget=n,o(i)}hp(Bw)}ga=!1,zo=0}function rI(){return Bo.node}var NV={},FV=0;function zV(e){var t=ki.useRef(null);return t.current==null&&(t.current=e()),t.current}function Hw(e,t){t===void 0&&(t=NV);var n=zV(()=>FV++),r=ki.useRef(!1);ki.useEffect(()=>(tI(),()=>{jw(n)}),[n]),ki.useEffect(()=>{var o=t,i=o.onMoveShouldSetResponder,a=o.onMoveShouldSetResponderCapture,s=o.onScrollShouldSetResponder,c=o.onScrollShouldSetResponderCapture,p=o.onSelectionChangeShouldSetResponder,f=o.onSelectionChangeShouldSetResponderCapture,m=o.onStartShouldSetResponder,h=o.onStartShouldSetResponderCapture,g=i!=null||a!=null||s!=null||c!=null||p!=null||f!=null||m!=null||h!=null,v=e.current;g?(nI(n,v,t),r.current=!0):r.current&&(jw(n),r.current=!1)},[t,e,n]),ki.useDebugValue({isResponder:e.current===rI()}),ki.useDebugValue(t)}var oI=Q(Re()),BV=(0,oI.createContext)(!1),iI=BV;var UV=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],jV=Object.assign({},RP,TP,OP,PP,IP,AP,LP,MP,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),HV=e=>Tw(e,jV),lI=gl.forwardRef((e,t)=>{var n=e.hrefAttrs,r=e.onLayout,o=e.onMoveShouldSetResponder,i=e.onMoveShouldSetResponderCapture,a=e.onResponderEnd,s=e.onResponderGrant,c=e.onResponderMove,p=e.onResponderReject,f=e.onResponderRelease,m=e.onResponderStart,h=e.onResponderTerminate,g=e.onResponderTerminationRequest,v=e.onScrollShouldSetResponder,w=e.onScrollShouldSetResponderCapture,_=e.onSelectionChangeShouldSetResponder,y=e.onSelectionChangeShouldSetResponderCapture,x=e.onStartShouldSetResponder,S=e.onStartShouldSetResponderCapture,T=bn(e,UV),I=gl.useContext(iI),R=gl.useRef(null),D=wP(),z=D.direction;Aw(R,r),Hw(R,{onMoveShouldSetResponder:o,onMoveShouldSetResponderCapture:i,onResponderEnd:a,onResponderGrant:s,onResponderMove:c,onResponderReject:p,onResponderRelease:f,onResponderStart:m,onResponderTerminate:h,onResponderTerminationRequest:g,onScrollShouldSetResponder:v,onScrollShouldSetResponderCapture:w,onSelectionChangeShouldSetResponder:_,onSelectionChangeShouldSetResponderCapture:y,onStartShouldSetResponder:x,onStartShouldSetResponderCapture:S});var U="div",A=e.lang!=null?Cw(e.lang):null,te=e.dir||A,Z=te||z,G=HV(T);if(G.dir=te,G.style=[aI.view$raw,I&&aI.inline,e.style],e.href!=null&&(U="a",n!=null)){var ie=n.download,ee=n.rel,fe=n.target;ie!=null&&(G.download=ie),ee!=null&&(G.rel=ee),typeof fe=="string"&&(G.target=fe.charAt(0)!=="_"?"_"+fe:fe)}var Me=Mw(G),ce=mp(R,Me,t);return G.ref=ce,kP(U,G,{writingDirection:Z})});lI.displayName="View";var aI=nn.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),kt=lI;var WV=function e(t,n,r){if(r===void 0&&(r=-1),r===0)return!0;if(t===n||typeof t=="function"&&typeof n=="function")return!1;if(typeof t!="object"||t===null)return t!==n;if(typeof n!="object"||n===null||t.constructor!==n.constructor)return!0;if(Array.isArray(t)){var o=t.length;if(n.length!==o)return!0;for(var i=0;i<o;i++)if(e(t[i],n[i],r-1))return!0}else{for(var a in t)if(e(t[a],n[a],r-1))return!0;for(var s in n)if(t[s]===void 0&&n[s]!==void 0)return!0}return!1},sI=WV;var Xr=Q(Yr()),_i=Q(Re());function Ww(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function cI(e,t){if(e){if(typeof e=="string")return Ww(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ww(e,t):void 0}}function Uo(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=cI(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pI=Q(Re()),KV=["colors","enabled","onRefresh","progressBackgroundColor","progressViewOffset","refreshing","size","tintColor","title","titleColor"];function $V(e){var t=e.colors,n=e.enabled,r=e.onRefresh,o=e.progressBackgroundColor,i=e.progressViewOffset,a=e.refreshing,s=e.size,c=e.tintColor,p=e.title,f=e.titleColor,m=bn(e,KV);return pI.default.createElement(kt,m)}var fI=$V;var qw=Q(Yr());var bl={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},ba={},dI=Nt;function hI(){if(Nt){var e=window,t,n;if(e.visualViewport){var r=e.visualViewport;t=Math.round(r.height*r.scale),n=Math.round(r.width*r.scale)}else{var o=e.document.documentElement;t=o.clientHeight,n=o.clientWidth}bl.window={fontScale:1,height:t,scale:e.devicePixelRatio||1,width:n},bl.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width}}}function mI(){hI(),Array.isArray(ba.change)&&ba.change.forEach(e=>e(bl))}var bp=class{static get(t){return dI&&(dI=!1,hI()),(0,qw.default)(bl[t],"No dimension set for key "+t),bl[t]}static set(t){t&&(Nt?(0,qw.default)(!1,"Dimensions cannot be set in the browser"):(t.screen!=null&&(bl.screen=t.screen),t.window!=null&&(bl.window=t.window)))}static addEventListener(t,n){return ba[t]=ba[t]||[],ba[t].push(n),{remove:()=>{this.removeEventListener(t,n)}}}static removeEventListener(t,n){Array.isArray(ba[t])&&(ba[t]=ba[t].filter(r=>r!==n))}};Nt&&(window.visualViewport?window.visualViewport.addEventListener("resize",mI,!1):window.addEventListener("resize",mI,!1));var GV={_currentlyFocusedNode:null,currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput(e){e!==null&&(this._currentlyFocusedNode=e,document.activeElement!==e&&vo.focus(e))},blurTextInput(e){e!==null&&(this._currentlyFocusedNode=null,document.activeElement===e&&vo.blur(e))}},Qs=GV;var QV=()=>{Qs.blurTextInput(Qs.currentlyFocusedField())},gI=QV;var Vw=Q(Yr());var va=Q(Re());var YV=["onScroll","onTouchMove","onWheel","scrollEnabled","scrollEventThrottle","showsHorizontalScrollIndicator","showsVerticalScrollIndicator","style"];function bI(e){return{nativeEvent:{contentOffset:{get x(){return e.target.scrollLeft},get y(){return e.target.scrollTop}},contentSize:{get height(){return e.target.scrollHeight},get width(){return e.target.scrollWidth}},layoutMeasurement:{get height(){return e.target.offsetHeight},get width(){return e.target.offsetWidth}}},timeStamp:Date.now()}}function XV(e,t){var n=Date.now()-e;return t>0&&n>=t}var ZV=va.forwardRef((e,t)=>{var n=e.onScroll,r=e.onTouchMove,o=e.onWheel,i=e.scrollEnabled,a=i===void 0?!0:i,s=e.scrollEventThrottle,c=s===void 0?0:s,p=e.showsHorizontalScrollIndicator,f=e.showsVerticalScrollIndicator,m=e.style,h=bn(e,YV),g=va.useRef({isScrolling:!1,scrollLastTick:0}),v=va.useRef(null),w=va.useRef(null);function _(R){return D=>{a&&R&&R(D)}}function y(R){R.stopPropagation(),R.target===w.current&&(R.persist(),v.current!=null&&clearTimeout(v.current),v.current=setTimeout(()=>{T(R)},100),g.current.isScrolling?XV(g.current.scrollLastTick,c)&&S(R):x(R))}function x(R){g.current.isScrolling=!0,S(R)}function S(R){g.current.scrollLastTick=Date.now(),n&&n(bI(R))}function T(R){g.current.isScrolling=!1,n&&n(bI(R))}var I=p===!1||f===!1;return va.createElement(kt,yn({},h,{onScroll:y,onTouchMove:_(r),onWheel:_(o),ref:mp(w,t),style:[m,!a&&vI.scrollDisabled,I&&vI.hideScrollbar]}))}),vI=nn.create({scrollDisabled:{overflowX:"hidden",overflowY:"hidden",touchAction:"none"},hideScrollbar:{scrollbarWidth:"none"}}),yI=ZV;var Si=Q(Re()),EI=Q(SI()),tK=["contentContainerStyle","horizontal","onContentSizeChange","refreshControl","stickyHeaderIndices","pagingEnabled","forwardedRef","keyboardDismissMode","onScroll","centerContent"],_I={},nK=16,Kw=class extends Si.default.Component{constructor(){super(...arguments),this._scrollNodeRef=null,this._innerViewRef=null,this.isTouching=!1,this.lastMomentumScrollBeginTime=0,this.lastMomentumScrollEndTime=0,this.observedScrollSinceBecomingResponder=!1,this.becameResponderWhileAnimating=!1,this.scrollResponderHandleScrollShouldSetResponder=()=>this.isTouching,this.scrollResponderHandleStartShouldSetResponderCapture=t=>this.scrollResponderIsAnimating(),this.scrollResponderHandleTerminationRequest=()=>!this.observedScrollSinceBecomingResponder,this.scrollResponderHandleTouchEnd=t=>{var n=t.nativeEvent;this.isTouching=n.touches.length!==0,this.props.onTouchEnd&&this.props.onTouchEnd(t)},this.scrollResponderHandleResponderRelease=t=>{this.props.onResponderRelease&&this.props.onResponderRelease(t);var n=Qs.currentlyFocusedField();!this.props.keyboardShouldPersistTaps&&n!=null&&t.target!==n&&!this.observedScrollSinceBecomingResponder&&!this.becameResponderWhileAnimating&&(this.props.onScrollResponderKeyboardDismissed&&this.props.onScrollResponderKeyboardDismissed(t),Qs.blurTextInput(n))},this.scrollResponderHandleScroll=t=>{this.observedScrollSinceBecomingResponder=!0,this.props.onScroll&&this.props.onScroll(t)},this.scrollResponderHandleResponderGrant=t=>{this.observedScrollSinceBecomingResponder=!1,this.props.onResponderGrant&&this.props.onResponderGrant(t),this.becameResponderWhileAnimating=this.scrollResponderIsAnimating()},this.scrollResponderHandleScrollBeginDrag=t=>{this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(t)},this.scrollResponderHandleScrollEndDrag=t=>{this.props.onScrollEndDrag&&this.props.onScrollEndDrag(t)},this.scrollResponderHandleMomentumScrollBegin=t=>{this.lastMomentumScrollBeginTime=Date.now(),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(t)},this.scrollResponderHandleMomentumScrollEnd=t=>{this.lastMomentumScrollEndTime=Date.now(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(t)},this.scrollResponderHandleTouchStart=t=>{this.isTouching=!0,this.props.onTouchStart&&this.props.onTouchStart(t)},this.scrollResponderHandleTouchMove=t=>{this.props.onTouchMove&&this.props.onTouchMove(t)},this.scrollResponderIsAnimating=()=>{var t=Date.now(),n=t-this.lastMomentumScrollEndTime,r=n<nK||this.lastMomentumScrollEndTime<this.lastMomentumScrollBeginTime;return r},this.scrollResponderScrollTo=(t,n,r)=>{if(typeof t=="number")console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");else{var o=t||_I;t=o.x,n=o.y,r=o.animated}var i=this.getScrollableNode(),a=t||0,s=n||0;i!=null&&(typeof i.scroll=="function"?i.scroll({top:s,left:a,behavior:r?"smooth":"auto"}):(i.scrollLeft=a,i.scrollTop=s))},this.scrollResponderZoomTo=(t,n)=>{Lh.OS!=="ios"&&(0,Vw.default)("zoomToRect is not implemented")},this.scrollResponderScrollNativeHandleToKeyboard=(t,n,r)=>{this.additionalScrollOffset=n||0,this.preventNegativeScrollOffset=!!r,vo.measureLayout(t,this.getInnerViewNode(),this.scrollResponderTextInputFocusError,this.scrollResponderInputMeasureAndScrollToKeyboard)},this.scrollResponderInputMeasureAndScrollToKeyboard=(t,n,r,o)=>{var i=bp.get("window").height;this.keyboardWillOpenTo&&(i=this.keyboardWillOpenTo.endCoordinates.screenY);var a=n-i+o+this.additionalScrollOffset;this.preventNegativeScrollOffset&&(a=Math.max(0,a)),this.scrollResponderScrollTo({x:0,y:a,animated:!0}),this.additionalOffset=0,this.preventNegativeScrollOffset=!1},this.scrollResponderKeyboardWillShow=t=>{this.keyboardWillOpenTo=t,this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(t)},this.scrollResponderKeyboardWillHide=t=>{this.keyboardWillOpenTo=null,this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(t)},this.scrollResponderKeyboardDidShow=t=>{t&&(this.keyboardWillOpenTo=t),this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(t)},this.scrollResponderKeyboardDidHide=t=>{this.keyboardWillOpenTo=null,this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(t)},this.flashScrollIndicators=()=>{this.scrollResponderFlashScrollIndicators()},this.getScrollResponder=()=>this,this.getScrollableNode=()=>this._scrollNodeRef,this.getInnerViewRef=()=>this._innerViewRef,this.getInnerViewNode=()=>this._innerViewRef,this.getNativeScrollRef=()=>this._scrollNodeRef,this.scrollTo=(t,n,r)=>{if(typeof t=="number")console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var o=t||_I;n=o.x,t=o.y,r=o.animated}this.scrollResponderScrollTo({x:n||0,y:t||0,animated:r!==!1})},this.scrollToEnd=t=>{var n=(t&&t.animated)!==!1,r=this.props.horizontal,o=this.getScrollableNode(),i=r?o.scrollWidth:0,a=r?0:o.scrollHeight;this.scrollResponderScrollTo({x:i,y:a,animated:n})},this._handleContentOnLayout=t=>{var n=t.nativeEvent.layout,r=n.width,o=n.height;this.props.onContentSizeChange(r,o)},this._handleScroll=t=>{this.props.keyboardDismissMode==="on-drag"&&gI(),this.scrollResponderHandleScroll(t)},this._setInnerViewRef=t=>{this._innerViewRef=t},this._setScrollNodeRef=t=>{this._scrollNodeRef=t,t!=null&&(t.getScrollResponder=this.getScrollResponder,t.getInnerViewNode=this.getInnerViewNode,t.getInnerViewRef=this.getInnerViewRef,t.getNativeScrollRef=this.getNativeScrollRef,t.getScrollableNode=this.getScrollableNode,t.scrollTo=this.scrollTo,t.scrollToEnd=this.scrollToEnd,t.flashScrollIndicators=this.flashScrollIndicators,t.scrollResponderZoomTo=this.scrollResponderZoomTo,t.scrollResponderScrollNativeHandleToKeyboard=this.scrollResponderScrollNativeHandleToKeyboard);var n=dp(this.props.forwardedRef);n(t)}}scrollResponderHandleStartShouldSetResponder(){return!1}scrollResponderHandleResponderReject(){(0,EI.default)(!1,"ScrollView doesn't take rejection well - scrolls anyway")}scrollResponderFlashScrollIndicators(){}scrollResponderTextInputFocusError(t){console.error("Error measuring text field: ",t)}render(){var t=this.props,n=t.contentContainerStyle,r=t.horizontal,o=t.onContentSizeChange,i=t.refreshControl,a=t.stickyHeaderIndices,s=t.pagingEnabled,c=t.forwardedRef,p=t.keyboardDismissMode,f=t.onScroll,m=t.centerContent,h=bn(t,tK);if(0)var g,v;var w={};o&&(w={onLayout:this._handleContentOnLayout});var _=!r&&Array.isArray(a),y=_||s?Si.default.Children.map(this.props.children,(z,U)=>{var A=_&&a.indexOf(U)>-1;return z!=null&&(A||s)?Si.default.createElement(kt,{style:[A&&ya.stickyHeader,s&&ya.pagingEnabledChild]},z):z}):this.props.children,x=Si.default.createElement(kt,yn({},w,{children:y,collapsable:!1,ref:this._setInnerViewRef,style:[r&&ya.contentContainerHorizontal,m&&ya.contentContainerCenterContent,n]})),S=r?ya.baseHorizontal:ya.baseVertical,T=r?ya.pagingEnabledHorizontal:ya.pagingEnabledVertical,I=Te(Te({},h),{},{style:[S,s&&T,this.props.style],onTouchStart:this.scrollResponderHandleTouchStart,onTouchMove:this.scrollResponderHandleTouchMove,onTouchEnd:this.scrollResponderHandleTouchEnd,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onScroll:this._handleScroll,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderReject:this.scrollResponderHandleResponderReject}),R=yI;(0,Vw.default)(R!==void 0,"ScrollViewClass must not be undefined");var D=Si.default.createElement(R,yn({},I,{ref:this._setScrollNodeRef}),x);return i?Si.default.cloneElement(i,{style:I.style},D):D}},CI={flexGrow:1,flexShrink:1,transform:"translateZ(0)",WebkitOverflowScrolling:"touch"},ya=nn.create({baseVertical:Te(Te({},CI),{},{flexDirection:"column",overflowX:"hidden",overflowY:"auto"}),baseHorizontal:Te(Te({},CI),{},{flexDirection:"row",overflowX:"auto",overflowY:"hidden"}),contentContainerHorizontal:{flexDirection:"row"},contentContainerCenterContent:{justifyContent:"center",flexGrow:1},stickyHeader:{position:"sticky",top:0,zIndex:10},pagingEnabledHorizontal:{scrollSnapType:"x mandatory"},pagingEnabledVertical:{scrollSnapType:"y mandatory"},pagingEnabledChild:{scrollSnapAlign:"start"}}),RI=Si.default.forwardRef((e,t)=>Si.default.createElement(Kw,yn({},e,{forwardedRef:t})));RI.displayName="ScrollView";var $w=RI;var LI=Q(Yr());var TI=Q(Yr()),Gw=class{constructor(t){var n=t.onMoreTasks;this._onMoreTasks=n,this._queueStack=[{tasks:[],popable:!0}]}enqueue(t){this._getCurrentQueue().push(t)}enqueueTasks(t){t.forEach(n=>this.enqueue(n))}cancelTasks(t){this._queueStack=this._queueStack.map(n=>Te(Te({},n),{},{tasks:n.tasks.filter(r=>t.indexOf(r)===-1)})).filter((n,r)=>n.tasks.length>0||r===0)}hasTasksToProcess(){return this._getCurrentQueue().length>0}processNext(){var t=this._getCurrentQueue();if(t.length){var n=t.shift();try{typeof n=="object"&&n.gen?this._genPromise(n):typeof n=="object"&&n.run?n.run():((0,TI.default)(typeof n=="function",`Expected Function, SimpleTask, or PromiseTask, but got:
`+JSON.stringify(n,null,2)),n())}catch(r){throw r.message="TaskQueue: Error with task "+(n.name||"")+": "+r.message,r}}}_getCurrentQueue(){var t=this._queueStack.length-1,n=this._queueStack[t];return n.popable&&n.tasks.length===0&&t>0?(this._queueStack.pop(),this._getCurrentQueue()):n.tasks}_genPromise(t){var n=this._queueStack.push({tasks:[],popable:!1}),r=n-1,o=this._queueStack[r];t.gen().then(()=>{o.popable=!0,this.hasTasksToProcess()&&this._onMoreTasks()}).catch(i=>{setTimeout(()=>{throw i.message="TaskQueue: Error resolving Promise in task "+t.name+": "+i.message,i},0)})}},OI=Gw;var vp=class{constructor(){this._registry={}}addListener(t,n,r){var o=rK(this._registry,t),i={context:r,listener:n,remove(){o.delete(i)}};return o.add(i),i}emit(t){var n=this._registry[t];if(n!=null){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];for(var a=0,s=[...n];a<s.length;a++){var c=s[a];c.listener.apply(c.context,o)}}}removeAllListeners(t){t==null?this._registry={}:delete this._registry[t]}listenerCount(t){var n=this._registry[t];return n==null?0:n.size}};function rK(e,t){var n=e[t];return n==null&&(n=new Set,e[t]=n),n}var oK=function(t,n){return setTimeout(()=>{var r=Date.now();t({didTimeout:!1,timeRemaining(){return Math.max(0,50-(Date.now()-r))}})},1)},iK=function(t){clearTimeout(t)},PI=Nt&&typeof window.requestIdleCallback<"u",aK=PI?window.requestIdleCallback:oK,_ae=PI?window.cancelIdleCallback:iK,II=aK;var Vh=new vp,Qw={Events:{interactionStart:"interactionStart",interactionComplete:"interactionComplete"},runAfterInteractions(e){var t=[],n=new Promise(r=>{yp(),e&&t.push(e),t.push({run:r,name:"resolve "+(e&&e.name||"?")}),$h.enqueueTasks(t)});return{then:n.then.bind(n),done:n.then.bind(n),cancel:()=>{$h.cancelTasks(t)}}},createInteractionHandle(){yp();var e=++lK;return Kh.add(e),e},clearInteractionHandle(e){(0,LI.default)(!!e,"Must provide a handle to clear."),yp(),Kh.delete(e),Yw.add(e)},addListener:Vh.addListener.bind(Vh),setDeadline(e){Gh=e}},Wh=new Set,Kh=new Set,Yw=new Set,$h=new OI({onMoreTasks:yp}),qh=0,lK=0,Gh=-1;function yp(){qh||(Gh>0?qh=setTimeout(AI):qh=II(AI))}function AI(){qh=0;var e=Wh.size;Kh.forEach(r=>Wh.add(r)),Yw.forEach(r=>Wh.delete(r));var t=Wh.size;if(e!==0&&t===0?Vh.emit(Qw.Events.interactionComplete):e===0&&t!==0&&Vh.emit(Qw.Events.interactionStart),t===0){for(var n=Date.now();$h.hasTasksToProcess();)if($h.processNext(),Gh>0&&Date.now()-n>=Gh){yp();break}}Kh.clear(),Yw.clear()}var MI=Qw;var Xw=class{constructor(t,n){this._delay=n,this._callback=t}dispose(t){t===void 0&&(t={abort:!1}),this._taskHandle&&(this._taskHandle.cancel(),t.abort||this._callback(),this._taskHandle=null)}schedule(){if(!this._taskHandle){var t=setTimeout(()=>{this._taskHandle=MI.runAfterInteractions(()=>{this._taskHandle=null,this._callback()})},this._delay);this._taskHandle={cancel:()=>clearTimeout(t)}}}},DI=Xw;function sK(e,t,n){return t<e?e:t>n?n:t}var Zw=sK;function uK(){return console.log(...arguments)}var NI=uK;var Qh=Q(Yr()),Yh=class{constructor(t){(0,Qh.default)(t>=0,"CellRenderMask must contain a non-negative number os cells"),this._numCells=t,t===0?this._regions=[]:this._regions=[{first:0,last:t-1,isSpacer:!0}]}enumerateRegions(){return this._regions}addCells(t){if((0,Qh.default)(t.first>=0&&t.first<this._numCells&&t.last>=-1&&t.last<this._numCells&&t.last>=t.first-1,"CellRenderMask.addCells called with invalid cell range"),!(t.last<t.first)){var n=this._findRegion(t.first),r=n[0],o=n[1],i=this._findRegion(t.last),a=i[0],s=i[1];if(!(o===s&&!r.isSpacer)){var c=[],p=[],f=Te(Te({},t),{},{isSpacer:!1});r.first<f.first&&(r.isSpacer?c.push({first:r.first,last:f.first-1,isSpacer:!0}):f.first=r.first),a.last>f.last&&(a.isSpacer?p.push({first:f.last+1,last:a.last,isSpacer:!0}):f.last=a.last);var m=[...c,f,...p],h=s-o+1;this._regions.splice(o,h,...m)}}}numCells(){return this._numCells}equals(t){return this._numCells===t._numCells&&this._regions.length===t._regions.length&&this._regions.every((n,r)=>n.first===t._regions[r].first&&n.last===t._regions[r].last&&n.isSpacer===t._regions[r].isSpacer)}_findRegion(t){for(var n=0,r=this._regions.length-1;n<=r;){var o=Math.floor((n+r)/2),i=this._regions[o];if(t>=i.first&&t<=i.last)return[i,o];t<i.first?r=o-1:t>i.last&&(n=o+1)}(0,Qh.default)(!1,"A region was not found containing cellIdx "+t)}};var Xh=Q(Yr()),xp=class{constructor(){this._cellKeyToChildren=new Map,this._childrenToCellKey=new Map}add(t,n){var r;(0,Xh.default)(!this._childrenToCellKey.has(t),"Trying to add already present child list");var o=(r=this._cellKeyToChildren.get(n))!==null&&r!==void 0?r:new Set;o.add(t),this._cellKeyToChildren.set(n,o),this._childrenToCellKey.set(t,n)}remove(t){var n=this._childrenToCellKey.get(t);(0,Xh.default)(n!=null,"Trying to remove non-present child list"),this._childrenToCellKey.delete(t);var r=this._cellKeyToChildren.get(n);(0,Xh.default)(r,"_cellKeyToChildren should contain cellKey"),r.delete(t),r.size===0&&this._cellKeyToChildren.delete(n)}forEach(t){for(var n=Uo(this._cellKeyToChildren.values()),r;!(r=n()).done;)for(var o=r.value,i=Uo(o),a;!(a=i()).done;){var s=a.value;t(s)}}forEachInCell(t,n){for(var r,o=(r=this._cellKeyToChildren.get(t))!==null&&r!==void 0?r:[],i=Uo(o),a;!(a=i()).done;){var s=a.value;n(s)}}anyInCell(t,n){for(var r,o=(r=this._cellKeyToChildren.get(t))!==null&&r!==void 0?r:[],i=Uo(o),a;!(a=i()).done;){var s=a.value;if(n(s))return!0}return!1}size(){return this._childrenToCellKey.size}};var eg=class{constructor(){this.any_blank_count=0,this.any_blank_ms=0,this.any_blank_speed_sum=0,this.mostly_blank_count=0,this.mostly_blank_ms=0,this.pixels_blank=0,this.pixels_sampled=0,this.pixels_scrolled=0,this.total_time_spent=0,this.sample_count=0}},Jh=!1,Zh=[],FI=10,Jw=Jh?1:null,e1=class{static addListener(t){return Jw===null&&console.warn("Call `FillRateHelper.setSampleRate` before `addListener`."),Zh.push(t),{remove:()=>{Zh=Zh.filter(n=>t!==n)}}}static setSampleRate(t){Jw=t}static setMinSampleCount(t){FI=t}constructor(t){this._anyBlankStartTime=null,this._enabled=!1,this._info=new eg,this._mostlyBlankStartTime=null,this._samplesStartTime=null,this._getFrameMetrics=t,this._enabled=(Jw||0)>Math.random(),this._resetData()}activate(){this._enabled&&this._samplesStartTime==null&&(Jh&&console.debug("FillRateHelper: activate"),this._samplesStartTime=global.performance.now())}deactivateAndFlush(){if(this._enabled){var t=this._samplesStartTime;if(t==null){Jh&&console.debug("FillRateHelper: bail on deactivate with no start time");return}if(this._info.sample_count<FI){this._resetData();return}var n=global.performance.now()-t,r=Te(Te({},this._info),{},{total_time_spent:n});if(Jh){var o={avg_blankness:this._info.pixels_blank/this._info.pixels_sampled,avg_speed:this._info.pixels_scrolled/(n/1e3),avg_speed_when_any_blank:this._info.any_blank_speed_sum/this._info.any_blank_count,any_blank_per_min:this._info.any_blank_count/(n/1e3/60),any_blank_time_frac:this._info.any_blank_ms/n,mostly_blank_per_min:this._info.mostly_blank_count/(n/1e3/60),mostly_blank_time_frac:this._info.mostly_blank_ms/n};for(var i in o)o[i]=Math.round(1e3*o[i])/1e3;console.debug("FillRateHelper deactivateAndFlush: ",{derived:o,info:r})}Zh.forEach(a=>a(r)),this._resetData()}}computeBlankness(t,n,r){if(!this._enabled||t.getItemCount(t.data)===0||n.last<n.first||this._samplesStartTime==null)return 0;var o=r.dOffset,i=r.offset,a=r.velocity,s=r.visibleLength;this._info.sample_count++,this._info.pixels_sampled+=Math.round(s),this._info.pixels_scrolled+=Math.round(Math.abs(o));var c=Math.round(Math.abs(a)*1e3),p=global.performance.now();this._anyBlankStartTime!=null&&(this._info.any_blank_ms+=p-this._anyBlankStartTime),this._anyBlankStartTime=null,this._mostlyBlankStartTime!=null&&(this._info.mostly_blank_ms+=p-this._mostlyBlankStartTime),this._mostlyBlankStartTime=null;for(var f=0,m=n.first,h=this._getFrameMetrics(m,t);m<=n.last&&(!h||!h.inLayout);)h=this._getFrameMetrics(m,t),m++;h&&m>0&&(f=Math.min(s,Math.max(0,h.offset-i)));for(var g=0,v=n.last,w=this._getFrameMetrics(v,t);v>=n.first&&(!w||!w.inLayout);)w=this._getFrameMetrics(v,t),v--;if(w&&v<t.getItemCount(t.data)-1){var _=w.offset+w.length;g=Math.min(s,Math.max(0,i+s-_))}var y=Math.round(f+g),x=y/s;return x>0?(this._anyBlankStartTime=p,this._info.any_blank_speed_sum+=c,this._info.any_blank_count++,this._info.pixels_blank+=y,x>.5&&(this._mostlyBlankStartTime=p,this._info.mostly_blank_count++)):(c<.01||Math.abs(o)<1)&&this.deactivateAndFlush(),x}enabled(){return this._enabled}_resetData(){this._anyBlankStartTime=null,this._info=new eg,this._mostlyBlankStartTime=null,this._samplesStartTime=null}},zI=e1;var t1=Q(Yr()),BI=Q(Re()),wp=class extends BI.PureComponent{constructor(t){super(t),this._inAsyncStateUpdate=!1,this._installSetStateHooks()}setState(t,n){typeof t=="function"?super.setState((r,o)=>{this._inAsyncStateUpdate=!0;var i;try{i=t(r,o)}catch(a){throw a}finally{this._inAsyncStateUpdate=!1}return i},n):super.setState(t,n)}_installSetStateHooks(){var t=this,n=this.props,r=this.state;Object.defineProperty(this,"props",{get(){return(0,t1.default)(!t._inAsyncStateUpdate,'"this.props" should not be accessed during state updates'),n},set(o){n=o}}),Object.defineProperty(this,"state",{get(){return(0,t1.default)(!t._inAsyncStateUpdate,'"this.state" should not be acceessed during state updates'),r},set(o){r=o}})}};var UI=Q(Yr()),n1=class{constructor(t){t===void 0&&(t={viewAreaCoveragePercentThreshold:0}),this._hasInteracted=!1,this._timers=new Set,this._viewableIndices=[],this._viewableItems=new Map,this._config=t}dispose(){this._timers.forEach(clearTimeout)}computeViewableItems(t,n,r,o,i){var a=t.getItemCount(t.data),s=this._config,c=s.itemVisiblePercentThreshold,p=s.viewAreaCoveragePercentThreshold,f=p!=null,m=f?p:c;(0,UI.default)(m!=null&&c!=null!=(p!=null),"Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");var h=[];if(a===0)return h;var g=-1,v=i||{first:0,last:a-1},w=v.first,_=v.last;if(_>=a)return console.warn("Invalid render range computing viewability "+JSON.stringify({renderRange:i,itemCount:a})),[];for(var y=w;y<=_;y++){var x=o(y,t);if(x){var S=x.offset-n,T=S+x.length;if(S<r&&T>0)g=y,cK(f,m,S,T,r,x.length)&&h.push(y);else if(g>=0)break}}return h}onUpdate(t,n,r,o,i,a,s){var c=t.getItemCount(t.data);if(!(this._config.waitForInteraction&&!this._hasInteracted||c===0||!o(0,t))){var p=[];if(c&&(p=this.computeViewableItems(t,n,r,o,s)),!(this._viewableIndices.length===p.length&&this._viewableIndices.every((m,h)=>m===p[h])))if(this._viewableIndices=p,this._config.minimumViewTime){var f=setTimeout(()=>{this._timers.delete(f),this._onUpdateSync(t,p,a,i)},this._config.minimumViewTime);this._timers.add(f)}else this._onUpdateSync(t,p,a,i)}}resetViewableIndices(){this._viewableIndices=[]}recordInteraction(){this._hasInteracted=!0}_onUpdateSync(t,n,r,o){n=n.filter(x=>this._viewableIndices.includes(x));for(var i=this._viewableItems,a=new Map(n.map(x=>{var S=o(x,!0,t);return[S.key,S]})),s=[],c=Uo(a),p;!(p=c()).done;){var f=p.value,m=f[0],h=f[1];i.has(m)||s.push(h)}for(var g=Uo(i),v;!(v=g()).done;){var w=v.value,_=w[0],y=w[1];a.has(_)||s.push(Te(Te({},y),{},{isViewable:!1}))}s.length>0&&(this._viewableItems=a,r({viewableItems:Array.from(a.values()),changed:s,viewabilityConfig:this._config}))}};function cK(e,t,n,r,o,i){if(fK(n,r,o))return!0;var a=pK(n,r,o),s=100*(e?a/o:a/i);return s>=t}function pK(e,t,n){var r=Math.min(t,n)-Math.max(e,0);return Math.max(0,r)}function fK(e,t,n){return e>=0&&t<=n&&t>e}var r1=n1;var kp=Q(Re()),Sp=Q(Re()),dK=!1,Ys=kp.createContext(null);dK&&(Ys.displayName="VirtualizedListContext");function jI(e){var t=e.children,n=e.value,r=(0,Sp.useMemo)(()=>({cellKey:null,getScrollMetrics:n.getScrollMetrics,horizontal:n.horizontal,getOutermostParentListRef:n.getOutermostParentListRef,registerAsNestedChild:n.registerAsNestedChild,unregisterAsNestedChild:n.unregisterAsNestedChild}),[n.getScrollMetrics,n.horizontal,n.getOutermostParentListRef,n.registerAsNestedChild,n.unregisterAsNestedChild]);return kp.createElement(Ys.Provider,{value:r},t)}function Xs(e){var t=e.cellKey,n=e.children,r=(0,Sp.useContext)(Ys),o=(0,Sp.useMemo)(()=>r==null?null:Te(Te({},r),{},{cellKey:t}),[r,t]);return kp.createElement(Ys.Provider,{value:o},n)}var HI=Q(Yr()),jo=Q(Re()),_p=class extends jo.Component{constructor(){super(...arguments),this.state={separatorProps:{highlighted:!1,leadingItem:this.props.item}},this._separators={highlight:()=>{var t=this.props,n=t.cellKey,r=t.prevCellKey;this.props.onUpdateSeparators([n,r],{highlighted:!0})},unhighlight:()=>{var t=this.props,n=t.cellKey,r=t.prevCellKey;this.props.onUpdateSeparators([n,r],{highlighted:!1})},updateProps:(t,n)=>{var r=this.props,o=r.cellKey,i=r.prevCellKey;this.props.onUpdateSeparators([t==="leading"?i:o],n)}},this._onLayout=t=>{this.props.onCellLayout&&this.props.onCellLayout(t,this.props.cellKey,this.props.index)}}static getDerivedStateFromProps(t,n){return{separatorProps:Te(Te({},n.separatorProps),{},{leadingItem:t.item})}}updateSeparatorProps(t){this.setState(n=>({separatorProps:Te(Te({},n.separatorProps),t)}))}componentWillUnmount(){this.props.onUnmount(this.props.cellKey)}_renderElement(t,n,r,o){if(t&&n&&console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem."),n)return jo.createElement(n,{item:r,index:o,separators:this._separators});if(t)return t({item:r,index:o,separators:this._separators});(0,HI.default)(!1,"VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.")}render(){var t=this.props,n=t.CellRendererComponent,r=t.ItemSeparatorComponent,o=t.ListItemComponent,i=t.cellKey,a=t.horizontal,s=t.item,c=t.index,p=t.inversionStyle,f=t.onCellFocusCapture,m=t.onCellLayout,h=t.renderItem,g=this._renderElement(h,o,s,c),v=jo.isValidElement(r)?r:r&&jo.createElement(r,this.state.separatorProps),w=p?a?[o1.rowReverse,p]:[o1.columnReverse,p]:a?[o1.row,p]:p,_=n?jo.createElement(n,yn({cellKey:i,index:c,item:s,style:w,onFocusCapture:f},m&&{onLayout:this._onLayout}),g,v):jo.createElement(kt,yn({style:w,onFocusCapture:f},m&&{onLayout:this._onLayout}),g,v);return jo.createElement(Xs,{cellKey:this.props.cellKey},_)}},o1=nn.create({row:{flexDirection:"row"},rowReverse:{flexDirection:"row-reverse"},columnReverse:{flexDirection:"column-reverse"}});function mK(e,t,n,r){r===void 0&&(r=1);for(var o=t.getItemCount(t.data),i=[],a=0;a<e.length;a++)for(var s=e[a],c=0,p=o-1;c<=p;){var f=c+(p-c>>>1),m=n(f,t),h=m.offset*r,g=(m.offset+m.length)*r;if(f===0&&s<h||f!==0&&s<=h)p=f-1;else if(s>g)c=f+1;else{i[a]=f;break}}return i}function hK(e,t){return t.last-t.first+1-Math.max(0,1+Math.min(t.last,e.last)-Math.max(t.first,e.first))}function WI(e,t,n,r,o,i){var a=e.getItemCount(e.data);if(a===0)return{first:0,last:-1};var s=i.offset,c=i.velocity,p=i.visibleLength,f=i.zoomScale,m=f===void 0?1:f,h=Math.max(0,s),g=h+p,v=(n-1)*p,w=.5,_=c>1?"after":c<-1?"before":"none",y=Math.max(0,h-(1-w)*v),x=Math.max(0,g+w*v),S=o(a-1,e).offset*m;if(S<y)return{first:Math.max(0,a-1-t),last:a-1};var T=mK([y,h,g,x],e,o,m),I=T[0],R=T[1],D=T[2],z=T[3];I=I??0,R=R??Math.max(0,I),z=z??a-1,D=D??Math.min(z,R+t-1);for(var U={first:R,last:D},A=hK(r,U);!(R<=I&&D>=z);){var te=A>=t,Z=R<=r.first||R>r.last,G=R>I&&(!te||!Z),ie=D>=r.last||D<r.first,ee=D<z&&(!te||!ie);if(te&&!G&&!ee)break;G&&!(_==="after"&&ee&&ie)&&(Z&&A++,R--),ee&&!(_==="before"&&G&&Z)&&(ie&&A++,D++)}if(!(D>=R&&R>=0&&D<a&&R>=I&&D<=z&&R<=U.first&&D>=U.last))throw new Error("Bad window calculation "+JSON.stringify({first:R,last:D,itemCount:a,overscanFirst:I,overscanLast:z,visible:U}));return{first:R,last:D}}function Cp(e,t){return typeof e=="object"&&e?.key!=null?e.key:typeof e=="object"&&e?.id!=null?e.id:String(t)}var dr=Q(Yr()),YI=Q(VI()),it=Q(Re()),gK=!1,KI=.001,i1=!1,a1="";function yl(e){return e??!1}function bK(e){return e??10}function l1(e){return e??10}function vK(e){return e??2}function $I(e){return e??2}function GI(e,t){return e*t/2}function yK(e){return e??50}function QI(e){return e??21}function xK(e,t){for(var n=e.length-1;n>=0;n--)if(t(e[n]))return e[n];return null}var ng=class e extends wp{scrollToEnd(t){var n=t?t.animated:!0,r=this.props.getItemCount(this.props.data)-1;if(!(r<0)){var o=this.__getFrameMetricsApprox(r,this.props),i=Math.max(0,o.offset+o.length+this._footerLength-this._scrollMetrics.visibleLength);if(this._scrollRef!=null){if(this._scrollRef.scrollTo==null){console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");return}this._scrollRef.scrollTo(yl(this.props.horizontal)?{x:i,animated:n}:{y:i,animated:n})}}}scrollToIndex(t){var n=this.props,r=n.data,o=n.horizontal,i=n.getItemCount,a=n.getItemLayout,s=n.onScrollToIndexFailed,c=t.animated,p=t.index,f=t.viewOffset,m=t.viewPosition;if((0,dr.default)(p>=0,"scrollToIndex out of range: requested index "+p+" but minimum is 0"),(0,dr.default)(i(r)>=1,"scrollToIndex out of range: item length "+i(r)+" but minimum is 1"),(0,dr.default)(p<i(r),"scrollToIndex out of range: requested index "+p+" is out of 0 to "+(i(r)-1)),!a&&p>this._highestMeasuredFrameIndex){(0,dr.default)(!!s,"scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures."),s({averageItemLength:this._averageCellLength,highestMeasuredFrameIndex:this._highestMeasuredFrameIndex,index:p});return}var h=this.__getFrameMetricsApprox(Math.floor(p),this.props),g=Math.max(0,this._getOffsetApprox(p,this.props)-(m||0)*(this._scrollMetrics.visibleLength-h.length))-(f||0);if(this._scrollRef!=null){if(this._scrollRef.scrollTo==null){console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");return}this._scrollRef.scrollTo(o?{x:g,animated:c}:{y:g,animated:c})}}scrollToItem(t){for(var n=t.item,r=this.props,o=r.data,i=r.getItem,a=r.getItemCount,s=a(o),c=0;c<s;c++)if(i(o,c)===n){this.scrollToIndex(Te(Te({},t),{},{index:c}));break}}scrollToOffset(t){var n=t.animated,r=t.offset;if(this._scrollRef!=null){if(this._scrollRef.scrollTo==null){console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");return}this._scrollRef.scrollTo(yl(this.props.horizontal)?{x:r,animated:n}:{y:r,animated:n})}}recordInteraction(){this._nestedChildLists.forEach(t=>{t.recordInteraction()}),this._viewabilityTuples.forEach(t=>{t.viewabilityHelper.recordInteraction()}),this._updateViewableItems(this.props,this.state.cellsAroundViewport)}flashScrollIndicators(){this._scrollRef!=null&&this._scrollRef.flashScrollIndicators()}getScrollResponder(){if(this._scrollRef&&this._scrollRef.getScrollResponder)return this._scrollRef.getScrollResponder()}getScrollableNode(){return this._scrollRef&&this._scrollRef.getScrollableNode?this._scrollRef.getScrollableNode():this._scrollRef}getScrollRef(){return this._scrollRef&&this._scrollRef.getScrollRef?this._scrollRef.getScrollRef():this._scrollRef}_getCellKey(){var t;return((t=this.context)==null?void 0:t.cellKey)||"rootList"}hasMore(){return this._hasMore}constructor(t){var n;if(super(t),this._getScrollMetrics=()=>this._scrollMetrics,this._getOutermostParentListRef=()=>this._isNestedWithSameOrientation()?this.context.getOutermostParentListRef():this,this._registerAsNestedChild=s=>{this._nestedChildLists.add(s.ref,s.cellKey),this._hasInteracted&&s.ref.recordInteraction()},this._unregisterAsNestedChild=s=>{this._nestedChildLists.remove(s.ref)},this._onUpdateSeparators=(s,c)=>{s.forEach(p=>{var f=p!=null&&this._cellRefs[p];f&&f.updateSeparatorProps(c)})},this._getSpacerKey=s=>s?"height":"width",this._averageCellLength=0,this._cellRefs={},this._frames={},this._footerLength=0,this._hasTriggeredInitialScrollToIndex=!1,this._hasInteracted=!1,this._hasMore=!1,this._hasWarned={},this._headerLength=0,this._hiPriInProgress=!1,this._highestMeasuredFrameIndex=0,this._indicesToKeys=new Map,this._lastFocusedCellKey=null,this._nestedChildLists=new xp,this._offsetFromParentVirtualizedList=0,this._prevParentOffset=0,this._scrollMetrics={contentLength:0,dOffset:0,dt:10,offset:0,timestamp:0,velocity:0,visibleLength:0,zoomScale:1},this._scrollRef=null,this._sentStartForContentLength=0,this._sentEndForContentLength=0,this._totalCellLength=0,this._totalCellsMeasured=0,this._viewabilityTuples=[],this._captureScrollRef=s=>{this._scrollRef=s},this._defaultRenderScrollComponent=s=>{var c=s.onRefresh;if(this._isNestedWithSameOrientation())return it.createElement(kt,s);if(c){var p;return(0,dr.default)(typeof s.refreshing=="boolean","`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `"+JSON.stringify((p=s.refreshing)!==null&&p!==void 0?p:"undefined")+"`"),it.createElement($w,yn({},s,{refreshControl:s.refreshControl==null?it.createElement(fI,{refreshing:s.refreshing,onRefresh:c,progressViewOffset:s.progressViewOffset}):s.refreshControl}))}else return it.createElement($w,s)},this._onCellLayout=(s,c,p)=>{var f=s.nativeEvent.layout,m={offset:this._selectOffset(f),length:this._selectLength(f),index:p,inLayout:!0},h=this._frames[c];!h||m.offset!==h.offset||m.length!==h.length||p!==h.index?(this._totalCellLength+=m.length-(h?h.length:0),this._totalCellsMeasured+=h?0:1,this._averageCellLength=this._totalCellLength/this._totalCellsMeasured,this._frames[c]=m,this._highestMeasuredFrameIndex=Math.max(this._highestMeasuredFrameIndex,p),this._scheduleCellsToRenderUpdate()):this._frames[c].inLayout=!0,this._triggerRemeasureForChildListsInCell(c),this._computeBlankness(),this._updateViewableItems(this.props,this.state.cellsAroundViewport)},this._onCellUnmount=s=>{delete this._cellRefs[s];var c=this._frames[s];c&&(this._frames[s]=Te(Te({},c),{},{inLayout:!1}))},this._onLayout=s=>{this._isNestedWithSameOrientation()?this.measureLayoutRelativeToContainingList():this._scrollMetrics.visibleLength=this._selectLength(s.nativeEvent.layout),this.props.onLayout&&this.props.onLayout(s),this._scheduleCellsToRenderUpdate(),this._maybeCallOnEdgeReached()},this._onLayoutEmpty=s=>{this.props.onLayout&&this.props.onLayout(s)},this._onLayoutFooter=s=>{this._triggerRemeasureForChildListsInCell(this._getFooterCellKey()),this._footerLength=this._selectLength(s.nativeEvent.layout)},this._onLayoutHeader=s=>{this._headerLength=this._selectLength(s.nativeEvent.layout)},this._onContentSizeChange=(s,c)=>{s>0&&c>0&&this.props.initialScrollIndex!=null&&this.props.initialScrollIndex>0&&!this._hasTriggeredInitialScrollToIndex&&(this.props.contentOffset==null&&(this.props.initialScrollIndex<this.props.getItemCount(this.props.data)?this.scrollToIndex({animated:!1,index:(0,YI.default)(this.props.initialScrollIndex)}):this.scrollToEnd({animated:!1})),this._hasTriggeredInitialScrollToIndex=!0),this.props.onContentSizeChange&&this.props.onContentSizeChange(s,c),this._scrollMetrics.contentLength=this._selectLength({height:c,width:s}),this._scheduleCellsToRenderUpdate(),this._maybeCallOnEdgeReached()},this._convertParentScrollMetrics=s=>{var c=s.offset-this._offsetFromParentVirtualizedList,p=s.visibleLength,f=c-this._scrollMetrics.offset,m=this._scrollMetrics.contentLength;return{visibleLength:p,contentLength:m,offset:c,dOffset:f}},this._onScroll=s=>{this._nestedChildLists.forEach(y=>{y._onScroll(s)}),this.props.onScroll&&this.props.onScroll(s);var c=s.timeStamp,p=this._selectLength(s.nativeEvent.layoutMeasurement),f=this._selectLength(s.nativeEvent.contentSize),m=this._selectOffset(s.nativeEvent.contentOffset),h=m-this._scrollMetrics.offset;if(this._isNestedWithSameOrientation()){if(this._scrollMetrics.contentLength===0)return;var g=this._convertParentScrollMetrics({visibleLength:p,offset:m});p=g.visibleLength,f=g.contentLength,m=g.offset,h=g.dOffset}var v=this._scrollMetrics.timestamp?Math.max(1,c-this._scrollMetrics.timestamp):1,w=h/v;v>500&&this._scrollMetrics.dt>500&&f>5*p&&!this._hasWarned.perf&&(NI("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.",{dt:v,prevDt:this._scrollMetrics.dt,contentLength:f}),this._hasWarned.perf=!0);var _=s.nativeEvent.zoomScale<0?1:s.nativeEvent.zoomScale;this._scrollMetrics={contentLength:f,dt:v,dOffset:h,offset:m,timestamp:c,velocity:w,visibleLength:p,zoomScale:_},this._updateViewableItems(this.props,this.state.cellsAroundViewport),this.props&&(this._maybeCallOnEdgeReached(),w!==0&&this._fillRateHelper.activate(),this._computeBlankness(),this._scheduleCellsToRenderUpdate())},this._onScrollBeginDrag=s=>{this._nestedChildLists.forEach(c=>{c._onScrollBeginDrag(s)}),this._viewabilityTuples.forEach(c=>{c.viewabilityHelper.recordInteraction()}),this._hasInteracted=!0,this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(s)},this._onScrollEndDrag=s=>{this._nestedChildLists.forEach(p=>{p._onScrollEndDrag(s)});var c=s.nativeEvent.velocity;c&&(this._scrollMetrics.velocity=this._selectOffset(c)),this._computeBlankness(),this.props.onScrollEndDrag&&this.props.onScrollEndDrag(s)},this._onMomentumScrollBegin=s=>{this._nestedChildLists.forEach(c=>{c._onMomentumScrollBegin(s)}),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(s)},this._onMomentumScrollEnd=s=>{this._nestedChildLists.forEach(c=>{c._onMomentumScrollEnd(s)}),this._scrollMetrics.velocity=0,this._computeBlankness(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(s)},this._updateCellsToRender=()=>{this._updateViewableItems(this.props,this.state.cellsAroundViewport),this.setState((s,c)=>{var p=this._adjustCellsAroundViewport(c,s.cellsAroundViewport),f=e._createRenderMask(c,p,this._getNonViewportRenderRegions(c));return p.first===s.cellsAroundViewport.first&&p.last===s.cellsAroundViewport.last&&f.equals(s.renderMask)?null:{cellsAroundViewport:p,renderMask:f}})},this._createViewToken=(s,c,p)=>{var f=p.data,m=p.getItem,h=m(f,s);return{index:s,item:h,key:this._keyExtractor(h,s,p),isViewable:c}},this._getOffsetApprox=(s,c)=>{if(Number.isInteger(s))return this.__getFrameMetricsApprox(s,c).offset;var p=this.__getFrameMetricsApprox(Math.floor(s),c),f=s-Math.floor(s);return p.offset+f*p.length},this.__getFrameMetricsApprox=(s,c)=>{var p=this._getFrameMetrics(s,c);if(p&&p.index===s)return p;var f=c.data,m=c.getItemCount,h=c.getItemLayout;return(0,dr.default)(s>=0&&s<m(f),"Tried to get frame for out of range index "+s),(0,dr.default)(!h,"Should not have to estimate frames when a measurement metrics function is provided"),{length:this._averageCellLength,offset:this._averageCellLength*s}},this._getFrameMetrics=(s,c)=>{var p=c.data,f=c.getItem,m=c.getItemCount,h=c.getItemLayout;(0,dr.default)(s>=0&&s<m(p),"Tried to get frame for out of range index "+s);var g=f(p,s),v=this._frames[this._keyExtractor(g,s,c)];return(!v||v.index!==s)&&h?h(p,s):v},this._getNonViewportRenderRegions=s=>{if(!(this._lastFocusedCellKey&&this._cellRefs[this._lastFocusedCellKey]))return[];var c=this._cellRefs[this._lastFocusedCellKey],p=c.props.index,f=s.getItemCount(s.data);if(p>=f||this._keyExtractor(s.getItem(s.data,p),p,s)!==this._lastFocusedCellKey)return[];for(var m=p,h=0,g=m-1;g>=0&&h<this._scrollMetrics.visibleLength;g--)m--,h+=this.__getFrameMetricsApprox(g,s).length;for(var v=p,w=0,_=v+1;_<f&&w<this._scrollMetrics.visibleLength;_++)v++,w+=this.__getFrameMetricsApprox(_,s).length;return[{first:m,last:v}]},this._checkProps(t),this._fillRateHelper=new zI(this._getFrameMetrics),this._updateCellsToRenderBatcher=new DI(this._updateCellsToRender,(n=this.props.updateCellsBatchingPeriod)!==null&&n!==void 0?n:50),this.props.viewabilityConfigCallbackPairs)this._viewabilityTuples=this.props.viewabilityConfigCallbackPairs.map(s=>({viewabilityHelper:new r1(s.viewabilityConfig),onViewableItemsChanged:s.onViewableItemsChanged}));else{var r=this.props,o=r.onViewableItemsChanged,i=r.viewabilityConfig;o&&this._viewabilityTuples.push({viewabilityHelper:new r1(i),onViewableItemsChanged:o})}var a=e._initialRenderRegion(t);this.state={cellsAroundViewport:a,renderMask:e._createRenderMask(t,a)},this.invertedWheelEventHandler=s=>{var c=this.props.horizontal?s.target.scrollLeft:s.target.scrollTop,p=this.props.horizontal?s.target.scrollWidth:s.target.scrollHeight,f=this.props.horizontal?s.target.clientWidth:s.target.clientHeight,m=p>f,h=this.props.horizontal?s.deltaX||s.wheelDeltaX:s.deltaY||s.wheelDeltaY,g=h;m&&(g=h<0?Math.min(h+c,0):Math.max(h-(p-f-c),0));var v=h-g;if(this.props.inverted&&this._scrollRef&&this._scrollRef.getScrollableNode){var w=this._scrollRef.getScrollableNode();if(this.props.horizontal){s.target.scrollLeft+=v;var _=w.scrollLeft-g;w.scrollLeft=this.props.getItemLayout?_:Math.min(_,this._totalCellLength)}else{s.target.scrollTop+=v;var y=w.scrollTop-g;w.scrollTop=this.props.getItemLayout?y:Math.min(y,this._totalCellLength)}s.preventDefault()}}}_checkProps(t){var n=t.onScroll,r=t.windowSize,o=t.getItemCount,i=t.data,a=t.initialScrollIndex;(0,dr.default)(!n||!n.__isNative,"Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"),(0,dr.default)(QI(r)>0,"VirtualizedList: The windowSize prop must be present and set to a value greater than 0."),(0,dr.default)(o,'VirtualizedList: The "getItemCount" prop must be provided');var s=o(i);if(a!=null&&!this._hasTriggeredInitialScrollToIndex&&(a<0||s>0&&a>=s)&&!this._hasWarned.initialScrollIndex&&(console.warn('initialScrollIndex "'+a+'" is not valid (list has '+s+" items)"),this._hasWarned.initialScrollIndex=!0),gK&&!this._hasWarned.flexWrap){var c=nn.flatten(this.props.contentContainerStyle);c!=null&&c.flexWrap==="wrap"&&(console.warn("`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead."),this._hasWarned.flexWrap=!0)}}static _createRenderMask(t,n,r){var o=t.getItemCount(t.data);(0,dr.default)(n.first>=0&&n.last>=n.first-1&&n.last<o,'Invalid cells around viewport "['+n.first+", "+n.last+']" was passed to VirtualizedList._createRenderMask');var i=new Yh(o);if(o>0){for(var a=[n,...r??[]],s=0,c=a;s<c.length;s++){var p=c[s];i.addCells(p)}if(t.initialScrollIndex==null||t.initialScrollIndex<=0){var f=e._initialRenderRegion(t);i.addCells(f)}var m=new Set(t.stickyHeaderIndices);e._ensureClosestStickyHeader(t,m,i,n.first)}return i}static _initialRenderRegion(t){var n,r=t.getItemCount(t.data),o=Math.max(0,Math.min(r-1,Math.floor((n=t.initialScrollIndex)!==null&&n!==void 0?n:0))),i=Math.min(r,o+bK(t.initialNumToRender))-1;return{first:o,last:i}}static _ensureClosestStickyHeader(t,n,r,o){for(var i=t.ListHeaderComponent?1:0,a=o-1;a>=0;a--)if(n.has(a+i)){r.addCells({first:a,last:a});break}}_adjustCellsAroundViewport(t,n){var r=t.data,o=t.getItemCount,i=$I(t.onEndReachedThreshold),a=this._scrollMetrics,s=a.contentLength,c=a.offset,p=a.visibleLength,f=s-p-c;if(p<=0||s<=0)return n.last>=o(r)?e._constrainToItemCount(n,t):n;var m;if(t.disableVirtualization){var h=f<i*p?l1(t.maxToRenderPerBatch):0;m={first:0,last:Math.min(n.last+h,o(r)-1)}}else{if(t.initialScrollIndex&&!this._scrollMetrics.offset&&Math.abs(f)>=Number.EPSILON)return n.last>=o(r)?e._constrainToItemCount(n,t):n;m=WI(t,l1(t.maxToRenderPerBatch),QI(t.windowSize),n,this.__getFrameMetricsApprox,this._scrollMetrics),(0,dr.default)(m.last<o(r),"computeWindowedRenderLimits() should return range in-bounds")}if(this._nestedChildLists.size()>0){var g=this._findFirstChildWithMore(m.first,m.last);m.last=g??m.last}return m}_findFirstChildWithMore(t,n){for(var r=t;r<=n;r++){var o=this._indicesToKeys.get(r);if(o!=null&&this._nestedChildLists.anyInCell(o,i=>i.hasMore()))return r}return null}componentDidMount(){this._isNestedWithSameOrientation()&&this.context.registerAsNestedChild({ref:this,cellKey:this.context.cellKey}),this.setupWebWheelHandler()}componentWillUnmount(){this._isNestedWithSameOrientation()&&this.context.unregisterAsNestedChild({ref:this}),this._updateCellsToRenderBatcher.dispose({abort:!0}),this._viewabilityTuples.forEach(t=>{t.viewabilityHelper.dispose()}),this._fillRateHelper.deactivateAndFlush(),this.teardownWebWheelHandler()}setupWebWheelHandler(){if(this._scrollRef&&this._scrollRef.getScrollableNode)this._scrollRef.getScrollableNode().addEventListener("wheel",this.invertedWheelEventHandler);else{setTimeout(()=>this.setupWebWheelHandler(),50);return}}teardownWebWheelHandler(){this._scrollRef&&this._scrollRef.getScrollableNode&&this._scrollRef.getScrollableNode().removeEventListener("wheel",this.invertedWheelEventHandler)}static getDerivedStateFromProps(t,n){var r=t.getItemCount(t.data);if(r===n.renderMask.numCells())return n;var o=e._constrainToItemCount(n.cellsAroundViewport,t);return{cellsAroundViewport:o,renderMask:e._createRenderMask(t,o)}}_pushCells(t,n,r,o,i,a){var s=this,c=this.props,p=c.CellRendererComponent,f=c.ItemSeparatorComponent,m=c.ListHeaderComponent,h=c.ListItemComponent,g=c.data,v=c.debug,w=c.getItem,_=c.getItemCount,y=c.getItemLayout,x=c.horizontal,S=c.renderItem,T=m?1:0,I=_(g)-1,R;i=Math.min(I,i);for(var D=function(){var A=w(g,z),te=s._keyExtractor(A,z,s.props);s._indicesToKeys.set(z,te),r.has(z+T)&&n.push(t.length);var Z=y==null||v||s._fillRateHelper.enabled();t.push(it.createElement(_p,yn({CellRendererComponent:p,ItemSeparatorComponent:z<I?f:void 0,ListItemComponent:h,cellKey:te,horizontal:x,index:z,inversionStyle:a,item:A,key:te,prevCellKey:R,onUpdateSeparators:s._onUpdateSeparators,onCellFocusCapture:G=>s._onCellFocusCapture(te),onUnmount:s._onCellUnmount,ref:G=>{s._cellRefs[te]=G},renderItem:S},Z&&{onCellLayout:s._onCellLayout}))),R=te},z=o;z<=i;z++)D()}static _constrainToItemCount(t,n){var r=n.getItemCount(n.data),o=Math.min(r-1,t.last),i=l1(n.maxToRenderPerBatch);return{first:Zw(0,r-1-i,t.first),last:o}}_isNestedWithSameOrientation(){var t=this.context;return!!(t&&!!t.horizontal===yl(this.props.horizontal))}_keyExtractor(t,n,r){if(r.keyExtractor!=null)return r.keyExtractor(t,n);var o=Cp(t,n);return o===String(n)&&(i1=!0,t.type&&t.type.displayName&&(a1=t.type.displayName)),o}render(){this._checkProps(this.props);var t=this.props,n=t.ListEmptyComponent,r=t.ListFooterComponent,o=t.ListHeaderComponent,i=this.props,a=i.data,s=i.horizontal,c=this.props.inverted?yl(this.props.horizontal)?yo.horizontallyInverted:yo.verticallyInverted:null,p=[],f=new Set(this.props.stickyHeaderIndices),m=[];if(o){f.has(0)&&m.push(0);var h=it.isValidElement(o)?o:it.createElement(o,null);p.push(it.createElement(Xs,{cellKey:this._getCellKey()+"-header",key:"$header"},it.createElement(kt,{onLayout:this._onLayoutHeader,style:[c,this.props.ListHeaderComponentStyle]},h)))}var g=this.props.getItemCount(a);if(g===0&&n){var v=it.isValidElement(n)?n:it.createElement(n,null);p.push(it.createElement(Xs,{cellKey:this._getCellKey()+"-empty",key:"$empty"},it.cloneElement(v,{onLayout:ee=>{this._onLayoutEmpty(ee),v.props.onLayout&&v.props.onLayout(ee)},style:[c,v.props.style]})))}if(g>0){i1=!1,a1="";for(var w=this._getSpacerKey(!s),_=this.state.renderMask.enumerateRegions(),y=xK(_,ee=>ee.isSpacer),x=Uo(_),S;!(S=x()).done;){var T=S.value;if(T.isSpacer){if(this.props.disableVirtualization)continue;var I=T===y,R=I&&!this.props.getItemLayout,D=R?Zw(T.first-1,T.last,this._highestMeasuredFrameIndex):T.last,z=this.__getFrameMetricsApprox(T.first,this.props),U=this.__getFrameMetricsApprox(D,this.props),A=U.offset+U.length-z.offset;p.push(it.createElement(kt,{key:"$spacer-"+T.first,style:{[w]:A}}))}else this._pushCells(p,m,f,T.first,T.last,c)}!this._hasWarned.keys&&i1&&(console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.",a1),this._hasWarned.keys=!0)}if(r){var te=it.isValidElement(r)?r:it.createElement(r,null);p.push(it.createElement(Xs,{cellKey:this._getFooterCellKey(),key:"$footer"},it.createElement(kt,{onLayout:this._onLayoutFooter,style:[c,this.props.ListFooterComponentStyle]},te)))}var Z=Te(Te({},this.props),{},{onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout,onScroll:this._onScroll,onScrollBeginDrag:this._onScrollBeginDrag,onScrollEndDrag:this._onScrollEndDrag,onMomentumScrollBegin:this._onMomentumScrollBegin,onMomentumScrollEnd:this._onMomentumScrollEnd,scrollEventThrottle:yK(this.props.scrollEventThrottle),invertStickyHeaders:this.props.invertStickyHeaders!==void 0?this.props.invertStickyHeaders:this.props.inverted,stickyHeaderIndices:m,style:c?[c,this.props.style]:this.props.style});this._hasMore=this.state.cellsAroundViewport.last<g-1;var G=it.createElement(jI,{value:{cellKey:null,getScrollMetrics:this._getScrollMetrics,horizontal:yl(this.props.horizontal),getOutermostParentListRef:this._getOutermostParentListRef,registerAsNestedChild:this._registerAsNestedChild,unregisterAsNestedChild:this._unregisterAsNestedChild}},it.cloneElement((this.props.renderScrollComponent||this._defaultRenderScrollComponent)(Z),{ref:this._captureScrollRef},p)),ie=G;return this.props.debug?it.createElement(kt,{style:yo.debug},ie,this._renderDebugOverlay()):ie}componentDidUpdate(t){var n=this.props,r=n.data,o=n.extraData;(r!==t.data||o!==t.extraData)&&this._viewabilityTuples.forEach(a=>{a.viewabilityHelper.resetViewableIndices()});var i=this._hiPriInProgress;this._scheduleCellsToRenderUpdate(),i&&(this._hiPriInProgress=!1)}_computeBlankness(){this._fillRateHelper.computeBlankness(this.props,this.state.cellsAroundViewport,this._scrollMetrics)}_onCellFocusCapture(t){this._lastFocusedCellKey=t,this._updateCellsToRender()}_triggerRemeasureForChildListsInCell(t){this._nestedChildLists.forEachInCell(t,n=>{n.measureLayoutRelativeToContainingList()})}measureLayoutRelativeToContainingList(){try{if(!this._scrollRef)return;this._scrollRef.measureLayout(this.context.getOutermostParentListRef().getScrollRef(),(t,n,r,o)=>{this._offsetFromParentVirtualizedList=this._selectOffset({x:t,y:n}),this._scrollMetrics.contentLength=this._selectLength({width:r,height:o});var i=this._convertParentScrollMetrics(this.context.getScrollMetrics()),a=this._scrollMetrics.visibleLength!==i.visibleLength||this._scrollMetrics.offset!==i.offset;a&&(this._scrollMetrics.visibleLength=i.visibleLength,this._scrollMetrics.offset=i.offset,this._nestedChildLists.forEach(s=>{s.measureLayoutRelativeToContainingList()}))},t=>{console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.")})}catch(t){console.warn("measureLayoutRelativeToContainingList threw an error",t.stack)}}_getFooterCellKey(){return this._getCellKey()+"-footer"}_renderDebugOverlay(){for(var t=this._scrollMetrics.visibleLength/(this._scrollMetrics.contentLength||1),n=[],r=this.props.getItemCount(this.props.data),o=0;o<r;o++){var i=this.__getFrameMetricsApprox(o,this.props);i.inLayout&&n.push(i)}var a=this.__getFrameMetricsApprox(this.state.cellsAroundViewport.first,this.props).offset,s=this.__getFrameMetricsApprox(this.state.cellsAroundViewport.last,this.props),c=s.offset+s.length-a,p=this._scrollMetrics.offset,f=this._scrollMetrics.visibleLength;return it.createElement(kt,{style:[yo.debugOverlayBase,yo.debugOverlay]},n.map((m,h)=>it.createElement(kt,{key:"f"+h,style:[yo.debugOverlayBase,yo.debugOverlayFrame,{top:m.offset*t,height:m.length*t}]})),it.createElement(kt,{style:[yo.debugOverlayBase,yo.debugOverlayFrameLast,{top:a*t,height:c*t}]}),it.createElement(kt,{style:[yo.debugOverlayBase,yo.debugOverlayFrameVis,{top:p*t,height:f*t}]}))}_selectLength(t){return yl(this.props.horizontal)?t.width:t.height}_selectOffset(t){return yl(this.props.horizontal)?t.x:t.y}_maybeCallOnEdgeReached(){var t=this.props,n=t.data,r=t.getItemCount,o=t.onStartReached,i=t.onStartReachedThreshold,a=t.onEndReached,s=t.onEndReachedThreshold,c=t.initialScrollIndex,p=this._scrollMetrics,f=p.contentLength,m=p.visibleLength,h=p.offset,g=h,v=f-m-h;g<KI&&(g=0),v<KI&&(v=0);var w=2,_=i!=null?i*m:w,y=s!=null?s*m:w,x=g<=_,S=v<=y;a&&this.state.cellsAroundViewport.last===r(n)-1&&S&&this._scrollMetrics.contentLength!==this._sentEndForContentLength?(this._sentEndForContentLength=this._scrollMetrics.contentLength,a({distanceFromEnd:v})):o!=null&&this.state.cellsAroundViewport.first===0&&x&&this._scrollMetrics.contentLength!==this._sentStartForContentLength?(!c||this._scrollMetrics.timestamp!==0)&&(this._sentStartForContentLength=this._scrollMetrics.contentLength,o({distanceFromStart:g})):(this._sentStartForContentLength=x?this._sentStartForContentLength:0,this._sentEndForContentLength=S?this._sentEndForContentLength:0)}_scheduleCellsToRenderUpdate(){var t=this.state.cellsAroundViewport,n=t.first,r=t.last,o=this._scrollMetrics,i=o.offset,a=o.visibleLength,s=o.velocity,c=this.props.getItemCount(this.props.data),p=!1,f=vK(this.props.onStartReachedThreshold),m=$I(this.props.onEndReachedThreshold);if(n>0){var h=i-this.__getFrameMetricsApprox(n,this.props).offset;p=h<0||s<-2&&h<GI(f,a)}if(!p&&r>=0&&r<c-1){var g=this.__getFrameMetricsApprox(r,this.props).offset-(i+a);p=g<0||s>2&&g<GI(m,a)}if(p&&(this._averageCellLength||this.props.getItemLayout)&&!this._hiPriInProgress){this._hiPriInProgress=!0,this._updateCellsToRenderBatcher.dispose({abort:!0}),this._updateCellsToRender();return}else this._updateCellsToRenderBatcher.schedule()}_updateViewableItems(t,n){this._viewabilityTuples.forEach(r=>{r.viewabilityHelper.onUpdate(t,this._scrollMetrics.offset,this._scrollMetrics.visibleLength,this._getFrameMetrics,this._createViewToken,r.onViewableItemsChanged,n)})}};ng.contextType=Ys;var yo=nn.create({verticallyInverted:{transform:"scaleY(-1)"},horizontallyInverted:{transform:"scaleX(-1)"},debug:{flex:1},debugOverlayBase:{position:"absolute",top:0,right:0},debugOverlay:{bottom:0,width:20,borderColor:"blue",borderWidth:1},debugOverlayFrame:{left:0,backgroundColor:"orange"},debugOverlayFrameLast:{left:0,borderColor:"green",borderWidth:2},debugOverlayFrameVis:{left:0,borderColor:"red",borderWidth:2}}),XI=ng;var ZI=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function wK(e,t){return!!(e===t||ZI(e)&&ZI(t))}function kK(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!wK(e[n],t[n]))return!1;return!0}function JI(e,t){t===void 0&&(t=kK);var n=null;function r(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];if(n&&n.lastThis===this&&t(o,n.lastArgs))return n.lastResult;var a=e.apply(this,o);return n={lastResult:a,lastArgs:o,lastThis:this},a}return r.clear=function(){n=null},r}var SK=["numColumns","columnWrapperStyle","removeClippedSubviews","strictMode"];function _K(e){return e??Lh.OS==="android"}function xl(e){return e??1}function CK(e){return typeof Object(e).length=="number"}var s1=class extends _i.PureComponent{scrollToEnd(t){this._listRef&&this._listRef.scrollToEnd(t)}scrollToIndex(t){this._listRef&&this._listRef.scrollToIndex(t)}scrollToItem(t){this._listRef&&this._listRef.scrollToItem(t)}scrollToOffset(t){this._listRef&&this._listRef.scrollToOffset(t)}recordInteraction(){this._listRef&&this._listRef.recordInteraction()}flashScrollIndicators(){this._listRef&&this._listRef.flashScrollIndicators()}getScrollResponder(){if(this._listRef)return this._listRef.getScrollResponder()}getNativeScrollRef(){if(this._listRef)return this._listRef.getScrollRef()}getScrollableNode(){if(this._listRef)return this._listRef.getScrollableNode()}constructor(t){super(t),this._virtualizedListPairs=[],this._captureRef=n=>{this._listRef=n},this._getItem=(n,r)=>{var o=xl(this.props.numColumns);if(o>1){for(var i=[],a=0;a<o;a++){var s=r*o+a;if(s<n.length){var c=n[s];i.push(c)}}return i}else return n[r]},this._getItemCount=n=>{if(n!=null&&CK(n)){var r=xl(this.props.numColumns);return r>1?Math.ceil(n.length/r):n.length}else return 0},this._keyExtractor=(n,r)=>{var o,i=xl(this.props.numColumns),a=(o=this.props.keyExtractor)!==null&&o!==void 0?o:Cp;return i>1?((0,Xr.default)(Array.isArray(n),"FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.",i),n.map((s,c)=>a(s,r*i+c)).join(":")):a(n,r)},this._renderer=(n,r,o,i,a)=>{var s=xl(i),c=f=>n?_i.createElement(n,f):r?r(f):null,p=f=>{if(s>1){var m=f.item,h=f.index;return(0,Xr.default)(Array.isArray(m),"Expected array of items with numColumns > 1"),_i.createElement(kt,{style:[EK.row,o]},m.map((g,v)=>{var w=c({item:g,index:h*s+v,separators:f.separators});return w!=null?_i.createElement(_i.Fragment,{key:v},w):null}))}else return c(f)};return n?{ListItemComponent:p}:{renderItem:p}},this._memoizedRenderer=JI(this._renderer),this._checkProps(this.props),this.props.viewabilityConfigCallbackPairs?this._virtualizedListPairs=this.props.viewabilityConfigCallbackPairs.map(n=>({viewabilityConfig:n.viewabilityConfig,onViewableItemsChanged:this._createOnViewableItemsChanged(n.onViewableItemsChanged)})):this.props.onViewableItemsChanged&&this._virtualizedListPairs.push({viewabilityConfig:this.props.viewabilityConfig,onViewableItemsChanged:this._createOnViewableItemsChanged(this.props.onViewableItemsChanged)})}componentDidUpdate(t){(0,Xr.default)(t.numColumns===this.props.numColumns,"Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component."),(0,Xr.default)(t.onViewableItemsChanged===this.props.onViewableItemsChanged,"Changing onViewableItemsChanged on the fly is not supported"),(0,Xr.default)(!sI(t.viewabilityConfig,this.props.viewabilityConfig),"Changing viewabilityConfig on the fly is not supported"),(0,Xr.default)(t.viewabilityConfigCallbackPairs===this.props.viewabilityConfigCallbackPairs,"Changing viewabilityConfigCallbackPairs on the fly is not supported"),this._checkProps(this.props)}_checkProps(t){var n=t.getItem,r=t.getItemCount,o=t.horizontal,i=t.columnWrapperStyle,a=t.onViewableItemsChanged,s=t.viewabilityConfigCallbackPairs,c=xl(this.props.numColumns);(0,Xr.default)(!n&&!r,"FlatList does not support custom data formats."),c>1?(0,Xr.default)(!o,"numColumns does not support horizontal."):(0,Xr.default)(!i,"columnWrapperStyle not supported for single column lists"),(0,Xr.default)(!(a&&s),"FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.")}_pushMultiColumnViewable(t,n){var r,o=xl(this.props.numColumns),i=(r=this.props.keyExtractor)!==null&&r!==void 0?r:Cp;n.item.forEach((a,s)=>{(0,Xr.default)(n.index!=null,"Missing index!");var c=n.index*o+s;t.push(Te(Te({},n),{},{item:a,key:i(a,c),index:c}))})}_createOnViewableItemsChanged(t){return n=>{var r=xl(this.props.numColumns);if(t)if(r>1){var o=[],i=[];n.viewableItems.forEach(a=>this._pushMultiColumnViewable(i,a)),n.changed.forEach(a=>this._pushMultiColumnViewable(o,a)),t({viewableItems:i,changed:o})}else t(n)}}render(){var t=this.props,n=t.numColumns,r=t.columnWrapperStyle,o=t.removeClippedSubviews,i=t.strictMode,a=i===void 0?!1:i,s=bn(t,SK),c=a?this._memoizedRenderer:this._renderer;return _i.createElement(XI,yn({},s,{getItem:this._getItem,getItemCount:this._getItemCount,keyExtractor:this._keyExtractor,ref:this._captureRef,viewabilityConfigCallbackPairs:this._virtualizedListPairs,removeClippedSubviews:_K(o)},c(this.props.ListItemComponent,this.props.renderItem,r,n,this.props.extraData)))}},EK=nn.create({row:{flexDirection:"row"}}),eA=s1;var u1=eA;var wl=Q(Re());var RK=["animating","color","hidesWhenStopped","size","style"],tA=e=>wl.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e}),nA=wl.forwardRef((e,t)=>{var n=e.animating,r=n===void 0?!0:n,o=e.color,i=o===void 0?"#1976D2":o,a=e.hidesWhenStopped,s=a===void 0?!0:a,c=e.size,p=c===void 0?"small":c,f=e.style,m=bn(e,RK),h=wl.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},tA({stroke:i,opacity:.2}),tA({stroke:i,strokeDasharray:80,strokeDashoffset:60}));return wl.createElement(kt,yn({},m,{"aria-valuemax":1,"aria-valuemin":0,ref:t,role:"progressbar",style:[rg.container,f]}),wl.createElement(kt,{children:h,style:[typeof p=="number"?{height:p,width:p}:TK[p],rg.animation,!r&&rg.animationPause,!r&&s&&rg.hidesWhenStopped]}))});nA.displayName="ActivityIndicator";var rg=nn.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),TK=nn.create({small:{width:20,height:20},large:{width:36,height:36}}),c1=nA;var St=Q(Re(),1),Ep=Q(Re(),1),lA=Q(Re(),1),OK={readAheadChars:15,targetBufferChars:15,adjustPercentage:.2,frameLookBackMs:1e4,windowLookBackMs:2e3},PK=({isBehind:e,adjustPercentage:t,isStreamFinished:n})=>n?1:e?1-t:1+t,IK=(e,t,n)=>{let r=[0,...n],o=Math.min(e,r.length),i=Math.min(t,r.length),a=r.slice(-1*o),s=[];if(i>0)for(let f=0;f<a.length-i+1;f++){let m=f+i-1,h=a[m]-a[f];s.push(h)}let c=s.reduce((f,m)=>f+m,0)/s.length;return c>0?i/c:i},AK=(e={})=>{let{frameLookBackMs:t,targetBufferChars:n,readAheadChars:r,adjustPercentage:o,windowLookBackMs:i}={...OK,...e};return({visibleText:a,isStreamFinished:s,visibleTextAll:c,visibleTextLengthsAll:p,frameCount:f,visibleTextIncrements:m,visibleTextLengthTarget:h,startStreamTime:g})=>{let w=(performance.now()-g)/1e3,_=f/w,y=c.length-h,x=Math.ceil(t/(1e3/_)),S=Math.ceil(i/(1e3/_)),T=IK(x,S,p),I=[...m].reverse().findIndex(z=>z>0);I=I===-1?f:I;let R=0,D=r+n;if(!s&&(y<r||a.length===0&&y<D)||h>=c.length)R=0;else{let z=r+n,U=y>z,A=T*PK({adjustPercentage:o,isBehind:U,isStreamFinished:s});A>1?R=I>=A?1:0:R=Math.round(1/A)}return{visibleTextIncrement:R}}},LK=({llmOutput:e,block:t,priority:n})=>{let r=[],o=0;for(;o<e.length;){let i=t.findCompleteMatch(e.slice(o));if(i)r.push({block:t,match:{outputRaw:i.outputRaw,startIndex:o+i.startIndex,endIndex:o+i.endIndex},llmOutput:e,isComplete:!0,priority:n}),o+=i.endIndex;else return r}return r},MK=e=>e.filter(t=>!e.filter(r=>r.priority<t.priority).some(r=>DK(r.match,t.match))),rA=(e,t)=>e.match.startIndex-t.match.startIndex,DK=(e,t)=>e.startIndex>=t.startIndex&&e.startIndex<t.endIndex||e.endIndex>t.startIndex&&e.endIndex<=t.endIndex||t.startIndex>=e.startIndex&&t.startIndex<e.endIndex||t.endIndex>e.startIndex&&t.endIndex<=e.endIndex,NK=({llmOutput:e,blocks:t,currentIndex:n})=>{for(let[r,o]of Array.from(t.entries())){let i=e.slice(n),a=o.findPartialMatch(i);if(a)return{block:o,match:{outputRaw:a.outputRaw,startIndex:a.startIndex+n,endIndex:a.endIndex+n},llmOutput:e,isComplete:!0,priority:r}}},FK=({blockMatches:e,llmOutput:t,fallbackPriority:n,fallbackBlock:r})=>{let o=e.map((a,s)=>{let c=s===0?0:e[s-1].match.endIndex;if(c<a.match.startIndex){let p=t.slice(c,a.match.startIndex);return{block:r,match:{startIndex:c,endIndex:a.match.startIndex,outputRaw:p},priority:n,llmOutput:t,isComplete:!0}}}).filter(a=>a!==void 0),i=e.length>0?e[e.length-1].match.endIndex:0;if(i<t.length){let a=t.slice(i,t.length);o.push({block:r,match:{startIndex:i,endIndex:t.length,outputRaw:a},priority:n,llmOutput:t,isComplete:!1})}return o},zK=({llmOutputRaw:e,matches:t,visibleTextLengthTarget:n,isStreamFinished:r})=>t.reduce((o,i,a)=>{let s=o.map(v=>v.visibleText.length).reduce((v,w)=>v+w,0),c=Math.max(n-s,0),f=!(a===t.length-1)||r,{output:m,visibleText:h}=i.block.lookBack({isComplete:f,visibleTextLengthTarget:c,isStreamFinished:r,output:i.match.outputRaw});h.length>c;let g={...i.match,isComplete:f,block:i.block,priority:i.priority,llmOutput:i.llmOutput,output:m,visibleText:h,isVisible:h.length>0};return[...o,g]},[]),p1=({llmOutput:e,blocks:t,fallbackBlock:n,isStreamFinished:r,visibleTextLengthTarget:o=Number.MAX_SAFE_INTEGER})=>{let i=t.flatMap((f,m)=>LK({llmOutput:e,block:f,priority:m})),a=MK(i);a.sort(rA);let s=a.length>0?a[a.length-1].match.endIndex:0,c=r?void 0:NK({llmOutput:e,currentIndex:s,blocks:t});c&&a.push(c);let p=FK({blockMatches:a,llmOutput:e,fallbackPriority:t.length,fallbackBlock:n});for(let f of p)a.push(f);return a.sort(rA),zK({llmOutputRaw:e,matches:a,isStreamFinished:r,visibleTextLengthTarget:o})},f1=e=>e.map(t=>t.visibleText).join(""),oA=e=>e.map(t=>t.output).join(""),iA={blockMatches:[],isFinished:!1,visibleText:""},aA=({llmOutput:e,isStreamFinished:t,blocks:n=[],fallbackBlock:r,throttle:o=AK(),onFinish:i=()=>null})=>{let a=(0,St.useRef)(performance.now()),s=(0,St.useRef)(performance.now()),c=(0,St.useRef)(),p=(0,St.useRef)(),f=(0,St.useRef)(0),m=(0,St.useRef)(),h=(0,St.useRef)(),g=(0,St.useRef)([]),v=(0,St.useRef)([]),w=(0,St.useRef)([]),_=(0,St.useRef)(0),y=(0,St.useMemo)(()=>p1({llmOutput:e,blocks:n,fallbackBlock:r,isStreamFinished:t}),[e,t]),[{blockMatches:x,...S},T]=(0,St.useState)({...iA,finishCount:0,blockMatches:y}),I=(0,St.useCallback)(()=>{T(z=>({...z,...iA})),a.current=performance.now(),m.current=void 0,h.current=void 0,g.current=[],v.current=[],w.current=[],_.current=0,f.current=0,p.current&&(cancelAnimationFrame(p.current),p.current=void 0)},[T]),R=(0,St.useCallback)(()=>{I(),setTimeout(()=>{c.current&&(p.current=requestAnimationFrame(c.current))},10)},[I]),D=z=>{if(!c.current)return;let U=p1({llmOutput:e,blocks:n,fallbackBlock:r,isStreamFinished:t}),A=f1(x),te=oA(x),Z=f1(U),G=oA(U);t||(g.current.push(Z.length),v.current.push(G.length));let ie=A===Z&&t;if(ie){p.current=void 0,T(ce=>({...ce,blockMatches:x,isFinished:ie,finishCount:ce.finishCount+1,visibleText:A})),i();return}let ee=t?[...g.current,Z.length]:g.current,fe=t?[...v.current,G.length]:v.current,{visibleTextIncrement:Me}=o({outputRaw:e,outputRendered:te,outputAll:G,visibleText:A,visibleTextAll:Z,startStreamTime:a.current,isStreamFinished:t,frameCount:f.current,frameTime:z,frameTimePrevious:h.current,finishStreamTime:m.current,visibleTextLengthsAll:ee,outputLengths:fe,visibleTextIncrements:w.current,visibleTextLengthTarget:_.current});if(Me<0)throw new Error("throttle returned negative visibleTextIncrement");if(w.current.push(Me),_.current=_.current+Me,_.current>A.length){let ce=p1({llmOutput:e,blocks:n,fallbackBlock:r,isStreamFinished:t,visibleTextLengthTarget:_.current}),Le=f1(ce);s.current=performance.now(),T(P=>({...P,blockMatches:ce,isFinished:ie,visibleText:Le}))}p.current=requestAnimationFrame(c.current),h.current=z,f.current=f.current+1};return(0,St.useEffect)(()=>{c.current=D}),(0,St.useEffect)(()=>{c.current=D,!p.current&&e&&e.length>0?p.current=requestAnimationFrame(c.current):w.current.length>0&&e.length===0&&I()},[e]),(0,St.useEffect)(()=>{},[]),(0,St.useEffect)(()=>{!m.current&&t&&(m.current=performance.now())},[t]),{blockMatches:x,restart:R,...S}};var BK={autoStartDelayMs:0,autoStart:!0,delayMultiplier:1,startIndex:0};var jle={delayMsProbabilities:[{delayMs:10,prob:.4},{delayMs:70,prob:.3},{delayMs:250,prob:.2},{delayMs:600,prob:.1}],tokenCharsProbabilities:[{tokenChars:1,prob:.5},{tokenChars:2,prob:.3},{tokenChars:3,prob:.2}],...BK};function sA(e,t){let n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var UK=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,jK=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,HK={};function og(e,t){return((t||HK).jsx?jK:UK).test(e)}var WK=/[ \t\n\f\r]/g;function d1(e){return typeof e=="object"?e.type==="text"?uA(e.value):!1:uA(e)}function uA(e){return e.replace(WK,"")===""}var Ci=class{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}};Ci.prototype.property={};Ci.prototype.normal={};Ci.prototype.space=null;function m1(e,t){let n={},r={},o=-1;for(;++o<e.length;)Object.assign(n,e[o].property),Object.assign(r,e[o].normal);return new Ci(n,r,t)}function Rp(e){return e.toLowerCase()}var Un=class{constructor(t,n){this.property=t,this.attribute=n}};Un.prototype.space=null;Un.prototype.boolean=!1;Un.prototype.booleanish=!1;Un.prototype.overloadedBoolean=!1;Un.prototype.number=!1;Un.prototype.commaSeparated=!1;Un.prototype.spaceSeparated=!1;Un.prototype.commaOrSpaceSeparated=!1;Un.prototype.mustUseProperty=!1;Un.prototype.defined=!1;var Tp={};g0(Tp,{boolean:()=>Pe,booleanish:()=>zt,commaOrSpaceSeparated:()=>mr,commaSeparated:()=>xa,number:()=>Y,overloadedBoolean:()=>h1,spaceSeparated:()=>et});var qK=0,Pe=kl(),zt=kl(),h1=kl(),Y=kl(),et=kl(),xa=kl(),mr=kl();function kl(){return 2**++qK}var g1=Object.keys(Tp),Sl=class extends Un{constructor(t,n,r,o){let i=-1;if(super(t,n),cA(this,"space",o),typeof r=="number")for(;++i<g1.length;){let a=g1[i];cA(this,g1[i],(r&Tp[a])===Tp[a])}}};Sl.prototype.defined=!0;function cA(e,t,n){n&&(e[t]=n)}var VK={}.hasOwnProperty;function Zr(e){let t={},n={},r;for(r in e.properties)if(VK.call(e.properties,r)){let o=e.properties[r],i=new Sl(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Rp(r)]=r,n[Rp(i.attribute)]=r}return new Ci(t,n,e.space)}var b1=Zr({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});var v1=Zr({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function ig(e,t){return t in e?e[t]:t}function ag(e,t){return ig(e,t.toLowerCase())}var y1=Zr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:ag,properties:{xmlns:null,xmlnsXLink:null}});var x1=Zr({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:zt,ariaAutoComplete:null,ariaBusy:zt,ariaChecked:zt,ariaColCount:Y,ariaColIndex:Y,ariaColSpan:Y,ariaControls:et,ariaCurrent:null,ariaDescribedBy:et,ariaDetails:null,ariaDisabled:zt,ariaDropEffect:et,ariaErrorMessage:null,ariaExpanded:zt,ariaFlowTo:et,ariaGrabbed:zt,ariaHasPopup:null,ariaHidden:zt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:et,ariaLevel:Y,ariaLive:null,ariaModal:zt,ariaMultiLine:zt,ariaMultiSelectable:zt,ariaOrientation:null,ariaOwns:et,ariaPlaceholder:null,ariaPosInSet:Y,ariaPressed:zt,ariaReadOnly:zt,ariaRelevant:null,ariaRequired:zt,ariaRoleDescription:et,ariaRowCount:Y,ariaRowIndex:Y,ariaRowSpan:Y,ariaSelected:zt,ariaSetSize:Y,ariaSort:null,ariaValueMax:Y,ariaValueMin:Y,ariaValueNow:Y,ariaValueText:null,role:null}});var pA=Zr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:ag,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:xa,acceptCharset:et,accessKey:et,action:null,allow:null,allowFullScreen:Pe,allowPaymentRequest:Pe,allowUserMedia:Pe,alt:null,as:null,async:Pe,autoCapitalize:null,autoComplete:et,autoFocus:Pe,autoPlay:Pe,blocking:et,capture:null,charSet:null,checked:Pe,cite:null,className:et,cols:Y,colSpan:null,content:null,contentEditable:zt,controls:Pe,controlsList:et,coords:Y|xa,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Pe,defer:Pe,dir:null,dirName:null,disabled:Pe,download:h1,draggable:zt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Pe,formTarget:null,headers:et,height:Y,hidden:Pe,high:Y,href:null,hrefLang:null,htmlFor:et,httpEquiv:et,id:null,imageSizes:null,imageSrcSet:null,inert:Pe,inputMode:null,integrity:null,is:null,isMap:Pe,itemId:null,itemProp:et,itemRef:et,itemScope:Pe,itemType:et,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Pe,low:Y,manifest:null,max:null,maxLength:Y,media:null,method:null,min:null,minLength:Y,multiple:Pe,muted:Pe,name:null,nonce:null,noModule:Pe,noValidate:Pe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Pe,optimum:Y,pattern:null,ping:et,placeholder:null,playsInline:Pe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Pe,referrerPolicy:null,rel:et,required:Pe,reversed:Pe,rows:Y,rowSpan:Y,sandbox:et,scope:null,scoped:Pe,seamless:Pe,selected:Pe,shadowRootClonable:Pe,shadowRootDelegatesFocus:Pe,shadowRootMode:null,shape:null,size:Y,sizes:null,slot:null,span:Y,spellCheck:zt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Y,step:null,style:null,tabIndex:Y,target:null,title:null,translate:null,type:null,typeMustMatch:Pe,useMap:null,value:zt,width:Y,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:et,axis:null,background:null,bgColor:null,border:Y,borderColor:null,bottomMargin:Y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Pe,declare:Pe,event:null,face:null,frame:null,frameBorder:null,hSpace:Y,leftMargin:Y,link:null,longDesc:null,lowSrc:null,marginHeight:Y,marginWidth:Y,noResize:Pe,noHref:Pe,noShade:Pe,noWrap:Pe,object:null,profile:null,prompt:null,rev:null,rightMargin:Y,rules:null,scheme:null,scrolling:zt,standby:null,summary:null,text:null,topMargin:Y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Y,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Pe,disableRemotePlayback:Pe,prefix:null,property:null,results:Y,security:null,unselectable:null}});var fA=Zr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:ig,properties:{about:mr,accentHeight:Y,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Y,amplitude:Y,arabicForm:null,ascent:Y,attributeName:null,attributeType:null,azimuth:Y,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Y,by:null,calcMode:null,capHeight:Y,className:et,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Y,diffuseConstant:Y,direction:null,display:null,dur:null,divisor:Y,dominantBaseline:null,download:Pe,dx:null,dy:null,edgeMode:null,editable:null,elevation:Y,enableBackground:null,end:null,event:null,exponent:Y,externalResourcesRequired:null,fill:null,fillOpacity:Y,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:xa,g2:xa,glyphName:xa,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Y,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Y,horizOriginX:Y,horizOriginY:Y,id:null,ideographic:Y,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Y,k:Y,k1:Y,k2:Y,k3:Y,k4:Y,kernelMatrix:mr,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Y,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Y,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Y,overlineThickness:Y,paintOrder:null,panose1:null,path:null,pathLength:Y,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:et,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Y,pointsAtY:Y,pointsAtZ:Y,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mr,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mr,rev:mr,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mr,requiredFeatures:mr,requiredFonts:mr,requiredFormats:mr,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Y,specularExponent:Y,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Y,strikethroughThickness:Y,string:null,stroke:null,strokeDashArray:mr,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Y,strokeOpacity:Y,strokeWidth:null,style:null,surfaceScale:Y,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mr,tabIndex:Y,tableValues:null,target:null,targetX:Y,targetY:Y,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mr,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Y,underlineThickness:Y,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Y,values:null,vAlphabetic:Y,vMathematical:Y,vectorEffect:null,vHanging:Y,vIdeographic:Y,version:null,vertAdvY:Y,vertOriginX:Y,vertOriginY:Y,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Y,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}});var KK=/^data[-\w.:]+$/i,dA=/-[a-z]/g,$K=/[A-Z]/g;function w1(e,t){let n=Rp(t),r=t,o=Un;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&KK.test(t)){if(t.charAt(4)==="-"){let i=t.slice(5).replace(dA,QK);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{let i=t.slice(4);if(!dA.test(i)){let a=i.replace($K,GK);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}o=Sl}return new o(r,t)}function GK(e){return"-"+e.toLowerCase()}function QK(e){return e.charAt(1).toUpperCase()}var k1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var mA=m1([v1,b1,y1,x1,pA],"html"),lg=m1([v1,b1,y1,x1,fA],"svg");function hA(e){return e.join(" ").trim()}var S1=Q(kA(),1),SA=S1.default.default||S1.default;var sg=_A("end"),Zs=_A("start");function _A(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function _1(e){let t=Zs(e),n=sg(e);if(t&&n)return{start:t,end:n}}function wa(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?CA(e.position):"start"in e||"end"in e?CA(e):"line"in e||"column"in e?C1(e):""}function C1(e){return EA(e&&e.line)+":"+EA(e&&e.column)}function CA(e){return C1(e&&e.start)+"-"+C1(e&&e.end)}function EA(e){return e&&typeof e=="number"?e:1}var qt=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",i={},a=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?o=t:!i.cause&&t&&(a=!0,o=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){let c=r.indexOf(":");c===-1?i.ruleId=r:(i.source=r.slice(0,c),i.ruleId=r.slice(c+1))}if(!i.place&&i.ancestors&&i.ancestors){let c=i.ancestors[i.ancestors.length-1];c&&(i.place=c.position)}let s=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=s?s.line:void 0,this.name=wa(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}};qt.prototype.file="";qt.prototype.name="";qt.prototype.reason="";qt.prototype.message="";qt.prototype.stack="";qt.prototype.column=void 0;qt.prototype.line=void 0;qt.prototype.ancestors=void 0;qt.prototype.cause=void 0;qt.prototype.fatal=void 0;qt.prototype.place=void 0;qt.prototype.ruleId=void 0;qt.prototype.source=void 0;var E1={}.hasOwnProperty,u$=new Map,c$=/[A-Z]/g,p$=/-([a-z])/g,f$=new Set(["table","tbody","thead","tfoot","tr"]),d$=new Set(["td","th"]),RA="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function R1(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=w$(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=x$(n,t.jsx,t.jsxs)}let o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?lg:mA,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=TA(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function TA(e,t,n){if(t.type==="element")return m$(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return h$(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return b$(e,t,n);if(t.type==="mdxjsEsm")return g$(e,t);if(t.type==="root")return v$(e,t,n);if(t.type==="text")return y$(e,t)}function m$(e,t,n){let r=e.schema,o=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=lg,e.schema=o),e.ancestors.push(t);let i=PA(e,t.tagName,!1),a=k$(e,t),s=O1(e,t);return f$.has(t.tagName)&&(s=s.filter(function(c){return typeof c=="string"?!d1(c):!0})),OA(e,a,i,t),T1(a,s),e.ancestors.pop(),e.schema=r,e.create(t,i,a,n)}function h$(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Pp(e,t.position)}function g$(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Pp(e,t.position)}function b$(e,t,n){let r=e.schema,o=r;t.name==="svg"&&r.space==="html"&&(o=lg,e.schema=o),e.ancestors.push(t);let i=t.name===null?e.Fragment:PA(e,t.name,!0),a=S$(e,t),s=O1(e,t);return OA(e,a,i,t),T1(a,s),e.ancestors.pop(),e.schema=r,e.create(t,i,a,n)}function v$(e,t,n){let r={};return T1(r,O1(e,t)),e.create(t,e.Fragment,r,n)}function y$(e,t){return t.value}function OA(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function T1(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function x$(e,t,n){return r;function r(o,i,a,s){let p=Array.isArray(a.children)?n:t;return s?p(i,a,s):p(i,a)}}function w$(e,t){return n;function n(r,o,i,a){let s=Array.isArray(i.children),c=Zs(r);return t(o,i,a,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function k$(e,t){let n={},r,o;for(o in t.properties)if(o!=="children"&&E1.call(t.properties,o)){let i=_$(e,o,t.properties[o]);if(i){let[a,s]=i;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&d$.has(t.tagName)?r=s:n[a]=s}}if(r){let i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function S$(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let i=r.data.estree.body[0];i.type;let a=i.expression;a.type;let s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Pp(e,t.position);else{let o=r.name,i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let s=r.value.data.estree.body[0];s.type,i=e.evaluater.evaluateExpression(s.expression)}else Pp(e,t.position);else i=r.value===null?!0:r.value;n[o]=i}return n}function O1(e,t){let n=[],r=-1,o=e.passKeys?new Map:u$;for(;++r<t.children.length;){let i=t.children[r],a;if(e.passKeys){let c=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(c){let p=o.get(c)||0;a=c+"-"+p,o.set(c,p+1)}}let s=TA(e,i,a);s!==void 0&&n.push(s)}return n}function _$(e,t,n){let r=w1(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?sA(n):hA(n)),r.property==="style"){let o=typeof n=="object"?n:C$(e,String(n));return e.stylePropertyNameCase==="css"&&(o=E$(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?k1[r.property]||r.property:r.attribute,n]}}function C$(e,t){let n={};try{SA(t,r)}catch(o){if(!e.ignoreInvalidStyle){let i=o,a=new qt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=RA+"#cannot-parse-style-attribute",a}}return n;function r(o,i){let a=o;a.slice(0,2)!=="--"&&(a.slice(0,4)==="-ms-"&&(a="ms-"+a.slice(4)),a=a.replace(p$,T$)),n[a]=i}}function PA(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let o=t.split("."),i=-1,a;for(;++i<o.length;){let s=og(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(i&&s.type==="Literal"),optional:!1}:s}r=a}else r=og(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let o=r.value;return E1.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);Pp(e)}function Pp(e,t){let n=new qt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=RA+"#cannot-handle-mdx-estrees-without-createevaluater",n}function E$(e){let t={},n;for(n in e)E1.call(e,n)&&(t[R$(n)]=e[n]);return t}function R$(e){let t=e.replace(c$,O$);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function T$(e,t){return t.toUpperCase()}function O$(e){return"-"+e.toLowerCase()}var Ip={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var ou=Q(xt(),1);var P$={};function Cl(e,t){let n=t||P$,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,o=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return AA(e,r,o)}function AA(e,t,n){if(I$(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return IA(e.children,t,n)}return Array.isArray(e)?IA(e,t,n):""}function IA(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=AA(e[o],t,n);return r.join("")}function I$(e){return!!(e&&typeof e=="object")}var LA=document.createElement("i");function Js(e){let t="&"+e+";";LA.innerHTML=t;let n=LA.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Yt(e,t,n,r){let o=e.length,i=0,a;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);i<r.length;)a=r.slice(i,i+1e4),a.unshift(t,0),e.splice(...a),i+=1e4,t+=1e4}function Jn(e,t){return e.length>0?(Yt(e,e.length,0,t),e):t}var MA={}.hasOwnProperty;function ug(e){let t={},n=-1;for(;++n<e.length;)A$(t,e[n]);return t}function A$(e,t){let n;for(n in t){let o=(MA.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){MA.call(o,a)||(o[a]=[]);let s=i[a];L$(o[a],Array.isArray(s)?s:s?[s]:[])}}}function L$(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Yt(e,0,0,r)}function cg(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function jn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var rn=ka(/[A-Za-z]/),Bt=ka(/[\dA-Za-z]/),DA=ka(/[#-'*+\--9=?A-Z^-~]/);function El(e){return e!==null&&(e<32||e===127)}var Ap=ka(/\d/),NA=ka(/[\dA-Fa-f]/),FA=ka(/[!-/:-@[-`{-~]/);function oe(e){return e!==null&&e<-2}function Ue(e){return e!==null&&(e<0||e===32)}function ge(e){return e===-2||e===-1||e===32}var Rl=ka(/\p{P}|\p{S}/u),Ho=ka(/\s/);function ka(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Jr(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let i=e.charCodeAt(n),a="";if(i===37&&Bt(e.charCodeAt(n+1))&&Bt(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){let s=e.charCodeAt(n+1);i<56320&&s>56319&&s<57344?(a=String.fromCharCode(i,s),o=1):a="\uFFFD"}else a=String.fromCharCode(i);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+o+1,a=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function me(e,t,n,r){let o=r?r-1:Number.POSITIVE_INFINITY,i=0;return a;function a(c){return ge(c)?(e.enter(n),s(c)):t(c)}function s(c){return ge(c)&&i++<o?(e.consume(c),s):(e.exit(n),t(c))}}var zA={tokenize:M$};function M$(e){let t=e.attempt(this.parser.constructs.contentInitial,r,o),n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),me(e,t,"linePrefix")}function o(s){return e.enter("paragraph"),i(s)}function i(s){let c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return oe(s)?(e.consume(s),e.exit("chunkText"),i):(e.consume(s),a)}}var UA={tokenize:D$},BA={tokenize:N$};function D$(e){let t=this,n=[],r=0,o,i,a;return s;function s(S){if(r<n.length){let T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,c,p)(S)}return p(S)}function c(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&x();let T=t.events.length,I=T,R;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){R=t.events[I][1].end;break}y(r);let D=T;for(;D<t.events.length;)t.events[D][1].end=Object.assign({},R),D++;return Yt(t.events,I+1,0,t.events.slice(T)),t.events.length=D,p(S)}return s(S)}function p(S){if(r===n.length){if(!o)return h(S);if(o.currentConstruct&&o.currentConstruct.concrete)return v(S);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(BA,f,m)(S)}function f(S){return o&&x(),y(r),h(S)}function m(S){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,v(S)}function h(S){return t.containerState={},e.attempt(BA,g,v)(S)}function g(S){return r++,n.push([t.currentConstruct,t.containerState]),h(S)}function v(S){if(S===null){o&&x(),y(0),e.consume(S);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),w(S)}function w(S){if(S===null){_(e.exit("chunkFlow"),!0),y(0),e.consume(S);return}return oe(S)?(e.consume(S),_(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(S),w)}function _(S,T){let I=t.sliceStream(S);if(T&&I.push(null),S.previous=i,i&&(i.next=S),i=S,o.defineSkip(S.start),o.write(I),t.parser.lazy[S.start.line]){let R=o.events.length;for(;R--;)if(o.events[R][1].start.offset<a&&(!o.events[R][1].end||o.events[R][1].end.offset>a))return;let D=t.events.length,z=D,U,A;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(U){A=t.events[z][1].end;break}U=!0}for(y(r),R=D;R<t.events.length;)t.events[R][1].end=Object.assign({},A),R++;Yt(t.events,z+1,0,t.events.slice(D)),t.events.length=R}}function y(S){let T=n.length;for(;T-- >S;){let I=n[T];t.containerState=I[1],I[0].exit.call(t,e)}n.length=S}function x(){o.write([null]),i=void 0,o=void 0,t.containerState._closeFlow=void 0}}function N$(e,t,n){return me(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function eu(e){if(e===null||Ue(e)||Ho(e))return 1;if(Rl(e))return 2}function Sa(e,t,n){let r=[],o=-1;for(;++o<e.length;){let i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}var Lp={name:"attention",tokenize:z$,resolveAll:F$};function F$(e,t){let n=-1,r,o,i,a,s,c,p,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let m=Object.assign({},e[r][1].end),h=Object.assign({},e[n][1].start);jA(m,-c),jA(h,c),a={type:c>1?"strongSequence":"emphasisSequence",start:m,end:Object.assign({},e[r][1].end)},s={type:c>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:h},i={type:c>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o={type:c>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},s.end)},e[r][1].end=Object.assign({},a.start),e[n][1].start=Object.assign({},s.end),p=[],e[r][1].end.offset-e[r][1].start.offset&&(p=Jn(p,[["enter",e[r][1],t],["exit",e[r][1],t]])),p=Jn(p,[["enter",o,t],["enter",a,t],["exit",a,t],["enter",i,t]]),p=Jn(p,Sa(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),p=Jn(p,[["exit",i,t],["enter",s,t],["exit",s,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,p=Jn(p,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,Yt(e,r-1,n-r+3,p),n=r+p.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function z$(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=eu(r),i;return a;function a(c){return i=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===i)return e.consume(c),s;let p=e.exit("attentionSequence"),f=eu(c),m=!f||f===2&&o||n.includes(c),h=!o||o===2&&f||n.includes(r);return p._open=!!(i===42?m:m&&(o||!h)),p._close=!!(i===42?h:h&&(f||!m)),t(c)}}function jA(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var P1={name:"autolink",tokenize:B$};function B$(e,t,n){let r=0;return o;function o(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(g){return rn(g)?(e.consume(g),a):g===64?n(g):p(g)}function a(g){return g===43||g===45||g===46||Bt(g)?(r=1,s(g)):p(g)}function s(g){return g===58?(e.consume(g),r=0,c):(g===43||g===45||g===46||Bt(g))&&r++<32?(e.consume(g),s):(r=0,p(g))}function c(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):g===null||g===32||g===60||El(g)?n(g):(e.consume(g),c)}function p(g){return g===64?(e.consume(g),f):DA(g)?(e.consume(g),p):n(g)}function f(g){return Bt(g)?m(g):n(g)}function m(g){return g===46?(e.consume(g),r=0,f):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):h(g)}function h(g){if((g===45||Bt(g))&&r++<63){let v=g===45?h:m;return e.consume(g),v}return n(g)}}var Wo={tokenize:U$,partial:!0};function U$(e,t,n){return r;function r(i){return ge(i)?me(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||oe(i)?t(i):n(i)}}var pg={name:"blockQuote",tokenize:j$,continuation:{tokenize:H$},exit:W$};function j$(e,t,n){let r=this;return o;function o(a){if(a===62){let s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return n(a)}function i(a){return ge(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function H$(e,t,n){let r=this;return o;function o(a){return ge(a)?me(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):i(a)}function i(a){return e.attempt(pg,t,n)(a)}}function W$(e){e.exit("blockQuote")}var fg={name:"characterEscape",tokenize:q$};function q$(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return FA(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}var dg={name:"characterReference",tokenize:V$};function V$(e,t,n){let r=this,o=0,i,a;return s;function s(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),c}function c(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),i=31,a=Bt,f(m))}function p(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=NA,f):(e.enter("characterReferenceValue"),i=7,a=Ap,f(m))}function f(m){if(m===59&&o){let h=e.exit("characterReferenceValue");return a===Bt&&!Js(r.sliceSerialize(h))?n(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(m)&&o++<i?(e.consume(m),f):n(m)}}var HA={tokenize:$$,partial:!0},mg={name:"codeFenced",tokenize:K$,concrete:!0};function K$(e,t,n){let r=this,o={tokenize:I,partial:!0},i=0,a=0,s;return c;function c(R){return p(R)}function p(R){let D=r.events[r.events.length-1];return i=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,s=R,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(R)}function f(R){return R===s?(a++,e.consume(R),f):a<3?n(R):(e.exit("codeFencedFenceSequence"),ge(R)?me(e,m,"whitespace")(R):m(R))}function m(R){return R===null||oe(R)?(e.exit("codeFencedFence"),r.interrupt?t(R):e.check(HA,w,T)(R)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(R))}function h(R){return R===null||oe(R)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(R)):ge(R)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),me(e,g,"whitespace")(R)):R===96&&R===s?n(R):(e.consume(R),h)}function g(R){return R===null||oe(R)?m(R):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(R))}function v(R){return R===null||oe(R)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(R)):R===96&&R===s?n(R):(e.consume(R),v)}function w(R){return e.attempt(o,T,_)(R)}function _(R){return e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),y}function y(R){return i>0&&ge(R)?me(e,x,"linePrefix",i+1)(R):x(R)}function x(R){return R===null||oe(R)?e.check(HA,w,T)(R):(e.enter("codeFlowValue"),S(R))}function S(R){return R===null||oe(R)?(e.exit("codeFlowValue"),x(R)):(e.consume(R),S)}function T(R){return e.exit("codeFenced"),t(R)}function I(R,D,z){let U=0;return A;function A(ee){return R.enter("lineEnding"),R.consume(ee),R.exit("lineEnding"),te}function te(ee){return R.enter("codeFencedFence"),ge(ee)?me(R,Z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ee):Z(ee)}function Z(ee){return ee===s?(R.enter("codeFencedFenceSequence"),G(ee)):z(ee)}function G(ee){return ee===s?(U++,R.consume(ee),G):U>=a?(R.exit("codeFencedFenceSequence"),ge(ee)?me(R,ie,"whitespace")(ee):ie(ee)):z(ee)}function ie(ee){return ee===null||oe(ee)?(R.exit("codeFencedFence"),D(ee)):z(ee)}}}function $$(e,t,n){let r=this;return o;function o(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i)}function i(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}var Mp={name:"codeIndented",tokenize:Q$},G$={tokenize:Y$,partial:!0};function Q$(e,t,n){let r=this;return o;function o(p){return e.enter("codeIndented"),me(e,i,"linePrefix",5)(p)}function i(p){let f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(p):n(p)}function a(p){return p===null?c(p):oe(p)?e.attempt(G$,a,c)(p):(e.enter("codeFlowValue"),s(p))}function s(p){return p===null||oe(p)?(e.exit("codeFlowValue"),a(p)):(e.consume(p),s)}function c(p){return e.exit("codeIndented"),t(p)}}function Y$(e,t,n){let r=this;return o;function o(a){return r.parser.lazy[r.now().line]?n(a):oe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):me(e,i,"linePrefix",5)(a)}function i(a){let s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):oe(a)?o(a):n(a)}}var I1={name:"codeText",tokenize:J$,resolve:X$,previous:Z$};function X$(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function Z$(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function J$(e,t,n){let r=this,o=0,i,a;return s;function s(h){return e.enter("codeText"),e.enter("codeTextSequence"),c(h)}function c(h){return h===96?(e.consume(h),o++,c):(e.exit("codeTextSequence"),p(h))}function p(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),p):h===96?(a=e.enter("codeTextSequence"),i=0,m(h)):oe(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),p):(e.enter("codeTextData"),f(h))}function f(h){return h===null||h===32||h===96||oe(h)?(e.exit("codeTextData"),p(h)):(e.consume(h),f)}function m(h){return h===96?(e.consume(h),i++,m):i===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(a.type="codeTextData",f(h))}}var hg=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let o=n||0;this.setCursor(Math.trunc(t));let i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&Dp(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Dp(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Dp(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);Dp(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Dp(this.left,n.reverse())}}};function Dp(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function gg(e){let t={},n=-1,r,o,i,a,s,c,p,f=new hg(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,i=0,i<c.length&&c[i][1].type==="lineEndingBlank"&&(i+=2),i<c.length&&c[i][1].type==="content"))for(;++i<c.length&&c[i][1].type!=="content";)c[i][1].type==="chunkText"&&(c[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,eG(f,n)),n=t[n],p=!0);else if(r[1]._container){for(i=n,o=void 0;i--&&(a=f.get(i),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(f.get(o)[1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},f.get(o)[1].start),s=f.slice(o,n),s.unshift(r),f.splice(o,n-o+1,s))}}return Yt(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!p}function eG(e,t){let n=e.get(t)[1],r=e.get(t)[2],o=t-1,i=[],a=n._tokenizer||r.parser[n.contentType](n.start),s=a.events,c=[],p={},f,m,h=-1,g=n,v=0,w=0,_=[w];for(;g;){for(;e.get(++o)[1]!==g;);i.push(o),g._tokenizer||(f=r.sliceStream(g),g.next||f.push(null),m&&a.defineSkip(g.start),g._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(f),g._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),m=g,g=g.next}for(g=n;++h<s.length;)s[h][0]==="exit"&&s[h-1][0]==="enter"&&s[h][1].type===s[h-1][1].type&&s[h][1].start.line!==s[h][1].end.line&&(w=h+1,_.push(w),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(a.events=[],g?(g._tokenizer=void 0,g.previous=void 0):_.pop(),h=_.length;h--;){let y=s.slice(_[h],_[h+1]),x=i.pop();c.push([x,x+y.length-1]),e.splice(x,2,y)}for(c.reverse(),h=-1;++h<c.length;)p[v+c[h][0]]=v+c[h][1],v+=c[h][1]-c[h][0]-1;return p}var A1={tokenize:rG,resolve:nG},tG={tokenize:oG,partial:!0};function nG(e){return gg(e),e}function rG(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(s)}function o(s){return s===null?i(s):oe(s)?e.check(tG,a,i)(s):(e.consume(s),o)}function i(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function oG(e,t,n){let r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),me(e,i,"linePrefix")}function i(a){if(a===null||oe(a))return n(a);let s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function bg(e,t,n,r,o,i,a,s,c){let p=c||Number.POSITIVE_INFINITY,f=0;return m;function m(y){return y===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(y),e.exit(i),h):y===null||y===32||y===41||El(y)?n(y):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),w(y))}function h(y){return y===62?(e.enter(i),e.consume(y),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),g(y))}function g(y){return y===62?(e.exit("chunkString"),e.exit(s),h(y)):y===null||y===60||oe(y)?n(y):(e.consume(y),y===92?v:g)}function v(y){return y===60||y===62||y===92?(e.consume(y),g):g(y)}function w(y){return!f&&(y===null||y===41||Ue(y))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(y)):f<p&&y===40?(e.consume(y),f++,w):y===41?(e.consume(y),f--,w):y===null||y===32||y===40||El(y)?n(y):(e.consume(y),y===92?_:w)}function _(y){return y===40||y===41||y===92?(e.consume(y),w):w(y)}}function vg(e,t,n,r,o,i){let a=this,s=0,c;return p;function p(g){return e.enter(r),e.enter(o),e.consume(g),e.exit(o),e.enter(i),f}function f(g){return s>999||g===null||g===91||g===93&&!c||g===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(g):g===93?(e.exit(i),e.enter(o),e.consume(g),e.exit(o),e.exit(r),t):oe(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===null||g===91||g===93||oe(g)||s++>999?(e.exit("chunkString"),f(g)):(e.consume(g),c||(c=!ge(g)),g===92?h:m)}function h(g){return g===91||g===92||g===93?(e.consume(g),s++,m):m(g)}}function yg(e,t,n,r,o,i){let a;return s;function s(h){return h===34||h===39||h===40?(e.enter(r),e.enter(o),e.consume(h),e.exit(o),a=h===40?41:h,c):n(h)}function c(h){return h===a?(e.enter(o),e.consume(h),e.exit(o),e.exit(r),t):(e.enter(i),p(h))}function p(h){return h===a?(e.exit(i),c(a)):h===null?n(h):oe(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),me(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===a||h===null||oe(h)?(e.exit("chunkString"),p(h)):(e.consume(h),h===92?m:f)}function m(h){return h===a||h===92?(e.consume(h),f):f(h)}}function Tl(e,t){let n;return r;function r(o){return oe(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):ge(o)?me(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}var L1={name:"definition",tokenize:aG},iG={tokenize:lG,partial:!0};function aG(e,t,n){let r=this,o;return i;function i(g){return e.enter("definition"),a(g)}function a(g){return vg.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function s(g){return o=jn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),c):n(g)}function c(g){return Ue(g)?Tl(e,p)(g):p(g)}function p(g){return bg(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function f(g){return e.attempt(iG,m,m)(g)}function m(g){return ge(g)?me(e,h,"whitespace")(g):h(g)}function h(g){return g===null||oe(g)?(e.exit("definition"),r.parser.defined.push(o),t(g)):n(g)}}function lG(e,t,n){return r;function r(s){return Ue(s)?Tl(e,o)(s):n(s)}function o(s){return yg(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function i(s){return ge(s)?me(e,a,"whitespace")(s):a(s)}function a(s){return s===null||oe(s)?t(s):n(s)}}var M1={name:"hardBreakEscape",tokenize:sG};function sG(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return oe(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}var D1={name:"headingAtx",tokenize:cG,resolve:uG};function uG(e,t){let n=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Yt(e,r,n-r+1,[["enter",o,t],["enter",i,t],["exit",i,t],["exit",o,t]])),e}function cG(e,t,n){let r=0;return o;function o(f){return e.enter("atxHeading"),i(f)}function i(f){return e.enter("atxHeadingSequence"),a(f)}function a(f){return f===35&&r++<6?(e.consume(f),a):f===null||Ue(f)?(e.exit("atxHeadingSequence"),s(f)):n(f)}function s(f){return f===35?(e.enter("atxHeadingSequence"),c(f)):f===null||oe(f)?(e.exit("atxHeading"),t(f)):ge(f)?me(e,s,"whitespace")(f):(e.enter("atxHeadingText"),p(f))}function c(f){return f===35?(e.consume(f),c):(e.exit("atxHeadingSequence"),s(f))}function p(f){return f===null||f===35||Ue(f)?(e.exit("atxHeadingText"),s(f)):(e.consume(f),p)}}var WA=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],N1=["pre","script","style","textarea"];var F1={name:"htmlFlow",tokenize:mG,resolveTo:dG,concrete:!0},pG={tokenize:gG,partial:!0},fG={tokenize:hG,partial:!0};function dG(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function mG(e,t,n){let r=this,o,i,a,s,c;return p;function p(L){return f(L)}function f(L){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(L),m}function m(L){return L===33?(e.consume(L),h):L===47?(e.consume(L),i=!0,w):L===63?(e.consume(L),o=3,r.interrupt?t:P):rn(L)?(e.consume(L),a=String.fromCharCode(L),_):n(L)}function h(L){return L===45?(e.consume(L),o=2,g):L===91?(e.consume(L),o=5,s=0,v):rn(L)?(e.consume(L),o=4,r.interrupt?t:P):n(L)}function g(L){return L===45?(e.consume(L),r.interrupt?t:P):n(L)}function v(L){let tt="CDATA[";return L===tt.charCodeAt(s++)?(e.consume(L),s===tt.length?r.interrupt?t:Z:v):n(L)}function w(L){return rn(L)?(e.consume(L),a=String.fromCharCode(L),_):n(L)}function _(L){if(L===null||L===47||L===62||Ue(L)){let tt=L===47,xn=a.toLowerCase();return!tt&&!i&&N1.includes(xn)?(o=1,r.interrupt?t(L):Z(L)):WA.includes(a.toLowerCase())?(o=6,tt?(e.consume(L),y):r.interrupt?t(L):Z(L)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(L):i?x(L):S(L))}return L===45||Bt(L)?(e.consume(L),a+=String.fromCharCode(L),_):n(L)}function y(L){return L===62?(e.consume(L),r.interrupt?t:Z):n(L)}function x(L){return ge(L)?(e.consume(L),x):A(L)}function S(L){return L===47?(e.consume(L),A):L===58||L===95||rn(L)?(e.consume(L),T):ge(L)?(e.consume(L),S):A(L)}function T(L){return L===45||L===46||L===58||L===95||Bt(L)?(e.consume(L),T):I(L)}function I(L){return L===61?(e.consume(L),R):ge(L)?(e.consume(L),I):S(L)}function R(L){return L===null||L===60||L===61||L===62||L===96?n(L):L===34||L===39?(e.consume(L),c=L,D):ge(L)?(e.consume(L),R):z(L)}function D(L){return L===c?(e.consume(L),c=null,U):L===null||oe(L)?n(L):(e.consume(L),D)}function z(L){return L===null||L===34||L===39||L===47||L===60||L===61||L===62||L===96||Ue(L)?I(L):(e.consume(L),z)}function U(L){return L===47||L===62||ge(L)?S(L):n(L)}function A(L){return L===62?(e.consume(L),te):n(L)}function te(L){return L===null||oe(L)?Z(L):ge(L)?(e.consume(L),te):n(L)}function Z(L){return L===45&&o===2?(e.consume(L),fe):L===60&&o===1?(e.consume(L),Me):L===62&&o===4?(e.consume(L),$e):L===63&&o===3?(e.consume(L),P):L===93&&o===5?(e.consume(L),Le):oe(L)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(pG,ln,G)(L)):L===null||oe(L)?(e.exit("htmlFlowData"),G(L)):(e.consume(L),Z)}function G(L){return e.check(fG,ie,ln)(L)}function ie(L){return e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),ee}function ee(L){return L===null||oe(L)?G(L):(e.enter("htmlFlowData"),Z(L))}function fe(L){return L===45?(e.consume(L),P):Z(L)}function Me(L){return L===47?(e.consume(L),a="",ce):Z(L)}function ce(L){if(L===62){let tt=a.toLowerCase();return N1.includes(tt)?(e.consume(L),$e):Z(L)}return rn(L)&&a.length<8?(e.consume(L),a+=String.fromCharCode(L),ce):Z(L)}function Le(L){return L===93?(e.consume(L),P):Z(L)}function P(L){return L===62?(e.consume(L),$e):L===45&&o===2?(e.consume(L),P):Z(L)}function $e(L){return L===null||oe(L)?(e.exit("htmlFlowData"),ln(L)):(e.consume(L),$e)}function ln(L){return e.exit("htmlFlow"),t(L)}}function hG(e,t,n){let r=this;return o;function o(a){return oe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):n(a)}function i(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function gG(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Wo,t,n)}}var z1={name:"htmlText",tokenize:bG};function bG(e,t,n){let r=this,o,i,a;return s;function s(P){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(P),c}function c(P){return P===33?(e.consume(P),p):P===47?(e.consume(P),I):P===63?(e.consume(P),S):rn(P)?(e.consume(P),z):n(P)}function p(P){return P===45?(e.consume(P),f):P===91?(e.consume(P),i=0,v):rn(P)?(e.consume(P),x):n(P)}function f(P){return P===45?(e.consume(P),g):n(P)}function m(P){return P===null?n(P):P===45?(e.consume(P),h):oe(P)?(a=m,Me(P)):(e.consume(P),m)}function h(P){return P===45?(e.consume(P),g):m(P)}function g(P){return P===62?fe(P):P===45?h(P):m(P)}function v(P){let $e="CDATA[";return P===$e.charCodeAt(i++)?(e.consume(P),i===$e.length?w:v):n(P)}function w(P){return P===null?n(P):P===93?(e.consume(P),_):oe(P)?(a=w,Me(P)):(e.consume(P),w)}function _(P){return P===93?(e.consume(P),y):w(P)}function y(P){return P===62?fe(P):P===93?(e.consume(P),y):w(P)}function x(P){return P===null||P===62?fe(P):oe(P)?(a=x,Me(P)):(e.consume(P),x)}function S(P){return P===null?n(P):P===63?(e.consume(P),T):oe(P)?(a=S,Me(P)):(e.consume(P),S)}function T(P){return P===62?fe(P):S(P)}function I(P){return rn(P)?(e.consume(P),R):n(P)}function R(P){return P===45||Bt(P)?(e.consume(P),R):D(P)}function D(P){return oe(P)?(a=D,Me(P)):ge(P)?(e.consume(P),D):fe(P)}function z(P){return P===45||Bt(P)?(e.consume(P),z):P===47||P===62||Ue(P)?U(P):n(P)}function U(P){return P===47?(e.consume(P),fe):P===58||P===95||rn(P)?(e.consume(P),A):oe(P)?(a=U,Me(P)):ge(P)?(e.consume(P),U):fe(P)}function A(P){return P===45||P===46||P===58||P===95||Bt(P)?(e.consume(P),A):te(P)}function te(P){return P===61?(e.consume(P),Z):oe(P)?(a=te,Me(P)):ge(P)?(e.consume(P),te):U(P)}function Z(P){return P===null||P===60||P===61||P===62||P===96?n(P):P===34||P===39?(e.consume(P),o=P,G):oe(P)?(a=Z,Me(P)):ge(P)?(e.consume(P),Z):(e.consume(P),ie)}function G(P){return P===o?(e.consume(P),o=void 0,ee):P===null?n(P):oe(P)?(a=G,Me(P)):(e.consume(P),G)}function ie(P){return P===null||P===34||P===39||P===60||P===61||P===96?n(P):P===47||P===62||Ue(P)?U(P):(e.consume(P),ie)}function ee(P){return P===47||P===62||Ue(P)?U(P):n(P)}function fe(P){return P===62?(e.consume(P),e.exit("htmlTextData"),e.exit("htmlText"),t):n(P)}function Me(P){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),ce}function ce(P){return ge(P)?me(e,Le,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):Le(P)}function Le(P){return e.enter("htmlTextData"),a(P)}}var Ol={name:"labelEnd",tokenize:SG,resolveTo:kG,resolveAll:wG},vG={tokenize:_G},yG={tokenize:CG},xG={tokenize:EG};function wG(e){let t=-1;for(;++t<e.length;){let n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function kG(e,t){let n=e.length,r=0,o,i,a,s;for(;n--;)if(o=e[n][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=n);let c={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},p={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[a][1].end)},f={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[a-2][1].start)};return s=[["enter",c,t],["enter",p,t]],s=Jn(s,e.slice(i+1,i+r+3)),s=Jn(s,[["enter",f,t]]),s=Jn(s,Sa(t.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),t)),s=Jn(s,[["exit",f,t],e[a-2],e[a-1],["exit",p,t]]),s=Jn(s,e.slice(a+1)),s=Jn(s,[["exit",c,t]]),Yt(e,i,e.length,s),e}function SG(e,t,n){let r=this,o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return s;function s(h){return i?i._inactive?m(h):(a=r.parser.defined.includes(jn(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):n(h)}function c(h){return h===40?e.attempt(vG,f,a?f:m)(h):h===91?e.attempt(yG,f,a?p:m)(h):a?f(h):m(h)}function p(h){return e.attempt(xG,f,m)(h)}function f(h){return t(h)}function m(h){return i._balanced=!0,n(h)}}function _G(e,t,n){return r;function r(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),o}function o(m){return Ue(m)?Tl(e,i)(m):i(m)}function i(m){return m===41?f(m):bg(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function a(m){return Ue(m)?Tl(e,c)(m):f(m)}function s(m){return n(m)}function c(m){return m===34||m===39||m===40?yg(e,p,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):f(m)}function p(m){return Ue(m)?Tl(e,f)(m):f(m)}function f(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),t):n(m)}}function CG(e,t,n){let r=this;return o;function o(s){return vg.call(r,e,i,a,"reference","referenceMarker","referenceString")(s)}function i(s){return r.parser.defined.includes(jn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function EG(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}var B1={name:"labelStartImage",tokenize:RG,resolveAll:Ol.resolveAll};function RG(e,t,n){let r=this;return o;function o(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),i}function i(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}var U1={name:"labelStartLink",tokenize:TG,resolveAll:Ol.resolveAll};function TG(e,t,n){let r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}var Np={name:"lineEnding",tokenize:OG};function OG(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),me(e,t,"linePrefix")}}var Pl={name:"thematicBreak",tokenize:PG};function PG(e,t,n){let r=0,o;return i;function i(p){return e.enter("thematicBreak"),a(p)}function a(p){return o=p,s(p)}function s(p){return p===o?(e.enter("thematicBreakSequence"),c(p)):r>=3&&(p===null||oe(p))?(e.exit("thematicBreak"),t(p)):n(p)}function c(p){return p===o?(e.consume(p),r++,c):(e.exit("thematicBreakSequence"),ge(p)?me(e,s,"whitespace")(p):s(p))}}var Hn={name:"list",tokenize:LG,continuation:{tokenize:MG},exit:NG},IG={tokenize:FG,partial:!0},AG={tokenize:DG,partial:!0};function LG(e,t,n){let r=this,o=r.events[r.events.length-1],i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return s;function s(g){let v=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:Ap(g)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(Pl,n,p)(g):p(g);if(!r.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(g)}return n(g)}function c(g){return Ap(g)&&++a<10?(e.consume(g),c):(!r.interrupt||a<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),p(g)):n(g)}function p(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,e.check(Wo,r.interrupt?n:f,e.attempt(IG,h,m))}function f(g){return r.containerState.initialBlankLine=!0,i++,h(g)}function m(g){return ge(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),h):n(g)}function h(g){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(g)}}function MG(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Wo,o,i);function o(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,me(e,t,"listItemIndent",r.containerState.size+1)(s)}function i(s){return r.containerState.furtherBlankLines||!ge(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(AG,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,me(e,e.attempt(Hn,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function DG(e,t,n){let r=this;return me(e,o,"listItemIndent",r.containerState.size+1);function o(i){let a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(i):n(i)}}function NG(e){e.exit(this.containerState.type)}function FG(e,t,n){let r=this;return me(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){let a=r.events[r.events.length-1];return!ge(i)&&a&&a[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}var xg={name:"setextUnderline",tokenize:BG,resolveTo:zG};function zG(e,t){let n=e.length,r,o,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);let a={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=a,e.push(["exit",a,t]),e}function BG(e,t,n){let r=this,o;return i;function i(p){let f=r.events.length,m;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){m=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||m)?(e.enter("setextHeadingLine"),o=p,a(p)):n(p)}function a(p){return e.enter("setextHeadingLineSequence"),s(p)}function s(p){return p===o?(e.consume(p),s):(e.exit("setextHeadingLineSequence"),ge(p)?me(e,c,"lineSuffix")(p):c(p))}function c(p){return p===null||oe(p)?(e.exit("setextHeadingLine"),t(p)):n(p)}}var qA={tokenize:UG};function UG(e){let t=this,n=e.attempt(Wo,r,e.attempt(this.parser.constructs.flowInitial,o,me(e,e.attempt(this.parser.constructs.flow,o,e.attempt(A1,o)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var VA={resolveAll:QA()},KA=GA("string"),$A=GA("text");function GA(e){return{tokenize:t,resolveAll:QA(e==="text"?jG:void 0)};function t(n){let r=this,o=this.parser.constructs[e],i=n.attempt(o,a,s);return a;function a(f){return p(f)?i(f):s(f)}function s(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),c}function c(f){return p(f)?(n.exit("data"),i(f)):(n.consume(f),c)}function p(f){if(f===null)return!0;let m=o[f],h=-1;if(m)for(;++h<m.length;){let g=m[h];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function QA(e){return t;function t(n,r){let o=-1,i;for(;++o<=n.length;)i===void 0?n[o]&&n[o][1].type==="data"&&(i=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==i+2&&(n[i][1].end=n[o-1][1].end,n.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(n,r):n}}function jG(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],o=t.sliceStream(r),i=o.length,a=-1,s=0,c;for(;i--;){let p=o[i];if(typeof p=="string"){for(a=p.length;p.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(p===-2)c=!0,s++;else if(p!==-1){i++;break}}if(s){let p={type:n===e.length||c||s<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-s,offset:r.end.offset-s,_index:r.start._index+i,_bufferIndex:i?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},p.start),r.start.offset===r.end.offset?Object.assign(r,p):(e.splice(n,0,["enter",p,t],["exit",p,t]),n+=2)}n++}return e}function YA(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),o={},i=[],a=[],s=[],c=!0,p={consume:T,enter:I,exit:R,attempt:U(D),check:U(z),interrupt:U(z,{interrupt:!0})},f={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:w,sliceSerialize:v,now:_,defineSkip:y,write:g},m=t.tokenize.call(f,p),h;return t.resolveAll&&i.push(t),f;function g(G){return a=Jn(a,G),x(),a[a.length-1]!==null?[]:(A(t,0),f.events=Sa(i,f.events,f),f.events)}function v(G,ie){return WG(w(G),ie)}function w(G){return HG(a,G)}function _(){let{line:G,column:ie,offset:ee,_index:fe,_bufferIndex:Me}=r;return{line:G,column:ie,offset:ee,_index:fe,_bufferIndex:Me}}function y(G){o[G.line]=G.column,Z()}function x(){let G;for(;r._index<a.length;){let ie=a[r._index];if(typeof ie=="string")for(G=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===G&&r._bufferIndex<ie.length;)S(ie.charCodeAt(r._bufferIndex));else S(ie)}}function S(G){c=void 0,h=G,m=m(G)}function T(G){oe(G)?(r.line++,r.column=1,r.offset+=G===-3?2:1,Z()):G!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),f.previous=G,c=!0}function I(G,ie){let ee=ie||{};return ee.type=G,ee.start=_(),f.events.push(["enter",ee,f]),s.push(ee),ee}function R(G){let ie=s.pop();return ie.end=_(),f.events.push(["exit",ie,f]),ie}function D(G,ie){A(G,ie.from)}function z(G,ie){ie.restore()}function U(G,ie){return ee;function ee(fe,Me,ce){let Le,P,$e,ln;return Array.isArray(fe)?tt(fe):"tokenize"in fe?tt([fe]):L(fe);function L(Ie){return sn;function sn(Tt){let un=Tt!==null&&Ie[Tt],st=Tt!==null&&Ie.null,kn=[...Array.isArray(un)?un:un?[un]:[],...Array.isArray(st)?st:st?[st]:[]];return tt(kn)(Tt)}}function tt(Ie){return Le=Ie,P=0,Ie.length===0?ce:xn(Ie[P])}function xn(Ie){return sn;function sn(Tt){return ln=te(),$e=Ie,Ie.partial||(f.currentConstruct=Ie),Ie.name&&f.parser.constructs.disable.null.includes(Ie.name)?$t(Tt):Ie.tokenize.call(ie?Object.assign(Object.create(f),ie):f,p,wn,$t)(Tt)}}function wn(Ie){return c=!0,G($e,ln),Me}function $t(Ie){return c=!0,ln.restore(),++P<Le.length?xn(Le[P]):ce}}}function A(G,ie){G.resolveAll&&!i.includes(G)&&i.push(G),G.resolve&&Yt(f.events,ie,f.events.length-ie,G.resolve(f.events.slice(ie),f)),G.resolveTo&&(f.events=G.resolveTo(f.events,f))}function te(){let G=_(),ie=f.previous,ee=f.currentConstruct,fe=f.events.length,Me=Array.from(s);return{restore:ce,from:fe};function ce(){r=G,f.previous=ie,f.currentConstruct=ee,f.events.length=fe,s=Me,Z()}}function Z(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function HG(e,t){let n=t.start._index,r=t.start._bufferIndex,o=t.end._index,i=t.end._bufferIndex,a;if(n===o)a=[e[n].slice(r,i)];else{if(a=e.slice(n,o),r>-1){let s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}function WG(e,t){let n=-1,r=[],o;for(;++n<e.length;){let i=e[n],a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}var j1={};g0(j1,{attentionMarkers:()=>XG,contentInitial:()=>VG,disable:()=>ZG,document:()=>qG,flow:()=>$G,flowInitial:()=>KG,insideSpan:()=>YG,string:()=>GG,text:()=>QG});var qG={42:Hn,43:Hn,45:Hn,48:Hn,49:Hn,50:Hn,51:Hn,52:Hn,53:Hn,54:Hn,55:Hn,56:Hn,57:Hn,62:pg},VG={91:L1},KG={[-2]:Mp,[-1]:Mp,32:Mp},$G={35:D1,42:Pl,45:[xg,Pl],60:F1,61:xg,95:Pl,96:mg,126:mg},GG={38:dg,92:fg},QG={[-5]:Np,[-4]:Np,[-3]:Np,33:B1,38:dg,42:Lp,60:[P1,z1],91:U1,92:[M1,fg],93:Ol,95:Lp,96:I1},YG={null:[Lp,VA]},XG={null:[42,95]},ZG={null:[]};function H1(e){let n=ug([j1,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:o(zA),document:o(UA),flow:o(qA),string:o(KA),text:o($A)};return r;function o(i){return a;function a(s){return YA(r,i,s)}}}function W1(e){for(;!gg(e););return e}var XA=/[\0\t\n\r]/g;function q1(){let e=1,t="",n=!0,r;return o;function o(i,a,s){let c=[],p,f,m,h,g;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(a||void 0).decode(i)),m=0,t="",n&&(i.charCodeAt(0)===65279&&m++,n=void 0);m<i.length;){if(XA.lastIndex=m,p=XA.exec(i),h=p&&p.index!==void 0?p.index:i.length,g=i.charCodeAt(h),!p){t=i.slice(m);break}if(g===10&&m===h&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),m<h&&(c.push(i.slice(m,h)),e+=h-m),g){case 0:{c.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,c.push(-2);e++<f;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}m=h+1}return s&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}var JG=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function wg(e){return e.replace(JG,eQ)}function eQ(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let o=n.charCodeAt(1),i=o===120||o===88;return cg(n.slice(i?2:1),i?16:10)}return Js(n)||e}var JA={}.hasOwnProperty;function Fp(e,t,n){return typeof t!="string"&&(n=t,t=void 0),tQ(n)(W1(H1(n).document().write(q1()(e,t,!0))))}function tQ(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Ut),autolinkProtocol:U,autolinkEmail:U,atxHeading:i(Ot),blockQuote:i(Tt),characterEscape:U,characterReference:U,codeFenced:i(un),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(un,a),codeText:i(st,a),codeTextData:U,data:U,codeFlowValue:U,definition:i(kn),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i(eo),hardBreakEscape:i(Pt),hardBreakTrailing:i(Pt),htmlFlow:i(Ir,a),htmlFlowData:U,htmlText:i(Ir,a),htmlTextData:U,image:i(er),label:a,link:i(Ut),listItem:i(hr),listItemValue:h,listOrdered:i(On,m),listUnordered:i(On),paragraph:i(_o),reference:L,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Ot),strong:i(Sn),thematicBreak:i(Wn)},exit:{atxHeading:c(),atxHeadingSequence:I,autolink:c(),autolinkEmail:sn,autolinkProtocol:Ie,blockQuote:c(),characterEscapeValue:A,characterReferenceMarkerHexadecimal:xn,characterReferenceMarkerNumeric:xn,characterReferenceValue:wn,characterReference:$t,codeFenced:c(_),codeFencedFence:w,codeFencedFenceInfo:g,codeFencedFenceMeta:v,codeFlowValue:A,codeIndented:c(y),codeText:c(ee),codeTextData:A,data:A,definition:c(),definitionDestinationString:T,definitionLabelString:x,definitionTitleString:S,emphasis:c(),hardBreakEscape:c(Z),hardBreakTrailing:c(Z),htmlFlow:c(G),htmlFlowData:A,htmlText:c(ie),htmlTextData:A,image:c(Me),label:Le,labelText:ce,lineEnding:te,link:c(fe),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:tt,resourceDestinationString:P,resourceTitleString:$e,resource:ln,setextHeading:c(z),setextHeadingLineSequence:D,setextHeadingText:R,strong:c(),thematicBreak:c()}};eL(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(H){let J={type:"root",children:[]},de={stack:[J],tokenStack:[],config:t,enter:s,exit:p,buffer:a,resume:f,data:n},_e=[],ze=-1;for(;++ze<H.length;)if(H[ze][1].type==="listOrdered"||H[ze][1].type==="listUnordered")if(H[ze][0]==="enter")_e.push(ze);else{let It=_e.pop();ze=o(H,It,ze)}for(ze=-1;++ze<H.length;){let It=t[H[ze][0]];JA.call(It,H[ze][1].type)&&It[H[ze][1].type].call(Object.assign({sliceSerialize:H[ze][2].sliceSerialize},de),H[ze][1])}if(de.tokenStack.length>0){let It=de.tokenStack[de.tokenStack.length-1];(It[1]||ZA).call(de,void 0,It[0])}for(J.position={start:_a(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:_a(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},ze=-1;++ze<t.transforms.length;)J=t.transforms[ze](J)||J;return J}function o(H,J,de){let _e=J-1,ze=-1,It=!1,Gt,pe,q,re;for(;++_e<=de;){let be=H[_e];switch(be[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{be[0]==="enter"?ze++:ze--,re=void 0;break}case"lineEndingBlank":{be[0]==="enter"&&(Gt&&!re&&!ze&&!q&&(q=_e),re=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:re=void 0}if(!ze&&be[0]==="enter"&&be[1].type==="listItemPrefix"||ze===-1&&be[0]==="exit"&&(be[1].type==="listUnordered"||be[1].type==="listOrdered")){if(Gt){let he=_e;for(pe=void 0;he--;){let xe=H[he];if(xe[1].type==="lineEnding"||xe[1].type==="lineEndingBlank"){if(xe[0]==="exit")continue;pe&&(H[pe][1].type="lineEndingBlank",It=!0),xe[1].type="lineEnding",pe=he}else if(!(xe[1].type==="linePrefix"||xe[1].type==="blockQuotePrefix"||xe[1].type==="blockQuotePrefixWhitespace"||xe[1].type==="blockQuoteMarker"||xe[1].type==="listItemIndent"))break}q&&(!pe||q<pe)&&(Gt._spread=!0),Gt.end=Object.assign({},pe?H[pe][1].start:be[1].end),H.splice(pe||_e,0,["exit",Gt,be[2]]),_e++,de++}if(be[1].type==="listItemPrefix"){let he={type:"listItem",_spread:!1,start:Object.assign({},be[1].start),end:void 0};Gt=he,H.splice(_e,0,["enter",he,be[2]]),_e++,de++,q=void 0,re=!0}}}return H[J][1]._spread=It,de}function i(H,J){return de;function de(_e){s.call(this,H(_e),_e),J&&J.call(this,_e)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(H,J,de){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([J,de]),H.position={start:_a(J.start),end:void 0}}function c(H){return J;function J(de){H&&H.call(this,de),p.call(this,de)}}function p(H,J){let de=this.stack.pop(),_e=this.tokenStack.pop();if(_e)_e[0].type!==H.type&&(J?J.call(this,H,_e[0]):(_e[1]||ZA).call(this,H,_e[0]));else throw new Error("Cannot close `"+H.type+"` ("+wa({start:H.start,end:H.end})+"): it\u2019s not open");de.position.end=_a(H.end)}function f(){return Cl(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function h(H){if(this.data.expectingFirstListItemValue){let J=this.stack[this.stack.length-2];J.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function g(){let H=this.resume(),J=this.stack[this.stack.length-1];J.lang=H}function v(){let H=this.resume(),J=this.stack[this.stack.length-1];J.meta=H}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){let H=this.resume(),J=this.stack[this.stack.length-1];J.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){let H=this.resume(),J=this.stack[this.stack.length-1];J.value=H.replace(/(\r?\n|\r)$/g,"")}function x(H){let J=this.resume(),de=this.stack[this.stack.length-1];de.label=J,de.identifier=jn(this.sliceSerialize(H)).toLowerCase()}function S(){let H=this.resume(),J=this.stack[this.stack.length-1];J.title=H}function T(){let H=this.resume(),J=this.stack[this.stack.length-1];J.url=H}function I(H){let J=this.stack[this.stack.length-1];if(!J.depth){let de=this.sliceSerialize(H).length;J.depth=de}}function R(){this.data.setextHeadingSlurpLineEnding=!0}function D(H){let J=this.stack[this.stack.length-1];J.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function U(H){let de=this.stack[this.stack.length-1].children,_e=de[de.length-1];(!_e||_e.type!=="text")&&(_e=tr(),_e.position={start:_a(H.start),end:void 0},de.push(_e)),this.stack.push(_e)}function A(H){let J=this.stack.pop();J.value+=this.sliceSerialize(H),J.position.end=_a(H.end)}function te(H){let J=this.stack[this.stack.length-1];if(this.data.atHardBreak){let de=J.children[J.children.length-1];de.position.end=_a(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(J.type)&&(U.call(this,H),A.call(this,H))}function Z(){this.data.atHardBreak=!0}function G(){let H=this.resume(),J=this.stack[this.stack.length-1];J.value=H}function ie(){let H=this.resume(),J=this.stack[this.stack.length-1];J.value=H}function ee(){let H=this.resume(),J=this.stack[this.stack.length-1];J.value=H}function fe(){let H=this.stack[this.stack.length-1];if(this.data.inReference){let J=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=J,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function Me(){let H=this.stack[this.stack.length-1];if(this.data.inReference){let J=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=J,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function ce(H){let J=this.sliceSerialize(H),de=this.stack[this.stack.length-2];de.label=wg(J),de.identifier=jn(J).toLowerCase()}function Le(){let H=this.stack[this.stack.length-1],J=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){let _e=H.children;de.children=_e}else de.alt=J}function P(){let H=this.resume(),J=this.stack[this.stack.length-1];J.url=H}function $e(){let H=this.resume(),J=this.stack[this.stack.length-1];J.title=H}function ln(){this.data.inReference=void 0}function L(){this.data.referenceType="collapsed"}function tt(H){let J=this.resume(),de=this.stack[this.stack.length-1];de.label=J,de.identifier=jn(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function xn(H){this.data.characterReferenceType=H.type}function wn(H){let J=this.sliceSerialize(H),de=this.data.characterReferenceType,_e;de?(_e=cg(J,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):_e=Js(J);let ze=this.stack[this.stack.length-1];ze.value+=_e}function $t(H){let J=this.stack.pop();J.position.end=_a(H.end)}function Ie(H){A.call(this,H);let J=this.stack[this.stack.length-1];J.url=this.sliceSerialize(H)}function sn(H){A.call(this,H);let J=this.stack[this.stack.length-1];J.url="mailto:"+this.sliceSerialize(H)}function Tt(){return{type:"blockquote",children:[]}}function un(){return{type:"code",lang:null,meta:null,value:""}}function st(){return{type:"inlineCode",value:""}}function kn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function eo(){return{type:"emphasis",children:[]}}function Ot(){return{type:"heading",depth:0,children:[]}}function Pt(){return{type:"break"}}function Ir(){return{type:"html",value:""}}function er(){return{type:"image",title:null,url:"",alt:null}}function Ut(){return{type:"link",title:null,url:"",children:[]}}function On(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function hr(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function _o(){return{type:"paragraph",children:[]}}function Sn(){return{type:"strong",children:[]}}function tr(){return{type:"text",value:""}}function Wn(){return{type:"thematicBreak"}}}function _a(e){return{line:e.line,column:e.column,offset:e.offset}}function eL(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?eL(e,r):nQ(e,r)}}function nQ(e,t){let n;for(n in t)if(JA.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function ZA(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wa({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wa({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wa({start:t.start,end:t.end})+") is still open")}function kg(e){let t=this;t.parser=n;function n(r){return Fp(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function tL(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function nL(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function rL(e,t){let n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function oL(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function iL(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function aL(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Jr(r.toLowerCase()),i=e.footnoteOrder.indexOf(r),a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,s+=1,e.footnoteCounts.set(r,s);let c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);let p={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,p),e.applyData(t,p)}function lL(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function sL(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Sg(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});let a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push({type:"text",value:r}),o}function uL(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Sg(e,t);let o={src:Jr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)}function cL(e,t){let n={src:Jr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function pL(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function fL(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Sg(e,t);let o={href:Jr(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function dL(e,t){let n={href:Jr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function mL(e,t,n){let r=e.all(t),o=n?rQ(n):hL(t),i={},a=[];if(typeof t.checked=="boolean"){let f=r[0],m;f&&f.type==="element"&&f.tagName==="p"?m=f:(m={type:"element",tagName:"p",properties:{},children:[]},r.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let s=-1;for(;++s<r.length;){let f=r[s];(o||s!==0||f.type!=="element"||f.tagName!=="p")&&a.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!o?a.push(...f.children):a.push(f)}let c=r[r.length-1];c&&(o||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});let p={type:"element",tagName:"li",properties:i,children:a};return e.patch(t,p),e.applyData(t,p)}function rQ(e){let t=!1;if(e.type==="list"){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=hL(n[r])}return t}function hL(e){let t=e.spread;return t??e.children.length>1}function gL(e,t){let n={},r=e.all(t),o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){let a=r[o];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function bL(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vL(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function yL(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xL(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),o.push(a)}if(n.length>0){let a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Zs(t.children[1]),c=sg(t.children[t.children.length-1]);s&&c&&(a.position={start:s,end:c}),o.push(a)}let i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)}function wL(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length,c=-1,p=[];for(;++c<s;){let m=t.children[c],h={},g=a?a[c]:void 0;g&&(h.align=g);let v={type:"element",tagName:i,properties:h,children:[]};m&&(v.children=e.all(m),e.patch(m,v),v=e.applyData(m,v)),p.push(v)}let f={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(t,f),e.applyData(t,f)}function kL(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _L(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,i=[];for(;r;)i.push(SL(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(SL(t.slice(o),o>0,!1)),i.join("")}function SL(e,t,n){let r=0,o=e.length;if(t){let i=e.codePointAt(r);for(;i===9||i===32;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(o-1);for(;i===9||i===32;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function CL(e,t){let n={type:"text",value:_L(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function EL(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var RL={blockquote:tL,break:nL,code:rL,delete:oL,emphasis:iL,footnoteReference:aL,heading:lL,html:sL,imageReference:uL,image:cL,inlineCode:pL,linkReference:fL,link:dL,listItem:mL,list:gL,paragraph:bL,root:vL,strong:yL,table:xL,tableCell:kL,tableRow:wL,text:CL,thematicBreak:EL,toml:_g,yaml:_g,definition:_g,footnoteDefinition:_g};function _g(){}var TL=typeof self=="object"?self:globalThis,oQ=(e,t)=>{let n=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);let[i,a]=t[o];switch(i){case 0:case-1:return n(a,o);case 1:{let s=n([],o);for(let c of a)s.push(r(c));return s}case 2:{let s=n({},o);for(let[c,p]of a)s[r(c)]=r(p);return s}case 3:return n(new Date(a),o);case 4:{let{source:s,flags:c}=a;return n(new RegExp(s,c),o)}case 5:{let s=n(new Map,o);for(let[c,p]of a)s.set(r(c),r(p));return s}case 6:{let s=n(new Set,o);for(let c of a)s.add(r(c));return s}case 7:{let{name:s,message:c}=a;return n(new TL[s](c),o)}case 8:return n(BigInt(a),o);case"BigInt":return n(Object(BigInt(a)),o)}return n(new TL[i](a),o)};return r},G1=e=>oQ(new Map,e)(0);var tu="",{toString:iQ}={},{keys:aQ}=Object,jp=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let n=iQ.call(e).slice(8,-1);switch(n){case"Array":return[1,tu];case"Object":return[2,tu];case"Date":return[3,tu];case"RegExp":return[4,tu];case"Map":return[5,tu];case"Set":return[6,tu]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Og=([e,t])=>e===0&&(t==="function"||t==="symbol"),lQ=(e,t,n,r)=>{let o=(a,s)=>{let c=r.push(a)-1;return n.set(s,c),c},i=a=>{if(n.has(a))return n.get(a);let[s,c]=jp(a);switch(s){case 0:{let f=a;switch(c){case"bigint":s=8,f=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);f=null;break;case"undefined":return o([-1],a)}return o([s,f],a)}case 1:{if(c)return o([c,[...a]],a);let f=[],m=o([s,f],a);for(let h of a)f.push(i(h));return m}case 2:{if(c)switch(c){case"BigInt":return o([c,a.toString()],a);case"Boolean":case"Number":case"String":return o([c,a.valueOf()],a)}if(t&&"toJSON"in a)return i(a.toJSON());let f=[],m=o([s,f],a);for(let h of aQ(a))(e||!Og(jp(a[h])))&&f.push([i(h),i(a[h])]);return m}case 3:return o([s,a.toISOString()],a);case 4:{let{source:f,flags:m}=a;return o([s,{source:f,flags:m}],a)}case 5:{let f=[],m=o([s,f],a);for(let[h,g]of a)(e||!(Og(jp(h))||Og(jp(g))))&&f.push([i(h),i(g)]);return m}case 6:{let f=[],m=o([s,f],a);for(let h of a)(e||!Og(jp(h)))&&f.push(i(h));return m}}let{message:p}=a;return o([s,{name:c,message:p}],a)};return i},Q1=(e,{json:t,lossy:n}={})=>{let r=[];return lQ(!(t||n),!!t,new Map,r)(e),r};var nu=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?G1(Q1(e,t)):structuredClone(e):(e,t)=>G1(Q1(e,t));function sQ(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function uQ(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function OL(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||sQ,r=e.options.footnoteBackLabel||uQ,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let p=e.footnoteById.get(e.footnoteOrder[c]);if(!p)continue;let f=e.all(p),m=String(p.identifier).toUpperCase(),h=Jr(m.toLowerCase()),g=0,v=[],w=e.footnoteCounts.get(m);for(;w!==void 0&&++g<=w;){v.length>0&&v.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,g);typeof x=="string"&&(x={type:"text",value:x}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,g),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}let _=f[f.length-1];if(_&&_.type==="element"&&_.tagName==="p"){let x=_.children[_.children.length-1];x&&x.type==="text"?x.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...v)}else f.push(...v);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(f,!0)};e.patch(p,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...nu(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}var Ca=function(e){if(e==null)return dQ;if(typeof e=="function")return Pg(e);if(typeof e=="object")return Array.isArray(e)?cQ(e):pQ(e);if(typeof e=="string")return fQ(e);throw new Error("Expected function, string, or object as test")};function cQ(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ca(e[n]);return Pg(r);function r(...o){let i=-1;for(;++i<t.length;)if(t[i].apply(this,o))return!0;return!1}}function pQ(e){let t=e;return Pg(n);function n(r){let o=r,i;for(i in e)if(o[i]!==t[i])return!1;return!0}}function fQ(e){return Pg(t);function t(n){return n&&n.type===e}}function Pg(e){return t;function t(n,r,o){return!!(mQ(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function dQ(){return!0}function mQ(e){return e!==null&&typeof e=="object"&&"type"in e}var PL=[],Ig=!0,Il=!1,Ag="skip";function Hp(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;let i=Ca(o),a=r?-1:1;s(e,void 0,[])();function s(c,p,f){let m=c&&typeof c=="object"?c:{};if(typeof m.type=="string"){let g=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(c.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=PL,v,w,_;if((!t||i(c,p,f[f.length-1]||void 0))&&(g=hQ(n(c,f)),g[0]===Il))return g;if("children"in c&&c.children){let y=c;if(y.children&&g[0]!==Ag)for(w=(r?y.children.length:-1)+a,_=f.concat(y);w>-1&&w<y.children.length;){let x=y.children[w];if(v=s(x,w,_)(),v[0]===Il)return v;w=typeof v[1]=="number"?v[1]:w+a}}return g}}}function hQ(e){return Array.isArray(e)?e:typeof e=="number"?[Ig,e]:e==null?PL:[e]}function Ei(e,t,n,r){let o,i,a;typeof t=="function"&&typeof n!="function"?(i=void 0,a=t,o=n):(i=t,a=n,o=r),Hp(e,i,s,o);function s(c,p){let f=p[p.length-1],m=f?f.children.indexOf(c):void 0;return a(c,m,f)}}var Y1={}.hasOwnProperty,gQ={};function AL(e,t){let n=t||gQ,r=new Map,o=new Map,i=new Map,a={...RL,...n.handlers},s={all:p,applyData:vQ,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:c,options:n,patch:bQ,wrap:xQ};return Ei(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){let m=f.type==="definition"?r:o,h=String(f.identifier).toUpperCase();m.has(h)||m.set(h,f)}}),s;function c(f,m){let h=f.type,g=s.handlers[h];if(Y1.call(s.handlers,h)&&g)return g(s,f,m);if(s.options.passThrough&&s.options.passThrough.includes(h)){if("children"in f){let{children:w,..._}=f,y=nu(_);return y.children=s.all(f),y}return nu(f)}return(s.options.unknownHandler||yQ)(s,f,m)}function p(f){let m=[];if("children"in f){let h=f.children,g=-1;for(;++g<h.length;){let v=s.one(h[g],f);if(v){if(g&&h[g-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=IL(v.value)),!Array.isArray(v)&&v.type==="element")){let w=v.children[0];w&&w.type==="text"&&(w.value=IL(w.value))}Array.isArray(v)?m.push(...v):m.push(v)}}}return m}}function bQ(e,t){e.position&&(t.position=_1(e))}function vQ(e,t){let n=t;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{let a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&i&&Object.assign(n.properties,nu(i)),"children"in n&&n.children&&o!==null&&o!==void 0&&(n.children=o)}return n}function yQ(e,t){let n=t.data||{},r="value"in t&&!(Y1.call(n,"hProperties")||Y1.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function xQ(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function IL(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Lg(e,t){let n=AL(e,t),r=n.one(e,void 0),o=OL(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&("children"in i,i.children.push({type:"text",value:`
`},o)),i}function Mg(e,t){return e&&"run"in e?async function(n,r){let o=Lg(n,{file:r,...t});await e.run(o,r)}:function(n,r){return Lg(n,{file:r,...t||e})}}function X1(e){if(e)throw e}var Fg=Q(jL(),1);function Wp(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Z1(){let e=[],t={run:n,use:r};return t;function n(...o){let i=-1,a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...o);function s(c,...p){let f=e[++i],m=-1;if(c){a(c);return}for(;++m<o.length;)(p[m]===null||p[m]===void 0)&&(p[m]=o[m]);o=p,f?HL(f,s)(...p):a(null,...p)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function HL(e,t){let n;return r;function r(...a){let s=e.length>a.length,c;s&&a.push(o);try{c=e.apply(this,a)}catch(p){let f=p;if(s&&n)throw f;return o(f)}s||(c&&c.then&&typeof c.then=="function"?c.then(i,o):c instanceof Error?o(c):i(c))}function o(a,...s){n||(n=!0,t(a,...s))}function i(a){o(null,a)}}var xo={basename:wQ,dirname:kQ,extname:SQ,join:_Q,sep:"/"};function wQ(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');qp(e);let n=0,r=-1,o=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else a<0&&(i=!0,a=o+1),s>-1&&(e.codePointAt(o)===t.codePointAt(s--)?s<0&&(r=o):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function kQ(e){if(qp(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function SQ(e){qp(e);let t=e.length,n=-1,r=0,o=-1,i=0,a;for(;t--;){let s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?o<0?o=t:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||n<0||i===0||i===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function _Q(...e){let t=-1,n;for(;++t<e.length;)qp(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":CQ(n)}function CQ(e){qp(e);let t=e.codePointAt(0)===47,n=EQ(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function EQ(e,t){let n="",r=0,o=-1,i=0,a=-1,s,c;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),o=a,i=0;continue}}else if(n.length>0){n="",r=0,o=a,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),r=a-o-1;o=a,i=0}else s===46&&i>-1?i++:i=-1}return n}function qp(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var WL={cwd:RQ};function RQ(){return"/"}function ru(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function qL(e){if(typeof e=="string")e=new URL(e);else if(!ru(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return TQ(e)}function TQ(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}var J1=["history","path","basename","stem","extname","dirname"],Al=class{constructor(t){let n;t?ru(t)?n={path:t}:typeof t=="string"||OQ(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":WL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<J1.length;){let i=J1[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let o;for(o in n)J1.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?xo.basename(this.path):void 0}set basename(t){tk(t,"basename"),ek(t,"basename"),this.path=xo.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?xo.dirname(this.path):void 0}set dirname(t){VL(this.basename,"dirname"),this.path=xo.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?xo.extname(this.path):void 0}set extname(t){if(ek(t,"extname"),VL(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xo.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ru(t)&&(t=qL(t)),tk(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?xo.basename(this.path,this.extname):void 0}set stem(t){tk(t,"stem"),ek(t,"stem"),this.path=xo.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){let o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){let o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){let o=new qt(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function ek(e,t){if(e&&e.includes(xo.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+xo.sep+"`")}function tk(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function VL(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function OQ(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var KL=function(e){let r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i};var PQ={}.hasOwnProperty,ik=class e extends KL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Z1()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r)}return t.data((0,Fg.default)(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ok("data",this.frozen),this.namespace[t]=n,this):PQ.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ok("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Ng(t),r=this.parser||this.Parser;return nk("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),nk("process",this.parser||this.Parser),rk("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(i,a){let s=Ng(t),c=r.parse(s);r.run(c,s,function(f,m,h){if(f||!m||!h)return p(f);let g=m,v=r.stringify(g,h);AQ(v)?h.value=v:h.result=v,p(f,h)});function p(f,m){f||!m?a(f):i?i(m):n(void 0,m)}}}processSync(t){let n=!1,r;return this.freeze(),nk("processSync",this.parser||this.Parser),rk("processSync",this.compiler||this.Compiler),this.process(t,o),GL("processSync","process",n),r;function o(i,a){n=!0,X1(i),r=a}}run(t,n,r){$L(t),this.freeze();let o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(a,s){let c=Ng(n);o.run(t,c,p);function p(f,m,h){let g=m||t;f?s(f):a?a(g):r(void 0,g,h)}}}runSync(t,n){let r=!1,o;return this.run(t,n,i),GL("runSync","run",r),o;function i(a,s){X1(a),o=s,r=!0}}stringify(t,n){this.freeze();let r=Ng(n),o=this.compiler||this.Compiler;return rk("stringify",o),$L(t),o(t,r)}use(t,...n){let r=this.attachers,o=this.namespace;if(ok("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(p){if(typeof p=="function")c(p,[]);else if(typeof p=="object")if(Array.isArray(p)){let[f,...m]=p;c(f,m)}else a(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function a(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(p.plugins),p.settings&&(o.settings=(0,Fg.default)(!0,o.settings,p.settings))}function s(p){let f=-1;if(p!=null)if(Array.isArray(p))for(;++f<p.length;){let m=p[f];i(m)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function c(p,f){let m=-1,h=-1;for(;++m<r.length;)if(r[m][0]===p){h=m;break}if(h===-1)r.push([p,...f]);else if(f.length>0){let[g,...v]=f,w=r[h][1];Wp(w)&&Wp(g)&&(g=(0,Fg.default)(!0,w,g)),r[h]=[p,g,...v]}}}},ak=new ik().freeze();function nk(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function rk(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ok(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function $L(e){if(!Wp(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function GL(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ng(e){return IQ(e)?e:new Al(e)}function IQ(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function AQ(e){return typeof e=="string"||LQ(e)}function LQ(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var MQ="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",QL=[],YL={allowDangerousHtml:!0},DQ=/^(https?|ircs?|mailto|xmpp)$/i,NQ=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function lk(e){let t=e.allowedElements,n=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,s=e.rehypePlugins||QL,c=e.remarkPlugins||QL,p=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...YL}:YL,f=e.skipHtml,m=e.unwrapDisallowed,h=e.urlTransform||XL,g=ak().use(kg).use(c).use(Mg,p).use(s),v=new Al;typeof r=="string"?v.value=r:(""+r,void 0),t&&a&&void 0;for(let x of NQ)Object.hasOwn(e,x.from)&&(""+x.from+(x.to?"use `"+x.to+"` instead":"remove it")+MQ+x.id,void 0);let w=g.parse(v),_=g.runSync(w,v);return o&&(_={type:"element",tagName:"div",properties:{className:o},children:_.type==="root"?_.children:[_]}),Ei(_,y),R1(_,{Fragment:ou.Fragment,components:i,ignoreInvalidStyle:!0,jsx:ou.jsx,jsxs:ou.jsxs,passKeys:!0,passNode:!0});function y(x,S,T){if(x.type==="raw"&&T&&typeof S=="number")return f?T.children.splice(S,1):T.children[S]={type:"text",value:x.value},S;if(x.type==="element"){let I;for(I in Ip)if(Object.hasOwn(Ip,I)&&Object.hasOwn(x.properties,I)){let R=x.properties[I],D=Ip[I];(D===null||D.includes(x.tagName))&&(x.properties[I]=h(String(R||""),I,x))}}if(x.type==="element"){let I=t?!t.includes(x.tagName):a?a.includes(x.tagName):!1;if(!I&&n&&typeof S=="number"&&(I=!n(x,S,T)),I&&T&&typeof S=="number")return m&&x.children?T.children.splice(S,1,...x.children):T.children.splice(S,1),S}}}function XL(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t<0||o>-1&&t>o||n>-1&&t>n||r>-1&&t>r||DQ.test(e.slice(0,t))?e:""}function sk(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function uk(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function ck(e,t,n){let o=Ca((n||{}).ignore||[]),i=FQ(t),a=-1;for(;++a<i.length;)Hp(e,"text",s);function s(p,f){let m=-1,h;for(;++m<f.length;){let g=f[m],v=h?h.children:void 0;if(o(g,v?v.indexOf(g):void 0,h))return;h=g}if(h)return c(p,f)}function c(p,f){let m=f[f.length-1],h=i[a][0],g=i[a][1],v=0,_=m.children.indexOf(p),y=!1,x=[];h.lastIndex=0;let S=h.exec(p.value);for(;S;){let T=S.index,I={index:S.index,input:S.input,stack:[...f,p]},R=g(...S,I);if(typeof R=="string"&&(R=R.length>0?{type:"text",value:R}:void 0),R===!1?h.lastIndex=T+1:(v!==T&&x.push({type:"text",value:p.value.slice(v,T)}),Array.isArray(R)?x.push(...R):R&&x.push(R),v=T+S[0].length,y=!0),!h.global)break;S=h.exec(p.value)}return y?(v<p.value.length&&x.push({type:"text",value:p.value.slice(v)}),m.children.splice(_,1,...x)):x=[p],_+x.length}}function FQ(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let o=n[r];t.push([zQ(o[0]),BQ(o[1])])}return t}function zQ(e){return typeof e=="string"?new RegExp(uk(e),"g"):e}function BQ(e){return typeof e=="function"?e:function(){return e}}var pk="phrasing",fk=["autolink","link","image","label"];function mk(){return{transforms:[VQ],enter:{literalAutolink:UQ,literalAutolinkEmail:dk,literalAutolinkHttp:dk,literalAutolinkWww:dk},exit:{literalAutolink:qQ,literalAutolinkEmail:WQ,literalAutolinkHttp:jQ,literalAutolinkWww:HQ}}}function hk(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:pk,notInConstruct:fk},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:pk,notInConstruct:fk},{character:":",before:"[ps]",after:"\\/",inConstruct:pk,notInConstruct:fk}]}}function UQ(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function dk(e){this.config.enter.autolinkProtocol.call(this,e)}function jQ(e){this.config.exit.autolinkProtocol.call(this,e)}function HQ(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function WQ(e){this.config.exit.autolinkEmail.call(this,e)}function qQ(e){this.exit(e)}function VQ(e){ck(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,KQ],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,$Q]],{ignore:["link","linkReference"]})}function KQ(e,t,n,r,o){let i="";if(!ZL(o)||(/^w/i.test(t)&&(n=t+n,t="",i="http://"),!GQ(n)))return!1;let a=QQ(n+r);if(!a[0])return!1;let s={type:"link",title:null,url:i+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function $Q(e,t,n,r){return!ZL(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function GQ(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function QQ(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),o=sk(e,"("),i=sk(e,")");for(;r!==-1&&o>i;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),i++;return[e,n]}function ZL(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Ho(n)||Rl(n))&&(!t||n!==47)}JL.peek=oY;function gk(){return{enter:{gfmFootnoteDefinition:YQ,gfmFootnoteDefinitionLabelString:XQ,gfmFootnoteCall:eY,gfmFootnoteCallString:tY},exit:{gfmFootnoteDefinition:JQ,gfmFootnoteDefinitionLabelString:ZQ,gfmFootnoteCall:rY,gfmFootnoteCallString:nY}}}function bk(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:iY,footnoteReference:JL}}}function YQ(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function XQ(){this.buffer()}function ZQ(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=jn(this.sliceSerialize(e)).toLowerCase()}function JQ(e){this.exit(e)}function eY(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function tY(){this.buffer()}function nY(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=jn(this.sliceSerialize(e)).toLowerCase()}function rY(e){this.exit(e)}function JL(e,t,n,r){let o=n.createTracker(r),i=o.move("[^"),a=n.enter("footnoteReference"),s=n.enter("reference");return i+=o.move(n.safe(n.associationId(e),{...o.current(),before:i,after:"]"})),s(),a(),i+=o.move("]"),i}function oY(){return"["}function iY(e,t,n,r){let o=n.createTracker(r),i=o.move("[^"),a=n.enter("footnoteDefinition"),s=n.enter("label");return i+=o.move(n.safe(n.associationId(e),{...o.current(),before:i,after:"]"})),s(),i+=o.move("]:"+(e.children&&e.children.length>0?" ":"")),o.shift(4),i+=o.move(n.indentLines(n.containerFlow(e,o.current()),aY)),a(),i}function aY(e,t,n){return t===0?e:(n?"":"    ")+e}var lY=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];e4.peek=cY;function vk(){return{canContainEols:["delete"],enter:{strikethrough:sY},exit:{strikethrough:uY}}}function yk(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:lY}],handlers:{delete:e4}}}function sY(e){this.enter({type:"delete",children:[]},e)}function uY(e){this.exit(e)}function e4(e,t,n,r){let o=n.createTracker(r),i=n.enter("strikethrough"),a=o.move("~~");return a+=n.containerPhrasing(e,{...o.current(),before:a,after:"~"}),a+=o.move("~~"),i(),a}function cY(){return"~"}function n4(e,t={}){let n=(t.align||[]).concat(),r=t.stringLength||fY,o=[],i=[],a=[],s=[],c=0,p=-1;for(;++p<e.length;){let v=[],w=[],_=-1;for(e[p].length>c&&(c=e[p].length);++_<e[p].length;){let y=pY(e[p][_]);if(t.alignDelimiters!==!1){let x=r(y);w[_]=x,(s[_]===void 0||x>s[_])&&(s[_]=x)}v.push(y)}i[p]=v,a[p]=w}let f=-1;if(typeof n=="object"&&"length"in n)for(;++f<c;)o[f]=t4(n[f]);else{let v=t4(n);for(;++f<c;)o[f]=v}f=-1;let m=[],h=[];for(;++f<c;){let v=o[f],w="",_="";v===99?(w=":",_=":"):v===108?w=":":v===114&&(_=":");let y=t.alignDelimiters===!1?1:Math.max(1,s[f]-w.length-_.length),x=w+"-".repeat(y)+_;t.alignDelimiters!==!1&&(y=w.length+y+_.length,y>s[f]&&(s[f]=y),h[f]=y),m[f]=x}i.splice(1,0,m),a.splice(1,0,h),p=-1;let g=[];for(;++p<i.length;){let v=i[p],w=a[p];f=-1;let _=[];for(;++f<c;){let y=v[f]||"",x="",S="";if(t.alignDelimiters!==!1){let T=s[f]-(w[f]||0),I=o[f];I===114?x=" ".repeat(T):I===99?T%2?(x=" ".repeat(T/2+.5),S=" ".repeat(T/2-.5)):(x=" ".repeat(T/2),S=x):S=" ".repeat(T)}t.delimiterStart!==!1&&!f&&_.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&y==="")&&(t.delimiterStart!==!1||f)&&_.push(" "),t.alignDelimiters!==!1&&_.push(x),_.push(y),t.alignDelimiters!==!1&&_.push(S),t.padding!==!1&&_.push(" "),(t.delimiterEnd!==!1||f!==c-1)&&_.push("|")}g.push(t.delimiterEnd===!1?_.join("").replace(/ +$/,""):_.join(""))}return g.join(`
`)}function pY(e){return e==null?"":String(e)}function fY(e){return e.length}function t4(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}var r4={}.hasOwnProperty;function o4(e,t){let n=t||{};function r(o,...i){let a=r.invalid,s=r.handlers;if(o&&r4.call(o,e)){let c=String(o[e]);a=r4.call(s,c)?s[c]:r.unknown}if(a)return a.call(this,o,...i)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}var dY={}.hasOwnProperty;function xk(e,t){let n=-1,r;if(t.extensions)for(;++n<t.extensions.length;)xk(e,t.extensions[n]);for(r in t)if(dY.call(t,r))switch(r){case"extensions":break;case"unsafe":{i4(e[r],t[r]);break}case"join":{i4(e[r],t[r]);break}case"handlers":{mY(e[r],t[r]);break}default:e.options[r]=t[r]}return e}function i4(e,t){t&&e.push(...t)}function mY(e,t){t&&Object.assign(e,t)}function a4(e,t,n,r){let o=n.enter("blockquote"),i=n.createTracker(r);i.move("> "),i.shift(2);let a=n.indentLines(n.containerFlow(e,i.current()),hY);return o(),a}function hY(e,t,n){return">"+(n?"":" ")+e}function zg(e,t){return l4(e,t.inConstruct,!0)&&!l4(e,t.notInConstruct,!1)}function l4(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function wk(e,t,n,r){let o=-1;for(;++o<n.unsafe.length;)if(n.unsafe[o].character===`
`&&zg(n.stack,n.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function s4(e,t){let n=String(e),r=n.indexOf(t),o=r,i=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===o?++i>a&&(a=i):i=1,o=r+t.length,r=n.indexOf(t,o);return a}function Vp(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function u4(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function c4(e,t,n,r){let o=u4(n),i=e.value||"",a=o==="`"?"GraveAccent":"Tilde";if(Vp(e,n)){let m=n.enter("codeIndented"),h=n.indentLines(i,gY);return m(),h}let s=n.createTracker(r),c=o.repeat(Math.max(s4(i,o)+1,3)),p=n.enter("codeFenced"),f=s.move(c);if(e.lang){let m=n.enter(`codeFencedLang${a}`);f+=s.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...s.current()})),m()}if(e.lang&&e.meta){let m=n.enter(`codeFencedMeta${a}`);f+=s.move(" "),f+=s.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...s.current()})),m()}return f+=s.move(`
`),i&&(f+=s.move(i+`
`)),f+=s.move(c),p(),f}function gY(e,t,n){return(n?"":"    ")+e}function iu(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function p4(e,t,n,r){let o=iu(n),i=o==='"'?"Quote":"Apostrophe",a=n.enter("definition"),s=n.enter("label"),c=n.createTracker(r),p=c.move("[");return p+=c.move(n.safe(n.associationId(e),{before:p,after:"]",...c.current()})),p+=c.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(n.safe(e.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(s=n.enter("destinationRaw"),p+=c.move(n.safe(e.url,{before:p,after:e.title?" ":`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${i}`),p+=c.move(" "+o),p+=c.move(n.safe(e.title,{before:p,after:o,...c.current()})),p+=c.move(o),s()),a(),p}function f4(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}kk.peek=bY;function kk(e,t,n,r){let o=f4(n),i=n.enter("emphasis"),a=n.createTracker(r),s=a.move(o);return s+=a.move(n.containerPhrasing(e,{before:s,after:o,...a.current()})),s+=a.move(o),i(),s}function bY(e,t,n){return n.options.emphasis||"*"}function Bg(e,t){let n=!1;return Ei(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Il}),!!((!e.depth||e.depth<3)&&Cl(e)&&(t.options.setext||n))}function d4(e,t,n,r){let o=Math.max(Math.min(6,e.depth||1),1),i=n.createTracker(r);if(Bg(e,n)){let f=n.enter("headingSetext"),m=n.enter("phrasing"),h=n.containerPhrasing(e,{...i.current(),before:`
`,after:`
`});return m(),f(),h+`
`+(o===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}let a="#".repeat(o),s=n.enter("headingAtx"),c=n.enter("phrasing");i.move(a+" ");let p=n.containerPhrasing(e,{before:"# ",after:`
`,...i.current()});return/^[\t ]/.test(p)&&(p="&#x"+p.charCodeAt(0).toString(16).toUpperCase()+";"+p.slice(1)),p=p?a+" "+p:a,n.options.closeAtx&&(p+=" "+a),c(),s(),p}Sk.peek=vY;function Sk(e){return e.value||""}function vY(){return"<"}_k.peek=yY;function _k(e,t,n,r){let o=iu(n),i=o==='"'?"Quote":"Apostrophe",a=n.enter("image"),s=n.enter("label"),c=n.createTracker(r),p=c.move("![");return p+=c.move(n.safe(e.alt,{before:p,after:"]",...c.current()})),p+=c.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(n.safe(e.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(s=n.enter("destinationRaw"),p+=c.move(n.safe(e.url,{before:p,after:e.title?" ":")",...c.current()}))),s(),e.title&&(s=n.enter(`title${i}`),p+=c.move(" "+o),p+=c.move(n.safe(e.title,{before:p,after:o,...c.current()})),p+=c.move(o),s()),p+=c.move(")"),a(),p}function yY(){return"!"}Ck.peek=xY;function Ck(e,t,n,r){let o=e.referenceType,i=n.enter("imageReference"),a=n.enter("label"),s=n.createTracker(r),c=s.move("!["),p=n.safe(e.alt,{before:c,after:"]",...s.current()});c+=s.move(p+"]["),a();let f=n.stack;n.stack=[],a=n.enter("reference");let m=n.safe(n.associationId(e),{before:c,after:"]",...s.current()});return a(),n.stack=f,i(),o==="full"||!p||p!==m?c+=s.move(m+"]"):o==="shortcut"?c=c.slice(0,-1):c+=s.move("]"),c}function xY(){return"!"}Ek.peek=wY;function Ek(e,t,n){let r=e.value||"",o="`",i=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<n.unsafe.length;){let a=n.unsafe[i],s=n.compilePattern(a),c;if(a.atBreak)for(;c=s.exec(r);){let p=c.index;r.charCodeAt(p)===10&&r.charCodeAt(p-1)===13&&p--,r=r.slice(0,p)+" "+r.slice(c.index+1)}}return o+r+o}function wY(){return"`"}function Rk(e,t){let n=Cl(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Tk.peek=kY;function Tk(e,t,n,r){let o=iu(n),i=o==='"'?"Quote":"Apostrophe",a=n.createTracker(r),s,c;if(Rk(e,n)){let f=n.stack;n.stack=[],s=n.enter("autolink");let m=a.move("<");return m+=a.move(n.containerPhrasing(e,{before:m,after:">",...a.current()})),m+=a.move(">"),s(),n.stack=f,m}s=n.enter("link"),c=n.enter("label");let p=a.move("[");return p+=a.move(n.containerPhrasing(e,{before:p,after:"](",...a.current()})),p+=a.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter("destinationLiteral"),p+=a.move("<"),p+=a.move(n.safe(e.url,{before:p,after:">",...a.current()})),p+=a.move(">")):(c=n.enter("destinationRaw"),p+=a.move(n.safe(e.url,{before:p,after:e.title?" ":")",...a.current()}))),c(),e.title&&(c=n.enter(`title${i}`),p+=a.move(" "+o),p+=a.move(n.safe(e.title,{before:p,after:o,...a.current()})),p+=a.move(o),c()),p+=a.move(")"),s(),p}function kY(e,t,n){return Rk(e,n)?"<":"["}Ok.peek=SY;function Ok(e,t,n,r){let o=e.referenceType,i=n.enter("linkReference"),a=n.enter("label"),s=n.createTracker(r),c=s.move("["),p=n.containerPhrasing(e,{before:c,after:"]",...s.current()});c+=s.move(p+"]["),a();let f=n.stack;n.stack=[],a=n.enter("reference");let m=n.safe(n.associationId(e),{before:c,after:"]",...s.current()});return a(),n.stack=f,i(),o==="full"||!p||p!==m?c+=s.move(m+"]"):o==="shortcut"?c=c.slice(0,-1):c+=s.move("]"),c}function SY(){return"["}function au(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function m4(e){let t=au(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function h4(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Ug(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function g4(e,t,n,r){let o=n.enter("list"),i=n.bulletCurrent,a=e.ordered?h4(n):au(n),s=e.ordered?a==="."?")":".":m4(n),c=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){let f=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Ug(n)===a&&f){let m=-1;for(;++m<e.children.length;){let h=e.children[m];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){c=!0;break}}}}c&&(a=s),n.bulletCurrent=a;let p=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=i,o(),p}function b4(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function v4(e,t,n,r){let o=b4(n),i=n.bulletCurrent||au(n);t&&t.type==="list"&&t.ordered&&(i=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+i);let a=i.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);let s=n.createTracker(r);s.move(i+" ".repeat(a-i.length)),s.shift(a);let c=n.enter("listItem"),p=n.indentLines(n.containerFlow(e,s.current()),f);return c(),p;function f(m,h,g){return h?(g?"":" ".repeat(a))+m:(g?i:i+" ".repeat(a-i.length))+m}}function y4(e,t,n,r){let o=n.enter("paragraph"),i=n.enter("phrasing"),a=n.containerPhrasing(e,r);return i(),o(),a}var Pk=Ca(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function x4(e,t,n,r){return(e.children.some(function(a){return Pk(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function w4(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ik.peek=_Y;function Ik(e,t,n,r){let o=w4(n),i=n.enter("strong"),a=n.createTracker(r),s=a.move(o+o);return s+=a.move(n.containerPhrasing(e,{before:s,after:o,...a.current()})),s+=a.move(o+o),i(),s}function _Y(e,t,n){return n.options.strong||"*"}function k4(e,t,n,r){return n.safe(e.value,r)}function S4(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function _4(e,t,n){let r=(Ug(n)+(n.options.ruleSpaces?" ":"")).repeat(S4(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Ll={blockquote:a4,break:wk,code:c4,definition:p4,emphasis:kk,hardBreak:wk,heading:d4,html:Sk,image:_k,imageReference:Ck,inlineCode:Ek,link:Tk,linkReference:Ok,list:g4,listItem:v4,paragraph:y4,root:x4,strong:Ik,text:k4,thematicBreak:_4};var C4=[CY];function CY(e,t,n,r){if(t.type==="code"&&Vp(t,r)&&(e.type==="list"||e.type===t.type&&Vp(e,r)))return!1;if("spread"in n&&typeof n.spread=="boolean")return e.type==="paragraph"&&(e.type===t.type||t.type==="definition"||t.type==="heading"&&Bg(t,r))?void 0:n.spread?1:0}var Ml=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],E4=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:Ml},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:Ml},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:Ml},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:Ml},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:Ml},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:Ml},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:Ml},{atBreak:!0,character:"~"}];function R4(e){return e.label||!e.identifier?e.label||"":wg(e.identifier)}function T4(e){if(!e._compiled){let t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function O4(e,t,n){let r=t.indexStack,o=e.children||[],i=[],a=-1,s=n.before;r.push(-1);let c=t.createTracker(n);for(;++a<o.length;){let p=o[a],f;if(r[r.length-1]=a,a+1<o.length){let m=t.handle.handlers[o[a+1].type];m&&m.peek&&(m=m.peek),f=m?m(o[a+1],e,t,{before:"",after:"",...c.current()}).charAt(0):""}else f=n.after;i.length>0&&(s==="\r"||s===`
`)&&p.type==="html"&&(i[i.length-1]=i[i.length-1].replace(/(\r?\n|\r)$/," "),s=" ",c=t.createTracker(n),c.move(i.join(""))),i.push(c.move(t.handle(p,e,t,{...c.current(),before:s,after:f}))),s=i[i.length-1].slice(-1)}return r.pop(),i.join("")}function P4(e,t,n){let r=t.indexStack,o=e.children||[],i=t.createTracker(n),a=[],s=-1;for(r.push(-1);++s<o.length;){let c=o[s];r[r.length-1]=s,a.push(i.move(t.handle(c,e,t,{before:`
`,after:`
`,...i.current()}))),c.type!=="list"&&(t.bulletLastUsed=void 0),s<o.length-1&&a.push(i.move(EY(c,o[s+1],e,t)))}return r.pop(),a.join("")}function EY(e,t,n,r){let o=r.join.length;for(;o--;){let i=r.join[o](e,t,n,r);if(i===!0||i===1)break;if(typeof i=="number")return`
`.repeat(1+i);if(i===!1)return`

<!---->

`}return`

`}var RY=/\r?\n|\r/g;function I4(e,t){let n=[],r=0,o=0,i;for(;i=RY.exec(e);)a(e.slice(r,i.index)),n.push(i[0]),r=i.index+i[0].length,o++;return a(e.slice(r)),n.join("");function a(s){n.push(t(s,o,!s))}}function L4(e,t,n){let r=(n.before||"")+(t||"")+(n.after||""),o=[],i=[],a={},s=-1;for(;++s<e.unsafe.length;){let f=e.unsafe[s];if(!zg(e.stack,f))continue;let m=e.compilePattern(f),h;for(;h=m.exec(r);){let g="before"in f||!!f.atBreak,v="after"in f,w=h.index+(g?h[1].length:0);o.includes(w)?(a[w].before&&!g&&(a[w].before=!1),a[w].after&&!v&&(a[w].after=!1)):(o.push(w),a[w]={before:g,after:v})}}o.sort(TY);let c=n.before?n.before.length:0,p=r.length-(n.after?n.after.length:0);for(s=-1;++s<o.length;){let f=o[s];f<c||f>=p||f+1<p&&o[s+1]===f+1&&a[f].after&&!a[f+1].before&&!a[f+1].after||o[s-1]===f-1&&a[f].before&&!a[f-1].before&&!a[f-1].after||(c!==f&&i.push(A4(r.slice(c,f),"\\")),c=f,/[!-/:-@[-`{-~]/.test(r.charAt(f))&&(!n.encode||!n.encode.includes(r.charAt(f)))?i.push("\\"):(i.push("&#x"+r.charCodeAt(f).toString(16).toUpperCase()+";"),c++))}return i.push(A4(r.slice(c,p),n.after)),i.join("")}function TY(e,t){return e-t}function A4(e,t){let n=/\\(?=[!-/:-@[-`{-~])/g,r=[],o=[],i=e+t,a=-1,s=0,c;for(;c=n.exec(i);)r.push(c.index);for(;++a<r.length;)s!==r[a]&&o.push(e.slice(s,r[a])),o.push("\\"),s=r[a];return o.push(e.slice(s)),o.join("")}function M4(e){let t=e||{},n=t.now||{},r=t.lineShift||0,o=n.line||1,i=n.column||1;return{move:c,current:a,shift:s};function a(){return{now:{line:o,column:i},lineShift:r}}function s(p){r+=p}function c(p){let f=p||"",m=f.split(/\r?\n|\r/g),h=m[m.length-1];return o+=m.length-1,i=m.length===1?i+h.length:1+h.length+r,f}}function Ak(e,t={}){let n={enter:o,indentLines:I4,associationId:R4,containerPhrasing:AY,containerFlow:LY,createTracker:M4,compilePattern:T4,safe:MY,stack:[],unsafe:[...E4],join:[...C4],handlers:{...Ll},options:{},indexStack:[],handle:void 0};xk(n,t),n.options.tightDefinitions&&n.join.push(IY),n.handle=o4("type",{invalid:OY,unknown:PY,handlers:n.handlers});let r=n.handle(e,void 0,n,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return r&&r.charCodeAt(r.length-1)!==10&&r.charCodeAt(r.length-1)!==13&&(r+=`
`),r;function o(i){return n.stack.push(i),a;function a(){n.stack.pop()}}}function OY(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function PY(e){let t=e;throw new Error("Cannot handle unknown node `"+t.type+"`")}function IY(e,t){if(e.type==="definition"&&e.type===t.type)return 0}function AY(e,t){return O4(e,this,t)}function LY(e,t){return P4(e,this,t)}function MY(e,t){return L4(this,e,t)}function Mk(){return{enter:{table:DY,tableData:D4,tableHeader:D4,tableRow:FY},exit:{codeText:zY,table:NY,tableData:Lk,tableHeader:Lk,tableRow:Lk}}}function DY(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function NY(e){this.exit(e),this.data.inTable=void 0}function FY(e){this.enter({type:"tableRow",children:[]},e)}function Lk(e){this.exit(e)}function D4(e){this.enter({type:"tableCell",children:[]},e)}function zY(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,BY));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function BY(e,t){return t==="|"?t:e}function Dk(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,o=t.stringLength,i=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:a,tableCell:c,tableRow:s}};function a(g,v,w,_){return p(f(g,w,_),g.align)}function s(g,v,w,_){let y=m(g,w,_),x=p([y]);return x.slice(0,x.indexOf(`
`))}function c(g,v,w,_){let y=w.enter("tableCell"),x=w.enter("phrasing"),S=w.containerPhrasing(g,{..._,before:i,after:i});return x(),y(),S}function p(g,v){return n4(g,{align:v,alignDelimiters:r,padding:n,stringLength:o})}function f(g,v,w){let _=g.children,y=-1,x=[],S=v.enter("table");for(;++y<_.length;)x[y]=m(_[y],v,w);return S(),x}function m(g,v,w){let _=g.children,y=-1,x=[],S=v.enter("tableRow");for(;++y<_.length;)x[y]=c(_[y],g,v,w);return S(),x}function h(g,v,w){let _=Ll.inlineCode(g,v,w);return w.stack.includes("tableCell")&&(_=_.replace(/\|/g,"\\$&")),_}}function Nk(){return{exit:{taskListCheckValueChecked:N4,taskListCheckValueUnchecked:N4,paragraph:UY}}}function Fk(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:jY}}}function N4(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function UY(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let o=t.children,i=-1,a;for(;++i<o.length;){let s=o[i];if(s.type==="paragraph"){a=s;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function jY(e,t,n,r){let o=e.children[0],i=typeof e.checked=="boolean"&&o&&o.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);i&&s.move(a);let c=Ll.listItem(e,t,n,{...r,...s.current()});return i&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),c;function p(f){return f+a}}function Kp(){return[mk(),gk(),vk(),Mk(),Nk()]}function $p(e){return{extensions:[hk(),bk(),yk(),Dk(e),Fk()]}}var HY={tokenize:$Y,partial:!0},F4={tokenize:GY,partial:!0},z4={tokenize:QY,partial:!0},B4={tokenize:YY,partial:!0},WY={tokenize:XY,partial:!0},U4={name:"wwwAutolink",tokenize:VY,previous:H4},j4={name:"protocolAutolink",tokenize:KY,previous:W4},Ri={name:"emailAutolink",tokenize:qY,previous:q4},qo={};function Bk(){return{text:qo}}var Dl=48;for(;Dl<123;)qo[Dl]=Ri,Dl++,Dl===58?Dl=65:Dl===91&&(Dl=97);qo[43]=Ri;qo[45]=Ri;qo[46]=Ri;qo[95]=Ri;qo[72]=[Ri,j4];qo[104]=[Ri,j4];qo[87]=[Ri,U4];qo[119]=[Ri,U4];function qY(e,t,n){let r=this,o,i;return a;function a(m){return!zk(m)||!q4.call(r,r.previous)||Uk(r.events)?n(m):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(m))}function s(m){return zk(m)?(e.consume(m),s):m===64?(e.consume(m),c):n(m)}function c(m){return m===46?e.check(WY,f,p)(m):m===45||m===95||Bt(m)?(i=!0,e.consume(m),c):f(m)}function p(m){return e.consume(m),o=!0,c}function f(m){return i&&o&&rn(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(m)):n(m)}}function VY(e,t,n){let r=this;return o;function o(a){return a!==87&&a!==119||!H4.call(r,r.previous)||Uk(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(HY,e.attempt(F4,e.attempt(z4,i),n),n)(a))}function i(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function KY(e,t,n){let r=this,o="",i=!1;return a;function a(m){return(m===72||m===104)&&W4.call(r,r.previous)&&!Uk(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(m),e.consume(m),s):n(m)}function s(m){if(rn(m)&&o.length<5)return o+=String.fromCodePoint(m),e.consume(m),s;if(m===58){let h=o.toLowerCase();if(h==="http"||h==="https")return e.consume(m),c}return n(m)}function c(m){return m===47?(e.consume(m),i?p:(i=!0,c)):n(m)}function p(m){return m===null||El(m)||Ue(m)||Ho(m)||Rl(m)?n(m):e.attempt(F4,e.attempt(z4,f),n)(m)}function f(m){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(m)}}function $Y(e,t,n){let r=0;return o;function o(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),o):a===46&&r===3?(e.consume(a),i):n(a)}function i(a){return a===null?n(a):t(a)}}function GY(e,t,n){let r,o,i;return a;function a(p){return p===46||p===95?e.check(B4,c,s)(p):p===null||Ue(p)||Ho(p)||p!==45&&Rl(p)?c(p):(i=!0,e.consume(p),a)}function s(p){return p===95?r=!0:(o=r,r=void 0),e.consume(p),a}function c(p){return o||r||!i?n(p):t(p)}}function QY(e,t){let n=0,r=0;return o;function o(a){return a===40?(n++,e.consume(a),o):a===41&&r<n?i(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(B4,t,i)(a):a===null||Ue(a)||Ho(a)?t(a):(e.consume(a),o)}function i(a){return a===41&&r++,e.consume(a),o}}function YY(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),i):s===93?(e.consume(s),o):s===60||s===null||Ue(s)||Ho(s)?t(s):n(s)}function o(s){return s===null||s===40||s===91||Ue(s)||Ho(s)?t(s):r(s)}function i(s){return rn(s)?a(s):n(s)}function a(s){return s===59?(e.consume(s),r):rn(s)?(e.consume(s),a):n(s)}}function XY(e,t,n){return r;function r(i){return e.consume(i),o}function o(i){return Bt(i)?n(i):t(i)}}function H4(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Ue(e)}function W4(e){return!rn(e)}function q4(e){return!(e===47||zk(e))}function zk(e){return e===43||e===45||e===46||e===95||Bt(e)}function Uk(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var ZY={tokenize:iX,partial:!0};function jk(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:nX,continuation:{tokenize:rX},exit:oX}},text:{91:{name:"gfmFootnoteCall",tokenize:tX},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:JY,resolveTo:eX}}}}function JY(e,t,n){let r=this,o=r.events.length,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a;for(;o--;){let c=r.events[o][1];if(c.type==="labelImage"){a=c;break}if(c.type==="gfmFootnoteCall"||c.type==="labelLink"||c.type==="label"||c.type==="image"||c.type==="link")break}return s;function s(c){if(!a||!a._balanced)return n(c);let p=jn(r.sliceSerialize({start:a.end,end:r.now()}));return p.codePointAt(0)!==94||!i.includes(p.slice(1))?n(c):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),t(c))}}function eX(e,t){let n=e.length,r;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){r=e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let o={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},c=[e[n+1],e[n+2],["enter",o,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",a,t],["enter",s,t],["exit",s,t],["exit",a,t],e[e.length-2],e[e.length-1],["exit",o,t]];return e.splice(n,e.length-n+1,...c),e}function tX(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i=0,a;return s;function s(m){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),c}function c(m){return m!==94?n(m):(e.enter("gfmFootnoteCallMarker"),e.consume(m),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",p)}function p(m){if(i>999||m===93&&!a||m===null||m===91||Ue(m))return n(m);if(m===93){e.exit("chunkString");let h=e.exit("gfmFootnoteCallString");return o.includes(jn(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(m)}return Ue(m)||(a=!0),i++,e.consume(m),m===92?f:p}function f(m){return m===91||m===92||m===93?(e.consume(m),i++,p):p(m)}}function nX(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i,a=0,s;return c;function c(v){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(v){return v===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(v)}function f(v){if(a>999||v===93&&!s||v===null||v===91||Ue(v))return n(v);if(v===93){e.exit("chunkString");let w=e.exit("gfmFootnoteDefinitionLabelString");return i=jn(r.sliceSerialize(w)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return Ue(v)||(s=!0),a++,e.consume(v),v===92?m:f}function m(v){return v===91||v===92||v===93?(e.consume(v),a++,f):f(v)}function h(v){return v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),o.includes(i)||o.push(i),me(e,g,"gfmFootnoteDefinitionWhitespace")):n(v)}function g(v){return t(v)}}function rX(e,t,n){return e.check(Wo,t,e.attempt(ZY,t,n))}function oX(e){e.exit("gfmFootnoteDefinition")}function iX(e,t,n){let r=this;return me(e,o,"gfmFootnoteDefinitionIndent",5);function o(i){let a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(i):n(i)}}function Hk(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:i,resolveAll:o};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function o(a,s){let c=-1;for(;++c<a.length;)if(a[c][0]==="enter"&&a[c][1].type==="strikethroughSequenceTemporary"&&a[c][1]._close){let p=c;for(;p--;)if(a[p][0]==="exit"&&a[p][1].type==="strikethroughSequenceTemporary"&&a[p][1]._open&&a[c][1].end.offset-a[c][1].start.offset===a[p][1].end.offset-a[p][1].start.offset){a[c][1].type="strikethroughSequence",a[p][1].type="strikethroughSequence";let f={type:"strikethrough",start:Object.assign({},a[p][1].start),end:Object.assign({},a[c][1].end)},m={type:"strikethroughText",start:Object.assign({},a[p][1].end),end:Object.assign({},a[c][1].start)},h=[["enter",f,s],["enter",a[p][1],s],["exit",a[p][1],s],["enter",m,s]],g=s.parser.constructs.insideSpan.null;g&&Yt(h,h.length,0,Sa(g,a.slice(p+1,c),s)),Yt(h,h.length,0,[["exit",m,s],["enter",a[c][1],s],["exit",a[c][1],s],["exit",f,s]]),Yt(a,p-1,c-p+3,h),c=p+h.length-2;break}}for(c=-1;++c<a.length;)a[c][1].type==="strikethroughSequenceTemporary"&&(a[c][1].type="data");return a}function i(a,s,c){let p=this.previous,f=this.events,m=0;return h;function h(v){return p===126&&f[f.length-1][1].type!=="characterEscape"?c(v):(a.enter("strikethroughSequenceTemporary"),g(v))}function g(v){let w=eu(p);if(v===126)return m>1?c(v):(a.consume(v),m++,g);if(m<2&&!n)return c(v);let _=a.exit("strikethroughSequenceTemporary"),y=eu(v);return _._open=!y||y===2&&!!w,_._close=!w||w===2&&!!y,s(v)}}}var jg=class{constructor(){this.map=[]}add(t,n,r){aX(this,t,n,r)}consume(t){if(this.map.sort(function(i,a){return i[0]-a[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push([...t]),t.length=0;let o=r.pop();for(;o;)t.push(...o),o=r.pop();this.map.length=0}};function aX(e,t,n,r){let o=0;if(!(n===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=n,e.map[o][2].push(...r);return}o+=1}e.map.push([t,n,r])}}function V4(e,t){let n=!1,r=[];for(;t<e.length;){let o=e[t];if(n){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let i=r.length-1;r[i]=r[i]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Wk(){return{flow:{null:{name:"table",tokenize:lX,resolveAll:sX}}}}function lX(e,t,n){let r=this,o=0,i=0,a;return s;function s(A){let te=r.events.length-1;for(;te>-1;){let ie=r.events[te][1].type;if(ie==="lineEnding"||ie==="linePrefix")te--;else break}let Z=te>-1?r.events[te][1].type:null,G=Z==="tableHead"||Z==="tableRow"?R:c;return G===R&&r.parser.lazy[r.now().line]?n(A):G(A)}function c(A){return e.enter("tableHead"),e.enter("tableRow"),p(A)}function p(A){return A===124||(a=!0,i+=1),f(A)}function f(A){return A===null?n(A):oe(A)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),g):n(A):ge(A)?me(e,f,"whitespace")(A):(i+=1,a&&(a=!1,o+=1),A===124?(e.enter("tableCellDivider"),e.consume(A),e.exit("tableCellDivider"),a=!0,f):(e.enter("data"),m(A)))}function m(A){return A===null||A===124||Ue(A)?(e.exit("data"),f(A)):(e.consume(A),A===92?h:m)}function h(A){return A===92||A===124?(e.consume(A),m):m(A)}function g(A){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(A):(e.enter("tableDelimiterRow"),a=!1,ge(A)?me(e,v,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):v(A))}function v(A){return A===45||A===58?_(A):A===124?(a=!0,e.enter("tableCellDivider"),e.consume(A),e.exit("tableCellDivider"),w):I(A)}function w(A){return ge(A)?me(e,_,"whitespace")(A):_(A)}function _(A){return A===58?(i+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(A),e.exit("tableDelimiterMarker"),y):A===45?(i+=1,y(A)):A===null||oe(A)?T(A):I(A)}function y(A){return A===45?(e.enter("tableDelimiterFiller"),x(A)):I(A)}function x(A){return A===45?(e.consume(A),x):A===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(A),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(A))}function S(A){return ge(A)?me(e,T,"whitespace")(A):T(A)}function T(A){return A===124?v(A):A===null||oe(A)?!a||o!==i?I(A):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(A)):I(A)}function I(A){return n(A)}function R(A){return e.enter("tableRow"),D(A)}function D(A){return A===124?(e.enter("tableCellDivider"),e.consume(A),e.exit("tableCellDivider"),D):A===null||oe(A)?(e.exit("tableRow"),t(A)):ge(A)?me(e,D,"whitespace")(A):(e.enter("data"),z(A))}function z(A){return A===null||A===124||Ue(A)?(e.exit("data"),D(A)):(e.consume(A),A===92?U:z)}function U(A){return A===92||A===124?(e.consume(A),z):z(A)}}function sX(e,t){let n=-1,r=!0,o=0,i=[0,0,0,0],a=[0,0,0,0],s=!1,c=0,p,f,m,h=new jg;for(;++n<e.length;){let g=e[n],v=g[1];g[0]==="enter"?v.type==="tableHead"?(s=!1,c!==0&&(K4(h,t,c,p,f),f=void 0,c=0),p={type:"table",start:Object.assign({},v.start),end:Object.assign({},v.end)},h.add(n,0,[["enter",p,t]])):v.type==="tableRow"||v.type==="tableDelimiterRow"?(r=!0,m=void 0,i=[0,0,0,0],a=[0,n+1,0,0],s&&(s=!1,f={type:"tableBody",start:Object.assign({},v.start),end:Object.assign({},v.end)},h.add(n,0,[["enter",f,t]])),o=v.type==="tableDelimiterRow"?2:f?3:1):o&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(i[1]!==0&&(a[0]=a[1],m=Hg(h,t,i,o,void 0,m),i=[0,0,0,0]),a[2]=n)):v.type==="tableCellDivider"&&(r?r=!1:(i[1]!==0&&(a[0]=a[1],m=Hg(h,t,i,o,void 0,m)),i=a,a=[i[1],n,0,0])):v.type==="tableHead"?(s=!0,c=n):v.type==="tableRow"||v.type==="tableDelimiterRow"?(c=n,i[1]!==0?(a[0]=a[1],m=Hg(h,t,i,o,n,m)):a[1]!==0&&(m=Hg(h,t,a,o,n,m)),o=0):o&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")&&(a[3]=n)}for(c!==0&&K4(h,t,c,p,f),h.consume(t.events),n=-1;++n<t.events.length;){let g=t.events[n];g[0]==="enter"&&g[1].type==="table"&&(g[1]._align=V4(t.events,n))}return e}function Hg(e,t,n,r,o,i){let a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(i.end=Object.assign({},lu(t.events,n[0])),e.add(n[0],0,[["exit",i,t]]));let c=lu(t.events,n[1]);if(i={type:a,start:Object.assign({},c),end:Object.assign({},c)},e.add(n[1],0,[["enter",i,t]]),n[2]!==0){let p=lu(t.events,n[2]),f=lu(t.events,n[3]),m={type:s,start:Object.assign({},p),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",m,t]]),r!==2){let h=t.events[n[2]],g=t.events[n[3]];if(h[1].end=Object.assign({},g[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){let v=n[2]+1,w=n[3]-n[2]-1;e.add(v,w,[])}}e.add(n[3]+1,0,[["exit",m,t]])}return o!==void 0&&(i.end=Object.assign({},lu(t.events,o)),e.add(o,0,[["exit",i,t]]),i=void 0),i}function K4(e,t,n,r,o){let i=[],a=lu(t.events,n);o&&(o.end=Object.assign({},a),i.push(["exit",o,t])),r.end=Object.assign({},a),i.push(["exit",r,t]),e.add(n+1,0,i)}function lu(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var uX={name:"tasklistCheck",tokenize:cX};function qk(){return{text:{91:uX}}}function cX(e,t,n){let r=this;return o;function o(c){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(c):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),i)}function i(c){return Ue(c)?(e.enter("taskListCheckValueUnchecked"),e.consume(c),e.exit("taskListCheckValueUnchecked"),a):c===88||c===120?(e.enter("taskListCheckValueChecked"),e.consume(c),e.exit("taskListCheckValueChecked"),a):n(c)}function a(c){return c===93?(e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(c)}function s(c){return oe(c)?t(c):ge(c)?e.check({tokenize:pX},t,n)(c):n(c)}}function pX(e,t,n){return me(e,r,"whitespace");function r(o){return o===null?n(o):t(o)}}function Wg(e){return ug([Bk(),jk(),Hk(e),Wk(),qk()])}var fX={};function qg(e){let t=this,n=e||fX,r=t.data(),o=r.micromarkExtensions||(r.micromarkExtensions=[]),i=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);o.push(Wg(n)),i.push(Kp()),a.push($p(n))}var G4=Q(xt(),1),dX=({blockMatch:e})=>{let t=e.output;return(0,G4.jsx)(lk,{remarkPlugins:[qg],children:t})},$4=dX;var mX=function(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};function Q4(e,t,n){var r=function(i){return e.apply(void 0,mX([i],Array.from(t),!1))},o=n??e.lazy;return o===void 0?r:Object.assign(r,{lazy:o,lazyArgs:t})}function Y4(e,t,n){var r=e.length-t.length;if(r===0)return e.apply(void 0,Array.from(t));if(r===1)return Q4(e,t,n);throw new Error("Wrong number of arguments")}function X4(){return Y4(Gp,arguments)}function Gp(e,t){if(e===t)return!0;if(typeof e=="number"&&typeof t=="number")return e!==e&&t!==t;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(e instanceof Set)return gX(e,t);if(Array.isArray(e)){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Gp(e[n],t[n]))return!1;return!0}if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(e instanceof Map)return hX(e,t);var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var o=0,i=r;o<i.length;o++){var a=i[o];if(!Object.prototype.hasOwnProperty.call(t,a)||!Gp(e[a],t[a]))return!1}return!0}function hX(e,t){if(e.size!==t.size)return!1;for(var n=Array.from(e.keys()),r=0,o=n;r<o.length;r++){var i=o[r];if(!t.has(i)||!Gp(e.get(i),t.get(i)))return!1}return!0}function gX(e,t){if(e.size!==t.size)return!1;for(var n=Array.from(e.values()),r=Array.from(t.values()),o=0,i=n;o<i.length;o++){for(var a=i[o],s=!1,c=0;c<r.length;c++)if(Gp(a,r[c])){s=!0,r.splice(c,1);break}if(!s)return!1}return!0}var Z4="\u200B",bX=/(\*{1,3}|(^|\s|\n)_{1,3}|~{1,3})(\S|$)/,vX=/(\[$|\[[^\]]+$|\[[^\]]+\]$|\[[^\]]+\]\(.*$)/,yX=e=>e.children.length===1&&e.children[0].type==="listItem"&&e.children[0].children.length===0,xX=(e,t)=>!!(e.position&&e.position.start.line===e.position.end.line&&e.position.end.column&&e.position.start.column&&e.position.end.column-e.position.start.column===t),J4=e=>Fp(e,{extensions:[Wg()],mdastExtensions:[Kp()]}),wX=e=>(CX(e),Ak(e,{extensions:[$p()]})),kX=e=>{let t=e.lastIndexOf(`
`);return e.slice(t+1)},SX=e=>e.replace(/ $/,` ${Z4}`),_X=e=>e.replaceAll(Z4,""),CX=e=>(Ei(e,"text",(t,n,r)=>{r&&["emphasis","strong","delete"].includes(r.type)&&r.children.findIndex(a=>X4(a.position,t.position))===r.children.length-1&&(t.value=SX(t.value))}),e),EX=(e,t,n)=>{n.forEach(r=>{RX(e,t,r)})},RX=(e,t,n)=>{let r=t.children.findIndex(o=>o.type==="text"&&n.test(kX(o.value)));if(r!==-1){let i=t.children[r].value,a=n.exec(i).index;a>0?(t.children[r]={type:"text",value:i.slice(0,a)},t.children.splice(r+1)):t.children.splice(r),t.children.length===0&&e.children.splice(-1)}return r!==-1},e6=e=>{if(e.children.length===0)return;let t=e.children[e.children.length-1];t.type==="paragraph"?EX(e,t,[bX,vX]):(t.type==="list"&&yX(t)&&xX(t,1)||t.type==="thematicBreak")&&e.children.splice(-1)},t6="_",n6="*",Qp=e=>e.children.map(t=>t.type==="text"||t.type==="inlineCode"?t.value:t.type==="thematicBreak"?t6:t.type==="heading"||t.type==="paragraph"?Qp(t):t.type==="listItem"?n6+Qp(t):"children"in t?Qp(t):"").join(""),r6=(e,t)=>(t||e6(e),_X(Qp(e)).replaceAll(`
`,"")),TX=(e,t)=>{let n=J4(e);return r6(n,t)},o6=(e,t)=>{if(e.type==="text"||e.type==="inlineCode")return e.value.length<=t?{charsRemoved:e.value.length,toDelete:!0}:(e.value=e.value.slice(0,-1*t),{charsRemoved:t,toDelete:!1});if(e.type==="thematicBreak")return{charsRemoved:t6.length,toDelete:!0};let n=0;if("children"in e){let r=e.children.length-1;for(;r>=0&&n<t;){let o=e.children[r],{charsRemoved:i,toDelete:a}=o6(o,t-n);n+=i,a&&e.children.splice(r,1),r--}if(e.type==="listItem"){let o=e.children.length===0&&t-n>0;return{charsRemoved:n+(o?n6.length:0),toDelete:o}}return{charsRemoved:n,toDelete:e.children.length===0}}return{charsRemoved:0,toDelete:!1}},OX=(e,t)=>{let{toDelete:n}=o6(e,t);n&&(e.children=[])},PX=(e,t,n)=>{let r=J4(e);n||e6(r);let i=r6(r,n).length-t;return OX(r,i),wX(r)},i6=()=>({output:e,visibleTextLengthTarget:t,isStreamFinished:n})=>{let r=PX(e,t,n),o=TX(r,n);return{output:r,visibleText:o}};var Vo=Q(Re(),1);function a6(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=a6(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function l6(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=a6(e))&&(r&&(r+=" "),r+=t);return r}var $k="-",IX=e=>{let t=LX(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{let s=a.split($k);return s[0]===""&&s.length!==1&&s.shift(),c6(s,t)||AX(a)},getConflictingClassGroupIds:(a,s)=>{let c=n[a]||[];return s&&r[a]?[...c,...r[a]]:c}}},c6=(e,t)=>{if(e.length===0)return t.classGroupId;let n=e[0],r=t.nextPart.get(n),o=r?c6(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;let i=e.join($k);return t.validators.find(({validator:a})=>a(i))?.classGroupId},s6=/^\[(.+)\]$/,AX=e=>{if(s6.test(e)){let t=s6.exec(e)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},LX=e=>{let{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return DX(Object.entries(e.classGroups),n).forEach(([i,a])=>{Kk(a,r,i,t)}),r},Kk=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){let i=o===""?t:u6(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(MX(o)){Kk(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,a])=>{Kk(a,u6(t,i),n,r)})})},u6=(e,t)=>{let n=e;return t.split($k).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},MX=e=>e.isThemeGetter,DX=(e,t)=>t?e.map(([n,r])=>{let o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,s])=>[t+a,s])):i);return[n,o]}):e,NX=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map,o=(i,a)=>{n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let a=n.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return o(i,a),a},set(i,a){n.has(i)?n.set(i,a):o(i,a)}}},p6="!",FX=e=>{let{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,a=s=>{let c=[],p=0,f=0,m;for(let _=0;_<s.length;_++){let y=s[_];if(p===0){if(y===o&&(r||s.slice(_,_+i)===t)){c.push(s.slice(f,_)),f=_+i;continue}if(y==="/"){m=_;continue}}y==="["?p++:y==="]"&&p--}let h=c.length===0?s:s.substring(f),g=h.startsWith(p6),v=g?h.substring(1):h,w=m&&m>f?m-f:void 0;return{modifiers:c,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:w}};return n?s=>n({className:s,parseClassName:a}):a},zX=e=>{if(e.length<=1)return e;let t=[],n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},BX=e=>({cache:NX(e.cacheSize),parseClassName:FX(e),...IX(e)}),UX=/\s+/,jX=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],a=e.trim().split(UX),s="";for(let c=a.length-1;c>=0;c-=1){let p=a[c],{modifiers:f,hasImportantModifier:m,baseClassName:h,maybePostfixModifierPosition:g}=n(p),v=!!g,w=r(v?h.substring(0,g):h);if(!w){if(!v){s=p+(s.length>0?" "+s:s);continue}if(w=r(h),!w){s=p+(s.length>0?" "+s:s);continue}v=!1}let _=zX(f).join(":"),y=m?_+p6:_,x=y+w;if(i.includes(x))continue;i.push(x);let S=o(w,v);for(let T=0;T<S.length;++T){let I=S[T];i.push(y+I)}s=p+(s.length>0?" "+s:s)}return s};function HX(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=f6(t))&&(r&&(r+=" "),r+=n);return r}var f6=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=f6(e[r]))&&(n&&(n+=" "),n+=t);return n};function WX(e,...t){let n,r,o,i=a;function a(c){let p=t.reduce((f,m)=>m(f),e());return n=BX(p),r=n.cache.get,o=n.cache.set,i=s,s(c)}function s(c){let p=r(c);if(p)return p;let f=jX(c,n);return o(c,f),f}return function(){return i(HX.apply(null,arguments))}}var gt=e=>{let t=n=>n[e]||[];return t.isThemeGetter=!0,t},d6=/^\[(?:([a-z-]+):)?(.+)\]$/i,qX=/^\d+\/\d+$/,VX=new Set(["px","full","screen"]),KX=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$X=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GX=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,QX=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,YX=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=e=>su(e)||VX.has(e)||qX.test(e),Ea=e=>uu(e,"length",oZ),su=e=>!!e&&!Number.isNaN(Number(e)),Vk=e=>uu(e,"number",su),Yp=e=>!!e&&Number.isInteger(Number(e)),XX=e=>e.endsWith("%")&&su(e.slice(0,-1)),Ne=e=>d6.test(e),Ra=e=>KX.test(e),ZX=new Set(["length","size","percentage"]),JX=e=>uu(e,ZX,m6),eZ=e=>uu(e,"position",m6),tZ=new Set(["image","url"]),nZ=e=>uu(e,tZ,aZ),rZ=e=>uu(e,"",iZ),Xp=()=>!0,uu=(e,t,n)=>{let r=d6.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},oZ=e=>$X.test(e)&&!GX.test(e),m6=()=>!1,iZ=e=>QX.test(e),aZ=e=>YX.test(e);var lZ=()=>{let e=gt("colors"),t=gt("spacing"),n=gt("blur"),r=gt("brightness"),o=gt("borderColor"),i=gt("borderRadius"),a=gt("borderSpacing"),s=gt("borderWidth"),c=gt("contrast"),p=gt("grayscale"),f=gt("hueRotate"),m=gt("invert"),h=gt("gap"),g=gt("gradientColorStops"),v=gt("gradientColorStopPositions"),w=gt("inset"),_=gt("margin"),y=gt("opacity"),x=gt("padding"),S=gt("saturate"),T=gt("scale"),I=gt("sepia"),R=gt("skew"),D=gt("space"),z=gt("translate"),U=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],te=()=>["auto",Ne,t],Z=()=>[Ne,t],G=()=>["",Ti,Ea],ie=()=>["auto",su,Ne],ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],fe=()=>["solid","dashed","dotted","double","none"],Me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>["start","end","center","between","around","evenly","stretch"],Le=()=>["","0",Ne],P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$e=()=>[su,Ne];return{cacheSize:500,separator:":",theme:{colors:[Xp],spacing:[Ti,Ea],blur:["none","",Ra,Ne],brightness:$e(),borderColor:[e],borderRadius:["none","","full",Ra,Ne],borderSpacing:Z(),borderWidth:G(),contrast:$e(),grayscale:Le(),hueRotate:$e(),invert:Le(),gap:Z(),gradientColorStops:[e],gradientColorStopPositions:[XX,Ea],inset:te(),margin:te(),opacity:$e(),padding:Z(),saturate:$e(),scale:$e(),sepia:Le(),skew:$e(),space:Z(),translate:Z()},classGroups:{aspect:[{aspect:["auto","square","video",Ne]}],container:["container"],columns:[{columns:[Ra]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ee(),Ne]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Yp,Ne]}],basis:[{basis:te()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ne]}],grow:[{grow:Le()}],shrink:[{shrink:Le()}],order:[{order:["first","last","none",Yp,Ne]}],"grid-cols":[{"grid-cols":[Xp]}],"col-start-end":[{col:["auto",{span:["full",Yp,Ne]},Ne]}],"col-start":[{"col-start":ie()}],"col-end":[{"col-end":ie()}],"grid-rows":[{"grid-rows":[Xp]}],"row-start-end":[{row:["auto",{span:[Yp,Ne]},Ne]}],"row-start":[{"row-start":ie()}],"row-end":[{"row-end":ie()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ne]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ne]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...ce()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ce(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ce(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ne,t]}],"min-w":[{"min-w":[Ne,t,"min","max","fit"]}],"max-w":[{"max-w":[Ne,t,"none","full","min","max","fit","prose",{screen:[Ra]},Ra]}],h:[{h:[Ne,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ne,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ne,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ne,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Ra,Ea]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Vk]}],"font-family":[{font:[Xp]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ne]}],"line-clamp":[{"line-clamp":["none",su,Vk]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ti,Ne]}],"list-image":[{"list-image":["none",Ne]}],"list-style-type":[{list:["none","disc","decimal",Ne]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ti,Ea]}],"underline-offset":[{"underline-offset":["auto",Ti,Ne]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ee(),eZ]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",JX]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},nZ]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...fe(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:fe()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...fe()]}],"outline-offset":[{"outline-offset":[Ti,Ne]}],"outline-w":[{outline:[Ti,Ea]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[Ti,Ea]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Ra,rZ]}],"shadow-color":[{shadow:[Xp]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...Me(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Me()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Ra,Ne]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[S]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ne]}],duration:[{duration:$e()}],ease:[{ease:["linear","in","out","in-out",Ne]}],delay:[{delay:$e()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ne]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[Yp,Ne]}],"translate-x":[{"translate-x":[z]}],"translate-y":[{"translate-y":[z]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ne]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ne]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Z()}],"scroll-mx":[{"scroll-mx":Z()}],"scroll-my":[{"scroll-my":Z()}],"scroll-ms":[{"scroll-ms":Z()}],"scroll-me":[{"scroll-me":Z()}],"scroll-mt":[{"scroll-mt":Z()}],"scroll-mr":[{"scroll-mr":Z()}],"scroll-mb":[{"scroll-mb":Z()}],"scroll-ml":[{"scroll-ml":Z()}],"scroll-p":[{"scroll-p":Z()}],"scroll-px":[{"scroll-px":Z()}],"scroll-py":[{"scroll-py":Z()}],"scroll-ps":[{"scroll-ps":Z()}],"scroll-pe":[{"scroll-pe":Z()}],"scroll-pt":[{"scroll-pt":Z()}],"scroll-pr":[{"scroll-pr":Z()}],"scroll-pb":[{"scroll-pb":Z()}],"scroll-pl":[{"scroll-pl":Z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ne]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ti,Ea,Vk]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}};var h6=WX(lZ);function wo(...e){return h6(l6(...e))}var Gk=Q(xt(),1),sZ=({className:e})=>(0,Gk.jsx)("div",{className:wo("flex gap-2 bg-muted",e),children:Array(3).fill("").map((t,n)=>(0,Gk.jsx)("div",{className:wo("w-2.5 h-2.5 rounded-full bg-muted-foreground animate-bounce"),style:{animationDelay:`${n*100}ms`}},n))}),g6=sZ;var Qk=Q(xt(),1);function Yk({className:e=""}){return(0,Qk.jsx)("div",{className:wo("bg-light/80 rounded px-2",e),children:(0,Qk.jsx)("p",{className:"text-dark text-sm",children:"AD"})})}function cu(){let e=window.crypto,t=new Uint8Array(16);return e.getRandomValues(t),t[6]=t[6]&15|64,t[8]=t[8]&63|128,[...t].map((r,o)=>{let i=r.toString(16).padStart(2,"0");return o===4||o===6||o===8||o===10?`-${i}`:i}).join("")}function Xk(){let{addMessageToQueryData:e}=Zp(),t=Do();return(n,r)=>![200,201,204].includes(r)}var on=Q(xt(),1);function Zk(e){let{query:{data:t}}=(0,Vo.useContext)(Ta),n=t.pages.flatMap(({items:i})=>i).at(0)?.id,r=dZ[e.sender],o=n===e.id&&e.sender==="bot"&&e.isBanner;return(0,on.jsxs)("div",{className:wo(!o&&"my-1 flex"),children:[(0,on.jsx)(r,{...e}),o&&(0,on.jsx)("div",{className:"w-full h-4 bg-popover"})]})}var cZ=e=>{let{query:{isLoading:t},mutation:n}=(0,Vo.useContext)(Ta),{streamingState:[r]}=(0,Vo.useContext)(Jp),{flatListRef:o}=(0,Vo.useContext)(Ta),{blockMatches:i}=aA({llmOutput:e.content,blocks:[],fallbackBlock:{component:$4,lookBack:i6()},isStreamFinished:e.isStreamFinished});(0,Vo.useEffect)(()=>{o.current?.scrollToEnd()},[i]);let a=s=>{n.mutate(s.content)};return e.isBanner?(0,on.jsxs)("div",{className:"relative w-full not-prose",children:[(0,on.jsx)("img",{src:e.content,className:"w-full h-full max-h-40 object-center"}),(0,on.jsx)(Yk,{className:"absolute top-4 right-4"})]}):(0,on.jsx)("div",{className:"mx-2 border-primary border-solid border-[1px] p-2 rounded bg-primary/5",children:!t&&!r&&i.length?i.map((s,c)=>{let p=s.block.component;return(0,on.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,on.jsx)(p,{blockMatch:s}),e.isStreamFinished&&e.pills&&(0,on.jsx)("div",{className:"grid grid-cols-2 gap-2 pills-container",children:e.pills.map(f=>(0,on.jsx)(qs,{className:"rounded-full bg-success/15 text-center h-8 border-0 ",size:"small",onClick:()=>a(f),children:(0,on.jsx)("p",{className:"text-center text-xs w-full",children:f.content})},f.id))})]},c)}):(0,on.jsx)(g6,{className:"h-8 items-center"})})},pZ=e=>{let[t,n]=(0,Vo.useState)({wrapper:"",label:""});return(0,Vo.useEffect)(()=>{switch(e.severity){case"danger":{n({wrapper:"border-destructive bg-destructive/5",label:"text-destructive"});break}case"success":{n({wrapper:"border-success bg-success/5",label:"text-success"});break}}},[e.severity]),(0,on.jsx)("div",{className:wo("border-solid border-[1px] p-2 rounded ml-2 mr-auto my-2",t.wrapper),children:(0,on.jsx)("p",{className:wo("",t.label),children:e.content})})},fZ=e=>(0,on.jsx)("div",{className:"border-solid border-success border-[1px] p-2 rounded max-w-[80%] mr-2 ml-auto my-2 bg-success/5",children:(0,on.jsx)("p",{className:"text-success",children:e.content})}),dZ={bot:cZ,system:pZ,user:fZ};var Vg="http://localhost:4003";var l3=Q(b6(),1);var Nl=Q(Re(),1),y6=Q(xt(),1),fu=(0,Nl.createContext)([{email:"",gender:"M",age:NaN,name:"",campaignID:NaN,targetSite:""},()=>{}]),v6=({children:e})=>{let[t,n]=(0,Nl.useState)({email:"",gender:"M",age:NaN,name:"",campaignID:NaN,targetSite:""}),[r,o]=(0,Nl.useState)(!1);return(0,Nl.useEffect)(()=>{let{chatAdsFPData:i,campaignID:a}=window;n({...i,campaignID:a}),o(!0)},[]),(0,y6.jsx)(fu.Provider,{value:[t,n],children:r&&e})};function tf(e,t){return function(){return e.apply(t,arguments)}}var{toString:mZ}=Object.prototype,{getPrototypeOf:tS}=Object,$g=(e=>t=>{let n=mZ.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ko=e=>(e=e.toLowerCase(),t=>$g(t)===e),Gg=e=>t=>typeof t===e,{isArray:du}=Array,nf=Gg("undefined");function hZ(e){return e!==null&&!nf(e)&&e.constructor!==null&&!nf(e.constructor)&&Pr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var k6=ko("ArrayBuffer");function gZ(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&k6(e.buffer),t}var bZ=Gg("string"),Pr=Gg("function"),S6=Gg("number"),Qg=e=>e!==null&&typeof e=="object",vZ=e=>e===!0||e===!1,Kg=e=>{if($g(e)!=="object")return!1;let t=tS(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yZ=ko("Date"),xZ=ko("File"),wZ=ko("Blob"),kZ=ko("FileList"),SZ=e=>Qg(e)&&Pr(e.pipe),_Z=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Pr(e.append)&&((t=$g(e))==="formdata"||t==="object"&&Pr(e.toString)&&e.toString()==="[object FormData]"))},CZ=ko("URLSearchParams"),[EZ,RZ,TZ,OZ]=["ReadableStream","Request","Response","Headers"].map(ko),PZ=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rf(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),du(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function _6(e,t){t=t.toLowerCase();let n=Object.keys(e),r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}var Fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,C6=e=>!nf(e)&&e!==Fl;function eS(){let{caseless:e}=C6(this)&&this||{},t={},n=(r,o)=>{let i=e&&_6(t,o)||o;Kg(t[i])&&Kg(r)?t[i]=eS(t[i],r):Kg(r)?t[i]=eS({},r):du(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&rf(arguments[r],n);return t}var IZ=(e,t,n,{allOwnKeys:r}={})=>(rf(t,(o,i)=>{n&&Pr(o)?e[i]=tf(o,n):e[i]=o},{allOwnKeys:r}),e),AZ=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),LZ=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},MZ=(e,t,n,r)=>{let o,i,a,s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&tS(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},DZ=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},NZ=e=>{if(!e)return null;if(du(e))return e;let t=e.length;if(!S6(t))return null;let n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},FZ=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&tS(Uint8Array)),zZ=(e,t)=>{let r=(e&&e[Symbol.iterator]).call(e),o;for(;(o=r.next())&&!o.done;){let i=o.value;t.call(e,i[0],i[1])}},BZ=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},UZ=ko("HTMLFormElement"),jZ=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),x6=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),HZ=ko("RegExp"),E6=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};rf(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},WZ=e=>{E6(e,(t,n)=>{if(Pr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;let r=e[n];if(Pr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qZ=(e,t)=>{let n={},r=o=>{o.forEach(i=>{n[i]=!0})};return du(e)?r(e):r(String(e).split(t)),n},VZ=()=>{},KZ=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Jk="abcdefghijklmnopqrstuvwxyz",w6="0123456789",R6={DIGIT:w6,ALPHA:Jk,ALPHA_DIGIT:Jk+Jk.toUpperCase()+w6},$Z=(e=16,t=R6.ALPHA_DIGIT)=>{let n="",{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function GZ(e){return!!(e&&Pr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var QZ=e=>{let t=new Array(10),n=(r,o)=>{if(Qg(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;let i=du(r)?[]:{};return rf(r,(a,s)=>{let c=n(a,o+1);!nf(c)&&(i[s]=c)}),t[o]=void 0,i}}return r};return n(e,0)},YZ=ko("AsyncFunction"),XZ=e=>e&&(Qg(e)||Pr(e))&&Pr(e.then)&&Pr(e.catch),T6=((e,t)=>e?setImmediate:t?((n,r)=>(Fl.addEventListener("message",({source:o,data:i})=>{o===Fl&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Fl.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Pr(Fl.postMessage)),ZZ=typeof queueMicrotask<"u"?queueMicrotask.bind(Fl):typeof process<"u"&&process.nextTick||T6,B={isArray:du,isArrayBuffer:k6,isBuffer:hZ,isFormData:_Z,isArrayBufferView:gZ,isString:bZ,isNumber:S6,isBoolean:vZ,isObject:Qg,isPlainObject:Kg,isReadableStream:EZ,isRequest:RZ,isResponse:TZ,isHeaders:OZ,isUndefined:nf,isDate:yZ,isFile:xZ,isBlob:wZ,isRegExp:HZ,isFunction:Pr,isStream:SZ,isURLSearchParams:CZ,isTypedArray:FZ,isFileList:kZ,forEach:rf,merge:eS,extend:IZ,trim:PZ,stripBOM:AZ,inherits:LZ,toFlatObject:MZ,kindOf:$g,kindOfTest:ko,endsWith:DZ,toArray:NZ,forEachEntry:zZ,matchAll:BZ,isHTMLForm:UZ,hasOwnProperty:x6,hasOwnProp:x6,reduceDescriptors:E6,freezeMethods:WZ,toObjectSet:qZ,toCamelCase:jZ,noop:VZ,toFiniteNumber:KZ,findKey:_6,global:Fl,isContextDefined:C6,ALPHABET:R6,generateString:$Z,isSpecCompliantForm:GZ,toJSONObject:QZ,isAsyncFn:YZ,isThenable:XZ,setImmediate:T6,asap:ZZ};function mu(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}B.inherits(mu,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});var O6=mu.prototype,P6={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{P6[e]={value:e}});Object.defineProperties(mu,P6);Object.defineProperty(O6,"isAxiosError",{value:!0});mu.from=(e,t,n,r,o,i)=>{let a=Object.create(O6);return B.toFlatObject(e,a,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),mu.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var Ee=mu;var Yg=null;function nS(e){return B.isPlainObject(e)||B.isArray(e)}function A6(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function I6(e,t,n){return e?e.concat(t).map(function(o,i){return o=A6(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function JZ(e){return B.isArray(e)&&!e.some(nS)}var eJ=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function tJ(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new(Yg||FormData),n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,_){return!B.isUndefined(_[w])});let r=n.metaTokens,o=n.visitor||f,i=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(o))throw new TypeError("visitor must be a function");function p(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(!c&&B.isBlob(v))throw new Ee("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,w,_){let y=v;if(v&&!_&&typeof v=="object"){if(B.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&JZ(v)||(B.isFileList(v)||B.endsWith(w,"[]"))&&(y=B.toArray(v)))return w=A6(w),y.forEach(function(S,T){!(B.isUndefined(S)||S===null)&&t.append(a===!0?I6([w],T,i):a===null?w:w+"[]",p(S))}),!1}return nS(v)?!0:(t.append(I6(_,w,i),p(v)),!1)}let m=[],h=Object.assign(eJ,{defaultVisitor:f,convertValue:p,isVisitable:nS});function g(v,w){if(!B.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(v),B.forEach(v,function(y,x){(!(B.isUndefined(y)||y===null)&&o.call(t,y,B.isString(x)?x.trim():x,w,h))===!0&&g(y,w?w.concat(x):[x])}),m.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return g(e),t}var Oa=tJ;function L6(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function M6(e,t){this._pairs=[],e&&Oa(e,this,t)}var D6=M6.prototype;D6.append=function(t,n){this._pairs.push([t,n])};D6.toString=function(t){let n=t?function(r){return t.call(this,r,L6)}:L6;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};var Xg=M6;function nJ(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function of(e,t,n){if(!t)return e;let r=n&&n.encode||nJ,o=n&&n.serialize,i;if(o?i=o(t,n):i=B.isURLSearchParams(t)?t.toString():new Xg(t,n).toString(r),i){let a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}var rS=class{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}},oS=rS;var Zg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var N6=typeof URLSearchParams<"u"?URLSearchParams:Xg;var F6=typeof FormData<"u"?FormData:null;var z6=typeof Blob<"u"?Blob:null;var B6={isBrowser:!0,classes:{URLSearchParams:N6,FormData:F6,Blob:z6},protocols:["http","https","file","blob","url","data"]};var lS={};g0(lS,{hasBrowserEnv:()=>aS,hasStandardBrowserEnv:()=>rJ,hasStandardBrowserWebWorkerEnv:()=>oJ,navigator:()=>iS,origin:()=>iJ});var aS=typeof window<"u"&&typeof document<"u",iS=typeof navigator=="object"&&navigator||void 0,rJ=aS&&(!iS||["ReactNative","NativeScript","NS"].indexOf(iS.product)<0),oJ=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",iJ=aS&&window.location.href||"http://localhost";var Vt={...lS,...B6};function sS(e,t){return Oa(e,new Vt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Vt.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function aJ(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function lJ(e){let t={},n=Object.keys(e),r,o=n.length,i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function sJ(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;let s=Number.isFinite(+a),c=i>=n.length;return a=!a&&B.isArray(o)?o.length:a,c?(B.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!B.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&B.isArray(o[a])&&(o[a]=lJ(o[a])),!s)}if(B.isFormData(e)&&B.isFunction(e.entries)){let n={};return B.forEachEntry(e,(r,o)=>{t(aJ(r),o,n,0)}),n}return null}var Jg=sJ;function uJ(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var uS={transitional:Zg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){let r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=B.isObject(t);if(i&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return o?JSON.stringify(Jg(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t)||B.isReadableStream(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sS(t,this.formSerializer).toString();if((s=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){let c=this.env&&this.env.FormData;return Oa(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),uJ(t)):t}],transformResponse:[function(t){let n=this.transitional||uS.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(B.isResponse(t)||B.isReadableStream(t))return t;if(t&&B.isString(t)&&(r&&!this.responseType||o)){let a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Ee.from(s,Ee.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vt.classes.FormData,Blob:Vt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{uS.headers[e]={}});var hu=uS;var cJ=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),U6=e=>{let t={},n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&cJ[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};var j6=Symbol("internals");function af(e){return e&&String(e).trim().toLowerCase()}function eb(e){return e===!1||e==null?e:B.isArray(e)?e.map(eb):String(e)}function pJ(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var fJ=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function cS(e,t,n,r,o){if(B.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function dJ(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function mJ(e,t){let n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}var gu=class{constructor(t){t&&this.set(t)}set(t,n,r){let o=this;function i(s,c,p){let f=af(c);if(!f)throw new Error("header name must be a non-empty string");let m=B.findKey(o,f);(!m||o[m]===void 0||p===!0||p===void 0&&o[m]!==!1)&&(o[m||c]=eb(s))}let a=(s,c)=>B.forEach(s,(p,f)=>i(p,f,c));if(B.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(B.isString(t)&&(t=t.trim())&&!fJ(t))a(U6(t),n);else if(B.isHeaders(t))for(let[s,c]of t.entries())i(c,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=af(t),t){let r=B.findKey(this,t);if(r){let o=this[r];if(!n)return o;if(n===!0)return pJ(o);if(B.isFunction(n))return n.call(this,o,r);if(B.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=af(t),t){let r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||cS(this,this[r],r,n)))}return!1}delete(t,n){let r=this,o=!1;function i(a){if(a=af(a),a){let s=B.findKey(r,a);s&&(!n||cS(r,r[s],s,n))&&(delete r[s],o=!0)}}return B.isArray(t)?t.forEach(i):i(t),o}clear(t){let n=Object.keys(this),r=n.length,o=!1;for(;r--;){let i=n[r];(!t||cS(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){let n=this,r={};return B.forEach(this,(o,i)=>{let a=B.findKey(r,i);if(a){n[a]=eb(o),delete n[i];return}let s=t?dJ(i):String(i).trim();s!==i&&delete n[i],n[s]=eb(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let n=Object.create(null);return B.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){let r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){let r=(this[j6]=this[j6]={accessors:{}}).accessors,o=this.prototype;function i(a){let s=af(a);r[s]||(mJ(o,a),r[s]=!0)}return B.isArray(t)?t.forEach(i):i(t),this}};gu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(gu.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});B.freezeMethods(gu);var an=gu;function lf(e,t){let n=this||hu,r=t||n,o=an.from(r.headers),i=r.data;return B.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function sf(e){return!!(e&&e.__CANCEL__)}function H6(e,t,n){Ee.call(this,e??"canceled",Ee.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(H6,Ee,{__CANCEL__:!0});var Ko=H6;function uf(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Ee("Request failed with status code "+n.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function pS(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hJ(e,t){e=e||10;let n=new Array(e),r=new Array(e),o=0,i=0,a;return t=t!==void 0?t:1e3,function(c){let p=Date.now(),f=r[i];a||(a=p),n[o]=c,r[o]=p;let m=i,h=0;for(;m!==o;)h+=n[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),p-a<t)return;let g=f&&p-f;return g?Math.round(h*1e3/g):void 0}}var W6=hJ;function gJ(e,t){let n=0,r=1e3/t,o,i,a=(p,f=Date.now())=>{n=f,o=null,i&&(clearTimeout(i),i=null),e.apply(null,p)};return[(...p)=>{let f=Date.now(),m=f-n;m>=r?a(p,f):(o=p,i||(i=setTimeout(()=>{i=null,a(o)},r-m)))},()=>o&&a(o)]}var q6=gJ;var bu=(e,t,n=3)=>{let r=0,o=W6(50,250);return q6(i=>{let a=i.loaded,s=i.lengthComputable?i.total:void 0,c=a-r,p=o(c),f=a<=s;r=a;let m={loaded:a,total:s,progress:s?a/s:void 0,bytes:c,rate:p||void 0,estimated:p&&s&&f?(s-a)/p:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(m)},n)},fS=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},dS=e=>(...t)=>B.asap(()=>e(...t));var V6=Vt.hasStandardBrowserEnv?function(){let t=Vt.navigator&&/(msie|trident)/i.test(Vt.navigator.userAgent),n=document.createElement("a"),r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){let s=B.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();var K6=Vt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){let a=[e+"="+encodeURIComponent(t)];B.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),B.isString(r)&&a.push("path="+r),B.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function cf(e,t){return e&&!mS(t)?hS(e,t):t}var $6=e=>e instanceof an?{...e}:e;function So(e,t){t=t||{};let n={};function r(p,f,m){return B.isPlainObject(p)&&B.isPlainObject(f)?B.merge.call({caseless:m},p,f):B.isPlainObject(f)?B.merge({},f):B.isArray(f)?f.slice():f}function o(p,f,m){if(B.isUndefined(f)){if(!B.isUndefined(p))return r(void 0,p,m)}else return r(p,f,m)}function i(p,f){if(!B.isUndefined(f))return r(void 0,f)}function a(p,f){if(B.isUndefined(f)){if(!B.isUndefined(p))return r(void 0,p)}else return r(void 0,f)}function s(p,f,m){if(m in t)return r(p,f);if(m in e)return r(void 0,p)}let c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(p,f)=>o($6(p),$6(f),!0)};return B.forEach(Object.keys(Object.assign({},e,t)),function(f){let m=c[f]||o,h=m(e[f],t[f],f);B.isUndefined(h)&&m!==s||(n[f]=h)}),n}var tb=e=>{let t=So({},e),{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=an.from(a),t.url=of(cf(t.baseURL,t.url),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let c;if(B.isFormData(n)){if(Vt.hasStandardBrowserEnv||Vt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){let[p,...f]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];a.setContentType([p||"multipart/form-data",...f].join("; "))}}if(Vt.hasStandardBrowserEnv&&(r&&B.isFunction(r)&&(r=r(t)),r||r!==!1&&V6(t.url))){let p=o&&i&&K6.read(i);p&&a.set(o,p)}return t};var bJ=typeof XMLHttpRequest<"u",G6=bJ&&function(e){return new Promise(function(n,r){let o=tb(e),i=o.data,a=an.from(o.headers).normalize(),{responseType:s,onUploadProgress:c,onDownloadProgress:p}=o,f,m,h,g,v;function w(){g&&g(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let _=new XMLHttpRequest;_.open(o.method.toUpperCase(),o.url,!0),_.timeout=o.timeout;function y(){if(!_)return;let S=an.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),I={data:!s||s==="text"||s==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:S,config:e,request:_};uf(function(D){n(D),w()},function(D){r(D),w()},I),_=null}"onloadend"in _?_.onloadend=y:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(y)},_.onabort=function(){_&&(r(new Ee("Request aborted",Ee.ECONNABORTED,e,_)),_=null)},_.onerror=function(){r(new Ee("Network Error",Ee.ERR_NETWORK,e,_)),_=null},_.ontimeout=function(){let T=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded",I=o.transitional||Zg;o.timeoutErrorMessage&&(T=o.timeoutErrorMessage),r(new Ee(T,I.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,e,_)),_=null},i===void 0&&a.setContentType(null),"setRequestHeader"in _&&B.forEach(a.toJSON(),function(T,I){_.setRequestHeader(I,T)}),B.isUndefined(o.withCredentials)||(_.withCredentials=!!o.withCredentials),s&&s!=="json"&&(_.responseType=o.responseType),p&&([h,v]=bu(p,!0),_.addEventListener("progress",h)),c&&_.upload&&([m,g]=bu(c),_.upload.addEventListener("progress",m),_.upload.addEventListener("loadend",g)),(o.cancelToken||o.signal)&&(f=S=>{_&&(r(!S||S.type?new Ko(null,e,_):S),_.abort(),_=null)},o.cancelToken&&o.cancelToken.subscribe(f),o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f)));let x=pS(o.url);if(x&&Vt.protocols.indexOf(x)===-1){r(new Ee("Unsupported protocol "+x+":",Ee.ERR_BAD_REQUEST,e));return}_.send(i||null)})};var vJ=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o,i=function(p){if(!o){o=!0,s();let f=p instanceof Error?p:this.reason;r.abort(f instanceof Ee?f:new Ko(f instanceof Error?f.message:f))}},a=t&&setTimeout(()=>{a=null,i(new Ee(`timeout ${t} of ms exceeded`,Ee.ETIMEDOUT))},t),s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(i):p.removeEventListener("abort",i)}),e=null)};e.forEach(p=>p.addEventListener("abort",i));let{signal:c}=r;return c.unsubscribe=()=>B.asap(s),c}},Q6=vJ;var yJ=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},xJ=async function*(e,t){for await(let n of wJ(e))yield*yJ(n,t)},wJ=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},gS=(e,t,n,r)=>{let o=xJ(e,t),i=0,a,s=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{let{done:p,value:f}=await o.next();if(p){s(),c.close();return}let m=f.byteLength;if(n){let h=i+=m;n(h)}c.enqueue(new Uint8Array(f))}catch(p){throw s(p),p}},cancel(c){return s(c),o.return()}},{highWaterMark:2})};var rb=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",X6=rb&&typeof ReadableStream=="function",kJ=rb&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Z6=(e,...t)=>{try{return!!e(...t)}catch{return!1}},SJ=X6&&Z6(()=>{let e=!1,t=new Request(Vt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Y6=64*1024,bS=X6&&Z6(()=>B.isReadableStream(new Response("").body)),nb={stream:bS&&(e=>e.body)};rb&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!nb[t]&&(nb[t]=B.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new Ee(`Response type '${t}' is not supported`,Ee.ERR_NOT_SUPPORT,r)})})})(new Response);var _J=async e=>{if(e==null)return 0;if(B.isBlob(e))return e.size;if(B.isSpecCompliantForm(e))return(await new Request(Vt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(B.isArrayBufferView(e)||B.isArrayBuffer(e))return e.byteLength;if(B.isURLSearchParams(e)&&(e=e+""),B.isString(e))return(await kJ(e)).byteLength},CJ=async(e,t)=>{let n=B.toFiniteNumber(e.getContentLength());return n??_J(t)},J6=rb&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:c,responseType:p,headers:f,withCredentials:m="same-origin",fetchOptions:h}=tb(e);p=p?(p+"").toLowerCase():"text";let g=Q6([o,i&&i.toAbortSignal()],a),v,w=g&&g.unsubscribe&&(()=>{g.unsubscribe()}),_;try{if(c&&SJ&&n!=="get"&&n!=="head"&&(_=await CJ(f,r))!==0){let I=new Request(t,{method:"POST",body:r,duplex:"half"}),R;if(B.isFormData(r)&&(R=I.headers.get("content-type"))&&f.setContentType(R),I.body){let[D,z]=fS(_,bu(dS(c)));r=gS(I.body,Y6,D,z)}}B.isString(m)||(m=m?"include":"omit");let y="credentials"in Request.prototype;v=new Request(t,{...h,signal:g,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:y?m:void 0});let x=await fetch(v),S=bS&&(p==="stream"||p==="response");if(bS&&(s||S&&w)){let I={};["status","statusText","headers"].forEach(U=>{I[U]=x[U]});let R=B.toFiniteNumber(x.headers.get("content-length")),[D,z]=s&&fS(R,bu(dS(s),!0))||[];x=new Response(gS(x.body,Y6,D,()=>{z&&z(),w&&w()}),I)}p=p||"text";let T=await nb[B.findKey(nb,p)||"text"](x,e);return!S&&w&&w(),await new Promise((I,R)=>{uf(I,R,{data:T,headers:an.from(x.headers),status:x.status,statusText:x.statusText,config:e,request:v})})}catch(y){throw w&&w(),y&&y.name==="TypeError"&&/fetch/i.test(y.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,e,v),{cause:y.cause||y}):Ee.from(y,y&&y.code,e,v)}});var vS={http:Yg,xhr:G6,fetch:J6};B.forEach(vS,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var e3=e=>`- ${e}`,EJ=e=>B.isFunction(e)||e===null||e===!1,ob={getAdapter:e=>{e=B.isArray(e)?e:[e];let{length:t}=e,n,r,o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!EJ(n)&&(r=vS[(a=String(n)).toLowerCase()],r===void 0))throw new Ee(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){let i=Object.entries(o).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build")),a=t?i.length>1?`since :
`+i.map(e3).join(`
`):" "+e3(i[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:vS};function yS(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ko(null,e)}function ib(e){return yS(e),e.headers=an.from(e.headers),e.data=lf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ob.getAdapter(e.adapter||hu.adapter)(e).then(function(r){return yS(e),r.data=lf.call(e,e.transformResponse,r),r.headers=an.from(r.headers),r},function(r){return sf(r)||(yS(e),r&&r.response&&(r.response.data=lf.call(e,e.transformResponse,r.response),r.response.headers=an.from(r.response.headers))),Promise.reject(r)})}var ab="1.7.7";var xS={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xS[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var t3={};xS.transitional=function(t,n,r){function o(i,a){return"[Axios v"+ab+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new Ee(o(a," has been removed"+(n?" in "+n:"")),Ee.ERR_DEPRECATED);return n&&!t3[a]&&(t3[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function RJ(e,t,n){if(typeof e!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),o=r.length;for(;o-- >0;){let i=r[o],a=t[i];if(a){let s=e[i],c=s===void 0||a(s,i,e);if(c!==!0)throw new Ee("option "+i+" must be "+c,Ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ee("Unknown option "+i,Ee.ERR_BAD_OPTION)}}var lb={assertOptions:RJ,validators:xS};var Pa=lb.validators,vu=class{constructor(t){this.defaults=t,this.interceptors={request:new oS,response:new oS}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;let i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=So(this.defaults,n);let{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&lb.assertOptions(r,{silentJSONParsing:Pa.transitional(Pa.boolean),forcedJSONParsing:Pa.transitional(Pa.boolean),clarifyTimeoutError:Pa.transitional(Pa.boolean)},!1),o!=null&&(B.isFunction(o)?n.paramsSerializer={serialize:o}:lb.assertOptions(o,{encode:Pa.function,serialize:Pa.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&B.merge(i.common,i[n.method]);i&&B.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=an.concat(a,i);let s=[],c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});let p=[];this.interceptors.response.forEach(function(w){p.push(w.fulfilled,w.rejected)});let f,m=0,h;if(!c){let v=[ib.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,p),h=v.length,f=Promise.resolve(n);m<h;)f=f.then(v[m++],v[m++]);return f}h=s.length;let g=n;for(m=0;m<h;){let v=s[m++],w=s[m++];try{g=v(g)}catch(_){w.call(this,_);break}}try{f=ib.call(this,g)}catch(v){return Promise.reject(v)}for(m=0,h=p.length;m<h;)f=f.then(p[m++],p[m++]);return f}getUri(t){t=So(this.defaults,t);let n=cf(t.baseURL,t.url);return of(n,t.params,t.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(t){vu.prototype[t]=function(n,r){return this.request(So(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(So(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}vu.prototype[t]=n(),vu.prototype[t+"Form"]=n(!0)});var pf=vu;var wS=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});let r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i,a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Ko(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){let t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},n3=wS;function kS(e){return function(n){return e.apply(null,n)}}function SS(e){return B.isObject(e)&&e.isAxiosError===!0}var _S={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_S).forEach(([e,t])=>{_S[t]=e});var r3=_S;function o3(e){let t=new pf(e),n=tf(pf.prototype.request,t);return B.extend(n,pf.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return o3(So(e,o))},n}var Xt=o3(hu);Xt.Axios=pf;Xt.CanceledError=Ko;Xt.CancelToken=n3;Xt.isCancel=sf;Xt.VERSION=ab;Xt.toFormData=Oa;Xt.AxiosError=Ee;Xt.Cancel=Xt.CanceledError;Xt.all=function(t){return Promise.all(t)};Xt.spread=kS;Xt.isAxiosError=SS;Xt.mergeConfig=So;Xt.AxiosHeaders=an;Xt.formToJSON=e=>Jg(B.isHTMLForm(e)?new FormData(e):e);Xt.getAdapter=ob.getAdapter;Xt.HttpStatusCode=r3;Xt.default=Xt;var yu=Xt;var{Axios:Wwe,AxiosError:qwe,CanceledError:Vwe,isCancel:Kwe,CancelToken:$we,VERSION:Gwe,all:Qwe,Cancel:Ywe,isAxiosError:Xwe,spread:Zwe,toFormData:Jwe,AxiosHeaders:e1e,HttpStatusCode:t1e,formToJSON:n1e,getAdapter:r1e,mergeConfig:o1e}=yu;var Ia=Q(Re(),1);var a3=Q(xt(),1),CS=(0,Ia.createContext)([{sessionId:""},()=>{}]),i3=({children:e})=>{let[t,n]=(0,Ia.useState)({sessionId:""}),[r]=(0,Ia.useContext)(fu);return(0,Ia.useEffect)(()=>{},[r]),(0,a3.jsx)(CS.Provider,{value:[t,n],children:e})};var Kt=Q(xt(),1),TJ=()=>{let{query:{data:e},flatListRef:t}=(0,bt.useContext)(Ta),n=(0,bt.useMemo)(()=>e.pages.flatMap(r=>r.items),[e]);return(0,bt.useEffect)(()=>{t.current?.scrollToEnd()},[n]),(0,Kt.jsxs)("div",{className:wo("prose flex flex-col gap-4 h-full",PJ),children:[(0,Kt.jsx)(u1,{data:n,ref:t,renderItem:({item:r})=>(0,Kt.jsx)(Zk,{...r}),ListFooterComponent:(0,Kt.jsx)(AJ,{}),showsVerticalScrollIndicator:!1,contentContainerStyle:{flexGrow:1,background:"hsl(var(--background))",paddingBottom:8},onScrollToIndexFailed:()=>{}}),(0,Kt.jsx)(IJ,{})]})},OJ=10,PJ="prose-sm prose-h1:my-0 prose-h2:my-0 prose-h3:my-0 prose-h4:my-0 prose-h5:my-0 prose-h6:my-0 prose-p:my-0",IJ=()=>{let{currentMessageInputState:[e,t],mutation:n,query:{data:r}}=(0,bt.useContext)(Ta),{streamingState:[o,i],readerRef:a,controllerRef:s}=(0,bt.useContext)(Jp),{replaceLastMessageInQueryData:c}=Zp(),[p]=(0,bt.useContext)(fu),f=Xk(),{addMessageToQueryData:m}=Zp(),h=()=>e&&n.mutate(e),g=()=>{a.current?.cancel(),s.current?.close(),i(!1);let w=r.pages.flatMap(({items:_})=>_).filter(_=>_.sender==="bot").at(-1);w&&c((0,l3.cloneDeep)({...w,isStreamFinished:!0}))};return(0,Kt.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,Kt.jsx)("div",{className:"flex gap-2",children:[{label:"Take me to the website",onClick:()=>window.open(p.targetSite,"_blank")},{label:"Email me information",onClick:async()=>{}}].map((w,_)=>(0,Kt.jsx)(qs,{className:"flex-grow bg-background rounded-full h-8",size:"small",onClick:w.onClick,children:(0,Kt.jsx)("p",{className:"text-sm",children:w.label})},_))}),(0,Kt.jsxs)("div",{className:"flex gap-2",children:[(0,Kt.jsx)(gx,{className:"flex-grow",value:e,onChange:w=>t(w.target.value),onKeyDown:w=>w.code.toLowerCase()==="enter"&&h()}),(0,Kt.jsx)(qs,{className:"h-full bg-background",disabled:!o&&!e,onClick:o?g:h,children:(0,Kt.jsx)("p",{children:o?"Pause":"Send"})})]})]})},AJ=()=>{let{query:{isLoading:e}}=(0,bt.useContext)(Ta);return e&&(0,Kt.jsx)("div",{className:"mb-4",children:(0,Kt.jsx)(c1,{})})},Ta=(0,bt.createContext)({query:{},mutation:{},currentMessageInputState:["",()=>{}],flatListRef:{}}),ES=["Chat messages"];function LJ(){let e=(0,bt.useState)(""),[t,n]=e,r=Do(),{addMessageToQueryData:o,replaceLastMessageInQueryData:i}=Zp(),{streamingState:[a,s],readerRef:c,controllerRef:p}=(0,bt.useContext)(Jp),f=(0,bt.useRef)(),[m,h]=(0,bt.useContext)(fu),g=Xk(),[v,w]=(0,bt.useContext)(CS),_=Zy({queryKey:ES,queryFn:async({pageParam:T})=>({items:[],page:T+1}),getNextPageParam:(T,I,R)=>T.items.length<OJ?null:Number(R)+1,initialData:{pages:[{items:[],page:0}],pageParams:[0]},initialPageParam:0,refetchOnWindowFocus:!1}),y=Xc({mutationFn:()=>yu.post(`${Vg}/chat/create`,{name:m.name,email:m.email,gender:m.gender,age:m.age,campaignId:m.campaignID}),onSuccess:({data:T,status:I})=>{g(T.message,I)||(h(R=>({...R,targetSite:T.targetSite})),o({id:cu(),content:T.imageUrl,createdAt:new Date,isBanner:!0,isStreamFinished:!0,sender:"bot"}),w({sessionId:T.sessionId}))}}),x=Xc({mutationFn:()=>yu.post(`${Vg}/chat/initial`,{sessionId:v.sessionId}),onSuccess:({data:T,status:I})=>{g(T.message,I)||o({content:T.prompt,id:cu(),createdAt:new Date,isBanner:!1,isStreamFinished:!0,sender:"bot",pills:T.pills.map(R=>({id:cu(),content:R}))})}}),S=Xc({mutationFn:T=>(o({id:cu(),content:T,createdAt:new Date,sender:"user"}),n(""),yu.post(`${Vg}/chat/talk`,{sessionId:v.sessionId,userInput:T})),onSuccess:({data:T,status:I})=>{g(T.message,I)||o({id:cu(),content:T.message,createdAt:new Date,isBanner:!1,isStreamFinished:!0,sender:"bot"})}});return(0,bt.useEffect)(()=>{y.mutate()},[]),(0,bt.useEffect)(()=>{v.sessionId&&x.mutate()},[v.sessionId]),(0,Kt.jsx)(Ta.Provider,{value:{query:_,mutation:S,currentMessageInputState:e,flatListRef:f},children:(0,Kt.jsx)(TJ,{})})}function Zp(){let e=Do();function t(r){e.setQueryData(ES,o=>{if(!o)return o;let i=[...o.pages],a=i[i.length-1],s={...a,items:[...a.items,r]};return i[i.length-1]=s,{...o,pages:i}})}function n(r){r={...r},e.setQueryData(ES,o=>{if(!o)return o;let i=[...o.pages],a=i[i.length-1],s=[...a.items];s.length>0?s[s.length-1]=r:s.push(r);let c={...a,items:s};return i[i.length-1]=c,{...o,pages:i}})}return{addMessageToQueryData:t,replaceLastMessageInQueryData:n}}var Jp=(0,bt.createContext)({streamingState:[!1,()=>{}],readerRef:{current:null},controllerRef:{current:null}});function RS(){let e=(0,bt.useState)(!1),t=(0,bt.useRef)(null),n=(0,bt.useRef)(null);return(0,Kt.jsx)(Jp.Provider,{value:{streamingState:e,readerRef:t,controllerRef:n},children:(0,Kt.jsx)(LJ,{})})}var TS=Q(xt(),1);function OS(){return(0,s3.useEffect)(()=>{},[]),(0,TS.jsx)("div",{className:"max-w-sm h-[calc(100vh-2rem)] bg-popover p-4 m-4 flex flex-col gap-4 border-solid border-[1px] border-primary",children:(0,TS.jsx)(RS,{})})}var u3=document.createElement("style");u3.textContent=`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.prose{
    color: var(--tw-prose-body);
    max-width: 65ch;
}

.prose :where(p):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.25em;
    margin-bottom: 1.25em;
}

.prose :where([class~="lead"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-lead);
    font-size: 1.25em;
    line-height: 1.6;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
}

.prose :where(a):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-links);
    text-decoration: underline;
    font-weight: 500;
}

.prose :where(strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-bold);
    font-weight: 600;
}

.prose :where(a strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(blockquote strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(thead th strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(ol):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: decimal;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    padding-inline-start: 1.625em;
}

.prose :where(ol[type="A"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: upper-alpha;
}

.prose :where(ol[type="a"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: lower-alpha;
}

.prose :where(ol[type="A" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: upper-alpha;
}

.prose :where(ol[type="a" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: lower-alpha;
}

.prose :where(ol[type="I"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: upper-roman;
}

.prose :where(ol[type="i"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: lower-roman;
}

.prose :where(ol[type="I" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: upper-roman;
}

.prose :where(ol[type="i" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: lower-roman;
}

.prose :where(ol[type="1"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: decimal;
}

.prose :where(ul):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    list-style-type: disc;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    padding-inline-start: 1.625em;
}

.prose :where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *))::marker{
    font-weight: 400;
    color: var(--tw-prose-counters);
}

.prose :where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *))::marker{
    color: var(--tw-prose-bullets);
}

.prose :where(dt):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-headings);
    font-weight: 600;
    margin-top: 1.25em;
}

.prose :where(hr):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    border-color: var(--tw-prose-hr);
    border-top-width: 1px;
    margin-top: 3em;
    margin-bottom: 3em;
}

.prose :where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-weight: 500;
    font-style: italic;
    color: var(--tw-prose-quotes);
    border-inline-start-width: 0.25rem;
    border-inline-start-color: var(--tw-prose-quote-borders);
    quotes: "\\201C""\\201D""\\2018""\\2019";
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding-inline-start: 1em;
}

.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"],[class~="not-prose"] *))::before{
    content: open-quote;
}

.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"],[class~="not-prose"] *))::after{
    content: close-quote;
}

.prose :where(h1):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-headings);
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
}

.prose :where(h1 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-weight: 900;
    color: inherit;
}

.prose :where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-headings);
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
}

.prose :where(h2 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-weight: 800;
    color: inherit;
}

.prose :where(h3):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-headings);
    font-weight: 600;
    font-size: 1.25em;
    margin-top: 1.6em;
    margin-bottom: 0.6em;
    line-height: 1.6;
}

.prose :where(h3 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-weight: 700;
    color: inherit;
}

.prose :where(h4):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-headings);
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    line-height: 1.5;
}

.prose :where(h4 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-weight: 700;
    color: inherit;
}

.prose :where(img):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(picture):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    display: block;
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(video):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(kbd):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-weight: 500;
    font-family: inherit;
    color: var(--tw-prose-kbd);
    box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);
    font-size: 0.875em;
    border-radius: 0.3125rem;
    padding-top: 0.1875em;
    padding-inline-end: 0.375em;
    padding-bottom: 0.1875em;
    padding-inline-start: 0.375em;
}

.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-code);
    font-weight: 600;
    font-size: 0.875em;
}

.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before{
    content: "\`";
}

.prose :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after{
    content: "\`";
}

.prose :where(a code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(h1 code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(h2 code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
    font-size: 0.875em;
}

.prose :where(h3 code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
    font-size: 0.9em;
}

.prose :where(h4 code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(blockquote code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(thead th code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: inherit;
}

.prose :where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-pre-code);
    background-color: var(--tw-prose-pre-bg);
    overflow-x: auto;
    font-weight: 400;
    font-size: 0.875em;
    line-height: 1.7142857;
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
    border-radius: 0.375rem;
    padding-top: 0.8571429em;
    padding-inline-end: 1.1428571em;
    padding-bottom: 0.8571429em;
    padding-inline-start: 1.1428571em;
}

.prose :where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    background-color: transparent;
    border-width: 0;
    border-radius: 0;
    padding: 0;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
}

.prose :where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before{
    content: none;
}

.prose :where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after{
    content: none;
}

.prose :where(table):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    width: 100%;
    table-layout: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 0.875em;
    line-height: 1.7142857;
}

.prose :where(thead):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    border-bottom-width: 1px;
    border-bottom-color: var(--tw-prose-th-borders);
}

.prose :where(thead th):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-headings);
    font-weight: 600;
    vertical-align: bottom;
    padding-inline-end: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-inline-start: 0.5714286em;
}

.prose :where(tbody tr):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    border-bottom-width: 1px;
    border-bottom-color: var(--tw-prose-td-borders);
}

.prose :where(tbody tr:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    border-bottom-width: 0;
}

.prose :where(tbody td):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    vertical-align: baseline;
}

.prose :where(tfoot):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    border-top-width: 1px;
    border-top-color: var(--tw-prose-th-borders);
}

.prose :where(tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    vertical-align: top;
}

.prose :where(th, td):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    text-align: start;
}

.prose :where(figure > *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
    margin-bottom: 0;
}

.prose :where(figcaption):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    color: var(--tw-prose-captions);
    font-size: 0.875em;
    line-height: 1.4285714;
    margin-top: 0.8571429em;
}

.prose{
    --tw-prose-body: hsl(var(--foreground));
    --tw-prose-headings: hsl(var(--foreground));
    --tw-prose-lead: hsl(var(--foreground));
    --tw-prose-links: hsl(var(--info));
    --tw-prose-bold: hsl(var(--foreground));
    --tw-prose-counters: hsl(var(--foreground));
    --tw-prose-bullets: hsl(var(--foreground));
    --tw-prose-hr: hsl(var(--border));
    --tw-prose-quotes: hsl(var(--foreground));
    --tw-prose-quote-borders: hsl(var(--border));
    --tw-prose-captions: hsl(var(--foreground));
    --tw-prose-kbd: #111827;
    --tw-prose-kbd-shadows: 17 24 39;
    --tw-prose-code: hsl(var(--foreground));
    --tw-prose-pre-code: hsl(var(--foreground));
    --tw-prose-pre-bg: hsl(var(--foreground));
    --tw-prose-th-borders: hsl(var(--border));
    --tw-prose-td-borders: hsl(var(--border));
    --tw-prose-invert-body: hsl(var(--foreground));
    --tw-prose-invert-headings: hsl(var(--foreground));
    --tw-prose-invert-lead: hsl(var(--foreground));
    --tw-prose-invert-links: hsl(var(--info));
    --tw-prose-invert-bold: hsl(var(--foreground));
    --tw-prose-invert-counters: hsl(var(--foreground));
    --tw-prose-invert-bullets: hsl(var(--foreground));
    --tw-prose-invert-hr: hsl(var(--border));
    --tw-prose-invert-quotes: hsl(var(--foreground));
    --tw-prose-invert-quote-borders: hsl(var(--border));
    --tw-prose-invert-captions: hsl(var(--foreground));
    --tw-prose-invert-kbd: #fff;
    --tw-prose-invert-kbd-shadows: 255 255 255;
    --tw-prose-invert-code: hsl(var(--foreground));
    --tw-prose-invert-pre-code: hsl(var(--foreground));
    --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
    --tw-prose-invert-th-borders: hsl(var(--border));
    --tw-prose-invert-td-borders: hsl(var(--border));
    font-size: 1rem;
    line-height: 1.75;
}

.prose :where(picture > img):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
    margin-bottom: 0;
}

.prose :where(li):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.prose :where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0.375em;
}

.prose :where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0.375em;
}

.prose :where(.prose > ul > li p):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

.prose :where(.prose > ul > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.25em;
}

.prose :where(.prose > ul > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-bottom: 1.25em;
}

.prose :where(.prose > ol > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.25em;
}

.prose :where(.prose > ol > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-bottom: 1.25em;
}

.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

.prose :where(dl):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.25em;
    margin-bottom: 1.25em;
}

.prose :where(dd):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.5em;
    padding-inline-start: 1.625em;
}

.prose :where(hr + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose :where(h2 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose :where(h3 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose :where(h4 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose :where(thead th:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0;
}

.prose :where(thead th:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-end: 0;
}

.prose :where(tbody td, tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-top: 0.5714286em;
    padding-inline-end: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-inline-start: 0.5714286em;
}

.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0;
}

.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-end: 0;
}

.prose :where(figure):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 2em;
    margin-bottom: 2em;
}

.prose :where(.prose > :first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose :where(.prose > :last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-bottom: 0;
}

.prose-sm{
    font-size: 0.875rem;
    line-height: 1.7142857;
}

.prose-sm :where(p):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
    margin-bottom: 1.1428571em;
}

.prose-sm :where([class~="lead"]):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 1.2857143em;
    line-height: 1.5555556;
    margin-top: 0.8888889em;
    margin-bottom: 0.8888889em;
}

.prose-sm :where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.3333333em;
    margin-bottom: 1.3333333em;
    padding-inline-start: 1.1111111em;
}

.prose-sm :where(h1):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 2.1428571em;
    margin-top: 0;
    margin-bottom: 0.8em;
    line-height: 1.2;
}

.prose-sm :where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 1.4285714em;
    margin-top: 1.6em;
    margin-bottom: 0.8em;
    line-height: 1.4;
}

.prose-sm :where(h3):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 1.2857143em;
    margin-top: 1.5555556em;
    margin-bottom: 0.4444444em;
    line-height: 1.5555556;
}

.prose-sm :where(h4):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.4285714em;
    margin-bottom: 0.5714286em;
    line-height: 1.4285714;
}

.prose-sm :where(img):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
}

.prose-sm :where(picture):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
}

.prose-sm :where(picture > img):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
    margin-bottom: 0;
}

.prose-sm :where(video):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
}

.prose-sm :where(kbd):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.8571429em;
    border-radius: 0.3125rem;
    padding-top: 0.1428571em;
    padding-inline-end: 0.3571429em;
    padding-bottom: 0.1428571em;
    padding-inline-start: 0.3571429em;
}

.prose-sm :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.8571429em;
}

.prose-sm :where(h2 code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.9em;
}

.prose-sm :where(h3 code):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.8888889em;
}

.prose-sm :where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.8571429em;
    line-height: 1.6666667;
    margin-top: 1.6666667em;
    margin-bottom: 1.6666667em;
    border-radius: 0.25rem;
    padding-top: 0.6666667em;
    padding-inline-end: 1em;
    padding-bottom: 0.6666667em;
    padding-inline-start: 1em;
}

.prose-sm :where(ol):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
    margin-bottom: 1.1428571em;
    padding-inline-start: 1.5714286em;
}

.prose-sm :where(ul):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
    margin-bottom: 1.1428571em;
    padding-inline-start: 1.5714286em;
}

.prose-sm :where(li):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.2857143em;
    margin-bottom: 0.2857143em;
}

.prose-sm :where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0.4285714em;
}

.prose-sm :where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0.4285714em;
}

.prose-sm :where(.prose-sm > ul > li p):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.5714286em;
    margin-bottom: 0.5714286em;
}

.prose-sm :where(.prose-sm > ul > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
}

.prose-sm :where(.prose-sm > ul > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-bottom: 1.1428571em;
}

.prose-sm :where(.prose-sm > ol > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
}

.prose-sm :where(.prose-sm > ol > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-bottom: 1.1428571em;
}

.prose-sm :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.5714286em;
    margin-bottom: 0.5714286em;
}

.prose-sm :where(dl):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
    margin-bottom: 1.1428571em;
}

.prose-sm :where(dt):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.1428571em;
}

.prose-sm :where(dd):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0.2857143em;
    padding-inline-start: 1.5714286em;
}

.prose-sm :where(hr):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 2.8571429em;
    margin-bottom: 2.8571429em;
}

.prose-sm :where(hr + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose-sm :where(h2 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose-sm :where(h3 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose-sm :where(h4 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose-sm :where(table):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.8571429em;
    line-height: 1.5;
}

.prose-sm :where(thead th):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-end: 1em;
    padding-bottom: 0.6666667em;
    padding-inline-start: 1em;
}

.prose-sm :where(thead th:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0;
}

.prose-sm :where(thead th:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-end: 0;
}

.prose-sm :where(tbody td, tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-top: 0.6666667em;
    padding-inline-end: 1em;
    padding-bottom: 0.6666667em;
    padding-inline-start: 1em;
}

.prose-sm :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-start: 0;
}

.prose-sm :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    padding-inline-end: 0;
}

.prose-sm :where(figure):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
}

.prose-sm :where(figure > *):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
    margin-bottom: 0;
}

.prose-sm :where(figcaption):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    font-size: 0.8571429em;
    line-height: 1.3333333;
    margin-top: 0.6666667em;
}

.prose-sm :where(.prose-sm > :first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-top: 0;
}

.prose-sm :where(.prose-sm > :last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)){
    margin-bottom: 0;
}
.absolute{
    position: absolute;
}
.relative{
    position: relative;
}
.right-4{
    right: 1rem;
}
.top-4{
    top: 1rem;
}
.m-4{
    margin: 1rem;
}
.mx-2{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
.my-1{
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
.my-2{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.mb-4{
    margin-bottom: 1rem;
}
.ml-2{
    margin-left: 0.5rem;
}
.ml-auto{
    margin-left: auto;
}
.mr-2{
    margin-right: 0.5rem;
}
.mr-auto{
    margin-right: auto;
}
.block{
    display: block;
}
.flex{
    display: flex;
}
.grid{
    display: grid;
}
.h-2\\.5{
    height: 0.625rem;
}
.h-4{
    height: 1rem;
}
.h-8{
    height: 2rem;
}
.h-\\[calc\\(100vh-2rem\\)\\]{
    height: calc(100vh - 2rem);
}
.h-full{
    height: 100%;
}
.max-h-40{
    max-height: 10rem;
}
.w-2\\.5{
    width: 0.625rem;
}
.w-full{
    width: 100%;
}
.max-w-\\[80\\%\\]{
    max-width: 80%;
}
.max-w-sm{
    max-width: 24rem;
}
.flex-grow{
    flex-grow: 1;
}
@keyframes bounce{

    0%, 100%{
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8,0,1,1);
    }

    50%{
        transform: none;
        animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
}
.animate-bounce{
    animation: bounce 1s infinite;
}
.grid-cols-2{
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
.flex-col{
    flex-direction: column;
}
.items-center{
    align-items: center;
}
.gap-2{
    gap: 0.5rem;
}
.gap-4{
    gap: 1rem;
}
.rounded{
    border-radius: 0.25rem;
}
.rounded-full{
    border-radius: 9999px;
}
.border-0{
    border-width: 0px;
}
.border-\\[1px\\]{
    border-width: 1px;
}
.border-solid{
    border-style: solid;
}
.border-destructive{
    border-color: hsl(var(--destructive));
}
.border-primary{
    border-color: hsl(var(--primary));
}
.border-success{
    border-color: hsl(var(--success));
}
.bg-background{
    background-color: hsl(var(--background));
}
.bg-destructive\\/5{
    background-color: hsl(var(--destructive) / 0.05);
}
.bg-light\\/80{
    background-color: hsl(var(--light) / 0.8);
}
.bg-muted{
    background-color: hsl(var(--muted));
}
.bg-muted-foreground{
    background-color: hsl(var(--muted-foreground));
}
.bg-popover{
    background-color: hsl(var(--popover));
}
.bg-primary\\/5{
    background-color: hsl(var(--primary) / 0.05);
}
.bg-success\\/15{
    background-color: hsl(var(--success) / 0.15);
}
.bg-success\\/5{
    background-color: hsl(var(--success) / 0.05);
}
.object-center{
    object-position: center;
}
.p-2{
    padding: 0.5rem;
}
.p-4{
    padding: 1rem;
}
.px-2{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
.text-center{
    text-align: center;
}
.text-sm{
    font-size: 0.8rem;
}
.text-xs{
    font-size: 0.75rem;
    line-height: 1rem;
}
.text-dark{
    color: hsl(var(--dark));
}
.text-destructive{
    color: hsl(var(--destructive));
}
.text-success{
    color: hsl(var(--success));
}
.filter{
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

#root {
    --background: 30 17% 98%;
    --foreground: 234 16% 35%;
    --card: 15 36% 96%;
    --card-foreground: 234 16% 35%;
    --popover: 21 48% 92%;
    --popover-foreground: 210 11% 15%;
    --primary: 30 100% 50%;
    --primary-foreground: 30 17% 98%;
    --secondary: 234 16% 35%;
    --secondary-foreground: 30 17% 98%;
    --muted: 0 0% 98%;
    --muted-foreground: 21 16% 75%;
    --accent: 30 31% 94%;
    --accent-foreground: 210 11% 15%;
    --destructive: 7 64% 54%;
    --destructive-foreground: 30 17% 98%;
    --info: 217 69% 52%;
    --info-foreground: 30 17% 98%;
    --success: 197 53% 34%;
    --success-foreground: 30 17% 98%;
    --warning: 35 81% 56%;
    --warning-foreground: 30 17% 98%;
    --border: 0 0% 93%;
    --input: 21 16% 75%;
    --ring: 0 0% 91%;
    --subtext: 0 0% 31%;
    --light: 30 17% 98%;
    --dark: 234 16% 35%;
}

#root.dark {
    --background: 0 4% 5%;
    --foreground: 30 100% 98%;
    --card: 0 2% 9%;
    --card-foreground: 30 100% 98%;
    --popover: 22 26% 14%;
    --popover-foreground: 0 0% 100%;
    --primary: 30 100% 50%;
    --primary-foreground: 0 4% 5%;
    --secondary: 30 100% 98%;
    --secondary-foreground: 0 4% 5%;
    --muted: 0 0% 2%;
    --muted-foreground: 30 21% 26%;
    --accent: 27 24% 9%;
    --accent-foreground: 0 0% 100%;
    --destructive: 4 66% 66%;
    --destructive-foreground: 0 4% 5%;
    --info: 217 90% 61%;
    --info-foreground: 0 4% 5%;
    --success: 93 50% 65%;
    --success-foreground: 0 4% 5%;
    --warning: 35 88% 72%;
    --warning-foreground: 0 4% 5%;
    --border: 20 5% 12%;
    --input: 30 21% 26%;
    --ring: 20 5% 12%;
    --subtext: 35 19% 64%;
    --light: 30 100% 98%;
    --dark: 0 4% 5%;
}

*{
    font-family: 'Inter' !important;
}

p,
a,
span,
div{
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}

p{
    color: hsl(var(--foreground));
}

.pills-container > div:nth-child(odd):last-child{
    grid-column: span 2 / span 2;
}

.prose-h1\\:my-0 :is(:where(h1):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}

.prose-h2\\:my-0 :is(:where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}

.prose-h3\\:my-0 :is(:where(h3):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}

.prose-h4\\:my-0 :is(:where(h4):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}

.prose-h5\\:my-0 :is(:where(h5):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}

.prose-h6\\:my-0 :is(:where(h6):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}

.prose-p\\:my-0 :is(:where(p):not(:where([class~="not-prose"],[class~="not-prose"] *))){
    margin-top: 0px;
    margin-bottom: 0px;
}`;document.head.appendChild(u3);var c3=document.createElement("style");c3.textContent=`:root {
  font-family: "Inter var", sans-serif;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  font-variation-settings: normal;
  --font-family: "Inter var", sans-serif;
  --font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  --surface-a: #ffffff;
  --surface-b: #f9fafb;
  --surface-c: #f3f4f6;
  --surface-d: #e5e7eb;
  --surface-e: #ffffff;
  --surface-f: #ffffff;
  --text-color: #4b5563;
  --text-color-secondary: #6b7280;
  --primary-color: #06b6d4;
  --primary-color-text: #ffffff;
  --surface-0: #ffffff;
  --surface-50: #f9fafb;
  --surface-100: #f3f4f6;
  --surface-200: #e5e7eb;
  --surface-300: #d1d5db;
  --surface-400: #9ca3af;
  --surface-500: #6b7280;
  --surface-600: #4b5563;
  --surface-700: #374151;
  --surface-800: #1f2937;
  --surface-900: #111827;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --content-padding: 1.25rem;
  --inline-spacing: 0.5rem;
  --border-radius: 6px;
  --surface-ground: #f9fafb;
  --surface-section: #ffffff;
  --surface-card: #ffffff;
  --surface-overlay: #ffffff;
  --surface-border: #dfe7ef;
  --surface-hover: #f6f9fc;
  --focus-ring: 0 0 0 0.2rem #a5f3fc;
  --maskbg: rgba(0, 0, 0, 0.4);
  --highlight-bg: #ecfeff;
  --highlight-text-color: #0e7490;
  color-scheme: light;
}

@font-face {
  font-family: "Inter var";
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: "Regular";
  src: url("./fonts/InterVariable.woff2") format("woff2");
}
@font-face {
  font-family: "Inter var";
  font-weight: 100 900;
  font-display: swap;
  font-style: italic;
  font-named-instance: "Italic";
  src: url("./fonts/InterVariable-Italic.woff2") format("woff2");
}
:root {
  --blue-50:#f5f9ff;
  --blue-100:#d0e1fd;
  --blue-200:#abc9fb;
  --blue-300:#85b2f9;
  --blue-400:#609af8;
  --blue-500:#3b82f6;
  --blue-600:#326fd1;
  --blue-700:#295bac;
  --blue-800:#204887;
  --blue-900:#183462;
  --green-50:#f4fcf7;
  --green-100:#caf1d8;
  --green-200:#a0e6ba;
  --green-300:#76db9b;
  --green-400:#4cd07d;
  --green-500:#22c55e;
  --green-600:#1da750;
  --green-700:#188a42;
  --green-800:#136c34;
  --green-900:#0e4f26;
  --yellow-50:#fefbf3;
  --yellow-100:#faedc4;
  --yellow-200:#f6de95;
  --yellow-300:#f2d066;
  --yellow-400:#eec137;
  --yellow-500:#eab308;
  --yellow-600:#c79807;
  --yellow-700:#a47d06;
  --yellow-800:#816204;
  --yellow-900:#5e4803;
  --cyan-50:#f3fbfd;
  --cyan-100:#c3edf5;
  --cyan-200:#94e0ed;
  --cyan-300:#65d2e4;
  --cyan-400:#35c4dc;
  --cyan-500:#06b6d4;
  --cyan-600:#059bb4;
  --cyan-700:#047f94;
  --cyan-800:#036475;
  --cyan-900:#024955;
  --pink-50:#fef6fa;
  --pink-100:#fad3e7;
  --pink-200:#f7b0d3;
  --pink-300:#f38ec0;
  --pink-400:#f06bac;
  --pink-500:#ec4899;
  --pink-600:#c93d82;
  --pink-700:#a5326b;
  --pink-800:#822854;
  --pink-900:#5e1d3d;
  --indigo-50:#f7f7fe;
  --indigo-100:#dadafc;
  --indigo-200:#bcbdf9;
  --indigo-300:#9ea0f6;
  --indigo-400:#8183f4;
  --indigo-500:#6366f1;
  --indigo-600:#5457cd;
  --indigo-700:#4547a9;
  --indigo-800:#363885;
  --indigo-900:#282960;
  --teal-50:#f3fbfb;
  --teal-100:#c7eeea;
  --teal-200:#9ae0d9;
  --teal-300:#6dd3c8;
  --teal-400:#41c5b7;
  --teal-500:#14b8a6;
  --teal-600:#119c8d;
  --teal-700:#0e8174;
  --teal-800:#0b655b;
  --teal-900:#084a42;
  --orange-50:#fff8f3;
  --orange-100:#feddc7;
  --orange-200:#fcc39b;
  --orange-300:#fba86f;
  --orange-400:#fa8e42;
  --orange-500:#f97316;
  --orange-600:#d46213;
  --orange-700:#ae510f;
  --orange-800:#893f0c;
  --orange-900:#642e09;
  --bluegray-50:#f7f8f9;
  --bluegray-100:#dadee3;
  --bluegray-200:#bcc3cd;
  --bluegray-300:#9fa9b7;
  --bluegray-400:#818ea1;
  --bluegray-500:#64748b;
  --bluegray-600:#556376;
  --bluegray-700:#465161;
  --bluegray-800:#37404c;
  --bluegray-900:#282e38;
  --purple-50:#fbf7ff;
  --purple-100:#ead6fd;
  --purple-200:#dab6fc;
  --purple-300:#c996fa;
  --purple-400:#b975f9;
  --purple-500:#a855f7;
  --purple-600:#8f48d2;
  --purple-700:#763cad;
  --purple-800:#5c2f88;
  --purple-900:#432263;
  --red-50:#fff5f5;
  --red-100:#ffd0ce;
  --red-200:#ffaca7;
  --red-300:#ff8780;
  --red-400:#ff6259;
  --red-500:#ff3d32;
  --red-600:#d9342b;
  --red-700:#b32b23;
  --red-800:#8c221c;
  --red-900:#661814;
  --primary-50:#f3fbfd;
  --primary-100:#c3edf5;
  --primary-200:#94e0ed;
  --primary-300:#65d2e4;
  --primary-400:#35c4dc;
  --primary-500:#06b6d4;
  --primary-600:#059bb4;
  --primary-700:#047f94;
  --primary-800:#036475;
  --primary-900:#024955;
}

.p-editor-container .p-editor-toolbar {
  background: #f9fafb;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.p-editor-container .p-editor-toolbar.ql-snow {
  border: 1px solid #e5e7eb;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
  stroke: #6b7280;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
  fill: #6b7280;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
  border: 0 none;
  color: #6b7280;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
  color: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
  stroke: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
  fill: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  background: #ffffff;
  border: 0 none;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0.75rem 0;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
  color: #4b5563;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
  color: #4b5563;
  background: #f3f4f6;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
  padding: 0.75rem 1.25rem;
}
.p-editor-container .p-editor-content {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.p-editor-container .p-editor-content.ql-snow {
  border: 1px solid #e5e7eb;
}
.p-editor-container .p-editor-content .ql-editor {
  background: #ffffff;
  color: #4b5563;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
  color: #4b5563;
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
  stroke: #4b5563;
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
  fill: #4b5563;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
  color: #06b6d4;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
  stroke: #06b6d4;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
  fill: #06b6d4;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
  color: #06b6d4;
}

@layer primereact {
  * {
    box-sizing: border-box;
  }
  .p-component {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    font-weight: normal;
  }
  .p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
  }
  .p-disabled, .p-component:disabled {
    opacity: 0.6;
  }
  .p-error {
    color: #e24c4c;
  }
  .p-text-secondary {
    color: #6b7280;
  }
  .pi {
    font-size: 1rem;
  }
  .p-icon {
    width: 1rem;
    height: 1rem;
  }
  .p-link {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    border-radius: 6px;
  }
  .p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
  }
  .p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
  }
  @keyframes p-component-overlay-enter-animation {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--maskbg);
    }
  }
  @keyframes p-component-overlay-leave-animation {
    from {
      background-color: var(--maskbg);
    }
    to {
      background-color: transparent;
    }
  }
  .p-autocomplete .p-autocomplete-loader {
    right: 0.75rem;
  }
  .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.75rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container {
    padding: 0.375rem 0.75rem;
    gap: 0.5rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {
    border-color: #06b6d4;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
    padding: 0.375rem 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #4b5563;
    padding: 0;
    margin: 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
    padding: 0.375rem 0.75rem;
    margin-right: 0.5rem;
    background: #ecfeff;
    color: #0e7490;
    border-radius: 6px;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
    margin-left: 0.5rem;
  }
  .p-autocomplete.p-invalid.p-component > .p-inputtext {
    border-color: #e24c4c;
  }
  .p-autocomplete-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-autocomplete-panel .p-autocomplete-items {
    padding: 0.75rem 0;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
    margin: 0;
    padding: 0.75rem 1.25rem;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
  }
  .p-calendar.p-invalid.p-component > .p-inputtext {
    border-color: #e24c4c;
  }
  .p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-datepicker {
    padding: 0.5rem;
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #d1d5db;
    border-radius: 6px;
  }
  .p-datepicker:not(.p-datepicker-inline) {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background: #ffffff;
  }
  .p-datepicker .p-datepicker-header {
    padding: 0.5rem;
    color: #4b5563;
    background: #ffffff;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid #e5e7eb;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev,
  .p-datepicker .p-datepicker-header .p-datepicker-next {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
  .p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:focus-visible,
  .p-datepicker .p-datepicker-header .p-datepicker-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title {
    line-height: 2rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    color: #4b5563;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    font-weight: 600;
    padding: 0.5rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
    color: #06b6d4;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    margin-right: 0.5rem;
  }
  .p-datepicker table {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  .p-datepicker table th {
    padding: 0.5rem;
  }
  .p-datepicker table th > span {
    width: 2.5rem;
    height: 2.5rem;
  }
  .p-datepicker table td {
    padding: 0.5rem;
  }
  .p-datepicker table td > span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: box-shadow 0.2s;
    border: 1px solid transparent;
  }
  .p-datepicker table td > span.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-datepicker table td > span:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-datepicker table td.p-datepicker-today > span {
    background: #d1d5db;
    color: #4b5563;
    border-color: transparent;
  }
  .p-datepicker table td.p-datepicker-today > span.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-datepicker .p-datepicker-buttonbar {
    padding: 1rem 0;
    border-top: 1px solid #e5e7eb;
  }
  .p-datepicker .p-datepicker-buttonbar .p-button {
    width: auto;
  }
  .p-datepicker .p-timepicker {
    border-top: 1px solid #e5e7eb;
    padding: 0.5rem;
  }
  .p-datepicker .p-timepicker button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-datepicker .p-timepicker button:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-datepicker .p-timepicker button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-datepicker .p-timepicker button:last-child {
    margin-top: 0.2em;
  }
  .p-datepicker .p-timepicker span {
    font-size: 1.25rem;
  }
  .p-datepicker .p-timepicker > div {
    padding: 0 0.5rem;
  }
  .p-datepicker.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
  }
  .p-datepicker .p-monthpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month {
    padding: 0.5rem;
    transition: box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-datepicker .p-yearpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year {
    padding: 0.5rem;
    transition: box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
    border-left: 1px solid #e5e7eb;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0;
    padding-bottom: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
    border-left: 0 none;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
  }
  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: #f3f4f6;
  }
  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: #f3f4f6;
  }
  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: #f3f4f6;
  }
  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  @media screen and (max-width: 769px) {
    .p-datepicker table th,
    .p-datepicker table td {
      padding: 0;
    }
  }
  .p-cascadeselect {
    background: #ffffff;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    outline-color: transparent;
  }
  .p-cascadeselect:not(.p-disabled):hover {
    border-color: #06b6d4;
  }
  .p-cascadeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-cascadeselect.p-variant-filled {
    background-color: #f3f4f6;
  }
  .p-cascadeselect.p-variant-filled:enabled:hover {
    background-color: #f3f4f6;
  }
  .p-cascadeselect.p-variant-filled:enabled:focus {
    background-color: #ffffff;
  }
  .p-cascadeselect .p-cascadeselect-label {
    background: transparent;
    border: 0 none;
    padding: 0.75rem 0.75rem;
  }
  .p-cascadeselect .p-cascadeselect-label.p-placeholder {
    color: #6b7280;
  }
  .p-cascadeselect .p-cascadeselect-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-cascadeselect .p-cascadeselect-trigger {
    background: transparent;
    color: #6b7280;
    width: 3rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-cascadeselect.p-invalid.p-component {
    border-color: #e24c4c;
  }
  .p-cascadeselect-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-cascadeselect-panel .p-cascadeselect-items {
    padding: 0.75rem 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
    margin: 0;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:first-child {
    margin-top: 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:last-child {
    margin-bottom: 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight.p-focus {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
    padding: 0.75rem 1.25rem;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
    font-size: 0.875rem;
  }
  .p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
  }
  .p-checkbox-input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    cursor: pointer;
  }
  .p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p-checkbox {
    width: 22px;
    height: 22px;
  }
  .p-checkbox .p-checkbox-input {
    border: 2px solid #d1d5db;
    border-radius: 6px;
  }
  .p-checkbox .p-checkbox-box {
    border: 2px solid #d1d5db;
    background: #ffffff;
    width: 22px;
    height: 22px;
    color: #4b5563;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline-color: transparent;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: 0.2s;
    color: #ffffff;
    font-size: 14px;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: 14px;
    height: 14px;
  }
  .p-checkbox .p-checkbox-box {
    border: 2px solid #d1d5db;
    background: #ffffff;
    width: 22px;
    height: 22px;
    color: #4b5563;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline-color: transparent;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: 0.2s;
    color: #ffffff;
    font-size: 14px;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: 14px;
    height: 14px;
  }
  .p-checkbox.p-highlight .p-checkbox-box {
    border-color: #06b6d4;
    background: #06b6d4;
  }
  .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: #06b6d4;
  }
  .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    border-color: #0e7490;
    background: #0e7490;
    color: #ffffff;
  }
  .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-checkbox.p-invalid > .p-checkbox-box {
    border-color: #e24c4c;
  }
  .p-checkbox.p-variant-filled .p-checkbox-box {
    background-color: #f3f4f6;
  }
  .p-checkbox.p-variant-filled.p-highlight .p-checkbox-box {
    background: #06b6d4;
  }
  .p-checkbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background-color: #f3f4f6;
  }
  .p-checkbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: #0e7490;
  }
  .p-input-filled .p-checkbox .p-checkbox-box {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-checkbox.p-highlight .p-checkbox-box {
    background: #06b6d4;
  }
  .p-input-filled .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: #0e7490;
  }
  .p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
  }
  .p-checkbox-input {
    cursor: pointer;
  }
  .p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p-tristatecheckbox.p-variant-filled .p-checkbox-box {
    background-color: #f3f4f6;
  }
  .p-tristatecheckbox.p-variant-filled.p-highlight .p-checkbox-box {
    background: #06b6d4;
  }
  .p-tristatecheckbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background-color: #f3f4f6;
  }
  .p-tristatecheckbox.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
    background: #0e7490;
  }
  .p-chips {
    display: inline-flex;
  }
  .p-chips-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .p-chips-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
  }
  .p-chips-input-token {
    flex: 1 1 auto;
    display: inline-flex;
  }
  .p-chips-token-icon {
    cursor: pointer;
  }
  .p-chips-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
  }
  .p-fluid .p-chips {
    display: flex;
  }
  .p-chips:not(.p-disabled):hover .p-chips-multiple-container {
    border-color: #06b6d4;
  }
  .p-chips:not(.p-disabled).p-focus .p-chips-multiple-container {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-chips .p-chips-multiple-container {
    padding: 0.375rem 0.75rem;
    outline-color: transparent;
  }
  .p-chips .p-chips-multiple-container .p-chips-token {
    padding: 0.375rem 0.75rem;
    margin-right: 0.5rem;
    background: #e5e7eb;
    color: #4b5563;
    border-radius: 16px;
  }
  .p-chips .p-chips-multiple-container .p-chips-token.p-focus {
    background: #e5e7eb;
    color: #4b5563;
  }
  .p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
    margin-left: 0.5rem;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token {
    padding: 0.375rem 0;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #4b5563;
    padding: 0;
    margin: 0;
  }
  .p-chips.p-invalid.p-component > .p-inputtext {
    border-color: #e24c4c;
  }
  .p-colorpicker-preview {
    width: 2rem;
    height: 2rem;
  }
  .p-colorpicker-panel {
    background: #323232;
    border: 1px solid #191919;
  }
  .p-colorpicker-panel .p-colorpicker-color-handle,
  .p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: #ffffff;
  }
  .p-colorpicker-overlay-panel {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
  }
  .p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
  .p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
  }
  input.p-dropdown-label {
    cursor: default;
  }
  .p-dropdown .p-dropdown-panel {
    min-width: 100%;
  }
  .p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
  }
  .p-dropdown-items-wrapper {
    overflow: auto;
  }
  .p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .p-dropdown-item-group {
    cursor: auto;
  }
  .p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .p-dropdown-filter {
    width: 100%;
  }
  .p-dropdown-filter-container {
    position: relative;
  }
  .p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
  .p-fluid .p-dropdown {
    display: flex;
  }
  .p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
  }
  .p-dropdown {
    background: #ffffff;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    outline-color: transparent;
  }
  .p-dropdown:not(.p-disabled):hover {
    border-color: #06b6d4;
  }
  .p-dropdown:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-dropdown.p-variant-filled {
    background: #f3f4f6;
  }
  .p-dropdown.p-variant-filled:not(.p-disabled):hover {
    background-color: #f3f4f6;
  }
  .p-dropdown.p-variant-filled:not(.p-disabled).p-focus {
    background-color: #ffffff;
  }
  .p-dropdown.p-variant-filled:not(.p-disabled).p-focus .p-inputtext {
    background-color: transparent;
  }
  .p-dropdown.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
  }
  .p-dropdown .p-dropdown-label {
    background: transparent;
    border: 0 none;
  }
  .p-dropdown .p-dropdown-label.p-placeholder {
    color: #6b7280;
  }
  .p-dropdown .p-dropdown-label:focus, .p-dropdown .p-dropdown-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-dropdown .p-dropdown-trigger {
    background: transparent;
    color: #6b7280;
    width: 3rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-dropdown .p-dropdown-clear-icon {
    color: #6b7280;
    right: 3rem;
  }
  .p-dropdown.p-invalid.p-component {
    border-color: #e24c4c;
  }
  .p-dropdown-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-dropdown-panel .p-dropdown-header {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    padding-right: 1.75rem;
    margin-right: -1.75rem;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-dropdown-panel .p-dropdown-items {
    padding: 0.75rem 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    margin: 0;
    padding: 0.75rem 1.25rem;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:first-child {
    margin-top: 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:last-child {
    margin-bottom: 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item .p-dropdown-check-icon {
    position: relative;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
    padding: 0.75rem 1.25rem;
    color: #4b5563;
    background: transparent;
  }
  .p-inputgroup-addon {
    background: #f3f4f6;
    color: #6b7280;
    border-top: 1px solid #d1d5db;
    border-left: 1px solid #d1d5db;
    border-bottom: 1px solid #d1d5db;
    padding: 0.75rem 0.75rem;
    min-width: 3rem;
  }
  .p-inputgroup-addon:last-child {
    border-right: 1px solid #d1d5db;
  }
  .p-inputgroup > .p-component,
  .p-inputgroup > .p-inputwrapper > .p-inputtext,
  .p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
  }
  .p-inputgroup > .p-component + .p-inputgroup-addon,
  .p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
  .p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
  }
  .p-inputgroup > .p-component:focus,
  .p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
  .p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
  }
  .p-inputgroup > .p-component:focus ~ label,
  .p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
  .p-inputgroup > .p-float-label > .p-component:focus ~ label {
    z-index: 1;
  }
  .p-inputgroup-addon:first-child,
  .p-inputgroup button:first-child,
  .p-inputgroup input:first-child,
  .p-inputgroup > .p-inputwrapper:first-child,
  .p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-inputgroup-addon:last-child,
  .p-inputgroup button:last-child,
  .p-inputgroup input:last-child,
  .p-inputgroup > .p-inputwrapper:last-child,
  .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-fluid .p-inputgroup .p-button {
    width: auto;
  }
  .p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: 3rem;
  }
  .p-inputnumber.p-invalid.p-component > .p-inputtext {
    border-color: #e24c4c;
  }
  .p-inputswitch {
    position: relative;
    display: inline-block;
  }
  .p-inputswitch-input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    cursor: pointer;
  }
  .p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
  }
  .p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
  }
  .p-inputswitch {
    width: 3rem;
    height: 1.75rem;
  }
  .p-inputswitch .p-inputswitch-input {
    border-radius: 30px;
  }
  .p-inputswitch .p-inputswitch-slider {
    background: #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 30px;
    outline-color: transparent;
  }
  .p-inputswitch .p-inputswitch-slider:before {
    background: #ffffff;
    width: 1.25rem;
    height: 1.25rem;
    left: 0.25rem;
    margin-top: -0.625rem;
    border-radius: 50%;
    transition-duration: 0.2s;
  }
  .p-inputswitch.p-highlight .p-inputswitch-slider {
    background: #06b6d4;
  }
  .p-inputswitch.p-highlight .p-inputswitch-slider:before {
    background: #ffffff;
    transform: translateX(1.25rem);
  }
  .p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover) .p-inputswitch-slider {
    background: #b7bcc5;
  }
  .p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:hover).p-highlight .p-inputswitch-slider {
    background: #0891b2;
  }
  .p-inputswitch:not(.p-disabled):has(.p-inputswitch-input:focus-visible) .p-inputswitch-slider {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-inputswitch.p-invalid > .p-inputswitch-slider {
    border-color: #e24c4c;
  }
  .p-inputtext {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #4b5563;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    appearance: none;
    border-radius: 6px;
    outline-color: transparent;
  }
  .p-inputtext:enabled:hover {
    border-color: #06b6d4;
  }
  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-inputtext.p-invalid.p-component {
    border-color: #e24c4c;
  }
  .p-inputtext.p-variant-filled {
    background-color: #f3f4f6;
  }
  .p-inputtext.p-variant-filled:enabled:hover {
    background-color: #f3f4f6;
  }
  .p-inputtext.p-variant-filled:enabled:focus {
    background-color: #ffffff;
  }
  .p-inputtext.p-inputtext-sm {
    font-size: 0.875rem;
    padding: 0.65625rem 0.65625rem;
  }
  .p-inputtext.p-inputtext-lg {
    font-size: 1.25rem;
    padding: 0.9375rem 0.9375rem;
  }
  .p-float-label > label {
    left: 0.75rem;
    color: #6b7280;
    transition-duration: 0.2s;
  }
  .p-float-label > .p-invalid + label {
    color: #e24c4c;
  }
  .p-icon-field-left > .p-inputtext {
    padding-left: 2.5rem;
  }
  .p-icon-field-left.p-float-label > label {
    left: 2.5rem;
  }
  .p-icon-field-right > .p-inputtext {
    padding-right: 2.5rem;
  }
  ::-webkit-input-placeholder {
    color: #6b7280;
  }
  :-moz-placeholder {
    color: #6b7280;
  }
  ::-moz-placeholder {
    color: #6b7280;
  }
  :-ms-input-placeholder {
    color: #6b7280;
  }
  .p-input-filled .p-inputtext {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-inputtext:enabled:hover {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-inputtext:enabled:focus {
    background-color: #ffffff;
  }
  .p-inputtext-sm .p-inputtext {
    font-size: 0.875rem;
    padding: 0.65625rem 0.65625rem;
  }
  .p-inputtext-lg .p-inputtext {
    font-size: 1.25rem;
    padding: 0.9375rem 0.9375rem;
  }
  .p-icon-field {
    position: relative;
  }
  .p-icon-field > .p-input-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
  .p-fluid .p-icon-field-left,
  .p-fluid .p-icon-field-right {
    width: 100%;
  }
  .p-icon-field-left > .p-input-icon:first-of-type {
    left: 0.75rem;
    color: #6b7280;
  }
  .p-icon-field-right > .p-input-icon:last-of-type {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-inputotp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .p-inputotp-input {
    text-align: center;
    width: 2.5rem;
  }
  .p-listbox-list-wrapper {
    overflow: auto;
  }
  .p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .p-listbox-item-group {
    cursor: auto;
  }
  .p-listbox-filter-container {
    position: relative;
  }
  .p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
  .p-listbox-filter {
    width: 100%;
  }
  .p-listbox {
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline-color: transparent;
  }
  .p-listbox .p-listbox-header {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-listbox .p-listbox-header .p-listbox-filter {
    padding-right: 1.75rem;
  }
  .p-listbox .p-listbox-header .p-listbox-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-listbox .p-listbox-list {
    padding: 0.75rem 0;
    outline: 0 none;
  }
  .p-listbox .p-listbox-list .p-listbox-item {
    margin: 0;
    padding: 0.75rem 1.25rem;
    border: 0 none;
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item:first-child {
    margin-top: 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item:last-child {
    margin-bottom: 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-listbox .p-listbox-list .p-listbox-item-group {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
  }
  .p-listbox .p-listbox-list .p-listbox-empty-message {
    padding: 0.75rem 1.25rem;
    color: #4b5563;
    background: transparent;
  }
  .p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover.p-focus {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-listbox.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-listbox.p-invalid {
    border-color: #e24c4c;
  }
  .p-mention-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-mention-panel .p-mention-items {
    padding: 0.75rem 0;
  }
  .p-mention-panel .p-mention-items .p-mention-item {
    margin: 0;
    padding: 0.75rem 1.25rem;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-mention-panel .p-mention-items .p-mention-item:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-multiselect {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
  }
  .p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
  }
  .p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
  }
  .p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
  }
  .p-multiselect-token-icon {
    cursor: pointer;
  }
  .p-multiselect .p-multiselect-panel {
    min-width: 100%;
  }
  .p-multiselect-items-wrapper {
    overflow: auto;
  }
  .p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .p-multiselect-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
  }
  .p-multiselect-item-group {
    cursor: auto;
  }
  .p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
  }
  .p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
  .p-multiselect-filter-container .p-inputtext {
    width: 100%;
  }
  .p-multiselect-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    margin-left: auto;
  }
  .p-fluid .p-multiselect {
    display: flex;
  }
  .p-multiselect {
    background: #ffffff;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    outline-color: transparent;
  }
  .p-multiselect:not(.p-disabled):hover {
    border-color: #06b6d4;
  }
  .p-multiselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-multiselect.p-variant-filled {
    background: #f3f4f6;
  }
  .p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background-color: #f3f4f6;
  }
  .p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    background-color: #ffffff;
  }
  .p-multiselect .p-multiselect-label {
    padding: 0.75rem 0.75rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-multiselect .p-multiselect-label.p-placeholder {
    color: #6b7280;
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token {
    padding: 0.375rem 0.75rem;
    margin-right: 0.5rem;
    background: #e5e7eb;
    color: #4b5563;
    border-radius: 16px;
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
    margin-left: 0.5rem;
  }
  .p-multiselect .p-multiselect-trigger {
    background: transparent;
    color: #6b7280;
    width: 3rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-multiselect.p-invalid.p-component {
    border-color: #e24c4c;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.375rem 0.75rem;
  }
  .p-multiselect-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-multiselect-panel .p-multiselect-header {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
    padding-right: 1.75rem;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-multiselect-panel .p-multiselect-header .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close {
    margin-left: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-multiselect-panel .p-multiselect-items {
    padding: 0.75rem 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
    margin: 0;
    padding: 0.75rem 1.25rem;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:first-child {
    margin-top: 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:last-child {
    margin-bottom: 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight.p-focus {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
    padding: 0.75rem 1.25rem;
    color: #4b5563;
    background: transparent;
  }
  .p-password.p-invalid.p-component > .p-inputtext {
    border-color: #e24c4c;
  }
  .p-password-panel {
    padding: 1.25rem;
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .p-password-panel .p-password-meter {
    margin-bottom: 0.5rem;
    background: #e5e7eb;
  }
  .p-password-panel .p-password-meter .p-password-strength.weak {
    background: #ea5455;
  }
  .p-password-panel .p-password-meter .p-password-strength.medium {
    background: #ff9f42;
  }
  .p-password-panel .p-password-meter .p-password-strength.strong {
    background: #29c76f;
  }
  .p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
  }
  .p-radiobutton-input {
    cursor: pointer;
  }
  .p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
    border-radius: 50%;
    visibility: hidden;
  }
  .p-radiobutton.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
  }
  .p-radiobutton {
    width: 22px;
    height: 22px;
  }
  .p-radiobutton .p-radiobutton-input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 2px solid #d1d5db;
    border-radius: 50%;
  }
  .p-radiobutton .p-radiobutton-box {
    border: 2px solid #d1d5db;
    background: #ffffff;
    width: 22px;
    height: 22px;
    color: #4b5563;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline-color: transparent;
  }
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 12px;
    height: 12px;
    transition-duration: 0.2s;
    background-color: #ffffff;
  }
  .p-radiobutton.p-highlight .p-radiobutton-box {
    border-color: #06b6d4;
    background: #06b6d4;
  }
  .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: #06b6d4;
  }
  .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    border-color: #0e7490;
    background: #0e7490;
  }
  .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box .p-radiobutton-icon {
    background-color: #ffffff;
  }
  .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: #e24c4c;
  }
  .p-radiobutton.p-variant-filled .p-radiobutton-box {
    background-color: #f3f4f6;
  }
  .p-radiobutton.p-variant-filled.p-highlight .p-radiobutton-box {
    background: #06b6d4;
  }
  .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    background-color: #f3f4f6;
  }
  .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    background: #0e7490;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-radiobutton.p-highlight .p-radiobutton-box {
    background: #06b6d4;
  }
  .p-input-filled .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-highlight .p-radiobutton-box {
    background: #0e7490;
  }
  .p-rating {
    position: relative;
    display: flex;
    align-items: center;
  }
  .p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  .p-rating.p-readonly .p-rating-item {
    cursor: default;
  }
  .p-rating {
    gap: 0.5rem;
  }
  .p-rating .p-rating-item {
    outline-color: transparent;
    border-radius: 50%;
  }
  .p-rating .p-rating-item .p-rating-icon {
    color: #4b5563;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    font-size: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-icon {
    width: 1.143rem;
    height: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
    color: #ea5455;
  }
  .p-rating .p-rating-item.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #06b6d4;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: #06b6d4;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
    color: #e73d3e;
  }
  .p-selectbutton .p-button {
    background: #ffffff;
    border: 1px solid #d1d5db;
    color: #4b5563;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-selectbutton .p-button .p-button-icon-left,
  .p-selectbutton .p-button .p-button-icon-right {
    color: #6b7280;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #f3f4f6;
    border-color: #d1d5db;
    color: #4b5563;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: #374151;
  }
  .p-selectbutton .p-button.p-highlight {
    background: #06b6d4;
    border-color: #06b6d4;
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight .p-button-icon-left,
  .p-selectbutton .p-button.p-highlight .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight:hover {
    background: #0891b2;
    border-color: #0891b2;
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton.p-invalid > .p-button {
    border-color: #e24c4c;
  }
  .p-slider {
    background: #e5e7eb;
    border: 0 none;
    border-radius: 6px;
  }
  .p-slider.p-slider-horizontal {
    height: 0.286rem;
  }
  .p-slider.p-slider-horizontal .p-slider-handle {
    margin-top: -0.5715rem;
    margin-left: -0.5715rem;
  }
  .p-slider.p-slider-vertical {
    width: 0.286rem;
  }
  .p-slider.p-slider-vertical .p-slider-handle {
    margin-left: -0.5715rem;
    margin-bottom: -0.5715rem;
  }
  .p-slider .p-slider-handle {
    height: 1.143rem;
    width: 1.143rem;
    background: #ffffff;
    border: 2px solid #06b6d4;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-slider .p-slider-handle:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-slider .p-slider-range {
    background: #06b6d4;
  }
  .p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: #06b6d4;
    border-color: #06b6d4;
  }
  .p-treeselect {
    background: #ffffff;
    border: 1px solid #d1d5db;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-treeselect:not(.p-disabled):hover {
    border-color: #06b6d4;
  }
  .p-treeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-treeselect.p-treeselect-clearable .p-treeselect-label {
    padding-right: 1.75rem;
  }
  .p-treeselect.p-variant-filled {
    background: #f3f4f6;
  }
  .p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background-color: #f3f4f6;
  }
  .p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    background-color: #ffffff;
  }
  .p-treeselect .p-treeselect-label {
    padding: 0.75rem 0.75rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-treeselect .p-treeselect-label.p-placeholder {
    color: #6b7280;
  }
  .p-treeselect.p-treeselect-chip .p-treeselect-token {
    padding: 0.375rem 0.75rem;
    margin-right: 0.5rem;
    background: #e5e7eb;
    color: #4b5563;
    border-radius: 16px;
  }
  .p-treeselect .p-treeselect-trigger {
    background: transparent;
    color: #6b7280;
    width: 3rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-treeselect .p-treeselect-clear-icon {
    color: #6b7280;
    right: 3rem;
  }
  .p-treeselect.p-invalid.p-component {
    border-color: #e24c4c;
  }
  .p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.375rem 0.75rem;
  }
  .p-treeselect-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-treeselect-panel .p-treeselect-header {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container {
    margin-right: 0.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter {
    padding-right: 1.75rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter {
    padding-right: 3.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter-clear-icon {
    right: 2.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
    border: 0 none;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
    padding: 0.75rem 1.25rem;
    color: #4b5563;
    background: transparent;
  }
  .p-input-filled .p-treeselect {
    background: #f3f4f6;
  }
  .p-input-filled .p-treeselect:not(.p-disabled):hover {
    background-color: #f3f4f6;
  }
  .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
    background-color: #ffffff;
  }
  .p-togglebutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
  }
  .p-togglebutton-input {
    cursor: pointer;
  }
  .p-togglebutton .p-button {
    flex: 1 1 auto;
  }
  .p-togglebutton .p-togglebutton-input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid #d1d5db;
    border-radius: 6px;
  }
  .p-togglebutton .p-button {
    background: #ffffff;
    border: 1px solid #d1d5db;
    color: #4b5563;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline-color: transparent;
  }
  .p-togglebutton .p-button .p-button-icon-left,
  .p-togglebutton .p-button .p-button-icon-right {
    color: #6b7280;
  }
  .p-togglebutton.p-highlight .p-button {
    background: #06b6d4;
    border-color: #06b6d4;
    color: #ffffff;
  }
  .p-togglebutton.p-highlight .p-button .p-button-icon-left,
  .p-togglebutton.p-highlight .p-button .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button {
    background: #f3f4f6;
    border-color: #d1d5db;
    color: #4b5563;
  }
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button .p-button-icon-left,
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover):not(.p-highlight) .p-button .p-button-icon-right {
    color: #374151;
  }
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover).p-highlight .p-button {
    background: #0891b2;
    border-color: #0891b2;
    color: #ffffff;
  }
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover).p-highlight .p-button .p-button-icon-left,
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:hover).p-highlight .p-button .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton:not(.p-disabled):has(.p-togglebutton-input:focus-visible) .p-button {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: #06b6d4;
  }
  .p-togglebutton.p-invalid > .p-button {
    border-color: #e24c4c;
  }
  .p-button {
    color: #ffffff;
    background: #06b6d4;
    border: 1px solid #06b6d4;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-button:not(:disabled):hover {
    background: #0891b2;
    color: #ffffff;
    border-color: #0891b2;
  }
  .p-button:not(:disabled):active {
    background: #0e7490;
    color: #ffffff;
    border-color: #0e7490;
  }
  .p-button.p-button-outlined {
    background-color: transparent;
    color: #06b6d4;
    border: 1px solid;
  }
  .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(6, 182, 212, 0.04);
    color: #06b6d4;
    border: 1px solid;
  }
  .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(6, 182, 212, 0.16);
    color: #06b6d4;
    border: 1px solid;
  }
  .p-button.p-button-outlined.p-button-plain {
    color: #6b7280;
    border-color: #6b7280;
  }
  .p-button.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: #f3f4f6;
    color: #6b7280;
  }
  .p-button.p-button-outlined.p-button-plain:not(:disabled):active {
    background: #e5e7eb;
    color: #6b7280;
  }
  .p-button.p-button-text {
    background-color: transparent;
    color: #06b6d4;
    border-color: transparent;
  }
  .p-button.p-button-text:not(:disabled):hover {
    background: rgba(6, 182, 212, 0.04);
    color: #06b6d4;
    border-color: transparent;
  }
  .p-button.p-button-text:not(:disabled):active {
    background: rgba(6, 182, 212, 0.16);
    color: #06b6d4;
    border-color: transparent;
  }
  .p-button.p-button-text.p-button-plain {
    color: #6b7280;
  }
  .p-button.p-button-text.p-button-plain:not(:disabled):hover {
    background: #f3f4f6;
    color: #6b7280;
  }
  .p-button.p-button-text.p-button-plain:not(:disabled):active {
    background: #e5e7eb;
    color: #6b7280;
  }
  .p-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-button .p-button-label {
    transition-duration: 0.2s;
  }
  .p-button .p-button-icon-left {
    margin-right: 0.5rem;
  }
  .p-button .p-button-icon-right {
    margin-left: 0.5rem;
  }
  .p-button .p-button-icon-bottom {
    margin-top: 0.5rem;
  }
  .p-button .p-button-icon-top {
    margin-bottom: 0.5rem;
  }
  .p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #06b6d4;
    background-color: #ffffff;
  }
  .p-button.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-button.p-button-rounded {
    border-radius: 2rem;
  }
  .p-button.p-button-icon-only {
    width: 3rem;
    padding: 0.75rem 0;
  }
  .p-button.p-button-icon-only .p-button-icon-left,
  .p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
  }
  .p-button.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 3rem;
  }
  .p-button.p-button-sm {
    font-size: 0.875rem;
    padding: 0.65625rem 1.09375rem;
  }
  .p-button.p-button-sm .p-button-icon {
    font-size: 0.875rem;
  }
  .p-button.p-button-lg {
    font-size: 1.25rem;
    padding: 0.9375rem 1.5625rem;
  }
  .p-button.p-button-lg .p-button-icon {
    font-size: 1.25rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-left .p-button-label {
    margin-left: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-right .p-button-label {
    margin-right: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-top .p-button-label {
    margin-top: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-bottom .p-button-label {
    margin-bottom: 0.5rem;
  }
  .p-button.p-button-loading-label-only .p-button-loading-icon {
    margin: 0;
  }
  .p-fluid .p-button {
    width: 100%;
  }
  .p-fluid .p-button-icon-only {
    width: 3rem;
  }
  .p-fluid .p-button-group {
    display: flex;
  }
  .p-fluid .p-button-group .p-button {
    flex: 1;
  }
  .p-button.p-button-secondary, .p-button-group.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button, .p-fileupload-choose.p-button-secondary {
    color: #ffffff;
    background: #64748b;
    border: 1px solid #64748b;
  }
  .p-button.p-button-secondary:not(:disabled):hover, .p-button-group.p-button-secondary > .p-button:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-secondary:not(:disabled):hover {
    background: #475569;
    color: #ffffff;
    border-color: #475569;
  }
  .p-button.p-button-secondary:not(:disabled):focus, .p-button-group.p-button-secondary > .p-button:not(:disabled):focus, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-secondary:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #e2e8f0;
  }
  .p-button.p-button-secondary:not(:disabled):active, .p-button-group.p-button-secondary > .p-button:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-secondary:not(:disabled):active {
    background: #334155;
    color: #ffffff;
    border-color: #334155;
  }
  .p-button.p-button-secondary.p-button-outlined, .p-button-group.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined, .p-fileupload-choose.p-button-secondary.p-button-outlined {
    background-color: transparent;
    color: #64748b;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(:disabled):hover {
    background: rgba(100, 116, 139, 0.04);
    color: #64748b;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:not(:disabled):active, .p-button-group.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(:disabled):active {
    background: rgba(100, 116, 139, 0.16);
    color: #64748b;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-text, .p-button-group.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text, .p-fileupload-choose.p-button-secondary.p-button-text {
    background-color: transparent;
    color: #64748b;
    border-color: transparent;
  }
  .p-button.p-button-secondary.p-button-text:not(:disabled):hover, .p-button-group.p-button-secondary > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-text:not(:disabled):hover {
    background: rgba(100, 116, 139, 0.04);
    border-color: transparent;
    color: #64748b;
  }
  .p-button.p-button-secondary.p-button-text:not(:disabled):active, .p-button-group.p-button-secondary > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-secondary.p-button-text:not(:disabled):active {
    background: rgba(100, 116, 139, 0.16);
    border-color: transparent;
    color: #64748b;
  }
  .p-button.p-button-info, .p-button-group.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button, .p-fileupload-choose.p-button-info {
    color: #ffffff;
    background: #0ea5e9;
    border: 1px solid #0ea5e9;
  }
  .p-button.p-button-info:not(:disabled):hover, .p-button-group.p-button-info > .p-button:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-info:not(:disabled):hover {
    background: #0284c7;
    color: #ffffff;
    border-color: #0284c7;
  }
  .p-button.p-button-info:not(:disabled):focus, .p-button-group.p-button-info > .p-button:not(:disabled):focus, .p-splitbutton.p-button-info > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-info:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #bfdbfe;
  }
  .p-button.p-button-info:not(:disabled):active, .p-button-group.p-button-info > .p-button:not(:disabled):active, .p-splitbutton.p-button-info > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-info:not(:disabled):active {
    background: #0369a1;
    color: #ffffff;
    border-color: #0369a1;
  }
  .p-button.p-button-info.p-button-outlined, .p-button-group.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined, .p-fileupload-choose.p-button-info.p-button-outlined {
    background-color: transparent;
    color: #0ea5e9;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-info > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-info.p-button-outlined:not(:disabled):hover {
    background: rgba(14, 165, 233, 0.04);
    color: #0ea5e9;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-outlined:not(:disabled):active, .p-button-group.p-button-info > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-info.p-button-outlined:not(:disabled):active {
    background: rgba(14, 165, 233, 0.16);
    color: #0ea5e9;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-text, .p-button-group.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text, .p-fileupload-choose.p-button-info.p-button-text {
    background-color: transparent;
    color: #0ea5e9;
    border-color: transparent;
  }
  .p-button.p-button-info.p-button-text:not(:disabled):hover, .p-button-group.p-button-info > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-info.p-button-text:not(:disabled):hover {
    background: rgba(14, 165, 233, 0.04);
    border-color: transparent;
    color: #0ea5e9;
  }
  .p-button.p-button-info.p-button-text:not(:disabled):active, .p-button-group.p-button-info > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-info.p-button-text:not(:disabled):active {
    background: rgba(14, 165, 233, 0.16);
    border-color: transparent;
    color: #0ea5e9;
  }
  .p-button.p-button-success, .p-button-group.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button, .p-fileupload-choose.p-button-success {
    color: #ffffff;
    background: #22c55e;
    border: 1px solid #22c55e;
  }
  .p-button.p-button-success:not(:disabled):hover, .p-button-group.p-button-success > .p-button:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-success:not(:disabled):hover {
    background: #16a34a;
    color: #ffffff;
    border-color: #16a34a;
  }
  .p-button.p-button-success:not(:disabled):focus, .p-button-group.p-button-success > .p-button:not(:disabled):focus, .p-splitbutton.p-button-success > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-success:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #bbf7d0;
  }
  .p-button.p-button-success:not(:disabled):active, .p-button-group.p-button-success > .p-button:not(:disabled):active, .p-splitbutton.p-button-success > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-success:not(:disabled):active {
    background: #15803d;
    color: #ffffff;
    border-color: #15803d;
  }
  .p-button.p-button-success.p-button-outlined, .p-button-group.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined, .p-fileupload-choose.p-button-success.p-button-outlined {
    background-color: transparent;
    color: #22c55e;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-success > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-success.p-button-outlined:not(:disabled):hover {
    background: rgba(34, 197, 94, 0.04);
    color: #22c55e;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-outlined:not(:disabled):active, .p-button-group.p-button-success > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-success.p-button-outlined:not(:disabled):active {
    background: rgba(34, 197, 94, 0.16);
    color: #22c55e;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-text, .p-button-group.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text, .p-fileupload-choose.p-button-success.p-button-text {
    background-color: transparent;
    color: #22c55e;
    border-color: transparent;
  }
  .p-button.p-button-success.p-button-text:not(:disabled):hover, .p-button-group.p-button-success > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-success.p-button-text:not(:disabled):hover {
    background: rgba(34, 197, 94, 0.04);
    border-color: transparent;
    color: #22c55e;
  }
  .p-button.p-button-success.p-button-text:not(:disabled):active, .p-button-group.p-button-success > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-success.p-button-text:not(:disabled):active {
    background: rgba(34, 197, 94, 0.16);
    border-color: transparent;
    color: #22c55e;
  }
  .p-button.p-button-warning, .p-button-group.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button, .p-fileupload-choose.p-button-warning {
    color: #ffffff;
    background: #f97316;
    border: 1px solid #f97316;
  }
  .p-button.p-button-warning:not(:disabled):hover, .p-button-group.p-button-warning > .p-button:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-warning:not(:disabled):hover {
    background: #ea580c;
    color: #ffffff;
    border-color: #ea580c;
  }
  .p-button.p-button-warning:not(:disabled):focus, .p-button-group.p-button-warning > .p-button:not(:disabled):focus, .p-splitbutton.p-button-warning > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-warning:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #fde68a;
  }
  .p-button.p-button-warning:not(:disabled):active, .p-button-group.p-button-warning > .p-button:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-warning:not(:disabled):active {
    background: #c2410c;
    color: #ffffff;
    border-color: #c2410c;
  }
  .p-button.p-button-warning.p-button-outlined, .p-button-group.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined, .p-fileupload-choose.p-button-warning.p-button-outlined {
    background-color: transparent;
    color: #f97316;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-warning.p-button-outlined:not(:disabled):hover {
    background: rgba(249, 115, 22, 0.04);
    color: #f97316;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-outlined:not(:disabled):active, .p-button-group.p-button-warning > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-warning.p-button-outlined:not(:disabled):active {
    background: rgba(249, 115, 22, 0.16);
    color: #f97316;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-text, .p-button-group.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text, .p-fileupload-choose.p-button-warning.p-button-text {
    background-color: transparent;
    color: #f97316;
    border-color: transparent;
  }
  .p-button.p-button-warning.p-button-text:not(:disabled):hover, .p-button-group.p-button-warning > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-warning.p-button-text:not(:disabled):hover {
    background: rgba(249, 115, 22, 0.04);
    border-color: transparent;
    color: #f97316;
  }
  .p-button.p-button-warning.p-button-text:not(:disabled):active, .p-button-group.p-button-warning > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-warning.p-button-text:not(:disabled):active {
    background: rgba(249, 115, 22, 0.16);
    border-color: transparent;
    color: #f97316;
  }
  .p-button.p-button-help, .p-button-group.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button, .p-fileupload-choose.p-button-help {
    color: #ffffff;
    background: #a855f7;
    border: 1px solid #a855f7;
  }
  .p-button.p-button-help:not(:disabled):hover, .p-button-group.p-button-help > .p-button:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-help:not(:disabled):hover {
    background: #9333ea;
    color: #ffffff;
    border-color: #9333ea;
  }
  .p-button.p-button-help:not(:disabled):focus, .p-button-group.p-button-help > .p-button:not(:disabled):focus, .p-splitbutton.p-button-help > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-help:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #e9d5ff;
  }
  .p-button.p-button-help:not(:disabled):active, .p-button-group.p-button-help > .p-button:not(:disabled):active, .p-splitbutton.p-button-help > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-help:not(:disabled):active {
    background: #7e22ce;
    color: #ffffff;
    border-color: #7e22ce;
  }
  .p-button.p-button-help.p-button-outlined, .p-button-group.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined, .p-fileupload-choose.p-button-help.p-button-outlined {
    background-color: transparent;
    color: #a855f7;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-help > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-help.p-button-outlined:not(:disabled):hover {
    background: rgba(168, 85, 247, 0.04);
    color: #a855f7;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-outlined:not(:disabled):active, .p-button-group.p-button-help > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-help.p-button-outlined:not(:disabled):active {
    background: rgba(168, 85, 247, 0.16);
    color: #a855f7;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-text, .p-button-group.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text, .p-fileupload-choose.p-button-help.p-button-text {
    background-color: transparent;
    color: #a855f7;
    border-color: transparent;
  }
  .p-button.p-button-help.p-button-text:not(:disabled):hover, .p-button-group.p-button-help > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-help.p-button-text:not(:disabled):hover {
    background: rgba(168, 85, 247, 0.04);
    border-color: transparent;
    color: #a855f7;
  }
  .p-button.p-button-help.p-button-text:not(:disabled):active, .p-button-group.p-button-help > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-help.p-button-text:not(:disabled):active {
    background: rgba(168, 85, 247, 0.16);
    border-color: transparent;
    color: #a855f7;
  }
  .p-button.p-button-danger, .p-button-group.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button, .p-fileupload-choose.p-button-danger {
    color: #ffffff;
    background: #ef4444;
    border: 1px solid #ef4444;
  }
  .p-button.p-button-danger:not(:disabled):hover, .p-button-group.p-button-danger > .p-button:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-danger:not(:disabled):hover {
    background: #dc2626;
    color: #ffffff;
    border-color: #dc2626;
  }
  .p-button.p-button-danger:not(:disabled):focus, .p-button-group.p-button-danger > .p-button:not(:disabled):focus, .p-splitbutton.p-button-danger > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-danger:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #fecaca;
  }
  .p-button.p-button-danger:not(:disabled):active, .p-button-group.p-button-danger > .p-button:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-danger:not(:disabled):active {
    background: #b91c1c;
    color: #ffffff;
    border-color: #b91c1c;
  }
  .p-button.p-button-danger.p-button-outlined, .p-button-group.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined, .p-fileupload-choose.p-button-danger.p-button-outlined {
    background-color: transparent;
    color: #ef4444;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-danger.p-button-outlined:not(:disabled):hover {
    background: rgba(239, 68, 68, 0.04);
    color: #ef4444;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-outlined:not(:disabled):active, .p-button-group.p-button-danger > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-danger.p-button-outlined:not(:disabled):active {
    background: rgba(239, 68, 68, 0.16);
    color: #ef4444;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-text, .p-button-group.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text, .p-fileupload-choose.p-button-danger.p-button-text {
    background-color: transparent;
    color: #ef4444;
    border-color: transparent;
  }
  .p-button.p-button-danger.p-button-text:not(:disabled):hover, .p-button-group.p-button-danger > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-danger.p-button-text:not(:disabled):hover {
    background: rgba(239, 68, 68, 0.04);
    border-color: transparent;
    color: #ef4444;
  }
  .p-button.p-button-danger.p-button-text:not(:disabled):active, .p-button-group.p-button-danger > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-danger.p-button-text:not(:disabled):active {
    background: rgba(239, 68, 68, 0.16);
    border-color: transparent;
    color: #ef4444;
  }
  .p-button.p-button-contrast, .p-button-group.p-button-contrast > .p-button, .p-splitbutton.p-button-contrast > .p-button {
    color: #ffffff;
    background: #1f2937;
    border: 1px solid #1f2937;
  }
  .p-button.p-button-contrast:not(:disabled):hover, .p-button-group.p-button-contrast > .p-button:not(:disabled):hover, .p-splitbutton.p-button-contrast > .p-button:not(:disabled):hover {
    background: #374151;
    color: #ffffff;
    border-color: #374151;
  }
  .p-button.p-button-contrast:not(:disabled):focus, .p-button-group.p-button-contrast > .p-button:not(:disabled):focus, .p-splitbutton.p-button-contrast > .p-button:not(:disabled):focus {
    box-shadow: none;
  }
  .p-button.p-button-contrast:not(:disabled):active, .p-button-group.p-button-contrast > .p-button:not(:disabled):active, .p-splitbutton.p-button-contrast > .p-button:not(:disabled):active {
    background: #4b5563;
    color: #ffffff;
    border-color: #4b5563;
  }
  .p-button.p-button-contrast.p-button-outlined, .p-button-group.p-button-contrast > .p-button.p-button-outlined, .p-splitbutton.p-button-contrast > .p-button.p-button-outlined {
    background-color: transparent;
    color: #1f2937;
    border: 1px solid;
  }
  .p-button.p-button-contrast.p-button-outlined:not(:disabled):hover, .p-button-group.p-button-contrast > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-contrast > .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(31, 41, 55, 0.04);
    color: #1f2937;
    border: 1px solid;
  }
  .p-button.p-button-contrast.p-button-outlined:not(:disabled):active, .p-button-group.p-button-contrast > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-contrast > .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(31, 41, 55, 0.16);
    color: #1f2937;
    border: 1px solid;
  }
  .p-button.p-button-contrast.p-button-text, .p-button-group.p-button-contrast > .p-button.p-button-text, .p-splitbutton.p-button-contrast > .p-button.p-button-text {
    background-color: transparent;
    color: #1f2937;
    border-color: transparent;
  }
  .p-button.p-button-contrast.p-button-text:not(:disabled):hover, .p-button-group.p-button-contrast > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-contrast > .p-button.p-button-text:not(:disabled):hover {
    background: rgba(31, 41, 55, 0.04);
    border-color: transparent;
    color: #1f2937;
  }
  .p-button.p-button-contrast.p-button-text:not(:disabled):active, .p-button-group.p-button-contrast > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-contrast > .p-button.p-button-text:not(:disabled):active {
    background: rgba(31, 41, 55, 0.16);
    border-color: transparent;
    color: #1f2937;
  }
  .p-button.p-button-link {
    color: #0e7490;
    background: transparent;
    border: transparent;
  }
  .p-button.p-button-link:not(:disabled):hover {
    background: transparent;
    color: #0e7490;
    border-color: transparent;
  }
  .p-button.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
  }
  .p-button.p-button-link:not(:disabled):focus {
    background: transparent;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
    border-color: transparent;
  }
  .p-button.p-button-link:not(:disabled):active {
    background: transparent;
    color: #0e7490;
    border-color: transparent;
  }
  .p-splitbutton {
    border-radius: 6px;
  }
  .p-splitbutton.p-button-outlined > .p-button {
    background-color: transparent;
    color: #06b6d4;
    border: 1px solid;
  }
  .p-splitbutton.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(6, 182, 212, 0.04);
    color: #06b6d4;
  }
  .p-splitbutton.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(6, 182, 212, 0.16);
    color: #06b6d4;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
    color: #6b7280;
    border-color: #6b7280;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(:disabled):hover {
    background: #f3f4f6;
    color: #6b7280;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(:disabled):active {
    background: #e5e7eb;
    color: #6b7280;
  }
  .p-splitbutton.p-button-text > .p-button {
    background-color: transparent;
    color: #06b6d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(6, 182, 212, 0.04);
    color: #06b6d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:not(:disabled):active {
    background: rgba(6, 182, 212, 0.16);
    color: #06b6d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button {
    color: #6b7280;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:not(:disabled):hover {
    background: #f3f4f6;
    color: #6b7280;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:not(:disabled):active {
    background: #e5e7eb;
    color: #6b7280;
  }
  .p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-splitbutton.p-button-rounded {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-rounded > .p-button {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-sm > .p-button {
    font-size: 0.875rem;
    padding: 0.65625rem 1.09375rem;
  }
  .p-splitbutton.p-button-sm > .p-button .p-button-icon {
    font-size: 0.875rem;
  }
  .p-splitbutton.p-button-lg > .p-button {
    font-size: 1.25rem;
    padding: 0.9375rem 1.5625rem;
  }
  .p-splitbutton.p-button-lg > .p-button.p-button-icon-only {
    width: auto;
  }
  .p-splitbutton.p-button-lg > .p-button .p-button-icon {
    font-size: 1.25rem;
  }
  .p-splitbutton .p-splitbutton-menubutton,
  .p-splitbutton .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
  .p-splitbutton .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button {
    background-color: transparent;
    color: #64748b;
    border: 1px solid;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(100, 116, 139, 0.04);
    color: #64748b;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(100, 116, 139, 0.16);
    color: #64748b;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button {
    background-color: transparent;
    color: #64748b;
    border-color: transparent;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(100, 116, 139, 0.04);
    border-color: transparent;
    color: #64748b;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(:disabled):active {
    background: rgba(100, 116, 139, 0.16);
    border-color: transparent;
    color: #64748b;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button {
    background-color: transparent;
    color: #0ea5e9;
    border: 1px solid;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(14, 165, 233, 0.04);
    color: #0ea5e9;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(14, 165, 233, 0.16);
    color: #0ea5e9;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button {
    background-color: transparent;
    color: #0ea5e9;
    border-color: transparent;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(14, 165, 233, 0.04);
    border-color: transparent;
    color: #0ea5e9;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:not(:disabled):active {
    background: rgba(14, 165, 233, 0.16);
    border-color: transparent;
    color: #0ea5e9;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button {
    background-color: transparent;
    color: #22c55e;
    border: 1px solid;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(34, 197, 94, 0.04);
    color: #22c55e;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(34, 197, 94, 0.16);
    color: #22c55e;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button {
    background-color: transparent;
    color: #22c55e;
    border-color: transparent;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(34, 197, 94, 0.04);
    border-color: transparent;
    color: #22c55e;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:not(:disabled):active {
    background: rgba(34, 197, 94, 0.16);
    border-color: transparent;
    color: #22c55e;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
    background-color: transparent;
    color: #f97316;
    border: 1px solid;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(249, 115, 22, 0.04);
    color: #f97316;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(249, 115, 22, 0.16);
    color: #f97316;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button {
    background-color: transparent;
    color: #f97316;
    border-color: transparent;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(249, 115, 22, 0.04);
    border-color: transparent;
    color: #f97316;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:not(:disabled):active {
    background: rgba(249, 115, 22, 0.16);
    border-color: transparent;
    color: #f97316;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button {
    background-color: transparent;
    color: #a855f7;
    border: 1px solid;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(168, 85, 247, 0.04);
    color: #a855f7;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(168, 85, 247, 0.16);
    color: #a855f7;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button {
    background-color: transparent;
    color: #a855f7;
    border-color: transparent;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(168, 85, 247, 0.04);
    border-color: transparent;
    color: #a855f7;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:not(:disabled):active {
    background: rgba(168, 85, 247, 0.16);
    border-color: transparent;
    color: #a855f7;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
    background-color: transparent;
    color: #ef4444;
    border: 1px solid;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(239, 68, 68, 0.04);
    color: #ef4444;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(239, 68, 68, 0.16);
    color: #ef4444;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button {
    background-color: transparent;
    color: #ef4444;
    border-color: transparent;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(239, 68, 68, 0.04);
    border-color: transparent;
    color: #ef4444;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:not(:disabled):active {
    background: rgba(239, 68, 68, 0.16);
    border-color: transparent;
    color: #ef4444;
  }
  .p-speeddial-button.p-button.p-button-icon-only {
    width: 4rem;
    height: 4rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: 1.3rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon.p-icon {
    width: 1.3rem;
    height: 1.3rem;
  }
  .p-speeddial-list {
    outline: 0 none;
  }
  .p-speeddial-action {
    width: 3rem;
    height: 3rem;
    background: #4b5563;
    color: #fff;
  }
  .p-speeddial-action:hover {
    background: #022354;
    color: #fff;
  }
  .p-speeddial-direction-up .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: 0.5rem;
  }
  .p-speeddial-direction-down .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: 0.5rem;
  }
  .p-speeddial-direction-left .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: 0.5rem;
  }
  .p-speeddial-direction-right .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: 0.5rem;
  }
  .p-speeddial-circle .p-speeddial-item,
  .p-speeddial-semi-circle .p-speeddial-item,
  .p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0;
  }
  .p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,
  .p-speeddial-semi-circle .p-speeddial-item:first-child,
  .p-speeddial-semi-circle .p-speeddial-item:last-child,
  .p-speeddial-quarter-circle .p-speeddial-item:first-child,
  .p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0;
  }
  .p-speeddial-mask {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
  }
  .p-carousel .p-carousel-content .p-carousel-prev,
  .p-carousel .p-carousel-content .p-carousel-next {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin: 0.5rem;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
  .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:focus-visible,
  .p-carousel .p-carousel-content .p-carousel-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-carousel .p-carousel-indicators {
    padding: 1rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: #d1d5db;
    width: 2rem;
    height: 0.5rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 0;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: #9ca3af;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-datatable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-datatable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-datatable .p-datatable-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
  }
  .p-datatable .p-datatable-footer {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
  }
  .p-datatable .p-datatable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
    transition: box-shadow 0.2s;
  }
  .p-datatable .p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
  }
  .p-datatable .p-sortable-column .p-sortable-column-icon {
    color: #374151;
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #0e7490;
    background: #ecfeff;
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
    background: #f3f4f6;
    color: #374151;
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: #374151;
  }
  .p-datatable .p-sortable-column.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #0e7490;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: #0e7490;
  }
  .p-datatable .p-sortable-column:focus-visible {
    box-shadow: inset 0 0 0 0.15rem #a5f3fc;
    outline: 0 none;
  }
  .p-datatable .p-datatable-tbody > tr {
    background: #ffffff;
    color: #4b5563;
    transition: box-shadow 0.2s;
  }
  .p-datatable .p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus-visible,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus-visible,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus-visible,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
    margin-right: 0.5rem;
  }
  .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    font-weight: 700;
  }
  .p-datatable .p-datatable-tbody > tr > td.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 0.15rem solid #a5f3fc;
    outline-offset: -0.15rem;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 #ecfeff;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 #ecfeff;
  }
  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:focus-visible {
    outline: 0.15rem solid #a5f3fc;
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:focus-visible {
    outline: 0.15rem solid #a5f3fc;
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-datatable .p-column-resizer-helper {
    background: #06b6d4;
  }
  .p-datatable .p-datatable-scrollable-header,
  .p-datatable .p-datatable-scrollable-footer {
    background: #f9fafb;
  }
  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot, .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead,
  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background-color: #f9fafb;
  }
  .p-datatable .p-datatable-loading-icon {
    font-size: 2rem;
  }
  .p-datatable .p-datatable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: #f8f8fa;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: #0e7490;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: #0e7490;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd + .p-row-expanded {
    background: #f8f8fa;
  }
  .p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable-drag-selection-helper {
    background: rgba(6, 182, 212, 0.16);
  }
  .p-dataview .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-dataview .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-dataview .p-dataview-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
  }
  .p-dataview .p-dataview-content {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    padding: 0;
  }
  .p-dataview .p-dataview-footer {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-dataview .p-dataview-loading-icon {
    font-size: 2rem;
  }
  .p-dataview .p-dataview-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-datascroller .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-datascroller .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-datascroller .p-datascroller-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
  }
  .p-datascroller .p-datascroller-content {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    padding: 0;
  }
  .p-datascroller.p-datascroller-inline .p-datascroller-list > li {
    border: solid #e5e7eb;
    border-width: 0 0 1px 0;
  }
  .p-datascroller .p-datascroller-footer {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-column-filter-row .p-column-filter-menu-button,
  .p-column-filter-row .p-column-filter-clear-button {
    margin-left: 0.5rem;
  }
  .p-column-filter-menu-button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-column-filter-menu-button:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: #f3f4f6;
    color: #374151;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-column-filter-menu-button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-column-filter-clear-button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-column-filter-clear-button:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-column-filter-clear-button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-column-filter-overlay {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
  }
  .p-column-filter-overlay .p-column-filter-row-items {
    padding: 0.75rem 0;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {
    margin: 0;
    padding: 0.75rem 1.25rem;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #a5f3fc;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-column-filter-overlay-menu .p-column-filter-operator {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint {
    padding: 1.25rem;
    border-bottom: 1px solid #e5e7eb;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {
    margin-bottom: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {
    margin-top: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
    border-bottom: 0 none;
  }
  .p-column-filter-overlay-menu .p-column-filter-add-rule {
    padding: 0.75rem 1.25rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-buttonbar {
    padding: 1.25rem;
  }
  .p-orderlist .p-orderlist-controls {
    padding: 1.25rem;
  }
  .p-orderlist .p-orderlist-controls .p-button {
    margin-bottom: 0.5rem;
  }
  .p-orderlist .p-orderlist-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
    font-weight: 700;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-orderlist .p-orderlist-filter-container {
    padding: 1.25rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-bottom: 0 none;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-input {
    padding-right: 1.75rem;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-orderlist .p-orderlist-list {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 0.75rem 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: 0 none;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item {
    padding: 0.75rem 1.25rem;
    margin: 0;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item.p-focus {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight.p-focus {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
    background: #f8f8fa;
  }
  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
    background: #f3f4f6;
  }
  .p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
    color: #6df7ff;
  }
  .p-organizationchart .p-organizationchart-line-down {
    background: #e5e7eb;
  }
  .p-organizationchart .p-organizationchart-line-left {
    border-right: 1px solid #e5e7eb;
    border-color: #e5e7eb;
  }
  .p-organizationchart .p-organizationchart-line-top {
    border-top: 1px solid #e5e7eb;
    border-color: #e5e7eb;
  }
  .p-organizationchart .p-organizationchart-node-content {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 1.25rem;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    background: inherit;
    color: inherit;
    border-radius: 50%;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-paginator {
    background: #ffffff;
    color: #6b7280;
    border: solid #f3f4f6;
    border-width: 0;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }
  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    background-color: transparent;
    border: 0 none;
    color: #6b7280;
    min-width: 3rem;
    height: 3rem;
    margin: 0.143rem;
    transition: box-shadow 0.2s;
    border-radius: 50%;
  }
  .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: #f3f4f6;
    border-color: transparent;
    color: #374151;
  }
  .p-paginator .p-paginator-first {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  .p-paginator .p-paginator-last {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .p-paginator .p-dropdown {
    margin-left: 0.5rem;
    height: 3rem;
  }
  .p-paginator .p-dropdown .p-dropdown-label {
    padding-right: 0;
  }
  .p-paginator .p-paginator-page-input {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .p-paginator .p-paginator-page-input .p-inputtext {
    max-width: 3rem;
  }
  .p-paginator .p-paginator-current {
    background-color: transparent;
    border: 0 none;
    color: #6b7280;
    min-width: 3rem;
    height: 3rem;
    margin: 0.143rem;
    padding: 0 0.5rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page {
    background-color: transparent;
    border: 0 none;
    color: #6b7280;
    min-width: 3rem;
    height: 3rem;
    margin: 0.143rem;
    transition: box-shadow 0.2s;
    border-radius: 50%;
  }
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #ecfeff;
    border-color: #ecfeff;
    color: #0e7490;
  }
  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: #f3f4f6;
    border-color: transparent;
    color: #374151;
  }
  .p-picklist .p-picklist-buttons {
    padding: 1.25rem;
  }
  .p-picklist .p-picklist-buttons .p-button {
    margin-bottom: 0.5rem;
  }
  .p-picklist .p-picklist-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
    font-weight: 700;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-picklist .p-picklist-filter-container {
    padding: 1.25rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-bottom: 0 none;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-input {
    padding-right: 1.75rem;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-picklist .p-picklist-list {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 0.75rem 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: 0 none;
  }
  .p-picklist .p-picklist-list .p-picklist-item {
    padding: 0.75rem 1.25rem;
    margin: 0;
    border: 0 none;
    color: #4b5563;
    background: transparent;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-picklist .p-picklist-list .p-picklist-item.p-focus {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-picklist .p-picklist-list .p-picklist-item.p-highlight.p-focus {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-tree-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
  }
  .p-treenode-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .p-treenode-selectable {
    cursor: pointer;
    user-select: none;
  }
  .p-tree-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
  }
  .p-treenode-leaf > .p-treenode-content .p-tree-toggler {
    visibility: hidden;
  }
  .p-treenode-content {
    display: flex;
    align-items: center;
  }
  .p-tree-filter {
    width: 100%;
  }
  .p-tree-filter-container {
    position: relative;
    display: block;
    width: 100%;
  }
  .p-tree-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
  .p-tree-loading {
    position: relative;
    min-height: 4rem;
  }
  .p-tree .p-tree-loading-overlay {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p-tree {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    padding: 1.25rem;
    border-radius: 6px;
  }
  .p-tree .p-tree-container .p-treenode {
    padding: 0.143rem;
    outline: 0 none;
  }
  .p-tree .p-tree-container .p-treenode:focus > .p-treenode-content {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #a5f3fc;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content {
    border-radius: 6px;
    transition: box-shadow 0.2s;
    padding: 0.5rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
    margin-right: 0.5rem;
    color: #6b7280;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: #4b5563;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
    color: #0e7490;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
    color: #0e7490;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-dragover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-tree .p-tree-filter-container {
    margin-bottom: 0.5rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter-icon {
    right: 0.75rem;
    color: #6b7280;
  }
  .p-tree .p-treenode-children {
    padding: 0 0 0 1rem;
  }
  .p-tree .p-tree-loading-icon {
    font-size: 2rem;
  }
  .p-tree .p-tree-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-tree .p-treenode-droppoint {
    height: 0.5rem;
  }
  .p-tree .p-treenode-droppoint.p-treenode-droppoint-active {
    background: #8af9ff;
  }
  .p-treetable {
    position: relative;
  }
  .p-treetable > .p-treetable-wrapper {
    overflow: auto;
  }
  .p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }
  .p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
  }
  .p-treetable-selectable .p-treetable-tbody > tr {
    cursor: pointer;
  }
  .p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
  }
  .p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
  }
  .p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
  }
  /* Resizable */
  .p-treetable-resizable > .p-treetable-wrapper {
    overflow-x: auto;
  }
  .p-treetable-resizable .p-treetable-thead > tr > th,
  .p-treetable-resizable .p-treetable-tfoot > tr > td,
  .p-treetable-resizable .p-treetable-tbody > tr > td {
    overflow: hidden;
  }
  .p-treetable-resizable .p-resizable-column {
    background-clip: padding-box;
    position: relative;
  }
  .p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
  }
  .p-treetable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
  }
  .p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
  }
  /* Scrollable */
  .p-treetable-scrollable-wrapper {
    position: relative;
  }
  .p-treetable-scrollable-header,
  .p-treetable-scrollable-footer {
    overflow: hidden;
    border: 0 none;
  }
  .p-treetable-scrollable-body {
    overflow: auto;
    position: relative;
  }
  .p-treetable-virtual-table {
    position: absolute;
  }
  /* Frozen Columns */
  .p-treetable-frozen-view .p-treetable-scrollable-body {
    overflow: hidden;
  }
  .p-treetable-unfrozen-view {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  /* Reorder */
  .p-treetable-reorder-indicator-up,
  .p-treetable-reorder-indicator-down {
    position: absolute;
    display: none;
  }
  /* Loader */
  .p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  /* Alignment */
  .p-treetable .p-treetable-thead > tr > th.p-align-left > .p-column-header-content,
  .p-treetable .p-treetable-tbody > tr > td.p-align-left,
  .p-treetable .p-treetable-tfoot > tr > td.p-align-left {
    text-align: left;
    justify-content: flex-start;
  }
  .p-treetable .p-treetable-thead > tr > th.p-align-right > .p-column-header-content,
  .p-treetable .p-treetable-tbody > tr > td.p-align-right,
  .p-treetable .p-treetable-tfoot > tr > td.p-align-right {
    text-align: right;
    justify-content: flex-end;
  }
  .p-treetable .p-treetable-thead > tr > th.p-align-center > .p-column-header-content,
  .p-treetable .p-treetable-tbody > tr > td.p-align-center,
  .p-treetable .p-treetable-tfoot > tr > td.p-align-center {
    text-align: center;
    justify-content: center;
  }
  .p-treetable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-treetable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
  .p-treetable .p-treetable-header {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
  }
  .p-treetable .p-treetable-footer {
    background: #f9fafb;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 700;
  }
  .p-treetable .p-treetable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
    transition: box-shadow 0.2s;
  }
  .p-treetable .p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    font-weight: 700;
    color: #374151;
    background: #f9fafb;
  }
  .p-treetable .p-sortable-column {
    outline-color: #a5f3fc;
  }
  .p-treetable .p-sortable-column .p-sortable-column-icon {
    color: #374151;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #0e7490;
    background: #ecfeff;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #374151;
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: #374151;
  }
  .p-treetable .p-sortable-column.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #0e7490;
  }
  .p-treetable .p-treetable-tbody > tr {
    background: #ffffff;
    color: #4b5563;
    transition: box-shadow 0.2s;
  }
  .p-treetable .p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid #e5e7eb;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: #4b5563;
  }
  .p-treetable .p-treetable-tbody > tr:focus-visible {
    outline: 0.15rem solid #a5f3fc;
    outline-offset: -0.15rem;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: #0e7490;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    color: #0e7490;
  }
  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: #4b5563;
  }
  .p-treetable .p-column-resizer-helper {
    background: #06b6d4;
  }
  .p-treetable .p-treetable-scrollable-header,
  .p-treetable .p-treetable-scrollable-footer {
    background: #f9fafb;
  }
  .p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
  }
  .p-treetable .p-treetable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd {
    background: #f8f8fa;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: #0e7490;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: #0e7490;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd + .p-row-expanded {
    background: #f8f8fa;
  }
  .p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.875rem 0.875rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 1.25rem 1.25rem;
  }
  .p-timeline .p-timeline-event-marker {
    border: 2px solid #06b6d4;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: #ffffff;
  }
  .p-timeline .p-timeline-event-connector {
    background-color: #e5e7eb;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-opposite,
  .p-timeline.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
  .p-timeline.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-connector {
    height: 2px;
  }
  .p-accordion .p-accordion-header .p-accordion-header-link {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    color: #6b7280;
    background: #f9fafb;
    font-weight: 700;
    border-radius: 6px;
    transition: box-shadow 0.2s;
  }
  .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: 0.5rem;
  }
  .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #374151;
  }
  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #374151;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: #e5e7eb;
    background: #f3f4f6;
    color: #374151;
  }
  .p-accordion .p-accordion-content {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-accordion .p-accordion-tab {
    margin-bottom: 4px;
  }
  .p-card {
    background: #ffffff;
    color: #4b5563;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
  }
  .p-card .p-card-body {
    padding: 1.25rem;
  }
  .p-card .p-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .p-card .p-card-subtitle {
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #6b7280;
  }
  .p-card .p-card-content {
    padding: 1.25rem 0;
  }
  .p-card .p-card-footer {
    padding: 1.25rem 0 0 0;
  }
  .p-fieldset {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-radius: 6px;
  }
  .p-fieldset .p-fieldset-legend {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    color: #374151;
    background: #f9fafb;
    font-weight: 700;
    border-radius: 6px;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
    padding: 1.25rem;
    color: #374151;
    border-radius: 6px;
    transition: box-shadow 0.2s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: 0.5rem;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #374151;
  }
  .p-fieldset .p-fieldset-content {
    padding: 1.25rem;
  }
  .p-divider .p-divider-content {
    background-color: #ffffff;
  }
  .p-divider.p-divider-horizontal {
    margin: 1.25rem 0;
    padding: 0 1.25rem;
  }
  .p-divider.p-divider-horizontal:before {
    border-top: 1px #e5e7eb;
  }
  .p-divider.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
  }
  .p-divider.p-divider-vertical {
    margin: 0 1.25rem;
    padding: 1.25rem 0;
  }
  .p-divider.p-divider-vertical:before {
    border-left: 1px #e5e7eb;
  }
  .p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
  }
  .p-panel .p-panel-header {
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
    background: #f9fafb;
    color: #374151;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-panel .p-panel-header .p-panel-title {
    font-weight: 700;
  }
  .p-panel .p-panel-header .p-panel-header-icon {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-panel .p-panel-header .p-panel-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.25rem;
  }
  .p-panel .p-panel-content {
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top: 0 none;
  }
  .p-panel .p-panel-footer {
    padding: 0.75rem 1.25rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-top: 0 none;
  }
  .p-splitter {
    border: 1px solid #e5e7eb;
    background: #ffffff;
    border-radius: 6px;
    color: #4b5563;
  }
  .p-splitter .p-splitter-gutter {
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    background: #f9fafb;
  }
  .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
    background: #e5e7eb;
  }
  .p-splitter .p-splitter-gutter .p-splitter-gutter-handle:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-splitter .p-splitter-gutter-resizing {
    background: #e5e7eb;
  }
  .p-stepper .p-stepper-nav {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .p-stepper .p-stepper-header {
    padding: 0.5rem;
  }
  .p-stepper .p-stepper-header .p-stepper-action {
    transition: box-shadow 0.2s;
    border-radius: 6px;
    background: #ffffff;
    outline-color: transparent;
  }
  .p-stepper .p-stepper-header .p-stepper-action .p-stepper-number {
    color: #4b5563;
    border: 1px solid #f3f4f6;
    border-width: 2px;
    background: #ffffff;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-stepper .p-stepper-header .p-stepper-action .p-stepper-title {
    margin-left: 0.5rem;
    color: #6b7280;
    font-weight: 700;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-stepper .p-stepper-header .p-stepper-action:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-stepper .p-stepper-header.p-highlight .p-stepper-number {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-stepper .p-stepper-header.p-highlight .p-stepper-title {
    color: #4b5563;
  }
  .p-stepper .p-stepper-header:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-stepper .p-stepper-header:has(~ .p-highlight) .p-stepper-separator {
    background-color: #06b6d4;
  }
  .p-stepper .p-stepper-panels {
    background: #ffffff;
    padding: 1.25rem;
    color: #4b5563;
  }
  .p-stepper .p-stepper-separator {
    background-color: #e5e7eb;
    width: 100%;
    height: 2px;
    margin-inline-start: 1rem;
    transition: box-shadow 0.2s;
  }
  .p-stepper.p-stepper-vertical {
    display: flex;
    flex-direction: column;
  }
  .p-stepper.p-stepper-vertical .p-stepper-toggleable-content {
    display: flex;
    flex: 1 1 auto;
    background: #ffffff;
    color: #4b5563;
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel {
    display: flex;
    flex-direction: column;
    flex: initial;
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel.p-stepper-panel-active {
    flex: 1 1 auto;
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel .p-stepper-header {
    flex: initial;
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel .p-stepper-content {
    width: 100%;
    padding-left: 1rem;
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel .p-stepper-separator {
    flex: 0 0 auto;
    width: 2px;
    height: auto;
    margin-inline-start: calc(1.75rem + 2px);
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel:has(~ .p-stepper-panel-active) .p-stepper-separator {
    background-color: #06b6d4;
  }
  .p-stepper.p-stepper-vertical .p-stepper-panel:last-of-type .p-stepper-content {
    padding-left: 3rem;
  }
  .p-scrollpanel .p-scrollpanel-bar {
    background: #f9fafb;
    border: 0 none;
  }
  .p-scrollpanel .p-scrollpanel-bar:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-tabview-nav-container {
    position: relative;
  }
  .p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
  }
  .p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
    position: relative;
  }
  .p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
  }
  .p-tabview-nav-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
  }
  .p-tabview-ink-bar {
    display: none;
    z-index: 1;
  }
  .p-tabview-nav-link:focus {
    z-index: 1;
  }
  .p-tabview-close {
    z-index: 1;
  }
  .p-tabview-title {
    line-height: 1;
    white-space: nowrap;
  }
  .p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p-tabview-nav-prev {
    left: 0;
  }
  .p-tabview-nav-next {
    right: 0;
  }
  .p-tabview-nav-content::-webkit-scrollbar {
    display: none;
  }
  .p-tabview .p-tabview-nav {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-width: 0 0 2px 0;
  }
  .p-tabview .p-tabview-nav li {
    margin-right: 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: solid #e5e7eb;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #e5e7eb transparent;
    background: #ffffff;
    color: #6b7280;
    padding: 1.25rem;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.2s;
    margin: 0 0 -2px 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #a5f3fc;
  }
  .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: #ffffff;
    border-color: #9ca3af;
    color: #6b7280;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #06b6d4;
    color: #06b6d4;
  }
  .p-tabview .p-tabview-close {
    margin-left: 0.5rem;
  }
  .p-tabview .p-tabview-nav-btn.p-link {
    background: #ffffff;
    color: #06b6d4;
    width: 3rem;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0;
  }
  .p-tabview .p-tabview-nav-btn.p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #a5f3fc;
  }
  .p-tabview .p-tabview-panels {
    background: #ffffff;
    padding: 1.25rem;
    border: 0 none;
    color: #4b5563;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-toolbar {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
    border-radius: 6px;
    gap: 0.5rem;
  }
  .p-toolbar .p-toolbar-separator {
    margin: 0 0.5rem;
  }
  .p-confirm-popup {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  .p-confirm-popup .p-confirm-popup-content {
    padding: 1.25rem;
  }
  .p-confirm-popup .p-confirm-popup-footer {
    text-align: right;
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
  .p-confirm-popup .p-confirm-popup-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-confirm-popup .p-confirm-popup-footer button:last-child {
    margin: 0;
  }
  .p-confirm-popup:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-confirm-popup:before {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #f2f2f2;
  }
  .p-confirm-popup.p-confirm-popup-flipped:after {
    border-top-color: #ffffff;
  }
  .p-confirm-popup.p-confirm-popup-flipped:before {
    border-top-color: #ffffff;
  }
  .p-confirm-popup .p-confirm-popup-icon {
    font-size: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-message {
    margin-left: 1rem;
  }
  .p-dialog {
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: 0 none;
  }
  .p-dialog .p-dialog-header {
    border-bottom: 0 none;
    background: #ffffff;
    color: #374151;
    padding: 1.5rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 700;
    font-size: 1.25rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin-right: 0.5rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
  }
  .p-dialog .p-dialog-content {
    background: #ffffff;
    color: #4b5563;
    padding: 0 1.5rem 2rem 1.5rem;
  }
  .p-dialog .p-dialog-content:last-of-type {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-dialog .p-dialog-footer {
    border-top: 0 none;
    background: #ffffff;
    color: #4b5563;
    padding: 0 1.5rem 1.5rem 1.5rem;
    text-align: right;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-dialog .p-dialog-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-dialog.p-dialog-maximized .p-dialog-header, .p-dialog.p-dialog-maximized .p-dialog-content:last-of-type {
    border-radius: 0;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
    font-size: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-message {
    margin-left: 1rem;
  }
  .p-overlaypanel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  .p-overlaypanel .p-overlaypanel-content {
    padding: 1.25rem;
  }
  .p-overlaypanel .p-overlaypanel-close {
    background: #06b6d4;
    color: #ffffff;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  .p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: #0891b2;
    color: #ffffff;
  }
  .p-overlaypanel:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-overlaypanel:before {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #f2f2f2;
  }
  .p-overlaypanel.p-overlaypanel-flipped:after {
    border-top-color: #ffffff;
  }
  .p-overlaypanel.p-overlaypanel-flipped:before {
    border-top-color: #ffffff;
  }
  .p-sidebar {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  .p-sidebar .p-sidebar-header {
    padding: 1.25rem;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close,
  .p-sidebar .p-sidebar-header .p-sidebar-icon {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
  .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: #374151;
    border-color: transparent;
    background: #f3f4f6;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible,
  .p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-sidebar .p-sidebar-header + .p-sidebar-content {
    padding-top: 0;
  }
  .p-sidebar .p-sidebar-content {
    padding: 1.25rem;
  }
  .p-tooltip .p-tooltip-text {
    background: #4b5563;
    color: #ffffff;
    padding: 0.75rem 0.75rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .p-tooltip.p-tooltip-right .p-tooltip-arrow {
    border-right-color: #4b5563;
  }
  .p-tooltip.p-tooltip-left .p-tooltip-arrow {
    border-left-color: #4b5563;
  }
  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: #4b5563;
  }
  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: #4b5563;
  }
  .p-fileupload .p-fileupload-buttonbar {
    background: #f9fafb;
    padding: 1.25rem;
    border: 1px solid #e5e7eb;
    color: #374151;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    gap: 0.5rem;
  }
  .p-fileupload .p-fileupload-buttonbar .p-button {
    margin-right: 0.5rem;
  }
  .p-fileupload .p-fileupload-content {
    background: #ffffff;
    padding: 2rem 1rem;
    border: 1px solid #e5e7eb;
    color: #4b5563;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-fileupload .p-progressbar {
    height: 0.25rem;
  }
  .p-fileupload .p-fileupload-row > div {
    padding: 1rem 1rem;
  }
  .p-fileupload.p-fileupload-advanced .p-message {
    margin-top: 0;
  }
  .p-breadcrumb {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 1rem;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
  }
  .p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: #4b5563;
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: #4b5563;
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: #6b7280;
  }
  .p-contextmenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-contextmenu .p-contextmenu-root-list {
    outline: 0 none;
  }
  .p-contextmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .p-contextmenu .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-contextmenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-contextmenu .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-contextmenu .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-contextmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-dock .p-dock-list-container {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
  }
  .p-dock .p-dock-list-container .p-dock-list {
    outline: 0 none;
  }
  .p-dock .p-dock-item {
    padding: 0.5rem;
    border-radius: 6px;
  }
  .p-dock .p-dock-item.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #a5f3fc;
  }
  .p-dock .p-dock-action {
    width: 4rem;
    height: 4rem;
  }
  .p-dock.p-dock-top .p-dock-item-second-prev,
  .p-dock.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-bottom .p-dock-item-second-prev,
  .p-dock.p-dock-bottom .p-dock-item-second-next {
    margin: 0 0.9rem;
  }
  .p-dock.p-dock-top .p-dock-item-prev,
  .p-dock.p-dock-top .p-dock-item-next, .p-dock.p-dock-bottom .p-dock-item-prev,
  .p-dock.p-dock-bottom .p-dock-item-next {
    margin: 0 1.3rem;
  }
  .p-dock.p-dock-top .p-dock-item-current, .p-dock.p-dock-bottom .p-dock-item-current {
    margin: 0 1.5rem;
  }
  .p-dock.p-dock-left .p-dock-item-second-prev,
  .p-dock.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-right .p-dock-item-second-prev,
  .p-dock.p-dock-right .p-dock-item-second-next {
    margin: 0.9rem 0;
  }
  .p-dock.p-dock-left .p-dock-item-prev,
  .p-dock.p-dock-left .p-dock-item-next, .p-dock.p-dock-right .p-dock-item-prev,
  .p-dock.p-dock-right .p-dock-item-next {
    margin: 1.3rem 0;
  }
  .p-dock.p-dock-left .p-dock-item-current, .p-dock.p-dock-right .p-dock-item-current {
    margin: 1.5rem 0;
  }
  .p-dock.p-dock-mobile.p-dock-top .p-dock-list-container, .p-dock.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
  }
  .p-dock.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list, .p-dock.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
  }
  .p-dock.p-dock-mobile.p-dock-left .p-dock-list-container, .p-dock.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
  }
  .p-dock.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list, .p-dock.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
  }
  .p-dock.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
  }
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-top .p-dock-item-second-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-top .p-dock-item-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-top .p-dock-item-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-mobile.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-bottom .p-dock-item-second-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-bottom .p-dock-item-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-bottom .p-dock-item-current, .p-dock.p-dock-mobile.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-left .p-dock-item-second-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-left .p-dock-item-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-left .p-dock-item-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-mobile.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-right .p-dock-item-second-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-right .p-dock-item-prev,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-right .p-dock-item-next,
  .p-dock.p-dock-mobile.p-dock-magnification.p-dock-right .p-dock-item-current {
    transform: none;
    margin: 0;
  }
  .p-megamenu {
    padding: 0.5rem;
    background: #f9fafb;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
  }
  .p-megamenu .p-megamenu-root-list {
    outline: 0 none;
  }
  .p-megamenu .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-megamenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-megamenu .p-megamenu-panel {
    background: #ffffff;
    color: #4b5563;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-megamenu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-megamenu .p-submenu-list {
    padding: 0.5rem 0;
    width: 12.5rem;
  }
  .p-megamenu .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-megamenu.p-megamenu-vertical {
    width: 12.5rem;
    padding: 0.5rem 0;
  }
  .p-megamenu .p-megamenu-button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-megamenu .p-megamenu-button:hover {
    color: #6b7280;
    background: #f3f4f6;
  }
  .p-megamenu .p-megamenu-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
    margin-left: 0.5rem;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menu-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-180deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-menu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-menu .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-menu .p-menuitem.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-menu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-menu.p-menu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-menu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1.25rem;
    color: #374151;
    background: #ffffff;
    font-weight: 700;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .p-menu .p-menu-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-menubar {
    padding: 0.5rem;
    background: #f9fafb;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
  }
  .p-menubar .p-menubar-root-list {
    outline: 0 none;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 6px;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
    margin-left: 0.5rem;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-menubar .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-menubar .p-menuitem.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-menubar .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-menubar .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 12.5rem;
  }
  .p-menubar .p-submenu-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-menubar .p-submenu-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-menubar.p-menubar-mobile .p-menubar-button {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-menubar.p-menubar-mobile .p-menubar-button:hover {
    color: #6b7280;
    background: #f3f4f6;
  }
  .p-menubar.p-menubar-mobile .p-menubar-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem.p-menuitem-active > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-180deg);
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-90deg);
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list ul li a {
    padding-left: 2.25rem;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list ul li ul li a {
    padding-left: 3.75rem;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list ul li ul li ul li a {
    padding-left: 5.25rem;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list ul li ul li ul li ul li a {
    padding-left: 6.75rem;
  }
  .p-menubar.p-menubar-mobile .p-menubar-root-list ul li ul li ul li ul li ul li a {
    padding-left: 8.25rem;
  }
  @media screen and (max-width: 960px) {
    .p-menubar {
      position: relative;
    }
    .p-menubar .p-menubar-button {
      display: flex;
      width: 2rem;
      height: 2rem;
      color: #6b7280;
      border-radius: 50%;
      transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    }
    .p-menubar .p-menubar-button:hover {
      color: #6b7280;
      background: #f3f4f6;
    }
    .p-menubar .p-menubar-button:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem #a5f3fc;
    }
    .p-menubar .p-menubar-root-list {
      position: absolute;
      display: none;
      padding: 0.5rem 0;
      background: #ffffff;
      border: 0 none;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      width: 100%;
    }
    .p-menubar .p-menubar-root-list .p-menu-separator {
      border-top: 1px solid #e5e7eb;
      margin: 0.25rem 0;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon {
      font-size: 0.875rem;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon.p-icon {
      width: 0.875rem;
      height: 0.875rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content {
      color: #4b5563;
      transition: box-shadow 0.2s;
      border-radius: 0;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link {
      color: #4b5563;
      padding: 0.75rem 1.25rem;
      user-select: none;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
      color: #4b5563;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
      color: #6b7280;
      margin-right: 0.5rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
      color: #6b7280;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content {
      color: #0e7490;
      background: #ecfeff;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
      color: #0e7490;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
      color: #0e7490;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link.p-highlight.p-focus > .p-menuitem-content {
      background: rgba(6, 182, 212, 0.24);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
      color: #4b5563;
      background: #e5e7eb;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
      color: #4b5563;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
      color: #4b5563;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
      color: #4b5563;
      background: #f3f4f6;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
      color: #4b5563;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
      color: #6b7280;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
      margin-left: auto;
      transition: transform 0.2s;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
      transform: rotate(-180deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list {
      width: 100%;
      position: static;
      box-shadow: none;
      border: 0 none;
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {
      transition: transform 0.2s;
      transform: rotate(90deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
      transform: rotate(-90deg);
    }
    .p-menubar .p-menubar-root-list .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list ul li a {
      padding-left: 2.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li a {
      padding-left: 3.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li a {
      padding-left: 5.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {
      padding-left: 6.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {
      padding-left: 8.25rem;
    }
    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
      display: flex;
      flex-direction: column;
      top: 100%;
      left: 0;
      z-index: 1;
    }
  }
  .p-panelmenu .p-panelmenu-header {
    outline: 0 none;
  }
  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
    border: 1px solid #e5e7eb;
    color: #6b7280;
    background: #f9fafb;
    border-radius: 6px;
    transition: box-shadow 0.2s;
  }
  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-link {
    color: #6b7280;
    padding: 1.25rem;
    font-weight: 700;
  }
  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-link .p-submenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-link .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #a5f3fc;
  }
  .p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover .p-panelmenu-header-content {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #374151;
  }
  .p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight .p-panelmenu-header-content {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #374151;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight:hover .p-panelmenu-header-content {
    border-color: #e5e7eb;
    background: #f3f4f6;
    color: #374151;
  }
  .p-panelmenu .p-panelmenu-content {
    padding: 0.5rem 0;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #4b5563;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-panelmenu .p-panelmenu-content .p-panelmenu-root-list {
    outline: 0 none;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-list) {
    padding: 0 0 0 1rem;
  }
  .p-panelmenu .p-panelmenu-panel {
    margin-bottom: 4px;
  }
  .p-slidemenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-slidemenu .p-menuitem-link > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-slidemenu .p-menuitem-link > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-slidemenu .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-slidemenu .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-slidemenu .p-menuitem-link > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-slidemenu .p-menuitem-link.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-slidemenu .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-slidemenu .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-slidemenu .p-menuitem-link.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-slidemenu .p-menuitem-link.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-slidemenu .p-menuitem-link:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-slidemenu.p-slidemenu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-slidemenu .p-slidemenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link {
    background: #ecfeff;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-text {
    color: #0e7490;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon, .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon {
    color: #0e7490;
  }
  .p-slidemenu .p-slidemenu-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-slidemenu .p-slidemenu-icon {
    font-size: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-backward {
    padding: 0.75rem 1.25rem;
    color: #4b5563;
  }
  .p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
    transition: box-shadow 0.2s;
    border-radius: 6px;
    background: #ffffff;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: #4b5563;
    border: 1px solid #f3f4f6;
    background: #ffffff;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 50%;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: 0.5rem;
    color: #6b7280;
  }
  .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: 700;
    color: #4b5563;
  }
  .p-steps .p-steps-item:before {
    content: " ";
    border-top: 1px solid #e5e7eb;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
  }
  .p-tabmenu .p-tabmenu-nav {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-width: 0 0 2px 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: solid #e5e7eb;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #e5e7eb transparent;
    background: #ffffff;
    color: #6b7280;
    padding: 1.25rem;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.2s;
    margin: 0 0 -2px 0;
    height: calc(100% + 2px);
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #a5f3fc;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    background: #ffffff;
    border-color: #9ca3af;
    color: #6b7280;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: #ffffff;
    border-color: #06b6d4;
    color: #06b6d4;
  }
  .p-tieredmenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-tieredmenu.p-tieredmenu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-tieredmenu .p-tieredmenu-root-list {
    outline: 0 none;
  }
  .p-tieredmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .p-tieredmenu .p-menuitem > .p-menuitem-content {
    color: #4b5563;
    transition: box-shadow 0.2s;
    border-radius: 0;
  }
  .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
    color: #4b5563;
    padding: 0.75rem 1.25rem;
    user-select: none;
  }
  .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
    color: #6b7280;
    margin-right: 0.5rem;
  }
  .p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content {
    color: #0e7490;
    background: #ecfeff;
  }
  .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #0e7490;
  }
  .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #0e7490;
  }
  .p-tieredmenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
    background: rgba(6, 182, 212, 0.24);
  }
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    color: #4b5563;
    background: #e5e7eb;
  }
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon,
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    color: #4b5563;
  }
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
    color: #4b5563;
    background: #f3f4f6;
  }
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
    color: #4b5563;
  }
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon,
  .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
    color: #6b7280;
  }
  .p-tieredmenu .p-menuitem-separator {
    border-top: 1px solid #e5e7eb;
    margin: 0.25rem 0;
  }
  .p-tieredmenu .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-tieredmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-inline-message {
    padding: 0.75rem 0.75rem;
    margin: 0;
    border-radius: 6px;
  }
  .p-inline-message.p-inline-message-info {
    background: rgba(219, 234, 254, 0.7);
    border: solid #3b82f6;
    border-width: 0px;
    color: #3b82f6;
  }
  .p-inline-message.p-inline-message-info .p-inline-message-icon {
    color: #3b82f6;
  }
  .p-inline-message.p-inline-message-success {
    background: rgba(228, 248, 240, 0.7);
    border: solid #1ea97c;
    border-width: 0px;
    color: #1ea97c;
  }
  .p-inline-message.p-inline-message-success .p-inline-message-icon {
    color: #1ea97c;
  }
  .p-inline-message.p-inline-message-warn {
    background: rgba(255, 242, 226, 0.7);
    border: solid #cc8925;
    border-width: 0px;
    color: #cc8925;
  }
  .p-inline-message.p-inline-message-warn .p-inline-message-icon {
    color: #cc8925;
  }
  .p-inline-message.p-inline-message-error {
    background: rgba(255, 231, 230, 0.7);
    border: solid #ff5757;
    border-width: 0px;
    color: #ff5757;
  }
  .p-inline-message.p-inline-message-error .p-inline-message-icon {
    color: #ff5757;
  }
  .p-inline-message .p-inline-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .p-inline-message .p-inline-message-icon.p-icon {
    width: 1rem;
    height: 1rem;
  }
  .p-inline-message .p-inline-message-text {
    font-size: 1rem;
  }
  .p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
  }
  .p-message {
    margin: 1rem 0;
    border-radius: 6px;
  }
  .p-message .p-message-wrapper {
    padding: 1.25rem 1.75rem;
  }
  .p-message .p-message-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-message .p-message-close:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .p-message .p-message-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-message.p-message-info {
    background: rgba(219, 234, 254, 0.7);
    border: solid #3b82f6;
    border-width: 0 0 0 6px;
    color: #3b82f6;
  }
  .p-message.p-message-info .p-message-icon {
    color: #3b82f6;
  }
  .p-message.p-message-info .p-message-close {
    color: #3b82f6;
  }
  .p-message.p-message-success {
    background: rgba(228, 248, 240, 0.7);
    border: solid #1ea97c;
    border-width: 0 0 0 6px;
    color: #1ea97c;
  }
  .p-message.p-message-success .p-message-icon {
    color: #1ea97c;
  }
  .p-message.p-message-success .p-message-close {
    color: #1ea97c;
  }
  .p-message.p-message-warn {
    background: rgba(255, 242, 226, 0.7);
    border: solid #cc8925;
    border-width: 0 0 0 6px;
    color: #cc8925;
  }
  .p-message.p-message-warn .p-message-icon {
    color: #cc8925;
  }
  .p-message.p-message-warn .p-message-close {
    color: #cc8925;
  }
  .p-message.p-message-error {
    background: rgba(255, 231, 230, 0.7);
    border: solid #ff5757;
    border-width: 0 0 0 6px;
    color: #ff5757;
  }
  .p-message.p-message-error .p-message-icon {
    color: #ff5757;
  }
  .p-message.p-message-error .p-message-close {
    color: #ff5757;
  }
  .p-message .p-message-text {
    font-size: 1rem;
    font-weight: 500;
  }
  .p-message .p-message-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .p-message .p-message-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-message .p-message-summary {
    font-weight: 700;
  }
  .p-message .p-message-detail {
    margin-left: 0.5rem;
  }
  .p-toast {
    opacity: 1;
  }
  .p-toast .p-toast-message {
    margin: 0 0 1rem 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .p-toast .p-toast-message .p-toast-message-content {
    padding: 1rem;
    border-width: 0 0 0 6px;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: 0 0 0 1rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: 700;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: 0.5rem 0 0 0;
  }
  .p-toast .p-toast-message .p-toast-icon-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-toast .p-toast-message .p-toast-icon-close:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .p-toast .p-toast-message .p-toast-icon-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-toast .p-toast-message.p-toast-message-info {
    background: rgba(219, 234, 254, 0.7);
    border: solid #3b82f6;
    border-width: 0 0 0 6px;
    color: #3b82f6;
  }
  .p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: #3b82f6;
  }
  .p-toast .p-toast-message.p-toast-message-success {
    background: rgba(228, 248, 240, 0.7);
    border: solid #1ea97c;
    border-width: 0 0 0 6px;
    color: #1ea97c;
  }
  .p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: #1ea97c;
  }
  .p-toast .p-toast-message.p-toast-message-warn {
    background: rgba(255, 242, 226, 0.7);
    border: solid #cc8925;
    border-width: 0 0 0 6px;
    color: #cc8925;
  }
  .p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: #cc8925;
  }
  .p-toast .p-toast-message.p-toast-message-error {
    background: rgba(255, 231, 230, 0.7);
    border: solid #ff5757;
    border-width: 0 0 0 6px;
    color: #ff5757;
  }
  .p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: #ff5757;
  }
  .p-galleria .p-galleria-close {
    margin: 0.5rem;
    background: transparent;
    color: #f9fafb;
    width: 4rem;
    height: 4rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f9fafb;
  }
  .p-galleria .p-galleria-item-nav {
    background: transparent;
    color: #f9fafb;
    width: 4rem;
    height: 4rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    margin: 0 0.5rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
  .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon.p-icon,
  .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f9fafb;
  }
  .p-galleria .p-galleria-caption {
    background: rgba(0, 0, 0, 0.5);
    color: #f9fafb;
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators {
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: #d1d5db;
    width: 1rem;
    height: 1rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: #9ca3af;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: 0.5rem;
  }
  .p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: 0.5rem;
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: rgba(0, 0, 0, 0.5);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
    background: rgba(255, 255, 255, 0.4);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #ecfeff;
    color: #0e7490;
  }
  .p-galleria .p-galleria-thumbnail-container {
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem 0.25rem;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: 0.5rem;
    background-color: transparent;
    color: #f9fafb;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    border-radius: 50%;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f9fafb;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content {
    transition: box-shadow 0.2s;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-galleria-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }
  .p-image-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }
  .p-image-preview-indicator {
    background-color: transparent;
    color: #f8f9fa;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-image-preview-indicator .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .p-image-toolbar {
    padding: 1rem;
  }
  .p-image-action.p-link {
    color: #f8f9fa;
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin-right: 0.5rem;
  }
  .p-image-action.p-link:last-child {
    margin-right: 0;
  }
  .p-image-action.p-link:hover {
    color: #f8f9fa;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .p-image-action.p-link span {
    font-size: 1.5rem;
  }
  .p-image-action.p-link .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-avatar {
    background-color: #e5e7eb;
    border-radius: 6px;
  }
  .p-avatar.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }
  .p-avatar.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
  }
  .p-avatar-circle {
    border-radius: 50%;
  }
  .p-avatar-group .p-avatar {
    border: 2px solid #ffffff;
  }
  .p-chip {
    background-color: #e5e7eb;
    color: #4b5563;
    border-radius: 16px;
    padding: 0 0.75rem;
  }
  .p-chip .p-chip-text {
    line-height: 1.5;
    margin-top: 0.375rem;
    margin-bottom: 0.375rem;
  }
  .p-chip .p-chip-icon {
    margin-right: 0.5rem;
  }
  .p-chip img {
    width: 2.25rem;
    height: 2.25rem;
    margin-left: -0.75rem;
    margin-right: 0.5rem;
  }
  .p-chip .p-chip-remove-icon {
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    margin-left: 0.5rem;
  }
  .p-chip .p-chip-remove-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-chip .p-chip-remove-icon:focus {
    outline: 0 none;
  }
  .p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-scrolltop.p-link {
    background: rgba(0, 0, 0, 0.7);
  }
  .p-scrolltop.p-link:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .p-scrolltop .p-scrolltop-icon {
    font-size: 1.5rem;
    color: #f9fafb;
  }
  .p-scrolltop .p-scrolltop-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-skeleton {
    background-color: #e5e7eb;
    border-radius: 6px;
  }
  .p-skeleton:after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  }
  .p-tag {
    background: #06b6d4;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
  }
  .p-tag.p-tag-success {
    background-color: #22c55e;
    color: #ffffff;
  }
  .p-tag.p-tag-info {
    background-color: #0ea5e9;
    color: #ffffff;
  }
  .p-tag.p-tag-warning {
    background-color: #f97316;
    color: #ffffff;
  }
  .p-tag.p-tag-danger {
    background-color: #ef4444;
    color: #ffffff;
  }
  .p-tag .p-tag-icon {
    margin-right: 0.25rem;
    font-size: 0.75rem;
  }
  .p-tag .p-tag-icon.p-icon {
    width: 0.75rem;
    height: 0.75rem;
  }
  .p-inplace .p-inplace-display {
    padding: 0.75rem 0.75rem;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-inplace .p-inplace-display:not(.p-disabled):hover {
    background: #f3f4f6;
    color: #4b5563;
  }
  .p-inplace .p-inplace-display:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #a5f3fc;
  }
  .p-metergroup .p-metergroup-meter-container {
    background: #e5e7eb;
    border-radius: 6px;
  }
  .p-metergroup .p-metergroup-meter {
    border: 0 none;
    background: #06b6d4;
  }
  .p-metergroup .p-metergroup-label-list .p-metergroup-label-list-item {
    line-height: 1.5rem;
  }
  .p-metergroup .p-metergroup-label-list .p-metergroup-label-type {
    background: #06b6d4;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    margin-right: 0.5rem;
  }
  .p-metergroup .p-metergroup-label-list .p-metergroup-label {
    margin-right: 1rem;
  }
  .p-metergroup .p-metergroup-label-list .p-metergroup-label-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  .p-metergroup.p-metergroup-horizontal .p-metergroup-meter-container {
    height: 0.5rem;
  }
  .p-metergroup.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-metergroup.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-metergroup.p-metergroup-horizontal .p-metergroup-label-list-start {
    margin-bottom: 1rem;
  }
  .p-metergroup.p-metergroup-horizontal .p-metergroup-label-list-end {
    margin-top: 1rem;
  }
  .p-metergroup.p-metergroup-vertical .p-metergroup-meter-container {
    width: 0.5rem;
    height: 100%;
  }
  .p-metergroup.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .p-metergroup.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-metergroup.p-metergroup-vertical .p-metergroup-label-list:not(.p-metergroup-label-list-start) {
    margin-left: 1rem;
  }
  .p-progressbar {
    border: 0 none;
    height: 1.5rem;
    background: #e5e7eb;
    border-radius: 6px;
  }
  .p-progressbar .p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: #06b6d4;
  }
  .p-progressbar .p-progressbar-label {
    color: #ffffff;
    line-height: 1.5rem;
  }
  .p-terminal {
    background: #ffffff;
    color: #4b5563;
    border: 1px solid #e5e7eb;
    padding: 1.25rem;
  }
  .p-terminal .p-terminal-input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
  }
  .p-badge {
    background: #06b6d4;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .p-badge.p-badge-secondary {
    background-color: #64748b;
    color: #ffffff;
  }
  .p-badge.p-badge-success {
    background-color: #22c55e;
    color: #ffffff;
  }
  .p-badge.p-badge-info {
    background-color: #0ea5e9;
    color: #ffffff;
  }
  .p-badge.p-badge-warning {
    background-color: #f97316;
    color: #ffffff;
  }
  .p-badge.p-badge-danger {
    background-color: #ef4444;
    color: #ffffff;
  }
  .p-badge.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
  }
  .p-badge.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  .p-tag {
    background: #06b6d4;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
  }
  .p-tag.p-tag-success {
    background-color: #22c55e;
    color: #ffffff;
  }
  .p-tag.p-tag-info {
    background-color: #0ea5e9;
    color: #ffffff;
  }
  .p-tag.p-tag-warning {
    background-color: #f97316;
    color: #ffffff;
  }
  .p-tag.p-tag-danger {
    background-color: #ef4444;
    color: #ffffff;
  }
}
@layer primereact {
  .p-button-label {
    font-weight: 700;
  }
  .p-selectbutton > .p-button,
  .p-togglebutton.p-button {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-accordion .p-accordion-header .p-accordion-header-link {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: #06b6d4;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: #06b6d4;
  }
  .p-button:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #71e7fb, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-button.p-button-secondary:enabled:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #b0b9c6, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-button.p-button-success:enabled:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #88eaac, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-button.p-button-info:enabled:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #83d3f8, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-button.p-button-warning:enabled:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #fcb98b, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-button.p-button-help:enabled:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #d4aafb, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-button.p-button-danger:enabled:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #f7a2a2, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 #06b6d4;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 #06b6d4;
  }
  .p-speeddial-item.p-focus > .p-speeddial-action {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #71e7fb, 0 1px 2px 0 rgb(0, 0, 0);
  }
  .p-toast-message {
    backdrop-filter: blur(10px);
  }
  .p-inline-message-text {
    font-weight: 500;
  }
  .p-picklist-buttons .p-button,
  .p-orderlist-controls .p-button {
    transition: opacity 0.2s, background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #06b6d4;
    color: #ffffff;
  }
  .p-stepper .p-stepper-header.p-highlight .p-stepper-number {
    background: #06b6d4;
    color: #ffffff;
  }
}
`;document.head.appendChild(c3);var Oi=Q(xt(),1),MJ=new Vy;function p3(){return(0,Oi.jsx)(Oi.Fragment,{children:(0,Oi.jsx)(Xy,{client:MJ,children:(0,Oi.jsx)(v6,{children:(0,Oi.jsx)(i3,{children:(0,Oi.jsx)(uT,{children:(0,Oi.jsx)(OS,{})})})})})})}var f3="root";var m3=Q(xt(),1),DJ=d3.default.createRoot(document.getElementById(f3));DJ.render((0,m3.jsx)(p3,{}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=app.js.map
