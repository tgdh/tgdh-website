import Velocity from 'velocity-animate';
import * as velocityui from 'velocity-animate/velocity.ui';
import { $ } from './Bling';

const animateHullTruck = () => {
	const stats1 = $('.js-ht-stats-1').querySelectorAll('.js-stat');
	Velocity(stats1, 'transition.slideUpIn', { stagger: 300 });

	console.log(stats1);
};

const triggerAnimations = () => {
	animateHullTruck();
};

/*
// https://github.com/terwanerik/ScrollTrigger
import AOS from 'aos';

const triggerAnimations = () => {
	AOS.init();
};
*/

/*
import ScrollTrigger from 'scrolltrigger-classes';

const triggerAnimations = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const trigger = new ScrollTrigger({
			toggle: {
				visible: 'visibleClass',
				hidden: 'hiddenClass'
			},
			offset: {
				x: 0,
				y: 100
			},
			addHeight: true,
			once: false
		}, document.body, window);
	});
};
*/

export default triggerAnimations;
