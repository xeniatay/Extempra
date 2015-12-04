/*
  Smooth Scrolling plugin
  Written by: Xenia Tay, April 2014
*/

/*
  Detects all anchor links that jumps to a tag on the same page
  Adds animated smooth scroll to the link
  Usage: add attribute "data-smoothscroll='true'" to any anchor link to enable smooth scrolling
*/
(function() {
  $('a[href*=#]:not([href=#])').click(function() {

    // prevents inteference with bootstrap's JS plugins
    if ( $(this).attr('data-toggle') || !$(this).attr('data-smoothscroll') ) {
      return;
    }

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var navbar = $('#site-header .navbar'),
            navHeight = navbar.length ? navbar.height() : 0;

        $('html,body').animate({
          scrollTop: target.offset().top - navHeight
        }, 1000);
        return false;
      }
    }
  });
})();
