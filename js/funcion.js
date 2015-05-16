$(function() {
	$('#menu').on('click', function(){
		$(".menu").slideToggle();
	})
	 if ($(window).width() >= 768 ){
	 	$('ul').removeClass('list-group');
	 	$('a').removeClass('list-group-item');
	 }


});