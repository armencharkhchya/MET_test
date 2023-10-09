/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
jQuery(document).on('ready', function() {
	"use strict";
	$('.nav-item').on('click', function () {
		$(this).closest('ul').find('li').removeClass('active');
		$(this).addClass('active')
	})
	$('.owl-carousel').owlCarousel({
		center: true,
		loop:true,
		margin:10,
		nav: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	})
	$('.owl-dot').each(function () {
		if ($(this).index()+1 < 10) {
			$(this).children('span').text('0'.concat( $(this).index()+1));
		} else {
			$(this).children('span').text($(this).index()+1);
		}
		
	});
});