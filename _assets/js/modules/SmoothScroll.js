import jump from '../lib/jump';
import { $, $$ } from './Bling';

const hashAnchors = $$('a[href^="#"]:not(.js-no-scroll');

const initSmoothScroll = () => {
	Array.from(hashAnchors).forEach((item) => {
		item.on('click', () => {
			const target = $(item.hash);
			jump(target, {
				duration: 500,
				a11y: false
			});
		});
	});
};

export default initSmoothScroll;
