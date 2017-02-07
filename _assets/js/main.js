import { $ } from './modules/Bling';
import ToggleNav from './modules/ToggleNav';

/*
// add click evt to body and log target el
$('body').on('click', el => console.log(el.target));
// loop over all paragph elements and log
$$('p').forEach(el => console.log(el));
*/

new ToggleNav($('.js-nav-toggle')).init();
