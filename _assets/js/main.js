import Headroom from 'headroom.js';
import whatInput from 'what-input';
import svg4everybody from 'svg4everybody';
import LoadFonts from './modules/LoadFonts';
import { $ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';
import lazySizes from './modules/LazyLoad';
import InitImageComparison from './modules/ImageCompare';
import carousel from './modules/Carousel';
import tilt from './modules/Tilt';
import GMap from './modules/GMaps';
import initSmoothScroll from './modules/SmoothScroll';
import StickyHeader from './modules/StickyHeader';
//import RevealFX from './modules/Reveal';
import InitAnimations from './modules/Animations';
import AnimateHullTruck from './modules/AnimateHullTruck';
import AnimateAIM from './modules/AnimateAIM';

import BlockReveal from './modules/BlockReveal';

(() => {
	const enhance = 'querySelector' in document
		&& 'localStorage' in window
		&& 'addEventListener' in window
		&& 'classList' in document.documentElement;

	LoadFonts();
	lazySizes();
	carousel();
	if (enhance) {
		const $html = document.querySelector('html');

		InitImageComparison();
		tilt();
		const map = new GMap($('.js-map'));
		const $toggleButton = $('.js-nav-toggle');
		if ($toggleButton) {
			const toggleNavInstance = new ToggleNav($toggleButton);
		}
		initSmoothScroll();

		new StickyHeader($('.js-header-logo'));

		InitAnimations();

		if ($html.classList.contains('s-hullTruckCaseStudy')) {
			new AnimateHullTruck();
		}

		if ($html.classList.contains('s-caseStudyAIM')) {
			new AnimateAIM();
		}

	}
	svg4everybody();

	if (window.matchMedia('(max-width: 999px)').matches) {
		const header = $('.js-header');
		const headroom = new Headroom(header);
		const headerHeight = window.getComputedStyle(header).height;
		$('body').style.paddingTop = headerHeight;
		headroom.init();
	}
})();
