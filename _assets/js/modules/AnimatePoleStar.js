import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimatePoleStar {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.journey();
		this.websiteDesktop();
		this.websiteMobile();
		this.websiteDesktop2();
	}

	journey() {
		const sectionHeight = document.querySelector('.js-caseStudyPoleStar__journey').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyPoleStar__journey__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyPoleStar__journey__image', 1,
					{ y: -elemHeight, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyPoleStar__journey',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop() {
		const $elem = document.querySelector('.js-caseStudyPoleStar__web__desktop__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyPoleStar__web__desktop__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyPoleStar__web__desktop',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteMobile() {
		const $elemFirst = document.querySelector('.js-caseStudyPoleStar__web__mobile__image-first');
		const $elemSecond = document.querySelector('.js-caseStudyPoleStar__web__mobile__image-second');

		const elemFirstWidth = $elemFirst.offsetWidth;
		const elemSecondWidth = $elemSecond.offsetWidth;

		const tween = new TimeLineMax()
			.add([
				TweenMax.fromTo('.js-caseStudyPoleStar__web__mobile__image-first', 1,
					{ x: -elemFirstWidth },
					{ x: 0, ease: Power4.easeInOut }),
				TweenMax.fromTo('.js-caseStudyPoleStar__web__mobile__image-second', 1.2,
					{ x: -elemSecondWidth },
					{ x: 0, ease: Power4.easeInOut })
			]);

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyPoleStar__web__mobile',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop2() {
		const $elem = document.querySelector('.js-caseStudyPoleStar__web__desktop-2__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyPoleStar__web__desktop-2__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyPoleStar__web__desktop-2',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
}
export default AnimatePoleStar;
