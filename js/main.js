/* JS for extempra.com */

$(document).ready(function() {

  // initialize parallax scroll
  // parallaxScroll.init();

  $(window).resize(function() {
    bindNavbar();
  });

  bindNavbar();
});

function bindNavbar() {
  if ($(window).width() > 768) {
    $('.extempra-nav .dropdown').on('mouseover', function(){
      $('.dropdown-toggle', this).next('.dropdown-menu').show();
    }).on('mouseout', function(){
      $('.dropdown-toggle', this).next('.dropdown-menu').hide();
    });
  }
  else {
    $('.extempra-nav .dropdown').off('mouseover').off('mouseout');
  }
}
