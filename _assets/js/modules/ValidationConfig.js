const ValidationConfig = {
	// div/node class name selector which contains one label, one input, one help text etc.
	classInputGroup: 'o-form__field',
	// class to be applied on input group node if it has invalid input
	classInputGroupError: 'is-invalid',

	// label to pick textContent from to insert field name into error message
	classLabel: 'form-control-label',

	// error message tag name
	tagNameError: 'small',
	// error message class
	classError: 'o-form__validation',

	// query selector to search inputs within input groups to validate
	selectorInput: '[name]',
};

export default ValidationConfig;
