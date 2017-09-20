$(function(){
	$("#kind").tap(function(){
		$(".mask").show();
		$('body').css('overflow','hidden');
		$('.menu').animate({bottom:"0rem"},'fast');
	})
	$('.menu footer').tap(function(){
		$(".mask").hide();
		$('body').css('overflow','auto');
		$('.menu').animate({bottom:"-6rem"},'fast');
	})
})
