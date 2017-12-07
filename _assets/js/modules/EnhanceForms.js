import * as ValidityState from 'validate/dist/js/validityState-polyfill';
// import validate from 'validate/dist/js/validate';
import validate from '../lib/validate-custom'; // added `willValidate` check to `hasError`
import FloatingLabel from './FloatingLabel';

class EnhanceForms {
	constructor() {
		this.activateValidate();
		this.initFloatingLabels();
	}

	initFloatingLabels() {
		const floatingInputs = document.querySelectorAll('.js-floating-label-input');
		if (floatingInputs.length > 0) {
			Array.from(floatingInputs).forEach((input) => new FloatingLabel(input));
		}
	}

	activateValidate() {
		validate.init({
			selector: '[data-validate]',

			errorClass: 'o-form__validation',
			beforeShowError: function(field, error) {
				field.parentNode.classList.add('is-invalid');
			},
			afterRemoveError: function(field, error) {
				field.parentNode.classList.remove('is-invalid');
			},
		});
	}

}
export default EnhanceForms;

