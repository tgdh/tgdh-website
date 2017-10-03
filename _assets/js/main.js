import Headroom from 'headroom.js';
import whatInput from 'what-input';
import svg4everybody from 'svg4everybody';
import LoadFonts from './modules/LoadFonts';
import { $, $$ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';
import lazySizes from './modules/LazyLoad';
import InitImageComparison from './modules/ImageCompare';
import carousel from './modules/Carousel';
import tilt from './modules/Tilt';
import GMap from './modules/GMaps';
import initSmoothScroll from './modules/SmoothScroll';
import StickyHeader from './modules/StickyHeader';
import CharAllowance from './modules/CharAllowance';

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
		new StickyHeader($('.js-header-logo'));

		const charLimitEls = $$('.js-char-limit');
		Array.from(charLimitEls).forEach((item) => {
			const charLimitEl = new CharAllowance(item);
		});
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
