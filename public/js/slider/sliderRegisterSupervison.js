jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
	$('#scale .jquery-slider').slider({
		range: false,
		value: $('#scale .content .num').value,
		min: 0,
		max: 6,
		step: 0.5,
		range: "min",
		slide: function (event, ui) {
			if (ui.value < 0)
				return false;
			var value = ui.value;
			$("#scale .slider-info .num").html(value);
		}
	});

});