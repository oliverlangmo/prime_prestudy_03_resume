$(document).ready(function(){
	$('#ta-da').on('click', function(){
		$("#container").slideDown();
		$("#ta-da").hide();
	});
	$('.close').on('click', function(){
		$('#container').hide();
		$('#ta-da').show();
	});
});