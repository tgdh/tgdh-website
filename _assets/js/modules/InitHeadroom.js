import Headroom from 'headroom.js';
// import throttle from './throttle';

class InitHeadroom {
	constructor() {
		this.doc = document;
		this.body = this.doc.querySelector('body');
		this.header = this.doc.querySelector('.js-header');

		this.headroom = new Headroom(this.header);
		this.headerHeight = window.getComputedStyle(this.header).height;

		this.toggleHeadroom = this.toggleHeadroom.bind(this);

		this.toggleHeadroom();
		this.bindEvents();
	}
	bindEvents() {
		window.addEventListener('orientationchange', () => this.toggleHeadroom());
	//	window.addEventListener('resize', throttle(() => this.toggleHeadroom(), 250));
	}
	toggleHeadroom() {
		if (window.matchMedia('(max-width: 999px)').matches) {
			this.body.style.paddingTop = this.headerHeight;
			this.headroom.init();
		}

		if (window.matchMedia('(min-width: 1000px)').matches) {
			this.body.style.paddingTop = 0;
			this.headroom.destroy();
		}
	}
}

export default InitHeadroom;
