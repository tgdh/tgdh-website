// based on https://gist.github.com/paulirish/12fb951a8b893a454b32
// taken from wes bos tweet
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/* eslint-disable */
Node.prototype.on = window.on = function (name, fn) {
	this.addEventListener(name, fn);
};
NodeList.prototype.__proto__ = Array.prototype;
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
	this.forEach((elem, i) => {
		elem.on(name, fn);
	});
};
/* eslint-enable */
export { $, $$ };
