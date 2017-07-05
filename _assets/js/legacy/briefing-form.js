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
        $('.c-proposal__textarea-input').on('keyup click change', function(){
            console.log('running');
            var resizedHeight = $(completeSectionShowing).outerHeight();
            $(form).height(resizedHeight);
        });
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
    // Update Textarea height based on content
    var _updateTextareaHeight = function(textarea){
        
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
        _updateTextareaHeight();
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