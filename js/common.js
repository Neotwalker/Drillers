$(function() {

	$("#phone_1, #phone_2").mask("+7 (999) 999-9999");

	$('.info_1').hover( function(){
		$('.info-1').toggleClass('active')
	});
	$('.info_2').hover( function(){
		$('.info-2').toggleClass('active')
	});
	$('.info_3').hover( function(){
		$('.info-3').toggleClass('active')
	});
	$('.info_4').hover( function(){
		$('.info-4').toggleClass('active')
	});
	$('.info_5').hover( function(){
		$('.info-5').toggleClass('active')
	});
	$('.info_6').hover( function(){
		$('.info-6').toggleClass('active')
	});
	$('.info_7').hover( function(){
		$('.info-7').toggleClass('active')
	});
	$('.info_8').hover( function(){
		$('.info-8').toggleClass('active')
	});

	let container = $(".modal--wrapper");
	let body = $(".modal");
	$(".open").click(function(e) {
		e.preventDefault();
		$("body").css('overflow-y', 'hidden');
		body.toggleClass('modal--open');
		body.toggleClass("overlay");
	});
	
	$(document).mouseup(function (e) {
    if (container.has(e.target).length === 0){
			$("body").css('overflow-y', 'scroll');
      body.removeClass('modal--open');
			body.removeClass("overlay");
    }
  });

});
