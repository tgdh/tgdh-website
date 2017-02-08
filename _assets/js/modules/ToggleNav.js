import { $ } from './Bling';

class ToggleNav {
	constructor(el) {
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
		this.target = $(`#${this.classes.targetClass}`);
		this.scopeSelector = `${this.classes.scopePrefix}${this.classes.targetClass}-`;
		this.backdrop = document.createElement('div');
		this.backdrop.classList.add('c-nav-backdrop');
	}
	setAriaHidden() {
		if (this.target.offsetHeight > 0) {
			this.target.setAttribute('aria-hidden', false);
		} else {
			this.target.setAttribute('aria-hidden', true);
		}
	}
	open() {
		this.html.classList.remove(this.scopeSelector + this.classes.hiddenClass);
		this.html.classList.add(this.scopeSelector + this.classes.visibleClass);
		this.target.setAttribute('aria-hidden', false);
	}
	close() {
		this.html.classList.remove(this.scopeSelector + this.classes.visibleClass);
		this.html.classList.add(this.scopeSelector + this.classes.hiddenClass);
		this.target.setAttribute('aria-hidden', true);
	}
	checkIsOpen() {
		if (this.html.classList.contains(this.scopeSelector + this.classes.visibleClass)) {
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}
	toggleOpen() {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
		this.checkIsOpen();
	}
	attachEventHandlers() {
		this.toggle.on('click', () => {
			this.toggle.blur();
			this.toggleOpen();
		});

		this.backdrop.on('click', () => {
			this.toggleOpen();
		});
	}
	init() {
		this.setAriaHidden();
		$('body').appendChild(this.backdrop);
		this.attachEventHandlers();
		this.body.appendChild(this.backdrop);
	}
}
export default ToggleNav;
