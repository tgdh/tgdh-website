import Swiper from 'swiper';
import { $$ } from './Bling';

const Carousel = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const carousels = $$('.js-carousel');
		if (!carousels) {
			return;
		}
		/*
		const slidesWrap = document.createElement('div');
		slidesWrap.classList.add('swiper-wrapper');
		*/

		Array.from(carousels).forEach((item) => {
			const slides = item.querySelector('.swiper-wrapper').children;
			Array.from(slides).forEach((slide) => {
				slide.classList.add('swiper-slide');
			});

			const temp = {
				loop: item.dataset.loop ? item.dataset.loop : false,
				loopedSlides: 1,
				slidesPerView: item.dataset.count ? item.dataset.count : 1,
				effect: item.dataset.loop ? item.dataset.effect : 'fade',
				pagination: item.dataset.pagination ? item.dataset.pagination : '.swiper-pagination',
			};
			console.log(temp);

			const carousel = new Swiper(item, {
				loop: item.dataset.loop ? item.dataset.loop : false,
				loopedSlides: 1,
				slidesPerView: item.dataset.count ? item.dataset.count : 1,
				effect: item.dataset.loop ? item.dataset.effect : 'fade',
				pagination: item.dataset.pagination ? item.dataset.pagination : '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.js-carousel-nav-next',
				prevButton: '.js-carousel-nav-prev',
				fade: {
					crossFade: true
				},
				autoHeight: false
			});
			console.log(carousel);
		});
	});
};

export default Carousel;
