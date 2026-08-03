var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return te(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function E(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(E(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function T(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?ne():ee=!1}}}var ne;if(typeof y==`function`)ne=function(){y(T)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=T,ne=function(){ie.postMessage(null)}}else ne=function(){_(T,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ne()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function E(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function k(e){return{current:e}}function fe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function A(e,t){de++,ue[de]=e.current,e.current=t}var pe=k(null),me=k(null),he=k(null),ge=k(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=le)}var xe,Se;function j(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?j(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return j(e.type);case 16:return j(`Lazy`);case 13:return e.child!==t&&t!==null?j(`Suspense Fallback`):j(`Suspense`);case 19:return j(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return j(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(wt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function M(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function N(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&M(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Ar(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};gn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function P(e,t){Qr.set(e,t),kt(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var F={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=di(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=di(13,n,t,a),e.elementType=w,e.lanes=o,e;case te:return e=di(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case T:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-We(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=k(null),Ji=null,Yi=null;function Xi(e,t,n){A(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,fe(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=D.S;D.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=k(null);function xa(){var e=ba.current;return e===null?q.pooledCache:e}function Sa(e,t){t===null?A(ba,ba.current):A(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case ne:return t=Aa(t),f(e,t,n)}if(ce(t)||E(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Aa(n),p(e,t,n,r)}if(ce(n)||E(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Aa(r),m(e,t,n,r,i)}if(ce(r)||E(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=Aa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(E(o)){if(l=E(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=k(null),to=k(0);function no(e,t){e=Ul,A(to,e),A(eo,t),Ul=e|t.baseLanes}function ro(){A(to,Ul),A(eo,eo.current)}function R(){Ul=to.current,fe(eo),fe(to)}var io=k(null),ao=null;function oo(e){var t=e.alternate;A(z,z.current&1),A(io,e),ao===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){A(z,z.current),A(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(A(z,z.current),A(io,e),ao===null&&(ao=e)):lo(e)}function lo(){A(z,z.current),A(io,io.current)}function uo(e){fe(io),ao===e&&(ao=null),fe(z)}var z=k(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){D.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=ka(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((po&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function Go(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=q.formState;if(n!==null){a:{var r=B;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return kr(n,t)?n:eo.current===null?!(po&42)||po&1073741824&&!(Y&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),kr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ai(e,t,i,0),q===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var zs={readContext:ra,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=q.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ei(e)}function Ys(e){console.error(e)}function Xs(e){ei(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=io.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),Ja(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),lo(t)):(Sa(t,a.cachePool),no(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),co(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=q,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=F,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):F,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=F,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=F,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(z.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(a?oo(t):lo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=q,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=z.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,A(z,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function Mc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(z,z.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===T){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=q,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=pe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=pe.current,Ui(t))Vi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(fe(z),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return A(z,z.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return U(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=z.current,A(z,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return uo(t),R(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(z),null;case 4:return ve(),null;case 10:return Zi(t.type),null;case 22:case 23:return uo(t),R(),e!==null&&fe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:fe(z);break;case 10:Zi(t.type);break;case 22:case 23:uo(t),R(),e!==null&&fe(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),M(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Hc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:bl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),tl=i,nl=a}break;case 30:break;default:bl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,G=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=G;Zd(n.type)&&(W=n.stateNode,G=!1),ll(e,t,n),pf(n.stateNode),W=r,G=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=G,W=null,ll(e,t,n),W=r,G=i,W!==null)if(G)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(G?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=G,W=n.stateNode.containerInfo,G=!0,ll(e,t,n),W=r,G=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ll(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ll(e,t,n),nl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,G=!1;break a}break;case 5:W=c.stateNode,G=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,G=!0;break a}c=c.return}if(W===null)throw Error(i(160));ul(o,s,a),W=null,G=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,hl(t,e),nl=d,tl=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),xl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Hc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Kc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Hc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Ll={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:D.T===null?ut():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||L){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},jl(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Yi=Ji=null,ko(e),Pa=null,Fa=0,e=J;for(;e!==null;)Vc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=pi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ii(),n}function Cu(e,t){B=null,D.H=zs,t===wa||t===Ea?(t=Ma(),X=3):t===Ta?(t=Ma(),X=4):X=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Zs(e,xi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(Y&4194048)===Y?ao===null:(Y&62914560)===Y||Y&536870912?e===ao:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&io.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,ii()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Me()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Oa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,ii(),Wl):0}function ju(){for(;J!==null&&!Ae();)Mu(J)}function Mu(e){var t=Nc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:ko(t);default:Vc(n,t),t=J=mi(t,Ul),t=Nc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Yi=Ji=null,ko(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,Y)){Wl=1,Zs(e,xi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Zs(e,xi(n,e.current)),J=null;return}t.flags&32768?(L||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=zc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=K,K|=4;try{ol(e,t,n)}finally{K=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&M(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{sl(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Me()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=si(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];P(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}P(Gr,`onAnimationEnd`),P(Kr,`onAnimationIteration`),P(qr,`onAnimationStart`),P(`dblclick`,`onDoubleClick`),P(`focusin`,`onFocus`),P(`focusout`,`onBlur`),P(Jr,`onTransitionRun`),P(Yr,`onTransitionStart`),P(Xr,`onTransitionCancel`),P(Zr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Gr:case Kr:case qr:l=Rn;break;case Zr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,N(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:N(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=F,e):F}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),v=o(((e,t)=>{t.exports=_()})),y=g(),b=c(u(),1),x=v(),ee=(0,b.createContext)(null);function S({children:e}){let[t,n]=(0,b.useState)(`light`),[r,i]=(0,b.useState)(`Vera`),a=()=>{n(e=>e===`light`?`dark`:`light`)},o=(0,b.useMemo)(()=>({theme:t,toggleTheme:a,name:r,setName:i}),[t,r]);return(0,x.jsx)(ee.Provider,{value:o,children:e})}function C(){let e=(0,b.useContext)(ee);if(!e)throw Error(`useAppContext must be used within an AppProvider`);return e}var w=`-ms-`,te=`-moz-`,T=`-webkit-`,ne=`comm`,re=`rule`,ie=`decl`,ae=`@import`,E=`@namespace`,oe=`@keyframes`,se=`@layer`,ce=Math.abs,D=String.fromCharCode,O=Object.assign;function le(e,t){return A(e,0)^45?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}function ue(e){return e.trim()}function de(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,n){return e.replace(t,n)}function fe(e,t,n){return e.indexOf(t,n)}function A(e,t){return e.charCodeAt(t)|0}function pe(e,t,n){return e.slice(t,n)}function me(e){return e.length}function he(e){return e.length}function ge(e,t){return t.push(e),e}function _e(e,t){return e.map(t).join(``)}function ve(e,t){return e.filter(function(e){return!de(e,t)})}var ye=1,be=1,xe=0,Se=0,j=0,Ce=``;function we(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ye,column:be,length:o,return:``,siblings:s}}function Te(e,t){return O(we(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Ee(e){for(;e.root;)e=Te(e.root,{children:[e]});ge(e,e.siblings)}function De(){return j}function Oe(){return j=Se>0?A(Ce,--Se):0,be--,j===10&&(be=1,ye--),j}function ke(){return j=Se<xe?A(Ce,Se++):0,be++,j===10&&(be=1,ye++),j}function Ae(){return A(Ce,Se)}function je(){return Se}function Me(e,t){return pe(Ce,e,t)}function Ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return ye=be=1,xe=me(Ce=e),Se=0,[]}function Fe(e){return Ce=``,e}function Ie(e){return ue(Me(Se-1,ze(e===91?e+2:e===40?e+1:e)))}function Le(e){for(;(j=Ae())&&j<33;)ke();return Ne(e)>2||Ne(j)>3?``:` `}function Re(e,t){for(;--t&&ke()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Me(e,je()+(t<6&&Ae()==32&&ke()==32))}function ze(e){for(;ke();)switch(j){case e:return Se;case 34:case 39:e!==34&&e!==39&&ze(j);break;case 40:e===41&&ze(e);break;case 92:ke();break}return Se}function Be(e,t){for(;ke()&&e+j!==57&&(e+j!==84||Ae()!==47););return`/*`+Me(t,Se-1)+`*`+D(e===47?e:ke())}function Ve(e){for(;!Ne(Ae());)ke();return Me(e,Se)}function He(e){return Fe(Ue(``,null,null,null,[``],e=Pe(e),0,[0],e))}function Ue(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,ee=r,S=y;g;)switch(m=v,v=ke()){case 40:if(m!=108&&A(S,d-1)==58){fe(S+=k(Ie(v),`&`,`&\f`),`&\f`,ce(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:S+=Ie(v);break;case 9:case 10:case 13:case 32:S+=Le(m);break;case 92:S+=Re(je()-1,7);continue;case 47:switch(Ae()){case 42:case 47:ge(Ge(Be(ke(),je()),t,n,c),c),(Ne(m||1)==5||Ne(Ae()||1)==5)&&me(S)&&pe(S,-1,void 0)!==` `&&(S+=` `);break;default:S+=`/`}break;case 123*h:s[l++]=me(S)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(S=k(S,/\f/g,``)),p>0&&(me(S)-d||h===0&&m===47)&&ge(p>32?Ke(S+`;`,r,n,d-1,c):Ke(k(S,` `,``)+`;`,r,n,d-2,c),c);break;case 59:S+=`;`;default:if(ge(ee=We(S,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Ue(S,t,ee,ee,b,a,d,s,x);else{switch(f){case 99:if(A(S,3)===110)break;case 108:if(A(S,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ue(e,ee,ee,r&&ge(We(e,ee,ee,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ue(S,ee,ee,ee,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=S=``,d=o;break;case 58:d=1+me(S),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Oe()==125)continue}switch(S+=D(v),v*h){case 38:_=u>0?1:(S+=`\f`,-1);break;case 44:s[l++]=(me(S)-1)*_,_=1;break;case 64:Ae()===45&&(S+=Ie(ke())),f=Ae(),u=d=me(y=S+=Ve(je())),v++;break;case 45:m===45&&me(S)==2&&(h=0)}}return a}function We(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=he(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=pe(e,f+1,f=ce(g=o[h])),b=e;v<m;++v)(b=ue(g>0?p[v]+` `+y:k(y,/&\f/g,p[v])))&&(c[_++]=b);return we(e,t,n,i===0?re:s,c,l,u,d)}function Ge(e,t,n,r){return we(e,t,n,ne,D(De()),pe(e,2,-2),0,r)}function Ke(e,t,n,r,i){return we(e,t,n,ie,pe(e,0,r),pe(e,r+1,-1),r,i)}function qe(e,t,n){switch(le(e,t)){case 5103:return T+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return T+e+e;case 4855:return T+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return te+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return T+e+te+e+w+e+e;case 5936:switch(A(e,t+11)){case 114:return T+e+w+k(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return T+e+w+k(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return T+e+w+k(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return T+e+w+e+e;case 6165:return T+e+w+`flex-`+e+e;case 5187:return T+e+k(e,/(\w+).+(:[^]+)/,T+`box-$1$2`+w+`flex-$1$2`)+e;case 5443:return T+e+w+`flex-item-`+k(e,/flex-|-self/g,``)+(de(e,/flex-|baseline/)?``:w+`grid-row-`+k(e,/flex-|-self/g,``))+e;case 4675:return T+e+w+`flex-line-pack`+k(e,/align-content|flex-|-self/g,``)+e;case 5548:return T+e+w+k(e,`shrink`,`negative`)+e;case 5292:return T+e+w+k(e,`basis`,`preferred-size`)+e;case 6060:return T+`box-`+k(e,`-grow`,``)+T+e+w+k(e,`grow`,`positive`)+e;case 4554:return T+k(e,/([^-])(transform)/g,`$1`+T+`$2`)+e;case 6187:return k(k(k(e,/(zoom-|grab)/,T+`$1`),/(image-set)/,T+`$1`),e,``)+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,T+`box-pack:$3`+w+`flex-pack:$3`),/space-between/,`justify`)+T+e+e;case 4200:if(!de(e,/flex-|baseline/))return w+`grid-column-align`+pe(e,t)+e;break;case 2592:case 3360:return w+k(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,de(e.props,/grid-\w+-end/)})?~fe(e+(n=n[t].value),`span`,0)?e:w+k(e,`-start`,``)+e+w+`grid-row-span:`+(~fe(n,`span`,0)?de(n,/\d+/):de(n,/\d+/)-+de(e,/\d+/))+`;`:w+k(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return de(e.props,/grid-\w+-start/)})?e:w+k(k(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,T+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(me(e)-1-t>6)switch(A(e,t+1)){case 109:if(A(e,t+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,`$1`+T+`$2-$3$1`+te+(A(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~fe(e,`stretch`,0)?qe(k(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return k(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return w+n+`:`+r+s+(i?w+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(A(e,t+6)===121)return k(e,`:`,`:`+T)+e;break;case 6444:switch(A(e,A(e,14)===45?18:11)){case 120:return k(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+T+(A(e,14)===45?`inline-`:``)+`box$3$1`+T+`$2$3$1`+w+`$2box$3`)+e;case 100:return k(e,`:`,`:`+w)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(e,`scroll-`,`scroll-snap-`)+e}return e}function Je(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ye(e,t,n,r){switch(e.type){case se:if(e.children.length)break;case ae:case E:case ie:return e.return=e.return||e.value;case ne:return``;case oe:return e.return=e.value+`{`+Je(e.children,r)+`}`;case re:if(!me(e.value=e.props.join(`,`)))return``}return me(n=Je(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Xe(e){var t=he(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ze(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ie:e.return=qe(e.value,e.length,n);return;case oe:return Je([Te(e,{value:k(e.value,`@`,`@`+T)})],r);case re:if(e.length)return _e(n=e.props,function(t){switch(de(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Ee(Te(e,{props:[k(t,/:(read-\w+)/,`:`+te+`$1`)]})),Ee(Te(e,{props:[t]})),O(e,{props:ve(n,r)});break;case`::placeholder`:Ee(Te(e,{props:[k(t,/:(plac\w+)/,`:`+T+`input-$1`)]})),Ee(Te(e,{props:[k(t,/:(plac\w+)/,`:`+te+`$1`)]})),Ee(Te(e,{props:[k(t,/:(plac\w+)/,w+`input-$1`)]})),Ee(Te(e,{props:[t]})),O(e,{props:ve(n,r)})}return``})}}var $e=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,et=`active`,tt=`data-styled-version`,nt=`6.4.4`,rt=`/*!sc*/
`,it=typeof window<`u`&&typeof document<`u`;function at(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var ot=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:at(`REACT_APP_SC_DISABLE_SPEEDY`)??at(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),st=`sc-keyframes-`;function ct(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var lt=new Map,ut=new Map,dt=1,ft=e=>{if(lt.has(e))return lt.get(e);for(;ut.has(dt);)dt++;let t=dt++;return lt.set(e,t),ut.set(t,e),t},pt=e=>ut.get(e),mt=(e,t)=>{dt=t+1,lt.set(e,t),ut.set(t,e)},ht=Object.freeze([]),gt=Object.freeze({});function _t(e,t,n=gt){return e.theme!==n.theme&&e.theme||t||n.theme}var vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yt=/(^-|-$)/g;function bt(e){return e.replace(vt,`-`).replace(yt,``)}var xt=/(a)(d)/gi,St=e=>String.fromCharCode(e+(e>25?39:97));function Ct(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=St(t%52)+n;return(St(t%52)+n).replace(xt,`$1-$2`)}var wt=5381,Tt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Et=e=>Tt(wt,e);function Dt(e){return Ct(Et(e)>>>0)}function Ot(e){return e.displayName||e.name||`Component`}function kt(e){return typeof e==`string`&&!0}function At(e){return kt(e)?`styled.${e}`:`Styled(${Ot(e)})`}var jt=Symbol.for(`react.memo`),Mt=Symbol.for(`react.forward_ref`),Nt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Pt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ft={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},It={[Mt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[jt]:Ft};function Lt(e){return(`type`in(t=e)&&t.type.$$typeof)===jt?Ft:`$$typeof`in e?It[e.$$typeof]:Nt;var t}var Rt=Object.defineProperty,zt=Object.getOwnPropertyNames,Bt=Object.getOwnPropertySymbols,Vt=Object.getOwnPropertyDescriptor,Ht=Object.getPrototypeOf,Ut=Object.prototype;function Wt(e,t,n){if(typeof t!=`string`){let r=Ht(t);r&&r!==Ut&&Wt(e,r,n);let i=zt(t).concat(Bt(t)),a=Lt(e),o=Lt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Pt||n&&n[s]||o&&s in o||a&&s in a)){let n=Vt(t,s);try{Rt(e,s,n)}catch{}}}}return e}function Gt(e){return typeof e==`function`}var Kt=Symbol.for(`react.forward_ref`);function qt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Kt&&`styledComponentId`in e}function Jt(e,t){return e&&t?e+` `+t:e||t||``}function Yt(e,t){return e.join(t||``)}function Xt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Zt(e,t,n=!1){if(!n&&!Xt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Zt(e[n],t[n]);else if(Xt(t))for(let n in t)e[n]=Zt(e[n],t[n]);return e}function Qt(e,t){Object.defineProperty(e,"toString",{value:t})}var $t=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw ct(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+rt;return t}},en=`style[${$e}][${tt}="${nt}"]`,tn=RegExp(`^${$e}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),nn=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,rn=e=>{if(!e)return document;if(nn(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(nn(t))return t}return document},an=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},on=(e,t)=>{let n=(t.textContent??``).split(rt),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(tn);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(mt(n,t),an(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},sn=e=>{let t=rn(e.options.target).querySelectorAll(en);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute($e)!==et&&(on(e,r),r.parentNode&&r.parentNode.removeChild(r))}},cn=!1;function ln(){if(!1!==cn)return cn;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return cn=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return cn=t.getAttribute(`content`)||void 0}return cn=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var un=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${$e}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute($e,et),i.setAttribute(tt,nt);let s=t||ln();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},dn=class{constructor(e,t){this.element=un(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw ct(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},fn=class{constructor(e,t){this.element=un(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},pn=it,mn={isServer:!it,useCSSOMInjection:!ot},hn=class e{static registerId(e){return ft(e)}constructor(e=gt,t={},n){this.options=Object.assign(Object.assign({},mn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&it&&pn&&(pn=!1,sn(this)),Qt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=pt(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=$e+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&it&&sn(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&it&&t.target!==this.options.target&&rn(this.options.target)!==rn(t.target)&&sn(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new dn(t,n):new fn(t,n))(this.options),new $t(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){ft(e),e.startsWith(st)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(ft(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ft(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},gn=new WeakSet,_n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function vn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in _n||e.startsWith(`--`)?String(t).trim():t+`px`}var yn=47;function bn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var xn=Symbol.for(`sc-keyframes`);function Sn(e){return typeof e==`object`&&!!e&&xn in e}function Cn(e){return Gt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var wn=e=>e==null||!1===e||e===``,Tn=Symbol.for(`react.client.reference`);function En(e){return e.$$typeof===Tn}function Dn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!wn(r)&&(Array.isArray(r)&&gn.has(r)||Gt(r)?t.push(bn(n)+`:`,r,`;`):Xt(r)?(t.push(n+` {`),Dn(r,t),t.push(`}`)):t.push(bn(n)+`: `+vn(n,r)+`;`))}}function On(e,t,n,r,i=[]){if(wn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return En(e)?i:Cn(e)&&t?On(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)On(e[a],t,n,r,i);return i}return qt(e)?(i.push(`.${e.styledComponentId}`),i):Sn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):En(e)?i:Xt(e)&&e.toString===Object.prototype.toString?(Dn(e,i),i):(i.push(e.toString()),i)}var kn=Et(nt),An=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Tt(kn,t),this.baseStyle=n,hn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Cn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Yt(On(r,e,t,n)))}else i+=Yt(On(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Ct(Tt(Tt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Jt(r,a)}}return r}},jn=/&/g;function Mn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Nn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==yn||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===yn&&(o=!1,c++);else if(l!==34&&l!==39||Mn(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Pn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Pn(a.children,t)}return e}function Fn({options:e=gt,plugins:t=ht}=gt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(jn,r).replace(i,a))}),e.prefix&&o.push(Qe),o.push(Ye);let s=[],c=Xe(o.concat(Ze(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Nn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Mn(e,o))if(s===0)if(t===yn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==yn);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===yn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===yn&&o+1<r&&e.charCodeAt(o+1)===yn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Nn(i)):l===0?e:Nn(e)}(t),d=He(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Pn(d,e.namespace)),s=[],Je(d,c),s},u=e,d=wt;for(let e=0;e<t.length;e++)t[e].name||ct(15),d=Tt(d,t[e].name);return u!=null&&u.namespace&&(d=Tt(d,u.namespace)),u!=null&&u.prefix&&(d=Tt(d,`p`)),l.hash=d===wt?``:d.toString(),l}var In=new hn,Ln=Fn(),Rn=b.createContext({shouldForwardProp:void 0,styleSheet:In,stylis:Ln,stylisPlugins:void 0});Rn.Consumer;function zn(){return b.useContext(Rn)}var Bn=b.createContext(void 0);Bn.Consumer;var Vn=Object.prototype.hasOwnProperty,Hn={};function Un(e,t){let n=typeof e==`string`?bt(e):`sc`;Hn[n]=(Hn[n]||0)+1;let r=n+`-`+Dt(nt+n+Hn[n]);return t?t+`-`+r:r}function Wn(e,t,n){let r=qt(e),i=e,a=!kt(e),{attrs:o=ht,componentId:s=Un(t.displayName,t.parentComponentId),displayName:c=At(e)}=t,l=t.displayName&&t.componentId?bt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new An(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=b.useContext(Bn),u=zn(),d=e.shouldForwardProp||u.shouldForwardProp,f=_t(t,l,a)||gt,p,m;{let e=b.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Vn.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Gt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Jt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Jt(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)Vn.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Jt(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[kt(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,b.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=b.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Jt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Zt(e,n,!0);return e}({},i.defaultProps,e):e}}),Qt(m,()=>`.${m.styledComponentId}`),a&&Wt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Gn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Kn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qn=e=>(gn.add(e),e);function Jn(e,...t){if(Gt(e)||Xt(e))return qn(On(Kn(ht,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?On(n):qn(On(Kn(n,t)))}function Yn(e,t,n=gt){if(!t)throw ct(1,t);let r=(r,...i)=>e(t,n,Jn(r,...i));return r.attrs=r=>Yn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Yn(e,t,Object.assign(Object.assign({},n),r)),r}var Xn=e=>Yn(Wn,e),Zn=Xn;Gn.forEach(e=>{Zn[e]=Xn(e)}),`${$e}`,`${$e}`,`${$e}`;var Qn=`/vera-page/assets/BOTONERA%20OFERTA%20PERMANENTE%20VERA%202026%20ELVERA.EDU.AR%20OPT-11-eZU4M6Jx.png`,$n=`/vera-page/assets/adorno-BgaSSMwp.png`,er=`/vera-page/assets/banner-BZZzu38N.png`,tr=`/vera-page/assets/1-BBmSDB4Z.png`,nr=`/vera-page/assets/2-B_YyXTDw.jpg`,rr=`/vera-page/assets/3-C5vYQbhW.png`,ir=`/vera-page/assets/directivos-JZA9ZtzD.png`,ar=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='90.664mm'%20height='10.681mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%2090.664%2010.681'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.fil0%20{fill:url(%23id0)}%20]]%3e%3c/style%3e%3clinearGradient%20id='id0'%20gradientUnits='userSpaceOnUse'%20x1='-0'%20y1='5.7004'%20x2='90.664'%20y2='5.7004'%3e%3cstop%20offset='0'%20style='stop-color:%236A3AA4'/%3e%3cstop%20offset='1'%20style='stop-color:%238853C3'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='Capa_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cpath%20class='fil0'%20d='M2.1166%200.0002l86.4308%200c1.1642,0%202.1166,0.9524%202.1166,2.1166l0%206.1737c0,1.1642%20-0.9965,2.434%20-2.1166,2.1166%20-18.8528,-5.3431%20-82.5122,-6.4163%20-86.4308,0%20-0.6068,0.9936%20-2.1166,-0.9524%20-2.1166,-2.1166l0%20-6.1737c0,-1.1642%200.9524,-2.1166%202.1166,-2.1166z'/%3e%3c/g%3e%3c/svg%3e`,or=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='548pt'%20height='777pt'%20viewBox='0%200%20548%20777'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20250.00%20775.02%20C%20248.70%20774.20%20248.43%20765.25%20248.00%20707.82%20L%20247.50%20641.56%20L%20245.00%20640.29%20C%20243.62%20639.60%20241.49%20639.02%20240.27%20639.01%20C%20233.45%20638.97%20207.87%20632.50%20192.00%20626.81%20C%20116.87%20599.86%2050.23%20526.74%2021.05%20439.22%20C%206.98%20397.02%201.00%20358.30%201.00%20309.39%20C%201.00%20287.39%201.03%20287.05%203.21%20285.89%20C%206.15%20284.32%2038.22%20285.32%2054.50%20287.49%20C%20129.10%20297.44%20192.45%20339.20%20240.21%20409.88%20L%20247.95%20421.33%20L%20248.23%20361.92%20C%20248.38%20329.24%20248.17%20301.18%20247.77%20299.57%20C%20246.86%20295.93%20245.50%20295.03%20240.82%20295.02%20C%20235.73%20294.99%20215.89%20289.76%20205.07%20285.58%20C%20186.44%20278.38%20169.26%20268.54%20152.00%20255.16%20C%20141.38%20246.92%20120.56%20226.23%20111.61%20215.00%20C%2090.03%20187.95%2072.70%20154.34%2063.07%20120.87%20C%2054.47%2090.97%2050.01%2056.66%2050.00%2020.32%20C%2050.00%206.94%2050.27%203.87%2051.57%202.57%20C%2054.77%20-0.63%2089.08%200.83%20111.50%205.12%20C%20177.43%2017.75%20234.42%2064.79%20269.11%20135.20%20L%20273.39%20143.89%20L%20280.30%20130.70%20C%20302.77%2087.76%20335.83%2051.08%20371.50%2029.49%20C%20388.45%2019.24%20409.03%2011.08%20429.12%206.65%20C%20445.51%203.04%20456.15%201.93%20476.38%201.70%20L%20494.25%201.50%20L%20496.22%204.11%20C%20498.12%206.64%20498.15%207.49%20497.06%2030.61%20C%20495.70%2059.60%20493.84%2076.85%20490.01%2096.00%20C%20478.80%20151.96%20455.95%20196.09%20419.04%20233.06%20C%20384.97%20267.18%20352.77%20285.96%20315.97%20293.17%20C%20306.55%20295.01%20304.01%20295.90%20301.75%20298.13%20L%20299.00%20300.85%20L%20299.00%20360.92%20C%20299.00%20393.97%20299.19%20421.00%20299.43%20421.00%20C%20299.66%20421.00%20302.74%20416.61%20306.28%20411.25%20C%20340.06%20360.05%20384.66%20322.14%20433.70%20302.97%20C%20464.18%20291.05%20489.64%20286.26%20524.40%20285.90%20C%20542.72%20285.71%20544.41%20285.84%20545.65%20287.54%20C%20546.65%20288.91%20547.00%20293.53%20546.98%20305.44%20C%20546.95%20346.32%20541.73%20386.43%20531.98%20420.94%20C%20508.27%20504.83%20453.42%20576.93%20385.99%20612.86%20C%20362.31%20625.47%20332.29%20635.56%20308.33%20638.95%20C%20303.88%20639.58%20301.10%20640.51%20300.27%20641.65%20C%20299.28%20643.01%20299.00%20657.36%20299.00%20707.76%20C%20299.00%20750.22%20298.65%20772.79%20297.96%20774.07%20C%20296.99%20775.89%20295.66%20776.00%20274.21%20775.98%20C%20261.66%20775.98%20250.83%20775.55%20250.00%20775.02ZM%20246.00%20575.63%20C%20246.00%20570.63%20242.33%20550.20%20238.93%20536.30%20C%20217.24%20447.56%20154.36%20375.67%2079.43%20353.95%20C%2066.78%20350.29%2054.72%20347.88%2053.76%20348.84%20C%2053.20%20349.40%2053.49%20354.02%2054.50%20360.63%20C%2060.47%20399.82%2075.80%20441.81%2096.47%20475.57%20C%20106.63%20492.16%20116.41%20504.50%20130.95%20519.08%20C%20150.73%20538.91%20170.29%20552.58%20193.96%20563.09%20C%20210.18%20570.30%20236.47%20578.75%20243.25%20578.93%20C%20245.72%20578.99%20246.00%20578.66%20246.00%20575.63ZM%20319.27%20575.58%20C%20340.54%20570.12%20359.29%20562.09%20375.86%20551.33%20C%20433.16%20514.12%20470.88%20458.00%20488.00%20384.50%20C%20492.16%20366.64%20494.87%20348.89%20493.51%20348.36%20C%20491.47%20347.58%20467.12%20353.54%20458.02%20357.05%20C%20453.40%20358.83%20444.14%20363.09%20437.44%20366.51%20C%20365.23%20403.38%20320.64%20468.00%20303.55%20560.53%20C%20300.31%20578.07%20300.30%20579.00%20303.46%20579.00%20C%20304.81%20579.00%20311.92%20577.46%20319.27%20575.58ZM%20244.34%20228.40%20C%20244.14%20221.43%20239.54%20202.61%20234.44%20187.95%20C%20214.65%20131.07%20171.90%2086.11%20121.88%2069.61%20C%20103.63%2063.58%20102.07%2063.76%20103.86%2071.63%20C%20111.22%20103.98%20115.32%20116.58%20124.70%20135.70%20C%20145.41%20177.92%20180.38%20211.87%20219.21%20227.46%20C%20228.35%20231.14%20241.80%20235.08%20243.50%20234.58%20C%20244.05%20234.42%20244.43%20231.64%20244.34%20228.40ZM%20318.00%20231.31%20C%20344.44%20223.75%20376.08%20201.29%20397.21%20175.10%20C%20419.96%20146.89%20436.69%20110.58%20442.40%2077.04%20C%20444.16%2066.72%20443.45%2064.53%20438.68%2065.55%20C%20426.75%2068.12%20405.20%2077.18%20392.50%2084.96%20C%20370.56%2098.42%20348.75%20120.78%20332.98%20146.00%20C%20324.90%20158.93%20315.52%20178.95%20311.01%20192.94%20C%20306.94%20205.57%20300.78%20232.83%20301.68%20234.28%20C%20302.29%20235.28%20307.30%20234.37%20318.00%20231.31Z'/%3e%3c/g%3e%3c/svg%3e`,sr=`/vera-page/assets/carousel-CjBB1kvi.jpg`,cr=`/vera-page/assets/desarrollo-software-BoULmQA3.svg`,lr=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='492pt'%20height='755pt'%20viewBox='0%200%20492%20755'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2015.00%20752.41%20C%209.42%20750.00%204.12%20744.16%202.47%20738.59%20C%200.36%20731.48%200.34%20493.61%202.44%20487.70%20C%206.09%20477.49%2014.61%20471.00%2024.38%20471.00%20C%2028.21%20471.00%2031.63%20472.06%2039.06%20475.53%20C%2051.27%20481.24%2058.98%20482.72%2067.93%20481.07%20C%2085.89%20477.78%20100.86%20463.83%20107.50%20444.20%20C%20116.03%20418.97%20111.62%20394.59%2095.35%20377.01%20C%2078.28%20358.58%2059.43%20355.32%2037.39%20366.99%20C%2031.02%20370.37%2028.90%20371.00%2023.88%20371.00%20C%2016.26%20371.00%2012.25%20369.28%207.82%20364.10%20C%200.63%20355.70%200.93%20360.96%201.23%20249.99%20L%201.50%20150.50%20L%204.13%20144.89%20C%206.89%20139.01%2011.03%20135.18%2017.00%20133.00%20C%2019.66%20132.02%2036.10%20131.60%2085.16%20131.24%20L%20149.82%20130.77%20L%20149.29%20119.64%20C%20147.90%2090.99%20155.81%2062.04%20170.72%2041.14%20C%20180.71%2027.13%20195.74%2013.70%20208.83%207.07%20C%20216.99%202.94%20228.97%201.05%20247.09%201.02%20C%20266.74%201.00%20274.55%202.58%20287.21%209.17%20C%20302.59%2017.17%20321.57%2037.89%20330.49%2056.41%20C%20339.80%2075.73%20342.46%2088.24%20342.48%20112.63%20L%20342.50%20130.76%20L%20407.50%20131.17%20L%20472.50%20131.57%20L%20477.25%20133.88%20C%20479.86%20135.14%20483.35%20137.81%20484.99%20139.81%20C%20491.30%20147.46%20491.05%20142.60%20490.76%20253.12%20L%20490.50%20353.64%20L%20487.48%20359.54%20C%20483.46%20367.40%20477.50%20371.29%20469.44%20371.29%20C%20464.88%20371.29%20462.13%20370.45%20454.18%20366.64%20C%20448.85%20364.08%20441.68%20361.49%20438.25%20360.89%20C%20414.47%20356.70%20389.08%20376.36%20382.56%20404.02%20C%20379.01%20419.06%20381.29%20438.69%20388.23%20452.84%20C%20392.69%20461.93%20403.30%20472.61%20412.20%20476.95%20C%20425.91%20483.65%20438.51%20483.31%20452.89%20475.85%20C%20462.56%20470.84%20467.03%20469.81%20473.33%20471.17%20C%20479.06%20472.39%20485.03%20477.27%20488.32%20483.43%20L%20490.50%20487.50%20L%20490.50%20613.00%20L%20490.50%20738.50%20L%20487.70%20743.26%20C%20485.77%20746.56%20483.32%20748.93%20479.70%20751.00%20L%20474.50%20753.98%20L%20389.57%20753.99%20C%20305.45%20754.00%20304.59%20753.98%20300.31%20751.91%20C%20288.37%20746.13%20284.76%20731.94%20290.93%20715.02%20C%20295.86%20701.53%20297.31%20693.12%20296.78%20681.14%20C%20296.02%20663.90%20290.33%20650.67%20278.43%20638.51%20C%20259.43%20619.09%20233.07%20619.66%20212.97%20639.91%20C%20201.33%20651.65%20196.34%20663.69%20195.33%20682.50%20C%20194.71%20693.86%20196.08%20701.37%20201.16%20714.50%20C%20204.67%20723.56%20205.27%20730.86%20203.12%20738.26%20C%20201.31%20744.48%20195.04%20751.62%20190.19%20752.96%20C%20187.80%20753.63%20156.93%20753.98%20102.50%20753.96%20C%2029.80%20753.93%2018.03%20753.72%2015.00%20752.41ZM%20151.16%20690.00%20C%20150.32%20654.10%20160.80%20624.85%20182.71%20601.91%20C%20195.25%20588.78%20208.87%20580.31%20224.71%20575.80%20C%20235.10%20572.84%20255.05%20572.63%20265.50%20575.38%20C%20300.19%20584.50%20326.81%20613.23%20337.24%20652.77%20C%20340.14%20663.78%20340.35%20665.73%20340.56%20684.50%20L%20340.79%20704.50%20L%20393.64%20704.50%20L%20446.50%20704.50%20L%20446.76%20618.38%20L%20447.01%20532.26%20L%20435.70%20532.76%20C%20382.63%20535.10%20340.20%20490.10%20336.39%20427.43%20C%20334.34%20393.54%20345.65%20361.39%20367.94%20337.78%20C%20387.31%20317.26%20410.11%20307.80%20436.56%20309.30%20L%20447.00%20309.89%20L%20447.00%20246.47%20L%20447.00%20183.05%20L%20376.25%20182.78%20L%20305.50%20182.50%20L%20301.31%20180.26%20C%20296.14%20177.50%20292.28%20172.58%20290.42%20166.39%20C%20288.23%20159.11%20288.64%20155.92%20293.72%20141.19%20L%20298.44%20127.50%20L%20298.42%20113.50%20C%20298.39%20101.04%20298.09%2098.62%20295.72%2091.50%20C%20281.59%2049.14%20239.50%2036.63%20211.23%2066.39%20C%20198.98%2079.30%20193.63%2093.66%20193.69%20113.50%20C%20193.73%20126.11%20194.68%20130.78%20200.53%20146.99%20C%20202.71%20153.04%20203.14%20155.64%20202.75%20160.52%20C%20201.89%20171.29%20195.54%20179.62%20186.44%20181.91%20C%20183.53%20182.64%20159.66%20183.00%20113.56%20183.00%20L%2045.00%20183.00%20L%2045.00%20246.37%20L%2045.00%20309.74%20L%2056.30%20309.24%20C%20112.12%20306.77%20155.97%20356.69%20156.00%20422.71%20C%20156.01%20469.03%20129.09%20512.64%2091.54%20527.12%20C%2078.89%20531.99%2071.22%20533.25%2057.25%20532.75%20L%2045.00%20532.31%20L%2045.00%20617.99%20C%2045.00%20665.11%2045.30%20703.97%2045.68%20704.34%20C%2046.05%20704.71%2070.01%20704.90%2098.93%20704.76%20L%20151.50%20704.50%20L%20151.16%20690.00Z'/%3e%3c/g%3e%3c/svg%3e`,ur=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='550pt'%20height='755pt'%20viewBox='0%200%20550%20755'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2025.05%20560.78%20C%2018.83%20557.44%2015.71%20551.48%2016.22%20543.92%20C%2016.55%20539.16%2017.58%20536.71%2023.24%20527.28%20C%2030.63%20514.98%2034.07%20507.42%2036.35%20498.50%20C%2042.04%20476.19%2037.66%20455.65%2021.95%20431.00%20C%2015.98%20421.62%2014.50%20416.55%2016.06%20410.76%20C%2017.66%20404.83%2020.62%20401.08%2025.40%20398.91%20C%2029.26%20397.15%2033.31%20397.04%2095.85%20397.02%20L%20162.20%20397.00%20L%20154.58%20389.88%20C%20135.51%20372.08%20123.78%20350.30%20115.47%20317.30%20C%20106.39%20281.28%20106.95%20245.15%20117.07%20214.00%20C%20124.22%20191.97%20139.01%20166.25%20152.87%20151.75%20C%20169.46%20134.38%20191.22%20124.68%20213.50%20124.72%20C%20230.05%20124.75%20243.56%20129.57%20257.85%20140.55%20L%20265.21%20146.19%20L%20268.35%20143.20%20C%20270.08%20141.55%20274.43%20138.32%20278.00%20136.03%20C%20282.74%20132.99%20283.69%20132.06%20281.51%20132.60%20C%20279.87%20133.00%20274.47%20133.37%20269.51%20133.42%20C%20258.03%20133.52%20253.57%20131.58%20250.17%20125.00%20C%20248.01%20120.80%20247.88%20119.62%20248.29%20107.50%20C%20248.77%2093.22%20250.81%2083.59%20256.01%2070.98%20C%20272.31%2031.43%20308.50%203.89%20347.50%201.35%20C%20358.80%200.61%20363.80%201.87%20367.85%206.49%20C%20373.01%2012.36%20374.14%2020.68%20371.93%2036.57%20C%20367.07%2071.51%20345.74%20103.23%20315.52%20120.46%20L%20308.43%20124.50%20L%20317.47%20124.69%20C%20351.70%20125.43%20382.74%20148.85%20402.04%20188.50%20C%20415.44%20216.04%20420.80%20242.74%20419.70%20276.50%20C%20418.23%20321.76%20405.62%20354.69%20376.53%20389.25%20L%20370.85%20396.00%20L%20434.67%20396.01%20C%20505.58%20396.03%20505.55%20396.03%20518.09%20402.62%20C%20529.51%20408.62%20538.62%20418.83%20543.72%20431.33%20C%20548.06%20441.97%20548.93%20450.12%20548.97%20480.59%20C%20549.00%20505.40%20548.77%20509.59%20547.02%20516.43%20C%20540.78%20540.83%20523.20%20557.38%20499.77%20560.90%20C%20496.09%20561.45%20397.88%20562.11%20261.50%20562.50%20L%2029.50%20563.16%20L%2025.05%20560.78ZM%20363.16%20475.65%20C%20466.20%20475.30%20469.93%20475.22%20473.16%20473.37%20C%20484.03%20467.11%20480.36%20451.38%20467.58%20449.46%20C%20464.95%20449.06%20382.62%20449.14%20284.64%20449.62%20C%2089.74%20450.58%20103.20%20450.10%2098.59%20456.32%20C%2097.18%20458.23%2096.53%20460.54%2096.59%20463.45%20C%2096.74%20470.31%20100.99%20474.88%20108.50%20476.25%20C%20109.60%20476.45%20143.35%20476.48%20183.50%20476.31%20C%20223.65%20476.14%20304.50%20475.84%20363.16%20475.65Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2051.94%20752.97%20C%2048.33%20752.55%2042.14%20751.07%2038.18%20749.70%20C%2019.09%20743.06%207.20%20729.15%203.24%20708.79%20C%201.15%20698.06%200.81%20643.60%202.76%20632.00%20C%206.29%20611.07%2022.44%20594.02%2043.50%20589.00%20C%2048.92%20587.71%20348.84%20585.73%20462.50%20586.24%20C%20519.45%20586.49%20521.62%20586.57%20524.90%20588.50%20C%20530.89%20592.03%20532.51%20595.21%20532.44%20603.33%20C%20532.38%20610.17%20532.01%20611.28%20524.32%20627.50%20C%20514.46%20648.27%20510.98%20658.18%20510.28%20667.46%20C%20509.32%20680.24%20514.45%20695.15%20527.81%20718.39%20C%20533.39%20728.09%20534.74%20733.52%20533.11%20739.61%20C%20531.86%20744.22%20526.95%20749.25%20522.10%20750.87%20C%20519.65%20751.69%20486.68%20752.00%20403.35%20752.00%20C%20327.12%20752.00%20288.00%20752.34%20288.00%20753.00%20C%20288.00%20754.19%2062.15%20754.16%2051.94%20752.97ZM%20445.57%20664.03%20C%20452.46%20661.05%20454.97%20652.75%20450.97%20646.19%20C%20446.75%20639.25%20461.04%20639.69%20261.50%20640.45%20C%20146.65%20640.89%2080.34%20641.50%2078.28%20642.14%20C%2067.18%20645.58%2067.22%20662.55%2078.33%20665.95%20C%2080.36%20666.57%20146.48%20666.72%20261.50%20666.36%20C%20430.32%20665.82%20441.75%20665.68%20445.57%20664.03Z'/%3e%3c/g%3e%3c/svg%3e`,dr=`data:image/svg+xml,%3csvg%20aria-hidden='true'%20class='e-font-icon-svg%20e-fas-fingerprint'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M256.12%20245.96c-13.25%200-24%2010.74-24%2024%201.14%2072.25-8.14%20141.9-27.7%20211.55-2.73%209.72%202.15%2030.49%2023.12%2030.49%2010.48%200%2020.11-6.92%2023.09-17.52%2013.53-47.91%2031.04-125.41%2029.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194%20164.16%20151.25%20211.3%20152.1%20265.32c.75%2047.94-3.75%2095.91-13.37%20142.55-2.69%2012.98%205.67%2025.69%2018.64%2028.36%2013.05%202.67%2025.67-5.66%2028.36-18.64%2010.34-50.09%2015.17-101.58%2014.37-153.02-.41-25.95%2019.92-52.49%2054.45-52.34%2031.31.47%2057.15%2025.34%2057.62%2055.47.77%2048.05-2.81%2096.33-10.61%20143.55-2.17%2013.06%206.69%2025.42%2019.76%2027.58%2019.97%203.33%2026.81-15.1%2027.58-19.77%208.28-50.03%2012.06-101.21%2011.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76%203.48-25.62%2031.5-39.39%2071.28-38.75%20112%20.59%2037.58-2.47%2075.27-9.11%20112.05-2.34%2013.05%206.31%2025.53%2019.36%2027.89%2020.11%203.5%2027.07-14.81%2027.89-19.36%207.19-39.84%2010.5-80.66%209.86-121.33-.47-29.88%209.2-57.88%2028-80.97%208.35-10.28%206.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87%201.44-45.78%204.97-12.89%203.06-20.87%2015.98-17.83%2028.89%203.06%2012.89%2016%2020.83%2028.89%2017.83%2011.05-2.61%2022.47-3.77%2034-3.69%2075.43%201.13%20137.73%2061.5%20138.88%20134.58.59%2037.88-1.28%2076.11-5.58%20113.63-1.5%2013.17%207.95%2025.08%2021.11%2026.58%2016.72%201.95%2025.51-11.88%2026.58-21.11a929.06%20929.06%200%200%200%205.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07%20121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94%202.86-21.12%2015.66-18.26%2028.61%204.71%2021.41%204.91%2037.41%204.7%2061.6-.11%2013.27%2010.55%2024.09%2023.8%2024.2h.2c13.17%200%2023.89-10.61%2024-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29%2043.46%20337.6%201.29%20252.81.02%20183.02-.82%20118.47%2024.91%2070.46%2072.94%2024.09%20119.37-.9%20181.04.14%20246.65l-.12%2021.47c-.39%2013.25%2010.03%2024.31%2023.28%2024.69.23.02.48.02.72.02%2012.92%200%2023.59-10.3%2023.97-23.3l.16-23.64c-.83-52.5%2019.16-101.86%2056.28-139%2038.76-38.8%2091.34-59.67%20147.68-58.86%2069.45%201.03%20134.73%2035.56%20174.62%2092.39%207.61%2010.86%2022.56%2013.45%2033.42%205.86%2010.84-7.62%2013.46-22.59%205.84-33.43z'%3e%3c/path%3e%3c/svg%3e`,fr=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='492pt'%20height='734pt'%20viewBox='0%200%20492%20734'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20228.57%20343.43%20C%20227.16%20342.01%20227.00%20325.03%20227.00%20171.43%20L%20227.00%201.00%20L%20352.50%201.00%20L%20477.99%201.00%20L%20482.07%204.68%20C%20484.31%206.71%20487.12%2010.19%20488.32%2012.43%20L%20490.50%2016.50%20L%20490.76%20179.50%20C%20491.01%20332.11%20490.92%20342.58%20489.32%20343.75%20C%20487.98%20344.73%20460.29%20345.00%20358.88%20345.00%20C%20243.18%20345.00%20229.98%20344.84%20228.57%20343.43ZM%20331.44%20275.62%20C%20342.18%20267.42%20342.19%20249.59%20331.47%20241.41%20C%20321.27%20233.63%20307.70%20239.78%20304.00%20253.87%20C%20301.81%20262.23%20306.70%20273.56%20314.12%20277.35%20C%20319.10%20279.88%20326.86%20279.11%20331.44%20275.62ZM%20404.63%20277.08%20C%20408.42%20274.77%20412.32%20269.72%20413.86%20265.10%20C%20418.04%20252.62%20409.02%20238.01%20397.14%20238.00%20C%20385.56%20237.99%20376.90%20249.99%20379.17%20262.90%20C%20381.36%20275.31%20395.04%20282.93%20404.63%20277.08ZM%20327.57%20192.11%20C%20334.48%20188.97%20340.00%20180.37%20340.00%20172.76%20C%20340.00%20168.26%20336.99%20161.58%20333.23%20157.72%20C%20326.61%20150.94%20318.09%20150.35%20311.42%20156.20%20C%20299.20%20166.93%20301.64%20186.18%20316.01%20192.41%20C%20320.58%20194.39%20322.66%20194.34%20327.57%20192.11ZM%20405.59%20190.79%20C%20414.49%20184.71%20417.34%20173.09%20412.38%20163.13%20C%20407.73%20153.81%20398.25%20149.78%20390.42%20153.79%20C%20383.03%20157.58%20378.77%20164.61%20378.77%20173.00%20C%20378.77%20188.58%20394.02%20198.70%20405.59%20190.79ZM%20329.46%20105.72%20C%20331.79%20104.40%20334.68%20101.45%20336.46%2098.57%20C%20345.34%2084.21%20333.62%2063.59%20318.52%2066.99%20C%20307.84%2069.41%20300.98%2082.08%20304.35%2093.20%20C%20308.12%20105.63%20319.56%20111.33%20329.46%20105.72ZM%20406.57%20104.52%20C%20410.80%20101.29%20414.98%2093.09%20414.98%2088.00%20C%20415.00%2078.75%20408.56%2069.35%20400.75%2067.20%20C%20389.80%2064.17%20378.86%2074.26%20378.86%2087.36%20C%20378.86%2095.62%20384.07%20104.03%20391.00%20106.93%20C%20395.29%20108.73%20402.51%20107.61%20406.57%20104.52Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20151.04%20731.07%20C%20149.59%20728.36%20149.59%205.64%20151.04%202.93%20C%20152.00%201.12%20153.31%201.00%20171.54%201.00%20L%20191.00%201.00%20L%20191.00%20367.00%20L%20191.00%20733.00%20L%20171.54%20733.00%20C%20153.31%20733.00%20152.00%20732.88%20151.04%20731.07Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2076.04%20731.07%20C%2074.59%20728.36%2074.59%205.64%2076.04%202.93%20C%2077.00%201.13%2078.31%201.00%2096.04%201.00%20L%20115.00%201.00%20L%20115.00%20367.00%20L%20115.00%20733.00%20L%2096.04%20733.00%20C%2078.31%20733.00%2077.00%20732.87%2076.04%20731.07Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2012.07%20730.55%20C%208.04%20727.58%204.74%20722.84%202.98%20717.50%20C%201.06%20711.67%201.01%2022.51%202.94%2016.50%20C%204.71%2010.96%208.67%205.37%2012.51%203.00%20C%2015.27%201.29%2017.49%201.00%2027.87%201.00%20L%2040.00%201.00%20L%2040.00%20367.00%20L%2040.00%20733.00%20L%2027.69%20733.00%20C%2016.21%20733.00%2015.17%20732.84%2012.07%20730.55Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20302.00%20562.57%20C%20302.00%20408.97%20302.16%20391.99%20303.57%20390.57%20C%20304.87%20389.27%20307.96%20389.00%20321.49%20389.00%20C%20330.48%20389.00%20338.55%20389.27%20339.42%20389.61%20C%20340.85%20390.16%20341.00%20406.24%20341.00%20561.61%20L%20341.00%20733.00%20L%20321.50%20733.00%20L%20302.00%20733.00%20L%20302.00%20562.57Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20377.00%20563.11%20C%20377.00%20402.79%20377.10%20393.10%20378.75%20391.08%20C%20380.44%20389.02%20381.15%20388.95%20398.00%20389.22%20L%20415.50%20389.50%20L%20415.75%20561.25%20L%20416.01%20733.00%20L%20396.50%20733.00%20L%20377.00%20733.00%20L%20377.00%20563.11Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20227.00%20562.57%20C%20227.00%20408.97%20227.16%20391.99%20228.57%20390.57%20C%20229.87%20389.27%20233.00%20389.00%20246.87%20389.00%20C%20258.55%20389.00%20263.96%20389.36%20264.80%20390.20%20C%20265.72%20391.12%20266.00%20430.69%20266.00%20562.20%20L%20266.00%20733.00%20L%20246.50%20733.00%20L%20227.00%20733.00%20L%20227.00%20562.57Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20453.00%20562.20%20C%20453.00%20430.69%20453.28%20391.12%20454.20%20390.20%20C%20455.58%20388.82%20487.64%20388.49%20489.76%20389.83%20C%20490.77%20390.47%20490.97%20423.37%20490.76%20554.07%20L%20490.50%20717.50%20L%20488.28%20721.64%20C%20487.07%20723.92%20484.17%20727.41%20481.85%20729.39%20L%20477.64%20733.00%20L%20465.32%20733.00%20L%20453.00%20733.00%20L%20453.00%20562.20Z'/%3e%3c/g%3e%3c/svg%3e`,pr=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='512pt'%20height='726pt'%20viewBox='0%200%20512%20726'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2052.00%20724.37%20C%2037.34%20722.18%2025.17%20716.79%2016.88%20708.82%20C%2010.47%20702.66%206.67%20697.00%203.65%20689.11%20L%201.50%20683.50%20L%201.22%20367.00%20C%201.02%20146.02%201.25%2048.54%202.00%2044.00%20C%205.00%2025.74%2019.10%2010.63%2039.50%203.83%20L%2046.50%201.50%20L%20256.50%201.50%20L%20466.50%201.50%20L%20474.46%204.31%20C%20490.05%209.82%20500.83%2019.21%20507.40%2033.00%20L%20510.50%2039.50%20L%20510.50%20363.00%20L%20510.50%20686.50%20L%20507.30%20693.26%20C%20501.25%20706.02%20488.69%20716.64%20473.58%20721.76%20L%20465.50%20724.50%20L%20260.00%20724.62%20C%20146.97%20724.69%2053.38%20724.58%2052.00%20724.37ZM%20388.02%20583.00%20C%20389.28%20581.01%20389.28%20512.99%20388.02%20511.00%20C%20387.19%20509.69%20376.97%20509.48%20306.92%20509.35%20C%20234.09%20509.22%20226.63%20509.06%20225.14%20507.57%20C%20223.63%20506.05%20223.53%20491.67%20223.91%20325.62%20L%20224.31%20145.31%20L%20222.16%20143.16%20C%20220.01%20141.01%20219.80%20141.00%20173.20%20141.00%20C%20138.13%20141.00%20126.10%20141.30%20125.20%20142.20%20C%20124.27%20143.13%20124.00%20193.58%20124.00%20363.23%20L%20124.00%20583.06%20L%20126.25%20583.97%20C%20127.57%20584.51%20181.91%20584.81%20257.79%20584.69%20C%20371.48%20584.52%20387.19%20584.32%20388.02%20583.00Z'/%3e%3c/g%3e%3c/svg%3e`,mr=`/vera-page/assets/musica-CVXWYPox.svg`,hr=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='464pt'%20height='738pt'%20viewBox='0%200%20464%20738'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFE'%3e%3cpath%20d='M%2024.00%20736.33%20C%2018.05%20733.99%2017.56%20728.82%2022.37%20719.23%20C%2035.59%20692.89%2037.52%20664.92%2028.33%20633.00%20C%2026.98%20628.33%2022.09%20615.00%2017.46%20603.39%20C%205.89%20574.39%202.74%20562.20%202.62%20546.00%20C%202.49%20528.88%205.04%20520.11%2015.00%20503.38%20L%2018.05%20498.25%20L%2021.02%20448.38%20C%2037.77%20166.92%2051.95%2038.55%2069.16%2012.57%20C%2076.76%201.09%2088.17%203.19%2094.83%2017.30%20C%20101.55%2031.55%20105.59%2048.02%20113.01%2091.50%20C%20124.77%20160.39%20133.07%20231.93%20152.96%20435.71%20L%20158.93%20496.92%20L%20162.35%20503.71%20C%20177.90%20534.60%20180.64%20572.30%20170.49%20615.50%20C%20157.52%20670.70%20121.18%20710.34%2067.50%20727.88%20C%2051.11%20733.23%2027.69%20737.78%2024.00%20736.33ZM%20100.00%20493.05%20C%20120.62%20492.60%20138.27%20491.92%20139.21%20491.53%20C%20140.15%20491.14%20141.21%20489.91%20141.56%20488.81%20C%20142.31%20486.43%20140.00%20456.61%20138.93%20454.88%20C%20137.98%20453.35%20138.57%20453.35%2085.04%20454.33%20C%2060.04%20454.78%2038.83%20455.56%2037.91%20456.05%20C%2036.60%20456.75%2036.10%20459.06%2035.60%20466.72%20C%2035.24%20472.10%2034.69%20479.68%2034.37%20483.58%20C%2033.54%20493.78%2033.90%20494.02%2049.82%20493.93%20C%2056.79%20493.90%2079.38%20493.50%20100.00%20493.05ZM%20102.22%20437.40%20C%20125.60%20436.94%20134.39%20436.43%20135.68%20435.49%20C%20137.34%20434.27%20137.16%20431.40%20132.16%20381.35%20C%20120.46%20264.36%20110.81%20179.64%20103.93%20133.50%20C%2098.94%20100.05%2092.97%2066.10%2090.04%2054.49%20C%2087.38%2043.95%2081.66%2028.53%2080.05%2027.53%20C%2077.98%2026.25%2070.53%2059.49%2066.61%2087.50%20C%2057.62%20151.71%2049.96%20237.34%2041.56%20367.50%20C%2039.64%20397.20%2037.80%20424.70%2037.46%20428.61%20C%2036.55%20439.27%2036.67%20439.34%2055.42%20438.61%20C%2063.71%20438.28%2084.77%20437.74%20102.22%20437.40Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFE'%3e%3cpath%20d='M%20361.38%20732.60%20C%20352.42%20728.60%20346.51%20712.19%20339.55%20672.00%20C%20328.51%20608.15%20317.27%20477.54%20306.03%20282.50%20C%20304.93%20263.25%20303.77%20245.67%20303.48%20243.44%20C%20303.17%20241.18%20300.80%20235.75%20298.10%20231.17%20C%20291.06%20219.20%20288.82%20211.73%20288.23%20198.19%20C%20287.43%20179.55%20290.87%20165.04%20303.49%20134.00%20C%20315.50%20104.45%20319.38%2088.11%20319.29%2067.50%20C%20319.22%2049.46%20315.83%2035.64%20307.37%2018.77%20C%20303.51%2011.08%20303.21%208.19%20305.92%204.86%20C%20307.56%202.84%20308.66%202.52%20313.67%202.62%20C%20328.91%202.93%20355.46%2010.57%20375.50%2020.41%20C%20419.44%2041.99%20446.82%2078.63%20457.38%20130.01%20C%20461.21%20148.63%20462.34%20161.46%20461.66%20178.50%20C%20460.81%20199.60%20457.29%20214.39%20448.46%20234.00%20L%20444.18%20243.50%20L%20440.55%20281.00%20C%20418.65%20507.34%20408.80%20591.44%20395.88%20662.50%20C%20386.80%20712.39%20379.26%20731.57%20368.00%20733.42%20C%20365.94%20733.75%20363.22%20733.42%20361.38%20732.60ZM%20372.58%20694.33%20C%20383.89%20659.79%20399.00%20546.29%20417.95%20353.50%20C%20420.17%20330.95%20422.22%20311.10%20422.51%20309.39%20C%20422.87%20307.26%20422.48%20305.60%20421.27%20304.15%20C%20419.54%20302.07%20418.55%20302.01%20372.62%20301.00%20C%20335.32%20300.18%20325.43%20300.23%20324.23%20301.22%20C%20322.40%20302.74%20322.43%20303.42%20328.03%20387.50%20C%20335.77%20503.75%20341.57%20569.15%20350.10%20636.50%20C%20354.28%20669.51%20359.87%20698.75%20364.09%20709.69%20L%20365.17%20712.50%20L%20367.16%20708.65%20C%20368.25%20706.54%20370.69%20700.09%20372.58%20694.33ZM%20425.15%20279.50%20C%20425.51%20276.75%20426.13%20268.87%20426.54%20261.99%20C%20427.20%20250.69%20427.10%20249.33%20425.50%20248.00%20C%20423.78%20246.57%20397.25%20245.67%20337.62%20244.99%20C%20321.55%20244.81%20319.84%20245.30%20319.77%20250.13%20C%20319.66%20257.04%20321.42%20281.05%20322.11%20282.19%20C%20323.05%20283.70%20352.34%20284.62%20397.50%20284.54%20L%20424.50%20284.50%20L%20425.15%20279.50Z'/%3e%3c/g%3e%3c/svg%3e`,gr=`/vera-page/assets/recursos-humanos-BmL4_JjZ.svg`,_r=`/vera-page/assets/redes-y-ciberseguridad-9WGkkmbT.svg`,vr=`data:image/svg+xml,%3csvg%20aria-hidden='true'%20class='e-font-icon-svg%20e-fas-book-reader'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M352%2096c0-53.02-42.98-96-96-96s-96%2042.98-96%2096%2042.98%2096%2096%2096%2096-42.98%2096-96zM233.59%20241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55%20191.13%200%20203.51%200%20219.14v222.8c0%2014.33%2011.59%2026.28%2026.49%2027.05%2043.66%202.29%20131.99%2010.68%20193.04%2041.43%209.37%204.72%2020.48-1.71%2020.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35%202.74-144.46%2012.73-203.78%2049.05-4.1%202.51-6.41%206.96-6.41%2011.63v245.79c0%2010.19%2011.14%2016.63%2020.54%2011.9%2061.04-30.72%20149.32-39.11%20192.97-41.4%2014.9-.78%2026.49-12.73%2026.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z'%3e%3c/path%3e%3c/svg%3e`,yr=`/vera-page/assets/logo-png-ADPM22Wl.png`,br=`/vera-page/assets/news-banner-DGg-CK64.jpg`,xr=`/vera-page/assets/trama-CGgrW9R-.jpg`,Sr=Object.assign({"../assets/img/BOTONERA OFERTA PERMANENTE VERA 2026 ELVERA.EDU.AR OPT-11.png":Qn,"../assets/img/adorno.png":$n,"../assets/img/banner/banner.png":er,"../assets/img/carousel/1.png":tr,"../assets/img/carousel/2.jpg":nr,"../assets/img/carousel/3.png":rr,"../assets/img/directivos.png":ir,"../assets/img/icons/Marco superior Vera Card Web.svg":ar,"../assets/img/icons/agronomia.svg":or,"../assets/img/icons/carousel.jpg":sr,"../assets/img/icons/desarrollo-software.svg":cr,"../assets/img/icons/educacion-inicial.svg":lr,"../assets/img/icons/educación-primaria.svg":ur,"../assets/img/icons/finger-print.svg":dr,"../assets/img/icons/ingles.svg":fr,"../assets/img/icons/lengua.svg":pr,"../assets/img/icons/musica.svg":mr,"../assets/img/icons/profesorado-de-arte.svg":hr,"../assets/img/icons/recursos-humanos.svg":gr,"../assets/img/icons/redes-y-ciberseguridad.svg":_r,"../assets/img/icons/trama-icon.svg":vr,"../assets/img/logo-png.png":yr,"../assets/img/news-banner.jpg":br,"../assets/img/trama.jpg":xr});function Cr(e){return e?e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:Sr[`../assets/img/${e.replace(/^\.?\/?/,``)}`]??null:null}function wr({icono:e=dr,titulo:t=`Tecnicatura Superior en Redes y Ciberseguridad`,subtitulo:n=``,subititile:r,textoBoton:i=`Nueva carrera ¡Conocela!`,imagenFondoPath:a=``}){let o=(0,b.useRef)(null),[s,c]=(0,b.useState)(18);(0,b.useEffect)(()=>{let e=()=>{let e=o.current;if(!e)return;let t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=-t.height,i=Math.min(1,Math.max(0,(n-t.top)/(n-r)));c(10+i*78)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]);let l=`${n||r||``}`.trim(),u=Cr(a)||`/vera-page/assets/news-banner-DGg-CK64.jpg`;return(0,x.jsxs)(Tr,{ref:o,style:{"--banner-bg-y":`${s}%`,"--news-banner-bg":`url(${u})`},children:[(0,x.jsx)(`div`,{className:`news-banner-icon-shell`,"aria-hidden":`true`,children:(0,x.jsx)(`img`,{src:e,alt:``,className:`news-banner-icon`})}),(0,x.jsx)(`h2`,{children:t}),l?(0,x.jsx)(`p`,{className:`news-banner-subtitle`,children:l}):null,(0,x.jsx)(`button`,{className:`button-news`,type:`button`,children:i})]})}var Tr=Zn.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  min-height: 320px;
  max-height: 420px;
  padding: 2.3rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background-image:
    linear-gradient(180deg, rgba(129, 37, 214, 0.46), rgba(171, 72, 235, 0.42), rgba(84, 18, 146, 0.62)),
    var(--news-banner-bg);
  background-size: cover;
  background-position: center var(--banner-bg-y, 18%);
  background-repeat: no-repeat;
  box-shadow:
    0 24px 42px rgba(36, 20, 61, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px) saturate(120%);
  color: var(--color-white);
  text-align: center;
    max-height: 420px;
    min-height: 320px;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(165deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.09) 18%, rgba(255, 255, 255, 0) 42%),
      radial-gradient(92% 68% at 50% 104%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 34%, rgba(255, 255, 255, 0) 72%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    left: -10%;
    right: -10%;
    bottom: -18%;
    height: 62%;
    background:
      linear-gradient(92deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 22%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.06) 78%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(80% 78% at 50% 100%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 48%, rgba(255, 255, 255, 0) 80%);
    filter: blur(18px);
    opacity: 0.88;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .news-banner-icon-shell {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.88);
    background: radial-gradient(130% 130% at 50% 35%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 55%, rgba(255, 255, 255, 0.03) 100%);
    box-shadow:
      0 12px 20px rgba(0, 0, 0, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  .news-banner-icon {
    width: 28px;
    height: 28px;
    display: block;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 200;
    font-size: clamp(1rem, 0.9rem + 0.9vw, 1.5rem);
    line-height: 1.05;
    letter-spacing: 0.01em;
    color: var(--color-white);
    text-transform: uppercase;
    max-width: 48ch;
    text-shadow:
        0 0 8px rgba(91,46,166,.5),
        0 0 18px rgba(91,46,166,.4),
        0 0 32px rgba(91,46,166,.3);
  }

  .news-banner-subtitle {
    margin: -0.25rem 0 0;
    font-family: var(--font-body);
    font-size: clamp(0.86rem, 0.8rem + 0.22vw, 1rem);
    line-height: 1.35;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.95);
    max-width: 62ch;
    text-shadow:
      0 0 8px rgba(91, 46, 166, 0.28),
      0 0 16px rgba(91, 46, 166, 0.16);
  }

  .button-news {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    width: min(100%, 420px);
    margin-top: 0.35rem;
    padding: 0.95rem 1.25rem;
    border: 1px solid rgba(230, 230, 239, 0.75);
    border-radius: 16px;
    background:
      radial-gradient(130% 180% at 50% 50%, rgba(169, 141, 224, 0.24) 0%, rgba(169, 141, 224, 0.11) 35%, rgba(255, 255, 255, 0.95) 78%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.84));
    color: var(--color-dark-purple);
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-shadow:
      0 0 8px rgba(91, 46, 166, 0.18),
      0 0 16px rgba(91, 46, 166, 0.1);
    box-shadow:
      0 12px 26px rgba(59, 31, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(8px) saturate(120%);
    cursor: pointer;
    transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .button-news::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.28) 26%,
      rgba(255, 255, 255, 0) 58%
    );
    z-index: -1;
  }

  .button-news:hover,
  .button-news:focus-visible {
    color: var(--color-institutional-purple);
    box-shadow:
      0 8px 16px rgba(91, 46, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
    transform: translateY(-1px);
  }

  .button-news:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.78);
    outline-offset: 2px;
  }
`;function Er(){return(0,x.jsx)(Dr,{children:(0,x.jsx)(`section`,{className:`banner-section`,children:(0,x.jsxs)(`div`,{className:`banner-content`,children:[(0,x.jsxs)(`h1`,{className:`banner-title`,children:[`Instituto de Educacion Superior`,(0,x.jsx)(`br`,{}),`Rosario Vera Penaloza`]}),(0,x.jsx)(`h2`,{className:`banner-subtitle`,children:`Comprometidos con la educacion y el desarrollo profesional en nuestra comunidad`}),(0,x.jsx)(`button`,{className:`banner-button`,children:`Conoce las ofertas academicas`})]})})})}var Dr=Zn.section`
    width: 100%;
    margin-top: 2rem;

    .banner-section {
        position: relative;
        min-height: 440px;
        margin: 0 auto;
        border-radius: 2rem;
        overflow: hidden;
        isolation: isolate;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        background:
            linear-gradient(102deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 42%, rgba(255, 255, 255, 0.45) 62%, rgba(255, 255, 255, 0.12) 78%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(120% 190% at 34% -36%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 34%, rgba(255, 255, 255, 0.06) 74%),
            url(${er});
        background-repeat: no-repeat;
        background-position: left top, left top, right -2% bottom 70%;
        background-size: 100% 100%, 100% 100%, 90% auto;
        border: 1px solid rgba(230, 230, 239, 0.8);
        box-shadow:
            0 28px 46px rgba(59, 31, 102, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(169, 141, 224, 0.16);
        backdrop-filter: blur(8px) saturate(118%);
    }

    .banner-section::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        z-index: 4;
        background:
            linear-gradient(165deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.16) 30%, rgba(255, 255, 255, 0) 60%),
            radial-gradient(80% 46% at 24% 110%, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0) 70%);
        mix-blend-mode: screen;
    }

    .banner-section::after {
        content: '';
        position: absolute;
        left: 23%;
        right: -4%;
        bottom: -14%;
        height: 54%;
        pointer-events: none;
        z-index: 3;
        border-radius: 50% 50% 0 0;
        background:
            linear-gradient(162deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.07) 52%, rgba(169, 141, 224, 0.13) 100%),
            radial-gradient(95% 120% at 0% 52%, rgba(169, 141, 224, 0.16), rgba(169, 141, 224, 0));
        filter: blur(0.2px);
    }

    .banner-content {
        position: relative;
        z-index: 5;
        width: min(58%, 760px);
        padding: 3.1rem 2.2rem 1.8rem 2.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
    }

    .banner-title {
        margin: 0;
        color: var(--color-institutional-purple);
        font-family: var(--font-heading);
        font-weight: 700;
        line-height: 1.08;
        font-size: clamp(2rem, 1.3rem + 2.2vw, 3.8rem);
    }

    .banner-subtitle {
        margin: 0;
        max-width: 640px;
        color: var(--color-dark-purple);
        font-family: var(--font-body);
        font-weight: 500;
        line-height: 1.25;
        font-size: clamp(1.05rem, 0.9rem + 0.45vw, 1.9rem);
    }

    .banner-button {
        margin-top: auto;
        width: min(100%, 320px);
        border: 0;
        border-radius: 0.9rem;
        padding: 1rem 1.25rem;
        color: var(--color-white);
        background: var(--color-gradient);
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: clamp(1rem, 0.94rem + 0.2vw, 1.15rem);
        line-height: 1.1;
        cursor: pointer;
        box-shadow:
            0 12px 22px rgba(91, 46, 166, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.42);
    }

    
    @media (max-width: 1080px) {
        .banner-section {
            min-height: 390px;
            background-size: 100% 100%, 100% 100%, 72% auto;
            background-position: left top, left top, right -5% bottom -2%;
        }

        .banner-content {
            width: 100%;
            padding: 2rem 1.35rem 1.35rem;
            gap: 1rem;
        }

        .banner-button {
            margin-top: 0.45rem;
        }
    }

    @media (max-width: 768px) {
        padding: 0.6rem 1rem 1.2rem;

        .banner-section {
            min-height: 340px;
            border-radius: 1.35rem;
            background-size: 100% 100%, 100% 100%, 84% auto;
            background-position: left top, left top, right -16% bottom -2%;
        }

        .banner-content {
            padding: 1.4rem 1rem 1.05rem;
        }

        .banner-subtitle {
            max-width: 94%;
        }

        .banner-button {
            width: 250px;
            padding: 0.85rem 1rem;
        }
    }
`;function Or(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function kr(e){if(Array.isArray(e))return e}function Ar(e){if(Array.isArray(e))return Or(e)}function jr(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Mr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Ur(r.key),r)}}function Nr(e,t,n){return t&&Mr(e.prototype,t),n&&Mr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pr(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Gr(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function M(e,t,n){return(t=Ur(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ir(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Lr(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?zr(Object(n),!0).forEach(function(t){M(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Br(e,t){return kr(e)||Ir(e,t)||Gr(e,t)||Lr()}function Vr(e){return Ar(e)||Fr(e)||Gr(e)||Rr()}function Hr(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ur(e){var t=Hr(e,`string`);return typeof t==`symbol`?t:t+``}function Wr(e){"@babel/helpers - typeof";return Wr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Wr(e)}function Gr(e,t){if(e){if(typeof e==`string`)return Or(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Or(e,t):void 0}}var Kr=function(){},qr={},Jr={},Yr=null,Xr={mark:Kr,measure:Kr};try{typeof window<`u`&&(qr=window),typeof document<`u`&&(Jr=document),typeof MutationObserver<`u`&&(Yr=MutationObserver),typeof performance<`u`&&(Xr=performance)}catch{}var Zr=(qr.navigator||{}).userAgent,Qr=Zr===void 0?``:Zr,$r=qr,P=Jr,ei=Yr,ti=Xr;$r.document;var ni=!!P.documentElement&&!!P.head&&typeof P.addEventListener==`function`&&typeof P.createElement==`function`,ri=~Qr.indexOf(`MSIE`)||~Qr.indexOf(`Trident/`),ii,ai=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,oi=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,si={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},ci={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},li=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],F=`classic`,ui=`duotone`,di=`sharp`,fi=`sharp-duotone`,pi=`chisel`,mi=`etch`,hi=`graphite`,gi=`jelly`,_i=`jelly-duo`,vi=`jelly-fill`,yi=`mosaic`,bi=`notdog`,xi=`notdog-duo`,Si=`pixel`,Ci=`slab`,wi=`slab-duo`,Ti=`slab-press`,Ei=`slab-press-duo`,Di=`thumbprint`,Oi=`utility`,ki=`utility-duo`,Ai=`utility-fill`,ji=`vellum`,Mi=`whiteboard`,Ni=`Classic`,Pi=`Duotone`,Fi=`Sharp`,Ii=`Sharp Duotone`,I=`Chisel`,L=`Etch`,Li=`Graphite`,Ri=`Jelly`,zi=`Jelly Duo`,Bi=`Jelly Fill`,Vi=`Mosaic`,Hi=`Notdog`,Ui=`Notdog Duo`,Wi=`Pixel`,Gi=`Slab`,Ki=`Slab Duo`,qi=`Slab Press`,Ji=`Slab Press Duo`,Yi=`Thumbprint`,Xi=`Utility`,Zi=`Utility Duo`,Qi=`Utility Fill`,$i=`Vellum`,ea=`Whiteboard`,ta=[F,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi];ii={},M(M(M(M(M(M(M(M(M(M(ii,F,Ni),ui,Pi),di,Fi),fi,Ii),pi,I),mi,L),hi,Li),gi,Ri),_i,zi),vi,Bi),M(M(M(M(M(M(M(M(M(M(ii,yi,Vi),bi,Hi),xi,Ui),Si,Wi),Ci,Gi),wi,Ki),Ti,qi),Ei,Ji),Di,Yi),Oi,Xi),M(M(M(M(ii,ki,Zi),Ai,Qi),ji,$i),Mi,ea);var na={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},ra={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ia=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),aa={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},oa=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],sa={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},ca=[`kit`];M(M({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var la={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ua={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},da={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},fa={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},pa,ma={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ha=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];pa={},M(M(M(M(M(M(M(M(M(M(pa,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),M(M(M(M(M(M(M(M(M(M(pa,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),M(M(M(M(pa,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),M(M({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ga={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},_a={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},va={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ya=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ha,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),ba=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],xa=[1,2,3,4,5,6,7,8,9,10],Sa=xa.concat([11,12,13,14,15,16,17,18,19,20]),Ca=[].concat(Vr(Object.keys(_a)),ba,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,ma.GROUP,ma.SWAP_OPACITY,ma.PRIMARY,ma.SECONDARY],xa.map(function(e){return`${e}x`}),Sa.map(function(e){return`w-${e}`})),wa={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Ta=`___FONT_AWESOME___`,Ea=16,Da=`fa`,Oa=`svg-inline--fa`,ka=`data-fa-i2svg`,Aa=`data-fa-pseudo-element`,ja=`data-fa-pseudo-element-pending`,Ma=`data-prefix`,Na=`data-icon`,Pa=`fontawesome-i2svg`,Fa=`async`,Ia=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],La=[`::before`,`::after`,`:before`,`:after`],Ra=function(){try{return!0}catch{return!1}}();function za(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[F]}})}var Ba=N({},si);Ba[F]=N(N(N(N({},{"fa-duotone":`duotone`}),si[F]),sa.kit),sa[`kit-duotone`]);var Va=za(Ba),Ha=N({},aa);Ha[F]=N(N(N(N({},{duotone:`fad`}),Ha[F]),fa.kit),fa[`kit-duotone`]);var Ua=za(Ha),Wa=N({},va);Wa[F]=N(N({},Wa[F]),da.kit);var Ga=za(Wa),Ka=N({},ga);Ka[F]=N(N({},Ka[F]),la.kit),za(Ka);var qa=ai,Ja=`fa-layers-text`,Ya=oi;za(N({},na));var Xa=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Za=ci,Qa=[].concat(Vr(ca),Vr(Ca)),$a=$r.FontAwesomeConfig||{};function eo(e){var t=P.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function to(e){return e===``?!0:e===`false`?!1:e===`true`||e}P&&typeof P.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Br(e,2),n=t[0],r=t[1],i=to(eo(n));i!=null&&($a[r]=i)});var no={styleDefault:`solid`,familyDefault:F,cssPrefix:Da,replacementClass:Oa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$a.familyPrefix&&($a.cssPrefix=$a.familyPrefix);var ro=N(N({},no),$a);ro.autoReplaceSvg||(ro.observeMutations=!1);var R={};Object.keys(no).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){ro[e]=t,io.forEach(function(e){return e(R)})},get:function(){return ro[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){ro.cssPrefix=e,io.forEach(function(e){return e(R)})},get:function(){return ro.cssPrefix}}),$r.FontAwesomeConfig=R;var io=[];function ao(e){return io.push(e),function(){io.splice(io.indexOf(e),1)}}var oo=Ea,so={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function co(e){if(!(!e||!ni)){var t=P.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=P.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return P.head.insertBefore(t,r),e}}var lo=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function uo(){for(var e=12,t=``;e-->0;)t+=lo[Math.random()*62|0];return t}function z(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fo(e){return e.classList?z(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function po(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function B(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${po(e[n])}" `},``).trim()}function V(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function mo(e){return e.size!==so.size||e.x!==so.x||e.y!==so.y||e.rotate!==so.rotate||e.flipX||e.flipY}function ho(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function go(e){var t=e.transform,n=e.width,r=n===void 0?Ea:n,i=e.height,a=i===void 0?Ea:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&ri?`translate(${t.x/oo-r/2}em, ${t.y/oo-a/2}em) `:s?`translate(calc(-50% + ${t.x/oo}em), calc(-50% + ${t.y/oo}em)) `:`translate(${t.x/oo}em, ${t.y/oo}em) `,c+=`scale(${t.size/oo*(t.flipX?-1:1)}, ${t.size/oo*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var _o=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function vo(){var e=Da,t=Oa,n=R.cssPrefix,r=R.replacementClass,i=_o;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var yo=!1;function bo(){R.autoAddCss&&!yo&&(co(vo()),yo=!0)}var xo={mixout:function(){return{dom:{css:vo,insertCss:bo}}},hooks:function(){return{beforeDOMElementCreation:function(){bo()},beforeI2svg:function(){bo()}}}},H=$r||{};H[Ta]||(H[Ta]={}),H[Ta].styles||(H[Ta].styles={}),H[Ta].hooks||(H[Ta].hooks={}),H[Ta].shims||(H[Ta].shims=[]);var So=H[Ta],Co=[],wo=function(){P.removeEventListener(`DOMContentLoaded`,wo),To=1,Co.map(function(e){return e()})},To=!1;ni&&(To=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),To||P.addEventListener(`DOMContentLoaded`,wo));function Eo(e){ni&&(To?setTimeout(e,0):Co.push(e))}function Do(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?po(e):`<${t} ${B(r)}>${a.map(Do).join(``)}</${t}>`}function Oo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ko=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Ao=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:ko(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function jo(e){return Vr(e).length===1?e.codePointAt(0).toString(16):null}function Mo(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function No(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Mo(t);typeof So.hooks.addPack==`function`&&!r?So.hooks.addPack(e,Mo(t)):So.styles[e]=N(N({},So.styles[e]||{}),i),e===`fas`&&No(`fa`,t)}var Po=So.styles,Fo=So.shims,Io=Object.keys(Ga),Lo=Io.reduce(function(e,t){return e[t]=Object.keys(Ga[t]),e},{}),Ro=null,zo={},Bo={},Vo={},Ho={},Uo={};function Wo(e){return~Qa.indexOf(e)}function Go(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Wo(i)?i:null}var Ko=function(){var e=function(e){return Ao(Po,function(t,n,r){return t[r]=Ao(n,e,{}),t},{})};zo=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Bo=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Uo=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Po||R.autoFetchSvg,n=Ao(Fo,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Vo=n.names,Ho=n.unicodes,Ro=ts(R.styleDefault,{family:R.familyDefault})};ao(function(e){Ro=ts(e.styleDefault,{family:R.familyDefault})}),Ko();function qo(e,t){return(zo[e]||{})[t]}function Jo(e,t){return(Bo[e]||{})[t]}function Yo(e,t){return(Uo[e]||{})[t]}function Xo(e){return Vo[e]||{prefix:null,iconName:null}}function Zo(e){var t=Ho[e],n=qo(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Qo(){return Ro}var $o=function(){return{prefix:null,iconName:null,rest:[]}};function es(e){var t=F,n=Io.reduce(function(e,t){return e[t]=`${R.cssPrefix}-${t}`,e},{});return ta.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Lo[r].includes(e)}))&&(t=r)}),t}function ts(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?F:t,r=Va[n][e];if(n===ui&&!e)return`fad`;var i=Ua[n][e]||Ua[n][r],a=e in So.styles?e:null;return i||a||null}function ns(e){var t=[],n=null;return e.forEach(function(e){var r=Go(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function rs(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var is=ya.concat(oa);function as(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=rs(e.filter(function(e){return is.includes(e)})),a=rs(e.filter(function(e){return!is.includes(e)})),o=Br(i.filter(function(e){return r=e,!li.includes(e)}),1)[0],s=o===void 0?null:o,c=es(i),l=N(N({},ns(a)),{},{prefix:ts(s,{family:c})});return N(N(N({},l),ls({values:e,family:c,styles:Po,config:R,canonical:l,givenPrefix:r})),os(n,r,l))}function os(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Xo(i):{},o=Yo(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Po.far&&Po.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ss=ta.filter(function(e){return e!==F||e!==ui}),cs=Object.keys(va).filter(function(e){return e!==F}).map(function(e){return Object.keys(va[e])}).flat();function ls(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ui,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ss.includes(n)&&(Object.keys(s).find(function(e){return cs.includes(e)})||l.autoFetchSvg)&&(r.prefix=ia.get(n).defaultShortPrefixId,r.iconName=Yo(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Qo()||`fas`),r}var us=function(){function e(){jr(this,e),this.definitions={}}return Nr(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=N(N({},e.definitions[n]||{}),t[n]),No(n,t[n]);var r=Ga[F][n];r&&No(r,t[n]),Ko()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),ds=[],fs={},ps={},ms=Object.keys(ps);function hs(e,t){var n=t.mixoutsTo;return ds=e,fs={},Object.keys(ps).forEach(function(e){ms.indexOf(e)===-1&&delete ps[e]}),ds.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Wr(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){fs[e]||(fs[e]=[]),fs[e].push(r[e])})}e.provides&&e.provides(ps)}),n}function gs(e,t){var n=[...arguments].slice(2);return(fs[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function _s(e){var t=[...arguments].slice(1);(fs[e]||[]).forEach(function(e){e.apply(null,t)})}function vs(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ps[e]?ps[e].apply(null,t):void 0}function ys(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Qo();if(t)return t=Yo(n,t)||t,Oo(bs.definitions,n,t)||Oo(So.styles,n,t)}var bs=new us,xs={noAuto:function(){R.autoReplaceSvg=!1,R.observeMutations=!1,_s(`noAuto`)},config:R,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(_s(`beforeI2svg`,e),vs(`pseudoElements2svg`,e),vs(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Eo(function(){Ss({autoReplaceSvgRoot:t}),_s(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Wr(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Yo(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ts(e[0]);return{prefix:n,iconName:Yo(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(qa))){var r=as(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Qo(),iconName:Yo(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Qo();return{prefix:i,iconName:Yo(i,e)||e}}}},library:bs,findIconDefinition:ys,toHtml:Do},Ss=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?P:e;(Object.keys(So.styles).length>0||R.autoFetchSvg)&&ni&&R.autoReplaceSvg&&xs.dom.i2svg({node:t})};function Cs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Do(e)})}}),Object.defineProperty(e,"node",{get:function(){if(ni){var t=P.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ws(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(mo(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=V(N(N({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Ts(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:N(N({},i),{},{id:o}),children:r}]}]}function Es(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Ds(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[R.replacementClass,a?`${R.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:N(N({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Es(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[ka]=``);var _=N(N({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:N({},l.styles)}),v=r.found&&n.found?vs(`generateAbstractMask`,_)||{children:[],attributes:{}}:vs(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Ts(_):ws(_)}function Os(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=N(N({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[ka]=``);var l=N({},a.styles);mo(i)&&(l.transform=go({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=V(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function ks(e){var t=e.content,n=e.extra,r=N(N({},n.attributes),{},{class:n.classes.join(` `)}),i=V(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var As=So.styles;function js(e){var t=e[0],n=e[1],r=Br(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${Za.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${Za.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${Za.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Ms={found:!1,width:512,height:512};function Ns(e,t){!Ra&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Ps(e,t){var n=t;return t===`fa`&&R.styleDefault!==null&&(t=Qo()),new Promise(function(r,i){if(n===`fa`){var a=Xo(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&As[t]&&As[t][e]){var o=As[t][e];return r(js(o))}Ns(e,t),r(N(N({},Ms),{},{icon:R.showMissingIcons&&e&&vs(`missingIconAbstract`)||{}}))})}var Fs=function(){},Is=R.measurePerformance&&ti&&ti.mark&&ti.measure?ti:{mark:Fs,measure:Fs},Ls=`FA "7.3.1"`,Rs=function(e){return Is.mark(`${Ls} ${e} begins`),function(){return zs(e)}},zs=function(e){Is.mark(`${Ls} ${e} ends`),Is.measure(`${Ls} ${e}`,`${Ls} ${e} begins`,`${Ls} ${e} ends`)},Bs={begin:Rs,end:zs},Vs=function(){};function Hs(e){return typeof(e.getAttribute?e.getAttribute(ka):null)==`string`}function Us(e){var t=e.getAttribute?e.getAttribute(Ma):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function Ws(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function Gs(){return R.autoReplaceSvg===!0?Xs.replace:Xs[R.autoReplaceSvg]||Xs.replace}function Ks(e){return P.createElementNS(`http://www.w3.org/2000/svg`,e)}function qs(e){return P.createElement(e)}function Js(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ks:qs:t;if(typeof e==`string`)return P.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Js(e,{ceFn:n}))}),r}function Ys(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Xs={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Js(e),t)}),t.getAttribute(ka)===null&&R.keepOriginalSource){var n=P.createComment(Ys(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~fo(t).indexOf(R.replacementClass))return Xs.replace(e);var r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Do(e)}).join(`
`);t.setAttribute(ka,``),t.innerHTML=a}};function Zs(e){e()}function Qs(e,t){var n=typeof t==`function`?t:Vs;if(e.length===0)n();else{var r=Zs;R.mutateApproach===Fa&&(r=$r.requestAnimationFrame||Zs),r(function(){var t=Gs(),r=Bs.begin(`mutate`);e.map(t),r(),n()})}}var $s=!1;function ec(){$s=!0}function tc(){$s=!1}var nc=null;function rc(e){if(ei&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Vs:t,r=e.nodeCallback,i=r===void 0?Vs:r,a=e.pseudoElementsCallback,o=a===void 0?Vs:a,s=e.observeMutationsRoot,c=s===void 0?P:s;nc=new ei(function(e){if(!$s){var t=Qo();z(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Hs(e.addedNodes[0])&&(R.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Hs(e.target)&&~Xa.indexOf(e.attributeName))if(e.attributeName===`class`&&Us(e.target)){var r=as(fo(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Ma,a||t),s&&e.target.setAttribute(Na,s)}else Ws(e.target)&&i(e.target)})}}),ni&&nc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ic(){nc&&nc.disconnect()}function ac(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function oc(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=as(fo(e));return i.prefix||=Qo(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Jo(i.prefix,e.innerText)||qo(i.prefix,jo(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function sc(e){return z(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function cc(){return{iconName:null,prefix:null,transform:so,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=oc(e),r=n.iconName,i=n.prefix,a=n.rest,o=sc(e),s=gs(`parseNodeAttributes`,{},e);return N({iconName:r,prefix:i,transform:so,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ac(e):[],attributes:o}},s)}var uc=So.styles;function dc(e){var t=R.autoReplaceSvg===`nest`?lc(e,{styleParser:!1}):lc(e);return~t.extra.classes.indexOf(Ja)?vs(`generateLayersText`,e,t):vs(`generateSvgReplacementMutation`,e,t)}function fc(){return[].concat(Vr(oa),Vr(ya))}function pc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();var n=P.documentElement.classList,r=function(e){return n.add(`${Pa}-${e}`)},i=function(e){return n.remove(`${Pa}-${e}`)},a=R.autoFetchSvg?fc():li.concat(Object.keys(uc));a.includes(`fa`)||a.push(`fa`);var o=[`.${Ja}:not([${ka}])`].concat(a.map(function(e){return`.${e}:not([${ka}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=z(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Bs.begin(`onTree`),l=s.reduce(function(e,t){try{var n=dc(t);n&&e.push(n)}catch(e){Ra||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Qs(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function mc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dc(e).then(function(e){e&&Qs([e],t)})}function hc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ys(t||{}),i=n.mask;return i&&=(i||{}).icon?i:ys(i||{}),e(r,N(N({},n),{},{mask:i}))}}var gc=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?so:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Cs(N({type:`icon`},e),function(){return _s(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Ds({icons:{main:js(v),mask:s?js(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:N(N({},so),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},_c={mixout:function(){return{icon:hc(gc)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=pc,e.nodeCallback=mc,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?P:t,r=e.callback;return pc(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Ps(n,r),o.iconName?Ps(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Br(o,2),u=l[0],d=l[1];t([e,Ds({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=V(a);o.length>0&&(n.style=o);var s;return mo(i)&&(s=vs(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},vc={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Cs({type:`layer`},function(){_s(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`].concat(Vr(r)).join(` `)},children:n}]})}}}},yc={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Cs({type:`counter`,content:e},function(){return _s(`beforeDOMElementCreation`,{content:e,params:t}),ks({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-counter`].concat(Vr(a))}})})}}}},bc={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?so:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Cs({type:`text`,content:e},function(){return _s(`beforeDOMElementCreation`,{content:e,params:t}),Os({content:e,transform:N(N({},so),r),extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-text`].concat(Vr(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ri){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Os({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},xc=RegExp(`"`,`ug`),Sc=[1105920,1112319],Cc=N(N(N(N({},{FontAwesome:{normal:`fas`,400:`fas`}}),ra),wa),ua),wc=Object.keys(Cc).reduce(function(e,t){return e[t.toLowerCase()]=Cc[t],e},{}),Tc=Object.keys(wc).reduce(function(e,t){var n=wc[t];return e[t]=n[900]||Vr(Object.entries(n))[0][1],e},{});function Ec(e){return jo(Vr(e.replace(xc,``))[0]||``)}function Dc(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(xc,``),r=n.codePointAt(0),i=r>=Sc[0]&&r<=Sc[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Oc(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(wc[n]||{})[i]||Tc[n]}function kc(e,t){var n=`${ja}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=z(e.children).filter(function(e){return e.getAttribute(Aa)===t})[0],o=$r.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ya),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Oc(s,l),p=Ec(d),m=c[0].startsWith(`FontAwesome`),h=Dc(o),g=qo(f,p),_=g;if(m){var v=Zo(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Ma)!==f||a.getAttribute(Na)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=cc(),b=y.extra;b.attributes[Aa]=t,Ps(g,f).then(function(i){var a=Ds(N(N({},y),{},{icons:{main:i,mask:$o()},prefix:f,iconName:_,extra:b,watchable:!0})),o=P.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Do(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ac(e){return Promise.all([kc(e,`::before`),kc(e,`::after`)])}function jc(e){return e.parentNode!==document.head&&!~Ia.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Aa)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Mc=function(e){return!!e&&La.some(function(t){return e.includes(t)})},Nc=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Pr(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Mc(a)){var o=La.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Pc(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(ni){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Pr(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Pr(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Pr(Nc(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){R.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=z(n).filter(jc).map(Ac),i=Bs.begin(`searchPseudoElements`);ec(),Promise.all(r).then(function(){i(),tc(),e()}).catch(function(){i(),tc(),t()})})}}var Fc={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Pc,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?P:t;R.searchPseudoElements&&Pc(n)}}},Ic=!1,Lc={mixout:function(){return{dom:{unwatch:function(){ec(),Ic=!0}}}},hooks:function(){return{bootstrap:function(){rc(gs(`mutationObserverCallbacks`,{}))},noAuto:function(){ic()},watch:function(e){var t=e.observeMutationsRoot;Ic?tc():rc(gs(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Rc=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},U={mixout:function(){return{parse:{transform:function(e){return Rc(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Rc(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:N({},a.outer),children:[{tag:`g`,attributes:N({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:N(N({},t.icon.attributes),a.path)}]}]}}}},zc={x:0,y:0,width:`100%`,height:`100%`};function Bc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Vc(e){return e.tag===`g`?e.children:[e]}hs([xo,_c,vc,yc,bc,Fc,Lc,U,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?as(n.split(` `).map(function(e){return e.trim()})):$o();return r.prefix||=Qo(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=ho({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:N(N({},zc),{},{fill:`white`})},p=c.children?{children:c.children.map(Bc)}:{},m={tag:`g`,attributes:N({},d.inner),children:[Bc(N({tag:c.tag,attributes:N(N({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:N({},d.outer),children:[m]},g=`mask-${a||uo()}`,_=`clip-${a||uo()}`,v={tag:`mask`,attributes:N(N({},zc),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Vc(u)},v]};return t.push(y,{tag:`rect`,attributes:N({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},zc)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;$r.matchMedia&&(t=$r.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:N(N({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=N(N({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:N(N({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:N(N({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:N(N({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:N(N({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:N(N({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:N(N({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:N(N({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:xs}),xs.noAuto;var Hc=xs.config;xs.library,xs.dom;var Uc=xs.parse;xs.findIconDefinition,xs.toHtml;var Wc=xs.icon;xs.layer,xs.text,xs.counter;function Gc(e){return e-=0,e===e}function Kc(e){return Gc(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var qc=(e,t)=>b.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Jc(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Yc=new Map,Xc=1e3;function Zc(e){if(Yc.has(e))return Yc.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Kc(n);t[e.startsWith(`webkit`)?Jc(e):e]=r}}}n=a+1}if(Yc.size===Xc){let e=Yc.keys().next().value;e&&Yc.delete(e)}return Yc.set(e,t),t}function Qc(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Qc(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Zc(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Kc(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(qc)))}return e(t.tag,{...a,...u},...r)}var $c=Qc.bind(null,b.createElement),el=(e,t)=>{let n=(0,b.useId)();return e||(t?n:void 0)},tl=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var nl=`searchPseudoElementsFullScan`in Hc&&typeof Hc.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,rl=Number.parseInt(nl)>=7,il=()=>rl,al=`fa`,ol={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},sl={left:`fa-pull-left`,right:`fa-pull-right`},cl={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},W={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},G={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},ll={default:`fa-layers`};function ul(e){let t=Hc.cssPrefix||Hc.familyPrefix||al;return t===al?e:e.replace(new RegExp(String.raw`(?<=^|\s)${al}-`,`g`),`${t}-`)}function dl(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:ee,buzz:S,float:C,jello:w,spinSnap:te,spinSnap4:T,spinSnap8:ne,swing:re,wag:ie,className:ae}=e,E=[];return ae&&E.push(...ae.split(` `)),t&&E.push(ol.beat),n&&E.push(ol.fade),r&&E.push(ol.beatFade),i&&E.push(ol.bounce),a&&E.push(ol.shake),o&&E.push(ol.spin),c&&E.push(ol.spinReverse),s&&E.push(ol.spinPulse),l&&E.push(ol.pulse),u&&E.push(G.fixedWidth),d&&E.push(G.inverse),f&&E.push(G.border),p===!0&&E.push(G.flip),(p===`horizontal`||p===`both`)&&E.push(G.flipHorizontal),(p===`vertical`||p===`both`)&&E.push(G.flipVertical),m!=null&&E.push(W[m]),h!=null&&h!==0&&E.push(cl[h]),g!=null&&E.push(sl[g]),_&&E.push(G.swapOpacity),il()?(v&&E.push(G.rotateBy),y&&E.push(G.widthAuto),b&&E.push(G.canvasSquare),x&&E.push(G.canvasRoomy),ee&&E.push(ol.flip360),S&&E.push(ol.buzz),C&&E.push(ol.float),w&&E.push(ol.jello),te&&E.push(ol.spinSnap),T&&E.push(ol.spinSnap4),ne&&E.push(ol.spinSnap8),re&&E.push(ol.swing),ie&&E.push(ol.wag),(Hc.cssPrefix||Hc.familyPrefix||al)===al?E:E.map(ul)):E}var fl=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function pl(e){if(e)return fl(e)?e:Uc.icon(e)}function ml(e){return Object.keys(e)}var hl=new tl(`FontAwesomeIcon`),gl={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},_l=new Set(Object.keys(gl)),vl=b.forwardRef((e,t)=>{let n={...gl,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=el(c,!!i),d=el(s,!!o),f=pl(r);if(!f)return hl.error(`Icon lookup is undefined`,r),null;let p=dl(n),m=typeof l==`string`?Uc.transform(l):l,h=pl(i),g=Wc(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return hl.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ml(n))_l.has(e)||(v[e]=n[e]);return $c(_[0],v)});vl.displayName=`FontAwesomeIcon`,`${ll.default}${G.fixedWidth}`;var yl={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},bl={prefix:`fas`,iconName:`newspaper`,icon:[512,512,[128240],`f1ea`,`M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z`]},xl={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},Sl={fas:{bars:{prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]}}},Cl=[{label:`Sobre el Vera`,links:[{href:`#`,text:`Nuestra historia`},{href:`#`,text:`Autoridades`}]},{label:`Carreras`,links:[{href:`#`,text:`Ingreso 2026`},{href:`#`,text:`Carreras docentes`},{href:`#`,text:`Carreras técnicas`}]},{label:`Formación continua`,links:[{href:`#`,text:`Cursos`},{href:`#`,text:`Postítulos`}]},{label:`Comunidad Vera`,links:[{href:`#`,text:`TRAMA`},{href:`#`,text:`Políticas estudiantiles`},{href:`#`,text:`Biblioteca`},{href:`#`,text:`Becas de apoyo`},{href:`#`,text:`Beneficios Vera`},{href:`#`,text:`Actividades extracurriculares`}]},{label:`Investigación`,links:[{href:`#`,text:`Becas`},{href:`#`,text:`Convocatorias`},{href:`#`,text:`Proyectos`}]},{label:`Recurso docente`,links:[{href:`#`,text:`Formativas`},{href:`#`,text:`Actualización profesional`}]}];function wl(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(Tl,{children:[(0,x.jsx)(`button`,{type:`button`,className:`mobile-toggle`,"aria-label":`Abrir menú`,"aria-expanded":e,onClick:()=>t(e=>!e),children:(0,x.jsx)(vl,{icon:Sl.fas.bars})}),(0,x.jsx)(`a`,{href:`#`,className:`logo-card`,"aria-label":`Inicio Vera`,children:(0,x.jsx)(`img`,{src:yr,alt:`Rosario Vera Peñaloza`,className:`logo-image`})}),(0,x.jsx)(`div`,{className:`menu-shell`,role:`navigation`,"aria-label":`Menu principal`,children:(0,x.jsx)(`ul`,{className:`nav-links`,children:Cl.map(e=>(0,x.jsxs)(`li`,{className:`nav-item`,children:[(0,x.jsxs)(`a`,{href:`#`,className:`nav-link`,children:[e.label,(0,x.jsx)(`span`,{className:`chevron`,"aria-hidden":`true`,children:`▾`})]}),(0,x.jsx)(`ul`,{className:`submenu`,children:e.links.map(e=>(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:e.href,children:e.text})},e.text))})]},e.label))})}),(0,x.jsx)(`div`,{className:`mobile-panel ${e?`open`:``}`,children:(0,x.jsx)(`ul`,{className:`mobile-list`,children:Cl.map(e=>(0,x.jsxs)(`li`,{className:`mobile-group`,children:[(0,x.jsx)(`a`,{href:`#`,className:`mobile-group-title`,onClick:()=>t(!1),children:e.label}),(0,x.jsx)(`ul`,{className:`mobile-sublist`,children:e.links.map(e=>(0,x.jsx)(`li`,{children:(0,x.jsx)(`a`,{href:e.href,onClick:()=>t(!1),children:e.text})},e.text))})]},e.label))})})]})}var Tl=Zn.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  background: transparent;
  justify-content: flex-start;
  position: relative;
  z-index: 60;

  .mobile-toggle,
  .mobile-panel {
    display: none;
  }

  .mobile-toggle {
    border: 0;
    width: 46px;
    height: 46px;
    border-radius: 0.85rem;
    background:
      radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.3) 0%, rgba(169, 141, 224, 0.14) 48%, rgba(255, 255, 255, 0.9) 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.82));
    box-shadow:
      0 10px 20px rgba(59, 31, 102, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    padding: 0;
  }

  .mobile-toggle svg {
    width: 19px;
    height: 19px;
    color: var(--color-dark-purple);
  }

  .logo-card {
    height: 130px;
    width: 180px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border-radius: 1.35rem;
    background:
      radial-gradient(120% 160% at 50% 45%, rgba(169, 141, 224, 0.28) 0%, rgba(169, 141, 224, 0.1) 38%, rgba(255, 255, 255, 0.94) 78%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.86));
    display: grid;
    place-items: center;
    box-shadow:
      0 14px 30px rgba(91, 46, 166, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.95),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    border: 1px solid rgba(230, 230, 239, 0.76);
    backdrop-filter: blur(10px) saturate(120%);
    padding: 0.55rem;
  }

  .logo-card::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.88) 0%,
      rgba(255, 255, 255, 0.24) 28%,
      rgba(255, 255, 255, 0) 62%
    );
    z-index: -1;
  }

  .logo-image {
    width: 75%;
    
    object-fit: contain;
    display: block;
  }

  .menu-shell {
    flex: 0 0 auto;
    margin-left: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    isolation: isolate;
    border-radius: 1.2rem;
    background:
      radial-gradient(130% 180% at 50% 50%, rgba(169, 141, 224, 0.24) 0%, rgba(169, 141, 224, 0.11) 35%, rgba(255, 255, 255, 0.95) 78%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.84));
    border: 1px solid rgba(230, 230, 239, 0.75);
    box-shadow:
      0 12px 26px rgba(59, 31, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(8px) saturate(120%);
    overflow: visible;
    width: auto;
  }

  .menu-shell::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.28) 26%,
      rgba(255, 255, 255, 0) 58%
    );
    z-index: -1;
  }

  .nav-links {
    display: flex;
    gap: 0.1rem;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0 0.7rem;
  
    width: auto;
  }

  .nav-item {
    position: relative;
    display: flex;
    align-items: stretch;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    position: relative;
    height: 48px;
    padding: 0 1.1rem;
    color: var(--color-dark-purple);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 2rem;
    line-height: 1;
    font-size: clamp(0.95rem, 0.75rem + 0.35vw, 1.15rem);
    font-weight: 600;
    border-radius: 0.85rem;
    background: transparent;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.26) 30%,
      rgba(255, 255, 255, 0) 68%
    );
  }

  .nav-item:hover .nav-link,
  .nav-item:focus-within .nav-link,
  .nav-link:hover,
  .nav-link:focus-visible {
    background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0.18) 48%, rgba(255, 255, 255, 0.8) 100%);
    color: var(--color-institutional-purple);
    box-shadow:
      0 8px 16px rgba(91, 46, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
  }

  .nav-item:hover .nav-link::before,
  .nav-item:focus-within .nav-link::before,
  .nav-link:hover::before,
  .nav-link:focus-visible::before {
    opacity: 1;
  }

  .chevron {
    font-size: 0.78rem;
    opacity: 0.85;
  }

  .submenu {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: -8px;
    isolation: isolate;
    min-width: 18rem;
    padding: 0.55rem;
    list-style: none;
    margin: 10px 0;
    background:
      radial-gradient(140% 180% at 50% 32%, rgba(169, 141, 224, 0.26) 0%, rgba(169, 141, 224, 0.1) 35%, rgba(255, 255, 255, 0.95) 82%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.86));
    border: 1px solid rgba(230, 230, 239, 0.84);
    border-radius: 1rem;
    box-shadow:
      0 16px 30px rgba(59, 31, 102, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(169, 141, 224, 0.15);
    backdrop-filter: blur(10px) saturate(120%);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: all 0.2s ease;
    z-index: 20;
  }

  .submenu::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.28) 26%,
      rgba(255, 255, 255, 0) 60%
    );
    z-index: -1;
  }

  .submenu li {
    position: relative;
  }

  .submenu a {
    display: block;
    padding: 0.82rem 1.3rem;
    border-radius: 0.78rem;
    position: relative;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    color: var(--color-dark-purple);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 1.75rem;
    line-height: 1;
    font-size: clamp(1rem, 0.9rem + 0.25vw, 1.25rem);
    font-weight: 600;
  }

  .submenu a::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.26) 30%,
      rgba(255, 255, 255, 0) 68%
    );
  }

  .submenu a:hover {
    background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0.18) 48%, rgba(255, 255, 255, 0.8) 100%);
    color: var(--color-institutional-purple);
    box-shadow:
      0 8px 16px rgba(91, 46, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
  }

  .submenu a:hover::before {
    opacity: 1;
  }

  .nav-item:hover .submenu,
  .nav-item:focus-within .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 1160px) and (min-width: 901px) {
    overflow-x: auto;
    padding-right: 1rem;

    .menu-shell {
      min-width: max-content;
    }

    .nav-links {
      min-width: max-content;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 0.8rem 1rem 0;
    min-height: 92px;
    overflow: visible;

    .mobile-toggle {
      display: inline-flex;
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 40;
    }

    .logo-card {
      margin: 0 auto;
      width: 132px;
      height: 86px;
      border-radius: 1rem;
    }

    .menu-shell {
      display: none;
    }

    .mobile-panel {
      display: block;
      position: absolute;
      left: 1rem;
      right: 1rem;
      top: calc(100% + 0.55rem);
      z-index: 45;
      border-radius: 1rem;
      padding: 0.65rem;
      background:
        radial-gradient(140% 180% at 50% 32%, rgba(169, 141, 224, 0.26) 0%, rgba(169, 141, 224, 0.1) 35%, rgba(255, 255, 255, 0.95) 82%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.86));
      border: 1px solid rgba(230, 230, 239, 0.84);
      box-shadow:
        0 16px 30px rgba(59, 31, 102, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.92),
        inset 0 -1px 0 rgba(169, 141, 224, 0.15);
      backdrop-filter: blur(10px) saturate(120%);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
      max-height: 72vh;
      overflow-y: auto;
    }

    .mobile-panel.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .mobile-list,
    .mobile-sublist {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mobile-group + .mobile-group {
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(230, 230, 239, 0.8);
    }

    .mobile-group-title,
    .mobile-sublist a {
      display: block;
      text-decoration: none;
      border-radius: 0.72rem;
      color: var(--color-dark-purple);
      padding: 0.65rem 0.8rem;
    }

    .mobile-group-title {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.98rem;
    }

    .mobile-sublist {
      margin-top: 0.2rem;
    }

    .mobile-sublist a {
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--color-text);
    }

    .mobile-group-title:hover,
    .mobile-sublist a:hover {
      background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0.18) 48%, rgba(255, 255, 255, 0.8) 100%);
      color: var(--color-institutional-purple);
      box-shadow:
        0 8px 16px rgba(91, 46, 166, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.92);
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem 0;
    gap: 0.85rem;

    .logo-card {
      width: 112px;
      height: 74px;
      border-radius: 1rem;
    }

    .mobile-panel {
      left: 0.75rem;
      right: 0.75rem;
    }
  }
`;function El(){return(0,x.jsx)(Dl,{children:(0,x.jsxs)(`section`,{className:`home-card`,children:[(0,x.jsx)(`img`,{src:$n,alt:``,className:`home-card-adorno`,"aria-hidden":`true`}),(0,x.jsx)(`div`,{className:`icon-card`,"aria-hidden":`true`,children:(0,x.jsx)(vl,{icon:bl})}),(0,x.jsxs)(`div`,{className:`home-card-content`,children:[(0,x.jsx)(`h3`,{className:`home-card-title`,children:`Ultimas noticias`}),(0,x.jsx)(`p`,{className:`home-card-description`,children:`Mantente informado con las ultimas novedades y eventos del instituto.`}),(0,x.jsx)(`figure`,{className:`home-card-media`,children:(0,x.jsx)(`img`,{src:er,alt:`Novedades institucionales`})}),(0,x.jsx)(`div`,{className:`home-card-actions`,children:(0,x.jsx)(`button`,{className:`home-card-button`,type:`button`,children:`➝Leer mas`})})]})]})})}var Dl=Zn.section`
    width: 100%;
    display: block;
    
    
    .home-card {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
        position: relative;
        border-radius: 2.1rem;
        padding: 0.5rem 0.5rem 1rem;
        background:
            radial-gradient(140% 185% at 54% 7%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 34%, rgba(255, 255, 255, 0.95) 75%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.88));
        border: 1px solid rgba(230, 230, 239, 0.88);
        box-shadow:
            0 20px 38px rgba(59, 31, 102, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(169, 141, 224, 0.16);
        overflow: hidden;
        isolation: isolate;
        backdrop-filter: blur(10px) saturate(120%);
    }

    .home-card-adorno {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: auto;
        opacity: 0.92;
        pointer-events: none;
        z-index: -1;
        transform: scale(1.2) translateY(-8%);
    }

    .top-accent {
        position: absolute;
        left: 0.9rem;
        right: 0.9rem;
        top: 0;
        height: 1rem;
        border-radius: 0 0 1.6rem 1.6rem;
        background: linear-gradient(90deg, #5b2ea6, #a98de0);
        z-index: 2;
    }

    .home-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.88) 0%,
            rgba(255, 255, 255, 0.2) 26%,
            rgba(255, 255, 255, 0) 58%
        );
        z-index: -1;
    }

    .icon-card {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0.42rem 0 1rem 0.42rem;
        position: relative;
        color: var(--color-institutional-purple);
        background:
            radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.9) 0%, rgba(169, 141, 224, 0.2) 42%, rgba(169, 141, 224, 0.3) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(169, 141, 224, 0.25));
        border: 1px solid rgba(169, 141, 224, 0.48);
        box-shadow:
            0 8px 16px rgba(154, 112, 221, 0.14),
            0 0 0 5px rgba(183, 158, 231, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        z-index: 2;
    }

    .icon-card svg {
        font-size: 1.08rem;
        filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.58));
    }

    .home-card-content {
        padding: 0 0.85rem 0.6rem;
    }

    .home-card-title {
        margin: 0;
        font-family: var(--font-heading);
        font-weight: 500;
        font-size: clamp(1.5rem, 1.3rem + 0.38vw, 2rem);
        line-height: 1.1;
        color: var(--color-dark-purple);
    }

    .home-card-description {
        margin: 1.15rem 0 1.45rem;
        font-family: var(--font-body);
        font-size: 1.08rem;
        line-height: 1.35;
        font-weight: 500;
        color: var(--color-dark-purple);
        max-width: 95%;
    }

    .home-card-media {
        margin: 0;
        width: 100%;
        border-radius: 1.2rem;
        overflow: hidden;
        background: #f2ecff;
        /* box-shadow: 0 14px 24px rgba(59, 31, 102, 0.12); */
    }

    .home-card-media img {
        width: 100%;
        height: 190px;
        object-fit: cover;
        display: block;
    }

    .home-card-actions {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        margin-top: 1.35rem;
    }

    .home-card-button {
        flex: 1;
        border: 0;
        border-radius: 0.9rem;
        padding: 0.95rem 0.9rem;
        color: var(--color-white);
        background: var(--color-gradient);
        font-family: var(--font-heading);
        font-size: 1.95rem;
        font-size: clamp(1rem, 0.9rem + 0.25vw, 1.12rem);
        font-weight: 700;
        line-height: 1.05;
        cursor: pointer;
        box-shadow:
            0 10px 20px rgba(91, 46, 166, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
    }

    .home-card-link {
        width: 42px;
        height: 42px;
        flex: 0 0 auto;
        border-radius: 0.8rem;
        display: grid;
        place-items: center;
        color: var(--color-institutional-purple);
        text-decoration: none;
        background:
            radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.32) 0%, rgba(169, 141, 224, 0.12) 48%, rgba(255, 255, 255, 0.86) 100%);
        box-shadow:
            0 7px 14px rgba(59, 31, 102, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
    }

    .home-card-shortcuts {
        margin: 1.45rem 0 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.58rem;
    }

    .home-card-shortcuts a {
        text-decoration: none;
        color: var(--color-dark-purple);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.38rem;
        text-align: center;
        font-family: var(--font-body);
        font-size: 0.67rem;
        font-weight: 500;
        line-height: 1.06;
    }

    .shortcut-icon {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: var(--color-institutional-purple);
        background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.3) 0%, rgba(169, 141, 224, 0.12) 48%, rgba(255, 255, 255, 0.9) 100%);
        box-shadow:
            0 6px 12px rgba(59, 31, 102, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.94);
    }

    .shortcut-icon.is-green {
        color: #00a67e;
    }

    @media (max-width: 480px) {
        .home-card {
            border-radius: 1.75rem;
        }

        .home-card-description {
            font-size: 1rem;
        }

        .home-card-media img {
            height: 178px;
        }
    }
`;function Ol(){return(0,x.jsxs)(kl,{children:[(0,x.jsx)(El,{}),(0,x.jsx)(El,{}),(0,x.jsx)(El,{}),(0,x.jsx)(El,{})]})}var kl=Zn.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: start;
    gap: 1.5rem;
    padding: 2rem 0;

    @media (max-width: 700px) {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.1rem;
    }
`;function Al({name:e,icon:t,href:n=`/careers/apply`,reflectionColor:r=`rgba(186, 142, 166, 0.72)`}){return(0,x.jsx)(jl,{className:`careers-buttons`,$reflectionColor:r,children:(0,x.jsxs)(`a`,{href:n,className:`careers-button`,children:[(0,x.jsx)(`span`,{className:`careers-icon-shell`,"aria-hidden":`true`,children:(0,x.jsx)(`img`,{src:t,alt:e,className:`careers-icon`})}),(0,x.jsx)(`span`,{className:`careers-label-shell`,children:(0,x.jsx)(`span`,{children:e})})]})})}var jl=Zn.div`
.careers-icon-shell,.careers-label-shell{
    border:5px solid #312B36;
}
   .careers-buttons{

    max-width: 320px;
}

.careers-button{

    display:flex;
    align-items:center;
    gap:16px;
}
    .careers-icon-shell{
    width:64px;
    height:64px;
    min-width:64px;
    min-height:64px;
    display:flex;
    align-items:center;
    justify-content:center;

    background:#312B36;

    border-radius:20px;

    position:relative;
    overflow:hidden;

    box-shadow:
        0 14px 28px rgba(0,0,0,.30),
        inset 0 1px 0 rgba(255,255,255,.03);
}
        .careers-label-shell{
    position:relative;

    min-width:120px;
    height:64px;

    display:flex;
    align-items:center;

    padding:0 56px;

    background:#312B36;

    border-radius:20px;

    overflow:hidden;

    box-shadow:
        0 14px 28px rgba(0,0,0,.30),
        inset 0 1px 0 rgba(255,255,255,.03);
}
        .careers-icon-shell::after,
.careers-label-shell::after{
    content:"";

    position:absolute;

                    left:28%;
                    right:-18%;

                    bottom:-34%;

                    height:66%;

    background:
                radial-gradient(
                    92% 140% at 86% 96%,
                    ${e=>e.$reflectionColor} 0%,
                    rgba(255,255,255,.12) 34%,
                    rgba(255,255,255,0) 78%
                ),
        linear-gradient(
            95deg,
            transparent 0%,
                            rgba(255,255,255,.02) 20%,
                            ${e=>e.$reflectionColor} 68%,
                            rgba(255,255,255,.1) 88%,
            transparent 100%
        );

    border-radius:50%;

                    filter:blur(12px);

                    transform:rotate(-1deg);

            opacity:.92;
}
    .careers-label-shell span{

    color:white;

    font-size:1.2em;

    font-weight:600;

    line-height:1.05;

    text-transform:uppercase;

    letter-spacing:-1px;
}
    .careers-icon{

    width:48px;
    height:48px;

    object-fit:contain;
}
`,Ml={profesorado:{title:`Profesorados`,items:[{name:`Profesorado de Artes Visuales`,icon:hr,reflectionColor:`rgba(200, 154, 184, 0.78)`,href:`/careers/profesorado-artes-visuales`},{name:`Profesorado de Educacion Primaria`,icon:ur,reflectionColor:`rgba(177, 165, 202, 0.78)`,href:`/careers/profesorado-educacion-primaria`},{name:`Profesorado de Educacion Inicial`,icon:lr,reflectionColor:`rgba(196, 150, 170, 0.78)`,href:`/careers/profesorado-educacion-inicial`},{name:`Profesorado de Educacion Secundaria en Lengua y Literatura`,icon:pr,reflectionColor:`rgba(168, 157, 188, 0.78)`,href:`/careers/profesorado-lengua-literatura`},{name:`Profesorado de Musica`,icon:mr,reflectionColor:`rgba(160, 144, 204, 0.78)`,href:`/careers/profesorado-musica`},{name:`Profesorado de Ingles`,icon:fr,reflectionColor:`rgba(154, 169, 215, 0.78)`,href:`/careers/profesorado-ingles`}]},tecnicatura:{title:`Tecnicaturas`,items:[{name:`Tecnicatura Superior en Desarrollo de Software`,icon:cr,reflectionColor:`rgba(142, 147, 186, 0.78)`,href:`/careers/tecnicatura-desarrollo-software`},{name:`Tecnicatura Superior en Redes y Ciberseguridad`,icon:_r,reflectionColor:`rgba(134, 160, 176, 0.78)`,href:`/careers/tecnicatura-redes-ciberseguridad`},{name:`Tecnicatura Superior en Agronomia`,icon:or,reflectionColor:`rgba(156, 176, 164, 0.78)`,href:`/careers/tecnicatura-agronomia`},{name:`Tecnicatura Superior en Recursos Humanos`,icon:gr,reflectionColor:`rgba(190, 160, 151, 0.78)`,href:`/careers/tecnicatura-recursos-humanos`}]}};function Nl(e=`profesorado`){return Ml[e]??null}function Pl(){return Object.values(Ml).reduce((e,t)=>e+t.items.length,0)}function Fl(e){let t=Nl(e);return t?(0,x.jsxs)(`article`,{className:`careers-group`,children:[(0,x.jsx)(`header`,{className:`careers-group-header`,children:(0,x.jsx)(`h2`,{children:t.title})}),(0,x.jsx)(`div`,{className:`careers-group-grid`,children:t.items.map(e=>(0,x.jsx)(Al,{name:e.name,icon:e.icon,href:e.href,reflectionColor:e.reflectionColor},e.name))})]},e):null}function Il({category:e}){return(0,x.jsx)(Ll,{children:(e?[e]:[`profesorado`,`tecnicatura`]).map(Fl)})}var Ll=Zn.section`
  width: 100%;
  display: grid;
  gap: 2rem;
  padding: 2rem 0;

  .careers-group {
    display: grid;
    gap: 1rem;
  }

  .careers-group-header h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.6rem, 1.15rem + 1vw, 2.2rem);
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-align: center;
  }

  .careers-group-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1100px) {
    .careers-group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    gap: 1.4rem;

    .careers-group-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`,Rl=3e3;function K(e,t=Rl){let[n,r]=(0,b.useState)(0);return(0,b.useEffect)(()=>{let n=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;if(r(0),n===0)return;let i=t/n,a=0,o,s=()=>{a+=1,r(a),a<n&&(o=window.setTimeout(s,i))};return o=window.setTimeout(s,i),()=>{o&&window.clearTimeout(o)}},[t,e]),n}function q({value:e,label:t}){let n=K(e);return(0,x.jsxs)(`article`,{className:`stat-card`,children:[(0,x.jsx)(`strong`,{className:`stat-value`,"aria-label":String(e),children:n}),(0,x.jsx)(`span`,{className:`stat-label`,children:t})]})}function J(){let e=Pl();return(0,x.jsx)(Y,{children:(0,x.jsxs)(`div`,{className:`stats-grid`,children:[(0,x.jsx)(q,{value:e,label:`Carreras`}),(0,x.jsx)(q,{value:280,label:`Egresados/as`}),(0,x.jsx)(q,{value:854,label:`Estudiantes actuales`})]})})}var Y=Zn.section`
    --qa-purple-a: 174, 102, 220;
    --qa-purple-b: 148, 78, 198;
    --qa-purple-c: 126, 62, 176;

    width: 100%;
    padding: 1rem 0 1.3rem;

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.2rem;
    }

    .stat-card {
        min-height: 156px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        border-radius: 1.35rem;
        padding: 1.2rem 1rem;
        border: 1px solid rgba(231, 224, 249, 0.68);
        background-color: rgba(248, 247, 255, 0.48);
        background-image:
            radial-gradient(
                130% 160% at 50% 52%,
                rgba(var(--qa-purple-a), 0.16) 0%,
                rgba(var(--qa-purple-b), 0.1) 34%,
                rgba(var(--qa-purple-c), 0.06) 56%,
                rgba(255, 255, 255, 0.24) 100%
            ),
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(248, 245, 255, 0.17) 48%,
                rgba(255, 255, 255, 0.28) 100%
            );
        backdrop-filter: blur(16px) saturate(132%);
        box-shadow:
            0 14px 32px rgba(98, 63, 155, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.66),
            inset 0 -1px 0 rgba(203, 178, 240, 0.32);
        position: relative;
        overflow: hidden;
    }

    .stat-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.12) 24%,
            rgba(255, 255, 255, 0) 62%
        );
    }

    .stat-value {
        margin: 0;
        font-family: var(--font-heading);
        font-size: clamp(3rem, 2.4rem + 0.95vw, 5rem);
        line-height: 0.95;
        font-weight: 700;
        color: #5c35b4;
        position: relative;
        z-index: 1;
    }

    .stat-label {
        position: relative;
        z-index: 1;
        font-family: var(--font-heading);
        font-size: clamp(1.2rem, 1rem + 0.3vw, 1.45rem);
        font-weight: 500;
        letter-spacing: 0.01em;
        text-align: center;
        color: #5c35b4;
    }

    @media (max-width: 1080px) {
        .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .stat-card:last-child {
            grid-column: 1 / -1;
        }
    }

    @media (max-width: 760px) {
        .stats-grid {
            grid-template-columns: minmax(0, 1fr);
        }

        .stat-card {
            min-height: 142px;
        }

        .stat-card:last-child {
            grid-column: auto;
        }
    }
`,X=[{id:`slide-1`,image:nr},{id:`slide-2`,image:rr},{id:`slide-3`,image:br}],zl=()=>{let[e,t]=(0,b.useState)(0),n=()=>{t(e=>(e-1+X.length)%X.length)},r=()=>{t(e=>(e+1)%X.length)},i=X[e];return(0,x.jsx)(Bl,{style:{"--carousel-bg":`url(${i.image})`},children:(0,x.jsxs)(`div`,{className:`carousel-shell`,children:[(0,x.jsx)(`button`,{type:`button`,className:`carousel-nav nav-prev`,onClick:n,"aria-label":`Imagen anterior`,children:(0,x.jsx)(vl,{icon:xl})}),(0,x.jsx)(`button`,{type:`button`,className:`carousel-nav nav-next`,onClick:r,"aria-label":`Siguiente imagen`,children:(0,x.jsx)(vl,{icon:yl})}),(0,x.jsx)(`div`,{className:`carousel-dots`,role:`tablist`,"aria-label":`Selector de imagen`,children:X.map((n,r)=>(0,x.jsx)(`button`,{type:`button`,className:`dot ${r===e?`is-active`:``}`,onClick:()=>t(r),"aria-label":`Ver imagen ${r+1}`,"aria-current":r===e?`true`:`false`},n.id))})]})})},Bl=Zn.section`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    height: 400px;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 1.7rem;
    background:
        radial-gradient(120% 160% at 50% 45%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.08) 38%, rgba(255, 255, 255, 0.95) 78%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.86));
    border: 1px solid rgba(230, 230, 239, 0.76);
    box-shadow:
        0 14px 30px rgba(91, 46, 166, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.95),
        inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(10px) saturate(120%);

    .carousel-shell {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: grid;
    align-items: center;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 360px;
    max-height: 100%;
    padding: 2.3rem 4.4rem 3.7rem;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.36);
    background-image: var(--carousel-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow:
        0 26px 54px rgba(26, 16, 47, 0.28),
        0 10px 24px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.54),
        inset 0 -1px 0 rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(14px) saturate(130%);
    color: var(--color-white);
    text-align: center;
    }

    .carousel-shell::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.14) 16%, rgba(255, 255, 255, 0) 40%),
            radial-gradient(120% 82% at 50% 112%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 36%, rgba(255, 255, 255, 0) 78%),
            linear-gradient(104deg, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.14) 49%, rgba(255, 255, 255, 0) 74%);
        pointer-events: none;
        z-index: 0;
    }

    .carousel-shell::after {
        content: '';
        position: absolute;
        left: -10%;
        right: -10%;
        bottom: -18%;
        height: 62%;
        background:
            linear-gradient(92deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.22) 50%, rgba(255, 255, 255, 0.1) 78%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(80% 78% at 50% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0) 80%);
        filter: blur(16px);
        opacity: 0.94;
        pointer-events: none;
        z-index: 0;
    }

    .carousel-nav,
    .carousel-dots {
        position: relative;
        z-index: 1;
    }

    .carousel-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 48px;
        isolation: isolate;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.64);
        background:
            radial-gradient(130% 180% at 50% 36%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.1) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.14));
        color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(8px) saturate(125%);
        box-shadow:
            0 14px 26px rgba(19, 12, 38, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.65),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2);
        transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease;
    }

    .carousel-nav::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 58%);
        z-index: -1;
    }

    .carousel-nav:hover,
    .carousel-nav:focus-visible {
        transform: translateY(-50%) scale(1.04);
        box-shadow:
            0 18px 28px rgba(19, 12, 38, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.72),
            inset 0 -1px 0 rgba(255, 255, 255, 0.24);
    }

    .carousel-nav svg {
        width: 17px;
        height: 17px;
    }

    .nav-prev {
        left: 1.15rem;
    }

    .nav-next {
        right: 1.15rem;
    }

    .carousel-dots {
        position: absolute;
        left: 50%;
        bottom: 1.15rem;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 0.55rem;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        cursor: pointer;
        background: rgba(255, 255, 255, 0.28);
        backdrop-filter: blur(4px) saturate(120%);
        box-shadow:
            0 3px 8px rgba(16, 10, 31, 0.22),
            inset 0 1px 1px rgba(255, 255, 255, 0.55);
    }

    .dot.is-active {
        width: 28px;
        border-color: rgba(255, 255, 255, 0.82);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.8));
        box-shadow:
            0 0 12px rgba(255, 255, 255, 0.5),
            0 3px 10px rgba(16, 10, 31, 0.26),
            inset 0 1px 1px rgba(255, 255, 255, 0.95);
    }

    @media (max-width: 860px) {
        .carousel-shell {
            padding: 2.1rem 3.2rem 3.4rem;
        }

        .carousel-nav {
            width: 42px;
            height: 42px;
            font-size: 1.65rem;
        }

        .nav-prev {
            left: 0.75rem;
        }

        .nav-next {
            right: 0.75rem;
        }
    }

    @media (max-width: 600px) {
        padding: 0.75rem;

        .carousel-shell {
            min-height: 290px;
            padding: 1.8rem 1rem 3.2rem;
        }

        .carousel-nav {
            top: auto;
            bottom: 0.9rem;
            transform: none;
            width: 36px;
            height: 36px;
            font-size: 1.4rem;
        }

        .nav-prev {
            left: 0.9rem;
        }

        .nav-next {
            right: 0.9rem;
        }

        .carousel-dots {
            bottom: 1.3rem;
        }
    }
`;function Vl(){return(0,x.jsx)(Hl,{children:(0,x.jsxs)(`div`,{className:`faq-pill`,role:`button`,tabIndex:0,"aria-label":`Preguntas frecuentes`,children:[(0,x.jsx)(`h2`,{children:(0,x.jsx)(`span`,{children:`Preguntas frecuentes`})}),(0,x.jsx)(`div`,{className:`icon-faq`,"aria-hidden":`true`,children:(0,x.jsx)(`span`,{className:`faq-mark`,children:`?`})})]})})}var Hl=Zn.section`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 1.7rem;
    background:
        radial-gradient(120% 160% at 50% 45%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.08) 38%, rgba(255, 255, 255, 0.95) 78%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.86));
    border: 1px solid rgba(230, 230, 239, 0.76);
    box-shadow:
        0 14px 30px rgba(91, 46, 166, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.95),
        inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(10px) saturate(120%);

    .faq-pill {
        position: relative;
        isolation: isolate;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        min-height: 74px;
        display: grid;
        grid-template-columns: 1fr 92px;
        align-items: stretch;
        border-radius: 1.3rem;
        overflow: hidden;
        border: 1px solid rgba(214, 201, 237, 0.88);
        background:
            radial-gradient(140% 190% at 50% 30%, rgba(186, 158, 233, 0.42) 0%, rgba(169, 141, 224, 0.2) 44%, rgba(255, 255, 255, 0.86) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.78));
        box-shadow:
            0 16px 30px rgba(59, 31, 102, 0.18),
            0 0 0 3px rgba(195, 173, 236, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(132, 87, 199, 0.22);
        backdrop-filter: blur(10px) saturate(122%);
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.22s ease, filter 0.22s ease;
    }

    .faq-pill::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.82) 0%,
            rgba(255, 255, 255, 0.28) 26%,
            rgba(255, 255, 255, 0) 58%
        );
        z-index: 0;
    }

    .faq-pill::after {
        content: '';
        position: absolute;
        left: 8%;
        right: 8%;
        bottom: -26%;
        height: 55%;
        border-radius: 50%;
        background: radial-gradient(70% 70% at 50% 40%, rgba(138, 88, 208, 0.24) 0%, rgba(138, 88, 208, 0) 100%);
        filter: blur(10px);
        pointer-events: none;
        z-index: -1;
    }

    .faq-pill:hover,
    .faq-pill:focus-visible {
        transform: translateY(-1px);
        box-shadow:
            0 18px 34px rgba(59, 31, 102, 0.22),
            0 0 0 4px rgba(195, 173, 236, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(132, 87, 199, 0.26);
        filter: saturate(106%);
    }

    .faq-pill:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.85);
        outline-offset: 3px;
    }

    h2 {
        margin: 0;
        position: relative;
        z-index: 1;
        isolation: isolate;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1rem;
        border-radius: 1.22rem 0 0 1.22rem;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-right: 0;
        font-family: var(--font-heading);
        font-size: clamp(1rem, 0.9rem + 0.5vw, 1.35rem);
        font-weight: 700;
        color: var(--color-white);
        text-align: center;
        background:
            linear-gradient(135deg, rgba(167, 98, 231, 0.78) 0%, rgba(149, 75, 221, 0.78) 52%, rgba(127, 54, 199, 0.78) 100%);
        box-shadow:
            inset 0 -8px 18px rgba(66, 35, 120, 0.2),
            -10px 0 22px rgba(160, 110, 235, 0.3),
            0 10px 26px rgba(86, 49, 145, 0.22);
        text-shadow:
            0 0 8px rgba(91, 46, 166, 0.35),
            0 0 16px rgba(91, 46, 166, 0.22);
    }

    h2 span {
        position: relative;
        z-index: 2;
    }

    h2::before {
        content: '';
        position: absolute;
        inset: -12px -10px;
        border-radius: 22px 0 0 22px;
        z-index: -2;
        pointer-events: none;
        background:
            radial-gradient(66% 126% at 0% 50%, rgba(207, 156, 255, 0.56) 0%, rgba(207, 156, 255, 0.3) 36%, rgba(207, 156, 255, 0) 75%),
            radial-gradient(84% 94% at 24% 0%, rgba(207, 156, 255, 0.36) 0%, rgba(207, 156, 255, 0) 72%),
            radial-gradient(84% 94% at 24% 100%, rgba(207, 156, 255, 0.34) 0%, rgba(207, 156, 255, 0) 72%);
        filter: blur(12px);
        opacity: 0.98;
    }

    h2::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 1.22rem 0 0 1.22rem;
        pointer-events: none;
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 24%),
            linear-gradient(0deg, rgba(237, 201, 255, 0.38) 0%, rgba(237, 201, 255, 0) 26%),
            linear-gradient(90deg, rgba(237, 201, 255, 0) 84%, rgba(237, 201, 255, 0.34) 94%, rgba(186, 160, 224, 0.2) 100%);
        box-shadow:
            inset 2px 0 0 rgba(255, 255, 255, 0.28),
            inset 0 2px 0 rgba(255, 255, 255, 0.3),
            inset 0 -2px 0 rgba(214, 169, 255, 0.48);
        z-index: 1;
    }

    .icon-faq {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        isolation: isolate;
        background:
            radial-gradient(118% 170% at 0% 36%, rgba(179, 142, 232, 0.34) 0%, rgba(146, 131, 187, 0.2) 20%, rgba(122, 129, 151, 0.12) 36%, rgba(122, 129, 151, 0) 46%),
            radial-gradient(125% 170% at 50% 34%, rgba(122, 129, 151, 0.45) 0%, rgba(88, 96, 121, 0.72) 44%, rgba(60, 68, 94, 0.92) 100%),
            linear-gradient(180deg, rgba(115, 123, 148, 0.72), rgba(70, 78, 103, 0.92));
        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 10px 0 24px rgba(20, 24, 39, 0.18);
    }

    .icon-faq::before {
        content: '';
        position: absolute;
        inset: 1px;
        pointer-events: none;
        border-radius: 0 1.2rem 1.2rem 0;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.14) 28%,
            rgba(255, 255, 255, 0) 64%
        );
        z-index: 0;
    }

    .icon-faq::after {
        content: '';
        position: absolute;
        left: -18px;
        top: 0;
        bottom: 0;
        width: 34px;
        pointer-events: none;
        background: linear-gradient(90deg, rgba(176, 130, 236, 0.46) 0%, rgba(163, 138, 211, 0.24) 46%, rgba(122, 129, 151, 0) 100%);
        filter: blur(4px);
        z-index: 0;
    }

    .faq-mark {
        position: relative;
        z-index: 1;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        border: 1px solid rgba(169, 141, 224, 0.46);
        color: rgba(255, 255, 255, 0.96);
        font-family: var(--font-heading);
        font-size: 1.6rem;
        font-weight: 800;
        line-height: 1;
        background:
            radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.95) 0%, rgba(169, 141, 224, 0.24) 42%, rgba(169, 141, 224, 0.34) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(169, 141, 224, 0.28));
        text-shadow:
            0 0 10px rgba(91, 46, 166, 0.35),
            0 1px 1px rgba(255, 255, 255, 0.45);
        box-shadow:
            0 8px 16px rgba(154, 112, 221, 0.16),
            0 0 0 5px rgba(183, 158, 231, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }

    @media (max-width: 640px) {
        padding: 0.75rem;

        .faq-pill {
            grid-template-columns: 1fr 74px;
            min-height: 64px;
        }

        h2 {
            font-size: clamp(0.95rem, 0.9rem + 0.4vw, 1.05rem);
            padding: 0.7rem 0.75rem;
        }

        .faq-mark {
            width: 34px;
            height: 34px;
            font-size: 1.25rem;
            border-width: 2.5px;
        }
    }
`;function Ul(){return(0,x.jsxs)(Wl,{children:[(0,x.jsx)(`div`,{className:`directivos-figure`,"aria-hidden":`true`,children:(0,x.jsx)(`img`,{src:ir,alt:`Equipo directivo`,className:`directivos-image`})}),(0,x.jsxs)(`div`,{className:`directivos-card`,children:[(0,x.jsx)(`h2`,{children:`"Aprender es un proceso que se hace en comunidad"`}),(0,x.jsx)(`p`,{children:`Equipo Directivo`})]})]})}var Wl=Zn.section`
    --qa-purple-a: 174, 102, 220;
    --qa-purple-b: 148, 78, 198;
    --qa-purple-c: 126, 62, 176;

    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    
    margin: 2rem 0 1rem;
    padding: 0.75rem 0.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .directivos-figure {
        width: min(100%, 640px);
        height: 270px;
        display: grid;
        place-items: center;
        position: relative;
        z-index: 1;
    }

    .directivos-image {
        width: min(100%, 520px);
        height: auto;
        object-fit: contain;
        display: block;
        position: relative;
        z-index: 1;
    }

    .directivos-card {
        width: min(100%, 760px);
        margin-top: 64px;
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 92px;
        border-radius: 1.35rem;
        padding: 1rem 1.15rem 0.9rem;
        text-align: center;
        border: 1px solid rgba(231, 224, 249, 0.68);
        background-color: rgba(248, 247, 255, 0.48);
        background-image:
            radial-gradient(
                130% 160% at 50% 52%,
                rgba(var(--qa-purple-a), 0.16) 0%,
                rgba(var(--qa-purple-b), 0.1) 34%,
                rgba(var(--qa-purple-c), 0.06) 56%,
                rgba(255, 255, 255, 0.24) 100%
            ),
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(248, 245, 255, 0.17) 48%,
                rgba(255, 255, 255, 0.28) 100%
            );
        backdrop-filter: blur(16px) saturate(132%);
        box-shadow:
            0 14px 32px rgba(98, 63, 155, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.66),
            inset 0 -1px 0 rgba(203, 178, 240, 0.32);
    }

    .directivos-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.12) 24%,
            rgba(255, 255, 255, 0) 62%
        );
    }

    h2 {
        margin: 0;
        font-family: var(--font-heading);
        font-size: clamp(1.05rem, 0.98rem + 0.65vw, 1.58rem);
        font-weight: 700;
        line-height: 1.15;
        color: #5c35b4;
    }

    p {
        margin: 0.7rem 0 0;
        font-family: var(--font-body);
        font-size: clamp(0.88rem, 0.82rem + 0.2vw, 0.98rem);
        font-weight: 500;
        color: #6f51b9;
    }

    @media (max-width: 820px) {
        .directivos-figure {
            height: 230px;
        }

        .directivos-image {
            width: min(100%, 430px);
        }
    }

    @media (max-width: 560px) {
        margin: 1.4rem 0 0.8rem;
        padding: 0.4rem 0 0.9rem;

        .directivos-figure {
            height: 198px;
        }

        .directivos-image {
            width: min(100%, 335px);
        }

        .directivos-card {
            width: min(100%, 94%);
            margin-top: 2px;
            border-radius: 1.1rem;
            padding: 0.88rem 0.85rem 0.74rem;
        }
    }
`,Gl=Object.assign({"../assets/img/BOTONERA OFERTA PERMANENTE VERA 2026 ELVERA.EDU.AR OPT-11.png":Qn,"../assets/img/adorno.png":$n,"../assets/img/banner/banner.png":er,"../assets/img/carousel/1.png":tr,"../assets/img/carousel/2.jpg":nr,"../assets/img/carousel/3.png":rr,"../assets/img/directivos.png":ir,"../assets/img/icons/Marco superior Vera Card Web.svg":ar,"../assets/img/icons/agronomia.svg":or,"../assets/img/icons/carousel.jpg":sr,"../assets/img/icons/desarrollo-software.svg":cr,"../assets/img/icons/educacion-inicial.svg":lr,"../assets/img/icons/educación-primaria.svg":ur,"../assets/img/icons/finger-print.svg":dr,"../assets/img/icons/ingles.svg":fr,"../assets/img/icons/lengua.svg":pr,"../assets/img/icons/musica.svg":mr,"../assets/img/icons/profesorado-de-arte.svg":hr,"../assets/img/icons/recursos-humanos.svg":gr,"../assets/img/icons/redes-y-ciberseguridad.svg":_r,"../assets/img/icons/trama-icon.svg":vr,"../assets/img/logo-png.png":yr,"../assets/img/news-banner.jpg":br,"../assets/img/trama.jpg":xr});function Kl(e){return e?e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:Gl[`../assets/img/${e.replace(/^\.?\/?/,``)}`]??null:null}function ql(e=``){let t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?`??`:t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function Jl({name:e,imagePath:t,initials:n}){let r=(0,b.useMemo)(()=>Kl(t),[t]),[i,a]=(0,b.useState)(!1),o=n||ql(e);return!r||i?(0,x.jsx)(`span`,{className:`avatar`,"aria-hidden":`true`,children:o}):(0,x.jsx)(`span`,{className:`avatar avatar-image-wrap`,"aria-hidden":`true`,children:(0,x.jsx)(`img`,{src:r,alt:``,className:`avatar-image`,onError:()=>a(!0)})})}var Yl=[{quote:`"Siempre quise terminar mis estudios, pero la vida me llevo por otro camino. En el Vera, siendo mayor, pude hacerlo realidad y demostrarme que nunca es tarde para aprender."`,name:`Silvia Sosa`,location:`San Carlos, Mendoza`,imagePath:``},{quote:`"El ambiente es motivador y participativo. Los docentes te inspiran a seguir aprendiendo y a creer en vos mismo."`,name:`Luis Serrudo`,location:`San Carlos, Mendoza`,imagePath:``},{quote:`"Gracias al Jardin del Vera Penaloza, pude estudiar tranquila mientras mi hijo crecia en un espacio seguro y educativo."`,name:`Laura Micames`,location:`La Consulta, Mendoza`,imagePath:``},{quote:`"Trabajaba durante el dia y estudiaba de noche, en el Vera encontre apoyo y profesores que realmente entendian mi situacion."`,name:`Pablo Morales`,location:`Tunuyan, Mendoza`,imagePath:``}];function Xl(){return(0,x.jsxs)(Zl,{children:[(0,x.jsx)(`h2`,{children:`¿Que dicen nuestros estudiantes?`}),(0,x.jsx)(`div`,{className:`recommendations-grid`,children:Yl.map(e=>(0,x.jsxs)(`article`,{className:`recommendation-card`,children:[(0,x.jsx)(`p`,{className:`quote`,children:e.quote}),(0,x.jsxs)(`div`,{className:`author-row`,children:[(0,x.jsx)(Jl,{name:e.name,imagePath:e.imagePath,initials:e.initials}),(0,x.jsxs)(`div`,{className:`author-info`,children:[(0,x.jsx)(`strong`,{children:e.name}),(0,x.jsx)(`span`,{children:e.location})]})]})]},e.name))})]})}var Zl=Zn.section`
    --qa-purple-a: 174, 102, 220;
    --qa-purple-b: 148, 78, 198;
    --qa-purple-c: 126, 62, 176;

    width: 100%;
    padding: 1rem 0 1.6rem;

    h2 {
        margin: 0 0 1.5rem;
        text-align: center;
        font-family: var(--font-heading);
        font-size: clamp(1.7rem, 1.4rem + 0.8vw, 2.45rem);
        color: var(--color-institutional-purple);
        line-height: 1.1;
    }

    .recommendations-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.2rem;
    }

    .recommendation-card {
        min-height: 210px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.25rem;
        border-radius: 1.35rem;
        padding: 1.35rem 1.25rem 1.15rem;
        border: 1px solid rgba(231, 224, 249, 0.68);
        background-color: rgba(248, 247, 255, 0.48);
        background-image:
            radial-gradient(
                130% 160% at 50% 52%,
                rgba(var(--qa-purple-a), 0.16) 0%,
                rgba(var(--qa-purple-b), 0.1) 34%,
                rgba(var(--qa-purple-c), 0.06) 56%,
                rgba(255, 255, 255, 0.24) 100%
            ),
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(248, 245, 255, 0.17) 48%,
                rgba(255, 255, 255, 0.28) 100%
            );
        backdrop-filter: blur(16px) saturate(132%);
        box-shadow:
            0 14px 32px rgba(98, 63, 155, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.66),
            inset 0 -1px 0 rgba(203, 178, 240, 0.32);
        position: relative;
        overflow: hidden;
    }

    .recommendation-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.12) 24%,
            rgba(255, 255, 255, 0) 62%
        );
    }

    .quote {
        margin: 0;
        font-family: var(--font-heading);
        font-size: clamp(1.04rem, 0.95rem + 0.28vw, 1.38rem);
        line-height: 1.45;
        font-weight: 600;
        color: #5c35b4;
        position: relative;
        z-index: 1;
    }

    .author-row {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        position: relative;
        z-index: 1;
    }

    .avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 0.92rem;
        color: #fefeff;
        background:
            radial-gradient(130% 180% at 38% 30%, rgba(255, 255, 255, 0.35) 0%, rgba(171, 133, 232, 0.58) 40%, rgba(110, 69, 186, 0.88) 100%);
        box-shadow:
            0 8px 14px rgba(73, 44, 128, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.42);
        border: 1px solid rgba(255, 255, 255, 0.55);
    }

    .author-info {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        color: #5c35b4;
    }

    .author-info strong {
        font-family: var(--font-heading);
        font-size: 1.35rem;
        font-size: clamp(1rem, 0.92rem + 0.28vw, 1.15rem);
        line-height: 1.12;
    }

    .author-info span {
        font-family: var(--font-body);
        font-size: clamp(0.84rem, 0.78rem + 0.15vw, 0.92rem);
        color: #7152b8;
    }

    .avatar-image-wrap {
        padding: 0;
        overflow: hidden;
    }

    .avatar-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    @media (max-width: 980px) {
        .recommendations-grid {
            grid-template-columns: minmax(0, 1fr);
        }

        .recommendation-card {
            min-height: 195px;
        }
    }
`;function Ql(){return(0,x.jsx)($l,{children:(0,x.jsx)(`p`,{children:`Todos los derechos © 2026 | Instituto de Educación Superior 9-010 Rosario Vera Peñaloza`})})}var $l=Zn.footer`
	--qa-purple-a: 174, 102, 220;
	--qa-purple-b: 148, 78, 198;
	--qa-purple-c: 126, 62, 176;

	width: 100%;
	margin: 1.6rem 0 2rem;
	border-radius: 1.35rem;
	padding: 1rem 1.2rem;
	text-align: center;
	border: 1px solid rgba(231, 224, 249, 0.68);
	background-color: rgba(248, 247, 255, 0.48);
	background-image:
		radial-gradient(
			130% 160% at 50% 52%,
			rgba(var(--qa-purple-a), 0.16) 0%,
			rgba(var(--qa-purple-b), 0.1) 34%,
			rgba(var(--qa-purple-c), 0.06) 56%,
			rgba(255, 255, 255, 0.24) 100%
		),
		linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.28) 0%,
			rgba(248, 245, 255, 0.17) 48%,
			rgba(255, 255, 255, 0.28) 100%
		);
	backdrop-filter: blur(16px) saturate(132%);
	box-shadow:
		0 14px 32px rgba(98, 63, 155, 0.14),
		inset 0 1px 0 rgba(255, 255, 255, 0.66),
		inset 0 -1px 0 rgba(203, 178, 240, 0.32);
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border-radius: inherit;
		pointer-events: none;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0.12) 24%,
			rgba(255, 255, 255, 0) 62%
		);
	}

	p {
		margin: 0;
		position: relative;
		z-index: 1;
		font-family: var(--font-body);
		font-size: clamp(0.92rem, 0.85rem + 0.2vw, 1.02rem);
		line-height: 1.35;
		color: #5c35b4;
		font-weight: 500;
	}
`;function eu(){let{theme:e}=C();return(0,x.jsxs)(tu,{className:`app ${e}`,children:[(0,x.jsx)(wl,{}),(0,x.jsx)(Er,{}),(0,x.jsx)(Ol,{}),(0,x.jsx)(Il,{}),(0,x.jsx)(wr,{icono:dr,titulo:`Tecnicatura Superior en Redes y Ciberseguridad`,imagenFondoPath:`news-banner.jpg`,textoBoton:`Nueva carrera ¡Conocela!`}),(0,x.jsx)(Vl,{}),(0,x.jsx)(J,{}),(0,x.jsx)(zl,{}),(0,x.jsx)(Ul,{}),(0,x.jsx)(Xl,{}),(0,x.jsx)(wr,{icono:vr,titulo:`TRAMA`,subtitulo:`Espacio Interdisciplinario de Acompañamiento a las Trayectorias Estudiantiles`,imagenFondoPath:`trama.jpg`,textoBoton:`Quiero mas informacion`}),(0,x.jsx)(Ql,{})]})}var tu=Zn.div`
  width: min(80%, 1440px);
  margin: 0 auto;
  
  @media (max-width: 900px) {
    width: min(94%, 1440px);
  }
`;(0,y.createRoot)(document.getElementById(`root`)).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(S,{children:(0,x.jsx)(eu,{})})}));