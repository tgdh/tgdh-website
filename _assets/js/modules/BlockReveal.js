/**
 * Based on codrops
 * https://github.com/codrops/BlockRevealers/blob/master/js/main.js
 */

import TweenMax from "gsap/tweenmax";
import Power4 from "gsap/easepack";
import CreateDOMEl from './CreateDomEl';

class BlockReveal {
	constructor(el, options) {
		this.el = el;
		this.options = {
				isContentHidden: true
		};

		this._layout();
	}

	/**
	 * Build the necessary structure.
	 */
	_layout() {
		const position = getComputedStyle(this.el).position;

		if (position !== 'fixed' && position !== 'absolute' && position !== 'relative') {
			this.el.style.position = 'relative';
		}
		// Content element.
		this.content = new CreateDOMEl('div', 'block-revealer__content', this.el.innerHTML);
		if (this.options.isContentHidden) {
			this.content.style.opacity = 0;
		}
		// Revealer element (the one that animates)
		this.revealer = new CreateDOMEl('div', 'block-revealer__element');
		this.el.classList.add('block-revealer');
		this.el.innerHTML = '';
		this.el.appendChild(this.content);
		this.el.appendChild(this.revealer);
	}

	/**
	 * Get transform direction
	 */

	/**
	 * Reveal
	 */
	reveal() {
		
	}

	/**
	 * Hide
	 */



}
export default BlockReveal;
