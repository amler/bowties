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




/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=b099ebb81437d8d15dc6)
 * Config saved to config.json and https://gist.github.com/b099ebb81437d8d15dc6
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(o){"use strict";function t(t){t&&3===t.which||(o(n).remove(),o(d).each(function(){var r=e(o(this)),n={relatedTarget:this};r.hasClass("open")&&(r.trigger(t=o.Event("hide.bs.dropdown",n)),t.isDefaultPrevented()||r.removeClass("open").trigger("hidden.bs.dropdown",n))}))}function e(t){var e=t.attr("data-target");e||(e=t.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var r=e&&o(e);return r&&r.length?r:t.parent()}function r(t){return this.each(function(){var e=o(this),r=e.data("bs.dropdown");r||e.data("bs.dropdown",r=new i(this)),"string"==typeof t&&r[t].call(e)})}var n=".dropdown-backdrop",d='[data-toggle="dropdown"]',i=function(t){o(t).on("click.bs.dropdown",this.toggle)};i.VERSION="3.2.0",i.prototype.toggle=function(r){var n=o(this);if(!n.is(".disabled, :disabled")){var d=e(n),i=d.hasClass("open");if(t(),!i){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&o('<div class="dropdown-backdrop"/>').insertAfter(o(this)).on("click",t);var a={relatedTarget:this};if(d.trigger(r=o.Event("show.bs.dropdown",a)),r.isDefaultPrevented())return;n.trigger("focus"),d.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},i.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var r=o(this);if(t.preventDefault(),t.stopPropagation(),!r.is(".disabled, :disabled")){var n=e(r),i=n.hasClass("open");if(!i||i&&27==t.keyCode)return 27==t.which&&n.find(d).trigger("focus"),r.trigger("click");var a=" li:not(.divider):visible a",s=n.find('[role="menu"]'+a+', [role="listbox"]'+a);if(s.length){var p=s.index(s.filter(":focus"));38==t.keyCode&&p>0&&p--,40==t.keyCode&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var a=o.fn.dropdown;o.fn.dropdown=r,o.fn.dropdown.Constructor=i,o.fn.dropdown.noConflict=function(){return o.fn.dropdown=a,this},o(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",d,i.prototype.toggle).on("keydown.bs.dropdown.data-api",d+', [role="menu"], [role="listbox"]',i.prototype.keydown)}(jQuery);