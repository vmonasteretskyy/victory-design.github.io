$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots:false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        dots:false,
        initialSlide: 1,
        arrows: false
    });

});
$(document).ready(function () {
    // burger
    var wrapperMenu = document.querySelector('.wrapper1');
    wrapperMenu.addEventListener('click', function () {
      wrapperMenu.classList.toggle('open');
    });
    // phone menu
    $('.wrapper1').click(function () {
      $('.col-lg-8.col-md-8.phone-hide').toggle();
      $('body').toggleClass('overhidd');
    });
  
  
    
  });