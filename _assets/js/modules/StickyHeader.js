import throttle from './throttle';

class StickyHeader {
	constructor(el) {
		if (!el) {
			return;
		}
		this.el = el;
		this.bindEvents();
		this.scrollOffset = 150;
		this.fixedClass = 's-logo-fixed';
		this.fixEl();
	}
	bindEvents() {
		window.addEventListener('scroll', throttle(() => this.fixEl(), 250));
	}
	fixEl() {
		if (window.scrollY >= this.scrollOffset) {
			document.documentElement.classList.add(this.fixedClass);
		} else {
			document.documentElement.classList.remove(this.fixedClass);
		}
	}
}
export default StickyHeader;
