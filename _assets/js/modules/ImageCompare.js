import ImageComparison from '../lib/ImageComparison';
import { $$ } from './Bling';

const initComparisonImages = () => {
	const selection = $$('.js-image-comparison');

	document.addEventListener('DOMContentLoaded', () => {
		Array.from(selection).forEach((item) => {
			const images = item.querySelectorAll('img');
			const imageComparisonObj = new ImageComparison({
				container: item,
				startPosition: 50,
				data: [{
					image: images[0],
					label: ''
				},
				{
					image: images[1],
					label: ''
				}],
			});
		});
	});
};

export default initComparisonImages;
