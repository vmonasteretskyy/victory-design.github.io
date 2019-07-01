$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    dots: false,
    initialSlide: 1,
    arrows: false
  });

});
$(document).ready(function () {
  // wow js
  new WOW().init();
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


  // style open slider
  $('.styleopen-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $('.portfolio-open-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: false,
    dots: false
    // autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   }
    // ]
  });
});

// map

function initMap() {

  var lat1 = 49.5602927;
  var lng1 = 25.6168999;

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: lat1, lng: lng1
    }
    , zoom: 17, panControl: !1, zoomControl: !1, scaleControl: !1, disableDefaultUI: !0, styles: [

    ]
  }
  )
  var icons = {
    info: {
      icon: 'images/map-marker.svg',
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(49.5602927, 25.6168999),
      type: 'info'
    }
  ];
  // Create markers.
  features.forEach(function (feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}