/* eslint-disable */
var BriefingForm = (function ($) {
	'use strict';
    // All the static variables used throughout the code.
    var form = '.js-form',
        button = '.js-check-validity',
        sidebarButton = '.js-sidebar-link',
        nav = '.c-proposal__navigation',
        inputSection = '.c-proposal__input-section',
        inputWrapper = '.c-proposal__input-wrapper',
        checkTypes = 'input,textarea',
        leftRight = '.js-navigate',
        formSection = '.js-form-section',
        textArea = '.c-proposal__textarea-input',
        text = '.c-proposal__input-text',
        email = '.c-proposal__input-email',
        file = '.c-proposal__input-upload',
        radio = '.c-proposal__input-radio',
        radioLabel = '.js-radio-input',
        completeSectionShowing = '.c-proposal__form-section.is--showing',
        uploadBriefHeight = 300,
        proposalTab = '.js-proposal__tabs';

    // Updates hidden fields for checkboxes as umbraco adds hiddenfields that need to be toggled.
    var _updateHiddenFieldValues = function(){
        $('.js-checkbox--hidden-field').on('click', function(){
            var attr = $(this).attr('for');
            var targetTrueFalse = $("input[id='"+attr+"']").attr('value');
            if(targetTrueFalse === "false"){
                $("input[id='"+attr+"']").attr('value','true');
                $("input[name='"+attr+"']").attr('value','true');
            }else{
                $("input[id='"+attr+"']").attr('value','false');
                $("input[name='"+attr+"']").attr('value','false');
            }
        });
    };
    // JS to check file size, type and add all elements to work with this
    var _fileUpload = function(){
        $('form input[type="file"]').on('change focusout click keyup',function () {
            var file = this.files[0];
            var fileName = file.name;
            var fileSize = file.size;

            var ext = $('.c-proposal__input-upload').val().split('.').pop().toLowerCase();
            if($.inArray(ext, ['pdf','docx']) === -1) {
                // wrong file type
                $('.c-proposal__file-upload-text').children('span').text("Only PDF (.pdf) or Word Documents (.docx) are aloud.");
                $('.c-proposal__replace').removeClass('is-active');
                $('.c-proposal__input-upload').addClass('error').removeClass('valid');
                setTimeout(function(){
                    $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                },10);

            }
            else if(fileSize >= 2000000){
                // file too large
                $('.c-proposal__file-upload-text').children('span').text("Max file size is 2MB.");
                $('.c-proposal__replace').removeClass('is-active');
                $('.c-proposal__input-upload').addClass('error').removeClass('valid');
                setTimeout(function(){
                    $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                },10);
            }else{
                // ahh just right
                $('.js-ignore-from-validation').addClass('is--valid');
                $('.c-proposal__file-upload-text').children('span').text(fileName+" uploaded successfully.");
                $('.c-proposal__replace').addClass('is-active');
                $(this).removeClass('error').addClass('valid');
                setTimeout(function(){
                    $(completeSectionShowing).children(nav).children(button).removeClass('is--disabled');
                    $('.js-breif-id').removeClass('is--disabled-override');
                },10);
            }
        });
    };
    // When the next / previous button is clicked the screen is scrolled.
    var _scrollTop = function(wWidth){
        if(wWidth >= 1000){
            $('.js-navigate').on('click', function(){
                if(!$(this).hasClass('is--disabled')){
                    $('body,html').animate({scrollTop: 390}, 500);
                }
            });
        }else{
            $('.js-navigate').on('click', function(){
                if(!$(this).hasClass('is--disabled')){
                    $('body,html').animate({scrollTop: 275}, 500);
                }
            });
        }
    };
    // Updates the height of the form when the screen is resized
    var _updateSectionHeight = function(){
        var resizedHeight = $(completeSectionShowing).outerHeight();
        $(form).height(resizedHeight);
		/*
        $('.c-proposal__textarea-input').on('keyup click change', function(){
            var resizedHeight = $(completeSectionShowing).outerHeight();
            $(form).height(resizedHeight);
        });
		*/
    };
    // Check the validity of the current input / textareas on button press
    var _focus = function(){
        $('.js-navigate').on('click keyup', function(){
            if(!$(this).hasClass('is--disabled')){
                var target = $(this).attr('id');
                setTimeout(function(){
                    $('.c-proposal__form-section.is--showing[id="'+target+'"]').first().children('.c-proposal__input-section').each(function(){
                        $(this).children('.js--first--focus--input').first().children('input,textarea').focus();
                    });
                },25);
            }
        });
    };
    // Toggle animation for next / previous section
    var _toggleSection = function(){
        $(leftRight).on('click',function(){
            var $this = $(this);
            var attr = $(this).attr('id');
            var newHeight = $('.js-form-section[id="'+attr+'"]').outerHeight();
            if(!$(this).hasClass('is--disabled')){
                var navigateTo = $(this).attr('id');
                $(form).animate({height: newHeight});
                if(!$this.hasClass('navigation--left')){;
                    var $current = $('.js-form-section.is--showing');
                    var $next = $('.js-form-section[id="'+navigateTo+'"]');
                    $current.addClass('left');
                    $next.addClass('right').addClass('is--showing');
                    setTimeout(function(){
                        $('.js-form-section[id="'+navigateTo+'"]').removeClass('right');
                        $current.removeClass('left').removeClass('is--showing');
                    },425);
                }else{
                    var $current = $('.js-form-section.is--showing');
                    var $next = $('.js-form-section[id="'+navigateTo+'"]');
                    $current.addClass('right');
                    $next.addClass('left').addClass('is--showing');
                    setTimeout(function(){
                        $('.js-form-section[id="'+navigateTo+'"]').removeClass('left');
                        $current.removeClass('right').removeClass('is--showing');
                    },425);
                }
            }
        });
        $(leftRight).keypress(function(e){
            if(e.keyCode === 13){
                var $this = $(this);
                var attr = $(this).attr('id');
                var newHeight = $('.js-form-section[id="'+attr+'"]').outerHeight();
                if(!$(this).hasClass('is--disabled')){
                    var navigateTo = $(this).attr('id');
                    $(form).animate({height: newHeight});
                    $('body,html').animate({scrollTop: 390}, 500);
                    if(!$this.hasClass('navigation--left')){;
                        var $current = $('.js-form-section.is--showing');
                        var $next = $('.js-form-section[id="'+navigateTo+'"]');
                        $current.addClass('left');
                        $next.addClass('right').addClass('is--showing');
                        setTimeout(function(){
                            $('.js-form-section[id="'+navigateTo+'"]').removeClass('right');
                            $current.removeClass('left').removeClass('is--showing');
                        },425);
                    }else{
                        var $current = $('.js-form-section.is--showing');
                        var $next = $('.js-form-section[id="'+navigateTo+'"]');
                        $current.addClass('right');
                        $next.addClass('left').addClass('is--showing');
                        setTimeout(function(){
                            $('.js-form-section[id="'+navigateTo+'"]').removeClass('left');
                            $current.removeClass('right').removeClass('is--showing');
                        },425);
                    }
                }
            }
        });
    };
    // Code to show the pip for the correct section in the sidebar
    var _getCurrentSection = function(){
        $(leftRight).on('click', function(){
            if(!$(this).hasClass('is--disabled')){
                var $this = $(this),
                    nextSection = $this.attr('data-section');
                $(sidebarButton).removeClass('showing--pip');
                $('.js-sidebar-link.'+nextSection).addClass('showing--pip');
            }
        });
    };
    // Proposal buttons can be found in the build your proposal section.
    var _proposalButtonClick = function(){
        $(proposalTab).click(function(){
            var $this = $(this),
                thisId = $this.attr('id'),
                newHeight = $('.js-form-section[id="'+thisId+'"]').outerHeight();
            $('.js-form-section').removeClass('is--showing');
            $('.js-form-section[id="'+thisId+'"]').addClass('is--showing');
            $(form).height(newHeight);
        });
    };
    // Event handlers.
    var _checkValidity = function(){
        // Adds enter button functionality to span for back and next.
        $(button).keypress(function(e){
            if(e.keyCode === 13){
                var validElements = 0;
                var totalElements = 0;
                var sideBarSection = $(this).attr('data-section');
                $(this).parent(nav).siblings(inputSection).children(inputWrapper).children(checkTypes).each(function(){
                    totalElements++;
                    if($(this).valid()){
                        validElements++;
                    }
                });
                if(totalElements === validElements){
                    $('.'+sideBarSection).addClass('js-active');
                }
            }
        });
        // Updates the sidebar js-active class
        $(button).on('click',function(){
            var validElements = 0;
            var totalElements = 0;
            var sideBarSection = $(this).attr('data-section');
            $(this).parent(nav).siblings(inputSection).children(inputWrapper).children(checkTypes).each(function(){
                totalElements++;
                if($(this).valid()){
                    validElements++;
                }
            });
            if(totalElements === validElements){
                $('.'+sideBarSection).addClass('js-active');
            }
        });
        // Adds valid or not valid to all text inputs
        $(text).on('focusout keyup',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
            if($this.val()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // Adds valid or not valid to all email inputs
        $(email).on('focusout keyup',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
            if($this.val()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // Adds the valud valid or not valid to all textareas
        $(textArea).on('focusout keyup click',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // Adds valid or not valid to all file inputs
        $(file).on('change focusout keyup',function(){
            var $this = $(this);
            if($this.valid()){
                $this.addClass('valid');
                $this.removeClass('not-valid');
            }else{
                $this.removeClass('valid');
                $this.addClass('not-valid');
            }
        });
        // adds valid to all radio buttons that are the same as the one clicked.
        $(radio).on('click change keyup focusout',function(){
            var $this = $(this);
            var name = $this.attr('name');
            $(completeSectionShowing).children(inputSection).children(inputWrapper).children('input[name="'+ name +'"]').addClass('valid').removeAttr('required').removeClass('not-valid').attr('aria-invalid','false');
        });
        // adds valid to all radio buttons that are the same as the one clicked.
        $(radioLabel).on('click change keyup focusout',function(){
            var $this = $(this);
            var siblingName = $this.siblings(radio).attr('name');
            $(completeSectionShowing).children(inputSection).children(inputWrapper).children('input[name="'+ siblingName +'"]').addClass('valid').removeClass('not-valid').attr('aria-invalid','false');
        });
        // Checks if all the sections up to the section clicked are valid, if they are it takes the user to that section.
        $(sidebarButton).on('click',function(){
            var $this = $(this),
                targetId = parseInt($this.attr('id'));

            $(formSection).each(function(){
                var $self = $(this),
                    thisId = parseInt($self.attr('id'));

                if(targetId !== thisId){
                    if(!$self.hasClass('is--valid')){
                        return false;
                    }
                }
                else{
                    var newHeight = $('.js-form-section[id="'+targetId+'"]').outerHeight();
                    $(form).height(newHeight);
                    $('.js-form-section').removeClass('is--showing');
                    $(sidebarButton).removeClass('showing--pip');
                    $this.addClass('js-active').addClass('showing--pip');
                    $('.js-form-section[id="'+targetId+'"]').addClass('is--showing');
                    return false;
                }
            });
        });
    };
    // Custom JS for brief upload / creation
    var _brief = function(){
        $('.js-create-brief').on('click', function(){
            if($('.js-brief-upload-input').hasClass('js--showing')){
                var currentHeight = $(form).outerHeight();
                var newHeight = currentHeight - uploadBriefHeight;
                $(form).height(newHeight);
            }
            $('.js-brief-upload-input').removeClass('js--showing').addClass('js--is-minimised');
            $('.js-brief').attr('aria-required','false').addClass('valid');
            $('.js-breif-id').attr('id','3').attr('data-section','js-the-brief');
            $('.js-brief-build-back').attr('id','9');
            $('.c-proposal__max-file-size').removeClass('is--showing');
            $('.js-toggle-brief-required').removeAttr('required');
            $('.js-not-required').attr('required');
        });
        $('.js-already-have-a-brief').on('click', function(){
            if($('.js-brief-upload-input').hasClass('js--is-minimised')){
                var currentHeight = $(form).outerHeight();
                var newHeight = currentHeight + uploadBriefHeight;
                $(form).height(newHeight);
            }
            $('.js-brief-upload-input').addClass('js--showing').removeClass('js--is-minimised');
            $('.js-brief').attr('aria-required','true').removeClass('valid');
            $('.js-breif-id').attr('id','10').attr('data-section','js-build-your-proposal');
            $('.js-brief-build-back').attr('id','2');
            $('.js-toggle-brief-required').attr('required');
            $('.js-not-required').removeAttr('required');
            setTimeout(function(){
                $('.c-proposal__max-file-size').addClass('is--showing');
            },250);
            if($('.c-proposal__input-upload.js-brief').get(0).files.length === 0){
                $('.js-breif-id').addClass('is--disabled-override');
            }else{
                $('.js-breif-id').removeClass('is--disabled-override');
            }
        });
    };
    // When a input or textarea is {{event}} this function is run that checks the whole section for validity. If valid - button updated
    // THE INPUT / TEXTAREA IS CHECKED FOR THE CLASS 'valid'
    var _toggleNextButton = function(){
        $(checkTypes).on('click focusout keyup change keydown', function(){
            var validElements = 0,
                totalElements = 0;

            $(completeSectionShowing).children(inputSection).children(inputWrapper).each(function(){
                var type = $(this).children(checkTypes).attr('type');
                // File ignored as its not always mandatory (brief can be created also)
                if(type !== 'file'){
                    totalElements++;
                    if($(this).children(checkTypes).hasClass('valid')){
                        validElements++;
                    }
                }
            });

            if(totalElements === validElements){
                $(completeSectionShowing).children(nav).children(button).removeClass('is--disabled');
                $(completeSectionShowing).addClass('is--valid');
            }else{
                $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                $(completeSectionShowing).removeClass('is--valid');
            }
        });
    };
    // JS for local storage. On click each input / textarea is checked for if it has local storage.
    var _checkForLocalStorage = function(){
        // Only check the is showing section initally
        var totalFields = $(completeSectionShowing).children(inputSection).children(inputWrapper).children(checkTypes),
        numberInThisSection = 0,
        numberOfValidInput = 0;

        setTimeout(function(){
            $(totalFields).each(function(){
                numberInThisSection++;
                if(!$.trim(this.value).length) {
                    $(this).removeClass('valid').attr('aria-invalid','true');
                }else{
                    $(this).addClass('valid').attr('aria-invalid','false').removeAttr('required');
                    numberOfValidInput++;
                }
            });
            if(numberInThisSection === numberOfValidInput){
                $(completeSectionShowing).children(nav).children(button).removeClass('is--disabled');
                $(completeSectionShowing).addClass('is--valid');
            }else{
                $(completeSectionShowing).children(nav).children(button).addClass('is--disabled');
                $(completeSectionShowing).removeClass('is--valid');
            }
            $('input[type="checkbox"]').each(function(){
                var check = $(this).attr('checked');
                if(check === 'checked'){
                    var name = $(this).attr('name');
                    $('input[name="'+name+'"]').attr('value','true');
                }
            });

        },500);
    };
    // Check section being toggled to on button click.
    var _checkNextSection = function(){
        $(button).on('click hover focusout' ,function(){
            var $this = $(this),
                toggleTo = $this.attr('id'),
                totalElements = 0,
                totalRadio = 0,
                numberRadioValid = 0,
                numberOfValidInput = 0,
                arr = [];
            $('.js-form-section[id="'+toggleTo+'"]').children(inputSection).each(function(){
                var $self = $(this);

                $self.children(inputWrapper).each(function(){
                    var parent = $(this).children(checkTypes),
                        type = parent.attr('type'),
                        name = parent.attr('name'),
                        value = parent.val();
                    // ! radio or file or checkbox
                    if(type !== 'radio' && type !== 'file' && type !== 'checkbox'){
                        totalElements++;
                        if(value !== ''){
                            numberOfValidInput++;
                            $(parent).addClass('valid').attr('aria-invalid','false').removeAttr('required');
                        }else{
                            $(parent).removeClass('valid').attr('aria-invalid','true');
                        }
                    }
                    // radio only
                    else if(type === 'radio'){
                        // to stop both values being equal to 0 which will enable the button.
                        totalElements = 9999;
                        if($.inArray(name, arr) < 0){
                            arr.push(name);
                            totalRadio = arr.length;
                        }
                        if(parent.is(':checked')){
                            numberRadioValid++;
                            $('.c-proposal__input-radio[name="'+name+'"]').addClass('valid').attr('aria-required','false').removeAttr('required').attr('aria-invalid','false');
                        }
                    }
                    // checkbox only
                    else if(type === 'checkbox'){
                        console.log('test');
                        setTimeout(function(){
                            var chk = parent.attr('checked');
                            if(chk === 'checked'){
                                var nm = parent.attr('name');
                                console.log(nm);
                                $('input[name="'+nm+'"]').attr('value','true');
                            }
                        },500);
                    }
                });
                if(totalElements === numberOfValidInput){
                    $('.js-form-section[id="'+toggleTo+'"]').children(nav).children(button).removeClass('is--disabled');
                }
                if(totalRadio === numberRadioValid){
                    $('.js-form-section[id="'+toggleTo+'"]').children(nav).children('.js-radio-button').removeClass('is--disabled');
                }
            });
        });
    };

    // Function calls
    var init = function() {
        var wWidth = $(window).width();
		$(window).resize(function(){
            var wWidth = $(this).width();
            _updateSectionHeight();
            _scrollTop(wWidth);
		});
        _updateSectionHeight();
        _checkForLocalStorage();
        _checkNextSection();
        _focus();
        _getCurrentSection();
        _scrollTop(wWidth);
        _fileUpload();
        _checkValidity();
        _toggleSection();
        _toggleNextButton();
        _brief();
        _proposalButtonClick();
        _updateHiddenFieldValues();
	};

    return {
		init: init
	};

})(jQuery);
/* eslint-enable */

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJicmllZmluZy1mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgQnJpZWZpbmdGb3JtID0gKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICAvLyBBbGwgdGhlIHN0YXRpYyB2YXJpYWJsZXMgdXNlZCB0aHJvdWdob3V0IHRoZSBjb2RlLlxuICAgIHZhciBmb3JtID0gJy5qcy1mb3JtJyxcbiAgICAgICAgYnV0dG9uID0gJy5qcy1jaGVjay12YWxpZGl0eScsXG4gICAgICAgIHNpZGViYXJCdXR0b24gPSAnLmpzLXNpZGViYXItbGluaycsXG4gICAgICAgIG5hdiA9ICcuYy1wcm9wb3NhbF9fbmF2aWdhdGlvbicsXG4gICAgICAgIGlucHV0U2VjdGlvbiA9ICcuYy1wcm9wb3NhbF9faW5wdXQtc2VjdGlvbicsXG4gICAgICAgIGlucHV0V3JhcHBlciA9ICcuYy1wcm9wb3NhbF9faW5wdXQtd3JhcHBlcicsXG4gICAgICAgIGNoZWNrVHlwZXMgPSAnaW5wdXQsdGV4dGFyZWEnLFxuICAgICAgICBsZWZ0UmlnaHQgPSAnLmpzLW5hdmlnYXRlJyxcbiAgICAgICAgZm9ybVNlY3Rpb24gPSAnLmpzLWZvcm0tc2VjdGlvbicsXG4gICAgICAgIHRleHRBcmVhID0gJy5jLXByb3Bvc2FsX190ZXh0YXJlYS1pbnB1dCcsXG4gICAgICAgIHRleHQgPSAnLmMtcHJvcG9zYWxfX2lucHV0LXRleHQnLFxuICAgICAgICBlbWFpbCA9ICcuYy1wcm9wb3NhbF9faW5wdXQtZW1haWwnLFxuICAgICAgICBmaWxlID0gJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnLFxuICAgICAgICByYWRpbyA9ICcuYy1wcm9wb3NhbF9faW5wdXQtcmFkaW8nLFxuICAgICAgICByYWRpb0xhYmVsID0gJy5qcy1yYWRpby1pbnB1dCcsXG4gICAgICAgIGNvbXBsZXRlU2VjdGlvblNob3dpbmcgPSAnLmMtcHJvcG9zYWxfX2Zvcm0tc2VjdGlvbi5pcy0tc2hvd2luZycsXG4gICAgICAgIHVwbG9hZEJyaWVmSGVpZ2h0ID0gMzAwLFxuICAgICAgICBwcm9wb3NhbFRhYiA9ICcuanMtcHJvcG9zYWxfX3RhYnMnO1xuXG4gICAgLy8gVXBkYXRlcyBoaWRkZW4gZmllbGRzIGZvciBjaGVja2JveGVzIGFzIHVtYnJhY28gYWRkcyBoaWRkZW5maWVsZHMgdGhhdCBuZWVkIHRvIGJlIHRvZ2dsZWQuXG4gICAgdmFyIF91cGRhdGVIaWRkZW5GaWVsZFZhbHVlcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5qcy1jaGVja2JveC0taGlkZGVuLWZpZWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBhdHRyID0gJCh0aGlzKS5hdHRyKCdmb3InKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRUcnVlRmFsc2UgPSAkKFwiaW5wdXRbaWQ9J1wiK2F0dHIrXCInXVwiKS5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYodGFyZ2V0VHJ1ZUZhbHNlID09PSBcImZhbHNlXCIpe1xuICAgICAgICAgICAgICAgICQoXCJpbnB1dFtpZD0nXCIrYXR0citcIiddXCIpLmF0dHIoJ3ZhbHVlJywndHJ1ZScpO1xuICAgICAgICAgICAgICAgICQoXCJpbnB1dFtuYW1lPSdcIithdHRyK1wiJ11cIikuYXR0cigndmFsdWUnLCd0cnVlJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKFwiaW5wdXRbaWQ9J1wiK2F0dHIrXCInXVwiKS5hdHRyKCd2YWx1ZScsJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgJChcImlucHV0W25hbWU9J1wiK2F0dHIrXCInXVwiKS5hdHRyKCd2YWx1ZScsJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSlMgdG8gY2hlY2sgZmlsZSBzaXplLCB0eXBlIGFuZCBhZGQgYWxsIGVsZW1lbnRzIHRvIHdvcmsgd2l0aCB0aGlzXG4gICAgdmFyIF9maWxlVXBsb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnZm9ybSBpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UgZm9jdXNvdXQgY2xpY2sga2V5dXAnLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlc1swXTtcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICAgICAgICAgIHZhciBmaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblxuICAgICAgICAgICAgdmFyIGV4dCA9ICQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnKS52YWwoKS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZigkLmluQXJyYXkoZXh0LCBbJ3BkZicsJ2RvY3gnXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gd3JvbmcgZmlsZSB0eXBlXG4gICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX2ZpbGUtdXBsb2FkLXRleHQnKS5jaGlsZHJlbignc3BhbicpLnRleHQoXCJPbmx5IFBERiAoLnBkZikgb3IgV29yZCBEb2N1bWVudHMgKC5kb2N4KSBhcmUgYWxvdWQuXCIpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19yZXBsYWNlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnKS5hZGRDbGFzcygnZXJyb3InKS5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLmFkZENsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9LDEwKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihmaWxlU2l6ZSA+PSAyMDAwMDAwKXtcbiAgICAgICAgICAgICAgICAvLyBmaWxlIHRvbyBsYXJnZVxuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19maWxlLXVwbG9hZC10ZXh0JykuY2hpbGRyZW4oJ3NwYW4nKS50ZXh0KFwiTWF4IGZpbGUgc2l6ZSBpcyAyTUIuXCIpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19yZXBsYWNlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQnKS5hZGRDbGFzcygnZXJyb3InKS5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLmFkZENsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9LDEwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIGFoaCBqdXN0IHJpZ2h0XG4gICAgICAgICAgICAgICAgJCgnLmpzLWlnbm9yZS1mcm9tLXZhbGlkYXRpb24nKS5hZGRDbGFzcygnaXMtLXZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX2ZpbGUtdXBsb2FkLXRleHQnKS5jaGlsZHJlbignc3BhbicpLnRleHQoZmlsZU5hbWUrXCIgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgICAgICAgICAgICAkKCcuYy1wcm9wb3NhbF9fcmVwbGFjZScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpLmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihuYXYpLmNoaWxkcmVuKGJ1dHRvbikucmVtb3ZlQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5yZW1vdmVDbGFzcygnaXMtLWRpc2FibGVkLW92ZXJyaWRlJyk7XG4gICAgICAgICAgICAgICAgfSwxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gV2hlbiB0aGUgbmV4dCAvIHByZXZpb3VzIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBzY3JlZW4gaXMgc2Nyb2xsZWQuXG4gICAgdmFyIF9zY3JvbGxUb3AgPSBmdW5jdGlvbih3V2lkdGgpe1xuICAgICAgICBpZih3V2lkdGggPj0gMTAwMCl7XG4gICAgICAgICAgICAkKCcuanMtbmF2aWdhdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZGlzYWJsZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogMzkwfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcuanMtbmF2aWdhdGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZGlzYWJsZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogMjc1fSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVXBkYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBmb3JtIHdoZW4gdGhlIHNjcmVlbiBpcyByZXNpemVkXG4gICAgdmFyIF91cGRhdGVTZWN0aW9uSGVpZ2h0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHJlc2l6ZWRIZWlnaHQgPSAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICQoZm9ybSkuaGVpZ2h0KHJlc2l6ZWRIZWlnaHQpO1xuXHRcdC8qXG4gICAgICAgICQoJy5jLXByb3Bvc2FsX190ZXh0YXJlYS1pbnB1dCcpLm9uKCdrZXl1cCBjbGljayBjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHJlc2l6ZWRIZWlnaHQgPSAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAkKGZvcm0pLmhlaWdodChyZXNpemVkSGVpZ2h0KTtcbiAgICAgICAgfSk7XG5cdFx0Ki9cbiAgICB9O1xuICAgIC8vIENoZWNrIHRoZSB2YWxpZGl0eSBvZiB0aGUgY3VycmVudCBpbnB1dCAvIHRleHRhcmVhcyBvbiBidXR0b24gcHJlc3NcbiAgICB2YXIgX2ZvY3VzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmpzLW5hdmlnYXRlJykub24oJ2NsaWNrIGtleXVwJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZGlzYWJsZWQnKSl7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19mb3JtLXNlY3Rpb24uaXMtLXNob3dpbmdbaWQ9XCInK3RhcmdldCsnXCJdJykuZmlyc3QoKS5jaGlsZHJlbignLmMtcHJvcG9zYWxfX2lucHV0LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuanMtLWZpcnN0LS1mb2N1cy0taW5wdXQnKS5maXJzdCgpLmNoaWxkcmVuKCdpbnB1dCx0ZXh0YXJlYScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIFRvZ2dsZSBhbmltYXRpb24gZm9yIG5leHQgLyBwcmV2aW91cyBzZWN0aW9uXG4gICAgdmFyIF90b2dnbGVTZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJChsZWZ0UmlnaHQpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgYXR0ciA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJythdHRyKydcIl0nKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpKXtcbiAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGVUbyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmFuaW1hdGUoe2hlaWdodDogbmV3SGVpZ2h0fSk7XG4gICAgICAgICAgICAgICAgaWYoISR0aGlzLmhhc0NsYXNzKCduYXZpZ2F0aW9uLS1sZWZ0JykpeztcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50ID0gJCgnLmpzLWZvcm0tc2VjdGlvbi5pcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJytuYXZpZ2F0ZVRvKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ3JpZ2h0JykuYWRkQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpLnJlbW92ZUNsYXNzKCdyaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5yZW1vdmVDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSw0MjUpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkKCcuanMtZm9ybS1zZWN0aW9uLmlzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9ICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudC5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrbmF2aWdhdGVUbysnXCJdJykucmVtb3ZlQ2xhc3MoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50LnJlbW92ZUNsYXNzKCdyaWdodCcpLnJlbW92ZUNsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICB9LDQyNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJChsZWZ0UmlnaHQpLmtleXByZXNzKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrYXR0cisnXCJdJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnaXMtLWRpc2FibGVkJykpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2aWdhdGVUbyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJChmb3JtKS5hbmltYXRlKHtoZWlnaHQ6IG5ld0hlaWdodH0pO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IDM5MH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEkdGhpcy5oYXNDbGFzcygnbmF2aWdhdGlvbi0tbGVmdCcpKXs7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkKCcuanMtZm9ybS1zZWN0aW9uLmlzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJytuYXZpZ2F0ZVRvKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50LmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJytuYXZpZ2F0ZVRvKydcIl0nKS5yZW1vdmVDbGFzcygncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVudC5yZW1vdmVDbGFzcygnbGVmdCcpLnJlbW92ZUNsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSw0MjUpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudCA9ICQoJy5qcy1mb3JtLXNlY3Rpb24uaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9ICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK25hdmlnYXRlVG8rJ1wiXScpLnJlbW92ZUNsYXNzKCdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDQyNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gQ29kZSB0byBzaG93IHRoZSBwaXAgZm9yIHRoZSBjb3JyZWN0IHNlY3Rpb24gaW4gdGhlIHNpZGViYXJcbiAgICB2YXIgX2dldEN1cnJlbnRTZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJChsZWZ0UmlnaHQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnaXMtLWRpc2FibGVkJykpe1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIG5leHRTZWN0aW9uID0gJHRoaXMuYXR0cignZGF0YS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgJChzaWRlYmFyQnV0dG9uKS5yZW1vdmVDbGFzcygnc2hvd2luZy0tcGlwJyk7XG4gICAgICAgICAgICAgICAgJCgnLmpzLXNpZGViYXItbGluay4nK25leHRTZWN0aW9uKS5hZGRDbGFzcygnc2hvd2luZy0tcGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gUHJvcG9zYWwgYnV0dG9ucyBjYW4gYmUgZm91bmQgaW4gdGhlIGJ1aWxkIHlvdXIgcHJvcG9zYWwgc2VjdGlvbi5cbiAgICB2YXIgX3Byb3Bvc2FsQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAkKHByb3Bvc2FsVGFiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICB0aGlzSWQgPSAkdGhpcy5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9ICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK3RoaXNJZCsnXCJdJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb24nKS5yZW1vdmVDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK3RoaXNJZCsnXCJdJykuYWRkQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAkKGZvcm0pLmhlaWdodChuZXdIZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIEV2ZW50IGhhbmRsZXJzLlxuICAgIHZhciBfY2hlY2tWYWxpZGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIEFkZHMgZW50ZXIgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgdG8gc3BhbiBmb3IgYmFjayBhbmQgbmV4dC5cbiAgICAgICAgJChidXR0b24pLmtleXByZXNzKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkRWxlbWVudHMgPSAwO1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbEVsZW1lbnRzID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgc2lkZUJhclNlY3Rpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KG5hdikuc2libGluZ3MoaW5wdXRTZWN0aW9uKS5jaGlsZHJlbihpbnB1dFdyYXBwZXIpLmNoaWxkcmVuKGNoZWNrVHlwZXMpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZhbGlkKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYodG90YWxFbGVtZW50cyA9PT0gdmFsaWRFbGVtZW50cyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy4nK3NpZGVCYXJTZWN0aW9uKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlcyB0aGUgc2lkZWJhciBqcy1hY3RpdmUgY2xhc3NcbiAgICAgICAgJChidXR0b24pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB2YWxpZEVsZW1lbnRzID0gMDtcbiAgICAgICAgICAgIHZhciB0b3RhbEVsZW1lbnRzID0gMDtcbiAgICAgICAgICAgIHZhciBzaWRlQmFyU2VjdGlvbiA9ICQodGhpcykuYXR0cignZGF0YS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudChuYXYpLnNpYmxpbmdzKGlucHV0U2VjdGlvbikuY2hpbGRyZW4oaW5wdXRXcmFwcGVyKS5jaGlsZHJlbihjaGVja1R5cGVzKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmFsaWQoKSl7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRWxlbWVudHMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKHRvdGFsRWxlbWVudHMgPT09IHZhbGlkRWxlbWVudHMpe1xuICAgICAgICAgICAgICAgICQoJy4nK3NpZGVCYXJTZWN0aW9uKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGRzIHZhbGlkIG9yIG5vdCB2YWxpZCB0byBhbGwgdGV4dCBpbnB1dHNcbiAgICAgICAgJCh0ZXh0KS5vbignZm9jdXNvdXQga2V5dXAnLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoJHRoaXMudmFsaWQoKSl7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJHRoaXMudmFsKCkpe1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZHMgdmFsaWQgb3Igbm90IHZhbGlkIHRvIGFsbCBlbWFpbCBpbnB1dHNcbiAgICAgICAgJChlbWFpbCkub24oJ2ZvY3Vzb3V0IGtleXVwJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmKCR0aGlzLnZhbGlkKCkpe1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCR0aGlzLnZhbCgpKXtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGRzIHRoZSB2YWx1ZCB2YWxpZCBvciBub3QgdmFsaWQgdG8gYWxsIHRleHRhcmVhc1xuICAgICAgICAkKHRleHRBcmVhKS5vbignZm9jdXNvdXQga2V5dXAgY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoJHRoaXMudmFsaWQoKSl7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ25vdC12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkcyB2YWxpZCBvciBub3QgdmFsaWQgdG8gYWxsIGZpbGUgaW5wdXRzXG4gICAgICAgICQoZmlsZSkub24oJ2NoYW5nZSBmb2N1c291dCBrZXl1cCcsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZigkdGhpcy52YWxpZCgpKXtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGRzIHZhbGlkIHRvIGFsbCByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRoZSBzYW1lIGFzIHRoZSBvbmUgY2xpY2tlZC5cbiAgICAgICAgJChyYWRpbykub24oJ2NsaWNrIGNoYW5nZSBrZXl1cCBmb2N1c291dCcsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9ICR0aGlzLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4oaW5wdXRTZWN0aW9uKS5jaGlsZHJlbihpbnB1dFdyYXBwZXIpLmNoaWxkcmVuKCdpbnB1dFtuYW1lPVwiJysgbmFtZSArJ1wiXScpLmFkZENsYXNzKCd2YWxpZCcpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJykucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpLmF0dHIoJ2FyaWEtaW52YWxpZCcsJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGRzIHZhbGlkIHRvIGFsbCByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRoZSBzYW1lIGFzIHRoZSBvbmUgY2xpY2tlZC5cbiAgICAgICAgJChyYWRpb0xhYmVsKS5vbignY2xpY2sgY2hhbmdlIGtleXVwIGZvY3Vzb3V0JyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzaWJsaW5nTmFtZSA9ICR0aGlzLnNpYmxpbmdzKHJhZGlvKS5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLmNoaWxkcmVuKGlucHV0U2VjdGlvbikuY2hpbGRyZW4oaW5wdXRXcmFwcGVyKS5jaGlsZHJlbignaW5wdXRbbmFtZT1cIicrIHNpYmxpbmdOYW1lICsnXCJdJykuYWRkQ2xhc3MoJ3ZhbGlkJykucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpLmF0dHIoJ2FyaWEtaW52YWxpZCcsJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDaGVja3MgaWYgYWxsIHRoZSBzZWN0aW9ucyB1cCB0byB0aGUgc2VjdGlvbiBjbGlja2VkIGFyZSB2YWxpZCwgaWYgdGhleSBhcmUgaXQgdGFrZXMgdGhlIHVzZXIgdG8gdGhhdCBzZWN0aW9uLlxuICAgICAgICAkKHNpZGViYXJCdXR0b24pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBwYXJzZUludCgkdGhpcy5hdHRyKCdpZCcpKTtcblxuICAgICAgICAgICAgJChmb3JtU2VjdGlvbikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciAkc2VsZiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHRoaXNJZCA9IHBhcnNlSW50KCRzZWxmLmF0dHIoJ2lkJykpO1xuXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0SWQgIT09IHRoaXNJZCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEkc2VsZi5oYXNDbGFzcygnaXMtLXZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJyt0YXJnZXRJZCsnXCJdJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJChmb3JtKS5oZWlnaHQobmV3SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICAkKHNpZGViYXJCdXR0b24pLnJlbW92ZUNsYXNzKCdzaG93aW5nLS1waXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpLmFkZENsYXNzKCdzaG93aW5nLS1waXAnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrdGFyZ2V0SWQrJ1wiXScpLmFkZENsYXNzKCdpcy0tc2hvd2luZycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gQ3VzdG9tIEpTIGZvciBicmllZiB1cGxvYWQgLyBjcmVhdGlvblxuICAgIHZhciBfYnJpZWYgPSBmdW5jdGlvbigpe1xuICAgICAgICAkKCcuanMtY3JlYXRlLWJyaWVmJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQoJy5qcy1icmllZi11cGxvYWQtaW5wdXQnKS5oYXNDbGFzcygnanMtLXNob3dpbmcnKSl7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSAkKGZvcm0pLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGN1cnJlbnRIZWlnaHQgLSB1cGxvYWRCcmllZkhlaWdodDtcbiAgICAgICAgICAgICAgICAkKGZvcm0pLmhlaWdodChuZXdIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLmpzLWJyaWVmLXVwbG9hZC1pbnB1dCcpLnJlbW92ZUNsYXNzKCdqcy0tc2hvd2luZycpLmFkZENsYXNzKCdqcy0taXMtbWluaW1pc2VkJyk7XG4gICAgICAgICAgICAkKCcuanMtYnJpZWYnKS5hdHRyKCdhcmlhLXJlcXVpcmVkJywnZmFsc2UnKS5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICAgICQoJy5qcy1icmVpZi1pZCcpLmF0dHIoJ2lkJywnMycpLmF0dHIoJ2RhdGEtc2VjdGlvbicsJ2pzLXRoZS1icmllZicpO1xuICAgICAgICAgICAgJCgnLmpzLWJyaWVmLWJ1aWxkLWJhY2snKS5hdHRyKCdpZCcsJzknKTtcbiAgICAgICAgICAgICQoJy5jLXByb3Bvc2FsX19tYXgtZmlsZS1zaXplJykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93aW5nJyk7XG4gICAgICAgICAgICAkKCcuanMtdG9nZ2xlLWJyaWVmLXJlcXVpcmVkJykucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICQoJy5qcy1ub3QtcmVxdWlyZWQnKS5hdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLmpzLWFscmVhZHktaGF2ZS1hLWJyaWVmJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQoJy5qcy1icmllZi11cGxvYWQtaW5wdXQnKS5oYXNDbGFzcygnanMtLWlzLW1pbmltaXNlZCcpKXtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9ICQoZm9ybSkub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY3VycmVudEhlaWdodCArIHVwbG9hZEJyaWVmSGVpZ2h0O1xuICAgICAgICAgICAgICAgICQoZm9ybSkuaGVpZ2h0KG5ld0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcuanMtYnJpZWYtdXBsb2FkLWlucHV0JykuYWRkQ2xhc3MoJ2pzLS1zaG93aW5nJykucmVtb3ZlQ2xhc3MoJ2pzLS1pcy1taW5pbWlzZWQnKTtcbiAgICAgICAgICAgICQoJy5qcy1icmllZicpLmF0dHIoJ2FyaWEtcmVxdWlyZWQnLCd0cnVlJykucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5hdHRyKCdpZCcsJzEwJykuYXR0cignZGF0YS1zZWN0aW9uJywnanMtYnVpbGQteW91ci1wcm9wb3NhbCcpO1xuICAgICAgICAgICAgJCgnLmpzLWJyaWVmLWJ1aWxkLWJhY2snKS5hdHRyKCdpZCcsJzInKTtcbiAgICAgICAgICAgICQoJy5qcy10b2dnbGUtYnJpZWYtcmVxdWlyZWQnKS5hdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgJCgnLmpzLW5vdC1yZXF1aXJlZCcpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX21heC1maWxlLXNpemUnKS5hZGRDbGFzcygnaXMtLXNob3dpbmcnKTtcbiAgICAgICAgICAgIH0sMjUwKTtcbiAgICAgICAgICAgIGlmKCQoJy5jLXByb3Bvc2FsX19pbnB1dC11cGxvYWQuanMtYnJpZWYnKS5nZXQoMCkuZmlsZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5hZGRDbGFzcygnaXMtLWRpc2FibGVkLW92ZXJyaWRlJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcuanMtYnJlaWYtaWQnKS5yZW1vdmVDbGFzcygnaXMtLWRpc2FibGVkLW92ZXJyaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gV2hlbiBhIGlucHV0IG9yIHRleHRhcmVhIGlzIHt7ZXZlbnR9fSB0aGlzIGZ1bmN0aW9uIGlzIHJ1biB0aGF0IGNoZWNrcyB0aGUgd2hvbGUgc2VjdGlvbiBmb3IgdmFsaWRpdHkuIElmIHZhbGlkIC0gYnV0dG9uIHVwZGF0ZWRcbiAgICAvLyBUSEUgSU5QVVQgLyBURVhUQVJFQSBJUyBDSEVDS0VEIEZPUiBUSEUgQ0xBU1MgJ3ZhbGlkJ1xuICAgIHZhciBfdG9nZ2xlTmV4dEJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICQoY2hlY2tUeXBlcykub24oJ2NsaWNrIGZvY3Vzb3V0IGtleXVwIGNoYW5nZSBrZXlkb3duJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB2YWxpZEVsZW1lbnRzID0gMCxcbiAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzID0gMDtcblxuICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihpbnB1dFNlY3Rpb24pLmNoaWxkcmVuKGlucHV0V3JhcHBlcikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJCh0aGlzKS5jaGlsZHJlbihjaGVja1R5cGVzKS5hdHRyKCd0eXBlJyk7XG4gICAgICAgICAgICAgICAgLy8gRmlsZSBpZ25vcmVkIGFzIGl0cyBub3QgYWx3YXlzIG1hbmRhdG9yeSAoYnJpZWYgY2FuIGJlIGNyZWF0ZWQgYWxzbylcbiAgICAgICAgICAgICAgICBpZih0eXBlICE9PSAnZmlsZScpe1xuICAgICAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcykuY2hpbGRyZW4oY2hlY2tUeXBlcykuaGFzQ2xhc3MoJ3ZhbGlkJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRFbGVtZW50cysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHRvdGFsRWxlbWVudHMgPT09IHZhbGlkRWxlbWVudHMpe1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLnJlbW92ZUNsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLmFkZENsYXNzKCdpcy0tdmFsaWQnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbihidXR0b24pLmFkZENsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkKGNvbXBsZXRlU2VjdGlvblNob3dpbmcpLnJlbW92ZUNsYXNzKCdpcy0tdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBKUyBmb3IgbG9jYWwgc3RvcmFnZS4gT24gY2xpY2sgZWFjaCBpbnB1dCAvIHRleHRhcmVhIGlzIGNoZWNrZWQgZm9yIGlmIGl0IGhhcyBsb2NhbCBzdG9yYWdlLlxuICAgIHZhciBfY2hlY2tGb3JMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBPbmx5IGNoZWNrIHRoZSBpcyBzaG93aW5nIHNlY3Rpb24gaW5pdGFsbHlcbiAgICAgICAgdmFyIHRvdGFsRmllbGRzID0gJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihpbnB1dFNlY3Rpb24pLmNoaWxkcmVuKGlucHV0V3JhcHBlcikuY2hpbGRyZW4oY2hlY2tUeXBlcyksXG4gICAgICAgIG51bWJlckluVGhpc1NlY3Rpb24gPSAwLFxuICAgICAgICBudW1iZXJPZlZhbGlkSW5wdXQgPSAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodG90YWxGaWVsZHMpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBudW1iZXJJblRoaXNTZWN0aW9uKys7XG4gICAgICAgICAgICAgICAgaWYoISQudHJpbSh0aGlzLnZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndmFsaWQnKS5hdHRyKCdhcmlhLWludmFsaWQnLCd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3ZhbGlkJykuYXR0cignYXJpYS1pbnZhbGlkJywnZmFsc2UnKS5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZhbGlkSW5wdXQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKG51bWJlckluVGhpc1NlY3Rpb24gPT09IG51bWJlck9mVmFsaWRJbnB1dCl7XG4gICAgICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihuYXYpLmNoaWxkcmVuKGJ1dHRvbikucmVtb3ZlQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykuYWRkQ2xhc3MoJ2lzLS12YWxpZCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJChjb21wbGV0ZVNlY3Rpb25TaG93aW5nKS5jaGlsZHJlbihuYXYpLmNoaWxkcmVuKGJ1dHRvbikuYWRkQ2xhc3MoJ2lzLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICQoY29tcGxldGVTZWN0aW9uU2hvd2luZykucmVtb3ZlQ2xhc3MoJ2lzLS12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9ICQodGhpcykuYXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrID09PSAnY2hlY2tlZCcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJytuYW1lKydcIl0nKS5hdHRyKCd2YWx1ZScsJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LDUwMCk7XG4gICAgfTtcbiAgICAvLyBDaGVjayBzZWN0aW9uIGJlaW5nIHRvZ2dsZWQgdG8gb24gYnV0dG9uIGNsaWNrLlxuICAgIHZhciBfY2hlY2tOZXh0U2VjdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICQoYnV0dG9uKS5vbignY2xpY2sgaG92ZXIgZm9jdXNvdXQnICxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICB0b2dnbGVUbyA9ICR0aGlzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cyA9IDAsXG4gICAgICAgICAgICAgICAgdG90YWxSYWRpbyA9IDAsXG4gICAgICAgICAgICAgICAgbnVtYmVyUmFkaW9WYWxpZCA9IDAsXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZWYWxpZElucHV0ID0gMCxcbiAgICAgICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgICAgICQoJy5qcy1mb3JtLXNlY3Rpb25baWQ9XCInK3RvZ2dsZVRvKydcIl0nKS5jaGlsZHJlbihpbnB1dFNlY3Rpb24pLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgJHNlbGYuY2hpbGRyZW4oaW5wdXRXcmFwcGVyKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLmNoaWxkcmVuKGNoZWNrVHlwZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHBhcmVudC5hdHRyKCd0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGFyZW50LmF0dHIoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyZW50LnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAhIHJhZGlvIG9yIGZpbGUgb3IgY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSAhPT0gJ3JhZGlvJyAmJiB0eXBlICE9PSAnZmlsZScgJiYgdHlwZSAhPT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEVsZW1lbnRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mVmFsaWRJbnB1dCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGFyZW50KS5hZGRDbGFzcygndmFsaWQnKS5hdHRyKCdhcmlhLWludmFsaWQnLCdmYWxzZScpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHBhcmVudCkucmVtb3ZlQ2xhc3MoJ3ZhbGlkJykuYXR0cignYXJpYS1pbnZhbGlkJywndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJhZGlvIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlID09PSAncmFkaW8nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHN0b3AgYm90aCB2YWx1ZXMgYmVpbmcgZXF1YWwgdG8gMCB3aGljaCB3aWxsIGVuYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxFbGVtZW50cyA9IDk5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkLmluQXJyYXkobmFtZSwgYXJyKSA8IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUmFkaW8gPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50LmlzKCc6Y2hlY2tlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJSYWRpb1ZhbGlkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmMtcHJvcG9zYWxfX2lucHV0LXJhZGlvW25hbWU9XCInK25hbWUrJ1wiXScpLmFkZENsYXNzKCd2YWxpZCcpLmF0dHIoJ2FyaWEtcmVxdWlyZWQnLCdmYWxzZScpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJykuYXR0cignYXJpYS1pbnZhbGlkJywnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2JveCBvbmx5XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NoZWNrYm94Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGsgPSBwYXJlbnQuYXR0cignY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoayA9PT0gJ2NoZWNrZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5tID0gcGFyZW50LmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwiJytubSsnXCJdJykuYXR0cigndmFsdWUnLCd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYodG90YWxFbGVtZW50cyA9PT0gbnVtYmVyT2ZWYWxpZElucHV0KXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZvcm0tc2VjdGlvbltpZD1cIicrdG9nZ2xlVG8rJ1wiXScpLmNoaWxkcmVuKG5hdikuY2hpbGRyZW4oYnV0dG9uKS5yZW1vdmVDbGFzcygnaXMtLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRvdGFsUmFkaW8gPT09IG51bWJlclJhZGlvVmFsaWQpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuanMtZm9ybS1zZWN0aW9uW2lkPVwiJyt0b2dnbGVUbysnXCJdJykuY2hpbGRyZW4obmF2KS5jaGlsZHJlbignLmpzLXJhZGlvLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy0tZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIGNhbGxzXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHdXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB3V2lkdGggPSAkKHRoaXMpLndpZHRoKCk7XG4gICAgICAgICAgICBfdXBkYXRlU2VjdGlvbkhlaWdodCgpO1xuICAgICAgICAgICAgX3Njcm9sbFRvcCh3V2lkdGgpO1xuXHRcdH0pO1xuICAgICAgICBfdXBkYXRlU2VjdGlvbkhlaWdodCgpO1xuICAgICAgICBfY2hlY2tGb3JMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgX2NoZWNrTmV4dFNlY3Rpb24oKTtcbiAgICAgICAgX2ZvY3VzKCk7XG4gICAgICAgIF9nZXRDdXJyZW50U2VjdGlvbigpO1xuICAgICAgICBfc2Nyb2xsVG9wKHdXaWR0aCk7XG4gICAgICAgIF9maWxlVXBsb2FkKCk7XG4gICAgICAgIF9jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIF90b2dnbGVTZWN0aW9uKCk7XG4gICAgICAgIF90b2dnbGVOZXh0QnV0dG9uKCk7XG4gICAgICAgIF9icmllZigpO1xuICAgICAgICBfcHJvcG9zYWxCdXR0b25DbGljaygpO1xuICAgICAgICBfdXBkYXRlSGlkZGVuRmllbGRWYWx1ZXMoKTtcblx0fTtcblxuICAgIHJldHVybiB7XG5cdFx0aW5pdDogaW5pdFxuXHR9O1xuXG59KShqUXVlcnkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuIl0sImZpbGUiOiJicmllZmluZy1mb3JtLmpzIn0=

(function($) {
	$(document).ready(function() {
//		window.BriefingForm.init();
	});
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsZWdhY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4vL1x0XHR3aW5kb3cuQnJpZWZpbmdGb3JtLmluaXQoKTtcblx0fSk7XG59KShqUXVlcnkpO1xuIl0sImZpbGUiOiJsZWdhY3kuanMifQ==

//# sourceMappingURL=legacy.js.map
