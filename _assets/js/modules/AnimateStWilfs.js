import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimateStWilfs {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.messaging();
		this.brief();
		this.brandGuide();
		this.livery();
		this.websiteDesktop();
		this.websiteMobile();
		this.websiteDesktop2();
		this.contentSocial();
	}

	messaging() {
		const sectionHeight = document.querySelector('.js-caseStudyStWilf__messaging').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyStWilf__messaging__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__messaging__image', 1,
					{ y: -elemHeight, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__messaging',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	brief() {
		const sectionHeight = document.querySelector('.js-caseStudyStWilf__brief').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyStWilf__brief__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__brief__image', 1,
					{ y: 0, x: elemWidth / 2 },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__brief',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	brandGuide() {
		const sectionHeight = document.querySelector('.js-caseStudyStWilf__brand-guide').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyStWilf__brand-guide__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__brand-guide__image', 1,
					{ y: -elemHeight, x: 0 },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__brand-guide',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	livery() {
		const sectionHeight = document.querySelector('.js-caseStudyStWilf__livery').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyStWilf__livery__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__livery__image', 1,
					{ y: 0, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__livery',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop() {
		const $elem = document.querySelector('.js-caseStudyStWilf__web__desktop__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__web__desktop__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__web__desktop',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteMobile() {
		const $elemFirst = document.querySelector('.js-caseStudyStWilf__web__mobile__image-first');
		const $elemSecond = document.querySelector('.js-caseStudyStWilf__web__mobile__image-second');

		const elemFirstWidth = $elemFirst.offsetWidth;
		const elemSecondWidth = $elemSecond.offsetWidth;

		const tween = new TimeLineMax()
			.add([
				TweenMax.fromTo('.js-caseStudyStWilf__web__mobile__image-first', 1,
					{ x: -elemFirstWidth },
					{ x: 0, ease: Power4.easeInOut }),
				TweenMax.fromTo('.js-caseStudyStWilf__web__mobile__image-second', 1.2,
					{ x: -elemSecondWidth },
					{ x: 0, ease: Power4.easeInOut })
			]);

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__web__mobile',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop2() {
		const $elem = document.querySelector('.js-caseStudyStWilf__web__desktop-2__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__web__desktop-2__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__web__desktop-2',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	contentSocial() {
		const sectionHeight = document.querySelector('.js-caseStudyStWilf__content-social').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyStWilf__content-social__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyStWilf__content-social__image', 1,
					{ y: elemHeight, x: 0 },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyStWilf__content-social',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}
}
export default AnimateStWilfs;
