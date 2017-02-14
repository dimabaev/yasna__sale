$(function() {
	$('.callme_button').jbcallme({
		fields: {
			list: {
				placeholder: "Удобное время звонка",
				type: "select",
				options: [
					"с 9 до 12",
					"с 12 до 15",
					"с 15 до 18"
				]
			}
		},
		success: "Спасибо. Сотрудник компании ЯСНА в ближайшее время вам перезвонит и ответит на ваши вопросы.", 
	});
	$('.welcome_block_link').click(function() {
		if ($('.welcome_block_text').hasClass('active')) {
			$(this).prev('.welcome_block_text').css('height','53px');
			$('.welcome_block_text').removeClass('active');
		} else {
			$(this).prev('.welcome_block_text').css('height','auto');
			$('.welcome_block_text').addClass('active');
		}
	});
	
	$('#column-left .box_menu2.column ul li a:contains("Новости")').parent().css('display','none');
	$('#column-left .box_menu2.column ul li a:contains("Наши советы")').parent().css('display','none');
	$('#column-left .box_menu2.column ul li a.active').parent().parent().parent().css('display','block').prev().addClass('h3_active').parent('.box_menu2').addClass('box_menu2_active');
	
	$('#column-left .box_menu2.column h3').click(function() {
		$(this).addClass('h3_active');
		$(this).next('.box-amenu').slideDown();
		$(this).parent('.box_menu2').addClass('box_menu2_active');
		$(this).parent('.box_menu2').siblings('.box_menu2').find('h3').removeClass('h3_active').next('.box-amenu').slideUp();
	});
	
	$('#welcome_right div b').click(function() {
		$(this).next('div').slideToggle();
	});

	$('.review_stars div').click(function() {
		num_div=$(this).index();
		if (num_div==0) {
			$(this).addClass('active_rev');
			$('.review_stars div:nth-child(2)').removeClass('active_rev');
			$('.review_stars div:nth-child(3)').removeClass('active_rev');
			$('.review_stars div:nth-child(4)').removeClass('active_rev');
			$('.review_stars div:nth-child(5)').removeClass('active_rev');
		}
		if (num_div==1) {
			$('.review_stars div:nth-child(1)').addClass('active_rev');
			$('.review_stars div:nth-child(2)').addClass('active_rev');
			$('.review_stars div:nth-child(3)').removeClass('active_rev');
			$('.review_stars div:nth-child(4)').removeClass('active_rev');
			$('.review_stars div:nth-child(5)').removeClass('active_rev');
		}
		if (num_div==2) {
			$('.review_stars div:nth-child(1)').addClass('active_rev');
			$('.review_stars div:nth-child(2)').addClass('active_rev');
			$('.review_stars div:nth-child(3)').addClass('active_rev');
			$('.review_stars div:nth-child(4)').removeClass('active_rev');
			$('.review_stars div:nth-child(5)').removeClass('active_rev');
		}
		if (num_div==3) {
			$('.review_stars div:nth-child(1)').addClass('active_rev');
			$('.review_stars div:nth-child(2)').addClass('active_rev');
			$('.review_stars div:nth-child(3)').addClass('active_rev');
			$('.review_stars div:nth-child(4)').addClass('active_rev');
			$('.review_stars div:nth-child(5)').removeClass('active_rev');
		}
		if (num_div==4) {
			$('.review_stars div:nth-child(1)').addClass('active_rev');
			$('.review_stars div:nth-child(2)').addClass('active_rev');
			$('.review_stars div:nth-child(3)').addClass('active_rev');
			$('.review_stars div:nth-child(4)').addClass('active_rev');
			$('.review_stars div:nth-child(5)').addClass('active_rev');
		}
		$('.review_stars_input input').eq(num_div).trigger( "click" );
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 196) {
			$("nav").addClass('fix');
			$("header").addClass('fix_help');
			$("#cart").addClass('fix_cart');
		} else {
			$("nav").removeClass('fix');
			$("header").removeClass('fix_help');
			$("#cart").removeClass('fix_cart');
		}
	});
	
	$('.adaptive_menu').click(function () {
		$(this).next('ul.top_category_ul').slideToggle();
	});

	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$(".fancybox").fancybox({
		title: null
	});
	
});