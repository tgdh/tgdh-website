/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-flexbox-flexwrap-svg-setclasses-dontmin
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
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?C[a[0]]=o:(!C[a[0]]||C[a[0]]instanceof Boolean||(C[a[0]]=new Boolean(C[a[0]])),C[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=C._config.classPrefix||"";if(_&&(n=n.baseVal),C._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}C._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,i,f,u,p="modernizr",d=a("div"),c=l();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:p+(r+1),d.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+p,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=u,S.offsetHeight):d.parentNode.removeChild(d),!!i}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n,o,s){function l(){u&&(delete P.style,delete P.modElem)}if(s=!r(s,"undefined")&&s,!r(o,"undefined")){var f=p(e,o);if(!r(f,"undefined"))return f}for(var u,c,m,v,h,y=["modernizr","tspan"];!P.style;)u=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(m=e.length,c=0;c<m;c++)if(v=e[c],h=P.style[v],i(v,"-")&&(v=d(v)),P.style[v]!==t){if(s||r(o,"undefined"))return l(),"pfx"!=n||v;try{P.style[v]=o}catch(e){}if(P.style[v]!=h)return l(),"pfx"!=n||v}return l(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function v(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?m(o,t||n):o);return!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?c(a,n,o,s):(a=(e+" "+T.join(i+" ")+i).split(" "),v(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},C=function(){};C.prototype=w,C=new C;var x=[],S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",E=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=E;var N={elem:a("modernizr")};C._q.push(function(){delete N.elem});var P={style:N.elem.style};C._q.unshift(function(){delete P.style});var T=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=T,w.testAllProps=h,w.testAllProps=y,/*!
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
C.addTest("flexbox",y("flexBasis","1px",!0)),/*!
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
C.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
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
C.addTest("flexwrap",y("flexWrap","wrap",!0)),o(),s(x),delete w.addTest,delete w.addAsyncTest;for(var z=0;z<C._q.length;z++)C._q[z]();e.Modernizr=C}(window,document);