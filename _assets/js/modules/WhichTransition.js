/* From Modernizr */
export default function whichTransitionEvent(){
	let t;
	const el = document.createElement('fakeelement');
	const transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
	};

	/* eslint-disable */
	for (t in transitions) {
		if ( el.style[t] !== undefined ){
			return transitions[t];
		}
	}
	/* eslint-enable */
}
