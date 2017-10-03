/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-flexbox-flexwrap-svg-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,n,t){function r(e,n){return typeof e===n}function o(e,n){return!!~(""+e).indexOf(n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var l,a,f,u,c="modernizr",p=s("div"),d=i();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:c+(r+1),p.appendChild(f);return l=s("style"),l.type="text/css",l.id="s"+c,(d.fake?d:p).appendChild(l),d.appendChild(p),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),a=t(p,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=u,S.offsetHeight):p.parentNode.removeChild(p),!!a}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function u(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+a(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return t}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,i,l){function a(){p&&(delete P.style,delete P.modElem)}if(l=!r(l,"undefined")&&l,!r(i,"undefined")){var f=u(e,i);if(!r(f,"undefined"))return f}for(var p,d,m,v,y,h=["modernizr","tspan","samp"];!P.style&&h.length;)p=!0,P.modElem=s(h.shift()),P.style=P.modElem.style;for(m=e.length,d=0;d<m;d++)if(v=e[d],y=P.style[v],o(v,"-")&&(v=c(v)),P.style[v]!==t){if(l||r(i,"undefined"))return a(),"pfx"!=n||v;try{P.style[v]=i}catch(e){}if(P.style[v]!=y)return a(),"pfx"!=n||v}return a(),!1}function d(e,n){return function(){return e.apply(n,arguments)}}function m(e,n,t){var o;for(var s in e)if(e[s]in n)return!1===t?e[s]:(o=n[e[s]],r(o,"function")?d(o,t||n):o);return!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+_.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?p(l,n,o,s):(l=(e+" "+N.join(i+" ")+i).split(" "),m(l,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var h=[],g={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){h.push({name:e,fn:n,options:t})},addAsyncTest:function(e){h.push({name:null,fn:e})}},w=function(){};w.prototype=g,w=new w;var C=[],S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",_=g._config.usePrefixes?b.split(" "):[];g._cssomPrefixes=_;var E={elem:s("modernizr")};w._q.push(function(){delete E.elem});var P={style:E.elem.style};w._q.unshift(function(){delete P.style});var N=g._config.usePrefixes?b.toLowerCase().split(" "):[];g._domPrefixes=N,g.testAllProps=v,g.testAllProps=y,/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
w.addTest("flexbox",y("flexBasis","1px",!0)),/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
w.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
{
  "name": "Flex Line Wrapping",
  "property": "flexwrap",
  "tags": ["css", "flexbox"],
  "notes": [{
    "name": "W3C Flexible Box Layout spec",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "Does not imply a modern implementation – see documentation."
  ]
}
!*/
w.addTest("flexwrap",y("flexWrap","wrap",!0)),function(){var e,n,t,o,s,i,l;for(var a in h)if(h.hasOwnProperty(a)){if(e=[],n=h[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?w[l[0]]=o:(!w[l[0]]||w[l[0]]instanceof Boolean||(w[l[0]]=new Boolean(w[l[0]])),w[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}(),function(e){var n=S.className,t=w._config.classPrefix||"";if(x&&(n=n.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}w._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}(C),delete g.addTest,delete g.addAsyncTest;for(var T=0;T<w._q.length;T++)w._q[T]();e.Modernizr=w}(window,document);