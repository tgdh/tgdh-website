/**
 * Based on codrops
 * https://github.com/codrops/BlockRevealers/blob/master/js/main.js
 */


/**/

//import { TweenMax, Power4 } from "gsap";
import TweenMax from "gsap/tweenmax";
import Power4 from "gsap/easepack";
import CreateDOMEl from './CreateDomEl';

// Helper vars and functions.
function extend(a, b) {
	for(var key in b) {
		if( b.hasOwnProperty( key ) ) {
			a[key] = b[key];
		}
	}
	return a;
}

const defaultOptions = {
	isContentHidden: true,
	// The animation/reveal settings. This can be set initially or passed when calling the reveal method.
	revealSettings: {
		// Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
		direction: 'lr',
		// Revealer´s background color.
		bgcolor: '#f0f0f0',
		// Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
		duration: 500,
		// Animation easing. This is the easing to "cover" and also "uncover" the element.
		easing: 'easeInOutQuint',
		// percentage-based value representing how much of the area should be left covered.
		coverArea: 0,
		// Callback for when the revealer is covering the element (halfway through of the whole animation).
		onCover: function(contentEl, revealerEl) { return false; },
		// Callback for when the animation starts (animation start).
		onStart: function(contentEl, revealerEl) { return false; },
		// Callback for when the revealer has completed uncovering (animation end).
		onComplete: function(contentEl, revealerEl) { return false; }
	}
};

class RevealFx {
	constructor(el, options) {
		this.el = el;
		this.options = extend({}, defaultOptions);
		extend(this.options, options);

		this._layout();
	}

	/**
	 * Build the necessary structure.
	 */
	_layout() {
		console.log('init layout');
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
	 * Gets the revealer element´s transform and transform origin.
	 */
	_getTransformSettings(direction) {
		let val;
		let origin;
		let origin_2;

		switch (direction) {
			case 'lr' :
				val = 'scale3d(0,1,1)';
				origin = '0 50%';
				origin_2 = '100% 50%';
				break;
			case 'rl' :
				val = 'scale3d(0,1,1)';
				origin = '100% 50%';
				origin_2 = '0 50%';
				break;
			case 'tb' :
				val = 'scale3d(1,0,1)';
				origin = '50% 0';
				origin_2 = '50% 100%';
				break;
			case 'bt' :
				val = 'scale3d(1,0,1)';
				origin = '50% 100%';
				origin_2 = '50% 0';
				break;
			default :
				val = 'scale3d(0,1,1)';
				origin = '0 50%';
				origin_2 = '100% 50%';
				break;
		};

		return {
			// transform value.
			val: val,
			// initial and halfway/final transform origin.
			origin: {initial: origin, halfway: origin_2},
		};
	}

	/**
	 * Reveal animation. If revealSettings is passed, then it will overwrite the options.revealSettings.
	 */
	reveal(revealSettings) {
		// Do nothing if currently animating.
		if( this.isAnimating ) {
			return false;
		}
		this.isAnimating = true;

		// Set the revealer element´s transform and transform origin.
		var defaults = { // In case revealSettings is incomplete, its properties deafault to:
				duration: 500,
				easing: 'easeInOutQuint',
				delay: 0,
				bgcolor: '#000',
				direction: 'lr',
				coverArea: 0
			},
			revealSettings = revealSettings || this.options.revealSettings,
			direction = revealSettings.direction || defaults.direction,
			transformSettings = this._getTransformSettings(direction);

		this.revealer.style.WebkitTransform = this.revealer.style.transform =  transformSettings.val;
		this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin =  transformSettings.origin.initial;

		// Set the Revealer´s background color.
		this.revealer.style.backgroundColor = revealSettings.bgcolor || defaults.bgcolor;

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
				console.log('complete anim2');
				self.isAnimating = false;
				if (typeof revealSettings.onComplete === 'function') {
					revealSettings.onComplete(self.content, self.revealer);
				}
			}
		};
		// First animation step.
		const animationSettings = {
			// delay: revealSettings.delay || defaults.delay,

			scaleX: 1,
			ease: Power4.easeInOut,
			onComplete: () => {
				console.log('complete anim1');
				self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = transformSettings.origin.halfway;
				if (typeof revealSettings.onCover === 'function') {
					revealSettings.onCover(self.content, self.revealer);
				}
				// anime(animationSettings_2);
				TweenMax.to(self.revealer, 0.5, animationSettings_2);
			}
		};

/*
		animationSettings.targets = animationSettings_2.targets = this.revealer;
		animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
		animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;

		const coverArea = revealSettings.coverArea || defaults.coverArea;
*/

		if (direction === 'lr' || direction === 'rl') {
			animationSettings.scaleX = 1;
			animationSettings_2.scaleX = 0;
		} else {
			animationSettings.scaleY = 1;
			animationSettings_2.scaleY = 0;
		}

		if (typeof revealSettings.onStart === 'function') {
			revealSettings.onStart(self.content, self.revealer);
		}
		// anime(animationSettings);
		TweenMax.to(this.revealer, 0.5, animationSettings);
	}

}
export default RevealFx;
