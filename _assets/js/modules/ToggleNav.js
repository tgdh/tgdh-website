import { $ } from './Bling';

class ToggleNav {
	constructor(el) {
		this.isOpen = false;
		this.toggle = el;
		this.html = $('html');
		this.classes = {
			scopePrefix: 's-',
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this.toggle.getAttribute('data-toggle')
		};
		this.target = $(`#${this.classes.targetClass}`);
		this.scopeSelector = `${this.classes.scopePrefix}${this.classes.targetClass}-`;
	}
	setAriaHidden() {
		if (this.target.offsetHeight > 0) {
			this.target.setAttribute('aria-hidden', false);
		} else {
			this.target.setAttribute('aria-hidden', true);
		}
	}
	openTarget() {
		this.html.classList.remove(this.scopeSelector + this.classes.hiddenClass);
		this.html.classList.add(this.scopeSelector + this.classes.visibleClass);
		this.target.setAttribute('aria-hidden', false);
	}
	closeTarget() {
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
	attachEventHandlers() {
		this.toggle.on('click', () => {
			if (this.isOpen) {
				this.closeTarget();
			} else {
				this.openTarget();
			}
			this.checkIsOpen();
		});
	}
	init() {
		this.setAriaHidden();
		this.attachEventHandlers();
	}
}
export default ToggleNav;
