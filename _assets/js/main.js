import Headroom from 'headroom.js';
import whatInput from 'what-input';
import svg4everybody from 'svg4everybody';
import LoadFonts from './modules/LoadFonts';
import { $ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';
import lazySizes from './modules/LazyLoad';
//import imageComparison from './modules/ImageComparison';
import carousel from './modules/Carousel';
import tilt from './modules/Tilt';
import GMap from './modules/GMaps';
import initSmoothScroll from './modules/SmoothScroll';
import StickyHeader from './modules/StickyHeader';


(() => {
	const enhance = 'querySelector' in document
		&& 'localStorage' in window
		&& 'addEventListener' in window
		&& 'classList' in document.documentElement;

	LoadFonts();
	lazySizes();
	carousel();
	if (enhance) {
	//	imageComparison();
		tilt();
		const map = new GMap($('.js-map'));
		const $toggleButton = $('.js-nav-toggle');
		if ($toggleButton) {
			const toggleNavInstance = new ToggleNav($toggleButton);
		}
		initSmoothScroll();

		new StickyHeader($('.js-header-logo'));
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
