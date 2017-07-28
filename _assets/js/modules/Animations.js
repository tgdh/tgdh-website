import * as Waypoints from "waypoints/lib/noframework.waypoints";
import * as inviews from "waypoints/lib/shortcuts/inview";
import BlockReveal from "./BlockReveal";
//import RevealFx from "./Reveal";

const BlockAnimations = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const selection = document.querySelectorAll('.js-block-reveal');
		if (!selection) {
			return;
		}
		const viewHeight = document.documentElement.clientHeight;

		const RevealElement = function (item, blockRevealItem) {
			if (item.querySelector('.js-lazyload')) {
				item.querySelector('img').addEventListener('lazybeforeunveil', (e) => {
					blockRevealItem.reveal();
				});
			} else {
				blockRevealItem.reveal();
			}
		};

		Array.from(selection).forEach((item) => {
			const elHeight = item.offsetHeight;
			const blockRevealItem = new BlockReveal(item, {
				revealSettings: {
					delay: item.dataset.revealDelay ? item.dataset.revealDelay : 0,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			});

			const waypoint = new Waypoint.Inview({
				element: item,
				enter: (direction) => {
					if (elHeight > viewHeight) {
						console.log('enter');
						RevealElement(item, blockRevealItem);
					}
				},
				entered: (direction) => {
					console.log('entered');
					RevealElement(item, blockRevealItem);
				},
				exit: () => {
					waypoint.destroy();
				}
			});

		});
	});

};

export default BlockAnimations;
