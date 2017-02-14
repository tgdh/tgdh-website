function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var fontfaceobserver_standalone = createCommonjsModule(function (module) {
  (function () {
    function m(a, b) {
      document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
    }function n(a) {
      document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
        document.removeEventListener("DOMContentLoaded", c);a();
      }) : document.attachEvent("onreadystatechange", function l() {
        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", l), a();
      });
    }function t(a) {
      this.a = document.createElement("div");this.a.setAttribute("aria-hidden", "true");this.a.appendChild(document.createTextNode(a));this.b = document.createElement("span");this.c = document.createElement("span");this.h = document.createElement("span");this.f = document.createElement("span");this.g = -1;this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
      this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);
    }
    function x(a, b) {
      a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
    }function y(a) {
      var b = a.a.offsetWidth,
          c = b + 100;a.f.style.width = c + "px";a.c.scrollLeft = c;a.b.scrollLeft = a.b.scrollWidth + 100;return a.g !== b ? (a.g = b, !0) : !1;
    }function z(a, b) {
      function c() {
        var a = l;y(a) && a.a.parentNode && b(a.g);
      }var l = a;m(a.b, c);m(a.c, c);y(a);
    }function A(a, b) {
      var c = b || {};this.family = a;this.style = c.style || "normal";this.weight = c.weight || "normal";this.stretch = c.stretch || "normal";
    }var B = null,
        C = null,
        E = null,
        F = null;function I() {
      if (null === E) {
        var a = document.createElement("div");try {
          a.style.font = "condensed 100px sans-serif";
        } catch (b) {}E = "" !== a.style.font;
      }return E;
    }function J(a, b) {
      return [a.style, a.weight, I() ? a.stretch : "", "100px", b].join(" ");
    }
    A.prototype.load = function (a, b) {
      var c = this,
          l = a || "BESbswy",
          r = 0,
          D = b || 3E3,
          G = new Date().getTime();return new Promise(function (a, b) {
        var e;null === F && (F = !!document.fonts);if (e = F) null === C && (C = /OS X.*Version\/10\.0.*Safari/.test(window.navigator.userAgent) && /Apple/.test(window.navigator.vendor)), e = !C;if (e) {
          e = new Promise(function (a, b) {
            function f() {
              new Date().getTime() - G >= D ? b() : document.fonts.load(J(c, '"' + c.family + '"'), l).then(function (c) {
                1 <= c.length ? a() : setTimeout(f, 25);
              }, function () {
                b();
              });
            }f();
          });var K = new Promise(function (a, c) {
            r = setTimeout(c, D);
          });Promise.race([K, e]).then(function () {
            clearTimeout(r);a(c);
          }, function () {
            b(c);
          });
        } else n(function () {
          function e() {
            var b;if (b = -1 != g && -1 != h || -1 != g && -1 != k || -1 != h && -1 != k) (b = g != h && g != k && h != k) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (g == u && h == u && k == u || g == v && h == v && k == v || g == w && h == w && k == w)), b = !b;b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c));
          }
          function H() {
            if (new Date().getTime() - G >= D) d.parentNode && d.parentNode.removeChild(d), b(c);else {
              var a = document.hidden;if (!0 === a || void 0 === a) g = f.a.offsetWidth, h = p.a.offsetWidth, k = q.a.offsetWidth, e();r = setTimeout(H, 50);
            }
          }var f = new t(l),
              p = new t(l),
              q = new t(l),
              g = -1,
              h = -1,
              k = -1,
              u = -1,
              v = -1,
              w = -1,
              d = document.createElement("div");d.dir = "ltr";x(f, J(c, "sans-serif"));x(p, J(c, "serif"));x(q, J(c, "monospace"));d.appendChild(f.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);u = f.a.offsetWidth;v = p.a.offsetWidth;
          w = q.a.offsetWidth;H();z(f, function (a) {
            g = a;e();
          });x(f, J(c, '"' + c.family + '",sans-serif'));z(p, function (a) {
            h = a;e();
          });x(p, J(c, '"' + c.family + '",serif'));z(q, function (a) {
            k = a;e();
          });x(q, J(c, '"' + c.family + '",monospace'));
        });
      });
    };module.exports = A;
  })();
});

