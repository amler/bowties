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

var Shopify = Shopify || {};

Shopify.optionsMap = {};

Shopify.updateOptionsInSelector = function(selectorIndex) {
	switch (selectorIndex) {
		case 0:
			var key = 'root';
			var selector = $('.single-option-selector:eq(0)');
			break;
		case 1:
			var key = $('.single-option-selector:eq(0)').val();
			var selector = $('.single-option-selector:eq(1)');
			break;
		case 2:
			var key = $('.single-option-selector:eq(0)').val();  
			key += ' / ' + $('.single-option-selector:eq(1)').val();
			var selector = $('.single-option-selector:eq(2)');
	}
	
	var initialValue = selector.val();
	selector.empty();	
	var availableOptions = Shopify.optionsMap[key];
	for (var i=0; i<availableOptions.length; i++) {
		var option = availableOptions[i];
		var newOption = $('<option></option>').val(option).html(option);
		selector.append(newOption);
	}
	$('.swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
		if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
			$(this).removeClass('soldout').show().find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
		} else {
			$(this).addClass('soldout').hide().find(':radio').removeAttr('checked').attr('disabled','disabled');
		}
	});
	if ($.inArray(initialValue, availableOptions) !== -1) {
		selector.val(initialValue);
	}
	selector.trigger('change');
};

Shopify.linkOptionSelectors = function(product) {
	// Building our mapping object.
	for (var i=0; i<product.variants.length; i++) {
		var variant = product.variants[i];
		if (variant.available) {
			// Gathering values for the 1st drop-down.
			Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
			Shopify.optionsMap['root'].push(variant.option1);
			Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
			// Gathering values for the 2nd drop-down.
			if (product.options.length > 1) {
				var key = variant.option1;
				Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
				Shopify.optionsMap[key].push(variant.option2);
				Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
			}
			// Gathering values for the 3rd drop-down.
			if (product.options.length === 3) {
				var key = variant.option1 + ' / ' + variant.option2;
				Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
				Shopify.optionsMap[key].push(variant.option3);
				Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
			}
		}
	}
	// Update options right away.
	Shopify.updateOptionsInSelector(0);
	if (product.options.length > 1) Shopify.updateOptionsInSelector(1);
	if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
	// When there is an update in the first dropdown.
	$(".single-option-selector:eq(0)").change(function() {
		Shopify.updateOptionsInSelector(1);
		if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
		return true;
	});
	// When there is an update in the second dropdown.
	$(".single-option-selector:eq(1)").change(function() {
		if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
		return true;
	});
};