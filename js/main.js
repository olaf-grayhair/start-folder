
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

/*---------MAIL------------*/
jQuery(document).ready(function () {
     
  $(".phone").mask("+380 (99) 999-99-99"); 
 

 jQuery('.send-form').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 //form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });


});
/*---------MAIL------------*/









