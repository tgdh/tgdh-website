import LoadFonts from './modules/LoadFonts';
import { $ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';
import lazySizes from './modules/LazyLoad';

/*
// add click evt to body and log target el
$('body').on('click', el => console.log(el.target));
// loop over all paragph elements and log
$$('p').forEach(el => console.log(el));
*/

LoadFonts();
lazySizes();

const $toggleButton = $('.js-nav-toggle');
if ($toggleButton) {
	const toggleNavInstance = new ToggleNav($toggleButton);
	toggleNavInstance.init();
}
