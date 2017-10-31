/**
 * Based on codrops
 * https://github.com/codrops/BlockRevealers/blob/master/js/main.js
 */

import TweenMax from 'gsap/tweenmax';
import Power4 from 'gsap/easepack';
import CreateDOMEl from './CreateDomEl';
import ExtendObject from './ExtendObject';

class BlockReveal {
	constructor(el, options) {
		this.el = el;
		this.options = {
			isContentHidden: true,
			revealSettings: {
				delay: 0,
				bgcolor: '#000',
				duration: 500,
				easing: 'easeInOutQuint',
				coverArea: 0,
				onCover: function (contentEl, revealerEl) { return false; },
				onStart: function (contentEl, revealerEl) { return false; },
				onComplete: function (contentEl, revealerEl) { return false; }
			}
		};
		ExtendObject(this.options, options);

		this.isAnimating = false;
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
		this.content = this.el.children[0];
		this.content.classList.add('block-revealer__content');
		if (this.options.isContentHidden) {
			this.content.style.opacity = 0;
		}

		// Revealer element (the one that animates)
		this.revealer = new CreateDOMEl('div', 'block-revealer__element');
		this.el.classList.add('block-revealer');
		this.el.appendChild(this.revealer);
	}

	/**
	 * Get transform direction
	 */


	/**
	 * Reveal
	 */
	reveal() {
		if (this.isAnimating) {
			return false;
		}
		this.isAnimating = true;

		/**/
		// Set the revealer element´s transform and transform origin.
		var revealSettings = this.options.revealSettings;
		var direction = revealSettings.direction;

		this.revealer.style.WebkitTransform = this.revealer.style.transform =  'scale3d(0,1,1)';
		this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = '0 50%';

		// Set the Revealer´s background color.
		this.revealer.style.backgroundColor = revealSettings.bgcolor;

		// Show it. By default the revealer element has opacity = 0 (CSS).
		this.revealer.style.opacity = 1;

		// Animate it.
		const self = this;
		// Second animation step.
		const animationSettings_2 = {
			transformOrigin: '100% 50% 0',
			scaleX: 0,
			ease: Power4.easeInOut,
			onComplete: () => {
				self.isAnimating = false;
				if (typeof revealSettings.onComplete === 'function') {
					revealSettings.onComplete(self.content, self.revealer);
				}
			}
		};
		// First animation step.
		const animationSettings = {
			delay: revealSettings.delay,
			scaleX: 1,
			ease: Power4.easeInOut,
			onComplete: () => {
				self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = '100% 50%';
				if (typeof revealSettings.onCover === 'function') {
					revealSettings.onCover(self.content, self.revealer);
				}
				// anime(animationSettings_2);
				TweenMax.to(self.revealer, 0.5, animationSettings_2);
			}
		};
		animationSettings.scaleX = 1;
		animationSettings_2.scaleX = 0;

		if (typeof revealSettings.onStart === 'function') {
			revealSettings.onStart(self.content, self.revealer);
		}

		/**/

		TweenMax.to(this.revealer, 0.5, animationSettings);
	}

	/**
	 * Hide
	 */



}
export default BlockReveal;
