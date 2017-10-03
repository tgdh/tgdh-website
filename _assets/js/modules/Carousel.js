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

			const carousel = new Swiper(item, {
				loop: item.dataset.loop ? item.dataset.loop : false,
				loopedSlides: 1,
				slidesPerView: item.dataset.count ? item.dataset.count : 1,
				effect: item.dataset.effect ? item.dataset.effect : 'fade',
				autoplay: item.dataset.autoplaySpeed ? item.dataset.autoplaySpeed : '',
				bulletClass: 'c-carousel__pagination__item',
				bulletActiveClass: 'is-active',
				pagination: '.js-carousel-pagination',
				nextButton: '.js-carousel-next',
				prevButton: '.js-carousel-prev',
				fade: {
					crossFade: true
				},
				autoHeight: false
			});
		});
	});
};
// swiper-pagination-clickable
// swiper-pagination-bullets

export default Carousel;
