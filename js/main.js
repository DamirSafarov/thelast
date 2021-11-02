




// .toggleClass('header-fixed_burger--current')

$(function(){


$('.header-burger').on('click',function(){
  $('.header-fixed_burger').slideToggle(500,'linear');
})

$('.header-burger').on('click',function(){
  $('html').toggleClass('lock');
})


  $('.doctor__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
    dots:true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.certificate__slider').slick({
    speed: 500,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
});


$('.rewiews__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
    speed: 500,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
});





$('.the-news__slider').slick({
    speed: 500,
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
});




$("#phone").mask("+7(999) 999-9999");
$("#phone2").mask("+7(999) 999-9999");




$(window).scroll(function(){
    if($(this).scrollTop() > 1200) {
        $('.scroll-page_btn').fadeIn();
    } else {
        $('.scroll-page_btn').fadeOut();
    }
});


$("a[href^='#header']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});



$(".dropbtn").on("click", function () {
  $(".dropdown-content").removeClass("show");
  $(this).next().toggleClass("show");
  $(this).children(".drop-btn_arrow").toggleClass('arrow-lock');
});



  
     // Close the dropdown if the user clicks outside of it
     window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  

});




