// import { lory } from '../lib/lory.js/dist/lory';
import { $$ } from './Bling';

const Carousel = () => {
	console.log('init carousel');
	document.addEventListener('DOMContentLoaded', () => {
		const carousels = $$('.js-carousel');

		Array.from(carousels).forEach((item) => {
			lory(item, {
				//
			});
		});
	});
};

export default Carousel;
