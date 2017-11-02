import * as ValidityState from 'validate/dist/js/validityState-polyfill';
import validate from 'validate/dist/js/validate';

import whichTransitionEvent from './WhichTransition';

const INPUTS_TO_VALIDATE = ['input[type="text"]', 'input[type="email"]', 'textarea'];

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

		this.inputs = Array.from(el.querySelectorAll(INPUTS_TO_VALIDATE));

		this.actionNext = Array.from(el.querySelectorAll('.js-brief-next'));
		this.actionPrev = Array.from(el.querySelectorAll('.js-brief-prev'));

		this.init();
	}

	setFormHeight(height) {
		this.el.style.height = `${height}px`;
	}

	setActiveSection(section) {
		this.activeSection = section;
		this.setActiveSlide(section.querySelector('.js-brief-slide'));

		this.setFormHeight(this.activeSlide.offsetHeight);
	}

	static hideSlide(slide) {
		slide.classList.remove('is-active');
	}

	static showSlide(slide) {
		slide.classList.add('is-active');
	}

	setActiveSlide(slide) {
		if (this.activeSlide) {
			Brief.hideSlide(this.activeSlide);
		}
		Brief.showSlide(slide);
		this.activeSlide = slide;
		this.setFormHeight(this.activeSlide.offsetHeight);
	}

	init() {
		this.el.classList.add('c-brief--is-ready');

		if (this.sections.length === 0) return;
		this.setActiveSection(this.sections[0]);

		this.bindEvents();
		this.actionNext.forEach(next => Brief.disableButton(next));
	}

	bindEvents() {
		this.actionNext.forEach((next) => {
			next.addEventListener('click', () => {
				this.setActiveSlide(Brief.getTargetById(next));
			});
		});

		this.actionPrev.forEach((prev) => {
			prev.addEventListener('click', () => {
				this.setActiveSlide(Brief.getTargetById(prev));
			});
		});

		this.inputs.forEach(input => {
			input.addEventListener('keyup', () => {
				const parentSlide = input.closest('.js-brief-slide');
				Brief.validateSlide(parentSlide);
			});
		});
	}

	static getTargetById(button) {
		return document.querySelector(`#${button.dataset.target}`);
	}

	static disableButton(button) {
		button.disabled = true;
	}

	static enableButton(button) {
		button.disabled = false;
	}

	static getSlideInputs(slide) {
		return slide.querySelectorAll(INPUTS_TO_VALIDATE);
	}

	static isSlideInputsValid(slide) {
		const slideInputs = Brief.getSlideInputs(slide);
		const inputValidity = [];
		Array.from(slideInputs).forEach((input) => {
			if (validate.hasError(input)) {
				inputValidity.push(false);
			} else {
				inputValidity.push(true);
			}
		});
		console.log(inputValidity);
		return !inputValidity.includes(false);
	}

	static validateSlide(slide) {
		if (Brief.isSlideInputsValid(slide)) {
			// console.log('its valid, enable button');
			Brief.enableButton(slide.querySelector('.js-brief-next'));
		} else {
			// console.log('its not valid, disable button');
			Brief.disableButton(slide.querySelector('.js-brief-next'));
		}
	}

	static getSlideValidationErrors(slide) {
		const slideInputs = Brief.getSlideInputs(slide);
		Array.from(slideInputs).forEach((input) => {
			console.log(validate.hasError(input));
			validate.showError(input);
		});
	}
}
export default Brief;
