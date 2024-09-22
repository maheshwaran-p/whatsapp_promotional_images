"use strict";(()=>{var mz=Object.create;var xb=Object.defineProperty;var hz=Object.getOwnPropertyDescriptor;var gz=Object.getOwnPropertyNames;var bz=Object.getPrototypeOf,vz=Object.prototype.hasOwnProperty;var me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wb=(e,t)=>{for(var n in t)xb(e,n,{get:t[n],enumerable:!0})},yz=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of gz(t))!vz.call(e,o)&&o!==n&&xb(e,o,{get:()=>t[o],enumerable:!(r=hz(t,o))||r.enumerable});return e};var K=(e,t,n)=>(n=e!=null?mz(bz(e)):{},yz(t||!e||!e.__esModule?xb(n,"default",{value:e,enumerable:!0}):n,e));var D_=me(Ie=>{"use strict";var yu=Symbol.for("react.element"),xz=Symbol.for("react.portal"),wz=Symbol.for("react.fragment"),kz=Symbol.for("react.strict_mode"),Sz=Symbol.for("react.profiler"),_z=Symbol.for("react.provider"),Cz=Symbol.for("react.context"),Ez=Symbol.for("react.forward_ref"),Rz=Symbol.for("react.suspense"),Tz=Symbol.for("react.memo"),Iz=Symbol.for("react.lazy"),__=Symbol.iterator;function Az(e){return e===null||typeof e!="object"?null:(e=__&&e[__]||e["@@iterator"],typeof e=="function"?e:null)}var R_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T_=Object.assign,I_={};function Sl(e,t,n){this.props=e,this.context=t,this.refs=I_,this.updater=n||R_}Sl.prototype.isReactComponent={};Sl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function A_(){}A_.prototype=Sl.prototype;function Sb(e,t,n){this.props=e,this.context=t,this.refs=I_,this.updater=n||R_}var _b=Sb.prototype=new A_;_b.constructor=Sb;T_(_b,Sl.prototype);_b.isPureReactComponent=!0;var C_=Array.isArray,O_=Object.prototype.hasOwnProperty,Cb={current:null},L_={key:!0,ref:!0,__self:!0,__source:!0};function P_(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)O_.call(t,r)&&!L_.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:yu,type:e,key:i,ref:l,props:o,_owner:Cb.current}}function Oz(e,t){return{$$typeof:yu,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eb(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu}function Lz(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var E_=/\/+/g;function kb(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lz(""+e.key):t.toString(36)}function Vd(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yu:case xz:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+kb(l,0):r,C_(o)?(n="",e!=null&&(n=e.replace(E_,"$&/")+"/"),Vd(o,t,n,"",function(p){return p})):o!=null&&(Eb(o)&&(o=Oz(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(E_,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",C_(e))for(var u=0;u<e.length;u++){i=e[u];var c=r+kb(i,u);l+=Vd(i,t,n,c,o)}else if(c=Az(e),typeof c=="function")for(e=c.call(e),u=0;!(i=e.next()).done;)i=i.value,c=r+kb(i,u++),l+=Vd(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jd(e,t,n){if(e==null)return e;var r=[],o=0;return Vd(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Pz(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Rn={current:null},Kd={transition:null},Mz={ReactCurrentDispatcher:Rn,ReactCurrentBatchConfig:Kd,ReactCurrentOwner:Cb};function M_(){throw Error("act(...) is not supported in production builds of React.")}Ie.Children={map:jd,forEach:function(e,t,n){jd(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jd(e,function(){t++}),t},toArray:function(e){return jd(e,function(t){return t})||[]},only:function(e){if(!Eb(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ie.Component=Sl;Ie.Fragment=wz;Ie.Profiler=Sz;Ie.PureComponent=Sb;Ie.StrictMode=kz;Ie.Suspense=Rz;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mz;Ie.act=M_;Ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=T_({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Cb.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)O_.call(t,c)&&!L_.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var p=0;p<c;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:yu,type:e.type,key:o,ref:i,props:r,_owner:l}};Ie.createContext=function(e){return e={$$typeof:Cz,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_z,_context:e},e.Consumer=e};Ie.createElement=P_;Ie.createFactory=function(e){var t=P_.bind(null,e);return t.type=e,t};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(e){return{$$typeof:Ez,render:e}};Ie.isValidElement=Eb;Ie.lazy=function(e){return{$$typeof:Iz,_payload:{_status:-1,_result:e},_init:Pz}};Ie.memo=function(e,t){return{$$typeof:Tz,type:e,compare:t===void 0?null:t}};Ie.startTransition=function(e){var t=Kd.transition;Kd.transition={};try{e()}finally{Kd.transition=t}};Ie.unstable_act=M_;Ie.useCallback=function(e,t){return Rn.current.useCallback(e,t)};Ie.useContext=function(e){return Rn.current.useContext(e)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(e){return Rn.current.useDeferredValue(e)};Ie.useEffect=function(e,t){return Rn.current.useEffect(e,t)};Ie.useId=function(){return Rn.current.useId()};Ie.useImperativeHandle=function(e,t,n){return Rn.current.useImperativeHandle(e,t,n)};Ie.useInsertionEffect=function(e,t){return Rn.current.useInsertionEffect(e,t)};Ie.useLayoutEffect=function(e,t){return Rn.current.useLayoutEffect(e,t)};Ie.useMemo=function(e,t){return Rn.current.useMemo(e,t)};Ie.useReducer=function(e,t,n){return Rn.current.useReducer(e,t,n)};Ie.useRef=function(e){return Rn.current.useRef(e)};Ie.useState=function(e){return Rn.current.useState(e)};Ie.useSyncExternalStore=function(e,t,n){return Rn.current.useSyncExternalStore(e,t,n)};Ie.useTransition=function(){return Rn.current.useTransition()};Ie.version="18.3.1"});var Ce=me((FY,N_)=>{"use strict";N_.exports=D_()});var K_=me(Je=>{"use strict";function Ab(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Gd(o,t))e[r]=t,e[n]=o,n=r;else break e}}function jr(e){return e.length===0?null:e[0]}function $d(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,u=e[l],c=l+1,p=e[c];if(0>Gd(u,n))c<o&&0>Gd(p,u)?(e[r]=p,e[c]=n,r=c):(e[r]=u,e[l]=n,r=l);else if(c<o&&0>Gd(p,n))e[r]=p,e[c]=n,r=c;else break e}}return t}function Gd(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(z_=performance,Je.unstable_now=function(){return z_.now()}):(Rb=Date,F_=Rb.now(),Je.unstable_now=function(){return Rb.now()-F_});var z_,Rb,F_,so=[],vi=[],Dz=1,Sr=null,sn=3,Yd=!1,ya=!1,wu=!1,H_=typeof setTimeout=="function"?setTimeout:null,W_=typeof clearTimeout=="function"?clearTimeout:null,B_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ob(e){for(var t=jr(vi);t!==null;){if(t.callback===null)$d(vi);else if(t.startTime<=e)$d(vi),t.sortIndex=t.expirationTime,Ab(so,t);else break;t=jr(vi)}}function Lb(e){if(wu=!1,Ob(e),!ya)if(jr(so)!==null)ya=!0,Mb(Pb);else{var t=jr(vi);t!==null&&Db(Lb,t.startTime-e)}}function Pb(e,t){ya=!1,wu&&(wu=!1,W_(ku),ku=-1),Yd=!0;var n=sn;try{for(Ob(t),Sr=jr(so);Sr!==null&&(!(Sr.expirationTime>t)||e&&!V_());){var r=Sr.callback;if(typeof r=="function"){Sr.callback=null,sn=Sr.priorityLevel;var o=r(Sr.expirationTime<=t);t=Je.unstable_now(),typeof o=="function"?Sr.callback=o:Sr===jr(so)&&$d(so),Ob(t)}else $d(so);Sr=jr(so)}if(Sr!==null)var i=!0;else{var l=jr(vi);l!==null&&Db(Lb,l.startTime-t),i=!1}return i}finally{Sr=null,sn=n,Yd=!1}}var Xd=!1,Qd=null,ku=-1,q_=5,j_=-1;function V_(){return!(Je.unstable_now()-j_<q_)}function Tb(){if(Qd!==null){var e=Je.unstable_now();j_=e;var t=!0;try{t=Qd(!0,e)}finally{t?xu():(Xd=!1,Qd=null)}}else Xd=!1}var xu;typeof B_=="function"?xu=function(){B_(Tb)}:typeof MessageChannel<"u"?(Ib=new MessageChannel,U_=Ib.port2,Ib.port1.onmessage=Tb,xu=function(){U_.postMessage(null)}):xu=function(){H_(Tb,0)};var Ib,U_;function Mb(e){Qd=e,Xd||(Xd=!0,xu())}function Db(e,t){ku=H_(function(){e(Je.unstable_now())},t)}Je.unstable_IdlePriority=5;Je.unstable_ImmediatePriority=1;Je.unstable_LowPriority=4;Je.unstable_NormalPriority=3;Je.unstable_Profiling=null;Je.unstable_UserBlockingPriority=2;Je.unstable_cancelCallback=function(e){e.callback=null};Je.unstable_continueExecution=function(){ya||Yd||(ya=!0,Mb(Pb))};Je.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q_=0<e?Math.floor(1e3/e):5};Je.unstable_getCurrentPriorityLevel=function(){return sn};Je.unstable_getFirstCallbackNode=function(){return jr(so)};Je.unstable_next=function(e){switch(sn){case 1:case 2:case 3:var t=3;break;default:t=sn}var n=sn;sn=t;try{return e()}finally{sn=n}};Je.unstable_pauseExecution=function(){};Je.unstable_requestPaint=function(){};Je.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=sn;sn=e;try{return t()}finally{sn=n}};Je.unstable_scheduleCallback=function(e,t,n){var r=Je.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Dz++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ab(vi,e),jr(so)===null&&e===jr(vi)&&(wu?(W_(ku),ku=-1):wu=!0,Db(Lb,n-r))):(e.sortIndex=o,Ab(so,e),ya||Yd||(ya=!0,Mb(Pb))),e};Je.unstable_shouldYield=V_;Je.unstable_wrapCallback=function(e){var t=sn;return function(){var n=sn;sn=t;try{return e.apply(this,arguments)}finally{sn=n}}}});var Q_=me((UY,G_)=>{"use strict";G_.exports=K_()});var J5=me(sr=>{"use strict";var Nz=Ce(),ar=Q_();function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tC=new Set,ju={};function La(e,t){jl(e,t),jl(e+"Capture",t)}function jl(e,t){for(ju[e]=t,e=0;e<t.length;e++)tC.add(t[e])}var Wo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),o0=Object.prototype.hasOwnProperty,zz=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$_={},Y_={};function Fz(e){return o0.call(Y_,e)?!0:o0.call($_,e)?!1:zz.test(e)?Y_[e]=!0:($_[e]=!0,!1)}function Bz(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uz(e,t,n,r){if(t===null||typeof t>"u"||Bz(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function An(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){en[e]=new An(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];en[t]=new An(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){en[e]=new An(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){en[e]=new An(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){en[e]=new An(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){en[e]=new An(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){en[e]=new An(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){en[e]=new An(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){en[e]=new An(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y0=/[\-:]([a-z])/g;function X0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y0,X0);en[t]=new An(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y0,X0);en[t]=new An(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y0,X0);en[t]=new An(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){en[e]=new An(e,1,!1,e.toLowerCase(),null,!1,!1)});en.xlinkHref=new An("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){en[e]=new An(e,1,!1,e.toLowerCase(),null,!0,!0)});function J0(e,t,n,r){var o=en.hasOwnProperty(t)?en[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uz(t,n,o,r)&&(n=null),r||o===null?Fz(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ko=Nz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jd=Symbol.for("react.element"),El=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),Z0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),nC=Symbol.for("react.provider"),rC=Symbol.for("react.context"),ev=Symbol.for("react.forward_ref"),a0=Symbol.for("react.suspense"),l0=Symbol.for("react.suspense_list"),tv=Symbol.for("react.memo"),xi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var oC=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var X_=Symbol.iterator;function Su(e){return e===null||typeof e!="object"?null:(e=X_&&e[X_]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Object.assign,Nb;function Ou(e){if(Nb===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nb=t&&t[1]||""}return`
`+Nb+e}var zb=!1;function Fb(e,t){if(!e||zb)return"";zb=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=u);break}}}finally{zb=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ou(e):""}function Hz(e){switch(e.tag){case 5:return Ou(e.type);case 16:return Ou("Lazy");case 13:return Ou("Suspense");case 19:return Ou("SuspenseList");case 0:case 2:case 15:return e=Fb(e.type,!1),e;case 11:return e=Fb(e.type.render,!1),e;case 1:return e=Fb(e.type,!0),e;default:return""}}function s0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rl:return"Fragment";case El:return"Portal";case i0:return"Profiler";case Z0:return"StrictMode";case a0:return"Suspense";case l0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rC:return(e.displayName||"Context")+".Consumer";case nC:return(e._context.displayName||"Context")+".Provider";case ev:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tv:return t=e.displayName||null,t!==null?t:s0(e.type)||"Memo";case xi:t=e._payload,e=e._init;try{return s0(e(t))}catch{}}return null}function Wz(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return s0(t);case 8:return t===Z0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qz(e){var t=iC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zd(e){e._valueTracker||(e._valueTracker=qz(e))}function aC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=iC(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function u0(e,t){var n=t.checked;return ft({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function J_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lC(e,t){t=t.checked,t!=null&&J0(e,"checked",t,!1)}function c0(e,t){lC(e,t);var n=Mi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?p0(e,t.type,n):t.hasOwnProperty("defaultValue")&&p0(e,t.type,Mi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Z_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function p0(e,t,n){(t!=="number"||Tf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lu=Array.isArray;function Fl(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mi(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function d0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return ft({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function e2(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(Lu(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mi(n)}}function sC(e,t){var n=Mi(t.value),r=Mi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function t2(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function f0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ef,cC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ef=ef||document.createElement("div"),ef.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ef.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vu(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Du={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jz=["Webkit","ms","Moz","O"];Object.keys(Du).forEach(function(e){jz.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Du[t]=Du[e]})});function pC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Du.hasOwnProperty(e)&&Du[e]?(""+t).trim():t+"px"}function dC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pC(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vz=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function m0(e,t){if(t){if(Vz[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function h0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g0=null;function nv(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var b0=null,Bl=null,Ul=null;function n2(e){if(e=uc(e)){if(typeof b0!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=nm(t),b0(e.stateNode,e.type,t))}}function fC(e){Bl?Ul?Ul.push(e):Ul=[e]:Bl=e}function mC(){if(Bl){var e=Bl,t=Ul;if(Ul=Bl=null,n2(e),t)for(e=0;e<t.length;e++)n2(t[e])}}function hC(e,t){return e(t)}function gC(){}var Bb=!1;function bC(e,t,n){if(Bb)return e(t,n);Bb=!0;try{return hC(e,t,n)}finally{Bb=!1,(Bl!==null||Ul!==null)&&(gC(),mC())}}function Ku(e,t){var n=e.stateNode;if(n===null)return null;var r=nm(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var v0=!1;if(Wo)try{_l={},Object.defineProperty(_l,"passive",{get:function(){v0=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{v0=!1}var _l;function Kz(e,t,n,r,o,i,l,u,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(f){this.onError(f)}}var Nu=!1,If=null,Af=!1,y0=null,Gz={onError:function(e){Nu=!0,If=e}};function Qz(e,t,n,r,o,i,l,u,c){Nu=!1,If=null,Kz.apply(Gz,arguments)}function $z(e,t,n,r,o,i,l,u,c){if(Qz.apply(this,arguments),Nu){if(Nu){var p=If;Nu=!1,If=null}else throw Error(Q(198));Af||(Af=!0,y0=p)}}function Pa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function r2(e){if(Pa(e)!==e)throw Error(Q(188))}function Yz(e){var t=e.alternate;if(!t){if(t=Pa(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return r2(o),e;if(i===r)return r2(o),t;i=i.sibling}throw Error(Q(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function yC(e){return e=Yz(e),e!==null?xC(e):null}function xC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xC(e);if(t!==null)return t;e=e.sibling}return null}var wC=ar.unstable_scheduleCallback,o2=ar.unstable_cancelCallback,Xz=ar.unstable_shouldYield,Jz=ar.unstable_requestPaint,St=ar.unstable_now,Zz=ar.unstable_getCurrentPriorityLevel,rv=ar.unstable_ImmediatePriority,kC=ar.unstable_UserBlockingPriority,Of=ar.unstable_NormalPriority,eF=ar.unstable_LowPriority,SC=ar.unstable_IdlePriority,Jf=null,fo=null;function tF(e){if(fo&&typeof fo.onCommitFiberRoot=="function")try{fo.onCommitFiberRoot(Jf,e,void 0,(e.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:oF,nF=Math.log,rF=Math.LN2;function oF(e){return e>>>=0,e===0?32:31-(nF(e)/rF|0)|0}var tf=64,nf=4194304;function Pu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=Pu(u):(i&=l,i!==0&&(r=Pu(i)))}else l=n&~o,l!==0?r=Pu(l):i!==0&&(r=Pu(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$r(t),o=1<<n,r|=e[n],t&=~o;return r}function iF(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aF(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-$r(i),u=1<<l,c=o[l];c===-1?(!(u&n)||u&r)&&(o[l]=iF(u,t)):c<=t&&(e.expiredLanes|=u),i&=~u}}function x0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _C(){var e=tf;return tf<<=1,!(tf&4194240)&&(tf=64),e}function Ub(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$r(t),e[t]=n}function lF(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$r(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ov(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$r(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var qe=0;function CC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var EC,iv,RC,TC,IC,w0=!1,rf=[],Ei=null,Ri=null,Ti=null,Gu=new Map,Qu=new Map,ki=[],sF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i2(e,t){switch(e){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":Gu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qu.delete(t.pointerId)}}function _u(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=uc(t),t!==null&&iv(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uF(e,t,n,r,o){switch(t){case"focusin":return Ei=_u(Ei,e,t,n,r,o),!0;case"dragenter":return Ri=_u(Ri,e,t,n,r,o),!0;case"mouseover":return Ti=_u(Ti,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gu.set(i,_u(Gu.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qu.set(i,_u(Qu.get(i)||null,e,t,n,r,o)),!0}return!1}function AC(e){var t=ka(e.target);if(t!==null){var n=Pa(t);if(n!==null){if(t=n.tag,t===13){if(t=vC(n),t!==null){e.blockedOn=t,IC(e.priority,function(){RC(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=k0(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);g0=r,n.target.dispatchEvent(r),g0=null}else return t=uc(n),t!==null&&iv(t),e.blockedOn=n,!1;t.shift()}return!0}function a2(e,t,n){vf(e)&&n.delete(t)}function cF(){w0=!1,Ei!==null&&vf(Ei)&&(Ei=null),Ri!==null&&vf(Ri)&&(Ri=null),Ti!==null&&vf(Ti)&&(Ti=null),Gu.forEach(a2),Qu.forEach(a2)}function Cu(e,t){e.blockedOn===t&&(e.blockedOn=null,w0||(w0=!0,ar.unstable_scheduleCallback(ar.unstable_NormalPriority,cF)))}function $u(e){function t(o){return Cu(o,e)}if(0<rf.length){Cu(rf[0],e);for(var n=1;n<rf.length;n++){var r=rf[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ei!==null&&Cu(Ei,e),Ri!==null&&Cu(Ri,e),Ti!==null&&Cu(Ti,e),Gu.forEach(t),Qu.forEach(t),n=0;n<ki.length;n++)r=ki[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)AC(n),n.blockedOn===null&&ki.shift()}var Hl=Ko.ReactCurrentBatchConfig,Pf=!0;function pF(e,t,n,r){var o=qe,i=Hl.transition;Hl.transition=null;try{qe=1,av(e,t,n,r)}finally{qe=o,Hl.transition=i}}function dF(e,t,n,r){var o=qe,i=Hl.transition;Hl.transition=null;try{qe=4,av(e,t,n,r)}finally{qe=o,Hl.transition=i}}function av(e,t,n,r){if(Pf){var o=k0(e,t,n,r);if(o===null)Gb(e,t,r,Mf,n),i2(e,r);else if(uF(o,e,t,n,r))r.stopPropagation();else if(i2(e,r),t&4&&-1<sF.indexOf(e)){for(;o!==null;){var i=uc(o);if(i!==null&&EC(i),i=k0(e,t,n,r),i===null&&Gb(e,t,r,Mf,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Gb(e,t,r,null,n)}}var Mf=null;function k0(e,t,n,r){if(Mf=null,e=nv(r),e=ka(e),e!==null)if(t=Pa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vC(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mf=e,null}function OC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zz()){case rv:return 1;case kC:return 4;case Of:case eF:return 16;case SC:return 536870912;default:return 16}default:return 16}}var _i=null,lv=null,yf=null;function LC(){if(yf)return yf;var e,t=lv,n=t.length,r,o="value"in _i?_i.value:_i.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return yf=o.slice(e,1<r?1-r:void 0)}function xf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function of(){return!0}function l2(){return!1}function lr(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?of:l2,this.isPropagationStopped=l2,this}return ft(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=of)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=of)},persist:function(){},isPersistent:of}),t}var Xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sv=lr(Xl),sc=ft({},Xl,{view:0,detail:0}),fF=lr(sc),Hb,Wb,Eu,Zf=ft({},sc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uv,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Eu&&(Eu&&e.type==="mousemove"?(Hb=e.screenX-Eu.screenX,Wb=e.screenY-Eu.screenY):Wb=Hb=0,Eu=e),Hb)},movementY:function(e){return"movementY"in e?e.movementY:Wb}}),s2=lr(Zf),mF=ft({},Zf,{dataTransfer:0}),hF=lr(mF),gF=ft({},sc,{relatedTarget:0}),qb=lr(gF),bF=ft({},Xl,{animationName:0,elapsedTime:0,pseudoElement:0}),vF=lr(bF),yF=ft({},Xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xF=lr(yF),wF=ft({},Xl,{data:0}),u2=lr(wF),kF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_F={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CF(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_F[e])?!!t[e]:!1}function uv(){return CF}var EF=ft({},sc,{key:function(e){if(e.key){var t=kF[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SF[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uv,charCode:function(e){return e.type==="keypress"?xf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RF=lr(EF),TF=ft({},Zf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c2=lr(TF),IF=ft({},sc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uv}),AF=lr(IF),OF=ft({},Xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),LF=lr(OF),PF=ft({},Zf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),MF=lr(PF),DF=[9,13,27,32],cv=Wo&&"CompositionEvent"in window,zu=null;Wo&&"documentMode"in document&&(zu=document.documentMode);var NF=Wo&&"TextEvent"in window&&!zu,PC=Wo&&(!cv||zu&&8<zu&&11>=zu),p2=" ",d2=!1;function MC(e,t){switch(e){case"keyup":return DF.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function DC(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tl=!1;function zF(e,t){switch(e){case"compositionend":return DC(t);case"keypress":return t.which!==32?null:(d2=!0,p2);case"textInput":return e=t.data,e===p2&&d2?null:e;default:return null}}function FF(e,t){if(Tl)return e==="compositionend"||!cv&&MC(e,t)?(e=LC(),yf=lv=_i=null,Tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return PC&&t.locale!=="ko"?null:t.data;default:return null}}var BF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!BF[e.type]:t==="textarea"}function NC(e,t,n,r){fC(r),t=Df(t,"onChange"),0<t.length&&(n=new sv("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fu=null,Yu=null;function UF(e){GC(e,0)}function em(e){var t=Ol(e);if(aC(t))return e}function HF(e,t){if(e==="change")return t}var zC=!1;Wo&&(Wo?(lf="oninput"in document,lf||(jb=document.createElement("div"),jb.setAttribute("oninput","return;"),lf=typeof jb.oninput=="function"),af=lf):af=!1,zC=af&&(!document.documentMode||9<document.documentMode));var af,lf,jb;function m2(){Fu&&(Fu.detachEvent("onpropertychange",FC),Yu=Fu=null)}function FC(e){if(e.propertyName==="value"&&em(Yu)){var t=[];NC(t,Yu,e,nv(e)),bC(UF,t)}}function WF(e,t,n){e==="focusin"?(m2(),Fu=t,Yu=n,Fu.attachEvent("onpropertychange",FC)):e==="focusout"&&m2()}function qF(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return em(Yu)}function jF(e,t){if(e==="click")return em(t)}function VF(e,t){if(e==="input"||e==="change")return em(t)}function KF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xr=typeof Object.is=="function"?Object.is:KF;function Xu(e,t){if(Xr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!o0.call(t,o)||!Xr(e[o],t[o]))return!1}return!0}function h2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function g2(e,t){var n=h2(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=h2(n)}}function BC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?BC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function UC(){for(var e=window,t=Tf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tf(e.document)}return t}function pv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function GF(e){var t=UC(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&BC(n.ownerDocument.documentElement,n)){if(r!==null&&pv(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=g2(n,i);var l=g2(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var QF=Wo&&"documentMode"in document&&11>=document.documentMode,Il=null,S0=null,Bu=null,_0=!1;function b2(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_0||Il==null||Il!==Tf(r)||(r=Il,"selectionStart"in r&&pv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bu&&Xu(Bu,r)||(Bu=r,r=Df(S0,"onSelect"),0<r.length&&(t=new sv("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Il)))}function sf(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Al={animationend:sf("Animation","AnimationEnd"),animationiteration:sf("Animation","AnimationIteration"),animationstart:sf("Animation","AnimationStart"),transitionend:sf("Transition","TransitionEnd")},Vb={},HC={};Wo&&(HC=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function tm(e){if(Vb[e])return Vb[e];if(!Al[e])return e;var t=Al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in HC)return Vb[e]=t[n];return e}var WC=tm("animationend"),qC=tm("animationiteration"),jC=tm("animationstart"),VC=tm("transitionend"),KC=new Map,v2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(e,t){KC.set(e,t),La(t,[e])}for(uf=0;uf<v2.length;uf++)cf=v2[uf],y2=cf.toLowerCase(),x2=cf[0].toUpperCase()+cf.slice(1),Ni(y2,"on"+x2);var cf,y2,x2,uf;Ni(WC,"onAnimationEnd");Ni(qC,"onAnimationIteration");Ni(jC,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(VC,"onTransitionEnd");jl("onMouseEnter",["mouseout","mouseover"]);jl("onMouseLeave",["mouseout","mouseover"]);jl("onPointerEnter",["pointerout","pointerover"]);jl("onPointerLeave",["pointerout","pointerover"]);La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));La("onBeforeInput",["compositionend","keypress","textInput","paste"]);La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$F=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mu));function w2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$z(r,t,void 0,e),e.currentTarget=null}function GC(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],c=u.instance,p=u.currentTarget;if(u=u.listener,c!==i&&o.isPropagationStopped())break e;w2(o,u,p),i=c}else for(l=0;l<r.length;l++){if(u=r[l],c=u.instance,p=u.currentTarget,u=u.listener,c!==i&&o.isPropagationStopped())break e;w2(o,u,p),i=c}}}if(Af)throw e=y0,Af=!1,y0=null,e}function nt(e,t){var n=t[I0];n===void 0&&(n=t[I0]=new Set);var r=e+"__bubble";n.has(r)||(QC(t,e,2,!1),n.add(r))}function Kb(e,t,n){var r=0;t&&(r|=4),QC(n,e,r,t)}var pf="_reactListening"+Math.random().toString(36).slice(2);function Ju(e){if(!e[pf]){e[pf]=!0,tC.forEach(function(n){n!=="selectionchange"&&($F.has(n)||Kb(n,!1,e),Kb(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pf]||(t[pf]=!0,Kb("selectionchange",!1,t))}}function QC(e,t,n,r){switch(OC(t)){case 1:var o=pF;break;case 4:o=dF;break;default:o=av}n=o.bind(null,t,n,e),o=void 0,!v0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Gb(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;u!==null;){if(l=ka(u),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}u=u.parentNode}}r=r.return}bC(function(){var p=i,f=nv(n),m=[];e:{var g=KC.get(e);if(g!==void 0){var b=sv,v=e;switch(e){case"keypress":if(xf(n)===0)break e;case"keydown":case"keyup":b=RF;break;case"focusin":v="focus",b=qb;break;case"focusout":v="blur",b=qb;break;case"beforeblur":case"afterblur":b=qb;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=s2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=hF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=AF;break;case WC:case qC:case jC:b=vF;break;case VC:b=LF;break;case"scroll":b=fF;break;case"wheel":b=MF;break;case"copy":case"cut":case"paste":b=xF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=c2}var k=(t&4)!==0,C=!k&&e==="scroll",y=k?g!==null?g+"Capture":null:g;k=[];for(var w=p,S;w!==null;){S=w;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,y!==null&&(T=Ku(w,y),T!=null&&k.push(Zu(w,T,S)))),C)break;w=w.return}0<k.length&&(g=new b(g,v,null,n,f),m.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==g0&&(v=n.relatedTarget||n.fromElement)&&(ka(v)||v[qo]))break e;if((b||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=p,v=v?ka(v):null,v!==null&&(C=Pa(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=p),b!==v)){if(k=s2,T="onMouseLeave",y="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(k=c2,T="onPointerLeave",y="onPointerEnter",w="pointer"),C=b==null?g:Ol(b),S=v==null?g:Ol(v),g=new k(T,w+"leave",b,n,f),g.target=C,g.relatedTarget=S,T=null,ka(f)===p&&(k=new k(y,w+"enter",v,n,f),k.target=S,k.relatedTarget=C,T=k),C=T,b&&v)t:{for(k=b,y=v,w=0,S=k;S;S=Cl(S))w++;for(S=0,T=y;T;T=Cl(T))S++;for(;0<w-S;)k=Cl(k),w--;for(;0<S-w;)y=Cl(y),S--;for(;w--;){if(k===y||y!==null&&k===y.alternate)break t;k=Cl(k),y=Cl(y)}k=null}else k=null;b!==null&&k2(m,g,b,k,!1),v!==null&&C!==null&&k2(m,C,v,k,!0)}}e:{if(g=p?Ol(p):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var M=HF;else if(f2(g))if(zC)M=VF;else{M=qF;var R=WF}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=jF);if(M&&(M=M(e,p))){NC(m,M,n,f);break e}R&&R(e,g,p),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&p0(g,"number",g.value)}switch(R=p?Ol(p):window,e){case"focusin":(f2(R)||R.contentEditable==="true")&&(Il=R,S0=p,Bu=null);break;case"focusout":Bu=S0=Il=null;break;case"mousedown":_0=!0;break;case"contextmenu":case"mouseup":case"dragend":_0=!1,b2(m,n,f);break;case"selectionchange":if(QF)break;case"keydown":case"keyup":b2(m,n,f)}var z;if(cv)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Tl?MC(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(PC&&n.locale!=="ko"&&(Tl||U!=="onCompositionStart"?U==="onCompositionEnd"&&Tl&&(z=LC()):(_i=f,lv="value"in _i?_i.value:_i.textContent,Tl=!0)),R=Df(p,U),0<R.length&&(U=new u2(U,e,null,n,f),m.push({event:U,listeners:R}),z?U.data=z:(z=DC(n),z!==null&&(U.data=z)))),(z=NF?zF(e,n):FF(e,n))&&(p=Df(p,"onBeforeInput"),0<p.length&&(f=new u2("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:p}),f.data=z))}GC(m,t)})}function Zu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Df(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ku(e,n),i!=null&&r.unshift(Zu(e,i,o)),i=Ku(e,t),i!=null&&r.push(Zu(e,i,o))),e=e.return}return r}function Cl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function k2(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,c=u.alternate,p=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&p!==null&&(u=p,o?(c=Ku(n,i),c!=null&&l.unshift(Zu(n,c,u))):o||(c=Ku(n,i),c!=null&&l.push(Zu(n,c,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var YF=/\r\n?/g,XF=/\u0000|\uFFFD/g;function S2(e){return(typeof e=="string"?e:""+e).replace(YF,`
`).replace(XF,"")}function df(e,t,n){if(t=S2(t),S2(e)!==t&&n)throw Error(Q(425))}function Nf(){}var C0=null,E0=null;function R0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var T0=typeof setTimeout=="function"?setTimeout:void 0,JF=typeof clearTimeout=="function"?clearTimeout:void 0,_2=typeof Promise=="function"?Promise:void 0,ZF=typeof queueMicrotask=="function"?queueMicrotask:typeof _2<"u"?function(e){return _2.resolve(null).then(e).catch(e8)}:T0;function e8(e){setTimeout(function(){throw e})}function Qb(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),$u(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);$u(t)}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function C2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jl=Math.random().toString(36).slice(2),po="__reactFiber$"+Jl,ec="__reactProps$"+Jl,qo="__reactContainer$"+Jl,I0="__reactEvents$"+Jl,t8="__reactListeners$"+Jl,n8="__reactHandles$"+Jl;function ka(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qo]||n[po]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=C2(e);e!==null;){if(n=e[po])return n;e=C2(e)}return t}e=n,n=e.parentNode}return null}function uc(e){return e=e[po]||e[qo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ol(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function nm(e){return e[ec]||null}var A0=[],Ll=-1;function zi(e){return{current:e}}function rt(e){0>Ll||(e.current=A0[Ll],A0[Ll]=null,Ll--)}function Ze(e,t){Ll++,A0[Ll]=e.current,e.current=t}var Di={},dn=zi(Di),Vn=zi(!1),Ra=Di;function Vl(e,t){var n=e.type.contextTypes;if(!n)return Di;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Kn(e){return e=e.childContextTypes,e!=null}function zf(){rt(Vn),rt(dn)}function E2(e,t,n){if(dn.current!==Di)throw Error(Q(168));Ze(dn,t),Ze(Vn,n)}function $C(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(Q(108,Wz(e)||"Unknown",o));return ft({},n,r)}function Ff(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Di,Ra=dn.current,Ze(dn,e),Ze(Vn,Vn.current),!0}function R2(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=$C(e,t,Ra),r.__reactInternalMemoizedMergedChildContext=e,rt(Vn),rt(dn),Ze(dn,e)):rt(Vn),Ze(Vn,n)}var Fo=null,rm=!1,$b=!1;function YC(e){Fo===null?Fo=[e]:Fo.push(e)}function r8(e){rm=!0,YC(e)}function Fi(){if(!$b&&Fo!==null){$b=!0;var e=0,t=qe;try{var n=Fo;for(qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Fo=null,rm=!1}catch(o){throw Fo!==null&&(Fo=Fo.slice(e+1)),wC(rv,Fi),o}finally{qe=t,$b=!1}}return null}var Pl=[],Ml=0,Bf=null,Uf=0,_r=[],Cr=0,Ta=null,Bo=1,Uo="";function xa(e,t){Pl[Ml++]=Uf,Pl[Ml++]=Bf,Bf=e,Uf=t}function XC(e,t,n){_r[Cr++]=Bo,_r[Cr++]=Uo,_r[Cr++]=Ta,Ta=e;var r=Bo;e=Uo;var o=32-$r(r)-1;r&=~(1<<o),n+=1;var i=32-$r(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Bo=1<<32-$r(t)+o|n<<o|r,Uo=i+e}else Bo=1<<i|n<<o|r,Uo=e}function dv(e){e.return!==null&&(xa(e,1),XC(e,1,0))}function fv(e){for(;e===Bf;)Bf=Pl[--Ml],Pl[Ml]=null,Uf=Pl[--Ml],Pl[Ml]=null;for(;e===Ta;)Ta=_r[--Cr],_r[Cr]=null,Uo=_r[--Cr],_r[Cr]=null,Bo=_r[--Cr],_r[Cr]=null}var ir=null,or=null,st=!1,Qr=null;function JC(e,t){var n=Er(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function T2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ir=e,or=Ii(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ir=e,or=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ta!==null?{id:Bo,overflow:Uo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Er(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ir=e,or=null,!0):!1;default:return!1}}function O0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function L0(e){if(st){var t=or;if(t){var n=t;if(!T2(e,t)){if(O0(e))throw Error(Q(418));t=Ii(n.nextSibling);var r=ir;t&&T2(e,t)?JC(r,n):(e.flags=e.flags&-4097|2,st=!1,ir=e)}}else{if(O0(e))throw Error(Q(418));e.flags=e.flags&-4097|2,st=!1,ir=e}}}function I2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ir=e}function ff(e){if(e!==ir)return!1;if(!st)return I2(e),st=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!R0(e.type,e.memoizedProps)),t&&(t=or)){if(O0(e))throw ZC(),Error(Q(418));for(;t;)JC(e,t),t=Ii(t.nextSibling)}if(I2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){or=Ii(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}or=null}}else or=ir?Ii(e.stateNode.nextSibling):null;return!0}function ZC(){for(var e=or;e;)e=Ii(e.nextSibling)}function Kl(){or=ir=null,st=!1}function mv(e){Qr===null?Qr=[e]:Qr.push(e)}var o8=Ko.ReactCurrentBatchConfig;function Ru(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function mf(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function A2(e){var t=e._init;return t(e._payload)}function e5(e){function t(y,w){if(e){var S=y.deletions;S===null?(y.deletions=[w],y.flags|=16):S.push(w)}}function n(y,w){if(!e)return null;for(;w!==null;)t(y,w),w=w.sibling;return null}function r(y,w){for(y=new Map;w!==null;)w.key!==null?y.set(w.key,w):y.set(w.index,w),w=w.sibling;return y}function o(y,w){return y=Pi(y,w),y.index=0,y.sibling=null,y}function i(y,w,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<w?(y.flags|=2,w):S):(y.flags|=2,w)):(y.flags|=1048576,w)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,w,S,T){return w===null||w.tag!==6?(w=n0(S,y.mode,T),w.return=y,w):(w=o(w,S),w.return=y,w)}function c(y,w,S,T){var M=S.type;return M===Rl?f(y,w,S.props.children,T,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===xi&&A2(M)===w.type)?(T=o(w,S.props),T.ref=Ru(y,w,S),T.return=y,T):(T=Rf(S.type,S.key,S.props,null,y.mode,T),T.ref=Ru(y,w,S),T.return=y,T)}function p(y,w,S,T){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=r0(S,y.mode,T),w.return=y,w):(w=o(w,S.children||[]),w.return=y,w)}function f(y,w,S,T,M){return w===null||w.tag!==7?(w=Ea(S,y.mode,T,M),w.return=y,w):(w=o(w,S),w.return=y,w)}function m(y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=n0(""+w,y.mode,S),w.return=y,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jd:return S=Rf(w.type,w.key,w.props,null,y.mode,S),S.ref=Ru(y,null,w),S.return=y,S;case El:return w=r0(w,y.mode,S),w.return=y,w;case xi:var T=w._init;return m(y,T(w._payload),S)}if(Lu(w)||Su(w))return w=Ea(w,y.mode,S,null),w.return=y,w;mf(y,w)}return null}function g(y,w,S,T){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:u(y,w,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jd:return S.key===M?c(y,w,S,T):null;case El:return S.key===M?p(y,w,S,T):null;case xi:return M=S._init,g(y,w,M(S._payload),T)}if(Lu(S)||Su(S))return M!==null?null:f(y,w,S,T,null);mf(y,S)}return null}function b(y,w,S,T,M){if(typeof T=="string"&&T!==""||typeof T=="number")return y=y.get(S)||null,u(w,y,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Jd:return y=y.get(T.key===null?S:T.key)||null,c(w,y,T,M);case El:return y=y.get(T.key===null?S:T.key)||null,p(w,y,T,M);case xi:var R=T._init;return b(y,w,S,R(T._payload),M)}if(Lu(T)||Su(T))return y=y.get(S)||null,f(w,y,T,M,null);mf(w,T)}return null}function v(y,w,S,T){for(var M=null,R=null,z=w,U=w=0,Y=null;z!==null&&U<S.length;U++){z.index>U?(Y=z,z=null):Y=z.sibling;var P=g(y,z,S[U],T);if(P===null){z===null&&(z=Y);break}e&&z&&P.alternate===null&&t(y,z),w=i(P,w,U),R===null?M=P:R.sibling=P,R=P,z=Y}if(U===S.length)return n(y,z),st&&xa(y,U),M;if(z===null){for(;U<S.length;U++)z=m(y,S[U],T),z!==null&&(w=i(z,w,U),R===null?M=z:R.sibling=z,R=z);return st&&xa(y,U),M}for(z=r(y,z);U<S.length;U++)Y=b(z,y,U,S[U],T),Y!==null&&(e&&Y.alternate!==null&&z.delete(Y.key===null?U:Y.key),w=i(Y,w,U),R===null?M=Y:R.sibling=Y,R=Y);return e&&z.forEach(function(ae){return t(y,ae)}),st&&xa(y,U),M}function k(y,w,S,T){var M=Su(S);if(typeof M!="function")throw Error(Q(150));if(S=M.call(S),S==null)throw Error(Q(151));for(var R=M=null,z=w,U=w=0,Y=null,P=S.next();z!==null&&!P.done;U++,P=S.next()){z.index>U?(Y=z,z=null):Y=z.sibling;var ae=g(y,z,P.value,T);if(ae===null){z===null&&(z=Y);break}e&&z&&ae.alternate===null&&t(y,z),w=i(ae,w,U),R===null?M=ae:R.sibling=ae,R=ae,z=Y}if(P.done)return n(y,z),st&&xa(y,U),M;if(z===null){for(;!P.done;U++,P=S.next())P=m(y,P.value,T),P!==null&&(w=i(P,w,U),R===null?M=P:R.sibling=P,R=P);return st&&xa(y,U),M}for(z=r(y,z);!P.done;U++,P=S.next())P=b(z,y,U,P.value,T),P!==null&&(e&&P.alternate!==null&&z.delete(P.key===null?U:P.key),w=i(P,w,U),R===null?M=P:R.sibling=P,R=P);return e&&z.forEach(function(J){return t(y,J)}),st&&xa(y,U),M}function C(y,w,S,T){if(typeof S=="object"&&S!==null&&S.type===Rl&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Jd:e:{for(var M=S.key,R=w;R!==null;){if(R.key===M){if(M=S.type,M===Rl){if(R.tag===7){n(y,R.sibling),w=o(R,S.props.children),w.return=y,y=w;break e}}else if(R.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===xi&&A2(M)===R.type){n(y,R.sibling),w=o(R,S.props),w.ref=Ru(y,R,S),w.return=y,y=w;break e}n(y,R);break}else t(y,R);R=R.sibling}S.type===Rl?(w=Ea(S.props.children,y.mode,T,S.key),w.return=y,y=w):(T=Rf(S.type,S.key,S.props,null,y.mode,T),T.ref=Ru(y,w,S),T.return=y,y=T)}return l(y);case El:e:{for(R=S.key;w!==null;){if(w.key===R)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(y,w.sibling),w=o(w,S.children||[]),w.return=y,y=w;break e}else{n(y,w);break}else t(y,w);w=w.sibling}w=r0(S,y.mode,T),w.return=y,y=w}return l(y);case xi:return R=S._init,C(y,w,R(S._payload),T)}if(Lu(S))return v(y,w,S,T);if(Su(S))return k(y,w,S,T);mf(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(y,w.sibling),w=o(w,S),w.return=y,y=w):(n(y,w),w=n0(S,y.mode,T),w.return=y,y=w),l(y)):n(y,w)}return C}var Gl=e5(!0),t5=e5(!1),Hf=zi(null),Wf=null,Dl=null,hv=null;function gv(){hv=Dl=Wf=null}function bv(e){var t=Hf.current;rt(Hf),e._currentValue=t}function P0(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wl(e,t){Wf=e,hv=Dl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jn=!0),e.firstContext=null)}function Tr(e){var t=e._currentValue;if(hv!==e)if(e={context:e,memoizedValue:t,next:null},Dl===null){if(Wf===null)throw Error(Q(308));Dl=e,Wf.dependencies={lanes:0,firstContext:e}}else Dl=Dl.next=e;return t}var Sa=null;function vv(e){Sa===null?Sa=[e]:Sa.push(e)}function n5(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,vv(t)):(n.next=o.next,o.next=n),t.interleaved=n,jo(e,r)}function jo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wi=!1;function yv(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r5(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ho(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ai(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jo(e,n)}return o=r.interleaved,o===null?(t.next=t,vv(r)):(t.next=o.next,o.next=t),r.interleaved=t,jo(e,n)}function wf(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ov(e,n)}}function O2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qf(e,t,n,r){var o=e.updateQueue;wi=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var c=u,p=c.next;c.next=null,l===null?i=p:l.next=p,l=c;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==l&&(u===null?f.firstBaseUpdate=p:u.next=p,f.lastBaseUpdate=c))}if(i!==null){var m=o.baseState;l=0,f=p=c=null,u=i;do{var g=u.lane,b=u.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:b,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var v=e,k=u;switch(g=t,b=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){m=v.call(b,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,g=typeof v=="function"?v.call(b,m,g):v,g==null)break e;m=ft({},m,g);break e;case 2:wi=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else b={eventTime:b,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(p=f=b,c=m):f=f.next=b,l|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(c=m),o.baseState=c,o.firstBaseUpdate=p,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Aa|=l,e.lanes=l,e.memoizedState=m}}function L2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Q(191,o));o.call(r)}}}var cc={},mo=zi(cc),tc=zi(cc),nc=zi(cc);function _a(e){if(e===cc)throw Error(Q(174));return e}function xv(e,t){switch(Ze(nc,t),Ze(tc,e),Ze(mo,cc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:f0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=f0(t,e)}rt(mo),Ze(mo,t)}function Ql(){rt(mo),rt(tc),rt(nc)}function o5(e){_a(nc.current);var t=_a(mo.current),n=f0(t,e.type);t!==n&&(Ze(tc,e),Ze(mo,n))}function wv(e){tc.current===e&&(rt(mo),rt(tc))}var pt=zi(0);function jf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yb=[];function kv(){for(var e=0;e<Yb.length;e++)Yb[e]._workInProgressVersionPrimary=null;Yb.length=0}var kf=Ko.ReactCurrentDispatcher,Xb=Ko.ReactCurrentBatchConfig,Ia=0,dt=null,zt=null,Kt=null,Vf=!1,Uu=!1,rc=0,i8=0;function un(){throw Error(Q(321))}function Sv(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xr(e[n],t[n]))return!1;return!0}function _v(e,t,n,r,o,i){if(Ia=i,dt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kf.current=e===null||e.memoizedState===null?u8:c8,e=n(r,o),Uu){i=0;do{if(Uu=!1,rc=0,25<=i)throw Error(Q(301));i+=1,Kt=zt=null,t.updateQueue=null,kf.current=p8,e=n(r,o)}while(Uu)}if(kf.current=Kf,t=zt!==null&&zt.next!==null,Ia=0,Kt=zt=dt=null,Vf=!1,t)throw Error(Q(300));return e}function Cv(){var e=rc!==0;return rc=0,e}function co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?dt.memoizedState=Kt=e:Kt=Kt.next=e,Kt}function Ir(){if(zt===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=zt.next;var t=Kt===null?dt.memoizedState:Kt.next;if(t!==null)Kt=t,zt=e;else{if(e===null)throw Error(Q(310));zt=e,e={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Kt===null?dt.memoizedState=Kt=e:Kt=Kt.next=e}return Kt}function oc(e,t){return typeof t=="function"?t(e):t}function Jb(e){var t=Ir(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=zt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,c=null,p=i;do{var f=p.lane;if((Ia&f)===f)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var m={lane:f,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(u=c=m,l=r):c=c.next=m,dt.lanes|=f,Aa|=f}p=p.next}while(p!==null&&p!==i);c===null?l=r:c.next=u,Xr(r,t.memoizedState)||(jn=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,dt.lanes|=i,Aa|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zb(e){var t=Ir(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Xr(i,t.memoizedState)||(jn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function i5(){}function a5(e,t){var n=dt,r=Ir(),o=t(),i=!Xr(r.memoizedState,o);if(i&&(r.memoizedState=o,jn=!0),r=r.queue,Ev(u5.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,ic(9,s5.bind(null,n,r,o,t),void 0,null),Gt===null)throw Error(Q(349));Ia&30||l5(n,t,o)}return o}function l5(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=dt.updateQueue,t===null?(t={lastEffect:null,stores:null},dt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function s5(e,t,n,r){t.value=n,t.getSnapshot=r,c5(t)&&p5(e)}function u5(e,t,n){return n(function(){c5(t)&&p5(e)})}function c5(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xr(e,n)}catch{return!0}}function p5(e){var t=jo(e,1);t!==null&&Yr(t,e,1,-1)}function P2(e){var t=co();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oc,lastRenderedState:e},t.queue=e,e=e.dispatch=s8.bind(null,dt,e),[t.memoizedState,e]}function ic(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=dt.updateQueue,t===null?(t={lastEffect:null,stores:null},dt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function d5(){return Ir().memoizedState}function Sf(e,t,n,r){var o=co();dt.flags|=e,o.memoizedState=ic(1|t,n,void 0,r===void 0?null:r)}function om(e,t,n,r){var o=Ir();r=r===void 0?null:r;var i=void 0;if(zt!==null){var l=zt.memoizedState;if(i=l.destroy,r!==null&&Sv(r,l.deps)){o.memoizedState=ic(t,n,i,r);return}}dt.flags|=e,o.memoizedState=ic(1|t,n,i,r)}function M2(e,t){return Sf(8390656,8,e,t)}function Ev(e,t){return om(2048,8,e,t)}function f5(e,t){return om(4,2,e,t)}function m5(e,t){return om(4,4,e,t)}function h5(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g5(e,t,n){return n=n!=null?n.concat([e]):null,om(4,4,h5.bind(null,t,e),n)}function Rv(){}function b5(e,t){var n=Ir();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sv(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function v5(e,t){var n=Ir();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sv(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y5(e,t,n){return Ia&21?(Xr(n,t)||(n=_C(),dt.lanes|=n,Aa|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jn=!0),e.memoizedState=n)}function a8(e,t){var n=qe;qe=n!==0&&4>n?n:4,e(!0);var r=Xb.transition;Xb.transition={};try{e(!1),t()}finally{qe=n,Xb.transition=r}}function x5(){return Ir().memoizedState}function l8(e,t,n){var r=Li(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w5(e))k5(t,n);else if(n=n5(e,t,n,r),n!==null){var o=In();Yr(n,e,r,o),S5(n,t,r)}}function s8(e,t,n){var r=Li(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w5(e))k5(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,Xr(u,l)){var c=t.interleaved;c===null?(o.next=o,vv(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=n5(e,t,o,r),n!==null&&(o=In(),Yr(n,e,r,o),S5(n,t,r))}}function w5(e){var t=e.alternate;return e===dt||t!==null&&t===dt}function k5(e,t){Uu=Vf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function S5(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ov(e,n)}}var Kf={readContext:Tr,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},u8={readContext:Tr,useCallback:function(e,t){return co().memoizedState=[e,t===void 0?null:t],e},useContext:Tr,useEffect:M2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sf(4194308,4,h5.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sf(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sf(4,2,e,t)},useMemo:function(e,t){var n=co();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=co();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=l8.bind(null,dt,e),[r.memoizedState,e]},useRef:function(e){var t=co();return e={current:e},t.memoizedState=e},useState:P2,useDebugValue:Rv,useDeferredValue:function(e){return co().memoizedState=e},useTransition:function(){var e=P2(!1),t=e[0];return e=a8.bind(null,e[1]),co().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=dt,o=co();if(st){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Gt===null)throw Error(Q(349));Ia&30||l5(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,M2(u5.bind(null,r,i,e),[e]),r.flags|=2048,ic(9,s5.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=co(),t=Gt.identifierPrefix;if(st){var n=Uo,r=Bo;n=(r&~(1<<32-$r(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c8={readContext:Tr,useCallback:b5,useContext:Tr,useEffect:Ev,useImperativeHandle:g5,useInsertionEffect:f5,useLayoutEffect:m5,useMemo:v5,useReducer:Jb,useRef:d5,useState:function(){return Jb(oc)},useDebugValue:Rv,useDeferredValue:function(e){var t=Ir();return y5(t,zt.memoizedState,e)},useTransition:function(){var e=Jb(oc)[0],t=Ir().memoizedState;return[e,t]},useMutableSource:i5,useSyncExternalStore:a5,useId:x5,unstable_isNewReconciler:!1},p8={readContext:Tr,useCallback:b5,useContext:Tr,useEffect:Ev,useImperativeHandle:g5,useInsertionEffect:f5,useLayoutEffect:m5,useMemo:v5,useReducer:Zb,useRef:d5,useState:function(){return Zb(oc)},useDebugValue:Rv,useDeferredValue:function(e){var t=Ir();return zt===null?t.memoizedState=e:y5(t,zt.memoizedState,e)},useTransition:function(){var e=Zb(oc)[0],t=Ir().memoizedState;return[e,t]},useMutableSource:i5,useSyncExternalStore:a5,useId:x5,unstable_isNewReconciler:!1};function Kr(e,t){if(e&&e.defaultProps){t=ft({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function M0(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ft({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var im={isMounted:function(e){return(e=e._reactInternals)?Pa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=In(),o=Li(e),i=Ho(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ai(e,i,o),t!==null&&(Yr(t,e,o,r),wf(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=In(),o=Li(e),i=Ho(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ai(e,i,o),t!==null&&(Yr(t,e,o,r),wf(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=In(),r=Li(e),o=Ho(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ai(e,o,r),t!==null&&(Yr(t,e,r,n),wf(t,e,r))}};function D2(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Xu(n,r)||!Xu(o,i):!0}function _5(e,t,n){var r=!1,o=Di,i=t.contextType;return typeof i=="object"&&i!==null?i=Tr(i):(o=Kn(t)?Ra:dn.current,r=t.contextTypes,i=(r=r!=null)?Vl(e,o):Di),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=im,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function N2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&im.enqueueReplaceState(t,t.state,null)}function D0(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},yv(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Tr(i):(i=Kn(t)?Ra:dn.current,o.context=Vl(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(M0(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&im.enqueueReplaceState(o,o.state,null),qf(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $l(e,t){try{var n="",r=t;do n+=Hz(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function e0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function N0(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d8=typeof WeakMap=="function"?WeakMap:Map;function C5(e,t,n){n=Ho(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qf||(Qf=!0,K0=r),N0(e,t)},n}function E5(e,t,n){n=Ho(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){N0(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){N0(e,t),typeof r!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function z2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d8;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=E8.bind(null,e,t,n),t.then(e,e))}function F2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function B2(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ho(-1,1),t.tag=2,Ai(n,t,1))),n.lanes|=1),e)}var f8=Ko.ReactCurrentOwner,jn=!1;function Tn(e,t,n,r){t.child=e===null?t5(t,null,n,r):Gl(t,e.child,n,r)}function U2(e,t,n,r,o){n=n.render;var i=t.ref;return Wl(t,o),r=_v(e,t,n,r,i,o),n=Cv(),e!==null&&!jn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vo(e,t,o)):(st&&n&&dv(t),t.flags|=1,Tn(e,t,r,o),t.child)}function H2(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Dv(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,R5(e,t,i,r,o)):(e=Rf(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xu,n(l,r)&&e.ref===t.ref)return Vo(e,t,o)}return t.flags|=1,e=Pi(i,r),e.ref=t.ref,e.return=t,t.child=e}function R5(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Xu(i,r)&&e.ref===t.ref)if(jn=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(jn=!0);else return t.lanes=e.lanes,Vo(e,t,o)}return z0(e,t,n,r,o)}function T5(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(zl,rr),rr|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(zl,rr),rr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ze(zl,rr),rr|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ze(zl,rr),rr|=r;return Tn(e,t,o,n),t.child}function I5(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function z0(e,t,n,r,o){var i=Kn(n)?Ra:dn.current;return i=Vl(t,i),Wl(t,o),n=_v(e,t,n,r,i,o),r=Cv(),e!==null&&!jn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vo(e,t,o)):(st&&r&&dv(t),t.flags|=1,Tn(e,t,n,o),t.child)}function W2(e,t,n,r,o){if(Kn(n)){var i=!0;Ff(t)}else i=!1;if(Wl(t,o),t.stateNode===null)_f(e,t),_5(t,n,r),D0(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var c=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=Tr(p):(p=Kn(n)?Ra:dn.current,p=Vl(t,p));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||c!==p)&&N2(t,l,r,p),wi=!1;var g=t.memoizedState;l.state=g,qf(t,r,l,o),c=t.memoizedState,u!==r||g!==c||Vn.current||wi?(typeof f=="function"&&(M0(t,n,f,r),c=t.memoizedState),(u=wi||D2(t,n,u,r,g,c,p))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=p,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,r5(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:Kr(t.type,u),l.props=p,m=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Tr(c):(c=Kn(n)?Ra:dn.current,c=Vl(t,c));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||g!==c)&&N2(t,l,r,c),wi=!1,g=t.memoizedState,l.state=g,qf(t,r,l,o);var v=t.memoizedState;u!==m||g!==v||Vn.current||wi?(typeof b=="function"&&(M0(t,n,b,r),v=t.memoizedState),(p=wi||D2(t,n,p,r,g,v,c)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=c,r=p):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return F0(e,t,n,r,i,o)}function F0(e,t,n,r,o,i){I5(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&R2(t,n,!1),Vo(e,t,i);r=t.stateNode,f8.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gl(t,e.child,null,i),t.child=Gl(t,null,u,i)):Tn(e,t,u,i),t.memoizedState=r.state,o&&R2(t,n,!0),t.child}function A5(e){var t=e.stateNode;t.pendingContext?E2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&E2(e,t.context,!1),xv(e,t.containerInfo)}function q2(e,t,n,r,o){return Kl(),mv(o),t.flags|=256,Tn(e,t,n,r),t.child}var B0={dehydrated:null,treeContext:null,retryLane:0};function U0(e){return{baseLanes:e,cachePool:null,transitions:null}}function O5(e,t,n){var r=t.pendingProps,o=pt.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ze(pt,o&1),e===null)return L0(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=sm(l,r,0,null),e=Ea(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=U0(n),t.memoizedState=B0,e):Tv(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return m8(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pi(o,c),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Pi(u,i):(i=Ea(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?U0(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=B0,r}return i=e.child,e=i.sibling,r=Pi(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tv(e,t){return t=sm({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hf(e,t,n,r){return r!==null&&mv(r),Gl(t,e.child,null,n),e=Tv(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m8(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=e0(Error(Q(422))),hf(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=sm({mode:"visible",children:r.children},o,0,null),i=Ea(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gl(t,e.child,null,l),t.child.memoizedState=U0(l),t.memoizedState=B0,i);if(!(t.mode&1))return hf(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(Q(419)),r=e0(i,r,void 0),hf(e,t,l,r)}if(u=(l&e.childLanes)!==0,jn||u){if(r=Gt,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jo(e,o),Yr(r,e,o,-1))}return Mv(),r=e0(Error(Q(421))),hf(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=R8.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,or=Ii(o.nextSibling),ir=t,st=!0,Qr=null,e!==null&&(_r[Cr++]=Bo,_r[Cr++]=Uo,_r[Cr++]=Ta,Bo=e.id,Uo=e.overflow,Ta=t),t=Tv(t,r.children),t.flags|=4096,t)}function j2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),P0(e.return,t,n)}function t0(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function L5(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Tn(e,t,r.children,n),r=pt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&j2(e,n,t);else if(e.tag===19)j2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(pt,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&jf(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),t0(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jf(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}t0(t,!0,n,null,i);break;case"together":t0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _f(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Aa|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h8(e,t,n){switch(t.tag){case 3:A5(t),Kl();break;case 5:o5(t);break;case 1:Kn(t.type)&&Ff(t);break;case 4:xv(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ze(Hf,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(pt,pt.current&1),t.flags|=128,null):n&t.child.childLanes?O5(e,t,n):(Ze(pt,pt.current&1),e=Vo(e,t,n),e!==null?e.sibling:null);Ze(pt,pt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return L5(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ze(pt,pt.current),r)break;return null;case 22:case 23:return t.lanes=0,T5(e,t,n)}return Vo(e,t,n)}var P5,H0,M5,D5;P5=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};H0=function(){};M5=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,_a(mo.current);var i=null;switch(n){case"input":o=u0(e,o),r=u0(e,r),i=[];break;case"select":o=ft({},o,{value:void 0}),r=ft({},r,{value:void 0}),i=[];break;case"textarea":o=d0(e,o),r=d0(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Nf)}m0(n,r);var l;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var u=o[p];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ju.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var c=r[p];if(u=o?.[p],r.hasOwnProperty(p)&&c!==u&&(c!=null||u!=null))if(p==="style")if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(i=i||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ju.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&nt("scroll",e),i||u===c||(i=[])):(i=i||[]).push(p,c))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};D5=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tu(e,t){if(!st)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function g8(e,t,n){var r=t.pendingProps;switch(fv(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(t),null;case 1:return Kn(t.type)&&zf(),cn(t),null;case 3:return r=t.stateNode,Ql(),rt(Vn),rt(dn),kv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ff(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qr!==null&&($0(Qr),Qr=null))),H0(e,t),cn(t),null;case 5:wv(t);var o=_a(nc.current);if(n=t.type,e!==null&&t.stateNode!=null)M5(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return cn(t),null}if(e=_a(mo.current),ff(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[po]=t,r[ec]=i,e=(t.mode&1)!==0,n){case"dialog":nt("cancel",r),nt("close",r);break;case"iframe":case"object":case"embed":nt("load",r);break;case"video":case"audio":for(o=0;o<Mu.length;o++)nt(Mu[o],r);break;case"source":nt("error",r);break;case"img":case"image":case"link":nt("error",r),nt("load",r);break;case"details":nt("toggle",r);break;case"input":J_(r,i),nt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},nt("invalid",r);break;case"textarea":e2(r,i),nt("invalid",r)}m0(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&df(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&df(r.textContent,u,e),o=["children",""+u]):ju.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&nt("scroll",r)}switch(n){case"input":Zd(r),Z_(r,i,!0);break;case"textarea":Zd(r),t2(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Nf)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[po]=t,e[ec]=r,P5(e,t,!1,!1),t.stateNode=e;e:{switch(l=h0(n,r),n){case"dialog":nt("cancel",e),nt("close",e),o=r;break;case"iframe":case"object":case"embed":nt("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mu.length;o++)nt(Mu[o],e);o=r;break;case"source":nt("error",e),o=r;break;case"img":case"image":case"link":nt("error",e),nt("load",e),o=r;break;case"details":nt("toggle",e),o=r;break;case"input":J_(e,r),o=u0(e,r),nt("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ft({},r,{value:void 0}),nt("invalid",e);break;case"textarea":e2(e,r),o=d0(e,r),nt("invalid",e);break;default:o=r}m0(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var c=u[i];i==="style"?dC(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&cC(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vu(e,c):typeof c=="number"&&Vu(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ju.hasOwnProperty(i)?c!=null&&i==="onScroll"&&nt("scroll",e):c!=null&&J0(e,i,c,l))}switch(n){case"input":Zd(e),Z_(e,r,!1);break;case"textarea":Zd(e),t2(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mi(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Fl(e,!!r.multiple,i,!1):r.defaultValue!=null&&Fl(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Nf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cn(t),null;case 6:if(e&&t.stateNode!=null)D5(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=_a(nc.current),_a(mo.current),ff(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(i=r.nodeValue!==n)&&(e=ir,e!==null))switch(e.tag){case 3:df(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&df(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[po]=t,t.stateNode=r}return cn(t),null;case 13:if(rt(pt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(st&&or!==null&&t.mode&1&&!(t.flags&128))ZC(),Kl(),t.flags|=98560,i=!1;else if(i=ff(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(Q(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Q(317));i[po]=t}else Kl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;cn(t),i=!1}else Qr!==null&&($0(Qr),Qr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pt.current&1?Ft===0&&(Ft=3):Mv())),t.updateQueue!==null&&(t.flags|=4),cn(t),null);case 4:return Ql(),H0(e,t),e===null&&Ju(t.stateNode.containerInfo),cn(t),null;case 10:return bv(t.type._context),cn(t),null;case 17:return Kn(t.type)&&zf(),cn(t),null;case 19:if(rt(pt),i=t.memoizedState,i===null)return cn(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Tu(i,!1);else{if(Ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=jf(e),l!==null){for(t.flags|=128,Tu(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(pt,pt.current&1|2),t.child}e=e.sibling}i.tail!==null&&St()>Yl&&(t.flags|=128,r=!0,Tu(i,!1),t.lanes=4194304)}else{if(!r)if(e=jf(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tu(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!st)return cn(t),null}else 2*St()-i.renderingStartTime>Yl&&n!==1073741824&&(t.flags|=128,r=!0,Tu(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=St(),t.sibling=null,n=pt.current,Ze(pt,r?n&1|2:n&1),t):(cn(t),null);case 22:case 23:return Pv(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rr&1073741824&&(cn(t),t.subtreeFlags&6&&(t.flags|=8192)):cn(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function b8(e,t){switch(fv(t),t.tag){case 1:return Kn(t.type)&&zf(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ql(),rt(Vn),rt(dn),kv(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wv(t),null;case 13:if(rt(pt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(pt),null;case 4:return Ql(),null;case 10:return bv(t.type._context),null;case 22:case 23:return Pv(),null;case 24:return null;default:return null}}var gf=!1,pn=!1,v8=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Nl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ht(e,t,r)}else n.current=null}function W0(e,t,n){try{n()}catch(r){ht(e,t,r)}}var V2=!1;function y8(e,t){if(C0=Pf,e=UC(),pv(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,c=-1,p=0,f=0,m=e,g=null;t:for(;;){for(var b;m!==n||o!==0&&m.nodeType!==3||(u=l+o),m!==i||r!==0&&m.nodeType!==3||(c=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===e)break t;if(g===n&&++p===o&&(u=l),g===i&&++f===r&&(c=l),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(E0={focusedElem:e,selectionRange:n},Pf=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,C=v.memoizedState,y=t.stateNode,w=y.getSnapshotBeforeUpdate(t.elementType===t.type?k:Kr(t.type,k),C);y.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(T){ht(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return v=V2,V2=!1,v}function Hu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&W0(t,n,i)}o=o.next}while(o!==r)}}function am(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function q0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function N5(e){var t=e.alternate;t!==null&&(e.alternate=null,N5(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[po],delete t[ec],delete t[I0],delete t[t8],delete t[n8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function z5(e){return e.tag===5||e.tag===3||e.tag===4}function K2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||z5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function j0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nf));else if(r!==4&&(e=e.child,e!==null))for(j0(e,t,n),e=e.sibling;e!==null;)j0(e,t,n),e=e.sibling}function V0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(V0(e,t,n),e=e.sibling;e!==null;)V0(e,t,n),e=e.sibling}var Jt=null,Gr=!1;function yi(e,t,n){for(n=n.child;n!==null;)F5(e,t,n),n=n.sibling}function F5(e,t,n){if(fo&&typeof fo.onCommitFiberUnmount=="function")try{fo.onCommitFiberUnmount(Jf,n)}catch{}switch(n.tag){case 5:pn||Nl(n,t);case 6:var r=Jt,o=Gr;Jt=null,yi(e,t,n),Jt=r,Gr=o,Jt!==null&&(Gr?(e=Jt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(Gr?(e=Jt,n=n.stateNode,e.nodeType===8?Qb(e.parentNode,n):e.nodeType===1&&Qb(e,n),$u(e)):Qb(Jt,n.stateNode));break;case 4:r=Jt,o=Gr,Jt=n.stateNode.containerInfo,Gr=!0,yi(e,t,n),Jt=r,Gr=o;break;case 0:case 11:case 14:case 15:if(!pn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&W0(n,t,l),o=o.next}while(o!==r)}yi(e,t,n);break;case 1:if(!pn&&(Nl(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ht(n,t,u)}yi(e,t,n);break;case 21:yi(e,t,n);break;case 22:n.mode&1?(pn=(r=pn)||n.memoizedState!==null,yi(e,t,n),pn=r):yi(e,t,n);break;default:yi(e,t,n)}}function G2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v8),t.forEach(function(r){var o=T8.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Vr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Jt=u.stateNode,Gr=!1;break e;case 3:Jt=u.stateNode.containerInfo,Gr=!0;break e;case 4:Jt=u.stateNode.containerInfo,Gr=!0;break e}u=u.return}if(Jt===null)throw Error(Q(160));F5(i,l,o),Jt=null,Gr=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(p){ht(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B5(t,e),t=t.sibling}function B5(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vr(t,e),uo(e),r&4){try{Hu(3,e,e.return),am(3,e)}catch(k){ht(e,e.return,k)}try{Hu(5,e,e.return)}catch(k){ht(e,e.return,k)}}break;case 1:Vr(t,e),uo(e),r&512&&n!==null&&Nl(n,n.return);break;case 5:if(Vr(t,e),uo(e),r&512&&n!==null&&Nl(n,n.return),e.flags&32){var o=e.stateNode;try{Vu(o,"")}catch(k){ht(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&lC(o,i),h0(u,l);var p=h0(u,i);for(l=0;l<c.length;l+=2){var f=c[l],m=c[l+1];f==="style"?dC(o,m):f==="dangerouslySetInnerHTML"?cC(o,m):f==="children"?Vu(o,m):J0(o,f,m,p)}switch(u){case"input":c0(o,i);break;case"textarea":sC(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Fl(o,!!i.multiple,b,!1):g!==!!i.multiple&&(i.defaultValue!=null?Fl(o,!!i.multiple,i.defaultValue,!0):Fl(o,!!i.multiple,i.multiple?[]:"",!1))}o[ec]=i}catch(k){ht(e,e.return,k)}}break;case 6:if(Vr(t,e),uo(e),r&4){if(e.stateNode===null)throw Error(Q(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){ht(e,e.return,k)}}break;case 3:if(Vr(t,e),uo(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$u(t.containerInfo)}catch(k){ht(e,e.return,k)}break;case 4:Vr(t,e),uo(e);break;case 13:Vr(t,e),uo(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ov=St())),r&4&&G2(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(pn=(p=pn)||f,Vr(t,e),pn=p):Vr(t,e),uo(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!f&&e.mode&1)for(oe=e,f=e.child;f!==null;){for(m=oe=f;oe!==null;){switch(g=oe,b=g.child,g.tag){case 0:case 11:case 14:case 15:Hu(4,g,g.return);break;case 1:Nl(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){ht(r,n,k)}}break;case 5:Nl(g,g.return);break;case 22:if(g.memoizedState!==null){$2(m);continue}}b!==null?(b.return=g,oe=b):$2(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,p?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,c=m.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=pC("display",l))}catch(k){ht(e,e.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=p?"":m.memoizedProps}catch(k){ht(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Vr(t,e),uo(e),r&4&&G2(e);break;case 21:break;default:Vr(t,e),uo(e)}}function uo(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(z5(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vu(o,""),r.flags&=-33);var i=K2(e);V0(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=K2(e);j0(e,u,l);break;default:throw Error(Q(161))}}catch(c){ht(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x8(e,t,n){oe=e,U5(e,t,n)}function U5(e,t,n){for(var r=(e.mode&1)!==0;oe!==null;){var o=oe,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||gf;if(!l){var u=o.alternate,c=u!==null&&u.memoizedState!==null||pn;u=gf;var p=pn;if(gf=l,(pn=c)&&!p)for(oe=o;oe!==null;)l=oe,c=l.child,l.tag===22&&l.memoizedState!==null?Y2(o):c!==null?(c.return=l,oe=c):Y2(o);for(;i!==null;)oe=i,U5(i,t,n),i=i.sibling;oe=o,gf=u,pn=p}Q2(e,t,n)}else o.subtreeFlags&8772&&i!==null?(i.return=o,oe=i):Q2(e,t,n)}}function Q2(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pn||am(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pn)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Kr(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&L2(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}L2(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var f=p.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&$u(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}pn||t.flags&512&&q0(t)}catch(g){ht(t,t.return,g)}}if(t===e){oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,oe=n;break}oe=t.return}}function $2(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,oe=n;break}oe=t.return}}function Y2(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{am(4,t)}catch(c){ht(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ht(t,o,c)}}var i=t.return;try{q0(t)}catch(c){ht(t,i,c)}break;case 5:var l=t.return;try{q0(t)}catch(c){ht(t,l,c)}}}catch(c){ht(t,t.return,c)}if(t===e){oe=null;break}var u=t.sibling;if(u!==null){u.return=t.return,oe=u;break}oe=t.return}}var w8=Math.ceil,Gf=Ko.ReactCurrentDispatcher,Iv=Ko.ReactCurrentOwner,Rr=Ko.ReactCurrentBatchConfig,Ne=0,Gt=null,It=null,Zt=0,rr=0,zl=zi(0),Ft=0,ac=null,Aa=0,lm=0,Av=0,Wu=null,qn=null,Ov=0,Yl=1/0,zo=null,Qf=!1,K0=null,Oi=null,bf=!1,Ci=null,$f=0,qu=0,G0=null,Cf=-1,Ef=0;function In(){return Ne&6?St():Cf!==-1?Cf:Cf=St()}function Li(e){return e.mode&1?Ne&2&&Zt!==0?Zt&-Zt:o8.transition!==null?(Ef===0&&(Ef=_C()),Ef):(e=qe,e!==0||(e=window.event,e=e===void 0?16:OC(e.type)),e):1}function Yr(e,t,n,r){if(50<qu)throw qu=0,G0=null,Error(Q(185));lc(e,n,r),(!(Ne&2)||e!==Gt)&&(e===Gt&&(!(Ne&2)&&(lm|=n),Ft===4&&Si(e,Zt)),Gn(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Yl=St()+500,rm&&Fi()))}function Gn(e,t){var n=e.callbackNode;aF(e,t);var r=Lf(e,e===Gt?Zt:0);if(r===0)n!==null&&o2(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&o2(n),t===1)e.tag===0?r8(X2.bind(null,e)):YC(X2.bind(null,e)),ZF(function(){!(Ne&6)&&Fi()}),n=null;else{switch(CC(r)){case 1:n=rv;break;case 4:n=kC;break;case 16:n=Of;break;case 536870912:n=SC;break;default:n=Of}n=Q5(n,H5.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function H5(e,t){if(Cf=-1,Ef=0,Ne&6)throw Error(Q(327));var n=e.callbackNode;if(ql()&&e.callbackNode!==n)return null;var r=Lf(e,e===Gt?Zt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yf(e,r);else{t=r;var o=Ne;Ne|=2;var i=q5();(Gt!==e||Zt!==t)&&(zo=null,Yl=St()+500,Ca(e,t));do try{_8();break}catch(u){W5(e,u)}while(!0);gv(),Gf.current=i,Ne=o,It!==null?t=0:(Gt=null,Zt=0,t=Ft)}if(t!==0){if(t===2&&(o=x0(e),o!==0&&(r=o,t=Q0(e,o))),t===1)throw n=ac,Ca(e,0),Si(e,r),Gn(e,St()),n;if(t===6)Si(e,r);else{if(o=e.current.alternate,!(r&30)&&!k8(o)&&(t=Yf(e,r),t===2&&(i=x0(e),i!==0&&(r=i,t=Q0(e,i))),t===1))throw n=ac,Ca(e,0),Si(e,r),Gn(e,St()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:wa(e,qn,zo);break;case 3:if(Si(e,r),(r&130023424)===r&&(t=Ov+500-St(),10<t)){if(Lf(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){In(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=T0(wa.bind(null,e,qn,zo),t);break}wa(e,qn,zo);break;case 4:if(Si(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-$r(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=St()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w8(r/1960))-r,10<r){e.timeoutHandle=T0(wa.bind(null,e,qn,zo),r);break}wa(e,qn,zo);break;case 5:wa(e,qn,zo);break;default:throw Error(Q(329))}}}return Gn(e,St()),e.callbackNode===n?H5.bind(null,e):null}function Q0(e,t){var n=Wu;return e.current.memoizedState.isDehydrated&&(Ca(e,t).flags|=256),e=Yf(e,t),e!==2&&(t=qn,qn=n,t!==null&&$0(t)),e}function $0(e){qn===null?qn=e:qn.push.apply(qn,e)}function k8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Xr(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Si(e,t){for(t&=~Av,t&=~lm,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$r(t),r=1<<n;e[n]=-1,t&=~r}}function X2(e){if(Ne&6)throw Error(Q(327));ql();var t=Lf(e,0);if(!(t&1))return Gn(e,St()),null;var n=Yf(e,t);if(e.tag!==0&&n===2){var r=x0(e);r!==0&&(t=r,n=Q0(e,r))}if(n===1)throw n=ac,Ca(e,0),Si(e,t),Gn(e,St()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wa(e,qn,zo),Gn(e,St()),null}function Lv(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Yl=St()+500,rm&&Fi())}}function Oa(e){Ci!==null&&Ci.tag===0&&!(Ne&6)&&ql();var t=Ne;Ne|=1;var n=Rr.transition,r=qe;try{if(Rr.transition=null,qe=1,e)return e()}finally{qe=r,Rr.transition=n,Ne=t,!(Ne&6)&&Fi()}}function Pv(){rr=zl.current,rt(zl)}function Ca(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,JF(n)),It!==null)for(n=It.return;n!==null;){var r=n;switch(fv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zf();break;case 3:Ql(),rt(Vn),rt(dn),kv();break;case 5:wv(r);break;case 4:Ql();break;case 13:rt(pt);break;case 19:rt(pt);break;case 10:bv(r.type._context);break;case 22:case 23:Pv()}n=n.return}if(Gt=e,It=e=Pi(e.current,null),Zt=rr=t,Ft=0,ac=null,Av=lm=Aa=0,qn=Wu=null,Sa!==null){for(t=0;t<Sa.length;t++)if(n=Sa[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Sa=null}return e}function W5(e,t){do{var n=It;try{if(gv(),kf.current=Kf,Vf){for(var r=dt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vf=!1}if(Ia=0,Kt=zt=dt=null,Uu=!1,rc=0,Iv.current=null,n===null||n.return===null){Ft=1,ac=t,It=null;break}e:{var i=e,l=n.return,u=n,c=t;if(t=Zt,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,f=u,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=F2(l);if(b!==null){b.flags&=-257,B2(b,l,u,i,t),b.mode&1&&z2(i,p,t),t=b,c=p;var v=t.updateQueue;if(v===null){var k=new Set;k.add(c),t.updateQueue=k}else v.add(c);break e}else{if(!(t&1)){z2(i,p,t),Mv();break e}c=Error(Q(426))}}else if(st&&u.mode&1){var C=F2(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),B2(C,l,u,i,t),mv($l(c,u));break e}}i=c=$l(c,u),Ft!==4&&(Ft=2),Wu===null?Wu=[i]:Wu.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=C5(i,c,t);O2(i,y);break e;case 1:u=c;var w=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Oi===null||!Oi.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var T=E5(i,u,t);O2(i,T);break e}}i=i.return}while(i!==null)}V5(n)}catch(M){t=M,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function q5(){var e=Gf.current;return Gf.current=Kf,e===null?Kf:e}function Mv(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Gt===null||!(Aa&268435455)&&!(lm&268435455)||Si(Gt,Zt)}function Yf(e,t){var n=Ne;Ne|=2;var r=q5();(Gt!==e||Zt!==t)&&(zo=null,Ca(e,t));do try{S8();break}catch(o){W5(e,o)}while(!0);if(gv(),Ne=n,Gf.current=r,It!==null)throw Error(Q(261));return Gt=null,Zt=0,Ft}function S8(){for(;It!==null;)j5(It)}function _8(){for(;It!==null&&!Xz();)j5(It)}function j5(e){var t=G5(e.alternate,e,rr);e.memoizedProps=e.pendingProps,t===null?V5(e):It=t,Iv.current=null}function V5(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=b8(n,t),n!==null){n.flags&=32767,It=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ft=6,It=null;return}}else if(n=g8(n,t,rr),n!==null){It=n;return}if(t=t.sibling,t!==null){It=t;return}It=t=e}while(t!==null);Ft===0&&(Ft=5)}function wa(e,t,n){var r=qe,o=Rr.transition;try{Rr.transition=null,qe=1,C8(e,t,n,r)}finally{Rr.transition=o,qe=r}return null}function C8(e,t,n,r){do ql();while(Ci!==null);if(Ne&6)throw Error(Q(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lF(e,i),e===Gt&&(It=Gt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bf||(bf=!0,Q5(Of,function(){return ql(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Rr.transition,Rr.transition=null;var l=qe;qe=1;var u=Ne;Ne|=4,Iv.current=null,y8(e,n),B5(n,e),GF(E0),Pf=!!C0,E0=C0=null,e.current=n,x8(n,e,o),Jz(),Ne=u,qe=l,Rr.transition=i}else e.current=n;if(bf&&(bf=!1,Ci=e,$f=o),i=e.pendingLanes,i===0&&(Oi=null),tF(n.stateNode,r),Gn(e,St()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qf)throw Qf=!1,e=K0,K0=null,e;return $f&1&&e.tag!==0&&ql(),i=e.pendingLanes,i&1?e===G0?qu++:(qu=0,G0=e):qu=0,Fi(),null}function ql(){if(Ci!==null){var e=CC($f),t=Rr.transition,n=qe;try{if(Rr.transition=null,qe=16>e?16:e,Ci===null)var r=!1;else{if(e=Ci,Ci=null,$f=0,Ne&6)throw Error(Q(331));var o=Ne;for(Ne|=4,oe=e.current;oe!==null;){var i=oe,l=i.child;if(oe.flags&16){var u=i.deletions;if(u!==null){for(var c=0;c<u.length;c++){var p=u[c];for(oe=p;oe!==null;){var f=oe;switch(f.tag){case 0:case 11:case 15:Hu(8,f,i)}var m=f.child;if(m!==null)m.return=f,oe=m;else for(;oe!==null;){f=oe;var g=f.sibling,b=f.return;if(N5(f),f===p){oe=null;break}if(g!==null){g.return=b,oe=g;break}oe=b}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}oe=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,oe=l;else e:for(;oe!==null;){if(i=oe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hu(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,oe=y;break e}oe=i.return}}var w=e.current;for(oe=w;oe!==null;){l=oe;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,oe=S;else e:for(l=w;oe!==null;){if(u=oe,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:am(9,u)}}catch(M){ht(u,u.return,M)}if(u===l){oe=null;break e}var T=u.sibling;if(T!==null){T.return=u.return,oe=T;break e}oe=u.return}}if(Ne=o,Fi(),fo&&typeof fo.onPostCommitFiberRoot=="function")try{fo.onPostCommitFiberRoot(Jf,e)}catch{}r=!0}return r}finally{qe=n,Rr.transition=t}}return!1}function J2(e,t,n){t=$l(n,t),t=C5(e,t,1),e=Ai(e,t,1),t=In(),e!==null&&(lc(e,1,t),Gn(e,t))}function ht(e,t,n){if(e.tag===3)J2(e,e,n);else for(;t!==null;){if(t.tag===3){J2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oi===null||!Oi.has(r))){e=$l(n,e),e=E5(t,e,1),t=Ai(t,e,1),e=In(),t!==null&&(lc(t,1,e),Gn(t,e));break}}t=t.return}}function E8(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=In(),e.pingedLanes|=e.suspendedLanes&n,Gt===e&&(Zt&n)===n&&(Ft===4||Ft===3&&(Zt&130023424)===Zt&&500>St()-Ov?Ca(e,0):Av|=n),Gn(e,t)}function K5(e,t){t===0&&(e.mode&1?(t=nf,nf<<=1,!(nf&130023424)&&(nf=4194304)):t=1);var n=In();e=jo(e,t),e!==null&&(lc(e,t,n),Gn(e,n))}function R8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),K5(e,n)}function T8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),K5(e,n)}var G5;G5=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vn.current)jn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jn=!1,h8(e,t,n);jn=!!(e.flags&131072)}else jn=!1,st&&t.flags&1048576&&XC(t,Uf,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_f(e,t),e=t.pendingProps;var o=Vl(t,dn.current);Wl(t,n),o=_v(null,t,r,e,o,n);var i=Cv();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Kn(r)?(i=!0,Ff(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,yv(t),o.updater=im,t.stateNode=o,o._reactInternals=t,D0(t,r,e,n),t=F0(null,t,r,!0,i,n)):(t.tag=0,st&&i&&dv(t),Tn(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_f(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=A8(r),e=Kr(r,e),o){case 0:t=z0(null,t,r,e,n);break e;case 1:t=W2(null,t,r,e,n);break e;case 11:t=U2(null,t,r,e,n);break e;case 14:t=H2(null,t,r,Kr(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kr(r,o),z0(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kr(r,o),W2(e,t,r,o,n);case 3:e:{if(A5(t),e===null)throw Error(Q(387));r=t.pendingProps,i=t.memoizedState,o=i.element,r5(e,t),qf(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$l(Error(Q(423)),t),t=q2(e,t,r,n,o);break e}else if(r!==o){o=$l(Error(Q(424)),t),t=q2(e,t,r,n,o);break e}else for(or=Ii(t.stateNode.containerInfo.firstChild),ir=t,st=!0,Qr=null,n=t5(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kl(),r===o){t=Vo(e,t,n);break e}Tn(e,t,r,n)}t=t.child}return t;case 5:return o5(t),e===null&&L0(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,R0(r,o)?l=null:i!==null&&R0(r,i)&&(t.flags|=32),I5(e,t),Tn(e,t,l,n),t.child;case 6:return e===null&&L0(t),null;case 13:return O5(e,t,n);case 4:return xv(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gl(t,null,r,n):Tn(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kr(r,o),U2(e,t,r,o,n);case 7:return Tn(e,t,t.pendingProps,n),t.child;case 8:return Tn(e,t,t.pendingProps.children,n),t.child;case 12:return Tn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Ze(Hf,r._currentValue),r._currentValue=l,i!==null)if(Xr(i.value,l)){if(i.children===o.children&&!Vn.current){t=Vo(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ho(-1,n&-n),c.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var f=p.pending;f===null?c.next=c:(c.next=f.next,f.next=c),p.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),P0(i.return,n,t),u.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(Q(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),P0(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Tn(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Wl(t,n),o=Tr(o),r=r(o),t.flags|=1,Tn(e,t,r,n),t.child;case 14:return r=t.type,o=Kr(r,t.pendingProps),o=Kr(r.type,o),H2(e,t,r,o,n);case 15:return R5(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kr(r,o),_f(e,t),t.tag=1,Kn(r)?(e=!0,Ff(t)):e=!1,Wl(t,n),_5(t,r,o),D0(t,r,o,n),F0(null,t,r,!0,e,n);case 19:return L5(e,t,n);case 22:return T5(e,t,n)}throw Error(Q(156,t.tag))};function Q5(e,t){return wC(e,t)}function I8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Er(e,t,n,r){return new I8(e,t,n,r)}function Dv(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A8(e){if(typeof e=="function")return Dv(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ev)return 11;if(e===tv)return 14}return 2}function Pi(e,t){var n=e.alternate;return n===null?(n=Er(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rf(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Dv(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Rl:return Ea(n.children,o,i,t);case Z0:l=8,o|=8;break;case i0:return e=Er(12,n,t,o|2),e.elementType=i0,e.lanes=i,e;case a0:return e=Er(13,n,t,o),e.elementType=a0,e.lanes=i,e;case l0:return e=Er(19,n,t,o),e.elementType=l0,e.lanes=i,e;case oC:return sm(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nC:l=10;break e;case rC:l=9;break e;case ev:l=11;break e;case tv:l=14;break e;case xi:l=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=Er(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ea(e,t,n,r){return e=Er(7,e,r,t),e.lanes=n,e}function sm(e,t,n,r){return e=Er(22,e,r,t),e.elementType=oC,e.lanes=n,e.stateNode={isHidden:!1},e}function n0(e,t,n){return e=Er(6,e,null,t),e.lanes=n,e}function r0(e,t,n){return t=Er(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O8(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ub(0),this.expirationTimes=Ub(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ub(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nv(e,t,n,r,o,i,l,u,c){return e=new O8(e,t,n,u,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Er(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yv(i),e}function L8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:El,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $5(e){if(!e)return Di;e=e._reactInternals;e:{if(Pa(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Kn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(Kn(n))return $C(e,n,t)}return t}function Y5(e,t,n,r,o,i,l,u,c){return e=Nv(n,r,!0,e,o,i,l,u,c),e.context=$5(null),n=e.current,r=In(),o=Li(n),i=Ho(r,o),i.callback=t??null,Ai(n,i,o),e.current.lanes=o,lc(e,o,r),Gn(e,r),e}function um(e,t,n,r){var o=t.current,i=In(),l=Li(o);return n=$5(n),t.context===null?t.context=n:t.pendingContext=n,t=Ho(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ai(o,t,l),e!==null&&(Yr(e,o,l,i),wf(e,o,l)),l}function Xf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Z2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zv(e,t){Z2(e,t),(e=e.alternate)&&Z2(e,t)}function P8(){return null}var X5=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fv(e){this._internalRoot=e}cm.prototype.render=Fv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));um(e,t,null,null)};cm.prototype.unmount=Fv.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Oa(function(){um(null,e,null,null)}),t[qo]=null}};function cm(e){this._internalRoot=e}cm.prototype.unstable_scheduleHydration=function(e){if(e){var t=TC();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ki.length&&t!==0&&t<ki[n].priority;n++);ki.splice(n,0,e),n===0&&AC(e)}};function Bv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eC(){}function M8(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var p=Xf(l);i.call(p)}}var l=Y5(t,r,e,0,null,!1,!1,"",eC);return e._reactRootContainer=l,e[qo]=l.current,Ju(e.nodeType===8?e.parentNode:e),Oa(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var p=Xf(c);u.call(p)}}var c=Nv(e,0,!1,null,null,!1,!1,"",eC);return e._reactRootContainer=c,e[qo]=c.current,Ju(e.nodeType===8?e.parentNode:e),Oa(function(){um(t,c,n,r)}),c}function dm(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var c=Xf(l);u.call(c)}}um(t,l,e,o)}else l=M8(n,t,e,o,r);return Xf(l)}EC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pu(t.pendingLanes);n!==0&&(ov(t,n|1),Gn(t,St()),!(Ne&6)&&(Yl=St()+500,Fi()))}break;case 13:Oa(function(){var r=jo(e,1);if(r!==null){var o=In();Yr(r,e,1,o)}}),zv(e,1)}};iv=function(e){if(e.tag===13){var t=jo(e,134217728);if(t!==null){var n=In();Yr(t,e,134217728,n)}zv(e,134217728)}};RC=function(e){if(e.tag===13){var t=Li(e),n=jo(e,t);if(n!==null){var r=In();Yr(n,e,t,r)}zv(e,t)}};TC=function(){return qe};IC=function(e,t){var n=qe;try{return qe=e,t()}finally{qe=n}};b0=function(e,t,n){switch(t){case"input":if(c0(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nm(r);if(!o)throw Error(Q(90));aC(r),c0(r,o)}}}break;case"textarea":sC(e,n);break;case"select":t=n.value,t!=null&&Fl(e,!!n.multiple,t,!1)}};hC=Lv;gC=Oa;var D8={usingClientEntryPoint:!1,Events:[uc,Ol,nm,fC,mC,Lv]},Iu={findFiberByHostInstance:ka,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N8={bundleType:Iu.bundleType,version:Iu.version,rendererPackageName:Iu.rendererPackageName,rendererConfig:Iu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ko.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yC(e),e===null?null:e.stateNode},findFiberByHostInstance:Iu.findFiberByHostInstance||P8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Au=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Au.isDisabled&&Au.supportsFiber))try{Jf=Au.inject(N8),fo=Au}catch{}var Au;sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D8;sr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bv(t))throw Error(Q(200));return L8(e,t,null,n)};sr.createRoot=function(e,t){if(!Bv(e))throw Error(Q(299));var n=!1,r="",o=X5;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nv(e,1,!1,null,null,n,!1,r,o),e[qo]=t.current,Ju(e.nodeType===8?e.parentNode:e),new Fv(t)};sr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=yC(t),e=e===null?null:e.stateNode,e};sr.flushSync=function(e){return Oa(e)};sr.hydrate=function(e,t,n){if(!pm(t))throw Error(Q(200));return dm(null,e,t,!0,n)};sr.hydrateRoot=function(e,t,n){if(!Bv(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=X5;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Y5(t,null,e,1,n??null,o,!1,i,l),e[qo]=t.current,Ju(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cm(t)};sr.render=function(e,t,n){if(!pm(t))throw Error(Q(200));return dm(null,e,t,!1,n)};sr.unmountComponentAtNode=function(e){if(!pm(e))throw Error(Q(40));return e._reactRootContainer?(Oa(function(){dm(null,null,e,!1,function(){e._reactRootContainer=null,e[qo]=null})}),!0):!1};sr.unstable_batchedUpdates=Lv;sr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pm(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return dm(e,t,n,!1,r)};sr.version="18.3.1-next-f1338f8080-20240426"});var tE=me((WY,eE)=>{"use strict";function Z5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z5)}catch(e){console.error(e)}}Z5(),eE.exports=J5()});var rE=me(Uv=>{"use strict";var nE=tE();Uv.createRoot=nE.createRoot,Uv.hydrateRoot=nE.hydrateRoot;var qY});var SE=me(ym=>{"use strict";var j8=Ce(),V8=Symbol.for("react.element"),K8=Symbol.for("react.fragment"),G8=Object.prototype.hasOwnProperty,Q8=j8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$8={key:!0,ref:!0,__self:!0,__source:!0};function kE(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)G8.call(t,r)&&!$8.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:V8,type:e,key:i,ref:l,props:o,_owner:Q8.current}}ym.Fragment=K8;ym.jsx=kE;ym.jsxs=kE});var Ve=me((hJ,_E)=>{"use strict";_E.exports=SE()});var hR=me((TZ,mR)=>{"use strict";function GB(e){if(typeof e=="number")return e>>>0===e&&e>=0&&e<=4294967295?e:null;if(typeof e!="string")return null;let t=$B(),n;if(n=t.hex6.exec(e))return parseInt(n[1]+"ff",16)>>>0;let r=YB(e);return r??((n=t.rgb.exec(e))?(Yo(n[1])<<24|Yo(n[2])<<16|Yo(n[3])<<8|255)>>>0:(n=t.rgba.exec(e))?n[6]!==void 0?(Yo(n[6])<<24|Yo(n[7])<<16|Yo(n[8])<<8|Em(n[9]))>>>0:(Yo(n[2])<<24|Yo(n[3])<<16|Yo(n[4])<<8|Em(n[5]))>>>0:(n=t.hex3.exec(e))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0:(n=t.hex8.exec(e))?parseInt(n[1],16)>>>0:(n=t.hex4.exec(e))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0:(n=t.hsl.exec(e))?(uy(Cm(n[1]),ji(n[2]),ji(n[3]))|255)>>>0:(n=t.hsla.exec(e))?n[6]!==void 0?(uy(Cm(n[6]),ji(n[7]),ji(n[8]))|Em(n[9]))>>>0:(uy(Cm(n[2]),ji(n[3]),ji(n[4]))|Em(n[5]))>>>0:(n=t.hwb.exec(e))?(QB(Cm(n[1]),ji(n[2]),ji(n[3]))|255)>>>0:null)}function ss(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function uy(e,t,n){let r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=ss(o,r,e+1/3),l=ss(o,r,e),u=ss(o,r,e-1/3);return Math.round(i*255)<<24|Math.round(l*255)<<16|Math.round(u*255)<<8}function QB(e,t,n){if(t+n>=1){let l=Math.round(t*255/(t+n));return l<<24|l<<16|l<<8}let r=ss(0,1,e+1/3)*(1-t-n)+t,o=ss(0,1,e)*(1-t-n)+t,i=ss(0,1,e-1/3)*(1-t-n)+t;return Math.round(r*255)<<24|Math.round(o*255)<<16|Math.round(i*255)<<8}var Qt="[-+]?\\d*\\.?\\d+",qi=Qt+"%";function cy(...e){return"\\(\\s*("+e.join(")\\s*,?\\s*(")+")\\s*\\)"}function dR(...e){return"\\(\\s*("+e.slice(0,e.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+e[e.length-1]+")\\s*\\)"}function fR(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var py;function $B(){return py===void 0&&(py={rgb:new RegExp("rgb"+cy(Qt,Qt,Qt)),rgba:new RegExp("rgba("+fR(Qt,Qt,Qt,Qt)+"|"+dR(Qt,Qt,Qt,Qt)+")"),hsl:new RegExp("hsl"+cy(Qt,qi,qi)),hsla:new RegExp("hsla("+fR(Qt,qi,qi,Qt)+"|"+dR(Qt,qi,qi,Qt)+")"),hwb:new RegExp("hwb"+cy(Qt,qi,qi)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),py}function Yo(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function Cm(e){return(parseFloat(e)%360+360)%360/360}function Em(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function ji(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function YB(e){switch(e){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}mR.exports=GB});var hy=me(my=>{"use strict";Object.defineProperty(my,"__esModule",{value:!0});my.default=d9;function d9(e){return e.charAt(0).toUpperCase()+e.slice(1)}});var wR=me(gy=>{"use strict";Object.defineProperty(gy,"__esModule",{value:!0});gy.default=g9;var f9=hy(),m9=h9(f9);function h9(e){return e&&e.__esModule?e:{default:e}}function g9(e,t,n){var r=e[t];if(r&&n.hasOwnProperty(t))for(var o=(0,m9.default)(t),i=0;i<r.length;++i){var l=r[i]+o;n[l]||(n[l]=n[t])}return n}});var kR=me(by=>{"use strict";Object.defineProperty(by,"__esModule",{value:!0});by.default=b9;function b9(e,t,n,r,o){for(var i=0,l=e.length;i<l;++i){var u=e[i](t,n,r,o);if(u)return u}}});var _R=me(vy=>{"use strict";Object.defineProperty(vy,"__esModule",{value:!0});vy.default=v9;function SR(e,t){e.indexOf(t)===-1&&e.push(t)}function v9(e,t){if(Array.isArray(t))for(var n=0,r=t.length;n<r;++n)SR(e,t[n]);else SR(e,t)}});var CR=me(yy=>{"use strict";Object.defineProperty(yy,"__esModule",{value:!0});yy.default=y9;function y9(e){return e instanceof Object&&!Array.isArray(e)}});var RR=me(xy=>{"use strict";Object.defineProperty(xy,"__esModule",{value:!0});xy.default=R9;var x9=wR(),w9=Tm(x9),k9=kR(),ER=Tm(k9),S9=_R(),_9=Tm(S9),C9=CR(),E9=Tm(C9);function Tm(e){return e&&e.__esModule?e:{default:e}}function R9(e){var t=e.prefixMap,n=e.plugins;return function r(o){for(var i in o){var l=o[i];if((0,E9.default)(l))o[i]=r(l);else if(Array.isArray(l)){for(var u=[],c=0,p=l.length;c<p;++c){var f=(0,ER.default)(n,i,l[c],o,t);(0,_9.default)(u,f||l[c])}u.length>0&&(o[i]=u)}else{var m=(0,ER.default)(n,i,l,o,t);m&&(o[i]=m),o=(0,w9.default)(t,i,o)}}return o}}});var TR=me(wy=>{"use strict";Object.defineProperty(wy,"__esModule",{value:!0});wy.default=T9;function T9(){return null}});var OR=me(Sy=>{"use strict";Object.defineProperty(Sy,"__esModule",{value:!0});Sy.default=AR;function Im(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Im=function(n){return typeof n}:Im=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Im(e)}function I9(e){return P9(e)||L9(e)||O9(e)||A9()}function A9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O9(e,t){if(e){if(typeof e=="string")return ky(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ky(e,t)}}function L9(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function P9(e){if(Array.isArray(e))return ky(e)}function ky(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function IR(e){return e.filter(function(t,n){return e.lastIndexOf(t)===n})}function AR(e){for(var t=0,n=arguments.length<=1?0:arguments.length-1;t<n;++t){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];for(var o in r){var i=r[o],l=e[o];if(l&&i){if(Array.isArray(l)){e[o]=IR(l.concat(i));continue}if(Array.isArray(i)){e[o]=IR([l].concat(I9(i)));continue}if(Im(i)==="object"){e[o]=AR({},l,i);continue}}e[o]=i}}return e}});var Ey=me(Cy=>{"use strict";Object.defineProperty(Cy,"__esModule",{value:!0});Cy.default=z9;var M9=/-([a-z])/g,D9=/^Ms/g,_y={};function N9(e){return e[1].toUpperCase()}function z9(e){if(_y.hasOwnProperty(e))return _y[e];var t=e.replace(M9,N9).replace(D9,"ms");return _y[e]=t,t}});var PR=me((XZ,LR)=>{"use strict";var F9=/[A-Z]/g,B9=/^ms-/,Ry={};function U9(e){return"-"+e.toLowerCase()}function H9(e){if(Ry.hasOwnProperty(e))return Ry[e];var t=e.replace(F9,U9);return Ry[e]=B9.test(t)?"-"+t:t}LR.exports=H9});var us=me(Ty=>{"use strict";Object.defineProperty(Ty,"__esModule",{value:!0});Ty.default=V9;var W9=PR(),q9=j9(W9);function j9(e){return e&&e.__esModule?e:{default:e}}function V9(e){return(0,q9.default)(e)}});var Ay=me(Iy=>{"use strict";Object.defineProperty(Iy,"__esModule",{value:!0});Iy.default=$9;var K9=us(),G9=Q9(K9);function Q9(e){return e&&e.__esModule?e:{default:e}}function $9(e,t){return(0,G9.default)(e)+":"+t}});var MR=me(Oy=>{"use strict";Object.defineProperty(Oy,"__esModule",{value:!0});Oy.default=Z9;var Y9=Ay(),X9=J9(Y9);function J9(e){return e&&e.__esModule?e:{default:e}}function Z9(e){var t="";for(var n in e){var r=e[n];typeof r!="string"&&typeof r!="number"||(t&&(t+=";"),t+=(0,X9.default)(n,r))}return t}});var DR=me(Ly=>{"use strict";Object.defineProperty(Ly,"__esModule",{value:!0});Ly.default=tU;var eU=/^(Webkit|Moz|O|ms)/;function tU(e){return eU.test(e)}});var Am=me(Py=>{"use strict";Object.defineProperty(Py,"__esModule",{value:!0});Py.default=rU;var nU=/-webkit-|-moz-|-ms-/;function rU(e){return typeof e=="string"&&nU.test(e)}});var HR=me(Dy=>{"use strict";Object.defineProperty(Dy,"__esModule",{value:!0});Dy.default=sU;var oU=us(),iU=aU(oU);function aU(e){return e&&e.__esModule?e:{default:e}}var yc={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NR=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],zR=["Webkit","ms","Moz","O"];function lU(e,t){return e+t.charAt(0).toUpperCase()+t.slice(1)}for(Om=0,FR=NR.length;Om<FR;++Om)for(My=NR[Om],yc[My]=!0,Lm=0,BR=zR.length;Lm<BR;++Lm)yc[lU(zR[Lm],My)]=!0;var My,Lm,BR,Om,FR;for(UR in yc)yc[(0,iU.default)(UR)]=!0;var UR;function sU(e){return yc.hasOwnProperty(e)}});var zy=me(Ny=>{"use strict";Object.defineProperty(Ny,"__esModule",{value:!0});Ny.default=cU;var uU=/^(ms|Webkit|Moz|O)/;function cU(e){var t=e.replace(uU,"");return t.charAt(0).toLowerCase()+t.slice(1)}});var qR=me(Fy=>{"use strict";Object.defineProperty(Fy,"__esModule",{value:!0});Fy.default=hU;var pU=Ey(),dU=WR(pU),fU=zy(),mU=WR(fU);function WR(e){return e&&e.__esModule?e:{default:e}}function hU(e){return(0,mU.default)((0,dU.default)(e))}});var jR=me(By=>{"use strict";Object.defineProperty(By,"__esModule",{value:!0});By.default=yU;var gU=us(),bU=vU(gU);function vU(e){return e&&e.__esModule?e:{default:e}}function yU(e,t){return t.join(";"+(0,bU.default)(e)+":")}});var VR=me(Uy=>{"use strict";Object.defineProperty(Uy,"__esModule",{value:!0});Uy.default=wU;var xU=/(-ms-|-webkit-|-moz-|-o-)/g;function wU(e){return typeof e=="string"?e.replace(xU,""):e}});var Hy=me(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});et.unprefixValue=et.unprefixProperty=et.resolveArrayValue=et.normalizeProperty=et.isUnitlessProperty=et.isPrefixedValue=et.isPrefixedProperty=et.hyphenateProperty=et.cssifyObject=et.cssifyDeclaration=et.camelCaseProperty=et.assignStyle=void 0;var kU=OR(),SU=Or(kU),_U=Ey(),CU=Or(_U),EU=Ay(),RU=Or(EU),TU=MR(),IU=Or(TU),AU=us(),OU=Or(AU),LU=DR(),PU=Or(LU),MU=Am(),DU=Or(MU),NU=HR(),zU=Or(NU),FU=qR(),BU=Or(FU),UU=jR(),HU=Or(UU),WU=zy(),qU=Or(WU),jU=VR(),VU=Or(jU);function Or(e){return e&&e.__esModule?e:{default:e}}et.assignStyle=SU.default;et.camelCaseProperty=CU.default;et.cssifyDeclaration=RU.default;et.cssifyObject=IU.default;et.hyphenateProperty=OU.default;et.isPrefixedProperty=PU.default;et.isPrefixedValue=DU.default;et.isUnitlessProperty=zU.default;et.normalizeProperty=BU.default;et.resolveArrayValue=HU.default;et.unprefixProperty=qU.default;et.unprefixValue=VU.default});var KR=me(Wy=>{"use strict";Object.defineProperty(Wy,"__esModule",{value:!0});Wy.default=$U;var KU=Hy(),GU=/cross-fade\(/g,QU=["-webkit-",""];function $U(e,t){if(typeof t=="string"&&!(0,KU.isPrefixedValue)(t)&&t.indexOf("cross-fade(")!==-1)return QU.map(function(n){return t.replace(GU,n+"cross-fade(")})}});var GR=me(qy=>{"use strict";Object.defineProperty(qy,"__esModule",{value:!0});qy.default=JU;var YU=["-webkit-","-moz-",""],XU={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function JU(e,t){if(e==="cursor"&&XU.hasOwnProperty(t))return YU.map(function(n){return n+t})}});var QR=me(jy=>{"use strict";Object.defineProperty(jy,"__esModule",{value:!0});jy.default=nH;var ZU=Hy(),eH=/filter\(/g,tH=["-webkit-",""];function nH(e,t){if(typeof t=="string"&&!(0,ZU.isPrefixedValue)(t)&&t.indexOf("filter(")!==-1)return tH.map(function(n){return t.replace(eH,n+"filter(")})}});var $R=me(Vy=>{"use strict";Object.defineProperty(Vy,"__esModule",{value:!0});Vy.default=lH;var rH=Am(),oH=iH(rH);function iH(e){return e&&e.__esModule?e:{default:e}}var aH=["-webkit-",""];function lH(e,t){if(typeof t=="string"&&!(0,oH.default)(t)&&t.indexOf("image-set(")>-1)return aH.map(function(n){return t.replace(/image-set\(/g,n+"image-set(")})}});var XR=me(Ky=>{"use strict";Object.defineProperty(Ky,"__esModule",{value:!0});Ky.default=sH;var YR={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function sH(e,t,n){if(Object.prototype.hasOwnProperty.call(YR,e))for(var r=YR[e],o=0,i=r.length;o<i;++o)n[r[o]]=t}});var JR=me(Gy=>{"use strict";Object.defineProperty(Gy,"__esModule",{value:!0});Gy.default=uH;function uH(e,t){if(e==="position"&&t==="sticky")return["-webkit-sticky","sticky"]}});var ZR=me(Qy=>{"use strict";Object.defineProperty(Qy,"__esModule",{value:!0});Qy.default=fH;var cH=["-webkit-","-moz-",""],pH={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},dH={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function fH(e,t){if(pH.hasOwnProperty(e)&&dH.hasOwnProperty(t))return cH.map(function(n){return n+t})}});var tT=me(Yy=>{"use strict";Object.defineProperty(Yy,"__esModule",{value:!0});Yy.default=kH;var mH=us(),hH=$y(mH),gH=Am(),bH=$y(gH),vH=hy(),eT=$y(vH);function $y(e){return e&&e.__esModule?e:{default:e}}var yH={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},xH={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function wH(e,t){if((0,bH.default)(e))return e;for(var n=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g),r=0,o=n.length;r<o;++r){var i=n[r],l=[i];for(var u in t){var c=(0,hH.default)(u);if(i.indexOf(c)>-1&&c!=="order")for(var p=t[u],f=0,m=p.length;f<m;++f)l.unshift(i.replace(c,xH[p[f]]+c))}n[r]=l.join(",")}return n.join(",")}function kH(e,t,n,r){if(typeof t=="string"&&yH.hasOwnProperty(e)){var o=wH(t,r),i=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(u){return!/-moz-|-ms-/.test(u)}).join(",");if(e.indexOf("Webkit")>-1)return i;var l=o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(u){return!/-webkit-|-ms-/.test(u)}).join(",");return e.indexOf("Moz")>-1?l:(n["Webkit"+(0,eT.default)(e)]=i,n["Moz"+(0,eT.default)(e)]=l,o)}}});var ET=me(hx=>{"use strict";Object.defineProperty(hx,"__esModule",{value:!0});hx.localizeStyle=WH;var Mm=new WeakMap,CT="$$css$localize";function _T(e,t){var n={};for(var r in e)if(r!==CT){var o=e[r];Array.isArray(o)?n[r]=t?o[1]:o[0]:n[r]=o}return n}function WH(e,t){if(e[CT]!=null){var n=t?1:0;if(Mm.has(e)){var r=Mm.get(e),o=r[n];return o==null&&(o=_T(e,t),r[n]=o,Mm.set(e,r)),o}var i=_T(e,t),l=new Array(2);return l[n]=i,Mm.set(e,l),i}return e}});var TT=me((Nee,RT)=>{RT.exports=ET()});var LT=me(Dm=>{"use strict";Object.defineProperty(Dm,"__esModule",{value:!0});Dm.styleq=void 0;var YH=new WeakMap,XH="$$css";function AT(e){var t,n,r;return e!=null&&(t=e.disableCache===!0,n=e.disableMix===!0,r=e.transform),function(){for(var i=[],l="",u=null,c=t?null:YH,p=new Array(arguments.length),f=0;f<arguments.length;f++)p[f]=arguments[f];for(;p.length>0;){var m=p.pop();if(!(m==null||m===!1)){if(Array.isArray(m)){for(var g=0;g<m.length;g++)p.push(m[g]);continue}var b=r!=null?r(m):m;if(b.$$css){var v="";if(c!=null&&c.has(b)){var k=c.get(b);k!=null&&(v=k[0],i.push.apply(i,k[1]),c=k[2])}else{var C=[];for(var y in b){var w=b[y];y!==XH&&(typeof w=="string"||w===null?i.includes(y)||(i.push(y),c!=null&&C.push(y),typeof w=="string"&&(v+=v?" "+w:w)):console.error("styleq: ".concat(y," typeof ").concat(String(w),' is not "string" or "null".')))}if(c!=null){var S=new WeakMap;c.set(b,[v,C,S]),c=S}}v&&(l=l?v+" "+l:v)}else if(n)u==null&&(u={}),u=Object.assign({},b,u);else{var T=null;for(var M in b){var R=b[M];R!==void 0&&(i.includes(M)||(R!=null&&(u==null&&(u={}),T==null&&(T={}),T[M]=R),i.push(M),c=null))}T!=null&&(u=Object.assign(T,u))}}}var z=[l,u];return z}}var OT=AT();Dm.styleq=OT;OT.factory=AT});var Pr=me((ine,P4)=>{"use strict";var hq=function(e){};function gq(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(hq(t),!e){var i;if(t===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=0;i=new Error(t.replace(/%s/g,function(){return String(r[l++])})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}P4.exports=gq});var V4=me((Ene,j4)=>{"use strict";function Gm(e){return function(){return e}}var za=function(){};za.thatReturns=Gm;za.thatReturnsFalse=Gm(!1);za.thatReturnsTrue=Gm(!0);za.thatReturnsNull=Gm(null);za.thatReturnsThis=function(){return this};za.thatReturnsArgument=function(e){return e};j4.exports=za});var G4=me((Rne,K4)=>{"use strict";var _q=V4(),Cq=_q;K4.exports=Cq});var hI=me((xre,ah)=>{"use strict";function mI(e,t){if(e!=null)return e;var n=new Error(t!==void 0?t:"Got unexpected "+e);throw n.framesToPop=1,n}ah.exports=mI;ah.exports.default=mI;Object.defineProperty(ah.exports,"__esModule",{value:!0})});var qI=me((lie,WI)=>{var FI=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,yj=/\n/g,xj=/^\s*/,wj=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,kj=/^:\s*/,Sj=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,_j=/^[;\s]*/,Cj=/^\s+|\s+$/g,Ej=`
`,BI="/",UI="*",Wa="",Rj="comment",Tj="declaration";WI.exports=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function o(k){var C=k.match(yj);C&&(n+=C.length);var y=k.lastIndexOf(Ej);r=~y?k.length-y:r+k.length}function i(){var k={line:n,column:r};return function(C){return C.position=new l(k),f(),C}}function l(k){this.start=k,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;var u=[];function c(k){var C=new Error(t.source+":"+n+":"+r+": "+k);if(C.reason=k,C.filename=t.source,C.line=n,C.column=r,C.source=e,t.silent)u.push(C);else throw C}function p(k){var C=k.exec(e);if(C){var y=C[0];return o(y),e=e.slice(y.length),C}}function f(){p(xj)}function m(k){var C;for(k=k||[];C=g();)C!==!1&&k.push(C);return k}function g(){var k=i();if(!(BI!=e.charAt(0)||UI!=e.charAt(1))){for(var C=2;Wa!=e.charAt(C)&&(UI!=e.charAt(C)||BI!=e.charAt(C+1));)++C;if(C+=2,Wa===e.charAt(C-1))return c("End of comment missing");var y=e.slice(2,C-2);return r+=2,o(y),e=e.slice(C),r+=2,k({type:Rj,comment:y})}}function b(){var k=i(),C=p(wj);if(C){if(g(),!p(kj))return c("property missing ':'");var y=p(Sj),w=k({type:Tj,property:HI(C[0].replace(FI,Wa)),value:y?HI(y[0].replace(FI,Wa)):Wa});return p(_j),w}}function v(){var k=[];m(k);for(var C;C=b();)C!==!1&&(k.push(C),m(k));return k}return f(),v()};function HI(e){return e?e.replace(Cj,Wa):Wa}});var jI=me(Uc=>{"use strict";var Ij=Uc&&Uc.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uc,"__esModule",{value:!0});Uc.default=Oj;var Aj=Ij(qI());function Oj(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Aj.default)(e),o=typeof t=="function";return r.forEach(function(i){if(i.type==="declaration"){var l=i.property,u=i.value;o?t(l,u,i):u&&(n=n||{},n[l]=u)}}),n}});var uO=me((Hce,sO)=>{"use strict";var Bh=Object.prototype.hasOwnProperty,lO=Object.prototype.toString,tO=Object.defineProperty,nO=Object.getOwnPropertyDescriptor,rO=function(t){return typeof Array.isArray=="function"?Array.isArray(t):lO.call(t)==="[object Array]"},oO=function(t){if(!t||lO.call(t)!=="[object Object]")return!1;var n=Bh.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Bh.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var o;for(o in t);return typeof o>"u"||Bh.call(t,o)},iO=function(t,n){tO&&n.name==="__proto__"?tO(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},aO=function(t,n){if(n==="__proto__")if(Bh.call(t,n)){if(nO)return nO(t,n).value}else return;return t[n]};sO.exports=function e(){var t,n,r,o,i,l,u=arguments[0],c=1,p=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},c=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});c<p;++c)if(t=arguments[c],t!=null)for(n in t)r=aO(u,n),o=aO(t,n),u!==o&&(f&&o&&(oO(o)||(i=rO(o)))?(i?(i=!1,l=r&&rO(r)?r:[]):l=r&&oO(r)?r:{},iO(u,{name:n,newValue:e(f,l,o)})):typeof o<"u"&&iO(u,{name:n,newValue:o}));return u}});var AL=me((Rs,lp)=>{(function(){var e,t="4.17.21",n=200,r="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",i="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",u=500,c="__lodash_placeholder__",p=1,f=2,m=4,g=1,b=2,v=1,k=2,C=4,y=8,w=16,S=32,T=64,M=128,R=256,z=512,U=30,Y="...",P=800,ae=16,J=1,$=2,re=3,te=1/0,he=9007199254740991,Le=17976931348623157e292,De=NaN,Pe=4294967295,A=Pe-1,Ue=Pe>>>1,nn=[["ary",M],["bind",v],["bindKey",k],["curry",y],["curryRight",w],["flip",z],["partial",S],["partialRight",T],["rearg",R]],O="[object Arguments]",it="[object Array]",Mn="[object AsyncFunction]",Dn="[object Boolean]",wn="[object Date]",tt="[object DOMException]",kn="[object Error]",Lt="[object Function]",Sn="[object GeneratorFunction]",at="[object Map]",Nn="[object Number]",ai="[object Null]",Yt="[object Object]",zr="[object Promise]",Co="[object Proxy]",dr="[object RegExp]",Pt="[object Set]",zn="[object String]",Fr="[object Symbol]",li="[object Undefined]",fr="[object WeakMap]",Eo="[object WeakSet]",mr="[object ArrayBuffer]",H="[object DataView]",X="[object Float32Array]",ue="[object Float64Array]",xe="[object Int8Array]",Ae="[object Int16Array]",Tt="[object Int32Array]",Ht="[object Uint8Array]",Mt="[object Uint8ClampedArray]",rn="[object Uint16Array]",Wt="[object Uint32Array]",qt=/\b__p \+= '';/g,on=/\b(__p \+=) '' \+/g,Fn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ns=/&(?:amp|lt|gt|quot|#39);/g,zs=/[&<>"']/g,yp=RegExp(Ns.source),xp=RegExp(zs.source),wp=/<%-([\s\S]+?)%>/g,kp=/<%([\s\S]+?)%>/g,Fs=/<%=([\s\S]+?)%>/g,Sp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_p=/^\w*$/,Cp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nl=/[\\^$.*+?()[\]{}|]/g,Ep=RegExp(nl.source),rl=/^\s+/,Rp=/\s/,Tp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ip=/\{\n\/\* \[wrapped with (.+)\] \*/,Ap=/,? & /,Op=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Lp=/[()=,{}\[\]\/\s]/,Pp=/\\(\\)?/g,Mp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ia=/\w*$/,aa=/^[-+]0x[0-9a-f]+$/i,Dp=/^0b[01]+$/i,Np=/^\[object .+?Constructor\]$/,Bs=/^0o[0-7]+$/i,fg=/^(?:0|[1-9]\d*)$/,la=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,ie=/['\n\r\u2028\u2029\\]/g,ol="\\ud800-\\udfff",Br="\\u0300-\\u036f",zp="\\ufe20-\\ufe2f",Fp="\\u20d0-\\u20ff",Us=Br+zp+Fp,Hs="\\u2700-\\u27bf",Ws="a-z\\xdf-\\xf6\\xf8-\\xff",Bp="\\xac\\xb1\\xd7\\xf7",Up="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Hp="\\u2000-\\u206f",Wp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qs="A-Z\\xc0-\\xd6\\xd8-\\xde",js="\\ufe0e\\ufe0f",Vs=Bp+Up+Hp+Wp,il="['\u2019]",qp="["+ol+"]",Ks="["+Vs+"]",ua="["+Us+"]",Gs="\\d+",jp="["+Hs+"]",Qs="["+Ws+"]",$s="[^"+ol+Vs+Gs+Hs+Ws+qs+"]",al="\\ud83c[\\udffb-\\udfff]",Vp="(?:"+ua+"|"+al+")",ll="[^"+ol+"]",sl="(?:\\ud83c[\\udde6-\\uddff]){2}",ul="[\\ud800-\\udbff][\\udc00-\\udfff]",Ro="["+qs+"]",Ys="\\u200d",Xs="(?:"+Qs+"|"+$s+")",Kp="(?:"+Ro+"|"+$s+")",Js="(?:"+il+"(?:d|ll|m|re|s|t|ve))?",Zs="(?:"+il+"(?:D|LL|M|RE|S|T|VE))?",eu=Vp+"?",tu="["+js+"]?",Gp="(?:"+Ys+"(?:"+[ll,sl,ul].join("|")+")"+tu+eu+")*",Qp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$p="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nu=tu+eu+Gp,Yp="(?:"+[jp,sl,ul].join("|")+")"+nu,Xp="(?:"+[ll+ua+"?",ua,sl,ul,qp].join("|")+")",Jp=RegExp(il,"g"),Zp=RegExp(ua,"g"),cl=RegExp(al+"(?="+al+")|"+Xp+nu,"g"),ed=RegExp([Ro+"?"+Qs+"+"+Js+"(?="+[Ks,Ro,"$"].join("|")+")",Kp+"+"+Zs+"(?="+[Ks,Ro+Xs,"$"].join("|")+")",Ro+"?"+Xs+"+"+Js,Ro+"+"+Zs,$p,Qp,Gs,Yp].join("|"),"g"),td=RegExp("["+Ys+ol+Us+js+"]"),ru=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,mg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nd=-1,Ge={};Ge[X]=Ge[ue]=Ge[xe]=Ge[Ae]=Ge[Tt]=Ge[Ht]=Ge[Mt]=Ge[rn]=Ge[Wt]=!0,Ge[O]=Ge[it]=Ge[mr]=Ge[Dn]=Ge[H]=Ge[wn]=Ge[kn]=Ge[Lt]=Ge[at]=Ge[Nn]=Ge[Yt]=Ge[dr]=Ge[Pt]=Ge[zn]=Ge[fr]=!1;var He={};He[O]=He[it]=He[mr]=He[H]=He[Dn]=He[wn]=He[X]=He[ue]=He[xe]=He[Ae]=He[Tt]=He[at]=He[Nn]=He[Yt]=He[dr]=He[Pt]=He[zn]=He[Fr]=He[Ht]=He[Mt]=He[rn]=He[Wt]=!0,He[kn]=He[Lt]=He[fr]=!1;var rd={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},od={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},L6={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},P6={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},M6=parseFloat,D6=parseInt,bk=typeof global=="object"&&global&&global.Object===Object&&global,N6=typeof self=="object"&&self&&self.Object===Object&&self,jt=bk||N6||Function("return this")(),hg=typeof Rs=="object"&&Rs&&!Rs.nodeType&&Rs,ca=hg&&typeof lp=="object"&&lp&&!lp.nodeType&&lp,vk=ca&&ca.exports===hg,gg=vk&&bk.process,hr=function(){try{var D=ca&&ca.require&&ca.require("util").types;return D||gg&&gg.binding&&gg.binding("util")}catch{}}(),yk=hr&&hr.isArrayBuffer,xk=hr&&hr.isDate,wk=hr&&hr.isMap,kk=hr&&hr.isRegExp,Sk=hr&&hr.isSet,_k=hr&&hr.isTypedArray;function Xn(D,W,B){switch(B.length){case 0:return D.call(W);case 1:return D.call(W,B[0]);case 2:return D.call(W,B[0],B[1]);case 3:return D.call(W,B[0],B[1],B[2])}return D.apply(W,B)}function z6(D,W,B,ne){for(var ve=-1,Fe=D==null?0:D.length;++ve<Fe;){var Dt=D[ve];W(ne,Dt,B(Dt),D)}return ne}function gr(D,W){for(var B=-1,ne=D==null?0:D.length;++B<ne&&W(D[B],B,D)!==!1;);return D}function F6(D,W){for(var B=D==null?0:D.length;B--&&W(D[B],B,D)!==!1;);return D}function Ck(D,W){for(var B=-1,ne=D==null?0:D.length;++B<ne;)if(!W(D[B],B,D))return!1;return!0}function si(D,W){for(var B=-1,ne=D==null?0:D.length,ve=0,Fe=[];++B<ne;){var Dt=D[B];W(Dt,B,D)&&(Fe[ve++]=Dt)}return Fe}function id(D,W){var B=D==null?0:D.length;return!!B&&pl(D,W,0)>-1}function bg(D,W,B){for(var ne=-1,ve=D==null?0:D.length;++ne<ve;)if(B(W,D[ne]))return!0;return!1}function lt(D,W){for(var B=-1,ne=D==null?0:D.length,ve=Array(ne);++B<ne;)ve[B]=W(D[B],B,D);return ve}function ui(D,W){for(var B=-1,ne=W.length,ve=D.length;++B<ne;)D[ve+B]=W[B];return D}function vg(D,W,B,ne){var ve=-1,Fe=D==null?0:D.length;for(ne&&Fe&&(B=D[++ve]);++ve<Fe;)B=W(B,D[ve],ve,D);return B}function B6(D,W,B,ne){var ve=D==null?0:D.length;for(ne&&ve&&(B=D[--ve]);ve--;)B=W(B,D[ve],ve,D);return B}function yg(D,W){for(var B=-1,ne=D==null?0:D.length;++B<ne;)if(W(D[B],B,D))return!0;return!1}var U6=xg("length");function H6(D){return D.split("")}function W6(D){return D.match(Op)||[]}function Ek(D,W,B){var ne;return B(D,function(ve,Fe,Dt){if(W(ve,Fe,Dt))return ne=Fe,!1}),ne}function ad(D,W,B,ne){for(var ve=D.length,Fe=B+(ne?1:-1);ne?Fe--:++Fe<ve;)if(W(D[Fe],Fe,D))return Fe;return-1}function pl(D,W,B){return W===W?eP(D,W,B):ad(D,Rk,B)}function q6(D,W,B,ne){for(var ve=B-1,Fe=D.length;++ve<Fe;)if(ne(D[ve],W))return ve;return-1}function Rk(D){return D!==D}function Tk(D,W){var B=D==null?0:D.length;return B?kg(D,W)/B:De}function xg(D){return function(W){return W==null?e:W[D]}}function wg(D){return function(W){return D==null?e:D[W]}}function Ik(D,W,B,ne,ve){return ve(D,function(Fe,Dt,$e){B=ne?(ne=!1,Fe):W(B,Fe,Dt,$e)}),B}function j6(D,W){var B=D.length;for(D.sort(W);B--;)D[B]=D[B].value;return D}function kg(D,W){for(var B,ne=-1,ve=D.length;++ne<ve;){var Fe=W(D[ne]);Fe!==e&&(B=B===e?Fe:B+Fe)}return B}function Sg(D,W){for(var B=-1,ne=Array(D);++B<D;)ne[B]=W(B);return ne}function V6(D,W){return lt(W,function(B){return[B,D[B]]})}function Ak(D){return D&&D.slice(0,Mk(D)+1).replace(rl,"")}function Jn(D){return function(W){return D(W)}}function _g(D,W){return lt(W,function(B){return D[B]})}function ou(D,W){return D.has(W)}function Ok(D,W){for(var B=-1,ne=D.length;++B<ne&&pl(W,D[B],0)>-1;);return B}function Lk(D,W){for(var B=D.length;B--&&pl(W,D[B],0)>-1;);return B}function K6(D,W){for(var B=D.length,ne=0;B--;)D[B]===W&&++ne;return ne}var G6=wg(rd),Q6=wg(od);function $6(D){return"\\"+P6[D]}function Y6(D,W){return D==null?e:D[W]}function dl(D){return td.test(D)}function X6(D){return ru.test(D)}function J6(D){for(var W,B=[];!(W=D.next()).done;)B.push(W.value);return B}function Cg(D){var W=-1,B=Array(D.size);return D.forEach(function(ne,ve){B[++W]=[ve,ne]}),B}function Pk(D,W){return function(B){return D(W(B))}}function ci(D,W){for(var B=-1,ne=D.length,ve=0,Fe=[];++B<ne;){var Dt=D[B];(Dt===W||Dt===c)&&(D[B]=c,Fe[ve++]=B)}return Fe}function ld(D){var W=-1,B=Array(D.size);return D.forEach(function(ne){B[++W]=ne}),B}function Z6(D){var W=-1,B=Array(D.size);return D.forEach(function(ne){B[++W]=[ne,ne]}),B}function eP(D,W,B){for(var ne=B-1,ve=D.length;++ne<ve;)if(D[ne]===W)return ne;return-1}function tP(D,W,B){for(var ne=B+1;ne--;)if(D[ne]===W)return ne;return ne}function fl(D){return dl(D)?rP(D):U6(D)}function Ur(D){return dl(D)?oP(D):H6(D)}function Mk(D){for(var W=D.length;W--&&Rp.test(D.charAt(W)););return W}var nP=wg(L6);function rP(D){for(var W=cl.lastIndex=0;cl.test(D);)++W;return W}function oP(D){return D.match(cl)||[]}function iP(D){return D.match(ed)||[]}var aP=function D(W){W=W==null?jt:pi.defaults(jt.Object(),W,pi.pick(jt,mg));var B=W.Array,ne=W.Date,ve=W.Error,Fe=W.Function,Dt=W.Math,$e=W.Object,Eg=W.RegExp,lP=W.String,br=W.TypeError,sd=B.prototype,sP=Fe.prototype,ml=$e.prototype,ud=W["__core-js_shared__"],cd=sP.toString,We=ml.hasOwnProperty,uP=0,Dk=function(){var a=/[^.]+$/.exec(ud&&ud.keys&&ud.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),pd=ml.toString,cP=cd.call($e),pP=jt._,dP=Eg("^"+cd.call(We).replace(nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),dd=vk?W.Buffer:e,di=W.Symbol,fd=W.Uint8Array,Nk=dd?dd.allocUnsafe:e,md=Pk($e.getPrototypeOf,$e),zk=$e.create,Fk=ml.propertyIsEnumerable,hd=sd.splice,Bk=di?di.isConcatSpreadable:e,iu=di?di.iterator:e,pa=di?di.toStringTag:e,gd=function(){try{var a=ga($e,"defineProperty");return a({},"",{}),a}catch{}}(),fP=W.clearTimeout!==jt.clearTimeout&&W.clearTimeout,mP=ne&&ne.now!==jt.Date.now&&ne.now,hP=W.setTimeout!==jt.setTimeout&&W.setTimeout,bd=Dt.ceil,vd=Dt.floor,Rg=$e.getOwnPropertySymbols,gP=dd?dd.isBuffer:e,Uk=W.isFinite,bP=sd.join,vP=Pk($e.keys,$e),Nt=Dt.max,an=Dt.min,yP=ne.now,xP=W.parseInt,Hk=Dt.random,wP=sd.reverse,Tg=ga(W,"DataView"),au=ga(W,"Map"),Ig=ga(W,"Promise"),hl=ga(W,"Set"),lu=ga(W,"WeakMap"),su=ga($e,"create"),yd=lu&&new lu,gl={},kP=ba(Tg),SP=ba(au),_P=ba(Ig),CP=ba(hl),EP=ba(lu),xd=di?di.prototype:e,uu=xd?xd.valueOf:e,Wk=xd?xd.toString:e;function _(a){if(mt(a)&&!we(a)&&!(a instanceof Oe)){if(a instanceof vr)return a;if(We.call(a,"__wrapped__"))return qS(a)}return new vr(a)}var bl=function(){function a(){}return function(s){if(!ct(s))return{};if(zk)return zk(s);a.prototype=s;var d=new a;return a.prototype=e,d}}();function wd(){}function vr(a,s){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}_.templateSettings={escape:wp,evaluate:kp,interpolate:Fs,variable:"",imports:{_}},_.prototype=wd.prototype,_.prototype.constructor=_,vr.prototype=bl(wd.prototype),vr.prototype.constructor=vr;function Oe(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Pe,this.__views__=[]}function RP(){var a=new Oe(this.__wrapped__);return a.__actions__=Bn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Bn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Bn(this.__views__),a}function TP(){if(this.__filtered__){var a=new Oe(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function IP(){var a=this.__wrapped__.value(),s=this.__dir__,d=we(a),h=s<0,x=d?a.length:0,E=H3(0,x,this.__views__),I=E.start,L=E.end,N=L-I,q=h?L:I-1,j=this.__iteratees__,V=j.length,Z=0,le=an(N,this.__takeCount__);if(!d||!h&&x==N&&le==N)return dS(a,this.__actions__);var de=[];e:for(;N--&&Z<le;){q+=s;for(var _e=-1,fe=a[q];++_e<V;){var Te=j[_e],Me=Te.iteratee,tr=Te.type,En=Me(fe);if(tr==$)fe=En;else if(!En){if(tr==J)continue e;break e}}de[Z++]=fe}return de}Oe.prototype=bl(wd.prototype),Oe.prototype.constructor=Oe;function da(a){var s=-1,d=a==null?0:a.length;for(this.clear();++s<d;){var h=a[s];this.set(h[0],h[1])}}function AP(){this.__data__=su?su(null):{},this.size=0}function OP(a){var s=this.has(a)&&delete this.__data__[a];return this.size-=s?1:0,s}function LP(a){var s=this.__data__;if(su){var d=s[a];return d===l?e:d}return We.call(s,a)?s[a]:e}function PP(a){var s=this.__data__;return su?s[a]!==e:We.call(s,a)}function MP(a,s){var d=this.__data__;return this.size+=this.has(a)?0:1,d[a]=su&&s===e?l:s,this}da.prototype.clear=AP,da.prototype.delete=OP,da.prototype.get=LP,da.prototype.has=PP,da.prototype.set=MP;function To(a){var s=-1,d=a==null?0:a.length;for(this.clear();++s<d;){var h=a[s];this.set(h[0],h[1])}}function DP(){this.__data__=[],this.size=0}function NP(a){var s=this.__data__,d=kd(s,a);if(d<0)return!1;var h=s.length-1;return d==h?s.pop():hd.call(s,d,1),--this.size,!0}function zP(a){var s=this.__data__,d=kd(s,a);return d<0?e:s[d][1]}function FP(a){return kd(this.__data__,a)>-1}function BP(a,s){var d=this.__data__,h=kd(d,a);return h<0?(++this.size,d.push([a,s])):d[h][1]=s,this}To.prototype.clear=DP,To.prototype.delete=NP,To.prototype.get=zP,To.prototype.has=FP,To.prototype.set=BP;function Io(a){var s=-1,d=a==null?0:a.length;for(this.clear();++s<d;){var h=a[s];this.set(h[0],h[1])}}function UP(){this.size=0,this.__data__={hash:new da,map:new(au||To),string:new da}}function HP(a){var s=Md(this,a).delete(a);return this.size-=s?1:0,s}function WP(a){return Md(this,a).get(a)}function qP(a){return Md(this,a).has(a)}function jP(a,s){var d=Md(this,a),h=d.size;return d.set(a,s),this.size+=d.size==h?0:1,this}Io.prototype.clear=UP,Io.prototype.delete=HP,Io.prototype.get=WP,Io.prototype.has=qP,Io.prototype.set=jP;function fa(a){var s=-1,d=a==null?0:a.length;for(this.__data__=new Io;++s<d;)this.add(a[s])}function VP(a){return this.__data__.set(a,l),this}function KP(a){return this.__data__.has(a)}fa.prototype.add=fa.prototype.push=VP,fa.prototype.has=KP;function Hr(a){var s=this.__data__=new To(a);this.size=s.size}function GP(){this.__data__=new To,this.size=0}function QP(a){var s=this.__data__,d=s.delete(a);return this.size=s.size,d}function $P(a){return this.__data__.get(a)}function YP(a){return this.__data__.has(a)}function XP(a,s){var d=this.__data__;if(d instanceof To){var h=d.__data__;if(!au||h.length<n-1)return h.push([a,s]),this.size=++d.size,this;d=this.__data__=new Io(h)}return d.set(a,s),this.size=d.size,this}Hr.prototype.clear=GP,Hr.prototype.delete=QP,Hr.prototype.get=$P,Hr.prototype.has=YP,Hr.prototype.set=XP;function qk(a,s){var d=we(a),h=!d&&va(a),x=!d&&!h&&bi(a),E=!d&&!h&&!x&&wl(a),I=d||h||x||E,L=I?Sg(a.length,lP):[],N=L.length;for(var q in a)(s||We.call(a,q))&&!(I&&(q=="length"||x&&(q=="offset"||q=="parent")||E&&(q=="buffer"||q=="byteLength"||q=="byteOffset")||Po(q,N)))&&L.push(q);return L}function jk(a){var s=a.length;return s?a[Ug(0,s-1)]:e}function JP(a,s){return Dd(Bn(a),ma(s,0,a.length))}function ZP(a){return Dd(Bn(a))}function Ag(a,s,d){(d!==e&&!Wr(a[s],d)||d===e&&!(s in a))&&Ao(a,s,d)}function cu(a,s,d){var h=a[s];(!(We.call(a,s)&&Wr(h,d))||d===e&&!(s in a))&&Ao(a,s,d)}function kd(a,s){for(var d=a.length;d--;)if(Wr(a[d][0],s))return d;return-1}function e3(a,s,d,h){return fi(a,function(x,E,I){s(h,x,d(x),I)}),h}function Vk(a,s){return a&&ao(s,Vt(s),a)}function t3(a,s){return a&&ao(s,Hn(s),a)}function Ao(a,s,d){s=="__proto__"&&gd?gd(a,s,{configurable:!0,enumerable:!0,value:d,writable:!0}):a[s]=d}function Og(a,s){for(var d=-1,h=s.length,x=B(h),E=a==null;++d<h;)x[d]=E?e:pb(a,s[d]);return x}function ma(a,s,d){return a===a&&(d!==e&&(a=a<=d?a:d),s!==e&&(a=a>=s?a:s)),a}function yr(a,s,d,h,x,E){var I,L=s&p,N=s&f,q=s&m;if(d&&(I=x?d(a,h,x,E):d(a)),I!==e)return I;if(!ct(a))return a;var j=we(a);if(j){if(I=q3(a),!L)return Bn(a,I)}else{var V=ln(a),Z=V==Lt||V==Sn;if(bi(a))return hS(a,L);if(V==Yt||V==O||Z&&!x){if(I=N||Z?{}:MS(a),!L)return N?L3(a,t3(I,a)):O3(a,Vk(I,a))}else{if(!He[V])return x?a:{};I=j3(a,V,L)}}E||(E=new Hr);var le=E.get(a);if(le)return le;E.set(a,I),u_(a)?a.forEach(function(fe){I.add(yr(fe,s,d,fe,a,E))}):l_(a)&&a.forEach(function(fe,Te){I.set(Te,yr(fe,s,d,Te,a,E))});var de=q?N?Xg:Yg:N?Hn:Vt,_e=j?e:de(a);return gr(_e||a,function(fe,Te){_e&&(Te=fe,fe=a[Te]),cu(I,Te,yr(fe,s,d,Te,a,E))}),I}function n3(a){var s=Vt(a);return function(d){return Kk(d,a,s)}}function Kk(a,s,d){var h=d.length;if(a==null)return!h;for(a=$e(a);h--;){var x=d[h],E=s[x],I=a[x];if(I===e&&!(x in a)||!E(I))return!1}return!0}function Gk(a,s,d){if(typeof a!="function")throw new br(o);return bu(function(){a.apply(e,d)},s)}function pu(a,s,d,h){var x=-1,E=id,I=!0,L=a.length,N=[],q=s.length;if(!L)return N;d&&(s=lt(s,Jn(d))),h?(E=bg,I=!1):s.length>=n&&(E=ou,I=!1,s=new fa(s));e:for(;++x<L;){var j=a[x],V=d==null?j:d(j);if(j=h||j!==0?j:0,I&&V===V){for(var Z=q;Z--;)if(s[Z]===V)continue e;N.push(j)}else E(s,V,h)||N.push(j)}return N}var fi=xS(io),Qk=xS(Pg,!0);function r3(a,s){var d=!0;return fi(a,function(h,x,E){return d=!!s(h,x,E),d}),d}function Sd(a,s,d){for(var h=-1,x=a.length;++h<x;){var E=a[h],I=s(E);if(I!=null&&(L===e?I===I&&!er(I):d(I,L)))var L=I,N=E}return N}function o3(a,s,d,h){var x=a.length;for(d=ke(d),d<0&&(d=-d>x?0:x+d),h=h===e||h>x?x:ke(h),h<0&&(h+=x),h=d>h?0:p_(h);d<h;)a[d++]=s;return a}function $k(a,s){var d=[];return fi(a,function(h,x,E){s(h,x,E)&&d.push(h)}),d}function Xt(a,s,d,h,x){var E=-1,I=a.length;for(d||(d=K3),x||(x=[]);++E<I;){var L=a[E];s>0&&d(L)?s>1?Xt(L,s-1,d,h,x):ui(x,L):h||(x[x.length]=L)}return x}var Lg=wS(),Yk=wS(!0);function io(a,s){return a&&Lg(a,s,Vt)}function Pg(a,s){return a&&Yk(a,s,Vt)}function _d(a,s){return si(s,function(d){return Mo(a[d])})}function ha(a,s){s=hi(s,a);for(var d=0,h=s.length;a!=null&&d<h;)a=a[lo(s[d++])];return d&&d==h?a:e}function Xk(a,s,d){var h=s(a);return we(a)?h:ui(h,d(a))}function _n(a){return a==null?a===e?li:ai:pa&&pa in $e(a)?U3(a):Z3(a)}function Mg(a,s){return a>s}function i3(a,s){return a!=null&&We.call(a,s)}function a3(a,s){return a!=null&&s in $e(a)}function l3(a,s,d){return a>=an(s,d)&&a<Nt(s,d)}function Dg(a,s,d){for(var h=d?bg:id,x=a[0].length,E=a.length,I=E,L=B(E),N=1/0,q=[];I--;){var j=a[I];I&&s&&(j=lt(j,Jn(s))),N=an(j.length,N),L[I]=!d&&(s||x>=120&&j.length>=120)?new fa(I&&j):e}j=a[0];var V=-1,Z=L[0];e:for(;++V<x&&q.length<N;){var le=j[V],de=s?s(le):le;if(le=d||le!==0?le:0,!(Z?ou(Z,de):h(q,de,d))){for(I=E;--I;){var _e=L[I];if(!(_e?ou(_e,de):h(a[I],de,d)))continue e}Z&&Z.push(de),q.push(le)}}return q}function s3(a,s,d,h){return io(a,function(x,E,I){s(h,d(x),E,I)}),h}function du(a,s,d){s=hi(s,a),a=FS(a,s);var h=a==null?a:a[lo(wr(s))];return h==null?e:Xn(h,a,d)}function Jk(a){return mt(a)&&_n(a)==O}function u3(a){return mt(a)&&_n(a)==mr}function c3(a){return mt(a)&&_n(a)==wn}function fu(a,s,d,h,x){return a===s?!0:a==null||s==null||!mt(a)&&!mt(s)?a!==a&&s!==s:p3(a,s,d,h,fu,x)}function p3(a,s,d,h,x,E){var I=we(a),L=we(s),N=I?it:ln(a),q=L?it:ln(s);N=N==O?Yt:N,q=q==O?Yt:q;var j=N==Yt,V=q==Yt,Z=N==q;if(Z&&bi(a)){if(!bi(s))return!1;I=!0,j=!1}if(Z&&!j)return E||(E=new Hr),I||wl(a)?OS(a,s,d,h,x,E):F3(a,s,N,d,h,x,E);if(!(d&g)){var le=j&&We.call(a,"__wrapped__"),de=V&&We.call(s,"__wrapped__");if(le||de){var _e=le?a.value():a,fe=de?s.value():s;return E||(E=new Hr),x(_e,fe,d,h,E)}}return Z?(E||(E=new Hr),B3(a,s,d,h,x,E)):!1}function d3(a){return mt(a)&&ln(a)==at}function Ng(a,s,d,h){var x=d.length,E=x,I=!h;if(a==null)return!E;for(a=$e(a);x--;){var L=d[x];if(I&&L[2]?L[1]!==a[L[0]]:!(L[0]in a))return!1}for(;++x<E;){L=d[x];var N=L[0],q=a[N],j=L[1];if(I&&L[2]){if(q===e&&!(N in a))return!1}else{var V=new Hr;if(h)var Z=h(q,j,N,a,s,V);if(!(Z===e?fu(j,q,g|b,h,V):Z))return!1}}return!0}function Zk(a){if(!ct(a)||Q3(a))return!1;var s=Mo(a)?dP:Np;return s.test(ba(a))}function f3(a){return mt(a)&&_n(a)==dr}function m3(a){return mt(a)&&ln(a)==Pt}function h3(a){return mt(a)&&Hd(a.length)&&!!Ge[_n(a)]}function eS(a){return typeof a=="function"?a:a==null?Wn:typeof a=="object"?we(a)?rS(a[0],a[1]):nS(a):k_(a)}function zg(a){if(!gu(a))return vP(a);var s=[];for(var d in $e(a))We.call(a,d)&&d!="constructor"&&s.push(d);return s}function g3(a){if(!ct(a))return J3(a);var s=gu(a),d=[];for(var h in a)h=="constructor"&&(s||!We.call(a,h))||d.push(h);return d}function Fg(a,s){return a<s}function tS(a,s){var d=-1,h=Un(a)?B(a.length):[];return fi(a,function(x,E,I){h[++d]=s(x,E,I)}),h}function nS(a){var s=Zg(a);return s.length==1&&s[0][2]?NS(s[0][0],s[0][1]):function(d){return d===a||Ng(d,a,s)}}function rS(a,s){return tb(a)&&DS(s)?NS(lo(a),s):function(d){var h=pb(d,a);return h===e&&h===s?db(d,a):fu(s,h,g|b)}}function Cd(a,s,d,h,x){a!==s&&Lg(s,function(E,I){if(x||(x=new Hr),ct(E))b3(a,s,I,d,Cd,h,x);else{var L=h?h(rb(a,I),E,I+"",a,s,x):e;L===e&&(L=E),Ag(a,I,L)}},Hn)}function b3(a,s,d,h,x,E,I){var L=rb(a,d),N=rb(s,d),q=I.get(N);if(q){Ag(a,d,q);return}var j=E?E(L,N,d+"",a,s,I):e,V=j===e;if(V){var Z=we(N),le=!Z&&bi(N),de=!Z&&!le&&wl(N);j=N,Z||le||de?we(L)?j=L:wt(L)?j=Bn(L):le?(V=!1,j=hS(N,!0)):de?(V=!1,j=gS(N,!0)):j=[]:vu(N)||va(N)?(j=L,va(L)?j=d_(L):(!ct(L)||Mo(L))&&(j=MS(N))):V=!1}V&&(I.set(N,j),x(j,N,h,E,I),I.delete(N)),Ag(a,d,j)}function oS(a,s){var d=a.length;if(d)return s+=s<0?d:0,Po(s,d)?a[s]:e}function iS(a,s,d){s.length?s=lt(s,function(E){return we(E)?function(I){return ha(I,E.length===1?E[0]:E)}:E}):s=[Wn];var h=-1;s=lt(s,Jn(pe()));var x=tS(a,function(E,I,L){var N=lt(s,function(q){return q(E)});return{criteria:N,index:++h,value:E}});return j6(x,function(E,I){return A3(E,I,d)})}function v3(a,s){return aS(a,s,function(d,h){return db(a,h)})}function aS(a,s,d){for(var h=-1,x=s.length,E={};++h<x;){var I=s[h],L=ha(a,I);d(L,I)&&mu(E,hi(I,a),L)}return E}function y3(a){return function(s){return ha(s,a)}}function Bg(a,s,d,h){var x=h?q6:pl,E=-1,I=s.length,L=a;for(a===s&&(s=Bn(s)),d&&(L=lt(a,Jn(d)));++E<I;)for(var N=0,q=s[E],j=d?d(q):q;(N=x(L,j,N,h))>-1;)L!==a&&hd.call(L,N,1),hd.call(a,N,1);return a}function lS(a,s){for(var d=a?s.length:0,h=d-1;d--;){var x=s[d];if(d==h||x!==E){var E=x;Po(x)?hd.call(a,x,1):qg(a,x)}}return a}function Ug(a,s){return a+vd(Hk()*(s-a+1))}function x3(a,s,d,h){for(var x=-1,E=Nt(bd((s-a)/(d||1)),0),I=B(E);E--;)I[h?E:++x]=a,a+=d;return I}function Hg(a,s){var d="";if(!a||s<1||s>he)return d;do s%2&&(d+=a),s=vd(s/2),s&&(a+=a);while(s);return d}function Ee(a,s){return ob(zS(a,s,Wn),a+"")}function w3(a){return jk(kl(a))}function k3(a,s){var d=kl(a);return Dd(d,ma(s,0,d.length))}function mu(a,s,d,h){if(!ct(a))return a;s=hi(s,a);for(var x=-1,E=s.length,I=E-1,L=a;L!=null&&++x<E;){var N=lo(s[x]),q=d;if(N==="__proto__"||N==="constructor"||N==="prototype")return a;if(x!=I){var j=L[N];q=h?h(j,N,L):e,q===e&&(q=ct(j)?j:Po(s[x+1])?[]:{})}cu(L,N,q),L=L[N]}return a}var sS=yd?function(a,s){return yd.set(a,s),a}:Wn,S3=gd?function(a,s){return gd(a,"toString",{configurable:!0,enumerable:!1,value:mb(s),writable:!0})}:Wn;function _3(a){return Dd(kl(a))}function xr(a,s,d){var h=-1,x=a.length;s<0&&(s=-s>x?0:x+s),d=d>x?x:d,d<0&&(d+=x),x=s>d?0:d-s>>>0,s>>>=0;for(var E=B(x);++h<x;)E[h]=a[h+s];return E}function C3(a,s){var d;return fi(a,function(h,x,E){return d=s(h,x,E),!d}),!!d}function Ed(a,s,d){var h=0,x=a==null?h:a.length;if(typeof s=="number"&&s===s&&x<=Ue){for(;h<x;){var E=h+x>>>1,I=a[E];I!==null&&!er(I)&&(d?I<=s:I<s)?h=E+1:x=E}return x}return Wg(a,s,Wn,d)}function Wg(a,s,d,h){var x=0,E=a==null?0:a.length;if(E===0)return 0;s=d(s);for(var I=s!==s,L=s===null,N=er(s),q=s===e;x<E;){var j=vd((x+E)/2),V=d(a[j]),Z=V!==e,le=V===null,de=V===V,_e=er(V);if(I)var fe=h||de;else q?fe=de&&(h||Z):L?fe=de&&Z&&(h||!le):N?fe=de&&Z&&!le&&(h||!_e):le||_e?fe=!1:fe=h?V<=s:V<s;fe?x=j+1:E=j}return an(E,A)}function uS(a,s){for(var d=-1,h=a.length,x=0,E=[];++d<h;){var I=a[d],L=s?s(I):I;if(!d||!Wr(L,N)){var N=L;E[x++]=I===0?0:I}}return E}function cS(a){return typeof a=="number"?a:er(a)?De:+a}function Zn(a){if(typeof a=="string")return a;if(we(a))return lt(a,Zn)+"";if(er(a))return Wk?Wk.call(a):"";var s=a+"";return s=="0"&&1/a==-te?"-0":s}function mi(a,s,d){var h=-1,x=id,E=a.length,I=!0,L=[],N=L;if(d)I=!1,x=bg;else if(E>=n){var q=s?null:N3(a);if(q)return ld(q);I=!1,x=ou,N=new fa}else N=s?[]:L;e:for(;++h<E;){var j=a[h],V=s?s(j):j;if(j=d||j!==0?j:0,I&&V===V){for(var Z=N.length;Z--;)if(N[Z]===V)continue e;s&&N.push(V),L.push(j)}else x(N,V,d)||(N!==L&&N.push(V),L.push(j))}return L}function qg(a,s){return s=hi(s,a),a=FS(a,s),a==null||delete a[lo(wr(s))]}function pS(a,s,d,h){return mu(a,s,d(ha(a,s)),h)}function Rd(a,s,d,h){for(var x=a.length,E=h?x:-1;(h?E--:++E<x)&&s(a[E],E,a););return d?xr(a,h?0:E,h?E+1:x):xr(a,h?E+1:0,h?x:E)}function dS(a,s){var d=a;return d instanceof Oe&&(d=d.value()),vg(s,function(h,x){return x.func.apply(x.thisArg,ui([h],x.args))},d)}function jg(a,s,d){var h=a.length;if(h<2)return h?mi(a[0]):[];for(var x=-1,E=B(h);++x<h;)for(var I=a[x],L=-1;++L<h;)L!=x&&(E[x]=pu(E[x]||I,a[L],s,d));return mi(Xt(E,1),s,d)}function fS(a,s,d){for(var h=-1,x=a.length,E=s.length,I={};++h<x;){var L=h<E?s[h]:e;d(I,a[h],L)}return I}function Vg(a){return wt(a)?a:[]}function Kg(a){return typeof a=="function"?a:Wn}function hi(a,s){return we(a)?a:tb(a,s)?[a]:WS(Be(a))}var E3=Ee;function gi(a,s,d){var h=a.length;return d=d===e?h:d,!s&&d>=h?a:xr(a,s,d)}var mS=fP||function(a){return jt.clearTimeout(a)};function hS(a,s){if(s)return a.slice();var d=a.length,h=Nk?Nk(d):new a.constructor(d);return a.copy(h),h}function Gg(a){var s=new a.constructor(a.byteLength);return new fd(s).set(new fd(a)),s}function R3(a,s){var d=s?Gg(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.byteLength)}function T3(a){var s=new a.constructor(a.source,ia.exec(a));return s.lastIndex=a.lastIndex,s}function I3(a){return uu?$e(uu.call(a)):{}}function gS(a,s){var d=s?Gg(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.length)}function bS(a,s){if(a!==s){var d=a!==e,h=a===null,x=a===a,E=er(a),I=s!==e,L=s===null,N=s===s,q=er(s);if(!L&&!q&&!E&&a>s||E&&I&&N&&!L&&!q||h&&I&&N||!d&&N||!x)return 1;if(!h&&!E&&!q&&a<s||q&&d&&x&&!h&&!E||L&&d&&x||!I&&x||!N)return-1}return 0}function A3(a,s,d){for(var h=-1,x=a.criteria,E=s.criteria,I=x.length,L=d.length;++h<I;){var N=bS(x[h],E[h]);if(N){if(h>=L)return N;var q=d[h];return N*(q=="desc"?-1:1)}}return a.index-s.index}function vS(a,s,d,h){for(var x=-1,E=a.length,I=d.length,L=-1,N=s.length,q=Nt(E-I,0),j=B(N+q),V=!h;++L<N;)j[L]=s[L];for(;++x<I;)(V||x<E)&&(j[d[x]]=a[x]);for(;q--;)j[L++]=a[x++];return j}function yS(a,s,d,h){for(var x=-1,E=a.length,I=-1,L=d.length,N=-1,q=s.length,j=Nt(E-L,0),V=B(j+q),Z=!h;++x<j;)V[x]=a[x];for(var le=x;++N<q;)V[le+N]=s[N];for(;++I<L;)(Z||x<E)&&(V[le+d[I]]=a[x++]);return V}function Bn(a,s){var d=-1,h=a.length;for(s||(s=B(h));++d<h;)s[d]=a[d];return s}function ao(a,s,d,h){var x=!d;d||(d={});for(var E=-1,I=s.length;++E<I;){var L=s[E],N=h?h(d[L],a[L],L,d,a):e;N===e&&(N=a[L]),x?Ao(d,L,N):cu(d,L,N)}return d}function O3(a,s){return ao(a,eb(a),s)}function L3(a,s){return ao(a,LS(a),s)}function Td(a,s){return function(d,h){var x=we(d)?z6:e3,E=s?s():{};return x(d,a,pe(h,2),E)}}function vl(a){return Ee(function(s,d){var h=-1,x=d.length,E=x>1?d[x-1]:e,I=x>2?d[2]:e;for(E=a.length>3&&typeof E=="function"?(x--,E):e,I&&Cn(d[0],d[1],I)&&(E=x<3?e:E,x=1),s=$e(s);++h<x;){var L=d[h];L&&a(s,L,h,E)}return s})}function xS(a,s){return function(d,h){if(d==null)return d;if(!Un(d))return a(d,h);for(var x=d.length,E=s?x:-1,I=$e(d);(s?E--:++E<x)&&h(I[E],E,I)!==!1;);return d}}function wS(a){return function(s,d,h){for(var x=-1,E=$e(s),I=h(s),L=I.length;L--;){var N=I[a?L:++x];if(d(E[N],N,E)===!1)break}return s}}function P3(a,s,d){var h=s&v,x=hu(a);function E(){var I=this&&this!==jt&&this instanceof E?x:a;return I.apply(h?d:this,arguments)}return E}function kS(a){return function(s){s=Be(s);var d=dl(s)?Ur(s):e,h=d?d[0]:s.charAt(0),x=d?gi(d,1).join(""):s.slice(1);return h[a]()+x}}function yl(a){return function(s){return vg(x_(y_(s).replace(Jp,"")),a,"")}}function hu(a){return function(){var s=arguments;switch(s.length){case 0:return new a;case 1:return new a(s[0]);case 2:return new a(s[0],s[1]);case 3:return new a(s[0],s[1],s[2]);case 4:return new a(s[0],s[1],s[2],s[3]);case 5:return new a(s[0],s[1],s[2],s[3],s[4]);case 6:return new a(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new a(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var d=bl(a.prototype),h=a.apply(d,s);return ct(h)?h:d}}function M3(a,s,d){var h=hu(a);function x(){for(var E=arguments.length,I=B(E),L=E,N=xl(x);L--;)I[L]=arguments[L];var q=E<3&&I[0]!==N&&I[E-1]!==N?[]:ci(I,N);if(E-=q.length,E<d)return RS(a,s,Id,x.placeholder,e,I,q,e,e,d-E);var j=this&&this!==jt&&this instanceof x?h:a;return Xn(j,this,I)}return x}function SS(a){return function(s,d,h){var x=$e(s);if(!Un(s)){var E=pe(d,3);s=Vt(s),d=function(L){return E(x[L],L,x)}}var I=a(s,d,h);return I>-1?x[E?s[I]:I]:e}}function _S(a){return Lo(function(s){var d=s.length,h=d,x=vr.prototype.thru;for(a&&s.reverse();h--;){var E=s[h];if(typeof E!="function")throw new br(o);if(x&&!I&&Pd(E)=="wrapper")var I=new vr([],!0)}for(h=I?h:d;++h<d;){E=s[h];var L=Pd(E),N=L=="wrapper"?Jg(E):e;N&&nb(N[0])&&N[1]==(M|y|S|R)&&!N[4].length&&N[9]==1?I=I[Pd(N[0])].apply(I,N[3]):I=E.length==1&&nb(E)?I[L]():I.thru(E)}return function(){var q=arguments,j=q[0];if(I&&q.length==1&&we(j))return I.plant(j).value();for(var V=0,Z=d?s[V].apply(this,q):j;++V<d;)Z=s[V].call(this,Z);return Z}})}function Id(a,s,d,h,x,E,I,L,N,q){var j=s&M,V=s&v,Z=s&k,le=s&(y|w),de=s&z,_e=Z?e:hu(a);function fe(){for(var Te=arguments.length,Me=B(Te),tr=Te;tr--;)Me[tr]=arguments[tr];if(le)var En=xl(fe),nr=K6(Me,En);if(h&&(Me=vS(Me,h,x,le)),E&&(Me=yS(Me,E,I,le)),Te-=nr,le&&Te<q){var kt=ci(Me,En);return RS(a,s,Id,fe.placeholder,d,Me,kt,L,N,q-Te)}var qr=V?d:this,No=Z?qr[a]:a;return Te=Me.length,L?Me=eM(Me,L):de&&Te>1&&Me.reverse(),j&&N<Te&&(Me.length=N),this&&this!==jt&&this instanceof fe&&(No=_e||hu(No)),No.apply(qr,Me)}return fe}function CS(a,s){return function(d,h){return s3(d,a,s(h),{})}}function Ad(a,s){return function(d,h){var x;if(d===e&&h===e)return s;if(d!==e&&(x=d),h!==e){if(x===e)return h;typeof d=="string"||typeof h=="string"?(d=Zn(d),h=Zn(h)):(d=cS(d),h=cS(h)),x=a(d,h)}return x}}function Qg(a){return Lo(function(s){return s=lt(s,Jn(pe())),Ee(function(d){var h=this;return a(s,function(x){return Xn(x,h,d)})})})}function Od(a,s){s=s===e?" ":Zn(s);var d=s.length;if(d<2)return d?Hg(s,a):s;var h=Hg(s,bd(a/fl(s)));return dl(s)?gi(Ur(h),0,a).join(""):h.slice(0,a)}function D3(a,s,d,h){var x=s&v,E=hu(a);function I(){for(var L=-1,N=arguments.length,q=-1,j=h.length,V=B(j+N),Z=this&&this!==jt&&this instanceof I?E:a;++q<j;)V[q]=h[q];for(;N--;)V[q++]=arguments[++L];return Xn(Z,x?d:this,V)}return I}function ES(a){return function(s,d,h){return h&&typeof h!="number"&&Cn(s,d,h)&&(d=h=e),s=Do(s),d===e?(d=s,s=0):d=Do(d),h=h===e?s<d?1:-1:Do(h),x3(s,d,h,a)}}function Ld(a){return function(s,d){return typeof s=="string"&&typeof d=="string"||(s=kr(s),d=kr(d)),a(s,d)}}function RS(a,s,d,h,x,E,I,L,N,q){var j=s&y,V=j?I:e,Z=j?e:I,le=j?E:e,de=j?e:E;s|=j?S:T,s&=~(j?T:S),s&C||(s&=~(v|k));var _e=[a,s,x,le,V,de,Z,L,N,q],fe=d.apply(e,_e);return nb(a)&&BS(fe,_e),fe.placeholder=h,US(fe,a,s)}function $g(a){var s=Dt[a];return function(d,h){if(d=kr(d),h=h==null?0:an(ke(h),292),h&&Uk(d)){var x=(Be(d)+"e").split("e"),E=s(x[0]+"e"+(+x[1]+h));return x=(Be(E)+"e").split("e"),+(x[0]+"e"+(+x[1]-h))}return s(d)}}var N3=hl&&1/ld(new hl([,-0]))[1]==te?function(a){return new hl(a)}:bb;function TS(a){return function(s){var d=ln(s);return d==at?Cg(s):d==Pt?Z6(s):V6(s,a(s))}}function Oo(a,s,d,h,x,E,I,L){var N=s&k;if(!N&&typeof a!="function")throw new br(o);var q=h?h.length:0;if(q||(s&=~(S|T),h=x=e),I=I===e?I:Nt(ke(I),0),L=L===e?L:ke(L),q-=x?x.length:0,s&T){var j=h,V=x;h=x=e}var Z=N?e:Jg(a),le=[a,s,d,h,x,j,V,E,I,L];if(Z&&X3(le,Z),a=le[0],s=le[1],d=le[2],h=le[3],x=le[4],L=le[9]=le[9]===e?N?0:a.length:Nt(le[9]-q,0),!L&&s&(y|w)&&(s&=~(y|w)),!s||s==v)var de=P3(a,s,d);else s==y||s==w?de=M3(a,s,L):(s==S||s==(v|S))&&!x.length?de=D3(a,s,d,h):de=Id.apply(e,le);var _e=Z?sS:BS;return US(_e(de,le),a,s)}function IS(a,s,d,h){return a===e||Wr(a,ml[d])&&!We.call(h,d)?s:a}function AS(a,s,d,h,x,E){return ct(a)&&ct(s)&&(E.set(s,a),Cd(a,s,e,AS,E),E.delete(s)),a}function z3(a){return vu(a)?e:a}function OS(a,s,d,h,x,E){var I=d&g,L=a.length,N=s.length;if(L!=N&&!(I&&N>L))return!1;var q=E.get(a),j=E.get(s);if(q&&j)return q==s&&j==a;var V=-1,Z=!0,le=d&b?new fa:e;for(E.set(a,s),E.set(s,a);++V<L;){var de=a[V],_e=s[V];if(h)var fe=I?h(_e,de,V,s,a,E):h(de,_e,V,a,s,E);if(fe!==e){if(fe)continue;Z=!1;break}if(le){if(!yg(s,function(Te,Me){if(!ou(le,Me)&&(de===Te||x(de,Te,d,h,E)))return le.push(Me)})){Z=!1;break}}else if(!(de===_e||x(de,_e,d,h,E))){Z=!1;break}}return E.delete(a),E.delete(s),Z}function F3(a,s,d,h,x,E,I){switch(d){case H:if(a.byteLength!=s.byteLength||a.byteOffset!=s.byteOffset)return!1;a=a.buffer,s=s.buffer;case mr:return!(a.byteLength!=s.byteLength||!E(new fd(a),new fd(s)));case Dn:case wn:case Nn:return Wr(+a,+s);case kn:return a.name==s.name&&a.message==s.message;case dr:case zn:return a==s+"";case at:var L=Cg;case Pt:var N=h&g;if(L||(L=ld),a.size!=s.size&&!N)return!1;var q=I.get(a);if(q)return q==s;h|=b,I.set(a,s);var j=OS(L(a),L(s),h,x,E,I);return I.delete(a),j;case Fr:if(uu)return uu.call(a)==uu.call(s)}return!1}function B3(a,s,d,h,x,E){var I=d&g,L=Yg(a),N=L.length,q=Yg(s),j=q.length;if(N!=j&&!I)return!1;for(var V=N;V--;){var Z=L[V];if(!(I?Z in s:We.call(s,Z)))return!1}var le=E.get(a),de=E.get(s);if(le&&de)return le==s&&de==a;var _e=!0;E.set(a,s),E.set(s,a);for(var fe=I;++V<N;){Z=L[V];var Te=a[Z],Me=s[Z];if(h)var tr=I?h(Me,Te,Z,s,a,E):h(Te,Me,Z,a,s,E);if(!(tr===e?Te===Me||x(Te,Me,d,h,E):tr)){_e=!1;break}fe||(fe=Z=="constructor")}if(_e&&!fe){var En=a.constructor,nr=s.constructor;En!=nr&&"constructor"in a&&"constructor"in s&&!(typeof En=="function"&&En instanceof En&&typeof nr=="function"&&nr instanceof nr)&&(_e=!1)}return E.delete(a),E.delete(s),_e}function Lo(a){return ob(zS(a,e,KS),a+"")}function Yg(a){return Xk(a,Vt,eb)}function Xg(a){return Xk(a,Hn,LS)}var Jg=yd?function(a){return yd.get(a)}:bb;function Pd(a){for(var s=a.name+"",d=gl[s],h=We.call(gl,s)?d.length:0;h--;){var x=d[h],E=x.func;if(E==null||E==a)return x.name}return s}function xl(a){var s=We.call(_,"placeholder")?_:a;return s.placeholder}function pe(){var a=_.iteratee||hb;return a=a===hb?eS:a,arguments.length?a(arguments[0],arguments[1]):a}function Md(a,s){var d=a.__data__;return G3(s)?d[typeof s=="string"?"string":"hash"]:d.map}function Zg(a){for(var s=Vt(a),d=s.length;d--;){var h=s[d],x=a[h];s[d]=[h,x,DS(x)]}return s}function ga(a,s){var d=Y6(a,s);return Zk(d)?d:e}function U3(a){var s=We.call(a,pa),d=a[pa];try{a[pa]=e;var h=!0}catch{}var x=pd.call(a);return h&&(s?a[pa]=d:delete a[pa]),x}var eb=Rg?function(a){return a==null?[]:(a=$e(a),si(Rg(a),function(s){return Fk.call(a,s)}))}:vb,LS=Rg?function(a){for(var s=[];a;)ui(s,eb(a)),a=md(a);return s}:vb,ln=_n;(Tg&&ln(new Tg(new ArrayBuffer(1)))!=H||au&&ln(new au)!=at||Ig&&ln(Ig.resolve())!=zr||hl&&ln(new hl)!=Pt||lu&&ln(new lu)!=fr)&&(ln=function(a){var s=_n(a),d=s==Yt?a.constructor:e,h=d?ba(d):"";if(h)switch(h){case kP:return H;case SP:return at;case _P:return zr;case CP:return Pt;case EP:return fr}return s});function H3(a,s,d){for(var h=-1,x=d.length;++h<x;){var E=d[h],I=E.size;switch(E.type){case"drop":a+=I;break;case"dropRight":s-=I;break;case"take":s=an(s,a+I);break;case"takeRight":a=Nt(a,s-I);break}}return{start:a,end:s}}function W3(a){var s=a.match(Ip);return s?s[1].split(Ap):[]}function PS(a,s,d){s=hi(s,a);for(var h=-1,x=s.length,E=!1;++h<x;){var I=lo(s[h]);if(!(E=a!=null&&d(a,I)))break;a=a[I]}return E||++h!=x?E:(x=a==null?0:a.length,!!x&&Hd(x)&&Po(I,x)&&(we(a)||va(a)))}function q3(a){var s=a.length,d=new a.constructor(s);return s&&typeof a[0]=="string"&&We.call(a,"index")&&(d.index=a.index,d.input=a.input),d}function MS(a){return typeof a.constructor=="function"&&!gu(a)?bl(md(a)):{}}function j3(a,s,d){var h=a.constructor;switch(s){case mr:return Gg(a);case Dn:case wn:return new h(+a);case H:return R3(a,d);case X:case ue:case xe:case Ae:case Tt:case Ht:case Mt:case rn:case Wt:return gS(a,d);case at:return new h;case Nn:case zn:return new h(a);case dr:return T3(a);case Pt:return new h;case Fr:return I3(a)}}function V3(a,s){var d=s.length;if(!d)return a;var h=d-1;return s[h]=(d>1?"& ":"")+s[h],s=s.join(d>2?", ":" "),a.replace(Tp,`{
/* [wrapped with `+s+`] */
`)}function K3(a){return we(a)||va(a)||!!(Bk&&a&&a[Bk])}function Po(a,s){var d=typeof a;return s=s??he,!!s&&(d=="number"||d!="symbol"&&fg.test(a))&&a>-1&&a%1==0&&a<s}function Cn(a,s,d){if(!ct(d))return!1;var h=typeof s;return(h=="number"?Un(d)&&Po(s,d.length):h=="string"&&s in d)?Wr(d[s],a):!1}function tb(a,s){if(we(a))return!1;var d=typeof a;return d=="number"||d=="symbol"||d=="boolean"||a==null||er(a)?!0:_p.test(a)||!Sp.test(a)||s!=null&&a in $e(s)}function G3(a){var s=typeof a;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?a!=="__proto__":a===null}function nb(a){var s=Pd(a),d=_[s];if(typeof d!="function"||!(s in Oe.prototype))return!1;if(a===d)return!0;var h=Jg(d);return!!h&&a===h[0]}function Q3(a){return!!Dk&&Dk in a}var $3=ud?Mo:yb;function gu(a){var s=a&&a.constructor,d=typeof s=="function"&&s.prototype||ml;return a===d}function DS(a){return a===a&&!ct(a)}function NS(a,s){return function(d){return d==null?!1:d[a]===s&&(s!==e||a in $e(d))}}function Y3(a){var s=Bd(a,function(h){return d.size===u&&d.clear(),h}),d=s.cache;return s}function X3(a,s){var d=a[1],h=s[1],x=d|h,E=x<(v|k|M),I=h==M&&d==y||h==M&&d==R&&a[7].length<=s[8]||h==(M|R)&&s[7].length<=s[8]&&d==y;if(!(E||I))return a;h&v&&(a[2]=s[2],x|=d&v?0:C);var L=s[3];if(L){var N=a[3];a[3]=N?vS(N,L,s[4]):L,a[4]=N?ci(a[3],c):s[4]}return L=s[5],L&&(N=a[5],a[5]=N?yS(N,L,s[6]):L,a[6]=N?ci(a[5],c):s[6]),L=s[7],L&&(a[7]=L),h&M&&(a[8]=a[8]==null?s[8]:an(a[8],s[8])),a[9]==null&&(a[9]=s[9]),a[0]=s[0],a[1]=x,a}function J3(a){var s=[];if(a!=null)for(var d in $e(a))s.push(d);return s}function Z3(a){return pd.call(a)}function zS(a,s,d){return s=Nt(s===e?a.length-1:s,0),function(){for(var h=arguments,x=-1,E=Nt(h.length-s,0),I=B(E);++x<E;)I[x]=h[s+x];x=-1;for(var L=B(s+1);++x<s;)L[x]=h[x];return L[s]=d(I),Xn(a,this,L)}}function FS(a,s){return s.length<2?a:ha(a,xr(s,0,-1))}function eM(a,s){for(var d=a.length,h=an(s.length,d),x=Bn(a);h--;){var E=s[h];a[h]=Po(E,d)?x[E]:e}return a}function rb(a,s){if(!(s==="constructor"&&typeof a[s]=="function")&&s!="__proto__")return a[s]}var BS=HS(sS),bu=hP||function(a,s){return jt.setTimeout(a,s)},ob=HS(S3);function US(a,s,d){var h=s+"";return ob(a,V3(h,tM(W3(h),d)))}function HS(a){var s=0,d=0;return function(){var h=yP(),x=ae-(h-d);if(d=h,x>0){if(++s>=P)return arguments[0]}else s=0;return a.apply(e,arguments)}}function Dd(a,s){var d=-1,h=a.length,x=h-1;for(s=s===e?h:s;++d<s;){var E=Ug(d,x),I=a[E];a[E]=a[d],a[d]=I}return a.length=s,a}var WS=Y3(function(a){var s=[];return a.charCodeAt(0)===46&&s.push(""),a.replace(Cp,function(d,h,x,E){s.push(x?E.replace(Pp,"$1"):h||d)}),s});function lo(a){if(typeof a=="string"||er(a))return a;var s=a+"";return s=="0"&&1/a==-te?"-0":s}function ba(a){if(a!=null){try{return cd.call(a)}catch{}try{return a+""}catch{}}return""}function tM(a,s){return gr(nn,function(d){var h="_."+d[0];s&d[1]&&!id(a,h)&&a.push(h)}),a.sort()}function qS(a){if(a instanceof Oe)return a.clone();var s=new vr(a.__wrapped__,a.__chain__);return s.__actions__=Bn(a.__actions__),s.__index__=a.__index__,s.__values__=a.__values__,s}function nM(a,s,d){(d?Cn(a,s,d):s===e)?s=1:s=Nt(ke(s),0);var h=a==null?0:a.length;if(!h||s<1)return[];for(var x=0,E=0,I=B(bd(h/s));x<h;)I[E++]=xr(a,x,x+=s);return I}function rM(a){for(var s=-1,d=a==null?0:a.length,h=0,x=[];++s<d;){var E=a[s];E&&(x[h++]=E)}return x}function oM(){var a=arguments.length;if(!a)return[];for(var s=B(a-1),d=arguments[0],h=a;h--;)s[h-1]=arguments[h];return ui(we(d)?Bn(d):[d],Xt(s,1))}var iM=Ee(function(a,s){return wt(a)?pu(a,Xt(s,1,wt,!0)):[]}),aM=Ee(function(a,s){var d=wr(s);return wt(d)&&(d=e),wt(a)?pu(a,Xt(s,1,wt,!0),pe(d,2)):[]}),lM=Ee(function(a,s){var d=wr(s);return wt(d)&&(d=e),wt(a)?pu(a,Xt(s,1,wt,!0),e,d):[]});function sM(a,s,d){var h=a==null?0:a.length;return h?(s=d||s===e?1:ke(s),xr(a,s<0?0:s,h)):[]}function uM(a,s,d){var h=a==null?0:a.length;return h?(s=d||s===e?1:ke(s),s=h-s,xr(a,0,s<0?0:s)):[]}function cM(a,s){return a&&a.length?Rd(a,pe(s,3),!0,!0):[]}function pM(a,s){return a&&a.length?Rd(a,pe(s,3),!0):[]}function dM(a,s,d,h){var x=a==null?0:a.length;return x?(d&&typeof d!="number"&&Cn(a,s,d)&&(d=0,h=x),o3(a,s,d,h)):[]}function jS(a,s,d){var h=a==null?0:a.length;if(!h)return-1;var x=d==null?0:ke(d);return x<0&&(x=Nt(h+x,0)),ad(a,pe(s,3),x)}function VS(a,s,d){var h=a==null?0:a.length;if(!h)return-1;var x=h-1;return d!==e&&(x=ke(d),x=d<0?Nt(h+x,0):an(x,h-1)),ad(a,pe(s,3),x,!0)}function KS(a){var s=a==null?0:a.length;return s?Xt(a,1):[]}function fM(a){var s=a==null?0:a.length;return s?Xt(a,te):[]}function mM(a,s){var d=a==null?0:a.length;return d?(s=s===e?1:ke(s),Xt(a,s)):[]}function hM(a){for(var s=-1,d=a==null?0:a.length,h={};++s<d;){var x=a[s];h[x[0]]=x[1]}return h}function GS(a){return a&&a.length?a[0]:e}function gM(a,s,d){var h=a==null?0:a.length;if(!h)return-1;var x=d==null?0:ke(d);return x<0&&(x=Nt(h+x,0)),pl(a,s,x)}function bM(a){var s=a==null?0:a.length;return s?xr(a,0,-1):[]}var vM=Ee(function(a){var s=lt(a,Vg);return s.length&&s[0]===a[0]?Dg(s):[]}),yM=Ee(function(a){var s=wr(a),d=lt(a,Vg);return s===wr(d)?s=e:d.pop(),d.length&&d[0]===a[0]?Dg(d,pe(s,2)):[]}),xM=Ee(function(a){var s=wr(a),d=lt(a,Vg);return s=typeof s=="function"?s:e,s&&d.pop(),d.length&&d[0]===a[0]?Dg(d,e,s):[]});function wM(a,s){return a==null?"":bP.call(a,s)}function wr(a){var s=a==null?0:a.length;return s?a[s-1]:e}function kM(a,s,d){var h=a==null?0:a.length;if(!h)return-1;var x=h;return d!==e&&(x=ke(d),x=x<0?Nt(h+x,0):an(x,h-1)),s===s?tP(a,s,x):ad(a,Rk,x,!0)}function SM(a,s){return a&&a.length?oS(a,ke(s)):e}var _M=Ee(QS);function QS(a,s){return a&&a.length&&s&&s.length?Bg(a,s):a}function CM(a,s,d){return a&&a.length&&s&&s.length?Bg(a,s,pe(d,2)):a}function EM(a,s,d){return a&&a.length&&s&&s.length?Bg(a,s,e,d):a}var RM=Lo(function(a,s){var d=a==null?0:a.length,h=Og(a,s);return lS(a,lt(s,function(x){return Po(x,d)?+x:x}).sort(bS)),h});function TM(a,s){var d=[];if(!(a&&a.length))return d;var h=-1,x=[],E=a.length;for(s=pe(s,3);++h<E;){var I=a[h];s(I,h,a)&&(d.push(I),x.push(h))}return lS(a,x),d}function ib(a){return a==null?a:wP.call(a)}function IM(a,s,d){var h=a==null?0:a.length;return h?(d&&typeof d!="number"&&Cn(a,s,d)?(s=0,d=h):(s=s==null?0:ke(s),d=d===e?h:ke(d)),xr(a,s,d)):[]}function AM(a,s){return Ed(a,s)}function OM(a,s,d){return Wg(a,s,pe(d,2))}function LM(a,s){var d=a==null?0:a.length;if(d){var h=Ed(a,s);if(h<d&&Wr(a[h],s))return h}return-1}function PM(a,s){return Ed(a,s,!0)}function MM(a,s,d){return Wg(a,s,pe(d,2),!0)}function DM(a,s){var d=a==null?0:a.length;if(d){var h=Ed(a,s,!0)-1;if(Wr(a[h],s))return h}return-1}function NM(a){return a&&a.length?uS(a):[]}function zM(a,s){return a&&a.length?uS(a,pe(s,2)):[]}function FM(a){var s=a==null?0:a.length;return s?xr(a,1,s):[]}function BM(a,s,d){return a&&a.length?(s=d||s===e?1:ke(s),xr(a,0,s<0?0:s)):[]}function UM(a,s,d){var h=a==null?0:a.length;return h?(s=d||s===e?1:ke(s),s=h-s,xr(a,s<0?0:s,h)):[]}function HM(a,s){return a&&a.length?Rd(a,pe(s,3),!1,!0):[]}function WM(a,s){return a&&a.length?Rd(a,pe(s,3)):[]}var qM=Ee(function(a){return mi(Xt(a,1,wt,!0))}),jM=Ee(function(a){var s=wr(a);return wt(s)&&(s=e),mi(Xt(a,1,wt,!0),pe(s,2))}),VM=Ee(function(a){var s=wr(a);return s=typeof s=="function"?s:e,mi(Xt(a,1,wt,!0),e,s)});function KM(a){return a&&a.length?mi(a):[]}function GM(a,s){return a&&a.length?mi(a,pe(s,2)):[]}function QM(a,s){return s=typeof s=="function"?s:e,a&&a.length?mi(a,e,s):[]}function ab(a){if(!(a&&a.length))return[];var s=0;return a=si(a,function(d){if(wt(d))return s=Nt(d.length,s),!0}),Sg(s,function(d){return lt(a,xg(d))})}function $S(a,s){if(!(a&&a.length))return[];var d=ab(a);return s==null?d:lt(d,function(h){return Xn(s,e,h)})}var $M=Ee(function(a,s){return wt(a)?pu(a,s):[]}),YM=Ee(function(a){return jg(si(a,wt))}),XM=Ee(function(a){var s=wr(a);return wt(s)&&(s=e),jg(si(a,wt),pe(s,2))}),JM=Ee(function(a){var s=wr(a);return s=typeof s=="function"?s:e,jg(si(a,wt),e,s)}),ZM=Ee(ab);function e7(a,s){return fS(a||[],s||[],cu)}function t7(a,s){return fS(a||[],s||[],mu)}var n7=Ee(function(a){var s=a.length,d=s>1?a[s-1]:e;return d=typeof d=="function"?(a.pop(),d):e,$S(a,d)});function YS(a){var s=_(a);return s.__chain__=!0,s}function r7(a,s){return s(a),a}function Nd(a,s){return s(a)}var o7=Lo(function(a){var s=a.length,d=s?a[0]:0,h=this.__wrapped__,x=function(E){return Og(E,a)};return s>1||this.__actions__.length||!(h instanceof Oe)||!Po(d)?this.thru(x):(h=h.slice(d,+d+(s?1:0)),h.__actions__.push({func:Nd,args:[x],thisArg:e}),new vr(h,this.__chain__).thru(function(E){return s&&!E.length&&E.push(e),E}))});function i7(){return YS(this)}function a7(){return new vr(this.value(),this.__chain__)}function l7(){this.__values__===e&&(this.__values__=c_(this.value()));var a=this.__index__>=this.__values__.length,s=a?e:this.__values__[this.__index__++];return{done:a,value:s}}function s7(){return this}function u7(a){for(var s,d=this;d instanceof wd;){var h=qS(d);h.__index__=0,h.__values__=e,s?x.__wrapped__=h:s=h;var x=h;d=d.__wrapped__}return x.__wrapped__=a,s}function c7(){var a=this.__wrapped__;if(a instanceof Oe){var s=a;return this.__actions__.length&&(s=new Oe(this)),s=s.reverse(),s.__actions__.push({func:Nd,args:[ib],thisArg:e}),new vr(s,this.__chain__)}return this.thru(ib)}function p7(){return dS(this.__wrapped__,this.__actions__)}var d7=Td(function(a,s,d){We.call(a,d)?++a[d]:Ao(a,d,1)});function f7(a,s,d){var h=we(a)?Ck:r3;return d&&Cn(a,s,d)&&(s=e),h(a,pe(s,3))}function m7(a,s){var d=we(a)?si:$k;return d(a,pe(s,3))}var h7=SS(jS),g7=SS(VS);function b7(a,s){return Xt(zd(a,s),1)}function v7(a,s){return Xt(zd(a,s),te)}function y7(a,s,d){return d=d===e?1:ke(d),Xt(zd(a,s),d)}function XS(a,s){var d=we(a)?gr:fi;return d(a,pe(s,3))}function JS(a,s){var d=we(a)?F6:Qk;return d(a,pe(s,3))}var x7=Td(function(a,s,d){We.call(a,d)?a[d].push(s):Ao(a,d,[s])});function w7(a,s,d,h){a=Un(a)?a:kl(a),d=d&&!h?ke(d):0;var x=a.length;return d<0&&(d=Nt(x+d,0)),Wd(a)?d<=x&&a.indexOf(s,d)>-1:!!x&&pl(a,s,d)>-1}var k7=Ee(function(a,s,d){var h=-1,x=typeof s=="function",E=Un(a)?B(a.length):[];return fi(a,function(I){E[++h]=x?Xn(s,I,d):du(I,s,d)}),E}),S7=Td(function(a,s,d){Ao(a,d,s)});function zd(a,s){var d=we(a)?lt:tS;return d(a,pe(s,3))}function _7(a,s,d,h){return a==null?[]:(we(s)||(s=s==null?[]:[s]),d=h?e:d,we(d)||(d=d==null?[]:[d]),iS(a,s,d))}var C7=Td(function(a,s,d){a[d?0:1].push(s)},function(){return[[],[]]});function E7(a,s,d){var h=we(a)?vg:Ik,x=arguments.length<3;return h(a,pe(s,4),d,x,fi)}function R7(a,s,d){var h=we(a)?B6:Ik,x=arguments.length<3;return h(a,pe(s,4),d,x,Qk)}function T7(a,s){var d=we(a)?si:$k;return d(a,Ud(pe(s,3)))}function I7(a){var s=we(a)?jk:w3;return s(a)}function A7(a,s,d){(d?Cn(a,s,d):s===e)?s=1:s=ke(s);var h=we(a)?JP:k3;return h(a,s)}function O7(a){var s=we(a)?ZP:_3;return s(a)}function L7(a){if(a==null)return 0;if(Un(a))return Wd(a)?fl(a):a.length;var s=ln(a);return s==at||s==Pt?a.size:zg(a).length}function P7(a,s,d){var h=we(a)?yg:C3;return d&&Cn(a,s,d)&&(s=e),h(a,pe(s,3))}var M7=Ee(function(a,s){if(a==null)return[];var d=s.length;return d>1&&Cn(a,s[0],s[1])?s=[]:d>2&&Cn(s[0],s[1],s[2])&&(s=[s[0]]),iS(a,Xt(s,1),[])}),Fd=mP||function(){return jt.Date.now()};function D7(a,s){if(typeof s!="function")throw new br(o);return a=ke(a),function(){if(--a<1)return s.apply(this,arguments)}}function ZS(a,s,d){return s=d?e:s,s=a&&s==null?a.length:s,Oo(a,M,e,e,e,e,s)}function e_(a,s){var d;if(typeof s!="function")throw new br(o);return a=ke(a),function(){return--a>0&&(d=s.apply(this,arguments)),a<=1&&(s=e),d}}var lb=Ee(function(a,s,d){var h=v;if(d.length){var x=ci(d,xl(lb));h|=S}return Oo(a,h,s,d,x)}),t_=Ee(function(a,s,d){var h=v|k;if(d.length){var x=ci(d,xl(t_));h|=S}return Oo(s,h,a,d,x)});function n_(a,s,d){s=d?e:s;var h=Oo(a,y,e,e,e,e,e,s);return h.placeholder=n_.placeholder,h}function r_(a,s,d){s=d?e:s;var h=Oo(a,w,e,e,e,e,e,s);return h.placeholder=r_.placeholder,h}function o_(a,s,d){var h,x,E,I,L,N,q=0,j=!1,V=!1,Z=!0;if(typeof a!="function")throw new br(o);s=kr(s)||0,ct(d)&&(j=!!d.leading,V="maxWait"in d,E=V?Nt(kr(d.maxWait)||0,s):E,Z="trailing"in d?!!d.trailing:Z);function le(kt){var qr=h,No=x;return h=x=e,q=kt,I=a.apply(No,qr),I}function de(kt){return q=kt,L=bu(Te,s),j?le(kt):I}function _e(kt){var qr=kt-N,No=kt-q,S_=s-qr;return V?an(S_,E-No):S_}function fe(kt){var qr=kt-N,No=kt-q;return N===e||qr>=s||qr<0||V&&No>=E}function Te(){var kt=Fd();if(fe(kt))return Me(kt);L=bu(Te,_e(kt))}function Me(kt){return L=e,Z&&h?le(kt):(h=x=e,I)}function tr(){L!==e&&mS(L),q=0,h=N=x=L=e}function En(){return L===e?I:Me(Fd())}function nr(){var kt=Fd(),qr=fe(kt);if(h=arguments,x=this,N=kt,qr){if(L===e)return de(N);if(V)return mS(L),L=bu(Te,s),le(N)}return L===e&&(L=bu(Te,s)),I}return nr.cancel=tr,nr.flush=En,nr}var N7=Ee(function(a,s){return Gk(a,1,s)}),z7=Ee(function(a,s,d){return Gk(a,kr(s)||0,d)});function F7(a){return Oo(a,z)}function Bd(a,s){if(typeof a!="function"||s!=null&&typeof s!="function")throw new br(o);var d=function(){var h=arguments,x=s?s.apply(this,h):h[0],E=d.cache;if(E.has(x))return E.get(x);var I=a.apply(this,h);return d.cache=E.set(x,I)||E,I};return d.cache=new(Bd.Cache||Io),d}Bd.Cache=Io;function Ud(a){if(typeof a!="function")throw new br(o);return function(){var s=arguments;switch(s.length){case 0:return!a.call(this);case 1:return!a.call(this,s[0]);case 2:return!a.call(this,s[0],s[1]);case 3:return!a.call(this,s[0],s[1],s[2])}return!a.apply(this,s)}}function B7(a){return e_(2,a)}var U7=E3(function(a,s){s=s.length==1&&we(s[0])?lt(s[0],Jn(pe())):lt(Xt(s,1),Jn(pe()));var d=s.length;return Ee(function(h){for(var x=-1,E=an(h.length,d);++x<E;)h[x]=s[x].call(this,h[x]);return Xn(a,this,h)})}),sb=Ee(function(a,s){var d=ci(s,xl(sb));return Oo(a,S,e,s,d)}),i_=Ee(function(a,s){var d=ci(s,xl(i_));return Oo(a,T,e,s,d)}),H7=Lo(function(a,s){return Oo(a,R,e,e,e,s)});function W7(a,s){if(typeof a!="function")throw new br(o);return s=s===e?s:ke(s),Ee(a,s)}function q7(a,s){if(typeof a!="function")throw new br(o);return s=s==null?0:Nt(ke(s),0),Ee(function(d){var h=d[s],x=gi(d,0,s);return h&&ui(x,h),Xn(a,this,x)})}function j7(a,s,d){var h=!0,x=!0;if(typeof a!="function")throw new br(o);return ct(d)&&(h="leading"in d?!!d.leading:h,x="trailing"in d?!!d.trailing:x),o_(a,s,{leading:h,maxWait:s,trailing:x})}function V7(a){return ZS(a,1)}function K7(a,s){return sb(Kg(s),a)}function G7(){if(!arguments.length)return[];var a=arguments[0];return we(a)?a:[a]}function Q7(a){return yr(a,m)}function $7(a,s){return s=typeof s=="function"?s:e,yr(a,m,s)}function Y7(a){return yr(a,p|m)}function X7(a,s){return s=typeof s=="function"?s:e,yr(a,p|m,s)}function J7(a,s){return s==null||Kk(a,s,Vt(s))}function Wr(a,s){return a===s||a!==a&&s!==s}var Z7=Ld(Mg),eD=Ld(function(a,s){return a>=s}),va=Jk(function(){return arguments}())?Jk:function(a){return mt(a)&&We.call(a,"callee")&&!Fk.call(a,"callee")},we=B.isArray,tD=yk?Jn(yk):u3;function Un(a){return a!=null&&Hd(a.length)&&!Mo(a)}function wt(a){return mt(a)&&Un(a)}function nD(a){return a===!0||a===!1||mt(a)&&_n(a)==Dn}var bi=gP||yb,rD=xk?Jn(xk):c3;function oD(a){return mt(a)&&a.nodeType===1&&!vu(a)}function iD(a){if(a==null)return!0;if(Un(a)&&(we(a)||typeof a=="string"||typeof a.splice=="function"||bi(a)||wl(a)||va(a)))return!a.length;var s=ln(a);if(s==at||s==Pt)return!a.size;if(gu(a))return!zg(a).length;for(var d in a)if(We.call(a,d))return!1;return!0}function aD(a,s){return fu(a,s)}function lD(a,s,d){d=typeof d=="function"?d:e;var h=d?d(a,s):e;return h===e?fu(a,s,e,d):!!h}function ub(a){if(!mt(a))return!1;var s=_n(a);return s==kn||s==tt||typeof a.message=="string"&&typeof a.name=="string"&&!vu(a)}function sD(a){return typeof a=="number"&&Uk(a)}function Mo(a){if(!ct(a))return!1;var s=_n(a);return s==Lt||s==Sn||s==Mn||s==Co}function a_(a){return typeof a=="number"&&a==ke(a)}function Hd(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=he}function ct(a){var s=typeof a;return a!=null&&(s=="object"||s=="function")}function mt(a){return a!=null&&typeof a=="object"}var l_=wk?Jn(wk):d3;function uD(a,s){return a===s||Ng(a,s,Zg(s))}function cD(a,s,d){return d=typeof d=="function"?d:e,Ng(a,s,Zg(s),d)}function pD(a){return s_(a)&&a!=+a}function dD(a){if($3(a))throw new ve(r);return Zk(a)}function fD(a){return a===null}function mD(a){return a==null}function s_(a){return typeof a=="number"||mt(a)&&_n(a)==Nn}function vu(a){if(!mt(a)||_n(a)!=Yt)return!1;var s=md(a);if(s===null)return!0;var d=We.call(s,"constructor")&&s.constructor;return typeof d=="function"&&d instanceof d&&cd.call(d)==cP}var cb=kk?Jn(kk):f3;function hD(a){return a_(a)&&a>=-he&&a<=he}var u_=Sk?Jn(Sk):m3;function Wd(a){return typeof a=="string"||!we(a)&&mt(a)&&_n(a)==zn}function er(a){return typeof a=="symbol"||mt(a)&&_n(a)==Fr}var wl=_k?Jn(_k):h3;function gD(a){return a===e}function bD(a){return mt(a)&&ln(a)==fr}function vD(a){return mt(a)&&_n(a)==Eo}var yD=Ld(Fg),xD=Ld(function(a,s){return a<=s});function c_(a){if(!a)return[];if(Un(a))return Wd(a)?Ur(a):Bn(a);if(iu&&a[iu])return J6(a[iu]());var s=ln(a),d=s==at?Cg:s==Pt?ld:kl;return d(a)}function Do(a){if(!a)return a===0?a:0;if(a=kr(a),a===te||a===-te){var s=a<0?-1:1;return s*Le}return a===a?a:0}function ke(a){var s=Do(a),d=s%1;return s===s?d?s-d:s:0}function p_(a){return a?ma(ke(a),0,Pe):0}function kr(a){if(typeof a=="number")return a;if(er(a))return De;if(ct(a)){var s=typeof a.valueOf=="function"?a.valueOf():a;a=ct(s)?s+"":s}if(typeof a!="string")return a===0?a:+a;a=Ak(a);var d=Dp.test(a);return d||Bs.test(a)?D6(a.slice(2),d?2:8):aa.test(a)?De:+a}function d_(a){return ao(a,Hn(a))}function wD(a){return a?ma(ke(a),-he,he):a===0?a:0}function Be(a){return a==null?"":Zn(a)}var kD=vl(function(a,s){if(gu(s)||Un(s)){ao(s,Vt(s),a);return}for(var d in s)We.call(s,d)&&cu(a,d,s[d])}),f_=vl(function(a,s){ao(s,Hn(s),a)}),qd=vl(function(a,s,d,h){ao(s,Hn(s),a,h)}),SD=vl(function(a,s,d,h){ao(s,Vt(s),a,h)}),_D=Lo(Og);function CD(a,s){var d=bl(a);return s==null?d:Vk(d,s)}var ED=Ee(function(a,s){a=$e(a);var d=-1,h=s.length,x=h>2?s[2]:e;for(x&&Cn(s[0],s[1],x)&&(h=1);++d<h;)for(var E=s[d],I=Hn(E),L=-1,N=I.length;++L<N;){var q=I[L],j=a[q];(j===e||Wr(j,ml[q])&&!We.call(a,q))&&(a[q]=E[q])}return a}),RD=Ee(function(a){return a.push(e,AS),Xn(m_,e,a)});function TD(a,s){return Ek(a,pe(s,3),io)}function ID(a,s){return Ek(a,pe(s,3),Pg)}function AD(a,s){return a==null?a:Lg(a,pe(s,3),Hn)}function OD(a,s){return a==null?a:Yk(a,pe(s,3),Hn)}function LD(a,s){return a&&io(a,pe(s,3))}function PD(a,s){return a&&Pg(a,pe(s,3))}function MD(a){return a==null?[]:_d(a,Vt(a))}function DD(a){return a==null?[]:_d(a,Hn(a))}function pb(a,s,d){var h=a==null?e:ha(a,s);return h===e?d:h}function ND(a,s){return a!=null&&PS(a,s,i3)}function db(a,s){return a!=null&&PS(a,s,a3)}var zD=CS(function(a,s,d){s!=null&&typeof s.toString!="function"&&(s=pd.call(s)),a[s]=d},mb(Wn)),FD=CS(function(a,s,d){s!=null&&typeof s.toString!="function"&&(s=pd.call(s)),We.call(a,s)?a[s].push(d):a[s]=[d]},pe),BD=Ee(du);function Vt(a){return Un(a)?qk(a):zg(a)}function Hn(a){return Un(a)?qk(a,!0):g3(a)}function UD(a,s){var d={};return s=pe(s,3),io(a,function(h,x,E){Ao(d,s(h,x,E),h)}),d}function HD(a,s){var d={};return s=pe(s,3),io(a,function(h,x,E){Ao(d,x,s(h,x,E))}),d}var WD=vl(function(a,s,d){Cd(a,s,d)}),m_=vl(function(a,s,d,h){Cd(a,s,d,h)}),qD=Lo(function(a,s){var d={};if(a==null)return d;var h=!1;s=lt(s,function(E){return E=hi(E,a),h||(h=E.length>1),E}),ao(a,Xg(a),d),h&&(d=yr(d,p|f|m,z3));for(var x=s.length;x--;)qg(d,s[x]);return d});function jD(a,s){return h_(a,Ud(pe(s)))}var VD=Lo(function(a,s){return a==null?{}:v3(a,s)});function h_(a,s){if(a==null)return{};var d=lt(Xg(a),function(h){return[h]});return s=pe(s),aS(a,d,function(h,x){return s(h,x[0])})}function KD(a,s,d){s=hi(s,a);var h=-1,x=s.length;for(x||(x=1,a=e);++h<x;){var E=a==null?e:a[lo(s[h])];E===e&&(h=x,E=d),a=Mo(E)?E.call(a):E}return a}function GD(a,s,d){return a==null?a:mu(a,s,d)}function QD(a,s,d,h){return h=typeof h=="function"?h:e,a==null?a:mu(a,s,d,h)}var g_=TS(Vt),b_=TS(Hn);function $D(a,s,d){var h=we(a),x=h||bi(a)||wl(a);if(s=pe(s,4),d==null){var E=a&&a.constructor;x?d=h?new E:[]:ct(a)?d=Mo(E)?bl(md(a)):{}:d={}}return(x?gr:io)(a,function(I,L,N){return s(d,I,L,N)}),d}function YD(a,s){return a==null?!0:qg(a,s)}function XD(a,s,d){return a==null?a:pS(a,s,Kg(d))}function JD(a,s,d,h){return h=typeof h=="function"?h:e,a==null?a:pS(a,s,Kg(d),h)}function kl(a){return a==null?[]:_g(a,Vt(a))}function ZD(a){return a==null?[]:_g(a,Hn(a))}function eN(a,s,d){return d===e&&(d=s,s=e),d!==e&&(d=kr(d),d=d===d?d:0),s!==e&&(s=kr(s),s=s===s?s:0),ma(kr(a),s,d)}function tN(a,s,d){return s=Do(s),d===e?(d=s,s=0):d=Do(d),a=kr(a),l3(a,s,d)}function nN(a,s,d){if(d&&typeof d!="boolean"&&Cn(a,s,d)&&(s=d=e),d===e&&(typeof s=="boolean"?(d=s,s=e):typeof a=="boolean"&&(d=a,a=e)),a===e&&s===e?(a=0,s=1):(a=Do(a),s===e?(s=a,a=0):s=Do(s)),a>s){var h=a;a=s,s=h}if(d||a%1||s%1){var x=Hk();return an(a+x*(s-a+M6("1e-"+((x+"").length-1))),s)}return Ug(a,s)}var rN=yl(function(a,s,d){return s=s.toLowerCase(),a+(d?v_(s):s)});function v_(a){return fb(Be(a).toLowerCase())}function y_(a){return a=Be(a),a&&a.replace(la,G6).replace(Zp,"")}function oN(a,s,d){a=Be(a),s=Zn(s);var h=a.length;d=d===e?h:ma(ke(d),0,h);var x=d;return d-=s.length,d>=0&&a.slice(d,x)==s}function iN(a){return a=Be(a),a&&xp.test(a)?a.replace(zs,Q6):a}function aN(a){return a=Be(a),a&&Ep.test(a)?a.replace(nl,"\\$&"):a}var lN=yl(function(a,s,d){return a+(d?"-":"")+s.toLowerCase()}),sN=yl(function(a,s,d){return a+(d?" ":"")+s.toLowerCase()}),uN=kS("toLowerCase");function cN(a,s,d){a=Be(a),s=ke(s);var h=s?fl(a):0;if(!s||h>=s)return a;var x=(s-h)/2;return Od(vd(x),d)+a+Od(bd(x),d)}function pN(a,s,d){a=Be(a),s=ke(s);var h=s?fl(a):0;return s&&h<s?a+Od(s-h,d):a}function dN(a,s,d){a=Be(a),s=ke(s);var h=s?fl(a):0;return s&&h<s?Od(s-h,d)+a:a}function fN(a,s,d){return d||s==null?s=0:s&&(s=+s),xP(Be(a).replace(rl,""),s||0)}function mN(a,s,d){return(d?Cn(a,s,d):s===e)?s=1:s=ke(s),Hg(Be(a),s)}function hN(){var a=arguments,s=Be(a[0]);return a.length<3?s:s.replace(a[1],a[2])}var gN=yl(function(a,s,d){return a+(d?"_":"")+s.toLowerCase()});function bN(a,s,d){return d&&typeof d!="number"&&Cn(a,s,d)&&(s=d=e),d=d===e?Pe:d>>>0,d?(a=Be(a),a&&(typeof s=="string"||s!=null&&!cb(s))&&(s=Zn(s),!s&&dl(a))?gi(Ur(a),0,d):a.split(s,d)):[]}var vN=yl(function(a,s,d){return a+(d?" ":"")+fb(s)});function yN(a,s,d){return a=Be(a),d=d==null?0:ma(ke(d),0,a.length),s=Zn(s),a.slice(d,d+s.length)==s}function xN(a,s,d){var h=_.templateSettings;d&&Cn(a,s,d)&&(s=e),a=Be(a),s=qd({},s,h,IS);var x=qd({},s.imports,h.imports,IS),E=Vt(x),I=_g(x,E),L,N,q=0,j=s.interpolate||sa,V="__p += '",Z=Eg((s.escape||sa).source+"|"+j.source+"|"+(j===Fs?Mp:sa).source+"|"+(s.evaluate||sa).source+"|$","g"),le="//# sourceURL="+(We.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nd+"]")+`
`;a.replace(Z,function(fe,Te,Me,tr,En,nr){return Me||(Me=tr),V+=a.slice(q,nr).replace(ie,$6),Te&&(L=!0,V+=`' +
__e(`+Te+`) +
'`),En&&(N=!0,V+=`';
`+En+`;
__p += '`),Me&&(V+=`' +
((__t = (`+Me+`)) == null ? '' : __t) +
'`),q=nr+fe.length,fe}),V+=`';
`;var de=We.call(s,"variable")&&s.variable;if(!de)V=`with (obj) {
`+V+`
}
`;else if(Lp.test(de))throw new ve(i);V=(N?V.replace(qt,""):V).replace(on,"$1").replace(Fn,"$1;"),V="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(L?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var _e=w_(function(){return Fe(E,le+"return "+V).apply(e,I)});if(_e.source=V,ub(_e))throw _e;return _e}function wN(a){return Be(a).toLowerCase()}function kN(a){return Be(a).toUpperCase()}function SN(a,s,d){if(a=Be(a),a&&(d||s===e))return Ak(a);if(!a||!(s=Zn(s)))return a;var h=Ur(a),x=Ur(s),E=Ok(h,x),I=Lk(h,x)+1;return gi(h,E,I).join("")}function _N(a,s,d){if(a=Be(a),a&&(d||s===e))return a.slice(0,Mk(a)+1);if(!a||!(s=Zn(s)))return a;var h=Ur(a),x=Lk(h,Ur(s))+1;return gi(h,0,x).join("")}function CN(a,s,d){if(a=Be(a),a&&(d||s===e))return a.replace(rl,"");if(!a||!(s=Zn(s)))return a;var h=Ur(a),x=Ok(h,Ur(s));return gi(h,x).join("")}function EN(a,s){var d=U,h=Y;if(ct(s)){var x="separator"in s?s.separator:x;d="length"in s?ke(s.length):d,h="omission"in s?Zn(s.omission):h}a=Be(a);var E=a.length;if(dl(a)){var I=Ur(a);E=I.length}if(d>=E)return a;var L=d-fl(h);if(L<1)return h;var N=I?gi(I,0,L).join(""):a.slice(0,L);if(x===e)return N+h;if(I&&(L+=N.length-L),cb(x)){if(a.slice(L).search(x)){var q,j=N;for(x.global||(x=Eg(x.source,Be(ia.exec(x))+"g")),x.lastIndex=0;q=x.exec(j);)var V=q.index;N=N.slice(0,V===e?L:V)}}else if(a.indexOf(Zn(x),L)!=L){var Z=N.lastIndexOf(x);Z>-1&&(N=N.slice(0,Z))}return N+h}function RN(a){return a=Be(a),a&&yp.test(a)?a.replace(Ns,nP):a}var TN=yl(function(a,s,d){return a+(d?" ":"")+s.toUpperCase()}),fb=kS("toUpperCase");function x_(a,s,d){return a=Be(a),s=d?e:s,s===e?X6(a)?iP(a):W6(a):a.match(s)||[]}var w_=Ee(function(a,s){try{return Xn(a,e,s)}catch(d){return ub(d)?d:new ve(d)}}),IN=Lo(function(a,s){return gr(s,function(d){d=lo(d),Ao(a,d,lb(a[d],a))}),a});function AN(a){var s=a==null?0:a.length,d=pe();return a=s?lt(a,function(h){if(typeof h[1]!="function")throw new br(o);return[d(h[0]),h[1]]}):[],Ee(function(h){for(var x=-1;++x<s;){var E=a[x];if(Xn(E[0],this,h))return Xn(E[1],this,h)}})}function ON(a){return n3(yr(a,p))}function mb(a){return function(){return a}}function LN(a,s){return a==null||a!==a?s:a}var PN=_S(),MN=_S(!0);function Wn(a){return a}function hb(a){return eS(typeof a=="function"?a:yr(a,p))}function DN(a){return nS(yr(a,p))}function NN(a,s){return rS(a,yr(s,p))}var zN=Ee(function(a,s){return function(d){return du(d,a,s)}}),FN=Ee(function(a,s){return function(d){return du(a,d,s)}});function gb(a,s,d){var h=Vt(s),x=_d(s,h);d==null&&!(ct(s)&&(x.length||!h.length))&&(d=s,s=a,a=this,x=_d(s,Vt(s)));var E=!(ct(d)&&"chain"in d)||!!d.chain,I=Mo(a);return gr(x,function(L){var N=s[L];a[L]=N,I&&(a.prototype[L]=function(){var q=this.__chain__;if(E||q){var j=a(this.__wrapped__),V=j.__actions__=Bn(this.__actions__);return V.push({func:N,args:arguments,thisArg:a}),j.__chain__=q,j}return N.apply(a,ui([this.value()],arguments))})}),a}function BN(){return jt._===this&&(jt._=pP),this}function bb(){}function UN(a){return a=ke(a),Ee(function(s){return oS(s,a)})}var HN=Qg(lt),WN=Qg(Ck),qN=Qg(yg);function k_(a){return tb(a)?xg(lo(a)):y3(a)}function jN(a){return function(s){return a==null?e:ha(a,s)}}var VN=ES(),KN=ES(!0);function vb(){return[]}function yb(){return!1}function GN(){return{}}function QN(){return""}function $N(){return!0}function YN(a,s){if(a=ke(a),a<1||a>he)return[];var d=Pe,h=an(a,Pe);s=pe(s),a-=Pe;for(var x=Sg(h,s);++d<a;)s(d);return x}function XN(a){return we(a)?lt(a,lo):er(a)?[a]:Bn(WS(Be(a)))}function JN(a){var s=++uP;return Be(a)+s}var ZN=Ad(function(a,s){return a+s},0),ez=$g("ceil"),tz=Ad(function(a,s){return a/s},1),nz=$g("floor");function rz(a){return a&&a.length?Sd(a,Wn,Mg):e}function oz(a,s){return a&&a.length?Sd(a,pe(s,2),Mg):e}function iz(a){return Tk(a,Wn)}function az(a,s){return Tk(a,pe(s,2))}function lz(a){return a&&a.length?Sd(a,Wn,Fg):e}function sz(a,s){return a&&a.length?Sd(a,pe(s,2),Fg):e}var uz=Ad(function(a,s){return a*s},1),cz=$g("round"),pz=Ad(function(a,s){return a-s},0);function dz(a){return a&&a.length?kg(a,Wn):0}function fz(a,s){return a&&a.length?kg(a,pe(s,2)):0}return _.after=D7,_.ary=ZS,_.assign=kD,_.assignIn=f_,_.assignInWith=qd,_.assignWith=SD,_.at=_D,_.before=e_,_.bind=lb,_.bindAll=IN,_.bindKey=t_,_.castArray=G7,_.chain=YS,_.chunk=nM,_.compact=rM,_.concat=oM,_.cond=AN,_.conforms=ON,_.constant=mb,_.countBy=d7,_.create=CD,_.curry=n_,_.curryRight=r_,_.debounce=o_,_.defaults=ED,_.defaultsDeep=RD,_.defer=N7,_.delay=z7,_.difference=iM,_.differenceBy=aM,_.differenceWith=lM,_.drop=sM,_.dropRight=uM,_.dropRightWhile=cM,_.dropWhile=pM,_.fill=dM,_.filter=m7,_.flatMap=b7,_.flatMapDeep=v7,_.flatMapDepth=y7,_.flatten=KS,_.flattenDeep=fM,_.flattenDepth=mM,_.flip=F7,_.flow=PN,_.flowRight=MN,_.fromPairs=hM,_.functions=MD,_.functionsIn=DD,_.groupBy=x7,_.initial=bM,_.intersection=vM,_.intersectionBy=yM,_.intersectionWith=xM,_.invert=zD,_.invertBy=FD,_.invokeMap=k7,_.iteratee=hb,_.keyBy=S7,_.keys=Vt,_.keysIn=Hn,_.map=zd,_.mapKeys=UD,_.mapValues=HD,_.matches=DN,_.matchesProperty=NN,_.memoize=Bd,_.merge=WD,_.mergeWith=m_,_.method=zN,_.methodOf=FN,_.mixin=gb,_.negate=Ud,_.nthArg=UN,_.omit=qD,_.omitBy=jD,_.once=B7,_.orderBy=_7,_.over=HN,_.overArgs=U7,_.overEvery=WN,_.overSome=qN,_.partial=sb,_.partialRight=i_,_.partition=C7,_.pick=VD,_.pickBy=h_,_.property=k_,_.propertyOf=jN,_.pull=_M,_.pullAll=QS,_.pullAllBy=CM,_.pullAllWith=EM,_.pullAt=RM,_.range=VN,_.rangeRight=KN,_.rearg=H7,_.reject=T7,_.remove=TM,_.rest=W7,_.reverse=ib,_.sampleSize=A7,_.set=GD,_.setWith=QD,_.shuffle=O7,_.slice=IM,_.sortBy=M7,_.sortedUniq=NM,_.sortedUniqBy=zM,_.split=bN,_.spread=q7,_.tail=FM,_.take=BM,_.takeRight=UM,_.takeRightWhile=HM,_.takeWhile=WM,_.tap=r7,_.throttle=j7,_.thru=Nd,_.toArray=c_,_.toPairs=g_,_.toPairsIn=b_,_.toPath=XN,_.toPlainObject=d_,_.transform=$D,_.unary=V7,_.union=qM,_.unionBy=jM,_.unionWith=VM,_.uniq=KM,_.uniqBy=GM,_.uniqWith=QM,_.unset=YD,_.unzip=ab,_.unzipWith=$S,_.update=XD,_.updateWith=JD,_.values=kl,_.valuesIn=ZD,_.without=$M,_.words=x_,_.wrap=K7,_.xor=YM,_.xorBy=XM,_.xorWith=JM,_.zip=ZM,_.zipObject=e7,_.zipObjectDeep=t7,_.zipWith=n7,_.entries=g_,_.entriesIn=b_,_.extend=f_,_.extendWith=qd,gb(_,_),_.add=ZN,_.attempt=w_,_.camelCase=rN,_.capitalize=v_,_.ceil=ez,_.clamp=eN,_.clone=Q7,_.cloneDeep=Y7,_.cloneDeepWith=X7,_.cloneWith=$7,_.conformsTo=J7,_.deburr=y_,_.defaultTo=LN,_.divide=tz,_.endsWith=oN,_.eq=Wr,_.escape=iN,_.escapeRegExp=aN,_.every=f7,_.find=h7,_.findIndex=jS,_.findKey=TD,_.findLast=g7,_.findLastIndex=VS,_.findLastKey=ID,_.floor=nz,_.forEach=XS,_.forEachRight=JS,_.forIn=AD,_.forInRight=OD,_.forOwn=LD,_.forOwnRight=PD,_.get=pb,_.gt=Z7,_.gte=eD,_.has=ND,_.hasIn=db,_.head=GS,_.identity=Wn,_.includes=w7,_.indexOf=gM,_.inRange=tN,_.invoke=BD,_.isArguments=va,_.isArray=we,_.isArrayBuffer=tD,_.isArrayLike=Un,_.isArrayLikeObject=wt,_.isBoolean=nD,_.isBuffer=bi,_.isDate=rD,_.isElement=oD,_.isEmpty=iD,_.isEqual=aD,_.isEqualWith=lD,_.isError=ub,_.isFinite=sD,_.isFunction=Mo,_.isInteger=a_,_.isLength=Hd,_.isMap=l_,_.isMatch=uD,_.isMatchWith=cD,_.isNaN=pD,_.isNative=dD,_.isNil=mD,_.isNull=fD,_.isNumber=s_,_.isObject=ct,_.isObjectLike=mt,_.isPlainObject=vu,_.isRegExp=cb,_.isSafeInteger=hD,_.isSet=u_,_.isString=Wd,_.isSymbol=er,_.isTypedArray=wl,_.isUndefined=gD,_.isWeakMap=bD,_.isWeakSet=vD,_.join=wM,_.kebabCase=lN,_.last=wr,_.lastIndexOf=kM,_.lowerCase=sN,_.lowerFirst=uN,_.lt=yD,_.lte=xD,_.max=rz,_.maxBy=oz,_.mean=iz,_.meanBy=az,_.min=lz,_.minBy=sz,_.stubArray=vb,_.stubFalse=yb,_.stubObject=GN,_.stubString=QN,_.stubTrue=$N,_.multiply=uz,_.nth=SM,_.noConflict=BN,_.noop=bb,_.now=Fd,_.pad=cN,_.padEnd=pN,_.padStart=dN,_.parseInt=fN,_.random=nN,_.reduce=E7,_.reduceRight=R7,_.repeat=mN,_.replace=hN,_.result=KD,_.round=cz,_.runInContext=D,_.sample=I7,_.size=L7,_.snakeCase=gN,_.some=P7,_.sortedIndex=AM,_.sortedIndexBy=OM,_.sortedIndexOf=LM,_.sortedLastIndex=PM,_.sortedLastIndexBy=MM,_.sortedLastIndexOf=DM,_.startCase=vN,_.startsWith=yN,_.subtract=pz,_.sum=dz,_.sumBy=fz,_.template=xN,_.times=YN,_.toFinite=Do,_.toInteger=ke,_.toLength=p_,_.toLower=wN,_.toNumber=kr,_.toSafeInteger=wD,_.toString=Be,_.toUpper=kN,_.trim=SN,_.trimEnd=_N,_.trimStart=CN,_.truncate=EN,_.unescape=RN,_.uniqueId=JN,_.upperCase=TN,_.upperFirst=fb,_.each=XS,_.eachRight=JS,_.first=GS,gb(_,function(){var a={};return io(_,function(s,d){We.call(_.prototype,d)||(a[d]=s)}),a}(),{chain:!1}),_.VERSION=t,gr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){_[a].placeholder=_}),gr(["drop","take"],function(a,s){Oe.prototype[a]=function(d){d=d===e?1:Nt(ke(d),0);var h=this.__filtered__&&!s?new Oe(this):this.clone();return h.__filtered__?h.__takeCount__=an(d,h.__takeCount__):h.__views__.push({size:an(d,Pe),type:a+(h.__dir__<0?"Right":"")}),h},Oe.prototype[a+"Right"]=function(d){return this.reverse()[a](d).reverse()}}),gr(["filter","map","takeWhile"],function(a,s){var d=s+1,h=d==J||d==re;Oe.prototype[a]=function(x){var E=this.clone();return E.__iteratees__.push({iteratee:pe(x,3),type:d}),E.__filtered__=E.__filtered__||h,E}}),gr(["head","last"],function(a,s){var d="take"+(s?"Right":"");Oe.prototype[a]=function(){return this[d](1).value()[0]}}),gr(["initial","tail"],function(a,s){var d="drop"+(s?"":"Right");Oe.prototype[a]=function(){return this.__filtered__?new Oe(this):this[d](1)}}),Oe.prototype.compact=function(){return this.filter(Wn)},Oe.prototype.find=function(a){return this.filter(a).head()},Oe.prototype.findLast=function(a){return this.reverse().find(a)},Oe.prototype.invokeMap=Ee(function(a,s){return typeof a=="function"?new Oe(this):this.map(function(d){return du(d,a,s)})}),Oe.prototype.reject=function(a){return this.filter(Ud(pe(a)))},Oe.prototype.slice=function(a,s){a=ke(a);var d=this;return d.__filtered__&&(a>0||s<0)?new Oe(d):(a<0?d=d.takeRight(-a):a&&(d=d.drop(a)),s!==e&&(s=ke(s),d=s<0?d.dropRight(-s):d.take(s-a)),d)},Oe.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},Oe.prototype.toArray=function(){return this.take(Pe)},io(Oe.prototype,function(a,s){var d=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),x=_[h?"take"+(s=="last"?"Right":""):s],E=h||/^find/.test(s);x&&(_.prototype[s]=function(){var I=this.__wrapped__,L=h?[1]:arguments,N=I instanceof Oe,q=L[0],j=N||we(I),V=function(Te){var Me=x.apply(_,ui([Te],L));return h&&Z?Me[0]:Me};j&&d&&typeof q=="function"&&q.length!=1&&(N=j=!1);var Z=this.__chain__,le=!!this.__actions__.length,de=E&&!Z,_e=N&&!le;if(!E&&j){I=_e?I:new Oe(this);var fe=a.apply(I,L);return fe.__actions__.push({func:Nd,args:[V],thisArg:e}),new vr(fe,Z)}return de&&_e?a.apply(this,L):(fe=this.thru(V),de?h?fe.value()[0]:fe.value():fe)})}),gr(["pop","push","shift","sort","splice","unshift"],function(a){var s=sd[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",h=/^(?:pop|shift)$/.test(a);_.prototype[a]=function(){var x=arguments;if(h&&!this.__chain__){var E=this.value();return s.apply(we(E)?E:[],x)}return this[d](function(I){return s.apply(we(I)?I:[],x)})}}),io(Oe.prototype,function(a,s){var d=_[s];if(d){var h=d.name+"";We.call(gl,h)||(gl[h]=[]),gl[h].push({name:s,func:d})}}),gl[Id(e,k).name]=[{name:"wrapper",func:e}],Oe.prototype.clone=RP,Oe.prototype.reverse=TP,Oe.prototype.value=IP,_.prototype.at=o7,_.prototype.chain=i7,_.prototype.commit=a7,_.prototype.next=l7,_.prototype.plant=u7,_.prototype.reverse=c7,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=p7,_.prototype.first=_.prototype.head,iu&&(_.prototype[iu]=s7),_},pi=aP();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(jt._=pi,define(function(){return pi})):ca?((ca.exports=pi)._=pi,hg._=pi):jt._=pi}).call(Rs)});var A6=K(rE(),1);var k6=K(Ce(),1);var Ar=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};var Jr=typeof window>"u"||"Deno"in globalThis;function fn(){}function aE(e,t){return typeof e=="function"?e(t):e}function pc(e){return typeof e=="number"&&e>=0&&e!==1/0}function fm(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Bi(e,t){return typeof e=="function"?e(t):e}function ur(e,t){return typeof e=="function"?e(t):e}function Wv(e,t){let{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:l,stale:u}=e;if(l){if(r){if(t.queryHash!==dc(l,t.options))return!1}else if(!Zl(t.queryKey,l))return!1}if(n!=="all"){let c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof u=="boolean"&&t.isStale()!==u||o&&o!==t.state.fetchStatus||i&&!i(t))}function qv(e,t){let{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Go(t.options.mutationKey)!==Go(i))return!1}else if(!Zl(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function dc(e,t){return(t?.queryKeyHashFn||Go)(e)}function Go(e){return JSON.stringify(e,(t,n)=>Hv(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Zl(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Zl(e[n],t[n])):!1}function lE(e,t){if(e===t)return e;let n=oE(e)&&oE(t);if(n||Hv(e)&&Hv(t)){let r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),l=i.length,u=n?[]:{},c=0;for(let p=0;p<l;p++){let f=n?p:i[p];(!n&&r.includes(f)||n)&&e[f]===void 0&&t[f]===void 0?(u[f]=void 0,c++):(u[f]=lE(e[f],t[f]),u[f]===e[f]&&e[f]!==void 0&&c++)}return o===l&&c===o?e:u}return t}function es(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function oE(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Hv(e){if(!iE(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!iE(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function iE(e){return Object.prototype.toString.call(e)==="[object Object]"}function sE(e){return new Promise(t=>{setTimeout(t,e)})}function fc(e,t,n){if(typeof n.structuralSharing=="function")return n.structuralSharing(e,t);if(n.structuralSharing!==!1){if(0)try{}catch(r){}return lE(e,t)}return t}function uE(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function cE(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var jv=Symbol();function mm(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===jv?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var z8=class extends Ar{#e;#t;#r;constructor(){super(),this.#r=e=>{if(!Jr&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},ts=new z8;var F8=class extends Ar{#e=!0;#t;#r;constructor(){super(),this.#r=e=>{if(!Jr&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#r=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(n=>{n(e)}))}isOnline(){return this.#e}},ns=new F8;function B8(e){return Math.min(1e3*2**e,3e4)}function Vv(e){return(e??"online")==="online"?ns.isOnline():!0}var pE=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function hm(e){return e instanceof pE}function gm(e){let t=!1,n=0,r=!1,o,i,l,u=new Promise((y,w)=>{i=y,l=w}),c=y=>{r||(v(new pE(y)),e.abort?.())},p=()=>{t=!0},f=()=>{t=!1},m=()=>ts.isFocused()&&(e.networkMode==="always"||ns.isOnline())&&e.canRun(),g=()=>Vv(e.networkMode)&&e.canRun(),b=y=>{r||(r=!0,e.onSuccess?.(y),o?.(),i(y))},v=y=>{r||(r=!0,e.onError?.(y),o?.(),l(y))},k=()=>new Promise(y=>{o=w=>{(r||m())&&y(w)},e.onPause?.()}).then(()=>{o=void 0,r||e.onContinue?.()}),C=()=>{if(r)return;let y,w=n===0?e.initialPromise:void 0;try{y=w??e.fn()}catch(S){y=Promise.reject(S)}Promise.resolve(y).then(b).catch(S=>{if(r)return;let T=e.retry??(Jr?0:3),M=e.retryDelay??B8,R=typeof M=="function"?M(n,S):M,z=T===!0||typeof T=="number"&&n<T||typeof T=="function"&&T(n,S);if(t||!z){v(S);return}n++,e.onFail?.(n,S),sE(R).then(()=>m()?void 0:k()).then(()=>{t?v(S):C()})})};return{promise:u,cancel:c,continue:()=>(o?.(),u),cancelRetry:p,continueRetry:f,canStart:g,start:()=>(g()?C():k().then(C),u)}}function U8(){let e=[],t=0,n=u=>{u()},r=u=>{u()},o=u=>setTimeout(u,0),i=u=>{t?e.push(u):o(()=>{n(u)})},l=()=>{let u=e;e=[],u.length&&o(()=>{r(()=>{u.forEach(c=>{n(c)})})})};return{batch:u=>{let c;t++;try{c=u()}finally{t--,t||l()}return c},batchCalls:u=>(...c)=>{i(()=>{u(...c)})},schedule:i,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u},setScheduler:u=>{o=u}}}var je=U8();var bm=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),pc(this.gcTime)&&(this.#e=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Jr?1/0:5*60*1e3))}clearGcTimeout(){this.#e&&(clearTimeout(this.#e),this.#e=void 0)}};var dE=class extends bm{#e;#t;#r;#n;#a;#i;constructor(e){super(),this.#i=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=H8(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#n?.promise}setOptions(e){this.options={...this.#a,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#r.remove(this)}setData(e,t){let n=fc(this.state.data,e,this.options);return this.#o({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e,t){this.#o({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#n?.promise;return this.#n?.cancel(e),t?t.then(fn).catch(fn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>ur(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!fm(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#n?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#n?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#n&&(this.#i?this.#n.cancel({revert:!0}):this.#n.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(e,t){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#n)return this.#n.continueRetry(),this.#n.promise}if(e&&this.setOptions(e),!this.options.queryFn){let u=this.observers.find(c=>c.options.queryFn);u&&this.setOptions(u.options)}let n=new AbortController,r=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(this.#i=!0,n.signal)})},o=()=>{let u=mm(this.options,t),c={queryKey:this.queryKey,meta:this.meta};return r(c),this.#i=!1,this.options.persister?this.options.persister(u,c,this):u(c)},i={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};r(i),this.options.behavior?.onFetch(i,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==i.fetchOptions?.meta)&&this.#o({type:"fetch",meta:i.fetchOptions?.meta});let l=u=>{hm(u)&&u.silent||this.#o({type:"error",error:u}),hm(u)||(this.#r.config.onError?.(u,this),this.#r.config.onSettled?.(this.state.data,u,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#n=gm({initialPromise:t?.initialPromise,fn:i.fetchFn,abort:n.abort.bind(n),onSuccess:u=>{if(u===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(c){l(c);return}this.#r.config.onSuccess?.(u,this),this.#r.config.onSettled?.(u,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(u,c)=>{this.#o({type:"failed",failureCount:u,error:c})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0}),this.#n.start()}#o(e){let t=n=>{switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Kv(n.data,this.options),fetchMeta:e.meta??null};case"success":return{...n,data:e.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;return hm(r)&&r.revert&&this.#t?{...this.#t,fetchStatus:"idle"}:{...n,error:r,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=t(this.state),je.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}};function Kv(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Vv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function H8(e){let t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var fE=class extends Ar{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,o=t.queryHash??dc(r,t),i=this.get(o);return i||(i=new dE({cache:this,queryKey:r,queryHash:o,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(i)),i}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){je.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(n=>Wv(t,n))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(n=>Wv(e,n)):t}notify(e){je.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){je.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){je.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}};var mE=class extends bm{#e;#t;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||Gv(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){this.#r=gm({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(r,o)=>{this.#n({type:"failed",failureCount:r,error:o})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});let t=this.state.status==="pending",n=!this.#r.canStart();try{if(!t){this.#n({type:"pending",variables:e,isPaused:n}),await this.#t.config.onMutate?.(e,this);let o=await this.options.onMutate?.(e);o!==this.state.context&&this.#n({type:"pending",context:o,variables:e,isPaused:n})}let r=await this.#r.start();return await this.#t.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#t.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#n({type:"success",data:r}),r}catch(r){try{throw await this.#t.config.onError?.(r,e,this.state.context,this),await this.options.onError?.(r,e,this.state.context),await this.#t.config.onSettled?.(void 0,r,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,r,e,this.state.context),r}finally{this.#n({type:"error",error:r})}}finally{this.#t.runNext(this)}}#n(e){let t=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),je.batch(()=>{this.#e.forEach(n=>{n.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function Gv(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var hE=class extends Ar{constructor(e={}){super(),this.config=e,this.#e=new Map,this.#t=Date.now()}#e;#t;build(e,t,n){let r=new mE({mutationCache:this,mutationId:++this.#t,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){let t=vm(e),n=this.#e.get(t)??[];n.push(e),this.#e.set(t,n),this.notify({type:"added",mutation:e})}remove(e){let t=vm(e);if(this.#e.has(t)){let n=this.#e.get(t)?.filter(r=>r!==e);n&&(n.length===0?this.#e.delete(t):this.#e.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#e.get(vm(e))?.find(n=>n.state.status==="pending");return!t||t===e}runNext(e){return this.#e.get(vm(e))?.find(n=>n!==e&&n.state.isPaused)?.continue()??Promise.resolve()}clear(){je.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#e.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(n=>qv(t,n))}findAll(e={}){return this.getAll().filter(t=>qv(e,t))}notify(e){je.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(t=>t.state.isPaused);return je.batch(()=>Promise.all(e.map(t=>t.continue().catch(fn))))}};function vm(e){return e.options.scope?.id??String(e.mutationId)}function mc(e){return{onFetch:(t,n)=>{let r=async()=>{let o=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,l=t.state.data?.pages||[],u=t.state.data?.pageParams||[],c={pages:[],pageParams:[]},p=!1,f=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?p=!0:t.signal.addEventListener("abort",()=>{p=!0}),t.signal)})},m=mm(t.options,t.fetchOptions),g=async(v,k,C)=>{if(p)return Promise.reject();if(k==null&&v.pages.length)return Promise.resolve(v);let y={queryKey:t.queryKey,pageParam:k,direction:C?"backward":"forward",meta:t.options.meta};f(y);let w=await m(y),{maxPages:S}=t.options,T=C?cE:uE;return{pages:T(v.pages,w,S),pageParams:T(v.pageParams,k,S)}},b;if(i&&l.length){let v=i==="backward",k=v?gE:Qv,C={pages:l,pageParams:u},y=k(o,C);b=await g(C,y,v)}else{b=await g(c,u[0]??o.initialPageParam);let v=e??l.length;for(let k=1;k<v;k++){let C=Qv(o,b);if(C==null)break;b=await g(b,C)}}return b};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=r}}}function Qv(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function gE(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}function bE(e,t){return t?Qv(e,t)!=null:!1}function vE(e,t){return!t||!e.getPreviousPageParam?!1:gE(e,t)!=null}var $v=class{#e;#t;#r;#n;#a;#i;#o;#l;constructor(e={}){this.#e=e.queryCache||new fE,this.#t=e.mutationCache||new hE,this.#r=e.defaultOptions||{},this.#n=new Map,this.#a=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#o=ts.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#l=ns.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#o?.(),this.#o=void 0,this.#l?.(),this.#l=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),r=this.#e.build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Bi(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:n})=>{let r=n.data;return[t,r]})}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,l=aE(t,i);if(l!==void 0)return this.#e.build(this,r).setData(l,{...n,manual:!0})}setQueriesData(e,t,n){return je.batch(()=>this.#e.findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;je.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){let n=this.#e,r={type:"active",...e};return je.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){let n={revert:!0,...t},r=je.batch(()=>this.#e.findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(fn).catch(fn)}invalidateQueries(e={},t={}){return je.batch(()=>{if(this.#e.findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();let n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){let n={...t,cancelRefetch:t?.cancelRefetch??!0},r=je.batch(()=>this.#e.findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(fn)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(fn)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(Bi(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(fn).catch(fn)}fetchInfiniteQuery(e){return e.behavior=mc(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(fn).catch(fn)}resumePausedMutations(){return ns.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#r}setDefaultOptions(e){this.#r=e}setQueryDefaults(e,t){this.#n.set(Go(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#n.values()],n={};return t.forEach(r=>{Zl(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){this.#a.set(Go(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#a.values()],n={};return t.forEach(r=>{Zl(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#r.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=dc(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===jv&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#r.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}};var wE=class extends Ar{constructor(e,t){super(),this.options=t,this.#e=e,this.#o=null,this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#r=void 0;#n=void 0;#a;#i;#o;#l;#d;#f;#u;#c;#s;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),yE(this.#t,this.options)?this.#p():this.updateResult(),this.#v())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Yv(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Yv(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#y(),this.#x(),this.#t.removeObserver(this)}setOptions(e,t){let n=this.options,r=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof ur(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#t.setOptions(this.options),n._defaulted&&!es(this.options,n)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});let o=this.hasListeners();o&&xE(this.#t,r,this.options,n)&&this.#p(),this.updateResult(t),o&&(this.#t!==r||ur(this.options.enabled,this.#t)!==ur(n.enabled,this.#t)||Bi(this.options.staleTime,this.#t)!==Bi(n.staleTime,this.#t))&&this.#h();let i=this.#g();o&&(this.#t!==r||ur(this.options.enabled,this.#t)!==ur(n.enabled,this.#t)||i!==this.#s)&&this.#b(i)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return q8(this,n)&&(this.#n=n,this.#i=this.options,this.#a=this.#t.state),n}getCurrentResult(){return this.#n}trackResult(e,t){let n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),t?.(r),e[r])})}),n}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#p({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#n))}#p(e){this.#w();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(fn)),t}#h(){this.#y();let e=Bi(this.options.staleTime,this.#t);if(Jr||this.#n.isStale||!pc(e))return;let n=fm(this.#n.dataUpdatedAt,e)+1;this.#u=setTimeout(()=>{this.#n.isStale||this.updateResult()},n)}#g(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#b(e){this.#x(),this.#s=e,!(Jr||ur(this.options.enabled,this.#t)===!1||!pc(this.#s)||this.#s===0)&&(this.#c=setInterval(()=>{(this.options.refetchIntervalInBackground||ts.isFocused())&&this.#p()},this.#s))}#v(){this.#h(),this.#b(this.#g())}#y(){this.#u&&(clearTimeout(this.#u),this.#u=void 0)}#x(){this.#c&&(clearInterval(this.#c),this.#c=void 0)}createResult(e,t){let n=this.#t,r=this.options,o=this.#n,i=this.#a,l=this.#i,c=e!==n?e.state:this.#r,{state:p}=e,f={...p},m=!1,g;if(t._optimisticResults){let R=this.hasListeners(),z=!R&&yE(e,t),U=R&&xE(e,n,t,r);(z||U)&&(f={...f,...Kv(p.data,e.options)}),t._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:b,errorUpdatedAt:v,status:k}=f;if(t.select&&f.data!==void 0)if(o&&f.data===i?.data&&t.select===this.#l)g=this.#d;else try{this.#l=t.select,g=t.select(f.data),g=fc(o?.data,g,t),this.#d=g,this.#o=null}catch(R){this.#o=R}else g=f.data;if(t.placeholderData!==void 0&&g===void 0&&k==="pending"){let R;if(o?.isPlaceholderData&&t.placeholderData===l?.placeholderData)R=o.data;else if(R=typeof t.placeholderData=="function"?t.placeholderData(this.#f?.state.data,this.#f):t.placeholderData,t.select&&R!==void 0)try{R=t.select(R),this.#o=null}catch(z){this.#o=z}R!==void 0&&(k="success",g=fc(o?.data,R,t),m=!0)}this.#o&&(b=this.#o,g=this.#d,v=Date.now(),k="error");let C=f.fetchStatus==="fetching",y=k==="pending",w=k==="error",S=y&&C,T=g!==void 0;return{status:k,fetchStatus:f.fetchStatus,isPending:y,isSuccess:k==="success",isError:w,isInitialLoading:S,isLoading:S,data:g,dataUpdatedAt:f.dataUpdatedAt,error:b,errorUpdatedAt:v,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:C,isRefetching:C&&!y,isLoadingError:w&&!T,isPaused:f.fetchStatus==="paused",isPlaceholderData:m,isRefetchError:w&&T,isStale:Xv(e,t),refetch:this.refetch}}updateResult(e){let t=this.#n,n=this.createResult(this.#t,this.options);if(this.#a=this.#t.state,this.#i=this.options,this.#a.data!==void 0&&(this.#f=this.#t),es(n,t))return;this.#n=n;let r={},o=()=>{if(!t)return!0;let{notifyOnChangeProps:i}=this.options,l=typeof i=="function"?i():i;if(l==="all"||!l&&!this.#m.size)return!0;let u=new Set(l??this.#m);return this.options.throwOnError&&u.add("error"),Object.keys(this.#n).some(c=>{let p=c;return this.#n[p]!==t[p]&&u.has(p)})};e?.listeners!==!1&&o()&&(r.listeners=!0),this.#k({...r,...e})}#w(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;let t=this.#t;this.#t=e,this.#r=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#v()}#k(e){je.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#n)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function W8(e,t){return ur(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function yE(e,t){return W8(e,t)||e.state.data!==void 0&&Yv(e,t,t.refetchOnMount)}function Yv(e,t,n){if(ur(t.enabled,e)!==!1){let r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Xv(e,t)}return!1}function xE(e,t,n,r){return(e!==t||ur(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&Xv(e,n)}function Xv(e,t){return ur(t.enabled,e)!==!1&&e.isStaleByTime(Bi(t.staleTime,e))}function q8(e,t){return!es(e.getCurrentResult(),t)}var Jv=class extends wE{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:mc()},t)}getOptimisticResult(e){return e.behavior=mc(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:o,isRefetching:i,isError:l,isRefetchError:u}=r,c=n.fetchMeta?.fetchMore?.direction,p=l&&c==="forward",f=o&&c==="forward",m=l&&c==="backward",g=o&&c==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:bE(t,n.data),hasPreviousPage:vE(t,n.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:m,isFetchingPreviousPage:g,isRefetchError:u&&!p&&!m,isRefetching:i&&!f&&!g}}};var Zv=class extends Ar{#e;#t=void 0;#r;#n;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),es(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&Go(t.mutationKey)!==Go(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#a(),this.#i(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#a(),this.#i()}mutate(e,t){return this.#n=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#a(){let e=this.#r?.state??Gv();this.#t={...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset}}#i(e){je.batch(()=>{if(this.#n&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context;e?.type==="success"?(this.#n.onSuccess?.(e.data,t,n),this.#n.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#n.onError?.(e.error,t,n),this.#n.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(t=>{t(this.#t)})})}};var rs=K(Ce(),1),CE=K(Ve(),1),ey=rs.createContext(void 0),ho=e=>{let t=rs.useContext(ey);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},ty=({client:e,children:t})=>(rs.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,CE.jsx)(ey.Provider,{value:e,children:t}));var xm=K(Ce(),1),EE=xm.createContext(!1),RE=()=>xm.useContext(EE),bJ=EE.Provider;var hc=K(Ce(),1),Y8=K(Ve(),1);function X8(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var J8=hc.createContext(X8()),TE=()=>hc.useContext(J8);var AE=K(Ce(),1);function wm(e,t){return typeof e=="function"?e(...t):!!e}function IE(){}var OE=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},LE=e=>{AE.useEffect(()=>{e.clearReset()},[e])},PE=({result:e,errorResetBoundary:t,throwOnError:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&wm(n,[e.error,r]);var ME=e=>{e.suspense&&(typeof e.staleTime!="number"&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))};var DE=(e,t)=>e?.suspense&&t.isPending,NE=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});var Ui=K(Ce(),1);function zE(e,t,n){let r=ho(n),o=RE(),i=TE(),l=r.defaultQueryOptions(e);r.getDefaultOptions().queries?._experimental_beforeQuery?.(l),l._optimisticResults=o?"isRestoring":"optimistic",ME(l),OE(l,i),LE(i);let[u]=Ui.useState(()=>new t(r,l)),c=u.getOptimisticResult(l);if(Ui.useSyncExternalStore(Ui.useCallback(p=>{let f=o?()=>{}:u.subscribe(je.batchCalls(p));return u.updateResult(),f},[u,o]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),Ui.useEffect(()=>{u.setOptions(l,{listeners:!1})},[l,u]),DE(l,c))throw NE(l,u,i);if(PE({result:c,errorResetBoundary:i,throwOnError:l.throwOnError,query:r.getQueryCache().get(l.queryHash)}))throw c.error;return r.getDefaultOptions().queries?._experimental_afterQuery?.(l,c),l.notifyOnChangeProps?c:u.trackResult(c)}var Qo=K(Ce(),1);function gc(e,t){let n=ho(t),[r]=Qo.useState(()=>new Zv(n,e));Qo.useEffect(()=>{r.setOptions(e)},[r,e]);let o=Qo.useSyncExternalStore(Qo.useCallback(l=>r.subscribe(je.batchCalls(l)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),i=Qo.useCallback((l,u)=>{r.mutate(l,u).catch(IE)},[r]);if(o.error&&wm(r.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:i,mutateAsync:o.mutate}}function ny(e,t){return zE(e,Jv,t)}var eR=K(Ce(),1);var tn=K(Ce(),1);var Z8=K(Ce(),1);function eB(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function FE(...e){return t=>e.forEach(n=>eB(n,t))}var os=K(Ve(),1),oy=tn.forwardRef((e,t)=>{let{children:n,...r}=e,o=tn.Children.toArray(n),i=o.find(nB);if(i){let l=i.props.children,u=o.map(c=>c===i?tn.Children.count(l)>1?tn.Children.only(null):tn.isValidElement(l)?l.props.children:null:c);return(0,os.jsx)(ry,{...r,ref:t,children:tn.isValidElement(l)?tn.cloneElement(l,void 0,u):null})}return(0,os.jsx)(ry,{...r,ref:t,children:n})});oy.displayName="Slot";var ry=tn.forwardRef((e,t)=>{let{children:n,...r}=e;if(tn.isValidElement(n)){let o=oB(n);return tn.cloneElement(n,{...rB(r,n.props),ref:t?FE(t,o):o})}return tn.Children.count(n)>1?tn.Children.only(null):null});ry.displayName="SlotClone";var tB=({children:e})=>(0,os.jsx)(os.Fragment,{children:e});function nB(e){return tn.isValidElement(e)&&e.type===tB}function rB(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...u)=>{i(...u),o(...u)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function oB(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function BE(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=BE(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function UE(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=BE(e))&&(r&&(r+=" "),r+=t);return r}var HE=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,WE=UE,qE=(e,t)=>n=>{var r;if(t?.variants==null)return WE(e,n?.class,n?.className);let{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(p=>{let f=n?.[p],m=i?.[p];if(f===null)return null;let g=HE(f)||HE(m);return o[p][g]}),u=n&&Object.entries(n).reduce((p,f)=>{let[m,g]=f;return g===void 0||(p[m]=g),p},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,f)=>{let{class:m,className:g,...b}=f;return Object.entries(b).every(v=>{let[k,C]=v;return Array.isArray(C)?C.includes({...i,...u}[k]):{...i,...u}[k]===C})?[...p,m,g]:p},[]);return WE(e,l,c,n?.class,n?.className)};function jE(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=jE(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function VE(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=jE(e))&&(r&&(r+=" "),r+=t);return r}var ly="-",iB=e=>{let t=lB(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{let u=l.split(ly);return u[0]===""&&u.length!==1&&u.shift(),QE(u,t)||aB(l)},getConflictingClassGroupIds:(l,u)=>{let c=n[l]||[];return u&&r[l]?[...c,...r[l]]:c}}},QE=(e,t)=>{if(e.length===0)return t.classGroupId;let n=e[0],r=t.nextPart.get(n),o=r?QE(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;let i=e.join(ly);return t.validators.find(({validator:l})=>l(i))?.classGroupId},KE=/^\[(.+)\]$/,aB=e=>{if(KE.test(e)){let t=KE.exec(e)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},lB=e=>{let{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return uB(Object.entries(e.classGroups),n).forEach(([i,l])=>{ay(l,r,i,t)}),r},ay=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){let i=o===""?t:GE(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(sB(o)){ay(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,l])=>{ay(l,GE(t,i),n,r)})})},GE=(e,t)=>{let n=e;return t.split(ly).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},sB=e=>e.isThemeGetter,uB=(e,t)=>t?e.map(([n,r])=>{let o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,u])=>[t+l,u])):i);return[n,o]}):e,cB=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map,o=(i,l)=>{n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let l=n.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return o(i,l),l},set(i,l){n.has(i)?n.set(i,l):o(i,l)}}},$E="!",pB=e=>{let{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,l=u=>{let c=[],p=0,f=0,m;for(let C=0;C<u.length;C++){let y=u[C];if(p===0){if(y===o&&(r||u.slice(C,C+i)===t)){c.push(u.slice(f,C)),f=C+i;continue}if(y==="/"){m=C;continue}}y==="["?p++:y==="]"&&p--}let g=c.length===0?u:u.substring(f),b=g.startsWith($E),v=b?g.substring(1):g,k=m&&m>f?m-f:void 0;return{modifiers:c,hasImportantModifier:b,baseClassName:v,maybePostfixModifierPosition:k}};return n?u=>n({className:u,parseClassName:l}):l},dB=e=>{if(e.length<=1)return e;let t=[],n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},fB=e=>({cache:cB(e.cacheSize),parseClassName:pB(e),...iB(e)}),mB=/\s+/,hB=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],l=e.trim().split(mB),u="";for(let c=l.length-1;c>=0;c-=1){let p=l[c],{modifiers:f,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:b}=n(p),v=!!b,k=r(v?g.substring(0,b):g);if(!k){if(!v){u=p+(u.length>0?" "+u:u);continue}if(k=r(g),!k){u=p+(u.length>0?" "+u:u);continue}v=!1}let C=dB(f).join(":"),y=m?C+$E:C,w=y+k;if(i.includes(w))continue;i.push(w);let S=o(k,v);for(let T=0;T<S.length;++T){let M=S[T];i.push(y+M)}u=p+(u.length>0?" "+u:u)}return u};function gB(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=YE(t))&&(r&&(r+=" "),r+=n);return r}var YE=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=YE(e[r]))&&(n&&(n+=" "),n+=t);return n};function bB(e,...t){let n,r,o,i=l;function l(c){let p=t.reduce((f,m)=>m(f),e());return n=fB(p),r=n.cache.get,o=n.cache.set,i=u,u(c)}function u(c){let p=r(c);if(p)return p;let f=hB(c,n);return o(c,f),f}return function(){return i(gB.apply(null,arguments))}}var ot=e=>{let t=n=>n[e]||[];return t.isThemeGetter=!0,t},XE=/^\[(?:([a-z-]+):)?(.+)\]$/i,vB=/^\d+\/\d+$/,yB=new Set(["px","full","screen"]),xB=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wB=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,kB=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,SB=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_B=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$o=e=>is(e)||yB.has(e)||vB.test(e),Hi=e=>as(e,"length",LB),is=e=>!!e&&!Number.isNaN(Number(e)),iy=e=>as(e,"number",is),bc=e=>!!e&&Number.isInteger(Number(e)),CB=e=>e.endsWith("%")&&is(e.slice(0,-1)),Se=e=>XE.test(e),Wi=e=>xB.test(e),EB=new Set(["length","size","percentage"]),RB=e=>as(e,EB,JE),TB=e=>as(e,"position",JE),IB=new Set(["image","url"]),AB=e=>as(e,IB,MB),OB=e=>as(e,"",PB),vc=()=>!0,as=(e,t,n)=>{let r=XE.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},LB=e=>wB.test(e)&&!kB.test(e),JE=()=>!1,PB=e=>SB.test(e),MB=e=>_B.test(e);var DB=()=>{let e=ot("colors"),t=ot("spacing"),n=ot("blur"),r=ot("brightness"),o=ot("borderColor"),i=ot("borderRadius"),l=ot("borderSpacing"),u=ot("borderWidth"),c=ot("contrast"),p=ot("grayscale"),f=ot("hueRotate"),m=ot("invert"),g=ot("gap"),b=ot("gradientColorStops"),v=ot("gradientColorStopPositions"),k=ot("inset"),C=ot("margin"),y=ot("opacity"),w=ot("padding"),S=ot("saturate"),T=ot("scale"),M=ot("sepia"),R=ot("skew"),z=ot("space"),U=ot("translate"),Y=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],ae=()=>["auto",Se,t],J=()=>[Se,t],$=()=>["",$o,Hi],re=()=>["auto",is,Se],te=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],he=()=>["solid","dashed","dotted","double","none"],Le=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],De=()=>["start","end","center","between","around","evenly","stretch"],Pe=()=>["","0",Se],A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Ue=()=>[is,Se];return{cacheSize:500,separator:":",theme:{colors:[vc],spacing:[$o,Hi],blur:["none","",Wi,Se],brightness:Ue(),borderColor:[e],borderRadius:["none","","full",Wi,Se],borderSpacing:J(),borderWidth:$(),contrast:Ue(),grayscale:Pe(),hueRotate:Ue(),invert:Pe(),gap:J(),gradientColorStops:[e],gradientColorStopPositions:[CB,Hi],inset:ae(),margin:ae(),opacity:Ue(),padding:J(),saturate:Ue(),scale:Ue(),sepia:Pe(),skew:Ue(),space:J(),translate:J()},classGroups:{aspect:[{aspect:["auto","square","video",Se]}],container:["container"],columns:[{columns:[Wi]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...te(),Se]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:Y()}],"overscroll-x":[{"overscroll-x":Y()}],"overscroll-y":[{"overscroll-y":Y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",bc,Se]}],basis:[{basis:ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Se]}],grow:[{grow:Pe()}],shrink:[{shrink:Pe()}],order:[{order:["first","last","none",bc,Se]}],"grid-cols":[{"grid-cols":[vc]}],"col-start-end":[{col:["auto",{span:["full",bc,Se]},Se]}],"col-start":[{"col-start":re()}],"col-end":[{"col-end":re()}],"grid-rows":[{"grid-rows":[vc]}],"row-start-end":[{row:["auto",{span:[bc,Se]},Se]}],"row-start":[{"row-start":re()}],"row-end":[{"row-end":re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Se]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...De()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...De(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...De(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[C]}],mx:[{mx:[C]}],my:[{my:[C]}],ms:[{ms:[C]}],me:[{me:[C]}],mt:[{mt:[C]}],mr:[{mr:[C]}],mb:[{mb:[C]}],ml:[{ml:[C]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Se,t]}],"min-w":[{"min-w":[Se,t,"min","max","fit"]}],"max-w":[{"max-w":[Se,t,"none","full","min","max","fit","prose",{screen:[Wi]},Wi]}],h:[{h:[Se,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Se,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Wi,Hi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",iy]}],"font-family":[{font:[vc]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Se]}],"line-clamp":[{"line-clamp":["none",is,iy]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",$o,Se]}],"list-image":[{"list-image":["none",Se]}],"list-style-type":[{list:["none","disc","decimal",Se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",$o,Hi]}],"underline-offset":[{"underline-offset":["auto",$o,Se]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:J()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...te(),TB]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",RB]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},AB]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[u]}],"border-w-x":[{"border-x":[u]}],"border-w-y":[{"border-y":[u]}],"border-w-s":[{"border-s":[u]}],"border-w-e":[{"border-e":[u]}],"border-w-t":[{"border-t":[u]}],"border-w-r":[{"border-r":[u]}],"border-w-b":[{"border-b":[u]}],"border-w-l":[{"border-l":[u]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...he(),"hidden"]}],"divide-x":[{"divide-x":[u]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[u]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:he()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...he()]}],"outline-offset":[{"outline-offset":[$o,Se]}],"outline-w":[{outline:[$o,Hi]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[$o,Hi]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Wi,OB]}],"shadow-color":[{shadow:[vc]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...Le(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Le()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Wi,Se]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[m]}],saturate:[{saturate:[S]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Se]}],duration:[{duration:Ue()}],ease:[{ease:["linear","in","out","in-out",Se]}],delay:[{delay:Ue()}],animate:[{animate:["none","spin","ping","pulse","bounce",Se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[bc,Se]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Se]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":J()}],"scroll-mx":[{"scroll-mx":J()}],"scroll-my":[{"scroll-my":J()}],"scroll-ms":[{"scroll-ms":J()}],"scroll-me":[{"scroll-me":J()}],"scroll-mt":[{"scroll-mt":J()}],"scroll-mr":[{"scroll-mr":J()}],"scroll-mb":[{"scroll-mb":J()}],"scroll-ml":[{"scroll-ml":J()}],"scroll-p":[{"scroll-p":J()}],"scroll-px":[{"scroll-px":J()}],"scroll-py":[{"scroll-py":J()}],"scroll-ps":[{"scroll-ps":J()}],"scroll-pe":[{"scroll-pe":J()}],"scroll-pt":[{"scroll-pt":J()}],"scroll-pr":[{"scroll-pr":J()}],"scroll-pb":[{"scroll-pb":J()}],"scroll-pl":[{"scroll-pl":J()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[$o,Hi,iy]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}};var ZE=bB(DB);function On(...e){return ZE(VE(...e))}var tR=K(Ve(),1),NB=qE("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ls=eR.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>(0,tR.jsx)(r?oy:"button",{className:On(NB({variant:t,size:n,className:e})),ref:i,...o}));ls.displayName="Button";var nR=K(Ce(),1);var rR=K(Ve(),1),sy=nR.forwardRef(({className:e,type:t,...n},r)=>(0,rR.jsx)("input",{type:t,className:On("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...n}));sy.displayName="Input";var Xe=K(Ce(),1);var zB=e=>e.disabled||Array.isArray(e.accessibilityStates)&&e.accessibilityStates.indexOf("disabled")>-1,oR=zB;var FB={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},BB=e=>{var t=e.accessibilityRole,n=e.role,r=n||t;if(r){var o=FB[r];if(o!==null)return o||r}},km=BB;var UB={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},HB={},WB=function(t){t===void 0&&(t=HB);var n=t.role||t.accessibilityRole;if(n==="label")return"label";var r=km(t);if(r){if(r==="heading"){var o=t.accessibilityLevel||t["aria-level"];return o!=null?"h"+o:"h1"}return UB[r]}},iR=WB;var qB={isDisabled:oR,propsToAccessibilityComponent:iR,propsToAriaRole:km},Sm=qB;function Ma(e){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ma(e)}function aR(e,t){if(Ma(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ma(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lR(e){var t=aR(e,"string");return Ma(t)=="symbol"?t:t+""}function sR(e,t,n){return(t=lR(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uR(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uR(Object(n),!0).forEach(function(r){sR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uR(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}var _m={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},jB=["ms","Moz","O","Webkit"],VB=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1);Object.keys(_m).forEach(e=>{jB.forEach(t=>{_m[VB(t,e)]=_m[e]})});var cR=_m;var KB=e=>e==="currentcolor"||e==="currentColor"||e==="inherit"||e.indexOf("var(")===0,pR=KB;var gR=K(hR()),XB=e=>{if(e==null)return e;var t=(0,gR.default)(e);if(t!=null)return t=(t<<24|t>>>8)>>>0,t},bR=XB;var JB=function(t,n){if(n===void 0&&(n=1),t!=null){if(typeof t=="string"&&pR(t))return t;var r=bR(t);if(r!=null){var o=r>>16&255,i=r>>8&255,l=r&255,u=(r>>24&255)/255,c=(u*n).toFixed(2);return"rgba("+o+","+i+","+l+","+c+")"}}},Rm=JB;var ZB={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function Qn(e,t){var n=e;return(t==null||!cR[t])&&typeof e=="number"?n=e+"px":t!=null&&ZB[t]&&(n=Rm(e)),n}var e9=!!(typeof window<"u"&&window.document&&window.document.createElement),gt=e9;var t9={},n9=!gt||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),r9="monospace,monospace",vR='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',o9={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},i9=(e,t)=>{if(!e)return t9;var n={},r=function(){var u=e[o];if(u==null)return"continue";if(o==="backgroundClip")u==="text"&&(n.backgroundClip=u,n.WebkitBackgroundClip=u);else if(o==="flex")u===-1?(n.flexGrow=0,n.flexShrink=1,n.flexBasis="auto"):n.flex=u;else if(o==="font")n[o]=u.replace("System",vR);else if(o==="fontFamily")if(u.indexOf("System")>-1){var c=u.split(/,\s*/);c[c.indexOf("System")]=vR,n[o]=c.join(",")}else u==="monospace"?n[o]=r9:n[o]=u;else if(o==="textDecorationLine")n9?n.textDecorationLine=u:n.textDecoration=u;else if(o==="writingDirection")n.direction=u;else{var p=Qn(e[o],o),f=o9[o];t&&o==="inset"?(e.insetInline==null&&(n.left=p,n.right=p),e.insetBlock==null&&(n.top=p,n.bottom=p)):t&&o==="margin"?(e.marginInline==null&&(n.marginLeft=p,n.marginRight=p),e.marginBlock==null&&(n.marginTop=p,n.marginBottom=p)):t&&o==="padding"?(e.paddingInline==null&&(n.paddingLeft=p,n.paddingRight=p),e.paddingBlock==null&&(n.paddingTop=p,n.paddingBottom=p)):f?f.forEach((m,g)=>{e[m]==null&&(n[m]=p)}):n[o]=p}};for(var o in e)var i=r();return n},dy=i9;function a9(e,t){for(var n=e.length,r=t^n,o=0,i;n>=4;)i=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16),i^=i>>>24,i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16),r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^i,n-=4,++o;switch(n){case 3:r^=(e.charCodeAt(o+2)&255)<<16;case 2:r^=(e.charCodeAt(o+1)&255)<<8;case 1:r^=e.charCodeAt(o)&255,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}return r^=r>>>13,r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16),r^=r>>>15,r>>>0}var l9=e=>a9(e,1).toString(36),yR=l9;var s9=/[A-Z]/g,u9=/^ms-/,fy={};function c9(e){return"-"+e.toLowerCase()}function p9(e){if(e in fy)return fy[e];var t=e.replace(s9,c9);return fy[e]=u9.test(t)?"-"+t:t}var xR=p9;var dT=K(RR());var nT=K(TR()),rT=K(KR()),oT=K(GR()),iT=K(QR()),aT=K($R()),lT=K(XR()),sT=K(JR()),uT=K(ZR()),cT=K(tT()),Ye=["Webkit"],SH=["Moz"],_H=["Webkit","Moz"],bt=["Webkit","ms"],CH=["Webkit","Moz","ms"],pT={plugins:[nT.default,rT.default,oT.default,iT.default,aT.default,lT.default,sT.default,uT.default,cT.default],prefixMap:{appearance:CH,userSelect:_H,textEmphasisPosition:bt,textEmphasis:bt,textEmphasisStyle:bt,textEmphasisColor:bt,boxDecorationBreak:bt,clipPath:Ye,maskImage:bt,maskMode:bt,maskRepeat:bt,maskPosition:bt,maskClip:bt,maskOrigin:bt,maskSize:bt,maskComposite:bt,mask:bt,maskBorderSource:bt,maskBorderMode:bt,maskBorderSlice:bt,maskBorderWidth:bt,maskBorderOutset:bt,maskBorderRepeat:bt,maskBorder:bt,maskType:bt,textDecorationStyle:Ye,textDecorationSkip:Ye,textDecorationLine:Ye,textDecorationColor:Ye,filter:Ye,breakAfter:Ye,breakBefore:Ye,breakInside:Ye,columnCount:Ye,columnFill:Ye,columnGap:Ye,columnRule:Ye,columnRuleColor:Ye,columnRuleStyle:Ye,columnRuleWidth:Ye,columns:Ye,columnSpan:Ye,columnWidth:Ye,backdropFilter:Ye,hyphens:Ye,flowInto:Ye,flowFrom:Ye,regionFragment:Ye,textOrientation:Ye,tabSize:SH,fontKerning:Ye,textSizeAdjust:Ye}};var EH=(0,dT.default)(pT),fT=EH;var RH=["animationKeyframes"],mT=new Map,TH={},IH=1,AH=3,OH={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},Xy="borderTopLeftRadius",Jy="borderTopRightRadius",Zy="borderBottomLeftRadius",ex="borderBottomRightRadius",tx="borderLeftColor",nx="borderLeftStyle",rx="borderLeftWidth",ox="borderRightColor",ix="borderRightStyle",ax="borderRightWidth",lx="right",sx="marginLeft",ux="marginRight",cx="paddingLeft",px="paddingRight",dx="left",Pm={[Xy]:Jy,[Jy]:Xy,[Zy]:ex,[ex]:Zy,[tx]:ox,[nx]:ix,[rx]:ax,[ox]:tx,[ix]:nx,[ax]:rx,[dx]:lx,[sx]:ux,[ux]:sx,[cx]:px,[px]:cx,[lx]:dx},xc={borderStartStartRadius:Xy,borderStartEndRadius:Jy,borderEndStartRadius:Zy,borderEndEndRadius:ex,borderInlineStartColor:tx,borderInlineStartStyle:nx,borderInlineStartWidth:rx,borderInlineEndColor:ox,borderInlineEndStyle:ix,borderInlineEndWidth:ax,insetInlineEnd:lx,insetInlineStart:dx,marginInlineStart:sx,marginInlineEnd:ux,paddingInlineStart:cx,paddingInlineEnd:px},hT=["clear","float","textAlign"];function gT(e){var t={$$css:!0},n=[];function r(o,i,l){var u=LH(l,i),c=i+u,p=mT.get(c),f;if(p!=null)f=p[0],n.push(p[1]);else{var m=o!==i?c:u;f=fx("r",o,m);var g=OH[o]||AH,b=PH(f,i,l),v=[b,g];n.push(v),mT.set(c,[f,v])}return f}return Object.keys(e).sort().forEach(o=>{var i=e[o];if(i!=null){var l;if(hT.indexOf(o)>-1){var u=r(o,o,"left"),c=r(o,o,"right");i==="start"?l=[u,c]:i==="end"&&(l=[c,u])}var p=xc[o];if(p!=null){var f=r(o,p,i),m=r(o,Pm[p],i);l=[f,m]}if(o==="transitionProperty"){for(var g=Array.isArray(i)?i:[i],b=[],v=0;v<g.length;v++){var k=g[v];typeof k=="string"&&xc[k]!=null&&b.push(v)}if(b.length>0){var C=[...g],y=[...g];b.forEach(w=>{var S=C[w];if(typeof S=="string"){var T=xc[S],M=Pm[T];C[w]=T,y[w]=M;var R=r(o,o,C),z=r(o,o,y);l=[R,z]}})}}l==null?l=r(o,o,i):t.$$css$localize=!0,t[o]=l}}),[t,n]}function bT(e,t){var n={$$css:!0},r=[],o=e.animationKeyframes,i=mn(e,RH),l=fx("css",t,JSON.stringify(e)),u="."+l,c;if(o!=null){var p=yT(o),f=p[0],m=p[1];c=f.join(","),r.push(...m)}var g=Xo(be(be({},i),{},{animationName:c}));return r.push(""+u+g),n[l]=l,[n,[[r,IH]]]}function vT(e,t){var n=e||TH,r={},o={},i=function(){var p=n[l],f=l,m=p;if(!Object.prototype.hasOwnProperty.call(n,l)||p==null)return"continue";hT.indexOf(l)>-1&&(p==="start"?m=t?"right":"left":p==="end"&&(m=t?"left":"right"));var g=xc[l];if(g!=null&&(f=t?Pm[g]:g),l==="transitionProperty"){var b=Array.isArray(p)?p:[p];b.forEach((v,k)=>{if(typeof v=="string"){var C=xc[v];C!=null&&(b[k]=t?Pm[C]:C,m=b.join(" "))}})}r[f]||(o[f]=m),f===l&&(r[f]=!0)};for(var l in n)var u=i();return dy(o,!0)}function LH(e,t){var n=Qn(e,t);return typeof n!="string"?JSON.stringify(n||""):n}function PH(e,t,n){var r=[],o="."+e;switch(t){case"animationKeyframes":{var i=yT(n),l=i[0],u=i[1],c=Xo({animationName:l.join(",")});r.push(""+o+c,...u);break}case"placeholderTextColor":{var p=Xo({color:n,opacity:1});r.push(o+"::-webkit-input-placeholder"+p,o+"::-moz-placeholder"+p,o+":-ms-input-placeholder"+p,o+"::placeholder"+p);break}case"pointerEvents":{var f=n;if(n==="auto"||n==="box-only"){if(f="auto!important",n==="box-only"){var m=Xo({pointerEvents:"none"});r.push(o+">*"+m)}}else if((n==="none"||n==="box-none")&&(f="none!important",n==="box-none")){var g=Xo({pointerEvents:"auto"});r.push(o+">*"+g)}var b=Xo({pointerEvents:f});r.push(""+o+b);break}case"scrollbarWidth":{n==="none"&&r.push(o+"::-webkit-scrollbar{display:none}");var v=Xo({scrollbarWidth:n});r.push(""+o+v);break}default:{var k=Xo({[t]:n});r.push(""+o+k);break}}return r}function Xo(e){var t=fT(dy(e)),n=Object.keys(t).map(r=>{var o=t[r],i=xR(r);return Array.isArray(o)?o.map(l=>i+":"+l).join(";"):i+":"+o}).sort().join(";");return"{"+n+";}"}function fx(e,t,n){var r=yR(t+n);return e+"-"+r}function MH(e){var t=["-webkit-",""],n=fx("r","animation",JSON.stringify(e)),r="{"+Object.keys(e).map(i=>{var l=e[i],u=Xo(l);return""+i+u}).join("")+"}",o=t.map(i=>"@"+i+"keyframes "+n+r);return[n,o]}function yT(e){if(typeof e=="number")throw new Error("Invalid CSS keyframes type: "+typeof e);var t=[],n=[],r=Array.isArray(e)?e:[e];return r.forEach(o=>{if(typeof o=="string")t.push(o);else{var i=MH(o),l=i[0],u=i[1];t.push(l),n.push(...u)}}),[t,n]}function wc(e,t,n){if(gt){var r=t??document,o=r.getElementById(e);if(o==null)if(o=document.createElement("style"),o.setAttribute("id",e),typeof n=="string"&&o.appendChild(document.createTextNode(n)),r instanceof ShadowRoot)r.insertBefore(o,r.firstChild);else{var i=r.head;i&&i.insertBefore(o,i.firstChild)}return o.sheet}else return null}var DH=Array.prototype.slice;function kc(e){var t={},n={};if(e!=null){var r;DH.call(e.cssRules).forEach((l,u)=>{var c=l.cssText;if(c.indexOf("stylesheet-group")>-1)r=FH(l),t[r]={start:u,rules:[c]};else{var p=wT(c);p!=null&&(n[p]=!0,t[r].rules.push(c))}})}function o(l,u,c){var p=xT(t),f=p.indexOf(u),m=f+1,g=p[m],b=g!=null&&t[g].start!=null?t[g].start:l.cssRules.length,v=UH(l,c,b);if(v){t[u].start==null&&(t[u].start=b);for(var k=m;k<p.length;k+=1){var C=p[k],y=t[C].start||0;t[C].start=y+1}}return v}var i={getTextContent(){return xT(t).map(l=>{var u=t[l].rules,c=u.shift();return u.sort(),u.unshift(c),u.join(`
`)}).join(`
`)},insert(l,u){var c=Number(u);if(t[c]==null){var p=NH(c);t[c]={start:null,rules:[p]},e!=null&&o(e,c,p)}var f=wT(l);if(f!=null&&n[f]==null&&(n[f]=!0,t[c].rules.push(l),e!=null)){var m=o(e,c,l);m||t[c].rules.pop()}}};return i}function NH(e){return'[stylesheet-group="'+e+'"]{}'}var zH=/["']/g;function FH(e){return Number(e.selectorText.split(zH)[1])}function xT(e){return Object.keys(e).map(Number).sort((t,n)=>t>n?1:-1)}var BH=/\s*([,])\s*/g;function wT(e){var t=e.split("{")[0].trim();return t!==""?t.replace(BH,"$1"):null}function UH(e,t,n){try{return e.insertRule(t,n),!0}catch{return!1}}var HH="react-native-stylesheet",mx=new WeakMap,Zr=[],kT=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function ST(e,t){t===void 0&&(t=HH);var n;if(gt){var r=e!=null?e.getRootNode():document;if(Zr.length===0)n=kc(wc(t)),kT.forEach(u=>{n.insert(u,0)}),mx.set(r,Zr.length),Zr.push(n);else{var o=mx.get(r);if(o==null){var i=Zr[0],l=i!=null?i.getTextContent():"";n=kc(wc(t,r,l)),mx.set(r,Zr.length),Zr.push(n)}else n=Zr[o]}}else Zr.length===0?(n=kc(wc(t)),kT.forEach(u=>{n.insert(u,0)}),Zr.push(n)):n=Zr[0];return{getTextContent(){return n.getTextContent()},id:t,insert(u,c){Zr.forEach(p=>{p.insert(u,c)})}}}var PT=K(TT());var qH={},IT={height:0,width:0},jH=e=>{var t=e.shadowColor,n=e.shadowOffset,r=e.shadowOpacity,o=e.shadowRadius,i=n||IT,l=i.height,u=i.width,c=Qn(u),p=Qn(l),f=Qn(o||0),m=Rm(t||"black",r);if(m!=null&&c!=null&&p!=null&&f!=null)return c+" "+p+" "+f+" "+m},VH=e=>{var t=e.textShadowColor,n=e.textShadowOffset,r=e.textShadowRadius,o=n||IT,i=o.height,l=o.width,u=r||0,c=Qn(l),p=Qn(i),f=Qn(u),m=Qn(t,"textShadowColor");if(m&&(i!==0||l!==0||u!==0)&&c!=null&&p!=null&&f!=null)return c+" "+p+" "+f+" "+m},KH=e=>{var t=Object.keys(e)[0],n=e[t];if(t==="matrix"||t==="matrix3d")return t+"("+n.join(",")+")";var r=Qn(n,t);return t+"("+r+")"},GH=e=>e.map(KH).join(" "),QH={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},$H={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},gx=function(t,n){n===void 0&&(n={});var r=t||qH,o={};if(n.shadow,r.shadowColor!=null||r.shadowOffset!=null||r.shadowOpacity!=null||r.shadowRadius!=null){var i=jH(r);if(i!=null&&o.boxShadow==null){var l=r.boxShadow,u=l?l+", "+i:i;o.boxShadow=u}}if(n.textShadow,r.textShadowColor!=null||r.textShadowOffset!=null||r.textShadowRadius!=null){var c=VH(r);if(c!=null&&o.textShadow==null){var p=r.textShadow,f=p?p+", "+c:c;o.textShadow=f}}for(var m in r)if(!($H[m]!=null||m==="shadowColor"||m==="shadowOffset"||m==="shadowOpacity"||m==="shadowRadius"||m==="textShadowColor"||m==="textShadowOffset"||m==="textShadowRadius")){var g=r[m],b=QH[m]||m,v=g;!Object.prototype.hasOwnProperty.call(r,m)||b!==m&&r[b]!=null||(b==="aspectRatio"&&typeof v=="number"?o[b]=v.toString():b==="fontVariant"?(Array.isArray(v)&&v.length>0&&(v=v.join(" ")),o[b]=v):b==="textAlignVertical"?r.verticalAlign==null&&(o.verticalAlign=v==="center"?"middle":v):b==="transform"?(Array.isArray(v)&&(v=GH(v)),o.transform=v):o[b]=v)}return o};var MT=K(LT());var JH=["writingDirection"],DT=new WeakMap,Nm=ST(),NT={shadow:!0,textShadow:!0};function ZH(e,t){t===void 0&&(t={});var n=t,r=n.writingDirection,o=mn(n,JH),i=r==="rtl";return MT.styleq.factory({transform(l){var u=DT.get(l);return u!=null?(0,PT.localizeStyle)(u,i):gx(l,be(be({},NT),o))}})(e)}function zT(e){e.forEach(t=>{var n=t[0],r=t[1];Nm!=null&&n.forEach(o=>{Nm.insert(o,r)})})}function eW(e){var t=gT(gx(e,NT)),n=t[0],r=t[1];return zT(r),n}function tW(e,t){var n=bT(e,t),r=n[0],o=n[1];return zT(o),r}var FT={position:"absolute",left:0,right:0,top:0,bottom:0},nW=BT({x:be({},FT)}).x;function BT(e){return Object.keys(e).forEach(t=>{var n=e[t];if(n!=null&&n.$$css!==!0){var r;t.indexOf("$raw")>-1?r=tW(n,t.split("$raw")[0]):r=eW(n),DT.set(n,r)}}),e}function rW(e,t){if(0){var n;if(n>2)var r}return[e,t]}function oW(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.flat(1/0),o={},i=0;i<r.length;i++){var l=r[i];l!=null&&typeof l=="object"&&Object.assign(o,l)}return o}function iW(){return{id:Nm.id,textContent:Nm.getTextContent()}}function Jo(e,t){t===void 0&&(t={});var n=t.writingDirection==="rtl",r=ZH(e,t);return Array.isArray(r)&&r[1]!=null&&(r[1]=vT(r[1],n)),r}Jo.absoluteFill=nW;Jo.absoluteFillObject=FT;Jo.create=BT;Jo.compose=rW;Jo.flatten=oW;Jo.getSheet=iW;Jo.hairlineWidth=1;gt&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=Jo.flatten);var aW=Jo,hn=aW;var lW=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],sW={},uW=Object.prototype.hasOwnProperty,cW=Array.isArray,pW=/[A-Z]/g;function dW(e){return"-"+e.toLowerCase()}function fW(e){return e.replace(pW,dW)}function cs(e){return cW(e)?e.join(" "):e}var mW=hn.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),hW=(e,t,n)=>{t||(t=sW);var r=t,o=r["aria-activedescendant"],i=r.accessibilityActiveDescendant,l=r["aria-atomic"],u=r.accessibilityAtomic,c=r["aria-autocomplete"],p=r.accessibilityAutoComplete,f=r["aria-busy"],m=r.accessibilityBusy,g=r["aria-checked"],b=r.accessibilityChecked,v=r["aria-colcount"],k=r.accessibilityColumnCount,C=r["aria-colindex"],y=r.accessibilityColumnIndex,w=r["aria-colspan"],S=r.accessibilityColumnSpan,T=r["aria-controls"],M=r.accessibilityControls,R=r["aria-current"],z=r.accessibilityCurrent,U=r["aria-describedby"],Y=r.accessibilityDescribedBy,P=r["aria-details"],ae=r.accessibilityDetails,J=r["aria-disabled"],$=r.accessibilityDisabled,re=r["aria-errormessage"],te=r.accessibilityErrorMessage,he=r["aria-expanded"],Le=r.accessibilityExpanded,De=r["aria-flowto"],Pe=r.accessibilityFlowTo,A=r["aria-haspopup"],Ue=r.accessibilityHasPopup,nn=r["aria-hidden"],O=r.accessibilityHidden,it=r["aria-invalid"],Mn=r.accessibilityInvalid,Dn=r["aria-keyshortcuts"],wn=r.accessibilityKeyShortcuts,tt=r["aria-label"],kn=r.accessibilityLabel,Lt=r["aria-labelledby"],Sn=r.accessibilityLabelledBy,at=r["aria-level"],Nn=r.accessibilityLevel,ai=r["aria-live"],Yt=r.accessibilityLiveRegion,zr=r["aria-modal"],Co=r.accessibilityModal,dr=r["aria-multiline"],Pt=r.accessibilityMultiline,zn=r["aria-multiselectable"],Fr=r.accessibilityMultiSelectable,li=r["aria-orientation"],fr=r.accessibilityOrientation,Eo=r["aria-owns"],mr=r.accessibilityOwns,H=r["aria-placeholder"],X=r.accessibilityPlaceholder,ue=r["aria-posinset"],xe=r.accessibilityPosInSet,Ae=r["aria-pressed"],Tt=r.accessibilityPressed,Ht=r["aria-readonly"],Mt=r.accessibilityReadOnly,rn=r["aria-required"],Wt=r.accessibilityRequired,qt=r.role,on=r.accessibilityRole,Fn=r["aria-roledescription"],Ns=r.accessibilityRoleDescription,zs=r["aria-rowcount"],yp=r.accessibilityRowCount,xp=r["aria-rowindex"],wp=r.accessibilityRowIndex,kp=r["aria-rowspan"],Fs=r.accessibilityRowSpan,Sp=r["aria-selected"],_p=r.accessibilitySelected,Cp=r["aria-setsize"],nl=r.accessibilitySetSize,Ep=r["aria-sort"],rl=r.accessibilitySort,Rp=r["aria-valuemax"],Tp=r.accessibilityValueMax,Ip=r["aria-valuemin"],Ap=r.accessibilityValueMin,Op=r["aria-valuenow"],Lp=r.accessibilityValueNow,Pp=r["aria-valuetext"],Mp=r.accessibilityValueText,ia=r.dataSet,aa=r.focusable,Dp=r.id,Np=r.nativeID,Bs=r.pointerEvents,fg=r.style,la=r.tabIndex,sa=r.testID,ie=mn(r,lW);$!=null&&void 0;var ol=J||$,Br=Sm.propsToAriaRole(t);i!=null&&void 0;var zp=o??i;zp!=null&&(ie["aria-activedescendant"]=zp),u!=null&&void 0;var Fp=l!=null?o:u;Fp!=null&&(ie["aria-atomic"]=Fp),p!=null&&void 0;var Us=c??p;Us!=null&&(ie["aria-autocomplete"]=Us),m!=null&&void 0;var Hs=f??m;Hs!=null&&(ie["aria-busy"]=Hs),b!=null&&void 0;var Ws=g??b;Ws!=null&&(ie["aria-checked"]=Ws),k!=null&&void 0;var Bp=v??k;Bp!=null&&(ie["aria-colcount"]=Bp),y!=null&&void 0;var Up=C??y;Up!=null&&(ie["aria-colindex"]=Up),S!=null&&void 0;var Hp=w??S;Hp!=null&&(ie["aria-colspan"]=Hp),M!=null&&void 0;var Wp=T??M;Wp!=null&&(ie["aria-controls"]=cs(Wp)),z!=null&&void 0;var qs=R??z;qs!=null&&(ie["aria-current"]=qs),Y!=null&&void 0;var js=U??Y;js!=null&&(ie["aria-describedby"]=cs(js)),ae!=null&&void 0;var Vs=P??ae;Vs!=null&&(ie["aria-details"]=Vs),ol===!0&&(ie["aria-disabled"]=!0,(e==="button"||e==="form"||e==="input"||e==="select"||e==="textarea")&&(ie.disabled=!0)),te!=null&&void 0;var il=re??te;il!=null&&(ie["aria-errormessage"]=il),Le!=null&&void 0;var qp=he??Le;qp!=null&&(ie["aria-expanded"]=qp),Pe!=null&&void 0;var Ks=De??Pe;Ks!=null&&(ie["aria-flowto"]=cs(Ks)),Ue!=null&&void 0;var ua=A??Ue;ua!=null&&(ie["aria-haspopup"]=ua),O!=null&&void 0;var Gs=nn??O;Gs===!0&&(ie["aria-hidden"]=Gs),Mn!=null&&void 0;var jp=it??Mn;jp!=null&&(ie["aria-invalid"]=jp),wn!=null&&void 0;var Qs=Dn??wn;Qs!=null&&(ie["aria-keyshortcuts"]=cs(Qs)),kn!=null&&void 0;var $s=tt??kn;$s!=null&&(ie["aria-label"]=$s),Sn!=null&&void 0;var al=Lt??Sn;al!=null&&(ie["aria-labelledby"]=cs(al)),Nn!=null&&void 0;var Vp=at??Nn;Vp!=null&&(ie["aria-level"]=Vp),Yt!=null&&void 0;var ll=ai??Yt;ll!=null&&(ie["aria-live"]=ll==="none"?"off":ll),Co!=null&&void 0;var sl=zr??Co;sl!=null&&(ie["aria-modal"]=sl),Pt!=null&&void 0;var ul=dr??Pt;ul!=null&&(ie["aria-multiline"]=ul),Fr!=null&&void 0;var Ro=zn??Fr;Ro!=null&&(ie["aria-multiselectable"]=Ro),fr!=null&&void 0;var Ys=li??fr;Ys!=null&&(ie["aria-orientation"]=Ys),mr!=null&&void 0;var Xs=Eo??mr;Xs!=null&&(ie["aria-owns"]=cs(Xs)),X!=null&&void 0;var Kp=H??X;Kp!=null&&(ie["aria-placeholder"]=Kp),xe!=null&&void 0;var Js=ue??xe;Js!=null&&(ie["aria-posinset"]=Js),Tt!=null&&void 0;var Zs=Ae??Tt;Zs!=null&&(ie["aria-pressed"]=Zs),Mt!=null&&void 0;var eu=Ht??Mt;eu!=null&&(ie["aria-readonly"]=eu,(e==="input"||e==="select"||e==="textarea")&&(ie.readOnly=!0)),Wt!=null&&void 0;var tu=rn??Wt;tu!=null&&(ie["aria-required"]=tu,(e==="input"||e==="select"||e==="textarea")&&(ie.required=Wt)),on!=null&&void 0,Br!=null&&(ie.role=Br==="none"?"presentation":Br),Ns!=null&&void 0;var Gp=Fn??Ns;Gp!=null&&(ie["aria-roledescription"]=Gp),yp!=null&&void 0;var Qp=zs??yp;Qp!=null&&(ie["aria-rowcount"]=Qp),wp!=null&&void 0;var $p=xp??wp;$p!=null&&(ie["aria-rowindex"]=$p),Fs!=null&&void 0;var nu=kp??Fs;nu!=null&&(ie["aria-rowspan"]=nu),_p!=null&&void 0;var Yp=Sp??_p;Yp!=null&&(ie["aria-selected"]=Yp),nl!=null&&void 0;var Xp=Cp??nl;Xp!=null&&(ie["aria-setsize"]=Xp),rl!=null&&void 0;var Jp=Ep??rl;Jp!=null&&(ie["aria-sort"]=Jp),Tp!=null&&void 0;var Zp=Rp??Tp;Zp!=null&&(ie["aria-valuemax"]=Zp),Ap!=null&&void 0;var cl=Ip??Ap;cl!=null&&(ie["aria-valuemin"]=cl),Lp!=null&&void 0;var ed=Op??Lp;ed!=null&&(ie["aria-valuenow"]=ed),Mp!=null&&void 0;var td=Pp??Mp;if(td!=null&&(ie["aria-valuetext"]=td),ia!=null){for(var ru in ia)if(uW.call(ia,ru)){var mg=fW(ru),nd=ia[ru];nd!=null&&(ie["data-"+mg]=nd)}}la===0||la==="0"||la===-1||la==="-1"?ie.tabIndex=la:(aa!=null&&void 0,aa===!1&&(ie.tabIndex="-1"),e==="a"||e==="button"||e==="input"||e==="select"||e==="textarea"?(aa===!1||$===!0)&&(ie.tabIndex="-1"):Br==="button"||Br==="checkbox"||Br==="link"||Br==="radio"||Br==="textbox"||Br==="switch"?aa!==!1&&(ie.tabIndex="0"):aa===!0&&(ie.tabIndex="0")),Bs!=null&&void 0;var Ge=hn([fg,Bs&&mW[Bs]],be({writingDirection:"ltr"},n)),He=Ge[0],rd=Ge[1];He&&(ie.className=He),rd&&(ie.style=rd),Np!=null&&void 0;var od=Dp??Np;return od!=null&&(ie.id=od),sa!=null&&(ie["data-testid"]=sa),ie.type==null&&e==="button"&&(ie.type="button"),ie},UT=hW;var vx=K(Ce());var ps=K(Ce());var gW=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),bW=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),HT=new Map;function WT(e){var t=HT.get(e);if(t)return t;var n=!1;if(Intl.Locale){var r=new Intl.Locale(e).maximize().script;n=gW.has(r)}else{var o=e.split("-")[0];n=bW.has(o)}return HT.set(e,n),n}var vW={direction:"ltr",locale:"en-US"},qT=(0,ps.createContext)(vW);function bx(e){return WT(e)?"rtl":"ltr"}function jT(e){var t=e.direction,n=e.locale,r=e.children,o=t||n;return o?ps.default.createElement(qT.Provider,{children:r,value:{direction:n?bx(n):t,locale:n}}):r}function VT(){return(0,ps.useContext)(qT)}var yW=(e,t,n)=>{var r;e&&e.constructor===String&&(r=Sm.propsToAccessibilityComponent(t));var o=r||e,i=UT(o,t,n),l=vx.default.createElement(o,i),u=i.dir?vx.default.createElement(jT,{children:l,direction:i.dir,locale:i.lang}):l;return u},KT=yW;var xW=e=>{if(e!=null){var t=e.nodeType===1;if(t&&typeof e.getBoundingClientRect=="function")return e.getBoundingClientRect()}},Sc=xW;var zm={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},wW=["ms","Moz","O","Webkit"],kW=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1);Object.keys(zm).forEach(e=>{wW.forEach(t=>{zm[kW(t,e)]=zm[e]})});var yx=zm;function SW(e,t,n){var r=t==null||typeof t=="boolean"||t==="";return r?"":!n&&typeof t=="number"&&t!==0&&!(yx.hasOwnProperty(e)&&yx[e])?t+"px":(""+t).trim()}var GT=SW;function _W(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=GT(r,t[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,i):n[r]=i}}var QT=_W;var $T=e=>{var t=e.offsetHeight,n=e.offsetWidth,r=e.offsetLeft,o=e.offsetTop;for(e=e.offsetParent;e&&e.nodeType===1;)r+=e.offsetLeft+e.clientLeft-e.scrollLeft,o+=e.offsetTop+e.clientTop-e.scrollTop,e=e.offsetParent;return o-=window.scrollY,r-=window.scrollX,{width:n,height:t,top:o,left:r}},YT=(e,t,n)=>{var r=t||e&&e.parentNode;e&&r&&setTimeout(()=>{if(e.isConnected&&r.isConnected){var o=$T(r),i=$T(e),l=i.height,u=i.left,c=i.top,p=i.width,f=u-o.left,m=c-o.top;n(f,m,p,l,u,c)}},0)},CW={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},EW={blur(e){try{e.blur()}catch{}},focus(e){try{var t=e.nodeName;e.getAttribute("tabIndex")==null&&e.isContentEditable!==!0&&CW[t]==null&&e.setAttribute("tabIndex","-1"),e.focus()}catch{}},measure(e,t){YT(e,null,t)},measureInWindow(e,t){e&&setTimeout(()=>{var n=Sc(e),r=n.height,o=n.left,i=n.top,l=n.width;t(o,i,l,r)},0)},measureLayout(e,t,n,r){YT(e,t,r)},updateView(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=t[n];switch(n){case"style":{QT(e,r);break}case"class":case"className":{e.setAttribute("class",r);break}case"text":case"value":e.value=r;break;default:e.setAttribute(n,r)}}},configureNextLayoutAnimation(e,t){t()},setLayoutAnimationEnabledExperimental(){}},eo=EW;var RW={OS:"web",select:e=>"web"in e?e.web:e.default,get isTesting(){return!1}},Fm=RW;function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gn.apply(null,arguments)}var Da=K(Ce());var XT={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},JT={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},ZT={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},e4={onBlur:!0,onFocus:!0},t4={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},n4={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},r4={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},o4={style:!0};function xx(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&t[r]===!0&&(n[r]=e[r]);return n}var Bm=K(Ce());var IW=gt?Bm.useLayoutEffect:Bm.useEffect,wx=IW;var Sx="__reactLayoutHandler",AW=!gt,kx=null;function OW(){return gt&&typeof window.ResizeObserver<"u"&&kx==null&&(kx=new window.ResizeObserver(function(e){e.forEach(t=>{var n=t.target,r=n[Sx];typeof r=="function"&&eo.measure(n,(o,i,l,u,c,p)=>{var f={nativeEvent:{layout:{x:o,y:i,width:l,height:u,left:c,top:p}},timeStamp:Date.now()};Object.defineProperty(f.nativeEvent,"target",{enumerable:!0,get:()=>t.target}),r(f)})})})),kx}function _x(e,t){var n=OW();wx(()=>{var r=e.current;r!=null&&(r[Sx]=t)},[e,t]),wx(()=>{var r=e.current;return r!=null&&n!=null&&(typeof r[Sx]=="function"?n.observe(r):n.unobserve(r)),()=>{r!=null&&n!=null&&n.unobserve(r)}},[e,n])}var i4=K(Ce());var _te=K(Ce());function _c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){t.forEach(i=>{if(i!=null){if(typeof i=="function"){i(o);return}if(typeof i=="object"){i.current=o;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(i))}})}}function Cc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i4.useMemo(()=>_c(...t),[...t])}var l4=K(Ce()),a4=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function Cx(e){var t=l4.useRef(a4);return t.current===a4&&(t.current=e()),t.current}function Ex(e){var t=e.pointerEvents,n=e.style,r=Cx(()=>o=>{o!=null&&(o.measure=i=>eo.measure(o,i),o.measureLayout=(i,l,u)=>eo.measureLayout(o,i,u,l),o.measureInWindow=i=>eo.measureInWindow(o,i))});return r}var Zo=K(Ce());var s4=()=>{},LW={},PW=[];function u4(e){return e>20?e%20:e}function Um(e,t){var n,r=!1,o,i,l=e.changedTouches,u=e.type,c=e.metaKey===!0,p=e.shiftKey===!0,f=l&&l[0].force||0,m=u4(l&&l[0].identifier||0),g=l&&l[0].clientX||e.clientX,b=l&&l[0].clientY||e.clientY,v=l&&l[0].pageX||e.pageX,k=l&&l[0].pageY||e.pageY,C=typeof e.preventDefault=="function"?e.preventDefault.bind(e):s4,y=e.timeStamp;function w(z){return Array.prototype.slice.call(z).map(U=>({force:U.force,identifier:u4(U.identifier),get locationX(){return M(U.clientX)},get locationY(){return R(U.clientY)},pageX:U.pageX,pageY:U.pageY,target:U.target,timestamp:y}))}if(l!=null)o=w(l),i=w(e.touches);else{var S=[{force:f,identifier:m,get locationX(){return M(g)},get locationY(){return R(b)},pageX:v,pageY:k,target:e.target,timestamp:y}];o=S,i=u==="mouseup"||u==="dragstart"?PW:S}var T={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:e.defaultPrevented,dispatchConfig:LW,eventPhase:e.eventPhase,isDefaultPrevented(){return e.defaultPrevented},isPropagationStopped(){return r},isTrusted:e.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:c,shiftKey:p,changedTouches:o,force:f,identifier:m,get locationX(){return M(g)},get locationY(){return R(b)},pageX:v,pageY:k,target:e.target,timestamp:y,touches:i,type:u},persist:s4,preventDefault:C,stopPropagation(){r=!0},target:e.target,timeStamp:y,touchHistory:t.touchHistory};function M(z){if(n=n||Sc(T.currentTarget),n)return z-n.left}function R(z){if(n=n||Sc(T.currentTarget),n)return z-n.top}return T}var MW="mousedown",DW="mousemove",NW="mouseup",zW="dragstart",FW="touchstart",BW="touchmove",UW="touchend",HW="touchcancel",WW="scroll",qW="select",jW="selectionchange";function Hm(e){return e===FW||e===MW}function Wm(e){return e===BW||e===DW}function qm(e){return e===UW||e===NW||Rx(e)}function Rx(e){return e===HW||e===zW}function c4(e){return e===WW}function p4(e){return e===qW||e===jW}function Tx(){var e=window.getSelection(),t=e.toString(),n=e.anchorNode,r=e.focusNode,o=n&&n.nodeType===window.Node.TEXT_NODE||r&&r.nodeType===window.Node.TEXT_NODE;return t.length>=1&&t!==`
`&&o}var f4="__reactResponderId";function VW(e){if(e.type==="selectionchange"){var t=window.getSelection().anchorNode;return d4(t)}else{var n=e.composedPath!=null?e.composedPath():d4(e.target);return n}}function d4(e){for(var t=[];e!=null&&e!==document.body;)t.push(e),e=e.parentNode;return t}function KW(e){return e!=null?e[f4]:null}function m4(e,t){e!=null&&(e[f4]=t)}function h4(e){for(var t=[],n=[],r=VW(e),o=0;o<r.length;o++){var i=r[o],l=KW(i);l!=null&&(t.push(l),n.push(i))}return{idPath:t,nodePath:n}}function g4(e,t){var n=e.length,r=t.length;if(n===0||r===0||e[n-1]!==t[r-1])return null;var o=e[0],i=0,l=t[0],u=0;n-r>0&&(i=n-r,o=e[i],n=r),r-n>0&&(u=r-n,l=t[u],r=n);for(var c=n;c--;){if(o===l)return o;o=e[i++],l=t[u++]}return null}function b4(e,t){if(!t||t.length===0)return!1;for(var n=0;n<t.length;n++){var r=t[n].target;if(r!=null&&e.contains(r))return!0}return!1}function v4(e){return e.type==="selectionchange"?Tx():e.type==="select"}function y4(e){var t=e.altKey,n=e.button,r=e.buttons,o=e.ctrlKey,i=e.type,l=i==="touchstart"||i==="touchmove",u=i==="mousedown"&&(n===0||r===1),c=i==="mousemove"&&r===1,p=t===!1&&o===!1;return!!(l||u&&p||c&&p)}var x4=!1,jm=20;function Lr(e){return e.timeStamp||e.timestamp}function GW(e){return{touchActive:!0,startPageX:e.pageX,startPageY:e.pageY,startTimeStamp:Lr(e),currentPageX:e.pageX,currentPageY:e.pageY,currentTimeStamp:Lr(e),previousPageX:e.pageX,previousPageY:e.pageY,previousTimeStamp:Lr(e)}}function QW(e,t){e.touchActive=!0,e.startPageX=t.pageX,e.startPageY=t.pageY,e.startTimeStamp=Lr(t),e.currentPageX=t.pageX,e.currentPageY=t.pageY,e.currentTimeStamp=Lr(t),e.previousPageX=t.pageX,e.previousPageY=t.pageY,e.previousTimeStamp=Lr(t)}function Ix(e){var t=e.identifier;return t==null&&console.error("Touch object is missing identifier."),x4&&t>jm&&console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.",t,jm),t}function $W(e,t){var n=Ix(e),r=t.touchBank[n];r?QW(r,e):t.touchBank[n]=GW(e),t.mostRecentTimeStamp=Lr(e)}function YW(e,t){var n=t.touchBank[Ix(e)];n?(n.touchActive=!0,n.previousPageX=n.currentPageX,n.previousPageY=n.currentPageY,n.previousTimeStamp=n.currentTimeStamp,n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Lr(e),t.mostRecentTimeStamp=Lr(e)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+w4(e)+`
`,"Touch Bank: "+k4(t))}function XW(e,t){var n=t.touchBank[Ix(e)];n?(n.touchActive=!1,n.previousPageX=n.currentPageX,n.previousPageY=n.currentPageY,n.previousTimeStamp=n.currentTimeStamp,n.currentPageX=e.pageX,n.currentPageY=e.pageY,n.currentTimeStamp=Lr(e),t.mostRecentTimeStamp=Lr(e)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+w4(e)+`
`,"Touch Bank: "+k4(t))}function w4(e){return JSON.stringify({identifier:e.identifier,pageX:e.pageX,pageY:e.pageY,timestamp:Lr(e)})}function k4(e){var t=e.touchBank,n=JSON.stringify(t.slice(0,jm));return t.length>jm&&(n+=" (original size: "+t.length+")"),n}var Vm=class{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(t,n){var r=this._touchHistory;if(Wm(t))n.changedTouches.forEach(c=>YW(c,r));else if(Hm(t))n.changedTouches.forEach(c=>$W(c,r)),r.numberActiveTouches=n.touches.length,r.numberActiveTouches===1&&(r.indexOfSingleActiveTouch=n.touches[0].identifier);else if(qm(t)&&(n.changedTouches.forEach(c=>XW(c,r)),r.numberActiveTouches=n.touches.length,r.numberActiveTouches===1)){for(var o=r.touchBank,i=0;i<o.length;i++){var l=o[i];if(l!=null&&l.touchActive){r.indexOfSingleActiveTouch=i;break}}if(x4){var u=o[r.indexOfSingleActiveTouch];u!=null&&u.touchActive||console.error("Cannot find single active touch.")}}}get touchHistory(){return this._touchHistory}};var JW={},S4=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],_4=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],ZW=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],eq={touchstart:S4,mousedown:S4,touchmove:_4,mousemove:_4,scroll:ZW},Ox={id:null,idPath:null,node:null},Km=new Map,Vi=!1,go=0,bo={id:null,node:null,idPath:null},Lx=new Vm;function Ec(e){bo=e}function Rc(e){var t=Km.get(e);return t??JW}function Ax(e){var t=e.type,n=e.target;if(t==="touchstart"&&(Vi=!0),(t==="touchmove"||go>1)&&(Vi=!1),!(t==="mousedown"&&Vi||t==="mousemove"&&Vi||t==="mousemove"&&go<1)){if(Vi&&t==="mouseup"){go===0&&(Vi=!1);return}var r=Hm(t)&&y4(e),o=Wm(t),i=qm(t),l=c4(t),u=p4(t),c=Um(e,Lx);(r||o||i)&&(e.touches?go=e.touches.length:r?go=1:i&&(go=0),Lx.recordTouchTrack(t,c.nativeEvent));var p=h4(e),f=!1,m;if(r||o||l&&go>0){var g=bo.idPath,b=p.idPath;if(g!=null&&b!=null){var v=g4(g,b);if(v!=null){var k=b.indexOf(v),C=k+(v===bo.id?1:0);p={idPath:b.slice(C),nodePath:p.nodePath.slice(C)}}else p=null}p!=null&&(m=tq(p,e,c),m!=null&&(nq(c,m),f=!0))}if(bo.id!=null&&bo.node!=null){var y=bo,w=y.id,S=y.node,T=Rc(w),M=T.onResponderStart,R=T.onResponderMove,z=T.onResponderEnd,U=T.onResponderRelease,Y=T.onResponderTerminate,P=T.onResponderTerminationRequest;if(c.bubbles=!1,c.cancelable=!1,c.currentTarget=S,r)M!=null&&(c.dispatchConfig.registrationName="onResponderStart",M(c));else if(o)R!=null&&(c.dispatchConfig.registrationName="onResponderMove",R(c));else{var ae=Rx(t)||t==="contextmenu"||t==="blur"&&n===window||t==="blur"&&n.contains(S)&&e.relatedTarget!==S||l&&go===0||l&&n.contains(S)&&n!==S||u&&v4(e),J=i&&!ae&&!b4(S,e.touches);if(i&&z!=null&&(c.dispatchConfig.registrationName="onResponderEnd",z(c)),J&&(U!=null&&(c.dispatchConfig.registrationName="onResponderRelease",U(c)),Ec(Ox)),ae){var $=!0;(t==="contextmenu"||t==="scroll"||t==="selectionchange")&&(f?$=!1:P!=null&&(c.dispatchConfig.registrationName="onResponderTerminationRequest",P(c)===!1&&($=!1))),$&&(Y!=null&&(c.dispatchConfig.registrationName="onResponderTerminate",Y(c)),Ec(Ox),Vi=!1,go=0)}}}}}function tq(e,t,n){var r=eq[t.type];if(r!=null){for(var o=e.idPath,i=e.nodePath,l=r[0],u=r[1],c=r[2].bubbles,p=function(R,z,U){var Y=Rc(R),P=Y[U];if(P!=null&&(n.currentTarget=z,P(n)===!0)){var ae=o.slice(o.indexOf(R));return{id:R,node:z,idPath:ae}}},f=o.length-1;f>=0;f--){var m=o[f],g=i[f],b=p(m,g,l);if(b!=null)return b;if(n.isPropagationStopped()===!0)return}if(c)for(var v=0;v<o.length;v++){var k=o[v],C=i[v],y=p(k,C,u);if(y!=null)return y;if(n.isPropagationStopped()===!0)return}else{var w=o[0],S=i[0],T=t.target;if(T===S)return p(w,S,u)}}}function nq(e,t){var n=bo,r=n.id,o=n.node,i=t.id,l=t.node,u=Rc(i),c=u.onResponderGrant,p=u.onResponderReject;if(e.bubbles=!1,e.cancelable=!1,e.currentTarget=l,r==null)c!=null&&(e.currentTarget=l,e.dispatchConfig.registrationName="onResponderGrant",c(e)),Ec(t);else{var f=Rc(r),m=f.onResponderTerminate,g=f.onResponderTerminationRequest,b=!0;g!=null&&(e.currentTarget=o,e.dispatchConfig.registrationName="onResponderTerminationRequest",g(e)===!1&&(b=!1)),b?(m!=null&&(e.currentTarget=o,e.dispatchConfig.registrationName="onResponderTerminate",m(e)),c!=null&&(e.currentTarget=l,e.dispatchConfig.registrationName="onResponderGrant",c(e)),Ec(t)):p!=null&&(e.currentTarget=l,e.dispatchConfig.registrationName="onResponderReject",p(e))}}var rq=["blur","scroll"],oq=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function C4(){gt&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",Ax),oq.forEach(e=>{document.addEventListener(e,Ax)}),rq.forEach(e=>{document.addEventListener(e,Ax,!0)}),window.__reactResponderSystemActive=!0)}function E4(e,t,n){m4(t,e),Km.set(e,n)}function Px(e){bo.id===e&&iq(),Km.has(e)&&Km.delete(e)}function iq(){var e=bo,t=e.id,n=e.node;if(t!=null&&n!=null){var r=Rc(t),o=r.onResponderTerminate;if(o!=null){var i=Um({},Lx);i.currentTarget=n,o(i)}Ec(Ox)}Vi=!1,go=0}function R4(){return bo.node}var lq={},sq=0;function uq(e){var t=Zo.useRef(null);return t.current==null&&(t.current=e()),t.current}function Mx(e,t){t===void 0&&(t=lq);var n=uq(()=>sq++),r=Zo.useRef(!1);Zo.useEffect(()=>(C4(),()=>{Px(n)}),[n]),Zo.useEffect(()=>{var o=t,i=o.onMoveShouldSetResponder,l=o.onMoveShouldSetResponderCapture,u=o.onScrollShouldSetResponder,c=o.onScrollShouldSetResponderCapture,p=o.onSelectionChangeShouldSetResponder,f=o.onSelectionChangeShouldSetResponderCapture,m=o.onStartShouldSetResponder,g=o.onStartShouldSetResponderCapture,b=i!=null||l!=null||u!=null||c!=null||p!=null||f!=null||m!=null||g!=null,v=e.current;b?(E4(n,v,t),r.current=!0):r.current&&(Px(n),r.current=!1)},[t,e,n]),Zo.useDebugValue({isResponder:e.current===R4()}),Zo.useDebugValue(t)}var T4=K(Ce()),cq=(0,T4.createContext)(!1),I4=cq;var pq=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],dq=Object.assign({},XT,JT,ZT,e4,t4,n4,r4,o4,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),fq=e=>xx(e,dq),O4=Da.forwardRef((e,t)=>{var n=e.hrefAttrs,r=e.onLayout,o=e.onMoveShouldSetResponder,i=e.onMoveShouldSetResponderCapture,l=e.onResponderEnd,u=e.onResponderGrant,c=e.onResponderMove,p=e.onResponderReject,f=e.onResponderRelease,m=e.onResponderStart,g=e.onResponderTerminate,b=e.onResponderTerminationRequest,v=e.onScrollShouldSetResponder,k=e.onScrollShouldSetResponderCapture,C=e.onSelectionChangeShouldSetResponder,y=e.onSelectionChangeShouldSetResponderCapture,w=e.onStartShouldSetResponder,S=e.onStartShouldSetResponderCapture,T=mn(e,pq),M=Da.useContext(I4),R=Da.useRef(null),z=VT(),U=z.direction;_x(R,r),Mx(R,{onMoveShouldSetResponder:o,onMoveShouldSetResponderCapture:i,onResponderEnd:l,onResponderGrant:u,onResponderMove:c,onResponderReject:p,onResponderRelease:f,onResponderStart:m,onResponderTerminate:g,onResponderTerminationRequest:b,onScrollShouldSetResponder:v,onScrollShouldSetResponderCapture:k,onSelectionChangeShouldSetResponder:C,onSelectionChangeShouldSetResponderCapture:y,onStartShouldSetResponder:w,onStartShouldSetResponderCapture:S});var Y="div",P=e.lang!=null?bx(e.lang):null,ae=e.dir||P,J=ae||U,$=fq(T);if($.dir=ae,$.style=[A4.view$raw,M&&A4.inline,e.style],e.href!=null&&(Y="a",n!=null)){var re=n.download,te=n.rel,he=n.target;re!=null&&($.download=re),te!=null&&($.rel=te),typeof he=="string"&&($.target=he.charAt(0)!=="_"?"_"+he:he)}var Le=Ex($),De=Cc(R,Le,t);return $.ref=De,KT(Y,$,{writingDirection:J})});O4.displayName="View";var A4=hn.create({view$raw:{alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}}),_t=O4;var mq=function e(t,n,r){if(r===void 0&&(r=-1),r===0)return!0;if(t===n||typeof t=="function"&&typeof n=="function")return!1;if(typeof t!="object"||t===null)return t!==n;if(typeof n!="object"||n===null||t.constructor!==n.constructor)return!0;if(Array.isArray(t)){var o=t.length;if(n.length!==o)return!0;for(var i=0;i<o;i++)if(e(t[i],n[i],r-1))return!0}else{for(var l in t)if(e(t[l],n[l],r-1))return!0;for(var u in n)if(t[u]===void 0&&n[u]!==void 0)return!0}return!1},L4=mq;var Mr=K(Pr()),ti=K(Ce());function Dx(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function M4(e,t){if(e){if(typeof e=="string")return Dx(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dx(e,t):void 0}}function vo(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=M4(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D4=K(Ce()),bq=["colors","enabled","onRefresh","progressBackgroundColor","progressViewOffset","refreshing","size","tintColor","title","titleColor"];function vq(e){var t=e.colors,n=e.enabled,r=e.onRefresh,o=e.progressBackgroundColor,i=e.progressViewOffset,l=e.refreshing,u=e.size,c=e.tintColor,p=e.title,f=e.titleColor,m=mn(e,bq);return D4.default.createElement(_t,m)}var N4=vq;var Nx=K(Pr());var Na={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},Ki={},z4=gt;function B4(){if(gt){var e=window,t,n;if(e.visualViewport){var r=e.visualViewport;t=Math.round(r.height*r.scale),n=Math.round(r.width*r.scale)}else{var o=e.document.documentElement;t=o.clientHeight,n=o.clientWidth}Na.window={fontScale:1,height:t,scale:e.devicePixelRatio||1,width:n},Na.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width}}}function F4(){B4(),Array.isArray(Ki.change)&&Ki.change.forEach(e=>e(Na))}var Tc=class{static get(t){return z4&&(z4=!1,B4()),(0,Nx.default)(Na[t],"No dimension set for key "+t),Na[t]}static set(t){t&&(gt?(0,Nx.default)(!1,"Dimensions cannot be set in the browser"):(t.screen!=null&&(Na.screen=t.screen),t.window!=null&&(Na.window=t.window)))}static addEventListener(t,n){return Ki[t]=Ki[t]||[],Ki[t].push(n),{remove:()=>{this.removeEventListener(t,n)}}}static removeEventListener(t,n){Array.isArray(Ki[t])&&(Ki[t]=Ki[t].filter(r=>r!==n))}};gt&&(window.visualViewport?window.visualViewport.addEventListener("resize",F4,!1):window.addEventListener("resize",F4,!1));var yq={_currentlyFocusedNode:null,currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput(e){e!==null&&(this._currentlyFocusedNode=e,document.activeElement!==e&&eo.focus(e))},blurTextInput(e){e!==null&&(this._currentlyFocusedNode=null,document.activeElement===e&&eo.blur(e))}},ds=yq;var xq=()=>{ds.blurTextInput(ds.currentlyFocusedField())},U4=xq;var zx=K(Pr());var Gi=K(Ce());var wq=["onScroll","onTouchMove","onWheel","scrollEnabled","scrollEventThrottle","showsHorizontalScrollIndicator","showsVerticalScrollIndicator","style"];function H4(e){return{nativeEvent:{contentOffset:{get x(){return e.target.scrollLeft},get y(){return e.target.scrollTop}},contentSize:{get height(){return e.target.scrollHeight},get width(){return e.target.scrollWidth}},layoutMeasurement:{get height(){return e.target.offsetHeight},get width(){return e.target.offsetWidth}}},timeStamp:Date.now()}}function kq(e,t){var n=Date.now()-e;return t>0&&n>=t}var Sq=Gi.forwardRef((e,t)=>{var n=e.onScroll,r=e.onTouchMove,o=e.onWheel,i=e.scrollEnabled,l=i===void 0?!0:i,u=e.scrollEventThrottle,c=u===void 0?0:u,p=e.showsHorizontalScrollIndicator,f=e.showsVerticalScrollIndicator,m=e.style,g=mn(e,wq),b=Gi.useRef({isScrolling:!1,scrollLastTick:0}),v=Gi.useRef(null),k=Gi.useRef(null);function C(R){return z=>{l&&R&&R(z)}}function y(R){R.stopPropagation(),R.target===k.current&&(R.persist(),v.current!=null&&clearTimeout(v.current),v.current=setTimeout(()=>{T(R)},100),b.current.isScrolling?kq(b.current.scrollLastTick,c)&&S(R):w(R))}function w(R){b.current.isScrolling=!0,S(R)}function S(R){b.current.scrollLastTick=Date.now(),n&&n(H4(R))}function T(R){b.current.isScrolling=!1,n&&n(H4(R))}var M=p===!1||f===!1;return Gi.createElement(_t,gn({},g,{onScroll:y,onTouchMove:C(r),onWheel:C(o),ref:Cc(k,t),style:[m,!l&&W4.scrollDisabled,M&&W4.hideScrollbar]}))}),W4=hn.create({scrollDisabled:{overflowX:"hidden",overflowY:"hidden",touchAction:"none"},hideScrollbar:{scrollbarWidth:"none"}}),q4=Sq;var ei=K(Ce()),Y4=K(G4()),Eq=["contentContainerStyle","horizontal","onContentSizeChange","refreshControl","stickyHeaderIndices","pagingEnabled","forwardedRef","keyboardDismissMode","onScroll","centerContent"],Q4={},Rq=16,Fx=class extends ei.default.Component{constructor(){super(...arguments),this._scrollNodeRef=null,this._innerViewRef=null,this.isTouching=!1,this.lastMomentumScrollBeginTime=0,this.lastMomentumScrollEndTime=0,this.observedScrollSinceBecomingResponder=!1,this.becameResponderWhileAnimating=!1,this.scrollResponderHandleScrollShouldSetResponder=()=>this.isTouching,this.scrollResponderHandleStartShouldSetResponderCapture=t=>this.scrollResponderIsAnimating(),this.scrollResponderHandleTerminationRequest=()=>!this.observedScrollSinceBecomingResponder,this.scrollResponderHandleTouchEnd=t=>{var n=t.nativeEvent;this.isTouching=n.touches.length!==0,this.props.onTouchEnd&&this.props.onTouchEnd(t)},this.scrollResponderHandleResponderRelease=t=>{this.props.onResponderRelease&&this.props.onResponderRelease(t);var n=ds.currentlyFocusedField();!this.props.keyboardShouldPersistTaps&&n!=null&&t.target!==n&&!this.observedScrollSinceBecomingResponder&&!this.becameResponderWhileAnimating&&(this.props.onScrollResponderKeyboardDismissed&&this.props.onScrollResponderKeyboardDismissed(t),ds.blurTextInput(n))},this.scrollResponderHandleScroll=t=>{this.observedScrollSinceBecomingResponder=!0,this.props.onScroll&&this.props.onScroll(t)},this.scrollResponderHandleResponderGrant=t=>{this.observedScrollSinceBecomingResponder=!1,this.props.onResponderGrant&&this.props.onResponderGrant(t),this.becameResponderWhileAnimating=this.scrollResponderIsAnimating()},this.scrollResponderHandleScrollBeginDrag=t=>{this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(t)},this.scrollResponderHandleScrollEndDrag=t=>{this.props.onScrollEndDrag&&this.props.onScrollEndDrag(t)},this.scrollResponderHandleMomentumScrollBegin=t=>{this.lastMomentumScrollBeginTime=Date.now(),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(t)},this.scrollResponderHandleMomentumScrollEnd=t=>{this.lastMomentumScrollEndTime=Date.now(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(t)},this.scrollResponderHandleTouchStart=t=>{this.isTouching=!0,this.props.onTouchStart&&this.props.onTouchStart(t)},this.scrollResponderHandleTouchMove=t=>{this.props.onTouchMove&&this.props.onTouchMove(t)},this.scrollResponderIsAnimating=()=>{var t=Date.now(),n=t-this.lastMomentumScrollEndTime,r=n<Rq||this.lastMomentumScrollEndTime<this.lastMomentumScrollBeginTime;return r},this.scrollResponderScrollTo=(t,n,r)=>{if(typeof t=="number")console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");else{var o=t||Q4;t=o.x,n=o.y,r=o.animated}var i=this.getScrollableNode(),l=t||0,u=n||0;i!=null&&(typeof i.scroll=="function"?i.scroll({top:u,left:l,behavior:r?"smooth":"auto"}):(i.scrollLeft=l,i.scrollTop=u))},this.scrollResponderZoomTo=(t,n)=>{Fm.OS!=="ios"&&(0,zx.default)("zoomToRect is not implemented")},this.scrollResponderScrollNativeHandleToKeyboard=(t,n,r)=>{this.additionalScrollOffset=n||0,this.preventNegativeScrollOffset=!!r,eo.measureLayout(t,this.getInnerViewNode(),this.scrollResponderTextInputFocusError,this.scrollResponderInputMeasureAndScrollToKeyboard)},this.scrollResponderInputMeasureAndScrollToKeyboard=(t,n,r,o)=>{var i=Tc.get("window").height;this.keyboardWillOpenTo&&(i=this.keyboardWillOpenTo.endCoordinates.screenY);var l=n-i+o+this.additionalScrollOffset;this.preventNegativeScrollOffset&&(l=Math.max(0,l)),this.scrollResponderScrollTo({x:0,y:l,animated:!0}),this.additionalOffset=0,this.preventNegativeScrollOffset=!1},this.scrollResponderKeyboardWillShow=t=>{this.keyboardWillOpenTo=t,this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(t)},this.scrollResponderKeyboardWillHide=t=>{this.keyboardWillOpenTo=null,this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(t)},this.scrollResponderKeyboardDidShow=t=>{t&&(this.keyboardWillOpenTo=t),this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(t)},this.scrollResponderKeyboardDidHide=t=>{this.keyboardWillOpenTo=null,this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(t)},this.flashScrollIndicators=()=>{this.scrollResponderFlashScrollIndicators()},this.getScrollResponder=()=>this,this.getScrollableNode=()=>this._scrollNodeRef,this.getInnerViewRef=()=>this._innerViewRef,this.getInnerViewNode=()=>this._innerViewRef,this.getNativeScrollRef=()=>this._scrollNodeRef,this.scrollTo=(t,n,r)=>{if(typeof t=="number")console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var o=t||Q4;n=o.x,t=o.y,r=o.animated}this.scrollResponderScrollTo({x:n||0,y:t||0,animated:r!==!1})},this.scrollToEnd=t=>{var n=(t&&t.animated)!==!1,r=this.props.horizontal,o=this.getScrollableNode(),i=r?o.scrollWidth:0,l=r?0:o.scrollHeight;this.scrollResponderScrollTo({x:i,y:l,animated:n})},this._handleContentOnLayout=t=>{var n=t.nativeEvent.layout,r=n.width,o=n.height;this.props.onContentSizeChange(r,o)},this._handleScroll=t=>{this.props.keyboardDismissMode==="on-drag"&&U4(),this.scrollResponderHandleScroll(t)},this._setInnerViewRef=t=>{this._innerViewRef=t},this._setScrollNodeRef=t=>{this._scrollNodeRef=t,t!=null&&(t.getScrollResponder=this.getScrollResponder,t.getInnerViewNode=this.getInnerViewNode,t.getInnerViewRef=this.getInnerViewRef,t.getNativeScrollRef=this.getNativeScrollRef,t.getScrollableNode=this.getScrollableNode,t.scrollTo=this.scrollTo,t.scrollToEnd=this.scrollToEnd,t.flashScrollIndicators=this.flashScrollIndicators,t.scrollResponderZoomTo=this.scrollResponderZoomTo,t.scrollResponderScrollNativeHandleToKeyboard=this.scrollResponderScrollNativeHandleToKeyboard);var n=_c(this.props.forwardedRef);n(t)}}scrollResponderHandleStartShouldSetResponder(){return!1}scrollResponderHandleResponderReject(){(0,Y4.default)(!1,"ScrollView doesn't take rejection well - scrolls anyway")}scrollResponderFlashScrollIndicators(){}scrollResponderTextInputFocusError(t){console.error("Error measuring text field: ",t)}render(){var t=this.props,n=t.contentContainerStyle,r=t.horizontal,o=t.onContentSizeChange,i=t.refreshControl,l=t.stickyHeaderIndices,u=t.pagingEnabled,c=t.forwardedRef,p=t.keyboardDismissMode,f=t.onScroll,m=t.centerContent,g=mn(t,Eq);if(0)var b,v;var k={};o&&(k={onLayout:this._handleContentOnLayout});var C=!r&&Array.isArray(l),y=C||u?ei.default.Children.map(this.props.children,(U,Y)=>{var P=C&&l.indexOf(Y)>-1;return U!=null&&(P||u)?ei.default.createElement(_t,{style:[P&&Qi.stickyHeader,u&&Qi.pagingEnabledChild]},U):U}):this.props.children,w=ei.default.createElement(_t,gn({},k,{children:y,collapsable:!1,ref:this._setInnerViewRef,style:[r&&Qi.contentContainerHorizontal,m&&Qi.contentContainerCenterContent,n]})),S=r?Qi.baseHorizontal:Qi.baseVertical,T=r?Qi.pagingEnabledHorizontal:Qi.pagingEnabledVertical,M=be(be({},g),{},{style:[S,u&&T,this.props.style],onTouchStart:this.scrollResponderHandleTouchStart,onTouchMove:this.scrollResponderHandleTouchMove,onTouchEnd:this.scrollResponderHandleTouchEnd,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onScroll:this._handleScroll,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderReject:this.scrollResponderHandleResponderReject}),R=q4;(0,zx.default)(R!==void 0,"ScrollViewClass must not be undefined");var z=ei.default.createElement(R,gn({},M,{ref:this._setScrollNodeRef}),w);return i?ei.default.cloneElement(i,{style:M.style},z):z}},$4={flexGrow:1,flexShrink:1,transform:"translateZ(0)",WebkitOverflowScrolling:"touch"},Qi=hn.create({baseVertical:be(be({},$4),{},{flexDirection:"column",overflowX:"hidden",overflowY:"auto"}),baseHorizontal:be(be({},$4),{},{flexDirection:"row",overflowX:"auto",overflowY:"hidden"}),contentContainerHorizontal:{flexDirection:"row"},contentContainerCenterContent:{justifyContent:"center",flexGrow:1},stickyHeader:{position:"sticky",top:0,zIndex:10},pagingEnabledHorizontal:{scrollSnapType:"x mandatory"},pagingEnabledVertical:{scrollSnapType:"y mandatory"},pagingEnabledChild:{scrollSnapAlign:"start"}}),X4=ei.default.forwardRef((e,t)=>ei.default.createElement(Fx,gn({},e,{forwardedRef:t})));X4.displayName="ScrollView";var Bx=X4;var rI=K(Pr());var J4=K(Pr()),Ux=class{constructor(t){var n=t.onMoreTasks;this._onMoreTasks=n,this._queueStack=[{tasks:[],popable:!0}]}enqueue(t){this._getCurrentQueue().push(t)}enqueueTasks(t){t.forEach(n=>this.enqueue(n))}cancelTasks(t){this._queueStack=this._queueStack.map(n=>be(be({},n),{},{tasks:n.tasks.filter(r=>t.indexOf(r)===-1)})).filter((n,r)=>n.tasks.length>0||r===0)}hasTasksToProcess(){return this._getCurrentQueue().length>0}processNext(){var t=this._getCurrentQueue();if(t.length){var n=t.shift();try{typeof n=="object"&&n.gen?this._genPromise(n):typeof n=="object"&&n.run?n.run():((0,J4.default)(typeof n=="function",`Expected Function, SimpleTask, or PromiseTask, but got:
`+JSON.stringify(n,null,2)),n())}catch(r){throw r.message="TaskQueue: Error with task "+(n.name||"")+": "+r.message,r}}}_getCurrentQueue(){var t=this._queueStack.length-1,n=this._queueStack[t];return n.popable&&n.tasks.length===0&&t>0?(this._queueStack.pop(),this._getCurrentQueue()):n.tasks}_genPromise(t){var n=this._queueStack.push({tasks:[],popable:!1}),r=n-1,o=this._queueStack[r];t.gen().then(()=>{o.popable=!0,this.hasTasksToProcess()&&this._onMoreTasks()}).catch(i=>{setTimeout(()=>{throw i.message="TaskQueue: Error resolving Promise in task "+t.name+": "+i.message,i},0)})}},Z4=Ux;var Ic=class{constructor(){this._registry={}}addListener(t,n,r){var o=Tq(this._registry,t),i={context:r,listener:n,remove(){o.delete(i)}};return o.add(i),i}emit(t){var n=this._registry[t];if(n!=null){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];for(var l=0,u=[...n];l<u.length;l++){var c=u[l];c.listener.apply(c.context,o)}}}removeAllListeners(t){t==null?this._registry={}:delete this._registry[t]}listenerCount(t){var n=this._registry[t];return n==null?0:n.size}};function Tq(e,t){var n=e[t];return n==null&&(n=new Set,e[t]=n),n}var Iq=function(t,n){return setTimeout(()=>{var r=Date.now();t({didTimeout:!1,timeRemaining(){return Math.max(0,50-(Date.now()-r))}})},1)},Aq=function(t){clearTimeout(t)},eI=gt&&typeof window.requestIdleCallback<"u",Oq=eI?window.requestIdleCallback:Iq,Vne=eI?window.cancelIdleCallback:Aq,tI=Oq;var Ym=new Ic,Hx={Events:{interactionStart:"interactionStart",interactionComplete:"interactionComplete"},runAfterInteractions(e){var t=[],n=new Promise(r=>{Ac(),e&&t.push(e),t.push({run:r,name:"resolve "+(e&&e.name||"?")}),Jm.enqueueTasks(t)});return{then:n.then.bind(n),done:n.then.bind(n),cancel:()=>{Jm.cancelTasks(t)}}},createInteractionHandle(){Ac();var e=++Lq;return Xm.add(e),e},clearInteractionHandle(e){(0,rI.default)(!!e,"Must provide a handle to clear."),Ac(),Xm.delete(e),Wx.add(e)},addListener:Ym.addListener.bind(Ym),setDeadline(e){Zm=e}},Qm=new Set,Xm=new Set,Wx=new Set,Jm=new Z4({onMoreTasks:Ac}),$m=0,Lq=0,Zm=-1;function Ac(){$m||(Zm>0?$m=setTimeout(nI):$m=tI(nI))}function nI(){$m=0;var e=Qm.size;Xm.forEach(r=>Qm.add(r)),Wx.forEach(r=>Qm.delete(r));var t=Qm.size;if(e!==0&&t===0?Ym.emit(Hx.Events.interactionComplete):e===0&&t!==0&&Ym.emit(Hx.Events.interactionStart),t===0){for(var n=Date.now();Jm.hasTasksToProcess();)if(Jm.processNext(),Zm>0&&Date.now()-n>=Zm){Ac();break}}Xm.clear(),Wx.clear()}var oI=Hx;var qx=class{constructor(t,n){this._delay=n,this._callback=t}dispose(t){t===void 0&&(t={abort:!1}),this._taskHandle&&(this._taskHandle.cancel(),t.abort||this._callback(),this._taskHandle=null)}schedule(){if(!this._taskHandle){var t=setTimeout(()=>{this._taskHandle=oI.runAfterInteractions(()=>{this._taskHandle=null,this._callback()})},this._delay);this._taskHandle={cancel:()=>clearTimeout(t)}}}},iI=qx;function Pq(e,t,n){return t<e?e:t>n?n:t}var jx=Pq;function Mq(){return console.log(...arguments)}var aI=Mq;var eh=K(Pr()),th=class{constructor(t){(0,eh.default)(t>=0,"CellRenderMask must contain a non-negative number os cells"),this._numCells=t,t===0?this._regions=[]:this._regions=[{first:0,last:t-1,isSpacer:!0}]}enumerateRegions(){return this._regions}addCells(t){if((0,eh.default)(t.first>=0&&t.first<this._numCells&&t.last>=-1&&t.last<this._numCells&&t.last>=t.first-1,"CellRenderMask.addCells called with invalid cell range"),!(t.last<t.first)){var n=this._findRegion(t.first),r=n[0],o=n[1],i=this._findRegion(t.last),l=i[0],u=i[1];if(!(o===u&&!r.isSpacer)){var c=[],p=[],f=be(be({},t),{},{isSpacer:!1});r.first<f.first&&(r.isSpacer?c.push({first:r.first,last:f.first-1,isSpacer:!0}):f.first=r.first),l.last>f.last&&(l.isSpacer?p.push({first:f.last+1,last:l.last,isSpacer:!0}):f.last=l.last);var m=[...c,f,...p],g=u-o+1;this._regions.splice(o,g,...m)}}}numCells(){return this._numCells}equals(t){return this._numCells===t._numCells&&this._regions.length===t._regions.length&&this._regions.every((n,r)=>n.first===t._regions[r].first&&n.last===t._regions[r].last&&n.isSpacer===t._regions[r].isSpacer)}_findRegion(t){for(var n=0,r=this._regions.length-1;n<=r;){var o=Math.floor((n+r)/2),i=this._regions[o];if(t>=i.first&&t<=i.last)return[i,o];t<i.first?r=o-1:t>i.last&&(n=o+1)}(0,eh.default)(!1,"A region was not found containing cellIdx "+t)}};var nh=K(Pr()),Oc=class{constructor(){this._cellKeyToChildren=new Map,this._childrenToCellKey=new Map}add(t,n){var r;(0,nh.default)(!this._childrenToCellKey.has(t),"Trying to add already present child list");var o=(r=this._cellKeyToChildren.get(n))!==null&&r!==void 0?r:new Set;o.add(t),this._cellKeyToChildren.set(n,o),this._childrenToCellKey.set(t,n)}remove(t){var n=this._childrenToCellKey.get(t);(0,nh.default)(n!=null,"Trying to remove non-present child list"),this._childrenToCellKey.delete(t);var r=this._cellKeyToChildren.get(n);(0,nh.default)(r,"_cellKeyToChildren should contain cellKey"),r.delete(t),r.size===0&&this._cellKeyToChildren.delete(n)}forEach(t){for(var n=vo(this._cellKeyToChildren.values()),r;!(r=n()).done;)for(var o=r.value,i=vo(o),l;!(l=i()).done;){var u=l.value;t(u)}}forEachInCell(t,n){for(var r,o=(r=this._cellKeyToChildren.get(t))!==null&&r!==void 0?r:[],i=vo(o),l;!(l=i()).done;){var u=l.value;n(u)}}anyInCell(t,n){for(var r,o=(r=this._cellKeyToChildren.get(t))!==null&&r!==void 0?r:[],i=vo(o),l;!(l=i()).done;){var u=l.value;if(n(u))return!0}return!1}size(){return this._childrenToCellKey.size}};var ih=class{constructor(){this.any_blank_count=0,this.any_blank_ms=0,this.any_blank_speed_sum=0,this.mostly_blank_count=0,this.mostly_blank_ms=0,this.pixels_blank=0,this.pixels_sampled=0,this.pixels_scrolled=0,this.total_time_spent=0,this.sample_count=0}},oh=!1,rh=[],lI=10,Vx=oh?1:null,Kx=class{static addListener(t){return Vx===null&&console.warn("Call `FillRateHelper.setSampleRate` before `addListener`."),rh.push(t),{remove:()=>{rh=rh.filter(n=>t!==n)}}}static setSampleRate(t){Vx=t}static setMinSampleCount(t){lI=t}constructor(t){this._anyBlankStartTime=null,this._enabled=!1,this._info=new ih,this._mostlyBlankStartTime=null,this._samplesStartTime=null,this._getFrameMetrics=t,this._enabled=(Vx||0)>Math.random(),this._resetData()}activate(){this._enabled&&this._samplesStartTime==null&&(oh&&console.debug("FillRateHelper: activate"),this._samplesStartTime=global.performance.now())}deactivateAndFlush(){if(this._enabled){var t=this._samplesStartTime;if(t==null){oh&&console.debug("FillRateHelper: bail on deactivate with no start time");return}if(this._info.sample_count<lI){this._resetData();return}var n=global.performance.now()-t,r=be(be({},this._info),{},{total_time_spent:n});if(oh){var o={avg_blankness:this._info.pixels_blank/this._info.pixels_sampled,avg_speed:this._info.pixels_scrolled/(n/1e3),avg_speed_when_any_blank:this._info.any_blank_speed_sum/this._info.any_blank_count,any_blank_per_min:this._info.any_blank_count/(n/1e3/60),any_blank_time_frac:this._info.any_blank_ms/n,mostly_blank_per_min:this._info.mostly_blank_count/(n/1e3/60),mostly_blank_time_frac:this._info.mostly_blank_ms/n};for(var i in o)o[i]=Math.round(1e3*o[i])/1e3;console.debug("FillRateHelper deactivateAndFlush: ",{derived:o,info:r})}rh.forEach(l=>l(r)),this._resetData()}}computeBlankness(t,n,r){if(!this._enabled||t.getItemCount(t.data)===0||n.last<n.first||this._samplesStartTime==null)return 0;var o=r.dOffset,i=r.offset,l=r.velocity,u=r.visibleLength;this._info.sample_count++,this._info.pixels_sampled+=Math.round(u),this._info.pixels_scrolled+=Math.round(Math.abs(o));var c=Math.round(Math.abs(l)*1e3),p=global.performance.now();this._anyBlankStartTime!=null&&(this._info.any_blank_ms+=p-this._anyBlankStartTime),this._anyBlankStartTime=null,this._mostlyBlankStartTime!=null&&(this._info.mostly_blank_ms+=p-this._mostlyBlankStartTime),this._mostlyBlankStartTime=null;for(var f=0,m=n.first,g=this._getFrameMetrics(m,t);m<=n.last&&(!g||!g.inLayout);)g=this._getFrameMetrics(m,t),m++;g&&m>0&&(f=Math.min(u,Math.max(0,g.offset-i)));for(var b=0,v=n.last,k=this._getFrameMetrics(v,t);v>=n.first&&(!k||!k.inLayout);)k=this._getFrameMetrics(v,t),v--;if(k&&v<t.getItemCount(t.data)-1){var C=k.offset+k.length;b=Math.min(u,Math.max(0,i+u-C))}var y=Math.round(f+b),w=y/u;return w>0?(this._anyBlankStartTime=p,this._info.any_blank_speed_sum+=c,this._info.any_blank_count++,this._info.pixels_blank+=y,w>.5&&(this._mostlyBlankStartTime=p,this._info.mostly_blank_count++)):(c<.01||Math.abs(o)<1)&&this.deactivateAndFlush(),w}enabled(){return this._enabled}_resetData(){this._anyBlankStartTime=null,this._info=new ih,this._mostlyBlankStartTime=null,this._samplesStartTime=null}},sI=Kx;var Gx=K(Pr()),uI=K(Ce()),Lc=class extends uI.PureComponent{constructor(t){super(t),this._inAsyncStateUpdate=!1,this._installSetStateHooks()}setState(t,n){typeof t=="function"?super.setState((r,o)=>{this._inAsyncStateUpdate=!0;var i;try{i=t(r,o)}catch(l){throw l}finally{this._inAsyncStateUpdate=!1}return i},n):super.setState(t,n)}_installSetStateHooks(){var t=this,n=this.props,r=this.state;Object.defineProperty(this,"props",{get(){return(0,Gx.default)(!t._inAsyncStateUpdate,'"this.props" should not be accessed during state updates'),n},set(o){n=o}}),Object.defineProperty(this,"state",{get(){return(0,Gx.default)(!t._inAsyncStateUpdate,'"this.state" should not be acceessed during state updates'),r},set(o){r=o}})}};var cI=K(Pr()),Qx=class{constructor(t){t===void 0&&(t={viewAreaCoveragePercentThreshold:0}),this._hasInteracted=!1,this._timers=new Set,this._viewableIndices=[],this._viewableItems=new Map,this._config=t}dispose(){this._timers.forEach(clearTimeout)}computeViewableItems(t,n,r,o,i){var l=t.getItemCount(t.data),u=this._config,c=u.itemVisiblePercentThreshold,p=u.viewAreaCoveragePercentThreshold,f=p!=null,m=f?p:c;(0,cI.default)(m!=null&&c!=null!=(p!=null),"Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");var g=[];if(l===0)return g;var b=-1,v=i||{first:0,last:l-1},k=v.first,C=v.last;if(C>=l)return console.warn("Invalid render range computing viewability "+JSON.stringify({renderRange:i,itemCount:l})),[];for(var y=k;y<=C;y++){var w=o(y,t);if(w){var S=w.offset-n,T=S+w.length;if(S<r&&T>0)b=y,Dq(f,m,S,T,r,w.length)&&g.push(y);else if(b>=0)break}}return g}onUpdate(t,n,r,o,i,l,u){var c=t.getItemCount(t.data);if(!(this._config.waitForInteraction&&!this._hasInteracted||c===0||!o(0,t))){var p=[];if(c&&(p=this.computeViewableItems(t,n,r,o,u)),!(this._viewableIndices.length===p.length&&this._viewableIndices.every((m,g)=>m===p[g])))if(this._viewableIndices=p,this._config.minimumViewTime){var f=setTimeout(()=>{this._timers.delete(f),this._onUpdateSync(t,p,l,i)},this._config.minimumViewTime);this._timers.add(f)}else this._onUpdateSync(t,p,l,i)}}resetViewableIndices(){this._viewableIndices=[]}recordInteraction(){this._hasInteracted=!0}_onUpdateSync(t,n,r,o){n=n.filter(w=>this._viewableIndices.includes(w));for(var i=this._viewableItems,l=new Map(n.map(w=>{var S=o(w,!0,t);return[S.key,S]})),u=[],c=vo(l),p;!(p=c()).done;){var f=p.value,m=f[0],g=f[1];i.has(m)||u.push(g)}for(var b=vo(i),v;!(v=b()).done;){var k=v.value,C=k[0],y=k[1];l.has(C)||u.push(be(be({},y),{},{isViewable:!1}))}u.length>0&&(this._viewableItems=l,r({viewableItems:Array.from(l.values()),changed:u,viewabilityConfig:this._config}))}};function Dq(e,t,n,r,o,i){if(zq(n,r,o))return!0;var l=Nq(n,r,o),u=100*(e?l/o:l/i);return u>=t}function Nq(e,t,n){var r=Math.min(t,n)-Math.max(e,0);return Math.max(0,r)}function zq(e,t,n){return e>=0&&t<=n&&t>e}var $x=Qx;var Pc=K(Ce()),Mc=K(Ce()),Fq=!1,fs=Pc.createContext(null);Fq&&(fs.displayName="VirtualizedListContext");function pI(e){var t=e.children,n=e.value,r=(0,Mc.useMemo)(()=>({cellKey:null,getScrollMetrics:n.getScrollMetrics,horizontal:n.horizontal,getOutermostParentListRef:n.getOutermostParentListRef,registerAsNestedChild:n.registerAsNestedChild,unregisterAsNestedChild:n.unregisterAsNestedChild}),[n.getScrollMetrics,n.horizontal,n.getOutermostParentListRef,n.registerAsNestedChild,n.unregisterAsNestedChild]);return Pc.createElement(fs.Provider,{value:r},t)}function ms(e){var t=e.cellKey,n=e.children,r=(0,Mc.useContext)(fs),o=(0,Mc.useMemo)(()=>r==null?null:be(be({},r),{},{cellKey:t}),[r,t]);return Pc.createElement(fs.Provider,{value:o},n)}var dI=K(Pr()),yo=K(Ce()),Dc=class extends yo.Component{constructor(){super(...arguments),this.state={separatorProps:{highlighted:!1,leadingItem:this.props.item}},this._separators={highlight:()=>{var t=this.props,n=t.cellKey,r=t.prevCellKey;this.props.onUpdateSeparators([n,r],{highlighted:!0})},unhighlight:()=>{var t=this.props,n=t.cellKey,r=t.prevCellKey;this.props.onUpdateSeparators([n,r],{highlighted:!1})},updateProps:(t,n)=>{var r=this.props,o=r.cellKey,i=r.prevCellKey;this.props.onUpdateSeparators([t==="leading"?i:o],n)}},this._onLayout=t=>{this.props.onCellLayout&&this.props.onCellLayout(t,this.props.cellKey,this.props.index)}}static getDerivedStateFromProps(t,n){return{separatorProps:be(be({},n.separatorProps),{},{leadingItem:t.item})}}updateSeparatorProps(t){this.setState(n=>({separatorProps:be(be({},n.separatorProps),t)}))}componentWillUnmount(){this.props.onUnmount(this.props.cellKey)}_renderElement(t,n,r,o){if(t&&n&&console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem."),n)return yo.createElement(n,{item:r,index:o,separators:this._separators});if(t)return t({item:r,index:o,separators:this._separators});(0,dI.default)(!1,"VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.")}render(){var t=this.props,n=t.CellRendererComponent,r=t.ItemSeparatorComponent,o=t.ListItemComponent,i=t.cellKey,l=t.horizontal,u=t.item,c=t.index,p=t.inversionStyle,f=t.onCellFocusCapture,m=t.onCellLayout,g=t.renderItem,b=this._renderElement(g,o,u,c),v=yo.isValidElement(r)?r:r&&yo.createElement(r,this.state.separatorProps),k=p?l?[Yx.rowReverse,p]:[Yx.columnReverse,p]:l?[Yx.row,p]:p,C=n?yo.createElement(n,gn({cellKey:i,index:c,item:u,style:k,onFocusCapture:f},m&&{onLayout:this._onLayout}),b,v):yo.createElement(_t,gn({style:k,onFocusCapture:f},m&&{onLayout:this._onLayout}),b,v);return yo.createElement(ms,{cellKey:this.props.cellKey},C)}},Yx=hn.create({row:{flexDirection:"row"},rowReverse:{flexDirection:"row-reverse"},columnReverse:{flexDirection:"column-reverse"}});function Bq(e,t,n,r){r===void 0&&(r=1);for(var o=t.getItemCount(t.data),i=[],l=0;l<e.length;l++)for(var u=e[l],c=0,p=o-1;c<=p;){var f=c+(p-c>>>1),m=n(f,t),g=m.offset*r,b=(m.offset+m.length)*r;if(f===0&&u<g||f!==0&&u<=g)p=f-1;else if(u>b)c=f+1;else{i[l]=f;break}}return i}function Uq(e,t){return t.last-t.first+1-Math.max(0,1+Math.min(t.last,e.last)-Math.max(t.first,e.first))}function fI(e,t,n,r,o,i){var l=e.getItemCount(e.data);if(l===0)return{first:0,last:-1};var u=i.offset,c=i.velocity,p=i.visibleLength,f=i.zoomScale,m=f===void 0?1:f,g=Math.max(0,u),b=g+p,v=(n-1)*p,k=.5,C=c>1?"after":c<-1?"before":"none",y=Math.max(0,g-(1-k)*v),w=Math.max(0,b+k*v),S=o(l-1,e).offset*m;if(S<y)return{first:Math.max(0,l-1-t),last:l-1};var T=Bq([y,g,b,w],e,o,m),M=T[0],R=T[1],z=T[2],U=T[3];M=M??0,R=R??Math.max(0,M),U=U??l-1,z=z??Math.min(U,R+t-1);for(var Y={first:R,last:z},P=Uq(r,Y);!(R<=M&&z>=U);){var ae=P>=t,J=R<=r.first||R>r.last,$=R>M&&(!ae||!J),re=z>=r.last||z<r.first,te=z<U&&(!ae||!re);if(ae&&!$&&!te)break;$&&!(C==="after"&&te&&re)&&(J&&P++,R--),te&&!(C==="before"&&$&&J)&&(re&&P++,z++)}if(!(z>=R&&R>=0&&z<l&&R>=M&&z<=U&&R<=Y.first&&z>=Y.last))throw new Error("Bad window calculation "+JSON.stringify({first:R,last:z,itemCount:l,overscanFirst:M,overscanLast:U,visible:Y}));return{first:R,last:z}}function Nc(e,t){return typeof e=="object"&&e?.key!=null?e.key:typeof e=="object"&&e?.id!=null?e.id:String(t)}var $n=K(Pr()),xI=K(hI()),Qe=K(Ce()),Hq=!1,gI=.001,Xx=!1,Jx="";function Fa(e){return e??!1}function Wq(e){return e??10}function Zx(e){return e??10}function qq(e){return e??2}function bI(e){return e??2}function vI(e,t){return e*t/2}function jq(e){return e??50}function yI(e){return e??21}function Vq(e,t){for(var n=e.length-1;n>=0;n--)if(t(e[n]))return e[n];return null}var lh=class e extends Lc{scrollToEnd(t){var n=t?t.animated:!0,r=this.props.getItemCount(this.props.data)-1;if(!(r<0)){var o=this.__getFrameMetricsApprox(r,this.props),i=Math.max(0,o.offset+o.length+this._footerLength-this._scrollMetrics.visibleLength);if(this._scrollRef!=null){if(this._scrollRef.scrollTo==null){console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");return}this._scrollRef.scrollTo(Fa(this.props.horizontal)?{x:i,animated:n}:{y:i,animated:n})}}}scrollToIndex(t){var n=this.props,r=n.data,o=n.horizontal,i=n.getItemCount,l=n.getItemLayout,u=n.onScrollToIndexFailed,c=t.animated,p=t.index,f=t.viewOffset,m=t.viewPosition;if((0,$n.default)(p>=0,"scrollToIndex out of range: requested index "+p+" but minimum is 0"),(0,$n.default)(i(r)>=1,"scrollToIndex out of range: item length "+i(r)+" but minimum is 1"),(0,$n.default)(p<i(r),"scrollToIndex out of range: requested index "+p+" is out of 0 to "+(i(r)-1)),!l&&p>this._highestMeasuredFrameIndex){(0,$n.default)(!!u,"scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures."),u({averageItemLength:this._averageCellLength,highestMeasuredFrameIndex:this._highestMeasuredFrameIndex,index:p});return}var g=this.__getFrameMetricsApprox(Math.floor(p),this.props),b=Math.max(0,this._getOffsetApprox(p,this.props)-(m||0)*(this._scrollMetrics.visibleLength-g.length))-(f||0);if(this._scrollRef!=null){if(this._scrollRef.scrollTo==null){console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");return}this._scrollRef.scrollTo(o?{x:b,animated:c}:{y:b,animated:c})}}scrollToItem(t){for(var n=t.item,r=this.props,o=r.data,i=r.getItem,l=r.getItemCount,u=l(o),c=0;c<u;c++)if(i(o,c)===n){this.scrollToIndex(be(be({},t),{},{index:c}));break}}scrollToOffset(t){var n=t.animated,r=t.offset;if(this._scrollRef!=null){if(this._scrollRef.scrollTo==null){console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");return}this._scrollRef.scrollTo(Fa(this.props.horizontal)?{x:r,animated:n}:{y:r,animated:n})}}recordInteraction(){this._nestedChildLists.forEach(t=>{t.recordInteraction()}),this._viewabilityTuples.forEach(t=>{t.viewabilityHelper.recordInteraction()}),this._updateViewableItems(this.props,this.state.cellsAroundViewport)}flashScrollIndicators(){this._scrollRef!=null&&this._scrollRef.flashScrollIndicators()}getScrollResponder(){if(this._scrollRef&&this._scrollRef.getScrollResponder)return this._scrollRef.getScrollResponder()}getScrollableNode(){return this._scrollRef&&this._scrollRef.getScrollableNode?this._scrollRef.getScrollableNode():this._scrollRef}getScrollRef(){return this._scrollRef&&this._scrollRef.getScrollRef?this._scrollRef.getScrollRef():this._scrollRef}_getCellKey(){var t;return((t=this.context)==null?void 0:t.cellKey)||"rootList"}hasMore(){return this._hasMore}constructor(t){var n;if(super(t),this._getScrollMetrics=()=>this._scrollMetrics,this._getOutermostParentListRef=()=>this._isNestedWithSameOrientation()?this.context.getOutermostParentListRef():this,this._registerAsNestedChild=u=>{this._nestedChildLists.add(u.ref,u.cellKey),this._hasInteracted&&u.ref.recordInteraction()},this._unregisterAsNestedChild=u=>{this._nestedChildLists.remove(u.ref)},this._onUpdateSeparators=(u,c)=>{u.forEach(p=>{var f=p!=null&&this._cellRefs[p];f&&f.updateSeparatorProps(c)})},this._getSpacerKey=u=>u?"height":"width",this._averageCellLength=0,this._cellRefs={},this._frames={},this._footerLength=0,this._hasTriggeredInitialScrollToIndex=!1,this._hasInteracted=!1,this._hasMore=!1,this._hasWarned={},this._headerLength=0,this._hiPriInProgress=!1,this._highestMeasuredFrameIndex=0,this._indicesToKeys=new Map,this._lastFocusedCellKey=null,this._nestedChildLists=new Oc,this._offsetFromParentVirtualizedList=0,this._prevParentOffset=0,this._scrollMetrics={contentLength:0,dOffset:0,dt:10,offset:0,timestamp:0,velocity:0,visibleLength:0,zoomScale:1},this._scrollRef=null,this._sentStartForContentLength=0,this._sentEndForContentLength=0,this._totalCellLength=0,this._totalCellsMeasured=0,this._viewabilityTuples=[],this._captureScrollRef=u=>{this._scrollRef=u},this._defaultRenderScrollComponent=u=>{var c=u.onRefresh;if(this._isNestedWithSameOrientation())return Qe.createElement(_t,u);if(c){var p;return(0,$n.default)(typeof u.refreshing=="boolean","`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `"+JSON.stringify((p=u.refreshing)!==null&&p!==void 0?p:"undefined")+"`"),Qe.createElement(Bx,gn({},u,{refreshControl:u.refreshControl==null?Qe.createElement(N4,{refreshing:u.refreshing,onRefresh:c,progressViewOffset:u.progressViewOffset}):u.refreshControl}))}else return Qe.createElement(Bx,u)},this._onCellLayout=(u,c,p)=>{var f=u.nativeEvent.layout,m={offset:this._selectOffset(f),length:this._selectLength(f),index:p,inLayout:!0},g=this._frames[c];!g||m.offset!==g.offset||m.length!==g.length||p!==g.index?(this._totalCellLength+=m.length-(g?g.length:0),this._totalCellsMeasured+=g?0:1,this._averageCellLength=this._totalCellLength/this._totalCellsMeasured,this._frames[c]=m,this._highestMeasuredFrameIndex=Math.max(this._highestMeasuredFrameIndex,p),this._scheduleCellsToRenderUpdate()):this._frames[c].inLayout=!0,this._triggerRemeasureForChildListsInCell(c),this._computeBlankness(),this._updateViewableItems(this.props,this.state.cellsAroundViewport)},this._onCellUnmount=u=>{delete this._cellRefs[u];var c=this._frames[u];c&&(this._frames[u]=be(be({},c),{},{inLayout:!1}))},this._onLayout=u=>{this._isNestedWithSameOrientation()?this.measureLayoutRelativeToContainingList():this._scrollMetrics.visibleLength=this._selectLength(u.nativeEvent.layout),this.props.onLayout&&this.props.onLayout(u),this._scheduleCellsToRenderUpdate(),this._maybeCallOnEdgeReached()},this._onLayoutEmpty=u=>{this.props.onLayout&&this.props.onLayout(u)},this._onLayoutFooter=u=>{this._triggerRemeasureForChildListsInCell(this._getFooterCellKey()),this._footerLength=this._selectLength(u.nativeEvent.layout)},this._onLayoutHeader=u=>{this._headerLength=this._selectLength(u.nativeEvent.layout)},this._onContentSizeChange=(u,c)=>{u>0&&c>0&&this.props.initialScrollIndex!=null&&this.props.initialScrollIndex>0&&!this._hasTriggeredInitialScrollToIndex&&(this.props.contentOffset==null&&(this.props.initialScrollIndex<this.props.getItemCount(this.props.data)?this.scrollToIndex({animated:!1,index:(0,xI.default)(this.props.initialScrollIndex)}):this.scrollToEnd({animated:!1})),this._hasTriggeredInitialScrollToIndex=!0),this.props.onContentSizeChange&&this.props.onContentSizeChange(u,c),this._scrollMetrics.contentLength=this._selectLength({height:c,width:u}),this._scheduleCellsToRenderUpdate(),this._maybeCallOnEdgeReached()},this._convertParentScrollMetrics=u=>{var c=u.offset-this._offsetFromParentVirtualizedList,p=u.visibleLength,f=c-this._scrollMetrics.offset,m=this._scrollMetrics.contentLength;return{visibleLength:p,contentLength:m,offset:c,dOffset:f}},this._onScroll=u=>{this._nestedChildLists.forEach(y=>{y._onScroll(u)}),this.props.onScroll&&this.props.onScroll(u);var c=u.timeStamp,p=this._selectLength(u.nativeEvent.layoutMeasurement),f=this._selectLength(u.nativeEvent.contentSize),m=this._selectOffset(u.nativeEvent.contentOffset),g=m-this._scrollMetrics.offset;if(this._isNestedWithSameOrientation()){if(this._scrollMetrics.contentLength===0)return;var b=this._convertParentScrollMetrics({visibleLength:p,offset:m});p=b.visibleLength,f=b.contentLength,m=b.offset,g=b.dOffset}var v=this._scrollMetrics.timestamp?Math.max(1,c-this._scrollMetrics.timestamp):1,k=g/v;v>500&&this._scrollMetrics.dt>500&&f>5*p&&!this._hasWarned.perf&&(aI("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.",{dt:v,prevDt:this._scrollMetrics.dt,contentLength:f}),this._hasWarned.perf=!0);var C=u.nativeEvent.zoomScale<0?1:u.nativeEvent.zoomScale;this._scrollMetrics={contentLength:f,dt:v,dOffset:g,offset:m,timestamp:c,velocity:k,visibleLength:p,zoomScale:C},this._updateViewableItems(this.props,this.state.cellsAroundViewport),this.props&&(this._maybeCallOnEdgeReached(),k!==0&&this._fillRateHelper.activate(),this._computeBlankness(),this._scheduleCellsToRenderUpdate())},this._onScrollBeginDrag=u=>{this._nestedChildLists.forEach(c=>{c._onScrollBeginDrag(u)}),this._viewabilityTuples.forEach(c=>{c.viewabilityHelper.recordInteraction()}),this._hasInteracted=!0,this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(u)},this._onScrollEndDrag=u=>{this._nestedChildLists.forEach(p=>{p._onScrollEndDrag(u)});var c=u.nativeEvent.velocity;c&&(this._scrollMetrics.velocity=this._selectOffset(c)),this._computeBlankness(),this.props.onScrollEndDrag&&this.props.onScrollEndDrag(u)},this._onMomentumScrollBegin=u=>{this._nestedChildLists.forEach(c=>{c._onMomentumScrollBegin(u)}),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(u)},this._onMomentumScrollEnd=u=>{this._nestedChildLists.forEach(c=>{c._onMomentumScrollEnd(u)}),this._scrollMetrics.velocity=0,this._computeBlankness(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(u)},this._updateCellsToRender=()=>{this._updateViewableItems(this.props,this.state.cellsAroundViewport),this.setState((u,c)=>{var p=this._adjustCellsAroundViewport(c,u.cellsAroundViewport),f=e._createRenderMask(c,p,this._getNonViewportRenderRegions(c));return p.first===u.cellsAroundViewport.first&&p.last===u.cellsAroundViewport.last&&f.equals(u.renderMask)?null:{cellsAroundViewport:p,renderMask:f}})},this._createViewToken=(u,c,p)=>{var f=p.data,m=p.getItem,g=m(f,u);return{index:u,item:g,key:this._keyExtractor(g,u,p),isViewable:c}},this._getOffsetApprox=(u,c)=>{if(Number.isInteger(u))return this.__getFrameMetricsApprox(u,c).offset;var p=this.__getFrameMetricsApprox(Math.floor(u),c),f=u-Math.floor(u);return p.offset+f*p.length},this.__getFrameMetricsApprox=(u,c)=>{var p=this._getFrameMetrics(u,c);if(p&&p.index===u)return p;var f=c.data,m=c.getItemCount,g=c.getItemLayout;return(0,$n.default)(u>=0&&u<m(f),"Tried to get frame for out of range index "+u),(0,$n.default)(!g,"Should not have to estimate frames when a measurement metrics function is provided"),{length:this._averageCellLength,offset:this._averageCellLength*u}},this._getFrameMetrics=(u,c)=>{var p=c.data,f=c.getItem,m=c.getItemCount,g=c.getItemLayout;(0,$n.default)(u>=0&&u<m(p),"Tried to get frame for out of range index "+u);var b=f(p,u),v=this._frames[this._keyExtractor(b,u,c)];return(!v||v.index!==u)&&g?g(p,u):v},this._getNonViewportRenderRegions=u=>{if(!(this._lastFocusedCellKey&&this._cellRefs[this._lastFocusedCellKey]))return[];var c=this._cellRefs[this._lastFocusedCellKey],p=c.props.index,f=u.getItemCount(u.data);if(p>=f||this._keyExtractor(u.getItem(u.data,p),p,u)!==this._lastFocusedCellKey)return[];for(var m=p,g=0,b=m-1;b>=0&&g<this._scrollMetrics.visibleLength;b--)m--,g+=this.__getFrameMetricsApprox(b,u).length;for(var v=p,k=0,C=v+1;C<f&&k<this._scrollMetrics.visibleLength;C++)v++,k+=this.__getFrameMetricsApprox(C,u).length;return[{first:m,last:v}]},this._checkProps(t),this._fillRateHelper=new sI(this._getFrameMetrics),this._updateCellsToRenderBatcher=new iI(this._updateCellsToRender,(n=this.props.updateCellsBatchingPeriod)!==null&&n!==void 0?n:50),this.props.viewabilityConfigCallbackPairs)this._viewabilityTuples=this.props.viewabilityConfigCallbackPairs.map(u=>({viewabilityHelper:new $x(u.viewabilityConfig),onViewableItemsChanged:u.onViewableItemsChanged}));else{var r=this.props,o=r.onViewableItemsChanged,i=r.viewabilityConfig;o&&this._viewabilityTuples.push({viewabilityHelper:new $x(i),onViewableItemsChanged:o})}var l=e._initialRenderRegion(t);this.state={cellsAroundViewport:l,renderMask:e._createRenderMask(t,l)},this.invertedWheelEventHandler=u=>{var c=this.props.horizontal?u.target.scrollLeft:u.target.scrollTop,p=this.props.horizontal?u.target.scrollWidth:u.target.scrollHeight,f=this.props.horizontal?u.target.clientWidth:u.target.clientHeight,m=p>f,g=this.props.horizontal?u.deltaX||u.wheelDeltaX:u.deltaY||u.wheelDeltaY,b=g;m&&(b=g<0?Math.min(g+c,0):Math.max(g-(p-f-c),0));var v=g-b;if(this.props.inverted&&this._scrollRef&&this._scrollRef.getScrollableNode){var k=this._scrollRef.getScrollableNode();if(this.props.horizontal){u.target.scrollLeft+=v;var C=k.scrollLeft-b;k.scrollLeft=this.props.getItemLayout?C:Math.min(C,this._totalCellLength)}else{u.target.scrollTop+=v;var y=k.scrollTop-b;k.scrollTop=this.props.getItemLayout?y:Math.min(y,this._totalCellLength)}u.preventDefault()}}}_checkProps(t){var n=t.onScroll,r=t.windowSize,o=t.getItemCount,i=t.data,l=t.initialScrollIndex;(0,$n.default)(!n||!n.__isNative,"Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"),(0,$n.default)(yI(r)>0,"VirtualizedList: The windowSize prop must be present and set to a value greater than 0."),(0,$n.default)(o,'VirtualizedList: The "getItemCount" prop must be provided');var u=o(i);if(l!=null&&!this._hasTriggeredInitialScrollToIndex&&(l<0||u>0&&l>=u)&&!this._hasWarned.initialScrollIndex&&(console.warn('initialScrollIndex "'+l+'" is not valid (list has '+u+" items)"),this._hasWarned.initialScrollIndex=!0),Hq&&!this._hasWarned.flexWrap){var c=hn.flatten(this.props.contentContainerStyle);c!=null&&c.flexWrap==="wrap"&&(console.warn("`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead."),this._hasWarned.flexWrap=!0)}}static _createRenderMask(t,n,r){var o=t.getItemCount(t.data);(0,$n.default)(n.first>=0&&n.last>=n.first-1&&n.last<o,'Invalid cells around viewport "['+n.first+", "+n.last+']" was passed to VirtualizedList._createRenderMask');var i=new th(o);if(o>0){for(var l=[n,...r??[]],u=0,c=l;u<c.length;u++){var p=c[u];i.addCells(p)}if(t.initialScrollIndex==null||t.initialScrollIndex<=0){var f=e._initialRenderRegion(t);i.addCells(f)}var m=new Set(t.stickyHeaderIndices);e._ensureClosestStickyHeader(t,m,i,n.first)}return i}static _initialRenderRegion(t){var n,r=t.getItemCount(t.data),o=Math.max(0,Math.min(r-1,Math.floor((n=t.initialScrollIndex)!==null&&n!==void 0?n:0))),i=Math.min(r,o+Wq(t.initialNumToRender))-1;return{first:o,last:i}}static _ensureClosestStickyHeader(t,n,r,o){for(var i=t.ListHeaderComponent?1:0,l=o-1;l>=0;l--)if(n.has(l+i)){r.addCells({first:l,last:l});break}}_adjustCellsAroundViewport(t,n){var r=t.data,o=t.getItemCount,i=bI(t.onEndReachedThreshold),l=this._scrollMetrics,u=l.contentLength,c=l.offset,p=l.visibleLength,f=u-p-c;if(p<=0||u<=0)return n.last>=o(r)?e._constrainToItemCount(n,t):n;var m;if(t.disableVirtualization){var g=f<i*p?Zx(t.maxToRenderPerBatch):0;m={first:0,last:Math.min(n.last+g,o(r)-1)}}else{if(t.initialScrollIndex&&!this._scrollMetrics.offset&&Math.abs(f)>=Number.EPSILON)return n.last>=o(r)?e._constrainToItemCount(n,t):n;m=fI(t,Zx(t.maxToRenderPerBatch),yI(t.windowSize),n,this.__getFrameMetricsApprox,this._scrollMetrics),(0,$n.default)(m.last<o(r),"computeWindowedRenderLimits() should return range in-bounds")}if(this._nestedChildLists.size()>0){var b=this._findFirstChildWithMore(m.first,m.last);m.last=b??m.last}return m}_findFirstChildWithMore(t,n){for(var r=t;r<=n;r++){var o=this._indicesToKeys.get(r);if(o!=null&&this._nestedChildLists.anyInCell(o,i=>i.hasMore()))return r}return null}componentDidMount(){this._isNestedWithSameOrientation()&&this.context.registerAsNestedChild({ref:this,cellKey:this.context.cellKey}),this.setupWebWheelHandler()}componentWillUnmount(){this._isNestedWithSameOrientation()&&this.context.unregisterAsNestedChild({ref:this}),this._updateCellsToRenderBatcher.dispose({abort:!0}),this._viewabilityTuples.forEach(t=>{t.viewabilityHelper.dispose()}),this._fillRateHelper.deactivateAndFlush(),this.teardownWebWheelHandler()}setupWebWheelHandler(){if(this._scrollRef&&this._scrollRef.getScrollableNode)this._scrollRef.getScrollableNode().addEventListener("wheel",this.invertedWheelEventHandler);else{setTimeout(()=>this.setupWebWheelHandler(),50);return}}teardownWebWheelHandler(){this._scrollRef&&this._scrollRef.getScrollableNode&&this._scrollRef.getScrollableNode().removeEventListener("wheel",this.invertedWheelEventHandler)}static getDerivedStateFromProps(t,n){var r=t.getItemCount(t.data);if(r===n.renderMask.numCells())return n;var o=e._constrainToItemCount(n.cellsAroundViewport,t);return{cellsAroundViewport:o,renderMask:e._createRenderMask(t,o)}}_pushCells(t,n,r,o,i,l){var u=this,c=this.props,p=c.CellRendererComponent,f=c.ItemSeparatorComponent,m=c.ListHeaderComponent,g=c.ListItemComponent,b=c.data,v=c.debug,k=c.getItem,C=c.getItemCount,y=c.getItemLayout,w=c.horizontal,S=c.renderItem,T=m?1:0,M=C(b)-1,R;i=Math.min(M,i);for(var z=function(){var P=k(b,U),ae=u._keyExtractor(P,U,u.props);u._indicesToKeys.set(U,ae),r.has(U+T)&&n.push(t.length);var J=y==null||v||u._fillRateHelper.enabled();t.push(Qe.createElement(Dc,gn({CellRendererComponent:p,ItemSeparatorComponent:U<M?f:void 0,ListItemComponent:g,cellKey:ae,horizontal:w,index:U,inversionStyle:l,item:P,key:ae,prevCellKey:R,onUpdateSeparators:u._onUpdateSeparators,onCellFocusCapture:$=>u._onCellFocusCapture(ae),onUnmount:u._onCellUnmount,ref:$=>{u._cellRefs[ae]=$},renderItem:S},J&&{onCellLayout:u._onCellLayout}))),R=ae},U=o;U<=i;U++)z()}static _constrainToItemCount(t,n){var r=n.getItemCount(n.data),o=Math.min(r-1,t.last),i=Zx(n.maxToRenderPerBatch);return{first:jx(0,r-1-i,t.first),last:o}}_isNestedWithSameOrientation(){var t=this.context;return!!(t&&!!t.horizontal===Fa(this.props.horizontal))}_keyExtractor(t,n,r){if(r.keyExtractor!=null)return r.keyExtractor(t,n);var o=Nc(t,n);return o===String(n)&&(Xx=!0,t.type&&t.type.displayName&&(Jx=t.type.displayName)),o}render(){this._checkProps(this.props);var t=this.props,n=t.ListEmptyComponent,r=t.ListFooterComponent,o=t.ListHeaderComponent,i=this.props,l=i.data,u=i.horizontal,c=this.props.inverted?Fa(this.props.horizontal)?to.horizontallyInverted:to.verticallyInverted:null,p=[],f=new Set(this.props.stickyHeaderIndices),m=[];if(o){f.has(0)&&m.push(0);var g=Qe.isValidElement(o)?o:Qe.createElement(o,null);p.push(Qe.createElement(ms,{cellKey:this._getCellKey()+"-header",key:"$header"},Qe.createElement(_t,{onLayout:this._onLayoutHeader,style:[c,this.props.ListHeaderComponentStyle]},g)))}var b=this.props.getItemCount(l);if(b===0&&n){var v=Qe.isValidElement(n)?n:Qe.createElement(n,null);p.push(Qe.createElement(ms,{cellKey:this._getCellKey()+"-empty",key:"$empty"},Qe.cloneElement(v,{onLayout:te=>{this._onLayoutEmpty(te),v.props.onLayout&&v.props.onLayout(te)},style:[c,v.props.style]})))}if(b>0){Xx=!1,Jx="";for(var k=this._getSpacerKey(!u),C=this.state.renderMask.enumerateRegions(),y=Vq(C,te=>te.isSpacer),w=vo(C),S;!(S=w()).done;){var T=S.value;if(T.isSpacer){if(this.props.disableVirtualization)continue;var M=T===y,R=M&&!this.props.getItemLayout,z=R?jx(T.first-1,T.last,this._highestMeasuredFrameIndex):T.last,U=this.__getFrameMetricsApprox(T.first,this.props),Y=this.__getFrameMetricsApprox(z,this.props),P=Y.offset+Y.length-U.offset;p.push(Qe.createElement(_t,{key:"$spacer-"+T.first,style:{[k]:P}}))}else this._pushCells(p,m,f,T.first,T.last,c)}!this._hasWarned.keys&&Xx&&(console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.",Jx),this._hasWarned.keys=!0)}if(r){var ae=Qe.isValidElement(r)?r:Qe.createElement(r,null);p.push(Qe.createElement(ms,{cellKey:this._getFooterCellKey(),key:"$footer"},Qe.createElement(_t,{onLayout:this._onLayoutFooter,style:[c,this.props.ListFooterComponentStyle]},ae)))}var J=be(be({},this.props),{},{onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout,onScroll:this._onScroll,onScrollBeginDrag:this._onScrollBeginDrag,onScrollEndDrag:this._onScrollEndDrag,onMomentumScrollBegin:this._onMomentumScrollBegin,onMomentumScrollEnd:this._onMomentumScrollEnd,scrollEventThrottle:jq(this.props.scrollEventThrottle),invertStickyHeaders:this.props.invertStickyHeaders!==void 0?this.props.invertStickyHeaders:this.props.inverted,stickyHeaderIndices:m,style:c?[c,this.props.style]:this.props.style});this._hasMore=this.state.cellsAroundViewport.last<b-1;var $=Qe.createElement(pI,{value:{cellKey:null,getScrollMetrics:this._getScrollMetrics,horizontal:Fa(this.props.horizontal),getOutermostParentListRef:this._getOutermostParentListRef,registerAsNestedChild:this._registerAsNestedChild,unregisterAsNestedChild:this._unregisterAsNestedChild}},Qe.cloneElement((this.props.renderScrollComponent||this._defaultRenderScrollComponent)(J),{ref:this._captureScrollRef},p)),re=$;return this.props.debug?Qe.createElement(_t,{style:to.debug},re,this._renderDebugOverlay()):re}componentDidUpdate(t){var n=this.props,r=n.data,o=n.extraData;(r!==t.data||o!==t.extraData)&&this._viewabilityTuples.forEach(l=>{l.viewabilityHelper.resetViewableIndices()});var i=this._hiPriInProgress;this._scheduleCellsToRenderUpdate(),i&&(this._hiPriInProgress=!1)}_computeBlankness(){this._fillRateHelper.computeBlankness(this.props,this.state.cellsAroundViewport,this._scrollMetrics)}_onCellFocusCapture(t){this._lastFocusedCellKey=t,this._updateCellsToRender()}_triggerRemeasureForChildListsInCell(t){this._nestedChildLists.forEachInCell(t,n=>{n.measureLayoutRelativeToContainingList()})}measureLayoutRelativeToContainingList(){try{if(!this._scrollRef)return;this._scrollRef.measureLayout(this.context.getOutermostParentListRef().getScrollRef(),(t,n,r,o)=>{this._offsetFromParentVirtualizedList=this._selectOffset({x:t,y:n}),this._scrollMetrics.contentLength=this._selectLength({width:r,height:o});var i=this._convertParentScrollMetrics(this.context.getScrollMetrics()),l=this._scrollMetrics.visibleLength!==i.visibleLength||this._scrollMetrics.offset!==i.offset;l&&(this._scrollMetrics.visibleLength=i.visibleLength,this._scrollMetrics.offset=i.offset,this._nestedChildLists.forEach(u=>{u.measureLayoutRelativeToContainingList()}))},t=>{console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.")})}catch(t){console.warn("measureLayoutRelativeToContainingList threw an error",t.stack)}}_getFooterCellKey(){return this._getCellKey()+"-footer"}_renderDebugOverlay(){for(var t=this._scrollMetrics.visibleLength/(this._scrollMetrics.contentLength||1),n=[],r=this.props.getItemCount(this.props.data),o=0;o<r;o++){var i=this.__getFrameMetricsApprox(o,this.props);i.inLayout&&n.push(i)}var l=this.__getFrameMetricsApprox(this.state.cellsAroundViewport.first,this.props).offset,u=this.__getFrameMetricsApprox(this.state.cellsAroundViewport.last,this.props),c=u.offset+u.length-l,p=this._scrollMetrics.offset,f=this._scrollMetrics.visibleLength;return Qe.createElement(_t,{style:[to.debugOverlayBase,to.debugOverlay]},n.map((m,g)=>Qe.createElement(_t,{key:"f"+g,style:[to.debugOverlayBase,to.debugOverlayFrame,{top:m.offset*t,height:m.length*t}]})),Qe.createElement(_t,{style:[to.debugOverlayBase,to.debugOverlayFrameLast,{top:l*t,height:c*t}]}),Qe.createElement(_t,{style:[to.debugOverlayBase,to.debugOverlayFrameVis,{top:p*t,height:f*t}]}))}_selectLength(t){return Fa(this.props.horizontal)?t.width:t.height}_selectOffset(t){return Fa(this.props.horizontal)?t.x:t.y}_maybeCallOnEdgeReached(){var t=this.props,n=t.data,r=t.getItemCount,o=t.onStartReached,i=t.onStartReachedThreshold,l=t.onEndReached,u=t.onEndReachedThreshold,c=t.initialScrollIndex,p=this._scrollMetrics,f=p.contentLength,m=p.visibleLength,g=p.offset,b=g,v=f-m-g;b<gI&&(b=0),v<gI&&(v=0);var k=2,C=i!=null?i*m:k,y=u!=null?u*m:k,w=b<=C,S=v<=y;l&&this.state.cellsAroundViewport.last===r(n)-1&&S&&this._scrollMetrics.contentLength!==this._sentEndForContentLength?(this._sentEndForContentLength=this._scrollMetrics.contentLength,l({distanceFromEnd:v})):o!=null&&this.state.cellsAroundViewport.first===0&&w&&this._scrollMetrics.contentLength!==this._sentStartForContentLength?(!c||this._scrollMetrics.timestamp!==0)&&(this._sentStartForContentLength=this._scrollMetrics.contentLength,o({distanceFromStart:b})):(this._sentStartForContentLength=w?this._sentStartForContentLength:0,this._sentEndForContentLength=S?this._sentEndForContentLength:0)}_scheduleCellsToRenderUpdate(){var t=this.state.cellsAroundViewport,n=t.first,r=t.last,o=this._scrollMetrics,i=o.offset,l=o.visibleLength,u=o.velocity,c=this.props.getItemCount(this.props.data),p=!1,f=qq(this.props.onStartReachedThreshold),m=bI(this.props.onEndReachedThreshold);if(n>0){var g=i-this.__getFrameMetricsApprox(n,this.props).offset;p=g<0||u<-2&&g<vI(f,l)}if(!p&&r>=0&&r<c-1){var b=this.__getFrameMetricsApprox(r,this.props).offset-(i+l);p=b<0||u>2&&b<vI(m,l)}if(p&&(this._averageCellLength||this.props.getItemLayout)&&!this._hiPriInProgress){this._hiPriInProgress=!0,this._updateCellsToRenderBatcher.dispose({abort:!0}),this._updateCellsToRender();return}else this._updateCellsToRenderBatcher.schedule()}_updateViewableItems(t,n){this._viewabilityTuples.forEach(r=>{r.viewabilityHelper.onUpdate(t,this._scrollMetrics.offset,this._scrollMetrics.visibleLength,this._getFrameMetrics,this._createViewToken,r.onViewableItemsChanged,n)})}};lh.contextType=fs;var to=hn.create({verticallyInverted:{transform:"scaleY(-1)"},horizontallyInverted:{transform:"scaleX(-1)"},debug:{flex:1},debugOverlayBase:{position:"absolute",top:0,right:0},debugOverlay:{bottom:0,width:20,borderColor:"blue",borderWidth:1},debugOverlayFrame:{left:0,backgroundColor:"orange"},debugOverlayFrameLast:{left:0,borderColor:"green",borderWidth:2},debugOverlayFrameVis:{left:0,borderColor:"red",borderWidth:2}}),wI=lh;var kI=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Kq(e,t){return!!(e===t||kI(e)&&kI(t))}function Gq(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Kq(e[n],t[n]))return!1;return!0}function SI(e,t){t===void 0&&(t=Gq);var n=null;function r(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];if(n&&n.lastThis===this&&t(o,n.lastArgs))return n.lastResult;var l=e.apply(this,o);return n={lastResult:l,lastArgs:o,lastThis:this},l}return r.clear=function(){n=null},r}var Qq=["numColumns","columnWrapperStyle","removeClippedSubviews","strictMode"];function $q(e){return e??Fm.OS==="android"}function Ba(e){return e??1}function Yq(e){return typeof Object(e).length=="number"}var ew=class extends ti.PureComponent{scrollToEnd(t){this._listRef&&this._listRef.scrollToEnd(t)}scrollToIndex(t){this._listRef&&this._listRef.scrollToIndex(t)}scrollToItem(t){this._listRef&&this._listRef.scrollToItem(t)}scrollToOffset(t){this._listRef&&this._listRef.scrollToOffset(t)}recordInteraction(){this._listRef&&this._listRef.recordInteraction()}flashScrollIndicators(){this._listRef&&this._listRef.flashScrollIndicators()}getScrollResponder(){if(this._listRef)return this._listRef.getScrollResponder()}getNativeScrollRef(){if(this._listRef)return this._listRef.getScrollRef()}getScrollableNode(){if(this._listRef)return this._listRef.getScrollableNode()}constructor(t){super(t),this._virtualizedListPairs=[],this._captureRef=n=>{this._listRef=n},this._getItem=(n,r)=>{var o=Ba(this.props.numColumns);if(o>1){for(var i=[],l=0;l<o;l++){var u=r*o+l;if(u<n.length){var c=n[u];i.push(c)}}return i}else return n[r]},this._getItemCount=n=>{if(n!=null&&Yq(n)){var r=Ba(this.props.numColumns);return r>1?Math.ceil(n.length/r):n.length}else return 0},this._keyExtractor=(n,r)=>{var o,i=Ba(this.props.numColumns),l=(o=this.props.keyExtractor)!==null&&o!==void 0?o:Nc;return i>1?((0,Mr.default)(Array.isArray(n),"FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.",i),n.map((u,c)=>l(u,r*i+c)).join(":")):l(n,r)},this._renderer=(n,r,o,i,l)=>{var u=Ba(i),c=f=>n?ti.createElement(n,f):r?r(f):null,p=f=>{if(u>1){var m=f.item,g=f.index;return(0,Mr.default)(Array.isArray(m),"Expected array of items with numColumns > 1"),ti.createElement(_t,{style:[Xq.row,o]},m.map((b,v)=>{var k=c({item:b,index:g*u+v,separators:f.separators});return k!=null?ti.createElement(ti.Fragment,{key:v},k):null}))}else return c(f)};return n?{ListItemComponent:p}:{renderItem:p}},this._memoizedRenderer=SI(this._renderer),this._checkProps(this.props),this.props.viewabilityConfigCallbackPairs?this._virtualizedListPairs=this.props.viewabilityConfigCallbackPairs.map(n=>({viewabilityConfig:n.viewabilityConfig,onViewableItemsChanged:this._createOnViewableItemsChanged(n.onViewableItemsChanged)})):this.props.onViewableItemsChanged&&this._virtualizedListPairs.push({viewabilityConfig:this.props.viewabilityConfig,onViewableItemsChanged:this._createOnViewableItemsChanged(this.props.onViewableItemsChanged)})}componentDidUpdate(t){(0,Mr.default)(t.numColumns===this.props.numColumns,"Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component."),(0,Mr.default)(t.onViewableItemsChanged===this.props.onViewableItemsChanged,"Changing onViewableItemsChanged on the fly is not supported"),(0,Mr.default)(!L4(t.viewabilityConfig,this.props.viewabilityConfig),"Changing viewabilityConfig on the fly is not supported"),(0,Mr.default)(t.viewabilityConfigCallbackPairs===this.props.viewabilityConfigCallbackPairs,"Changing viewabilityConfigCallbackPairs on the fly is not supported"),this._checkProps(this.props)}_checkProps(t){var n=t.getItem,r=t.getItemCount,o=t.horizontal,i=t.columnWrapperStyle,l=t.onViewableItemsChanged,u=t.viewabilityConfigCallbackPairs,c=Ba(this.props.numColumns);(0,Mr.default)(!n&&!r,"FlatList does not support custom data formats."),c>1?(0,Mr.default)(!o,"numColumns does not support horizontal."):(0,Mr.default)(!i,"columnWrapperStyle not supported for single column lists"),(0,Mr.default)(!(l&&u),"FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.")}_pushMultiColumnViewable(t,n){var r,o=Ba(this.props.numColumns),i=(r=this.props.keyExtractor)!==null&&r!==void 0?r:Nc;n.item.forEach((l,u)=>{(0,Mr.default)(n.index!=null,"Missing index!");var c=n.index*o+u;t.push(be(be({},n),{},{item:l,key:i(l,c),index:c}))})}_createOnViewableItemsChanged(t){return n=>{var r=Ba(this.props.numColumns);if(t)if(r>1){var o=[],i=[];n.viewableItems.forEach(l=>this._pushMultiColumnViewable(i,l)),n.changed.forEach(l=>this._pushMultiColumnViewable(o,l)),t({viewableItems:i,changed:o})}else t(n)}}render(){var t=this.props,n=t.numColumns,r=t.columnWrapperStyle,o=t.removeClippedSubviews,i=t.strictMode,l=i===void 0?!1:i,u=mn(t,Qq),c=l?this._memoizedRenderer:this._renderer;return ti.createElement(wI,gn({},u,{getItem:this._getItem,getItemCount:this._getItemCount,keyExtractor:this._keyExtractor,ref:this._captureRef,viewabilityConfigCallbackPairs:this._virtualizedListPairs,removeClippedSubviews:$q(o)},c(this.props.ListItemComponent,this.props.renderItem,r,n,this.props.extraData)))}},Xq=hn.create({row:{flexDirection:"row"}}),_I=ew;var tw=_I;var ut=K(Ce(),1),zc=K(Ce(),1),II=K(Ce(),1),Jq={readAheadChars:15,targetBufferChars:15,adjustPercentage:.2,frameLookBackMs:1e4,windowLookBackMs:2e3},Zq=({isBehind:e,adjustPercentage:t,isStreamFinished:n})=>n?1:e?1-t:1+t,ej=(e,t,n)=>{let r=[0,...n],o=Math.min(e,r.length),i=Math.min(t,r.length),l=r.slice(-1*o),u=[];if(i>0)for(let f=0;f<l.length-i+1;f++){let m=f+i-1,g=l[m]-l[f];u.push(g)}let c=u.reduce((f,m)=>f+m,0)/u.length;return c>0?i/c:i},tj=(e={})=>{let{frameLookBackMs:t,targetBufferChars:n,readAheadChars:r,adjustPercentage:o,windowLookBackMs:i}={...Jq,...e};return({visibleText:l,isStreamFinished:u,visibleTextAll:c,visibleTextLengthsAll:p,frameCount:f,visibleTextIncrements:m,visibleTextLengthTarget:g,startStreamTime:b})=>{let k=(performance.now()-b)/1e3,C=f/k,y=c.length-g,w=Math.ceil(t/(1e3/C)),S=Math.ceil(i/(1e3/C)),T=ej(w,S,p),M=[...m].reverse().findIndex(U=>U>0);M=M===-1?f:M;let R=0,z=r+n;if(!u&&(y<r||l.length===0&&y<z)||g>=c.length)R=0;else{let U=r+n,Y=y>U,P=T*Zq({adjustPercentage:o,isBehind:Y,isStreamFinished:u});P>1?R=M>=P?1:0:R=Math.round(1/P)}return{visibleTextIncrement:R}}},nj=({llmOutput:e,block:t,priority:n})=>{let r=[],o=0;for(;o<e.length;){let i=t.findCompleteMatch(e.slice(o));if(i)r.push({block:t,match:{outputRaw:i.outputRaw,startIndex:o+i.startIndex,endIndex:o+i.endIndex},llmOutput:e,isComplete:!0,priority:n}),o+=i.endIndex;else return r}return r},rj=e=>e.filter(t=>!e.filter(r=>r.priority<t.priority).some(r=>oj(r.match,t.match))),CI=(e,t)=>e.match.startIndex-t.match.startIndex,oj=(e,t)=>e.startIndex>=t.startIndex&&e.startIndex<t.endIndex||e.endIndex>t.startIndex&&e.endIndex<=t.endIndex||t.startIndex>=e.startIndex&&t.startIndex<e.endIndex||t.endIndex>e.startIndex&&t.endIndex<=e.endIndex,ij=({llmOutput:e,blocks:t,currentIndex:n})=>{for(let[r,o]of Array.from(t.entries())){let i=e.slice(n),l=o.findPartialMatch(i);if(l)return{block:o,match:{outputRaw:l.outputRaw,startIndex:l.startIndex+n,endIndex:l.endIndex+n},llmOutput:e,isComplete:!0,priority:r}}},aj=({blockMatches:e,llmOutput:t,fallbackPriority:n,fallbackBlock:r})=>{let o=e.map((l,u)=>{let c=u===0?0:e[u-1].match.endIndex;if(c<l.match.startIndex){let p=t.slice(c,l.match.startIndex);return{block:r,match:{startIndex:c,endIndex:l.match.startIndex,outputRaw:p},priority:n,llmOutput:t,isComplete:!0}}}).filter(l=>l!==void 0),i=e.length>0?e[e.length-1].match.endIndex:0;if(i<t.length){let l=t.slice(i,t.length);o.push({block:r,match:{startIndex:i,endIndex:t.length,outputRaw:l},priority:n,llmOutput:t,isComplete:!1})}return o},lj=({llmOutputRaw:e,matches:t,visibleTextLengthTarget:n,isStreamFinished:r})=>t.reduce((o,i,l)=>{let u=o.map(v=>v.visibleText.length).reduce((v,k)=>v+k,0),c=Math.max(n-u,0),f=!(l===t.length-1)||r,{output:m,visibleText:g}=i.block.lookBack({isComplete:f,visibleTextLengthTarget:c,isStreamFinished:r,output:i.match.outputRaw});g.length>c;let b={...i.match,isComplete:f,block:i.block,priority:i.priority,llmOutput:i.llmOutput,output:m,visibleText:g,isVisible:g.length>0};return[...o,b]},[]),nw=({llmOutput:e,blocks:t,fallbackBlock:n,isStreamFinished:r,visibleTextLengthTarget:o=Number.MAX_SAFE_INTEGER})=>{let i=t.flatMap((f,m)=>nj({llmOutput:e,block:f,priority:m})),l=rj(i);l.sort(CI);let u=l.length>0?l[l.length-1].match.endIndex:0,c=r?void 0:ij({llmOutput:e,currentIndex:u,blocks:t});c&&l.push(c);let p=aj({blockMatches:l,llmOutput:e,fallbackPriority:t.length,fallbackBlock:n});for(let f of p)l.push(f);return l.sort(CI),lj({llmOutputRaw:e,matches:l,isStreamFinished:r,visibleTextLengthTarget:o})},rw=e=>e.map(t=>t.visibleText).join(""),EI=e=>e.map(t=>t.output).join(""),RI={blockMatches:[],isFinished:!1,visibleText:""},TI=({llmOutput:e,isStreamFinished:t,blocks:n=[],fallbackBlock:r,throttle:o=tj(),onFinish:i=()=>null})=>{let l=(0,ut.useRef)(performance.now()),u=(0,ut.useRef)(performance.now()),c=(0,ut.useRef)(),p=(0,ut.useRef)(),f=(0,ut.useRef)(0),m=(0,ut.useRef)(),g=(0,ut.useRef)(),b=(0,ut.useRef)([]),v=(0,ut.useRef)([]),k=(0,ut.useRef)([]),C=(0,ut.useRef)(0),y=(0,ut.useMemo)(()=>nw({llmOutput:e,blocks:n,fallbackBlock:r,isStreamFinished:t}),[e,t]),[{blockMatches:w,...S},T]=(0,ut.useState)({...RI,finishCount:0,blockMatches:y}),M=(0,ut.useCallback)(()=>{T(U=>({...U,...RI})),l.current=performance.now(),m.current=void 0,g.current=void 0,b.current=[],v.current=[],k.current=[],C.current=0,f.current=0,p.current&&(cancelAnimationFrame(p.current),p.current=void 0)},[T]),R=(0,ut.useCallback)(()=>{M(),setTimeout(()=>{c.current&&(p.current=requestAnimationFrame(c.current))},10)},[M]),z=U=>{if(!c.current)return;let Y=nw({llmOutput:e,blocks:n,fallbackBlock:r,isStreamFinished:t}),P=rw(w),ae=EI(w),J=rw(Y),$=EI(Y);t||(b.current.push(J.length),v.current.push($.length));let re=P===J&&t;if(re){p.current=void 0,T(De=>({...De,blockMatches:w,isFinished:re,finishCount:De.finishCount+1,visibleText:P})),i();return}let te=t?[...b.current,J.length]:b.current,he=t?[...v.current,$.length]:v.current,{visibleTextIncrement:Le}=o({outputRaw:e,outputRendered:ae,outputAll:$,visibleText:P,visibleTextAll:J,startStreamTime:l.current,isStreamFinished:t,frameCount:f.current,frameTime:U,frameTimePrevious:g.current,finishStreamTime:m.current,visibleTextLengthsAll:te,outputLengths:he,visibleTextIncrements:k.current,visibleTextLengthTarget:C.current});if(Le<0)throw new Error("throttle returned negative visibleTextIncrement");if(k.current.push(Le),C.current=C.current+Le,C.current>P.length){let De=nw({llmOutput:e,blocks:n,fallbackBlock:r,isStreamFinished:t,visibleTextLengthTarget:C.current}),Pe=rw(De);u.current=performance.now(),T(A=>({...A,blockMatches:De,isFinished:re,visibleText:Pe}))}p.current=requestAnimationFrame(c.current),g.current=U,f.current=f.current+1};return(0,ut.useEffect)(()=>{c.current=z}),(0,ut.useEffect)(()=>{c.current=z,!p.current&&e&&e.length>0?p.current=requestAnimationFrame(c.current):k.current.length>0&&e.length===0&&M()},[e]),(0,ut.useEffect)(()=>{},[]),(0,ut.useEffect)(()=>{!m.current&&t&&(m.current=performance.now())},[t]),{blockMatches:w,restart:R,...S}};var sj={autoStartDelayMs:0,autoStart:!0,delayMultiplier:1,startIndex:0};var noe={delayMsProbabilities:[{delayMs:10,prob:.4},{delayMs:70,prob:.3},{delayMs:250,prob:.2},{delayMs:600,prob:.1}],tokenCharsProbabilities:[{tokenChars:1,prob:.5},{tokenChars:2,prob:.3},{tokenChars:3,prob:.2}],...sj};function AI(e,t){let n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var uj=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cj=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,pj={};function sh(e,t){return((t||pj).jsx?cj:uj).test(e)}var dj=/[ \t\n\f\r]/g;function ow(e){return typeof e=="object"?e.type==="text"?OI(e.value):!1:OI(e)}function OI(e){return e.replace(dj,"")===""}var ni=class{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}};ni.prototype.property={};ni.prototype.normal={};ni.prototype.space=null;function iw(e,t){let n={},r={},o=-1;for(;++o<e.length;)Object.assign(n,e[o].property),Object.assign(r,e[o].normal);return new ni(n,r,t)}function Fc(e){return e.toLowerCase()}var bn=class{constructor(t,n){this.property=t,this.attribute=n}};bn.prototype.space=null;bn.prototype.boolean=!1;bn.prototype.booleanish=!1;bn.prototype.overloadedBoolean=!1;bn.prototype.number=!1;bn.prototype.commaSeparated=!1;bn.prototype.spaceSeparated=!1;bn.prototype.commaOrSpaceSeparated=!1;bn.prototype.mustUseProperty=!1;bn.prototype.defined=!1;var Bc={};wb(Bc,{boolean:()=>ye,booleanish:()=>vt,commaOrSpaceSeparated:()=>Yn,commaSeparated:()=>$i,number:()=>G,overloadedBoolean:()=>aw,spaceSeparated:()=>Ke});var fj=0,ye=Ua(),vt=Ua(),aw=Ua(),G=Ua(),Ke=Ua(),$i=Ua(),Yn=Ua();function Ua(){return 2**++fj}var lw=Object.keys(Bc),Ha=class extends bn{constructor(t,n,r,o){let i=-1;if(super(t,n),LI(this,"space",o),typeof r=="number")for(;++i<lw.length;){let l=lw[i];LI(this,lw[i],(r&Bc[l])===Bc[l])}}};Ha.prototype.defined=!0;function LI(e,t,n){n&&(e[t]=n)}var mj={}.hasOwnProperty;function Dr(e){let t={},n={},r;for(r in e.properties)if(mj.call(e.properties,r)){let o=e.properties[r],i=new Ha(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Fc(r)]=r,n[Fc(i.attribute)]=r}return new ni(t,n,e.space)}var sw=Dr({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});var uw=Dr({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function uh(e,t){return t in e?e[t]:t}function ch(e,t){return uh(e,t.toLowerCase())}var cw=Dr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:ch,properties:{xmlns:null,xmlnsXLink:null}});var pw=Dr({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:vt,ariaAutoComplete:null,ariaBusy:vt,ariaChecked:vt,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:Ke,ariaCurrent:null,ariaDescribedBy:Ke,ariaDetails:null,ariaDisabled:vt,ariaDropEffect:Ke,ariaErrorMessage:null,ariaExpanded:vt,ariaFlowTo:Ke,ariaGrabbed:vt,ariaHasPopup:null,ariaHidden:vt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ke,ariaLevel:G,ariaLive:null,ariaModal:vt,ariaMultiLine:vt,ariaMultiSelectable:vt,ariaOrientation:null,ariaOwns:Ke,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:vt,ariaReadOnly:vt,ariaRelevant:null,ariaRequired:vt,ariaRoleDescription:Ke,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:vt,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null}});var PI=Dr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:ch,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$i,acceptCharset:Ke,accessKey:Ke,action:null,allow:null,allowFullScreen:ye,allowPaymentRequest:ye,allowUserMedia:ye,alt:null,as:null,async:ye,autoCapitalize:null,autoComplete:Ke,autoFocus:ye,autoPlay:ye,blocking:Ke,capture:null,charSet:null,checked:ye,cite:null,className:Ke,cols:G,colSpan:null,content:null,contentEditable:vt,controls:ye,controlsList:Ke,coords:G|$i,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ye,defer:ye,dir:null,dirName:null,disabled:ye,download:aw,draggable:vt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ye,formTarget:null,headers:Ke,height:G,hidden:ye,high:G,href:null,hrefLang:null,htmlFor:Ke,httpEquiv:Ke,id:null,imageSizes:null,imageSrcSet:null,inert:ye,inputMode:null,integrity:null,is:null,isMap:ye,itemId:null,itemProp:Ke,itemRef:Ke,itemScope:ye,itemType:Ke,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ye,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:ye,muted:ye,name:null,nonce:null,noModule:ye,noValidate:ye,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ye,optimum:G,pattern:null,ping:Ke,placeholder:null,playsInline:ye,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ye,referrerPolicy:null,rel:Ke,required:ye,reversed:ye,rows:G,rowSpan:G,sandbox:Ke,scope:null,scoped:ye,seamless:ye,selected:ye,shadowRootClonable:ye,shadowRootDelegatesFocus:ye,shadowRootMode:null,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:vt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:ye,useMap:null,value:vt,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ke,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ye,declare:ye,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:ye,noHref:ye,noShade:ye,noWrap:ye,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:vt,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ye,disableRemotePlayback:ye,prefix:null,property:null,results:G,security:null,unselectable:null}});var MI=Dr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:uh,properties:{about:Yn,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:Ke,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:ye,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$i,g2:$i,glyphName:$i,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:Yn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ke,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Yn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Yn,rev:Yn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Yn,requiredFeatures:Yn,requiredFonts:Yn,requiredFormats:Yn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:Yn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Yn,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Yn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}});var hj=/^data[-\w.:]+$/i,DI=/-[a-z]/g,gj=/[A-Z]/g;function dw(e,t){let n=Fc(t),r=t,o=bn;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&hj.test(t)){if(t.charAt(4)==="-"){let i=t.slice(5).replace(DI,vj);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{let i=t.slice(4);if(!DI.test(i)){let l=i.replace(gj,bj);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}o=Ha}return new o(r,t)}function bj(e){return"-"+e.toLowerCase()}function vj(e){return e.charAt(1).toUpperCase()}var fw={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var NI=iw([uw,sw,cw,pw,PI],"html"),ph=iw([uw,sw,cw,pw,MI],"svg");function zI(e){return e.join(" ").trim()}var mw=K(jI(),1),VI=mw.default.default||mw.default;var dh=KI("end"),hs=KI("start");function KI(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function hw(e){let t=hs(e),n=dh(e);if(t&&n)return{start:t,end:n}}function Yi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?GI(e.position):"start"in e||"end"in e?GI(e):"line"in e||"column"in e?gw(e):""}function gw(e){return QI(e&&e.line)+":"+QI(e&&e.column)}function GI(e){return gw(e&&e.start)+"-"+gw(e&&e.end)}function QI(e){return e&&typeof e=="number"?e:1}var Ct=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",i={},l=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?o=t:!i.cause&&t&&(l=!0,o=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){let c=r.indexOf(":");c===-1?i.ruleId=r:(i.source=r.slice(0,c),i.ruleId=r.slice(c+1))}if(!i.place&&i.ancestors&&i.ancestors){let c=i.ancestors[i.ancestors.length-1];c&&(i.place=c.position)}let u=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=u?u.line:void 0,this.name=Yi(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=l&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}};Ct.prototype.file="";Ct.prototype.name="";Ct.prototype.reason="";Ct.prototype.message="";Ct.prototype.stack="";Ct.prototype.column=void 0;Ct.prototype.line=void 0;Ct.prototype.ancestors=void 0;Ct.prototype.cause=void 0;Ct.prototype.fatal=void 0;Ct.prototype.place=void 0;Ct.prototype.ruleId=void 0;Ct.prototype.source=void 0;var bw={}.hasOwnProperty,Lj=new Map,Pj=/[A-Z]/g,Mj=/-([a-z])/g,Dj=new Set(["table","tbody","thead","tfoot","tr"]),Nj=new Set(["td","th"]),$I="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function vw(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=jj(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=qj(n,t.jsx,t.jsxs)}let o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?ph:NI,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=YI(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function YI(e,t,n){if(t.type==="element")return zj(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Fj(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Uj(e,t,n);if(t.type==="mdxjsEsm")return Bj(e,t);if(t.type==="root")return Hj(e,t,n);if(t.type==="text")return Wj(e,t)}function zj(e,t,n){let r=e.schema,o=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=ph,e.schema=o),e.ancestors.push(t);let i=JI(e,t.tagName,!1),l=Vj(e,t),u=xw(e,t);return Dj.has(t.tagName)&&(u=u.filter(function(c){return typeof c=="string"?!ow(c):!0})),XI(e,l,i,t),yw(l,u),e.ancestors.pop(),e.schema=r,e.create(t,i,l,n)}function Fj(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Hc(e,t.position)}function Bj(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Hc(e,t.position)}function Uj(e,t,n){let r=e.schema,o=r;t.name==="svg"&&r.space==="html"&&(o=ph,e.schema=o),e.ancestors.push(t);let i=t.name===null?e.Fragment:JI(e,t.name,!0),l=Kj(e,t),u=xw(e,t);return XI(e,l,i,t),yw(l,u),e.ancestors.pop(),e.schema=r,e.create(t,i,l,n)}function Hj(e,t,n){let r={};return yw(r,xw(e,t)),e.create(t,e.Fragment,r,n)}function Wj(e,t){return t.value}function XI(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function yw(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function qj(e,t,n){return r;function r(o,i,l,u){let p=Array.isArray(l.children)?n:t;return u?p(i,l,u):p(i,l)}}function jj(e,t){return n;function n(r,o,i,l){let u=Array.isArray(i.children),c=hs(r);return t(o,i,l,u,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Vj(e,t){let n={},r,o;for(o in t.properties)if(o!=="children"&&bw.call(t.properties,o)){let i=Gj(e,o,t.properties[o]);if(i){let[l,u]=i;e.tableCellAlignToStyle&&l==="align"&&typeof u=="string"&&Nj.has(t.tagName)?r=u:n[l]=u}}if(r){let i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Kj(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let i=r.data.estree.body[0];i.type;let l=i.expression;l.type;let u=l.properties[0];u.type,Object.assign(n,e.evaluater.evaluateExpression(u.argument))}else Hc(e,t.position);else{let o=r.name,i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let u=r.value.data.estree.body[0];u.type,i=e.evaluater.evaluateExpression(u.expression)}else Hc(e,t.position);else i=r.value===null?!0:r.value;n[o]=i}return n}function xw(e,t){let n=[],r=-1,o=e.passKeys?new Map:Lj;for(;++r<t.children.length;){let i=t.children[r],l;if(e.passKeys){let c=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(c){let p=o.get(c)||0;l=c+"-"+p,o.set(c,p+1)}}let u=YI(e,i,l);u!==void 0&&n.push(u)}return n}function Gj(e,t,n){let r=dw(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?AI(n):zI(n)),r.property==="style"){let o=typeof n=="object"?n:Qj(e,String(n));return e.stylePropertyNameCase==="css"&&(o=$j(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?fw[r.property]||r.property:r.attribute,n]}}function Qj(e,t){let n={};try{VI(t,r)}catch(o){if(!e.ignoreInvalidStyle){let i=o,l=new Ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=$I+"#cannot-parse-style-attribute",l}}return n;function r(o,i){let l=o;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(Mj,Xj)),n[l]=i}}function JI(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let o=t.split("."),i=-1,l;for(;++i<o.length;){let u=sh(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};l=l?{type:"MemberExpression",object:l,property:u,computed:!!(i&&u.type==="Literal"),optional:!1}:u}r=l}else r=sh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let o=r.value;return bw.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);Hc(e)}function Hc(e,t){let n=new Ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=$I+"#cannot-handle-mdx-estrees-without-createevaluater",n}function $j(e){let t={},n;for(n in e)bw.call(e,n)&&(t[Yj(n)]=e[n]);return t}function Yj(e){let t=e.replace(Pj,Jj);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Xj(e,t){return t.toUpperCase()}function Jj(e){return"-"+e.toLowerCase()}var Wc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var ws=K(Ve(),1);var Zj={};function qa(e,t){let n=t||Zj,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,o=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return eA(e,r,o)}function eA(e,t,n){if(eV(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ZI(e.children,t,n)}return Array.isArray(e)?ZI(e,t,n):""}function ZI(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=eA(e[o],t,n);return r.join("")}function eV(e){return!!(e&&typeof e=="object")}var tA=document.createElement("i");function gs(e){let t="&"+e+";";tA.innerHTML=t;let n=tA.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function At(e,t,n,r){let o=e.length,i=0,l;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);i<r.length;)l=r.slice(i,i+1e4),l.unshift(t,0),e.splice(...l),i+=1e4,t+=1e4}function Ln(e,t){return e.length>0?(At(e,e.length,0,t),e):t}var nA={}.hasOwnProperty;function fh(e){let t={},n=-1;for(;++n<e.length;)tV(t,e[n]);return t}function tV(e,t){let n;for(n in t){let o=(nA.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],l;if(i)for(l in i){nA.call(o,l)||(o[l]=[]);let u=i[l];nV(o[l],Array.isArray(u)?u:u?[u]:[])}}}function nV(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);At(e,0,0,r)}function mh(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function vn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var Bt=Xi(/[A-Za-z]/),yt=Xi(/[\dA-Za-z]/),rA=Xi(/[#-'*+\--9=?A-Z^-~]/);function ja(e){return e!==null&&(e<32||e===127)}var qc=Xi(/\d/),oA=Xi(/[\dA-Fa-f]/),iA=Xi(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function Re(e){return e!==null&&(e<0||e===32)}function ce(e){return e===-2||e===-1||e===32}var Va=Xi(/\p{P}|\p{S}/u),xo=Xi(/\s/);function Xi(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Nr(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let i=e.charCodeAt(n),l="";if(i===37&&yt(e.charCodeAt(n+1))&&yt(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(l=String.fromCharCode(i));else if(i>55295&&i<57344){let u=e.charCodeAt(n+1);i<56320&&u>56319&&u<57344?(l=String.fromCharCode(i,u),o=1):l="\uFFFD"}else l=String.fromCharCode(i);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+o+1,l=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function se(e,t,n,r){let o=r?r-1:Number.POSITIVE_INFINITY,i=0;return l;function l(c){return ce(c)?(e.enter(n),u(c)):t(c)}function u(c){return ce(c)&&i++<o?(e.consume(c),u):(e.exit(n),t(c))}}var aA={tokenize:rV};function rV(e){let t=e.attempt(this.parser.constructs.contentInitial,r,o),n;return t;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),se(e,t,"linePrefix")}function o(u){return e.enter("paragraph"),i(u)}function i(u){let c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(u)}function l(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return ee(u)?(e.consume(u),e.exit("chunkText"),i):(e.consume(u),l)}}var sA={tokenize:oV},lA={tokenize:iV};function oV(e){let t=this,n=[],r=0,o,i,l;return u;function u(S){if(r<n.length){let T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,c,p)(S)}return p(S)}function c(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&w();let T=t.events.length,M=T,R;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){R=t.events[M][1].end;break}y(r);let z=T;for(;z<t.events.length;)t.events[z][1].end=Object.assign({},R),z++;return At(t.events,M+1,0,t.events.slice(T)),t.events.length=z,p(S)}return u(S)}function p(S){if(r===n.length){if(!o)return g(S);if(o.currentConstruct&&o.currentConstruct.concrete)return v(S);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(lA,f,m)(S)}function f(S){return o&&w(),y(r),g(S)}function m(S){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,v(S)}function g(S){return t.containerState={},e.attempt(lA,b,v)(S)}function b(S){return r++,n.push([t.currentConstruct,t.containerState]),g(S)}function v(S){if(S===null){o&&w(),y(0),e.consume(S);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),k(S)}function k(S){if(S===null){C(e.exit("chunkFlow"),!0),y(0),e.consume(S);return}return ee(S)?(e.consume(S),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,u):(e.consume(S),k)}function C(S,T){let M=t.sliceStream(S);if(T&&M.push(null),S.previous=i,i&&(i.next=S),i=S,o.defineSkip(S.start),o.write(M),t.parser.lazy[S.start.line]){let R=o.events.length;for(;R--;)if(o.events[R][1].start.offset<l&&(!o.events[R][1].end||o.events[R][1].end.offset>l))return;let z=t.events.length,U=z,Y,P;for(;U--;)if(t.events[U][0]==="exit"&&t.events[U][1].type==="chunkFlow"){if(Y){P=t.events[U][1].end;break}Y=!0}for(y(r),R=z;R<t.events.length;)t.events[R][1].end=Object.assign({},P),R++;At(t.events,U+1,0,t.events.slice(z)),t.events.length=R}}function y(S){let T=n.length;for(;T-- >S;){let M=n[T];t.containerState=M[1],M[0].exit.call(t,e)}n.length=S}function w(){o.write([null]),i=void 0,o=void 0,t.containerState._closeFlow=void 0}}function iV(e,t,n){return se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function bs(e){if(e===null||Re(e)||xo(e))return 1;if(Va(e))return 2}function Ji(e,t,n){let r=[],o=-1;for(;++o<e.length;){let i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}var jc={name:"attention",tokenize:lV,resolveAll:aV};function aV(e,t){let n=-1,r,o,i,l,u,c,p,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let m=Object.assign({},e[r][1].end),g=Object.assign({},e[n][1].start);uA(m,-c),uA(g,c),l={type:c>1?"strongSequence":"emphasisSequence",start:m,end:Object.assign({},e[r][1].end)},u={type:c>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:g},i={type:c>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o={type:c>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},u.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},u.end),p=[],e[r][1].end.offset-e[r][1].start.offset&&(p=Ln(p,[["enter",e[r][1],t],["exit",e[r][1],t]])),p=Ln(p,[["enter",o,t],["enter",l,t],["exit",l,t],["enter",i,t]]),p=Ln(p,Ji(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),p=Ln(p,[["exit",i,t],["enter",u,t],["exit",u,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,p=Ln(p,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,At(e,r-1,n-r+3,p),n=r+p.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function lV(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=bs(r),i;return l;function l(c){return i=c,e.enter("attentionSequence"),u(c)}function u(c){if(c===i)return e.consume(c),u;let p=e.exit("attentionSequence"),f=bs(c),m=!f||f===2&&o||n.includes(c),g=!o||o===2&&f||n.includes(r);return p._open=!!(i===42?m:m&&(o||!g)),p._close=!!(i===42?g:g&&(f||!m)),t(c)}}function uA(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var ww={name:"autolink",tokenize:sV};function sV(e,t,n){let r=0;return o;function o(b){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(b),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(b){return Bt(b)?(e.consume(b),l):b===64?n(b):p(b)}function l(b){return b===43||b===45||b===46||yt(b)?(r=1,u(b)):p(b)}function u(b){return b===58?(e.consume(b),r=0,c):(b===43||b===45||b===46||yt(b))&&r++<32?(e.consume(b),u):(r=0,p(b))}function c(b){return b===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(b),e.exit("autolinkMarker"),e.exit("autolink"),t):b===null||b===32||b===60||ja(b)?n(b):(e.consume(b),c)}function p(b){return b===64?(e.consume(b),f):rA(b)?(e.consume(b),p):n(b)}function f(b){return yt(b)?m(b):n(b)}function m(b){return b===46?(e.consume(b),r=0,f):b===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(b),e.exit("autolinkMarker"),e.exit("autolink"),t):g(b)}function g(b){if((b===45||yt(b))&&r++<63){let v=b===45?g:m;return e.consume(b),v}return n(b)}}var wo={tokenize:uV,partial:!0};function uV(e,t,n){return r;function r(i){return ce(i)?se(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||ee(i)?t(i):n(i)}}var hh={name:"blockQuote",tokenize:cV,continuation:{tokenize:pV},exit:dV};function cV(e,t,n){let r=this;return o;function o(l){if(l===62){let u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),i}return n(l)}function i(l){return ce(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function pV(e,t,n){let r=this;return o;function o(l){return ce(l)?se(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):i(l)}function i(l){return e.attempt(hh,t,n)(l)}}function dV(e){e.exit("blockQuote")}var gh={name:"characterEscape",tokenize:fV};function fV(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return iA(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}var bh={name:"characterReference",tokenize:mV};function mV(e,t,n){let r=this,o=0,i,l;return u;function u(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),c}function c(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),i=31,l=yt,f(m))}function p(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,l=oA,f):(e.enter("characterReferenceValue"),i=7,l=qc,f(m))}function f(m){if(m===59&&o){let g=e.exit("characterReferenceValue");return l===yt&&!gs(r.sliceSerialize(g))?n(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(m)&&o++<i?(e.consume(m),f):n(m)}}var cA={tokenize:gV,partial:!0},vh={name:"codeFenced",tokenize:hV,concrete:!0};function hV(e,t,n){let r=this,o={tokenize:M,partial:!0},i=0,l=0,u;return c;function c(R){return p(R)}function p(R){let z=r.events[r.events.length-1];return i=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,u=R,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(R)}function f(R){return R===u?(l++,e.consume(R),f):l<3?n(R):(e.exit("codeFencedFenceSequence"),ce(R)?se(e,m,"whitespace")(R):m(R))}function m(R){return R===null||ee(R)?(e.exit("codeFencedFence"),r.interrupt?t(R):e.check(cA,k,T)(R)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),g(R))}function g(R){return R===null||ee(R)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(R)):ce(R)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),se(e,b,"whitespace")(R)):R===96&&R===u?n(R):(e.consume(R),g)}function b(R){return R===null||ee(R)?m(R):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(R))}function v(R){return R===null||ee(R)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(R)):R===96&&R===u?n(R):(e.consume(R),v)}function k(R){return e.attempt(o,T,C)(R)}function C(R){return e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),y}function y(R){return i>0&&ce(R)?se(e,w,"linePrefix",i+1)(R):w(R)}function w(R){return R===null||ee(R)?e.check(cA,k,T)(R):(e.enter("codeFlowValue"),S(R))}function S(R){return R===null||ee(R)?(e.exit("codeFlowValue"),w(R)):(e.consume(R),S)}function T(R){return e.exit("codeFenced"),t(R)}function M(R,z,U){let Y=0;return P;function P(te){return R.enter("lineEnding"),R.consume(te),R.exit("lineEnding"),ae}function ae(te){return R.enter("codeFencedFence"),ce(te)?se(R,J,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(te):J(te)}function J(te){return te===u?(R.enter("codeFencedFenceSequence"),$(te)):U(te)}function $(te){return te===u?(Y++,R.consume(te),$):Y>=l?(R.exit("codeFencedFenceSequence"),ce(te)?se(R,re,"whitespace")(te):re(te)):U(te)}function re(te){return te===null||ee(te)?(R.exit("codeFencedFence"),z(te)):U(te)}}}function gV(e,t,n){let r=this;return o;function o(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i)}function i(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}var Vc={name:"codeIndented",tokenize:vV},bV={tokenize:yV,partial:!0};function vV(e,t,n){let r=this;return o;function o(p){return e.enter("codeIndented"),se(e,i,"linePrefix",5)(p)}function i(p){let f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(p):n(p)}function l(p){return p===null?c(p):ee(p)?e.attempt(bV,l,c)(p):(e.enter("codeFlowValue"),u(p))}function u(p){return p===null||ee(p)?(e.exit("codeFlowValue"),l(p)):(e.consume(p),u)}function c(p){return e.exit("codeIndented"),t(p)}}function yV(e,t,n){let r=this;return o;function o(l){return r.parser.lazy[r.now().line]?n(l):ee(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):se(e,i,"linePrefix",5)(l)}function i(l){let u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?t(l):ee(l)?o(l):n(l)}}var kw={name:"codeText",tokenize:kV,resolve:xV,previous:wV};function xV(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function wV(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function kV(e,t,n){let r=this,o=0,i,l;return u;function u(g){return e.enter("codeText"),e.enter("codeTextSequence"),c(g)}function c(g){return g===96?(e.consume(g),o++,c):(e.exit("codeTextSequence"),p(g))}function p(g){return g===null?n(g):g===32?(e.enter("space"),e.consume(g),e.exit("space"),p):g===96?(l=e.enter("codeTextSequence"),i=0,m(g)):ee(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),p):(e.enter("codeTextData"),f(g))}function f(g){return g===null||g===32||g===96||ee(g)?(e.exit("codeTextData"),p(g)):(e.consume(g),f)}function m(g){return g===96?(e.consume(g),i++,m):i===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(g)):(l.type="codeTextData",f(g))}}var yh=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let o=n||0;this.setCursor(Math.trunc(t));let i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&Kc(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Kc(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Kc(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);Kc(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Kc(this.left,n.reverse())}}};function Kc(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function xh(e){let t={},n=-1,r,o,i,l,u,c,p,f=new yh(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,i=0,i<c.length&&c[i][1].type==="lineEndingBlank"&&(i+=2),i<c.length&&c[i][1].type==="content"))for(;++i<c.length&&c[i][1].type!=="content";)c[i][1].type==="chunkText"&&(c[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,SV(f,n)),n=t[n],p=!0);else if(r[1]._container){for(i=n,o=void 0;i--&&(l=f.get(i),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(o&&(f.get(o)[1].type="lineEndingBlank"),l[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},f.get(o)[1].start),u=f.slice(o,n),u.unshift(r),f.splice(o,n-o+1,u))}}return At(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!p}function SV(e,t){let n=e.get(t)[1],r=e.get(t)[2],o=t-1,i=[],l=n._tokenizer||r.parser[n.contentType](n.start),u=l.events,c=[],p={},f,m,g=-1,b=n,v=0,k=0,C=[k];for(;b;){for(;e.get(++o)[1]!==b;);i.push(o),b._tokenizer||(f=r.sliceStream(b),b.next||f.push(null),m&&l.defineSkip(b.start),b._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),b._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),m=b,b=b.next}for(b=n;++g<u.length;)u[g][0]==="exit"&&u[g-1][0]==="enter"&&u[g][1].type===u[g-1][1].type&&u[g][1].start.line!==u[g][1].end.line&&(k=g+1,C.push(k),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(l.events=[],b?(b._tokenizer=void 0,b.previous=void 0):C.pop(),g=C.length;g--;){let y=u.slice(C[g],C[g+1]),w=i.pop();c.push([w,w+y.length-1]),e.splice(w,2,y)}for(c.reverse(),g=-1;++g<c.length;)p[v+c[g][0]]=v+c[g][1],v+=c[g][1]-c[g][0]-1;return p}var Sw={tokenize:EV,resolve:CV},_V={tokenize:RV,partial:!0};function CV(e){return xh(e),e}function EV(e,t){let n;return r;function r(u){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(u)}function o(u){return u===null?i(u):ee(u)?e.check(_V,l,i)(u):(e.consume(u),o)}function i(u){return e.exit("chunkContent"),e.exit("content"),t(u)}function l(u){return e.consume(u),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function RV(e,t,n){let r=this;return o;function o(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),se(e,i,"linePrefix")}function i(l){if(l===null||ee(l))return n(l);let u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function wh(e,t,n,r,o,i,l,u,c){let p=c||Number.POSITIVE_INFINITY,f=0;return m;function m(y){return y===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(y),e.exit(i),g):y===null||y===32||y===41||ja(y)?n(y):(e.enter(r),e.enter(l),e.enter(u),e.enter("chunkString",{contentType:"string"}),k(y))}function g(y){return y===62?(e.enter(i),e.consume(y),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(u),e.enter("chunkString",{contentType:"string"}),b(y))}function b(y){return y===62?(e.exit("chunkString"),e.exit(u),g(y)):y===null||y===60||ee(y)?n(y):(e.consume(y),y===92?v:b)}function v(y){return y===60||y===62||y===92?(e.consume(y),b):b(y)}function k(y){return!f&&(y===null||y===41||Re(y))?(e.exit("chunkString"),e.exit(u),e.exit(l),e.exit(r),t(y)):f<p&&y===40?(e.consume(y),f++,k):y===41?(e.consume(y),f--,k):y===null||y===32||y===40||ja(y)?n(y):(e.consume(y),y===92?C:k)}function C(y){return y===40||y===41||y===92?(e.consume(y),k):k(y)}}function kh(e,t,n,r,o,i){let l=this,u=0,c;return p;function p(b){return e.enter(r),e.enter(o),e.consume(b),e.exit(o),e.enter(i),f}function f(b){return u>999||b===null||b===91||b===93&&!c||b===94&&!u&&"_hiddenFootnoteSupport"in l.parser.constructs?n(b):b===93?(e.exit(i),e.enter(o),e.consume(b),e.exit(o),e.exit(r),t):ee(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),m(b))}function m(b){return b===null||b===91||b===93||ee(b)||u++>999?(e.exit("chunkString"),f(b)):(e.consume(b),c||(c=!ce(b)),b===92?g:m)}function g(b){return b===91||b===92||b===93?(e.consume(b),u++,m):m(b)}}function Sh(e,t,n,r,o,i){let l;return u;function u(g){return g===34||g===39||g===40?(e.enter(r),e.enter(o),e.consume(g),e.exit(o),l=g===40?41:g,c):n(g)}function c(g){return g===l?(e.enter(o),e.consume(g),e.exit(o),e.exit(r),t):(e.enter(i),p(g))}function p(g){return g===l?(e.exit(i),c(l)):g===null?n(g):ee(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),se(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===l||g===null||ee(g)?(e.exit("chunkString"),p(g)):(e.consume(g),g===92?m:f)}function m(g){return g===l||g===92?(e.consume(g),f):f(g)}}function Ka(e,t){let n;return r;function r(o){return ee(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):ce(o)?se(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}var _w={name:"definition",tokenize:IV},TV={tokenize:AV,partial:!0};function IV(e,t,n){let r=this,o;return i;function i(b){return e.enter("definition"),l(b)}function l(b){return kh.call(r,e,u,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function u(b){return o=vn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),b===58?(e.enter("definitionMarker"),e.consume(b),e.exit("definitionMarker"),c):n(b)}function c(b){return Re(b)?Ka(e,p)(b):p(b)}function p(b){return wh(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function f(b){return e.attempt(TV,m,m)(b)}function m(b){return ce(b)?se(e,g,"whitespace")(b):g(b)}function g(b){return b===null||ee(b)?(e.exit("definition"),r.parser.defined.push(o),t(b)):n(b)}}function AV(e,t,n){return r;function r(u){return Re(u)?Ka(e,o)(u):n(u)}function o(u){return Sh(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function i(u){return ce(u)?se(e,l,"whitespace")(u):l(u)}function l(u){return u===null||ee(u)?t(u):n(u)}}var Cw={name:"hardBreakEscape",tokenize:OV};function OV(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return ee(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}var Ew={name:"headingAtx",tokenize:PV,resolve:LV};function LV(e,t){let n=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},At(e,r,n-r+1,[["enter",o,t],["enter",i,t],["exit",i,t],["exit",o,t]])),e}function PV(e,t,n){let r=0;return o;function o(f){return e.enter("atxHeading"),i(f)}function i(f){return e.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(e.consume(f),l):f===null||Re(f)?(e.exit("atxHeadingSequence"),u(f)):n(f)}function u(f){return f===35?(e.enter("atxHeadingSequence"),c(f)):f===null||ee(f)?(e.exit("atxHeading"),t(f)):ce(f)?se(e,u,"whitespace")(f):(e.enter("atxHeadingText"),p(f))}function c(f){return f===35?(e.consume(f),c):(e.exit("atxHeadingSequence"),u(f))}function p(f){return f===null||f===35||Re(f)?(e.exit("atxHeadingText"),u(f)):(e.consume(f),p)}}var pA=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rw=["pre","script","style","textarea"];var Tw={name:"htmlFlow",tokenize:zV,resolveTo:NV,concrete:!0},MV={tokenize:BV,partial:!0},DV={tokenize:FV,partial:!0};function NV(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function zV(e,t,n){let r=this,o,i,l,u,c;return p;function p(O){return f(O)}function f(O){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(O),m}function m(O){return O===33?(e.consume(O),g):O===47?(e.consume(O),i=!0,k):O===63?(e.consume(O),o=3,r.interrupt?t:A):Bt(O)?(e.consume(O),l=String.fromCharCode(O),C):n(O)}function g(O){return O===45?(e.consume(O),o=2,b):O===91?(e.consume(O),o=5,u=0,v):Bt(O)?(e.consume(O),o=4,r.interrupt?t:A):n(O)}function b(O){return O===45?(e.consume(O),r.interrupt?t:A):n(O)}function v(O){let it="CDATA[";return O===it.charCodeAt(u++)?(e.consume(O),u===it.length?r.interrupt?t:J:v):n(O)}function k(O){return Bt(O)?(e.consume(O),l=String.fromCharCode(O),C):n(O)}function C(O){if(O===null||O===47||O===62||Re(O)){let it=O===47,Mn=l.toLowerCase();return!it&&!i&&Rw.includes(Mn)?(o=1,r.interrupt?t(O):J(O)):pA.includes(l.toLowerCase())?(o=6,it?(e.consume(O),y):r.interrupt?t(O):J(O)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(O):i?w(O):S(O))}return O===45||yt(O)?(e.consume(O),l+=String.fromCharCode(O),C):n(O)}function y(O){return O===62?(e.consume(O),r.interrupt?t:J):n(O)}function w(O){return ce(O)?(e.consume(O),w):P(O)}function S(O){return O===47?(e.consume(O),P):O===58||O===95||Bt(O)?(e.consume(O),T):ce(O)?(e.consume(O),S):P(O)}function T(O){return O===45||O===46||O===58||O===95||yt(O)?(e.consume(O),T):M(O)}function M(O){return O===61?(e.consume(O),R):ce(O)?(e.consume(O),M):S(O)}function R(O){return O===null||O===60||O===61||O===62||O===96?n(O):O===34||O===39?(e.consume(O),c=O,z):ce(O)?(e.consume(O),R):U(O)}function z(O){return O===c?(e.consume(O),c=null,Y):O===null||ee(O)?n(O):(e.consume(O),z)}function U(O){return O===null||O===34||O===39||O===47||O===60||O===61||O===62||O===96||Re(O)?M(O):(e.consume(O),U)}function Y(O){return O===47||O===62||ce(O)?S(O):n(O)}function P(O){return O===62?(e.consume(O),ae):n(O)}function ae(O){return O===null||ee(O)?J(O):ce(O)?(e.consume(O),ae):n(O)}function J(O){return O===45&&o===2?(e.consume(O),he):O===60&&o===1?(e.consume(O),Le):O===62&&o===4?(e.consume(O),Ue):O===63&&o===3?(e.consume(O),A):O===93&&o===5?(e.consume(O),Pe):ee(O)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(MV,nn,$)(O)):O===null||ee(O)?(e.exit("htmlFlowData"),$(O)):(e.consume(O),J)}function $(O){return e.check(DV,re,nn)(O)}function re(O){return e.enter("lineEnding"),e.consume(O),e.exit("lineEnding"),te}function te(O){return O===null||ee(O)?$(O):(e.enter("htmlFlowData"),J(O))}function he(O){return O===45?(e.consume(O),A):J(O)}function Le(O){return O===47?(e.consume(O),l="",De):J(O)}function De(O){if(O===62){let it=l.toLowerCase();return Rw.includes(it)?(e.consume(O),Ue):J(O)}return Bt(O)&&l.length<8?(e.consume(O),l+=String.fromCharCode(O),De):J(O)}function Pe(O){return O===93?(e.consume(O),A):J(O)}function A(O){return O===62?(e.consume(O),Ue):O===45&&o===2?(e.consume(O),A):J(O)}function Ue(O){return O===null||ee(O)?(e.exit("htmlFlowData"),nn(O)):(e.consume(O),Ue)}function nn(O){return e.exit("htmlFlow"),t(O)}}function FV(e,t,n){let r=this;return o;function o(l){return ee(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):n(l)}function i(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function BV(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(wo,t,n)}}var Iw={name:"htmlText",tokenize:UV};function UV(e,t,n){let r=this,o,i,l;return u;function u(A){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(A),c}function c(A){return A===33?(e.consume(A),p):A===47?(e.consume(A),M):A===63?(e.consume(A),S):Bt(A)?(e.consume(A),U):n(A)}function p(A){return A===45?(e.consume(A),f):A===91?(e.consume(A),i=0,v):Bt(A)?(e.consume(A),w):n(A)}function f(A){return A===45?(e.consume(A),b):n(A)}function m(A){return A===null?n(A):A===45?(e.consume(A),g):ee(A)?(l=m,Le(A)):(e.consume(A),m)}function g(A){return A===45?(e.consume(A),b):m(A)}function b(A){return A===62?he(A):A===45?g(A):m(A)}function v(A){let Ue="CDATA[";return A===Ue.charCodeAt(i++)?(e.consume(A),i===Ue.length?k:v):n(A)}function k(A){return A===null?n(A):A===93?(e.consume(A),C):ee(A)?(l=k,Le(A)):(e.consume(A),k)}function C(A){return A===93?(e.consume(A),y):k(A)}function y(A){return A===62?he(A):A===93?(e.consume(A),y):k(A)}function w(A){return A===null||A===62?he(A):ee(A)?(l=w,Le(A)):(e.consume(A),w)}function S(A){return A===null?n(A):A===63?(e.consume(A),T):ee(A)?(l=S,Le(A)):(e.consume(A),S)}function T(A){return A===62?he(A):S(A)}function M(A){return Bt(A)?(e.consume(A),R):n(A)}function R(A){return A===45||yt(A)?(e.consume(A),R):z(A)}function z(A){return ee(A)?(l=z,Le(A)):ce(A)?(e.consume(A),z):he(A)}function U(A){return A===45||yt(A)?(e.consume(A),U):A===47||A===62||Re(A)?Y(A):n(A)}function Y(A){return A===47?(e.consume(A),he):A===58||A===95||Bt(A)?(e.consume(A),P):ee(A)?(l=Y,Le(A)):ce(A)?(e.consume(A),Y):he(A)}function P(A){return A===45||A===46||A===58||A===95||yt(A)?(e.consume(A),P):ae(A)}function ae(A){return A===61?(e.consume(A),J):ee(A)?(l=ae,Le(A)):ce(A)?(e.consume(A),ae):Y(A)}function J(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(e.consume(A),o=A,$):ee(A)?(l=J,Le(A)):ce(A)?(e.consume(A),J):(e.consume(A),re)}function $(A){return A===o?(e.consume(A),o=void 0,te):A===null?n(A):ee(A)?(l=$,Le(A)):(e.consume(A),$)}function re(A){return A===null||A===34||A===39||A===60||A===61||A===96?n(A):A===47||A===62||Re(A)?Y(A):(e.consume(A),re)}function te(A){return A===47||A===62||Re(A)?Y(A):n(A)}function he(A){return A===62?(e.consume(A),e.exit("htmlTextData"),e.exit("htmlText"),t):n(A)}function Le(A){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),De}function De(A){return ce(A)?se(e,Pe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):Pe(A)}function Pe(A){return e.enter("htmlTextData"),l(A)}}var Ga={name:"labelEnd",tokenize:KV,resolveTo:VV,resolveAll:jV},HV={tokenize:GV},WV={tokenize:QV},qV={tokenize:$V};function jV(e){let t=-1;for(;++t<e.length;){let n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function VV(e,t){let n=e.length,r=0,o,i,l,u;for(;n--;)if(o=e[n][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(l=n);let c={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},p={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[l][1].end)},f={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return u=[["enter",c,t],["enter",p,t]],u=Ln(u,e.slice(i+1,i+r+3)),u=Ln(u,[["enter",f,t]]),u=Ln(u,Ji(t.parser.constructs.insideSpan.null,e.slice(i+r+4,l-3),t)),u=Ln(u,[["exit",f,t],e[l-2],e[l-1],["exit",p,t]]),u=Ln(u,e.slice(l+1)),u=Ln(u,[["exit",c,t]]),At(e,i,e.length,u),e}function KV(e,t,n){let r=this,o=r.events.length,i,l;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return u;function u(g){return i?i._inactive?m(g):(l=r.parser.defined.includes(vn(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(g),e.exit("labelMarker"),e.exit("labelEnd"),c):n(g)}function c(g){return g===40?e.attempt(HV,f,l?f:m)(g):g===91?e.attempt(WV,f,l?p:m)(g):l?f(g):m(g)}function p(g){return e.attempt(qV,f,m)(g)}function f(g){return t(g)}function m(g){return i._balanced=!0,n(g)}}function GV(e,t,n){return r;function r(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),o}function o(m){return Re(m)?Ka(e,i)(m):i(m)}function i(m){return m===41?f(m):wh(e,l,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function l(m){return Re(m)?Ka(e,c)(m):f(m)}function u(m){return n(m)}function c(m){return m===34||m===39||m===40?Sh(e,p,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):f(m)}function p(m){return Re(m)?Ka(e,f)(m):f(m)}function f(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),t):n(m)}}function QV(e,t,n){let r=this;return o;function o(u){return kh.call(r,e,i,l,"reference","referenceMarker","referenceString")(u)}function i(u){return r.parser.defined.includes(vn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(u):n(u)}function l(u){return n(u)}}function $V(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}var Aw={name:"labelStartImage",tokenize:YV,resolveAll:Ga.resolveAll};function YV(e,t,n){let r=this;return o;function o(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),i}function i(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelImage"),l):n(u)}function l(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(u):t(u)}}var Ow={name:"labelStartLink",tokenize:XV,resolveAll:Ga.resolveAll};function XV(e,t,n){let r=this;return o;function o(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),i}function i(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var Gc={name:"lineEnding",tokenize:JV};function JV(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),se(e,t,"linePrefix")}}var Qa={name:"thematicBreak",tokenize:ZV};function ZV(e,t,n){let r=0,o;return i;function i(p){return e.enter("thematicBreak"),l(p)}function l(p){return o=p,u(p)}function u(p){return p===o?(e.enter("thematicBreakSequence"),c(p)):r>=3&&(p===null||ee(p))?(e.exit("thematicBreak"),t(p)):n(p)}function c(p){return p===o?(e.consume(p),r++,c):(e.exit("thematicBreakSequence"),ce(p)?se(e,u,"whitespace")(p):u(p))}}var yn={name:"list",tokenize:nK,continuation:{tokenize:rK},exit:iK},eK={tokenize:aK,partial:!0},tK={tokenize:oK,partial:!0};function nK(e,t,n){let r=this,o=r.events[r.events.length-1],i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,l=0;return u;function u(b){let v=r.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||b===r.containerState.marker:qc(b)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),b===42||b===45?e.check(Qa,n,p)(b):p(b);if(!r.interrupt||b===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(b)}return n(b)}function c(b){return qc(b)&&++l<10?(e.consume(b),c):(!r.interrupt||l<2)&&(r.containerState.marker?b===r.containerState.marker:b===41||b===46)?(e.exit("listItemValue"),p(b)):n(b)}function p(b){return e.enter("listItemMarker"),e.consume(b),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||b,e.check(wo,r.interrupt?n:f,e.attempt(eK,g,m))}function f(b){return r.containerState.initialBlankLine=!0,i++,g(b)}function m(b){return ce(b)?(e.enter("listItemPrefixWhitespace"),e.consume(b),e.exit("listItemPrefixWhitespace"),g):n(b)}function g(b){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(b)}}function rK(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(wo,o,i);function o(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,se(e,t,"listItemIndent",r.containerState.size+1)(u)}function i(u){return r.containerState.furtherBlankLines||!ce(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(tK,t,l)(u))}function l(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,se(e,e.attempt(yn,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function oK(e,t,n){let r=this;return se(e,o,"listItemIndent",r.containerState.size+1);function o(i){let l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(i):n(i)}}function iK(e){e.exit(this.containerState.type)}function aK(e,t,n){let r=this;return se(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){let l=r.events[r.events.length-1];return!ce(i)&&l&&l[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}var _h={name:"setextUnderline",tokenize:sK,resolveTo:lK};function lK(e,t){let n=e.length,r,o,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);let l={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",l,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function sK(e,t,n){let r=this,o;return i;function i(p){let f=r.events.length,m;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){m=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||m)?(e.enter("setextHeadingLine"),o=p,l(p)):n(p)}function l(p){return e.enter("setextHeadingLineSequence"),u(p)}function u(p){return p===o?(e.consume(p),u):(e.exit("setextHeadingLineSequence"),ce(p)?se(e,c,"lineSuffix")(p):c(p))}function c(p){return p===null||ee(p)?(e.exit("setextHeadingLine"),t(p)):n(p)}}var dA={tokenize:uK};function uK(e){let t=this,n=e.attempt(wo,r,e.attempt(this.parser.constructs.flowInitial,o,se(e,e.attempt(this.parser.constructs.flow,o,e.attempt(Sw,o)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var fA={resolveAll:bA()},mA=gA("string"),hA=gA("text");function gA(e){return{tokenize:t,resolveAll:bA(e==="text"?cK:void 0)};function t(n){let r=this,o=this.parser.constructs[e],i=n.attempt(o,l,u);return l;function l(f){return p(f)?i(f):u(f)}function u(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),c}function c(f){return p(f)?(n.exit("data"),i(f)):(n.consume(f),c)}function p(f){if(f===null)return!0;let m=o[f],g=-1;if(m)for(;++g<m.length;){let b=m[g];if(!b.previous||b.previous.call(r,r.previous))return!0}return!1}}}function bA(e){return t;function t(n,r){let o=-1,i;for(;++o<=n.length;)i===void 0?n[o]&&n[o][1].type==="data"&&(i=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==i+2&&(n[i][1].end=n[o-1][1].end,n.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(n,r):n}}function cK(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],o=t.sliceStream(r),i=o.length,l=-1,u=0,c;for(;i--;){let p=o[i];if(typeof p=="string"){for(l=p.length;p.charCodeAt(l-1)===32;)u++,l--;if(l)break;l=-1}else if(p===-2)c=!0,u++;else if(p!==-1){i++;break}}if(u){let p={type:n===e.length||c||u<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-u,offset:r.end.offset-u,_index:r.start._index+i,_bufferIndex:i?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},p.start),r.start.offset===r.end.offset?Object.assign(r,p):(e.splice(n,0,["enter",p,t],["exit",p,t]),n+=2)}n++}return e}function vA(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),o={},i=[],l=[],u=[],c=!0,p={consume:T,enter:M,exit:R,attempt:Y(z),check:Y(U),interrupt:Y(U,{interrupt:!0})},f={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:k,sliceSerialize:v,now:C,defineSkip:y,write:b},m=t.tokenize.call(f,p),g;return t.resolveAll&&i.push(t),f;function b($){return l=Ln(l,$),w(),l[l.length-1]!==null?[]:(P(t,0),f.events=Ji(i,f.events,f),f.events)}function v($,re){return dK(k($),re)}function k($){return pK(l,$)}function C(){let{line:$,column:re,offset:te,_index:he,_bufferIndex:Le}=r;return{line:$,column:re,offset:te,_index:he,_bufferIndex:Le}}function y($){o[$.line]=$.column,J()}function w(){let $;for(;r._index<l.length;){let re=l[r._index];if(typeof re=="string")for($=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===$&&r._bufferIndex<re.length;)S(re.charCodeAt(r._bufferIndex));else S(re)}}function S($){c=void 0,g=$,m=m($)}function T($){ee($)?(r.line++,r.column=1,r.offset+=$===-3?2:1,J()):$!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),f.previous=$,c=!0}function M($,re){let te=re||{};return te.type=$,te.start=C(),f.events.push(["enter",te,f]),u.push(te),te}function R($){let re=u.pop();return re.end=C(),f.events.push(["exit",re,f]),re}function z($,re){P($,re.from)}function U($,re){re.restore()}function Y($,re){return te;function te(he,Le,De){let Pe,A,Ue,nn;return Array.isArray(he)?it(he):"tokenize"in he?it([he]):O(he);function O(tt){return kn;function kn(Lt){let Sn=Lt!==null&&tt[Lt],at=Lt!==null&&tt.null,Nn=[...Array.isArray(Sn)?Sn:Sn?[Sn]:[],...Array.isArray(at)?at:at?[at]:[]];return it(Nn)(Lt)}}function it(tt){return Pe=tt,A=0,tt.length===0?De:Mn(tt[A])}function Mn(tt){return kn;function kn(Lt){return nn=ae(),Ue=tt,tt.partial||(f.currentConstruct=tt),tt.name&&f.parser.constructs.disable.null.includes(tt.name)?wn(Lt):tt.tokenize.call(re?Object.assign(Object.create(f),re):f,p,Dn,wn)(Lt)}}function Dn(tt){return c=!0,$(Ue,nn),Le}function wn(tt){return c=!0,nn.restore(),++A<Pe.length?Mn(Pe[A]):De}}}function P($,re){$.resolveAll&&!i.includes($)&&i.push($),$.resolve&&At(f.events,re,f.events.length-re,$.resolve(f.events.slice(re),f)),$.resolveTo&&(f.events=$.resolveTo(f.events,f))}function ae(){let $=C(),re=f.previous,te=f.currentConstruct,he=f.events.length,Le=Array.from(u);return{restore:De,from:he};function De(){r=$,f.previous=re,f.currentConstruct=te,f.events.length=he,u=Le,J()}}function J(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function pK(e,t){let n=t.start._index,r=t.start._bufferIndex,o=t.end._index,i=t.end._bufferIndex,l;if(n===o)l=[e[n].slice(r,i)];else{if(l=e.slice(n,o),r>-1){let u=l[0];typeof u=="string"?l[0]=u.slice(r):l.shift()}i>0&&l.push(e[o].slice(0,i))}return l}function dK(e,t){let n=-1,r=[],o;for(;++n<e.length;){let i=e[n],l;if(typeof i=="string")l=i;else switch(i){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&o)continue;l=" ";break}default:l=String.fromCharCode(i)}o=i===-2,r.push(l)}return r.join("")}var Lw={};wb(Lw,{attentionMarkers:()=>xK,contentInitial:()=>mK,disable:()=>wK,document:()=>fK,flow:()=>gK,flowInitial:()=>hK,insideSpan:()=>yK,string:()=>bK,text:()=>vK});var fK={42:yn,43:yn,45:yn,48:yn,49:yn,50:yn,51:yn,52:yn,53:yn,54:yn,55:yn,56:yn,57:yn,62:hh},mK={91:_w},hK={[-2]:Vc,[-1]:Vc,32:Vc},gK={35:Ew,42:Qa,45:[_h,Qa],60:Tw,61:_h,95:Qa,96:vh,126:vh},bK={38:bh,92:gh},vK={[-5]:Gc,[-4]:Gc,[-3]:Gc,33:Aw,38:bh,42:jc,60:[ww,Iw],91:Ow,92:[Cw,gh],93:Ga,95:jc,96:kw},yK={null:[jc,fA]},xK={null:[42,95]},wK={null:[]};function Pw(e){let n=fh([Lw,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:o(aA),document:o(sA),flow:o(dA),string:o(mA),text:o(hA)};return r;function o(i){return l;function l(u){return vA(r,i,u)}}}function Mw(e){for(;!xh(e););return e}var yA=/[\0\t\n\r]/g;function Dw(){let e=1,t="",n=!0,r;return o;function o(i,l,u){let c=[],p,f,m,g,b;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(l||void 0).decode(i)),m=0,t="",n&&(i.charCodeAt(0)===65279&&m++,n=void 0);m<i.length;){if(yA.lastIndex=m,p=yA.exec(i),g=p&&p.index!==void 0?p.index:i.length,b=i.charCodeAt(g),!p){t=i.slice(m);break}if(b===10&&m===g&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),m<g&&(c.push(i.slice(m,g)),e+=g-m),b){case 0:{c.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,c.push(-2);e++<f;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}m=g+1}return u&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}var kK=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ch(e){return e.replace(kK,SK)}function SK(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let o=n.charCodeAt(1),i=o===120||o===88;return mh(n.slice(i?2:1),i?16:10)}return gs(n)||e}var wA={}.hasOwnProperty;function Qc(e,t,n){return typeof t!="string"&&(n=t,t=void 0),_K(n)(Mw(Pw(n).document().write(Dw()(e,t,!0))))}function _K(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Pt),autolinkProtocol:Y,autolinkEmail:Y,atxHeading:i(Yt),blockQuote:i(Lt),characterEscape:Y,characterReference:Y,codeFenced:i(Sn),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:i(Sn,l),codeText:i(at,l),codeTextData:Y,data:Y,codeFlowValue:Y,definition:i(Nn),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:i(ai),hardBreakEscape:i(zr),hardBreakTrailing:i(zr),htmlFlow:i(Co,l),htmlFlowData:Y,htmlText:i(Co,l),htmlTextData:Y,image:i(dr),label:l,link:i(Pt),listItem:i(Fr),listItemValue:g,listOrdered:i(zn,m),listUnordered:i(zn),paragraph:i(li),reference:O,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:i(Yt),strong:i(fr),thematicBreak:i(mr)},exit:{atxHeading:c(),atxHeadingSequence:M,autolink:c(),autolinkEmail:kn,autolinkProtocol:tt,blockQuote:c(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Mn,characterReferenceMarkerNumeric:Mn,characterReferenceValue:Dn,characterReference:wn,codeFenced:c(C),codeFencedFence:k,codeFencedFenceInfo:b,codeFencedFenceMeta:v,codeFlowValue:P,codeIndented:c(y),codeText:c(te),codeTextData:P,data:P,definition:c(),definitionDestinationString:T,definitionLabelString:w,definitionTitleString:S,emphasis:c(),hardBreakEscape:c(J),hardBreakTrailing:c(J),htmlFlow:c($),htmlFlowData:P,htmlText:c(re),htmlTextData:P,image:c(Le),label:Pe,labelText:De,lineEnding:ae,link:c(he),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:it,resourceDestinationString:A,resourceTitleString:Ue,resource:nn,setextHeading:c(U),setextHeadingLineSequence:z,setextHeadingText:R,strong:c(),thematicBreak:c()}};kA(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(H){let X={type:"root",children:[]},ue={stack:[X],tokenStack:[],config:t,enter:u,exit:p,buffer:l,resume:f,data:n},xe=[],Ae=-1;for(;++Ae<H.length;)if(H[Ae][1].type==="listOrdered"||H[Ae][1].type==="listUnordered")if(H[Ae][0]==="enter")xe.push(Ae);else{let Tt=xe.pop();Ae=o(H,Tt,Ae)}for(Ae=-1;++Ae<H.length;){let Tt=t[H[Ae][0]];wA.call(Tt,H[Ae][1].type)&&Tt[H[Ae][1].type].call(Object.assign({sliceSerialize:H[Ae][2].sliceSerialize},ue),H[Ae][1])}if(ue.tokenStack.length>0){let Tt=ue.tokenStack[ue.tokenStack.length-1];(Tt[1]||xA).call(ue,void 0,Tt[0])}for(X.position={start:Zi(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:Zi(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},Ae=-1;++Ae<t.transforms.length;)X=t.transforms[Ae](X)||X;return X}function o(H,X,ue){let xe=X-1,Ae=-1,Tt=!1,Ht,Mt,rn,Wt;for(;++xe<=ue;){let qt=H[xe];switch(qt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qt[0]==="enter"?Ae++:Ae--,Wt=void 0;break}case"lineEndingBlank":{qt[0]==="enter"&&(Ht&&!Wt&&!Ae&&!rn&&(rn=xe),Wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Wt=void 0}if(!Ae&&qt[0]==="enter"&&qt[1].type==="listItemPrefix"||Ae===-1&&qt[0]==="exit"&&(qt[1].type==="listUnordered"||qt[1].type==="listOrdered")){if(Ht){let on=xe;for(Mt=void 0;on--;){let Fn=H[on];if(Fn[1].type==="lineEnding"||Fn[1].type==="lineEndingBlank"){if(Fn[0]==="exit")continue;Mt&&(H[Mt][1].type="lineEndingBlank",Tt=!0),Fn[1].type="lineEnding",Mt=on}else if(!(Fn[1].type==="linePrefix"||Fn[1].type==="blockQuotePrefix"||Fn[1].type==="blockQuotePrefixWhitespace"||Fn[1].type==="blockQuoteMarker"||Fn[1].type==="listItemIndent"))break}rn&&(!Mt||rn<Mt)&&(Ht._spread=!0),Ht.end=Object.assign({},Mt?H[Mt][1].start:qt[1].end),H.splice(Mt||xe,0,["exit",Ht,qt[2]]),xe++,ue++}if(qt[1].type==="listItemPrefix"){let on={type:"listItem",_spread:!1,start:Object.assign({},qt[1].start),end:void 0};Ht=on,H.splice(xe,0,["enter",on,qt[2]]),xe++,ue++,rn=void 0,Wt=!0}}}return H[X][1]._spread=Tt,ue}function i(H,X){return ue;function ue(xe){u.call(this,H(xe),xe),X&&X.call(this,xe)}}function l(){this.stack.push({type:"fragment",children:[]})}function u(H,X,ue){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([X,ue]),H.position={start:Zi(X.start),end:void 0}}function c(H){return X;function X(ue){H&&H.call(this,ue),p.call(this,ue)}}function p(H,X){let ue=this.stack.pop(),xe=this.tokenStack.pop();if(xe)xe[0].type!==H.type&&(X?X.call(this,H,xe[0]):(xe[1]||xA).call(this,H,xe[0]));else throw new Error("Cannot close `"+H.type+"` ("+Yi({start:H.start,end:H.end})+"): it\u2019s not open");ue.position.end=Zi(H.end)}function f(){return qa(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function g(H){if(this.data.expectingFirstListItemValue){let X=this.stack[this.stack.length-2];X.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function b(){let H=this.resume(),X=this.stack[this.stack.length-1];X.lang=H}function v(){let H=this.resume(),X=this.stack[this.stack.length-1];X.meta=H}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){let H=this.resume(),X=this.stack[this.stack.length-1];X.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){let H=this.resume(),X=this.stack[this.stack.length-1];X.value=H.replace(/(\r?\n|\r)$/g,"")}function w(H){let X=this.resume(),ue=this.stack[this.stack.length-1];ue.label=X,ue.identifier=vn(this.sliceSerialize(H)).toLowerCase()}function S(){let H=this.resume(),X=this.stack[this.stack.length-1];X.title=H}function T(){let H=this.resume(),X=this.stack[this.stack.length-1];X.url=H}function M(H){let X=this.stack[this.stack.length-1];if(!X.depth){let ue=this.sliceSerialize(H).length;X.depth=ue}}function R(){this.data.setextHeadingSlurpLineEnding=!0}function z(H){let X=this.stack[this.stack.length-1];X.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function U(){this.data.setextHeadingSlurpLineEnding=void 0}function Y(H){let ue=this.stack[this.stack.length-1].children,xe=ue[ue.length-1];(!xe||xe.type!=="text")&&(xe=Eo(),xe.position={start:Zi(H.start),end:void 0},ue.push(xe)),this.stack.push(xe)}function P(H){let X=this.stack.pop();X.value+=this.sliceSerialize(H),X.position.end=Zi(H.end)}function ae(H){let X=this.stack[this.stack.length-1];if(this.data.atHardBreak){let ue=X.children[X.children.length-1];ue.position.end=Zi(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(X.type)&&(Y.call(this,H),P.call(this,H))}function J(){this.data.atHardBreak=!0}function $(){let H=this.resume(),X=this.stack[this.stack.length-1];X.value=H}function re(){let H=this.resume(),X=this.stack[this.stack.length-1];X.value=H}function te(){let H=this.resume(),X=this.stack[this.stack.length-1];X.value=H}function he(){let H=this.stack[this.stack.length-1];if(this.data.inReference){let X=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=X,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function Le(){let H=this.stack[this.stack.length-1];if(this.data.inReference){let X=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=X,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function De(H){let X=this.sliceSerialize(H),ue=this.stack[this.stack.length-2];ue.label=Ch(X),ue.identifier=vn(X).toLowerCase()}function Pe(){let H=this.stack[this.stack.length-1],X=this.resume(),ue=this.stack[this.stack.length-1];if(this.data.inReference=!0,ue.type==="link"){let xe=H.children;ue.children=xe}else ue.alt=X}function A(){let H=this.resume(),X=this.stack[this.stack.length-1];X.url=H}function Ue(){let H=this.resume(),X=this.stack[this.stack.length-1];X.title=H}function nn(){this.data.inReference=void 0}function O(){this.data.referenceType="collapsed"}function it(H){let X=this.resume(),ue=this.stack[this.stack.length-1];ue.label=X,ue.identifier=vn(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function Mn(H){this.data.characterReferenceType=H.type}function Dn(H){let X=this.sliceSerialize(H),ue=this.data.characterReferenceType,xe;ue?(xe=mh(X,ue==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):xe=gs(X);let Ae=this.stack[this.stack.length-1];Ae.value+=xe}function wn(H){let X=this.stack.pop();X.position.end=Zi(H.end)}function tt(H){P.call(this,H);let X=this.stack[this.stack.length-1];X.url=this.sliceSerialize(H)}function kn(H){P.call(this,H);let X=this.stack[this.stack.length-1];X.url="mailto:"+this.sliceSerialize(H)}function Lt(){return{type:"blockquote",children:[]}}function Sn(){return{type:"code",lang:null,meta:null,value:""}}function at(){return{type:"inlineCode",value:""}}function Nn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ai(){return{type:"emphasis",children:[]}}function Yt(){return{type:"heading",depth:0,children:[]}}function zr(){return{type:"break"}}function Co(){return{type:"html",value:""}}function dr(){return{type:"image",title:null,url:"",alt:null}}function Pt(){return{type:"link",title:null,url:"",children:[]}}function zn(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function Fr(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function li(){return{type:"paragraph",children:[]}}function fr(){return{type:"strong",children:[]}}function Eo(){return{type:"text",value:""}}function mr(){return{type:"thematicBreak"}}}function Zi(e){return{line:e.line,column:e.column,offset:e.offset}}function kA(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?kA(e,r):CK(e,r)}}function CK(e,t){let n;for(n in t)if(wA.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function xA(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Yi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Yi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Yi({start:t.start,end:t.end})+") is still open")}function Eh(e){let t=this;t.parser=n;function n(r){return Qc(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function SA(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function _A(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function CA(e,t){let n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function EA(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function RA(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function TA(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Nr(r.toLowerCase()),i=e.footnoteOrder.indexOf(r),l,u=e.footnoteCounts.get(r);u===void 0?(u=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=i+1,u+=1,e.footnoteCounts.set(r,u);let c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(u>1?"-"+u:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);let p={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,p),e.applyData(t,p)}function IA(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AA(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Rh(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});let l=o[o.length-1];return l&&l.type==="text"?l.value+=r:o.push({type:"text",value:r}),o}function OA(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Rh(e,t);let o={src:Nr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)}function LA(e,t){let n={src:Nr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function PA(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function MA(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Rh(e,t);let o={href:Nr(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function DA(e,t){let n={href:Nr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function NA(e,t,n){let r=e.all(t),o=n?EK(n):zA(t),i={},l=[];if(typeof t.checked=="boolean"){let f=r[0],m;f&&f.type==="element"&&f.tagName==="p"?m=f:(m={type:"element",tagName:"p",properties:{},children:[]},r.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let u=-1;for(;++u<r.length;){let f=r[u];(o||u!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!o?l.push(...f.children):l.push(f)}let c=r[r.length-1];c&&(o||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});let p={type:"element",tagName:"li",properties:i,children:l};return e.patch(t,p),e.applyData(t,p)}function EK(e){let t=!1;if(e.type==="list"){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=zA(n[r])}return t}function zA(e){let t=e.spread;return t??e.children.length>1}function FA(e,t){let n={},r=e.all(t),o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){let l=r[o];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function BA(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function UA(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function HA(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function WA(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),o.push(l)}if(n.length>0){let l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},u=hs(t.children[1]),c=dh(t.children[t.children.length-1]);u&&c&&(l.position={start:u,end:c}),o.push(l)}let i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)}function qA(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,u=l?l.length:t.children.length,c=-1,p=[];for(;++c<u;){let m=t.children[c],g={},b=l?l[c]:void 0;b&&(g.align=b);let v={type:"element",tagName:i,properties:g,children:[]};m&&(v.children=e.all(m),e.patch(m,v),v=e.applyData(m,v)),p.push(v)}let f={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(t,f),e.applyData(t,f)}function jA(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function KA(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,i=[];for(;r;)i.push(VA(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(VA(t.slice(o),o>0,!1)),i.join("")}function VA(e,t,n){let r=0,o=e.length;if(t){let i=e.codePointAt(r);for(;i===9||i===32;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(o-1);for(;i===9||i===32;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function GA(e,t){let n={type:"text",value:KA(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function QA(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var $A={blockquote:SA,break:_A,code:CA,delete:EA,emphasis:RA,footnoteReference:TA,heading:IA,html:AA,imageReference:OA,image:LA,inlineCode:PA,linkReference:MA,link:DA,listItem:NA,list:FA,paragraph:BA,root:UA,strong:HA,table:WA,tableCell:jA,tableRow:qA,text:GA,thematicBreak:QA,toml:Th,yaml:Th,definition:Th,footnoteDefinition:Th};function Th(){}var YA=typeof self=="object"?self:globalThis,RK=(e,t)=>{let n=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);let[i,l]=t[o];switch(i){case 0:case-1:return n(l,o);case 1:{let u=n([],o);for(let c of l)u.push(r(c));return u}case 2:{let u=n({},o);for(let[c,p]of l)u[r(c)]=r(p);return u}case 3:return n(new Date(l),o);case 4:{let{source:u,flags:c}=l;return n(new RegExp(u,c),o)}case 5:{let u=n(new Map,o);for(let[c,p]of l)u.set(r(c),r(p));return u}case 6:{let u=n(new Set,o);for(let c of l)u.add(r(c));return u}case 7:{let{name:u,message:c}=l;return n(new YA[u](c),o)}case 8:return n(BigInt(l),o);case"BigInt":return n(Object(BigInt(l)),o)}return n(new YA[i](l),o)};return r},Bw=e=>RK(new Map,e)(0);var vs="",{toString:TK}={},{keys:IK}=Object,Jc=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let n=TK.call(e).slice(8,-1);switch(n){case"Array":return[1,vs];case"Object":return[2,vs];case"Date":return[3,vs];case"RegExp":return[4,vs];case"Map":return[5,vs];case"Set":return[6,vs]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},Ph=([e,t])=>e===0&&(t==="function"||t==="symbol"),AK=(e,t,n,r)=>{let o=(l,u)=>{let c=r.push(l)-1;return n.set(u,c),c},i=l=>{if(n.has(l))return n.get(l);let[u,c]=Jc(l);switch(u){case 0:{let f=l;switch(c){case"bigint":u=8,f=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);f=null;break;case"undefined":return o([-1],l)}return o([u,f],l)}case 1:{if(c)return o([c,[...l]],l);let f=[],m=o([u,f],l);for(let g of l)f.push(i(g));return m}case 2:{if(c)switch(c){case"BigInt":return o([c,l.toString()],l);case"Boolean":case"Number":case"String":return o([c,l.valueOf()],l)}if(t&&"toJSON"in l)return i(l.toJSON());let f=[],m=o([u,f],l);for(let g of IK(l))(e||!Ph(Jc(l[g])))&&f.push([i(g),i(l[g])]);return m}case 3:return o([u,l.toISOString()],l);case 4:{let{source:f,flags:m}=l;return o([u,{source:f,flags:m}],l)}case 5:{let f=[],m=o([u,f],l);for(let[g,b]of l)(e||!(Ph(Jc(g))||Ph(Jc(b))))&&f.push([i(g),i(b)]);return m}case 6:{let f=[],m=o([u,f],l);for(let g of l)(e||!Ph(Jc(g)))&&f.push(i(g));return m}}let{message:p}=l;return o([u,{name:c,message:p}],l)};return i},Uw=(e,{json:t,lossy:n}={})=>{let r=[];return AK(!(t||n),!!t,new Map,r)(e),r};var ys=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Bw(Uw(e,t)):structuredClone(e):(e,t)=>Bw(Uw(e,t));function OK(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function LK(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function XA(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||OK,r=e.options.footnoteBackLabel||LK,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},u=[],c=-1;for(;++c<e.footnoteOrder.length;){let p=e.footnoteById.get(e.footnoteOrder[c]);if(!p)continue;let f=e.all(p),m=String(p.identifier).toUpperCase(),g=Nr(m.toLowerCase()),b=0,v=[],k=e.footnoteCounts.get(m);for(;k!==void 0&&++b<=k;){v.length>0&&v.push({type:"text",value:" "});let w=typeof n=="string"?n:n(c,b);typeof w=="string"&&(w={type:"text",value:w}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+g+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,b),className:["data-footnote-backref"]},children:Array.isArray(w)?w:[w]})}let C=f[f.length-1];if(C&&C.type==="element"&&C.tagName==="p"){let w=C.children[C.children.length-1];w&&w.type==="text"?w.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...v)}else f.push(...v);let y={type:"element",tagName:"li",properties:{id:t+"fn-"+g},children:e.wrap(f,!0)};e.patch(p,y),u.push(y)}if(u.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...ys(l),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(u,!0)},{type:"text",value:`
`}]}}var ea=function(e){if(e==null)return NK;if(typeof e=="function")return Mh(e);if(typeof e=="object")return Array.isArray(e)?PK(e):MK(e);if(typeof e=="string")return DK(e);throw new Error("Expected function, string, or object as test")};function PK(e){let t=[],n=-1;for(;++n<e.length;)t[n]=ea(e[n]);return Mh(r);function r(...o){let i=-1;for(;++i<t.length;)if(t[i].apply(this,o))return!0;return!1}}function MK(e){let t=e;return Mh(n);function n(r){let o=r,i;for(i in e)if(o[i]!==t[i])return!1;return!0}}function DK(e){return Mh(t);function t(n){return n&&n.type===e}}function Mh(e){return t;function t(n,r,o){return!!(zK(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function NK(){return!0}function zK(e){return e!==null&&typeof e=="object"&&"type"in e}var JA=[],Dh=!0,$a=!1,Nh="skip";function Zc(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;let i=ea(o),l=r?-1:1;u(e,void 0,[])();function u(c,p,f){let m=c&&typeof c=="object"?c:{};if(typeof m.type=="string"){let b=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(g,"name",{value:"node ("+(c.type+(b?"<"+b+">":""))+")"})}return g;function g(){let b=JA,v,k,C;if((!t||i(c,p,f[f.length-1]||void 0))&&(b=FK(n(c,f)),b[0]===$a))return b;if("children"in c&&c.children){let y=c;if(y.children&&b[0]!==Nh)for(k=(r?y.children.length:-1)+l,C=f.concat(y);k>-1&&k<y.children.length;){let w=y.children[k];if(v=u(w,k,C)(),v[0]===$a)return v;k=typeof v[1]=="number"?v[1]:k+l}}return b}}}function FK(e){return Array.isArray(e)?e:typeof e=="number"?[Dh,e]:e==null?JA:[e]}function ri(e,t,n,r){let o,i,l;typeof t=="function"&&typeof n!="function"?(i=void 0,l=t,o=n):(i=t,l=n,o=r),Zc(e,i,u,o);function u(c,p){let f=p[p.length-1],m=f?f.children.indexOf(c):void 0;return l(c,m,f)}}var Hw={}.hasOwnProperty,BK={};function eO(e,t){let n=t||BK,r=new Map,o=new Map,i=new Map,l={...$A,...n.handlers},u={all:p,applyData:HK,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:l,one:c,options:n,patch:UK,wrap:qK};return ri(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){let m=f.type==="definition"?r:o,g=String(f.identifier).toUpperCase();m.has(g)||m.set(g,f)}}),u;function c(f,m){let g=f.type,b=u.handlers[g];if(Hw.call(u.handlers,g)&&b)return b(u,f,m);if(u.options.passThrough&&u.options.passThrough.includes(g)){if("children"in f){let{children:k,...C}=f,y=ys(C);return y.children=u.all(f),y}return ys(f)}return(u.options.unknownHandler||WK)(u,f,m)}function p(f){let m=[];if("children"in f){let g=f.children,b=-1;for(;++b<g.length;){let v=u.one(g[b],f);if(v){if(b&&g[b-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=ZA(v.value)),!Array.isArray(v)&&v.type==="element")){let k=v.children[0];k&&k.type==="text"&&(k.value=ZA(k.value))}Array.isArray(v)?m.push(...v):m.push(v)}}}return m}}function UK(e,t){e.position&&(t.position=hw(e))}function HK(e,t){let n=t;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{let l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&i&&Object.assign(n.properties,ys(i)),"children"in n&&n.children&&o!==null&&o!==void 0&&(n.children=o)}return n}function WK(e,t){let n=t.data||{},r="value"in t&&!(Hw.call(n,"hProperties")||Hw.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function qK(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ZA(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function zh(e,t){let n=eO(e,t),r=n.one(e,void 0),o=XA(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&("children"in i,i.children.push({type:"text",value:`
`},o)),i}function Fh(e,t){return e&&"run"in e?async function(n,r){let o=zh(n,{file:r,...t});await e.run(o,r)}:function(n,r){return zh(n,{file:r,...t||e})}}function Ww(e){if(e)throw e}var Hh=K(uO(),1);function ep(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function qw(){let e=[],t={run:n,use:r};return t;function n(...o){let i=-1,l=o.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);u(null,...o);function u(c,...p){let f=e[++i],m=-1;if(c){l(c);return}for(;++m<o.length;)(p[m]===null||p[m]===void 0)&&(p[m]=o[m]);o=p,f?cO(f,u)(...p):l(null,...p)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function cO(e,t){let n;return r;function r(...l){let u=e.length>l.length,c;u&&l.push(o);try{c=e.apply(this,l)}catch(p){let f=p;if(u&&n)throw f;return o(f)}u||(c&&c.then&&typeof c.then=="function"?c.then(i,o):c instanceof Error?o(c):i(c))}function o(l,...u){n||(n=!0,t(l,...u))}function i(l){o(null,l)}}var no={basename:jK,dirname:VK,extname:KK,join:GK,sep:"/"};function jK(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');tp(e);let n=0,r=-1,o=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,u=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){n=o+1;break}}else l<0&&(i=!0,l=o+1),u>-1&&(e.codePointAt(o)===t.codePointAt(u--)?u<0&&(r=o):(u=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function VK(e){if(tp(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function KK(e){tp(e);let t=e.length,n=-1,r=0,o=-1,i=0,l;for(;t--;){let u=e.codePointAt(t);if(u===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),u===46?o<0?o=t:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||n<0||i===0||i===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function GK(...e){let t=-1,n;for(;++t<e.length;)tp(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":QK(n)}function QK(e){tp(e);let t=e.codePointAt(0)===47,n=$K(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function $K(e,t){let n="",r=0,o=-1,i=0,l=-1,u,c;for(;++l<=e.length;){if(l<e.length)u=e.codePointAt(l);else{if(u===47)break;u=47}if(u===47){if(!(o===l-1||i===1))if(o!==l-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),o=l,i=0;continue}}else if(n.length>0){n="",r=0,o=l,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,l):n=e.slice(o+1,l),r=l-o-1;o=l,i=0}else u===46&&i>-1?i++:i=-1}return n}function tp(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var pO={cwd:YK};function YK(){return"/"}function xs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function dO(e){if(typeof e=="string")e=new URL(e);else if(!xs(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return XK(e)}function XK(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}var jw=["history","path","basename","stem","extname","dirname"],Ya=class{constructor(t){let n;t?xs(t)?n={path:t}:typeof t=="string"||JK(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":pO.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<jw.length;){let i=jw[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let o;for(o in n)jw.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?no.basename(this.path):void 0}set basename(t){Kw(t,"basename"),Vw(t,"basename"),this.path=no.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?no.dirname(this.path):void 0}set dirname(t){fO(this.basename,"dirname"),this.path=no.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?no.extname(this.path):void 0}set extname(t){if(Vw(t,"extname"),fO(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=no.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){xs(t)&&(t=dO(t)),Kw(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?no.basename(this.path,this.extname):void 0}set stem(t){Kw(t,"stem"),Vw(t,"stem"),this.path=no.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){let o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){let o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){let o=new Ct(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function Vw(e,t){if(e&&e.includes(no.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+no.sep+"`")}function Kw(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function fO(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function JK(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var mO=function(e){let r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i};var ZK={}.hasOwnProperty,Yw=class e extends mO{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=qw()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r)}return t.data((0,Hh.default)(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?($w("data",this.frozen),this.namespace[t]=n,this):ZK.call(this.namespace,t)&&this.namespace[t]||void 0:t?($w("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Uh(t),r=this.parser||this.Parser;return Gw("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),Gw("process",this.parser||this.Parser),Qw("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(i,l){let u=Uh(t),c=r.parse(u);r.run(c,u,function(f,m,g){if(f||!m||!g)return p(f);let b=m,v=r.stringify(b,g);tG(v)?g.value=v:g.result=v,p(f,g)});function p(f,m){f||!m?l(f):i?i(m):n(void 0,m)}}}processSync(t){let n=!1,r;return this.freeze(),Gw("processSync",this.parser||this.Parser),Qw("processSync",this.compiler||this.Compiler),this.process(t,o),gO("processSync","process",n),r;function o(i,l){n=!0,Ww(i),r=l}}run(t,n,r){hO(t),this.freeze();let o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(l,u){let c=Uh(n);o.run(t,c,p);function p(f,m,g){let b=m||t;f?u(f):l?l(b):r(void 0,b,g)}}}runSync(t,n){let r=!1,o;return this.run(t,n,i),gO("runSync","run",r),o;function i(l,u){Ww(l),o=u,r=!0}}stringify(t,n){this.freeze();let r=Uh(n),o=this.compiler||this.Compiler;return Qw("stringify",o),hO(t),o(t,r)}use(t,...n){let r=this.attachers,o=this.namespace;if($w("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?u(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(p){if(typeof p=="function")c(p,[]);else if(typeof p=="object")if(Array.isArray(p)){let[f,...m]=p;c(f,m)}else l(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function l(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(p.plugins),p.settings&&(o.settings=(0,Hh.default)(!0,o.settings,p.settings))}function u(p){let f=-1;if(p!=null)if(Array.isArray(p))for(;++f<p.length;){let m=p[f];i(m)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function c(p,f){let m=-1,g=-1;for(;++m<r.length;)if(r[m][0]===p){g=m;break}if(g===-1)r.push([p,...f]);else if(f.length>0){let[b,...v]=f,k=r[g][1];ep(k)&&ep(b)&&(b=(0,Hh.default)(!0,k,b)),r[g]=[p,b,...v]}}}},Xw=new Yw().freeze();function Gw(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Qw(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function $w(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hO(e){if(!ep(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function gO(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Uh(e){return eG(e)?e:new Ya(e)}function eG(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function tG(e){return typeof e=="string"||nG(e)}function nG(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var rG="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bO=[],vO={allowDangerousHtml:!0},oG=/^(https?|ircs?|mailto|xmpp)$/i,iG=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Jw(e){let t=e.allowedElements,n=e.allowElement,r=e.children||"",o=e.className,i=e.components,l=e.disallowedElements,u=e.rehypePlugins||bO,c=e.remarkPlugins||bO,p=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...vO}:vO,f=e.skipHtml,m=e.unwrapDisallowed,g=e.urlTransform||yO,b=Xw().use(Eh).use(c).use(Fh,p).use(u),v=new Ya;typeof r=="string"?v.value=r:(""+r,void 0),t&&l&&void 0;for(let w of iG)Object.hasOwn(e,w.from)&&(""+w.from+(w.to?"use `"+w.to+"` instead":"remove it")+rG+w.id,void 0);let k=b.parse(v),C=b.runSync(k,v);return o&&(C={type:"element",tagName:"div",properties:{className:o},children:C.type==="root"?C.children:[C]}),ri(C,y),vw(C,{Fragment:ws.Fragment,components:i,ignoreInvalidStyle:!0,jsx:ws.jsx,jsxs:ws.jsxs,passKeys:!0,passNode:!0});function y(w,S,T){if(w.type==="raw"&&T&&typeof S=="number")return f?T.children.splice(S,1):T.children[S]={type:"text",value:w.value},S;if(w.type==="element"){let M;for(M in Wc)if(Object.hasOwn(Wc,M)&&Object.hasOwn(w.properties,M)){let R=w.properties[M],z=Wc[M];(z===null||z.includes(w.tagName))&&(w.properties[M]=g(String(R||""),M,w))}}if(w.type==="element"){let M=t?!t.includes(w.tagName):l?l.includes(w.tagName):!1;if(!M&&n&&typeof S=="number"&&(M=!n(w,S,T)),M&&T&&typeof S=="number")return m&&w.children?T.children.splice(S,1,...w.children):T.children.splice(S,1),S}}}function yO(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t<0||o>-1&&t>o||n>-1&&t>n||r>-1&&t>r||oG.test(e.slice(0,t))?e:""}function Zw(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function e1(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function t1(e,t,n){let o=ea((n||{}).ignore||[]),i=aG(t),l=-1;for(;++l<i.length;)Zc(e,"text",u);function u(p,f){let m=-1,g;for(;++m<f.length;){let b=f[m],v=g?g.children:void 0;if(o(b,v?v.indexOf(b):void 0,g))return;g=b}if(g)return c(p,f)}function c(p,f){let m=f[f.length-1],g=i[l][0],b=i[l][1],v=0,C=m.children.indexOf(p),y=!1,w=[];g.lastIndex=0;let S=g.exec(p.value);for(;S;){let T=S.index,M={index:S.index,input:S.input,stack:[...f,p]},R=b(...S,M);if(typeof R=="string"&&(R=R.length>0?{type:"text",value:R}:void 0),R===!1?g.lastIndex=T+1:(v!==T&&w.push({type:"text",value:p.value.slice(v,T)}),Array.isArray(R)?w.push(...R):R&&w.push(R),v=T+S[0].length,y=!0),!g.global)break;S=g.exec(p.value)}return y?(v<p.value.length&&w.push({type:"text",value:p.value.slice(v)}),m.children.splice(C,1,...w)):w=[p],C+w.length}}function aG(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let o=n[r];t.push([lG(o[0]),sG(o[1])])}return t}function lG(e){return typeof e=="string"?new RegExp(e1(e),"g"):e}function sG(e){return typeof e=="function"?e:function(){return e}}var n1="phrasing",r1=["autolink","link","image","label"];function i1(){return{transforms:[mG],enter:{literalAutolink:uG,literalAutolinkEmail:o1,literalAutolinkHttp:o1,literalAutolinkWww:o1},exit:{literalAutolink:fG,literalAutolinkEmail:dG,literalAutolinkHttp:cG,literalAutolinkWww:pG}}}function a1(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:n1,notInConstruct:r1},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:n1,notInConstruct:r1},{character:":",before:"[ps]",after:"\\/",inConstruct:n1,notInConstruct:r1}]}}function uG(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function o1(e){this.config.enter.autolinkProtocol.call(this,e)}function cG(e){this.config.exit.autolinkProtocol.call(this,e)}function pG(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function dG(e){this.config.exit.autolinkEmail.call(this,e)}function fG(e){this.exit(e)}function mG(e){t1(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,hG],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,gG]],{ignore:["link","linkReference"]})}function hG(e,t,n,r,o){let i="";if(!xO(o)||(/^w/i.test(t)&&(n=t+n,t="",i="http://"),!bG(n)))return!1;let l=vG(n+r);if(!l[0])return!1;let u={type:"link",title:null,url:i+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[u,{type:"text",value:l[1]}]:u}function gG(e,t,n,r){return!xO(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function bG(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function vG(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),o=Zw(e,"("),i=Zw(e,")");for(;r!==-1&&o>i;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),i++;return[e,n]}function xO(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||xo(n)||Va(n))&&(!t||n!==47)}wO.peek=RG;function l1(){return{enter:{gfmFootnoteDefinition:yG,gfmFootnoteDefinitionLabelString:xG,gfmFootnoteCall:SG,gfmFootnoteCallString:_G},exit:{gfmFootnoteDefinition:kG,gfmFootnoteDefinitionLabelString:wG,gfmFootnoteCall:EG,gfmFootnoteCallString:CG}}}function s1(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:TG,footnoteReference:wO}}}function yG(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function xG(){this.buffer()}function wG(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=vn(this.sliceSerialize(e)).toLowerCase()}function kG(e){this.exit(e)}function SG(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function _G(){this.buffer()}function CG(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=vn(this.sliceSerialize(e)).toLowerCase()}function EG(e){this.exit(e)}function wO(e,t,n,r){let o=n.createTracker(r),i=o.move("[^"),l=n.enter("footnoteReference"),u=n.enter("reference");return i+=o.move(n.safe(n.associationId(e),{...o.current(),before:i,after:"]"})),u(),l(),i+=o.move("]"),i}function RG(){return"["}function TG(e,t,n,r){let o=n.createTracker(r),i=o.move("[^"),l=n.enter("footnoteDefinition"),u=n.enter("label");return i+=o.move(n.safe(n.associationId(e),{...o.current(),before:i,after:"]"})),u(),i+=o.move("]:"+(e.children&&e.children.length>0?" ":"")),o.shift(4),i+=o.move(n.indentLines(n.containerFlow(e,o.current()),IG)),l(),i}function IG(e,t,n){return t===0?e:(n?"":"    ")+e}var AG=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];kO.peek=PG;function u1(){return{canContainEols:["delete"],enter:{strikethrough:OG},exit:{strikethrough:LG}}}function c1(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:AG}],handlers:{delete:kO}}}function OG(e){this.enter({type:"delete",children:[]},e)}function LG(e){this.exit(e)}function kO(e,t,n,r){let o=n.createTracker(r),i=n.enter("strikethrough"),l=o.move("~~");return l+=n.containerPhrasing(e,{...o.current(),before:l,after:"~"}),l+=o.move("~~"),i(),l}function PG(){return"~"}function _O(e,t={}){let n=(t.align||[]).concat(),r=t.stringLength||DG,o=[],i=[],l=[],u=[],c=0,p=-1;for(;++p<e.length;){let v=[],k=[],C=-1;for(e[p].length>c&&(c=e[p].length);++C<e[p].length;){let y=MG(e[p][C]);if(t.alignDelimiters!==!1){let w=r(y);k[C]=w,(u[C]===void 0||w>u[C])&&(u[C]=w)}v.push(y)}i[p]=v,l[p]=k}let f=-1;if(typeof n=="object"&&"length"in n)for(;++f<c;)o[f]=SO(n[f]);else{let v=SO(n);for(;++f<c;)o[f]=v}f=-1;let m=[],g=[];for(;++f<c;){let v=o[f],k="",C="";v===99?(k=":",C=":"):v===108?k=":":v===114&&(C=":");let y=t.alignDelimiters===!1?1:Math.max(1,u[f]-k.length-C.length),w=k+"-".repeat(y)+C;t.alignDelimiters!==!1&&(y=k.length+y+C.length,y>u[f]&&(u[f]=y),g[f]=y),m[f]=w}i.splice(1,0,m),l.splice(1,0,g),p=-1;let b=[];for(;++p<i.length;){let v=i[p],k=l[p];f=-1;let C=[];for(;++f<c;){let y=v[f]||"",w="",S="";if(t.alignDelimiters!==!1){let T=u[f]-(k[f]||0),M=o[f];M===114?w=" ".repeat(T):M===99?T%2?(w=" ".repeat(T/2+.5),S=" ".repeat(T/2-.5)):(w=" ".repeat(T/2),S=w):S=" ".repeat(T)}t.delimiterStart!==!1&&!f&&C.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&y==="")&&(t.delimiterStart!==!1||f)&&C.push(" "),t.alignDelimiters!==!1&&C.push(w),C.push(y),t.alignDelimiters!==!1&&C.push(S),t.padding!==!1&&C.push(" "),(t.delimiterEnd!==!1||f!==c-1)&&C.push("|")}b.push(t.delimiterEnd===!1?C.join("").replace(/ +$/,""):C.join(""))}return b.join(`
`)}function MG(e){return e==null?"":String(e)}function DG(e){return e.length}function SO(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}var CO={}.hasOwnProperty;function EO(e,t){let n=t||{};function r(o,...i){let l=r.invalid,u=r.handlers;if(o&&CO.call(o,e)){let c=String(o[e]);l=CO.call(u,c)?u[c]:r.unknown}if(l)return l.call(this,o,...i)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}var NG={}.hasOwnProperty;function p1(e,t){let n=-1,r;if(t.extensions)for(;++n<t.extensions.length;)p1(e,t.extensions[n]);for(r in t)if(NG.call(t,r))switch(r){case"extensions":break;case"unsafe":{RO(e[r],t[r]);break}case"join":{RO(e[r],t[r]);break}case"handlers":{zG(e[r],t[r]);break}default:e.options[r]=t[r]}return e}function RO(e,t){t&&e.push(...t)}function zG(e,t){t&&Object.assign(e,t)}function TO(e,t,n,r){let o=n.enter("blockquote"),i=n.createTracker(r);i.move("> "),i.shift(2);let l=n.indentLines(n.containerFlow(e,i.current()),FG);return o(),l}function FG(e,t,n){return">"+(n?"":" ")+e}function Wh(e,t){return IO(e,t.inConstruct,!0)&&!IO(e,t.notInConstruct,!1)}function IO(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function d1(e,t,n,r){let o=-1;for(;++o<n.unsafe.length;)if(n.unsafe[o].character===`
`&&Wh(n.stack,n.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function AO(e,t){let n=String(e),r=n.indexOf(t),o=r,i=0,l=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===o?++i>l&&(l=i):i=1,o=r+t.length,r=n.indexOf(t,o);return l}function np(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function OO(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function LO(e,t,n,r){let o=OO(n),i=e.value||"",l=o==="`"?"GraveAccent":"Tilde";if(np(e,n)){let m=n.enter("codeIndented"),g=n.indentLines(i,BG);return m(),g}let u=n.createTracker(r),c=o.repeat(Math.max(AO(i,o)+1,3)),p=n.enter("codeFenced"),f=u.move(c);if(e.lang){let m=n.enter(`codeFencedLang${l}`);f+=u.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...u.current()})),m()}if(e.lang&&e.meta){let m=n.enter(`codeFencedMeta${l}`);f+=u.move(" "),f+=u.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...u.current()})),m()}return f+=u.move(`
`),i&&(f+=u.move(i+`
`)),f+=u.move(c),p(),f}function BG(e,t,n){return(n?"":"    ")+e}function ks(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function PO(e,t,n,r){let o=ks(n),i=o==='"'?"Quote":"Apostrophe",l=n.enter("definition"),u=n.enter("label"),c=n.createTracker(r),p=c.move("[");return p+=c.move(n.safe(n.associationId(e),{before:p,after:"]",...c.current()})),p+=c.move("]: "),u(),!e.url||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(n.safe(e.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(u=n.enter("destinationRaw"),p+=c.move(n.safe(e.url,{before:p,after:e.title?" ":`
`,...c.current()}))),u(),e.title&&(u=n.enter(`title${i}`),p+=c.move(" "+o),p+=c.move(n.safe(e.title,{before:p,after:o,...c.current()})),p+=c.move(o),u()),l(),p}function MO(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}f1.peek=UG;function f1(e,t,n,r){let o=MO(n),i=n.enter("emphasis"),l=n.createTracker(r),u=l.move(o);return u+=l.move(n.containerPhrasing(e,{before:u,after:o,...l.current()})),u+=l.move(o),i(),u}function UG(e,t,n){return n.options.emphasis||"*"}function qh(e,t){let n=!1;return ri(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,$a}),!!((!e.depth||e.depth<3)&&qa(e)&&(t.options.setext||n))}function DO(e,t,n,r){let o=Math.max(Math.min(6,e.depth||1),1),i=n.createTracker(r);if(qh(e,n)){let f=n.enter("headingSetext"),m=n.enter("phrasing"),g=n.containerPhrasing(e,{...i.current(),before:`
`,after:`
`});return m(),f(),g+`
`+(o===1?"=":"-").repeat(g.length-(Math.max(g.lastIndexOf("\r"),g.lastIndexOf(`
`))+1))}let l="#".repeat(o),u=n.enter("headingAtx"),c=n.enter("phrasing");i.move(l+" ");let p=n.containerPhrasing(e,{before:"# ",after:`
`,...i.current()});return/^[\t ]/.test(p)&&(p="&#x"+p.charCodeAt(0).toString(16).toUpperCase()+";"+p.slice(1)),p=p?l+" "+p:l,n.options.closeAtx&&(p+=" "+l),c(),u(),p}m1.peek=HG;function m1(e){return e.value||""}function HG(){return"<"}h1.peek=WG;function h1(e,t,n,r){let o=ks(n),i=o==='"'?"Quote":"Apostrophe",l=n.enter("image"),u=n.enter("label"),c=n.createTracker(r),p=c.move("![");return p+=c.move(n.safe(e.alt,{before:p,after:"]",...c.current()})),p+=c.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(n.safe(e.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(u=n.enter("destinationRaw"),p+=c.move(n.safe(e.url,{before:p,after:e.title?" ":")",...c.current()}))),u(),e.title&&(u=n.enter(`title${i}`),p+=c.move(" "+o),p+=c.move(n.safe(e.title,{before:p,after:o,...c.current()})),p+=c.move(o),u()),p+=c.move(")"),l(),p}function WG(){return"!"}g1.peek=qG;function g1(e,t,n,r){let o=e.referenceType,i=n.enter("imageReference"),l=n.enter("label"),u=n.createTracker(r),c=u.move("!["),p=n.safe(e.alt,{before:c,after:"]",...u.current()});c+=u.move(p+"]["),l();let f=n.stack;n.stack=[],l=n.enter("reference");let m=n.safe(n.associationId(e),{before:c,after:"]",...u.current()});return l(),n.stack=f,i(),o==="full"||!p||p!==m?c+=u.move(m+"]"):o==="shortcut"?c=c.slice(0,-1):c+=u.move("]"),c}function qG(){return"!"}b1.peek=jG;function b1(e,t,n){let r=e.value||"",o="`",i=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<n.unsafe.length;){let l=n.unsafe[i],u=n.compilePattern(l),c;if(l.atBreak)for(;c=u.exec(r);){let p=c.index;r.charCodeAt(p)===10&&r.charCodeAt(p-1)===13&&p--,r=r.slice(0,p)+" "+r.slice(c.index+1)}}return o+r+o}function jG(){return"`"}function v1(e,t){let n=qa(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}y1.peek=VG;function y1(e,t,n,r){let o=ks(n),i=o==='"'?"Quote":"Apostrophe",l=n.createTracker(r),u,c;if(v1(e,n)){let f=n.stack;n.stack=[],u=n.enter("autolink");let m=l.move("<");return m+=l.move(n.containerPhrasing(e,{before:m,after:">",...l.current()})),m+=l.move(">"),u(),n.stack=f,m}u=n.enter("link"),c=n.enter("label");let p=l.move("[");return p+=l.move(n.containerPhrasing(e,{before:p,after:"](",...l.current()})),p+=l.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter("destinationLiteral"),p+=l.move("<"),p+=l.move(n.safe(e.url,{before:p,after:">",...l.current()})),p+=l.move(">")):(c=n.enter("destinationRaw"),p+=l.move(n.safe(e.url,{before:p,after:e.title?" ":")",...l.current()}))),c(),e.title&&(c=n.enter(`title${i}`),p+=l.move(" "+o),p+=l.move(n.safe(e.title,{before:p,after:o,...l.current()})),p+=l.move(o),c()),p+=l.move(")"),u(),p}function VG(e,t,n){return v1(e,n)?"<":"["}x1.peek=KG;function x1(e,t,n,r){let o=e.referenceType,i=n.enter("linkReference"),l=n.enter("label"),u=n.createTracker(r),c=u.move("["),p=n.containerPhrasing(e,{before:c,after:"]",...u.current()});c+=u.move(p+"]["),l();let f=n.stack;n.stack=[],l=n.enter("reference");let m=n.safe(n.associationId(e),{before:c,after:"]",...u.current()});return l(),n.stack=f,i(),o==="full"||!p||p!==m?c+=u.move(m+"]"):o==="shortcut"?c=c.slice(0,-1):c+=u.move("]"),c}function KG(){return"["}function Ss(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function NO(e){let t=Ss(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function zO(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function jh(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function FO(e,t,n,r){let o=n.enter("list"),i=n.bulletCurrent,l=e.ordered?zO(n):Ss(n),u=e.ordered?l==="."?")":".":NO(n),c=t&&n.bulletLastUsed?l===n.bulletLastUsed:!1;if(!e.ordered){let f=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),jh(n)===l&&f){let m=-1;for(;++m<e.children.length;){let g=e.children[m];if(g&&g.type==="listItem"&&g.children&&g.children[0]&&g.children[0].type==="thematicBreak"){c=!0;break}}}}c&&(l=u),n.bulletCurrent=l;let p=n.containerFlow(e,r);return n.bulletLastUsed=l,n.bulletCurrent=i,o(),p}function BO(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function UO(e,t,n,r){let o=BO(n),i=n.bulletCurrent||Ss(n);t&&t.type==="list"&&t.ordered&&(i=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+i);let l=i.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(l=Math.ceil(l/4)*4);let u=n.createTracker(r);u.move(i+" ".repeat(l-i.length)),u.shift(l);let c=n.enter("listItem"),p=n.indentLines(n.containerFlow(e,u.current()),f);return c(),p;function f(m,g,b){return g?(b?"":" ".repeat(l))+m:(b?i:i+" ".repeat(l-i.length))+m}}function HO(e,t,n,r){let o=n.enter("paragraph"),i=n.enter("phrasing"),l=n.containerPhrasing(e,r);return i(),o(),l}var w1=ea(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function WO(e,t,n,r){return(e.children.some(function(l){return w1(l)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function qO(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}k1.peek=GG;function k1(e,t,n,r){let o=qO(n),i=n.enter("strong"),l=n.createTracker(r),u=l.move(o+o);return u+=l.move(n.containerPhrasing(e,{before:u,after:o,...l.current()})),u+=l.move(o+o),i(),u}function GG(e,t,n){return n.options.strong||"*"}function jO(e,t,n,r){return n.safe(e.value,r)}function VO(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function KO(e,t,n){let r=(jh(n)+(n.options.ruleSpaces?" ":"")).repeat(VO(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Xa={blockquote:TO,break:d1,code:LO,definition:PO,emphasis:f1,hardBreak:d1,heading:DO,html:m1,image:h1,imageReference:g1,inlineCode:b1,link:y1,linkReference:x1,list:FO,listItem:UO,paragraph:HO,root:WO,strong:k1,text:jO,thematicBreak:KO};var GO=[QG];function QG(e,t,n,r){if(t.type==="code"&&np(t,r)&&(e.type==="list"||e.type===t.type&&np(e,r)))return!1;if("spread"in n&&typeof n.spread=="boolean")return e.type==="paragraph"&&(e.type===t.type||t.type==="definition"||t.type==="heading"&&qh(t,r))?void 0:n.spread?1:0}var Ja=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],QO=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:Ja},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:Ja},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:Ja},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:Ja},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:Ja},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:Ja},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:Ja},{atBreak:!0,character:"~"}];function $O(e){return e.label||!e.identifier?e.label||"":Ch(e.identifier)}function YO(e){if(!e._compiled){let t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function XO(e,t,n){let r=t.indexStack,o=e.children||[],i=[],l=-1,u=n.before;r.push(-1);let c=t.createTracker(n);for(;++l<o.length;){let p=o[l],f;if(r[r.length-1]=l,l+1<o.length){let m=t.handle.handlers[o[l+1].type];m&&m.peek&&(m=m.peek),f=m?m(o[l+1],e,t,{before:"",after:"",...c.current()}).charAt(0):""}else f=n.after;i.length>0&&(u==="\r"||u===`
`)&&p.type==="html"&&(i[i.length-1]=i[i.length-1].replace(/(\r?\n|\r)$/," "),u=" ",c=t.createTracker(n),c.move(i.join(""))),i.push(c.move(t.handle(p,e,t,{...c.current(),before:u,after:f}))),u=i[i.length-1].slice(-1)}return r.pop(),i.join("")}function JO(e,t,n){let r=t.indexStack,o=e.children||[],i=t.createTracker(n),l=[],u=-1;for(r.push(-1);++u<o.length;){let c=o[u];r[r.length-1]=u,l.push(i.move(t.handle(c,e,t,{before:`
`,after:`
`,...i.current()}))),c.type!=="list"&&(t.bulletLastUsed=void 0),u<o.length-1&&l.push(i.move($G(c,o[u+1],e,t)))}return r.pop(),l.join("")}function $G(e,t,n,r){let o=r.join.length;for(;o--;){let i=r.join[o](e,t,n,r);if(i===!0||i===1)break;if(typeof i=="number")return`
`.repeat(1+i);if(i===!1)return`

<!---->

`}return`

`}var YG=/\r?\n|\r/g;function ZO(e,t){let n=[],r=0,o=0,i;for(;i=YG.exec(e);)l(e.slice(r,i.index)),n.push(i[0]),r=i.index+i[0].length,o++;return l(e.slice(r)),n.join("");function l(u){n.push(t(u,o,!u))}}function tL(e,t,n){let r=(n.before||"")+(t||"")+(n.after||""),o=[],i=[],l={},u=-1;for(;++u<e.unsafe.length;){let f=e.unsafe[u];if(!Wh(e.stack,f))continue;let m=e.compilePattern(f),g;for(;g=m.exec(r);){let b="before"in f||!!f.atBreak,v="after"in f,k=g.index+(b?g[1].length:0);o.includes(k)?(l[k].before&&!b&&(l[k].before=!1),l[k].after&&!v&&(l[k].after=!1)):(o.push(k),l[k]={before:b,after:v})}}o.sort(XG);let c=n.before?n.before.length:0,p=r.length-(n.after?n.after.length:0);for(u=-1;++u<o.length;){let f=o[u];f<c||f>=p||f+1<p&&o[u+1]===f+1&&l[f].after&&!l[f+1].before&&!l[f+1].after||o[u-1]===f-1&&l[f].before&&!l[f-1].before&&!l[f-1].after||(c!==f&&i.push(eL(r.slice(c,f),"\\")),c=f,/[!-/:-@[-`{-~]/.test(r.charAt(f))&&(!n.encode||!n.encode.includes(r.charAt(f)))?i.push("\\"):(i.push("&#x"+r.charCodeAt(f).toString(16).toUpperCase()+";"),c++))}return i.push(eL(r.slice(c,p),n.after)),i.join("")}function XG(e,t){return e-t}function eL(e,t){let n=/\\(?=[!-/:-@[-`{-~])/g,r=[],o=[],i=e+t,l=-1,u=0,c;for(;c=n.exec(i);)r.push(c.index);for(;++l<r.length;)u!==r[l]&&o.push(e.slice(u,r[l])),o.push("\\"),u=r[l];return o.push(e.slice(u)),o.join("")}function nL(e){let t=e||{},n=t.now||{},r=t.lineShift||0,o=n.line||1,i=n.column||1;return{move:c,current:l,shift:u};function l(){return{now:{line:o,column:i},lineShift:r}}function u(p){r+=p}function c(p){let f=p||"",m=f.split(/\r?\n|\r/g),g=m[m.length-1];return o+=m.length-1,i=m.length===1?i+g.length:1+g.length+r,f}}function S1(e,t={}){let n={enter:o,indentLines:ZO,associationId:$O,containerPhrasing:tQ,containerFlow:nQ,createTracker:nL,compilePattern:YO,safe:rQ,stack:[],unsafe:[...QO],join:[...GO],handlers:{...Xa},options:{},indexStack:[],handle:void 0};p1(n,t),n.options.tightDefinitions&&n.join.push(eQ),n.handle=EO("type",{invalid:JG,unknown:ZG,handlers:n.handlers});let r=n.handle(e,void 0,n,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return r&&r.charCodeAt(r.length-1)!==10&&r.charCodeAt(r.length-1)!==13&&(r+=`
`),r;function o(i){return n.stack.push(i),l;function l(){n.stack.pop()}}}function JG(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function ZG(e){let t=e;throw new Error("Cannot handle unknown node `"+t.type+"`")}function eQ(e,t){if(e.type==="definition"&&e.type===t.type)return 0}function tQ(e,t){return XO(e,this,t)}function nQ(e,t){return JO(e,this,t)}function rQ(e,t){return tL(this,e,t)}function C1(){return{enter:{table:oQ,tableData:rL,tableHeader:rL,tableRow:aQ},exit:{codeText:lQ,table:iQ,tableData:_1,tableHeader:_1,tableRow:_1}}}function oQ(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function iQ(e){this.exit(e),this.data.inTable=void 0}function aQ(e){this.enter({type:"tableRow",children:[]},e)}function _1(e){this.exit(e)}function rL(e){this.enter({type:"tableCell",children:[]},e)}function lQ(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,sQ));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function sQ(e,t){return t==="|"?t:e}function E1(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,o=t.stringLength,i=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:g,table:l,tableCell:c,tableRow:u}};function l(b,v,k,C){return p(f(b,k,C),b.align)}function u(b,v,k,C){let y=m(b,k,C),w=p([y]);return w.slice(0,w.indexOf(`
`))}function c(b,v,k,C){let y=k.enter("tableCell"),w=k.enter("phrasing"),S=k.containerPhrasing(b,{...C,before:i,after:i});return w(),y(),S}function p(b,v){return _O(b,{align:v,alignDelimiters:r,padding:n,stringLength:o})}function f(b,v,k){let C=b.children,y=-1,w=[],S=v.enter("table");for(;++y<C.length;)w[y]=m(C[y],v,k);return S(),w}function m(b,v,k){let C=b.children,y=-1,w=[],S=v.enter("tableRow");for(;++y<C.length;)w[y]=c(C[y],b,v,k);return S(),w}function g(b,v,k){let C=Xa.inlineCode(b,v,k);return k.stack.includes("tableCell")&&(C=C.replace(/\|/g,"\\$&")),C}}function R1(){return{exit:{taskListCheckValueChecked:oL,taskListCheckValueUnchecked:oL,paragraph:uQ}}}function T1(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:cQ}}}function oL(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function uQ(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let o=t.children,i=-1,l;for(;++i<o.length;){let u=o[i];if(u.type==="paragraph"){l=u;break}}l===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function cQ(e,t,n,r){let o=e.children[0],i=typeof e.checked=="boolean"&&o&&o.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",u=n.createTracker(r);i&&u.move(l);let c=Xa.listItem(e,t,n,{...r,...u.current()});return i&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),c;function p(f){return f+l}}function rp(){return[i1(),l1(),u1(),C1(),R1()]}function op(e){return{extensions:[a1(),s1(),c1(),E1(e),T1()]}}var pQ={tokenize:gQ,partial:!0},iL={tokenize:bQ,partial:!0},aL={tokenize:vQ,partial:!0},lL={tokenize:yQ,partial:!0},dQ={tokenize:xQ,partial:!0},sL={name:"wwwAutolink",tokenize:mQ,previous:cL},uL={name:"protocolAutolink",tokenize:hQ,previous:pL},oi={name:"emailAutolink",tokenize:fQ,previous:dL},ko={};function A1(){return{text:ko}}var Za=48;for(;Za<123;)ko[Za]=oi,Za++,Za===58?Za=65:Za===91&&(Za=97);ko[43]=oi;ko[45]=oi;ko[46]=oi;ko[95]=oi;ko[72]=[oi,uL];ko[104]=[oi,uL];ko[87]=[oi,sL];ko[119]=[oi,sL];function fQ(e,t,n){let r=this,o,i;return l;function l(m){return!I1(m)||!dL.call(r,r.previous)||O1(r.events)?n(m):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),u(m))}function u(m){return I1(m)?(e.consume(m),u):m===64?(e.consume(m),c):n(m)}function c(m){return m===46?e.check(dQ,f,p)(m):m===45||m===95||yt(m)?(i=!0,e.consume(m),c):f(m)}function p(m){return e.consume(m),o=!0,c}function f(m){return i&&o&&Bt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(m)):n(m)}}function mQ(e,t,n){let r=this;return o;function o(l){return l!==87&&l!==119||!cL.call(r,r.previous)||O1(r.events)?n(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(pQ,e.attempt(iL,e.attempt(aL,i),n),n)(l))}function i(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(l)}}function hQ(e,t,n){let r=this,o="",i=!1;return l;function l(m){return(m===72||m===104)&&pL.call(r,r.previous)&&!O1(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(m),e.consume(m),u):n(m)}function u(m){if(Bt(m)&&o.length<5)return o+=String.fromCodePoint(m),e.consume(m),u;if(m===58){let g=o.toLowerCase();if(g==="http"||g==="https")return e.consume(m),c}return n(m)}function c(m){return m===47?(e.consume(m),i?p:(i=!0,c)):n(m)}function p(m){return m===null||ja(m)||Re(m)||xo(m)||Va(m)?n(m):e.attempt(iL,e.attempt(aL,f),n)(m)}function f(m){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(m)}}function gQ(e,t,n){let r=0;return o;function o(l){return(l===87||l===119)&&r<3?(r++,e.consume(l),o):l===46&&r===3?(e.consume(l),i):n(l)}function i(l){return l===null?n(l):t(l)}}function bQ(e,t,n){let r,o,i;return l;function l(p){return p===46||p===95?e.check(lL,c,u)(p):p===null||Re(p)||xo(p)||p!==45&&Va(p)?c(p):(i=!0,e.consume(p),l)}function u(p){return p===95?r=!0:(o=r,r=void 0),e.consume(p),l}function c(p){return o||r||!i?n(p):t(p)}}function vQ(e,t){let n=0,r=0;return o;function o(l){return l===40?(n++,e.consume(l),o):l===41&&r<n?i(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(lL,t,i)(l):l===null||Re(l)||xo(l)?t(l):(e.consume(l),o)}function i(l){return l===41&&r++,e.consume(l),o}}function yQ(e,t,n){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(e.consume(u),r):u===38?(e.consume(u),i):u===93?(e.consume(u),o):u===60||u===null||Re(u)||xo(u)?t(u):n(u)}function o(u){return u===null||u===40||u===91||Re(u)||xo(u)?t(u):r(u)}function i(u){return Bt(u)?l(u):n(u)}function l(u){return u===59?(e.consume(u),r):Bt(u)?(e.consume(u),l):n(u)}}function xQ(e,t,n){return r;function r(i){return e.consume(i),o}function o(i){return yt(i)?n(i):t(i)}}function cL(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Re(e)}function pL(e){return!Bt(e)}function dL(e){return!(e===47||I1(e))}function I1(e){return e===43||e===45||e===46||e===95||yt(e)}function O1(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var wQ={tokenize:TQ,partial:!0};function L1(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:CQ,continuation:{tokenize:EQ},exit:RQ}},text:{91:{name:"gfmFootnoteCall",tokenize:_Q},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:kQ,resolveTo:SQ}}}}function kQ(e,t,n){let r=this,o=r.events.length,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l;for(;o--;){let c=r.events[o][1];if(c.type==="labelImage"){l=c;break}if(c.type==="gfmFootnoteCall"||c.type==="labelLink"||c.type==="label"||c.type==="image"||c.type==="link")break}return u;function u(c){if(!l||!l._balanced)return n(c);let p=vn(r.sliceSerialize({start:l.end,end:r.now()}));return p.codePointAt(0)!==94||!i.includes(p.slice(1))?n(c):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),t(c))}}function SQ(e,t){let n=e.length,r;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){r=e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let o={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},c=[e[n+1],e[n+2],["enter",o,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",l,t],["enter",u,t],["exit",u,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",o,t]];return e.splice(n,e.length-n+1,...c),e}function _Q(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i=0,l;return u;function u(m){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),c}function c(m){return m!==94?n(m):(e.enter("gfmFootnoteCallMarker"),e.consume(m),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",p)}function p(m){if(i>999||m===93&&!l||m===null||m===91||Re(m))return n(m);if(m===93){e.exit("chunkString");let g=e.exit("gfmFootnoteCallString");return o.includes(vn(r.sliceSerialize(g)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(m)}return Re(m)||(l=!0),i++,e.consume(m),m===92?f:p}function f(m){return m===91||m===92||m===93?(e.consume(m),i++,p):p(m)}}function CQ(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i,l=0,u;return c;function c(v){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(v){return v===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(v)}function f(v){if(l>999||v===93&&!u||v===null||v===91||Re(v))return n(v);if(v===93){e.exit("chunkString");let k=e.exit("gfmFootnoteDefinitionLabelString");return i=vn(r.sliceSerialize(k)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),g}return Re(v)||(u=!0),l++,e.consume(v),v===92?m:f}function m(v){return v===91||v===92||v===93?(e.consume(v),l++,f):f(v)}function g(v){return v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),o.includes(i)||o.push(i),se(e,b,"gfmFootnoteDefinitionWhitespace")):n(v)}function b(v){return t(v)}}function EQ(e,t,n){return e.check(wo,t,e.attempt(wQ,t,n))}function RQ(e){e.exit("gfmFootnoteDefinition")}function TQ(e,t,n){let r=this;return se(e,o,"gfmFootnoteDefinitionIndent",5);function o(i){let l=r.events[r.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?t(i):n(i)}}function P1(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:i,resolveAll:o};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function o(l,u){let c=-1;for(;++c<l.length;)if(l[c][0]==="enter"&&l[c][1].type==="strikethroughSequenceTemporary"&&l[c][1]._close){let p=c;for(;p--;)if(l[p][0]==="exit"&&l[p][1].type==="strikethroughSequenceTemporary"&&l[p][1]._open&&l[c][1].end.offset-l[c][1].start.offset===l[p][1].end.offset-l[p][1].start.offset){l[c][1].type="strikethroughSequence",l[p][1].type="strikethroughSequence";let f={type:"strikethrough",start:Object.assign({},l[p][1].start),end:Object.assign({},l[c][1].end)},m={type:"strikethroughText",start:Object.assign({},l[p][1].end),end:Object.assign({},l[c][1].start)},g=[["enter",f,u],["enter",l[p][1],u],["exit",l[p][1],u],["enter",m,u]],b=u.parser.constructs.insideSpan.null;b&&At(g,g.length,0,Ji(b,l.slice(p+1,c),u)),At(g,g.length,0,[["exit",m,u],["enter",l[c][1],u],["exit",l[c][1],u],["exit",f,u]]),At(l,p-1,c-p+3,g),c=p+g.length-2;break}}for(c=-1;++c<l.length;)l[c][1].type==="strikethroughSequenceTemporary"&&(l[c][1].type="data");return l}function i(l,u,c){let p=this.previous,f=this.events,m=0;return g;function g(v){return p===126&&f[f.length-1][1].type!=="characterEscape"?c(v):(l.enter("strikethroughSequenceTemporary"),b(v))}function b(v){let k=bs(p);if(v===126)return m>1?c(v):(l.consume(v),m++,b);if(m<2&&!n)return c(v);let C=l.exit("strikethroughSequenceTemporary"),y=bs(v);return C._open=!y||y===2&&!!k,C._close=!k||k===2&&!!y,u(v)}}}var Vh=class{constructor(){this.map=[]}add(t,n,r){IQ(this,t,n,r)}consume(t){if(this.map.sort(function(i,l){return i[0]-l[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push([...t]),t.length=0;let o=r.pop();for(;o;)t.push(...o),o=r.pop();this.map.length=0}};function IQ(e,t,n,r){let o=0;if(!(n===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=n,e.map[o][2].push(...r);return}o+=1}e.map.push([t,n,r])}}function fL(e,t){let n=!1,r=[];for(;t<e.length;){let o=e[t];if(n){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let i=r.length-1;r[i]=r[i]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function M1(){return{flow:{null:{name:"table",tokenize:AQ,resolveAll:OQ}}}}function AQ(e,t,n){let r=this,o=0,i=0,l;return u;function u(P){let ae=r.events.length-1;for(;ae>-1;){let re=r.events[ae][1].type;if(re==="lineEnding"||re==="linePrefix")ae--;else break}let J=ae>-1?r.events[ae][1].type:null,$=J==="tableHead"||J==="tableRow"?R:c;return $===R&&r.parser.lazy[r.now().line]?n(P):$(P)}function c(P){return e.enter("tableHead"),e.enter("tableRow"),p(P)}function p(P){return P===124||(l=!0,i+=1),f(P)}function f(P){return P===null?n(P):ee(P)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),b):n(P):ce(P)?se(e,f,"whitespace")(P):(i+=1,l&&(l=!1,o+=1),P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),l=!0,f):(e.enter("data"),m(P)))}function m(P){return P===null||P===124||Re(P)?(e.exit("data"),f(P)):(e.consume(P),P===92?g:m)}function g(P){return P===92||P===124?(e.consume(P),m):m(P)}function b(P){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(P):(e.enter("tableDelimiterRow"),l=!1,ce(P)?se(e,v,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):v(P))}function v(P){return P===45||P===58?C(P):P===124?(l=!0,e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),k):M(P)}function k(P){return ce(P)?se(e,C,"whitespace")(P):C(P)}function C(P){return P===58?(i+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),y):P===45?(i+=1,y(P)):P===null||ee(P)?T(P):M(P)}function y(P){return P===45?(e.enter("tableDelimiterFiller"),w(P)):M(P)}function w(P){return P===45?(e.consume(P),w):P===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(P))}function S(P){return ce(P)?se(e,T,"whitespace")(P):T(P)}function T(P){return P===124?v(P):P===null||ee(P)?!l||o!==i?M(P):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(P)):M(P)}function M(P){return n(P)}function R(P){return e.enter("tableRow"),z(P)}function z(P){return P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),z):P===null||ee(P)?(e.exit("tableRow"),t(P)):ce(P)?se(e,z,"whitespace")(P):(e.enter("data"),U(P))}function U(P){return P===null||P===124||Re(P)?(e.exit("data"),z(P)):(e.consume(P),P===92?Y:U)}function Y(P){return P===92||P===124?(e.consume(P),U):U(P)}}function OQ(e,t){let n=-1,r=!0,o=0,i=[0,0,0,0],l=[0,0,0,0],u=!1,c=0,p,f,m,g=new Vh;for(;++n<e.length;){let b=e[n],v=b[1];b[0]==="enter"?v.type==="tableHead"?(u=!1,c!==0&&(mL(g,t,c,p,f),f=void 0,c=0),p={type:"table",start:Object.assign({},v.start),end:Object.assign({},v.end)},g.add(n,0,[["enter",p,t]])):v.type==="tableRow"||v.type==="tableDelimiterRow"?(r=!0,m=void 0,i=[0,0,0,0],l=[0,n+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},v.start),end:Object.assign({},v.end)},g.add(n,0,[["enter",f,t]])),o=v.type==="tableDelimiterRow"?2:f?3:1):o&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")?(r=!1,l[2]===0&&(i[1]!==0&&(l[0]=l[1],m=Kh(g,t,i,o,void 0,m),i=[0,0,0,0]),l[2]=n)):v.type==="tableCellDivider"&&(r?r=!1:(i[1]!==0&&(l[0]=l[1],m=Kh(g,t,i,o,void 0,m)),i=l,l=[i[1],n,0,0])):v.type==="tableHead"?(u=!0,c=n):v.type==="tableRow"||v.type==="tableDelimiterRow"?(c=n,i[1]!==0?(l[0]=l[1],m=Kh(g,t,i,o,n,m)):l[1]!==0&&(m=Kh(g,t,l,o,n,m)),o=0):o&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")&&(l[3]=n)}for(c!==0&&mL(g,t,c,p,f),g.consume(t.events),n=-1;++n<t.events.length;){let b=t.events[n];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=fL(t.events,n))}return e}function Kh(e,t,n,r,o,i){let l=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";n[0]!==0&&(i.end=Object.assign({},_s(t.events,n[0])),e.add(n[0],0,[["exit",i,t]]));let c=_s(t.events,n[1]);if(i={type:l,start:Object.assign({},c),end:Object.assign({},c)},e.add(n[1],0,[["enter",i,t]]),n[2]!==0){let p=_s(t.events,n[2]),f=_s(t.events,n[3]),m={type:u,start:Object.assign({},p),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",m,t]]),r!==2){let g=t.events[n[2]],b=t.events[n[3]];if(g[1].end=Object.assign({},b[1].end),g[1].type="chunkText",g[1].contentType="text",n[3]>n[2]+1){let v=n[2]+1,k=n[3]-n[2]-1;e.add(v,k,[])}}e.add(n[3]+1,0,[["exit",m,t]])}return o!==void 0&&(i.end=Object.assign({},_s(t.events,o)),e.add(o,0,[["exit",i,t]]),i=void 0),i}function mL(e,t,n,r,o){let i=[],l=_s(t.events,n);o&&(o.end=Object.assign({},l),i.push(["exit",o,t])),r.end=Object.assign({},l),i.push(["exit",r,t]),e.add(n+1,0,i)}function _s(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var LQ={name:"tasklistCheck",tokenize:PQ};function D1(){return{text:{91:LQ}}}function PQ(e,t,n){let r=this;return o;function o(c){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(c):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),i)}function i(c){return Re(c)?(e.enter("taskListCheckValueUnchecked"),e.consume(c),e.exit("taskListCheckValueUnchecked"),l):c===88||c===120?(e.enter("taskListCheckValueChecked"),e.consume(c),e.exit("taskListCheckValueChecked"),l):n(c)}function l(c){return c===93?(e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),u):n(c)}function u(c){return ee(c)?t(c):ce(c)?e.check({tokenize:MQ},t,n)(c):n(c)}}function MQ(e,t,n){return se(e,r,"whitespace");function r(o){return o===null?n(o):t(o)}}function Gh(e){return fh([A1(),L1(),P1(e),M1(),D1()])}var DQ={};function Qh(e){let t=this,n=e||DQ,r=t.data(),o=r.micromarkExtensions||(r.micromarkExtensions=[]),i=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);o.push(Gh(n)),i.push(rp()),l.push(op(n))}var gL=K(Ve(),1),NQ=({blockMatch:e})=>{let t=e.output;return(0,gL.jsx)(Jw,{remarkPlugins:[Qh],children:t})},hL=NQ;var zQ=function(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};function bL(e,t,n){var r=function(i){return e.apply(void 0,zQ([i],Array.from(t),!1))},o=n??e.lazy;return o===void 0?r:Object.assign(r,{lazy:o,lazyArgs:t})}function vL(e,t,n){var r=e.length-t.length;if(r===0)return e.apply(void 0,Array.from(t));if(r===1)return bL(e,t,n);throw new Error("Wrong number of arguments")}function yL(){return vL(ip,arguments)}function ip(e,t){if(e===t)return!0;if(typeof e=="number"&&typeof t=="number")return e!==e&&t!==t;if(typeof e!="object"||typeof t!="object"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(e instanceof Set)return BQ(e,t);if(Array.isArray(e)){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!ip(e[n],t[n]))return!1;return!0}if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(e instanceof Map)return FQ(e,t);var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var o=0,i=r;o<i.length;o++){var l=i[o];if(!Object.prototype.hasOwnProperty.call(t,l)||!ip(e[l],t[l]))return!1}return!0}function FQ(e,t){if(e.size!==t.size)return!1;for(var n=Array.from(e.keys()),r=0,o=n;r<o.length;r++){var i=o[r];if(!t.has(i)||!ip(e.get(i),t.get(i)))return!1}return!0}function BQ(e,t){if(e.size!==t.size)return!1;for(var n=Array.from(e.values()),r=Array.from(t.values()),o=0,i=n;o<i.length;o++){for(var l=i[o],u=!1,c=0;c<r.length;c++)if(ip(l,r[c])){u=!0,r.splice(c,1);break}if(!u)return!1}return!0}var xL="\u200B",UQ=/(\*{1,3}|(^|\s|\n)_{1,3}|~{1,3})(\S|$)/,HQ=/(\[$|\[[^\]]+$|\[[^\]]+\]$|\[[^\]]+\]\(.*$)/,WQ=e=>e.children.length===1&&e.children[0].type==="listItem"&&e.children[0].children.length===0,qQ=(e,t)=>!!(e.position&&e.position.start.line===e.position.end.line&&e.position.end.column&&e.position.start.column&&e.position.end.column-e.position.start.column===t),wL=e=>Qc(e,{extensions:[Gh()],mdastExtensions:[rp()]}),jQ=e=>(QQ(e),S1(e,{extensions:[op()]})),VQ=e=>{let t=e.lastIndexOf(`
`);return e.slice(t+1)},KQ=e=>e.replace(/ $/,` ${xL}`),GQ=e=>e.replaceAll(xL,""),QQ=e=>(ri(e,"text",(t,n,r)=>{r&&["emphasis","strong","delete"].includes(r.type)&&r.children.findIndex(l=>yL(l.position,t.position))===r.children.length-1&&(t.value=KQ(t.value))}),e),$Q=(e,t,n)=>{n.forEach(r=>{YQ(e,t,r)})},YQ=(e,t,n)=>{let r=t.children.findIndex(o=>o.type==="text"&&n.test(VQ(o.value)));if(r!==-1){let i=t.children[r].value,l=n.exec(i).index;l>0?(t.children[r]={type:"text",value:i.slice(0,l)},t.children.splice(r+1)):t.children.splice(r),t.children.length===0&&e.children.splice(-1)}return r!==-1},kL=e=>{if(e.children.length===0)return;let t=e.children[e.children.length-1];t.type==="paragraph"?$Q(e,t,[UQ,HQ]):(t.type==="list"&&WQ(t)&&qQ(t,1)||t.type==="thematicBreak")&&e.children.splice(-1)},SL="_",_L="*",ap=e=>e.children.map(t=>t.type==="text"||t.type==="inlineCode"?t.value:t.type==="thematicBreak"?SL:t.type==="heading"||t.type==="paragraph"?ap(t):t.type==="listItem"?_L+ap(t):"children"in t?ap(t):"").join(""),CL=(e,t)=>(t||kL(e),GQ(ap(e)).replaceAll(`
`,"")),XQ=(e,t)=>{let n=wL(e);return CL(n,t)},EL=(e,t)=>{if(e.type==="text"||e.type==="inlineCode")return e.value.length<=t?{charsRemoved:e.value.length,toDelete:!0}:(e.value=e.value.slice(0,-1*t),{charsRemoved:t,toDelete:!1});if(e.type==="thematicBreak")return{charsRemoved:SL.length,toDelete:!0};let n=0;if("children"in e){let r=e.children.length-1;for(;r>=0&&n<t;){let o=e.children[r],{charsRemoved:i,toDelete:l}=EL(o,t-n);n+=i,l&&e.children.splice(r,1),r--}if(e.type==="listItem"){let o=e.children.length===0&&t-n>0;return{charsRemoved:n+(o?_L.length:0),toDelete:o}}return{charsRemoved:n,toDelete:e.children.length===0}}return{charsRemoved:0,toDelete:!1}},JQ=(e,t)=>{let{toDelete:n}=EL(e,t);n&&(e.children=[])},ZQ=(e,t,n)=>{let r=wL(e);n||kL(r);let i=CL(r,n).length-t;return JQ(r,i),jQ(r)},RL=()=>({output:e,visibleTextLengthTarget:t,isStreamFinished:n})=>{let r=ZQ(e,t,n),o=XQ(r,n);return{output:r,visibleText:o}};var So=K(Ce(),1);var N1=K(Ve(),1),e$=({className:e})=>(0,N1.jsx)("div",{className:On("flex gap-2",e),children:Array(3).fill("").map((t,n)=>(0,N1.jsx)("div",{className:On("w-2.5 h-2.5 rounded-full bg-[#e1c1c1] animate-bounce"),style:{animationDelay:`${n*100}ms`}},n))}),TL=e$;var z1=K(Ve(),1);function F1({className:e=""}){return(0,z1.jsx)("div",{className:On("bg-white/50 rounded px-2 blur-[5px]",e),children:(0,z1.jsx)("p",{className:"text-black text-sm",children:"AD"})})}function Cs(){let e=window.crypto,t=new Uint8Array(16);return e.getRandomValues(t),t[6]=t[6]&15|64,t[8]=t[8]&63|128,[...t].map((r,o)=>{let i=r.toString(16).padStart(2,"0");return o===4||o===6||o===8||o===10?`-${i}`:i}).join("")}function IL(){let{addMessageToQueryData:e}=$h(),t=ho();return(n,r)=>![200,201,204].includes(r)}var $t=K(Ve(),1);function B1(e){let{query:{data:t}}=(0,So.useContext)(ta),n=t.pages.flatMap(({items:i})=>i).at(0)?.id,r=i$[e.sender],o=n===e.id&&e.sender==="bot"&&e.isBanner;return(0,$t.jsxs)("div",{className:On(!o&&"my-1 flex"),children:[(0,$t.jsx)(r,{...e}),o&&(0,$t.jsx)("div",{className:"w-full h-4 bg-[#c7e0f4]"})]})}var n$=e=>{let{query:{isLoading:t},mutation:n}=(0,So.useContext)(ta),{streamingState:[r]}=(0,So.useContext)(Es),{flatListRef:o}=(0,So.useContext)(ta),{blockMatches:i}=TI({llmOutput:e.content,blocks:[],fallbackBlock:{component:hL,lookBack:RL()},isStreamFinished:e.isStreamFinished});(0,So.useEffect)(()=>{o.current?.scrollToEnd()},[i]);let l=u=>{n.mutate(u.content)};return e.isBanner?(0,$t.jsxs)("div",{className:"relative w-full h-32 not-prose",children:[(0,$t.jsx)("img",{src:e.content,className:"w-full h-full object-center object-cover"}),(0,$t.jsx)(F1,{className:"absolute top-4 right-4"})]}):(0,$t.jsx)("div",{className:"mx-2 border-[#e1c1c1] border-solid border-[1px] p-2 rounded bg-[#fff9e8]",children:i.map((u,c)=>{let p=u.block.component;return(0,$t.jsxs)("div",{className:"flex flex-col gap-4 text-black",children:[(0,$t.jsx)(p,{blockMatch:u}),e.isStreamFinished&&e.pills&&(0,$t.jsx)("div",{className:"grid grid-cols-2 gap-2 pills-container",children:e.pills.map(f=>(0,$t.jsx)(ls,{className:"rounded-full bg-[#dbe8ed] hover:bg-[#dbe8ed]/70 text-center h-10 border-0 cursor-pointer",size:"sm",onClick:()=>l(f),children:(0,$t.jsx)("p",{className:"text-center text-xs w-full text-wrap",children:f.content})},f.id))})]},c)})})},r$=e=>{let[t,n]=(0,So.useState)({wrapper:"",label:""});return(0,So.useEffect)(()=>{switch(e.severity){case"danger":{n({wrapper:"border-destructive bg-destructive/5",label:"text-destructive"});break}case"success":{n({wrapper:"border-success bg-success/5",label:"text-success"});break}}},[e.severity]),(0,$t.jsx)("div",{className:On("border-solid border-[1px] p-2 rounded ml-2 mr-auto my-2",t.wrapper),children:(0,$t.jsx)("p",{className:On("",t.label),children:e.content})})},o$=e=>(0,$t.jsx)("div",{className:"border-solid border-[#79ce78] border-[1px] p-2 rounded max-w-[80%] mr-2 ml-auto my-2 bg-[#eaf7e8]",children:(0,$t.jsx)("p",{className:"text-black",children:e.content})}),i$={bot:n$,system:r$,user:o$};var Yh="http://52.175.247.13:8081";var x6=K(AL(),1);var el=K(Ce(),1),LL=K(Ve(),1),Ts=(0,el.createContext)([{email:"",gender:"M",age:NaN,name:"",campaignID:NaN,targetSite:""},()=>{}]),OL=({children:e})=>{let[t,n]=(0,el.useState)({email:"",gender:"M",age:NaN,name:"",campaignID:NaN,targetSite:""}),[r,o]=(0,el.useState)(!1);return(0,el.useEffect)(()=>{let{chatAdsFPData:i,campaignID:l}=window;n({...i,campaignID:l}),o(!0)},[]),(0,LL.jsx)(Ts.Provider,{value:[t,n],children:r&&e})};function sp(e,t){return function(){return e.apply(t,arguments)}}var{toString:a$}=Object.prototype,{getPrototypeOf:W1}=Object,Jh=(e=>t=>{let n=a$.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ro=e=>(e=e.toLowerCase(),t=>Jh(t)===e),Zh=e=>t=>typeof t===e,{isArray:Is}=Array,up=Zh("undefined");function l$(e){return e!==null&&!up(e)&&e.constructor!==null&&!up(e.constructor)&&cr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var DL=ro("ArrayBuffer");function s$(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&DL(e.buffer),t}var u$=Zh("string"),cr=Zh("function"),NL=Zh("number"),eg=e=>e!==null&&typeof e=="object",c$=e=>e===!0||e===!1,Xh=e=>{if(Jh(e)!=="object")return!1;let t=W1(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},p$=ro("Date"),d$=ro("File"),f$=ro("Blob"),m$=ro("FileList"),h$=e=>eg(e)&&cr(e.pipe),g$=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||cr(e.append)&&((t=Jh(e))==="formdata"||t==="object"&&cr(e.toString)&&e.toString()==="[object FormData]"))},b$=ro("URLSearchParams"),[v$,y$,x$,w$]=["ReadableStream","Request","Response","Headers"].map(ro),k$=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function cp(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Is(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{let i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length,u;for(r=0;r<l;r++)u=i[r],t.call(null,e[u],u,e)}}function zL(e,t){t=t.toLowerCase();let n=Object.keys(e),r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}var tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,FL=e=>!up(e)&&e!==tl;function H1(){let{caseless:e}=FL(this)&&this||{},t={},n=(r,o)=>{let i=e&&zL(t,o)||o;Xh(t[i])&&Xh(r)?t[i]=H1(t[i],r):Xh(r)?t[i]=H1({},r):Is(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&cp(arguments[r],n);return t}var S$=(e,t,n,{allOwnKeys:r}={})=>(cp(t,(o,i)=>{n&&cr(o)?e[i]=sp(o,n):e[i]=o},{allOwnKeys:r}),e),_$=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),C$=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},E$=(e,t,n,r)=>{let o,i,l,u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&W1(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},R$=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},T$=e=>{if(!e)return null;if(Is(e))return e;let t=e.length;if(!NL(t))return null;let n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},I$=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&W1(Uint8Array)),A$=(e,t)=>{let r=(e&&e[Symbol.iterator]).call(e),o;for(;(o=r.next())&&!o.done;){let i=o.value;t.call(e,i[0],i[1])}},O$=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},L$=ro("HTMLFormElement"),P$=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),PL=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),M$=ro("RegExp"),BL=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};cp(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},D$=e=>{BL(e,(t,n)=>{if(cr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;let r=e[n];if(cr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},N$=(e,t)=>{let n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Is(e)?r(e):r(String(e).split(t)),n},z$=()=>{},F$=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,U1="abcdefghijklmnopqrstuvwxyz",ML="0123456789",UL={DIGIT:ML,ALPHA:U1,ALPHA_DIGIT:U1+U1.toUpperCase()+ML},B$=(e=16,t=UL.ALPHA_DIGIT)=>{let n="",{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function U$(e){return!!(e&&cr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var H$=e=>{let t=new Array(10),n=(r,o)=>{if(eg(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;let i=Is(r)?[]:{};return cp(r,(l,u)=>{let c=n(l,o+1);!up(c)&&(i[u]=c)}),t[o]=void 0,i}}return r};return n(e,0)},W$=ro("AsyncFunction"),q$=e=>e&&(eg(e)||cr(e))&&cr(e.then)&&cr(e.catch),HL=((e,t)=>e?setImmediate:t?((n,r)=>(tl.addEventListener("message",({source:o,data:i})=>{o===tl&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),tl.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",cr(tl.postMessage)),j$=typeof queueMicrotask<"u"?queueMicrotask.bind(tl):typeof process<"u"&&process.nextTick||HL,F={isArray:Is,isArrayBuffer:DL,isBuffer:l$,isFormData:g$,isArrayBufferView:s$,isString:u$,isNumber:NL,isBoolean:c$,isObject:eg,isPlainObject:Xh,isReadableStream:v$,isRequest:y$,isResponse:x$,isHeaders:w$,isUndefined:up,isDate:p$,isFile:d$,isBlob:f$,isRegExp:M$,isFunction:cr,isStream:h$,isURLSearchParams:b$,isTypedArray:I$,isFileList:m$,forEach:cp,merge:H1,extend:S$,trim:k$,stripBOM:_$,inherits:C$,toFlatObject:E$,kindOf:Jh,kindOfTest:ro,endsWith:R$,toArray:T$,forEachEntry:A$,matchAll:O$,isHTMLForm:L$,hasOwnProperty:PL,hasOwnProp:PL,reduceDescriptors:BL,freezeMethods:D$,toObjectSet:N$,toCamelCase:P$,noop:z$,toFiniteNumber:F$,findKey:zL,global:tl,isContextDefined:FL,ALPHABET:UL,generateString:B$,isSpecCompliantForm:U$,toJSONObject:H$,isAsyncFn:W$,isThenable:q$,setImmediate:HL,asap:j$};function As(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}F.inherits(As,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}});var WL=As.prototype,qL={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qL[e]={value:e}});Object.defineProperties(As,qL);Object.defineProperty(WL,"isAxiosError",{value:!0});As.from=(e,t,n,r,o,i)=>{let l=Object.create(WL);return F.toFlatObject(e,l,function(c){return c!==Error.prototype},u=>u!=="isAxiosError"),As.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};var ge=As;var tg=null;function q1(e){return F.isPlainObject(e)||F.isArray(e)}function VL(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function jL(e,t,n){return e?e.concat(t).map(function(o,i){return o=VL(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function V$(e){return F.isArray(e)&&!e.some(q1)}var K$=F.toFlatObject(F,{},null,function(t){return/^is[A-Z]/.test(t)});function G$(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new(tg||FormData),n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,C){return!F.isUndefined(C[k])});let r=n.metaTokens,o=n.visitor||f,i=n.dots,l=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(t);if(!F.isFunction(o))throw new TypeError("visitor must be a function");function p(v){if(v===null)return"";if(F.isDate(v))return v.toISOString();if(!c&&F.isBlob(v))throw new ge("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(v)||F.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,k,C){let y=v;if(v&&!C&&typeof v=="object"){if(F.endsWith(k,"{}"))k=r?k:k.slice(0,-2),v=JSON.stringify(v);else if(F.isArray(v)&&V$(v)||(F.isFileList(v)||F.endsWith(k,"[]"))&&(y=F.toArray(v)))return k=VL(k),y.forEach(function(S,T){!(F.isUndefined(S)||S===null)&&t.append(l===!0?jL([k],T,i):l===null?k:k+"[]",p(S))}),!1}return q1(v)?!0:(t.append(jL(C,k,i),p(v)),!1)}let m=[],g=Object.assign(K$,{defaultVisitor:f,convertValue:p,isVisitable:q1});function b(v,k){if(!F.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+k.join("."));m.push(v),F.forEach(v,function(y,w){(!(F.isUndefined(y)||y===null)&&o.call(t,y,F.isString(w)?w.trim():w,k,g))===!0&&b(y,k?k.concat(w):[w])}),m.pop()}}if(!F.isObject(e))throw new TypeError("data must be an object");return b(e),t}var na=G$;function KL(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function GL(e,t){this._pairs=[],e&&na(e,this,t)}var QL=GL.prototype;QL.append=function(t,n){this._pairs.push([t,n])};QL.toString=function(t){let n=t?function(r){return t.call(this,r,KL)}:KL;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};var ng=GL;function Q$(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pp(e,t,n){if(!t)return e;let r=n&&n.encode||Q$,o=n&&n.serialize,i;if(o?i=o(t,n):i=F.isURLSearchParams(t)?t.toString():new ng(t,n).toString(r),i){let l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}var j1=class{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){F.forEach(this.handlers,function(r){r!==null&&t(r)})}},V1=j1;var rg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var $L=typeof URLSearchParams<"u"?URLSearchParams:ng;var YL=typeof FormData<"u"?FormData:null;var XL=typeof Blob<"u"?Blob:null;var JL={isBrowser:!0,classes:{URLSearchParams:$L,FormData:YL,Blob:XL},protocols:["http","https","file","blob","url","data"]};var Q1={};wb(Q1,{hasBrowserEnv:()=>G1,hasStandardBrowserEnv:()=>$$,hasStandardBrowserWebWorkerEnv:()=>Y$,navigator:()=>K1,origin:()=>X$});var G1=typeof window<"u"&&typeof document<"u",K1=typeof navigator=="object"&&navigator||void 0,$$=G1&&(!K1||["ReactNative","NativeScript","NS"].indexOf(K1.product)<0),Y$=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",X$=G1&&window.location.href||"http://localhost";var Et={...Q1,...JL};function $1(e,t){return na(e,new Et.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Et.isNode&&F.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function J$(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Z$(e){let t={},n=Object.keys(e),r,o=n.length,i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function eY(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;let u=Number.isFinite(+l),c=i>=n.length;return l=!l&&F.isArray(o)?o.length:l,c?(F.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!u):((!o[l]||!F.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&F.isArray(o[l])&&(o[l]=Z$(o[l])),!u)}if(F.isFormData(e)&&F.isFunction(e.entries)){let n={};return F.forEachEntry(e,(r,o)=>{t(J$(r),o,n,0)}),n}return null}var og=eY;function tY(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var Y1={transitional:rg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){let r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=F.isObject(t);if(i&&F.isHTMLForm(t)&&(t=new FormData(t)),F.isFormData(t))return o?JSON.stringify(og(t)):t;if(F.isArrayBuffer(t)||F.isBuffer(t)||F.isStream(t)||F.isFile(t)||F.isBlob(t)||F.isReadableStream(t))return t;if(F.isArrayBufferView(t))return t.buffer;if(F.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $1(t,this.formSerializer).toString();if((u=F.isFileList(t))||r.indexOf("multipart/form-data")>-1){let c=this.env&&this.env.FormData;return na(u?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),tY(t)):t}],transformResponse:[function(t){let n=this.transitional||Y1.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(F.isResponse(t)||F.isReadableStream(t))return t;if(t&&F.isString(t)&&(r&&!this.responseType||o)){let l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?ge.from(u,ge.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Et.classes.FormData,Blob:Et.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],e=>{Y1.headers[e]={}});var Os=Y1;var nY=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZL=e=>{let t={},n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&nY[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};var e6=Symbol("internals");function dp(e){return e&&String(e).trim().toLowerCase()}function ig(e){return e===!1||e==null?e:F.isArray(e)?e.map(ig):String(e)}function rY(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var oY=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X1(e,t,n,r,o){if(F.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!F.isString(t)){if(F.isString(r))return t.indexOf(r)!==-1;if(F.isRegExp(r))return r.test(t)}}function iY(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function aY(e,t){let n=F.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}var Ls=class{constructor(t){t&&this.set(t)}set(t,n,r){let o=this;function i(u,c,p){let f=dp(c);if(!f)throw new Error("header name must be a non-empty string");let m=F.findKey(o,f);(!m||o[m]===void 0||p===!0||p===void 0&&o[m]!==!1)&&(o[m||c]=ig(u))}let l=(u,c)=>F.forEach(u,(p,f)=>i(p,f,c));if(F.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(F.isString(t)&&(t=t.trim())&&!oY(t))l(ZL(t),n);else if(F.isHeaders(t))for(let[u,c]of t.entries())i(c,u,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=dp(t),t){let r=F.findKey(this,t);if(r){let o=this[r];if(!n)return o;if(n===!0)return rY(o);if(F.isFunction(n))return n.call(this,o,r);if(F.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=dp(t),t){let r=F.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||X1(this,this[r],r,n)))}return!1}delete(t,n){let r=this,o=!1;function i(l){if(l=dp(l),l){let u=F.findKey(r,l);u&&(!n||X1(r,r[u],u,n))&&(delete r[u],o=!0)}}return F.isArray(t)?t.forEach(i):i(t),o}clear(t){let n=Object.keys(this),r=n.length,o=!1;for(;r--;){let i=n[r];(!t||X1(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){let n=this,r={};return F.forEach(this,(o,i)=>{let l=F.findKey(r,i);if(l){n[l]=ig(o),delete n[i];return}let u=t?iY(i):String(i).trim();u!==i&&delete n[i],n[u]=ig(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let n=Object.create(null);return F.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&F.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){let r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){let r=(this[e6]=this[e6]={accessors:{}}).accessors,o=this.prototype;function i(l){let u=dp(l);r[u]||(aY(o,l),r[u]=!0)}return F.isArray(t)?t.forEach(i):i(t),this}};Ls.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Ls.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});F.freezeMethods(Ls);var Ut=Ls;function fp(e,t){let n=this||Os,r=t||n,o=Ut.from(r.headers),i=r.data;return F.forEach(e,function(u){i=u.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function mp(e){return!!(e&&e.__CANCEL__)}function t6(e,t,n){ge.call(this,e??"canceled",ge.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(t6,ge,{__CANCEL__:!0});var _o=t6;function hp(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function J1(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lY(e,t){e=e||10;let n=new Array(e),r=new Array(e),o=0,i=0,l;return t=t!==void 0?t:1e3,function(c){let p=Date.now(),f=r[i];l||(l=p),n[o]=c,r[o]=p;let m=i,g=0;for(;m!==o;)g+=n[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),p-l<t)return;let b=f&&p-f;return b?Math.round(g*1e3/b):void 0}}var n6=lY;function sY(e,t){let n=0,r=1e3/t,o,i,l=(p,f=Date.now())=>{n=f,o=null,i&&(clearTimeout(i),i=null),e.apply(null,p)};return[(...p)=>{let f=Date.now(),m=f-n;m>=r?l(p,f):(o=p,i||(i=setTimeout(()=>{i=null,l(o)},r-m)))},()=>o&&l(o)]}var r6=sY;var Ps=(e,t,n=3)=>{let r=0,o=n6(50,250);return r6(i=>{let l=i.loaded,u=i.lengthComputable?i.total:void 0,c=l-r,p=o(c),f=l<=u;r=l;let m={loaded:l,total:u,progress:u?l/u:void 0,bytes:c,rate:p||void 0,estimated:p&&u&&f?(u-l)/p:void 0,event:i,lengthComputable:u!=null,[t?"download":"upload"]:!0};e(m)},n)},Z1=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ek=e=>(...t)=>F.asap(()=>e(...t));var o6=Et.hasStandardBrowserEnv?function(){let t=Et.navigator&&/(msie|trident)/i.test(Et.navigator.userAgent),n=document.createElement("a"),r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){let u=F.isString(l)?o(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();var i6=Et.hasStandardBrowserEnv?{write(e,t,n,r,o,i){let l=[e+"="+encodeURIComponent(t)];F.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),F.isString(r)&&l.push("path="+r),F.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function tk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function nk(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function gp(e,t){return e&&!tk(t)?nk(e,t):t}var a6=e=>e instanceof Ut?{...e}:e;function oo(e,t){t=t||{};let n={};function r(p,f,m){return F.isPlainObject(p)&&F.isPlainObject(f)?F.merge.call({caseless:m},p,f):F.isPlainObject(f)?F.merge({},f):F.isArray(f)?f.slice():f}function o(p,f,m){if(F.isUndefined(f)){if(!F.isUndefined(p))return r(void 0,p,m)}else return r(p,f,m)}function i(p,f){if(!F.isUndefined(f))return r(void 0,f)}function l(p,f){if(F.isUndefined(f)){if(!F.isUndefined(p))return r(void 0,p)}else return r(void 0,f)}function u(p,f,m){if(m in t)return r(p,f);if(m in e)return r(void 0,p)}let c={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(p,f)=>o(a6(p),a6(f),!0)};return F.forEach(Object.keys(Object.assign({},e,t)),function(f){let m=c[f]||o,g=m(e[f],t[f],f);F.isUndefined(g)&&m!==u||(n[f]=g)}),n}var ag=e=>{let t=oo({},e),{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:u}=t;t.headers=l=Ut.from(l),t.url=pp(gp(t.baseURL,t.url),e.params,e.paramsSerializer),u&&l.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):"")));let c;if(F.isFormData(n)){if(Et.hasStandardBrowserEnv||Et.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((c=l.getContentType())!==!1){let[p,...f]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];l.setContentType([p||"multipart/form-data",...f].join("; "))}}if(Et.hasStandardBrowserEnv&&(r&&F.isFunction(r)&&(r=r(t)),r||r!==!1&&o6(t.url))){let p=o&&i&&i6.read(i);p&&l.set(o,p)}return t};var uY=typeof XMLHttpRequest<"u",l6=uY&&function(e){return new Promise(function(n,r){let o=ag(e),i=o.data,l=Ut.from(o.headers).normalize(),{responseType:u,onUploadProgress:c,onDownloadProgress:p}=o,f,m,g,b,v;function k(){b&&b(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let C=new XMLHttpRequest;C.open(o.method.toUpperCase(),o.url,!0),C.timeout=o.timeout;function y(){if(!C)return;let S=Ut.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),M={data:!u||u==="text"||u==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:S,config:e,request:C};hp(function(z){n(z),k()},function(z){r(z),k()},M),C=null}"onloadend"in C?C.onloadend=y:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(y)},C.onabort=function(){C&&(r(new ge("Request aborted",ge.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new ge("Network Error",ge.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let T=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded",M=o.transitional||rg;o.timeoutErrorMessage&&(T=o.timeoutErrorMessage),r(new ge(T,M.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,e,C)),C=null},i===void 0&&l.setContentType(null),"setRequestHeader"in C&&F.forEach(l.toJSON(),function(T,M){C.setRequestHeader(M,T)}),F.isUndefined(o.withCredentials)||(C.withCredentials=!!o.withCredentials),u&&u!=="json"&&(C.responseType=o.responseType),p&&([g,v]=Ps(p,!0),C.addEventListener("progress",g)),c&&C.upload&&([m,b]=Ps(c),C.upload.addEventListener("progress",m),C.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(f=S=>{C&&(r(!S||S.type?new _o(null,e,C):S),C.abort(),C=null)},o.cancelToken&&o.cancelToken.subscribe(f),o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f)));let w=J1(o.url);if(w&&Et.protocols.indexOf(w)===-1){r(new ge("Unsupported protocol "+w+":",ge.ERR_BAD_REQUEST,e));return}C.send(i||null)})};var cY=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o,i=function(p){if(!o){o=!0,u();let f=p instanceof Error?p:this.reason;r.abort(f instanceof ge?f:new _o(f instanceof Error?f.message:f))}},l=t&&setTimeout(()=>{l=null,i(new ge(`timeout ${t} of ms exceeded`,ge.ETIMEDOUT))},t),u=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(i):p.removeEventListener("abort",i)}),e=null)};e.forEach(p=>p.addEventListener("abort",i));let{signal:c}=r;return c.unsubscribe=()=>F.asap(u),c}},s6=cY;var pY=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},dY=async function*(e,t){for await(let n of fY(e))yield*pY(n,t)},fY=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},rk=(e,t,n,r)=>{let o=dY(e,t),i=0,l,u=c=>{l||(l=!0,r&&r(c))};return new ReadableStream({async pull(c){try{let{done:p,value:f}=await o.next();if(p){u(),c.close();return}let m=f.byteLength;if(n){let g=i+=m;n(g)}c.enqueue(new Uint8Array(f))}catch(p){throw u(p),p}},cancel(c){return u(c),o.return()}},{highWaterMark:2})};var sg=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",c6=sg&&typeof ReadableStream=="function",mY=sg&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),p6=(e,...t)=>{try{return!!e(...t)}catch{return!1}},hY=c6&&p6(()=>{let e=!1,t=new Request(Et.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),u6=64*1024,ok=c6&&p6(()=>F.isReadableStream(new Response("").body)),lg={stream:ok&&(e=>e.body)};sg&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!lg[t]&&(lg[t]=F.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ge(`Response type '${t}' is not supported`,ge.ERR_NOT_SUPPORT,r)})})})(new Response);var gY=async e=>{if(e==null)return 0;if(F.isBlob(e))return e.size;if(F.isSpecCompliantForm(e))return(await new Request(Et.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(F.isArrayBufferView(e)||F.isArrayBuffer(e))return e.byteLength;if(F.isURLSearchParams(e)&&(e=e+""),F.isString(e))return(await mY(e)).byteLength},bY=async(e,t)=>{let n=F.toFiniteNumber(e.getContentLength());return n??gY(t)},d6=sg&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:l,onDownloadProgress:u,onUploadProgress:c,responseType:p,headers:f,withCredentials:m="same-origin",fetchOptions:g}=ag(e);p=p?(p+"").toLowerCase():"text";let b=s6([o,i&&i.toAbortSignal()],l),v,k=b&&b.unsubscribe&&(()=>{b.unsubscribe()}),C;try{if(c&&hY&&n!=="get"&&n!=="head"&&(C=await bY(f,r))!==0){let M=new Request(t,{method:"POST",body:r,duplex:"half"}),R;if(F.isFormData(r)&&(R=M.headers.get("content-type"))&&f.setContentType(R),M.body){let[z,U]=Z1(C,Ps(ek(c)));r=rk(M.body,u6,z,U)}}F.isString(m)||(m=m?"include":"omit");let y="credentials"in Request.prototype;v=new Request(t,{...g,signal:b,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:y?m:void 0});let w=await fetch(v),S=ok&&(p==="stream"||p==="response");if(ok&&(u||S&&k)){let M={};["status","statusText","headers"].forEach(Y=>{M[Y]=w[Y]});let R=F.toFiniteNumber(w.headers.get("content-length")),[z,U]=u&&Z1(R,Ps(ek(u),!0))||[];w=new Response(rk(w.body,u6,z,()=>{U&&U(),k&&k()}),M)}p=p||"text";let T=await lg[F.findKey(lg,p)||"text"](w,e);return!S&&k&&k(),await new Promise((M,R)=>{hp(M,R,{data:T,headers:Ut.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:v})})}catch(y){throw k&&k(),y&&y.name==="TypeError"&&/fetch/i.test(y.message)?Object.assign(new ge("Network Error",ge.ERR_NETWORK,e,v),{cause:y.cause||y}):ge.from(y,y&&y.code,e,v)}});var ik={http:tg,xhr:l6,fetch:d6};F.forEach(ik,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var f6=e=>`- ${e}`,vY=e=>F.isFunction(e)||e===null||e===!1,ug={getAdapter:e=>{e=F.isArray(e)?e:[e];let{length:t}=e,n,r,o={};for(let i=0;i<t;i++){n=e[i];let l;if(r=n,!vY(n)&&(r=ik[(l=String(n)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${l}'`);if(r)break;o[l||"#"+i]=r}if(!r){let i=Object.entries(o).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build")),l=t?i.length>1?`since :
`+i.map(f6).join(`
`):" "+f6(i[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:ik};function ak(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _o(null,e)}function cg(e){return ak(e),e.headers=Ut.from(e.headers),e.data=fp.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ug.getAdapter(e.adapter||Os.adapter)(e).then(function(r){return ak(e),r.data=fp.call(e,e.transformResponse,r),r.headers=Ut.from(r.headers),r},function(r){return mp(r)||(ak(e),r&&r.response&&(r.response.data=fp.call(e,e.transformResponse,r.response),r.response.headers=Ut.from(r.response.headers))),Promise.reject(r)})}var pg="1.7.7";var lk={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{lk[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var m6={};lk.transitional=function(t,n,r){function o(i,l){return"[Axios v"+pg+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,u)=>{if(t===!1)throw new ge(o(l," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!m6[l]&&(m6[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,u):!0}};function yY(e,t,n){if(typeof e!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),o=r.length;for(;o-- >0;){let i=r[o],l=t[i];if(l){let u=e[i],c=u===void 0||l(u,i,e);if(c!==!0)throw new ge("option "+i+" must be "+c,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+i,ge.ERR_BAD_OPTION)}}var dg={assertOptions:yY,validators:lk};var ra=dg.validators,Ms=class{constructor(t){this.defaults=t,this.interceptors={request:new V1,response:new V1}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;let i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=oo(this.defaults,n);let{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&dg.assertOptions(r,{silentJSONParsing:ra.transitional(ra.boolean),forcedJSONParsing:ra.transitional(ra.boolean),clarifyTimeoutError:ra.transitional(ra.boolean)},!1),o!=null&&(F.isFunction(o)?n.paramsSerializer={serialize:o}:dg.assertOptions(o,{encode:ra.function,serialize:ra.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&F.merge(i.common,i[n.method]);i&&F.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=Ut.concat(l,i);let u=[],c=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(c=c&&k.synchronous,u.unshift(k.fulfilled,k.rejected))});let p=[];this.interceptors.response.forEach(function(k){p.push(k.fulfilled,k.rejected)});let f,m=0,g;if(!c){let v=[cg.bind(this),void 0];for(v.unshift.apply(v,u),v.push.apply(v,p),g=v.length,f=Promise.resolve(n);m<g;)f=f.then(v[m++],v[m++]);return f}g=u.length;let b=n;for(m=0;m<g;){let v=u[m++],k=u[m++];try{b=v(b)}catch(C){k.call(this,C);break}}try{f=cg.call(this,b)}catch(v){return Promise.reject(v)}for(m=0,g=p.length;m<g;)f=f.then(p[m++],p[m++]);return f}getUri(t){t=oo(this.defaults,t);let n=gp(t.baseURL,t.url);return pp(n,t.params,t.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(t){Ms.prototype[t]=function(n,r){return this.request(oo(r||{},{method:t,url:n,data:(r||{}).data}))}});F.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,u){return this.request(oo(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Ms.prototype[t]=n(),Ms.prototype[t+"Form"]=n(!0)});var bp=Ms;var sk=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});let r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i,l=new Promise(u=>{r.subscribe(u),i=u}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,u){r.reason||(r.reason=new _o(i,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){let t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},h6=sk;function uk(e){return function(n){return e.apply(null,n)}}function ck(e){return F.isObject(e)&&e.isAxiosError===!0}var pk={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pk).forEach(([e,t])=>{pk[t]=e});var g6=pk;function b6(e){let t=new bp(e),n=sp(bp.prototype.request,t);return F.extend(n,bp.prototype,t,{allOwnKeys:!0}),F.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return b6(oo(e,o))},n}var Ot=b6(Os);Ot.Axios=bp;Ot.CanceledError=_o;Ot.CancelToken=h6;Ot.isCancel=mp;Ot.VERSION=pg;Ot.toFormData=na;Ot.AxiosError=ge;Ot.Cancel=Ot.CanceledError;Ot.all=function(t){return Promise.all(t)};Ot.spread=uk;Ot.isAxiosError=ck;Ot.mergeConfig=oo;Ot.AxiosHeaders=Ut;Ot.formToJSON=e=>og(F.isHTMLForm(e)?new FormData(e):e);Ot.getAdapter=ug.getAdapter;Ot.HttpStatusCode=g6;Ot.default=Ot;var Ds=Ot;var{Axios:eve,AxiosError:tve,CanceledError:nve,isCancel:rve,CancelToken:ove,VERSION:ive,all:ave,Cancel:lve,isAxiosError:sve,spread:uve,toFormData:cve,AxiosHeaders:pve,HttpStatusCode:dve,formToJSON:fve,getAdapter:mve,mergeConfig:hve}=Ds;var oa=K(Ce(),1);var y6=K(Ve(),1),dk=(0,oa.createContext)([{sessionId:""},()=>{}]),v6=({children:e})=>{let[t,n]=(0,oa.useState)({sessionId:""}),[r]=(0,oa.useContext)(Ts);return(0,oa.useEffect)(()=>{},[r]),(0,y6.jsx)(dk.Provider,{value:[t,n],children:e})};var Rt=K(Ve(),1),Es=(0,Xe.createContext)({streamingState:[!1,()=>{}],readerRef:{current:null},controllerRef:{current:null}}),xY=()=>{let{query:{data:e},flatListRef:t}=(0,Xe.useContext)(ta),n=(0,Xe.useMemo)(()=>e.pages.flatMap(r=>r.items),[e]);return(0,Xe.useEffect)(()=>{t.current?.scrollToEnd()},[n]),(0,Rt.jsxs)("div",{className:On("prose flex flex-col gap-4 h-full",kY),children:[(0,Rt.jsx)(tw,{data:n,ref:t,renderItem:({item:r})=>(0,Rt.jsx)(B1,{...r}),ListFooterComponent:(0,Rt.jsx)(_Y,{}),showsVerticalScrollIndicator:!1,contentContainerStyle:{flexGrow:1,background:"hsl(var(--background))",paddingBottom:8},onScrollToIndexFailed:()=>{}}),(0,Rt.jsx)(SY,{})]})},wY=10,kY="prose-sm prose-h1:my-0 prose-h2:my-0 prose-h3:my-0 prose-h4:my-0 prose-h5:my-0 prose-h6:my-0 prose-p:my-0",SY=()=>{let{currentMessageInputState:[e,t],mutation:n,query:{data:r}}=(0,Xe.useContext)(ta),{streamingState:[o,i],readerRef:l,controllerRef:u}=(0,Xe.useContext)(Es),{replaceLastMessageInQueryData:c}=$h(),[p]=(0,Xe.useContext)(Ts),f=()=>e&&n.mutate(e),m=()=>{l.current?.cancel(),u.current?.close(),i(!1);let b=r.pages.flatMap(({items:v})=>v).filter(v=>v.sender==="bot").at(-1);b&&c((0,x6.cloneDeep)({...b,isStreamFinished:!0}))};return(0,Rt.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,Rt.jsx)("div",{className:"flex gap-2",children:[{label:"Take me to the website",onClick:()=>window.open(p.targetSite,"_blank")},{label:"Email me information",onClick:async()=>{}}].map((b,v)=>(0,Rt.jsx)(ls,{className:"flex-grow flex justify-center items-center bg-[#f0f0f0] rounded-full h-8 border-none hover:bg-[#f0f0f]/80 cursor-pointer",size:"sm",onClick:b.onClick,children:(0,Rt.jsx)("p",{className:"text-sm",children:b.label})},v))}),(0,Rt.jsxs)("div",{className:"flex gap-2",children:[(0,Rt.jsx)(sy,{className:"min-w-[200px] flex-1 border-[#cccccc] outline-[#cccccc]",value:e,onChange:b=>t(b.target.value),onKeyDown:b=>b.code.toLowerCase()==="enter"&&f()}),(0,Rt.jsx)(ls,{className:"h-full bg-[#efefef] hover:bg-[#efefef]/80 flex justify-center items-center border-[#cccccc] cursor-pointer outline-none",disabled:!o&&!e,onClick:o?m:f,children:(0,Rt.jsx)("p",{className:"text-sm",children:o?"Pause":"Send"})})]})]})},_Y=()=>{let{streamingState:[e]}=(0,Xe.useContext)(Es),{flatListRef:t}=(0,Xe.useContext)(ta);return(0,Xe.useEffect)(()=>{t.current?.scrollToEnd()},[e]),e&&(0,Rt.jsx)("div",{className:"m-4",children:(0,Rt.jsx)(TL,{})})},ta=(0,Xe.createContext)({query:{},mutation:{},currentMessageInputState:["",()=>{}],flatListRef:{}}),fk=["Chat messages"];function CY(){let e=(0,Xe.useState)(""),[t,n]=e,r=ho(),{addMessageToQueryData:o,replaceLastMessageInQueryData:i}=$h(),{streamingState:[l,u],readerRef:c,controllerRef:p}=(0,Xe.useContext)(Es),f=(0,Xe.useRef)(),[m,g]=(0,Xe.useContext)(Ts),b=IL(),[v,k]=(0,Xe.useContext)(dk),C=ny({queryKey:fk,queryFn:async({pageParam:T})=>({items:[],page:T+1}),getNextPageParam:(T,M,R)=>T.items.length<wY?null:Number(R)+1,initialData:{pages:[{items:[],page:0}],pageParams:[0]},initialPageParam:0,refetchOnWindowFocus:!1}),y=gc({mutationFn:()=>Ds.post(`${Yh}/chat/create`,{name:m.name,email:m.email,gender:m.gender,age:m.age,campaignId:m.campaignID}),onSuccess:({data:T,status:M})=>{b(T.message,M)||(g(R=>({...R,targetSite:T.targetSite})),o({id:Cs(),content:T.imageUrl,createdAt:new Date,isBanner:!0,isStreamFinished:!0,sender:"bot"}),k({sessionId:T.sessionId}))}}),w=gc({mutationFn:()=>Ds.post(`${Yh}/chat/initial`,{sessionId:v.sessionId}),onSuccess:({data:T,status:M})=>{b(T.message,M)||o({content:T.prompt,id:Cs(),createdAt:new Date,isBanner:!1,isStreamFinished:!0,sender:"bot",pills:T.pills.map(R=>({id:Cs(),content:R}))})}}),S=gc({mutationFn:T=>(u(!0),o({id:Cs(),content:T,createdAt:new Date,sender:"user"}),n(""),Ds.post(`${Yh}/chat/talk`,{sessionId:v.sessionId,userInput:`Please give more information about ${T}`})),onSuccess:({data:T,status:M})=>{b(T.message,M)||o({id:Cs(),content:T.message,createdAt:new Date,isBanner:!1,isStreamFinished:!0,sender:"bot"})},onSettled:()=>u(!1)});return(0,Xe.useEffect)(()=>{y.mutate()},[]),(0,Xe.useEffect)(()=>{v.sessionId&&w.mutate()},[v.sessionId]),(0,Rt.jsx)(ta.Provider,{value:{query:C,mutation:S,currentMessageInputState:e,flatListRef:f},children:(0,Rt.jsx)(xY,{})})}function $h(){let e=ho();function t(r){e.setQueryData(fk,o=>{if(!o)return o;let i=[...o.pages],l=i[i.length-1],u={...l,items:[...l.items,r]};return i[i.length-1]=u,{...o,pages:i}})}function n(r){r={...r},e.setQueryData(fk,o=>{if(!o)return o;let i=[...o.pages],l=i[i.length-1],u=[...l.items];u.length>0?u[u.length-1]=r:u.push(r);let c={...l,items:u};return i[i.length-1]=c,{...o,pages:i}})}return{addMessageToQueryData:t,replaceLastMessageInQueryData:n}}function mk(){let e=(0,Xe.useState)(!1),t=(0,Xe.useRef)(null),n=(0,Xe.useRef)(null);return(0,Rt.jsx)(Es.Provider,{value:{streamingState:e,readerRef:t,controllerRef:n},children:(0,Rt.jsx)(CY,{})})}var w6="root";var hk=K(Ve(),1);function gk(){return(0,k6.useEffect)(()=>{},[]),(0,hk.jsx)("div",{className:"w-full h-full bg-[#c7e0f4] p-4 m-4 flex flex-col gap-4 border-solid border-[1px] border-[#ccc]",children:(0,hk.jsx)(mk,{})})}var xt=K(Ce()),ze=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"}),Kve=Object.freeze({AND:"and",OR:"or"});function vp(e){"@babel/helpers - typeof";return vp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vp(e)}function EY(e,t){if(vp(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function C6(e){var t=EY(e,"string");return vp(t)==="symbol"?t:String(t)}function pr(e,t,n){return t=C6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S6(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C6(r.key),r)}}function RY(e,t,n){return t&&S6(e.prototype,t),n&&S6(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function TY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var xn=RY(function e(){TY(this,e)});pr(xn,"ripple",!1);pr(xn,"inputStyle","outlined");pr(xn,"locale","en");pr(xn,"appendTo",null);pr(xn,"cssTransition",!0);pr(xn,"autoZIndex",!0);pr(xn,"hideOverlaysOnDocumentScrolling",!1);pr(xn,"nonce",null);pr(xn,"nullSortOrder",1);pr(xn,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});pr(xn,"pt",void 0);pr(xn,"filterMatchModeOptions",{text:[ze.STARTS_WITH,ze.CONTAINS,ze.NOT_CONTAINS,ze.ENDS_WITH,ze.EQUALS,ze.NOT_EQUALS],numeric:[ze.EQUALS,ze.NOT_EQUALS,ze.LESS_THAN,ze.LESS_THAN_OR_EQUAL_TO,ze.GREATER_THAN,ze.GREATER_THAN_OR_EQUAL_TO],date:[ze.DATE_IS,ze.DATE_IS_NOT,ze.DATE_BEFORE,ze.DATE_AFTER]});pr(xn,"changeTheme",function(e,t,n,r){var o,i=document.getElementById(n);if(!i)throw Error("Element with id ".concat(n," not found."));var l=i.getAttribute("href").replace(e,t),u=document.createElement("link");u.setAttribute("rel","stylesheet"),u.setAttribute("id",n),u.setAttribute("href",l),u.addEventListener("load",function(){r&&r()}),(o=i.parentNode)===null||o===void 0||o.replaceChild(u,i)});var Gve=Object.freeze({SUCCESS:"success",INFO:"info",WARN:"warn",ERROR:"error",SECONDARY:"secondary",CONTRAST:"contrast"}),Qve=Object.freeze({ADDRESS_BOOK:"pi pi-address-book",ALIGN_CENTER:"pi pi-align-center",ALIGN_JUSTIFY:"pi pi-align-justify",ALIGN_LEFT:"pi pi-align-left",ALIGN_RIGHT:"pi pi-align-right",AMAZON:"pi pi-amazon",ANDROID:"pi pi-android",ANGLE_DOUBLE_DOWN:"pi pi-angle-double-down",ANGLE_DOUBLE_LEFT:"pi pi-angle-double-left",ANGLE_DOUBLE_RIGHT:"pi pi-angle-double-right",ANGLE_DOUBLE_UP:"pi pi-angle-double-up",ANGLE_DOWN:"pi pi-angle-down",ANGLE_LEFT:"pi pi-angle-left",ANGLE_RIGHT:"pi pi-angle-right",ANGLE_UP:"pi pi-angle-up",APPLE:"pi pi-apple",ARROW_CIRCLE_DOWN:"pi pi-arrow-circle-down",ARROW_CIRCLE_LEFT:"pi pi-arrow-circle-left",ARROW_CIRCLE_RIGHT:"pi pi-arrow-circle-right",ARROW_CIRCLE_UP:"pi pi-arrow-circle-up",ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER:"pi pi-arrow-down-left-and-arrow-up-right-to-center",ARROW_DOWN_LEFT:"pi pi-arrow-down-left",ARROW_DOWN_RIGHT:"pi pi-arrow-down-right",ARROW_DOWN:"pi pi-arrow-down",ARROW_LEFT:"pi pi-arrow-left",ARROW_RIGHT_ARROW_LEFT:"pi pi-arrow-right-arrow-left",ARROW_RIGHT:"pi pi-arrow-right",ARROW_UP_LEFT:"pi pi-arrow-up-left",ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER:"pi pi-arrow-up-right-and-arrow-down-left-from-center",ARROW_UP_RIGHT:"pi pi-arrow-up-right",ARROW_UP:"pi pi-arrow-up",ARROWS_ALT:"pi pi-arrows-alt",ARROWS_H:"pi pi-arrows-h",ARROWS_V:"pi pi-arrows-v",ASTERISK:"pi pi-asterisk",AT:"pi pi-at",BACKWARD:"pi pi-backward",BAN:"pi pi-ban",BARCODE:"pi pi-barcode",BARS:"pi pi-bars",BELL_SLASH:"pi pi-bell-slash",BELL:"pi pi-bell",BITCOIN:"pi pi-bitcoin",BOLT:"pi pi-bolt",BOOK:"pi pi-book",BOOKMARK_FILL:"pi pi-bookmark-fill",BOOKMARK:"pi pi-bookmark",BOX:"pi pi-box",BRIEFCASE:"pi pi-briefcase",BUILDING_COLUMNS:"pi pi-building-columns",BUILDING:"pi pi-building",BULLSEYE:"pi pi-bullseye",CALCULATOR:"pi pi-calculator",CALENDAR_CLOCK:"pi pi-calendar-clock",CALENDAR_MINUS:"pi pi-calendar-minus",CALENDAR_PLUS:"pi pi-calendar-plus",CALENDAR_TIMES:"pi pi-calendar-times",CALENDAR:"pi pi-calendar",CAMERA:"pi pi-camera",CAR:"pi pi-car",CARET_DOWN:"pi pi-caret-down",CARET_LEFT:"pi pi-caret-left",CARET_RIGHT:"pi pi-caret-right",CARET_UP:"pi pi-caret-up",CART_ARROW_DOWN:"pi pi-cart-arrow-down",CART_MINUS:"pi pi-cart-minus",CART_PLUS:"pi pi-cart-plus",CHART_BAR:"pi pi-chart-bar",CHART_LINE:"pi pi-chart-line",CHART_PIE:"pi pi-chart-pie",CHART_SCATTER:"pi pi-chart-scatter",CHECK_CIRCLE:"pi pi-check-circle",CHECK_SQUARE:"pi pi-check-square",CHECK:"pi pi-check",CHEVRON_CIRCLE_DOWN:"pi pi-chevron-circle-down",CHEVRON_CIRCLE_LEFT:"pi pi-chevron-circle-left",CHEVRON_CIRCLE_RIGHT:"pi pi-chevron-circle-right",CHEVRON_CIRCLE_UP:"pi pi-chevron-circle-up",CHEVRON_DOWN:"pi pi-chevron-down",CHEVRON_LEFT:"pi pi-chevron-left",CHEVRON_RIGHT:"pi pi-chevron-right",CHEVRON_UP:"pi pi-chevron-up",CIRCLE_FILL:"pi pi-circle-fill",CIRCLE_OFF:"pi pi-circle-off",CIRCLE_ON:"pi pi-circle-on",CIRCLE:"pi pi-circle",CLIPBOARD:"pi pi-clipboard",CLOCK:"pi pi-clock",CLONE:"pi pi-clone",CLOUD_DOWNLOAD:"pi pi-cloud-download",CLOUD_UPLOAD:"pi pi-cloud-upload",CLOUD:"pi pi-cloud",CODE:"pi pi-code",COG:"pi pi-cog",COMMENT:"pi pi-comment",COMMENTS:"pi pi-comments",COMPASS:"pi pi-compass",COPY:"pi pi-copy",CREDIT_CARD:"pi pi-credit-card",CROWN:"pi pi-crown",DATABASE:"pi pi-database",DELETE_LEFT:"pi pi-delete-left",DESKTOP:"pi pi-desktop",DIRECTIONS_ALT:"pi pi-directions-alt",DIRECTIONS:"pi pi-directions",DISCORD:"pi pi-discord",DOLLAR:"pi pi-dollar",DOWNLOAD:"pi pi-download",EJECT:"pi pi-eject",ELLIPSIS_H:"pi pi-ellipsis-h",ELLIPSIS_V:"pi pi-ellipsis-v",ENVELOPE:"pi pi-envelope",EQUALS:"pi pi-equals",ERASER:"pi pi-eraser",ETHEREUM:"pi pi-ethereum",EURO:"pi pi-euro",EXCLAMATION_CIRCLE:"pi pi-exclamation-circle",EXCLAMATION_TRIANGLE:"pi pi-exclamation-triangle",EXPAND:"pi pi-expand",EXTERNAL_LINK:"pi pi-external-link",EYE_SLASH:"pi pi-eye-slash",EYE:"pi pi-eye",FACE_SMILE:"pi pi-face-smile",FACEBOOK:"pi pi-facebook",FAST_BACKWARD:"pi pi-fast-backward",FAST_FORWARD:"pi pi-fast-forward",FILE_ARROW_UP:"pi pi-file-arrow-up",FILE_CHECK:"pi pi-file-check",FILE_EDIT:"pi pi-file-edit",FILE_EXCEL:"pi pi-file-excel",FILE_EXPORT:"pi pi-file-export",FILE_IMPORT:"pi pi-file-import",FILE_O:"pi pi-file-o",FILE_PDF:"pi pi-file-pdf",FILE_PLUS:"pi pi-file-plus",FILE_WORD:"pi pi-file-word",FILE:"pi pi-file",FILTER_FILL:"pi pi-filter-fill",FILTER_SLASH:"pi pi-filter-slash",FILTER:"pi pi-filter",FLAG_FILL:"pi pi-flag-fill",FLAG:"pi pi-flag",FOLDER_OPEN:"pi pi-folder-open",FOLDER_PLUS:"pi pi-folder-plus",FOLDER:"pi pi-folder",FORWARD:"pi pi-forward",GAUGE:"pi pi-gauge",GIFT:"pi pi-gift",GITHUB:"pi pi-github",GLOBE:"pi pi-globe",GOOGLE:"pi pi-google",GRADUATION_CAP:"pi pi-graduation-cap",HAMMER:"pi pi-hammer",HASHTAG:"pi pi-hashtag",HEADPHONES:"pi pi-headphones",HEART_FILL:"pi pi-heart-fill",HEART:"pi pi-heart",HISTORY:"pi pi-history",HOME:"pi pi-home",HOURGLASS:"pi pi-hourglass",ID_CARD:"pi pi-id-card",IMAGE:"pi pi-image",IMAGES:"pi pi-images",INBOX:"pi pi-inbox",INDIAN_RUPEE:"pi pi-indian-rupee",INFO_CIRCLE:"pi pi-info-circle",INFO:"pi pi-info",INSTAGRAM:"pi pi-instagram",KEY:"pi pi-key",LANGUAGE:"pi pi-language",LIGHTBULB:"pi pi-lightbulb",LINK:"pi pi-link",LINKEDIN:"pi pi-linkedin",LIST_CHECK:"pi pi-list-check",LIST:"pi pi-list",LOCK_OPEN:"pi pi-lock-open",LOCK:"pi pi-lock",MAP_MARKER:"pi pi-map-marker",MAP:"pi pi-map",MARS:"pi pi-mars",MEGAPHONE:"pi pi-megaphone",MICROCHIP_AI:"pi pi-microchip-ai",MICROCHIP:"pi pi-microchip",MICROPHONE:"pi pi-microphone",MICROSOFT:"pi pi-microsoft",MINUS_CIRCLE:"pi pi-minus-circle",MINUS:"pi pi-minus",MOBILE:"pi pi-mobile",MONEY_BILL:"pi pi-money-bill",MOON:"pi pi-moon",OBJECTS_COLUMN:"pi pi-objects-column",PALETTE:"pi pi-palette",PAPERCLIP:"pi pi-paperclip",PAUSE_CIRCLE:"pi pi-pause-circle",PAUSE:"pi pi-pause",PAYPAL:"pi pi-paypal",PEN_TO_SQUARE:"pi pi-pen-to-square",PENCIL:"pi pi-pencil",PERCENTAGE:"pi pi-percentage",PHONE:"pi pi-phone",PINTEREST:"pi pi-pinterest",PLAY_CIRCLE:"pi pi-play-circle",PLAY:"pi pi-play",PLUS_CIRCLE:"pi pi-plus-circle",PLUS:"pi pi-plus",POUND:"pi pi-pound",POWER_OFF:"pi pi-power-off",PRIME:"pi pi-prime",PRINT:"pi pi-print",QRCODE:"pi pi-qrcode",QUESTION_CIRCLE:"pi pi-question-circle",QUESTION:"pi pi-question",RECEIPT:"pi pi-receipt",REDDIT:"pi pi-reddit",REFRESH:"pi pi-refresh",REPLAY:"pi pi-replay",REPLY:"pi pi-reply",SAVE:"pi pi-save",SEARCH_MINUS:"pi pi-search-minus",SEARCH_PLUS:"pi pi-search-plus",SEARCH:"pi pi-search",SEND:"pi pi-send",SERVER:"pi pi-server",SHARE_ALT:"pi pi-share-alt",SHIELD:"pi pi-shield",SHOP:"pi pi-shop",SHOPPING_BAG:"pi pi-shopping-bag",SHOPPING_CART:"pi pi-shopping-cart",SIGN_IN:"pi pi-sign-in",SIGN_OUT:"pi pi-sign-out",SITEMAP:"pi pi-sitemap",SLACK:"pi pi-slack",SLIDERS_H:"pi pi-sliders-h",SLIDERS_V:"pi pi-sliders-v",SORT_ALPHA_DOWN_ALT:"pi pi-sort-alpha-down-alt",SORT_ALPHA_DOWN:"pi pi-sort-alpha-down",SORT_ALPHA_UP_ALT:"pi pi-sort-alpha-up-alt",SORT_ALPHA_UP:"pi pi-sort-alpha-up",SORT_ALT_SLASH:"pi pi-sort-alt-slash",SORT_ALT:"pi pi-sort-alt",SORT_AMOUNT_DOWN_ALT:"pi pi-sort-amount-down-alt",SORT_AMOUNT_DOWN:"pi pi-sort-amount-down",SORT_AMOUNT_UP_ALT:"pi pi-sort-amount-up-alt",SORT_AMOUNT_UP:"pi pi-sort-amount-up",SORT_DOWN_FILL:"pi pi-sort-down-fill",SORT_DOWN:"pi pi-sort-down",SORT_NUMERIC_DOWN_ALT:"pi pi-sort-numeric-down-alt",SORT_NUMERIC_DOWN:"pi pi-sort-numeric-down",SORT_NUMERIC_UP_ALT:"pi pi-sort-numeric-up-alt",SORT_NUMERIC_UP:"pi pi-sort-numeric-up",SORT_UP_FILL:"pi pi-sort-up-fill",SORT_UP:"pi pi-sort-up",SORT:"pi pi-sort",SPARKLES:"pi pi-sparkles",SPINNER_DOTTED:"pi pi-spinner-dotted",SPINNER:"pi pi-spinner",STAR_FILL:"pi pi-star-fill",STAR_HALF_FILL:"pi pi-star-half-fill",STAR_HALF:"pi pi-star-half",STAR:"pi pi-star",STEP_BACKWARD_ALT:"pi pi-step-backward-alt",STEP_BACKWARD:"pi pi-step-backward",STEP_FORWARD_ALT:"pi pi-step-forward-alt",STEP_FORWARD:"pi pi-step-forward",STOP_CIRCLE:"pi pi-stop-circle",STOP:"pi pi-stop",STOPWATCH:"pi pi-stopwatch",SUN:"pi pi-sun",SYNC:"pi pi-sync",TABLE:"pi pi-table",TABLET:"pi pi-tablet",TAG:"pi pi-tag",TAGS:"pi pi-tags",TELEGRAM:"pi pi-telegram",TH_LARGE:"pi pi-th-large",THUMBS_DOWN_FILL:"pi pi-thumbs-down-fill",THUMBS_DOWN:"pi pi-thumbs-down",THUMBS_UP_FILL:"pi pi-thumbs-up-fill",THUMBS_UP:"pi pi-thumbs-up",THUMBTACK:"pi pi-thumbtack",TICKET:"pi pi-ticket",TIKTOK:"pi pi-tiktok",TIMES_CIRCLE:"pi pi-times-circle",TIMES:"pi pi-times",TRASH:"pi pi-trash",TROPHY:"pi pi-trophy",TRUCK:"pi pi-truck",TURKISH_LIRA:"pi pi-turkish-lira",TWITCH:"pi pi-twitch",TWITTER:"pi pi-twitter",UNDO:"pi pi-undo",UNLOCK:"pi pi-unlock",UPLOAD:"pi pi-upload",USER_EDIT:"pi pi-user-edit",USER_MINUS:"pi pi-user-minus",USER_PLUS:"pi pi-user-plus",USER:"pi pi-user",USERS:"pi pi-users",VENUS:"pi pi-venus",VERIFIED:"pi pi-verified",VIDEO:"pi pi-video",VIMEO:"pi pi-vimeo",VOLUME_DOWN:"pi pi-volume-down",VOLUME_OFF:"pi pi-volume-off",VOLUME_UP:"pi pi-volume-up",WALLET:"pi pi-wallet",WAREHOUSE:"pi pi-warehouse",WAVE_PULSE:"pi pi-wave-pulse",WHATSAPP:"pi pi-whatsapp",WIFI:"pi pi-wifi",WINDOW_MAXIMIZE:"pi pi-window-maximize",WINDOW_MINIMIZE:"pi pi-window-minimize",WRENCH:"pi pi-wrench",YOUTUBE:"pi pi-youtube"}),$ve=Object.freeze({DESC:-1,UNSORTED:0,ASC:1});function IY(e){if(Array.isArray(e))return e}function AY(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,l,u=[],c=!0,p=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(f){p=!0,o=f}finally{try{if(!c&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(p)throw o}}return u}}function _6(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function OY(e,t){if(e){if(typeof e=="string")return _6(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _6(e,t)}}function LY(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pn(e,t){return IY(e)||AY(e,t)||OY(e,t)||LY()}var PY=xt.default.createContext(),E6=function(t){var n=t.value||{},r=(0,xt.useState)(n.ripple||!1),o=Pn(r,2),i=o[0],l=o[1],u=(0,xt.useState)(n.inputStyle||"outlined"),c=Pn(u,2),p=c[0],f=c[1],m=(0,xt.useState)(n.locale||"en"),g=Pn(m,2),b=g[0],v=g[1],k=(0,xt.useState)(n.appendTo||null),C=Pn(k,2),y=C[0],w=C[1],S=(0,xt.useState)(n.styleContainer||null),T=Pn(S,2),M=T[0],R=T[1],z=(0,xt.useState)(n.cssTransition||!0),U=Pn(z,2),Y=U[0],P=U[1],ae=(0,xt.useState)(n.autoZIndex||!0),J=Pn(ae,2),$=J[0],re=J[1],te=(0,xt.useState)(n.hideOverlaysOnDocumentScrolling||!1),he=Pn(te,2),Le=he[0],De=he[1],Pe=(0,xt.useState)(n.nonce||null),A=Pn(Pe,2),Ue=A[0],nn=A[1],O=(0,xt.useState)(n.nullSortOrder||1),it=Pn(O,2),Mn=it[0],Dn=it[1],wn=(0,xt.useState)(n.zIndex||{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200}),tt=Pn(wn,2),kn=tt[0],Lt=tt[1],Sn=(0,xt.useState)(n.ptOptions||{mergeSections:!0,mergeProps:!0}),at=Pn(Sn,2),Nn=at[0],ai=at[1],Yt=(0,xt.useState)(n.pt||void 0),zr=Pn(Yt,2),Co=zr[0],dr=zr[1],Pt=(0,xt.useState)(n.unstyled||!1),zn=Pn(Pt,2),Fr=zn[0],li=zn[1],fr=(0,xt.useState)(n.filterMatchModeOptions||{text:[ze.STARTS_WITH,ze.CONTAINS,ze.NOT_CONTAINS,ze.ENDS_WITH,ze.EQUALS,ze.NOT_EQUALS],numeric:[ze.EQUALS,ze.NOT_EQUALS,ze.LESS_THAN,ze.LESS_THAN_OR_EQUAL_TO,ze.GREATER_THAN,ze.GREATER_THAN_OR_EQUAL_TO],date:[ze.DATE_IS,ze.DATE_IS_NOT,ze.DATE_BEFORE,ze.DATE_AFTER]}),Eo=Pn(fr,2),mr=Eo[0],H=Eo[1],X=function(Ae,Tt,Ht,Mt){var rn,Wt=document.getElementById(Ht);if(!Wt)throw Error("Element with id ".concat(Ht," not found."));var qt=Wt.getAttribute("href").replace(Ae,Tt),on=document.createElement("link");on.setAttribute("rel","stylesheet"),on.setAttribute("id",Ht),on.setAttribute("href",qt),on.addEventListener("load",function(){Mt&&Mt()}),(rn=Wt.parentNode)===null||rn===void 0||rn.replaceChild(on,Wt)};xt.default.useEffect(function(){xn.ripple=i},[i]),xt.default.useEffect(function(){xn.inputStyle=p},[p]),xt.default.useEffect(function(){xn.locale=b},[b]);var ue={changeTheme:X,ripple:i,setRipple:l,inputStyle:p,setInputStyle:f,locale:b,setLocale:v,appendTo:y,setAppendTo:w,styleContainer:M,setStyleContainer:R,cssTransition:Y,setCssTransition:P,autoZIndex:$,setAutoZIndex:re,hideOverlaysOnDocumentScrolling:Le,setHideOverlaysOnDocumentScrolling:De,nonce:Ue,setNonce:nn,nullSortOrder:Mn,setNullSortOrder:Dn,zIndex:kn,setZIndex:Lt,ptOptions:Nn,setPtOptions:ai,pt:Co,setPt:dr,filterMatchModeOptions:mr,setFilterMatchModeOptions:H,unstyled:Fr,setUnstyled:li};return xt.default.createElement(PY.Provider,{value:ue},t.children)};var R6=document.createElement("style");R6.textContent=`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

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
.inline-flex{
    display: inline-flex;
}
.grid{
    display: grid;
}
.h-10{
    height: 2.5rem;
}
.h-11{
    height: 2.75rem;
}
.h-2\\.5{
    height: 0.625rem;
}
.h-32{
    height: 8rem;
}
.h-4{
    height: 1rem;
}
.h-8{
    height: 2rem;
}
.h-9{
    height: 2.25rem;
}
.h-full{
    height: 100%;
}
.w-10{
    width: 2.5rem;
}
.w-2\\.5{
    width: 0.625rem;
}
.w-full{
    width: 100%;
}
.min-w-\\[200px\\]{
    min-width: 200px;
}
.max-w-\\[80\\%\\]{
    max-width: 80%;
}
.flex-1{
    flex: 1 1 0%;
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
.cursor-pointer{
    cursor: pointer;
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
.justify-center{
    justify-content: center;
}
.gap-2{
    gap: 0.5rem;
}
.gap-4{
    gap: 1rem;
}
.whitespace-nowrap{
    white-space: nowrap;
}
.text-wrap{
    text-wrap: wrap;
}
.rounded{
    border-radius: 0.25rem;
}
.rounded-full{
    border-radius: 9999px;
}
.rounded-md{
    border-radius: calc(var(--radius) - 2px);
}
.border{
    border-width: 1px;
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
.border-none{
    border-style: none;
}
.border-\\[\\#79ce78\\]{
    --tw-border-opacity: 1;
    border-color: rgb(121 206 120 / var(--tw-border-opacity));
}
.border-\\[\\#ccc\\]{
    --tw-border-opacity: 1;
    border-color: rgb(204 204 204 / var(--tw-border-opacity));
}
.border-\\[\\#cccccc\\]{
    --tw-border-opacity: 1;
    border-color: rgb(204 204 204 / var(--tw-border-opacity));
}
.border-\\[\\#e1c1c1\\]{
    --tw-border-opacity: 1;
    border-color: rgb(225 193 193 / var(--tw-border-opacity));
}
.border-destructive{
    border-color: hsl(var(--destructive));
}
.border-input{
    border-color: hsl(var(--input));
}
.border-success{
    border-color: hsl(var(--success));
}
.bg-\\[\\#c7e0f4\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(199 224 244 / var(--tw-bg-opacity));
}
.bg-\\[\\#dbe8ed\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(219 232 237 / var(--tw-bg-opacity));
}
.bg-\\[\\#e1c1c1\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(225 193 193 / var(--tw-bg-opacity));
}
.bg-\\[\\#eaf7e8\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(234 247 232 / var(--tw-bg-opacity));
}
.bg-\\[\\#efefef\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(239 239 239 / var(--tw-bg-opacity));
}
.bg-\\[\\#f0f0f0\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(240 240 240 / var(--tw-bg-opacity));
}
.bg-\\[\\#fff9e8\\]{
    --tw-bg-opacity: 1;
    background-color: rgb(255 249 232 / var(--tw-bg-opacity));
}
.bg-background{
    background-color: hsl(var(--background));
}
.bg-destructive{
    background-color: hsl(var(--destructive));
}
.bg-destructive\\/5{
    background-color: hsl(var(--destructive) / 0.05);
}
.bg-primary{
    background-color: hsl(var(--primary));
}
.bg-secondary{
    background-color: hsl(var(--secondary));
}
.bg-success\\/5{
    background-color: hsl(var(--success) / 0.05);
}
.bg-white\\/50{
    background-color: rgb(255 255 255 / 0.5);
}
.object-cover{
    object-fit: cover;
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
.px-3{
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.px-4{
    padding-left: 1rem;
    padding-right: 1rem;
}
.px-8{
    padding-left: 2rem;
    padding-right: 2rem;
}
.py-2{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
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
.font-medium{
    font-weight: 500;
}
.text-black{
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-destructive{
    color: hsl(var(--destructive));
}
.text-destructive-foreground{
    color: hsl(var(--destructive-foreground));
}
.text-primary{
    color: hsl(var(--primary));
}
.text-primary-foreground{
    color: hsl(var(--primary-foreground));
}
.text-secondary-foreground{
    color: hsl(var(--secondary-foreground));
}
.text-success{
    color: hsl(var(--success));
}
.underline-offset-4{
    text-underline-offset: 4px;
}
.outline-none{
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.outline{
    outline-style: solid;
}
.outline-\\[\\#cccccc\\]{
    outline-color: #cccccc;
}
.ring-offset-background{
    --tw-ring-offset-color: hsl(var(--background));
}
.blur-\\[5px\\]{
    --tw-blur: blur(5px);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition-colors{
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
@keyframes enter{

    from{
        opacity: var(--tw-enter-opacity, 1);
        transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
    }
}
@keyframes exit{

    to{
        opacity: var(--tw-exit-opacity, 1);
        transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
    }
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

.pills-container > button:nth-child(odd):last-child{
    grid-column: span 2 / span 2;
}

.file\\:border-0::file-selector-button{
    border-width: 0px;
}

.file\\:bg-transparent::file-selector-button{
    background-color: transparent;
}

.file\\:text-sm::file-selector-button{
    font-size: 0.8rem;
}

.file\\:font-medium::file-selector-button{
    font-weight: 500;
}

.file\\:text-foreground::file-selector-button{
    color: hsl(var(--foreground));
}

.placeholder\\:text-muted-foreground::placeholder{
    color: hsl(var(--muted-foreground));
}

.hover\\:bg-\\[\\#dbe8ed\\]\\/70:hover{
    background-color: rgb(219 232 237 / 0.7);
}

.hover\\:bg-\\[\\#efefef\\]\\/80:hover{
    background-color: rgb(239 239 239 / 0.8);
}

.hover\\:bg-accent:hover{
    background-color: hsl(var(--accent));
}

.hover\\:bg-destructive\\/90:hover{
    background-color: hsl(var(--destructive) / 0.9);
}

.hover\\:bg-primary\\/90:hover{
    background-color: hsl(var(--primary) / 0.9);
}

.hover\\:bg-secondary\\/80:hover{
    background-color: hsl(var(--secondary) / 0.8);
}

.hover\\:text-accent-foreground:hover{
    color: hsl(var(--accent-foreground));
}

.hover\\:underline:hover{
    text-decoration-line: underline;
}

.focus-visible\\:outline-none:focus-visible{
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.focus-visible\\:ring-2:focus-visible{
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-ring:focus-visible{
    --tw-ring-color: hsl(var(--ring));
}

.focus-visible\\:ring-offset-2:focus-visible{
    --tw-ring-offset-width: 2px;
}

.disabled\\:pointer-events-none:disabled{
    pointer-events: none;
}

.disabled\\:cursor-not-allowed:disabled{
    cursor: not-allowed;
}

.disabled\\:opacity-50:disabled{
    opacity: 0.5;
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
}`;document.head.appendChild(R6);var T6=document.createElement("style");T6.textContent=`:root {
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
`;document.head.appendChild(T6);var ii=K(Ve(),1),MY=new $v;function I6(){return(0,ii.jsx)(ii.Fragment,{children:(0,ii.jsx)(ty,{client:MY,children:(0,ii.jsx)(OL,{children:(0,ii.jsx)(v6,{children:(0,ii.jsx)(E6,{children:(0,ii.jsx)(gk,{})})})})})})}var O6=K(Ve(),1),DY=A6.default.createRoot(document.getElementById(w6));DY.render((0,O6.jsx)(I6,{}));})();
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
