import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimateMayerBrown {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.websiteDesktop();
		this.websiteMobile();
		this.contentSocial();
	}

	websiteDesktop() {
		const $elem = document.querySelector('.js-caseStudyMayerbrown__web__desktop__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyMayerbrown__web__desktop__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyMayerbrown__web__desktop',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteMobile() {
		const $elemFirst = document.querySelector('.js-caseStudyMayerbrown__web__mobile__image-first');
		const $elemSecond = document.querySelector('.js-caseStudyMayerbrown__web__mobile__image-second');

		const elemFirstWidth = $elemFirst.offsetWidth;
		const elemSecondWidth = $elemSecond.offsetWidth;

		const tween = new TimeLineMax()
			.add([
				TweenMax.fromTo('.js-caseStudyMayerbrown__web__mobile__image-first', 1,
					{ x: -elemFirstWidth },
					{ x: 0, ease: Power4.easeInOut }),
				TweenMax.fromTo('.js-caseStudyMayerbrown__web__mobile__image-second', 1.2,
					{ x: -elemSecondWidth },
					{ x: 0, ease: Power4.easeInOut })
			]);

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyMayerbrown__web__mobile',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	contentSocial() {
		const sectionHeight = document.querySelector('.js-caseStudyMayerbrown__content-social').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyMayerbrown__content-social__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyMayerbrown__content-social__image', 1,
					{ y: elemHeight, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyMayerbrown__content-social',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

}
export default AnimateMayerBrown;
