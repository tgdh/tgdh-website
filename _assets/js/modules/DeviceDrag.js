class ClickDrag {
	constructor(el) {
		this.el = el;
		this.isDown = false;
		this.startX = 0;
		this.scrollTop = 0;

		this.addEventListeners();
	}

	addEventListeners() {
		this.el.addEventListener('mousedown', (e) => {
			console.log('mouse down');
			console.log(e);
			this.isDown = true;
			this.el.classList.add('active');
			this.startX = e.pageY - this.el.offsetTop;
			this.scrollTop = this.el.scrollTop;
		});

		this.el.addEventListener('mouseleave', () => {
			console.log('mouse leave');
			this.isDown = false;
			this.el.classList.remove('active');
		});

		this.el.addEventListener('mouseup', () => {
			console.log('mouse up');
			this.isDown = false;
			this.el.classList.remove('active');
		});

		this.el.addEventListener('mousemove', (e) => {
			if (!this.isDown) return;  // stop the fn from running

			console.log('mouse move');

			e.preventDefault();
			const startY = e.pageY - this.el.offsetTop;
			const walk = (y - this.startY) * 3;
			this.el.scrollTop = this.scrollTop - walk;
		});
	}

}

export default ClickDrag;
