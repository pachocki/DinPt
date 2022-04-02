
// Menu 
function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var banner = document.querySelector('.banner');
  menuToggle.classList.toggle('active');
  banner.classList.toggle('active');
}
  // Back to top button
$(window).scroll(function () {
if ($(this).scrollTop() > 2250) {
    $('.back-to-top').fadeIn('slow');
} else {
    $('.back-to-top').fadeOut('slow');
}
});
$('.back-to-top').click(function () {
$('html, body').animate({scrollTop: 0}, 50, 'easeInOutExpo');
return false;
});

