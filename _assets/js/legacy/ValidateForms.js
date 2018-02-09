/* eslint-disable */
var ValidateForms = (function ($) {
	'use strict';

	var _hasVal = function( $el, className ) {
		var $parent = $el.parent();

		if( $el.val() ) {
			if( !$parent.hasClass( className) ) {
				$parent.addClass( className );
			}
		} else {
			if( $parent.hasClass( className ) ) {
				$parent.removeClass( className );
			}
		}

	};

	var _init = function( $forms ) {

		$forms.each(function() {
			var $this = $(this);

			$this.find('textarea,input').each( function() {
				_hasVal( $(this), 'has-value' );
			});

	        $this.validate({
	            validClass: 'is-valid',
	            errorClass: 'is-invalid',
	            errorElement: "span",
	            errorPlacement: function(error, element) {
	                if (element.is('select')) {
	                    error.appendTo(element.closest('.o-form__field')).addClass('o-validation u-small');
	                } else {
	                    error.appendTo(element.closest('.o-form__field')).addClass('o-validation u-small');
	                }
	            },
	            onfocusout: function(element) {
					var $el = $(element);
					_hasVal( $el, 'has-value' );
					$el.valid();
	            },
	            onclick: function(element) {
	                $(element).valid();
	            },
	            focusInvalid: true,
	            highlight: function(element, errorClass, validClass) {
	                $(element).closest('.o-form__field').addClass(errorClass).removeClass(validClass);
	            },
	            unhighlight: function(element, errorClass, validClass) {
	                $(element).closest('.o-form__field').removeClass(errorClass).addClass(validClass);
	            }
	        });
	    });

	};

	return {
		init: _init
	};

})(jQuery);
