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

	let mobile_wrapper = $(".menu");
	let mobile_body = $(".header--mobile");
	$(".burger").click(function() {
		mobile_wrapper.toggleClass('menu--open');
		$("body").css('overflow-y', 'hidden');
		mobile_body.toggleClass("overlay");
	});
	$('.menu--close').click(function() {
    mobile_wrapper.removeClass('menu--open');
		$("body").css('overflow-y', 'scroll');
		mobile_body.removeClass("overlay");
	});

	let container = $(".modal--wrapper");
	let body = $(".modal");
	$(".open").click(function(e) {
		e.preventDefault();
		$("body").css('overflow-y', 'hidden');
		body.fadeIn(500).toggleClass('modal--open');
		body.fadeIn(500).toggleClass("overlay");
	});
	
	$(document).mouseup(function (e) {
    if (container.has(e.target).length === 0){
			$("body").css('overflow-y', 'scroll');
      body.fadeOut(0).removeClass('modal--open');
			body.fadeOut(900).removeClass("overlay");
    }
  });

	let container_1 = $(".modal--wrapper");
	let body_1 = $(".modal_1");
	$(".open_1").click(function(e) {
		e.preventDefault();
		$("body").css('overflow-y', 'hidden');
		body_1.fadeIn(500).toggleClass('modal--open');
		body_1.fadeIn(500).toggleClass("overlay");
	});
	$(document).mouseup(function (e) {
    if (container_1.has(e.target).length === 0){
			$("body").css('overflow-y', 'scroll');
      body_1.fadeOut(0).removeClass('modal--open');
			body_1.fadeOut(900).removeClass("overlay");
    }
  });

	$("#reestr_content").searcher({
		itemSelector: ".reestr_item",
		textSelector: "td",
		inputSelector: "#reestr_search",
		toggle: function(item, containsText) {
				if (containsText){
						$(item).fadeIn(100);
				} else {
						$(item).fadeOut(100);
				 }
		}
	});

	$.fn.numericFlexboxSorting = function(options) {
		const settings = $.extend({
			elToSort: ".reestr .reestr_item"
		}, options);

		const $select = this;
		const ascOrder = (a, b) => a - b;
		const descOrder = (a, b) => b - a;

		$select.on("change", () => {
			const selectedOption = $select.find("option:selected").attr("data-sort");
			sortColumns(settings.elToSort, selectedOption);
		});

		function sortColumns(el, opt) {
			const attr = "data-" + opt.split(":")[0];
			const sortMethod = (opt.includes("asc")) ? ascOrder : descOrder;
			const sign = (opt.includes("asc")) ? "" : "-";

			const sortArray = $(el).map((i, el) => $(el).attr(attr)).sort(sortMethod);

			for (let i = 0; i < sortArray.length; i++) {
				$(el).filter(`[${attr}="${sortArray[i]}"]`).css("order", sign + sortArray[i]);
			}
		}

		return $select;
	};
	$("#filter").numericFlexboxSorting();

	Fancybox.bind('[data-fancybox="gallery"]', {
		Image: {
			zoom: true,
		},
		hideScrollbar: true,
	});


});
