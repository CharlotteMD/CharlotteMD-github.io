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

  const $aboutLink = $('#about');
  const $projectLink = $('#projects');
  const $skillsLink = $('#skills');
  const $cvLink = $('#cv');
  const $interestsLink = $('#interests');
  const $contactLink = $('#contact');

  const $aboutSection = $('#about-section');
  const $projectSection = $('#project-section');
  const $skillsSection = $('#skills-section');
  const $cvSection = $('#cv-section');
  const $interestsSection = $('#interests-section');
  const $contactSection = $('#contact-section');

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
    $navbar.toggleClass('navbar-pink');
    $intro.toggleClass('intro-pink');
    $about.toggleClass('about-pink');
    $projects.toggleClass('projects-pink');
    $skills.toggleClass('skills-pink');
    $cv.toggleClass('cv-pink');
    $interests.toggleClass('interests-pink');
    $contact.toggleClass('contact-pink');
  });

  $aboutLink.click(() => {
    $('html, body').animate({
      scrollTop: $aboutSection.offset().top
    }, 1000);
  });

  $projectLink.click(() => {
    $('html, body').animate({
      scrollTop: $projectSection.offset().top
    }, 1000);
  });

  $skillsLink.click(() => {
    $('html, body').animate({
      scrollTop: $skillsSection.offset().top
    }, 1000);
  });

  $cvLink.click(() => {
    $('html, body').animate({
      scrollTop: $cvSection.offset().top
    }, 1000);
  });

  $interestsLink.click(() => {
    $('html, body').animate({
      scrollTop: $interestsSection.offset().top
    }, 1000);
  });

  $contactLink.click(() => {
    $('html, body').animate({
      scrollTop: $contactSection.offset().top
    }, 1000);
  });

});
