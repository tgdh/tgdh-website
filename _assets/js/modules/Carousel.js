import Swiper from 'swiper';
import { $$ } from './Bling';

const Carousel = () => {
	console.log('init carousel');
	document.addEventListener('DOMContentLoaded', () => {
		const carousels = $$('.js-carousel');

		Array.from(carousels).forEach((item) => {
			const $carousel = new Swiper(item, {
				loop: true,
				effect: 'fade',
				fade: {
					crossFade: true
				},
				autoHeight: false
			});
		});
	});
};

export default Carousel;
