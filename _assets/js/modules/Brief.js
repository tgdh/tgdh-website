import { Validation } from 'bunnyjs/src/Validation';
import ValidationConfig from './ValidationConfig';

import whichTransitionEvent from './WhichTransition';

class Brief {
	constructor(el) {
		if (!el) {
			return;
		}

		this.el = el;
		this.sections = Array.from(el.querySelectorAll('.js-brief-section'));
		this.activeSection = null;
		this.slides = Array.from(el.querySelectorAll('.js-brief-slide'));
		this.activeSlide = null;

		this.actionNext = Array.from(el.querySelectorAll('.js-brief-next'));
		this.actionPrev = Array.from(el.querySelectorAll('.js-brief-prev'));

		this.init();
	}

	initValidation() {
		console.log('init validation');
		Validation.init(this.el.querySelector('form'), true);
		Validation.initInline(document.querySelector('.js-brief'));
		Validation.ui.config = ValidationConfig;
	}

	setFormHeight(height) {
		this.el.style.height = `${height}px`;
	}

	setActiveSection(section) {
		this.activeSection = section;
		this.setActiveSlide(section.querySelector('.js-brief-slide'));

		this.setFormHeight(this.activeSlide.offsetHeight);
	}

	hideSlide(slide) {
		slide.classList.remove('is-active')
	}

	showSlide(slide) {
		slide.classList.add('is-active')
	}

	setActiveSlide(slide) {
		if (this.activeSlide) {
			this.hideSlide(this.activeSlide);
		}
		this.showSlide(slide);
		this.activeSlide = slide;
		this.setFormHeight(this.activeSlide.offsetHeight);
	}

	init() {
		this.el.classList.add('c-brief--is-ready');

		if (this.sections.length === 0) return;
		this.setActiveSection(this.sections[0]);

		this.initValidation();
		this.bindEvents();
		this.actionNext.forEach(next => this.disableButton(next));
	}

	bindEvents() {
		this.actionNext.forEach(next => {
			next.addEventListener('click', async function () {
				const parentSlide = next.closest('.js-brief-slide');
				const isValid = await this.validateSlide(parentSlide);
				console.log('is valid: ', isValid);
				if (isValid) {
					this.setActiveSlide(this.getTargetById(next));
				}
			});
		});

		this.actionPrev.forEach(prev => {
			prev.addEventListener('click', () => {
				this.setActiveSlide(this.getTargetById(prev));
			});
		});
	}

	getTargetById(button) {
		return document.querySelector(`#${button.dataset.target}`);
	}

	disableButton(button) {
		button.disabled = true;
	}

	enableButton(button) {
		button.disabled = false;
	}

	validateSlide(slide) {
		Validation.validateSection(slide).then((res) => {
			if (res === true) {
				this.enableButton(slide.querySelector('.js-brief-next'));
				return res;
			} else {
				Validation.focusInput(res[0]);
				return false;
			}
		});
	}
}
export default Brief;
