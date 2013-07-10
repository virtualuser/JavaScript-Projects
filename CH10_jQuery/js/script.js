//up one level
$(".module").parent().addClass('module-parent');

//up multiple levels
$("p").parents("#container").addClass("p-parent");

//down
$("#container").find(".module").addClass("container-find");

//siblings
$(".module").siblings(".module").addClass("module-siblings");

//set height of all elements with module class to 300px
$(".module").css({
	'height': '300px',
	'color': 'red'
});

//binding click event to only button in html
$('button').click(function () {
	//animate all heights of elements with class module and
	$('.module').animate({
		'height': '0px'
	}, 500, function () {
		//after animation is finished, update button text to show off
		$('button').text('now what, smart guy?');
	});
});