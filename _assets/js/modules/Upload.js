// inspired by https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/

class Upload {
	constructor(el) {
		if (!el) {
			return;
		}
		this.el = el;
		this.input = this.el.querySelector('input');
		this.label = this.el.querySelector('label');
		this.labelText = this.label.querySelector('.js-upload-text');
		this.labelVal = this.label.innerHTML;

		this.bindEvents();
	}

	updateLabel(e) {
		let fileName = '';

		if (this.input.files && this.input.files.length > 1) {
			fileName = (this.input.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		} else {
			fileName = this.input.value.split('\\').pop();
		}

		if (fileName) {
			this.label.querySelector('.js-upload-text').innerHTML = fileName;
		} else {
			this.label.innerHTML = this.labelVal;
		}
	}

	bindEvents() {
		this.input.addEventListener('change', () => this.updateLabel());

		// Firefox bug fix
		this.input.addEventListener('focus', () => { this.input.classList.add('has-focus'); });
		this.input.addEventListener('blur', () => { this.input.classList.remove('has-focus'); });
	}
}
export default Upload;
