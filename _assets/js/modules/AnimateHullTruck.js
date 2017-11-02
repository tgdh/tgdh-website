import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";
import ScrollMagic from "scrollmagic";
import * as AnimationGsap from "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

class AnimateHullTruck {
	constructor() {
		this.windowHeight = window.innerHeight;
		this.controller = new ScrollMagic.Controller();
		this.cityCulture();
		setTimeout(this.advertising(), 100);
		this.websiteDesktop();
		this.websiteMobile();
		this.websiteDesktop2();
	}
	cityCulture() {
		const sectionHeight = document.querySelector('.js-hullTruckCaseStudy__city-culture').offsetHeight;
		const $elem = document.querySelector('.js-hullTruckCaseStudy__city-culture__image');
		const elemHeight = $elem.offsetHeight;
		const elemWidth = $elem.offsetWidth;

		const tween = new TweenMax.fromTo('.js-hullTruckCaseStudy__city-culture__image', 1,
					{ y: -elemHeight, x: elemWidth },
					{ y: 0, x: 0, ease: Power4.easeInOut });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-hullTruckCaseStudy__city-culture',
			triggerHook: 'onEnter',
			duration: sectionHeight * 1.5
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	advertising() {
		const $elem = document.querySelector('.js-hullTruckCaseStudy__advertisting__image-main');
		const elemHeight = $elem.offsetHeight;
		const tween = new TweenMax.fromTo('.js-hullTruckCaseStudy__advertisting__image-main', 1,
					{ y: -(elemHeight / 2) },
					{ y: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-hullTruckCaseStudy__advertisting',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteDesktop() {
		const $elem = document.querySelector('.js-hullTruckCaseStudy__web__desktop__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-hullTruckCaseStudy__web__desktop__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-hullTruckCaseStudy__web__desktop',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteMobile() {
		const $elemFirst = document.querySelector('.js-hullTruckCaseStudy__web__mobile__image-first');
		const $elemSecond = document.querySelector('.js-hullTruckCaseStudy__web__mobile__image-first');

		const elemFirstWidth = $elemFirst.offsetWidth;
		const elemSecondWidth = $elemSecond.offsetWidth;

		const tween = new TimeLineMax()
			.add([
				TweenMax.fromTo('.js-hullTruckCaseStudy__web__mobile__image-first', 1,
					{ x: -elemFirstWidth },
					{ x: 0, ease: Power4.easeInOut }),
				TweenMax.fromTo('.js-hullTruckCaseStudy__web__mobile__image-second', 1.2,
					{ x: -elemSecondWidth },
					{ x: 0, ease: Power4.easeInOut })
			]);

		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-hullTruckCaseStudy__web__mobile',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
	websiteDesktop2() {
		const $elem = document.querySelector('.js-hullTruckCaseStudy__web__desktop-2__image');
		const elemWidth = $elem.offsetWidth;
		const tween = new TweenMax.fromTo('.js-hullTruckCaseStudy__web__desktop-2__image', 1,
					{ x: (elemWidth / 4) },
					{ x: 0, ease: Power4.easeInOut });
		const scene = new ScrollMagic.Scene({
			triggerElement: '.js-hullTruckCaseStudy__web__desktop-2',
			triggerHook: 'onEnter',
			duration: this.windowHeight
		})
		.setTween(tween)
		.addTo(this.controller);
	}
}
export default AnimateHullTruck;
