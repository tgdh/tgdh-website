import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimateAbout {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.plant();
	}

	plant() {
		const $elem = document.querySelector('.js-about-plant');
		const elemHeight = $elem.offsetHeight;
		const tween = new TweenMax.fromTo('.js-about-plant', 1,
					{ y: (elemHeight / 3) },
					{ y: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-about-careers',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
}
export default AnimateAbout;
