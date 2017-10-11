import Frtabs from 'fr-tabs';
import CreateDOMEl from './CreateDomEl';

class ActiveTab {
	constructor(el) {
		if (!el) {
			return;
		}
		this.el = el;
		this.tabList = this.el.querySelector('.js-tabs__tablist');
		this.tabs = this.tabList.querySelectorAll('a');
		this.activeBar = null;
		this.offset = 0;

		this.createActiveBar();
		this.bindEvents();
		this.updateActive(this.tabList.querySelector('[tabindex="0"]'));
	}

	createActiveBar() {
		this.activeBar = new CreateDOMEl('div', 'c-tabs__active-bar');
		this.tabList.appendChild(this.activeBar);
	}

	updateActive(tab) {
		const tabWidth = tab.clientWidth;
		this.offset = tab.offsetLeft;

		this.activeBar.style.width = `${this.offset + tabWidth}px`;
	}

	bindEvents() {
		Array.from(this.tabs).forEach((tab) => {
			tab.addEventListener('click', () => this.updateActive(tab));
		});
	}

}

const initTabs = () => {
	const tabs = Frtabs({
		selector: '.js-tabs',
		tablistSelector: '.js-tabs__tablist',
		tabpanelSelector: '.js-tabs__panel',
		tabsReadyClass: 'c-tabs--is-ready'
	});

	Array.from(document.querySelectorAll('.js-tabs')).forEach((item) => {
		const activeTab = new ActiveTab(item);
	});

};

export default initTabs;
