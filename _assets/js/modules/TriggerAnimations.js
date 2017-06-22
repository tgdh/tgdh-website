import InitAnimations from './Animations';
import AnimateHullTruck from './AnimateHullTruck';
import AnimateAIM from './AnimateAIM';
import AnimateEvodia from './AnimateEvodia';
import AnimateHenley from './AnimateHenley';


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

};

export default TriggerAnimations;
