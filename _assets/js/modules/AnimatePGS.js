import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimatePGS {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.campaign();
		this.sixthForm();
	}

	campaign() {
		const sectionHeight = document.querySelector('.js-caseStudyPGS__campaign').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyPGS__campaign__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyPGS__campaign__image', 1,
					{ y: 0, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyPGS__campaign',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	sixthForm() {
		const sectionHeight = document.querySelector('.js-caseStudyPGS__sixth-form').offsetHeight;
		const $elem = document.querySelector('.js-caseStudyPGS__sixth-form__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-caseStudyPGS__sixth-form__image', 1,
					{ y: elemHeight, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyPGS__sixth-form',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}

}
export default AnimatePGS;
