// modified version of https://github.com/tuxsudo/es6y-throttle/blob/master/index.js

const throttle = (fn, time = 50) => {
	let timer = null;

	function throttledFn(...args) {
		if (!timer) {
			if (!window.requestAnimationFrame) {
				timer = setTimeout(() => {
					fn(...args);
					timer = null;
				}, time);
			} else {
				requestAnimationFrame(fn);
			}
		}
	}

	throttledFn.cancel = () => {
		clearTimeout(timer);
		timer = null;
	};

	return throttledFn;
};

export default throttle;
