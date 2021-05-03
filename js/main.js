
/*---------SLICK-SLIDER------------*/
// $(function(){
//     $('.container').slick({

//     })

// })
/*---------SLICK-SLIDER------------*/

/*---------BURGER------------*/
$(".menu-burger").click(function(){
  $(".menu-burger,.mobile-menu").toggleClass("active");
      $('html').toggleClass('no-scroll');
      $('.menu__item').click(function(){
        $('html').removeClass('no-scroll');
        $(".menu-burger,.mobile-menu").removeClass("active");
      })
});
/*---------BURGER------------*/

/*---------POPUP------------*/
$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
  });
  
  $('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
  });
  $('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup-inner").length) {
      $('.popup-bg').fadeOut(600);
      $('html').removeClass('no-scroll');
    }
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-bg').fadeOut(600);
      $('html').removeClass('no-scroll');
    }
    
  });
/*---------POPUP------------*/

//**************FORM**************//
// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});

//**************FORM**************//









