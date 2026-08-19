var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function E(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(E(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function E(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Ud(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(xu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),A=On(h({},kn,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function j(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Gn(){return j}var M=On(h({},jn,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Jn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=On(h({},kn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=vn&&`CompositionEvent`in window,$n=null;vn&&`documentMode`in document&&($n=document.documentMode);var er=vn&&`TextEvent`in window&&!$n,tr=vn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function N(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return N(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Qn&&ir(e,t)?(e=wn(),Cn=Sn=xn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Dd(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){bd(e,0)}function mr(e){if(Wt(Et(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(vn){var _r;if(vn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,dn(e)),gn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=vn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Gt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Dd(Ir,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};vn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),jt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=pi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=pi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=pi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ke(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,$(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=fe(null),Xi=null,Zi=null;function Qi(e,t,n){k(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,pe(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,I={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=fd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=D.S;D.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=fe(null);function Sa(){var e=xa.current;return e===null?K.pooledCache:e}function Ca(e,t){t===null?k(xa,xa.current):k(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:I._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case T:return t=ja(t),f(e,t,n)}if(ce(t)||E(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=ja(n),p(e,t,n,r)}if(ce(n)||E(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=ja(r),m(e,t,n,r,i)}if(ce(r)||E(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=ja(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(E(o)){if(l=E(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=fe(null),no=fe(0);function ro(e,t){e=Wl,k(no,e),k(to,t),Wl=e|t.baseLanes}function io(){k(no,Wl),k(to,to.current)}function ao(){Wl=no.current,pe(to),pe(no)}var oo=fe(null),so=null;function co(e){var t=e.alternate;k(mo,mo.current&1),k(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){k(mo,mo.current),k(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(k(mo,mo.current),k(oo,e),so===null&&(so=e)):fo(e)}function fo(){k(mo,mo.current),k(oo,oo.current)}function po(e){pe(oo),so===e&&(so=null),pe(mo)}var mo=fe(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function To(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Vs:Hs,bo=!1,a=n(r,i),bo=!1,yo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){D.H=Bs;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&ra(e)&&(ac=!0))}function ko(e,t,n,r){L=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Us,o=t(n,r)}while(yo);return o}function z(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function Po(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function B(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Aa(Co,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Vs:Hs),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return aa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=B(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(Po(),R,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((go&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Kl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ac=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=L,a=Po(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,fs(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=B(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function qo(e){var t=ci(e,2);t!==null&&gu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function V(e,t,n,r){return e.baseState=n,Bo(e,R,typeof r==`function`?r:Ro)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(F){var n=K.formState;if(n!==null){a:{var r=L;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,L,r),r.dispatch=n,r=Jo(!1),a=Is.bind(null,L,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(Po(),R,e)}function is(e,t,n){if(t=Bo(e,t,ts)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=Po(),n=R;if(n!==null)return is(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=B(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return Po().memoizedState}function ls(e,t,n,r){var i=No();L.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&Eo(r,R.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(L.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=B(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=Po().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),L.lanes|=e,Kl|=e,n)}function Cs(e,t,n,r){return Dr(n,t)?n:to.current===null?!(go&42)||go&1073741824&&!(J&261930)?(ac=!0,e.memoizedState=n):(e=hu(),L.lanes|=e,Kl|=e,t):(e=Ss(e,n,r),Dr(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Is(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ya(c,r),mu(e)):Fs(e,t,r,mu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,le,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},mu())}function ks(){return aa(Qf)}function As(){return Po().memoizedState}function js(){return Po().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ka(n);var r=qa(t,e,n);r!==null&&(gu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=si(e,t,n,r),n!==null&&(gu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,mu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return gu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&gu(t,e,2)}function Ls(e){var t=e.alternate;return e===L||t!==null&&t===L}function Rs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Bs={readContext:aa,use:Io,useCallback:To,useContext:To,useEffect:To,useImperativeHandle:To,useLayoutEffect:To,useInsertionEffect:To,useMemo:To,useReducer:To,useRef:To,useState:To,useDebugValue:To,useDeferredValue:To,useTransition:To,useSyncExternalStore:To,useId:To,useHostTransitionStatus:To,useFormState:To,useActionState:To,useOptimistic:To,useMemoCache:To,useCacheRefresh:To};Bs.useEffectEvent=To;var Vs={readContext:aa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Ps.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=ws.bind(null,L,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=No();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Go.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ms.bind(null,L)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:aa,use:Io,useCallback:bs,useContext:aa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:zo,useRef:cs,useState:function(){return zo(Ro)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(Po(),R.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return V(Po(),R,e,t)},useMemoCache:Lo,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:aa,use:Io,useCallback:bs,useContext:aa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Vo,useRef:cs,useState:function(){return Vo(Ro)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Po();return R===null?Ss(n,e,t):Cs(n,R.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=Po();return R===null?(n.baseState=e,[e,n.queue.dispatch]):V(n,R,e,t)},useMemoCache:Lo,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(gu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(gu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(gu(t,e,n),Ja(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ti(e)}function Xs(e){console.error(e)}function Zs(e){ti(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Ka(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=ec(e.stateNode,r,a),Ya(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=Do(e,t,n,o,a,i),s=Ao(),e!==null&&!ac?(jo(e,t,i),jc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ac=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Va(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(lo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ac||na(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),gu(r,e,s),ic;Ou(),t=mc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=pc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return ia(t),n=Do(e,t,n,r,void 0,i),r=Ao(),e!==null&&!ac?(jo(e,t,i),jc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=Ao(),e!==null&&!ac?(jo(e,t,a),jc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Ua||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Ua||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ki(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:wa()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(mo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?co(t):fo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(co(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(ac||na(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),gu(s,e,r),ic;af(c)||Ou(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=wa():(l=I._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Va(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(mo,o),oc(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ra(e)))}function Nc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Qi(t,I,e.memoizedState.cache),Ki();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(mo,mo.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:Qi(t,I,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Mc(e,n)&&!(t.flags&128))return ac=!1,Nc(e,t,n);ac=!!(e.flags&131072)}else ac=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,I,r),r!==o.cache&&ta(t,[I],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Vd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Fd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Ri=t,Bi=!0,a=P,$(t.type)?(lf=a,P=cf(r.firstChild)):P=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,z,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(I),e===null?(a=Sa(),a===null&&(a=K,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Qi(t,I,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,I,r),r!==a.cache&&ta(t,[I],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,I,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Tu())e.flags|=8192;else throw Ma=Oa,Ea}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function zc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(I),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=me.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=me.current,Gi(t))Ui(t,o);else{var s=Vd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Hi(t,!0)}else e=Vd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ye(),e===null&&Cd(t.stateNode.containerInfo),H(t),null;case 10:return $i(t.type),H(t),null;case 19:if(pe(mo),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)zc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return k(mo,mo.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return H(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=mo.current,k(mo,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(I),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(I),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(mo),null;case 4:return ye(),null;case 10:return $i(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&pe(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(I),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ii(t),t.tag){case 3:$i(I),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:pe(mo);break;case 10:$i(t.type);break;case 22:case 23:po(t),ao(),e!==null&&pe(xa);break;case 24:$i(I)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){X(e,e.return,t)}}}function Kc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[gt]=t}catch(t){X(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&$(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function U(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ht]=e,t[gt]=n}catch(t){X(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,zd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&U(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||Jc(n,t);var r=W,i=ll;$(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),nl||Wc(4,n,t),ul(e,t,n);break;case 1:nl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if($(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||Jc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){X(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:U(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=aa(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(I).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:D.T===null?ft():fd()}function hu(){if(Yl===0)if(!(J&536870912)||F){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(bu(r,t,Yl,!Vl),et(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Zi=Xi=null,Mo(e),Fa=null,Ia=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=hi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ai(),n}function wu(e,t){L=null,D.H=Bs,t===Ta||t===Da?(t=Na(),Y=3):t===Ea?(t=Na(),Y=4):Y=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Qs(e,Ci(t,e.current)))}function Tu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Eu(){var e=D.H;return D.H=Bs,e===null?Bs:e}function Du(){var e=D.A;return D.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,ai()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Pe()+500,Cu(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(ka(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ka(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Zi=Xi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,ai(),Gl):0}function Mu(){for(;q!==null&&!Me();)Nu(q)}function Nu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=gi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Zi=Xi=null,Mo(t),Fa=null,Ia=0;var i=t.return;try{if(rc(e,i,t,n,J)){Gl=1,Qs(e,Ci(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Qs(e,Ci(n,e.current)),q=null;return}t.flags&32768?(F||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Re,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=Bd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!zd,Bd=zd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Ne();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=dt(cu),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Hu(e,t)}}function Gu(e,t,n){t=Ci(n,t),t=ec(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(at(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ci(n,e),n=tc(2),r=qa(t,n,2),r!==null&&(nc(n,r,t,e),at(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Pe()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=rt()),e=ci(e,t),e!==null&&(at(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Ae(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Pe(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=ld.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?Ae(Ie,od):sd()})}function fd(){if(rd===0){var e=ha;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<$r.length;gd++){var _d=$r[gd];ei(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=M;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Gr:case Kr:case qr:l=Bn;break;case Zr:l=Jn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,ar=!0)),y=Dd(r,x),0<y.length&&(x=new A(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=N(n),b!==null&&(x.data=b)))),(b=er?or(e,n):sr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new A(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=_n(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function $(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=xu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Fd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Fd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(gu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&gu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=mu();t=ut(t);var n=ci(e,t);n!==null&&gu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Td(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Pe()+500,ad(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&gu(s,a,2),xu(),ip(a,2)}if(a=dp(r),a===null&&Td(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,mu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),xu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Cd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/vera-page/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function w(e,t){return t+e.replace(/\\/g,`/`)}var ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return E(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:oe(t)}return ce(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function re(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function E(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?se(t):t,state:n,key:t&&t.key||r||ie(),mask:i}}function oe({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function se(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ce(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:E(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:E(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return D(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function D(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:oe(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function O(e,t,n=`/`){return le(e,t,n,!1)}function le(e,t,n,r,i){let a=De((typeof t==`string`?se(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ue(e),s=null,c=Ee(a);for(let e=0;s==null&&e<o.length;++e)s=Se(o[e],c,r);return s}function ue(e){let t=de(e);return pe(t),t}function de(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),de(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Te(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of fe(e.path))a(e,t,!0,n)}),t}function fe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=fe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function pe(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var k=/^:[\w-]+$/,me=3,he=2,ge=1,_e=10,ve=-2,ye=e=>e===`*`;function be(e,t){let n=e.split(`/`),r=n.length;return n.some(ye)&&(r+=ve),t&&(r+=he),n.filter(e=>!ye(e)).reduce((e,t)=>e+(k.test(t)?me:t===``?ge:_e),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?we(u,l,s.matcher,s.compiledParams):Ce(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Fe([a,d.pathname]),pathnameBase:Le(Fe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Fe([a,d.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Te(e.path,e.caseSensitive,e.end);return we(e,t,n,r)}function we(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Te(e,t=!1,n=!0){re(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ee(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return re(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function De(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?se(e):e,a;return n?(n=Pe(n),a=n.startsWith(`/`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function ke(e,t){let n=Ie(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=se(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.replace(/[\\/]{2,}/g,`/`),Fe=e=>Pe(e.join(`/`)),Ie=e=>e.replace(/\/+$/,``),Le=e=>Ie(e).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function He(e){return Fe(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ue=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function We(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ue)try{let e=new URL(window.location.href),r=C.test(n)?new URL(w(n,e.protocol)):new URL(n),a=De(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{re(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ge=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ge);var Ke=[`GET`,...Ge];new Set(Ke);var qe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Je(e){try{return qe.includes(new URL(e).protocol)}catch{return!1}}var Ye=x.createContext(null);Ye.displayName=`DataRouter`;var Xe=x.createContext(null);Xe.displayName=`DataRouterState`;var Ze=x.createContext(!1);function Qe(){return x.useContext(Ze)}var $e=x.createContext({isTransitioning:!1});$e.displayName=`ViewTransition`;var et=x.createContext(new Map);et.displayName=`Fetchers`;var tt=x.createContext(null);tt.displayName=`Await`;var nt=x.createContext(null);nt.displayName=`Navigation`;var rt=x.createContext(null);rt.displayName=`Location`;var it=x.createContext({outlet:null,matches:[],isDataRoute:!1});it.displayName=`Route`;var at=x.createContext(null);at.displayName=`RouteError`;var ot=`REACT_ROUTER_ERROR`,st=`REDIRECT`,ct=`ROUTE_ERROR_RESPONSE`;function lt(e){if(e.startsWith(`${ot}:${st}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ut(e){if(e.startsWith(`${ot}:${ct}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Be(t.status,t.statusText,t.data)}catch{}}function dt(e,{relative:t}={}){T(ft(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(nt),{hash:i,pathname:a,search:o}=yt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ft(){return x.useContext(rt)!=null}function pt(){return T(ft(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(rt).location}var mt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ht(e){x.useContext(nt).static||x.useLayoutEffect(e)}function gt(){let{isDataRoute:e}=x.useContext(it);return e?It():_t()}function _t(){T(ft(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ye),{basename:t,navigator:n}=x.useContext(nt),{matches:r}=x.useContext(it),{pathname:i}=pt(),a=JSON.stringify(Me(r)),o=x.useRef(!1);return ht(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(re(o.current,mt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function vt(){let{matches:e}=x.useContext(it);return e[e.length-1]?.params??{}}function yt(e,{relative:t}={}){let{matches:n}=x.useContext(it),{pathname:r}=pt(),i=JSON.stringify(Me(n));return x.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function bt(e,t){return xt(e,t)}function xt(e,t,n){T(ft(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(nt),{matches:i}=x.useContext(it),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Rt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=pt(),d;if(t){let e=typeof t==`string`?se(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):O(e,{pathname:p});re(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),re(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ot(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Fe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(rt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function St(){let e=Ft(),t=Ve(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Ct=x.createElement(St,null),wt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ut(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(it.Provider,{value:this.props.routeContext},x.createElement(at.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Et,{error:e},t):t}};wt.contextType=Ze;var Tt=new WeakMap;function Et({children:e,error:t}){let{basename:n}=x.useContext(nt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=lt(t.digest);if(e){let r=Tt.get(t);if(r)throw r;let i=We(e.location,n),a=i.absoluteURL||i.to;if(Je(a))throw Error(`Invalid redirect location`);if(Ue&&!Tt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Tt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Dt({routeContext:e,match:t,children:n}){let r=x.useContext(Ye);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(it.Provider,{value:e},n)}function Ot(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:He(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ct,o&&(s<0&&c===0?(Rt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Dt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(wt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function kt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function At(e){let t=x.useContext(Ye);return T(t,kt(e)),t}function jt(e){let t=x.useContext(Xe);return T(t,kt(e)),t}function Mt(e){let t=x.useContext(it);return T(t,kt(e)),t}function Nt(e){let t=Mt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pt(){return Nt(`useRouteId`)}function Ft(){let e=x.useContext(at),t=jt(`useRouteError`),n=Nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function It(){let{router:e}=At(`useNavigate`),t=Nt(`useNavigate`),n=x.useRef(!1);return ht(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{re(n.current,mt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Lt={};function Rt(e,t,n){!t&&!Lt[e]&&(Lt[e]=!0,re(!1,n))}x.memo(zt);function zt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return xt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Bt({to:e,replace:t,state:n,relative:r}){T(ft(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext(nt);re(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(it),{pathname:o}=pt(),s=gt(),c=Ne(e,Me(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Vt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ht({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!ft(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=se(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=De(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return re(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(nt.Provider,{value:c},x.createElement(rt.Provider,{children:t,value:h}))}function Ut({children:e,location:t}){return bt(Wt(e),t)}x.Component;function Wt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Wt(e.props.children,i));return}T(e.type===Vt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Wt(e.props.children,i)),n.push(a)}),n}var Gt=`get`,Kt=`application/x-www-form-urlencoded`;function qt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Jt(e){return qt(e)&&e.tagName.toLowerCase()===`button`}function Yt(e){return qt(e)&&e.tagName.toLowerCase()===`form`}function Xt(e){return qt(e)&&e.tagName.toLowerCase()===`input`}function Zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Zt(e)}var $t=null;function en(){if($t===null)try{new FormData(document.createElement(`form`),0),$t=!1}catch{$t=!0}return $t}var tn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function nn(e){return e!=null&&!tn.has(e)?(re(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`),null):e}function rn(e,t){let n,r,i,a,o;if(Yt(e)){let o=e.getAttribute(`action`);r=o?De(o,t):null,n=e.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`enctype`))||Kt,a=new FormData(e)}else if(Jt(e)||Xt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?De(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`formenctype`))||nn(o.getAttribute(`enctype`))||Kt,a=new FormData(o,e),!en()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(qt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gt,r=null,i=Kt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&De(i.pathname,t)===`/`?`${Ie(t)}/_root.${r}`:`${Ie(i.pathname)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=x.useContext(Ye);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=x.useContext(Xe);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=x.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=x.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=x.useContext(vn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=Qe(),{nonce:r}=yn(),{router:i}=gn(),a=x.useMemo(()=>O(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(wn,{page:e,matches:a,...t}):x.createElement(Tn,{page:e,matches:a,...t})):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=pt(),{future:i}=yn(),{basename:a}=gn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=pt(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=x.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function On({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Ht,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var kn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(nt),v=typeof l==`string`&&S.test(l),y=We(l,h);l=y.to;let b=dt(l,{relative:r}),C=pt(),w=null;if(o){let e=Ne(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fe([h,e.pathname])),w=g.createHref(e)}let[ee,te,ne]=bn(n,p),T=Pn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||T(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...ne,href:(ie?w:void 0)||y.absoluteURL||b,onClick:ie?re:e,ref:En(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?x.createElement(x.Fragment,null,ae,x.createElement(Sn,{page:b})):ae});kn.displayName=`Link`;var An=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=yt(a,{relative:c.relative}),d=pt(),f=x.useContext(Xe),{navigator:p,basename:m}=x.useContext(nt),h=f!=null&&zn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=De(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return x.createElement(kn,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});An.displayName=`NavLink`;var jn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(nt),g=Ln(),_=Rn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&S.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});jn.displayName=`Form`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=x.useContext(Ye);return T(t,Mn(e)),t}function Pn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=gt(),d=pt(),f=yt(e,{relative:o});return x.useCallback(p=>{if(Qt(p,t)){p.preventDefault();let t=n===void 0?oe(d)===oe(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Fn=0,In=()=>`__${String(++Fn)}__`;function Ln(){let{router:e}=Nn(`useSubmit`),{basename:t}=x.useContext(nt),n=Pt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=rn(e,t);if(a.navigate===!1){let e=a.fetcherKey||In();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Rn(e,{relative:t}={}){let{basename:n}=x.useContext(nt),r=x.useContext(it);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...yt(e||`.`,{relative:t})},o=pt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fe([n,a.pathname])),oe(a)}function zn(e,{relative:t}={}){let n=x.useContext($e);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=yt(e,{relative:t});if(!n.isTransitioning)return!1;let a=De(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=De(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}var Bn=g(),Vn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=o(((e,t)=>{t.exports=Vn()}))(),Hn=(0,x.createContext)(null);function Un({children:e}){let[t,n]=(0,x.useState)(`light`),[r,i]=(0,x.useState)(`Vera`),a=()=>{n(e=>e===`light`?`dark`:`light`)},o=(0,x.useMemo)(()=>({theme:t,toggleTheme:a,name:r,setName:i}),[t,r]);return(0,A.jsx)(Hn.Provider,{value:o,children:e})}function Wn(){let e=(0,x.useContext)(Hn);if(!e)throw Error(`useAppContext must be used within an AppProvider`);return e}var j=`-ms-`,Gn=`-moz-`,M=`-webkit-`,Kn=`comm`,qn=`rule`,Jn=`decl`,Yn=`@import`,Xn=`@namespace`,Zn=`@keyframes`,Qn=`@layer`,$n=Math.abs,er=String.fromCharCode,tr=Object.assign;function nr(e,t){return or(e,0)^45?(((t<<2^or(e,0))<<2^or(e,1))<<2^or(e,2))<<2^or(e,3):0}function rr(e){return e.trim()}function ir(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function ar(e,t,n){return e.indexOf(t,n)}function or(e,t){return e.charCodeAt(t)|0}function sr(e,t,n){return e.slice(t,n)}function cr(e){return e.length}function lr(e){return e.length}function ur(e,t){return t.push(e),e}function dr(e,t){return e.map(t).join(``)}function fr(e,t){return e.filter(function(e){return!ir(e,t)})}var pr=1,mr=1,hr=0,gr=0,_r=0,vr=``;function yr(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:pr,column:mr,length:o,return:``,siblings:s}}function br(e,t){return tr(yr(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function xr(e){for(;e.root;)e=br(e.root,{children:[e]});ur(e,e.siblings)}function Sr(){return _r}function Cr(){return _r=gr>0?or(vr,--gr):0,mr--,_r===10&&(mr=1,pr--),_r}function wr(){return _r=gr<hr?or(vr,gr++):0,mr++,_r===10&&(mr=1,pr++),_r}function Tr(){return or(vr,gr)}function Er(){return gr}function Dr(e,t){return sr(vr,e,t)}function Or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kr(e){return pr=mr=1,hr=cr(vr=e),gr=0,[]}function Ar(e){return vr=``,e}function jr(e){return rr(Dr(gr-1,Pr(e===91?e+2:e===40?e+1:e)))}function Mr(e){for(;(_r=Tr())&&_r<33;)wr();return Or(e)>2||Or(_r)>3?``:` `}function Nr(e,t){for(;--t&&wr()&&!(_r<48||_r>102||_r>57&&_r<65||_r>70&&_r<97););return Dr(e,Er()+(t<6&&Tr()==32&&wr()==32))}function Pr(e){for(;wr();)switch(_r){case e:return gr;case 34:case 39:e!==34&&e!==39&&Pr(_r);break;case 40:e===41&&Pr(e);break;case 92:wr();break}return gr}function Fr(e,t){for(;wr()&&e+_r!==57&&(e+_r!==84||Tr()!==47););return`/*`+Dr(t,gr-1)+`*`+er(e===47?e:wr())}function Ir(e){for(;!Or(Tr());)wr();return Dr(e,gr)}function Lr(e){return Ar(Rr(``,null,null,null,[``],e=kr(e),0,[0],e))}function Rr(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=wr()){case 40:if(m!=108&&or(C,d-1)==58){ar(C+=N(jr(v),`&`,`&\f`),`&\f`,$n(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=jr(v);break;case 9:case 10:case 13:case 32:C+=Mr(m);break;case 92:C+=Nr(Er()-1,7);continue;case 47:switch(Tr()){case 42:case 47:ur(Br(Fr(wr(),Er()),t,n,c),c),(Or(m||1)==5||Or(Tr()||1)==5)&&cr(C)&&sr(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=cr(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(cr(C)-d||h===0&&m===47)&&ur(p>32?Vr(C+`;`,r,n,d-1,c):Vr(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(ur(S=zr(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Rr(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(or(C,3)===110)break;case 108:if(or(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Rr(e,S,S,r&&ur(zr(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Rr(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+cr(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Cr()==125)continue}switch(C+=er(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(cr(C)-1)*_,_=1;break;case 64:Tr()===45&&(C+=jr(wr())),f=Tr(),u=d=cr(y=C+=Ir(Er())),v++;break;case 45:m===45&&cr(C)==2&&(h=0)}}return a}function zr(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=lr(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=sr(e,f+1,f=$n(g=o[h])),b=e;v<m;++v)(b=rr(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return yr(e,t,n,i===0?qn:s,c,l,u,d)}function Br(e,t,n,r){return yr(e,t,n,Kn,er(Sr()),sr(e,2,-2),0,r)}function Vr(e,t,n,r,i){return yr(e,t,n,Jn,sr(e,0,r),sr(e,r+1,-1),r,i)}function Hr(e,t,n){switch(nr(e,t)){case 5103:return M+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return M+e+e;case 4855:return M+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Gn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Gn+e+j+e+e;case 5936:switch(or(e,t+11)){case 114:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return M+e+j+e+e;case 6165:return M+e+j+`flex-`+e+e;case 5187:return M+e+N(e,/(\w+).+(:[^]+)/,M+`box-$1$2`+j+`flex-$1$2`)+e;case 5443:return M+e+j+`flex-item-`+N(e,/flex-|-self/g,``)+(ir(e,/flex-|baseline/)?``:j+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return M+e+j+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return M+e+j+N(e,`shrink`,`negative`)+e;case 5292:return M+e+j+N(e,`basis`,`preferred-size`)+e;case 6060:return M+`box-`+N(e,`-grow`,``)+M+e+j+N(e,`grow`,`positive`)+e;case 4554:return M+N(e,/([^-])(transform)/g,`$1`+M+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,M+`$1`),/(image-set)/,M+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,M+`box-pack:$3`+j+`flex-pack:$3`),/space-between/,`justify`)+M+e+e;case 4200:if(!ir(e,/flex-|baseline/))return j+`grid-column-align`+sr(e,t)+e;break;case 2592:case 3360:return j+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,ir(e.props,/grid-\w+-end/)})?~ar(e+(n=n[t].value),`span`,0)?e:j+N(e,`-start`,``)+e+j+`grid-row-span:`+(~ar(n,`span`,0)?ir(n,/\d+/):ir(n,/\d+/)-+ir(e,/\d+/))+`;`:j+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return ir(e.props,/grid-\w+-start/)})?e:j+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,M+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cr(e)-1-t>6)switch(or(e,t+1)){case 109:if(or(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+M+`$2-$3$1`+Gn+(or(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ar(e,`stretch`,0)?Hr(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return j+n+`:`+r+s+(i?j+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(or(e,t+6)===121)return N(e,`:`,`:`+M)+e;break;case 6444:switch(or(e,or(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+M+(or(e,14)===45?`inline-`:``)+`box$3$1`+M+`$2$3$1`+j+`$2box$3`)+e;case 100:return N(e,`:`,`:`+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function Ur(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Wr(e,t,n,r){switch(e.type){case Qn:if(e.children.length)break;case Yn:case Xn:case Jn:return e.return=e.return||e.value;case Kn:return``;case Zn:return e.return=e.value+`{`+Ur(e.children,r)+`}`;case qn:if(!cr(e.value=e.props.join(`,`)))return``}return cr(n=Ur(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Gr(e){var t=lr(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Kr(e){return function(t){t.root||(t=t.return)&&e(t)}}function qr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Jn:e.return=Hr(e.value,e.length,n);return;case Zn:return Ur([br(e,{value:N(e.value,`@`,`@`+M)})],r);case qn:if(e.length)return dr(n=e.props,function(t){switch(ir(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:xr(br(e,{props:[N(t,/:(read-\w+)/,`:`+Gn+`$1`)]})),xr(br(e,{props:[t]})),tr(e,{props:fr(n,r)});break;case`::placeholder`:xr(br(e,{props:[N(t,/:(plac\w+)/,`:`+M+`input-$1`)]})),xr(br(e,{props:[N(t,/:(plac\w+)/,`:`+Gn+`$1`)]})),xr(br(e,{props:[N(t,/:(plac\w+)/,j+`input-$1`)]})),xr(br(e,{props:[t]})),tr(e,{props:fr(n,r)})}return``})}}var Jr=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Yr=`active`,Xr=`data-styled-version`,Zr=`6.4.4`,Qr=`/*!sc*/
`,$r=typeof window<`u`&&typeof document<`u`;function ei(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var ti=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:ei(`REACT_APP_SC_DISABLE_SPEEDY`)??ei(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),ni=`sc-keyframes-`;function ri(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var ii=new Map,ai=new Map,oi=1,si=e=>{if(ii.has(e))return ii.get(e);for(;ai.has(oi);)oi++;let t=oi++;return ii.set(e,t),ai.set(t,e),t},ci=e=>ai.get(e),li=(e,t)=>{oi=t+1,ii.set(e,t),ai.set(t,e)},ui=Object.freeze([]),di=Object.freeze({});function fi(e,t,n=di){return e.theme!==n.theme&&e.theme||t||n.theme}var pi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mi=/(^-|-$)/g;function hi(e){return e.replace(pi,`-`).replace(mi,``)}var gi=/(a)(d)/gi,_i=e=>String.fromCharCode(e+(e>25?39:97));function vi(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=_i(t%52)+n;return(_i(t%52)+n).replace(gi,`$1-$2`)}var yi=5381,bi=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},xi=e=>bi(yi,e);function Si(e){return vi(xi(e)>>>0)}function Ci(e){return e.displayName||e.name||`Component`}function wi(e){return typeof e==`string`&&!0}function Ti(e){return wi(e)?`styled.${e}`:`Styled(${Ci(e)})`}var Ei=Symbol.for(`react.memo`),Di=Symbol.for(`react.forward_ref`),Oi={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ki={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ai={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ji={[Di]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ei]:Ai};function Mi(e){return(`type`in(t=e)&&t.type.$$typeof)===Ei?Ai:`$$typeof`in e?ji[e.$$typeof]:Oi;var t}var Ni=Object.defineProperty,Pi=Object.getOwnPropertyNames,Fi=Object.getOwnPropertySymbols,Ii=Object.getOwnPropertyDescriptor,Li=Object.getPrototypeOf,Ri=Object.prototype;function P(e,t,n){if(typeof t!=`string`){let r=Li(t);r&&r!==Ri&&P(e,r,n);let i=Pi(t).concat(Fi(t)),a=Mi(e),o=Mi(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in ki||n&&n[s]||o&&s in o||a&&s in a)){let n=Ii(t,s);try{Ni(e,s,n)}catch{}}}}return e}function F(e){return typeof e==`function`}var zi=Symbol.for(`react.forward_ref`);function Bi(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===zi&&`styledComponentId`in e}function Vi(e,t){return e&&t?e+` `+t:e||t||``}function Hi(e,t){return e.join(t||``)}function Ui(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Wi(e,t,n=!1){if(!n&&!Ui(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Wi(e[n],t[n]);else if(Ui(t))for(let n in t)e[n]=Wi(e[n],t[n]);return e}function Gi(e,t){Object.defineProperty(e,"toString",{value:t})}var Ki=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw ri(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Qr;return t}},qi=`style[${Jr}][${Xr}="${Zr}"]`,Ji=RegExp(`^${Jr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Yi=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Xi=e=>{if(!e)return document;if(Yi(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Yi(t))return t}return document},Zi=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Qi=(e,t)=>{let n=(t.textContent??``).split(Qr),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Ji);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(li(n,t),Zi(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},$i=e=>{let t=Xi(e.options.target).querySelectorAll(qi);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Jr)!==Yr&&(Qi(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ea=!1;function ta(){if(!1!==ea)return ea;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ea=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ea=t.getAttribute(`content`)||void 0}return ea=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var na=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Jr}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Jr,Yr),i.setAttribute(Xr,Zr);let s=t||ta();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},ra=class{constructor(e,t){this.element=na(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw ri(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},ia=class{constructor(e,t){this.element=na(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},aa=$r,oa={isServer:!$r,useCSSOMInjection:!ti},sa=class e{static registerId(e){return si(e)}constructor(e=di,t={},n){this.options=Object.assign(Object.assign({},oa),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$r&&aa&&(aa=!1,$i(this)),Gi(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=ci(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Jr+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&$r&&$i(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&$r&&t.target!==this.options.target&&Xi(this.options.target)!==Xi(t.target)&&$i(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new ra(t,n):new ia(t,n))(this.options),new Ki(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){si(e),e.startsWith(ni)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(si(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(si(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},ca=new WeakSet,la={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ua(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in la||e.startsWith(`--`)?String(t).trim():t+`px`}var I=47;function da(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var fa=Symbol.for(`sc-keyframes`);function pa(e){return typeof e==`object`&&!!e&&fa in e}function ma(e){return F(e)&&!(e.prototype&&e.prototype.isReactComponent)}var ha=e=>e==null||!1===e||e===``,ga=Symbol.for(`react.client.reference`);function _a(e){return e.$$typeof===ga}function va(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!ha(r)&&(Array.isArray(r)&&ca.has(r)||F(r)?t.push(da(n)+`:`,r,`;`):Ui(r)?(t.push(n+` {`),va(r,t),t.push(`}`)):t.push(da(n)+`: `+ua(n,r)+`;`))}}function ya(e,t,n,r,i=[]){if(ha(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return _a(e)?i:ma(e)&&t?ya(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)ya(e[a],t,n,r,i);return i}return Bi(e)?(i.push(`.${e.styledComponentId}`),i):pa(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):_a(e)?i:Ui(e)&&e.toString===Object.prototype.toString?(va(e,i),i):(i.push(e.toString()),i)}var ba=xi(Zr),xa=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=bi(ba,t),this.baseStyle=n,sa.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(ma(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Hi(ya(r,e,t,n)))}else i+=Hi(ya(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=vi(bi(bi(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Vi(r,a)}}return r}},Sa=/&/g;function Ca(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function wa(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==I||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===I&&(o=!1,c++);else if(l!==34&&l!==39||Ca(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Ta(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Ta(a.children,t)}return e}function Ea({options:e=di,plugins:t=ui}=di){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Sa,r).replace(i,a))}),e.prefix&&o.push(qr),o.push(Wr);let s=[],c=Gr(o.concat(Kr(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return wa(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Ca(e,o))if(s===0)if(t===I&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==I);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===I)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===I&&o+1<r&&e.charCodeAt(o+1)===I){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:wa(i)):l===0?e:wa(e)}(t),d=Lr(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Ta(d,e.namespace)),s=[],Ur(d,c),s},u=e,d=yi;for(let e=0;e<t.length;e++)t[e].name||ri(15),d=bi(d,t[e].name);return u!=null&&u.namespace&&(d=bi(d,u.namespace)),u!=null&&u.prefix&&(d=bi(d,`p`)),l.hash=d===yi?``:d.toString(),l}var Da=new sa,Oa=Ea(),ka=x.createContext({shouldForwardProp:void 0,styleSheet:Da,stylis:Oa,stylisPlugins:void 0});ka.Consumer;function Aa(){return x.useContext(ka)}var ja=x.createContext(void 0);ja.Consumer;var Ma=Object.prototype.hasOwnProperty,Na={};function Pa(e,t){let n=typeof e==`string`?hi(e):`sc`;Na[n]=(Na[n]||0)+1;let r=n+`-`+Si(Zr+n+Na[n]);return t?t+`-`+r:r}function Fa(e,t,n){let r=Bi(e),i=e,a=!wi(e),{attrs:o=ui,componentId:s=Pa(t.displayName,t.parentComponentId),displayName:c=Ti(e)}=t,l=t.displayName&&t.componentId?hi(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new xa(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=x.useContext(ja),u=Aa(),d=e.shouldForwardProp||u.shouldForwardProp,f=fi(t,l,a)||di,p,m;{let e=x.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Ma.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=F(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Vi(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Vi(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)Ma.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Vi(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[wi(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,x.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=x.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Vi(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Wi(e,n,!0);return e}({},i.defaultProps,e):e}}),Gi(m,()=>`.${m.styledComponentId}`),a&&P(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Ia=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function La(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ra=e=>(ca.add(e),e);function za(e,...t){if(F(e)||Ui(e))return Ra(ya(La(ui,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?ya(n):Ra(ya(La(n,t)))}function Ba(e,t,n=di){if(!t)throw ri(1,t);let r=(r,...i)=>e(t,n,za(r,...i));return r.attrs=r=>Ba(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Ba(e,t,Object.assign(Object.assign({},n),r)),r}var Va=e=>Ba(Fa,e),Ha=Va;Ia.forEach(e=>{Ha[e]=Va(e)}),`${Jr}`,`${Jr}`,`${Jr}`;var Ua=`/vera-page/assets/BOTONERA%20OFERTA%20PERMANENTE%20VERA%202026%20ELVERA.EDU.AR%20OPT-11-eZU4M6Jx.png`,Wa=`/vera-page/assets/Campus-Virtual-CWB4UWa5.webp`,Ga=`/vera-page/assets/adorno-BgaSSMwp.png`,Ka=`/vera-page/assets/banner-BZZzu38N.png`,qa=`/vera-page/assets/1-BBmSDB4Z.png`,Ja=`/vera-page/assets/2-B_YyXTDw.jpg`,Ya=`/vera-page/assets/3-C5vYQbhW.png`,Xa=`/vera-page/assets/directivos-JZA9ZtzD.png`,Za=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Creator:%20CorelDRAW%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='90.664mm'%20height='10.681mm'%20style='shape-rendering:geometricPrecision;%20text-rendering:geometricPrecision;%20image-rendering:optimizeQuality;%20fill-rule:evenodd;%20clip-rule:evenodd'%20viewBox='0%200%2090.664%2010.681'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c![CDATA[%20.fil0%20{fill:url(%23id0)}%20]]%3e%3c/style%3e%3clinearGradient%20id='id0'%20gradientUnits='userSpaceOnUse'%20x1='-0'%20y1='5.7004'%20x2='90.664'%20y2='5.7004'%3e%3cstop%20offset='0'%20style='stop-color:%236A3AA4'/%3e%3cstop%20offset='1'%20style='stop-color:%238853C3'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='Capa_x0020_1'%3e%3cmetadata%20id='CorelCorpID_0Corel-Layer'/%3e%3cpath%20class='fil0'%20d='M2.1166%200.0002l86.4308%200c1.1642,0%202.1166,0.9524%202.1166,2.1166l0%206.1737c0,1.1642%20-0.9965,2.434%20-2.1166,2.1166%20-18.8528,-5.3431%20-82.5122,-6.4163%20-86.4308,0%20-0.6068,0.9936%20-2.1166,-0.9524%20-2.1166,-2.1166l0%20-6.1737c0,-1.1642%200.9524,-2.1166%202.1166,-2.1166z'/%3e%3c/g%3e%3c/svg%3e`,Qa=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='548pt'%20height='777pt'%20viewBox='0%200%20548%20777'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20250.00%20775.02%20C%20248.70%20774.20%20248.43%20765.25%20248.00%20707.82%20L%20247.50%20641.56%20L%20245.00%20640.29%20C%20243.62%20639.60%20241.49%20639.02%20240.27%20639.01%20C%20233.45%20638.97%20207.87%20632.50%20192.00%20626.81%20C%20116.87%20599.86%2050.23%20526.74%2021.05%20439.22%20C%206.98%20397.02%201.00%20358.30%201.00%20309.39%20C%201.00%20287.39%201.03%20287.05%203.21%20285.89%20C%206.15%20284.32%2038.22%20285.32%2054.50%20287.49%20C%20129.10%20297.44%20192.45%20339.20%20240.21%20409.88%20L%20247.95%20421.33%20L%20248.23%20361.92%20C%20248.38%20329.24%20248.17%20301.18%20247.77%20299.57%20C%20246.86%20295.93%20245.50%20295.03%20240.82%20295.02%20C%20235.73%20294.99%20215.89%20289.76%20205.07%20285.58%20C%20186.44%20278.38%20169.26%20268.54%20152.00%20255.16%20C%20141.38%20246.92%20120.56%20226.23%20111.61%20215.00%20C%2090.03%20187.95%2072.70%20154.34%2063.07%20120.87%20C%2054.47%2090.97%2050.01%2056.66%2050.00%2020.32%20C%2050.00%206.94%2050.27%203.87%2051.57%202.57%20C%2054.77%20-0.63%2089.08%200.83%20111.50%205.12%20C%20177.43%2017.75%20234.42%2064.79%20269.11%20135.20%20L%20273.39%20143.89%20L%20280.30%20130.70%20C%20302.77%2087.76%20335.83%2051.08%20371.50%2029.49%20C%20388.45%2019.24%20409.03%2011.08%20429.12%206.65%20C%20445.51%203.04%20456.15%201.93%20476.38%201.70%20L%20494.25%201.50%20L%20496.22%204.11%20C%20498.12%206.64%20498.15%207.49%20497.06%2030.61%20C%20495.70%2059.60%20493.84%2076.85%20490.01%2096.00%20C%20478.80%20151.96%20455.95%20196.09%20419.04%20233.06%20C%20384.97%20267.18%20352.77%20285.96%20315.97%20293.17%20C%20306.55%20295.01%20304.01%20295.90%20301.75%20298.13%20L%20299.00%20300.85%20L%20299.00%20360.92%20C%20299.00%20393.97%20299.19%20421.00%20299.43%20421.00%20C%20299.66%20421.00%20302.74%20416.61%20306.28%20411.25%20C%20340.06%20360.05%20384.66%20322.14%20433.70%20302.97%20C%20464.18%20291.05%20489.64%20286.26%20524.40%20285.90%20C%20542.72%20285.71%20544.41%20285.84%20545.65%20287.54%20C%20546.65%20288.91%20547.00%20293.53%20546.98%20305.44%20C%20546.95%20346.32%20541.73%20386.43%20531.98%20420.94%20C%20508.27%20504.83%20453.42%20576.93%20385.99%20612.86%20C%20362.31%20625.47%20332.29%20635.56%20308.33%20638.95%20C%20303.88%20639.58%20301.10%20640.51%20300.27%20641.65%20C%20299.28%20643.01%20299.00%20657.36%20299.00%20707.76%20C%20299.00%20750.22%20298.65%20772.79%20297.96%20774.07%20C%20296.99%20775.89%20295.66%20776.00%20274.21%20775.98%20C%20261.66%20775.98%20250.83%20775.55%20250.00%20775.02ZM%20246.00%20575.63%20C%20246.00%20570.63%20242.33%20550.20%20238.93%20536.30%20C%20217.24%20447.56%20154.36%20375.67%2079.43%20353.95%20C%2066.78%20350.29%2054.72%20347.88%2053.76%20348.84%20C%2053.20%20349.40%2053.49%20354.02%2054.50%20360.63%20C%2060.47%20399.82%2075.80%20441.81%2096.47%20475.57%20C%20106.63%20492.16%20116.41%20504.50%20130.95%20519.08%20C%20150.73%20538.91%20170.29%20552.58%20193.96%20563.09%20C%20210.18%20570.30%20236.47%20578.75%20243.25%20578.93%20C%20245.72%20578.99%20246.00%20578.66%20246.00%20575.63ZM%20319.27%20575.58%20C%20340.54%20570.12%20359.29%20562.09%20375.86%20551.33%20C%20433.16%20514.12%20470.88%20458.00%20488.00%20384.50%20C%20492.16%20366.64%20494.87%20348.89%20493.51%20348.36%20C%20491.47%20347.58%20467.12%20353.54%20458.02%20357.05%20C%20453.40%20358.83%20444.14%20363.09%20437.44%20366.51%20C%20365.23%20403.38%20320.64%20468.00%20303.55%20560.53%20C%20300.31%20578.07%20300.30%20579.00%20303.46%20579.00%20C%20304.81%20579.00%20311.92%20577.46%20319.27%20575.58ZM%20244.34%20228.40%20C%20244.14%20221.43%20239.54%20202.61%20234.44%20187.95%20C%20214.65%20131.07%20171.90%2086.11%20121.88%2069.61%20C%20103.63%2063.58%20102.07%2063.76%20103.86%2071.63%20C%20111.22%20103.98%20115.32%20116.58%20124.70%20135.70%20C%20145.41%20177.92%20180.38%20211.87%20219.21%20227.46%20C%20228.35%20231.14%20241.80%20235.08%20243.50%20234.58%20C%20244.05%20234.42%20244.43%20231.64%20244.34%20228.40ZM%20318.00%20231.31%20C%20344.44%20223.75%20376.08%20201.29%20397.21%20175.10%20C%20419.96%20146.89%20436.69%20110.58%20442.40%2077.04%20C%20444.16%2066.72%20443.45%2064.53%20438.68%2065.55%20C%20426.75%2068.12%20405.20%2077.18%20392.50%2084.96%20C%20370.56%2098.42%20348.75%20120.78%20332.98%20146.00%20C%20324.90%20158.93%20315.52%20178.95%20311.01%20192.94%20C%20306.94%20205.57%20300.78%20232.83%20301.68%20234.28%20C%20302.29%20235.28%20307.30%20234.37%20318.00%20231.31Z'/%3e%3c/g%3e%3c/svg%3e`,$a=`/vera-page/assets/carousel-CjBB1kvi.jpg`,eo=`/vera-page/assets/desarrollo-software-BoULmQA3.svg`,to=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='492pt'%20height='755pt'%20viewBox='0%200%20492%20755'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2015.00%20752.41%20C%209.42%20750.00%204.12%20744.16%202.47%20738.59%20C%200.36%20731.48%200.34%20493.61%202.44%20487.70%20C%206.09%20477.49%2014.61%20471.00%2024.38%20471.00%20C%2028.21%20471.00%2031.63%20472.06%2039.06%20475.53%20C%2051.27%20481.24%2058.98%20482.72%2067.93%20481.07%20C%2085.89%20477.78%20100.86%20463.83%20107.50%20444.20%20C%20116.03%20418.97%20111.62%20394.59%2095.35%20377.01%20C%2078.28%20358.58%2059.43%20355.32%2037.39%20366.99%20C%2031.02%20370.37%2028.90%20371.00%2023.88%20371.00%20C%2016.26%20371.00%2012.25%20369.28%207.82%20364.10%20C%200.63%20355.70%200.93%20360.96%201.23%20249.99%20L%201.50%20150.50%20L%204.13%20144.89%20C%206.89%20139.01%2011.03%20135.18%2017.00%20133.00%20C%2019.66%20132.02%2036.10%20131.60%2085.16%20131.24%20L%20149.82%20130.77%20L%20149.29%20119.64%20C%20147.90%2090.99%20155.81%2062.04%20170.72%2041.14%20C%20180.71%2027.13%20195.74%2013.70%20208.83%207.07%20C%20216.99%202.94%20228.97%201.05%20247.09%201.02%20C%20266.74%201.00%20274.55%202.58%20287.21%209.17%20C%20302.59%2017.17%20321.57%2037.89%20330.49%2056.41%20C%20339.80%2075.73%20342.46%2088.24%20342.48%20112.63%20L%20342.50%20130.76%20L%20407.50%20131.17%20L%20472.50%20131.57%20L%20477.25%20133.88%20C%20479.86%20135.14%20483.35%20137.81%20484.99%20139.81%20C%20491.30%20147.46%20491.05%20142.60%20490.76%20253.12%20L%20490.50%20353.64%20L%20487.48%20359.54%20C%20483.46%20367.40%20477.50%20371.29%20469.44%20371.29%20C%20464.88%20371.29%20462.13%20370.45%20454.18%20366.64%20C%20448.85%20364.08%20441.68%20361.49%20438.25%20360.89%20C%20414.47%20356.70%20389.08%20376.36%20382.56%20404.02%20C%20379.01%20419.06%20381.29%20438.69%20388.23%20452.84%20C%20392.69%20461.93%20403.30%20472.61%20412.20%20476.95%20C%20425.91%20483.65%20438.51%20483.31%20452.89%20475.85%20C%20462.56%20470.84%20467.03%20469.81%20473.33%20471.17%20C%20479.06%20472.39%20485.03%20477.27%20488.32%20483.43%20L%20490.50%20487.50%20L%20490.50%20613.00%20L%20490.50%20738.50%20L%20487.70%20743.26%20C%20485.77%20746.56%20483.32%20748.93%20479.70%20751.00%20L%20474.50%20753.98%20L%20389.57%20753.99%20C%20305.45%20754.00%20304.59%20753.98%20300.31%20751.91%20C%20288.37%20746.13%20284.76%20731.94%20290.93%20715.02%20C%20295.86%20701.53%20297.31%20693.12%20296.78%20681.14%20C%20296.02%20663.90%20290.33%20650.67%20278.43%20638.51%20C%20259.43%20619.09%20233.07%20619.66%20212.97%20639.91%20C%20201.33%20651.65%20196.34%20663.69%20195.33%20682.50%20C%20194.71%20693.86%20196.08%20701.37%20201.16%20714.50%20C%20204.67%20723.56%20205.27%20730.86%20203.12%20738.26%20C%20201.31%20744.48%20195.04%20751.62%20190.19%20752.96%20C%20187.80%20753.63%20156.93%20753.98%20102.50%20753.96%20C%2029.80%20753.93%2018.03%20753.72%2015.00%20752.41ZM%20151.16%20690.00%20C%20150.32%20654.10%20160.80%20624.85%20182.71%20601.91%20C%20195.25%20588.78%20208.87%20580.31%20224.71%20575.80%20C%20235.10%20572.84%20255.05%20572.63%20265.50%20575.38%20C%20300.19%20584.50%20326.81%20613.23%20337.24%20652.77%20C%20340.14%20663.78%20340.35%20665.73%20340.56%20684.50%20L%20340.79%20704.50%20L%20393.64%20704.50%20L%20446.50%20704.50%20L%20446.76%20618.38%20L%20447.01%20532.26%20L%20435.70%20532.76%20C%20382.63%20535.10%20340.20%20490.10%20336.39%20427.43%20C%20334.34%20393.54%20345.65%20361.39%20367.94%20337.78%20C%20387.31%20317.26%20410.11%20307.80%20436.56%20309.30%20L%20447.00%20309.89%20L%20447.00%20246.47%20L%20447.00%20183.05%20L%20376.25%20182.78%20L%20305.50%20182.50%20L%20301.31%20180.26%20C%20296.14%20177.50%20292.28%20172.58%20290.42%20166.39%20C%20288.23%20159.11%20288.64%20155.92%20293.72%20141.19%20L%20298.44%20127.50%20L%20298.42%20113.50%20C%20298.39%20101.04%20298.09%2098.62%20295.72%2091.50%20C%20281.59%2049.14%20239.50%2036.63%20211.23%2066.39%20C%20198.98%2079.30%20193.63%2093.66%20193.69%20113.50%20C%20193.73%20126.11%20194.68%20130.78%20200.53%20146.99%20C%20202.71%20153.04%20203.14%20155.64%20202.75%20160.52%20C%20201.89%20171.29%20195.54%20179.62%20186.44%20181.91%20C%20183.53%20182.64%20159.66%20183.00%20113.56%20183.00%20L%2045.00%20183.00%20L%2045.00%20246.37%20L%2045.00%20309.74%20L%2056.30%20309.24%20C%20112.12%20306.77%20155.97%20356.69%20156.00%20422.71%20C%20156.01%20469.03%20129.09%20512.64%2091.54%20527.12%20C%2078.89%20531.99%2071.22%20533.25%2057.25%20532.75%20L%2045.00%20532.31%20L%2045.00%20617.99%20C%2045.00%20665.11%2045.30%20703.97%2045.68%20704.34%20C%2046.05%20704.71%2070.01%20704.90%2098.93%20704.76%20L%20151.50%20704.50%20L%20151.16%20690.00Z'/%3e%3c/g%3e%3c/svg%3e`,no=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='550pt'%20height='755pt'%20viewBox='0%200%20550%20755'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2025.05%20560.78%20C%2018.83%20557.44%2015.71%20551.48%2016.22%20543.92%20C%2016.55%20539.16%2017.58%20536.71%2023.24%20527.28%20C%2030.63%20514.98%2034.07%20507.42%2036.35%20498.50%20C%2042.04%20476.19%2037.66%20455.65%2021.95%20431.00%20C%2015.98%20421.62%2014.50%20416.55%2016.06%20410.76%20C%2017.66%20404.83%2020.62%20401.08%2025.40%20398.91%20C%2029.26%20397.15%2033.31%20397.04%2095.85%20397.02%20L%20162.20%20397.00%20L%20154.58%20389.88%20C%20135.51%20372.08%20123.78%20350.30%20115.47%20317.30%20C%20106.39%20281.28%20106.95%20245.15%20117.07%20214.00%20C%20124.22%20191.97%20139.01%20166.25%20152.87%20151.75%20C%20169.46%20134.38%20191.22%20124.68%20213.50%20124.72%20C%20230.05%20124.75%20243.56%20129.57%20257.85%20140.55%20L%20265.21%20146.19%20L%20268.35%20143.20%20C%20270.08%20141.55%20274.43%20138.32%20278.00%20136.03%20C%20282.74%20132.99%20283.69%20132.06%20281.51%20132.60%20C%20279.87%20133.00%20274.47%20133.37%20269.51%20133.42%20C%20258.03%20133.52%20253.57%20131.58%20250.17%20125.00%20C%20248.01%20120.80%20247.88%20119.62%20248.29%20107.50%20C%20248.77%2093.22%20250.81%2083.59%20256.01%2070.98%20C%20272.31%2031.43%20308.50%203.89%20347.50%201.35%20C%20358.80%200.61%20363.80%201.87%20367.85%206.49%20C%20373.01%2012.36%20374.14%2020.68%20371.93%2036.57%20C%20367.07%2071.51%20345.74%20103.23%20315.52%20120.46%20L%20308.43%20124.50%20L%20317.47%20124.69%20C%20351.70%20125.43%20382.74%20148.85%20402.04%20188.50%20C%20415.44%20216.04%20420.80%20242.74%20419.70%20276.50%20C%20418.23%20321.76%20405.62%20354.69%20376.53%20389.25%20L%20370.85%20396.00%20L%20434.67%20396.01%20C%20505.58%20396.03%20505.55%20396.03%20518.09%20402.62%20C%20529.51%20408.62%20538.62%20418.83%20543.72%20431.33%20C%20548.06%20441.97%20548.93%20450.12%20548.97%20480.59%20C%20549.00%20505.40%20548.77%20509.59%20547.02%20516.43%20C%20540.78%20540.83%20523.20%20557.38%20499.77%20560.90%20C%20496.09%20561.45%20397.88%20562.11%20261.50%20562.50%20L%2029.50%20563.16%20L%2025.05%20560.78ZM%20363.16%20475.65%20C%20466.20%20475.30%20469.93%20475.22%20473.16%20473.37%20C%20484.03%20467.11%20480.36%20451.38%20467.58%20449.46%20C%20464.95%20449.06%20382.62%20449.14%20284.64%20449.62%20C%2089.74%20450.58%20103.20%20450.10%2098.59%20456.32%20C%2097.18%20458.23%2096.53%20460.54%2096.59%20463.45%20C%2096.74%20470.31%20100.99%20474.88%20108.50%20476.25%20C%20109.60%20476.45%20143.35%20476.48%20183.50%20476.31%20C%20223.65%20476.14%20304.50%20475.84%20363.16%20475.65Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2051.94%20752.97%20C%2048.33%20752.55%2042.14%20751.07%2038.18%20749.70%20C%2019.09%20743.06%207.20%20729.15%203.24%20708.79%20C%201.15%20698.06%200.81%20643.60%202.76%20632.00%20C%206.29%20611.07%2022.44%20594.02%2043.50%20589.00%20C%2048.92%20587.71%20348.84%20585.73%20462.50%20586.24%20C%20519.45%20586.49%20521.62%20586.57%20524.90%20588.50%20C%20530.89%20592.03%20532.51%20595.21%20532.44%20603.33%20C%20532.38%20610.17%20532.01%20611.28%20524.32%20627.50%20C%20514.46%20648.27%20510.98%20658.18%20510.28%20667.46%20C%20509.32%20680.24%20514.45%20695.15%20527.81%20718.39%20C%20533.39%20728.09%20534.74%20733.52%20533.11%20739.61%20C%20531.86%20744.22%20526.95%20749.25%20522.10%20750.87%20C%20519.65%20751.69%20486.68%20752.00%20403.35%20752.00%20C%20327.12%20752.00%20288.00%20752.34%20288.00%20753.00%20C%20288.00%20754.19%2062.15%20754.16%2051.94%20752.97ZM%20445.57%20664.03%20C%20452.46%20661.05%20454.97%20652.75%20450.97%20646.19%20C%20446.75%20639.25%20461.04%20639.69%20261.50%20640.45%20C%20146.65%20640.89%2080.34%20641.50%2078.28%20642.14%20C%2067.18%20645.58%2067.22%20662.55%2078.33%20665.95%20C%2080.36%20666.57%20146.48%20666.72%20261.50%20666.36%20C%20430.32%20665.82%20441.75%20665.68%20445.57%20664.03Z'/%3e%3c/g%3e%3c/svg%3e`,ro=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3cpath%20d='M505%20122.9L517.1%20135C526.5%20144.4%20526.5%20159.6%20517.1%20168.9L488%20198.1L441.9%20152L471%20122.9C480.4%20113.5%20495.6%20113.5%20504.9%20122.9zM273.8%20320.2L408%20185.9L454.1%20232L319.8%20366.2C316.9%20369.1%20313.3%20371.2%20309.4%20372.3L250.9%20389L267.6%20330.5C268.7%20326.6%20270.8%20323%20273.7%20320.1zM437.1%2089L239.8%20286.2C231.1%20294.9%20224.8%20305.6%20221.5%20317.3L192.9%20417.3C190.5%20425.7%20192.8%20434.7%20199%20440.9C205.2%20447.1%20214.2%20449.4%20222.6%20447L322.6%20418.4C334.4%20415%20345.1%20408.7%20353.7%20400.1L551%20202.9C579.1%20174.8%20579.1%20129.2%20551%20101.1L538.9%2089C510.8%2060.9%20465.2%2060.9%20437.1%2089zM152%20128C103.4%20128%2064%20167.4%2064%20216L64%20488C64%20536.6%20103.4%20576%20152%20576L424%20576C472.6%20576%20512%20536.6%20512%20488L512%20376C512%20362.7%20501.3%20352%20488%20352C474.7%20352%20464%20362.7%20464%20376L464%20488C464%20510.1%20446.1%20528%20424%20528L152%20528C129.9%20528%20112%20510.1%20112%20488L112%20216C112%20193.9%20129.9%20176%20152%20176L264%20176C277.3%20176%20288%20165.3%20288%20152C288%20138.7%20277.3%20128%20264%20128L152%20128z'/%3e%3c/svg%3e`,io=`data:image/svg+xml,%3csvg%20aria-hidden='true'%20class='e-font-icon-svg%20e-fas-fingerprint'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M256.12%20245.96c-13.25%200-24%2010.74-24%2024%201.14%2072.25-8.14%20141.9-27.7%20211.55-2.73%209.72%202.15%2030.49%2023.12%2030.49%2010.48%200%2020.11-6.92%2023.09-17.52%2013.53-47.91%2031.04-125.41%2029.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194%20164.16%20151.25%20211.3%20152.1%20265.32c.75%2047.94-3.75%2095.91-13.37%20142.55-2.69%2012.98%205.67%2025.69%2018.64%2028.36%2013.05%202.67%2025.67-5.66%2028.36-18.64%2010.34-50.09%2015.17-101.58%2014.37-153.02-.41-25.95%2019.92-52.49%2054.45-52.34%2031.31.47%2057.15%2025.34%2057.62%2055.47.77%2048.05-2.81%2096.33-10.61%20143.55-2.17%2013.06%206.69%2025.42%2019.76%2027.58%2019.97%203.33%2026.81-15.1%2027.58-19.77%208.28-50.03%2012.06-101.21%2011.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76%203.48-25.62%2031.5-39.39%2071.28-38.75%20112%20.59%2037.58-2.47%2075.27-9.11%20112.05-2.34%2013.05%206.31%2025.53%2019.36%2027.89%2020.11%203.5%2027.07-14.81%2027.89-19.36%207.19-39.84%2010.5-80.66%209.86-121.33-.47-29.88%209.2-57.88%2028-80.97%208.35-10.28%206.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87%201.44-45.78%204.97-12.89%203.06-20.87%2015.98-17.83%2028.89%203.06%2012.89%2016%2020.83%2028.89%2017.83%2011.05-2.61%2022.47-3.77%2034-3.69%2075.43%201.13%20137.73%2061.5%20138.88%20134.58.59%2037.88-1.28%2076.11-5.58%20113.63-1.5%2013.17%207.95%2025.08%2021.11%2026.58%2016.72%201.95%2025.51-11.88%2026.58-21.11a929.06%20929.06%200%200%200%205.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07%20121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94%202.86-21.12%2015.66-18.26%2028.61%204.71%2021.41%204.91%2037.41%204.7%2061.6-.11%2013.27%2010.55%2024.09%2023.8%2024.2h.2c13.17%200%2023.89-10.61%2024-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29%2043.46%20337.6%201.29%20252.81.02%20183.02-.82%20118.47%2024.91%2070.46%2072.94%2024.09%20119.37-.9%20181.04.14%20246.65l-.12%2021.47c-.39%2013.25%2010.03%2024.31%2023.28%2024.69.23.02.48.02.72.02%2012.92%200%2023.59-10.3%2023.97-23.3l.16-23.64c-.83-52.5%2019.16-101.86%2056.28-139%2038.76-38.8%2091.34-59.67%20147.68-58.86%2069.45%201.03%20134.73%2035.56%20174.62%2092.39%207.61%2010.86%2022.56%2013.45%2033.42%205.86%2010.84-7.62%2013.46-22.59%205.84-33.43z'%3e%3c/path%3e%3c/svg%3e`,ao=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='492pt'%20height='734pt'%20viewBox='0%200%20492%20734'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20228.57%20343.43%20C%20227.16%20342.01%20227.00%20325.03%20227.00%20171.43%20L%20227.00%201.00%20L%20352.50%201.00%20L%20477.99%201.00%20L%20482.07%204.68%20C%20484.31%206.71%20487.12%2010.19%20488.32%2012.43%20L%20490.50%2016.50%20L%20490.76%20179.50%20C%20491.01%20332.11%20490.92%20342.58%20489.32%20343.75%20C%20487.98%20344.73%20460.29%20345.00%20358.88%20345.00%20C%20243.18%20345.00%20229.98%20344.84%20228.57%20343.43ZM%20331.44%20275.62%20C%20342.18%20267.42%20342.19%20249.59%20331.47%20241.41%20C%20321.27%20233.63%20307.70%20239.78%20304.00%20253.87%20C%20301.81%20262.23%20306.70%20273.56%20314.12%20277.35%20C%20319.10%20279.88%20326.86%20279.11%20331.44%20275.62ZM%20404.63%20277.08%20C%20408.42%20274.77%20412.32%20269.72%20413.86%20265.10%20C%20418.04%20252.62%20409.02%20238.01%20397.14%20238.00%20C%20385.56%20237.99%20376.90%20249.99%20379.17%20262.90%20C%20381.36%20275.31%20395.04%20282.93%20404.63%20277.08ZM%20327.57%20192.11%20C%20334.48%20188.97%20340.00%20180.37%20340.00%20172.76%20C%20340.00%20168.26%20336.99%20161.58%20333.23%20157.72%20C%20326.61%20150.94%20318.09%20150.35%20311.42%20156.20%20C%20299.20%20166.93%20301.64%20186.18%20316.01%20192.41%20C%20320.58%20194.39%20322.66%20194.34%20327.57%20192.11ZM%20405.59%20190.79%20C%20414.49%20184.71%20417.34%20173.09%20412.38%20163.13%20C%20407.73%20153.81%20398.25%20149.78%20390.42%20153.79%20C%20383.03%20157.58%20378.77%20164.61%20378.77%20173.00%20C%20378.77%20188.58%20394.02%20198.70%20405.59%20190.79ZM%20329.46%20105.72%20C%20331.79%20104.40%20334.68%20101.45%20336.46%2098.57%20C%20345.34%2084.21%20333.62%2063.59%20318.52%2066.99%20C%20307.84%2069.41%20300.98%2082.08%20304.35%2093.20%20C%20308.12%20105.63%20319.56%20111.33%20329.46%20105.72ZM%20406.57%20104.52%20C%20410.80%20101.29%20414.98%2093.09%20414.98%2088.00%20C%20415.00%2078.75%20408.56%2069.35%20400.75%2067.20%20C%20389.80%2064.17%20378.86%2074.26%20378.86%2087.36%20C%20378.86%2095.62%20384.07%20104.03%20391.00%20106.93%20C%20395.29%20108.73%20402.51%20107.61%20406.57%20104.52Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20151.04%20731.07%20C%20149.59%20728.36%20149.59%205.64%20151.04%202.93%20C%20152.00%201.12%20153.31%201.00%20171.54%201.00%20L%20191.00%201.00%20L%20191.00%20367.00%20L%20191.00%20733.00%20L%20171.54%20733.00%20C%20153.31%20733.00%20152.00%20732.88%20151.04%20731.07Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2076.04%20731.07%20C%2074.59%20728.36%2074.59%205.64%2076.04%202.93%20C%2077.00%201.13%2078.31%201.00%2096.04%201.00%20L%20115.00%201.00%20L%20115.00%20367.00%20L%20115.00%20733.00%20L%2096.04%20733.00%20C%2078.31%20733.00%2077.00%20732.87%2076.04%20731.07Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2012.07%20730.55%20C%208.04%20727.58%204.74%20722.84%202.98%20717.50%20C%201.06%20711.67%201.01%2022.51%202.94%2016.50%20C%204.71%2010.96%208.67%205.37%2012.51%203.00%20C%2015.27%201.29%2017.49%201.00%2027.87%201.00%20L%2040.00%201.00%20L%2040.00%20367.00%20L%2040.00%20733.00%20L%2027.69%20733.00%20C%2016.21%20733.00%2015.17%20732.84%2012.07%20730.55Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20302.00%20562.57%20C%20302.00%20408.97%20302.16%20391.99%20303.57%20390.57%20C%20304.87%20389.27%20307.96%20389.00%20321.49%20389.00%20C%20330.48%20389.00%20338.55%20389.27%20339.42%20389.61%20C%20340.85%20390.16%20341.00%20406.24%20341.00%20561.61%20L%20341.00%20733.00%20L%20321.50%20733.00%20L%20302.00%20733.00%20L%20302.00%20562.57Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20377.00%20563.11%20C%20377.00%20402.79%20377.10%20393.10%20378.75%20391.08%20C%20380.44%20389.02%20381.15%20388.95%20398.00%20389.22%20L%20415.50%20389.50%20L%20415.75%20561.25%20L%20416.01%20733.00%20L%20396.50%20733.00%20L%20377.00%20733.00%20L%20377.00%20563.11Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20227.00%20562.57%20C%20227.00%20408.97%20227.16%20391.99%20228.57%20390.57%20C%20229.87%20389.27%20233.00%20389.00%20246.87%20389.00%20C%20258.55%20389.00%20263.96%20389.36%20264.80%20390.20%20C%20265.72%20391.12%20266.00%20430.69%20266.00%20562.20%20L%20266.00%20733.00%20L%20246.50%20733.00%20L%20227.00%20733.00%20L%20227.00%20562.57Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%20453.00%20562.20%20C%20453.00%20430.69%20453.28%20391.12%20454.20%20390.20%20C%20455.58%20388.82%20487.64%20388.49%20489.76%20389.83%20C%20490.77%20390.47%20490.97%20423.37%20490.76%20554.07%20L%20490.50%20717.50%20L%20488.28%20721.64%20C%20487.07%20723.92%20484.17%20727.41%20481.85%20729.39%20L%20477.64%20733.00%20L%20465.32%20733.00%20L%20453.00%20733.00%20L%20453.00%20562.20Z'/%3e%3c/g%3e%3c/svg%3e`,oo=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='512pt'%20height='726pt'%20viewBox='0%200%20512%20726'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFF'%3e%3cpath%20d='M%2052.00%20724.37%20C%2037.34%20722.18%2025.17%20716.79%2016.88%20708.82%20C%2010.47%20702.66%206.67%20697.00%203.65%20689.11%20L%201.50%20683.50%20L%201.22%20367.00%20C%201.02%20146.02%201.25%2048.54%202.00%2044.00%20C%205.00%2025.74%2019.10%2010.63%2039.50%203.83%20L%2046.50%201.50%20L%20256.50%201.50%20L%20466.50%201.50%20L%20474.46%204.31%20C%20490.05%209.82%20500.83%2019.21%20507.40%2033.00%20L%20510.50%2039.50%20L%20510.50%20363.00%20L%20510.50%20686.50%20L%20507.30%20693.26%20C%20501.25%20706.02%20488.69%20716.64%20473.58%20721.76%20L%20465.50%20724.50%20L%20260.00%20724.62%20C%20146.97%20724.69%2053.38%20724.58%2052.00%20724.37ZM%20388.02%20583.00%20C%20389.28%20581.01%20389.28%20512.99%20388.02%20511.00%20C%20387.19%20509.69%20376.97%20509.48%20306.92%20509.35%20C%20234.09%20509.22%20226.63%20509.06%20225.14%20507.57%20C%20223.63%20506.05%20223.53%20491.67%20223.91%20325.62%20L%20224.31%20145.31%20L%20222.16%20143.16%20C%20220.01%20141.01%20219.80%20141.00%20173.20%20141.00%20C%20138.13%20141.00%20126.10%20141.30%20125.20%20142.20%20C%20124.27%20143.13%20124.00%20193.58%20124.00%20363.23%20L%20124.00%20583.06%20L%20126.25%20583.97%20C%20127.57%20584.51%20181.91%20584.81%20257.79%20584.69%20C%20371.48%20584.52%20387.19%20584.32%20388.02%20583.00Z'/%3e%3c/g%3e%3c/svg%3e`,so=`/vera-page/assets/musica-CVXWYPox.svg`,co=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='464pt'%20height='738pt'%20viewBox='0%200%20464%20738'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20fill='%23FEFEFEFE'%3e%3cpath%20d='M%2024.00%20736.33%20C%2018.05%20733.99%2017.56%20728.82%2022.37%20719.23%20C%2035.59%20692.89%2037.52%20664.92%2028.33%20633.00%20C%2026.98%20628.33%2022.09%20615.00%2017.46%20603.39%20C%205.89%20574.39%202.74%20562.20%202.62%20546.00%20C%202.49%20528.88%205.04%20520.11%2015.00%20503.38%20L%2018.05%20498.25%20L%2021.02%20448.38%20C%2037.77%20166.92%2051.95%2038.55%2069.16%2012.57%20C%2076.76%201.09%2088.17%203.19%2094.83%2017.30%20C%20101.55%2031.55%20105.59%2048.02%20113.01%2091.50%20C%20124.77%20160.39%20133.07%20231.93%20152.96%20435.71%20L%20158.93%20496.92%20L%20162.35%20503.71%20C%20177.90%20534.60%20180.64%20572.30%20170.49%20615.50%20C%20157.52%20670.70%20121.18%20710.34%2067.50%20727.88%20C%2051.11%20733.23%2027.69%20737.78%2024.00%20736.33ZM%20100.00%20493.05%20C%20120.62%20492.60%20138.27%20491.92%20139.21%20491.53%20C%20140.15%20491.14%20141.21%20489.91%20141.56%20488.81%20C%20142.31%20486.43%20140.00%20456.61%20138.93%20454.88%20C%20137.98%20453.35%20138.57%20453.35%2085.04%20454.33%20C%2060.04%20454.78%2038.83%20455.56%2037.91%20456.05%20C%2036.60%20456.75%2036.10%20459.06%2035.60%20466.72%20C%2035.24%20472.10%2034.69%20479.68%2034.37%20483.58%20C%2033.54%20493.78%2033.90%20494.02%2049.82%20493.93%20C%2056.79%20493.90%2079.38%20493.50%20100.00%20493.05ZM%20102.22%20437.40%20C%20125.60%20436.94%20134.39%20436.43%20135.68%20435.49%20C%20137.34%20434.27%20137.16%20431.40%20132.16%20381.35%20C%20120.46%20264.36%20110.81%20179.64%20103.93%20133.50%20C%2098.94%20100.05%2092.97%2066.10%2090.04%2054.49%20C%2087.38%2043.95%2081.66%2028.53%2080.05%2027.53%20C%2077.98%2026.25%2070.53%2059.49%2066.61%2087.50%20C%2057.62%20151.71%2049.96%20237.34%2041.56%20367.50%20C%2039.64%20397.20%2037.80%20424.70%2037.46%20428.61%20C%2036.55%20439.27%2036.67%20439.34%2055.42%20438.61%20C%2063.71%20438.28%2084.77%20437.74%20102.22%20437.40Z'/%3e%3c/g%3e%3cg%20fill='%23FEFEFEFE'%3e%3cpath%20d='M%20361.38%20732.60%20C%20352.42%20728.60%20346.51%20712.19%20339.55%20672.00%20C%20328.51%20608.15%20317.27%20477.54%20306.03%20282.50%20C%20304.93%20263.25%20303.77%20245.67%20303.48%20243.44%20C%20303.17%20241.18%20300.80%20235.75%20298.10%20231.17%20C%20291.06%20219.20%20288.82%20211.73%20288.23%20198.19%20C%20287.43%20179.55%20290.87%20165.04%20303.49%20134.00%20C%20315.50%20104.45%20319.38%2088.11%20319.29%2067.50%20C%20319.22%2049.46%20315.83%2035.64%20307.37%2018.77%20C%20303.51%2011.08%20303.21%208.19%20305.92%204.86%20C%20307.56%202.84%20308.66%202.52%20313.67%202.62%20C%20328.91%202.93%20355.46%2010.57%20375.50%2020.41%20C%20419.44%2041.99%20446.82%2078.63%20457.38%20130.01%20C%20461.21%20148.63%20462.34%20161.46%20461.66%20178.50%20C%20460.81%20199.60%20457.29%20214.39%20448.46%20234.00%20L%20444.18%20243.50%20L%20440.55%20281.00%20C%20418.65%20507.34%20408.80%20591.44%20395.88%20662.50%20C%20386.80%20712.39%20379.26%20731.57%20368.00%20733.42%20C%20365.94%20733.75%20363.22%20733.42%20361.38%20732.60ZM%20372.58%20694.33%20C%20383.89%20659.79%20399.00%20546.29%20417.95%20353.50%20C%20420.17%20330.95%20422.22%20311.10%20422.51%20309.39%20C%20422.87%20307.26%20422.48%20305.60%20421.27%20304.15%20C%20419.54%20302.07%20418.55%20302.01%20372.62%20301.00%20C%20335.32%20300.18%20325.43%20300.23%20324.23%20301.22%20C%20322.40%20302.74%20322.43%20303.42%20328.03%20387.50%20C%20335.77%20503.75%20341.57%20569.15%20350.10%20636.50%20C%20354.28%20669.51%20359.87%20698.75%20364.09%20709.69%20L%20365.17%20712.50%20L%20367.16%20708.65%20C%20368.25%20706.54%20370.69%20700.09%20372.58%20694.33ZM%20425.15%20279.50%20C%20425.51%20276.75%20426.13%20268.87%20426.54%20261.99%20C%20427.20%20250.69%20427.10%20249.33%20425.50%20248.00%20C%20423.78%20246.57%20397.25%20245.67%20337.62%20244.99%20C%20321.55%20244.81%20319.84%20245.30%20319.77%20250.13%20C%20319.66%20257.04%20321.42%20281.05%20322.11%20282.19%20C%20323.05%20283.70%20352.34%20284.62%20397.50%20284.54%20L%20424.50%20284.50%20L%20425.15%20279.50Z'/%3e%3c/g%3e%3c/svg%3e`,lo=`/vera-page/assets/recursos-humanos-BmL4_JjZ.svg`,uo=`/vera-page/assets/redes-y-ciberseguridad-9WGkkmbT.svg`,fo=`data:image/svg+xml,%3csvg%20aria-hidden='true'%20class='e-font-icon-svg%20e-fas-book-reader'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M352%2096c0-53.02-42.98-96-96-96s-96%2042.98-96%2096%2042.98%2096%2096%2096%2096-42.98%2096-96zM233.59%20241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55%20191.13%200%20203.51%200%20219.14v222.8c0%2014.33%2011.59%2026.28%2026.49%2027.05%2043.66%202.29%20131.99%2010.68%20193.04%2041.43%209.37%204.72%2020.48-1.71%2020.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35%202.74-144.46%2012.73-203.78%2049.05-4.1%202.51-6.41%206.96-6.41%2011.63v245.79c0%2010.19%2011.14%2016.63%2020.54%2011.9%2061.04-30.72%20149.32-39.11%20192.97-41.4%2014.9-.78%2026.49-12.73%2026.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z'%3e%3c/path%3e%3c/svg%3e`,po=`/vera-page/assets/inscripciones-BFvMlX9p.jpg`,mo=`/vera-page/assets/logo-png-ADPM22Wl.png`,ho=`/vera-page/assets/news-banner-DGg-CK64.jpg`,go=`/vera-page/assets/trama-CGgrW9R-.jpg`,L=`/vera-page/assets/tramite-online-Bflr4hVD.jpg`,R=`/vera-page/assets/ultimas-noticias-CsVK7sVp.webp`,_o=Object.assign({"../assets/img/BOTONERA OFERTA PERMANENTE VERA 2026 ELVERA.EDU.AR OPT-11.png":Ua,"../assets/img/Campus-Virtual.webp":Wa,"../assets/img/adorno.png":Ga,"../assets/img/banner/banner.png":Ka,"../assets/img/carousel/1.png":qa,"../assets/img/carousel/2.jpg":Ja,"../assets/img/carousel/3.png":Ya,"../assets/img/directivos.png":Xa,"../assets/img/icons/Marco superior Vera Card Web.svg":Za,"../assets/img/icons/agronomia.svg":Qa,"../assets/img/icons/carousel.jpg":$a,"../assets/img/icons/desarrollo-software.svg":eo,"../assets/img/icons/educacion-inicial.svg":to,"../assets/img/icons/educación-primaria.svg":no,"../assets/img/icons/faPenToSquare.svg":ro,"../assets/img/icons/finger-print.svg":io,"../assets/img/icons/ingles.svg":ao,"../assets/img/icons/lengua.svg":oo,"../assets/img/icons/musica.svg":so,"../assets/img/icons/profesorado-de-arte.svg":co,"../assets/img/icons/recursos-humanos.svg":lo,"../assets/img/icons/redes-y-ciberseguridad.svg":uo,"../assets/img/icons/trama-icon.svg":fo,"../assets/img/inscripciones.jpg":po,"../assets/img/logo-png.png":mo,"../assets/img/news-banner.jpg":ho,"../assets/img/trama.jpg":go,"../assets/img/tramite-online.jpg":L,"../assets/img/ultimas-noticias.webp":R});function vo(e){return e?e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:_o[`../assets/img/${e.replace(/^\.?\/?/,``)}`]??null:null}function yo({icono:e=io,titulo:t=`Tecnicatura Superior en Redes y Ciberseguridad`,subtitulo:n=``,subititile:r,textoBoton:i=`Nueva carrera ¡Conocela!`,imagenFondoPath:a=``}){let o=(0,x.useRef)(null),[s,c]=(0,x.useState)(18);(0,x.useEffect)(()=>{let e=()=>{let e=o.current;if(!e)return;let t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=-t.height,i=Math.min(1,Math.max(0,(n-t.top)/(n-r)));c(10+i*78)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]);let l=`${n||r||``}`.trim(),u=vo(a)||`/vera-page/assets/news-banner-DGg-CK64.jpg`;return(0,A.jsxs)(bo,{ref:o,style:{"--banner-bg-y":`${s}%`,"--news-banner-bg":`url(${u})`},children:[(0,A.jsx)(`div`,{className:`news-banner-icon-shell`,"aria-hidden":`true`,children:(0,A.jsx)(`img`,{src:e,alt:``,className:`news-banner-icon`})}),(0,A.jsx)(`h2`,{children:t}),l?(0,A.jsx)(`p`,{className:`news-banner-subtitle`,children:l}):null,(0,A.jsx)(`button`,{className:`button-news`,type:`button`,children:i})]})}var bo=Ha.section`
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
`;function xo({titulo:e=``,subtitulo:t=``,subititile:n,textoBoton:r=`Inscribite ahora`,imagenFondoPath:i=``}){return(0,A.jsx)(So,{children:(0,A.jsx)(`section`,{className:`banner-section`,children:(0,A.jsxs)(`div`,{className:`banner-content`,children:[(0,A.jsx)(`h1`,{className:`banner-title`,children:e}),(0,A.jsx)(`h2`,{className:`banner-subtitle`,children:t}),(0,A.jsx)(`button`,{className:`banner-button`,children:r})]})})})}var So=Ha.section`
    width: 100%;
    max-width: 100%;
    margin-top: 2rem;
    box-sizing: border-box;

    .banner-section {
        position: relative;
        min-height: 440px;
        width: 100%;
        max-width: 100%;
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
            url(${Ka});
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
        font-weight: 200;
        line-height: 1.08;
        font-size: clamp(1rem, 1rem + 1.9vw, 3.5rem);
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
        padding: 0;

        .banner-section {
            min-height: 320px;
            border-radius: 1.35rem;
            background-size: cover, cover, 95% auto;
            background-position: center, center , 100% 200%;
        }

        .banner-content {
            width: 100%;
            padding: 1.25rem 1rem 1rem;
            box-sizing: border-box;
        }

        .banner-title {
            font-size: clamp(1.4rem, 1.1rem + 2vw, 2.1rem);
        }

        .banner-subtitle {
            max-width: 100%;
            font-size: 0.98rem;
        }

        .banner-button {
            width: min(100%, 250px);
            padding: 0.85rem 1rem;
        }
    }
`;function Co(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function wo(e){if(Array.isArray(e))return e}function To(e){if(Array.isArray(e))return Co(e)}function Eo(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Do(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Ro(r.key),r)}}function Oo(e,t,n){return t&&Do(e.prototype,t),n&&Do(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ko(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Bo(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function z(e,t,n){return(t=Ro(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ao(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function jo(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Mo(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function No(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Po(Object(n),!0).forEach(function(t){z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Po(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Fo(e,t){return wo(e)||jo(e,t)||Bo(e,t)||Mo()}function Io(e){return To(e)||Ao(e)||Bo(e)||No()}function Lo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ro(e){var t=Lo(e,`string`);return typeof t==`symbol`?t:t+``}function zo(e){"@babel/helpers - typeof";return zo=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},zo(e)}function Bo(e,t){if(e){if(typeof e==`string`)return Co(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Co(e,t):void 0}}var Vo=function(){},Ho={},Uo={},Wo=null,Go={mark:Vo,measure:Vo};try{typeof window<`u`&&(Ho=window),typeof document<`u`&&(Uo=document),typeof MutationObserver<`u`&&(Wo=MutationObserver),typeof performance<`u`&&(Go=performance)}catch{}var Ko=(Ho.navigator||{}).userAgent,qo=Ko===void 0?``:Ko,Jo=Ho,V=Uo,Yo=Wo,Xo=Go;Jo.document;var Zo=!!V.documentElement&&!!V.head&&typeof V.addEventListener==`function`&&typeof V.createElement==`function`,Qo=~qo.indexOf(`MSIE`)||~qo.indexOf(`Trident/`),$o,es=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ts=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ns={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},rs={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},is=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],as=`classic`,os=`duotone`,ss=`sharp`,cs=`sharp-duotone`,ls=`chisel`,us=`etch`,ds=`graphite`,fs=`jelly`,ps=`jelly-duo`,ms=`jelly-fill`,hs=`mosaic`,gs=`notdog`,_s=`notdog-duo`,vs=`pixel`,ys=`slab`,bs=`slab-duo`,xs=`slab-press`,Ss=`slab-press-duo`,Cs=`thumbprint`,ws=`utility`,Ts=`utility-duo`,Es=`utility-fill`,Ds=`vellum`,Os=`whiteboard`,ks=`Classic`,As=`Duotone`,js=`Sharp`,Ms=`Sharp Duotone`,Ns=`Chisel`,Ps=`Etch`,Fs=`Graphite`,Is=`Jelly`,Ls=`Jelly Duo`,Rs=`Jelly Fill`,zs=`Mosaic`,Bs=`Notdog`,Vs=`Notdog Duo`,Hs=`Pixel`,Us=`Slab`,Ws=`Slab Duo`,Gs=`Slab Press`,Ks=`Slab Press Duo`,qs=`Thumbprint`,Js=`Utility`,Ys=`Utility Duo`,Xs=`Utility Fill`,Zs=`Vellum`,Qs=`Whiteboard`,$s=[as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os];$o={},z(z(z(z(z(z(z(z(z(z($o,as,ks),os,As),ss,js),cs,Ms),ls,Ns),us,Ps),ds,Fs),fs,Is),ps,Ls),ms,Rs),z(z(z(z(z(z(z(z(z(z($o,hs,zs),gs,Bs),_s,Vs),vs,Hs),ys,Us),bs,Ws),xs,Gs),Ss,Ks),Cs,qs),ws,Js),z(z(z(z($o,Ts,Ys),Es,Xs),Ds,Zs),Os,Qs);var ec={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},tc={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},nc=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),rc={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},ic=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ac={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},oc=[`kit`];z(z({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var sc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},cc={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},lc={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},uc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},dc,fc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},pc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];dc={},z(z(z(z(z(z(z(z(z(z(dc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),z(z(z(z(z(z(z(z(z(z(dc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),z(z(z(z(dc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),z(z({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var mc={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},hc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},gc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},_c=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(pc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),vc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],yc=[1,2,3,4,5,6,7,8,9,10],bc=yc.concat([11,12,13,14,15,16,17,18,19,20]),xc=[].concat(Io(Object.keys(hc)),vc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,fc.GROUP,fc.SWAP_OPACITY,fc.PRIMARY,fc.SECONDARY],yc.map(function(e){return`${e}x`}),bc.map(function(e){return`w-${e}`})),Sc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Cc=`___FONT_AWESOME___`,wc=16,Tc=`fa`,Ec=`svg-inline--fa`,Dc=`data-fa-i2svg`,Oc=`data-fa-pseudo-element`,kc=`data-fa-pseudo-element-pending`,Ac=`data-prefix`,jc=`data-icon`,Mc=`fontawesome-i2svg`,Nc=`async`,Pc=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Fc=[`::before`,`::after`,`:before`,`:after`],Ic=function(){try{return!0}catch{return!1}}();function Lc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[as]}})}var Rc=B({},ns);Rc[as]=B(B(B(B({},{"fa-duotone":`duotone`}),ns[as]),ac.kit),ac[`kit-duotone`]);var zc=Lc(Rc),H=B({},rc);H[as]=B(B(B(B({},{duotone:`fad`}),H[as]),uc.kit),uc[`kit-duotone`]);var Bc=Lc(H),Vc=B({},gc);Vc[as]=B(B({},Vc[as]),lc.kit);var Hc=Lc(Vc),Uc=B({},mc);Uc[as]=B(B({},Uc[as]),sc.kit),Lc(Uc);var Wc=es,Gc=`fa-layers-text`,Kc=ts;Lc(B({},ec));var qc=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Jc=rs,Yc=[].concat(Io(oc),Io(xc)),Xc=Jo.FontAwesomeConfig||{};function Zc(e){var t=V.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Qc(e){return e===``?!0:e===`false`?!1:e===`true`||e}V&&typeof V.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Fo(e,2),n=t[0],r=t[1],i=Qc(Zc(n));i!=null&&(Xc[r]=i)});var $c={styleDefault:`solid`,familyDefault:as,cssPrefix:Tc,replacementClass:Ec,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xc.familyPrefix&&(Xc.cssPrefix=Xc.familyPrefix);var el=B(B({},$c),Xc);el.autoReplaceSvg||(el.observeMutations=!1);var U={};Object.keys($c).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(t){el[e]=t,tl.forEach(function(e){return e(U)})},get:function(){return el[e]}})}),Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){el.cssPrefix=e,tl.forEach(function(e){return e(U)})},get:function(){return el.cssPrefix}}),Jo.FontAwesomeConfig=U;var tl=[];function nl(e){return tl.push(e),function(){tl.splice(tl.indexOf(e),1)}}var rl=wc,il={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function al(e){if(!(!e||!Zo)){var t=V.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=V.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return V.head.insertBefore(t,r),e}}var ol=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function sl(){for(var e=12,t=``;e-->0;)t+=ol[Math.random()*62|0];return t}function cl(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function W(e){return e.classList?cl(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function ll(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ul(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${ll(e[n])}" `},``).trim()}function dl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function fl(e){return e.size!==il.size||e.x!==il.x||e.y!==il.y||e.rotate!==il.rotate||e.flipX||e.flipY}function pl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function ml(e){var t=e.transform,n=e.width,r=n===void 0?wc:n,i=e.height,a=i===void 0?wc:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Qo?`translate(${t.x/rl-r/2}em, ${t.y/rl-a/2}em) `:s?`translate(calc(-50% + ${t.x/rl}em), calc(-50% + ${t.y/rl}em)) `:`translate(${t.x/rl}em, ${t.y/rl}em) `,c+=`scale(${t.size/rl*(t.flipX?-1:1)}, ${t.size/rl*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var hl=`:root, :host {
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
}`;function gl(){var e=Tc,t=Ec,n=U.cssPrefix,r=U.replacementClass,i=hl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var _l=!1;function vl(){U.autoAddCss&&!_l&&(al(gl()),_l=!0)}var yl={mixout:function(){return{dom:{css:gl,insertCss:vl}}},hooks:function(){return{beforeDOMElementCreation:function(){vl()},beforeI2svg:function(){vl()}}}},bl=Jo||{};bl[Cc]||(bl[Cc]={}),bl[Cc].styles||(bl[Cc].styles={}),bl[Cc].hooks||(bl[Cc].hooks={}),bl[Cc].shims||(bl[Cc].shims=[]);var xl=bl[Cc],Sl=[],Cl=function(){V.removeEventListener(`DOMContentLoaded`,Cl),wl=1,Sl.map(function(e){return e()})},wl=!1;Zo&&(wl=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),wl||V.addEventListener(`DOMContentLoaded`,Cl));function Tl(e){Zo&&(wl?setTimeout(e,0):Sl.push(e))}function El(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?ll(e):`<${t} ${ul(r)}>${a.map(El).join(``)}</${t}>`}function Dl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ol=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},kl=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ol(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Al(e){return Io(e).length===1?e.codePointAt(0).toString(16):null}function jl(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ml(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=jl(t);typeof xl.hooks.addPack==`function`&&!r?xl.hooks.addPack(e,jl(t)):xl.styles[e]=B(B({},xl.styles[e]||{}),i),e===`fas`&&Ml(`fa`,t)}var Nl=xl.styles,Pl=xl.shims,Fl=Object.keys(Hc),Il=Fl.reduce(function(e,t){return e[t]=Object.keys(Hc[t]),e},{}),Ll=null,Rl={},zl={},G={},K={},q={};function J(e){return~Yc.indexOf(e)}function Y(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!J(i)?i:null}var Bl=function(){var e=function(e){return kl(Nl,function(t,n,r){return t[r]=kl(n,e,{}),t},{})};Rl=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),zl=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),q=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Nl||U.autoFetchSvg,n=kl(Pl,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});G=n.names,K=n.unicodes,Ll=Yl(U.styleDefault,{family:U.familyDefault})};nl(function(e){Ll=Yl(e.styleDefault,{family:U.familyDefault})}),Bl();function Vl(e,t){return(Rl[e]||{})[t]}function Hl(e,t){return(zl[e]||{})[t]}function Ul(e,t){return(q[e]||{})[t]}function Wl(e){return G[e]||{prefix:null,iconName:null}}function Gl(e){var t=K[e],n=Vl(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Kl(){return Ll}var ql=function(){return{prefix:null,iconName:null,rest:[]}};function Jl(e){var t=as,n=Fl.reduce(function(e,t){return e[t]=`${U.cssPrefix}-${t}`,e},{});return $s.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Il[r].includes(e)}))&&(t=r)}),t}function Yl(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?as:t,r=zc[n][e];if(n===os&&!e)return`fad`;var i=Bc[n][e]||Bc[n][r],a=e in xl.styles?e:null;return i||a||null}function Xl(e){var t=[],n=null;return e.forEach(function(e){var r=Y(U.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Zl(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Ql=_c.concat(ic);function $l(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Zl(e.filter(function(e){return Ql.includes(e)})),a=Zl(e.filter(function(e){return!Ql.includes(e)})),o=Fo(i.filter(function(e){return r=e,!is.includes(e)}),1)[0],s=o===void 0?null:o,c=Jl(i),l=B(B({},Xl(a)),{},{prefix:Yl(s,{family:c})});return B(B(B({},l),ru({values:e,family:c,styles:Nl,config:U,canonical:l,givenPrefix:r})),eu(n,r,l))}function eu(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Wl(i):{},o=Ul(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Nl.far&&Nl.fas&&!U.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var tu=$s.filter(function(e){return e!==as||e!==os}),nu=Object.keys(gc).filter(function(e){return e!==as}).map(function(e){return Object.keys(gc[e])}).flat();function ru(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===os,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&tu.includes(n)&&(Object.keys(s).find(function(e){return nu.includes(e)})||l.autoFetchSvg)&&(r.prefix=nc.get(n).defaultShortPrefixId,r.iconName=Ul(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Kl()||`fas`),r}var iu=function(){function e(){Eo(this,e),this.definitions={}}return Oo(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=B(B({},e.definitions[n]||{}),t[n]),Ml(n,t[n]);var r=Hc[as][n];r&&Ml(r,t[n]),Bl()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),au=[],ou={},su={},cu=Object.keys(su);function lu(e,t){var n=t.mixoutsTo;return au=e,ou={},Object.keys(su).forEach(function(e){cu.indexOf(e)===-1&&delete su[e]}),au.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),zo(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ou[e]||(ou[e]=[]),ou[e].push(r[e])})}e.provides&&e.provides(su)}),n}function uu(e,t){var n=[...arguments].slice(2);return(ou[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function du(e){var t=[...arguments].slice(1);(ou[e]||[]).forEach(function(e){e.apply(null,t)})}function fu(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return su[e]?su[e].apply(null,t):void 0}function pu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Kl();if(t)return t=Ul(n,t)||t,Dl(mu.definitions,n,t)||Dl(xl.styles,n,t)}var mu=new iu,hu={noAuto:function(){U.autoReplaceSvg=!1,U.observeMutations=!1,du(`noAuto`)},config:U,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zo?(du(`beforeI2svg`,e),fu(`pseudoElements2svg`,e),fu(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,Tl(function(){gu({autoReplaceSvgRoot:t}),du(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(zo(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ul(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Yl(e[0]);return{prefix:n,iconName:Ul(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${U.cssPrefix}-`)>-1||e.match(Wc))){var r=$l(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Kl(),iconName:Ul(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Kl();return{prefix:i,iconName:Ul(i,e)||e}}}},library:mu,findIconDefinition:pu,toHtml:El},gu=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?V:e;(Object.keys(xl.styles).length>0||U.autoFetchSvg)&&Zo&&U.autoReplaceSvg&&hu.dom.i2svg({node:t})};function _u(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return El(e)})}}),Object.defineProperty(e,"node",{get:function(){if(Zo){var t=V.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function vu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(fl(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=dl(B(B({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function yu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${U.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:B(B({},i),{},{id:o}),children:r}]}]}function bu(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function xu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[U.replacementClass,a?`${U.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:B(B({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!bu(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Dc]=``);var _=B(B({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:B({},l.styles)}),v=r.found&&n.found?fu(`generateAbstractMask`,_)||{children:[],attributes:{}}:fu(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?yu(_):vu(_)}function Su(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=B(B({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Dc]=``);var l=B({},a.styles);fl(i)&&(l.transform=ml({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=dl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Cu(e){var t=e.content,n=e.extra,r=B(B({},n.attributes),{},{class:n.classes.join(` `)}),i=dl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var wu=xl.styles;function Tu(e){var t=e[0],n=e[1],r=Fo(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${U.cssPrefix}-${Jc.GROUP}`},children:[{tag:`path`,attributes:{class:`${U.cssPrefix}-${Jc.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${U.cssPrefix}-${Jc.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Eu={found:!1,width:512,height:512};function Du(e,t){!Ic&&!U.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Ou(e,t){var n=t;return t===`fa`&&U.styleDefault!==null&&(t=Kl()),new Promise(function(r,i){if(n===`fa`){var a=Wl(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&wu[t]&&wu[t][e]){var o=wu[t][e];return r(Tu(o))}Du(e,t),r(B(B({},Eu),{},{icon:U.showMissingIcons&&e&&fu(`missingIconAbstract`)||{}}))})}var ku=function(){},Au=U.measurePerformance&&Xo&&Xo.mark&&Xo.measure?Xo:{mark:ku,measure:ku},ju=`FA "7.3.1"`,Mu=function(e){return Au.mark(`${ju} ${e} begins`),function(){return Nu(e)}},Nu=function(e){Au.mark(`${ju} ${e} ends`),Au.measure(`${ju} ${e}`,`${ju} ${e} begins`,`${ju} ${e} ends`)},Pu={begin:Mu,end:Nu},Fu=function(){};function Iu(e){return typeof(e.getAttribute?e.getAttribute(Dc):null)==`string`}function Lu(e){var t=e.getAttribute?e.getAttribute(Ac):null,n=e.getAttribute?e.getAttribute(jc):null;return t&&n}function Ru(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function zu(){return U.autoReplaceSvg===!0?Wu.replace:Wu[U.autoReplaceSvg]||Wu.replace}function Bu(e){return V.createElementNS(`http://www.w3.org/2000/svg`,e)}function Vu(e){return V.createElement(e)}function Hu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Bu:Vu:t;if(typeof e==`string`)return V.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Hu(e,{ceFn:n}))}),r}function Uu(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Wu={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Hu(e),t)}),t.getAttribute(Dc)===null&&U.keepOriginalSource){var n=V.createComment(Uu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~W(t).indexOf(U.replacementClass))return Wu.replace(e);var r=RegExp(`${U.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===U.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return El(e)}).join(`
`);t.setAttribute(Dc,``),t.innerHTML=a}};function Gu(e){e()}function X(e,t){var n=typeof t==`function`?t:Fu;if(e.length===0)n();else{var r=Gu;U.mutateApproach===Nc&&(r=Jo.requestAnimationFrame||Gu),r(function(){var t=zu(),r=Pu.begin(`mutate`);e.map(t),r(),n()})}}var Ku=!1;function qu(){Ku=!0}function Ju(){Ku=!1}var Yu=null;function Xu(e){if(Yo&&U.observeMutations){var t=e.treeCallback,n=t===void 0?Fu:t,r=e.nodeCallback,i=r===void 0?Fu:r,a=e.pseudoElementsCallback,o=a===void 0?Fu:a,s=e.observeMutationsRoot,c=s===void 0?V:s;Yu=new Yo(function(e){if(!Ku){var t=Kl();cl(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Iu(e.addedNodes[0])&&(U.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&U.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Iu(e.target)&&~qc.indexOf(e.attributeName))if(e.attributeName===`class`&&Lu(e.target)){var r=$l(W(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Ac,a||t),s&&e.target.setAttribute(jc,s)}else Ru(e.target)&&i(e.target)})}}),Zo&&Yu.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zu(){Yu&&Yu.disconnect()}function Qu(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function $u(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=$l(W(e));return i.prefix||=Kl(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Hl(i.prefix,e.innerText)||Vl(i.prefix,Al(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ed(e){return cl(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function td(){return{iconName:null,prefix:null,transform:il,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$u(e),r=n.iconName,i=n.prefix,a=n.rest,o=ed(e),s=uu(`parseNodeAttributes`,{},e);return B({iconName:r,prefix:i,transform:il,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Qu(e):[],attributes:o}},s)}var rd=xl.styles;function id(e){var t=U.autoReplaceSvg===`nest`?nd(e,{styleParser:!1}):nd(e);return~t.extra.classes.indexOf(Gc)?fu(`generateLayersText`,e,t):fu(`generateSvgReplacementMutation`,e,t)}function ad(){return[].concat(Io(ic),Io(_c))}function od(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zo)return Promise.resolve();var n=V.documentElement.classList,r=function(e){return n.add(`${Mc}-${e}`)},i=function(e){return n.remove(`${Mc}-${e}`)},a=U.autoFetchSvg?ad():is.concat(Object.keys(rd));a.includes(`fa`)||a.push(`fa`);var o=[`.${Gc}:not([${Dc}])`].concat(a.map(function(e){return`.${e}:not([${Dc}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=cl(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Pu.begin(`onTree`),l=s.reduce(function(e,t){try{var n=id(t);n&&e.push(n)}catch(e){Ic||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){X(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function sd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;id(e).then(function(e){e&&X([e],t)})}function cd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:pu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:pu(i||{}),e(r,B(B({},n),{},{mask:i}))}}var ld=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?il:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return _u(B({type:`icon`},e),function(){return du(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),xu({icons:{main:Tu(v),mask:s?Tu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:B(B({},il),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ud={mixout:function(){return{icon:cd(ld)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=od,e.nodeCallback=sd,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?V:t,r=e.callback;return od(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Ou(n,r),o.iconName?Ou(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Fo(o,2),u=l[0],d=l[1];t([e,xu({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=dl(a);o.length>0&&(n.style=o);var s;return fl(i)&&(s=fu(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},dd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return _u({type:`layer`},function(){du(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${U.cssPrefix}-layers`].concat(Io(r)).join(` `)},children:n}]})}}}},fd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return _u({type:`counter`,content:e},function(){return du(`beforeDOMElementCreation`,{content:e,params:t}),Cu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-counter`].concat(Io(a))}})})}}}},pd={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?il:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return _u({type:`text`,content:e},function(){return du(`beforeDOMElementCreation`,{content:e,params:t}),Su({content:e,transform:B(B({},il),r),extra:{attributes:s,styles:l,classes:[`${U.cssPrefix}-layers-text`].concat(Io(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Qo){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Su({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},md=RegExp(`"`,`ug`),hd=[1105920,1112319],gd=B(B(B(B({},{FontAwesome:{normal:`fas`,400:`fas`}}),tc),Sc),cc),_d=Object.keys(gd).reduce(function(e,t){return e[t.toLowerCase()]=gd[t],e},{}),vd=Object.keys(_d).reduce(function(e,t){var n=_d[t];return e[t]=n[900]||Io(Object.entries(n))[0][1],e},{});function yd(e){return Al(Io(e.replace(md,``))[0]||``)}function bd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(md,``),r=n.codePointAt(0),i=r>=hd[0]&&r<=hd[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Z(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(_d[n]||{})[i]||vd[n]}function xd(e,t){var n=`${kc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=cl(e.children).filter(function(e){return e.getAttribute(Oc)===t})[0],o=Jo.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Kc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Z(s,l),p=yd(d),m=c[0].startsWith(`FontAwesome`),h=bd(o),g=Vl(f,p),_=g;if(m){var v=Gl(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Ac)!==f||a.getAttribute(jc)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=td(),b=y.extra;b.attributes[Oc]=t,Ou(g,f).then(function(i){var a=xu(B(B({},y),{},{icons:{main:i,mask:ql()},prefix:f,iconName:_,extra:b,watchable:!0})),o=V.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return El(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Sd(e){return Promise.all([xd(e,`::before`),xd(e,`::after`)])}function Cd(e){return e.parentNode!==document.head&&!~Pc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var wd=function(e){return!!e&&Fc.some(function(t){return e.includes(t)})},Td=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=ko(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(wd(a)){var o=Fc.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Ed(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(Zo){var n;if(t)n=e;else if(U.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=ko(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=ko(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=ko(Td(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){U.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=cl(n).filter(Cd).map(Sd),i=Pu.begin(`searchPseudoElements`);qu(),Promise.all(r).then(function(){i(),Ju(),e()}).catch(function(){i(),Ju(),t()})})}}var Dd={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ed,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?V:t;U.searchPseudoElements&&Ed(n)}}},Od=!1,kd={mixout:function(){return{dom:{unwatch:function(){qu(),Od=!0}}}},hooks:function(){return{bootstrap:function(){Xu(uu(`mutationObserverCallbacks`,{}))},noAuto:function(){Zu()},watch:function(e){var t=e.observeMutationsRoot;Od?Ju():Xu(uu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ad=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},jd={mixout:function(){return{parse:{transform:function(e){return Ad(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ad(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:B({},a.outer),children:[{tag:`g`,attributes:B({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:B(B({},t.icon.attributes),a.path)}]}]}}}},Md={x:0,y:0,width:`100%`,height:`100%`};function Nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Q(e){return e.tag===`g`?e.children:[e]}lu([yl,ud,dd,fd,pd,Dd,kd,jd,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?$l(n.split(` `).map(function(e){return e.trim()})):ql();return r.prefix||=Kl(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=pl({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:B(B({},Md),{},{fill:`white`})},p=c.children?{children:c.children.map(Nd)}:{},m={tag:`g`,attributes:B({},d.inner),children:[Nd(B({tag:c.tag,attributes:B(B({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:B({},d.outer),children:[m]},g=`mask-${a||sl()}`,_=`clip-${a||sl()}`,v={tag:`mask`,attributes:B(B({},Md),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Q(u)},v]};return t.push(y,{tag:`rect`,attributes:B({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Md)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;Jo.matchMedia&&(t=Jo.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:B(B({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=B(B({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:B(B({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:B(B({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:B(B({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:B(B({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:B(B({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:B(B({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:B(B({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:hu}),hu.noAuto;var Pd=hu.config;hu.library,hu.dom;var Fd=hu.parse;hu.findIconDefinition,hu.toHtml;var Id=hu.icon;hu.layer,hu.text,hu.counter;function Ld(e){return e-=0,e===e}function Rd(e){return Ld(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var zd=(e,t)=>x.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Bd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Vd=new Map,Hd=1e3;function Ud(e){if(Vd.has(e))return Vd.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Rd(n);t[e.startsWith(`webkit`)?Bd(e):e]=r}}}n=a+1}if(Vd.size===Hd){let e=Vd.keys().next().value;e&&Vd.delete(e)}return Vd.set(e,t),t}function Wd(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Wd(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ud(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Rd(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(zd)))}return e(t.tag,{...a,...u},...r)}var Gd=Wd.bind(null,x.createElement),Kd=(e,t)=>{let n=(0,x.useId)();return e||(t?n:void 0)},qd=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Jd=`searchPseudoElementsFullScan`in Pd&&typeof Pd.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Yd=Number.parseInt(Jd)>=7,Xd=()=>Yd,Zd=`fa`,$={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Qd={left:`fa-pull-left`,right:`fa-pull-right`},$d={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},ef={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},tf={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},nf={default:`fa-layers`};function rf(e){let t=Pd.cssPrefix||Pd.familyPrefix||Zd;return t===Zd?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Zd}-`,`g`),`${t}-`)}function af(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:w,jello:ee,spinSnap:te,spinSnap4:ne,spinSnap8:T,swing:re,wag:ie,className:ae}=e,E=[];return ae&&E.push(...ae.split(` `)),t&&E.push($.beat),n&&E.push($.fade),r&&E.push($.beatFade),i&&E.push($.bounce),a&&E.push($.shake),o&&E.push($.spin),c&&E.push($.spinReverse),s&&E.push($.spinPulse),l&&E.push($.pulse),u&&E.push(tf.fixedWidth),d&&E.push(tf.inverse),f&&E.push(tf.border),p===!0&&E.push(tf.flip),(p===`horizontal`||p===`both`)&&E.push(tf.flipHorizontal),(p===`vertical`||p===`both`)&&E.push(tf.flipVertical),m!=null&&E.push(ef[m]),h!=null&&h!==0&&E.push($d[h]),g!=null&&E.push(Qd[g]),_&&E.push(tf.swapOpacity),Xd()?(v&&E.push(tf.rotateBy),y&&E.push(tf.widthAuto),b&&E.push(tf.canvasSquare),x&&E.push(tf.canvasRoomy),S&&E.push($.flip360),C&&E.push($.buzz),w&&E.push($.float),ee&&E.push($.jello),te&&E.push($.spinSnap),ne&&E.push($.spinSnap4),T&&E.push($.spinSnap8),re&&E.push($.swing),ie&&E.push($.wag),(Pd.cssPrefix||Pd.familyPrefix||Zd)===Zd?E:E.map(rf)):E}var of=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function sf(e){if(e)return of(e)?e:Fd.icon(e)}function cf(e){return Object.keys(e)}var lf=new qd(`FontAwesomeIcon`),uf={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},df=new Set(Object.keys(uf)),ff=x.forwardRef((e,t)=>{let n={...uf,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Kd(c,!!i),d=Kd(s,!!o),f=sf(r);if(!f)return lf.error(`Icon lookup is undefined`,r),null;let p=af(n),m=typeof l==`string`?Fd.transform(l):l,h=sf(i),g=Id(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return lf.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of cf(n))df.has(e)||(v[e]=n[e]);return Gd(_[0],v)});ff.displayName=`FontAwesomeIcon`,`${nf.default}${tf.fixedWidth}`;var pf={prefix:`fas`,iconName:`calendar-days`,icon:[448,512,[`calendar-alt`],`f073`,`M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z`]},mf={prefix:`fas`,iconName:`display`,icon:[512,512,[],`e163`,`M448 96l0 256-384 0 0-256 384 0zM64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32z`]},hf={prefix:`fas`,iconName:`pen-to-square`,icon:[512,512,[`edit`],`f044`,`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`]},gf={prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},_f={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},vf={prefix:`fas`,iconName:`newspaper`,icon:[512,512,[128240],`f1ea`,`M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z`]},yf={prefix:`fas`,iconName:`laptop`,icon:[640,512,[128187],`f109`,`M128 32C92.7 32 64 60.7 64 96l0 240 64 0 0-240 384 0 0 240 64 0 0-240c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2L19.2 384z`]},bf={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},xf={prefix:`fas`,iconName:`id-card`,icon:[576,512,[62147,`drivers-license`],`f2c2`,`M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64L0 96zm0 48l576 0 0 272c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 144zM247.3 416c20.2 0 35.3-19.4 22.4-35-14.7-17.7-36.9-29-61.7-29l-64 0c-24.8 0-47 11.3-61.7 29-12.9 15.6 2.2 35 22.4 35l142.5 0zM176 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM360 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z`]},Sf={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},Cf={prefix:`fas`,iconName:`robot`,icon:[640,512,[129302],`f544`,`M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z`]},wf={prefix:`fas`,iconName:`laptop-file`,icon:[576,512,[],`e51d`,`M64 64C64 28.7 92.7 0 128 0L416 0c35.3 0 64 28.7 64 64l0 48-64 0 0-48-288 0 0 192 112 0 0 96-163.2 0C34.4 352 0 317.6 0 275.2 0 264.6 8.6 256 19.2 256L64 256 64 64zM529.9 257.9c9 9 14.1 21.2 14.1 33.9L544 464c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l76.1 0c12.7 0 24.9 5.1 33.9 14.1 20 20 47.9 47.9 83.9 83.9zM416 272c0 8.8 7.2 16 16 16l60.1 0-76.1-76.1 0 60.1z`]},Tf={prefix:`fas`,iconName:`arrow-up-right-from-square`,icon:[512,512,[`external-link`],`f08e`,`M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z`]},Ef={prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},Df={prefix:`fas`,iconName:`book-open`,icon:[512,512,[128214,128366],`f518`,`M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z`]},Of={prefix:`fas`,iconName:`circle-info`,icon:[512,512,[`info-circle`],`f05a`,`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]},kf={logoVera:mo,ultimasNoticias:R,inscripcion:po,campusVirtual:Wa,tramite:L},Af={fas:{bars:Ef}},jf=[{label:`Sobre el Vera`,links:[{href:`#`,text:`Nuestra historia`},{href:`#`,text:`Autoridades`}]},{label:`Carreras`,links:[{href:`#`,text:`Ingreso 2026`},{href:`#`,text:`Carreras docentes`},{href:`#`,text:`Carreras técnicas`}]},{label:`Formación continua`,links:[{href:`#`,text:`Cursos`},{href:`#`,text:`Postítulos`}]},{label:`Comunidad Vera`,links:[{href:`#`,text:`TRAMA`},{href:`#`,text:`Políticas estudiantiles`},{href:`#`,text:`Biblioteca`},{href:`#`,text:`Becas de apoyo`},{href:`#`,text:`Beneficios Vera`},{href:`#`,text:`Actividades extracurriculares`}]},{label:`Investigación`,links:[{href:`#`,text:`Becas`},{href:`#`,text:`Convocatorias`},{href:`#`,text:`Proyectos`}]},{label:`Recurso docente`,links:[{href:`#`,text:`Formativas`},{href:`#`,text:`Actualización profesional`}]}];function Mf(){let[e,t]=(0,x.useState)(!1);return(0,A.jsxs)(Nf,{children:[(0,A.jsx)(`button`,{type:`button`,className:`mobile-toggle`,"aria-label":`Abrir menú`,"aria-expanded":e,onClick:()=>t(e=>!e),children:(0,A.jsx)(ff,{icon:Af.fas.bars})}),(0,A.jsx)(`a`,{href:`/`,className:`logo-card`,"aria-label":`Inicio Vera`,children:(0,A.jsx)(`img`,{src:kf.logoVera,alt:`Rosario Vera Peñaloza`,className:`logo-image`})}),(0,A.jsx)(`div`,{className:`menu-shell`,role:`navigation`,"aria-label":`Menu principal`,children:(0,A.jsx)(`ul`,{className:`nav-links`,children:jf.map(e=>(0,A.jsxs)(`li`,{className:`nav-item`,children:[(0,A.jsxs)(`a`,{href:`#`,className:`nav-link`,children:[e.label,(0,A.jsx)(`span`,{className:`chevron`,"aria-hidden":`true`,children:`▾`})]}),(0,A.jsx)(`ul`,{className:`submenu`,children:e.links.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:e.href,children:e.text})},e.text))})]},e.label))})}),(0,A.jsx)(`div`,{className:`mobile-panel ${e?`open`:``}`,children:(0,A.jsx)(`ul`,{className:`mobile-list`,children:jf.map(e=>(0,A.jsxs)(`li`,{className:`mobile-group`,children:[(0,A.jsx)(`a`,{href:`#`,className:`mobile-group-title`,onClick:()=>t(!1),children:e.label}),(0,A.jsx)(`ul`,{className:`mobile-sublist`,children:e.links.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{href:e.href,onClick:()=>t(!1),children:e.text})},e.text))})]},e.label))})})]})}var Nf=Ha.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background: transparent;
  justify-content: flex-start;
  position: relative;
  isolation: isolate;
  z-index: 60;

  width: 100%;
  flex: 0 0 auto;
  align-self: stretch;
  box-sizing: border-box;

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
`;function Pf({icon:e=null,title:t=`Últimas noticias`,description:n=`Mantente informado con las últimas novedades y eventos del instituto.`,imageSrc:r=null,imageAlt:i=``,buttonLabel:a=`➝ Leer más`,buttonType:o=`button`,onClick:s,className:c}){return(0,A.jsx)(Ff,{className:c,children:(0,A.jsxs)(`section`,{className:`home-card`,children:[(0,A.jsx)(`img`,{src:Ga,alt:``,className:`home-card-adorno`,"aria-hidden":`true`}),!!e&&(0,A.jsx)(`div`,{className:`icon-card`,"aria-hidden":`true`,children:(0,A.jsx)(ff,{icon:e})}),(0,A.jsxs)(`div`,{className:`home-card-content`,children:[!!t&&(0,A.jsx)(`h3`,{className:`home-card-title`,children:t}),!!n&&(0,A.jsx)(`p`,{className:`home-card-description`,children:n}),!!r&&(0,A.jsx)(`figure`,{className:`home-card-media`,children:(0,A.jsx)(`img`,{src:r,alt:i||t||`Imagen de la tarjeta`})}),!!a&&(0,A.jsx)(`div`,{className:`home-card-actions`,children:(0,A.jsx)(`button`,{className:`home-card-button`,type:o,onClick:s,children:a})})]})]})})}var Ff=Ha.section`
    width: 100%;
    max-width: 100%;
    display: block;
    box-sizing: border-box;
    
    .home-card {
        width: 100%;
        max-width: min(100%, 320px);
        box-sizing: border-box;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
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
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 0.85rem 0.6rem;
    }

    .home-card-title {
        margin: 0;
        min-height: 3.1rem;
        display: flex;
        align-items: flex-start;
        font-family: var(--font-heading);
        font-weight: 500;
        font-size: clamp(1.4rem, 1.2rem + 0.38vw, 1.5rem);
        line-height: 1.1;
        color: var(--color-dark-purple);
    }

    .home-card-description {
        margin: 0 0 1rem;
        min-height: 4.2rem;
        font-family: var(--font-body);
        font-size: 1rem;
        line-height: 1.35;
        font-weight: 500;
        color: var(--color-dark-purple);
        max-width: 95%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .home-card-media {
        margin: 0 0 1rem;
        width: 100%;
        min-height: 190px;
        max-height: 190px;
        border-radius: 1.2rem;
        overflow: hidden;
        background: #f2ecff;
    }

    .home-card-media img {
        width: 100%;
        height: 100%;
        min-height: 190px;
        object-fit: cover;
        display: block;
    }

    .home-card-actions {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        margin-top: auto;
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
`,If={faDisplay:mf,faRobot:Cf,fingerPrintIcon:io,tramaIcon:fo,faArrowUpRightFromSquare:Tf,faBookOpen:Df,faCalendarDays:pf,faLaptop:yf,faNewspaper:vf,profesoradoArtesVisuales:co,educacionPrimaria:no,educacionInicial:to,lengua:oo,musica:so,ingles:ao,desarrolloSoftware:eo,redesCiberseguridad:uo,agronomia:Qa,recursosHumanos:lo,faPenToSquare:hf,faLaptopFile:wf},Lf=[{icon:If.faNewspaper,title:`Últimas noticias`,description:`Mantente informado con las últimas novedades y eventos del instituto.`,imageSrc:kf.ultimasNoticias,buttonLabel:`➝ Leer más`},{icon:If.faPenToSquare,title:`Inscripciones abiertas`,description:`¡No pierdas la oportunidad de formar parte de nuestra comunidad educativa!`,imageSrc:kf.inscripcion,buttonLabel:`➝ Inscribirse`},{icon:If.faDisplay,title:`Campus virtual`,description:`Campus virtual, recursos en línea para estudiantes y docentes. Accede a materiales de estudio, clases grabadas y más.`,imageSrc:kf.campusVirtual,buttonLabel:`➝ Ingresar`},{icon:If.faLaptopFile,title:`Trámite online`,description:`Realiza tus trámites en línea de manera rápida y segura.`,imageSrc:kf.tramite,buttonLabel:`➝ Acceder`}];function Rf({cards:e=Lf}){return(0,A.jsx)(zf,{children:e.map((e,t)=>(0,A.jsx)(Pf,{...e},`${e.title}-${t}`))})}var zf=Ha.section`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    align-items: start;
    gap: 1.5rem;
    padding: 2rem 0;

    @media (max-width: 700px) {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.1rem;
    }
`;function Bf({name:e,icon:t,to:n=`/oferta-educativa`,reflectionColor:r=`rgba(186, 142, 166, 0.52)`,intensity:i=.45,backgroundOpacity:a=.8,backdropBlur:o=16}){return(0,A.jsx)(Vf,{className:`careers-buttons`,$reflectionColor:r,$intensity:i,$backgroundOpacity:a,$backdropBlur:o,children:(0,A.jsxs)(kn,{to:n,className:`careers-button`,children:[(0,A.jsx)(`span`,{className:`careers-icon-shell`,"aria-hidden":`true`,children:(0,A.jsx)(`img`,{src:t,alt:e,className:`careers-icon`})}),(0,A.jsx)(`span`,{className:`careers-label-shell`,children:(0,A.jsx)(`span`,{children:e})})]})})}var Vf=Ha.div`
   .careers-buttons{

    max-width: 100%;
}

.careers-button{

    display:flex;
    align-items:center;
    gap:16px;
    width:100%;
    min-width:0;
    
}
    .careers-icon-shell{
    width:64px;
    height:64px;
    min-width:64px;
    min-height:64px;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;

    background:color-mix(in srgb, color-mix(in srgb, ${e=>e.$reflectionColor} 50%, white) ${e=>e.$backgroundOpacity*100}%, transparent);

    backdrop-filter:blur(${e=>e.$backdropBlur}px);
    -webkit-backdrop-filter:blur(${e=>e.$backdropBlur}px);

    border-radius:20px;

    position:relative;
    isolation:isolate;
    overflow:hidden;

    box-shadow:
       -8px 8px 8px -4px rgba(0,0,0,0.25)
}

    .careers-icon-shell::before{
    content:"";

    position:absolute;
    inset:0;
    z-index:0;
    pointer-events:none;

    background:linear-gradient(
        90deg,
        transparent 0%,
        transparent 22%,
        color-mix(in srgb, ${e=>e.$reflectionColor} 60%, transparent) 55%,
        ${e=>e.$reflectionColor} 100%
    );

    opacity:${e=>e.$intensity};
    filter:blur(9px) saturate(1.15);
}

    .careers-icon-shell::after,
    .careers-label-shell::after{
    content:"";

    position:absolute;
    inset:0;
    z-index:2;
    padding:1.5px;
    border-radius:inherit;
    pointer-events:none;

    background:linear-gradient(
        135deg,
        rgba(255,255,255,.9) 0%,
        ${e=>e.$reflectionColor} 48%,
        rgba(255,255,255,.2) 100%
    );

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;
    mask-composite:exclude;
}
        .careers-label-shell{
    position:relative;
    isolation:isolate;

    flex:1;
    min-width:0;
    height:64px;
    min-height:64px;
    max-height:64px;
    box-sizing:border-box;
    display:flex;
    align-items:center;

    padding:0.7rem 0.85rem;

    background:color-mix(in srgb, color-mix(in srgb, ${e=>e.$reflectionColor} 50%, white) ${e=>e.$backgroundOpacity*100}%, transparent);

    backdrop-filter:blur(${e=>e.$backdropBlur}px);
    -webkit-backdrop-filter:blur(${e=>e.$backdropBlur}px);

    border-radius:20px;

    overflow:hidden;

    box-shadow:
        -8px 8px 8px -4px rgba(0,0,0,0.25)
}

    .careers-label-shell::before{
    content:"";

    position:absolute;
    inset:0;
    z-index:0;
    pointer-events:none;

    background:linear-gradient(
        90deg,
        transparent 0%,
        transparent 18%,
        color-mix(in srgb, ${e=>e.$reflectionColor} 60%, transparent) 34%,
        ${e=>e.$reflectionColor} 42%,
        ${e=>e.$reflectionColor} 58%,
        color-mix(in srgb, ${e=>e.$reflectionColor} 60%, transparent) 66%,
        transparent 82%,
        transparent 100%
    );

    opacity:${e=>e.$intensity};
    filter:blur(9px) saturate(1.15);
}
    .careers-label-shell span{
    position:relative;
    z-index:1;

    color:#312B36;

    font-family: var(--font-heading);

    font-size:0.9rem;

    font-weight:600;

    line-height:1.05;

    text-transform:uppercase;

    letter-spacing:-1px;
    white-space:normal;
    word-break:break-word;
}
    .careers-icon{
    position:relative;
    z-index:1;

    width:38px;
    height:38px;

    object-fit:contain;

    filter:brightness(0) saturate(100%) invert(14%) sepia(9%) saturate(1200%) hue-rotate(230deg) brightness(95%) contrast(92%);
}
`,Hf={profesorado:{title:`Profesorados`,items:[{code:`PAV`,name:`Profesorado de Artes Visuales`,icon:If.profesoradoArtesVisuales,reflectionColor:`rgba(200, 154, 184, 0.78)`},{code:`PEP`,name:`Profesorado de Educacion Primaria`,icon:If.educacionPrimaria,reflectionColor:`rgba(177, 165, 202, 0.78)`},{code:`PEI`,name:`Profesorado de Educacion Inicial`,icon:If.educacionInicial,reflectionColor:`rgba(196, 150, 170, 0.78)`},{code:`PESLL`,name:`Profesorado de Educacion Secundaria en Lengua y Literatura`,icon:If.lengua,reflectionColor:`rgba(168, 157, 188, 0.78)`},{code:`PM`,name:`Profesorado de Musica`,icon:If.musica,reflectionColor:`rgba(160, 144, 204, 0.78)`},{code:`PI`,name:`Profesorado de Ingles`,icon:If.ingles,reflectionColor:`rgba(154, 169, 215, 0.78)`}]},tecnicatura:{title:`Tecnicaturas`,items:[{code:`TSDS`,name:`Tecnicatura Superior en Desarrollo de Software`,icon:If.desarrolloSoftware,reflectionColor:`rgba(142, 147, 186, 0.78)`},{code:`TSRYC`,name:`Tecnicatura Superior en Redes y Ciberseguridad`,icon:If.redesCiberseguridad,reflectionColor:`rgba(134, 160, 176, 0.78)`},{code:`TSA`,name:`Tecnicatura Superior en Agronomia`,icon:If.agronomia,reflectionColor:`rgba(156, 176, 164, 0.78)`},{code:`TSRH`,name:`Tecnicatura Superior en Recursos Humanos`,icon:If.recursosHumanos,reflectionColor:`rgba(190, 160, 151, 0.78)`}]}};function Uf(e=`profesorado`){return Hf[e]??null}function Wf(){return Object.values(Hf).reduce((e,t)=>e+t.items.length,0)}function Gf(e,t=!1,n=!0){let r=Uf(e);return r?(0,A.jsxs)(`article`,{className:`careers-group${t?n?` active`:` hidden`:``}`,children:[(0,A.jsx)(`header`,{className:`careers-group-header`,children:(0,A.jsx)(`h2`,{children:r.title})}),(0,A.jsx)(`div`,{className:`careers-group-grid`,children:r.items.map(e=>(0,A.jsx)(Bf,{name:e.name,icon:e.icon,to:`/oferta-educativa/${e.code}`,reflectionColor:e.reflectionColor},e.name))})]},e):null}function Kf({category:e}){let t=e?[e]:[`profesorado`,`tecnicatura`],[n,r]=(0,x.useState)(t[0]??`profesorado`),i=!e&&t.length>1,a=e||n;return(0,A.jsxs)(qf,{children:[i&&(0,A.jsxs)(`div`,{className:`mobile-selector-shell`,children:[(0,A.jsxs)(`div`,{className:`careers-mobile-selector`,role:`tablist`,"aria-label":`Seleccionar oferta académica`,children:[(0,A.jsx)(`button`,{type:`button`,className:`selector-pill${a===`profesorado`?` active`:``}`,onClick:()=>r(`profesorado`),"aria-pressed":a===`profesorado`,children:`Profesorados`}),(0,A.jsx)(`button`,{type:`button`,className:`selector-pill${a===`tecnicatura`?` active`:``}`,onClick:()=>r(`tecnicatura`),"aria-pressed":a===`tecnicatura`,children:`Tecnicaturas`})]}),(0,A.jsx)(`div`,{className:`mobile-careers-panel`,children:t.map(e=>Gf(e,!0,e===a))})]}),i&&t.map(e=>Gf(e)),!i&&t.map(e=>Gf(e))]})}var qf=Ha.section`
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

  .mobile-selector-shell {
    display: none;
  }

  @media (max-width: 1100px) {
    .careers-group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    gap: 1.4rem;

    .mobile-selector-shell {
      display: grid;
      gap: 0.75rem;
      padding: 0.8rem;
      border-radius: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.24);
      box-shadow: 0 18px 40px rgba(53, 29, 95, 0.14);
      backdrop-filter: blur(18px) saturate(140%);
    }

    .careers-mobile-selector {
      display: flex;
      gap: 0.55rem;
      padding: 0.35rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.42);
      border: 1px solid rgba(255, 255, 255, 0.45);
    }

    .selector-pill {
      flex: 1;
      border: none;
      border-radius: 999px;
      padding: 0.75rem 0.8rem;
      font-family: var(--font-heading);
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--color-dark-purple);
      background: transparent;
      cursor: pointer;
      transition: transform 180ms ease, background-color 180ms ease, color 180ms ease;
    }

    .selector-pill.active {
      color: #ffffff;
      background: linear-gradient(135deg, rgba(126, 62, 176, 0.95), rgba(174, 102, 220, 0.95));
      box-shadow: 0 10px 20px rgba(92, 53, 180, 0.2);
    }

    .mobile-careers-panel {
      display: grid;
      max-height: min(62vh, 34rem);
      overflow-y: auto;
      padding-right: 0.25rem;
      scrollbar-width: thin;
    }

    .careers-group {
      display: none;
      gap: 0.9rem;
      padding: 0.2rem 0.15rem 0.15rem;
    }

    .careers-group.active {
      display: grid;
    }

    .careers-group-header h2 {
      font-size: clamp(1.2rem, 1rem + 0.8vw, 1.5rem);
    }

    .careers-group-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`,Jf=3e3;function Yf(e,t=Jf){let[n,r]=(0,x.useState)(0);return(0,x.useEffect)(()=>{let n=Number.isFinite(e)?Math.max(0,Math.floor(e)):0;if(r(0),n===0)return;let i=t/n,a=0,o,s=()=>{a+=1,r(a),a<n&&(o=window.setTimeout(s,i))};return o=window.setTimeout(s,i),()=>{o&&window.clearTimeout(o)}},[t,e]),n}function Xf({value:e,label:t}){let n=Yf(e);return(0,A.jsxs)(`article`,{className:`stat-card`,children:[(0,A.jsx)(`strong`,{className:`stat-value`,"aria-label":String(e),children:n}),(0,A.jsx)(`span`,{className:`stat-label`,children:t})]})}function Zf(){let e=Wf();return(0,A.jsx)(Qf,{children:(0,A.jsxs)(`div`,{className:`stats-grid`,children:[(0,A.jsx)(Xf,{value:e,label:`Carreras`}),(0,A.jsx)(Xf,{value:280,label:`Egresados/as`}),(0,A.jsx)(Xf,{value:854,label:`Estudiantes actuales`})]})})}var Qf=Ha.section`
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
`,$f=[{id:`slide-1`,image:Ja},{id:`slide-2`,image:Ya},{id:`slide-3`,image:ho}],ep=()=>{let[e,t]=(0,x.useState)(0),n=()=>{t(e=>(e-1+$f.length)%$f.length)},r=()=>{t(e=>(e+1)%$f.length)},i=$f[e];return(0,A.jsx)(tp,{style:{"--carousel-bg":`url(${i.image})`},children:(0,A.jsxs)(`div`,{className:`carousel-shell`,children:[(0,A.jsx)(`button`,{type:`button`,className:`carousel-nav nav-prev`,onClick:n,"aria-label":`Imagen anterior`,children:(0,A.jsx)(ff,{icon:Sf})}),(0,A.jsx)(`button`,{type:`button`,className:`carousel-nav nav-next`,onClick:r,"aria-label":`Siguiente imagen`,children:(0,A.jsx)(ff,{icon:_f})}),(0,A.jsx)(`div`,{className:`carousel-dots`,role:`tablist`,"aria-label":`Selector de imagen`,children:$f.map((n,r)=>(0,A.jsx)(`button`,{type:`button`,className:`dot ${r===e?`is-active`:``}`,onClick:()=>t(r),"aria-label":`Ver imagen ${r+1}`,"aria-current":r===e?`true`:`false`},n.id))})]})})},tp=Ha.section`
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
`;function np(){return(0,A.jsx)(rp,{children:(0,A.jsxs)(`div`,{className:`faq-pill`,role:`button`,tabIndex:0,"aria-label":`Preguntas frecuentes`,children:[(0,A.jsx)(`h2`,{children:(0,A.jsx)(`span`,{children:`Preguntas frecuentes`})}),(0,A.jsx)(`div`,{className:`icon-faq`,"aria-hidden":`true`,children:(0,A.jsx)(`span`,{className:`faq-mark`,children:`?`})})]})})}var rp=Ha.section`
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
`;function ip(){return(0,A.jsxs)(ap,{children:[(0,A.jsx)(`div`,{className:`directivos-figure`,"aria-hidden":`true`,children:(0,A.jsx)(`img`,{src:Xa,alt:`Equipo directivo`,className:`directivos-image`})}),(0,A.jsxs)(`div`,{className:`directivos-card`,children:[(0,A.jsx)(`h2`,{children:`"Aprender es un proceso que se hace en comunidad"`}),(0,A.jsx)(`p`,{children:`Equipo Directivo`})]})]})}var ap=Ha.section`
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
`,op=Object.assign({"../assets/img/BOTONERA OFERTA PERMANENTE VERA 2026 ELVERA.EDU.AR OPT-11.png":Ua,"../assets/img/Campus-Virtual.webp":Wa,"../assets/img/adorno.png":Ga,"../assets/img/banner/banner.png":Ka,"../assets/img/carousel/1.png":qa,"../assets/img/carousel/2.jpg":Ja,"../assets/img/carousel/3.png":Ya,"../assets/img/directivos.png":Xa,"../assets/img/icons/Marco superior Vera Card Web.svg":Za,"../assets/img/icons/agronomia.svg":Qa,"../assets/img/icons/carousel.jpg":$a,"../assets/img/icons/desarrollo-software.svg":eo,"../assets/img/icons/educacion-inicial.svg":to,"../assets/img/icons/educación-primaria.svg":no,"../assets/img/icons/faPenToSquare.svg":ro,"../assets/img/icons/finger-print.svg":io,"../assets/img/icons/ingles.svg":ao,"../assets/img/icons/lengua.svg":oo,"../assets/img/icons/musica.svg":so,"../assets/img/icons/profesorado-de-arte.svg":co,"../assets/img/icons/recursos-humanos.svg":lo,"../assets/img/icons/redes-y-ciberseguridad.svg":uo,"../assets/img/icons/trama-icon.svg":fo,"../assets/img/inscripciones.jpg":po,"../assets/img/logo-png.png":mo,"../assets/img/news-banner.jpg":ho,"../assets/img/trama.jpg":go,"../assets/img/tramite-online.jpg":L,"../assets/img/ultimas-noticias.webp":R});function sp(e){return e?e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`/`)?e:op[`../assets/img/${e.replace(/^\.?\/?/,``)}`]??null:null}function cp(e=``){let t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?`??`:t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function lp({name:e,imagePath:t,initials:n}){let r=(0,x.useMemo)(()=>sp(t),[t]),[i,a]=(0,x.useState)(!1),o=n||cp(e);return!r||i?(0,A.jsx)(`span`,{className:`avatar`,"aria-hidden":`true`,children:o}):(0,A.jsx)(`span`,{className:`avatar avatar-image-wrap`,"aria-hidden":`true`,children:(0,A.jsx)(`img`,{src:r,alt:``,className:`avatar-image`,onError:()=>a(!0)})})}var up=[{quote:`"Siempre quise terminar mis estudios, pero la vida me llevo por otro camino. En el Vera, siendo mayor, pude hacerlo realidad y demostrarme que nunca es tarde para aprender."`,name:`Silvia Sosa`,location:`San Carlos, Mendoza`,imagePath:``},{quote:`"El ambiente es motivador y participativo. Los docentes te inspiran a seguir aprendiendo y a creer en vos mismo."`,name:`Luis Serrudo`,location:`San Carlos, Mendoza`,imagePath:``},{quote:`"Gracias al Jardin del Vera Penaloza, pude estudiar tranquila mientras mi hijo crecia en un espacio seguro y educativo."`,name:`Laura Micames`,location:`La Consulta, Mendoza`,imagePath:``},{quote:`"Trabajaba durante el dia y estudiaba de noche, en el Vera encontre apoyo y profesores que realmente entendian mi situacion."`,name:`Pablo Morales`,location:`Tunuyan, Mendoza`,imagePath:``}];function dp(){let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(!1);(0,x.useEffect)(()=>{let e=window.matchMedia(`(max-width: 980px)`),t=()=>r(e.matches);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,x.useEffect)(()=>{if(!n)return;let e=window.setInterval(()=>{t(e=>(e+1)%up.length)},5e3);return()=>window.clearInterval(e)},[n]);let i=up[e];return(0,A.jsxs)(fp,{children:[(0,A.jsx)(`h2`,{children:`¿Que dicen nuestros estudiantes?`}),(0,A.jsx)(`div`,{className:`recommendations-grid${n?` is-mobile-carousel`:``}`,children:n?(0,A.jsxs)(`article`,{className:`recommendation-card active`,children:[(0,A.jsx)(`p`,{className:`quote`,children:i.quote}),(0,A.jsxs)(`div`,{className:`author-row`,children:[(0,A.jsx)(lp,{name:i.name,imagePath:i.imagePath,initials:i.initials}),(0,A.jsxs)(`div`,{className:`author-info`,children:[(0,A.jsx)(`strong`,{children:i.name}),(0,A.jsx)(`span`,{children:i.location})]})]})]},i.name):up.map(e=>(0,A.jsxs)(`article`,{className:`recommendation-card`,children:[(0,A.jsx)(`p`,{className:`quote`,children:e.quote}),(0,A.jsxs)(`div`,{className:`author-row`,children:[(0,A.jsx)(lp,{name:e.name,imagePath:e.imagePath,initials:e.initials}),(0,A.jsxs)(`div`,{className:`author-info`,children:[(0,A.jsx)(`strong`,{children:e.name}),(0,A.jsx)(`span`,{children:e.location})]})]})]},e.name))}),n&&(0,A.jsx)(`div`,{className:`carousel-dots`,"aria-label":`Selector de testimonios`,children:up.map((n,r)=>(0,A.jsx)(`button`,{type:`button`,className:`carousel-dot${r===e?` active`:``}`,onClick:()=>t(r),"aria-label":`Ver testimonio ${r+1}`},n.name))})]})}var fp=Ha.section`
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

    .carousel-dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 0.95rem;
    }

    .carousel-dot {
        width: 0.7rem;
        height: 0.7rem;
        border: none;
        border-radius: 999px;
        background-color: rgba(92, 53, 180, 0.28);
        padding: 0;
        cursor: pointer;
        transition: transform 180ms ease, background-color 180ms ease;
    }

    .carousel-dot:hover,
    .carousel-dot:focus-visible {
        transform: scale(1.08);
        background-color: rgba(92, 53, 180, 0.6);
        outline: none;
    }

    .carousel-dot.active {
        background-color: var(--color-institutional-purple);
        transform: scale(1.12);
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
            display: block;
        }

        .recommendations-grid.is-mobile-carousel {
            display: block;
        }

        .recommendation-card {
            min-height: 195px;
        }
    }
`;function pp(){return(0,A.jsx)(mp,{children:(0,A.jsx)(`p`,{children:`Todos los derechos © 2026 | Instituto de Educación Superior 9-010 Rosario Vera Peñaloza`})})}var mp=Ha.footer`
	--qa-purple-a: 174, 102, 220;
	--qa-purple-b: 148, 78, 198;
	--qa-purple-c: 126, 62, 176;

	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
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
		max-width: 100%;
		overflow-wrap: anywhere;
	}

	@media (max-width: 768px) {
		margin: 1.2rem 0 1.4rem;
		padding: 0.95rem 0.9rem;
		border-radius: 1rem;

		p {
			font-size: 0.88rem;
		}
	}
`;function hp(){let{theme:e}=Wn();return(0,A.jsxs)(gp,{className:`app ${e}`,children:[(0,A.jsx)(Mf,{}),(0,A.jsx)(xo,{titulo:`Instituto de Educación Superior Rosario Vera Peñaloza`,subtitulo:`Comprometidos con la educación y el desarrollo profesional en nuestra comunidad`,textoBoton:`Conocer las ofertas académicas`,imagenFondoPath:Ka}),(0,A.jsx)(Rf,{}),(0,A.jsx)(Kf,{}),(0,A.jsx)(yo,{icono:If.fingerPrintIcon,titulo:`Tecnicatura Superior en Redes y Ciberseguridad`,imagenFondoPath:`news-banner.jpg`,textoBoton:`Nueva carrera ¡Conocela!`}),(0,A.jsx)(np,{}),(0,A.jsx)(Zf,{}),(0,A.jsx)(ep,{}),(0,A.jsx)(ip,{}),(0,A.jsx)(dp,{}),(0,A.jsx)(yo,{icono:If.tramaIcon,titulo:`TRAMA`,subtitulo:`Espacio Interdisciplinario de Acompañamiento a las Trayectorias Estudiantiles`,imagenFondoPath:`trama.jpg`,textoBoton:`Quiero mas informacion`}),(0,A.jsx)(pp,{})]})}var gp=Ha.div`
  width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: min(100%, 1440px);
    padding: 0 0.8rem;
  }
`,_p={careers:JSON.parse(`{"PAV":{"title":"Profesorado de Artes visuales","resolution":"056-DGE-2025.","description":"Formate en el Profesorado de Artes Visuales para ejercer la docencia en el área de las artes visuales, con validez nacional.","image":"https://example.com/images/artes-visuales.jpg","sections":[{"type":"banner","content":[{"title":"Profesorado de Artes visuales","subtitle":"Formate para ejercer la docencia en el área de las artes visuales","buttonText":"Inscribite ahora","image":"https://example.com/images/artes-visuales-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"4 (cuatro) años"},{"icon":"sand-clock","title":"Turno","description":"Matutino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"de 8:00 hs a 13:10 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Profesorado de Artes Visuales"}},{"icon":"contact","title":"Coordinación","description":"Prof. Andrea Mazzini.","content":{"email":"amazzini@mendoza.edu.ar"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"En este profesorado se forman futuros docentes de Artes Visuales para los niveles Inicial, Primario y Secundario en todas las modalidades del Sistema Educativo Obligatorio. También incluye la formación específica en Arte dentro de instituciones de educación artística y organizaciones afines. La propuesta combina la formación pedagógica y artística en diversas disciplinas visuales, tanto tradicionales (pintura, escultura, grabado, cerámica y dibujo) como contemporáneas (fotografía, instalación, performance y videoarte, entre otras). Esto se logra mediante la investigación y la realización de obras para contribuir a la generación y el sostenimiento de la cultura y el arte de la región.","image":"https://example.com/images/agronomia-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Dibujo I","Bidimensión I","Tridimensión I","Lenguaje de las Artes Visuales I","Historia de las Artes Visuales I","Pedagogía","Comprensión y Producción de Textos Académicos","Formación Práctica Profesional I"],["Dibujo II","Bidimensión II","Tridimensión II","Lenguaje de las Artes Visuales II","Historia de las Artes Visuales II","Didáctica General","Sujeto de la Educación I","Didáctica de las Artes Visuales","Pensamiento Filosófico","Sistema Educativo","Formación Práctica Profesional II"],["Dibujo III","Producción Artística I (Bidimensión: Grabado-Pintura)","Producción Artística I (Tridimensión: Escultura-Cerámica)","Lenguaje de las Artes Visuales III","Historia de las Artes Visuales III","Educación para la Diversidad","Didáctica de las Artes Visuales II","Sujeto de la Educación II","Gestión y Evaluación de los Aprendizajes","Psicología de la Educación","Formación Práctica Profesional III"],["Producción Artística II (Cerámica-Escultura-Grabado o Dibujo)","Artes Visuales y Producción Audiovisual","Historia de las Artes Visuales IV","Teoría del Arte","Producción Artística Contemporánea","Formación Complementaria Específica","Educación y Tecnologías Digitales","ESI","Formación Práctica Profesional IV"]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El profesorado apunta a la formación de un profesional docente con las siguientes capacidades:\\nDesempeñar la docencia en la disciplina Artes Visuales en los niveles Inicial, Primario y Secundario, abarcando todas las modalidades del Sistema Educativo Obligatorio y la formación específica en Arte.\\nDesarrollar prácticas pedagógico-artísticas que permitan un acceso más justo a los recursos materiales y simbólicos de la cultura, configurando subjetividades y sentido de pertenencia.\\nDiseñar, gestionar y evaluar proyectos culturales sociocomunitarios.\\nConformar equipos de trabajo multidisciplinarios que permitan participar en la elaboración y concreción de proyectos que integren diversos lenguajes artísticos.\\n"}},{"type":"about","content":{"title":"Salida laboral","description":"Educación formal en primaria y secundaria. Escuelas artísticas y talleres vocacionales de artes visuales. Centros culturales y gestión cultural. Aulas de tiempo libre y ámbito privado.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":[]}]},"PEI":{"title":"Profesora de Educación Inicial","resolution":"6867-DGE-2023.","description":"Profesorado de Educación Inicial, con validez nacional, que forma profesionales docentes para desempeñarse en el nivel inicial de la educación, brindando conocimientos y habilidades pedagógicas y didácticas para trabajar con niños y niñas en sus primeros años de vida.","image":"https://example.com/images/eduacion-inicial.jpg","sections":[{"type":"banner","content":[{"title":"Profesora de Educación Inicial","subtitle":"Formación docente para el nivel inicial","buttonText":"Inscribite ahora","image":"https://example.com/images/eduacion-inicial-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"4 (cuatro) años"},{"icon":"sand-clock","title":"Turno","description":"Vespertino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"desde las 18:30 hs"}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Profesor de Eduación Inicial"}},{"icon":"contact","title":"Coordinación","description":"Prof. Jimena Molina.","content":{"email":"mjmena_molina@elvera9010.edu.ar"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"El profesorado ofrece distintos campos de formación para desarrollar habilidades y capacidades orientadas al ejercicio docente ético y reflexivo. Brinda sólidos fundamentos y herramientas expresivas, lúdicas, artísticas y comunicativas. Incluye la formación de la motricidad y el trabajo interinstitucional, promoviendo el reconocimiento y la valoración de la diversidad cultural y social de los niños, las niñas y sus familias. La docente de Educación Inicial construye su rol como \\"acompañante afectiva, figura de sostén\\" y \\"mediadora cultural\\". Trabajar en este nivel supone ofrecer disponibilidad corporal, propiciar momentos de juego y acompañar con la palabra, entre otras formas específicas de enseñar a las primeras infancias.","image":"https://example.com/images/agronomia-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Pensamiento Filosófico","Sistema Educativo","Comprensión y Producción de Textos Académicos","Pedagogía","Centralidad del Juego","Juego y Producción de Objetos Lúdicos","Lenguajes Artísticos Expresivos (Teatro)","Lenguajes Artísticos Expresivos (Música)","Práctica Profesional Docente."],["Didáctica","Instituciones Educativas","Psicología Educacional","Educación y Atención Temprana al Desarrollo Infantil","Didáctica del Jardín Maternal","Prácticas Lingüísticas en Educación Inicial","Lenguajes Artísticos Expresivos (Artes Visuales)","Educación Matemática Temprana e Inicial I","Sujeto de la Educación","Práctica Profesional Docente."],["Gestión y Evaluación de los Aprendizajes","Proyectos de Intervención Socioeducativa","Educación en la Diversidad","Literatura Infantil","Didáctica del Jardín de Infantes","Educación Matemática Inicial II","Alfabetización Temprana e Inicial","Didáctica del Ambiente Natural","Didáctica del Ambiente Social","Motricidad en Jardín Maternal y en Jardín de Infantes","Práctica Profesional Docente."],["Educación Sexual Integral (ESI)","Educación y Tecnologías Digitales","Historia y Patrimonio Cultural de Mendoza","Formación Complementaria General","Problemáticas de la Educación Inicial","Salud y Cultura del Cuidado","Formación Ética y Ciudadana y su Didáctica","Formación Complementaria Específica","Práctica Profesional Docente IV."]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"Atendiendo a las características propias del nivel inicial y a las particularidades de las infancias, la profesora de Educación Inicial podrá:\\nConstruir propuestas de enseñanza globalizadas.\\nComprender las capacidades de los niños y las niñas para aprender en forma individual y grupal dentro de las instituciones maternales y escolares.\\nResolver problemas típicos de la profesión en diversas situaciones en los jardines maternales y de infantes.\\nIntervenir de manera respetuosa, constante y pertinente.\\nDesarrollar estrategias de comunicación variadas con las familias, asumiendo que acompañar el desarrollo integral requiere un trabajo conjunto para garantizar el derecho a la educación."}},{"type":"about","content":{"title":"Salida laboral","description":"Educación formal en jardines maternales y jardines de infantes. Ludotecas y otros espacios de atención a la primera infancia.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":[]}]},"PEP":{"title":"Profesorado de Educación Primaria","resolution":"7969-DGE-2023.","description":"Formate en el Profesorad de Eduación Primaria para ejercer la docencia en el nivel primario, con validez nacional, brindando conocimientos y habilidades pedagógicas y didácticas para trabajar con niños y niñas en la etapa de la educación primaria.","image":"https://example.com/images/educacion-primaria.jpg","sections":[{"type":"banner","content":[{"title":"Profesorado de Educación Primaria","subtitle":"Formate en el Profesorad de Eduación Primaria para trabajar con niños y niñas en la etapa de la educación primaria.","buttonText":"Inscribite ahora","image":"https://example.com/images/educacion-primaria-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"4 (cuatro) años"},{"icon":"sand-clock","title":"Turno","description":"Matutino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"desde las 8:00 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Profesor de Eduación Primaria"}},{"icon":"contact","title":"Coordinación","description":"Prof. Karina Dascalaky.","content":{"email":"karina_dascalaky@elvera9010.edu.ar"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"Quien se desempeña como docente en el nivel primario asume la responsabilidad de ofrecer propuestas educativas para un desarrollo integral de la infancia. Esto garantiza el acceso a saberes comunes que permiten a los estudiantes participar plenamente en la vida familiar, escolar y comunitaria. El profesorado ofrece distintos campos de formación para desarrollar habilidades orientadas a un ejercicio docente ético, racional, reflexivo, crítico y eficiente. Brinda sólidos fundamentos y prácticas en contextos reales para promover aprendizajes en áreas como alfabetización, lengua, matemática, ciencias sociales y ciencias naturales.","image":"https://example.com/images/educacion-primaria-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Pensamiento Filosófico","Comprensión y Producción de Textos Académicos","Sistema Educativo","Pedagogía","Numeración","Lengua y Literatura Infantil y Juvenil","Educación Artística","Práctica Profesional Docente I."],["Didáctica","Psicología Educacional","Instituciones Educativas","Sujetos de la Educación","Números Racionales y su Didáctica","Ciencias Sociales y su Didáctica I","Ciencias Naturales y su Didáctica I","Lengua y su Didáctica","Literatura Infantil y Juvenil y su Didáctica","Espacio, Geometría y su Didáctica","Práctica Profesional Docente II."],["Gestión y Evaluación de los Aprendizajes","Proyectos de Intervención Estratégicas","Educación en la Diversidad","Educación Tecnológica","Medida y su Didáctica","Ciencias Naturales y su Didáctica II","Ciencias Sociales y su Didáctica II","Alfabetización","Formación Ética y Ciudadana y su Didáctica","Álgebra","Funciones y su Didáctica","Práctica Profesional Docente III."],["Educación Sexual Integral","Educación y Tecnologías Digitales","Historia y Patrimonio Cultural de Mendoza","Formación Complementaria General","Didáctica de la Lengua y de la Literatura Infantil y Juvenil","Didáctica de la Matemática","Didáctica de las Ciencias Sociales","Didáctica de las Ciencias Naturales","Formación Complementaria II","Práctica Profesional Docente IV."]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El profesor o la profesora de Educación Primaria será capaz de: Intervenir eficazmente en situaciones educativas del nivel primario. Tomar decisiones en la práctica docente con fundamentos didácticos, pedagógicos y disciplinares. Planificar, organizar y gestionar situaciones de aprendizaje en diversos contextos. Involucrar activamente a los alumnos en sus aprendizajes."}},{"type":"about","content":{"title":"Salida laboral","description":"Nivel primario en escuelas de gestión estatal y privada. Modalidades domiciliaria, hospitalaria, educación de jóvenes y adultos, y contextos de encierro. Cargos administrativos en el ámbito educativo (con formación posterior).","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":[]}]},"PI":{"title":"Profesorado de Inglés","resolution":"6871-DGE-2023.","description":"El Profesorado de Inglés forma docentes capacitados para la enseñanza del idioma inglés en diversos niveles educativos, con un enfoque en la práctica pedagógica y el desarrollo de competencias lingüísticas.","image":"https://example.com/images/ingles.jpg","sections":[{"type":"banner","content":[{"title":"Profesorado de Inglés","subtitle":"Formación docente en el idioma inglés","buttonText":"Inscribite ahora","image":"https://example.com/images/ingles-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"4 (cuatro) años"},{"icon":"sand-clock","title":"Turno","description":"Tarde","horario":"Combinada (70% presencial y 30% virtual) / Presencial","content":{"days":"Lunes a viernes","time":"de 14:00 hs a 18:20 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Profesor de Inglés"}},{"icon":"contact","title":"Coordinación","description":"Prof. Olga Neila.","content":{"email":"profesoradodeingles.vera@gmail.com"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"El Profesorado de Inglés tiene como objetivo central formar profesionales docentes preparados para la enseñanza de la lengua inglesa en todos los niveles, abarcando tanto la educación formal como la no formal.","image":"https://example.com/images/ingles-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Lengua Inglesa I","Gramática Inglesa I","Fonética y Fonología Inglesa I","Prácticas de Lengua Inglesa","Comprensión y Producción de Textos Académicos","Práctica Profesional Docente I","Pensamiento Filosófico","Sistema Educativo","Pedagogía","Prácticas de Gramática Inglesa"],["Lengua Inglesa II","Gramática Inglesa II","Fonética y Fonología Inglesa II","Didáctica del Inglés I","Práctica Profesional Docente II","Sujetos de la Educación I","Didáctica","Instituciones Educativas","Psicología Educacional","Sujeto de la Educación II","Práctica de Fonética y Fonología Inglesa"],["Lengua Inglesa III","Gramática Inglesa III","Fonética y Fonología Inglesa III","Didáctica del Inglés II","Práctica Profesional Docente III","Cultura y Literatura Británica I","Gestión y Evaluación de los Aprendizajes","Cultura y Literatura Británica II","Proyectos de Intervención Socioeducativa","Educación en la Diversidad"],["Lengua Inglesa IV","Fonética y Fonología Inglesa IV","Cultura y Literatura Norteamericana","Educación Sexual Integral","Educación y Tecnologías Digitales","Historia y Patrimonio Cultural de Mendoza","Formación Complementaria General","Formación Complementaria Específica","Práctica Profesional Docente IV"]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El futuro profesor de inglés comprenderá que este idioma ha superado su estatus de lengua nativa de un grupo de estados para consolidarse como la lengua franca en un panorama mundial globalizado. Por lo tanto, reconocerá la necesidad ineludible de dominar el inglés para insertarse en el mundo productivo y entenderá que, para el desempeño profesional, es vital acceder a diversas fuentes de información que garanticen la actualización y la competitividad."}},{"type":"about","content":{"title":"Salida laboral","description":"Educación formal (inicial, primario y secundario). Educación no formal (institutos privados). Sector empresarial y turístico (bodegas).","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":[]}]},"PESLL":{"title":"Profesorado de Educación Secundaria en Lengua y Literatura","resolution":"6869-DGE-2023.","description":"El Profesorado de Educación Secundaria en Lengua y Literatura forma profesionales capaces de enseñar lengua y literatura en el nivel secundario, desarrollando competencias pedagógicas y literarias.","image":"https://example.com/images/educacion-secundaria.jpg","sections":[{"type":"banner","content":[{"title":"Profesorado de Educación Secundaria en Lengua y Literatura","subtitle":"","buttonText":"Inscribite ahora","image":"https://example.com/images/educacion-secundaria-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"4 (cuatro) años"},{"icon":"sand-clock","title":"Turno","description":"Tarde","horario":"Presencial","content":{"days":"Lunes a viernes","time":"de 14:00 hs a 18:20 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Profesorado de Educación Secundaria en Lengua y Literatura"}},{"icon":"contact","title":"Coordinación","description":"Prof. Vanesa Sosa.","content":{"email":"vanesa_sosa@elvera9010.edu.ar"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"La carrera se concibe desde la justicia educativa, enfocándose en una formación centrada en la práctica profesional, el aprendizaje activo, autónomo y la interdisciplina. Su finalidad es preparar profesionales que sean capaces de enseñar, generar, retroalimentar y transponer conocimientos y valores fundamentales para la formación integral de las personas.","image":"https://example.com/images/agronomia-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Pensamiento Filosófico","Sistema Educativo","Pedagogía","Comprensión y Producción de Textos Académicos","Literatura Universal I","Morfología y Semántica Léxica","Literatura y Cultura Grecolatina","Fundamentos de la Lengua","Fundamentos de la Literatura","Práctica Profesional Docente I."],["Instituciones Educativas","Didáctica","Psicología Educacional","Sujetos de la Educación","Literatura Española","Sintaxis y Semántica Proposicional","Lingüística del Texto y Análisis del Discurso I","Literatura Universal II","Literatura para Jóvenes","Fonética","Fonología y Grafemática","Lingüística del Texto y Análisis del Discurso II","Literatura Latinoamericana I","Práctica Profesional Docente II."],["Gestión y Evaluación de los Aprendizajes","Proyecto de Intervención Socioeducativa","Educación en la Diversidad","Literatura Latinoamericana II","Alfabetización","Didáctica de la Literatura","Práctica Profesional Docente III."],["Educación Sexual Integral","Educación y Tecnologías Digitales","Historia y Patrimonio Cultural de Mendoza","Formación Complementaria General","Filología","Literatura Argentina III","Teoría y Crítica Literarias","Formación Complementaria Específica","Práctica Profesional Docente IV."]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"Quien egrese deberá demostrar el nivel esperado en el desarrollo de las competencias profesionales docentes y contar con solvencia epistemológica al momento de su egreso. Estos avances se acompañarán a través de una evaluación progresiva y continua, utilizando diversos instrumentos y técnicas según la planificación institucional. Este seguimiento consolida una autonomía profesional progresiva, configura los núcleos de pensamiento y habilita al profesional para el desempeño laboral efectivo en el nivel secundario."}},{"type":"about","content":{"title":"Salida laboral","description":"Educación formal en nivel secundario. Talleres de expresión comunicativa. Redacción de textos y corrección de trabajos.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":[]}]},"PM":{"title":"Profesorado de Música","resolution":"2026-45-E-GDEMZA-DGE.","description":"El Profesorado de Música forma profesionales capaces de desempeñarse en la enseñanza musical en diversos contextos educativos, desarrollando competencias pedagógicas y artísticas.","image":"https://example.com/images/musica.jpg","sections":[{"type":"banner","content":[{"title":"Profesorado de Música","subtitle":"Formación integral en música","buttonText":"Inscribite ahora","image":"https://example.com/images/musica-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"4 (cuatro) años.","content":{"name":"(Requiere un curso introductorio en el cuatrimestre anterior al inicio.)"}},{"icon":"sand-clock","title":"Turno","description":"Matutino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"de 8:00 hs a 13:00 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Profesor de educación Música"}},{"icon":"contact","title":"Coordinación","description":"Prof. Cristian Gorostiague.","content":{"email":"coordinacion.musica.vera@gmail.com","telefono":"2622-414550"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"Este profesorado capacita a los estudiantes para desempeñarse en los niveles inicial, primario y secundario. Ofrece una sólida formación tanto en instrumentos como en la pedagogía específica que demanda la carrera.","image":"https://example.com/images/musica-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Lenguaje Musical I (4 h)","Canto Individual y Grupal I (4 h)","Instrumento Individual Armónico I (4 h)","Formación Complementaria Específica (2 h)","Fundamentos de la Percepción y la Producción Sonora (2 h)","Pedagogía (5 h)","Comprensión y Producción de Textos Académicos (4 h)","Formación Práctica Profesional I (5 h)"],["Lenguaje Musical II (4 h)","Canto Individual y Grupal II (4 h)","Instrumento Individual Armónico II (4 h)","Historia de la Música I (3 h)","Sujeto del Aprendizaje I (4 h)","Didáctica Específica I (5 h)","Didáctica General (5 h)","Pensamiento Filosófico (4 h)","Sistema Educativo (4 h)","Formación Práctica Profesional II (6 h)"],["Lenguaje Musical III (4 h)","Canto y Dirección Coral I (4 h)","Instrumento Individual Armónico III (4 h)","Didáctica Específica II (4 h)","Historia de la Música II (3 h)","Arreglos Musicales (3 h)","Ensamble I (4 h)","Educación para la Diversidad (4 h)","Sujeto de Aprendizaje II (4 h)","Gestión y Evaluación de los Aprendizajes (4 h)","Psicología de la Educación (4 h)","Formación Práctica Profesional III (10 h)"],["Lenguaje Musical IV (4 h)","Canto y Dirección Coral II (4 h)","Instrumento Individual Armónico IV (4 h)","Ensamble II (2 h)","Lenguajes Artísticos (2 h)","Educación y Tecnologías Digitales (4 h)","ESI (2 h)","Formación Práctica Profesional IV (12 h)"]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El objetivo es formar a un profesional docente capaz de adaptarse activamente, desde su praxis, a las variables y características del contexto sociocultural. Un profesional que transmita y comparta cultura desde su hacer musical. A través del lenguaje musical, podrá difundir lo popular y lo clásico, lo tradicional y lo moderno, así como expresiones alternativas. Estará preparado para incentivar la curiosidad y la creatividad en sus futuros estudiantes."}},{"type":"about","content":{"title":"Salida laboral","description":"Educación formal (inicial, primaria y secundaria). Escuelas artísticas, talleres vocacionales de música y ámbito privado.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":[]}]},"TSA":{"title":"Tecnicatura Superior en Agronomía","resolution":"2026-329-E-GDEMZA-DGE.","description":"La Tecnicatura Superior en Agronomía es una carrera de nivel superior que te brinda los conocimientos y habilidades necesarios para gestionar cultivos y recursos agrícolas de manera eficiente. A lo largo de la carrera, aprenderás sobre agronomía, gestión de cultivos, protección de plantas y sostenibilidad agrícola.","image":"https://example.com/images/agronomia.jpg","sections":[{"type":"banner","content":[{"title":"Tecnicatura Superior en Agronomía","subtitle":"Formate para gestionar cultivos y recursos agrícolas de manera eficiente","buttonText":"Inscribite ahora","image":"https://example.com/images/agronomia-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"3 (tres) años"},{"icon":"sand-clock","title":"Turno","description":"Vespertino","horario":"Teórico-práctico","content":{"days":"Lunes a viernes","time":"de 17:40 hs a 22:00 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Técnico Superior en Agronomía"}},{"icon":"contact","title":"Coordinación","description":"Prof. Romanela Giusti.","content":{"email":"romanela_giusti@elvera9010.edu.ar."}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"Se trata de una tecnicatura en Agronomía que cuenta con una amplia formación práctica y de campo, con especialización en el área forestal. Presenta un sistema de cursado modular.","image":"https://example.com/images/agronomia-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Producción Vitícola","Producción Forestal","Producción Hortícola","Producción Porcina","Producción Bovina","Emprendedorismo","Gestión de Instalaciones y Maquinarias Agropecuarias","Ecofisiología de los Cultivos","Manejo Ecológico del Suelo"],["Manejo Nutricional Animal","Territorio y Desarrollo","Manejo Reproductivo Animal","Innovación y Gestión Agropecuaria","Manejo Integrado de Plagas y Enfermedades","Manejo de Riego y Drenajes","Operaciones Silvícolas","Manejo Sanitario Animal"],["Elaboración de Proyectos Productivos","Manejo de Cosecha y Poscosecha","Conservas de Frutas y Hortalizas","Gestión de Desarrollo Sustentable","Gestión de Microemprendimientos","Gestión Forestal","Operaciones de la Madera"]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El egresado estará plenamente capacitado para gestionar y ejecutar proyectos relacionados con la producción agrícola y el manejo de recursos naturales. Poseerá sólidos conocimientos en biología, química y ciencias del suelo, acompañados de habilidades prácticas para el uso de tecnologías agrícolas modernas. Aplicará técnicas de producción sustentable, realizará análisis económicos y de mercado, y desarrollará estrategias para la mejora de la productividad. Será competente en la toma de decisiones informadas y éticas, preparado para trabajar en el campo y en entornos de investigación y desarrollo."}},{"type":"about","content":{"title":"Salida laboral","description":"Actividades agropecuarias de la región (forestación, viticultura, horticultura, producción animal). Actividad privada y organismos estatales.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":["La carrera se ofrece en modalidad presencial, brindando el espacio y los recursos necesarios para un aprendizaje práctico y efectivo.","La duración de la carrera es de 3 años, durante los cuales se adquieren los conocimientos y habilidades necesarios para desarrollarse en el campo de la producción agrícola y el manejo de recursos naturales.","El egresado de la Tecnicatura superior en Agronomía tiene diversas oportunidades laborales, incluyendo roles en actividades agropecuarias de la región (forestación, viticultura, horticultura, producción animal), así como en la actividad privada y organismos estatales."]}]},"TSRYC":{"title":"Tecnicatura Superior en Redes y Ciberseguridad","resolution":"6076-DGE-2024.","description":"La Tecnicatura Superior en Redes y Ciberseguridad es una carrera de nivel superior que te brinda los conocimientos y habilidades necesarios para gestionar redes y proteger la información en entornos digitales. A lo largo de la carrera, aprenderás sobre administración de redes, seguridad informática, ciberseguridad y gestión de sistemas.","image":"https://example.com/images/ciberseguridad.jpg","sections":[{"type":"banner","content":[{"title":"Tecnicatura Superior en Redes y Ciberseguridad","subtitle":"Formate para gestionar redes y proteger la información de manera eficiente","buttonText":"Inscribite ahora","image":"https://example.com/images/ciberseguridad-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"3 (tres) años"},{"icon":"sand-clock","title":"Turno","description":"Vespertino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"de 18:30 hs a 22:00 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Técnico Superior en Redes y Ciberseguridad"}},{"icon":"contact","title":"Coordinación","description":"Prof. Miguel Gorrindo.","contact":{"email":"tscyr9010@gmail.com"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"Consiste en una tecnicatura de alta capacitación en informática, orientada firmemente a la seguridad informática y que ofrece actualizaciones complementarias constantes.","image":"https://example.com/images/rrhh-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Programación I","Matemática Aplicada","Lógica Computacional","Inglés Técnico I","Alfabetización Académica","Seminario de Nuevas Tecnologías","Arquitectura de Dispositivos","Sistemas Operativos I","Base de Datos I","Práctica Profesionalizante I."],["Mantenimiento de Instalaciones Informáticas","Higiene y Seguridad Informática","Matemática Aplicada","Administración de Servidores","Inglés Técnico II","Comunicación y Redes","Taller de Instalación y Certificación de Redes","Criptografía Aplicada","Automatización de Servicios Informáticos","Electrónica Aplicada","Tecnologías IoT","Práctica Profesionalizante II."],["Tratamiento de Incidentes de Continuidad de Negocio","Videovigilancia y Control de Accesos","Ciberseguridad","Inglés Técnico III","Legislación Informática y Ética Profesional","Auditoría de Seguridad Informática","Investigación Digital y Cibercrimen","Forense Digital","Ethical Hacking","Práctica Profesionalizante III."]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El egresado estará preparado para implementar, administrar y mantener sistemas de TI, redes y medidas de seguridad. Contará con habilidades para diagnosticar y resolver incidentes, instalar o adaptar infraestructura tecnológica, evaluar riesgos y asesorar en la adquisición de recursos. Todo esto garantizando la continuidad, accesibilidad y optimización de los servicios."}},{"type":"about","content":{"title":"Salida laboral","description":"Organizaciones públicas y privadas (gestionando redes, sistemas e infraestructura tecnológica). Administración y seguridad de entornos informáticos, soporte especializado, asesoría en riesgos y proyectos de innovación digital.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":["La carrera se ofrece en modalidad presencial, brindando el espacio y los recursos necesarios para un aprendizaje práctico y efectivo.","La duración de la carrera es de 3 años, durante los cuales se adquieren los conocimientos y habilidades necesarios para desarrollarse en el campo del la gestión de sistemas informáticos.","El egresado de la Tecnicatura en Gestión de Sistemas Informáticos tiene diversas oportunidades laborales, incluyendo roles como administrador de redes, especialista en ciberseguridad, técnico en soporte informático, consultor en infraestructura tecnológica y analista de sistemas. Puede trabajar en empresas de tecnología, instituciones educativas, organismos gubernamentales o emprender su propio proyecto."]}]},"TSRH":{"title":"Tecnicatura Superior en Gestión de Recursos Humanos","resolution":"6787-DGE-2025.","description":"La Tecnicatura Superior en Gestión de Recursos Humanos es una carrera de nivel superior que te brinda los conocimientos y habilidades necesarios para gestionar el capital humano en organizaciones. A lo largo de la carrera, aprenderás sobre administración de personal, legislación laboral, desarrollo organizacional y gestión del talento.","image":"https://example.com/images/rrhh.jpg","sections":[{"type":"banner","content":[{"title":"Tecnicatura Superior en Gestión de Recursos Humanos","subtitle":"Formate para gestionar recursos humanos de manera eficiente","buttonText":"Inscribite ahora","image":"https://example.com/images/rrhh-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"3 (tres) años"},{"icon":"sand-clock","title":"Turno","description":"Vespertino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"de 18:30 hs a 22:00 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Técnico Superior en Gestión de Recursos Humanos"}},{"icon":"contact","title":"Referente","description":"Prof. Janet Scarel.","contact":{"email":"janet_scarel@elvera9010.edu.ar"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"Esta propuesta académica forma profesionales capaces de administrar, desarrollar y coordinar el talento humano en el seno de las organizaciones. A lo largo de la carrera se imparten conocimientos profundos sobre selección, capacitación, evaluación del desempeño, legislación y relaciones laborales.","image":"https://example.com/images/rrhh-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Introducción a la Administración de los Recursos Humanos","Inglés Técnico","Comunicación Efectiva","Herramientas Digitales para la Gestión","Introducción a la Economía","Matemática Aplicada","Estadística y Análisis de Datos","Introducción a la Legislación","Desarrollo Regional y Contexto","Práctica Profesionalizante I."],["Psicología Organizacional","Derecho Laboral y de la Seguridad Social","Gestión del Talento Humano","Administración de Liquidaciones, Compensaciones y Beneficios","Relaciones Laborales y Negociación Sindical","Seguridad e Higiene Laboral","Diseño de Puestos","Tecnologías Aplicadas a Recursos Humanos","Comunicación y Liderazgo Organizacional","Ética y Responsabilidad Social Cooperativa","Capacitación y Desarrollo","Control de Gestión","Práctica Profesionalizante II."],["Planeamiento Estratégico y Cultura Organizacional","Selección Avanzada y Marca Empleadora (Employer Branding)","Gestión del Cambio y Clima Organizacional","Analítica de Personas y Toma de Decisiones","Sustentabilidad","Diversidad e Inclusión","Innovación y Transformación Digital en Recursos Humanos","Empleabilidad y Vinculación Profesional","Práctica Profesionalizante III."]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El egresado es un profesional capacitado para analizar, diseñar, programar, probar e implementar soluciones informáticas. Estará preparado para el trabajo en equipos interdisciplinarios mediante la aplicación de metodologías ágiles y buenas prácticas de ingeniería de software. Su formación le permite gestionar proyectos, adaptarse a nuevas tecnologías y garantizar la calidad de los sistemas. También contará con las competencias necesarias para emprender de manera independiente en el sector tecnológico."}},{"type":"about","content":{"title":"Salida laboral","description":"Departamentos de RR. HH. en entidades públicas y privadas. Consultoras especializadas o emprendimientos propios.","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":["La carrera se ofrece en modalidad presencial y a distancia, brindando flexibilidad para adaptarse a las necesidades de los estudiantes.","La duración de la carrera es de 3 años, durante los cuales se adquieren los conocimientos y habilidades necesarios para desarrollarse en el campo del software.","El egresado de la Tecnicatura en Software tiene diversas oportunidades laborales, incluyendo roles como desarrollador de aplicaciones, programador web, analista de sistemas, diseñador de interfaces y administrador de bases de datos. Puede trabajar en empresas de tecnología, startups, consultoras o emprender su propio proyecto."]}]},"TSDS":{"title":"Tecnicatura Superior en Desarrollo de Software","resolution":"6079-DGE-2024","description":"La Tecnicatura en Software es una carrera de nivel superior que te brinda los conocimientos y habilidades necesarios para desarrollar aplicaciones, sistemas y soluciones digitales. A lo largo de la carrera, aprenderás a programar, diseñar interfaces de usuario, gestionar bases de datos y trabajar en equipo para crear productos tecnológicos innovadores.","image":"https://example.com/images/software.jpg","sections":[{"type":"banner","content":[{"title":"Tecnicatura superior en Desarrollo de software","subtitle":"Formate para crear aplicaciones, sistemas y soluciones digitales","buttonText":"Inscribite ahora","image":"https://example.com/images/software-banner.jpg"}]},{"type":"info-cards","content":[{"icon":"clock","title":"Duración","description":"3 (tres) años"},{"icon":"sand-clock","title":"Turno","description":"Vespertino","horario":"Presencial","content":{"days":"Lunes a viernes","time":"desde las 18:30 hs."}},{"icon":"card","title":"Título","description":"con validez nacional","content":{"name":"Técnico Superior en Desarrollo de Software"}},{"icon":"contact","title":"Coordinación","description":"Prof. Martín Aristiarán.","contact":{"email":"martin_aristiaran@elvera9010.edu.ar"}}]},{"type":"about","content":{"title":"Acerca de la carrera","description":"La Tecnicatura en Software es una carrera de nivel superior que te brinda los conocimientos y habilidades necesarios para desarrollar aplicaciones, sistemas y soluciones digitales. A lo largo de la carrera, aprenderás a programar, diseñar interfaces de usuario, gestionar bases de datos y trabajar en equipo para crear productos tecnológicos innovadores.","image":"https://example.com/images/software-about.jpg"}},{"type":"contents","content":{"title":"Contenidos de la carrera","description":[["Programación I","Matemática Aplicada","Lógica Computacional","Inglés Técnico I","Alfabetización Académica","Seminario de Nuevas Tecnologías","Arquitectura de Dispositivos","Sistemas Operativos I","Base de Datos I","Práctica Profesionalizante I."],["Programación II","Matemática Discreta","Análisis Matemático","Comunicación y Redes","Inglés Técnico II","Modelado de Software","Sistemas Operativos","Base de Datos II","Práctica Profesionalizante II."],["Programación III","Arquitectura y Diseño de Interfaces (UI y UX)","Auditoría y Calidad de Sistemas","Ciberseguridad","Inglés Técnico III","Legislación Informática y Ética Profesional","Estadística y Probabilidades para el Desarrollo de Software","Gestión de Proyectos de Software","Metodologías Ágiles","Base de Datos III","Práctica Profesionalizante III."]]}},{"type":"profile","content":{"title":"Perfil del egresado","description":"El egresado es un profesional capacitado para analizar, diseñar, programar, probar e implementar soluciones informáticas. Estará preparado para el trabajo en equipos interdisciplinarios mediante la aplicación de metodologías ágiles y buenas prácticas de ingeniería de software. Su formación le permite gestionar proyectos, adaptarse a nuevas tecnologías y garantizar la calidad de los sistemas. También contará con las competencias necesarias para emprender de manera independiente en el sector tecnológico."}},{"type":"about","content":{"title":"Salida laboral","description":"Entes públicos (instituciones educativas, municipios, hospitales). Entes privados (empresas tecnológicas, consultoras, startups). Ámbito independiente (asesoramiento en tecnologías, infraestructura, arquitectura y diseño de procesos).","image":"https://images.ctfassets.net/pdf29us7flmy/1xIWV7IeCPx8D2lEjUq11e/bcb6d6b45eb3d68491f9445d9a63c1fa/GettyImages-473983321.jpg?w=720&q=100&fm=jpg"}},{"type":"faq","questions":["¿Es presencial o a distancia?","¿Cuánto dura la carrera?","¿Qué salidas laborales tiene?"],"answers":["La carrera se ofrece en modalidad presencial y a distancia, brindando flexibilidad para adaptarse a las necesidades de los estudiantes.","La duración de la carrera es de 3 años, durante los cuales se adquieren los conocimientos y habilidades necesarios para desarrollarse en el campo del software.","El egresado de la Tecnicatura en Software tiene diversas oportunidades laborales, incluyendo roles como desarrollador de aplicaciones, programador web, analista de sistemas, diseñador de interfaces y administrador de bases de datos. Puede trabajar en empresas de tecnología, startups, consultoras o emprender su propio proyecto."]}]}}`)},vp={clock:gf,checkmark:bf,"sand-clock":pf,card:xf};function yp({image:e,title:t}){let[n,r]=(0,x.useState)(!1),i=!!(e&&!n);return(0,A.jsx)(`div`,{className:`about-media-wrap`,"aria-hidden":i?void 0:`true`,children:i?(0,A.jsx)(`img`,{src:e,alt:t||`Ilustracion de la carrera`,loading:`lazy`,className:`about-media`,onError:()=>r(!0)}):null})}function bp({section:e}){let t=e?.content?.[0]??{};return(0,A.jsx)(Np,{children:(0,A.jsx)(`div`,{className:`career-banner-host`,children:(0,A.jsx)(xo,{titulo:t.title??`Carrera`,subtitulo:t.subtitle??``,textoBoton:t.buttonText??`Inscribite ahora`,imagenFondoPath:t.image??``})})})}function xp(e){if(!e)return null;if(e.email)return{href:`mailto:${e.email}`,label:e.email};if(e.phone)return{href:`tel:${e.phone}`,label:e.phone};if(e.link||e.url){let t=e.link??e.url;return{href:t,label:e.label??t}}return null}function Sp(e){let t=e?.content;return t&&(t.email||t.phone||t.link||t.url)?t:e?.contact??null}function Cp(e){let t=e?.content,n=[];t?.name&&n.push(t.name),e?.horario&&n.push(e.horario);let r=[t?.days,t?.time].filter(Boolean).join(` `);return r&&n.push(r),n}function wp({section:e}){let t=Array.isArray(e?.content)?e.content:[],[n,r]=(0,x.useState)(0);return(0,A.jsx)(Np,{children:(0,A.jsxs)(`section`,{className:`career-block`,children:[(0,A.jsx)(`h3`,{children:`Informacion general`}),(0,A.jsx)(`div`,{className:`info-cards-mobile-selector`,role:`tablist`,"aria-label":`Seleccionar informacion`,children:t.map((e,t)=>(0,A.jsxs)(`button`,{type:`button`,className:`info-selector-pill${t===n?` active`:``}`,onClick:()=>r(t),"aria-pressed":t===n,children:[(0,A.jsx)(ff,{icon:vp[e?.icon]??Of}),t===n?(0,A.jsx)(`span`,{children:e?.title??`-`}):null]},`selector-${e?.title??`item`}-${t}`))}),(0,A.jsx)(`div`,{className:`cards-grid`,children:t.map((e,t)=>{let r=xp(Sp(e)),i=Cp(e);return(0,A.jsxs)(`article`,{className:`info-card${t===n?` active`:` inactive`}`,children:[(0,A.jsx)(`img`,{src:Ga,alt:``,className:`info-card-adorno`,"aria-hidden":`true`}),(0,A.jsx)(`div`,{className:`icon-card`,"aria-hidden":`true`,children:(0,A.jsx)(ff,{icon:vp[e?.icon]??Of})}),(0,A.jsxs)(`div`,{className:`info-card-content`,children:[(0,A.jsx)(`p`,{className:`info-title`,children:e?.title??`-`}),(0,A.jsxs)(`div`,{className:`info-description-wrap${r?` has-contact`:``}`,children:[(0,A.jsxs)(`p`,{className:`info-description`,children:[(0,A.jsx)(`span`,{className:`info-description-text`,children:e?.description??`-`}),r?(0,A.jsx)(`span`,{className:`info-description-contact-text`,children:r.label}):null]}),r?(0,A.jsx)(`a`,{href:r.href,className:`contact-bubble`,children:`Comunicarse`}):null]}),i.map((e,n)=>(0,A.jsx)(`p`,{className:`info-detail`,children:e},`detail-${t}-${n}`))]})]},`${e?.title??`item`}-${t}`)})})]})})}function Tp({section:e}){let t=e?.content??{};return(0,A.jsx)(Np,{children:(0,A.jsxs)(`section`,{className:`career-block career-split`,children:[(0,A.jsxs)(`div`,{className:`about-copy`,children:[(0,A.jsx)(`h3`,{children:t?.title??`Detalle`}),(0,A.jsx)(`p`,{children:t?.description??``})]}),(0,A.jsx)(yp,{image:t?.image,title:t?.title})]})})}function Ep({section:e}){let t=e?.content??{};return(0,A.jsx)(Np,{children:(0,A.jsx)(`section`,{className:`career-block`,children:(0,A.jsxs)(`div`,{className:`profile-copy`,children:[(0,A.jsx)(`h3`,{children:t?.title??`Perfil`}),(0,A.jsx)(`p`,{children:t?.description??``})]})})})}function Dp({section:e}){let t=e?.content??{},n=Array.isArray(t?.description)?t.description:[],[r,i]=(0,x.useState)(0);return(0,A.jsx)(Np,{children:(0,A.jsxs)(`section`,{className:`career-block`,children:[(0,A.jsx)(`h3`,{children:t?.title??`Contenidos`}),(0,A.jsx)(`div`,{className:`contents-mobile-selector`,role:`tablist`,"aria-label":`Seleccionar año`,children:n.map((e,t)=>(0,A.jsx)(`button`,{type:`button`,className:`contents-selector-pill${t===r?` active`:``}`,onClick:()=>i(t),"aria-pressed":t===r,children:t===r?(0,A.jsx)(`span`,{children:`Año ${t+1}`}):(0,A.jsx)(`span`,{children:t+1})},`year-selector-${t}`))}),(0,A.jsx)(`div`,{className:`contents-grid`,children:n.map((e,t)=>(0,A.jsxs)(`div`,{className:`content-group${t===r?` active`:` inactive`}`,children:[(0,A.jsxs)(`p`,{className:`content-group-year`,children:[`Año `,t+1]}),Array.isArray(e)&&e.length>0?(0,A.jsx)(`ul`,{children:e.map((e,n)=>(0,A.jsx)(`li`,{children:`• `+String(e)},`item-${t}-${n}`))}):(0,A.jsx)(`p`,{className:`muted`,children:`Sin contenidos cargados`})]},`group-${t}`))})]})})}function Op({section:e}){let t=e?.content??{},n=Array.isArray(t?.description)?t.description:[];return(0,A.jsx)(Np,{children:(0,A.jsxs)(`section`,{className:`career-block`,children:[(0,A.jsx)(`h3`,{children:t?.title??`Galeria`}),n.length>0?(0,A.jsx)(`div`,{className:`gallery-grid`,children:n.map((e,n)=>(0,A.jsx)(`figure`,{className:`gallery-item`,children:(0,A.jsx)(`img`,{src:String(e??``),alt:`${t?.title??`Galeria`} ${n+1}`,loading:`lazy`})},`gallery-${n}`))}):(0,A.jsx)(`p`,{className:`muted`,children:`Sin imagenes cargadas`})]})})}function kp({section:e}){let t=Array.isArray(e?.questions)?e.questions:[],n=Array.isArray(e?.answers)?e.answers:[];return(0,A.jsx)(Np,{children:(0,A.jsxs)(`section`,{className:`career-block`,children:[(0,A.jsx)(`h3`,{children:`Preguntas frecuentes`}),(0,A.jsx)(`div`,{className:`faq-list`,children:t.map((e,t)=>(0,A.jsxs)(`article`,{className:`faq-item`,children:[(0,A.jsx)(`h4`,{children:e}),(0,A.jsx)(`p`,{children:n[t]??`Respuesta pendiente`})]},`faq-${t}`))})]})})}function Ap({section:e}){return(0,A.jsx)(Np,{children:(0,A.jsxs)(`section`,{className:`career-block`,children:[(0,A.jsx)(`h3`,{children:`Seccion no mapeada`}),(0,A.jsxs)(`p`,{children:[`Type: `,e?.type??`desconocido`]})]})})}var jp={banner:bp,"info-cards":wp,about:Tp,profile:Ep,contents:Dp,gallery:Op,faq:kp};function Mp(e){return jp[String(e??``).trim().toLowerCase()]??Ap}var Np=Ha.div`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  .career-block {
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    margin: 0.8rem auto;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 1.5rem;
    padding: 1.2rem 1.35rem;
    background:
      radial-gradient(130% 160% at 80% 18%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 38%, rgba(255, 255, 255, 0.58) 100%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(12px) saturate(128%);
    box-shadow:
      0 18px 34px rgba(59, 31, 102, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.82),
      inset 0 -1px 0 rgba(169, 141, 224, 0.22);
  }
      
  .career-block::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.14) 30%,
      rgba(255, 255, 255, 0) 66%
    );
    z-index: 0;
  }

  .career-banner h2,
  .career-block h3 {
    position: relative;
    z-index: 1;
    margin: 0;
    color: var(--color-dark-purple);
    font-family: var(--font-heading);
  }

  .career-banner-host {
    width: 100%;
    margin: 0.8rem auto;
  }

  .career-banner p,
  .career-block p,
  .faq-item p,
  .info-description {
    position: relative;
    z-index: 1;
    margin: 0.5rem 0 0;
    color: var(--color-dark-purple);
    font-family: var(--font-body);
    line-height: 1.45;
  }

  button {
    margin-top: 0.9rem;
    border: 0;
    border-radius: 0.75rem;
    padding: 0.7rem 1rem;
    color: #fff;
    background: var(--color-gradient);
    font-family: var(--font-heading);
    cursor: pointer;
    box-shadow:
      0 10px 20px rgba(91, 46, 166, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.42);
  }

  .career-split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(240px, 34%);
    gap: 1.1rem;
    align-items: stretch;
    height: max-content;
  }

  .about-copy {
    position: relative;
    z-index: 1;
    padding: 1.5rem 1.4rem;
  }

  .profile-copy {
    position: relative;
    z-index: 1;
    padding: 1.5rem 1.4rem;
  }
   
  .about-copy h3, .career-block h3 {
  font-family: var(--font-heading);
    font-size: clamp(1.7rem, 1.3rem + 1vw, 2.4rem);
  }

  .about-copy p {
  font-family: var(--font-body);
    max-width: 66ch;
    font-size: 1.2rem;
  }

  .about-media-wrap {
    position: relative;
    min-height: clamp(180px, 24vw, 280px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 0.9rem 0.9rem 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.52);
    background: transparent;
    overflow: hidden;
  }

  .about-media {
    width: 100%;
    height: clamp(180px, 22vw, 250px);
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 1.1rem;
    box-shadow:
      0 12px 24px rgba(59, 31, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-items: center;
    gap: 1rem;
    margin-top: 0.8rem;
  }

  .info-card {
    width: min(100%, 280px);
    min-width: 0;
    min-height: 205px;
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

  .info-card::before {
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

  .info-card-adorno {
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

  .info-card-content {
    min-width: 0;
    padding: 0 0.85rem 0.6rem;
  }

  .info-title {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: clamp(1.35rem, 1.15rem + 0.32vw, 1.8rem);
    line-height: 1.1;
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    overflow-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }

  .info-detail {
    margin: 0.3rem 0 0;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-institutional-purple);
  }

  .info-description-wrap.has-contact {
    position: relative;
    padding-bottom: 1.8rem;
  }

  .info-description-wrap.has-contact .info-description {
    position: relative;
    overflow: hidden;
  }

  .info-description-text,
  .info-description-contact-text {
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .info-description-contact-text {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(4px);
    color: var(--color-institutional-purple);
    font-weight: 600;
  }

  .info-description-wrap.has-contact:hover .info-description-text {
    opacity: 0;
    transform: translateY(-4px);
  }

  .info-description-wrap.has-contact:hover .info-description-contact-text {
    opacity: 1;
    transform: translateY(0);
  }

  .contact-bubble {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.4rem;
    padding: 0.4rem 0.9rem;
    max-width: 100%;
    border-radius: 999px;
    background: var(--color-gradient);
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow:
      0 10px 20px rgba(91, 46, 166, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.42);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-4px);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
  }

  .info-description-wrap.has-contact:hover .contact-bubble,
  .contact-bubble:focus-visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
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

  .contents-mobile-selector {
    display: none;
  }

  .contents-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 0.8rem;
    min-width: 0;
    max-width: 100%;
  }

  .content-group {
    box-sizing: border-box;
    min-width: 0;
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 0.8rem;
    padding: 0.6rem 0.7rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .gallery-item {
    margin: 0;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.62);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .gallery-item img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }

  .content-group ul {
    margin: 0.4rem 0 0;
    padding-left: 1rem;
    max-width: 100%;
  }

  .content-group li {
    margin-bottom: 0.3rem;
    color: var(--color-dark-purple);
    font-family: var(--font-body);
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .muted {
    opacity: 0.72;
  }

  .faq-list {
    display: grid;
    gap: 0.7rem;
    margin-top: 0.8rem;
  }

  .faq-item {
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 0.8rem;
    padding: 0.7rem 0.8rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .faq-item h4 {
    margin: 0;
    font-family: var(--font-heading);
    color: var(--color-dark-purple);
    font-size: 1.2rem;
    font-weight: 700;
  }

  .info-cards-mobile-selector {
    display: none;
  }

  @media (max-width: 1180px) {
    .cards-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
  width: 100%;

    .career-split {
      grid-template-columns: minmax(0, 1fr);
    }

    .about-media-wrap {
      border-left: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.52);
      min-height: clamp(180px, 48vw, 260px);
      padding: 0.9rem 0 0 0;
    }

    .about-media {
      height: clamp(180px, 48vw, 260px);
    }

    .cards-grid,
    .contents-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .gallery-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .info-cards-mobile-selector {
      display: flex;
      gap: 0.5rem;
      margin: 0.8rem -1.25rem 0;
      padding: 1.25rem 1.25rem;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    .info-selector-pill {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 48px;
      height: 48px;
      padding: 0;
      border: none;
      border-radius: 999px;
      background: rgba(169, 141, 224, 0.16);
      color: var(--color-institutional-purple);
      cursor: pointer;
      white-space: nowrap;
      box-shadow: -8px 8px 8px -4px rgba(0, 0, 0, 0.25);
      transition: background-color 220ms ease, color 220ms ease, padding 220ms ease;
    }

    .info-selector-pill svg {
      flex: 0 0 auto;
      font-size: 1.05rem;
    }

    .info-selector-pill span {
      font-family: var(--font-heading);
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .info-selector-pill.active {
      width: clamp(120px, 42vw, 200px);
      flex: 0 0 clamp(120px, 42vw, 200px);
      min-width: 0;
      padding: 0 1rem;
      background: var(--color-gradient);
      color: #fff;
    }

    .cards-grid {
      margin-top: 0.6rem;
    }

    .info-card.inactive {
      display: none;
    }

    .info-card.active {
      display: block;
      width: 100%;
    }

    .contents-mobile-selector {
      display: flex;
      gap: 0.5rem;
      margin: 0.8rem -1.25rem 0;
      padding: 1.25rem 1.25rem;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    .contents-selector-pill {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 48px;
      height: 48px;
      padding: 0;
      border: none;
      border-radius: 999px;
      background: rgba(169, 141, 224, 0.16);
      color: var(--color-institutional-purple);
      cursor: pointer;
      white-space: nowrap;
      transition: background-color 220ms ease, color 220ms ease, padding 220ms ease;
      box-shadow: -8px 8px 8px -4px rgba(0, 0, 0, 0.25);
    }

    .contents-selector-pill span {
      font-family: var(--font-heading);
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      
      letter-spacing: 0.02em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .contents-selector-pill.active {
      width: clamp(120px, 42vw, 200px);
      flex: 0 0 clamp(120px, 42vw, 200px);
      min-width: 0;
      padding: 0 1rem;
      background: var(--color-gradient);
      color: #fff;
    }

    .contents-grid {
      margin-top: 0.6rem;
    }

    .content-group.inactive {
      display: none;
    }

    .content-group.active {
      display: block;
      width: 100%;
    }

    .content-group-year {
      display: none;
      line-height: 1.2em;
    }
      .content-group li{
      
      line-height: 1.2;}
  }
      .about-media-wrap{
      display: none;}
`;function Pp(){let{theme:e}=Wn(),{careerCode:t}=vt(),n=String(t??``).trim().toUpperCase(),r=_p?.careers??{},i=n?r?.[n]:null,a=Array.isArray(i?.sections)?i.sections:[],o=!!(n&&i&&a.length>0);return(0,A.jsxs)(Fp,{className:`app ${e}`,children:[(0,A.jsx)(Mf,{}),(0,A.jsx)(`main`,{className:`oferta-main`,children:o?a.map((e,t)=>{let r=Mp(e?.type);return(0,A.jsx)(r,{section:e,career:i,careerCode:n},`${e?.type??`section`}-${t}`)}):(0,A.jsxs)(`section`,{className:`not-found`,role:`status`,"aria-live":`polite`,children:[(0,A.jsx)(`p`,{className:`not-found-kicker`,children:`404 Not Found`}),(0,A.jsx)(`h1`,{children:`Carrera no disponible`}),(0,A.jsxs)(`p`,{children:[`No encontramos contenido para el codigo "`,t||`sin-codigo`,`".`]})]})}),(0,A.jsx)(pp,{})]})}var Fp=Ha.div`
  width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;

  .oferta-main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    min-width: 0;
    gap: 0.5rem;
  }

  .not-found {
    margin: 1.2rem auto;
    width: min(100%, 860px);
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 1.3rem;
    padding: 1.5rem 1.25rem;
    background:
      radial-gradient(120% 170% at 80% 0%, rgba(169, 141, 224, 0.22), rgba(255, 255, 255, 0.18)),
      linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(12px) saturate(126%);
    box-shadow:
      0 16px 30px rgba(59, 31, 102, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    text-align: center;
  }

  .not-found-kicker {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    opacity: 0.72;
  }

  .not-found h1 {
    margin: 0.35rem 0;
    font-family: var(--font-heading);
    color: var(--color-dark-purple);
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2.3rem);
  }

  .not-found p {
    margin: 0.3rem 0 0;
    font-family: var(--font-body);
    color: var(--color-dark-purple);
  }

  @media (max-width: 900px) {
    width: min(100%, 1440px);
    padding: 0 0.8rem;
  }
`;function Ip(){let{pathname:e}=pt();return(0,x.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`auto`})},[e]),null}function Lp(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Ip,{}),(0,A.jsxs)(Ut,{children:[(0,A.jsx)(Vt,{path:`/`,element:(0,A.jsx)(hp,{})}),(0,A.jsx)(Vt,{path:`/oferta-educativa`,element:(0,A.jsx)(Pp,{})}),(0,A.jsx)(Vt,{path:`/oferta-educativa/:careerCode`,element:(0,A.jsx)(Pp,{})}),(0,A.jsx)(Vt,{path:`*`,element:(0,A.jsx)(Bt,{to:`/`,replace:!0})})]})]})}(0,Bn.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(x.StrictMode,{children:(0,A.jsx)(Un,{children:(0,A.jsx)(On,{children:(0,A.jsx)(Lp,{})})})}));