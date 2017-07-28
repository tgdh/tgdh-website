import TweenMax from "gsap/tweenmax";
import TimeLineMax from "gsap/TimeLineMax";
import Power4 from "gsap/easepack";

import InitAnimations from './Animations';
import AnimateHullTruck from './AnimateHullTruck';
import AnimateAIM from './AnimateAIM';
import AnimateEvodia from './AnimateEvodia';
import AnimateHenley from './AnimateHenley';
import AnimateMayerBrown from './AnimateMayerBrown';
import AnimateOctagon from './AnimateOctagon';
import AnimatePGS from './AnimatePGS';
import AnimatePoleStar from './AnimatePoleStar';
import AnimateStWilfs from './AnimateStWilfs';
import AnimateWatford from './AnimateWatford';

import AnimateAbout from './AnimateAbout';

const TriggerAnimations = () => {
	const $html = document.querySelector('html');

	InitAnimations();

	if ($html.classList.contains('s-hullTruckCaseStudy')) {
		new AnimateHullTruck();
	}

	if ($html.classList.contains('s-caseStudyAIM')) {
		new AnimateAIM();
	}

	if ($html.classList.contains('s-caseStudyEvodia')) {
		new AnimateEvodia();
	}

	if ($html.classList.contains('s-caseStudyHenley')) {
		new AnimateHenley();
	}

	if ($html.classList.contains('s-caseStudyMayerbrown')) {
		new AnimateMayerBrown();
	}

	if ($html.classList.contains('s-caseStudyOctagon')) {
		new AnimateOctagon();
	}

	if ($html.classList.contains('s-caseStudyPGS')) {
		new AnimatePGS();
	}

	if ($html.classList.contains('s-caseStudyPoleStar')) {
		new AnimatePoleStar();
	}

	if ($html.classList.contains('s-caseStudyStWilf')) {
		new AnimateStWilfs();
	}

	if ($html.classList.contains('s-caseStudyWatford')) {
		new AnimateWatford();
	}

	if ($html.classList.contains('s-about')) {
		new AnimateAbout();
	}


/*
	function gridScale() {
		const $element = document.querySelector('.js-test');
		const delayMultiplier = 0.0005;
		const duration = 0.4;
		const $elements = $element.children;
		const tl = new TimelineMax({
			yoyo: true
		});

		Array.from($elements).forEach((el) => {
			console.log(el);
			const elementOffset = el.getBoundingClientRect();
			const offset = elementOffset.left + elementOffset.top;
			const delay = parseFloat(offset * delayMultiplier).toFixed(2);
			tl.from(el, duration, { transformOrigin: 'top left', opacity: 0, scale: 0 }, delay);
		});
	}

	gridScale();
*/
};

export default TriggerAnimations;
