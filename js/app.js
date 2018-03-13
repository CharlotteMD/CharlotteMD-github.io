console.log('working');
console.log('ready');



$(() => {

  const $theme = $('.theme');
  const $navbar = $('.navbar');
  const $intro = $('.intro');
  const $about = $('.about');
  const $projects = $('.projects');
  const $skills = $('.skills');
  const $cv = $('.cv');
  const $interests = $('.interests');
  const $contact = $('.contact');


  $('#fullpage').fullpage();

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

  $theme.click(function() {
    $navbar.toggleClass('navbar-pink')
    $intro.toggleClass('intro-pink');
    $about.toggleClass('about-pink');
    $projects.toggleClass('projects-pink');
    $skills.toggleClass('skills-pink');
    $cv.toggleClass('cv-pink');
    $interests.toggleClass('interests-pink');
    $contact.toggleClass('contact-pink');
  });

});
