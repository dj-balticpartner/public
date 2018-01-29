$(document).ready(function(){	
		
	$(".topIconFigure, .user-popup").mouseenter(function () {
		$(".user-popup").slideDown('slow');
	});
	
	$(".topIconFigure, .user-popup").mouseleave(function () {
		$(".user-popup").slideUp('slow');
	});
	
	
	$("ul.lvl_1 li.lvl_1").click(function () {		
		$(this).children("ul.lvl_2").slideToggle('slow');
	});
	
	$("ul.lvl_2").mouseleave(function () {
		$(this).slideUp('slow');
	});
	
});
	
	
	