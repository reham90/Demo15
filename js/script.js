$(window).on('load', function() {
  $(".preloader").hide();
});
$(document).ready(function() {
  new WOW().init();



  //phone size menu onclick
  if ($(window).width() <= 991) {

      $(".menu-id").click(function(e) {
          e.preventDefault();

          $(".navgition").toggleClass("reset-left");

          $("body").toggleClass("overflow");


      });

    
  }

  //fixed nav
  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      var $stickyNav = $(".top-header");
      var $stickyHeader = $("header");
      var windowWidth = $(window).width();
      // Handle fixed navigation
      $stickyNav.toggleClass("fixed-nav", scroll >= 200);
      // Handle fixed header
      if (lastScroll - scroll > 0 || (lastScroll - scroll >= 0 && windowWidth <= 991)) {
          $stickyHeader.addClass("fixed-header");
          $('.search-content').removeClass('height-when-close', 1000);
      }

      if (scroll === 0) {
          $stickyNav.removeClass("fixed-header");
          $stickyHeader.removeClass("fixed-header");
          $('.search-content').addClass('height-when-close', 500);
          $('.search-content').removeClass('height-when-open', 500);
          $('.search-btn').removeClass('close-search');
      }
      if (lastScroll - scroll < 0) {
          $stickyNav.removeClass("fixed-header");
          $stickyHeader.removeClass("fixed-header");
      }
      lastScroll = scroll;
  });

  var lastScroll = 0;



  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1000
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  });

  


 

  ///////// **offers-section** /////////

  var offers = new Swiper(".offers-slider .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
          el: ".offers-slider .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".offers-slider .swiper-btn-next",
          prevEl: ".offers-slider .swiper-btn-prev",
      },
      breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
  });



  ///////// **new-arrivals-section** /////////

  var newArrivals = new Swiper(".new-arrivals-slider .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
          el: ".new-arrivals-slider .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".new-arrivals-slider .swiper-btn-next",
          prevEl: ".new-arrivals-slider .swiper-btn-prev",
      },
      breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
      },
  });


  
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 991) {
      $(".footer-accordion").click(function() {
          var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
          $(".footer-accordion").not(this).removeClass("active");
          $(this).toggleClass("active");
          if ($(this).siblings().css("max-height") == "0px") {
              $(this).siblings().css("max-height", x);
              $(this).siblings(".nav-foot").css("padding-top", "15px");
          } else {
              $(this).siblings().css("max-height", "0");
              $(this).siblings(".nav-foot").css("padding-top", "0");
          }


      });
  };
});