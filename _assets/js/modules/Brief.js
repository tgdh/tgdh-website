class Brief {
	constructor(el) {
		if (!el) {
			return;
		}
		this.el = el;
		this.sections = Array.from(el.querySelectorAll('.js-brief-section'));
		this.activeSection = null;

		this.init();
	}

	setFormHeight(height) {
		this.el.style.height = `${height}px`;
	}

	setActiveSection(section) {
		this.activeSection = section;
		this.sections.forEach((item) => {
			if (item === section) {
				item.classList.add('c-brief__section--is-active');
			} else {
				item.classList.remove('c-brief__section--is-active');
			}
		});

		this.setFormHeight(section.offsetHeight);
	}

	init() {
		console.log('brief-ready');
		this.el.classList.add('c-brief--is-ready');

		if (this.sections.length === 0) return;
		this.setActiveSection(this.sections[0]);
	}

	bindEvents() {
		this.input.addEventListener('keyup', () => this.updateUI());
	}
}
export default Brief;
