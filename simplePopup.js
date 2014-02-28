/*
The MIT License (MIT)

Copyright (c) 2014 Vincenzo Mennella

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
Author: Vincenzo Mennella
Last updated on 27 feb 2014
Version: 1.0.0

https://github.com/mrgingles/simplePopup
*/

/*
Please look at readme for usage example
*/

;(function ($) {
	var methods = {
        init: function(options, action) {
			//default options
			modal = this;
			
			var settings = $.extend({
				bgcolor: "#FBFBFB",
				boxshadow: "#424242",
				width: "650",
				height: "250",
				draggable: false,
				closebutton: true,
				cursor: "default",
				notoverlap: false
			}, options);
			
			$(this).addClass('simplePopupContainer');
			
			if(settings.draggable) {
				$(this).draggable({ containment: "window" });
				if(typeof(options) != "undefined") {
					if(typeof(options.cursor) == "undefined") {
						settings.cursor = "move";
					}
				}
 			}
			
			if(settings.closebutton) {
				$(this).append('<div class="close_button"></div>');
				$('.close_button').click(function() {
					parent_modal = $(this).closest('.simplePopupContainer');
					$(parent_modal).simplePopup('close');
				})
			}
			
			//allows user to create an element with class simplemodal_close_button and automagically close the modal when someone clicks on it
			if($('.simplemodal_close_button').length != 0) {
				$('.simplemodal_close_button').click(function() {
					parent_modal = $(this).closest('.simplePopupContainer');
					$(parent_modal).simplePopup('close');
				})
			}
			
			$(this).simplePopup('moveToTop');
			$(this).unbind('click');
			$(this).click(function() {
				$(this).simplePopup('moveToTop');
			})
			
			if(settings.notoverlap && $('.simplePopupContainer:visible').length >= 1) {				
				if($('#' + $(this).attr('id') + ':visible').length == 0) {
					max_top = 0;
					max_left = 0;
					$('.simplePopupContainer:visible').each(function() {
						if(parseInt($(this).css('left')) > max_left) {
							max_left = parseInt($(this).css('left'));
						}
					
						if(parseInt($(this).css('top')) > max_top) {
							max_top = parseInt($(this).css('top'));
						}
					})
				
					left_position = max_left+20;
					top_position = max_top+20;
				} else {
					left_position = parseInt($('#' + $(this).attr('id')).css('left'));
					top_position = parseInt($('#' + $(this).attr('id')).css('top'));
				} 
			} else {
				left_position = ($(window).width()/2)-(settings.width/2);
				top_position = ($(window).height()/2)-(settings.height/2);
			}
						
			$(this).css('background-color', settings.bgcolor)
				.css('box-shadow', "2px 2px 6px " + settings.boxshadow)
				.css('height', settings.height + "px")
				.css('width', settings.width + "px")
				.css('cursor', settings.cursor)
				.css('left', left_position + "px")
				.css('top',  top_position + "px");
			
			
			if(typeof(action) == "undefined") {
				return this;
			} else {
				$(this).simplePopup(action);
			}	
        },

        open: function() {  
			$(this).show();
			
			return this;
	  	},
	
        close: function() { 
			$(this).hide();
			
			return this;
	 	},
	
        destroy: function() { 
			$(this).remove();
			
			return this;
	 	},
	
		moveToTop: function() { 
			$('.simplePopupContainer').removeClass('simplePopupOnTop').css('z-index', '777777');
			$(this).addClass('simplePopupOnTop').css('z-index', '999999');
			
			return this;
	 	},

        closeAll: function() { 
			$('.simplePopupContainer').hide();

			return this;
	 	},

        openAll: function() { 
			$('.simplePopupContainer').show();

			return this;
	 	}
	};
	
	
	$.fn.simplePopup = function(methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
			return methods.init.apply(this, arguments);
		} else {
			$.error( 'Il metodo ' +  methodOrOptions + ' non esiste in simplePopup!' );
		}
	};
}( jQuery ));