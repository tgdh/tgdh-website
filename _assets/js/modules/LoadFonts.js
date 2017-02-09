// import * as FontFaceObserver from '../lib/fontfaceobserver/fontfaceobserver.standalone';
import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
	const lato = new FontFaceObserver('Lato');
	const playfair = new FontFaceObserver('Playfair Display');

	Promise.all([
		lato.load(),
		playfair.load()
	]).then(() => {
		// Add fonts-loaded class to html to apply fonts to the page
		document.documentElement.classList.add('fonts-loaded');
		// Set localstorage value so it can be used to load fonts when they've been cached
		localStorage.setItem('fonts-loaded', 'true');
	});
};

export default Fonts;
