import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimateWatford {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.seasonGuide();
		this.websiteDesktop();
		this.websiteDesktop2();
		this.websiteDesktop3();
	}

	seasonGuide() {
		const $elem = document.querySelector('.js-caseStudyWatford__season-guide__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyWatford__season-guide__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyWatford__season-guide',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop() {
		const $elem = document.querySelector('.js-caseStudyWatford__web__desktop__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyWatford__web__desktop__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyWatford__web__desktop',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop2() {
		const $elem = document.querySelector('.js-caseStudyWatford__web__desktop-2__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyWatford__web__desktop-2__image', 1,
					{ x: -(elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyWatford__web__desktop-2',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}

	websiteDesktop3() {
		const $elem = document.querySelector('.js-caseStudyWatford__web__desktop-3__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-caseStudyWatford__web__desktop-3__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-caseStudyWatford__web__desktop-3',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
}
export default AnimateWatford;