// import * as FontFaceObserver from '../lib/fontfaceobserver/fontfaceobserver.standalone';
var Fonts$1 = function Fonts() {
	var lato = new fontfaceobserver_standalone('Lato');
	var playfair = new fontfaceobserver_standalone('Playfair Display');

	Promise.all([lato.load(), playfair.load()]).then(function () {
		// Add fonts-loaded class to html to apply fonts to the page
		document.documentElement.classList.add('fonts-loaded');
		// Set localstorage value so it can be used to load fonts when they've been cached
		localStorage.setItem('fonts-loaded', 'true');
	});
};

// based on https://gist.github.com/paulirish/12fb951a8b893a454b32
// taken from wes bos tweet
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
/* eslint-disable */
Node.prototype.on = window.on = function (name, fn) {
	this.addEventListener(name, fn);
};
NodeList.prototype.__proto__ = Array.prototype;
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
	this.forEach(function (elem, i) {
		elem.on(name, fn);
	});
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var ToggleNav = function () {
	function ToggleNav(el) {
		classCallCheck(this, ToggleNav);

		this.isOpen = false;
		this.toggle = el;
		this.html = $('html');
		this.body = this.html.querySelector('body');
		this.classes = {
			scopePrefix: 's-',
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this.toggle.getAttribute('data-toggle')
		};
		this.target = $('#' + this.classes.targetClass);
		this.scopeSelector = '' + this.classes.scopePrefix + this.classes.targetClass + '-';
		this.backdrop = document.createElement('div');
		this.backdrop.classList.add('c-nav-backdrop');
	}

	createClass(ToggleNav, [{
		key: 'setAriaHidden',
		value: function setAriaHidden() {
			if (this.target.offsetHeight > 0) {
				this.target.setAttribute('aria-hidden', false);
			} else {
				this.target.setAttribute('aria-hidden', true);
			}
		}
	}, {
		key: 'open',
		value: function open() {
			this.html.classList.remove(this.scopeSelector + this.classes.hiddenClass);
			this.html.classList.add(this.scopeSelector + this.classes.visibleClass);
			this.target.setAttribute('aria-hidden', false);
		}
	}, {
		key: 'close',
		value: function close() {
			this.html.classList.remove(this.scopeSelector + this.classes.visibleClass);
			this.html.classList.add(this.scopeSelector + this.classes.hiddenClass);
			this.target.setAttribute('aria-hidden', true);
		}
	}, {
		key: 'checkIsOpen',
		value: function checkIsOpen() {
			if (this.html.classList.contains(this.scopeSelector + this.classes.visibleClass)) {
				this.isOpen = true;
			} else {
				this.isOpen = false;
			}
		}
	}, {
		key: 'toggleOpen',
		value: function toggleOpen() {
			if (this.isOpen) {
				this.close();
			} else {
				this.open();
			}
			this.checkIsOpen();
		}
	}, {
		key: 'attachEventHandlers',
		value: function attachEventHandlers() {
			var _this = this;

			this.toggle.on('click', function () {
				_this.toggle.blur();
				_this.toggleOpen();
			});

			this.backdrop.on('click', function () {
				_this.toggleOpen();
			});
		}
	}, {
		key: 'init',
		value: function init() {
			this.setAriaHidden();
			$('body').appendChild(this.backdrop);
			this.attachEventHandlers();
			this.body.appendChild(this.backdrop);
		}
	}]);
	return ToggleNav;
}();

