import { $ } from './Bling';

class ToggleNav {
	constructor(el) {
		this.toggle = el;
		this.html = $('html');
		this.classes = {
			scopePrefix: 's-',
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this.toggle.getAttribute('data-toggle')
		};
		this.target = $(`#${this.classes.targetClass}`);
	}
	setAriaHidden() {
		if (this.target.offsetHeight > 0) {
			this.target.setAttribute('aria-hidden', false);
		} else {
			this.target.setAttribute('aria-hidden', true);
		}
	}
	attachEventHandlers() {
		const scopeSelector = `${this.classes.scopePrefix}${this.classes.targetClass}-`;
		this.toggle.on('click', () => {
			if (this.html.classList.contains(scopeSelector + this.classes.visibleClass)) {
				this.html.classList.remove(scopeSelector + this.classes.visibleClass);
				this.html.classList.add(scopeSelector + this.classes.hiddenClass);
				this.target.setAttribute('aria-hidden', true);
			} else {
				this.html.classList.remove(scopeSelector + this.classes.hiddenClass);
				this.html.classList.add(scopeSelector + this.classes.visibleClass);
				this.target.setAttribute('aria-hidden', false);
			}
		});
	}
	init() {
		this.setAriaHidden();
		this.attachEventHandlers();
	}
}
export default ToggleNav;
