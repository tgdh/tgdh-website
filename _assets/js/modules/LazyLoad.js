import picturefill from 'picturefill';
import lazysizes from 'lazysizes';

const Lazyload = () => {
	window.lazySizesConfig = window.lazySizesConfig || {};
	window.lazySizesConfig.lazyClass = 'js-lazyload';
};

export default Lazyload;
