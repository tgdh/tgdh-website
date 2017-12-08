/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-csspointerevents-flexbox-flexwrap-svg-template-setclasses-dontmin
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
!function(e,t,n){function r(e,t){return typeof e===t}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e,t){return!!~(""+e).indexOf(t)}function i(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var l,a,f,u,p="modernizr",c=s("div"),d=i();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:p+(r+1),c.appendChild(f);return l=s("style"),l.type="text/css",l.id="s"+p,(d.fake?d:c).appendChild(l),d.appendChild(c),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(t.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),a=n(c,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!a}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function u(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(a(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+a(t[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t,i,l){function a(){c&&(delete E.style,delete E.modElem)}if(l=!r(l,"undefined")&&l,!r(i,"undefined")){var f=u(e,i);if(!r(f,"undefined"))return f}for(var c,d,m,v,y,h=["modernizr","tspan","samp"];!E.style&&h.length;)c=!0,E.modElem=s(h.shift()),E.style=E.modElem.style;for(m=e.length,d=0;d<m;d++)if(v=e[d],y=E.style[v],o(v,"-")&&(v=p(v)),E.style[v]!==n){if(l||r(i,"undefined"))return a(),"pfx"!=t||v;try{E.style[v]=i}catch(e){}if(E.style[v]!=y)return a(),"pfx"!=t||v}return a(),!1}function d(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var s;for(var o in e)if(e[o]in t)return!1===n?e[o]:(s=t[e[o]],r(s,"function")?d(s,n||t):s);return!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+_.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?c(l,t,s,o):(l=(e+" "+P.join(i+" ")+i).split(" "),m(l,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var h=[],g={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){h.push({name:e,fn:t,options:n})},addAsyncTest:function(e){h.push({name:null,fn:e})}},w=function(){};w.prototype=g,w=new w;var C=[],S=t.documentElement,x="svg"===S.nodeName.toLowerCase();/*!
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
w.addTest("template","content"in s("template"));var b="Moz O ms Webkit",_=g._config.usePrefixes?b.split(" "):[];g._cssomPrefixes=_;var T={elem:s("modernizr")};w._q.push(function(){delete T.elem});var E={style:T.elem.style};w._q.unshift(function(){delete E.style});var P=g._config.usePrefixes?b.toLowerCase().split(" "):[];g._domPrefixes=P,g.testAllProps=v,g.testAllProps=y,/*!
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
  "name": "CSS Pointer Events",
  "caniuse": "pointer-events",
  "property": "csspointerevents",
  "authors": ["ausi"],
  "tags": ["css"],
  "builderAliases": ["css_pointerevents"],
  "notes": [
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
    },{
      "name": "Test Project Page",
      "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
    },{
      "name": "Test Project Wiki",
      "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/80"
    }
  ]
}
!*/
w.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),/*!
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
w.addTest("flexwrap",y("flexWrap","wrap",!0)),function(){var e,t,n,s,o,i,l;for(var a in h)if(h.hasOwnProperty(a)){if(e=[],t=h[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?w[l[0]]=s:(!w[l[0]]||w[l[0]]instanceof Boolean||(w[l[0]]=new Boolean(w[l[0]])),w[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}(),function(e){var t=S.className,n=w._config.classPrefix||"";if(x&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}(C),delete g.addTest,delete g.addAsyncTest;for(var N=0;N<w._q.length;N++)w._q[N]();e.Modernizr=w}(window,document);