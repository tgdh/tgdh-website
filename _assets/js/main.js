import whatInput from 'what-input';
import LoadFonts from './modules/LoadFonts';
import { $ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';
import lazySizes from './modules/LazyLoad';
import imageComparison from './modules/ImageComparison';
import carousel from './modules/Carousel';
import tilt from './modules/Tilt';
import GMap from './modules/GMaps';
import initSmoothScroll from './modules/SmoothScroll';
/*
// import triggerAniamtions from './modules/TriggerAnimations';
*/

/*
// add click evt to body and log target el
$('body').on('click', el => console.log(el.target));
// loop over all paragph elements and log
$$('p').forEach(el => console.log(el));
*/

LoadFonts();
lazySizes();
carousel();
imageComparison();
tilt();
const map = new GMap($('.js-map'));
const $toggleButton = $('.js-nav-toggle');
if ($toggleButton) {
	const toggleNavInstance = new ToggleNav($toggleButton);
}
initSmoothScroll();
