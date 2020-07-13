/* $(document).ready(function(){
    $('.carusel__slider').slick({
        speed: 2200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><img src="../img/third_window/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/third_window/right.png"></button>'
      });
  }); */

  const slider = tns({
    container: '.carusel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false
  });
  document.querySelector('.slick-prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.slick-next').onclick = function () {
    slider.goTo('next');
  };
  $(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

   /*  $('.catalog-item__link').each(function(i){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
      })
    });

    $('.catalog-item__back').each(function(i){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
      })
    }); */

    function chenger (ithem){
      $(ithem).each(function(i){
        $(this).on('click',function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
        })
      });
    };

     chenger ('.catalog-item__link');
     chenger ('.catalog-item__back');


     //Modal

     $('[data-modal=consultation]').on('click',function(){
        $('.overlay,#consultation').fadeIn('slow');
     });
     $('.modal__close').on('click',function(){
        $('.overlay,#consultation,#thanks,#order').fadeOut('slow');
     });

    /*  $('.button__mini').on('click',function(){
      $('.overlay,#order').fadeIn('slow');
     }); */

     $('.button__mini').each(function(i){
      $(this).on('click',function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay,#order').fadeIn('slow');
       });
     });

     validateForms('#consultation form');
     validateForms('#order form');
     validateForms('#consultation-form');
     $('input[name="phone"]').mask("+380(999) 999-9999");
     /* $('.feed_form').validate(); */
     /* $('#consultation form').validate();
     $('#order form').validate({
      
        rules: {
          name: {
            required: true,
            minlength: 2
        },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true,
            minlength: 6
        }
        },
        messages: {
          name: {
            required: "Введи погоняло індик",
            minlength: jQuery.validator.format("клоун тре мінімум {0} букви")
          },
          phone:{
            required: "Введи номер мудило",
            minlength: jQuery.validator.format("салабон в тебе шо домашній тре мінімум {0} цифр")
          },
          email: {
            required: "Введи мило лосю!",
            email: "Ти тупий це не мило от - name@domain.com"
          }
        }
      
     });
     $('#consultation-form').validate(); */
     
function validateForms(form){
  
  $(form).validate({
      
    rules: {
      name: {
        required: true,
        minlength: 2
    },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 6
    }
    },
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: jQuery.validator.format("надо минимум {0} буквы")
      },
      phone:{
        required: "Введи номер телефона",
        minlength: jQuery.validator.format("надо минимум {0} цифры")
      },
      email: {
        required: "Введи свой email!",
        email: "Приер - name@domain.com"
      }
    }
  
 });
};


$('form').submit(function(e){
  e.preventDefault(); //відміна стандартної поведінки браузера
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");
    $('#consultation , #order').fadeOut('slow');
    $('.overlay,#thanks').fadeIn('slow');


    $('form').trigger('reset');
  });
  return false;
});

$(window).scroll(function(){
  if($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn('slow');
  }else{
    $('.pageup').fadeOut('slow');
  }
});

$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});


  }); 
  new WOW().init();