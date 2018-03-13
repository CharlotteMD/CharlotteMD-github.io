console.log('working');
console.log('ready');



$(() => {
  $('#fullpage').fullpage();

  $('.slider-for').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});



// $(document).ready(function(){
//
// });
