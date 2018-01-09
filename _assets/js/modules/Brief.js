import SmoothScroll from 'smooth-scroll';
import * as ValidityState from 'validate/dist/js/validityState-polyfill';
import validate from 'validate/dist/js/validate';
import animorph from 'animorph/dist/animorph';
// import * as garlicjs from '../legacy/garlicjs/dist/garlic-standalone.min';

const INPUTS_TO_VALIDATE = ['input[type="text"]:not([hidden])', 'input[type="email"]', 'textarea', 'input[type="radio"]', 'input[type="file"]', 'input[type="checkbox"]'];
const scroll = new SmoothScroll();

class Brief {
	constructor(el) {
		if (!el) {
			return;
		}

		this.el = el;
		this.sections = Array.from(el.querySelectorAll('.js-brief-section'));
		this.activeSection = undefined;
		this.slides = Array.from(el.querySelectorAll('.js-brief-slide'));
		this.previousActiveSlide = undefined;
		this.activeSlide = undefined;

		this.inputs = Array.from(el.querySelectorAll(INPUTS_TO_VALIDATE));

		this.actionNext = Array.from(el.querySelectorAll('.js-brief-next'));
		this.actionPrev = Array.from(el.querySelectorAll('.js-brief-prev'));

		this.actionNextTabs = Array.from(el.querySelectorAll('.js-brief-next-tabs'));
		this.actionPrevTabs = Array.from(el.querySelectorAll('.js-brief-prev-tabs'));

		this.tabs = Array.from(el.querySelectorAll('.js-brief-tab'));

		this.hasOwnBrief = false;
		this.customBriefFields = this.el.querySelector('.js-brief-create-brief-fields');

		this.pager = this.el.querySelector('.js-brief-section-pager');
		this.pagerButtons = Array.from(this.pager.querySelectorAll('.js-brief-section-pager-button'));
		this.pagerHeight = 0

		this.pagerAbout = this.pager.querySelector('.js-brief-section-pager-about');
		this.pagerBrief = this.pager.querySelector('.js-brief-section-pager-brief');
		this.pagerPropsal = this.pager.querySelector('.js-brief-section-pager-proposal');

		this.aboutValid = false;
		this.briefValid = false;
		this.proposalValid = false;

		this.direction = 'right';

		this.init();
	}

	set aboutValid(bool) {
		if (bool === true) {
			this.setActivePagerButton(this.pagerAbout);
		} else {
			Brief.disablePagerButton(this.pagerAbout);
		}
	}

	set briefValid(bool) {
		if (bool === true) {
			this.setActivePagerButton(this.pagerBrief);
		} else {
			Brief.disablePagerButton(this.pagerBrief);
		}
	}

	set proposalValid(bool) {
		if (bool === true) {
			this.setActivePagerButton(this.pagerPropsal);
		} else {
			Brief.disablePagerButton(this.pagerPropsal);
		}
	}

	setFormHeight(height) {
		if (height > this.pagerHeight) {
			this.el.style.height = `${height}px`;
		} else {
			this.el.style.height = `${this.pagerHeight}px`;
		}
	}

	setActiveSection(section) {
		if (!section) return;

		const ref = section.dataset.pagerButton;
		const sectionButton = this.pager.querySelector(`.${ref}`);

		this.setActivePagerButton(sectionButton);

		this.activeSection = section;
	}

	setActiveSlide(slide) {
		if (!slide) return;
		this.activeSlide = slide;
		Brief.enableFieldset(slide);

		if (this.previousActiveSlide) {
			this.hideSlide(this.previousActiveSlide);
		}
		const slideSection = slide.closest('.js-brief-section');
		if (this.activeSection !== slideSection) {
			this.setActiveSection(slideSection);
		}

		this.showSlide(slide);
		this.setFormHeight(slide.offsetHeight);
		// scroll.animateScroll(slide);

		setTimeout(function() {
			const firstInput = slide.querySelector(INPUTS_TO_VALIDATE);
			if (firstInput) firstInput.focus();
			Brief.validateSlide(slide);
		}, 301);

		// this has to be called last
		this.previousActiveSlide = slide;
	}

	hideSlide(slide) {
		if (this.direction === 'left') {
			slide.classList.add('anim-dir-left');
		} else {
			slide.classList.remove('anim-dir-left');
		}
		window.animorph.leave(slide).then(() => slide.classList.remove('is-active'));
	}

	showSlide(slide) {
		if (this.direction === 'left') {
			slide.classList.add('anim-dir-left');
		} else {
			slide.classList.remove('anim-dir-left');
		}
		window.animorph.enter(slide).then(() => slide.classList.add('is-active'));
	}

	init() {
		this.el.classList.add('c-brief--is-ready');

		this.pagerHeight = this.pager.offsetHeight;

		if (this.sections.length === 0) return;
		// disable all slides to prevent tabbing further in the form
		this.slides.forEach(slide => Brief.disableFieldset(slide));
		this.setActiveSlide(this.sections[0].querySelector('.js-brief-slide'));

		this.bindEvents();
		this.actionNext.forEach(next => Brief.disableButton(next));
		this.handleBriefMethod();

		this.pagerButtons.forEach((pagerButton, i) => {
			if (i === 0) {
				this.setActivePagerButton(pagerButton);
			} else {
				Brief.disablePagerButton(pagerButton);
			}
		});
	}

	static disablePagerButton(button) {
		button.classList.remove('is-active');
		button.disabled = true;
	}

	static enablePagerButton(button) {
		button.disabled = false;
	}

	setActivePagerButton(button) {
		this.pagerButtons.forEach((pagerButton) => {
			if (button === pagerButton) {
				pagerButton.classList.add('is-active');
				Brief.enablePagerButton(pagerButton);
			} else {
				pagerButton.classList.remove('is-active');
			}
		});
	}

	bindEvents() {
		this.actionNext.forEach((next) => {
			next.addEventListener('click', () => {
				this.direction = 'right';
				switch (next.dataset.target) {
				case 'about':
					this.aboutValid = true;
					break;
				case 'theBrief':
					this.briefValid = true;
					break;
				case 'proposal':
					this.proposalValid = true;
					break;
				default:
					break;
				}
				this.setActiveSlide(Brief.getTargetById(next));
			});
		});

		this.actionPrev.forEach((prev) => {
			prev.addEventListener('click', () => {
				this.direction = 'left';
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

		this.inputs.forEach((input) => {
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

		this.pagerButtons.forEach((button) => {
			button.addEventListener('click', () => {
				this.setActiveSlide(document.getElementById(button.dataset.target));
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
		// console.log(inputValidity);
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

	static disableFieldset(slide) {
		slide.disabled = true;
	}

	static enableFieldset(slide) {
		slide.disabled = false;
	}

	showUploadField(uploadField, uploadInput) {
		this.hasOwnBrief = true;
		uploadInput.setAttribute('required', '');
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
