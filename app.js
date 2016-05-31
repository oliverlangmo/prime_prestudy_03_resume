$(document).ready(function(){
	$('#ta-da').on('click', function(){
		$("#container").fadeIn();
		$("#ta-da").fadeOut(1500);
	});
	$('.close').on('click', function(){
		$('#container').hide();
		$('#ta-da').fadeIn(1500);
	});
});
