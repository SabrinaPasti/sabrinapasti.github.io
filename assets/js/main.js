$(document).ready(function(){

  // header

  $(window).on('scroll', function() {
  
    if ($(window).scrollTop() == 0){
      $('.header').toggleClass('header__top');
    } 
    else if($(window).scrollTop() > 0){
      $('.header').removeClass('header__top');

    }

  })

    $('.header__search').click(function(){
        $(this).toggleClass('active')
        $('.a-search').toggleClass('active')
    })

  //header mobile

  $('.m-show-modal').on('click', function() {
    $('.a-navMobile__modal').addClass('modal-open');
  })

  $('.m-close-modal').on('click', function() {
      $('.a-navMobile__modal').removeClass('modal-open');
  })


  // modal 

  $('.show-modal').on('click', function() {
      $('.modal-overlay').addClass('modal-open');
  })

  $('.close-modal').on('click', function() {
      $('.modal-overlay').removeClass('modal-open');
  })

  //hab

  $(".habilidades__slide").slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '.left',
    nextArrow: '.right',

    responsive: [
      {
        breakpoint: 1200,
          settings: {
            slidesToShow: 6
          }
      }
      ,
      {
        breakpoint: 850,
          settings: {
            slidesToShow: 4
          }
      }
      ,
      {
        breakpoint: 500,
          settings: {
            slidesToShow: 2
          }
      }

    ]
  })

  //exp
  $('.experiencias__item').on('click', function() {
    $(this).children('.experiencias__content').toggleClass('show');
  })

  $('.plus').on('click', function() {
    $(this).toggleClass('rotate');
  })


    
})


