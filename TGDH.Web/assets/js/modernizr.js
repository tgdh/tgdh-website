/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-flexbox-flexwrap-svg-template-setclasses-dontmin
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
!function(e,t,n){function r(e,t){return typeof e===t}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function i(){var e=t.body;return e||(e=o(x?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var l,a,f,u,p="modernizr",c=o("div"),d=i();if(parseInt(r,10))for(;r--;)f=o("div"),f.id=s?s[r]:p+(r+1),c.appendChild(f);return l=o("style"),l.type="text/css",l.id="s"+p,(d.fake?d:c).appendChild(l),d.appendChild(c),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(t.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),a=n(c,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!a}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function u(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+a(t[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t,i,l){function a(){c&&(delete P.style,delete P.modElem)}if(l=!r(l,"undefined")&&l,!r(i,"undefined")){var f=u(e,i);if(!r(f,"undefined"))return f}for(var c,d,m,v,y,h=["modernizr","tspan","samp"];!P.style&&h.length;)c=!0,P.modElem=o(h.shift()),P.style=P.modElem.style;for(m=e.length,d=0;d<m;d++)if(v=e[d],y=P.style[v],s(v,"-")&&(v=p(v)),P.style[v]!==n){if(l||r(i,"undefined"))return a(),"pfx"!=t||v;try{P.style[v]=i}catch(e){}if(P.style[v]!=y)return a(),"pfx"!=t||v}return a(),!1}function d(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var s in e)if(e[s]in t)return!1===n?e[s]:(o=t[e[s]],r(o,"function")?d(o,n||t):o);return!1}function v(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+_.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?c(l,t,o,s):(l=(e+" "+T.join(i+" ")+i).split(" "),m(l,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var h=[],g={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){h.push({name:e,fn:t,options:n})},addAsyncTest:function(e){h.push({name:null,fn:e})}},w=function(){};w.prototype=g,w=new w;var C=[],S=t.documentElement,x="svg"===S.nodeName.toLowerCase();/*!
{
  "name": "Template Tag",
  "property": "template",
  "tags": ["elem"],
  "notes": [{
    "name": "HTML5Rocks Article",
    "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
  },{
    "name": "W3 Spec",
    "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
  }]
}
!*/
w.addTest("template","content"in o("template"));var b="Moz O ms Webkit",_=g._config.usePrefixes?b.split(" "):[];g._cssomPrefixes=_;var E={elem:o("modernizr")};w._q.push(function(){delete E.elem});var P={style:E.elem.style};w._q.unshift(function(){delete P.style});var T=g._config.usePrefixes?b.toLowerCase().split(" "):[];g._domPrefixes=T,g.testAllProps=v,g.testAllProps=y,/*!
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
w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
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
w.addTest("flexwrap",y("flexWrap","wrap",!0)),function(){var e,t,n,o,s,i,l;for(var a in h)if(h.hasOwnProperty(a)){if(e=[],t=h[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?w[l[0]]=o:(!w[l[0]]||w[l[0]]instanceof Boolean||(w[l[0]]=new Boolean(w[l[0]])),w[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}(),function(e){var t=S.className,n=w._config.classPrefix||"";if(x&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}(C),delete g.addTest,delete g.addAsyncTest;for(var N=0;N<w._q.length;N++)w._q[N]();e.Modernizr=w}(window,document);