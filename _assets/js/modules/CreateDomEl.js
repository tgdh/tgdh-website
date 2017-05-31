class CreateDomEl {
	constructor(type, className, content) {
		const el = document.createElement(type);
		el.className = className || '';
		el.innerHTML = content || '';
		return el;
	}
}
export default CreateDomEl;
