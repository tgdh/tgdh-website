import * as FontFaceObserver from '../lib/fontfaceobserver/fontfaceobserver.standalone';

const Fonts = () => {
	const lato = new FontFaceObserver('lato');
	const playfair = new FontFaceObserver('playfair_display');

	Promise.all([
		lato.check(),
		playfair.check()
	]).then(() => {
		// Add fonts-loaded class to html to apply fonts to the page
		document.documentElement.classList.add('fonts-loaded');
		// Set localstorage value so it can be used to load fonts when they've been cached
		localStorage.setItem('fonts-loaded', 'true');
	});
};

export default Fonts;
