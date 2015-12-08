/* JS for extempra.com */

$(document).ready(function() {

  // initialize parallax scroll
  // parallaxScroll.init();

  $(window).resize(function() {
    bindNavbar();
  });

  bindNavbar();
  fixedNav();
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


function fixedNav() {
  var TOP_BAR_HEIGHT = 35,
      FIXED_NAV_OFFSET = TOP_BAR_HEIGHT + 10,
      extempraNav = $('#extempra-nav');

  $(window).scroll( function() {
    if ( $(document).scrollTop() > FIXED_NAV_OFFSET ) {
      extempraNav.addClass('navbar-fixed-top');
    } else {
      extempraNav.removeClass('navbar-fixed-top');
    }
  })
}