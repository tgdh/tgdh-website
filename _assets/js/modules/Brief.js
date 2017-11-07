import SmoothScroll from 'smooth-scroll';
import * as ValidityState from 'validate/dist/js/validityState-polyfill';
import validate from 'validate/dist/js/validate';

import whichTransitionEvent from './WhichTransition';

const INPUTS_TO_VALIDATE = ['input[type="text"]:not([hidden])', 'input[type="email"]', 'textarea', 'input[type="radio"]', 'input[type="file"]'];
const scroll = new SmoothScroll();

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

		this.actionNextTabs = Array.from(el.querySelectorAll('.js-brief-next-tabs'));
		this.actionPrevTabs = Array.from(el.querySelectorAll('.js-brief-prev-tabs'));

		this.tabs = Array.from(el.querySelectorAll('.js-brief-tab'));

		this.hasOwnBrief = false;
		this.customBriefFields = this.el.querySelector('.js-brief-create-brief-fields');

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
		scroll.animateScroll(slide);

		setTimeout(function() {
			const firstInput = slide.querySelector(INPUTS_TO_VALIDATE);
			if (firstInput) firstInput.focus();
			Brief.validateSlide(slide);
		}, 501);
	}

	init() {
		this.el.classList.add('c-brief--is-ready');

		if (this.sections.length === 0) return;
		this.setActiveSection(this.sections[0]);

		this.bindEvents();
		this.actionNext.forEach(next => Brief.disableButton(next));
		this.handleBriefMethod();
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

		this.actionNextTabs.forEach((next) => {
			next.addEventListener('click', () => {
				document.getElementById(next.dataset.target).click();
				this.setFormHeight(this.activeSlide.offsetHeight);
			});
		});

		this.actionPrevTabs.forEach((prev) => {
			prev.addEventListener('click', () => {
				document.getElementById(prev.dataset.target).click();
				this.setFormHeight(this.activeSlide.offsetHeight);
			});
		});

		this.tabs.forEach((tab) => {
			tab.addEventListener('click', () => {
				this.setFormHeight(this.activeSlide.offsetHeight);
			});
		});

		this.inputs.forEach(input => {
			input.addEventListener('keyup', () => {
				const parentSlide = input.closest('.js-brief-slide');
				Brief.validateSlide(parentSlide);
			});
			input.addEventListener('click', () => {
				const parentSlide = input.closest('.js-brief-slide');
				Brief.validateSlide(parentSlide);
			});

			input.addEventListener('change', () => {
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
			inputValidity.push(input.checkValidity());
		});
		console.log(inputValidity);
		return !inputValidity.includes(false);
	}

	static validateSlide(slide) {
		const nextButton = slide.querySelector('.js-brief-next');
		if (!nextButton) return;

		if (Brief.isSlideInputsValid(slide)) {
			Brief.enableButton(nextButton);
		} else {
			Brief.disableButton(nextButton);
		}
	}

	static getSlideValidationErrors(slide) {
		const slideInputs = Brief.getSlideInputs(slide);
		Array.from(slideInputs).forEach((input) => {
			console.log(validate.hasError(input));
			validate.showError(input);
		});
	}

	static disableFieldset(slide) {
		slide.disabled = true;
	}

	static enableFieldset(slide) {
		slide.disabled = false;
	}

	showUploadField(uploadField, uploadInput) {
		this.hasOwnBrief = true;
		uploadInput.setAttribute("required", "");
		uploadField.classList.remove('is-hidden');

		this.setFormHeight(this.activeSlide.offsetHeight + 300);

		const parentSlide = uploadInput.closest('.js-brief-slide');
		Brief.validateSlide(parentSlide);
		this.disableCustomBriefFields();
	}

	hideUploadField(uploadField, uploadInput) {
		this.hasOwnBrief = false;
		uploadInput.removeAttribute("required");
		uploadField.classList.add('is-hidden');

		const parentSlide = uploadInput.closest('.js-brief-slide');
		Brief.validateSlide(parentSlide);
		this.enableCustomBriefFields();
	}

	enableCustomBriefFields() {
		this.customBriefFields.disabled = false;
	}

	disableCustomBriefFields() {
		this.customBriefFields.disabled = true;
	}

	static setActionTarget(button, target) {
		button.dataset.target = target;
	}

	handleBriefMethod() {
		const hasBriefOption = this.el.querySelector('.js-has-brief');
		const createBriefOption = this.el.querySelector('.js-create-brief');
		const uploadField = this.el.querySelector('.js-brief-upload-field');
		const uploadInput = uploadField.querySelector('input[type="file"]');
		const parent = uploadField.closest('.js-brief-slide');
		const actionNext = parent.querySelector('.js-brief-next');

		const proposalSection = this.el.querySelector('.js-brief-section-proposal');
		const actionPrevProposal = proposalSection.querySelector('.js-brief-prev');

		hasBriefOption.addEventListener('change', () => {
			this.showUploadField(uploadField, uploadInput);
			Brief.setActionTarget(actionNext, 'proposal');
			Brief.setActionTarget(actionPrevProposal, 'theBrief');
		});
		createBriefOption.addEventListener('change', () => {
			this.hideUploadField(uploadField, uploadInput);
			Brief.setActionTarget(actionNext, 'briefFields1');
			Brief.setActionTarget(actionPrevProposal, 'briefFields7');
		});
	}
}
export default Brief;
