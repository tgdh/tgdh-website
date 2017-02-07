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

		this.toggle = el;
		this.html = $('html');
		this.classes = {
			scopePrefix: 's-',
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this.toggle.getAttribute('data-toggle')
		};
		this.target = $('#' + this.classes.targetClass);
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
		key: 'attachEventHandlers',
		value: function attachEventHandlers() {
			var _this = this;

			var scopeSelector = '' + this.classes.scopePrefix + this.classes.targetClass + '-';
			this.toggle.on('click', function () {
				if (_this.html.classList.contains(scopeSelector + _this.classes.visibleClass)) {
					_this.html.classList.remove(scopeSelector + _this.classes.visibleClass);
					_this.html.classList.add(scopeSelector + _this.classes.hiddenClass);
					_this.target.setAttribute('aria-hidden', true);
				} else {
					_this.html.classList.remove(scopeSelector + _this.classes.hiddenClass);
					_this.html.classList.add(scopeSelector + _this.classes.visibleClass);
					_this.target.setAttribute('aria-hidden', false);
				}
			});
		}
	}, {
		key: 'init',
		value: function init() {
			this.setAriaHidden();
			this.attachEventHandlers();
		}
	}]);
	return ToggleNav;
}();

/*
// add click evt to body and log target el
$('body').on('click', el => console.log(el.target));
// loop over all paragph elements and log
$$('p').forEach(el => console.log(el));
*/

new ToggleNav($('.js-nav-toggle')).init();
//# sourceMappingURL=main.js.map
