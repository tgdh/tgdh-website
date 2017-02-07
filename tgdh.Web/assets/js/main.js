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
		this.classes = {
			scopePrefix: 's-',
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this.toggle.getAttribute('data-toggle')
		};
		this.target = $('#' + this.classes.targetClass);
		this.scopeSelector = '' + this.classes.scopePrefix + this.classes.targetClass + '-';
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
		key: 'openTarget',
		value: function openTarget() {
			this.html.classList.remove(this.scopeSelector + this.classes.hiddenClass);
			this.html.classList.add(this.scopeSelector + this.classes.visibleClass);
			this.target.setAttribute('aria-hidden', false);
		}
	}, {
		key: 'closeTarget',
		value: function closeTarget() {
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
		key: 'attachEventHandlers',
		value: function attachEventHandlers() {
			var _this = this;

			this.toggle.on('click', function () {
				if (_this.isOpen) {
					_this.closeTarget();
				} else {
					_this.openTarget();
				}
				_this.checkIsOpen();
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

var $toggleButton = $('.js-nav-toggle');
if ($toggleButton) {
	new ToggleNav($toggleButton).init();
}
//# sourceMappingURL=main.js.map
