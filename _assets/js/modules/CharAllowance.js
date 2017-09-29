import CreateDOMEl from './CreateDomEl';

class CharLimit {
	constructor(el) {
		if (!el) {
			return;
		}
		this.el = el;
		this.input = el.querySelector('textarea');
		this.countEl = null;

		this.maxLength = el.dataset.maxLength;
		this.charsLeft = this.calcCharsLeft;

		this.init();
	}

	createMessage() {
		const elMarkup = `
		<span class="c-char-limit__count js-char-limit-count">${this.maxLength}</span> / ${this.maxLength}`;
		const messageHtml = new CreateDOMEl('div', 'c-char-limit__message', elMarkup);
		this.el.appendChild(messageHtml);

		this.countEl = this.el.querySelector('.js-char-limit-count');
	}

	calcCharsLeft() {
		this.charsLeft = this.maxLength - this.input.value.length;
	}

	updateUI() {
		this.calcCharsLeft();

		if (this.charsLeft <= 0) {
			this.el.classList.add('is-error');
		} else {
			this.el.classList.remove('is-error');
		}
		this.countEl.innerHTML = this.charsLeft;
	}

	init() {
		this.el.classList.add('c-char-limit');
		this.createMessage();
		this.bindEvents();
		this.updateUI();
	}

	bindEvents() {
		this.input.addEventListener('keyup', () => this.updateUI());
	}
}
export default CharLimit;
