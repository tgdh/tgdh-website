import * as Waypoints from "waypoints/lib/noframework.waypoints";
import * as inviews from "waypoints/lib/shortcuts/inview";
import RevealFx from "./Reveal";

const BlockAnimations = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const selection = document.querySelectorAll('.js-block-reveal');
		if (!selection) {
			return;
		}

		Array.from(selection).forEach((item) => {
			const blockRevealItem = new RevealFx(item, {
				revealSettings: {
					delay: item.dataset.revealDelay ? item.dataset.revealDelay : 0,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			});

			const waypoint = new Waypoint.Inview({
				element: item,
				entered: (direction) => {
					if(item.querySelector('.js-lazyload')) {
						item.querySelector('img').addEventListener('lazybeforeunveil', (e) => {
							blockRevealItem.reveal();
						});
					} else {
						blockRevealItem.reveal();
					}
				},
				exited: () => {
					waypoint.destroy();
				}
			});

		});



	});
};

export default BlockAnimations;
