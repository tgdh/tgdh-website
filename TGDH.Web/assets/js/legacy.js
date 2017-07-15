/* Garlicjs dist/garlic-standalone.min.js build version 1.3.0 http://garlicjs.org */
/* Zepto v1.0rc1-108-g9e9682a - zepto event data - zeptojs.com/license */
var Zepto=function(){function A(e){return T.call(e)=="[object Function]"}function O(e){return e instanceof Object}function M(e){return O(e)&&e.__proto__==Object.prototype}function _(e){return e instanceof Array}function D(e){return typeof e.length=="number"}function P(t){return o.call(t,function(t){return t!==e&&t!==null})}function H(e){return e.length>0?n.fn.concat.apply([],e):e}function B(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function j(e){return e in f?f[e]:f[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function F(e,t){return typeof t=="number"&&!c[B(e)]?t+"px":t}function I(e){var t,n;return a[e]||(t=u.createElement(e),u.body.appendChild(t),n=l(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),a[e]=n),a[e]}function q(e){return"children"in e?s.call(e.children):n.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function R(n,r,i){for(t in r)i&&M(r[t])?(M(n[t])||(n[t]={}),R(n[t],r[t],i)):r[t]!==e&&(n[t]=r[t])}function U(t,r){return r===e?n(t):n(t).filter(r)}function z(e,t,n,r){return A(t)?t.call(e,n,r):t}function W(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function X(t,n){var r=t.className,i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function V(e){var t;try{return e?e=="true"||(e=="false"?!1:e=="null"?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?n.parseJSON(e):e:t):e}catch(r){return e}}function $(e,t){t(e);for(var n in e.childNodes)$(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=i.filter,u=window.document,a={},f={},l=u.defaultView.getComputedStyle,c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/^(?:body|html)$/i,v=["val","css","html","text","data","width","height","offset"],m=["after","prepend","before","append"],g=u.createElement("table"),y=u.createElement("tr"),b={tr:u.createElement("tbody"),tbody:g,thead:g,tfoot:g,td:y,th:y,"*":u.createElement("div")},w=/complete|loaded|interactive/,E=/^\.([\w-]+)$/,S=/^#([\w-]*)$/,x=/^[\w-]+$/,T={}.toString,N={},C,k,L=u.createElement("div");return N.matches=function(e,t){if(!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=L).appendChild(e),r=~N.qsa(i,t).indexOf(e),s&&L.removeChild(e),r},C=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},k=function(e){return o.call(e,function(t,n){return e.indexOf(t)==n})},N.fragment=function(t,r,i){t.replace&&(t=t.replace(p,"<$1></$2>")),r===e&&(r=h.test(t)&&RegExp.$1),r in b||(r="*");var o,u,a=b[r];return a.innerHTML=""+t,u=n.each(s.call(a.childNodes),function(){a.removeChild(this)}),M(i)&&(o=n(u),n.each(i,function(e,t){v.indexOf(e)>-1?o[e](t):o.attr(e,t)})),u},N.Z=function(e,t){return e=e||[],e.__proto__=arguments.callee.prototype,e.selector=t||"",e},N.isZ=function(e){return e instanceof N.Z},N.init=function(t,r){if(!t)return N.Z();if(A(t))return n(u).ready(t);if(N.isZ(t))return t;var i;if(_(t))i=P(t);else if(O(t))i=[M(t)?n.extend({},t):t],t=null;else if(h.test(t))i=N.fragment(t.trim(),RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=N.qsa(u,t)}return N.Z(i,t)},n=function(e,t){return N.init(e,t)},n.extend=function(e){var t,n=s.call(arguments,1);return typeof e=="boolean"&&(t=e,e=n.shift()),n.forEach(function(n){R(e,n,t)}),e},N.qsa=function(e,t){var n;return e===u&&S.test(t)?(n=e.getElementById(RegExp.$1))?[n]:[]:e.nodeType!==1&&e.nodeType!==9?[]:s.call(E.test(t)?e.getElementsByClassName(RegExp.$1):x.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},n.contains=function(e,t){return e!==t&&e.contains(t)},n.isFunction=A,n.isObject=O,n.isArray=_,n.isPlainObject=M,n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)},n.camelCase=C,n.trim=function(e){return e.trim()},n.uuid=0,n.support={},n.expr={},n.map=function(e,t){var n,r=[],i,s;if(D(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return H(r)},n.each=function(e,t){var n,r;if(D(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},n.grep=function(e,t){return o.call(e,t)},window.JSON&&(n.parseJSON=JSON.parse),n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,indexOf:i.indexOf,concat:i.concat,map:function(e){return n(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return n(s.apply(this,arguments))},ready:function(e){return w.test(u.readyState)?e(n):u.addEventListener("DOMContentLoaded",function(){e(n)},!1),this},get:function(t){return t===e?s.call(this):this[t]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return this.forEach(function(t,n){e.call(t,n,t)}),this},filter:function(e){return A(e)?this.not(this.not(e)):n(o.call(this,function(t){return N.matches(t,e)}))},add:function(e,t){return n(k(this.concat(n(e,t))))},is:function(e){return this.length>0&&N.matches(this[0],e)},not:function(t){var r=[];if(A(t)&&t.call!==e)this.each(function(e){t.call(this,e)||r.push(this)});else{var i=typeof t=="string"?this.filter(t):D(t)&&A(t.item)?s.call(t):n(t);this.forEach(function(e){i.indexOf(e)<0&&r.push(e)})}return n(r)},has:function(e){return this.filter(function(){return O(e)?n.contains(this,e):n(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!O(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!O(e)?e:n(e)},find:function(e){var t;return this.length==1?t=n(N.qsa(this[0],e)):t=this.map(function(){return N.qsa(this,e)}),t},closest:function(e,t){var r=this[0];while(r&&!N.matches(r,e))r=r!==t&&r!==u&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&e!==u&&t.indexOf(e)<0)return t.push(e),e});return U(t,e)},parent:function(e){return U(k(this.pluck("parentNode")),e)},children:function(e){return U(this.map(function(){return q(this)}),e)},contents:function(){return this.map(function(){return s.call(this.childNodes)})},siblings:function(e){return U(this.map(function(e,t){return o.call(q(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return n.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),l(this,"").getPropertyValue("display")=="none"&&(this.style.display=I(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var t=A(e);if(this[0]&&!t)var r=n(e).get(0),i=r.parentNode||this.length>1;return this.each(function(s){n(this).wrapAll(t?e.call(this,s):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){n(this[0]).before(e=n(e));var t;while((t=e.children()).length)e=t.first();n(e).append(this)}return this},wrapInner:function(e){var t=A(e);return this.each(function(r){var i=n(this),s=i.contents(),o=t?e.call(this,r):e;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var r=n(this);(t===e?r.css("display")=="none":t)?r.show():r.hide()})},prev:function(e){return n(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return n(this.pluck("nextElementSibling")).filter(e||"*")},html:function(t){return t===e?this.length>0?this[0].innerHTML:null:this.each(function(e){var r=this.innerHTML;n(this).empty().append(z(this,t,e,r))})},text:function(t){return t===e?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(n,r){var i;return typeof n=="string"&&r===e?this.length==0||this[0].nodeType!==1?e:n=="value"&&this[0].nodeName=="INPUT"?this.val():!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(this.nodeType!==1)return;if(O(n))for(t in n)W(this,t,n[t]);else W(this,n,z(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&W(this,e)})},prop:function(t,n){return n===e?this[0]?this[0][t]:e:this.each(function(e){this[t]=z(this,n,e,this[t])})},data:function(t,n){var r=this.attr("data-"+B(t),n);return r!==null?V(r):e},val:function(t){return t===e?this.length>0?this[0].multiple?n(this[0]).find("option").filter(function(e){return this.selected}).pluck("value"):this[0].value:e:this.each(function(e){this.value=z(this,t,e,this.value)})},offset:function(){if(this.length==0)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},css:function(n,r){if(arguments.length<2&&typeof n=="string")return this.length==0?e:this[0].style[C(n)]||l(this[0],"").getPropertyValue(n);var i="";for(t in n)!n[t]&&n[t]!==0?this.each(function(){this.style.removeProperty(B(t))}):i+=B(t)+":"+F(t,n[t])+";";return typeof n=="string"&&(!r&&r!==0?this.each(function(){this.style.removeProperty(B(n))}):i=B(n)+":"+F(n,r)),this.each(function(){this.style.cssText+=";"+i})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return this.length<1?!1:j(e).test(X(this[0]))},addClass:function(e){return this.each(function(t){r=[];var i=X(this),s=z(this,e,t,i);s.split(/\s+/g).forEach(function(e){n(this).hasClass(e)||r.push(e)},this),r.length&&X(this,i+(i?" ":"")+r.join(" "))})},removeClass:function(t){return this.each(function(n){if(t===e)return X(this,"");r=X(this),z(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(j(e)," ")}),X(this,r.trim())})},toggleClass:function(t,r){return this.each(function(i){var s=z(this,t,i,X(this));(r===e?!n(this).hasClass(s):r)?n(this).addClass(s):n(this).removeClass(s)})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),r=this.offset(),i=d.test(t[0].nodeName)?{top:0,left:0}:t.offset();return r.top-=parseFloat(n(e).css("margin-top"))||0,r.left-=parseFloat(n(e).css("margin-left"))||0,i.top+=parseFloat(n(t[0]).css("border-top-width"))||0,i.left+=parseFloat(n(t[0]).css("border-left-width"))||0,{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||u.body;while(e&&!d.test(e.nodeName)&&n(e).css("position")=="static")e=e.offsetParent;return e})}},["width","height"].forEach(function(t){n.fn[t]=function(r){var i,s=t.replace(/./,function(e){return e[0].toUpperCase()});return r===e?this[0]==window?window["inner"+s]:this[0]==u?u.documentElement["offset"+s]:(i=this.offset())&&i[t]:this.each(function(e){var i=n(this);i.css(t,z(this,r,e,i[t]()))})}}),m.forEach(function(e,t){var r=t%2;n.fn[e]=function(){var e=n.map(arguments,function(e){return O(e)?e:N.fragment(e)}),i,s=this.length>1;return e.length<1?this:this.each(function(o,u){i=r?u:u.parentNode,u=t==0?u.nextSibling:t==1?u.firstChild:t==2?u:null,e.forEach(function(e){if(s)e=e.cloneNode(!0);else if(!i)return n(e).remove();$(i.insertBefore(e,u),function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src&&window.eval.call(window,e.innerHTML)})})})},n.fn[r?e+"To":"insert"+(t?"Before":"After")]=function(t){return n(t)[e](this),this}}),N.Z.prototype=n.fn,N.uniq=k,N.deserializeValue=V,n.zepto=N,n}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function o(e){return e._zid||(e._zid=r++)}function u(e,t,r,i){t=a(t);if(t.ns)var s=f(t.ns);return(n[o(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||s.test(e.ns))&&(!r||o(e.fn)===o(r))&&(!i||e.sel==i)})}function a(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function f(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function l(t,n,r){e.isObject(t)?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function c(e,t){return e.del&&(e.e=="focus"||e.e=="blur")||!!t}function h(e){return s[e]||e}function p(t,r,i,u,f,p){var d=o(t),v=n[d]||(n[d]=[]);l(r,i,function(n,r){var i=a(n);i.fn=r,i.sel=u,i.e in s&&(r=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return i.fn.apply(this,arguments)}),i.del=f&&f(r,n);var o=i.del||r;i.proxy=function(e){var n=o.apply(t,[e].concat(e.data));return n===!1&&(e.preventDefault(),e.stopPropagation()),n},i.i=v.length,v.push(i),t.addEventListener(h(i.e),i.proxy,c(i,p))})}function d(e,t,r,i,s){var a=o(e);l(t||"",r,function(t,r){u(e,t,r,i).forEach(function(t){delete n[a][t.i],e.removeEventListener(h(t.e),t.proxy,c(t,s))})})}function b(t){var n,r={originalEvent:t};for(n in t)!g.test(n)&&t[n]!==undefined&&(r[n]=t[n]);return e.each(y,function(e,n){r[e]=function(){return this[n]=v,t[e].apply(t,arguments)},r[n]=m}),r}function w(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var t=e.zepto.qsa,n={},r=1,i={},s={mouseenter:"mouseover",mouseleave:"mouseout"};i.click=i.mousedown=i.mouseup=i.mousemove="MouseEvents",e.event={add:p,remove:d},e.proxy=function(t,n){if(e.isFunction(t)){var r=function(){return t.apply(n,arguments)};return r._zid=o(t),r}if(typeof n=="string")return e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){p(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){d(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){p(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return d(r,t,e),n}})})};var v=function(){return!0},m=function(){return!1},g=/^([A-Z]|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){return this.each(function(i,s){p(s,n,r,t,function(n){return function(r){var i,o=e(r.target).closest(t,s).get(0);if(o)return i=e.extend(b(r),{currentTarget:o,liveFired:s}),n.apply(o,[i].concat([].slice.call(arguments,1)))}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){d(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return!n||e.isFunction(n)?this.bind(t,n||r):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return!n||e.isFunction(n)?this.unbind(t,n||r):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){if(typeof t=="string"||e.isPlainObject(t))t=e.Event(t);return w(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(s,o){r=b(typeof t=="string"?e.Event(t):t),r.data=n,r.target=o,e.each(u(o,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){typeof e!="string"&&(t=e,e=t.type);var n=document.createEvent(i[e]||"Events"),r=!0;if(t)for(var s in t)s=="bubbles"?r=!!t[s]:n[s]=t[s];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(e){function s(s,u){var a=s[i],f=a&&t[a];if(u===undefined)return f||o(s);if(f){if(u in f)return f[u];var l=r(u);if(l in f)return f[l]}return n.call(e(s),u)}function o(n,s,o){var a=n[i]||(n[i]=++e.uuid),f=t[a]||(t[a]=u(n));return s!==undefined&&(f[r(s)]=o),f}function u(t){var n={};return e.each(t.attributes,function(t,i){i.name.indexOf("data-")==0&&(n[r(i.name.replace("data-",""))]=e.zepto.deserializeValue(i.value))}),n}var t={},n=e.fn.data,r=e.camelCase,i=e.expando="Zepto"+ +(new Date);e.fn.data=function(t,n){return n===undefined?e.isPlainObject(t)?this.each(function(n,r){e.each(t,function(e,t){o(r,e,t)})}):this.length==0?undefined:s(this[0],t):this.each(function(){o(this,t,n)})},e.fn.removeData=function(n){return typeof n=="string"&&(n=n.split(/\s+/)),this.each(function(){var s=this[i],o=s&&t[s];o&&e.each(n,function(){delete o[r(this)]})})}}(Zepto);
!function(t){"use strict";var e=function(t){this.defined="undefined"!=typeof localStorage;var e="garlic:"+document.domain+">test";try{localStorage.setItem(e,e),localStorage.removeItem(e)}catch(i){this.defined=!1}};e.prototype={constructor:e,get:function(t,e){var i=localStorage.getItem(t);if(i){try{i=JSON.parse(i)}catch(n){}return i}return"undefined"!=typeof e?e:null},has:function(t){return localStorage.getItem(t)?!0:!1},set:function(t,e,i){return""===e||e instanceof Array&&0===e.length?this.destroy(t):(e=JSON.stringify(e),localStorage.setItem(t,e)),"function"==typeof i?i():!0},destroy:function(t,e){return localStorage.removeItem(t),"function"==typeof e?e():!0},clean:function(t){for(var e=localStorage.length-1;e>=0;e--)"undefined"==typeof Array.indexOf&&-1!==localStorage.key(e).indexOf("garlic:")&&localStorage.removeItem(localStorage.key(e));return"function"==typeof t?t():!0},clear:function(t){return localStorage.clear(),"function"==typeof t?t():!0}};var i=function(t,e,i){this.init("garlic",t,e,i)};i.prototype={constructor:i,init:function(e,i,n,s){this.type=e,this.$element=t(i),this.options=this.getOptions(s),this.storage=n,this.path=this.options.getPath(this.$element)||this.getPath(),this.parentForm=this.$element.closest("form"),this.$element.addClass("garlic-auto-save"),this.expiresFlag=this.options.expires?(this.$element.data("expires")?this.path:this.getPath(this.parentForm))+"_flag":!1,this.$element.on(this.options.events.join("."+this.type+" "),!1,t.proxy(this.persist,this)),this.options.destroy&&t(this.parentForm).on("submit reset",!1,t.proxy(this.remove,this)),this.retrieve()},getOptions:function(e){return t.extend({},t.fn[this.type].defaults,e,this.$element.data())},persist:function(){this.val!==this.getVal()&&(this.val=this.getVal(),this.options.expires&&this.storage.set(this.expiresFlag,((new Date).getTime()+1e3*this.options.expires).toString()),this.storage.set(this.path,this.getVal()),this.options.onPersist(this.$element,this.getVal()))},getVal:function(){return this.$element.is("input[type=checkbox]")?this.$element.prop("checked")?"checked":"unchecked":this.$element.val()},retrieve:function(){if(this.storage.has(this.path)){if(this.options.expires){var t=(new Date).getTime();if(this.storage.get(this.expiresFlag)<t.toString())return void this.storage.destroy(this.path);this.$element.attr("expires-in",Math.floor((parseInt(this.storage.get(this.expiresFlag))-t)/1e3))}var e=this.storage.get(this.path);return this.options.conflictManager.enabled&&this.detectConflict()?this.conflictManager():this.$element.is("input[type=radio], input[type=checkbox]")?"checked"===e||this.$element.val()===e?this.$element.attr("checked",!0):void("unchecked"===e&&this.$element.attr("checked",!1)):(this.$element.val(e),this.$element.trigger("input"),void this.options.onRetrieve(this.$element,e))}},detectConflict:function(){var e=this;if(this.$element.is("input[type=checkbox], input[type=radio]"))return!1;if(this.$element.val()&&this.storage.get(this.path)!==this.$element.val()){if(this.$element.is("select")){var i=!1;return this.$element.find("option").each(function(){return 0!==t(this).index()&&t(this).attr("selected")&&t(this).val()!==e.storage.get(this.path)?void(i=!0):void 0}),i}return!0}return!1},conflictManager:function(){return"function"!=typeof this.options.conflictManager.onConflictDetected||this.options.conflictManager.onConflictDetected(this.$element,this.storage.get(this.path))?(this.options.conflictManager.garlicPriority?(this.$element.data("swap-data",this.$element.val()),this.$element.data("swap-state","garlic"),this.$element.val(this.storage.get(this.path))):(this.$element.data("swap-data",this.storage.get(this.path)),this.$element.data("swap-state","default")),this.swapHandler(),this.$element.addClass("garlic-conflict-detected"),void this.$element.closest("input[type=submit]").attr("disabled",!0)):!1},swapHandler:function(){var e=t(this.options.conflictManager.template);this.$element.after(e.text(this.options.conflictManager.message)),e.on("click",!1,t.proxy(this.swap,this))},swap:function(){var e=this.$element.data("swap-data");this.$element.data("swap-state","garlic"===this.$element.data("swap-state")?"default":"garlic"),this.$element.data("swap-data",this.$element.val()),t(this.$element).val(e),this.options.onSwap(this.$element,this.$element.data("swap-data"),e)},destroy:function(){this.storage.destroy(this.path)},remove:function(){return this.destroy(),this.$element.is("input[type=radio], input[type=checkbox]")?void t(this.$element).attr("checked",!1):void this.$element.val("")},getPath:function(e){if("undefined"==typeof e&&(e=this.$element),this.options.getPath(e))return this.options.getPath(e);if(1!=e.length)return!1;for(var i="",n=e.is("input[type=checkbox]"),s=e;s.length;){var a=s[0],o=a.nodeName;if(!o)break;o=o.toLowerCase();var r=s.parent(),h=r.children(o);if(t(a).is("form, input, select, textarea")||n){if(o+=t(a).attr("name")?"."+t(a).attr("name"):"",h.length>1&&!t(a).is("input[type=radio]")&&(o+=":eq("+h.index(a)+")"),i=o+(i?">"+i:""),"form"==a.nodeName.toLowerCase())break;s=r}else s=r}return"garlic:"+document.domain+(this.options.domain?"*":window.location.pathname)+">"+i},getStorage:function(){return this.storage}},t.fn.garlic=function(n,s){function a(e){var s=t(e),a=s.data("garlic"),h=t.extend({},o,s.data());if(("undefined"==typeof h.storage||h.storage)&&"password"!==t(e).attr("type"))return a||s.data("garlic",a=new i(e,r,h)),"string"==typeof n&&"function"==typeof a[n]?a[n]():void 0}var o=t.extend(!0,{},t.fn.garlic.defaults,n,this.data()),r=new e,h=!1;return r.defined?(this.each(function(){if(t(this).is("form"))t(this).find(o.inputs).each(function(){t(this).is(o.excluded)||(h=a(t(this)))});else if(t(this).is(o.inputs)){if(t(this).is(o.excluded))return;h=a(t(this))}}),"function"==typeof s?s():h):!1},t.fn.garlic.Constructor=i,t.fn.garlic.defaults={destroy:!0,inputs:"input, textarea, select",excluded:'input[type="file"], input[type="hidden"], input[type="submit"], input[type="reset"]',events:["DOMAttrModified","textInput","input","change","click","keypress","paste","focus"],domain:!1,expires:!1,conflictManager:{enabled:!1,garlicPriority:!0,template:'<span class="garlic-swap"></span>',message:"This is your saved data. Click here to see default one",onConflictDetected:function(t,e){return!0}},getPath:function(t){},onRetrieve:function(t,e){},onPersist:function(t,e){},onSwap:function(t,e,i){}},t(window).on("load",function(){t('[data-persist="garlic"]').each(function(){t(this).garlic()})})}(window.jQuery||window.Zepto);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnYXJsaWMtc3RhbmRhbG9uZS5taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogR2FybGljanMgZGlzdC9nYXJsaWMtc3RhbmRhbG9uZS5taW4uanMgYnVpbGQgdmVyc2lvbiAxLjMuMCBodHRwOi8vZ2FybGljanMub3JnICovXG4vKiBaZXB0byB2MS4wcmMxLTEwOC1nOWU5NjgyYSAtIHplcHRvIGV2ZW50IGRhdGEgLSB6ZXB0b2pzLmNvbS9saWNlbnNlICovXG52YXIgWmVwdG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBBKGUpe3JldHVybiBULmNhbGwoZSk9PVwiW29iamVjdCBGdW5jdGlvbl1cIn1mdW5jdGlvbiBPKGUpe3JldHVybiBlIGluc3RhbmNlb2YgT2JqZWN0fWZ1bmN0aW9uIE0oZSl7cmV0dXJuIE8oZSkmJmUuX19wcm90b19fPT1PYmplY3QucHJvdG90eXBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBBcnJheX1mdW5jdGlvbiBEKGUpe3JldHVybiB0eXBlb2YgZS5sZW5ndGg9PVwibnVtYmVyXCJ9ZnVuY3Rpb24gUCh0KXtyZXR1cm4gby5jYWxsKHQsZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1lJiZ0IT09bnVsbH0pfWZ1bmN0aW9uIEgoZSl7cmV0dXJuIGUubGVuZ3RoPjA/bi5mbi5jb25jYXQuYXBwbHkoW10sZSk6ZX1mdW5jdGlvbiBCKGUpe3JldHVybiBlLnJlcGxhY2UoLzo6L2csXCIvXCIpLnJlcGxhY2UoLyhbQS1aXSspKFtBLVpdW2Etel0pL2csXCIkMV8kMlwiKS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLFwiJDFfJDJcIikucmVwbGFjZSgvXy9nLFwiLVwiKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIGooZSl7cmV0dXJuIGUgaW4gZj9mW2VdOmZbZV09bmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2UrXCIoXFxcXHN8JClcIil9ZnVuY3Rpb24gRihlLHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmIWNbQihlKV0/dCtcInB4XCI6dH1mdW5jdGlvbiBJKGUpe3ZhciB0LG47cmV0dXJuIGFbZV18fCh0PXUuY3JlYXRlRWxlbWVudChlKSx1LmJvZHkuYXBwZW5kQ2hpbGQodCksbj1sKHQsXCJcIikuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIiksdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLG49PVwibm9uZVwiJiYobj1cImJsb2NrXCIpLGFbZV09biksYVtlXX1mdW5jdGlvbiBxKGUpe3JldHVyblwiY2hpbGRyZW5cImluIGU/cy5jYWxsKGUuY2hpbGRyZW4pOm4ubWFwKGUuY2hpbGROb2RlcyxmdW5jdGlvbihlKXtpZihlLm5vZGVUeXBlPT0xKXJldHVybiBlfSl9ZnVuY3Rpb24gUihuLHIsaSl7Zm9yKHQgaW4gcilpJiZNKHJbdF0pPyhNKG5bdF0pfHwoblt0XT17fSksUihuW3RdLHJbdF0saSkpOnJbdF0hPT1lJiYoblt0XT1yW3RdKX1mdW5jdGlvbiBVKHQscil7cmV0dXJuIHI9PT1lP24odCk6bih0KS5maWx0ZXIocil9ZnVuY3Rpb24geihlLHQsbixyKXtyZXR1cm4gQSh0KT90LmNhbGwoZSxuLHIpOnR9ZnVuY3Rpb24gVyhlLHQsbil7bj09bnVsbD9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIFgodCxuKXt2YXIgcj10LmNsYXNzTmFtZSxpPXImJnIuYmFzZVZhbCE9PWU7aWYobj09PWUpcmV0dXJuIGk/ci5iYXNlVmFsOnI7aT9yLmJhc2VWYWw9bjp0LmNsYXNzTmFtZT1ufWZ1bmN0aW9uIFYoZSl7dmFyIHQ7dHJ5e3JldHVybiBlP2U9PVwidHJ1ZVwifHwoZT09XCJmYWxzZVwiPyExOmU9PVwibnVsbFwiP251bGw6aXNOYU4odD1OdW1iZXIoZSkpPy9eW1xcW1xce10vLnRlc3QoZSk/bi5wYXJzZUpTT04oZSk6ZTp0KTplfWNhdGNoKHIpe3JldHVybiBlfX1mdW5jdGlvbiAkKGUsdCl7dChlKTtmb3IodmFyIG4gaW4gZS5jaGlsZE5vZGVzKSQoZS5jaGlsZE5vZGVzW25dLHQpfXZhciBlLHQsbixyLGk9W10scz1pLnNsaWNlLG89aS5maWx0ZXIsdT13aW5kb3cuZG9jdW1lbnQsYT17fSxmPXt9LGw9dS5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlLGM9e1wiY29sdW1uLWNvdW50XCI6MSxjb2x1bW5zOjEsXCJmb250LXdlaWdodFwiOjEsXCJsaW5lLWhlaWdodFwiOjEsb3BhY2l0eToxLFwiei1pbmRleFwiOjEsem9vbToxfSxoPS9eXFxzKjwoXFx3K3whKVtePl0qPi8scD0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vaWcsZD0vXig/OmJvZHl8aHRtbCkkL2ksdj1bXCJ2YWxcIixcImNzc1wiLFwiaHRtbFwiLFwidGV4dFwiLFwiZGF0YVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2Zmc2V0XCJdLG09W1wiYWZ0ZXJcIixcInByZXBlbmRcIixcImJlZm9yZVwiLFwiYXBwZW5kXCJdLGc9dS5jcmVhdGVFbGVtZW50KFwidGFibGVcIikseT11LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxiPXt0cjp1LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSx0Ym9keTpnLHRoZWFkOmcsdGZvb3Q6Zyx0ZDp5LHRoOnksXCIqXCI6dS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfSx3PS9jb21wbGV0ZXxsb2FkZWR8aW50ZXJhY3RpdmUvLEU9L15cXC4oW1xcdy1dKykkLyxTPS9eIyhbXFx3LV0qKSQvLHg9L15bXFx3LV0rJC8sVD17fS50b1N0cmluZyxOPXt9LEMsayxMPXUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gTi5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7aWYoIWV8fGUubm9kZVR5cGUhPT0xKXJldHVybiExO3ZhciBuPWUud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yfHxlLm1hdGNoZXNTZWxlY3RvcjtpZihuKXJldHVybiBuLmNhbGwoZSx0KTt2YXIgcixpPWUucGFyZW50Tm9kZSxzPSFpO3JldHVybiBzJiYoaT1MKS5hcHBlbmRDaGlsZChlKSxyPX5OLnFzYShpLHQpLmluZGV4T2YoZSkscyYmTC5yZW1vdmVDaGlsZChlKSxyfSxDPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLy0rKC4pPy9nLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/dC50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0saz1mdW5jdGlvbihlKXtyZXR1cm4gby5jYWxsKGUsZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5pbmRleE9mKHQpPT1ufSl9LE4uZnJhZ21lbnQ9ZnVuY3Rpb24odCxyLGkpe3QucmVwbGFjZSYmKHQ9dC5yZXBsYWNlKHAsXCI8JDE+PC8kMj5cIikpLHI9PT1lJiYocj1oLnRlc3QodCkmJlJlZ0V4cC4kMSksciBpbiBifHwocj1cIipcIik7dmFyIG8sdSxhPWJbcl07cmV0dXJuIGEuaW5uZXJIVE1MPVwiXCIrdCx1PW4uZWFjaChzLmNhbGwoYS5jaGlsZE5vZGVzKSxmdW5jdGlvbigpe2EucmVtb3ZlQ2hpbGQodGhpcyl9KSxNKGkpJiYobz1uKHUpLG4uZWFjaChpLGZ1bmN0aW9uKGUsdCl7di5pbmRleE9mKGUpPi0xP29bZV0odCk6by5hdHRyKGUsdCl9KSksdX0sTi5aPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZXx8W10sZS5fX3Byb3RvX189YXJndW1lbnRzLmNhbGxlZS5wcm90b3R5cGUsZS5zZWxlY3Rvcj10fHxcIlwiLGV9LE4uaXNaPWZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgTi5afSxOLmluaXQ9ZnVuY3Rpb24odCxyKXtpZighdClyZXR1cm4gTi5aKCk7aWYoQSh0KSlyZXR1cm4gbih1KS5yZWFkeSh0KTtpZihOLmlzWih0KSlyZXR1cm4gdDt2YXIgaTtpZihfKHQpKWk9UCh0KTtlbHNlIGlmKE8odCkpaT1bTSh0KT9uLmV4dGVuZCh7fSx0KTp0XSx0PW51bGw7ZWxzZSBpZihoLnRlc3QodCkpaT1OLmZyYWdtZW50KHQudHJpbSgpLFJlZ0V4cC4kMSxyKSx0PW51bGw7ZWxzZXtpZihyIT09ZSlyZXR1cm4gbihyKS5maW5kKHQpO2k9Ti5xc2EodSx0KX1yZXR1cm4gTi5aKGksdCl9LG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4gTi5pbml0KGUsdCl9LG4uZXh0ZW5kPWZ1bmN0aW9uKGUpe3ZhciB0LG49cy5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gdHlwZW9mIGU9PVwiYm9vbGVhblwiJiYodD1lLGU9bi5zaGlmdCgpKSxuLmZvckVhY2goZnVuY3Rpb24obil7UihlLG4sdCl9KSxlfSxOLnFzYT1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybiBlPT09dSYmUy50ZXN0KHQpPyhuPWUuZ2V0RWxlbWVudEJ5SWQoUmVnRXhwLiQxKSk/W25dOltdOmUubm9kZVR5cGUhPT0xJiZlLm5vZGVUeXBlIT09OT9bXTpzLmNhbGwoRS50ZXN0KHQpP2UuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShSZWdFeHAuJDEpOngudGVzdCh0KT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpOmUucXVlcnlTZWxlY3RvckFsbCh0KSl9LG4uY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSE9PXQmJmUuY29udGFpbnModCl9LG4uaXNGdW5jdGlvbj1BLG4uaXNPYmplY3Q9TyxuLmlzQXJyYXk9XyxuLmlzUGxhaW5PYmplY3Q9TSxuLmluQXJyYXk9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBpLmluZGV4T2YuY2FsbCh0LGUsbil9LG4uY2FtZWxDYXNlPUMsbi50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBlLnRyaW0oKX0sbi51dWlkPTAsbi5zdXBwb3J0PXt9LG4uZXhwcj17fSxuLm1hcD1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saSxzO2lmKEQoZSkpZm9yKGk9MDtpPGUubGVuZ3RoO2krKyluPXQoZVtpXSxpKSxuIT1udWxsJiZyLnB1c2gobik7ZWxzZSBmb3IocyBpbiBlKW49dChlW3NdLHMpLG4hPW51bGwmJnIucHVzaChuKTtyZXR1cm4gSChyKX0sbi5lYWNoPWZ1bmN0aW9uKGUsdCl7dmFyIG4scjtpZihEKGUpKXtmb3Iobj0wO248ZS5sZW5ndGg7bisrKWlmKHQuY2FsbChlW25dLG4sZVtuXSk9PT0hMSlyZXR1cm4gZX1lbHNlIGZvcihyIGluIGUpaWYodC5jYWxsKGVbcl0scixlW3JdKT09PSExKXJldHVybiBlO3JldHVybiBlfSxuLmdyZXA9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gby5jYWxsKGUsdCl9LHdpbmRvdy5KU09OJiYobi5wYXJzZUpTT049SlNPTi5wYXJzZSksbi5mbj17Zm9yRWFjaDppLmZvckVhY2gscmVkdWNlOmkucmVkdWNlLHB1c2g6aS5wdXNoLHNvcnQ6aS5zb3J0LGluZGV4T2Y6aS5pbmRleE9mLGNvbmNhdDppLmNvbmNhdCxtYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIG4obi5tYXAodGhpcyxmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuLHQpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiBuKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0scmVhZHk6ZnVuY3Rpb24oZSl7cmV0dXJuIHcudGVzdCh1LnJlYWR5U3RhdGUpP2Uobik6dS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7ZShuKX0sITEpLHRoaXN9LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gdD09PWU/cy5jYWxsKHRoaXMpOnRoaXNbdF19LHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMucGFyZW50Tm9kZSE9bnVsbCYmdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpfSl9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbih0LG4pe2UuY2FsbCh0LG4sdCl9KSx0aGlzfSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIEEoZSk/dGhpcy5ub3QodGhpcy5ub3QoZSkpOm4oby5jYWxsKHRoaXMsZnVuY3Rpb24odCl7cmV0dXJuIE4ubWF0Y2hlcyh0LGUpfSkpfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbihrKHRoaXMuY29uY2F0KG4oZSx0KSkpKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGVuZ3RoPjAmJk4ubWF0Y2hlcyh0aGlzWzBdLGUpfSxub3Q6ZnVuY3Rpb24odCl7dmFyIHI9W107aWYoQSh0KSYmdC5jYWxsIT09ZSl0aGlzLmVhY2goZnVuY3Rpb24oZSl7dC5jYWxsKHRoaXMsZSl8fHIucHVzaCh0aGlzKX0pO2Vsc2V7dmFyIGk9dHlwZW9mIHQ9PVwic3RyaW5nXCI/dGhpcy5maWx0ZXIodCk6RCh0KSYmQSh0Lml0ZW0pP3MuY2FsbCh0KTpuKHQpO3RoaXMuZm9yRWFjaChmdW5jdGlvbihlKXtpLmluZGV4T2YoZSk8MCYmci5wdXNoKGUpfSl9cmV0dXJuIG4ocil9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gTyhlKT9uLmNvbnRhaW5zKHRoaXMsZSk6bih0aGlzKS5maW5kKGUpLnNpemUoKX0pfSxlcTpmdW5jdGlvbihlKXtyZXR1cm4gZT09PS0xP3RoaXMuc2xpY2UoZSk6dGhpcy5zbGljZShlLCtlKzEpfSxmaXJzdDpmdW5jdGlvbigpe3ZhciBlPXRoaXNbMF07cmV0dXJuIGUmJiFPKGUpP2U6bihlKX0sbGFzdDpmdW5jdGlvbigpe3ZhciBlPXRoaXNbdGhpcy5sZW5ndGgtMV07cmV0dXJuIGUmJiFPKGUpP2U6bihlKX0sZmluZDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpcy5sZW5ndGg9PTE/dD1uKE4ucXNhKHRoaXNbMF0sZSkpOnQ9dGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gTi5xc2EodGhpcyxlKX0pLHR9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzWzBdO3doaWxlKHImJiFOLm1hdGNoZXMocixlKSlyPXIhPT10JiZyIT09dSYmci5wYXJlbnROb2RlO3JldHVybiBuKHIpfSxwYXJlbnRzOmZ1bmN0aW9uKGUpe3ZhciB0PVtdLHI9dGhpczt3aGlsZShyLmxlbmd0aD4wKXI9bi5tYXAocixmdW5jdGlvbihlKXtpZigoZT1lLnBhcmVudE5vZGUpJiZlIT09dSYmdC5pbmRleE9mKGUpPDApcmV0dXJuIHQucHVzaChlKSxlfSk7cmV0dXJuIFUodCxlKX0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiBVKGsodGhpcy5wbHVjayhcInBhcmVudE5vZGVcIikpLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVSh0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBxKHRoaXMpfSksZSl9LGNvbnRlbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzLmNoaWxkTm9kZXMpfSl9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBVKHRoaXMubWFwKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG8uY2FsbChxKHQucGFyZW50Tm9kZSksZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT10fSl9KSxlKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5pbm5lckhUTUw9XCJcIn0pfSxwbHVjazpmdW5jdGlvbihlKXtyZXR1cm4gbi5tYXAodGhpcyxmdW5jdGlvbih0KXtyZXR1cm4gdFtlXX0pfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuc3R5bGUuZGlzcGxheT09XCJub25lXCImJih0aGlzLnN0eWxlLmRpc3BsYXk9bnVsbCksbCh0aGlzLFwiXCIpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpPT1cIm5vbmVcIiYmKHRoaXMuc3R5bGUuZGlzcGxheT1JKHRoaXMubm9kZU5hbWUpKX0pfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5iZWZvcmUoZSkucmVtb3ZlKCl9LHdyYXA6ZnVuY3Rpb24oZSl7dmFyIHQ9QShlKTtpZih0aGlzWzBdJiYhdCl2YXIgcj1uKGUpLmdldCgwKSxpPXIucGFyZW50Tm9kZXx8dGhpcy5sZW5ndGg+MTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHMpe24odGhpcykud3JhcEFsbCh0P2UuY2FsbCh0aGlzLHMpOmk/ci5jbG9uZU5vZGUoITApOnIpfSl9LHdyYXBBbGw6ZnVuY3Rpb24oZSl7aWYodGhpc1swXSl7bih0aGlzWzBdKS5iZWZvcmUoZT1uKGUpKTt2YXIgdDt3aGlsZSgodD1lLmNoaWxkcmVuKCkpLmxlbmd0aCllPXQuZmlyc3QoKTtuKGUpLmFwcGVuZCh0aGlzKX1yZXR1cm4gdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGUpe3ZhciB0PUEoZSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihyKXt2YXIgaT1uKHRoaXMpLHM9aS5jb250ZW50cygpLG89dD9lLmNhbGwodGhpcyxyKTplO3MubGVuZ3RoP3Mud3JhcEFsbChvKTppLmFwcGVuZChvKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bih0aGlzKS5yZXBsYWNlV2l0aChuKHRoaXMpLmNoaWxkcmVuKCkpfSksdGhpc30sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbG9uZU5vZGUoITApfSl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpfSx0b2dnbGU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciByPW4odGhpcyk7KHQ9PT1lP3IuY3NzKFwiZGlzcGxheVwiKT09XCJub25lXCI6dCk/ci5zaG93KCk6ci5oaWRlKCl9KX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gbih0aGlzLnBsdWNrKFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKSkuZmlsdGVyKGV8fFwiKlwiKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gbih0aGlzLnBsdWNrKFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpKS5maWx0ZXIoZXx8XCIqXCIpfSxodG1sOmZ1bmN0aW9uKHQpe3JldHVybiB0PT09ZT90aGlzLmxlbmd0aD4wP3RoaXNbMF0uaW5uZXJIVE1MOm51bGw6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciByPXRoaXMuaW5uZXJIVE1MO24odGhpcykuZW1wdHkoKS5hcHBlbmQoeih0aGlzLHQsZSxyKSl9KX0sdGV4dDpmdW5jdGlvbih0KXtyZXR1cm4gdD09PWU/dGhpcy5sZW5ndGg+MD90aGlzWzBdLnRleHRDb250ZW50Om51bGw6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy50ZXh0Q29udGVudD10fSl9LGF0dHI6ZnVuY3Rpb24obixyKXt2YXIgaTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJnI9PT1lP3RoaXMubGVuZ3RoPT0wfHx0aGlzWzBdLm5vZGVUeXBlIT09MT9lOm49PVwidmFsdWVcIiYmdGhpc1swXS5ub2RlTmFtZT09XCJJTlBVVFwiP3RoaXMudmFsKCk6IShpPXRoaXNbMF0uZ2V0QXR0cmlidXRlKG4pKSYmbiBpbiB0aGlzWzBdP3RoaXNbMF1bbl06aTp0aGlzLmVhY2goZnVuY3Rpb24oZSl7aWYodGhpcy5ub2RlVHlwZSE9PTEpcmV0dXJuO2lmKE8obikpZm9yKHQgaW4gbilXKHRoaXMsdCxuW3RdKTtlbHNlIFcodGhpcyxuLHoodGhpcyxyLGUsdGhpcy5nZXRBdHRyaWJ1dGUobikpKX0pfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLm5vZGVUeXBlPT09MSYmVyh0aGlzLGUpfSl9LHByb3A6ZnVuY3Rpb24odCxuKXtyZXR1cm4gbj09PWU/dGhpc1swXT90aGlzWzBdW3RdOmU6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3RoaXNbdF09eih0aGlzLG4sZSx0aGlzW3RdKX0pfSxkYXRhOmZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5hdHRyKFwiZGF0YS1cIitCKHQpLG4pO3JldHVybiByIT09bnVsbD9WKHIpOmV9LHZhbDpmdW5jdGlvbih0KXtyZXR1cm4gdD09PWU/dGhpcy5sZW5ndGg+MD90aGlzWzBdLm11bHRpcGxlP24odGhpc1swXSkuZmluZChcIm9wdGlvblwiKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2VsZWN0ZWR9KS5wbHVjayhcInZhbHVlXCIpOnRoaXNbMF0udmFsdWU6ZTp0aGlzLmVhY2goZnVuY3Rpb24oZSl7dGhpcy52YWx1ZT16KHRoaXMsdCxlLHRoaXMudmFsdWUpfSl9LG9mZnNldDpmdW5jdGlvbigpe2lmKHRoaXMubGVuZ3RoPT0wKXJldHVybiBudWxsO3ZhciBlPXRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJue2xlZnQ6ZS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCx0b3A6ZS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0LHdpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fX0sY3NzOmZ1bmN0aW9uKG4scil7aWYoYXJndW1lbnRzLmxlbmd0aDwyJiZ0eXBlb2Ygbj09XCJzdHJpbmdcIilyZXR1cm4gdGhpcy5sZW5ndGg9PTA/ZTp0aGlzWzBdLnN0eWxlW0MobildfHxsKHRoaXNbMF0sXCJcIikuZ2V0UHJvcGVydHlWYWx1ZShuKTt2YXIgaT1cIlwiO2Zvcih0IGluIG4pIW5bdF0mJm5bdF0hPT0wP3RoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoQih0KSl9KTppKz1CKHQpK1wiOlwiK0YodCxuW3RdKStcIjtcIjtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJighciYmciE9PTA/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShCKG4pKX0pOmk9QihuKStcIjpcIitGKG4scikpLHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuc3R5bGUuY3NzVGV4dCs9XCI7XCIraX0pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT90aGlzLmluZGV4T2YobihlKVswXSk6dGhpcy5wYXJlbnQoKS5jaGlsZHJlbigpLmluZGV4T2YodGhpc1swXSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmxlbmd0aDwxPyExOmooZSkudGVzdChYKHRoaXNbMF0pKX0sYWRkQ2xhc3M6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXtyPVtdO3ZhciBpPVgodGhpcykscz16KHRoaXMsZSx0LGkpO3Muc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihlKXtuKHRoaXMpLmhhc0NsYXNzKGUpfHxyLnB1c2goZSl9LHRoaXMpLHIubGVuZ3RoJiZYKHRoaXMsaSsoaT9cIiBcIjpcIlwiKStyLmpvaW4oXCIgXCIpKX0pfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe2lmKHQ9PT1lKXJldHVybiBYKHRoaXMsXCJcIik7cj1YKHRoaXMpLHoodGhpcyx0LG4scikuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihlKXtyPXIucmVwbGFjZShqKGUpLFwiIFwiKX0pLFgodGhpcyxyLnRyaW0oKSl9KX0sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24odCxyKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpe3ZhciBzPXoodGhpcyx0LGksWCh0aGlzKSk7KHI9PT1lPyFuKHRoaXMpLmhhc0NsYXNzKHMpOnIpP24odGhpcykuYWRkQ2xhc3Mocyk6bih0aGlzKS5yZW1vdmVDbGFzcyhzKX0pfSxzY3JvbGxUb3A6ZnVuY3Rpb24oKXtpZighdGhpcy5sZW5ndGgpcmV0dXJuO3JldHVyblwic2Nyb2xsVG9wXCJpbiB0aGlzWzBdP3RoaXNbMF0uc2Nyb2xsVG9wOnRoaXNbMF0uc2Nyb2xsWX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZighdGhpcy5sZW5ndGgpcmV0dXJuO3ZhciBlPXRoaXNbMF0sdD10aGlzLm9mZnNldFBhcmVudCgpLHI9dGhpcy5vZmZzZXQoKSxpPWQudGVzdCh0WzBdLm5vZGVOYW1lKT97dG9wOjAsbGVmdDowfTp0Lm9mZnNldCgpO3JldHVybiByLnRvcC09cGFyc2VGbG9hdChuKGUpLmNzcyhcIm1hcmdpbi10b3BcIikpfHwwLHIubGVmdC09cGFyc2VGbG9hdChuKGUpLmNzcyhcIm1hcmdpbi1sZWZ0XCIpKXx8MCxpLnRvcCs9cGFyc2VGbG9hdChuKHRbMF0pLmNzcyhcImJvcmRlci10b3Atd2lkdGhcIikpfHwwLGkubGVmdCs9cGFyc2VGbG9hdChuKHRbMF0pLmNzcyhcImJvcmRlci1sZWZ0LXdpZHRoXCIpKXx8MCx7dG9wOnIudG9wLWkudG9wLGxlZnQ6ci5sZWZ0LWkubGVmdH19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50fHx1LmJvZHk7d2hpbGUoZSYmIWQudGVzdChlLm5vZGVOYW1lKSYmbihlKS5jc3MoXCJwb3NpdGlvblwiKT09XCJzdGF0aWNcIillPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfSl9fSxbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24odCl7bi5mblt0XT1mdW5jdGlvbihyKXt2YXIgaSxzPXQucmVwbGFjZSgvLi8sZnVuY3Rpb24oZSl7cmV0dXJuIGVbMF0udG9VcHBlckNhc2UoKX0pO3JldHVybiByPT09ZT90aGlzWzBdPT13aW5kb3c/d2luZG93W1wiaW5uZXJcIitzXTp0aGlzWzBdPT11P3UuZG9jdW1lbnRFbGVtZW50W1wib2Zmc2V0XCIrc106KGk9dGhpcy5vZmZzZXQoKSkmJmlbdF06dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBpPW4odGhpcyk7aS5jc3ModCx6KHRoaXMscixlLGlbdF0oKSkpfSl9fSksbS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIHI9dCUyO24uZm5bZV09ZnVuY3Rpb24oKXt2YXIgZT1uLm1hcChhcmd1bWVudHMsZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSk/ZTpOLmZyYWdtZW50KGUpfSksaSxzPXRoaXMubGVuZ3RoPjE7cmV0dXJuIGUubGVuZ3RoPDE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24obyx1KXtpPXI/dTp1LnBhcmVudE5vZGUsdT10PT0wP3UubmV4dFNpYmxpbmc6dD09MT91LmZpcnN0Q2hpbGQ6dD09Mj91Om51bGwsZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKHMpZT1lLmNsb25lTm9kZSghMCk7ZWxzZSBpZighaSlyZXR1cm4gbihlKS5yZW1vdmUoKTskKGkuaW5zZXJ0QmVmb3JlKGUsdSksZnVuY3Rpb24oZSl7ZS5ub2RlTmFtZSE9bnVsbCYmZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpPT09XCJTQ1JJUFRcIiYmKCFlLnR5cGV8fGUudHlwZT09PVwidGV4dC9qYXZhc2NyaXB0XCIpJiYhZS5zcmMmJndpbmRvdy5ldmFsLmNhbGwod2luZG93LGUuaW5uZXJIVE1MKX0pfSl9KX0sbi5mbltyP2UrXCJUb1wiOlwiaW5zZXJ0XCIrKHQ/XCJCZWZvcmVcIjpcIkFmdGVyXCIpXT1mdW5jdGlvbih0KXtyZXR1cm4gbih0KVtlXSh0aGlzKSx0aGlzfX0pLE4uWi5wcm90b3R5cGU9bi5mbixOLnVuaXE9ayxOLmRlc2VyaWFsaXplVmFsdWU9VixuLnplcHRvPU4sbn0oKTt3aW5kb3cuWmVwdG89WmVwdG8sXCIkXCJpbiB3aW5kb3d8fCh3aW5kb3cuJD1aZXB0byksZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZS5femlkfHwoZS5femlkPXIrKyl9ZnVuY3Rpb24gdShlLHQscixpKXt0PWEodCk7aWYodC5ucyl2YXIgcz1mKHQubnMpO3JldHVybihuW28oZSldfHxbXSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlJiYoIXQuZXx8ZS5lPT10LmUpJiYoIXQubnN8fHMudGVzdChlLm5zKSkmJighcnx8byhlLmZuKT09PW8ocikpJiYoIWl8fGUuc2VsPT1pKX0pfWZ1bmN0aW9uIGEoZSl7dmFyIHQ9KFwiXCIrZSkuc3BsaXQoXCIuXCIpO3JldHVybntlOnRbMF0sbnM6dC5zbGljZSgxKS5zb3J0KCkuam9pbihcIiBcIil9fWZ1bmN0aW9uIGYoZSl7cmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpefCApXCIrZS5yZXBsYWNlKFwiIFwiLFwiIC4qID9cIikrXCIoPzogfCQpXCIpfWZ1bmN0aW9uIGwodCxuLHIpe2UuaXNPYmplY3QodCk/ZS5lYWNoKHQscik6dC5zcGxpdCgvXFxzLykuZm9yRWFjaChmdW5jdGlvbihlKXtyKGUsbil9KX1mdW5jdGlvbiBjKGUsdCl7cmV0dXJuIGUuZGVsJiYoZS5lPT1cImZvY3VzXCJ8fGUuZT09XCJibHVyXCIpfHwhIXR9ZnVuY3Rpb24gaChlKXtyZXR1cm4gc1tlXXx8ZX1mdW5jdGlvbiBwKHQscixpLHUsZixwKXt2YXIgZD1vKHQpLHY9bltkXXx8KG5bZF09W10pO2wocixpLGZ1bmN0aW9uKG4scil7dmFyIGk9YShuKTtpLmZuPXIsaS5zZWw9dSxpLmUgaW4gcyYmKHI9ZnVuY3Rpb24odCl7dmFyIG49dC5yZWxhdGVkVGFyZ2V0O2lmKCFufHxuIT09dGhpcyYmIWUuY29udGFpbnModGhpcyxuKSlyZXR1cm4gaS5mbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxpLmRlbD1mJiZmKHIsbik7dmFyIG89aS5kZWx8fHI7aS5wcm94eT1mdW5jdGlvbihlKXt2YXIgbj1vLmFwcGx5KHQsW2VdLmNvbmNhdChlLmRhdGEpKTtyZXR1cm4gbj09PSExJiYoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpLG59LGkuaT12Lmxlbmd0aCx2LnB1c2goaSksdC5hZGRFdmVudExpc3RlbmVyKGgoaS5lKSxpLnByb3h5LGMoaSxwKSl9KX1mdW5jdGlvbiBkKGUsdCxyLGkscyl7dmFyIGE9byhlKTtsKHR8fFwiXCIscixmdW5jdGlvbih0LHIpe3UoZSx0LHIsaSkuZm9yRWFjaChmdW5jdGlvbih0KXtkZWxldGUgblthXVt0LmldLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihoKHQuZSksdC5wcm94eSxjKHQscykpfSl9KX1mdW5jdGlvbiBiKHQpe3ZhciBuLHI9e29yaWdpbmFsRXZlbnQ6dH07Zm9yKG4gaW4gdCkhZy50ZXN0KG4pJiZ0W25dIT09dW5kZWZpbmVkJiYocltuXT10W25dKTtyZXR1cm4gZS5lYWNoKHksZnVuY3Rpb24oZSxuKXtyW2VdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbbl09dix0W2VdLmFwcGx5KHQsYXJndW1lbnRzKX0scltuXT1tfSkscn1mdW5jdGlvbiB3KGUpe2lmKCEoXCJkZWZhdWx0UHJldmVudGVkXCJpbiBlKSl7ZS5kZWZhdWx0UHJldmVudGVkPSExO3ZhciB0PWUucHJldmVudERlZmF1bHQ7ZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMCx0LmNhbGwodGhpcyl9fX12YXIgdD1lLnplcHRvLnFzYSxuPXt9LHI9MSxpPXt9LHM9e21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIn07aS5jbGljaz1pLm1vdXNlZG93bj1pLm1vdXNldXA9aS5tb3VzZW1vdmU9XCJNb3VzZUV2ZW50c1wiLGUuZXZlbnQ9e2FkZDpwLHJlbW92ZTpkfSxlLnByb3h5PWZ1bmN0aW9uKHQsbil7aWYoZS5pc0Z1bmN0aW9uKHQpKXt2YXIgcj1mdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX07cmV0dXJuIHIuX3ppZD1vKHQpLHJ9aWYodHlwZW9mIG49PVwic3RyaW5nXCIpcmV0dXJuIGUucHJveHkodFtuXSx0KTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0ZWQgZnVuY3Rpb25cIil9LGUuZm4uYmluZD1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtwKHRoaXMsZSx0KX0pfSxlLmZuLnVuYmluZD1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkKHRoaXMsZSx0KX0pfSxlLmZuLm9uZT1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obixyKXtwKHRoaXMsZSx0LG51bGwsZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1lLmFwcGx5KHIsYXJndW1lbnRzKTtyZXR1cm4gZChyLHQsZSksbn19KX0pfTt2YXIgdj1mdW5jdGlvbigpe3JldHVybiEwfSxtPWZ1bmN0aW9uKCl7cmV0dXJuITF9LGc9L14oW0EtWl18bGF5ZXJbWFldJCkvLHk9e3ByZXZlbnREZWZhdWx0OlwiaXNEZWZhdWx0UHJldmVudGVkXCIsc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOlwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWRcIixzdG9wUHJvcGFnYXRpb246XCJpc1Byb3BhZ2F0aW9uU3RvcHBlZFwifTtlLmZuLmRlbGVnYXRlPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkscyl7cChzLG4scix0LGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaSxvPWUoci50YXJnZXQpLmNsb3Nlc3QodCxzKS5nZXQoMCk7aWYobylyZXR1cm4gaT1lLmV4dGVuZChiKHIpLHtjdXJyZW50VGFyZ2V0Om8sbGl2ZUZpcmVkOnN9KSxuLmFwcGx5KG8sW2ldLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSkpfX0pfSl9LGUuZm4udW5kZWxlZ2F0ZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2QodGhpcyx0LG4sZSl9KX0sZS5mbi5saXZlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUodGhpcy5zZWxlY3Rvcix0LG4pLHRoaXN9LGUuZm4uZGllPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUoZG9jdW1lbnQuYm9keSkudW5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLHQsbiksdGhpc30sZS5mbi5vbj1mdW5jdGlvbih0LG4scil7cmV0dXJuIW58fGUuaXNGdW5jdGlvbihuKT90aGlzLmJpbmQodCxufHxyKTp0aGlzLmRlbGVnYXRlKG4sdCxyKX0sZS5mbi5vZmY9ZnVuY3Rpb24odCxuLHIpe3JldHVybiFufHxlLmlzRnVuY3Rpb24obik/dGhpcy51bmJpbmQodCxufHxyKTp0aGlzLnVuZGVsZWdhdGUobix0LHIpfSxlLmZuLnRyaWdnZXI9ZnVuY3Rpb24odCxuKXtpZih0eXBlb2YgdD09XCJzdHJpbmdcInx8ZS5pc1BsYWluT2JqZWN0KHQpKXQ9ZS5FdmVudCh0KTtyZXR1cm4gdyh0KSx0LmRhdGE9bix0aGlzLmVhY2goZnVuY3Rpb24oKXtcImRpc3BhdGNoRXZlbnRcImluIHRoaXMmJnRoaXMuZGlzcGF0Y2hFdmVudCh0KX0pfSxlLmZuLnRyaWdnZXJIYW5kbGVyPWZ1bmN0aW9uKHQsbil7dmFyIHIsaTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHMsbyl7cj1iKHR5cGVvZiB0PT1cInN0cmluZ1wiP2UuRXZlbnQodCk6dCksci5kYXRhPW4sci50YXJnZXQ9byxlLmVhY2godShvLHQudHlwZXx8dCksZnVuY3Rpb24oZSx0KXtpPXQucHJveHkocik7aWYoci5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXJldHVybiExfSl9KSxpfSxcImZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3JcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbih0KXtlLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiBlP3RoaXMuYmluZCh0LGUpOnRoaXMudHJpZ2dlcih0KX19KSxbXCJmb2N1c1wiLFwiYmx1clwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIGU/dGhpcy5iaW5kKHQsZSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dHJ5e3RoaXNbdF0oKX1jYXRjaChlKXt9fSksdGhpc319KSxlLkV2ZW50PWZ1bmN0aW9uKGUsdCl7dHlwZW9mIGUhPVwic3RyaW5nXCImJih0PWUsZT10LnR5cGUpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KGlbZV18fFwiRXZlbnRzXCIpLHI9ITA7aWYodClmb3IodmFyIHMgaW4gdClzPT1cImJ1YmJsZXNcIj9yPSEhdFtzXTpuW3NdPXRbc107cmV0dXJuIG4uaW5pdEV2ZW50KGUsciwhMCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfSxufX0oWmVwdG8pLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHMocyx1KXt2YXIgYT1zW2ldLGY9YSYmdFthXTtpZih1PT09dW5kZWZpbmVkKXJldHVybiBmfHxvKHMpO2lmKGYpe2lmKHUgaW4gZilyZXR1cm4gZlt1XTt2YXIgbD1yKHUpO2lmKGwgaW4gZilyZXR1cm4gZltsXX1yZXR1cm4gbi5jYWxsKGUocyksdSl9ZnVuY3Rpb24gbyhuLHMsbyl7dmFyIGE9bltpXXx8KG5baV09KytlLnV1aWQpLGY9dFthXXx8KHRbYV09dShuKSk7cmV0dXJuIHMhPT11bmRlZmluZWQmJihmW3IocyldPW8pLGZ9ZnVuY3Rpb24gdSh0KXt2YXIgbj17fTtyZXR1cm4gZS5lYWNoKHQuYXR0cmlidXRlcyxmdW5jdGlvbih0LGkpe2kubmFtZS5pbmRleE9mKFwiZGF0YS1cIik9PTAmJihuW3IoaS5uYW1lLnJlcGxhY2UoXCJkYXRhLVwiLFwiXCIpKV09ZS56ZXB0by5kZXNlcmlhbGl6ZVZhbHVlKGkudmFsdWUpKX0pLG59dmFyIHQ9e30sbj1lLmZuLmRhdGEscj1lLmNhbWVsQ2FzZSxpPWUuZXhwYW5kbz1cIlplcHRvXCIrICsobmV3IERhdGUpO2UuZm4uZGF0YT1mdW5jdGlvbih0LG4pe3JldHVybiBuPT09dW5kZWZpbmVkP2UuaXNQbGFpbk9iamVjdCh0KT90aGlzLmVhY2goZnVuY3Rpb24obixyKXtlLmVhY2godCxmdW5jdGlvbihlLHQpe28ocixlLHQpfSl9KTp0aGlzLmxlbmd0aD09MD91bmRlZmluZWQ6cyh0aGlzWzBdLHQpOnRoaXMuZWFjaChmdW5jdGlvbigpe28odGhpcyx0LG4pfSl9LGUuZm4ucmVtb3ZlRGF0YT1mdW5jdGlvbihuKXtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJihuPW4uc3BsaXQoL1xccysvKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHM9dGhpc1tpXSxvPXMmJnRbc107byYmZS5lYWNoKG4sZnVuY3Rpb24oKXtkZWxldGUgb1tyKHRoaXMpXX0pfSl9fShaZXB0byk7XG4hZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZnVuY3Rpb24odCl7dGhpcy5kZWZpbmVkPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBsb2NhbFN0b3JhZ2U7dmFyIGU9XCJnYXJsaWM6XCIrZG9jdW1lbnQuZG9tYWluK1wiPnRlc3RcIjt0cnl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZSxlKSxsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlKX1jYXRjaChpKXt0aGlzLmRlZmluZWQ9ITF9fTtlLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZSxnZXQ6ZnVuY3Rpb24odCxlKXt2YXIgaT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0KTtpZihpKXt0cnl7aT1KU09OLnBhcnNlKGkpfWNhdGNoKG4pe31yZXR1cm4gaX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZT9lOm51bGx9LGhhczpmdW5jdGlvbih0KXtyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odCk/ITA6ITF9LHNldDpmdW5jdGlvbih0LGUsaSl7cmV0dXJuXCJcIj09PWV8fGUgaW5zdGFuY2VvZiBBcnJheSYmMD09PWUubGVuZ3RoP3RoaXMuZGVzdHJveSh0KTooZT1KU09OLnN0cmluZ2lmeShlKSxsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0LGUpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2koKTohMH0sZGVzdHJveTpmdW5jdGlvbih0LGUpe3JldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UoKTohMH0sY2xlYW46ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWxvY2FsU3RvcmFnZS5sZW5ndGgtMTtlPj0wO2UtLSlcInVuZGVmaW5lZFwiPT10eXBlb2YgQXJyYXkuaW5kZXhPZiYmLTEhPT1sb2NhbFN0b3JhZ2Uua2V5KGUpLmluZGV4T2YoXCJnYXJsaWM6XCIpJiZsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2Uua2V5KGUpKTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTohMH0sY2xlYXI6ZnVuY3Rpb24odCl7cmV0dXJuIGxvY2FsU3RvcmFnZS5jbGVhcigpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOiEwfX07dmFyIGk9ZnVuY3Rpb24odCxlLGkpe3RoaXMuaW5pdChcImdhcmxpY1wiLHQsZSxpKX07aS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmksaW5pdDpmdW5jdGlvbihlLGksbixzKXt0aGlzLnR5cGU9ZSx0aGlzLiRlbGVtZW50PXQoaSksdGhpcy5vcHRpb25zPXRoaXMuZ2V0T3B0aW9ucyhzKSx0aGlzLnN0b3JhZ2U9bix0aGlzLnBhdGg9dGhpcy5vcHRpb25zLmdldFBhdGgodGhpcy4kZWxlbWVudCl8fHRoaXMuZ2V0UGF0aCgpLHRoaXMucGFyZW50Rm9ybT10aGlzLiRlbGVtZW50LmNsb3Nlc3QoXCJmb3JtXCIpLHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJnYXJsaWMtYXV0by1zYXZlXCIpLHRoaXMuZXhwaXJlc0ZsYWc9dGhpcy5vcHRpb25zLmV4cGlyZXM/KHRoaXMuJGVsZW1lbnQuZGF0YShcImV4cGlyZXNcIik/dGhpcy5wYXRoOnRoaXMuZ2V0UGF0aCh0aGlzLnBhcmVudEZvcm0pKStcIl9mbGFnXCI6ITEsdGhpcy4kZWxlbWVudC5vbih0aGlzLm9wdGlvbnMuZXZlbnRzLmpvaW4oXCIuXCIrdGhpcy50eXBlK1wiIFwiKSwhMSx0LnByb3h5KHRoaXMucGVyc2lzdCx0aGlzKSksdGhpcy5vcHRpb25zLmRlc3Ryb3kmJnQodGhpcy5wYXJlbnRGb3JtKS5vbihcInN1Ym1pdCByZXNldFwiLCExLHQucHJveHkodGhpcy5yZW1vdmUsdGhpcykpLHRoaXMucmV0cmlldmUoKX0sZ2V0T3B0aW9uczpmdW5jdGlvbihlKXtyZXR1cm4gdC5leHRlbmQoe30sdC5mblt0aGlzLnR5cGVdLmRlZmF1bHRzLGUsdGhpcy4kZWxlbWVudC5kYXRhKCkpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7dGhpcy52YWwhPT10aGlzLmdldFZhbCgpJiYodGhpcy52YWw9dGhpcy5nZXRWYWwoKSx0aGlzLm9wdGlvbnMuZXhwaXJlcyYmdGhpcy5zdG9yYWdlLnNldCh0aGlzLmV4cGlyZXNGbGFnLCgobmV3IERhdGUpLmdldFRpbWUoKSsxZTMqdGhpcy5vcHRpb25zLmV4cGlyZXMpLnRvU3RyaW5nKCkpLHRoaXMuc3RvcmFnZS5zZXQodGhpcy5wYXRoLHRoaXMuZ2V0VmFsKCkpLHRoaXMub3B0aW9ucy5vblBlcnNpc3QodGhpcy4kZWxlbWVudCx0aGlzLmdldFZhbCgpKSl9LGdldFZhbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiRlbGVtZW50LmlzKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIik/dGhpcy4kZWxlbWVudC5wcm9wKFwiY2hlY2tlZFwiKT9cImNoZWNrZWRcIjpcInVuY2hlY2tlZFwiOnRoaXMuJGVsZW1lbnQudmFsKCl9LHJldHJpZXZlOmZ1bmN0aW9uKCl7aWYodGhpcy5zdG9yYWdlLmhhcyh0aGlzLnBhdGgpKXtpZih0aGlzLm9wdGlvbnMuZXhwaXJlcyl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7aWYodGhpcy5zdG9yYWdlLmdldCh0aGlzLmV4cGlyZXNGbGFnKTx0LnRvU3RyaW5nKCkpcmV0dXJuIHZvaWQgdGhpcy5zdG9yYWdlLmRlc3Ryb3kodGhpcy5wYXRoKTt0aGlzLiRlbGVtZW50LmF0dHIoXCJleHBpcmVzLWluXCIsTWF0aC5mbG9vcigocGFyc2VJbnQodGhpcy5zdG9yYWdlLmdldCh0aGlzLmV4cGlyZXNGbGFnKSktdCkvMWUzKSl9dmFyIGU9dGhpcy5zdG9yYWdlLmdldCh0aGlzLnBhdGgpO3JldHVybiB0aGlzLm9wdGlvbnMuY29uZmxpY3RNYW5hZ2VyLmVuYWJsZWQmJnRoaXMuZGV0ZWN0Q29uZmxpY3QoKT90aGlzLmNvbmZsaWN0TWFuYWdlcigpOnRoaXMuJGVsZW1lbnQuaXMoXCJpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF1cIik/XCJjaGVja2VkXCI9PT1lfHx0aGlzLiRlbGVtZW50LnZhbCgpPT09ZT90aGlzLiRlbGVtZW50LmF0dHIoXCJjaGVja2VkXCIsITApOnZvaWQoXCJ1bmNoZWNrZWRcIj09PWUmJnRoaXMuJGVsZW1lbnQuYXR0cihcImNoZWNrZWRcIiwhMSkpOih0aGlzLiRlbGVtZW50LnZhbChlKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJpbnB1dFwiKSx2b2lkIHRoaXMub3B0aW9ucy5vblJldHJpZXZlKHRoaXMuJGVsZW1lbnQsZSkpfX0sZGV0ZWN0Q29uZmxpY3Q6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKHRoaXMuJGVsZW1lbnQuaXMoXCJpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb11cIikpcmV0dXJuITE7aWYodGhpcy4kZWxlbWVudC52YWwoKSYmdGhpcy5zdG9yYWdlLmdldCh0aGlzLnBhdGgpIT09dGhpcy4kZWxlbWVudC52YWwoKSl7aWYodGhpcy4kZWxlbWVudC5pcyhcInNlbGVjdFwiKSl7dmFyIGk9ITE7cmV0dXJuIHRoaXMuJGVsZW1lbnQuZmluZChcIm9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7cmV0dXJuIDAhPT10KHRoaXMpLmluZGV4KCkmJnQodGhpcykuYXR0cihcInNlbGVjdGVkXCIpJiZ0KHRoaXMpLnZhbCgpIT09ZS5zdG9yYWdlLmdldCh0aGlzLnBhdGgpP3ZvaWQoaT0hMCk6dm9pZCAwfSksaX1yZXR1cm4hMH1yZXR1cm4hMX0sY29uZmxpY3RNYW5hZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZsaWN0TWFuYWdlci5vbkNvbmZsaWN0RGV0ZWN0ZWR8fHRoaXMub3B0aW9ucy5jb25mbGljdE1hbmFnZXIub25Db25mbGljdERldGVjdGVkKHRoaXMuJGVsZW1lbnQsdGhpcy5zdG9yYWdlLmdldCh0aGlzLnBhdGgpKT8odGhpcy5vcHRpb25zLmNvbmZsaWN0TWFuYWdlci5nYXJsaWNQcmlvcml0eT8odGhpcy4kZWxlbWVudC5kYXRhKFwic3dhcC1kYXRhXCIsdGhpcy4kZWxlbWVudC52YWwoKSksdGhpcy4kZWxlbWVudC5kYXRhKFwic3dhcC1zdGF0ZVwiLFwiZ2FybGljXCIpLHRoaXMuJGVsZW1lbnQudmFsKHRoaXMuc3RvcmFnZS5nZXQodGhpcy5wYXRoKSkpOih0aGlzLiRlbGVtZW50LmRhdGEoXCJzd2FwLWRhdGFcIix0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMucGF0aCkpLHRoaXMuJGVsZW1lbnQuZGF0YShcInN3YXAtc3RhdGVcIixcImRlZmF1bHRcIikpLHRoaXMuc3dhcEhhbmRsZXIoKSx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiZ2FybGljLWNvbmZsaWN0LWRldGVjdGVkXCIpLHZvaWQgdGhpcy4kZWxlbWVudC5jbG9zZXN0KFwiaW5wdXRbdHlwZT1zdWJtaXRdXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCEwKSk6ITF9LHN3YXBIYW5kbGVyOmZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzLm9wdGlvbnMuY29uZmxpY3RNYW5hZ2VyLnRlbXBsYXRlKTt0aGlzLiRlbGVtZW50LmFmdGVyKGUudGV4dCh0aGlzLm9wdGlvbnMuY29uZmxpY3RNYW5hZ2VyLm1lc3NhZ2UpKSxlLm9uKFwiY2xpY2tcIiwhMSx0LnByb3h5KHRoaXMuc3dhcCx0aGlzKSl9LHN3YXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRlbGVtZW50LmRhdGEoXCJzd2FwLWRhdGFcIik7dGhpcy4kZWxlbWVudC5kYXRhKFwic3dhcC1zdGF0ZVwiLFwiZ2FybGljXCI9PT10aGlzLiRlbGVtZW50LmRhdGEoXCJzd2FwLXN0YXRlXCIpP1wiZGVmYXVsdFwiOlwiZ2FybGljXCIpLHRoaXMuJGVsZW1lbnQuZGF0YShcInN3YXAtZGF0YVwiLHRoaXMuJGVsZW1lbnQudmFsKCkpLHQodGhpcy4kZWxlbWVudCkudmFsKGUpLHRoaXMub3B0aW9ucy5vblN3YXAodGhpcy4kZWxlbWVudCx0aGlzLiRlbGVtZW50LmRhdGEoXCJzd2FwLWRhdGFcIiksZSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnN0b3JhZ2UuZGVzdHJveSh0aGlzLnBhdGgpfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZXN0cm95KCksdGhpcy4kZWxlbWVudC5pcyhcImlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiKT92b2lkIHQodGhpcy4kZWxlbWVudCkuYXR0cihcImNoZWNrZWRcIiwhMSk6dm9pZCB0aGlzLiRlbGVtZW50LnZhbChcIlwiKX0sZ2V0UGF0aDpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKGU9dGhpcy4kZWxlbWVudCksdGhpcy5vcHRpb25zLmdldFBhdGgoZSkpcmV0dXJuIHRoaXMub3B0aW9ucy5nZXRQYXRoKGUpO2lmKDEhPWUubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgaT1cIlwiLG49ZS5pcyhcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpLHM9ZTtzLmxlbmd0aDspe3ZhciBhPXNbMF0sbz1hLm5vZGVOYW1lO2lmKCFvKWJyZWFrO289by50b0xvd2VyQ2FzZSgpO3ZhciByPXMucGFyZW50KCksaD1yLmNoaWxkcmVuKG8pO2lmKHQoYSkuaXMoXCJmb3JtLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKXx8bil7aWYobys9dChhKS5hdHRyKFwibmFtZVwiKT9cIi5cIit0KGEpLmF0dHIoXCJuYW1lXCIpOlwiXCIsaC5sZW5ndGg+MSYmIXQoYSkuaXMoXCJpbnB1dFt0eXBlPXJhZGlvXVwiKSYmKG8rPVwiOmVxKFwiK2guaW5kZXgoYSkrXCIpXCIpLGk9bysoaT9cIj5cIitpOlwiXCIpLFwiZm9ybVwiPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpYnJlYWs7cz1yfWVsc2Ugcz1yfXJldHVyblwiZ2FybGljOlwiK2RvY3VtZW50LmRvbWFpbisodGhpcy5vcHRpb25zLmRvbWFpbj9cIipcIjp3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpK1wiPlwiK2l9LGdldFN0b3JhZ2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdG9yYWdlfX0sdC5mbi5nYXJsaWM9ZnVuY3Rpb24obixzKXtmdW5jdGlvbiBhKGUpe3ZhciBzPXQoZSksYT1zLmRhdGEoXCJnYXJsaWNcIiksaD10LmV4dGVuZCh7fSxvLHMuZGF0YSgpKTtpZigoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGguc3RvcmFnZXx8aC5zdG9yYWdlKSYmXCJwYXNzd29yZFwiIT09dChlKS5hdHRyKFwidHlwZVwiKSlyZXR1cm4gYXx8cy5kYXRhKFwiZ2FybGljXCIsYT1uZXcgaShlLHIsaCkpLFwic3RyaW5nXCI9PXR5cGVvZiBuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhW25dP2Fbbl0oKTp2b2lkIDB9dmFyIG89dC5leHRlbmQoITAse30sdC5mbi5nYXJsaWMuZGVmYXVsdHMsbix0aGlzLmRhdGEoKSkscj1uZXcgZSxoPSExO3JldHVybiByLmRlZmluZWQ/KHRoaXMuZWFjaChmdW5jdGlvbigpe2lmKHQodGhpcykuaXMoXCJmb3JtXCIpKXQodGhpcykuZmluZChvLmlucHV0cykuZWFjaChmdW5jdGlvbigpe3QodGhpcykuaXMoby5leGNsdWRlZCl8fChoPWEodCh0aGlzKSkpfSk7ZWxzZSBpZih0KHRoaXMpLmlzKG8uaW5wdXRzKSl7aWYodCh0aGlzKS5pcyhvLmV4Y2x1ZGVkKSlyZXR1cm47aD1hKHQodGhpcykpfX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIHM/cygpOmgpOiExfSx0LmZuLmdhcmxpYy5Db25zdHJ1Y3Rvcj1pLHQuZm4uZ2FybGljLmRlZmF1bHRzPXtkZXN0cm95OiEwLGlucHV0czpcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIsZXhjbHVkZWQ6J2lucHV0W3R5cGU9XCJmaWxlXCJdLCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0nLGV2ZW50czpbXCJET01BdHRyTW9kaWZpZWRcIixcInRleHRJbnB1dFwiLFwiaW5wdXRcIixcImNoYW5nZVwiLFwiY2xpY2tcIixcImtleXByZXNzXCIsXCJwYXN0ZVwiLFwiZm9jdXNcIl0sZG9tYWluOiExLGV4cGlyZXM6ITEsY29uZmxpY3RNYW5hZ2VyOntlbmFibGVkOiExLGdhcmxpY1ByaW9yaXR5OiEwLHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cImdhcmxpYy1zd2FwXCI+PC9zcGFuPicsbWVzc2FnZTpcIlRoaXMgaXMgeW91ciBzYXZlZCBkYXRhLiBDbGljayBoZXJlIHRvIHNlZSBkZWZhdWx0IG9uZVwiLG9uQ29uZmxpY3REZXRlY3RlZDpmdW5jdGlvbih0LGUpe3JldHVybiEwfX0sZ2V0UGF0aDpmdW5jdGlvbih0KXt9LG9uUmV0cmlldmU6ZnVuY3Rpb24odCxlKXt9LG9uUGVyc2lzdDpmdW5jdGlvbih0LGUpe30sb25Td2FwOmZ1bmN0aW9uKHQsZSxpKXt9fSx0KHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXt0KCdbZGF0YS1wZXJzaXN0PVwiZ2FybGljXCJdJykuZWFjaChmdW5jdGlvbigpe3QodGhpcykuZ2FybGljKCl9KX0pfSh3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG8pO1xuIl0sImZpbGUiOiJnYXJsaWMtc3RhbmRhbG9uZS5taW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {

							// Insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null || element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {

				// Set form expando on contenteditable
				if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				if ( obj[ i ] ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( element.hasAttribute( "contenteditable" ) ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			// If a normalizer is defined for this element, then
			// call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( typeof rules.normalizer === "function" ) {
				val = rules.normalizer.call( element, val );

				if ( typeof val !== "string" ) {
					throw new TypeError( "The normalizer should return a string value." );
				}

				// Delete the normalizer from rules to avoid treating
				// it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcXVlcnkudmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgVmFsaWRhdGlvbiBQbHVnaW4gdjEuMTYuMFxuICpcbiAqIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSsO2cm4gWmFlZmZlcmVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXHRcdGRlZmluZSggW1wianF1ZXJ5XCJdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggcmVxdWlyZSggXCJqcXVlcnlcIiApICk7XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0oZnVuY3Rpb24oICQgKSB7XG5cbiQuZXh0ZW5kKCAkLmZuLCB7XG5cblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3ZhbGlkYXRlL1xuXHR2YWxpZGF0ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBJZiBub3RoaW5nIGlzIHNlbGVjdGVkLCByZXR1cm4gbm90aGluZzsgY2FuJ3QgY2hhaW4gYW55d2F5XG5cdFx0aWYgKCAhdGhpcy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCBcIk5vdGhpbmcgc2VsZWN0ZWQsIGNhbid0IHZhbGlkYXRlLCByZXR1cm5pbmcgbm90aGluZy5cIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGlmIGEgdmFsaWRhdG9yIGZvciB0aGlzIGZvcm0gd2FzIGFscmVhZHkgY3JlYXRlZFxuXHRcdHZhciB2YWxpZGF0b3IgPSAkLmRhdGEoIHRoaXNbIDAgXSwgXCJ2YWxpZGF0b3JcIiApO1xuXHRcdGlmICggdmFsaWRhdG9yICkge1xuXHRcdFx0cmV0dXJuIHZhbGlkYXRvcjtcblx0XHR9XG5cblx0XHQvLyBBZGQgbm92YWxpZGF0ZSB0YWcgaWYgSFRNTDUuXG5cdFx0dGhpcy5hdHRyKCBcIm5vdmFsaWRhdGVcIiwgXCJub3ZhbGlkYXRlXCIgKTtcblxuXHRcdHZhbGlkYXRvciA9IG5ldyAkLnZhbGlkYXRvciggb3B0aW9ucywgdGhpc1sgMCBdICk7XG5cdFx0JC5kYXRhKCB0aGlzWyAwIF0sIFwidmFsaWRhdG9yXCIsIHZhbGlkYXRvciApO1xuXG5cdFx0aWYgKCB2YWxpZGF0b3Iuc2V0dGluZ3Mub25zdWJtaXQgKSB7XG5cblx0XHRcdHRoaXMub24oIFwiY2xpY2sudmFsaWRhdGVcIiwgXCI6c3VibWl0XCIsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0aWYgKCB2YWxpZGF0b3Iuc2V0dGluZ3Muc3VibWl0SGFuZGxlciApIHtcblx0XHRcdFx0XHR2YWxpZGF0b3Iuc3VibWl0QnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWxsb3cgc3VwcHJlc3NpbmcgdmFsaWRhdGlvbiBieSBhZGRpbmcgYSBjYW5jZWwgY2xhc3MgdG8gdGhlIHN1Ym1pdCBidXR0b25cblx0XHRcdFx0aWYgKCAkKCB0aGlzICkuaGFzQ2xhc3MoIFwiY2FuY2VsXCIgKSApIHtcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFsbG93IHN1cHByZXNzaW5nIHZhbGlkYXRpb24gYnkgYWRkaW5nIHRoZSBodG1sNSBmb3Jtbm92YWxpZGF0ZSBhdHRyaWJ1dGUgdG8gdGhlIHN1Ym1pdCBidXR0b25cblx0XHRcdFx0aWYgKCAkKCB0aGlzICkuYXR0ciggXCJmb3Jtbm92YWxpZGF0ZVwiICkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBWYWxpZGF0ZSB0aGUgZm9ybSBvbiBzdWJtaXRcblx0XHRcdHRoaXMub24oIFwic3VibWl0LnZhbGlkYXRlXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0aWYgKCB2YWxpZGF0b3Iuc2V0dGluZ3MuZGVidWcgKSB7XG5cblx0XHRcdFx0XHQvLyBQcmV2ZW50IGZvcm0gc3VibWl0IHRvIGJlIGFibGUgdG8gc2VlIGNvbnNvbGUgb3V0cHV0XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jdGlvbiBoYW5kbGUoKSB7XG5cdFx0XHRcdFx0dmFyIGhpZGRlbiwgcmVzdWx0O1xuXHRcdFx0XHRcdGlmICggdmFsaWRhdG9yLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHZhbGlkYXRvci5zdWJtaXRCdXR0b24gKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gSW5zZXJ0IGEgaGlkZGVuIGlucHV0IGFzIGEgcmVwbGFjZW1lbnQgZm9yIHRoZSBtaXNzaW5nIHN1Ym1pdCBidXR0b25cblx0XHRcdFx0XHRcdFx0aGlkZGVuID0gJCggXCI8aW5wdXQgdHlwZT0naGlkZGVuJy8+XCIgKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCBcIm5hbWVcIiwgdmFsaWRhdG9yLnN1Ym1pdEJ1dHRvbi5uYW1lIClcblx0XHRcdFx0XHRcdFx0XHQudmFsKCAkKCB2YWxpZGF0b3Iuc3VibWl0QnV0dG9uICkudmFsKCkgKVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyggdmFsaWRhdG9yLmN1cnJlbnRGb3JtICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSB2YWxpZGF0b3Iuc2V0dGluZ3Muc3VibWl0SGFuZGxlci5jYWxsKCB2YWxpZGF0b3IsIHZhbGlkYXRvci5jdXJyZW50Rm9ybSwgZXZlbnQgKTtcblx0XHRcdFx0XHRcdGlmICggdmFsaWRhdG9yLnN1Ym1pdEJ1dHRvbiApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBbmQgY2xlYW4gdXAgYWZ0ZXJ3YXJkczsgdGhhbmtzIHRvIG5vLWJsb2NrLXNjb3BlLCBoaWRkZW4gY2FuIGJlIHJlZmVyZW5jZWRcblx0XHRcdFx0XHRcdFx0aGlkZGVuLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCByZXN1bHQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcmV2ZW50IHN1Ym1pdCBmb3IgaW52YWxpZCBmb3JtcyBvciBjdXN0b20gc3VibWl0IGhhbmRsZXJzXG5cdFx0XHRcdGlmICggdmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCApIHtcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggdmFsaWRhdG9yLmZvcm0oKSApIHtcblx0XHRcdFx0XHRpZiAoIHZhbGlkYXRvci5wZW5kaW5nUmVxdWVzdCApIHtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5mb3JtU3VibWl0dGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbGlkYXRvci5mb2N1c0ludmFsaWQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsaWRhdG9yO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy92YWxpZC9cblx0dmFsaWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB2YWxpZCwgdmFsaWRhdG9yLCBlcnJvckxpc3Q7XG5cblx0XHRpZiAoICQoIHRoaXNbIDAgXSApLmlzKCBcImZvcm1cIiApICkge1xuXHRcdFx0dmFsaWQgPSB0aGlzLnZhbGlkYXRlKCkuZm9ybSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvckxpc3QgPSBbXTtcblx0XHRcdHZhbGlkID0gdHJ1ZTtcblx0XHRcdHZhbGlkYXRvciA9ICQoIHRoaXNbIDAgXS5mb3JtICkudmFsaWRhdGUoKTtcblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhbGlkID0gdmFsaWRhdG9yLmVsZW1lbnQoIHRoaXMgKSAmJiB2YWxpZDtcblx0XHRcdFx0aWYgKCAhdmFsaWQgKSB7XG5cdFx0XHRcdFx0ZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmNvbmNhdCggdmFsaWRhdG9yLmVycm9yTGlzdCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHR2YWxpZGF0b3IuZXJyb3JMaXN0ID0gZXJyb3JMaXN0O1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH0sXG5cblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3J1bGVzL1xuXHRydWxlczogZnVuY3Rpb24oIGNvbW1hbmQsIGFyZ3VtZW50ICkge1xuXHRcdHZhciBlbGVtZW50ID0gdGhpc1sgMCBdLFxuXHRcdFx0c2V0dGluZ3MsIHN0YXRpY1J1bGVzLCBleGlzdGluZ1J1bGVzLCBkYXRhLCBwYXJhbSwgZmlsdGVyZWQ7XG5cblx0XHQvLyBJZiBub3RoaW5nIGlzIHNlbGVjdGVkLCByZXR1cm4gZW1wdHkgb2JqZWN0OyBjYW4ndCBjaGFpbiBhbnl3YXlcblx0XHRpZiAoIGVsZW1lbnQgPT0gbnVsbCB8fCBlbGVtZW50LmZvcm0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGNvbW1hbmQgKSB7XG5cdFx0XHRzZXR0aW5ncyA9ICQuZGF0YSggZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiICkuc2V0dGluZ3M7XG5cdFx0XHRzdGF0aWNSdWxlcyA9IHNldHRpbmdzLnJ1bGVzO1xuXHRcdFx0ZXhpc3RpbmdSdWxlcyA9ICQudmFsaWRhdG9yLnN0YXRpY1J1bGVzKCBlbGVtZW50ICk7XG5cdFx0XHRzd2l0Y2ggKCBjb21tYW5kICkge1xuXHRcdFx0Y2FzZSBcImFkZFwiOlxuXHRcdFx0XHQkLmV4dGVuZCggZXhpc3RpbmdSdWxlcywgJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZSggYXJndW1lbnQgKSApO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBtZXNzYWdlcyBmcm9tIHJ1bGVzLCBidXQgYWxsb3cgdGhlbSB0byBiZSBzZXQgc2VwYXJhdGVseVxuXHRcdFx0XHRkZWxldGUgZXhpc3RpbmdSdWxlcy5tZXNzYWdlcztcblx0XHRcdFx0c3RhdGljUnVsZXNbIGVsZW1lbnQubmFtZSBdID0gZXhpc3RpbmdSdWxlcztcblx0XHRcdFx0aWYgKCBhcmd1bWVudC5tZXNzYWdlcyApIHtcblx0XHRcdFx0XHRzZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF0gPSAkLmV4dGVuZCggc2V0dGluZ3MubWVzc2FnZXNbIGVsZW1lbnQubmFtZSBdLCBhcmd1bWVudC5tZXNzYWdlcyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJlbW92ZVwiOlxuXHRcdFx0XHRpZiAoICFhcmd1bWVudCApIHtcblx0XHRcdFx0XHRkZWxldGUgc3RhdGljUnVsZXNbIGVsZW1lbnQubmFtZSBdO1xuXHRcdFx0XHRcdHJldHVybiBleGlzdGluZ1J1bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZpbHRlcmVkID0ge307XG5cdFx0XHRcdCQuZWFjaCggYXJndW1lbnQuc3BsaXQoIC9cXHMvICksIGZ1bmN0aW9uKCBpbmRleCwgbWV0aG9kICkge1xuXHRcdFx0XHRcdGZpbHRlcmVkWyBtZXRob2QgXSA9IGV4aXN0aW5nUnVsZXNbIG1ldGhvZCBdO1xuXHRcdFx0XHRcdGRlbGV0ZSBleGlzdGluZ1J1bGVzWyBtZXRob2QgXTtcblx0XHRcdFx0XHRpZiAoIG1ldGhvZCA9PT0gXCJyZXF1aXJlZFwiICkge1xuXHRcdFx0XHRcdFx0JCggZWxlbWVudCApLnJlbW92ZUF0dHIoIFwiYXJpYS1yZXF1aXJlZFwiICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHJldHVybiBmaWx0ZXJlZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRkYXRhID0gJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZXMoXG5cdFx0JC5leHRlbmQoXG5cdFx0XHR7fSxcblx0XHRcdCQudmFsaWRhdG9yLmNsYXNzUnVsZXMoIGVsZW1lbnQgKSxcblx0XHRcdCQudmFsaWRhdG9yLmF0dHJpYnV0ZVJ1bGVzKCBlbGVtZW50ICksXG5cdFx0XHQkLnZhbGlkYXRvci5kYXRhUnVsZXMoIGVsZW1lbnQgKSxcblx0XHRcdCQudmFsaWRhdG9yLnN0YXRpY1J1bGVzKCBlbGVtZW50IClcblx0XHQpLCBlbGVtZW50ICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgcmVxdWlyZWQgaXMgYXQgZnJvbnRcblx0XHRpZiAoIGRhdGEucmVxdWlyZWQgKSB7XG5cdFx0XHRwYXJhbSA9IGRhdGEucmVxdWlyZWQ7XG5cdFx0XHRkZWxldGUgZGF0YS5yZXF1aXJlZDtcblx0XHRcdGRhdGEgPSAkLmV4dGVuZCggeyByZXF1aXJlZDogcGFyYW0gfSwgZGF0YSApO1xuXHRcdFx0JCggZWxlbWVudCApLmF0dHIoIFwiYXJpYS1yZXF1aXJlZFwiLCBcInRydWVcIiApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSByZW1vdGUgaXMgYXQgYmFja1xuXHRcdGlmICggZGF0YS5yZW1vdGUgKSB7XG5cdFx0XHRwYXJhbSA9IGRhdGEucmVtb3RlO1xuXHRcdFx0ZGVsZXRlIGRhdGEucmVtb3RlO1xuXHRcdFx0ZGF0YSA9ICQuZXh0ZW5kKCBkYXRhLCB7IHJlbW90ZTogcGFyYW0gfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59ICk7XG5cbi8vIEN1c3RvbSBzZWxlY3RvcnNcbiQuZXh0ZW5kKCAkLmV4cHIucHNldWRvcyB8fCAkLmV4cHJbIFwiOlwiIF0sIHtcdFx0Ly8gJ3x8ICQuZXhwclsgXCI6XCIgXScgaGVyZSBlbmFibGVzIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHRvIGpRdWVyeSAxLjcuIENhbiBiZSByZW1vdmVkIHdoZW4gZHJvcHBpbmcgalEgMS43Lnggc3VwcG9ydFxuXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9ibGFuay1zZWxlY3Rvci9cblx0Ymxhbms6IGZ1bmN0aW9uKCBhICkge1xuXHRcdHJldHVybiAhJC50cmltKCBcIlwiICsgJCggYSApLnZhbCgpICk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2ZpbGxlZC1zZWxlY3Rvci9cblx0ZmlsbGVkOiBmdW5jdGlvbiggYSApIHtcblx0XHR2YXIgdmFsID0gJCggYSApLnZhbCgpO1xuXHRcdHJldHVybiB2YWwgIT09IG51bGwgJiYgISEkLnRyaW0oIFwiXCIgKyB2YWwgKTtcblx0fSxcblxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdW5jaGVja2VkLXNlbGVjdG9yL1xuXHR1bmNoZWNrZWQ6IGZ1bmN0aW9uKCBhICkge1xuXHRcdHJldHVybiAhJCggYSApLnByb3AoIFwiY2hlY2tlZFwiICk7XG5cdH1cbn0gKTtcblxuLy8gQ29uc3RydWN0b3IgZm9yIHZhbGlkYXRvclxuJC52YWxpZGF0b3IgPSBmdW5jdGlvbiggb3B0aW9ucywgZm9ybSApIHtcblx0dGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgJC52YWxpZGF0b3IuZGVmYXVsdHMsIG9wdGlvbnMgKTtcblx0dGhpcy5jdXJyZW50Rm9ybSA9IGZvcm07XG5cdHRoaXMuaW5pdCgpO1xufTtcblxuLy8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuZm9ybWF0L1xuJC52YWxpZGF0b3IuZm9ybWF0ID0gZnVuY3Rpb24oIHNvdXJjZSwgcGFyYW1zICkge1xuXHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFyZ3MgPSAkLm1ha2VBcnJheSggYXJndW1lbnRzICk7XG5cdFx0XHRhcmdzLnVuc2hpZnQoIHNvdXJjZSApO1xuXHRcdFx0cmV0dXJuICQudmFsaWRhdG9yLmZvcm1hdC5hcHBseSggdGhpcywgYXJncyApO1xuXHRcdH07XG5cdH1cblx0aWYgKCBwYXJhbXMgPT09IHVuZGVmaW5lZCApIHtcblx0XHRyZXR1cm4gc291cmNlO1xuXHR9XG5cdGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgcGFyYW1zLmNvbnN0cnVjdG9yICE9PSBBcnJheSAgKSB7XG5cdFx0cGFyYW1zID0gJC5tYWtlQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICk7XG5cdH1cblx0aWYgKCBwYXJhbXMuY29uc3RydWN0b3IgIT09IEFycmF5ICkge1xuXHRcdHBhcmFtcyA9IFsgcGFyYW1zIF07XG5cdH1cblx0JC5lYWNoKCBwYXJhbXMsIGZ1bmN0aW9uKCBpLCBuICkge1xuXHRcdHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKCBuZXcgUmVnRXhwKCBcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiApLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBuO1xuXHRcdH0gKTtcblx0fSApO1xuXHRyZXR1cm4gc291cmNlO1xufTtcblxuJC5leHRlbmQoICQudmFsaWRhdG9yLCB7XG5cblx0ZGVmYXVsdHM6IHtcblx0XHRtZXNzYWdlczoge30sXG5cdFx0Z3JvdXBzOiB7fSxcblx0XHRydWxlczoge30sXG5cdFx0ZXJyb3JDbGFzczogXCJlcnJvclwiLFxuXHRcdHBlbmRpbmdDbGFzczogXCJwZW5kaW5nXCIsXG5cdFx0dmFsaWRDbGFzczogXCJ2YWxpZFwiLFxuXHRcdGVycm9yRWxlbWVudDogXCJsYWJlbFwiLFxuXHRcdGZvY3VzQ2xlYW51cDogZmFsc2UsXG5cdFx0Zm9jdXNJbnZhbGlkOiB0cnVlLFxuXHRcdGVycm9yQ29udGFpbmVyOiAkKCBbXSApLFxuXHRcdGVycm9yTGFiZWxDb250YWluZXI6ICQoIFtdICksXG5cdFx0b25zdWJtaXQ6IHRydWUsXG5cdFx0aWdub3JlOiBcIjpoaWRkZW5cIixcblx0XHRpZ25vcmVUaXRsZTogZmFsc2UsXG5cdFx0b25mb2N1c2luOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHRoaXMubGFzdEFjdGl2ZSA9IGVsZW1lbnQ7XG5cblx0XHRcdC8vIEhpZGUgZXJyb3IgbGFiZWwgYW5kIHJlbW92ZSBlcnJvciBjbGFzcyBvbiBmb2N1cyBpZiBlbmFibGVkXG5cdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3MuZm9jdXNDbGVhbnVwICkge1xuXHRcdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKCB0aGlzLCBlbGVtZW50LCB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaGlkZVRoZXNlKCB0aGlzLmVycm9yc0ZvciggZWxlbWVudCApICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbmZvY3Vzb3V0OiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdGlmICggIXRoaXMuY2hlY2thYmxlKCBlbGVtZW50ICkgJiYgKCBlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgfHwgIXRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSApICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQoIGVsZW1lbnQgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9ua2V5dXA6IGZ1bmN0aW9uKCBlbGVtZW50LCBldmVudCApIHtcblxuXHRcdFx0Ly8gQXZvaWQgcmV2YWxpZGF0ZSB0aGUgZmllbGQgd2hlbiBwcmVzc2luZyBvbmUgb2YgdGhlIGZvbGxvd2luZyBrZXlzXG5cdFx0XHQvLyBTaGlmdCAgICAgICA9PiAxNlxuXHRcdFx0Ly8gQ3RybCAgICAgICAgPT4gMTdcblx0XHRcdC8vIEFsdCAgICAgICAgID0+IDE4XG5cdFx0XHQvLyBDYXBzIGxvY2sgICA9PiAyMFxuXHRcdFx0Ly8gRW5kICAgICAgICAgPT4gMzVcblx0XHRcdC8vIEhvbWUgICAgICAgID0+IDM2XG5cdFx0XHQvLyBMZWZ0IGFycm93ICA9PiAzN1xuXHRcdFx0Ly8gVXAgYXJyb3cgICAgPT4gMzhcblx0XHRcdC8vIFJpZ2h0IGFycm93ID0+IDM5XG5cdFx0XHQvLyBEb3duIGFycm93ICA9PiA0MFxuXHRcdFx0Ly8gSW5zZXJ0ICAgICAgPT4gNDVcblx0XHRcdC8vIE51bSBsb2NrICAgID0+IDE0NFxuXHRcdFx0Ly8gQWx0R3Iga2V5ICAgPT4gMjI1XG5cdFx0XHR2YXIgZXhjbHVkZWRLZXlzID0gW1xuXHRcdFx0XHQxNiwgMTcsIDE4LCAyMCwgMzUsIDM2LCAzNyxcblx0XHRcdFx0MzgsIDM5LCA0MCwgNDUsIDE0NCwgMjI1XG5cdFx0XHRdO1xuXG5cdFx0XHRpZiAoIGV2ZW50LndoaWNoID09PSA5ICYmIHRoaXMuZWxlbWVudFZhbHVlKCBlbGVtZW50ICkgPT09IFwiXCIgfHwgJC5pbkFycmF5KCBldmVudC5rZXlDb2RlLCBleGNsdWRlZEtleXMgKSAhPT0gLTEgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoIGVsZW1lbnQubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCB8fCBlbGVtZW50Lm5hbWUgaW4gdGhpcy5pbnZhbGlkICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQoIGVsZW1lbnQgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uY2xpY2s6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXG5cdFx0XHQvLyBDbGljayBvbiBzZWxlY3RzLCByYWRpb2J1dHRvbnMgYW5kIGNoZWNrYm94ZXNcblx0XHRcdGlmICggZWxlbWVudC5uYW1lIGluIHRoaXMuc3VibWl0dGVkICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQoIGVsZW1lbnQgKTtcblxuXHRcdFx0Ly8gT3Igb3B0aW9uIGVsZW1lbnRzLCBjaGVjayBwYXJlbnQgc2VsZWN0IGluIHRoYXQgY2FzZVxuXHRcdFx0fSBlbHNlIGlmICggZWxlbWVudC5wYXJlbnROb2RlLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCggZWxlbWVudC5wYXJlbnROb2RlICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uKCBlbGVtZW50LCBlcnJvckNsYXNzLCB2YWxpZENsYXNzICkge1xuXHRcdFx0aWYgKCBlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIiApIHtcblx0XHRcdFx0dGhpcy5maW5kQnlOYW1lKCBlbGVtZW50Lm5hbWUgKS5hZGRDbGFzcyggZXJyb3JDbGFzcyApLnJlbW92ZUNsYXNzKCB2YWxpZENsYXNzICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCBlbGVtZW50ICkuYWRkQ2xhc3MoIGVycm9yQ2xhc3MgKS5yZW1vdmVDbGFzcyggdmFsaWRDbGFzcyApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dW5oaWdobGlnaHQ6IGZ1bmN0aW9uKCBlbGVtZW50LCBlcnJvckNsYXNzLCB2YWxpZENsYXNzICkge1xuXHRcdFx0aWYgKCBlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIiApIHtcblx0XHRcdFx0dGhpcy5maW5kQnlOYW1lKCBlbGVtZW50Lm5hbWUgKS5yZW1vdmVDbGFzcyggZXJyb3JDbGFzcyApLmFkZENsYXNzKCB2YWxpZENsYXNzICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCBlbGVtZW50ICkucmVtb3ZlQ2xhc3MoIGVycm9yQ2xhc3MgKS5hZGRDbGFzcyggdmFsaWRDbGFzcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvalF1ZXJ5LnZhbGlkYXRvci5zZXREZWZhdWx0cy9cblx0c2V0RGVmYXVsdHM6IGZ1bmN0aW9uKCBzZXR0aW5ncyApIHtcblx0XHQkLmV4dGVuZCggJC52YWxpZGF0b3IuZGVmYXVsdHMsIHNldHRpbmdzICk7XG5cdH0sXG5cblx0bWVzc2FnZXM6IHtcblx0XHRyZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLFxuXHRcdHJlbW90ZTogXCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsXG5cdFx0ZW1haWw6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIixcblx0XHR1cmw6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLFxuXHRcdGRhdGU6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS5cIixcblx0XHRkYXRlSVNPOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUgKElTTykuXCIsXG5cdFx0bnVtYmVyOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlci5cIixcblx0XHRkaWdpdHM6IFwiUGxlYXNlIGVudGVyIG9ubHkgZGlnaXRzLlwiLFxuXHRcdGVxdWFsVG86IFwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxuXHRcdG1heGxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KCBcIlBsZWFzZSBlbnRlciBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMuXCIgKSxcblx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdCggXCJQbGVhc2UgZW50ZXIgYXQgbGVhc3QgezB9IGNoYXJhY3RlcnMuXCIgKSxcblx0XHRyYW5nZWxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KCBcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0gY2hhcmFjdGVycyBsb25nLlwiICksXG5cdFx0cmFuZ2U6ICQudmFsaWRhdG9yLmZvcm1hdCggXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9LlwiICksXG5cdFx0bWF4OiAkLnZhbGlkYXRvci5mb3JtYXQoIFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiApLFxuXHRcdG1pbjogJC52YWxpZGF0b3IuZm9ybWF0KCBcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIgKSxcblx0XHRzdGVwOiAkLnZhbGlkYXRvci5mb3JtYXQoIFwiUGxlYXNlIGVudGVyIGEgbXVsdGlwbGUgb2YgezB9LlwiIClcblx0fSxcblxuXHRhdXRvQ3JlYXRlUmFuZ2VzOiBmYWxzZSxcblxuXHRwcm90b3R5cGU6IHtcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5sYWJlbENvbnRhaW5lciA9ICQoIHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lciApO1xuXHRcdFx0dGhpcy5lcnJvckNvbnRleHQgPSB0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aCAmJiB0aGlzLmxhYmVsQ29udGFpbmVyIHx8ICQoIHRoaXMuY3VycmVudEZvcm0gKTtcblx0XHRcdHRoaXMuY29udGFpbmVycyA9ICQoIHRoaXMuc2V0dGluZ3MuZXJyb3JDb250YWluZXIgKS5hZGQoIHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lciApO1xuXHRcdFx0dGhpcy5zdWJtaXR0ZWQgPSB7fTtcblx0XHRcdHRoaXMudmFsdWVDYWNoZSA9IHt9O1xuXHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdCA9IDA7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB7fTtcblx0XHRcdHRoaXMuaW52YWxpZCA9IHt9O1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXG5cdFx0XHR2YXIgZ3JvdXBzID0gKCB0aGlzLmdyb3VwcyA9IHt9ICksXG5cdFx0XHRcdHJ1bGVzO1xuXHRcdFx0JC5lYWNoKCB0aGlzLnNldHRpbmdzLmdyb3VwcywgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQoIC9cXHMvICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JC5lYWNoKCB2YWx1ZSwgZnVuY3Rpb24oIGluZGV4LCBuYW1lICkge1xuXHRcdFx0XHRcdGdyb3Vwc1sgbmFtZSBdID0ga2V5O1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0XHRydWxlcyA9IHRoaXMuc2V0dGluZ3MucnVsZXM7XG5cdFx0XHQkLmVhY2goIHJ1bGVzLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRcdFx0cnVsZXNbIGtleSBdID0gJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZSggdmFsdWUgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0ZnVuY3Rpb24gZGVsZWdhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFNldCBmb3JtIGV4cGFuZG8gb24gY29udGVudGVkaXRhYmxlXG5cdFx0XHRcdGlmICggIXRoaXMuZm9ybSAmJiB0aGlzLmhhc0F0dHJpYnV0ZSggXCJjb250ZW50ZWRpdGFibGVcIiApICkge1xuXHRcdFx0XHRcdHRoaXMuZm9ybSA9ICQoIHRoaXMgKS5jbG9zZXN0KCBcImZvcm1cIiApWyAwIF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdmFsaWRhdG9yID0gJC5kYXRhKCB0aGlzLmZvcm0sIFwidmFsaWRhdG9yXCIgKSxcblx0XHRcdFx0XHRldmVudFR5cGUgPSBcIm9uXCIgKyBldmVudC50eXBlLnJlcGxhY2UoIC9edmFsaWRhdGUvLCBcIlwiICksXG5cdFx0XHRcdFx0c2V0dGluZ3MgPSB2YWxpZGF0b3Iuc2V0dGluZ3M7XG5cdFx0XHRcdGlmICggc2V0dGluZ3NbIGV2ZW50VHlwZSBdICYmICEkKCB0aGlzICkuaXMoIHNldHRpbmdzLmlnbm9yZSApICkge1xuXHRcdFx0XHRcdHNldHRpbmdzWyBldmVudFR5cGUgXS5jYWxsKCB2YWxpZGF0b3IsIHRoaXMsIGV2ZW50ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApXG5cdFx0XHRcdC5vbiggXCJmb2N1c2luLnZhbGlkYXRlIGZvY3Vzb3V0LnZhbGlkYXRlIGtleXVwLnZhbGlkYXRlXCIsXG5cdFx0XHRcdFx0XCI6dGV4dCwgW3R5cGU9J3Bhc3N3b3JkJ10sIFt0eXBlPSdmaWxlJ10sIHNlbGVjdCwgdGV4dGFyZWEsIFt0eXBlPSdudW1iZXInXSwgW3R5cGU9J3NlYXJjaCddLCBcIiArXG5cdFx0XHRcdFx0XCJbdHlwZT0ndGVsJ10sIFt0eXBlPSd1cmwnXSwgW3R5cGU9J2VtYWlsJ10sIFt0eXBlPSdkYXRldGltZSddLCBbdHlwZT0nZGF0ZSddLCBbdHlwZT0nbW9udGgnXSwgXCIgK1xuXHRcdFx0XHRcdFwiW3R5cGU9J3dlZWsnXSwgW3R5cGU9J3RpbWUnXSwgW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ10sIFt0eXBlPSdyYW5nZSddLCBbdHlwZT0nY29sb3InXSwgXCIgK1xuXHRcdFx0XHRcdFwiW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddLCBbY29udGVudGVkaXRhYmxlXSwgW3R5cGU9J2J1dHRvbiddXCIsIGRlbGVnYXRlIClcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIG9sZElFXG5cdFx0XHRcdC8vIFwic2VsZWN0XCIgaXMgcHJvdmlkZWQgYXMgZXZlbnQudGFyZ2V0IHdoZW4gY2xpY2tpbmcgYSBvcHRpb25cblx0XHRcdFx0Lm9uKCBcImNsaWNrLnZhbGlkYXRlXCIsIFwic2VsZWN0LCBvcHRpb24sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLCBkZWxlZ2F0ZSApO1xuXG5cdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3MuaW52YWxpZEhhbmRsZXIgKSB7XG5cdFx0XHRcdCQoIHRoaXMuY3VycmVudEZvcm0gKS5vbiggXCJpbnZhbGlkLWZvcm0udmFsaWRhdGVcIiwgdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgYXJpYS1yZXF1aXJlZCB0byBhbnkgU3RhdGljL0RhdGEvQ2xhc3MgcmVxdWlyZWQgZmllbGRzIGJlZm9yZSBmaXJzdCB2YWxpZGF0aW9uXG5cdFx0XHQvLyBTY3JlZW4gcmVhZGVycyByZXF1aXJlIHRoaXMgYXR0cmlidXRlIHRvIGJlIHByZXNlbnQgYmVmb3JlIHRoZSBpbml0aWFsIHN1Ym1pc3Npb24gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRy1URUNIUy9BUklBMi5odG1sXG5cdFx0XHQkKCB0aGlzLmN1cnJlbnRGb3JtICkuZmluZCggXCJbcmVxdWlyZWRdLCBbZGF0YS1ydWxlLXJlcXVpcmVkXSwgLnJlcXVpcmVkXCIgKS5hdHRyKCBcImFyaWEtcmVxdWlyZWRcIiwgXCJ0cnVlXCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5mb3JtL1xuXHRcdGZvcm06IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5jaGVja0Zvcm0oKTtcblx0XHRcdCQuZXh0ZW5kKCB0aGlzLnN1Ym1pdHRlZCwgdGhpcy5lcnJvck1hcCApO1xuXHRcdFx0dGhpcy5pbnZhbGlkID0gJC5leHRlbmQoIHt9LCB0aGlzLmVycm9yTWFwICk7XG5cdFx0XHRpZiAoICF0aGlzLnZhbGlkKCkgKSB7XG5cdFx0XHRcdCQoIHRoaXMuY3VycmVudEZvcm0gKS50cmlnZ2VySGFuZGxlciggXCJpbnZhbGlkLWZvcm1cIiwgWyB0aGlzIF0gKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2hvd0Vycm9ycygpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQoKTtcblx0XHR9LFxuXG5cdFx0Y2hlY2tGb3JtOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMucHJlcGFyZUZvcm0oKTtcblx0XHRcdGZvciAoIHZhciBpID0gMCwgZWxlbWVudHMgPSAoIHRoaXMuY3VycmVudEVsZW1lbnRzID0gdGhpcy5lbGVtZW50cygpICk7IGVsZW1lbnRzWyBpIF07IGkrKyApIHtcblx0XHRcdFx0dGhpcy5jaGVjayggZWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQoKTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5lbGVtZW50L1xuXHRcdGVsZW1lbnQ6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0dmFyIGNsZWFuRWxlbWVudCA9IHRoaXMuY2xlYW4oIGVsZW1lbnQgKSxcblx0XHRcdFx0Y2hlY2tFbGVtZW50ID0gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKCBjbGVhbkVsZW1lbnQgKSxcblx0XHRcdFx0diA9IHRoaXMsXG5cdFx0XHRcdHJlc3VsdCA9IHRydWUsXG5cdFx0XHRcdHJzLCBncm91cDtcblxuXHRcdFx0aWYgKCBjaGVja0VsZW1lbnQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuaW52YWxpZFsgY2xlYW5FbGVtZW50Lm5hbWUgXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucHJlcGFyZUVsZW1lbnQoIGNoZWNrRWxlbWVudCApO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50cyA9ICQoIGNoZWNrRWxlbWVudCApO1xuXG5cdFx0XHRcdC8vIElmIHRoaXMgZWxlbWVudCBpcyBncm91cGVkLCB0aGVuIHZhbGlkYXRlIGFsbCBncm91cCBlbGVtZW50cyBhbHJlYWR5XG5cdFx0XHRcdC8vIGNvbnRhaW5pbmcgYSB2YWx1ZVxuXHRcdFx0XHRncm91cCA9IHRoaXMuZ3JvdXBzWyBjaGVja0VsZW1lbnQubmFtZSBdO1xuXHRcdFx0XHRpZiAoIGdyb3VwICkge1xuXHRcdFx0XHRcdCQuZWFjaCggdGhpcy5ncm91cHMsIGZ1bmN0aW9uKCBuYW1lLCB0ZXN0Z3JvdXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHRlc3Rncm91cCA9PT0gZ3JvdXAgJiYgbmFtZSAhPT0gY2hlY2tFbGVtZW50Lm5hbWUgKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFuRWxlbWVudCA9IHYudmFsaWRhdGlvblRhcmdldEZvciggdi5jbGVhbiggdi5maW5kQnlOYW1lKCBuYW1lICkgKSApO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNsZWFuRWxlbWVudCAmJiBjbGVhbkVsZW1lbnQubmFtZSBpbiB2LmludmFsaWQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0di5jdXJyZW50RWxlbWVudHMucHVzaCggY2xlYW5FbGVtZW50ICk7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gdi5jaGVjayggY2xlYW5FbGVtZW50ICkgJiYgcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cnMgPSB0aGlzLmNoZWNrKCBjaGVja0VsZW1lbnQgKSAhPT0gZmFsc2U7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiBycztcblx0XHRcdFx0aWYgKCBycyApIHtcblx0XHRcdFx0XHR0aGlzLmludmFsaWRbIGNoZWNrRWxlbWVudC5uYW1lIF0gPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmludmFsaWRbIGNoZWNrRWxlbWVudC5uYW1lIF0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAhdGhpcy5udW1iZXJPZkludmFsaWRzKCkgKSB7XG5cblx0XHRcdFx0XHQvLyBIaWRlIGVycm9yIGNvbnRhaW5lcnMgb24gbGFzdCBlcnJvclxuXHRcdFx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUuYWRkKCB0aGlzLmNvbnRhaW5lcnMgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNob3dFcnJvcnMoKTtcblxuXHRcdFx0XHQvLyBBZGQgYXJpYS1pbnZhbGlkIHN0YXR1cyBmb3Igc2NyZWVuIHJlYWRlcnNcblx0XHRcdFx0JCggZWxlbWVudCApLmF0dHIoIFwiYXJpYS1pbnZhbGlkXCIsICFycyApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLnNob3dFcnJvcnMvXG5cdFx0c2hvd0Vycm9yczogZnVuY3Rpb24oIGVycm9ycyApIHtcblx0XHRcdGlmICggZXJyb3JzICkge1xuXHRcdFx0XHR2YXIgdmFsaWRhdG9yID0gdGhpcztcblxuXHRcdFx0XHQvLyBBZGQgaXRlbXMgdG8gZXJyb3IgbGlzdCBhbmQgbWFwXG5cdFx0XHRcdCQuZXh0ZW5kKCB0aGlzLmVycm9yTWFwLCBlcnJvcnMgKTtcblx0XHRcdFx0dGhpcy5lcnJvckxpc3QgPSAkLm1hcCggdGhpcy5lcnJvck1hcCwgZnVuY3Rpb24oIG1lc3NhZ2UsIG5hbWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRlbGVtZW50OiB2YWxpZGF0b3IuZmluZEJ5TmFtZSggbmFtZSApWyAwIF1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGl0ZW1zIGZyb20gc3VjY2VzcyBsaXN0XG5cdFx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QgPSAkLmdyZXAoIHRoaXMuc3VjY2Vzc0xpc3QsIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0XHRcdHJldHVybiAhKCBlbGVtZW50Lm5hbWUgaW4gZXJyb3JzICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzICkge1xuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnNob3dFcnJvcnMuY2FsbCggdGhpcywgdGhpcy5lcnJvck1hcCwgdGhpcy5lcnJvckxpc3QgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVmYXVsdFNob3dFcnJvcnMoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5yZXNldEZvcm0vXG5cdFx0cmVzZXRGb3JtOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggJC5mbi5yZXNldEZvcm0gKSB7XG5cdFx0XHRcdCQoIHRoaXMuY3VycmVudEZvcm0gKS5yZXNldEZvcm0oKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaW52YWxpZCA9IHt9O1xuXHRcdFx0dGhpcy5zdWJtaXR0ZWQgPSB7fTtcblx0XHRcdHRoaXMucHJlcGFyZUZvcm0oKTtcblx0XHRcdHRoaXMuaGlkZUVycm9ycygpO1xuXHRcdFx0dmFyIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cygpXG5cdFx0XHRcdC5yZW1vdmVEYXRhKCBcInByZXZpb3VzVmFsdWVcIiApXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCBcImFyaWEtaW52YWxpZFwiICk7XG5cblx0XHRcdHRoaXMucmVzZXRFbGVtZW50cyggZWxlbWVudHMgKTtcblx0XHR9LFxuXG5cdFx0cmVzZXRFbGVtZW50czogZnVuY3Rpb24oIGVsZW1lbnRzICkge1xuXHRcdFx0dmFyIGk7XG5cblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodCApIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGVsZW1lbnRzWyBpIF07IGkrKyApIHtcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwoIHRoaXMsIGVsZW1lbnRzWyBpIF0sXG5cdFx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIFwiXCIgKTtcblx0XHRcdFx0XHR0aGlzLmZpbmRCeU5hbWUoIGVsZW1lbnRzWyBpIF0ubmFtZSApLnJlbW92ZUNsYXNzKCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudHNcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyApXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bnVtYmVyT2ZJbnZhbGlkczogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgoIHRoaXMuaW52YWxpZCApO1xuXHRcdH0sXG5cblx0XHRvYmplY3RMZW5ndGg6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHQvKiBqc2hpbnQgdW51c2VkOiBmYWxzZSAqL1xuXHRcdFx0dmFyIGNvdW50ID0gMCxcblx0XHRcdFx0aTtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIG9ialsgaSBdICkge1xuXHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3VudDtcblx0XHR9LFxuXG5cdFx0aGlkZUVycm9yczogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmhpZGVUaGVzZSggdGhpcy50b0hpZGUgKTtcblx0XHR9LFxuXG5cdFx0aGlkZVRoZXNlOiBmdW5jdGlvbiggZXJyb3JzICkge1xuXHRcdFx0ZXJyb3JzLm5vdCggdGhpcy5jb250YWluZXJzICkudGV4dCggXCJcIiApO1xuXHRcdFx0dGhpcy5hZGRXcmFwcGVyKCBlcnJvcnMgKS5oaWRlKCk7XG5cdFx0fSxcblxuXHRcdHZhbGlkOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcblx0XHR9LFxuXG5cdFx0c2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvckxpc3QubGVuZ3RoO1xuXHRcdH0sXG5cblx0XHRmb2N1c0ludmFsaWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLmZvY3VzSW52YWxpZCApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQkKCB0aGlzLmZpbmRMYXN0QWN0aXZlKCkgfHwgdGhpcy5lcnJvckxpc3QubGVuZ3RoICYmIHRoaXMuZXJyb3JMaXN0WyAwIF0uZWxlbWVudCB8fCBbXSApXG5cdFx0XHRcdFx0LmZpbHRlciggXCI6dmlzaWJsZVwiIClcblx0XHRcdFx0XHQuZm9jdXMoKVxuXG5cdFx0XHRcdFx0Ly8gTWFudWFsbHkgdHJpZ2dlciBmb2N1c2luIGV2ZW50OyB3aXRob3V0IGl0LCBmb2N1c2luIGhhbmRsZXIgaXNuJ3QgY2FsbGVkLCBmaW5kTGFzdEFjdGl2ZSB3b24ndCBoYXZlIGFueXRoaW5nIHRvIGZpbmRcblx0XHRcdFx0XHQudHJpZ2dlciggXCJmb2N1c2luXCIgKTtcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHQvLyBJZ25vcmUgSUUgdGhyb3dpbmcgZXJyb3JzIHdoZW4gZm9jdXNpbmcgaGlkZGVuIGVsZW1lbnRzXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZmluZExhc3RBY3RpdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGxhc3RBY3RpdmUgPSB0aGlzLmxhc3RBY3RpdmU7XG5cdFx0XHRyZXR1cm4gbGFzdEFjdGl2ZSAmJiAkLmdyZXAoIHRoaXMuZXJyb3JMaXN0LCBmdW5jdGlvbiggbiApIHtcblx0XHRcdFx0cmV0dXJuIG4uZWxlbWVudC5uYW1lID09PSBsYXN0QWN0aXZlLm5hbWU7XG5cdFx0XHR9ICkubGVuZ3RoID09PSAxICYmIGxhc3RBY3RpdmU7XG5cdFx0fSxcblxuXHRcdGVsZW1lbnRzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB2YWxpZGF0b3IgPSB0aGlzLFxuXHRcdFx0XHRydWxlc0NhY2hlID0ge307XG5cblx0XHRcdC8vIFNlbGVjdCBhbGwgdmFsaWQgaW5wdXRzIGluc2lkZSB0aGUgZm9ybSAobm8gc3VibWl0IG9yIHJlc2V0IGJ1dHRvbnMpXG5cdFx0XHRyZXR1cm4gJCggdGhpcy5jdXJyZW50Rm9ybSApXG5cdFx0XHQuZmluZCggXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW2NvbnRlbnRlZGl0YWJsZV1cIiApXG5cdFx0XHQubm90KCBcIjpzdWJtaXQsIDpyZXNldCwgOmltYWdlLCA6ZGlzYWJsZWRcIiApXG5cdFx0XHQubm90KCB0aGlzLnNldHRpbmdzLmlnbm9yZSApXG5cdFx0XHQuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG5hbWUgPSB0aGlzLm5hbWUgfHwgJCggdGhpcyApLmF0dHIoIFwibmFtZVwiICk7IC8vIEZvciBjb250ZW50ZWRpdGFibGVcblx0XHRcdFx0aWYgKCAhbmFtZSAmJiB2YWxpZGF0b3Iuc2V0dGluZ3MuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggXCIlbyBoYXMgbm8gbmFtZSBhc3NpZ25lZFwiLCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZXQgZm9ybSBleHBhbmRvIG9uIGNvbnRlbnRlZGl0YWJsZVxuXHRcdFx0XHRpZiAoIHRoaXMuaGFzQXR0cmlidXRlKCBcImNvbnRlbnRlZGl0YWJsZVwiICkgKSB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtID0gJCggdGhpcyApLmNsb3Nlc3QoIFwiZm9ybVwiIClbIDAgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNlbGVjdCBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IGZvciBlYWNoIG5hbWUsIGFuZCBvbmx5IHRob3NlIHdpdGggcnVsZXMgc3BlY2lmaWVkXG5cdFx0XHRcdGlmICggbmFtZSBpbiBydWxlc0NhY2hlIHx8ICF2YWxpZGF0b3Iub2JqZWN0TGVuZ3RoKCAkKCB0aGlzICkucnVsZXMoKSApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJ1bGVzQ2FjaGVbIG5hbWUgXSA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRjbGVhbjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuICQoIHNlbGVjdG9yIClbIDAgXTtcblx0XHR9LFxuXG5cdFx0ZXJyb3JzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlcnJvckNsYXNzID0gdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLnNwbGl0KCBcIiBcIiApLmpvaW4oIFwiLlwiICk7XG5cdFx0XHRyZXR1cm4gJCggdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIi5cIiArIGVycm9yQ2xhc3MsIHRoaXMuZXJyb3JDb250ZXh0ICk7XG5cdFx0fSxcblxuXHRcdHJlc2V0SW50ZXJuYWxzOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QgPSBbXTtcblx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gW107XG5cdFx0XHR0aGlzLmVycm9yTWFwID0ge307XG5cdFx0XHR0aGlzLnRvU2hvdyA9ICQoIFtdICk7XG5cdFx0XHR0aGlzLnRvSGlkZSA9ICQoIFtdICk7XG5cdFx0fSxcblxuXHRcdHJlc2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMucmVzZXRJbnRlcm5hbHMoKTtcblx0XHRcdHRoaXMuY3VycmVudEVsZW1lbnRzID0gJCggW10gKTtcblx0XHR9LFxuXG5cdFx0cHJlcGFyZUZvcm06IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLmVycm9ycygpLmFkZCggdGhpcy5jb250YWluZXJzICk7XG5cdFx0fSxcblxuXHRcdHByZXBhcmVFbGVtZW50OiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy5lcnJvcnNGb3IoIGVsZW1lbnQgKTtcblx0XHR9LFxuXG5cdFx0ZWxlbWVudFZhbHVlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHZhciAkZWxlbWVudCA9ICQoIGVsZW1lbnQgKSxcblx0XHRcdFx0dHlwZSA9IGVsZW1lbnQudHlwZSxcblx0XHRcdFx0dmFsLCBpZHg7XG5cblx0XHRcdGlmICggdHlwZSA9PT0gXCJyYWRpb1wiIHx8IHR5cGUgPT09IFwiY2hlY2tib3hcIiApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZEJ5TmFtZSggZWxlbWVudC5uYW1lICkuZmlsdGVyKCBcIjpjaGVja2VkXCIgKS52YWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVsZW1lbnQudmFsaWRpdHkgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50LnZhbGlkaXR5LmJhZElucHV0ID8gXCJOYU5cIiA6ICRlbGVtZW50LnZhbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCBcImNvbnRlbnRlZGl0YWJsZVwiICkgKSB7XG5cdFx0XHRcdHZhbCA9ICRlbGVtZW50LnRleHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9ICRlbGVtZW50LnZhbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwiZmlsZVwiICkge1xuXG5cdFx0XHRcdC8vIE1vZGVybiBicm93c2VyIChjaHJvbWUgJiBzYWZhcmkpXG5cdFx0XHRcdGlmICggdmFsLnN1YnN0ciggMCwgMTIgKSA9PT0gXCJDOlxcXFxmYWtlcGF0aFxcXFxcIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsLnN1YnN0ciggMTIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExlZ2FjeSBicm93c2Vyc1xuXHRcdFx0XHQvLyBVbml4LWJhc2VkIHBhdGhcblx0XHRcdFx0aWR4ID0gdmFsLmxhc3RJbmRleE9mKCBcIi9cIiApO1xuXHRcdFx0XHRpZiAoIGlkeCA+PSAwICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWwuc3Vic3RyKCBpZHggKyAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXaW5kb3dzLWJhc2VkIHBhdGhcblx0XHRcdFx0aWR4ID0gdmFsLmxhc3RJbmRleE9mKCBcIlxcXFxcIiApO1xuXHRcdFx0XHRpZiAoIGlkeCA+PSAwICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWwuc3Vic3RyKCBpZHggKyAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBKdXN0IHRoZSBmaWxlIG5hbWVcblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRyZXR1cm4gdmFsLnJlcGxhY2UoIC9cXHIvZywgXCJcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9LFxuXG5cdFx0Y2hlY2s6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0ZWxlbWVudCA9IHRoaXMudmFsaWRhdGlvblRhcmdldEZvciggdGhpcy5jbGVhbiggZWxlbWVudCApICk7XG5cblx0XHRcdHZhciBydWxlcyA9ICQoIGVsZW1lbnQgKS5ydWxlcygpLFxuXHRcdFx0XHRydWxlc0NvdW50ID0gJC5tYXAoIHJ1bGVzLCBmdW5jdGlvbiggbiwgaSApIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fSApLmxlbmd0aCxcblx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2UsXG5cdFx0XHRcdHZhbCA9IHRoaXMuZWxlbWVudFZhbHVlKCBlbGVtZW50ICksXG5cdFx0XHRcdHJlc3VsdCwgbWV0aG9kLCBydWxlO1xuXG5cdFx0XHQvLyBJZiBhIG5vcm1hbGl6ZXIgaXMgZGVmaW5lZCBmb3IgdGhpcyBlbGVtZW50LCB0aGVuXG5cdFx0XHQvLyBjYWxsIGl0IHRvIHJldHJlaXZlIHRoZSBjaGFuZ2VkIHZhbHVlIGluc3RlYWRcblx0XHRcdC8vIG9mIHVzaW5nIHRoZSByZWFsIG9uZS5cblx0XHRcdC8vIE5vdGUgdGhhdCBgdGhpc2AgaW4gdGhlIG5vcm1hbGl6ZXIgaXMgYGVsZW1lbnRgLlxuXHRcdFx0aWYgKCB0eXBlb2YgcnVsZXMubm9ybWFsaXplciA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHR2YWwgPSBydWxlcy5ub3JtYWxpemVyLmNhbGwoIGVsZW1lbnQsIHZhbCApO1xuXG5cdFx0XHRcdGlmICggdHlwZW9mIHZhbCAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcIlRoZSBub3JtYWxpemVyIHNob3VsZCByZXR1cm4gYSBzdHJpbmcgdmFsdWUuXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERlbGV0ZSB0aGUgbm9ybWFsaXplciBmcm9tIHJ1bGVzIHRvIGF2b2lkIHRyZWF0aW5nXG5cdFx0XHRcdC8vIGl0IGFzIGEgcHJlLWRlZmluZWQgbWV0aG9kLlxuXHRcdFx0XHRkZWxldGUgcnVsZXMubm9ybWFsaXplcjtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggbWV0aG9kIGluIHJ1bGVzICkge1xuXHRcdFx0XHRydWxlID0geyBtZXRob2Q6IG1ldGhvZCwgcGFyYW1ldGVyczogcnVsZXNbIG1ldGhvZCBdIH07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gJC52YWxpZGF0b3IubWV0aG9kc1sgbWV0aG9kIF0uY2FsbCggdGhpcywgdmFsLCBlbGVtZW50LCBydWxlLnBhcmFtZXRlcnMgKTtcblxuXHRcdFx0XHRcdC8vIElmIGEgbWV0aG9kIGluZGljYXRlcyB0aGF0IHRoZSBmaWVsZCBpcyBvcHRpb25hbCBhbmQgdGhlcmVmb3JlIHZhbGlkLFxuXHRcdFx0XHRcdC8vIGRvbid0IG1hcmsgaXQgYXMgdmFsaWQgd2hlbiB0aGVyZSBhcmUgbm8gb3RoZXIgcnVsZXNcblx0XHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCIgJiYgcnVsZXNDb3VudCA9PT0gMSApIHtcblx0XHRcdFx0XHRcdGRlcGVuZGVuY3lNaXNtYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvSGlkZSA9IHRoaXMudG9IaWRlLm5vdCggdGhpcy5lcnJvcnNGb3IoIGVsZW1lbnQgKSApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggIXJlc3VsdCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9ybWF0QW5kQWRkKCBlbGVtZW50LCBydWxlICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3MuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyggXCJFeGNlcHRpb24gb2NjdXJyZWQgd2hlbiBjaGVja2luZyBlbGVtZW50IFwiICsgZWxlbWVudC5pZCArIFwiLCBjaGVjayB0aGUgJ1wiICsgcnVsZS5tZXRob2QgKyBcIicgbWV0aG9kLlwiLCBlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFR5cGVFcnJvciApIHtcblx0XHRcdFx0XHRcdGUubWVzc2FnZSArPSBcIi4gIEV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIgKyBlbGVtZW50LmlkICsgXCIsIGNoZWNrIHRoZSAnXCIgKyBydWxlLm1ldGhvZCArIFwiJyBtZXRob2QuXCI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBkZXBlbmRlbmN5TWlzbWF0Y2ggKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICggdGhpcy5vYmplY3RMZW5ndGgoIHJ1bGVzICkgKSB7XG5cdFx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QucHVzaCggZWxlbWVudCApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybiB0aGUgY3VzdG9tIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGFuZCB2YWxpZGF0aW9uIG1ldGhvZFxuXHRcdC8vIHNwZWNpZmllZCBpbiB0aGUgZWxlbWVudCdzIEhUTUw1IGRhdGEgYXR0cmlidXRlXG5cdFx0Ly8gcmV0dXJuIHRoZSBnZW5lcmljIG1lc3NhZ2UgaWYgcHJlc2VudCBhbmQgbm8gbWV0aG9kIHNwZWNpZmljIG1lc3NhZ2UgaXMgcHJlc2VudFxuXHRcdGN1c3RvbURhdGFNZXNzYWdlOiBmdW5jdGlvbiggZWxlbWVudCwgbWV0aG9kICkge1xuXHRcdFx0cmV0dXJuICQoIGVsZW1lbnQgKS5kYXRhKCBcIm1zZ1wiICsgbWV0aG9kLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgK1xuXHRcdFx0XHRtZXRob2Quc3Vic3RyaW5nKCAxICkudG9Mb3dlckNhc2UoKSApIHx8ICQoIGVsZW1lbnQgKS5kYXRhKCBcIm1zZ1wiICk7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybiB0aGUgY3VzdG9tIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBlbGVtZW50IG5hbWUgYW5kIHZhbGlkYXRpb24gbWV0aG9kXG5cdFx0Y3VzdG9tTWVzc2FnZTogZnVuY3Rpb24oIG5hbWUsIG1ldGhvZCApIHtcblx0XHRcdHZhciBtID0gdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgbmFtZSBdO1xuXHRcdFx0cmV0dXJuIG0gJiYgKCBtLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgPyBtIDogbVsgbWV0aG9kIF0gKTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBmaXJzdCBkZWZpbmVkIGFyZ3VtZW50LCBhbGxvd2luZyBlbXB0eSBzdHJpbmdzXG5cdFx0ZmluZERlZmluZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGFyZ3VtZW50c1sgaSBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH0sXG5cblx0XHQvLyBUaGUgc2Vjb25kIHBhcmFtZXRlciAncnVsZScgdXNlZCB0byBiZSBhIHN0cmluZywgYW5kIGV4dGVuZGVkIHRvIGFuIG9iamVjdCBsaXRlcmFsXG5cdFx0Ly8gb2YgdGhlIGZvbGxvd2luZyBmb3JtOlxuXHRcdC8vIHJ1bGUgPSB7XG5cdFx0Ly8gICAgIG1ldGhvZDogXCJtZXRob2QgbmFtZVwiLFxuXHRcdC8vICAgICBwYXJhbWV0ZXJzOiBcInRoZSBnaXZlbiBtZXRob2QgcGFyYW1ldGVyc1wiXG5cdFx0Ly8gfVxuXHRcdC8vXG5cdFx0Ly8gVGhlIG9sZCBiZWhhdmlvciBzdGlsbCBzdXBwb3J0ZWQsIGtlcHQgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG5cdFx0Ly8gb2xkIGNvZGUsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0XHRkZWZhdWx0TWVzc2FnZTogZnVuY3Rpb24oIGVsZW1lbnQsIHJ1bGUgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBydWxlID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRydWxlID0geyBtZXRob2Q6IHJ1bGUgfTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLmZpbmREZWZpbmVkKFxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tTWVzc2FnZSggZWxlbWVudC5uYW1lLCBydWxlLm1ldGhvZCApLFxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tRGF0YU1lc3NhZ2UoIGVsZW1lbnQsIHJ1bGUubWV0aG9kICksXG5cblx0XHRcdFx0XHQvLyAndGl0bGUnIGlzIG5ldmVyIHVuZGVmaW5lZCwgc28gaGFuZGxlIGVtcHR5IHN0cmluZyBhcyB1bmRlZmluZWRcblx0XHRcdFx0XHQhdGhpcy5zZXR0aW5ncy5pZ25vcmVUaXRsZSAmJiBlbGVtZW50LnRpdGxlIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0XHQkLnZhbGlkYXRvci5tZXNzYWdlc1sgcnVsZS5tZXRob2QgXSxcblx0XHRcdFx0XHRcIjxzdHJvbmc+V2FybmluZzogTm8gbWVzc2FnZSBkZWZpbmVkIGZvciBcIiArIGVsZW1lbnQubmFtZSArIFwiPC9zdHJvbmc+XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0dGhlcmVnZXggPSAvXFwkP1xceyhcXGQrKVxcfS9nO1xuXHRcdFx0aWYgKCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZS5jYWxsKCB0aGlzLCBydWxlLnBhcmFtZXRlcnMsIGVsZW1lbnQgKTtcblx0XHRcdH0gZWxzZSBpZiAoIHRoZXJlZ2V4LnRlc3QoIG1lc3NhZ2UgKSApIHtcblx0XHRcdFx0bWVzc2FnZSA9ICQudmFsaWRhdG9yLmZvcm1hdCggbWVzc2FnZS5yZXBsYWNlKCB0aGVyZWdleCwgXCJ7JDF9XCIgKSwgcnVsZS5wYXJhbWV0ZXJzICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtZXNzYWdlO1xuXHRcdH0sXG5cblx0XHRmb3JtYXRBbmRBZGQ6IGZ1bmN0aW9uKCBlbGVtZW50LCBydWxlICkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLmRlZmF1bHRNZXNzYWdlKCBlbGVtZW50LCBydWxlICk7XG5cblx0XHRcdHRoaXMuZXJyb3JMaXN0LnB1c2goIHtcblx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0bWV0aG9kOiBydWxlLm1ldGhvZFxuXHRcdFx0fSApO1xuXG5cdFx0XHR0aGlzLmVycm9yTWFwWyBlbGVtZW50Lm5hbWUgXSA9IG1lc3NhZ2U7XG5cdFx0XHR0aGlzLnN1Ym1pdHRlZFsgZWxlbWVudC5uYW1lIF0gPSBtZXNzYWdlO1xuXHRcdH0sXG5cblx0XHRhZGRXcmFwcGVyOiBmdW5jdGlvbiggdG9Ub2dnbGUgKSB7XG5cdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3Mud3JhcHBlciApIHtcblx0XHRcdFx0dG9Ub2dnbGUgPSB0b1RvZ2dsZS5hZGQoIHRvVG9nZ2xlLnBhcmVudCggdGhpcy5zZXR0aW5ncy53cmFwcGVyICkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0b1RvZ2dsZTtcblx0XHR9LFxuXG5cdFx0ZGVmYXVsdFNob3dFcnJvcnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGksIGVsZW1lbnRzLCBlcnJvcjtcblx0XHRcdGZvciAoIGkgPSAwOyB0aGlzLmVycm9yTGlzdFsgaSBdOyBpKysgKSB7XG5cdFx0XHRcdGVycm9yID0gdGhpcy5lcnJvckxpc3RbIGkgXTtcblx0XHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLmhpZ2hsaWdodCApIHtcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmhpZ2hsaWdodC5jYWxsKCB0aGlzLCBlcnJvci5lbGVtZW50LCB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2hvd0xhYmVsKCBlcnJvci5lbGVtZW50LCBlcnJvci5tZXNzYWdlICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCApIHtcblx0XHRcdFx0dGhpcy50b1Nob3cgPSB0aGlzLnRvU2hvdy5hZGQoIHRoaXMuY29udGFpbmVycyApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyB0aGlzLnN1Y2Nlc3NMaXN0WyBpIF07IGkrKyApIHtcblx0XHRcdFx0XHR0aGlzLnNob3dMYWJlbCggdGhpcy5zdWNjZXNzTGlzdFsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodCApIHtcblx0XHRcdFx0Zm9yICggaSA9IDAsIGVsZW1lbnRzID0gdGhpcy52YWxpZEVsZW1lbnRzKCk7IGVsZW1lbnRzWyBpIF07IGkrKyApIHtcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwoIHRoaXMsIGVsZW1lbnRzWyBpIF0sIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUubm90KCB0aGlzLnRvU2hvdyApO1xuXHRcdFx0dGhpcy5oaWRlRXJyb3JzKCk7XG5cdFx0XHR0aGlzLmFkZFdyYXBwZXIoIHRoaXMudG9TaG93ICkuc2hvdygpO1xuXHRcdH0sXG5cblx0XHR2YWxpZEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnRFbGVtZW50cy5ub3QoIHRoaXMuaW52YWxpZEVsZW1lbnRzKCkgKTtcblx0XHR9LFxuXG5cdFx0aW52YWxpZEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkKCB0aGlzLmVycm9yTGlzdCApLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdFx0XHR9ICk7XG5cdFx0fSxcblxuXHRcdHNob3dMYWJlbDogZnVuY3Rpb24oIGVsZW1lbnQsIG1lc3NhZ2UgKSB7XG5cdFx0XHR2YXIgcGxhY2UsIGdyb3VwLCBlcnJvcklELCB2LFxuXHRcdFx0XHRlcnJvciA9IHRoaXMuZXJyb3JzRm9yKCBlbGVtZW50ICksXG5cdFx0XHRcdGVsZW1lbnRJRCA9IHRoaXMuaWRPck5hbWUoIGVsZW1lbnQgKSxcblx0XHRcdFx0ZGVzY3JpYmVkQnkgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJhcmlhLWRlc2NyaWJlZGJ5XCIgKTtcblxuXHRcdFx0aWYgKCBlcnJvci5sZW5ndGggKSB7XG5cblx0XHRcdFx0Ly8gUmVmcmVzaCBlcnJvci9zdWNjZXNzIGNsYXNzXG5cdFx0XHRcdGVycm9yLnJlbW92ZUNsYXNzKCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MgKS5hZGRDbGFzcyggdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzICk7XG5cblx0XHRcdFx0Ly8gUmVwbGFjZSBtZXNzYWdlIG9uIGV4aXN0aW5nIGxhYmVsXG5cdFx0XHRcdGVycm9yLmh0bWwoIG1lc3NhZ2UgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIGVycm9yIGVsZW1lbnRcblx0XHRcdFx0ZXJyb3IgPSAkKCBcIjxcIiArIHRoaXMuc2V0dGluZ3MuZXJyb3JFbGVtZW50ICsgXCI+XCIgKVxuXHRcdFx0XHRcdC5hdHRyKCBcImlkXCIsIGVsZW1lbnRJRCArIFwiLWVycm9yXCIgKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyggdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzIClcblx0XHRcdFx0XHQuaHRtbCggbWVzc2FnZSB8fCBcIlwiICk7XG5cblx0XHRcdFx0Ly8gTWFpbnRhaW4gcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHRvIGJlIHBsYWNlZCBpbnRvIHRoZSBET01cblx0XHRcdFx0cGxhY2UgPSBlcnJvcjtcblx0XHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLndyYXBwZXIgKSB7XG5cblx0XHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSwgZXZlbiBpbiBJRVxuXHRcdFx0XHRcdC8vIGFjdHVhbGx5IHNob3dpbmcgdGhlIHdyYXBwZWQgZWxlbWVudCBpcyBoYW5kbGVkIGVsc2V3aGVyZVxuXHRcdFx0XHRcdHBsYWNlID0gZXJyb3IuaGlkZSgpLnNob3coKS53cmFwKCBcIjxcIiArIHRoaXMuc2V0dGluZ3Mud3JhcHBlciArIFwiLz5cIiApLnBhcmVudCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggdGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGggKSB7XG5cdFx0XHRcdFx0dGhpcy5sYWJlbENvbnRhaW5lci5hcHBlbmQoIHBsYWNlICk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIHRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudC5jYWxsKCB0aGlzLCBwbGFjZSwgJCggZWxlbWVudCApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGxhY2UuaW5zZXJ0QWZ0ZXIoIGVsZW1lbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExpbmsgZXJyb3IgYmFjayB0byB0aGUgZWxlbWVudFxuXHRcdFx0XHRpZiAoIGVycm9yLmlzKCBcImxhYmVsXCIgKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHRoZSBlcnJvciBpcyBhIGxhYmVsLCB0aGVuIGFzc29jaWF0ZSB1c2luZyAnZm9yJ1xuXHRcdFx0XHRcdGVycm9yLmF0dHIoIFwiZm9yXCIsIGVsZW1lbnRJRCApO1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaXMgbm90IGEgY2hpbGQgb2YgYW4gYXNzb2NpYXRlZCBsYWJlbCwgdGhlbiBpdCdzIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdC8vIHRvIGV4cGxpY2l0bHkgYXBwbHkgYXJpYS1kZXNjcmliZWRieVxuXHRcdFx0XHR9IGVsc2UgaWYgKCBlcnJvci5wYXJlbnRzKCBcImxhYmVsW2Zvcj0nXCIgKyB0aGlzLmVzY2FwZUNzc01ldGEoIGVsZW1lbnRJRCApICsgXCInXVwiICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdGVycm9ySUQgPSBlcnJvci5hdHRyKCBcImlkXCIgKTtcblxuXHRcdFx0XHRcdC8vIFJlc3BlY3QgZXhpc3Rpbmcgbm9uLWVycm9yIGFyaWEtZGVzY3JpYmVkYnlcblx0XHRcdFx0XHRpZiAoICFkZXNjcmliZWRCeSApIHtcblx0XHRcdFx0XHRcdGRlc2NyaWJlZEJ5ID0gZXJyb3JJRDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCAhZGVzY3JpYmVkQnkubWF0Y2goIG5ldyBSZWdFeHAoIFwiXFxcXGJcIiArIHRoaXMuZXNjYXBlQ3NzTWV0YSggZXJyb3JJRCApICsgXCJcXFxcYlwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gQWRkIHRvIGVuZCBvZiBsaXN0IGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRcdFx0XHRcdGRlc2NyaWJlZEJ5ICs9IFwiIFwiICsgZXJyb3JJRDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JCggZWxlbWVudCApLmF0dHIoIFwiYXJpYS1kZXNjcmliZWRieVwiLCBkZXNjcmliZWRCeSApO1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBlbGVtZW50IGlzIGdyb3VwZWQsIHRoZW4gYXNzaWduIHRvIGFsbCBlbGVtZW50cyBpbiB0aGUgc2FtZSBncm91cFxuXHRcdFx0XHRcdGdyb3VwID0gdGhpcy5ncm91cHNbIGVsZW1lbnQubmFtZSBdO1xuXHRcdFx0XHRcdGlmICggZ3JvdXAgKSB7XG5cdFx0XHRcdFx0XHR2ID0gdGhpcztcblx0XHRcdFx0XHRcdCQuZWFjaCggdi5ncm91cHMsIGZ1bmN0aW9uKCBuYW1lLCB0ZXN0Z3JvdXAgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggdGVzdGdyb3VwID09PSBncm91cCApIHtcblx0XHRcdFx0XHRcdFx0XHQkKCBcIltuYW1lPSdcIiArIHYuZXNjYXBlQ3NzTWV0YSggbmFtZSApICsgXCInXVwiLCB2LmN1cnJlbnRGb3JtIClcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCBcImFyaWEtZGVzY3JpYmVkYnlcIiwgZXJyb3IuYXR0ciggXCJpZFwiICkgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCAhbWVzc2FnZSAmJiB0aGlzLnNldHRpbmdzLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdGVycm9yLnRleHQoIFwiXCIgKTtcblx0XHRcdFx0aWYgKCB0eXBlb2YgdGhpcy5zZXR0aW5ncy5zdWNjZXNzID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdGVycm9yLmFkZENsYXNzKCB0aGlzLnNldHRpbmdzLnN1Y2Nlc3MgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnN1Y2Nlc3MoIGVycm9yLCBlbGVtZW50ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudG9TaG93ID0gdGhpcy50b1Nob3cuYWRkKCBlcnJvciApO1xuXHRcdH0sXG5cblx0XHRlcnJvcnNGb3I6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0dmFyIG5hbWUgPSB0aGlzLmVzY2FwZUNzc01ldGEoIHRoaXMuaWRPck5hbWUoIGVsZW1lbnQgKSApLFxuXHRcdFx0XHRkZXNjcmliZXIgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJhcmlhLWRlc2NyaWJlZGJ5XCIgKSxcblx0XHRcdFx0c2VsZWN0b3IgPSBcImxhYmVsW2Zvcj0nXCIgKyBuYW1lICsgXCInXSwgbGFiZWxbZm9yPSdcIiArIG5hbWUgKyBcIiddICpcIjtcblxuXHRcdFx0Ly8gJ2FyaWEtZGVzY3JpYmVkYnknIHNob3VsZCBkaXJlY3RseSByZWZlcmVuY2UgdGhlIGVycm9yIGVsZW1lbnRcblx0XHRcdGlmICggZGVzY3JpYmVyICkge1xuXHRcdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yICsgXCIsICNcIiArIHRoaXMuZXNjYXBlQ3NzTWV0YSggZGVzY3JpYmVyIClcblx0XHRcdFx0XHQucmVwbGFjZSggL1xccysvZywgXCIsICNcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0XHQuZXJyb3JzKClcblx0XHRcdFx0LmZpbHRlciggc2VsZWN0b3IgKTtcblx0XHR9LFxuXG5cdFx0Ly8gU2VlIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vY2F0ZWdvcnkvc2VsZWN0b3JzLywgZm9yIENTU1xuXHRcdC8vIG1ldGEtY2hhcmFjdGVycyB0aGF0IHNob3VsZCBiZSBlc2NhcGVkIGluIG9yZGVyIHRvIGJlIHVzZWQgd2l0aCBKUXVlcnlcblx0XHQvLyBhcyBhIGxpdGVyYWwgcGFydCBvZiBhIG5hbWUvaWQgb3IgYW55IHNlbGVjdG9yLlxuXHRcdGVzY2FwZUNzc01ldGE6IGZ1bmN0aW9uKCBzdHJpbmcgKSB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoIC8oW1xcXFwhXCIjJCUmJygpKissLi86Ozw9Pj9AXFxbXFxdXmB7fH1+XSkvZywgXCJcXFxcJDFcIiApO1xuXHRcdH0sXG5cblx0XHRpZE9yTmFtZTogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ncm91cHNbIGVsZW1lbnQubmFtZSBdIHx8ICggdGhpcy5jaGVja2FibGUoIGVsZW1lbnQgKSA/IGVsZW1lbnQubmFtZSA6IGVsZW1lbnQuaWQgfHwgZWxlbWVudC5uYW1lICk7XG5cdFx0fSxcblxuXHRcdHZhbGlkYXRpb25UYXJnZXRGb3I6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXG5cdFx0XHQvLyBJZiByYWRpby9jaGVja2JveCwgdmFsaWRhdGUgZmlyc3QgZWxlbWVudCBpbiBncm91cCBpbnN0ZWFkXG5cdFx0XHRpZiAoIHRoaXMuY2hlY2thYmxlKCBlbGVtZW50ICkgKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmZpbmRCeU5hbWUoIGVsZW1lbnQubmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbHdheXMgYXBwbHkgaWdub3JlIGZpbHRlclxuXHRcdFx0cmV0dXJuICQoIGVsZW1lbnQgKS5ub3QoIHRoaXMuc2V0dGluZ3MuaWdub3JlIClbIDAgXTtcblx0XHR9LFxuXG5cdFx0Y2hlY2thYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHJldHVybiAoIC9yYWRpb3xjaGVja2JveC9pICkudGVzdCggZWxlbWVudC50eXBlICk7XG5cdFx0fSxcblxuXHRcdGZpbmRCeU5hbWU6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdFx0cmV0dXJuICQoIHRoaXMuY3VycmVudEZvcm0gKS5maW5kKCBcIltuYW1lPSdcIiArIHRoaXMuZXNjYXBlQ3NzTWV0YSggbmFtZSApICsgXCInXVwiICk7XG5cdFx0fSxcblxuXHRcdGdldExlbmd0aDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50ICkge1xuXHRcdFx0c3dpdGNoICggZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0Y2FzZSBcInNlbGVjdFwiOlxuXHRcdFx0XHRyZXR1cm4gJCggXCJvcHRpb246c2VsZWN0ZWRcIiwgZWxlbWVudCApLmxlbmd0aDtcblx0XHRcdGNhc2UgXCJpbnB1dFwiOlxuXHRcdFx0XHRpZiAoIHRoaXMuY2hlY2thYmxlKCBlbGVtZW50ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZEJ5TmFtZSggZWxlbWVudC5uYW1lICkuZmlsdGVyKCBcIjpjaGVja2VkXCIgKS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdGRlcGVuZDogZnVuY3Rpb24oIHBhcmFtLCBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVwZW5kVHlwZXNbIHR5cGVvZiBwYXJhbSBdID8gdGhpcy5kZXBlbmRUeXBlc1sgdHlwZW9mIHBhcmFtIF0oIHBhcmFtLCBlbGVtZW50ICkgOiB0cnVlO1xuXHRcdH0sXG5cblx0XHRkZXBlbmRUeXBlczoge1xuXHRcdFx0XCJib29sZWFuXCI6IGZ1bmN0aW9uKCBwYXJhbSApIHtcblx0XHRcdFx0cmV0dXJuIHBhcmFtO1xuXHRcdFx0fSxcblx0XHRcdFwic3RyaW5nXCI6IGZ1bmN0aW9uKCBwYXJhbSwgZWxlbWVudCApIHtcblx0XHRcdFx0cmV0dXJuICEhJCggcGFyYW0sIGVsZW1lbnQuZm9ybSApLmxlbmd0aDtcblx0XHRcdH0sXG5cdFx0XHRcImZ1bmN0aW9uXCI6IGZ1bmN0aW9uKCBwYXJhbSwgZWxlbWVudCApIHtcblx0XHRcdFx0cmV0dXJuIHBhcmFtKCBlbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG9wdGlvbmFsOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHZhciB2YWwgPSB0aGlzLmVsZW1lbnRWYWx1ZSggZWxlbWVudCApO1xuXHRcdFx0cmV0dXJuICEkLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLmNhbGwoIHRoaXMsIHZhbCwgZWxlbWVudCApICYmIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xuXHRcdH0sXG5cblx0XHRzdGFydFJlcXVlc3Q6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5wZW5kaW5nWyBlbGVtZW50Lm5hbWUgXSApIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdCsrO1xuXHRcdFx0XHQkKCBlbGVtZW50ICkuYWRkQ2xhc3MoIHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzICk7XG5cdFx0XHRcdHRoaXMucGVuZGluZ1sgZWxlbWVudC5uYW1lIF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzdG9wUmVxdWVzdDogZnVuY3Rpb24oIGVsZW1lbnQsIHZhbGlkICkge1xuXHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdC0tO1xuXG5cdFx0XHQvLyBTb21ldGltZXMgc3luY2hyb25pemF0aW9uIGZhaWxzLCBtYWtlIHN1cmUgcGVuZGluZ1JlcXVlc3QgaXMgbmV2ZXIgPCAwXG5cdFx0XHRpZiAoIHRoaXMucGVuZGluZ1JlcXVlc3QgPCAwICkge1xuXHRcdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0ID0gMDtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSB0aGlzLnBlbmRpbmdbIGVsZW1lbnQubmFtZSBdO1xuXHRcdFx0JCggZWxlbWVudCApLnJlbW92ZUNsYXNzKCB0aGlzLnNldHRpbmdzLnBlbmRpbmdDbGFzcyApO1xuXHRcdFx0aWYgKCB2YWxpZCAmJiB0aGlzLnBlbmRpbmdSZXF1ZXN0ID09PSAwICYmIHRoaXMuZm9ybVN1Ym1pdHRlZCAmJiB0aGlzLmZvcm0oKSApIHtcblx0XHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApLnN1Ym1pdCgpO1xuXHRcdFx0XHR0aGlzLmZvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoICF2YWxpZCAmJiB0aGlzLnBlbmRpbmdSZXF1ZXN0ID09PSAwICYmIHRoaXMuZm9ybVN1Ym1pdHRlZCApIHtcblx0XHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApLnRyaWdnZXJIYW5kbGVyKCBcImludmFsaWQtZm9ybVwiLCBbIHRoaXMgXSApO1xuXHRcdFx0XHR0aGlzLmZvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJldmlvdXNWYWx1ZTogZnVuY3Rpb24oIGVsZW1lbnQsIG1ldGhvZCApIHtcblx0XHRcdG1ldGhvZCA9IHR5cGVvZiBtZXRob2QgPT09IFwic3RyaW5nXCIgJiYgbWV0aG9kIHx8IFwicmVtb3RlXCI7XG5cblx0XHRcdHJldHVybiAkLmRhdGEoIGVsZW1lbnQsIFwicHJldmlvdXNWYWx1ZVwiICkgfHwgJC5kYXRhKCBlbGVtZW50LCBcInByZXZpb3VzVmFsdWVcIiwge1xuXHRcdFx0XHRvbGQ6IG51bGwsXG5cdFx0XHRcdHZhbGlkOiB0cnVlLFxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLmRlZmF1bHRNZXNzYWdlKCBlbGVtZW50LCB7IG1ldGhvZDogbWV0aG9kIH0gKVxuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHQvLyBDbGVhbnMgdXAgYWxsIGZvcm1zIGFuZCBlbGVtZW50cywgcmVtb3ZlcyB2YWxpZGF0b3Itc3BlY2lmaWMgZXZlbnRzXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnJlc2V0Rm9ybSgpO1xuXG5cdFx0XHQkKCB0aGlzLmN1cnJlbnRGb3JtIClcblx0XHRcdFx0Lm9mZiggXCIudmFsaWRhdGVcIiApXG5cdFx0XHRcdC5yZW1vdmVEYXRhKCBcInZhbGlkYXRvclwiIClcblx0XHRcdFx0LmZpbmQoIFwiLnZhbGlkYXRlLWVxdWFsVG8tYmx1clwiIClcblx0XHRcdFx0XHQub2ZmKCBcIi52YWxpZGF0ZS1lcXVhbFRvXCIgKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyggXCJ2YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIiApO1xuXHRcdH1cblxuXHR9LFxuXG5cdGNsYXNzUnVsZVNldHRpbmdzOiB7XG5cdFx0cmVxdWlyZWQ6IHsgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRlbWFpbDogeyBlbWFpbDogdHJ1ZSB9LFxuXHRcdHVybDogeyB1cmw6IHRydWUgfSxcblx0XHRkYXRlOiB7IGRhdGU6IHRydWUgfSxcblx0XHRkYXRlSVNPOiB7IGRhdGVJU086IHRydWUgfSxcblx0XHRudW1iZXI6IHsgbnVtYmVyOiB0cnVlIH0sXG5cdFx0ZGlnaXRzOiB7IGRpZ2l0czogdHJ1ZSB9LFxuXHRcdGNyZWRpdGNhcmQ6IHsgY3JlZGl0Y2FyZDogdHJ1ZSB9XG5cdH0sXG5cblx0YWRkQ2xhc3NSdWxlczogZnVuY3Rpb24oIGNsYXNzTmFtZSwgcnVsZXMgKSB7XG5cdFx0aWYgKCBjbGFzc05hbWUuY29uc3RydWN0b3IgPT09IFN0cmluZyApIHtcblx0XHRcdHRoaXMuY2xhc3NSdWxlU2V0dGluZ3NbIGNsYXNzTmFtZSBdID0gcnVsZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQuZXh0ZW5kKCB0aGlzLmNsYXNzUnVsZVNldHRpbmdzLCBjbGFzc05hbWUgKTtcblx0XHR9XG5cdH0sXG5cblx0Y2xhc3NSdWxlczogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0dmFyIHJ1bGVzID0ge30sXG5cdFx0XHRjbGFzc2VzID0gJCggZWxlbWVudCApLmF0dHIoIFwiY2xhc3NcIiApO1xuXG5cdFx0aWYgKCBjbGFzc2VzICkge1xuXHRcdFx0JC5lYWNoKCBjbGFzc2VzLnNwbGl0KCBcIiBcIiApLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzIGluICQudmFsaWRhdG9yLmNsYXNzUnVsZVNldHRpbmdzICkge1xuXHRcdFx0XHRcdCQuZXh0ZW5kKCBydWxlcywgJC52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3NbIHRoaXMgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiBydWxlcztcblx0fSxcblxuXHRub3JtYWxpemVBdHRyaWJ1dGVSdWxlOiBmdW5jdGlvbiggcnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUgKSB7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byBhIG51bWJlciBmb3IgbnVtYmVyIGlucHV0cywgYW5kIGZvciB0ZXh0IGZvciBiYWNrd2FyZHMgY29tcGFiaWxpdHlcblx0XHQvLyBhbGxvd3MgdHlwZT1cImRhdGVcIiBhbmQgb3RoZXJzIHRvIGJlIGNvbXBhcmVkIGFzIHN0cmluZ3Ncblx0XHRpZiAoIC9taW58bWF4fHN0ZXAvLnRlc3QoIG1ldGhvZCApICYmICggdHlwZSA9PT0gbnVsbCB8fCAvbnVtYmVyfHJhbmdlfHRleHQvLnRlc3QoIHR5cGUgKSApICkge1xuXHRcdFx0dmFsdWUgPSBOdW1iZXIoIHZhbHVlICk7XG5cblx0XHRcdC8vIFN1cHBvcnQgT3BlcmEgTWluaSwgd2hpY2ggcmV0dXJucyBOYU4gZm9yIHVuZGVmaW5lZCBtaW5sZW5ndGhcblx0XHRcdGlmICggaXNOYU4oIHZhbHVlICkgKSB7XG5cdFx0XHRcdHZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgfHwgdmFsdWUgPT09IDAgKSB7XG5cdFx0XHRydWxlc1sgbWV0aG9kIF0gPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSBtZXRob2QgJiYgdHlwZSAhPT0gXCJyYW5nZVwiICkge1xuXG5cdFx0XHQvLyBFeGNlcHRpb246IHRoZSBqcXVlcnkgdmFsaWRhdGUgJ3JhbmdlJyBtZXRob2Rcblx0XHRcdC8vIGRvZXMgbm90IHRlc3QgZm9yIHRoZSBodG1sNSAncmFuZ2UnIHR5cGVcblx0XHRcdHJ1bGVzWyBtZXRob2QgXSA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cdGF0dHJpYnV0ZVJ1bGVzOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR2YXIgcnVsZXMgPSB7fSxcblx0XHRcdCRlbGVtZW50ID0gJCggZWxlbWVudCApLFxuXHRcdFx0dHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApLFxuXHRcdFx0bWV0aG9kLCB2YWx1ZTtcblxuXHRcdGZvciAoIG1ldGhvZCBpbiAkLnZhbGlkYXRvci5tZXRob2RzICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0IGZvciA8aW5wdXQgcmVxdWlyZWQ+IGluIGJvdGggaHRtbDUgYW5kIG9sZGVyIGJyb3dzZXJzXG5cdFx0XHRpZiAoIG1ldGhvZCA9PT0gXCJyZXF1aXJlZFwiICkge1xuXHRcdFx0XHR2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCBtZXRob2QgKTtcblxuXHRcdFx0XHQvLyBTb21lIGJyb3dzZXJzIHJldHVybiBhbiBlbXB0eSBzdHJpbmcgZm9yIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gYW5kIG5vbi1IVE1MNSBicm93c2VycyBtaWdodCBoYXZlIHJlcXVpcmVkPVwiXCIgbWFya3VwXG5cdFx0XHRcdGlmICggdmFsdWUgPT09IFwiXCIgKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2Ugbm9uLUhUTUw1IGJyb3dzZXJzIHRvIHJldHVybiBib29sXG5cdFx0XHRcdHZhbHVlID0gISF2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gJGVsZW1lbnQuYXR0ciggbWV0aG9kICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZSggcnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyAnbWF4bGVuZ3RoJyBtYXkgYmUgcmV0dXJuZWQgYXMgLTEsIDIxNDc0ODM2NDcgKCBJRSApIGFuZCA1MjQyODggKCBzYWZhcmkgKSBmb3IgdGV4dCBpbnB1dHNcblx0XHRpZiAoIHJ1bGVzLm1heGxlbmd0aCAmJiAvLTF8MjE0NzQ4MzY0N3w1MjQyODgvLnRlc3QoIHJ1bGVzLm1heGxlbmd0aCApICkge1xuXHRcdFx0ZGVsZXRlIHJ1bGVzLm1heGxlbmd0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcnVsZXM7XG5cdH0sXG5cblx0ZGF0YVJ1bGVzOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR2YXIgcnVsZXMgPSB7fSxcblx0XHRcdCRlbGVtZW50ID0gJCggZWxlbWVudCApLFxuXHRcdFx0dHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApLFxuXHRcdFx0bWV0aG9kLCB2YWx1ZTtcblxuXHRcdGZvciAoIG1ldGhvZCBpbiAkLnZhbGlkYXRvci5tZXRob2RzICkge1xuXHRcdFx0dmFsdWUgPSAkZWxlbWVudC5kYXRhKCBcInJ1bGVcIiArIG1ldGhvZC5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgbWV0aG9kLnN1YnN0cmluZyggMSApLnRvTG93ZXJDYXNlKCkgKTtcblx0XHRcdHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZSggcnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJ1bGVzO1xuXHR9LFxuXG5cdHN0YXRpY1J1bGVzOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR2YXIgcnVsZXMgPSB7fSxcblx0XHRcdHZhbGlkYXRvciA9ICQuZGF0YSggZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiICk7XG5cblx0XHRpZiAoIHZhbGlkYXRvci5zZXR0aW5ncy5ydWxlcyApIHtcblx0XHRcdHJ1bGVzID0gJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZSggdmFsaWRhdG9yLnNldHRpbmdzLnJ1bGVzWyBlbGVtZW50Lm5hbWUgXSApIHx8IHt9O1xuXHRcdH1cblx0XHRyZXR1cm4gcnVsZXM7XG5cdH0sXG5cblx0bm9ybWFsaXplUnVsZXM6IGZ1bmN0aW9uKCBydWxlcywgZWxlbWVudCApIHtcblxuXHRcdC8vIEhhbmRsZSBkZXBlbmRlbmN5IGNoZWNrXG5cdFx0JC5lYWNoKCBydWxlcywgZnVuY3Rpb24oIHByb3AsIHZhbCApIHtcblxuXHRcdFx0Ly8gSWdub3JlIHJ1bGUgd2hlbiBwYXJhbSBpcyBleHBsaWNpdGx5IGZhbHNlLCBlZy4gcmVxdWlyZWQ6ZmFsc2Vcblx0XHRcdGlmICggdmFsID09PSBmYWxzZSApIHtcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzWyBwcm9wIF07XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICggdmFsLnBhcmFtIHx8IHZhbC5kZXBlbmRzICkge1xuXHRcdFx0XHR2YXIga2VlcFJ1bGUgPSB0cnVlO1xuXHRcdFx0XHRzd2l0Y2ggKCB0eXBlb2YgdmFsLmRlcGVuZHMgKSB7XG5cdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRrZWVwUnVsZSA9ICEhJCggdmFsLmRlcGVuZHMsIGVsZW1lbnQuZm9ybSApLmxlbmd0aDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0a2VlcFJ1bGUgPSB2YWwuZGVwZW5kcy5jYWxsKCBlbGVtZW50LCBlbGVtZW50ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBrZWVwUnVsZSApIHtcblx0XHRcdFx0XHRydWxlc1sgcHJvcCBdID0gdmFsLnBhcmFtICE9PSB1bmRlZmluZWQgPyB2YWwucGFyYW0gOiB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQuZGF0YSggZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiICkucmVzZXRFbGVtZW50cyggJCggZWxlbWVudCApICk7XG5cdFx0XHRcdFx0ZGVsZXRlIHJ1bGVzWyBwcm9wIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBFdmFsdWF0ZSBwYXJhbWV0ZXJzXG5cdFx0JC5lYWNoKCBydWxlcywgZnVuY3Rpb24oIHJ1bGUsIHBhcmFtZXRlciApIHtcblx0XHRcdHJ1bGVzWyBydWxlIF0gPSAkLmlzRnVuY3Rpb24oIHBhcmFtZXRlciApICYmIHJ1bGUgIT09IFwibm9ybWFsaXplclwiID8gcGFyYW1ldGVyKCBlbGVtZW50ICkgOiBwYXJhbWV0ZXI7XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xlYW4gbnVtYmVyIHBhcmFtZXRlcnNcblx0XHQkLmVhY2goIFsgXCJtaW5sZW5ndGhcIiwgXCJtYXhsZW5ndGhcIiBdLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggcnVsZXNbIHRoaXMgXSApIHtcblx0XHRcdFx0cnVsZXNbIHRoaXMgXSA9IE51bWJlciggcnVsZXNbIHRoaXMgXSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0XHQkLmVhY2goIFsgXCJyYW5nZWxlbmd0aFwiLCBcInJhbmdlXCIgXSwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcGFydHM7XG5cdFx0XHRpZiAoIHJ1bGVzWyB0aGlzIF0gKSB7XG5cdFx0XHRcdGlmICggJC5pc0FycmF5KCBydWxlc1sgdGhpcyBdICkgKSB7XG5cdFx0XHRcdFx0cnVsZXNbIHRoaXMgXSA9IFsgTnVtYmVyKCBydWxlc1sgdGhpcyBdWyAwIF0gKSwgTnVtYmVyKCBydWxlc1sgdGhpcyBdWyAxIF0gKSBdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgcnVsZXNbIHRoaXMgXSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRwYXJ0cyA9IHJ1bGVzWyB0aGlzIF0ucmVwbGFjZSggL1tcXFtcXF1dL2csIFwiXCIgKS5zcGxpdCggL1tcXHMsXSsvICk7XG5cdFx0XHRcdFx0cnVsZXNbIHRoaXMgXSA9IFsgTnVtYmVyKCBwYXJ0c1sgMCBdICksIE51bWJlciggcGFydHNbIDEgXSApIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRpZiAoICQudmFsaWRhdG9yLmF1dG9DcmVhdGVSYW5nZXMgKSB7XG5cblx0XHRcdC8vIEF1dG8tY3JlYXRlIHJhbmdlc1xuXHRcdFx0aWYgKCBydWxlcy5taW4gIT0gbnVsbCAmJiBydWxlcy5tYXggIT0gbnVsbCApIHtcblx0XHRcdFx0cnVsZXMucmFuZ2UgPSBbIHJ1bGVzLm1pbiwgcnVsZXMubWF4IF07XG5cdFx0XHRcdGRlbGV0ZSBydWxlcy5taW47XG5cdFx0XHRcdGRlbGV0ZSBydWxlcy5tYXg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHJ1bGVzLm1pbmxlbmd0aCAhPSBudWxsICYmIHJ1bGVzLm1heGxlbmd0aCAhPSBudWxsICkge1xuXHRcdFx0XHRydWxlcy5yYW5nZWxlbmd0aCA9IFsgcnVsZXMubWlubGVuZ3RoLCBydWxlcy5tYXhsZW5ndGggXTtcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1pbmxlbmd0aDtcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1heGxlbmd0aDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcnVsZXM7XG5cdH0sXG5cblx0Ly8gQ29udmVydHMgYSBzaW1wbGUgc3RyaW5nIHRvIGEge3N0cmluZzogdHJ1ZX0gcnVsZSwgZS5nLiwgXCJyZXF1aXJlZFwiIHRvIHtyZXF1aXJlZDp0cnVlfVxuXHRub3JtYWxpemVSdWxlOiBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dmFyIHRyYW5zZm9ybWVkID0ge307XG5cdFx0XHQkLmVhY2goIGRhdGEuc3BsaXQoIC9cXHMvICksIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0cmFuc2Zvcm1lZFsgdGhpcyBdID0gdHJ1ZTtcblx0XHRcdH0gKTtcblx0XHRcdGRhdGEgPSB0cmFuc2Zvcm1lZDtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kL1xuXHRhZGRNZXRob2Q6IGZ1bmN0aW9uKCBuYW1lLCBtZXRob2QsIG1lc3NhZ2UgKSB7XG5cdFx0JC52YWxpZGF0b3IubWV0aG9kc1sgbmFtZSBdID0gbWV0aG9kO1xuXHRcdCQudmFsaWRhdG9yLm1lc3NhZ2VzWyBuYW1lIF0gPSBtZXNzYWdlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlIDogJC52YWxpZGF0b3IubWVzc2FnZXNbIG5hbWUgXTtcblx0XHRpZiAoIG1ldGhvZC5sZW5ndGggPCAzICkge1xuXHRcdFx0JC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyggbmFtZSwgJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZSggbmFtZSApICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9qUXVlcnkudmFsaWRhdG9yLm1ldGhvZHMvXG5cdG1ldGhvZHM6IHtcblxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9yZXF1aXJlZC1tZXRob2QvXG5cdFx0cmVxdWlyZWQ6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0gKSB7XG5cblx0XHRcdC8vIENoZWNrIGlmIGRlcGVuZGVuY3kgaXMgbWV0XG5cdFx0XHRpZiAoICF0aGlzLmRlcGVuZCggcGFyYW0sIGVsZW1lbnQgKSApIHtcblx0XHRcdFx0cmV0dXJuIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIgKSB7XG5cblx0XHRcdFx0Ly8gQ291bGQgYmUgYW4gYXJyYXkgZm9yIHNlbGVjdC1tdWx0aXBsZSBvciBhIHN0cmluZywgYm90aCBhcmUgZmluZSB0aGlzIHdheVxuXHRcdFx0XHR2YXIgdmFsID0gJCggZWxlbWVudCApLnZhbCgpO1xuXHRcdFx0XHRyZXR1cm4gdmFsICYmIHZhbC5sZW5ndGggPiAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCB0aGlzLmNoZWNrYWJsZSggZWxlbWVudCApICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRMZW5ndGgoIHZhbHVlLCBlbGVtZW50ICkgPiAwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9lbWFpbC1tZXRob2QvXG5cdFx0ZW1haWw6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCApIHtcblxuXHRcdFx0Ly8gRnJvbSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI3ZhbGlkLWUtbWFpbC1hZGRyZXNzXG5cdFx0XHQvLyBSZXRyaWV2ZWQgMjAxNC0wMS0xNFxuXHRcdFx0Ly8gSWYgeW91IGhhdmUgYSBwcm9ibGVtIHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbiwgcmVwb3J0IGEgYnVnIGFnYWluc3QgdGhlIGFib3ZlIHNwZWNcblx0XHRcdC8vIE9yIHVzZSBjdXN0b20gbWV0aG9kcyB0byBpbXBsZW1lbnQgeW91ciBvd24gZW1haWwgdmFsaWRhdGlvblxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KCB2YWx1ZSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdXJsLW1ldGhvZC9cblx0XHR1cmw6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCApIHtcblxuXHRcdFx0Ly8gQ29weXJpZ2h0IChjKSAyMDEwLTIwMTMgRGllZ28gUGVyaW5pLCBNSVQgbGljZW5zZWRcblx0XHRcdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2RwZXJpbmkvNzI5Mjk0XG5cdFx0XHQvLyBzZWUgYWxzbyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvZGVtby91cmwtcmVnZXhcblx0XHRcdC8vIG1vZGlmaWVkIHRvIGFsbG93IHByb3RvY29sLXJlbGF0aXZlIFVSTHNcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pLnRlc3QoIHZhbHVlICk7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9kYXRlLW1ldGhvZC9cblx0XHRkYXRlOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8ICEvSW52YWxpZHxOYU4vLnRlc3QoIG5ldyBEYXRlKCB2YWx1ZSApLnRvU3RyaW5nKCkgKTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RhdGVJU08tbWV0aG9kL1xuXHRcdGRhdGVJU086IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCApIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgL15cXGR7NH1bXFwvXFwtXSgwP1sxLTldfDFbMDEyXSlbXFwvXFwtXSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkLy50ZXN0KCB2YWx1ZSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbnVtYmVyLW1ldGhvZC9cblx0XHRudW1iZXI6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCApIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgL14oPzotP1xcZCt8LT9cXGR7MSwzfSg/OixcXGR7M30pKyk/KD86XFwuXFxkKyk/JC8udGVzdCggdmFsdWUgKTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RpZ2l0cy1tZXRob2QvXG5cdFx0ZGlnaXRzOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IC9eXFxkKyQvLnRlc3QoIHZhbHVlICk7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9taW5sZW5ndGgtbWV0aG9kL1xuXHRcdG1pbmxlbmd0aDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkoIHZhbHVlICkgPyB2YWx1ZS5sZW5ndGggOiB0aGlzLmdldExlbmd0aCggdmFsdWUsIGVsZW1lbnQgKTtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgbGVuZ3RoID49IHBhcmFtO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWF4bGVuZ3RoLW1ldGhvZC9cblx0XHRtYXhsZW5ndGg6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0gKSB7XG5cdFx0XHR2YXIgbGVuZ3RoID0gJC5pc0FycmF5KCB2YWx1ZSApID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgoIHZhbHVlLCBlbGVtZW50ICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IGxlbmd0aCA8PSBwYXJhbTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JhbmdlbGVuZ3RoLW1ldGhvZC9cblx0XHRyYW5nZWxlbmd0aDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkoIHZhbHVlICkgPyB2YWx1ZS5sZW5ndGggOiB0aGlzLmdldExlbmd0aCggdmFsdWUsIGVsZW1lbnQgKTtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgKCBsZW5ndGggPj0gcGFyYW1bIDAgXSAmJiBsZW5ndGggPD0gcGFyYW1bIDEgXSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWluLW1ldGhvZC9cblx0XHRtaW46IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0gKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IHZhbHVlID49IHBhcmFtO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWF4LW1ldGhvZC9cblx0XHRtYXg6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0gKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IHZhbHVlIDw9IHBhcmFtO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmFuZ2UtbWV0aG9kL1xuXHRcdHJhbmdlOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQsIHBhcmFtICkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCAoIHZhbHVlID49IHBhcmFtWyAwIF0gJiYgdmFsdWUgPD0gcGFyYW1bIDEgXSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvc3RlcC1tZXRob2QvXG5cdFx0c3RlcDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblx0XHRcdHZhciB0eXBlID0gJCggZWxlbWVudCApLmF0dHIoIFwidHlwZVwiICksXG5cdFx0XHRcdGVycm9yTWVzc2FnZSA9IFwiU3RlcCBhdHRyaWJ1dGUgb24gaW5wdXQgdHlwZSBcIiArIHR5cGUgKyBcIiBpcyBub3Qgc3VwcG9ydGVkLlwiLFxuXHRcdFx0XHRzdXBwb3J0ZWRUeXBlcyA9IFsgXCJ0ZXh0XCIsIFwibnVtYmVyXCIsIFwicmFuZ2VcIiBdLFxuXHRcdFx0XHRyZSA9IG5ldyBSZWdFeHAoIFwiXFxcXGJcIiArIHR5cGUgKyBcIlxcXFxiXCIgKSxcblx0XHRcdFx0bm90U3VwcG9ydGVkID0gdHlwZSAmJiAhcmUudGVzdCggc3VwcG9ydGVkVHlwZXMuam9pbigpICksXG5cdFx0XHRcdGRlY2ltYWxQbGFjZXMgPSBmdW5jdGlvbiggbnVtICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaCA9ICggXCJcIiArIG51bSApLm1hdGNoKCAvKD86XFwuKFxcZCspKT8kLyApO1xuXHRcdFx0XHRcdGlmICggIW1hdGNoICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuXHRcdFx0XHRcdHJldHVybiBtYXRjaFsgMSBdID8gbWF0Y2hbIDEgXS5sZW5ndGggOiAwO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0b0ludCA9IGZ1bmN0aW9uKCBudW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgucm91bmQoIG51bSAqIE1hdGgucG93KCAxMCwgZGVjaW1hbHMgKSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWxpZCA9IHRydWUsXG5cdFx0XHRcdGRlY2ltYWxzO1xuXG5cdFx0XHQvLyBXb3JrcyBvbmx5IGZvciB0ZXh0LCBudW1iZXIgYW5kIHJhbmdlIGlucHV0IHR5cGVzXG5cdFx0XHQvLyBUT0RPIGZpbmQgYSB3YXkgdG8gc3VwcG9ydCBpbnB1dCB0eXBlcyBkYXRlLCBkYXRldGltZSwgZGF0ZXRpbWUtbG9jYWwsIG1vbnRoLCB0aW1lIGFuZCB3ZWVrXG5cdFx0XHRpZiAoIG5vdFN1cHBvcnRlZCApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBlcnJvck1lc3NhZ2UgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVjaW1hbHMgPSBkZWNpbWFsUGxhY2VzKCBwYXJhbSApO1xuXG5cdFx0XHQvLyBWYWx1ZSBjYW4ndCBoYXZlIHRvbyBtYW55IGRlY2ltYWxzXG5cdFx0XHRpZiAoIGRlY2ltYWxQbGFjZXMoIHZhbHVlICkgPiBkZWNpbWFscyB8fCB0b0ludCggdmFsdWUgKSAlIHRvSW50KCBwYXJhbSApICE9PSAwICkge1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IHZhbGlkO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZXF1YWxUby1tZXRob2QvXG5cdFx0ZXF1YWxUbzogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblxuXHRcdFx0Ly8gQmluZCB0byB0aGUgYmx1ciBldmVudCBvZiB0aGUgdGFyZ2V0IGluIG9yZGVyIHRvIHJldmFsaWRhdGUgd2hlbmV2ZXIgdGhlIHRhcmdldCBmaWVsZCBpcyB1cGRhdGVkXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJCggcGFyYW0gKTtcblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5vbmZvY3Vzb3V0ICYmIHRhcmdldC5ub3QoIFwiLnZhbGlkYXRlLWVxdWFsVG8tYmx1clwiICkubGVuZ3RoICkge1xuXHRcdFx0XHR0YXJnZXQuYWRkQ2xhc3MoIFwidmFsaWRhdGUtZXF1YWxUby1ibHVyXCIgKS5vbiggXCJibHVyLnZhbGlkYXRlLWVxdWFsVG9cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCggZWxlbWVudCApLnZhbGlkKCk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0LnZhbCgpO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmVtb3RlLW1ldGhvZC9cblx0XHRyZW1vdGU6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0sIG1ldGhvZCApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25hbCggZWxlbWVudCApICkge1xuXHRcdFx0XHRyZXR1cm4gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XG5cdFx0XHR9XG5cblx0XHRcdG1ldGhvZCA9IHR5cGVvZiBtZXRob2QgPT09IFwic3RyaW5nXCIgJiYgbWV0aG9kIHx8IFwicmVtb3RlXCI7XG5cblx0XHRcdHZhciBwcmV2aW91cyA9IHRoaXMucHJldmlvdXNWYWx1ZSggZWxlbWVudCwgbWV0aG9kICksXG5cdFx0XHRcdHZhbGlkYXRvciwgZGF0YSwgb3B0aW9uRGF0YVN0cmluZztcblxuXHRcdFx0aWYgKCAhdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF0gKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbIGVsZW1lbnQubmFtZSBdID0ge307XG5cdFx0XHR9XG5cdFx0XHRwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2UgPSBwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2UgfHwgdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF1bIG1ldGhvZCBdO1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF1bIG1ldGhvZCBdID0gcHJldmlvdXMubWVzc2FnZTtcblxuXHRcdFx0cGFyYW0gPSB0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIgJiYgeyB1cmw6IHBhcmFtIH0gfHwgcGFyYW07XG5cdFx0XHRvcHRpb25EYXRhU3RyaW5nID0gJC5wYXJhbSggJC5leHRlbmQoIHsgZGF0YTogdmFsdWUgfSwgcGFyYW0uZGF0YSApICk7XG5cdFx0XHRpZiAoIHByZXZpb3VzLm9sZCA9PT0gb3B0aW9uRGF0YVN0cmluZyApIHtcblx0XHRcdFx0cmV0dXJuIHByZXZpb3VzLnZhbGlkO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmV2aW91cy5vbGQgPSBvcHRpb25EYXRhU3RyaW5nO1xuXHRcdFx0dmFsaWRhdG9yID0gdGhpcztcblx0XHRcdHRoaXMuc3RhcnRSZXF1ZXN0KCBlbGVtZW50ICk7XG5cdFx0XHRkYXRhID0ge307XG5cdFx0XHRkYXRhWyBlbGVtZW50Lm5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0JC5hamF4KCAkLmV4dGVuZCggdHJ1ZSwge1xuXHRcdFx0XHRtb2RlOiBcImFib3J0XCIsXG5cdFx0XHRcdHBvcnQ6IFwidmFsaWRhdGVcIiArIGVsZW1lbnQubmFtZSxcblx0XHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRjb250ZXh0OiB2YWxpZGF0b3IuY3VycmVudEZvcm0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25zZSApIHtcblx0XHRcdFx0XHR2YXIgdmFsaWQgPSByZXNwb25zZSA9PT0gdHJ1ZSB8fCByZXNwb25zZSA9PT0gXCJ0cnVlXCIsXG5cdFx0XHRcdFx0XHRlcnJvcnMsIG1lc3NhZ2UsIHN1Ym1pdHRlZDtcblxuXHRcdFx0XHRcdHZhbGlkYXRvci5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF1bIG1ldGhvZCBdID0gcHJldmlvdXMub3JpZ2luYWxNZXNzYWdlO1xuXHRcdFx0XHRcdGlmICggdmFsaWQgKSB7XG5cdFx0XHRcdFx0XHRzdWJtaXR0ZWQgPSB2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZDtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5yZXNldEludGVybmFscygpO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnRvSGlkZSA9IHZhbGlkYXRvci5lcnJvcnNGb3IoIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5mb3JtU3VibWl0dGVkID0gc3VibWl0dGVkO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnN1Y2Nlc3NMaXN0LnB1c2goIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5pbnZhbGlkWyBlbGVtZW50Lm5hbWUgXSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnNob3dFcnJvcnMoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZXJyb3JzID0ge307XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2UgfHwgdmFsaWRhdG9yLmRlZmF1bHRNZXNzYWdlKCBlbGVtZW50LCB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbWV0ZXJzOiB2YWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRlcnJvcnNbIGVsZW1lbnQubmFtZSBdID0gcHJldmlvdXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0XHRcdFx0XHR2YWxpZGF0b3IuaW52YWxpZFsgZWxlbWVudC5uYW1lIF0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnNob3dFcnJvcnMoIGVycm9ycyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmV2aW91cy52YWxpZCA9IHZhbGlkO1xuXHRcdFx0XHRcdHZhbGlkYXRvci5zdG9wUmVxdWVzdCggZWxlbWVudCwgdmFsaWQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgcGFyYW0gKSApO1xuXHRcdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHRcdH1cblx0fVxuXG59ICk7XG5cbi8vIEFqYXggbW9kZTogYWJvcnRcbi8vIHVzYWdlOiAkLmFqYXgoeyBtb2RlOiBcImFib3J0XCJbLCBwb3J0OiBcInVuaXF1ZXBvcnRcIl19KTtcbi8vIGlmIG1vZGU6XCJhYm9ydFwiIGlzIHVzZWQsIHRoZSBwcmV2aW91cyByZXF1ZXN0IG9uIHRoYXQgcG9ydCAocG9ydCBjYW4gYmUgdW5kZWZpbmVkKSBpcyBhYm9ydGVkIHZpYSBYTUxIdHRwUmVxdWVzdC5hYm9ydCgpXG5cbnZhciBwZW5kaW5nUmVxdWVzdHMgPSB7fSxcblx0YWpheDtcblxuLy8gVXNlIGEgcHJlZmlsdGVyIGlmIGF2YWlsYWJsZSAoMS41KylcbmlmICggJC5hamF4UHJlZmlsdGVyICkge1xuXHQkLmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzZXR0aW5ncywgXywgeGhyICkge1xuXHRcdHZhciBwb3J0ID0gc2V0dGluZ3MucG9ydDtcblx0XHRpZiAoIHNldHRpbmdzLm1vZGUgPT09IFwiYWJvcnRcIiApIHtcblx0XHRcdGlmICggcGVuZGluZ1JlcXVlc3RzWyBwb3J0IF0gKSB7XG5cdFx0XHRcdHBlbmRpbmdSZXF1ZXN0c1sgcG9ydCBdLmFib3J0KCk7XG5cdFx0XHR9XG5cdFx0XHRwZW5kaW5nUmVxdWVzdHNbIHBvcnQgXSA9IHhocjtcblx0XHR9XG5cdH0gKTtcbn0gZWxzZSB7XG5cblx0Ly8gUHJveHkgYWpheFxuXHRhamF4ID0gJC5hamF4O1xuXHQkLmFqYXggPSBmdW5jdGlvbiggc2V0dGluZ3MgKSB7XG5cdFx0dmFyIG1vZGUgPSAoIFwibW9kZVwiIGluIHNldHRpbmdzID8gc2V0dGluZ3MgOiAkLmFqYXhTZXR0aW5ncyApLm1vZGUsXG5cdFx0XHRwb3J0ID0gKCBcInBvcnRcIiBpbiBzZXR0aW5ncyA/IHNldHRpbmdzIDogJC5hamF4U2V0dGluZ3MgKS5wb3J0O1xuXHRcdGlmICggbW9kZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0aWYgKCBwZW5kaW5nUmVxdWVzdHNbIHBvcnQgXSApIHtcblx0XHRcdFx0cGVuZGluZ1JlcXVlc3RzWyBwb3J0IF0uYWJvcnQoKTtcblx0XHRcdH1cblx0XHRcdHBlbmRpbmdSZXF1ZXN0c1sgcG9ydCBdID0gYWpheC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRyZXR1cm4gcGVuZGluZ1JlcXVlc3RzWyBwb3J0IF07XG5cdFx0fVxuXHRcdHJldHVybiBhamF4LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0fTtcbn1cbnJldHVybiAkO1xufSkpOyJdLCJmaWxlIjoianF1ZXJ5LnZhbGlkYXRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

/* eslint-disable */
var BriefingForm = (function ($) {
	'use strict';
    // All the static variables used throughout the code.
    var form = '.js-form',
        button = '.js-check-validity',
        sidebarButton = '.js-sidebar-link',
        nav = '.c-proposal__navigation',
        inputSection = '.c-proposal__input-section',
        inputWrapper = '.c-proposal__input-wrapper',
        checkTypes = 'input,textarea',
        leftRight = '.js-navigate',
        formSection = '.js-form-section',
        textArea = '.c-proposal__textarea-input',
        text = '.c-proposal__input-text',
        email = '.c-proposal__input-email',
        file = '.c-proposal__input-upload',
        radio = '.c-proposal__input-radio',
        radioLabel = '.js-radio-input',
        completeSectionShowing = '.c-proposal__form-section.is--showing',
        uploadBriefHeight = 300,
        proposalTab = '.js-proposal__tabs';

    // Updates hidden fields for checkboxes as umbraco adds hiddenfields that need to be toggled.
    var _updateHiddenFieldValues = function(){
        $('.js-checkbox--hidden-field').on('click', function(){
            var attr = $(this).attr('for');
            var targetTrueFalse = $("input[id='"+attr+"']").attr('value');
            if(targetTrueFalse === "false"){
                $("input[id='"+attr+"']").attr('value','true');
                $("input[name='"+attr+"']").attr('value','true');
            }else{
                $("input[id='"+attr+"']").attr('value','false');
                $("input[name='"+attr+"']").attr('value','false');
            }
        });
    };
    // JS to check file size, type and add all elements to work with this
    var _fileUpload = function(){
        $('form input[type="file"]').on('change focusout click keyup',function () {
            var file = this.files[0];
            var fileName = file.name;
            var fileSize = file.size;

            var ext = $('.c-proposal__input-upload').val().split('.').pop().toLowerCase();
            if($.inArray(ext, ['pdf','docx']) === -1) {
                // wrong file type
                $('.c-proposal__file-upload-text').children('span').text("Only PDF (.pdf) or Word Documents (.docx) are aloud.");
                $('.c-proposal__replace').removeClass('is-active');
                $('.c-proposal__input-upload').addClass('error').removeClass('valid');
                setTimeout(function(){
                    $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                },10);

            }
            else if(fileSize >= 2000000){
                // file too large
                $('.c-proposal__file-upload-text').children('span').text("Max file size is 2MB.");
                $('.c-proposal__replace').removeClass('is-active');
                $('.c-proposal__input-upload').addClass('error').removeClass('valid');
                setTimeout(function(){
                    $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                },10);
            }else{
                // ahh just right
                $('.js-ignore-from-validation').addClass('is--valid');
                $('.c-proposal__file-upload-text').children('span').text(fileName+" uploaded successfully.");
                $('.c-proposal__replace').addClass('is-active');
                $(this).removeClass('error').addClass('valid');
                setTimeout(function(){
                    $(completeSectionShowing).children(nav).children(button).removeClass('is--disabled');
                    $('.js-breif-id').removeClass('is--disabled-override');
                },10);
            }
        });
    };
    // When the next / previous button is clicked the screen is scrolled.
    var _scrollTop = function(wWidth){
        if(wWidth >= 1000){
            $('.js-navigate').on('click', function(){
                if(!$(this).hasClass('is--disabled')){
                    $('body,html').animate({scrollTop: 390}, 500);
                }
            });
        }else{
            $('.js-navigate').on('click', function(){
                if(!$(this).hasClass('is--disabled')){
                    $('body,html').animate({scrollTop: 275}, 500);
                }
            });
        }
    };
    // Updates the height of the form when the screen is resized
    var _updateSectionHeight = function(){
        var resizedHeight = $(completeSectionShowing).outerHeight();
        $(form).height(resizedHeight);
		/*
        $('.c-proposal__textarea-input').on('keyup click change', function(){
            var resizedHeight = $(completeSectionShowing).outerHeight();
            $(form).height(resizedHeight);
        });
		*/
    };
    // Check the validity of the current input / textareas on button press
    var _focus = function(){
        $('.js-navigate').on('click keyup', function(){
            if(!$(this).hasClass('is--disabled')){
                var target = $(this).attr('id');
                setTimeout(function(){
                    $('.c-proposal__form-section.is--showing[id="'+target+'"]').first().children('.c-proposal__input-section').each(function(){
                        $(this).children('.js--first--focus--input').first().children('input,textarea').focus();
                    });
                },25);
            }
        });
    };
    // Toggle animation for next / previous section
    var _toggleSection = function(){
        $(leftRight).on('click',function(){
            var $this = $(this);
            var attr = $(this).attr('id');
            var newHeight = $('.js-form-section[id="'+attr+'"]').outerHeight();
            if(!$(this).hasClass('is--disabled')){
                var navigateTo = $(this).attr('id');
                $(form).animate({height: newHeight});
                if(!$this.hasClass('navigation--left')){;
                    var $current = $('.js-form-section.is--showing');
                    var $next = $('.js-form-section[id="'+navigateTo+'"]');
                    $current.addClass('left');
                    $next.addClass('right').addClass('is--showing');
                    setTimeout(function(){
                        $('.js-form-section[id="'+navigateTo+'"]').removeClass('right');
                        $current.removeClass('left').removeClass('is--showing');
                    },425);
                }else{
                    var $current = $('.js-form-section.is--showing');
                    var $next = $('.js-form-section[id="'+navigateTo+'"]');
                    $current.addClass('right');
                    $next.addClass('left').addClass('is--showing');
                    setTimeout(function(){
                        $('.js-form-section[id="'+navigateTo+'"]').removeClass('left');
                        $current.removeClass('right').removeClass('is--showing');
                    },425);
                }
            }
        });
        $(leftRight).keypress(function(e){
            if(e.keyCode === 13){
                var $this = $(this);
                var attr = $(this).attr('id');
                var newHeight = $('.js-form-section[id="'+attr+'"]').outerHeight();
                if(!$(this).hasClass('is--disabled')){
                    var navigateTo = $(this).attr('id');
                    $(form).animate({height: newHeight});
                    $('body,html').animate({scrollTop: 390}, 500);
                    if(!$this.hasClass('navigation--left')){;
                        var $current = $('.js-form-section.is--showing');
                        var $next = $('.js-form-section[id="'+navigateTo+'"]');
                        $current.addClass('left');
                        $next.addClass('right').addClass('is--showing');
                        setTimeout(function(){
                            $('.js-form-section[id="'+navigateTo+'"]').removeClass('right');
                            $current.removeClass('left').removeClass('is--showing');
                        },425);
                    }else{
                        var $current = $('.js-form-section.is--showing');
                        var $next = $('.js-form-section[id="'+navigateTo+'"]');
                        $current.addClass('right');
                        $next.addClass('left').addClass('is--showing');
                        setTimeout(function(){
                            $('.js-form-section[id="'+navigateTo+'"]').removeClass('left');
                            $current.removeClass('right').removeClass('is--showing');
                        },425);
                    }
                }
            }
        });
    };
    // Code to show the pip for the correct section in the sidebar
    var _getCurrentSection = function(){
        $(leftRight).on('click', function(){
            if(!$(this).hasClass('is--disabled')){
                var $this = $(this),
                    nextSection = $this.attr('data-section');
                $(sidebarButton).removeClass('showing--pip');
                $('.js-sidebar-link.'+nextSection).addClass('showing--pip');
            }
        });
    };
    // Proposal buttons can be found in the build your proposal section.
    var _proposalButtonClick = function(){
        $(proposalTab).click(function(){
            var $this = $(this),
                thisId = $this.attr('id'),
                newHeight = $('.js-form-section[id="'+thisId+'"]').outerHeight();
            $('.js-form-section').removeClass('is--showing');
            $('.js-form-section[id="'+thisId+'"]').addClass('is--showing');
            $(form).height(newHeight);
        });
    };
    // Event handlers.
    var _checkValidity = function(){
        // Adds enter button functionality to span for back and next.
        $(button).keypress(function(e){
            if(e.keyCode === 13){
                var validElements = 0;
                var totalElements = 0;
                var sideBarSection = $(this).attr('data-section');
                $(this).parent(nav).siblings(inputSection).children(inputWrapper).children(checkTypes).each(function(){
                    totalElements++;
                    if($(this).valid()){
                        validElements++;
                    }
                });
                if(totalElements === validElements){
                    $('.'+sideBarSection).addClass('js-active');
                }
            }
        });
        // Updates the sidebar js-active class
        $(button).on('click',function(){
            var validElements = 0;
            var totalElements = 0;
            var sideBarSection = $(this).attr('data-section');
            $(this).parent(nav).siblings(inputSection).children(inputWrapper).children(checkTypes).each(function(){
                totalElements++;
                if($(this).valid()){
                    validElements++;
                }
            });
            if(totalElements === validElements){
                $('.'+sideBarSection).addClass('js-active');
            }
        });
        // Adds valid or not valid to all text inputs
        $(text).on('focusout keyup',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
            if($this.val()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // Adds valid or not valid to all email inputs
        $(email).on('focusout keyup',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
            if($this.val()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // Adds the valud valid or not valid to all textareas
        $(textArea).on('focusout keyup click',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // Adds valid or not valid to all file inputs
        $(file).on('change focusout keyup',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // adds valid to all radio buttons that are the same as the one clicked.
        $(radio).on('click change keyup focusout',function(){
            var $this = $(this);
            var name = $this.attr('name');
            $(completeSectionShowing).children(inputSection).children(inputWrapper).children('input[name="'+ name +'"]').addClass('valid').removeAttr('required').removeClass('not-valid').attr('aria-invalid','false');
        });
        // adds valid to all radio buttons that are the same as the one clicked.
        $(radioLabel).on('click change keyup focusout',function(){
            var $this = $(this);
            var siblingName = $this.siblings(radio).attr('name');
            $(completeSectionShowing).children(inputSection).children(inputWrapper).children('input[name="'+ siblingName +'"]').addClass('valid').removeClass('not-valid').attr('aria-invalid','false');
        });
        // Checks if all the sections up to the section clicked are valid, if they are it takes the user to that section.
        $(sidebarButton).on('click',function(){
            var $this = $(this),
                targetId = parseInt($this.attr('id'));

            $(formSection).each(function(){
                var $self = $(this),
                    thisId = parseInt($self.attr('id'));

                if(targetId !== thisId){
                    if(!$self.hasClass('is--valid')){
                        return false;
                    }
                }
                else{
                    var newHeight = $('.js-form-section[id="'+targetId+'"]').outerHeight();
                    $(form).height(newHeight);
                    $('.js-form-section').removeClass('is--showing');
                    $(sidebarButton).removeClass('showing--pip');
                    $this.addClass('js-active').addClass('showing--pip');
                    $('.js-form-section[id="'+targetId+'"]').addClass('is--showing');
                    return false;
                }
            });
        });
    };
    // Custom JS for brief upload / creation
    var _brief = function(){
        $('.js-create-brief').on('click', function(){
            if($('.js-brief-upload-input').hasClass('js--showing')){
                var currentHeight = $(form).outerHeight();
                var newHeight = currentHeight - uploadBriefHeight;
                $(form).height(newHeight);
            }
            $('.js-brief-upload-input').removeClass('js--showing').addClass('js--is-minimised');
            $('.js-brief').attr('aria-required','false').addClass('valid');
            $('.js-breif-id').attr('id','3').attr('data-section','js-the-brief');
            $('.js-brief-build-back').attr('id','9');
            $('.c-proposal__max-file-size').removeClass('is--showing');
            $('.js-toggle-brief-required').removeAttr('required');
            $('.js-not-required').attr('required');
        });
        $('.js-already-have-a-brief').on('click', function(){
            if($('.js-brief-upload-input').hasClass('js--is-minimised')){
                var currentHeight = $(form).outerHeight();
                var newHeight = currentHeight + uploadBriefHeight;
                $(form).height(newHeight);
            }
            $('.js-brief-upload-input').addClass('js--showing').removeClass('js--is-minimised');
            $('.js-brief').attr('aria-required','true').removeClass('valid');
            $('.js-breif-id').attr('id','10').attr('data-section','js-build-your-proposal');
            $('.js-brief-build-back').attr('id','2');
            $('.js-toggle-brief-required').attr('required');
            $('.js-not-required').removeAttr('required');
            setTimeout(function(){
                $('.c-proposal__max-file-size').addClass('is--showing');
            },250);
            if($('.c-proposal__input-upload.js-brief').get(0).files.length === 0){
                $('.js-breif-id').addClass('is--disabled-override');
            }else{
                $('.js-breif-id').removeClass('is--disabled-override');
            }
        });
    };
    // When a input or textarea is {{event}} this function is run that checks the whole section for validity. If valid - button updated
    // THE INPUT / TEXTAREA IS CHECKED FOR THE CLASS 'valid'
    var _toggleNextButton = function(){
        $(checkTypes).on('click focusout keyup change keydown', function(){
            var validElements = 0,
                totalElements = 0;

            $(completeSectionShowing).children(inputSection).children(inputWrapper).each(function(){
                var type = $(this).children(checkTypes).attr('type');
                // File ignored as its not always mandatory (brief can be created also)
                if(type !== 'file'){
                    totalElements++;
                    if($(this).children(checkTypes).hasClass('valid')){
                        validElements++;
                    }
                }
            });

            if(totalElements === validElements){
                $(completeSectionShowing).children(nav).children(button).removeClass('is--disabled');
                $(completeSectionShowing).addClass('is--valid');
            }else{
                $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                $(completeSectionShowing).removeClass('is--valid');
            }
        });
    };
    // JS for local storage. On click each input / textarea is checked for if it has local storage.
    var _checkForLocalStorage = function(){
        // Only check the is showing section initally
        var totalFields = $(completeSectionShowing).children(inputSection).children(inputWrapper).children(checkTypes),
        numberInThisSection = 0,
        numberOfValidInput = 0;

        setTimeout(function(){
            $(totalFields).each(function(){
                numberInThisSection++;
                if(!$.trim(this.value).length) {
                    $(this).removeClass('valid').attr('aria-invalid','true');
                }else{
                    $(this).addClass('valid').attr('aria-invalid','false').removeAttr('required');
                    numberOfValidInput++;
                }
            });
            if(numberInThisSection === numberOfValidInput){
                $(completeSectionShowing).children(nav).children(button).removeClass('is--disabled');
                $(completeSectionShowing).addClass('is--valid');
            }else{
                $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                $(completeSectionShowing).removeClass('is--valid');
            }
            $('input[type="checkbox"]').each(function(){
                var check = $(this).attr('checked');
                if(check === 'checked'){
                    var name = $(this).attr('name');
                    $('input[name="'+name+'"]').attr('value','true');
                }
            });

        },500);
    };
    // Check section being toggled to on button click.
    var _checkNextSection = function(){
        $(button).on('click hover focusout' ,function(){
            var $this = $(this),
                toggleTo = $this.attr('id'),
                totalElements = 0,
                totalRadio = 0,
                numberRadioValid = 0,
                numberOfValidInput = 0,
                arr = [];
            $('.js-form-section[id="'+toggleTo+'"]').children(inputSection).each(function(){
                var $self = $(this);

                $self.children(inputWrapper).each(function(){
                    var parent = $(this).children(checkTypes),
                        type = parent.attr('type'),
                        name = parent.attr('name'),
                        value = parent.val();
                    // ! radio or file or checkbox
                    if(type !== 'radio' && type !== 'file' && type !== 'checkbox'){
                        totalElements++;
                        if(value !== ''){
                            numberOfValidInput++;
                            $(parent).addClass('valid').attr('aria-invalid','false').removeAttr('required');
                        }else{
                            $(parent).removeClass('valid').attr('aria-invalid','true');
                        }
                    }
                    // radio only
                    else if(type === 'radio'){
                        // to stop both values being equal to 0 which will enable the button.
                        totalElements = 9999;
                        if($.inArray(name, arr) < 0){
                            arr.push(name);
                            totalRadio = arr.length;
                        }
                        if(parent.is(':checked')){
                            numberRadioValid++;
                            $('.c-proposal__input-radio[name="'+name+'"]').addClass('valid').attr('aria-required','false').removeAttr('required').attr('aria-invalid','false');
                        }
                    }
                    // checkbox only
                    else if(type === 'checkbox'){
                        console.log('test');
                        setTimeout(function(){
                            var chk = parent.attr('checked');
                            if(chk === 'checked'){
                                var nm = parent.attr('name');
                                console.log(nm);
                                $('input[name="'+nm+'"]').attr('value','true');
                            }
                        },500);
                    }
                });
                if(totalElements === numberOfValidInput){
                    $('.js-form-section[id="'+toggleTo+'"]').children(nav).children(button).removeClass('is--disabled');
                }
                if(totalRadio === numberRadioValid){
                    $('.js-form-section[id="'+toggleTo+'"]').children(nav).children('.js-radio-button').removeClass('is--disabled');
                }
            });
        });
    };

    // Function calls
    var init = function() {
        var wWidth = $(window).width();
		$(window).resize(function(){
            var wWidth = $(this).width();
            _updateSectionHeight();
            _scrollTop(wWidth);
		});
        _updateSectionHeight();
        _checkForLocalStorage();
        _checkNextSection();
        _focus();
        _getCurrentSection();
        _scrollTop(wWidth);
        _fileUpload();
        _checkValidity();
        _toggleSection();
        _toggleNextButton();
        _brief();
        _proposalButtonClick();
        _updateHiddenFieldValues();
	};

    return {
		init: init
	};

})(jQuery);
/* eslint-enable */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJicmllZmluZy1mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgQnJpZWZpbmdGb3JtID0gKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICAvLyBBbGwgdGhlIHN0YXRpYyB2YXJpYWJsZXMgdXNlZCB0aHJvdWdob3V0IHRoZSBjb2RlLlxuICAgIHZhciBmb3JtID0gJy5qcy1mb3JtJyxcbiAgICAgICAgYnV0dG9uID0gJy5qcy1jaGVjay12YWxpZGl0eScsXG4gICAgICAgIHNpZGViYXJCdXR0b24gPSAnLmpzLXNpZGViYXItbGluaycsXG4gICAgICAgIG5hdiA9ICcuYy1wcm9wb3NhbF9fbmF2aWdhdGlvbicsXG4gICAgICAgIGlucHV0U2VjdGlvbiA9ICcuYy1wcm9wb3NhbF9faW5wdXQtc2VjdGlvbicsXG4gICAgICAgIGlucHV0V3JhcHBlciA9ICcuYy1wcm9wb3NhbF9faW5wdXQtd3JhcHBlcicsXG4gICAgICAgIGNoZWNrVHlwZXMgPSAnaW5wdXQsdGV4dGFyZWEnLFxuICAgICAgICBsZWZ0UmlnaHQgPSAnLmpzLW5hdmlnYXRlJyxcbiAgICAgICAgZm9ybVNlY3Rpb24gPSAnLmpzLWZvcm0tc2VjdGlvbicsXG4gICAgICAgIHRleHRBcmVhID0gJy5jLXByb3Bvc2FsX190ZXh0YXJlYS1pbnB1dCcsXG4gICAgICAgIHRleHQgPSAnLmMtcHJvcG9zYWxfX2lucHV0LXRleHQnLFxuICAgICAgICBlbWFpbCA9ICcuYy1wcm9wb3NhbF9faW5wdXQtZW1haWwnLFxuICAgICAgICBmaWxlID0gJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnLFxuICAgICAgICByYWRpbyA9ICcuYy1wcm9wb3NhbF9faW5wdXQtcmFkaW8nLFxuICAgICAgICByYWRpb0xhYmVsID0gJy5qcy1yYWRpby1pbnB1dCcsXG4gICAgICAgIGNvbXBsZXRlU2VjdGlvblNob3dpbmcgPSAnLmMtcHJvcG9zYWxfX2Zvcm0tc2VjdGlvbi5pcy0tc2hvd2luZycsXG4gICAgICAgIHVwbG9hZEJyaWVmSGVpZ2h0ID0gMzAwLFxuICAgICAgICBwcm9wb3NhbFRhYiA9ICcuanMtcHJvcG9zYWxfX3RhYnMnO1xuXG4gICAgLy8gVXBkYXRlcyBoaWRkZW4gZmllbGRzIGZvciBjaGVja2JveGVzIGFzIHVtYnJhY28gYWRkcyBoaWRkZW5maWVsZHMgdGhhdCBuZWVkIHRvIGJlIHRvZ2dsZWQuXG4gICAgdmFyIF91cGRhdGVIaWRkZW5GaWVsZFZhbHVlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5qcy1jaGVja2JveC0taGlkZGVuLWZpZWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBhdHRyID0gJCh0aGlzKS5hdHRyKCdmb3InKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRUcnVlRmFsc2UgPSAkKFwiaW5wdXRbaWQ9J1wiK2F0dHIrXCInXVwiKS5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYodGFyZ2V0VHJ1ZUZhbHNlID09PSBcImZhbHNlXCIpe1xuICAgICAgICAgICAgICAgICQoXCJpbnB1dFtpZD0nXCIrYXR0citcIiddXCIpLmF0dHIoJ3ZhbHVlJywndHJ1ZScpO1xuICAgICAgICAgICAgICAgICQoXCJpbnB1dFtuYW1lPSdcIithdHRyK1wiJ11cIikuYXR0cigndmFsdWUnLCd0cnVlJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKFwiaW5wdXRbaWQ9J1wiK2F0dHIrXCInXVwiKS5hdHRyKCd2YWx1ZScsJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgJChcImlucHV0W25hbWU9J1wiK2F0dHIrXCInXVwiKS5hdHRyKCd2YWx1ZScsJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSlMgdG8gY2hlY2sgZmlsZSBzaXplLCB0eXBlIGFuZCBhZGQgYWxsIGVsZW1lbnRzIHRvIHdvcmsgd2l0aCB0aGlzXG4gICAgdmFyIF9maWxlVXBsb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnZm9ybSBpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UgZm9jdXNvdXQgY2xpY2sga2V5dXAnLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlc1swXTtcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICAgICAgICAgIHZhciBmaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblxuICAgICAgICAgICAgdmFyIGV4dCA9ICQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnKS52YWwoKS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZigkLmluQXJyYXkoZXh0LCBbJ3BkZicsJ2RvY3gnXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gd3JvbmcgZmlsZSB0eXBlXG4gICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX2ZpbGUtdXBsb2FkLXRleHQnKS5jaGlsZHJlbignc3BhbicpLnRleHQoXCJPbmx5IFBERiAoLnBkZikgb3IgV29yZCBEb2N1bWVudHMgKC5kb2N4KSBhcmUgYWxvdWQuXCIpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19yZXBsYWNlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnKS5hZGRDbGFzcygnZXJyb3InKS5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLmFkZENsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9LDEwKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihmaWxlU2l6ZSA+PSAyMDAwMDAwKXtcbiAgICAgICAgICAgICAgICAvLyBmaWxlIHRvbyBsYXJnZVxuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19maWxlLXVwbG9hZC10ZXh0JykuY2hpbGRyZW4oJ3NwYW4nKS50ZXh0KFwiTWF4IGZpbGUgc2l6ZSBpcyAyTUIuXCIpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19yZXBsYWNlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnKS5hZGRDbGFzcygnZXJyb3InKS5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLmFkZENsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9LDEwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIGFoaCBqdXN0IHJpZ2h0XG4gICAgICAgICAgICAgICAgJCgnLmpzLWlnbm9yZS1mcm9tLXZhbGlkYXRpb24nKS5hZGRDbGFzcygnaXMtLXZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX2ZpbGUtdXBsb2FkLXRleHQnKS5jaGlsZHJlbignc3BhbicpLnRleHQoZmlsZU5hbWUrXCIgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgICAgICAgICAkKCcuYy1wcm9wb3NhbF9fcmVwbGFjZScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpLmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihuYXYpLmNoaWxkcmVuKGJ1dHRvbikucmVtb3ZlQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5yZW1vdmVDbGFzcygnaXMtLWRpc2FibGVkLW92ZXJyaWRlJyk7XG4gICAgICAgICAgICAgICAgfSwxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gV2hlbiB0aGUgbmV4dCAvIHByZXZpb3VzIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBzY3JlZW4gaXMgc2Nyb2xsZWQuXG4gICAgdmFyIF9zY3JvbGxUb3AgPSBmdW5jdGlvbih3V2lkdGgpe1xuICAgICAgICBpZih3V2lkdGggPj0gMTAwMCl7XG4gICAgICAgICAgICAkKCcuanMtbmF2aWdhdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZGlzYWJsZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogMzkwfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuanMtbmF2aWdhdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZGlzYWJsZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogMjc1fSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVXBkYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBmb3JtIHdoZW4gdGhlIHNjcmVlbiBpcyByZXNpemVkXG4gICAgdmFyIF91cGRhdGVTZWN0aW9uSGVpZ2h0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHJlc2l6ZWRIZWlnaHQgPSAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICQoZm9ybSkuaGVpZ2h0KHJlc2l6ZWRIZWlnaHQpO1xuXHRcdC8qXG4gICAgICAgICQoJy5jLXByb3Bvc2FsX190ZXh0YXJlYS1pbnB1dCcpLm9uKCdrZXl1cCBjbGljayBjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHJlc2l6ZWRIZWlnaHQgPSAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAkKGZvcm0pLmhlaWdodChyZXNpemVkSGVpZ2h0KTtcbiAgICAgICAgfSk7XG5cdFx0Ki9cbiAgICB9O1xuICAgIC8vIENoZWNrIHRoZSB2YWxpZGl0eSBvZiB0aGUgY3VycmVudCBpbnB1dCAvIHRleHRhcmVhcyBvbiBidXR0b24gcHJlc3NcbiAgICB2YXIgX2ZvY3VzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmpzLW5hdmlnYXRlJykub24oJ2NsaWNrIGtleXVwJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZGlzYWJsZWQnKSl7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19mb3JtLXNlY3Rpb24uaXMtLXNob3dpbmdbaWQ9XCInK3RhcmdldCsnXCJdJykuZmlyc3QoKS5jaGlsZHJlbignLmMtcHJvcG9zYWxfX2lucHV0LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuanMtLWZpcnN0LS1mb2N1cy0taW5wdXQnKS5maXJzdCgpLmNoaWxkcmVuKCdpbnB1dCx0ZXh0YXJlYScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIFRvZ2dsZSBhbmltYXRpb24gZm9yIG5leHQgLyBwcmV2aW91cyBzZWN0aW9uXG4gICAgdmFyIF90b2dnbGVTZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJChsZWZ0UmlnaHQpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgYXR0ciA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJythdHRyKydcIl0nKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpKXtcbiAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGVUbyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmFuaW1hdGUoe2hlaWdodDogbmV3SGVpZ2h0fSk7XG4gICAgICAgICAgICAgICAgaWYoISR0aGlzLmhhc0NsYXNzKCduYXZpZ2F0aW9uLS1sZWZ0JykpeztcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50ID0gJCgnLmpzLWZvcm0tc2VjdGlvbi5pcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJytuYXZpZ2F0ZVRvKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ3JpZ2h0JykuYWRkQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpLnJlbW92ZUNsYXNzKCdyaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5yZW1vdmVDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSw0MjUpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkKCcuanMtZm9ybS1zZWN0aW9uLmlzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9ICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudC5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrbmF2aWdhdGVUbysnXCJdJykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50LnJlbW92ZUNsYXNzKCdyaWdodCcpLnJlbW92ZUNsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICB9LDQyNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJChsZWZ0UmlnaHQpLmtleXByZXNzKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrYXR0cisnXCJdJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnaXMtLWRpc2FibGVkJykpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGVUbyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJChmb3JtKS5hbmltYXRlKHtoZWlnaHQ6IG5ld0hlaWdodH0pO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IDM5MH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEkdGhpcy5oYXNDbGFzcygnbmF2aWdhdGlvbi0tbGVmdCcpKXs7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkKCcuanMtZm9ybS1zZWN0aW9uLmlzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJytuYXZpZ2F0ZVRvKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50LmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJytuYXZpZ2F0ZVRvKydcIl0nKS5yZW1vdmVDbGFzcygncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVudC5yZW1vdmVDbGFzcygnbGVmdCcpLnJlbW92ZUNsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSw0MjUpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudCA9ICQoJy5qcy1mb3JtLXNlY3Rpb24uaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9ICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpLnJlbW92ZUNsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDQyNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gQ29kZSB0byBzaG93IHRoZSBwaXAgZm9yIHRoZSBjb3JyZWN0IHNlY3Rpb24gaW4gdGhlIHNpZGViYXJcbiAgICB2YXIgX2dldEN1cnJlbnRTZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJChsZWZ0UmlnaHQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnaXMtLWRpc2FibGVkJykpe1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIG5leHRTZWN0aW9uID0gJHRoaXMuYXR0cignZGF0YS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgJChzaWRlYmFyQnV0dG9uKS5yZW1vdmVDbGFzcygnc2hvd2luZy0tcGlwJyk7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXNpZGViYXItbGluay4nK25leHRTZWN0aW9uKS5hZGRDbGFzcygnc2hvd2luZy0tcGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gUHJvcG9zYWwgYnV0dG9ucyBjYW4gYmUgZm91bmQgaW4gdGhlIGJ1aWxkIHlvdXIgcHJvcG9zYWwgc2VjdGlvbi5cbiAgICB2YXIgX3Byb3Bvc2FsQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAkKHByb3Bvc2FsVGFiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICB0aGlzSWQgPSAkdGhpcy5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9ICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK3RoaXNJZCsnXCJdJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb24nKS5yZW1vdmVDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK3RoaXNJZCsnXCJdJykuYWRkQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAkKGZvcm0pLmhlaWdodChuZXdIZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIEV2ZW50IGhhbmRsZXJzLlxuICAgIHZhciBfY2hlY2tWYWxpZGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIEFkZHMgZW50ZXIgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgdG8gc3BhbiBmb3IgYmFjayBhbmQgbmV4dC5cbiAgICAgICAgJChidXR0b24pLmtleXByZXNzKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkRWxlbWVudHMgPSAwO1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbEVsZW1lbnRzID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgc2lkZUJhclNlY3Rpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KG5hdikuc2libGluZ3MoaW5wdXRTZWN0aW9uKS5jaGlsZHJlbihpbnB1dFdyYXBwZXIpLmNoaWxkcmVuKGNoZWNrVHlwZXMpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZhbGlkKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYodG90YWxFbGVtZW50cyA9PT0gdmFsaWRFbGVtZW50cyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy4nK3NpZGVCYXJTZWN0aW9uKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlcyB0aGUgc2lkZWJhciBqcy1hY3RpdmUgY2xhc3NcbiAgICAgICAgJChidXR0b24pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB2YWxpZEVsZW1lbnRzID0gMDtcbiAgICAgICAgICAgIHZhciB0b3RhbEVsZW1lbnRzID0gMDtcbiAgICAgICAgICAgIHZhciBzaWRlQmFyU2VjdGlvbiA9ICQodGhpcykuYXR0cignZGF0YS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudChuYXYpLnNpYmxpbmdzKGlucHV0U2VjdGlvbikuY2hpbGRyZW4oaW5wdXRXcmFwcGVyKS5jaGlsZHJlbihjaGVja1R5cGVzKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmFsaWQoKSl7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRWxlbWVudHMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKHRvdGFsRWxlbWVudHMgPT09IHZhbGlkRWxlbWVudHMpe1xuICAgICAgICAgICAgICAgICQoJy4nK3NpZGVCYXJTZWN0aW9uKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGRzIHZhbGlkIG9yIG5vdCB2YWxpZCB0byBhbGwgdGV4dCBpbnB1dHNcbiAgICAgICAgJCh0ZXh0KS5vbignZm9jdXNvdXQga2V5dXAnLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoJHRoaXMudmFsaWQoKSl7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJHRoaXMudmFsKCkpe1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZHMgdmFsaWQgb3Igbm90IHZhbGlkIHRvIGFsbCBlbWFpbCBpbnB1dHNcbiAgICAgICAgJChlbWFpbCkub24oJ2ZvY3Vzb3V0IGtleXVwJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmKCR0aGlzLnZhbGlkKCkpe1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCR0aGlzLnZhbCgpKXtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGRzIHRoZSB2YWx1ZCB2YWxpZCBvciBub3QgdmFsaWQgdG8gYWxsIHRleHRhcmVhc1xuICAgICAgICAkKHRleHRBcmVhKS5vbignZm9jdXNvdXQga2V5dXAgY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoJHRoaXMudmFsaWQoKSl7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkcyB2YWxpZCBvciBub3QgdmFsaWQgdG8gYWxsIGZpbGUgaW5wdXRzXG4gICAgICAgICQoZmlsZSkub24oJ2NoYW5nZSBmb2N1c291dCBrZXl1cCcsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZigkdGhpcy52YWxpZCgpKXtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGRzIHZhbGlkIHRvIGFsbCByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRoZSBzYW1lIGFzIHRoZSBvbmUgY2xpY2tlZC5cbiAgICAgICAgJChyYWRpbykub24oJ2NsaWNrIGNoYW5nZSBrZXl1cCBmb2N1c291dCcsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9ICR0aGlzLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4oaW5wdXRTZWN0aW9uKS5jaGlsZHJlbihpbnB1dFdyYXBwZXIpLmNoaWxkcmVuKCdpbnB1dFtuYW1lPVwiJysgbmFtZSArJ1wiXScpLmFkZENsYXNzKCd2YWxpZCcpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJykucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpLmF0dHIoJ2FyaWEtaW52YWxpZCcsJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGRzIHZhbGlkIHRvIGFsbCByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRoZSBzYW1lIGFzIHRoZSBvbmUgY2xpY2tlZC5cbiAgICAgICAgJChyYWRpb0xhYmVsKS5vbignY2xpY2sgY2hhbmdlIGtleXVwIGZvY3Vzb3V0JyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzaWJsaW5nTmFtZSA9ICR0aGlzLnNpYmxpbmdzKHJhZGlvKS5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLmNoaWxkcmVuKGlucHV0U2VjdGlvbikuY2hpbGRyZW4oaW5wdXRXcmFwcGVyKS5jaGlsZHJlbignaW5wdXRbbmFtZT1cIicrIHNpYmxpbmdOYW1lICsnXCJdJykuYWRkQ2xhc3MoJ3ZhbGlkJykucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpLmF0dHIoJ2FyaWEtaW52YWxpZCcsJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDaGVja3MgaWYgYWxsIHRoZSBzZWN0aW9ucyB1cCB0byB0aGUgc2VjdGlvbiBjbGlja2VkIGFyZSB2YWxpZCwgaWYgdGhleSBhcmUgaXQgdGFrZXMgdGhlIHVzZXIgdG8gdGhhdCBzZWN0aW9uLlxuICAgICAgICAkKHNpZGViYXJCdXR0b24pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBwYXJzZUludCgkdGhpcy5hdHRyKCdpZCcpKTtcblxuICAgICAgICAgICAgJChmb3JtU2VjdGlvbikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciAkc2VsZiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHRoaXNJZCA9IHBhcnNlSW50KCRzZWxmLmF0dHIoJ2lkJykpO1xuXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0SWQgIT09IHRoaXNJZCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEkc2VsZi5oYXNDbGFzcygnaXMtLXZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJyt0YXJnZXRJZCsnXCJdJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJChmb3JtKS5oZWlnaHQobmV3SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAkKHNpZGViYXJCdXR0b24pLnJlbW92ZUNsYXNzKCdzaG93aW5nLS1waXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpLmFkZENsYXNzKCdzaG93aW5nLS1waXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrdGFyZ2V0SWQrJ1wiXScpLmFkZENsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gQ3VzdG9tIEpTIGZvciBicmllZiB1cGxvYWQgLyBjcmVhdGlvblxuICAgIHZhciBfYnJpZWYgPSBmdW5jdGlvbigpe1xuICAgICAgICAkKCcuanMtY3JlYXRlLWJyaWVmJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQoJy5qcy1icmllZi11cGxvYWQtaW5wdXQnKS5oYXNDbGFzcygnanMtLXNob3dpbmcnKSl7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSAkKGZvcm0pLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGN1cnJlbnRIZWlnaHQgLSB1cGxvYWRCcmllZkhlaWdodDtcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmhlaWdodChuZXdIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLmpzLWJyaWVmLXVwbG9hZC1pbnB1dCcpLnJlbW92ZUNsYXNzKCdqcy0tc2hvd2luZycpLmFkZENsYXNzKCdqcy0taXMtbWluaW1pc2VkJyk7XG4gICAgICAgICAgICAkKCcuanMtYnJpZWYnKS5hdHRyKCdhcmlhLXJlcXVpcmVkJywnZmFsc2UnKS5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICQoJy5qcy1icmVpZi1pZCcpLmF0dHIoJ2lkJywnMycpLmF0dHIoJ2RhdGEtc2VjdGlvbicsJ2pzLXRoZS1icmllZicpO1xuICAgICAgICAgICAgJCgnLmpzLWJyaWVmLWJ1aWxkLWJhY2snKS5hdHRyKCdpZCcsJzknKTtcbiAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19tYXgtZmlsZS1zaXplJykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAkKCcuanMtdG9nZ2xlLWJyaWVmLXJlcXVpcmVkJykucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICQoJy5qcy1ub3QtcmVxdWlyZWQnKS5hdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLmpzLWFscmVhZHktaGF2ZS1hLWJyaWVmJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQoJy5qcy1icmllZi11cGxvYWQtaW5wdXQnKS5oYXNDbGFzcygnanMtLWlzLW1pbmltaXNlZCcpKXtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9ICQoZm9ybSkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY3VycmVudEhlaWdodCArIHVwbG9hZEJyaWVmSGVpZ2h0O1xuICAgICAgICAgICAgICAgICQoZm9ybSkuaGVpZ2h0KG5ld0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcuanMtYnJpZWYtdXBsb2FkLWlucHV0JykuYWRkQ2xhc3MoJ2pzLS1zaG93aW5nJykucmVtb3ZlQ2xhc3MoJ2pzLS1pcy1taW5pbWlzZWQnKTtcbiAgICAgICAgICAgICQoJy5qcy1icmllZicpLmF0dHIoJ2FyaWEtcmVxdWlyZWQnLCd0cnVlJykucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5hdHRyKCdpZCcsJzEwJykuYXR0cignZGF0YS1zZWN0aW9uJywnanMtYnVpbGQteW91ci1wcm9wb3NhbCcpO1xuICAgICAgICAgICAgJCgnLmpzLWJyaWVmLWJ1aWxkLWJhY2snKS5hdHRyKCdpZCcsJzInKTtcbiAgICAgICAgICAgICQoJy5qcy10b2dnbGUtYnJpZWYtcmVxdWlyZWQnKS5hdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgJCgnLmpzLW5vdC1yZXF1aXJlZCcpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX21heC1maWxlLXNpemUnKS5hZGRDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgIH0sMjUwKTtcbiAgICAgICAgICAgIGlmKCQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQuanMtYnJpZWYnKS5nZXQoMCkuZmlsZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5hZGRDbGFzcygnaXMtLWRpc2FibGVkLW92ZXJyaWRlJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5yZW1vdmVDbGFzcygnaXMtLWRpc2FibGVkLW92ZXJyaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gV2hlbiBhIGlucHV0IG9yIHRleHRhcmVhIGlzIHt7ZXZlbnR9fSB0aGlzIGZ1bmN0aW9uIGlzIHJ1biB0aGF0IGNoZWNrcyB0aGUgd2hvbGUgc2VjdGlvbiBmb3IgdmFsaWRpdHkuIElmIHZhbGlkIC0gYnV0dG9uIHVwZGF0ZWRcbiAgICAvLyBUSEUgSU5QVVQgLyBURVhUQVJFQSBJUyBDSEVDS0VEIEZPUiBUSEUgQ0xBU1MgJ3ZhbGlkJ1xuICAgIHZhciBfdG9nZ2xlTmV4dEJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICQoY2hlY2tUeXBlcykub24oJ2NsaWNrIGZvY3Vzb3V0IGtleXVwIGNoYW5nZSBrZXlkb3duJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB2YWxpZEVsZW1lbnRzID0gMCxcbiAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzID0gMDtcblxuICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihpbnB1dFNlY3Rpb24pLmNoaWxkcmVuKGlucHV0V3JhcHBlcikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJCh0aGlzKS5jaGlsZHJlbihjaGVja1R5cGVzKS5hdHRyKCd0eXBlJyk7XG4gICAgICAgICAgICAgICAgLy8gRmlsZSBpZ25vcmVkIGFzIGl0cyBub3QgYWx3YXlzIG1hbmRhdG9yeSAoYnJpZWYgY2FuIGJlIGNyZWF0ZWQgYWxzbylcbiAgICAgICAgICAgICAgICBpZih0eXBlICE9PSAnZmlsZScpe1xuICAgICAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcykuY2hpbGRyZW4oY2hlY2tUeXBlcykuaGFzQ2xhc3MoJ3ZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHRvdGFsRWxlbWVudHMgPT09IHZhbGlkRWxlbWVudHMpe1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLnJlbW92ZUNsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLmFkZENsYXNzKCdpcy0tdmFsaWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLmFkZENsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLnJlbW92ZUNsYXNzKCdpcy0tdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBKUyBmb3IgbG9jYWwgc3RvcmFnZS4gT24gY2xpY2sgZWFjaCBpbnB1dCAvIHRleHRhcmVhIGlzIGNoZWNrZWQgZm9yIGlmIGl0IGhhcyBsb2NhbCBzdG9yYWdlLlxuICAgIHZhciBfY2hlY2tGb3JMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBPbmx5IGNoZWNrIHRoZSBpcyBzaG93aW5nIHNlY3Rpb24gaW5pdGFsbHlcbiAgICAgICAgdmFyIHRvdGFsRmllbGRzID0gJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihpbnB1dFNlY3Rpb24pLmNoaWxkcmVuKGlucHV0V3JhcHBlcikuY2hpbGRyZW4oY2hlY2tUeXBlcyksXG4gICAgICAgIG51bWJlckluVGhpc1NlY3Rpb24gPSAwLFxuICAgICAgICBudW1iZXJPZlZhbGlkSW5wdXQgPSAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodG90YWxGaWVsZHMpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBudW1iZXJJblRoaXNTZWN0aW9uKys7XG4gICAgICAgICAgICAgICAgaWYoISQudHJpbSh0aGlzLnZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndmFsaWQnKS5hdHRyKCdhcmlhLWludmFsaWQnLCd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhbGlkJykuYXR0cignYXJpYS1pbnZhbGlkJywnZmFsc2UnKS5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZhbGlkSW5wdXQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKG51bWJlckluVGhpc1NlY3Rpb24gPT09IG51bWJlck9mVmFsaWRJbnB1dCl7XG4gICAgICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihuYXYpLmNoaWxkcmVuKGJ1dHRvbikucmVtb3ZlQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuYWRkQ2xhc3MoJ2lzLS12YWxpZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihuYXYpLmNoaWxkcmVuKGJ1dHRvbikuYWRkQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykucmVtb3ZlQ2xhc3MoJ2lzLS12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9ICQodGhpcykuYXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrID09PSAnY2hlY2tlZCcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJytuYW1lKydcIl0nKS5hdHRyKCd2YWx1ZScsJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LDUwMCk7XG4gICAgfTtcbiAgICAvLyBDaGVjayBzZWN0aW9uIGJlaW5nIHRvZ2dsZWQgdG8gb24gYnV0dG9uIGNsaWNrLlxuICAgIHZhciBfY2hlY2tOZXh0U2VjdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICQoYnV0dG9uKS5vbignY2xpY2sgaG92ZXIgZm9jdXNvdXQnICxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICB0b2dnbGVUbyA9ICR0aGlzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cyA9IDAsXG4gICAgICAgICAgICAgICAgdG90YWxSYWRpbyA9IDAsXG4gICAgICAgICAgICAgICAgbnVtYmVyUmFkaW9WYWxpZCA9IDAsXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZWYWxpZElucHV0ID0gMCxcbiAgICAgICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK3RvZ2dsZVRvKydcIl0nKS5jaGlsZHJlbihpbnB1dFNlY3Rpb24pLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgJHNlbGYuY2hpbGRyZW4oaW5wdXRXcmFwcGVyKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLmNoaWxkcmVuKGNoZWNrVHlwZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHBhcmVudC5hdHRyKCd0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGFyZW50LmF0dHIoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyZW50LnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAhIHJhZGlvIG9yIGZpbGUgb3IgY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSAhPT0gJ3JhZGlvJyAmJiB0eXBlICE9PSAnZmlsZScgJiYgdHlwZSAhPT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mVmFsaWRJbnB1dCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGFyZW50KS5hZGRDbGFzcygndmFsaWQnKS5hdHRyKCdhcmlhLWludmFsaWQnLCdmYWxzZScpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHBhcmVudCkucmVtb3ZlQ2xhc3MoJ3ZhbGlkJykuYXR0cignYXJpYS1pbnZhbGlkJywndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJhZGlvIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlID09PSAncmFkaW8nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHN0b3AgYm90aCB2YWx1ZXMgYmVpbmcgZXF1YWwgdG8gMCB3aGljaCB3aWxsIGVuYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cyA9IDk5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkLmluQXJyYXkobmFtZSwgYXJyKSA8IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUmFkaW8gPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50LmlzKCc6Y2hlY2tlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJSYWRpb1ZhbGlkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX2lucHV0LXJhZGlvW25hbWU9XCInK25hbWUrJ1wiXScpLmFkZENsYXNzKCd2YWxpZCcpLmF0dHIoJ2FyaWEtcmVxdWlyZWQnLCdmYWxzZScpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJykuYXR0cignYXJpYS1pbnZhbGlkJywnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2JveCBvbmx5XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGsgPSBwYXJlbnQuYXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoayA9PT0gJ2NoZWNrZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5tID0gcGFyZW50LmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJytubSsnXCJdJykuYXR0cigndmFsdWUnLCd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYodG90YWxFbGVtZW50cyA9PT0gbnVtYmVyT2ZWYWxpZElucHV0KXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrdG9nZ2xlVG8rJ1wiXScpLmNoaWxkcmVuKG5hdikuY2hpbGRyZW4oYnV0dG9uKS5yZW1vdmVDbGFzcygnaXMtLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRvdGFsUmFkaW8gPT09IG51bWJlclJhZGlvVmFsaWQpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJyt0b2dnbGVUbysnXCJdJykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbignLmpzLXJhZGlvLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIGNhbGxzXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHdXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB3V2lkdGggPSAkKHRoaXMpLndpZHRoKCk7XG4gICAgICAgICAgICBfdXBkYXRlU2VjdGlvbkhlaWdodCgpO1xuICAgICAgICAgICAgX3Njcm9sbFRvcCh3V2lkdGgpO1xuXHRcdH0pO1xuICAgICAgICBfdXBkYXRlU2VjdGlvbkhlaWdodCgpO1xuICAgICAgICBfY2hlY2tGb3JMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgX2NoZWNrTmV4dFNlY3Rpb24oKTtcbiAgICAgICAgX2ZvY3VzKCk7XG4gICAgICAgIF9nZXRDdXJyZW50U2VjdGlvbigpO1xuICAgICAgICBfc2Nyb2xsVG9wKHdXaWR0aCk7XG4gICAgICAgIF9maWxlVXBsb2FkKCk7XG4gICAgICAgIF9jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIF90b2dnbGVTZWN0aW9uKCk7XG4gICAgICAgIF90b2dnbGVOZXh0QnV0dG9uKCk7XG4gICAgICAgIF9icmllZigpO1xuICAgICAgICBfcHJvcG9zYWxCdXR0b25DbGljaygpO1xuICAgICAgICBfdXBkYXRlSGlkZGVuRmllbGRWYWx1ZXMoKTtcblx0fTtcblxuICAgIHJldHVybiB7XG5cdFx0aW5pdDogaW5pdFxuXHR9O1xuXG59KShqUXVlcnkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuIl0sImZpbGUiOiJicmllZmluZy1mb3JtLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

(function($) {
	$(document).ready(function() {
//		window.BriefingForm.init();
	});
})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsZWdhY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4vL1x0XHR3aW5kb3cuQnJpZWZpbmdGb3JtLmluaXQoKTtcblx0fSk7XG59KShqUXVlcnkpO1xuIl0sImZpbGUiOiJsZWdhY3kuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

//# sourceMappingURL=legacy.js.map
