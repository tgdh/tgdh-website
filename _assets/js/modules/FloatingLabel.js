const FOCUSED_CLASS = 'has-value';

class FloatingLabel {
	constructor(el) {
		if (!el) {
			return;
		}

		this.el = el;
		this.input = el.querySelector('input');
		this.isFocused = false;

		this.bindEvents();

		// setTimeout(() => {
		// 	this.checkInput();
		// }, 300);

		this.checkInput();

		window.addEventListener('load', () => {
			setTimeout(() => {
				this.checkInput();
			}, 300);
		});
	}

	activateFocus() {
		this.el.classList.add(FOCUSED_CLASS);
		this.isFocused = true;
	}

	deactivateFocus() {
		this.el.classList.remove(FOCUSED_CLASS);
		this.isFocused = false;
	}

	checkInput() {
		if (this.input.value.length > 0) {
			this.activateFocus();
		} else {
			this.deactivateFocus();
		}
	}

	bindEvents() {
		this.input.addEventListener('focus', () => this.activateFocus());
		this.input.addEventListener('blur', () => this.checkInput());
	}

}
export default FloatingLabel;
