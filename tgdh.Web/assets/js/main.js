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

// Named Export

var url = 'http://wesbos.com';
function sayHi(name) {
	console.log('Hello there ' + name);
}

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

var Dog = function () {
	function Dog(name, breed) {
		classCallCheck(this, Dog);

		this.name = name;
		this.breed = breed;
	}

	createClass(Dog, [{
		key: 'bark',
		value: function bark() {
			console.log('Bark Bark! My name is ' + this.name);
		}
	}, {
		key: 'cuddle',
		value: function cuddle() {
			console.log('I love you owner! says ' + this.name);
		}
	}, {
		key: 'description',
		get: function get$$1() {
			return this.name + ' is a ' + this.breed + ' type of dog';
		}
	}, {
		key: 'nicknames',
		set: function set$$1(value) {
			this.nick = value.trim();
		},
		get: function get$$1() {
			return this.nick.toUpperCase();
		}
	}], [{
		key: 'info',
		value: function info() {
			console.log('A dog is better than a cat by 10 times');
		}
	}]);
	return Dog;
}();

var snickers = new Dog('Snickers', 'King Charles');
var sunny = new Dog('Sunny', 'Golden Doodle');
console.log(snickers);
console.log(sunny);
console.log(url);
sayHi('test');
// add click evt to body and log target el
$('body').on('click', function (el) {
  return console.log(el.target);
});
// loop over all paragph elements and log
$$('p').forEach(function (el) {
  return console.log(el);
});
//# sourceMappingURL=main.js.map
