'use strict';
$(function() {
	
	// set navigation's "active" state
	var urlSegments = location.pathname.split('/');
	$('#primary-nav a').each(function() {
		var link = $(this).attr('href');
		if (urlSegments[2] !== undefined && link.indexOf(urlSegments[2]) >= 0) {
			$(this).addClass('active');
		}
	});
	$('#secondary-nav a').each(function() {
		var link = $(this).attr('href');
		if (urlSegments[3] !== undefined && link.indexOf(urlSegments[3]) >= 0) {
			$(this).addClass('active');
		}
	});
	
	// update product's type
	$('.product-detail ul li').click(function(){
		var index = $('.product-detail ul li').index(this);
		$('#product-select-option-0 option:eq('+ index + ')').prop('selected', true).trigger('change');
	});
});