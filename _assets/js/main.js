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
import TriggerAnimations from './modules/TriggerAnimations';
import InitHeadroom from './modules/InitHeadroom';

(() => {
	const enhance = 'querySelector' in document
		&& 'localStorage' in window
		&& 'addEventListener' in window
		&& 'classList' in document.documentElement;

	LoadFonts();
	lazySizes();
	carousel();
	if (enhance) {
		InitImageComparison();
		tilt();
		const map = new GMap($('.js-map'));
		const $toggleButton = $('.js-nav-toggle');
		if ($toggleButton) {
			const toggleNavInstance = new ToggleNav($toggleButton);
		}
		initSmoothScroll();

		new InitHeadroom();
		new StickyHeader($('.js-header-logo'));

		TriggerAnimations();
	}
	svg4everybody();

})();
