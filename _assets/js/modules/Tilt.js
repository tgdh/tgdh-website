import * as VTilt from '../../../node_modules/vanilla-tilt/dist/vanilla-tilt.babel';
import { $$ } from './Bling';

const tilt = () => {
	const tiles = $$('.js-tilt');
	Array.from(tiles).forEach((item) => {
		VanillaTilt.init(item, {
			max: 10
		});
	});
};

export default tilt;
