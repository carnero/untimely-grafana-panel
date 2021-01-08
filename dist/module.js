/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","jquery","@grafana/data","react-dom"],(function(e,t,n,r,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,u,f,c;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(u=s;0!=u--;)if(!e(t[u],a[u]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(c=t.entries();!(u=c.next()).done;)if(!a.has(u.value[0]))return!1;for(c=t.entries();!(u=c.next()).done;)if(!e(u.value[1],a.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(c=t.entries();!(u=c.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(u=s;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(f=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,f[u]))return!1;if(n&&t instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==f[u]&&"__v"!==f[u]&&"__o"!==f[u]||!t.$$typeof)&&!e(t[f[u]],a[f[u]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},,,function(e,t,n){"use strict";n.r(t);var r=n(3),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var s=n(0),u=n.n(s),f=n(1),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChangeOffset=function(e,n){var r,o=t.props,i=o.context.options.offsets;(0,o.onChange)(a(a({},i),((r={})[e]=n,r)))},t}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.context,n=t.data,r=t.options,o=r.offsets,i=r.xseries,a=(n||[]).filter((function(e){return!!i&&e.refId!==i}));return u.a.createElement(u.a.Fragment,null,!a.length&&u.a.createElement(f.InfoBox,null,"Please add more than one series to get started.",u.a.createElement("br",null),"All series that are not the reference series will be used as Y-series."),a.map((function(t){return u.a.createElement(f.Field,{label:"Offset for "+t.refId+" - "+(t.name||"-")},u.a.createElement(f.Input,{css:"",type:"number",onChange:function(n){var r=n.currentTarget.value;return e.onChangeOffset(t.refId,r)},value:o[t.refId]}))})))},t}(s.PureComponent),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.context,n=t.data,r=t.options.xseries,o=e.onChange,i=n||[],a=i.map((function(e){return{label:e.refId+" - "+e.name,value:e.refId}})),s=a.find((function(e){return e.value===r}));return u.a.createElement(u.a.Fragment,null,!i.length&&u.a.createElement(f.InfoBox,null,"Make sure that all queries have data"),u.a.createElement(f.Select,{options:a,value:s,onChange:function(e){var t=e.value;return o(t)}}))},t}(s.PureComponent),p=n(2),d=n.n(p),m=n(4),h=n.n(m),v=s.createContext();s.createContext();var g=function(e,t){if("function"==typeof e)return function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}}(e,t);null!=e&&(e.current=t)},y=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},b="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function x(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function w(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function E(e){return e instanceof w(e).Element||e instanceof Element}function j(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function P(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){return((E(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return x(S(e)).left+O(e).scrollLeft}function D(e){return w(e).getComputedStyle(e)}function k(e){var t=D(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function I(e,t,n){void 0===n&&(n=!1);var r,o,i=S(t),a=x(e),s=j(t),u={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(s||!s&&!n)&&(("body"!==P(t)||k(i))&&(u=(r=t)!==w(r)&&j(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:O(r)),j(t)?((f=x(t)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=M(i))),{x:a.left+u.scrollLeft-f.x,y:a.top+u.scrollTop-f.y,width:a.width,height:a.height}}function L(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function A(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||e.host||S(e)}function C(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(P(t))>=0?t.ownerDocument.body:j(t)&&k(t)?t:e(A(t))}(e),r="body"===P(n),o=w(n),i=r?[o].concat(o.visualViewport||[],k(n)?n:[]):n,a=t.concat(i);return r?a:a.concat(C(A(i)))}function R(e){return["table","td","th"].indexOf(P(e))>=0}function _(e){if(!j(e)||"fixed"===D(e).position)return null;var t=e.offsetParent;if(t){var n=S(t);if("body"===P(t)&&"static"===D(t).position&&"static"!==D(n).position)return n}return t}function B(e){for(var t=w(e),n=_(e);n&&R(n)&&"static"===D(n).position;)n=_(n);return n&&"body"===P(n)&&"static"===D(n).position?t:n||function(e){for(var t=A(e);j(t)&&["html","body"].indexOf(P(t))<0;){var n=D(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var H="top",T="bottom",V="right",W="left",F=[H,T,V,W],N=F.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),U=[].concat(F,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function X(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?z:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},z),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],f=!1,c={state:s,setOptions:function(n){l(),s.options=Object.assign(Object.assign(Object.assign({},i),s.options),n),s.scrollParents={reference:E(e)?C(e):e.contextElement?C(e.contextElement):[],popper:C(t)};var o=function(e){var t=X(e);return q.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=o.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:c,options:r});u.push(i||function(){})}})),c.update()},forceUpdate:function(){if(!f){var e=s.elements,t=e.reference,n=e.popper;if($(t,n)){s.rects={reference:I(t,B(n),"fixed"===s.options.strategy),popper:L(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,u=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:u,name:l,instance:c})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){c.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),f=!0}};if(!$(e,t))return c;function l(){u.forEach((function(e){return e()})),u=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var G={passive:!0};function J(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?J(o):null,a=o?K(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case H:t={x:s,y:n.y-r.height};break;case T:t={x:s,y:n.y+n.height};break;case V:t={x:n.x+n.width,y:u};break;case W:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var f=i?Q(i):null;if(null!=f){var c="y"===f?"height":"width";switch(a){case"start":t[f]=t[f]-(n[c]/2-r[c]/2);break;case"end":t[f]=t[f]+(n[c]/2-r[c]/2)}}return t}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(i):i,c=f.x,l=void 0===c?0:c,p=f.y,d=void 0===p?0:p,m=i.hasOwnProperty("x"),h=i.hasOwnProperty("y"),v=W,g=H,y=window;if(u){var b=B(n);b===w(n)&&(b=S(n)),o===H&&(g=T,d-=b.clientHeight-r.height,d*=s?1:-1),o===W&&(v=V,l-=b.clientWidth-r.width,l*=s?1:-1)}var x,O=Object.assign({position:a},u&&ee);return s?Object.assign(Object.assign({},O),{},((x={})[g]=h?"0":"",x[v]=m?"0":"",x.transform=(y.devicePixelRatio||1)<2?"translate("+l+"px, "+d+"px)":"translate3d("+l+"px, "+d+"px, 0)",x)):Object.assign(Object.assign({},O),{},((t={})[g]=h?d+"px":"",t[v]=m?l+"px":"",t.transform="",t))}var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e,t){var n,r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&((n=r)instanceof w(n).ShadowRoot||n instanceof ShadowRoot)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function se(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t){return"viewport"===t?se(function(e){var t=w(e),n=S(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+M(e),y:s}}(e)):j(t)?function(e){var t=x(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t=S(e),n=O(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+M(e),s=-n.scrollTop;return"rtl"===D(r||t).direction&&(a+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:i,x:a,y:s}}(S(e)))}function fe(e,t,n){var r="clippingParents"===t?function(e){var t=C(A(e)),n=["absolute","fixed"].indexOf(D(e).position)>=0&&j(e)?B(e):e;return E(n)?t.filter((function(e){return E(e)&&ae(e,n)&&"body"!==P(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ue(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),ue(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ce(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,u=void 0===s?"viewport":s,f=n.elementContext,c=void 0===f?"popper":f,l=n.altBoundary,p=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=ce("number"!=typeof m?m:le(m,F)),v="popper"===c?"reference":"popper",g=e.elements.reference,y=e.rects.popper,b=e.elements[p?v:c],w=fe(E(b)?b:b.contextElement||S(e.elements.popper),a,u),O=x(g),j=Z({reference:O,element:y,strategy:"absolute",placement:o}),P=se(Object.assign(Object.assign({},y),j)),M="popper"===c?P:O,D={top:w.top-M.top+h.top,bottom:M.bottom-w.bottom+h.bottom,left:w.left-M.left+h.left,right:M.right-w.right+h.right},k=e.modifiersData.offset;if("popper"===c&&k){var I=k[o];Object.keys(D).forEach((function(e){var t=[V,T].indexOf(e)>=0?1:-1,n=[H,T].indexOf(e)>=0?"y":"x";D[e]+=I[n]*t}))}return D}function de(e,t,n){return Math.max(e,Math.min(t,n))}function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function he(e){return[H,V,T,W].some((function(t){return e[t]>=0}))}var ve=Y({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,u=w(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,G)})),s&&u.addEventListener("resize",n.update,G),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),s&&u.removeEventListener("resize",n.update,G)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,f={placement:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),te(Object.assign(Object.assign({},f),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),te(Object.assign(Object.assign({},f),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];j(o)&&P(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});j(r)&&P(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=U.reduce((function(e,n){return e[n]=function(e,t,n){var r=J(e),o=[W,H].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[W,V].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],u=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,f=n.padding,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=J(v),y=u||(g===v||!m?[re(v)]:function(e){if("auto"===J(e))return[];var t=re(e);return[ie(e),t,ie(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat("auto"===J(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,f=void 0===u?U:u,c=K(r),l=c?s?N:N.filter((function(e){return K(e)===c})):F,p=l.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[J(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:c,rootBoundary:l,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,j=b[0],P=0;P<b.length;P++){var S=b[P],M=J(S),D="start"===K(S),k=[H,T].indexOf(M)>=0,I=k?"width":"height",L=pe(t,{placement:S,boundary:c,rootBoundary:l,altBoundary:p,padding:f}),A=k?D?V:W:D?T:H;x[I]>w[I]&&(A=re(A));var C=re(A),R=[];if(i&&R.push(L[M]<=0),s&&R.push(L[A]<=0,L[C]<=0),R.every((function(e){return e}))){j=S,E=!1;break}O.set(S,R)}if(E)for(var _=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},B=m?3:1;B>0;B--){if("break"===_(B))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,u=n.boundary,f=n.rootBoundary,c=n.altBoundary,l=n.padding,p=n.tether,d=void 0===p||p,m=n.tetherOffset,h=void 0===m?0:m,v=pe(t,{boundary:u,rootBoundary:f,padding:l,altBoundary:c}),g=J(t.placement),y=K(t.placement),b=!y,x=Q(g),w="x"===x?"y":"x",O=t.modifiersData.popperOffsets,E=t.rects.reference,j=t.rects.popper,P="function"==typeof h?h(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):h,S={x:0,y:0};if(O){if(i){var M="y"===x?H:W,D="y"===x?T:V,k="y"===x?"height":"width",I=O[x],A=O[x]+v[M],C=O[x]-v[D],R=d?-j[k]/2:0,_="start"===y?E[k]:j[k],F="start"===y?-j[k]:-E[k],N=t.elements.arrow,U=d&&N?L(N):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=q[M],z=q[D],$=de(0,E[k],U[k]),Y=b?E[k]/2-R-$-X-P:_-$-X-P,G=b?-E[k]/2+R+$+z+P:F+$+z+P,Z=t.elements.arrow&&B(t.elements.arrow),ee=Z?"y"===x?Z.clientTop||0:Z.clientLeft||0:0,te=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,ne=O[x]+Y-te-ee,re=O[x]+G-te,oe=de(d?Math.min(A,ne):A,I,d?Math.max(C,re):C);O[x]=oe,S[x]=oe-I}if(s){var ie="x"===x?H:W,ae="x"===x?T:V,se=O[w],ue=de(se+v[ie],se,se-v[ae]);O[w]=ue,S[w]=ue-se}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=J(n.placement),s=Q(a),u=[W,V].indexOf(a)>=0?"height":"width";if(o&&i){var f=n.modifiersData[r+"#persistent"].padding,c=L(o),l="y"===s?H:W,p="y"===s?T:V,d=n.rects.reference[u]+n.rects.reference[s]-i[s]-n.rects.popper[u],m=i[s]-n.rects.reference[s],h=B(o),v=h?"y"===s?h.clientHeight||0:h.clientWidth||0:0,g=d/2-m/2,y=f[l],b=v-c[u]-f[p],x=v/2-c[u]/2+g,w=de(y,x,b),O=s;n.modifiersData[r]=((t={})[O]=w,t.centerOffset=w-x,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&ae(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:ce("number"!=typeof s?s:le(s,F))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),u=me(a,r),f=me(s,o,i),c=he(u),l=he(f);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),ge=n(5),ye=n.n(ge),be=[],xe=function(){},we=function(){return Promise.resolve(null)},Oe=[];function Ee(e){var t=e.placement,n=void 0===t?"bottom":t,r=e.strategy,o=void 0===r?"absolute":r,i=e.modifiers,a=void 0===i?Oe:i,u=e.referenceElement,f=e.onFirstUpdate,c=e.innerRef,l=e.children,p=s.useContext(v),d=s.useState(null),m=d[0],h=d[1],x=s.useState(null),w=x[0],O=x[1];s.useEffect((function(){g(c,m)}),[c,m]);var E,j=s.useMemo((function(){return{placement:n,strategy:o,onFirstUpdate:f,modifiers:[].concat(a,[{name:"arrow",enabled:null!=w,options:{element:w}}])}}),[n,o,f,a,w]),P=function(e,t,n){void 0===n&&(n={});var r=s.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||be},i=s.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"}},attributes:{}}),a=i[0],u=i[1],f=s.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);u({styles:y(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:y(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),c=s.useMemo((function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[f,{name:"applyStyles",enabled:!1}])};return ye()(r.current,e)?r.current||e:(r.current=e,e)}),[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,f]),l=s.useRef();return b((function(){l.current&&l.current.setOptions(c)}),[c]),b((function(){if(null!=e&&null!=t){var r=(n.createPopper||ve)(e,t,c);return l.current=r,function(){r.destroy(),l.current=null}}}),[e,t,n.createPopper]),{state:l.current?l.current.state:null,styles:a.styles,attributes:a.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}}(u||p,m,j),S=P.state,M=P.styles,D=P.forceUpdate,k=P.update,I=s.useMemo((function(){return{ref:h,style:M.popper,placement:S?S.placement:n,hasPopperEscaped:S&&S.modifiersData.hide?S.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:S&&S.modifiersData.hide?S.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:M.arrow,ref:O},forceUpdate:D||xe,update:k||we}}),[h,O,n,S,M,k,D]);return(E=l,Array.isArray(E)?E[0]:E)(I)}var je=function(e){function t(t){var n=e.call(this,t)||this;return n.element=document.createElement("div"),n.state={x:0,y:0},n.updatePosition=n.updatePosition.bind(n),n}return i(t,e),t.virtualElement=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),{getBoundingClientRect:function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e}},clientWidth:0,clientHeight:0}},t.prototype.componentDidMount=function(){document.body.appendChild(this.element),document.addEventListener("mousemove",this.updatePosition)},t.prototype.componentWillUnmount=function(){document.body.removeChild(this.element),document.removeEventListener("mousemove",this.updatePosition)},t.prototype.getTooltipValues=function(){var e=this.props,t=e.accuracy,n=e.series,r=e.items,o=e.hoveredValue;return o&&(null==n?void 0:n.length)&&(null==r?void 0:r.length)?r.map((function(e,r){var i=n[r].data.find((function(e){return e[0].value>=o}));return{color:e.color,label:e.label,value:i?i[1].toFixed(t):"-"}})):[]},t.prototype.getXValue=function(){var e=this.props,t=e.hoveredValue,n=e.xSerie;if(!t||!n)return null;var r=n.find((function(e){return e.value>=t}));return null==r?void 0:r.label},t.prototype.updatePosition=function(e){this.setState({x:e.clientX,y:e.clientY})},t.prototype.render=function(){var e=this.props.accuracy,n=this.state,r=n.x,o=n.y,i=this.getXValue(),a=this.getTooltipValues(),s=t.virtualElement(r,o);return i?h.a.createPortal(u.a.createElement(Ee,{placement:"right-start",referenceElement:s,modifiers:[{name:"offset",options:{offset:[25,25]}}]},(function(t){var n=t.ref,r=t.style,o=t.placement,s=t.arrowProps;return u.a.createElement("div",{ref:n,style:r,className:"grafana-tooltip graph-tooltip","data-placement":o},u.a.createElement("div",{className:"graph-tooltip-time"},i.toFixed(e)),a.map((function(e){return u.a.createElement("div",{className:"graph-tooltip-list-item"},u.a.createElement("div",{className:"graph-tooltip-series-name"},u.a.createElement(f.SeriesIcon,{color:e.color})),u.a.createElement("div",{className:"graph-tooltip-value"},e.label+": "+e.value))})),u.a.createElement("div",{ref:s.ref,style:s.style}))})),this.element):null},t}(s.PureComponent),Pe=function(e,t){return e.fields[1].values.get(t)},Se=function(e,t){return e.fields[0].values.get(t)};function Me(e,t,n){var r=[];if(!e.length||!t.length)return r;var o=n/65,i=t[0].value,a=(t[t.length-1].value-i)/o;e.forEach((function(e){for(var t=e.data.filter((function(e){return e[0].isResetPoint})).map((function(e){return e[0].value})),n=function(e){if(r.find((function(n){return n===t[e]||Math.abs(t[e]-n)<a})))return"continue";r.push(t[e])},o=0;o<t.length;o+=1)n(o)}));for(var s=function(e){var n=i+a*e;if(!r.find((function(e){return Math.abs(e-n)<.85*a}))){var o=t.find((function(e){return e.value>=n}));o&&r.push(o.value)}},u=0;u<o;u+=1)s(u);return r.sort((function(e,t){return e-t}))}var De=function(e){function t(t){var n=e.call(this,t)||this;return n.element=null,n.$element=null,n.onPlotHover=function(e,t){var r=n.state,o=r.plot,i=r.series,a=r.xSerie;if(o&&i&&a)if(o.unhighlight(),t.x<=0)n.setState({hoverItem:void 0});else{var s=o.getAxes().xaxis.c2p(t.pageX-o.offset().left);n.setState({hoverItem:s}),n.highlight(s)}},n.onPlotSelected=function(e,t){var r=t.xaxis,o=n.props.onChangeTimeRange,i=n.state,a=i.plot,s=i.series,u=i.xSerie;if(a&&s&&u){var f=Math.floor(r.from),c=u.find((function(e){return e.value>=f})),l=Math.ceil(r.to),p=u.find((function(e){return e.value>=l}));c&&p&&(o({from:c.time,to:p.time}),a.clearSelection())}},n.state={noData:!1},n}return i(t,e),t.prototype.componentDidMount=function(){this.element&&(this.$element=d()(this.element),this.$element.on("plothover",this.onPlotHover),this.$element.on("plotselected",this.onPlotSelected)),this.drawGraph()},t.prototype.componentDidUpdate=function(e,t){var n=this.state.series;e===this.props&&(n||[]).length===(t.series||[]).length||this.drawGraph()},t.prototype.getSeries=function(){var e=this.props,t=e.data.series,n=e.options,r=n.offsets,o=n.xseries;return function(e,t,n){var r=[],o=[];if(!(e&&t&&e.length&&t.length))return{series:r,xSerie:o};for(var i=0;i<t.length;i+=1){var a=t[i],s=a.refId&&n[a.refId]?parseFloat(n[a.refId]):0;if(a.length){for(var u=[],f=0,c=0,l=0,p=0,d=0;d<e.length;d+=1){var m=Se(e,d);if(null!=m){for(var h=Pe(e,d);f<a.length&&f!==a.length-1;f+=1){if(Pe(a,f+1)>h)break}var v=Se(a,f);if(s&&s>0&&(m>=s||0===u.length?l=m-=s:m+=l),!(m<0)){var g=c>m;g&&(p+=c,u[u.length-1][0].isResetPoint=!0);var y=p+m;u.push([{label:m,time:Pe(a,f),value:y,isResetPoint:!1},v]),o.push({label:m,value:y,isResetPoint:g,time:h}),c=m}}}r.push({data:u})}}return o.sort((function(e,t){return e.value-t.value})),r.forEach((function(e){return e.data.sort((function(e,t){return e[0].value-t[0].value}))})),{series:r,xSerie:o}}(this.getXSerie(),t.filter((function(e){return e.refId!==o})),r)},t.prototype.getXSerie=function(){var e=this.props,t=e.data.series,n=e.options;return t.find((function(e){return e.refId===n.xseries}))},t.prototype.getLegendItems=function(){var e=this.state.plot,t=this.props,n=t.data.series,r=t.options;if(!e)return[];var o=e.getData();return o.length?n.filter((function(e){return e.refId!==r.xseries})).map((function(e,t){return{label:e.name||"",isVisible:!0,color:o[t].color,yAxis:1}})):[]},t.prototype.highlight=function(e){var t=this.state,n=t.plot,r=t.series;r&&n&&r.forEach((function(t,r){var o=t.data.findIndex((function(t){return t[0].value>=e}));n.highlight(r,o)}))},t.prototype.drawGraph=function(){if(null!==this.$element){var e=this.getSeries(),t=e.series,n=e.xSerie,r=this.props,o=r.width,i=r.options.accuracy;this.setState({noData:t.length<1});try{var a=d.a.plot(this.$element,t.map((function(e){return e.data.map((function(e){return[e[0].value,e[1]]}))})),{grid:{hoverable:!0,clickable:!0,borderWidth:0},series:{lines:{show:!0}},xaxis:{tickDecimals:i,ticks:Me(t,n,o),tickFormatter:function(e){var t=n.filter((function(t){return t.value===e})),r=t.find((function(e){return e.isResetPoint}));return t.length?r?t[0].label.toFixed(i)+"&nbsp;&darr;":t[0].label.toFixed(i):"?"}},crosshair:{mode:"x"},selection:{mode:"x"}});this.setState({plot:a,series:t,xSerie:n})}catch(e){throw new Error("Error rendering panel")}}},t.prototype.render=function(){var e=this,t=this.props,n=t.height,r=t.width,o=t.options.accuracy,i=this.state,a=i.hoverItem,s=i.noData,c=i.xSerie,l=i.series;return u.a.createElement("div",{className:"graph-panel",style:{overflow:"visible"}},u.a.createElement("div",{ref:function(t){e.element=t},style:{height:n,width:r},className:"graph-panel__chart",id:"panel-random-id",onMouseLeave:function(){e.setState({hoverItem:void 0})}}),s&&u.a.createElement("div",{className:"datapoints-warning"},"No data"),u.a.createElement(je,{accuracy:o,items:this.getLegendItems(),series:l,xSerie:c,hoveredValue:a}),u.a.createElement("div",{style:{maxHeight:"35%",padding:"10px 0"}},u.a.createElement(f.CustomScrollbar,{hideHorizontalTrack:!0},u.a.createElement(f.GraphLegend,{items:this.getLegendItems(),placement:"under",displayMode:f.LegendDisplayMode.List}))))},t}(s.PureComponent);n.d(t,"plugin",(function(){return ke}));var ke=new r.PanelPlugin(De).setPanelOptions((function(e){e.addNumberInput({path:"accuracy",name:"Accuracy",description:"Decimals after comma",defaultValue:2}).addCustomEditor({id:"xseries",path:"xseries",name:"Reference series",description:"X-axis series",editor:l}).addCustomEditor({id:"offsets",path:"offsets",name:"Y-series offsets",description:"Offets for each Y-series",editor:c,showIf:function(e){return!!e.xseries},defaultValue:{}})}));t.default=ke}])}));
//# sourceMappingURL=module.js.map