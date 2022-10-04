$(document).ready(function(){

    // slider
    var swiper = new Swiper(".take_testimoal_slider .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 7,
        freeMode: true,
        speed:500,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".take_testimoal_slider .mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        speed:1000,
        thumbs: {
          swiper: swiper,
        },
      });

    //   counter

    if ($('.take_future_box').length > 0) {
        $('.take_future_box').appear(function() {
            $('.take_countto').countTo();
        });
    }
    // toggle
    $('.take_header .take_toggle').on('click', function(){
       $(this).parent().toggleClass('open');
    })
    $('.take_close').on('click', function(){
       $(this).closest('.take_header').removeClass('open');
    })
    $('.take_topheader_inner .take_toggle').on('click', function(){
      $(this).closest('.take_admin_main_wrapper').find('.take_sidebar_wrapper').toggleClass('open');
   })
    $('.take_topheader_inner .take_search_wrapper>span>img').on('click', function(){
      $(this).closest('.take_topheader_inner').find('.take_search_wrapper').toggleClass('open');
   })

    // step js
    $('.take_next').on('click',function(){
      var target = $(this).closest('.take_step_wrapper').find('.take_step_body_wrapper>div').not($('.take_step_body_wrapper>div').hasClass('d-none'));

      // if(target != ''){
      //   if(target == 'step1'){
      //     $('.take_step_body_wrapper>div').addClass('d-none');
      //     $('.take_step_body_wrapper>div[data-target="step2"]').removeClass('d-none');
      //   }
      // }
    });


    // toggle
    $('.take_user_wrapper>span').on('click',function(){
       $(this).parent().toggleClass('active');
    });

  
})

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
     $('.take_header').addClass('fixheader');
  } else {
     $('.take_header').removeClass('fixheader');
  }
});

$(window).on('load',function(){
  var w_width = $( window ).width();
  // alert(w_width);

  if(w_width < 485){
    console.log(w_width);
    $('.take_header').addClass('with_toggle');
  }
})