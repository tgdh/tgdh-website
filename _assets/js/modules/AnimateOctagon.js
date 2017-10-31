import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimateOctagon {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.report();
		this.websiteDesktop();
		this.websiteMobile();
		this.websiteDesktop2();
		this.anniversary();
		this.contentSocial();
	}

	report() {
		const $elem = document.querySelector('.js-caseStudyOctagon__report__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyOctagon__report__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyOctagon__report',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop() {
		const $elem = document.querySelector('.js-caseStudyOctagon__web__desktop__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyOctagon__web__desktop__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyOctagon__web__desktop',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteMobile() {
		const $elemFirst = document.querySelector('.js-caseStudyOctagon__web__mobile__image-first');
		const $elemSecond = document.querySelector('.js-caseStudyOctagon__web__mobile__image-second');

		const elemFirstWidth = $elemFirst.offsetWidth;
		const elemSecondWidth = $elemSecond.offsetWidth;

		const tween = new TimeLineMax()
			.add([
				TweenMax.fromTo('.js-caseStudyOctagon__web__mobile__image-first', 1,
					{ x: -elemFirstWidth },
					{ x: 0, ease: Power4.easeInOut }),
				TweenMax.fromTo('.js-caseStudyOctagon__web__mobile__image-second', 1.2,
					{ x: -elemSecondWidth },
					{ x: 0, ease: Power4.easeInOut })
			]);

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyOctagon__web__mobile',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop2() {
		const $elem = document.querySelector('.js-caseStudyOctagon__web__desktop-2__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyOctagon__web__desktop-2__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyOctagon__web__desktop-2',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	anniversary() {
		const $elem = document.querySelector('.js-caseStudyOctagon__anniversary__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyOctagon__anniversary__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyOctagon__anniversary',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	contentSocial() {
		const sectionHeight = document.querySelector('.js-caseStudyOctagon__content-social').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyOctagon__content-social__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyOctagon__content-social__image', 1,
					{ y: elemHeight, x: 0 },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyOctagon__content-social',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}
}
export default AnimateOctagon;
