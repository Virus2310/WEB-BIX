$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    dots: true,
    margin: 10,
    pagination: true,
    smartSpeed: 1000, 

    responsive:{
      0:{
          items:1
          // nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:2,
          // nav:true,
          loop:false
      }
  }

  });

  

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('#next').click(function () {
    owl.trigger('next.owl.carousel');
  })
 
  $('#prev').click(function () {
  
    owl.trigger('prev.owl.carousel', [300]);
  })

  


});


$(document).ready(function () { 
  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.nav').toggleClass('nav_active');
  });
});