var lazysizes = createCommonjsModule(function (module) {
	(function (window, factory) {
		var lazySizes = factory(window, window.document);
		window.lazySizes = lazySizes;
		if ('object' == 'object' && module.exports) {
			module.exports = lazySizes;
		}
	})(window, function l(window, document) {
		'use strict';
		/*jshint eqnull:true */

		if (!document.getElementsByClassName) {
			return;
		}

		var lazySizesConfig;

		var docElem = document.documentElement;

		var Date = window.Date;

		var supportPicture = window.HTMLPictureElement;

		var _addEventListener = 'addEventListener';

		var _getAttribute = 'getAttribute';

		var addEventListener = window[_addEventListener];

		var setTimeout = window.setTimeout;

		var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

		var requestIdleCallback = window.requestIdleCallback;

		var regPicture = /^picture$/i;

		var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

		var regClassCache = {};

		var forEach = Array.prototype.forEach;

		var hasClass = function hasClass(ele, cls) {
			if (!regClassCache[cls]) {
				regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			}
			return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
		};

		var addClass = function addClass(ele, cls) {
			if (!hasClass(ele, cls)) {
				ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
			}
		};

		var removeClass = function removeClass(ele, cls) {
			var reg;
			if (reg = hasClass(ele, cls)) {
				ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
			}
		};

		var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
			var action = add ? _addEventListener : 'removeEventListener';
			if (add) {
				addRemoveLoadEvents(dom, fn);
			}
			loadEvents.forEach(function (evt) {
				dom[action](evt, fn);
			});
		};

		var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
			var event = document.createEvent('CustomEvent');

			event.initCustomEvent(name, !noBubbles, !noCancelable, detail || {});

			elem.dispatchEvent(event);
			return event;
		};

		var updatePolyfill = function updatePolyfill(el, full) {
			var polyfill;
			if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
				polyfill({ reevaluate: true, elements: [el] });
			} else if (full && full.src) {
				el.src = full.src;
			}
		};

		var getCSS = function getCSS(elem, style) {
			return (getComputedStyle(elem, null) || {})[style];
		};

		var getWidth = function getWidth(elem, parent, width) {
			width = width || elem.offsetWidth;

			while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
				width = parent.offsetWidth;
				parent = parent.parentNode;
			}

			return width;
		};

		var rAF = function () {
			var running, waiting;
			var firstFns = [];
			var secondFns = [];
			var fns = firstFns;

			var run = function run() {
				var runFns = fns;

				fns = firstFns.length ? secondFns : firstFns;

				running = true;
				waiting = false;

				while (runFns.length) {
					runFns.shift()();
				}

				running = false;
			};

			var rafBatch = function rafBatch(fn, queue) {
				if (running && !queue) {
					fn.apply(this, arguments);
				} else {
					fns.push(fn);

					if (!waiting) {
						waiting = true;
						(document.hidden ? setTimeout : requestAnimationFrame)(run);
					}
				}
			};

			rafBatch._lsFlush = run;

			return rafBatch;
		}();

		var rAFIt = function rAFIt(fn, simple) {
			return simple ? function () {
				rAF(fn);
			} : function () {
				var that = this;
				var args = arguments;
				rAF(function () {
					fn.apply(that, args);
				});
			};
		};

		var throttle = function throttle(fn) {
			var running;
			var lastTime = 0;
			var gDelay = 125;
			var RIC_DEFAULT_TIMEOUT = 666;
			var rICTimeout = RIC_DEFAULT_TIMEOUT;
			var run = function run() {
				running = false;
				lastTime = Date.now();
				fn();
			};
			var idleCallback = requestIdleCallback ? function () {
				requestIdleCallback(run, { timeout: rICTimeout });
				if (rICTimeout !== RIC_DEFAULT_TIMEOUT) {
					rICTimeout = RIC_DEFAULT_TIMEOUT;
				}
			} : rAFIt(function () {
				setTimeout(run);
			}, true);

			return function (isPriority) {
				var delay;
				if (isPriority = isPriority === true) {
					rICTimeout = 44;
				}

				if (running) {
					return;
				}

				running = true;

				delay = gDelay - (Date.now() - lastTime);

				if (delay < 0) {
					delay = 0;
				}

				if (isPriority || delay < 9 && requestIdleCallback) {
					idleCallback();
				} else {
					setTimeout(idleCallback, delay);
				}
			};
		};

		//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
		var debounce = function debounce(func) {
			var timeout, timestamp;
			var wait = 99;
			var run = function run() {
				timeout = null;
				func();
			};
			var later = function later() {
				var last = Date.now() - timestamp;

				if (last < wait) {
					setTimeout(later, wait - last);
				} else {
					(requestIdleCallback || run)(run);
				}
			};

			return function () {
				timestamp = Date.now();

				if (!timeout) {
					timeout = setTimeout(later, wait);
				}
			};
		};

		var loader = function () {
			var lazyloadElems, preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

			var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

			var defaultExpand, preloadExpand, hFac;

			var regImg = /^img$/i;
			var regIframe = /^iframe$/i;

			var supportScroll = 'onscroll' in window && !/glebot/.test(navigator.userAgent);

			var shrinkExpand = 0;
			var currentExpand = 0;

			var isLoading = 0;
			var lowRuns = -1;

			var resetPreloading = function resetPreloading(e) {
				isLoading--;
				if (e && e.target) {
					addRemoveLoadEvents(e.target, resetPreloading);
				}

				if (!e || isLoading < 0 || !e.target) {
					isLoading = 0;
				}
			};

			var isNestedVisible = function isNestedVisible(elem, elemExpand) {
				var outerRect;
				var parent = elem;
				var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

				eLtop -= elemExpand;
				eLbottom += elemExpand;
				eLleft -= elemExpand;
				eLright += elemExpand;

				while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
					visible = (getCSS(parent, 'opacity') || 1) > 0;

					if (visible && getCSS(parent, 'overflow') != 'visible') {
						outerRect = parent.getBoundingClientRect();
						visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
					}
				}

				return visible;
			};

			var checkElements = function checkElements() {
				var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

				if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

					i = 0;

					lowRuns++;

					if (preloadExpand == null) {
						if (!('expand' in lazySizesConfig)) {
							lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
						}

						defaultExpand = lazySizesConfig.expand;
						preloadExpand = defaultExpand * lazySizesConfig.expFactor;
					}

					if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
						currentExpand = preloadExpand;
						lowRuns = 0;
					} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
						currentExpand = defaultExpand;
					} else {
						currentExpand = shrinkExpand;
					}

					for (; i < eLlen; i++) {

						if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
							continue;
						}

						if (!supportScroll) {
							unveilElement(lazyloadElems[i]);continue;
						}

						if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
							elemExpand = currentExpand;
						}

						if (beforeExpandVal !== elemExpand) {
							eLvW = innerWidth + elemExpand * hFac;
							elvH = innerHeight + elemExpand;
							elemNegativeExpand = elemExpand * -1;
							beforeExpandVal = elemExpand;
						}

						rect = lazyloadElems[i].getBoundingClientRect();

						if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
							unveilElement(lazyloadElems[i]);
							loadedSomething = true;
							if (isLoading > 9) {
								break;
							}
						} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
							autoLoadElem = preloadElems[0] || lazyloadElems[i];
						}
					}

					if (autoLoadElem && !loadedSomething) {
						unveilElement(autoLoadElem);
					}
				}
			};

			var throttledCheckElements = throttle(checkElements);

			var switchLoadingClass = function switchLoadingClass(e) {
				addClass(e.target, lazySizesConfig.loadedClass);
				removeClass(e.target, lazySizesConfig.loadingClass);
				addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			};
			var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
			var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
				rafedSwitchLoadingClass({ target: e.target });
			};

			var changeIframeSrc = function changeIframeSrc(elem, src) {
				try {
					elem.contentWindow.location.replace(src);
				} catch (e) {
					elem.src = src;
				}
			};

			var handleSources = function handleSources(source) {
				var customMedia, parent;

				var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

				if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
					source.setAttribute('media', customMedia);
				}

				if (sourceSrcset) {
					source.setAttribute('srcset', sourceSrcset);
				}

				//https://bugzilla.mozilla.org/show_bug.cgi?id=1170572
				if (customMedia) {
					parent = source.parentNode;
					parent.insertBefore(source.cloneNode(), source);
					parent.removeChild(source);
				}
			};

			var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
				var src, srcset, parent, isPicture, event, firesLoad;

				if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

					if (sizes) {
						if (isAuto) {
							addClass(elem, lazySizesConfig.autosizesClass);
						} else {
							elem.setAttribute('sizes', sizes);
						}
					}

					srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
					src = elem[_getAttribute](lazySizesConfig.srcAttr);

					if (isImg) {
						parent = elem.parentNode;
						isPicture = parent && regPicture.test(parent.nodeName || '');
					}

					firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

					event = { target: elem };

					if (firesLoad) {
						addRemoveLoadEvents(elem, resetPreloading, true);
						clearTimeout(resetPreloadingTimer);
						resetPreloadingTimer = setTimeout(resetPreloading, 2500);

						addClass(elem, lazySizesConfig.loadingClass);
						addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
					}

					if (isPicture) {
						forEach.call(parent.getElementsByTagName('source'), handleSources);
					}

					if (srcset) {
						elem.setAttribute('srcset', srcset);
					} else if (src && !isPicture) {
						if (regIframe.test(elem.nodeName)) {
							changeIframeSrc(elem, src);
						} else {
							elem.src = src;
						}
					}

					if (srcset || isPicture) {
						updatePolyfill(elem, { src: src });
					}
				}

				if (elem._lazyRace) {
					delete elem._lazyRace;
				}
				removeClass(elem, lazySizesConfig.lazyClass);

				rAF(function () {
					if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
						if (firesLoad) {
							resetPreloading(event);
						} else {
							isLoading--;
						}
						switchLoadingClass(event);
					}
				}, true);
			});

			var unveilElement = function unveilElement(elem) {
				var detail;

				var isImg = regImg.test(elem.nodeName);

				//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
				var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
				var isAuto = sizes == 'auto';

				if ((isAuto || !isCompleted) && isImg && (elem.src || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass)) {
					return;
				}

				detail = triggerEvent(elem, 'lazyunveilread').detail;

				if (isAuto) {
					autoSizer.updateElem(elem, true, elem.offsetWidth);
				}

				elem._lazyRace = true;
				isLoading++;

				lazyUnveil(elem, detail, isAuto, sizes, isImg);
			};

			var onload = function onload() {
				if (isCompleted) {
					return;
				}
				if (Date.now() - started < 999) {
					setTimeout(onload, 999);
					return;
				}
				var afterScroll = debounce(function () {
					lazySizesConfig.loadMode = 3;
					throttledCheckElements();
				});

				isCompleted = true;

				lazySizesConfig.loadMode = 3;

				throttledCheckElements();

				addEventListener('scroll', function () {
					if (lazySizesConfig.loadMode == 3) {
						lazySizesConfig.loadMode = 2;
					}
					afterScroll();
				}, true);
			};

			return {
				_: function _() {
					started = Date.now();

					lazyloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass);
					preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
					hFac = lazySizesConfig.hFac;

					addEventListener('scroll', throttledCheckElements, true);

					addEventListener('resize', throttledCheckElements, true);

					if (window.MutationObserver) {
						new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
					} else {
						docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
						docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
						setInterval(throttledCheckElements, 999);
					}

					addEventListener('hashchange', throttledCheckElements, true);

					//, 'fullscreenchange'
					['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
						document[_addEventListener](name, throttledCheckElements, true);
					});

					if (/d$|^c/.test(document.readyState)) {
						onload();
					} else {
						addEventListener('load', onload);
						document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
						setTimeout(onload, 20000);
					}

					if (lazyloadElems.length) {
						checkElements();
						rAF._lsFlush();
					} else {
						throttledCheckElements();
					}
				},
				checkElems: throttledCheckElements,
				unveil: unveilElement
			};
		}();

		var autoSizer = function () {
			var autosizesElems;

			var sizeElement = rAFIt(function (elem, parent, event, width) {
				var sources, i, len;
				elem._lazysizesWidth = width;
				width += 'px';

				elem.setAttribute('sizes', width);

				if (regPicture.test(parent.nodeName || '')) {
					sources = parent.getElementsByTagName('source');
					for (i = 0, len = sources.length; i < len; i++) {
						sources[i].setAttribute('sizes', width);
					}
				}

				if (!event.detail.dataAttr) {
					updatePolyfill(elem, event.detail);
				}
			});
			var getSizeElement = function getSizeElement(elem, dataAttr, width) {
				var event;
				var parent = elem.parentNode;

				if (parent) {
					width = getWidth(elem, parent, width);
					event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

					if (!event.defaultPrevented) {
						width = event.detail.width;

						if (width && width !== elem._lazysizesWidth) {
							sizeElement(elem, parent, event, width);
						}
					}
				}
			};

			var updateElementsSizes = function updateElementsSizes() {
				var i;
				var len = autosizesElems.length;
				if (len) {
					i = 0;

					for (; i < len; i++) {
						getSizeElement(autosizesElems[i]);
					}
				}
			};

			var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

			return {
				_: function _() {
					autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
					addEventListener('resize', debouncedUpdateElementsSizes);
				},
				checkElems: debouncedUpdateElementsSizes,
				updateElem: getSizeElement
			};
		}();

		var init = function init() {
			if (!init.i) {
				init.i = true;
				autoSizer._();
				loader._();
			}
		};

		(function () {
			var prop;

			var lazySizesDefaults = {
				lazyClass: 'lazyload',
				loadedClass: 'lazyloaded',
				loadingClass: 'lazyloading',
				preloadClass: 'lazypreload',
				errorClass: 'lazyerror',
				//strictClass: 'lazystrict',
				autosizesClass: 'lazyautosizes',
				srcAttr: 'data-src',
				srcsetAttr: 'data-srcset',
				sizesAttr: 'data-sizes',
				//preloadAfterLoad: false,
				minSize: 40,
				customMedia: {},
				init: true,
				expFactor: 1.5,
				hFac: 0.8,
				loadMode: 2
			};

			lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

			for (prop in lazySizesDefaults) {
				if (!(prop in lazySizesConfig)) {
					lazySizesConfig[prop] = lazySizesDefaults[prop];
				}
			}

			window.lazySizesConfig = lazySizesConfig;

			setTimeout(function () {
				if (lazySizesConfig.init) {
					init();
				}
			});
		})();

		return {
			cfg: lazySizesConfig,
			autoSizer: autoSizer,
			loader: loader,
			init: init,
			uP: updatePolyfill,
			aC: addClass,
			rC: removeClass,
			hC: hasClass,
			fire: triggerEvent,
			gW: getWidth,
			rAF: rAF
		};
	});
});

var Lazyload$1 = function Lazyload() {
	window.lazySizesConfig = window.lazySizesConfig || {};
	window.lazySizesConfig.lazyClass = 'js-lazyload';
};

/*
// add click evt to body and log target el
$('body').on('click', el => console.log(el.target));
// loop over all paragph elements and log
$$('p').forEach(el => console.log(el));
*/

Fonts$1();
Lazyload$1();

var $toggleButton = $('.js-nav-toggle');
if ($toggleButton) {
	var toggleNavInstance = new ToggleNav($toggleButton);
	toggleNavInstance.init();
}
//# sourceMappingURL=main.js.map
