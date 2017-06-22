import InitAnimations from './Animations';
import AnimateHullTruck from './AnimateHullTruck';
import AnimateAIM from './AnimateAIM';
import AnimateEvodia from './AnimateEvodia';
import AnimateHenley from './AnimateHenley';
import AnimateMayerBrown from './AnimateMayerBrown';
import AnimateOctagon from './AnimateOctagon';
import AnimatePGS from './AnimatePGs';

const TriggerAnimations = () => {
	const $html = document.querySelector('html');

	InitAnimations();

	if ($html.classList.contains('s-hullTruckCaseStudy')) {
		new AnimateHullTruck();
	}

	if ($html.classList.contains('s-caseStudyAIM')) {
		new AnimateAIM();
	}

	if ($html.classList.contains('s-caseStudyEvodia')) {
		new AnimateEvodia();
	}

	if ($html.classList.contains('s-caseStudyHenley')) {
		new AnimateHenley();
	}

	if ($html.classList.contains('s-caseStudyMayerbrown')) {
		new AnimateMayerBrown();
	}

	if ($html.classList.contains('s-caseStudyOctagon')) {
		new AnimateOctagon();
	}

	if ($html.classList.contains('s-caseStudyPGS')) {
		new AnimatePGS();
	}

};

export default TriggerAnimations;
