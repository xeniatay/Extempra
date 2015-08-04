/***
 * Parallax scrolling plugin
 * Written by: Xenia Tay, April 2014
 * Requires: jQuery, UnderscoreJS
 */

 /***
  * Finds all elements with class '.parallax-scroll'
  * Shifts background position of element during scroll to achieve parallax effect
  * Disabled for mobile screens (<767px)
 */
 var parallaxScroll = ( function() {

  var MOBILE = 767;

  var paraObjs,
      isMobile;

  var init = function() {

    isMobile = ( $(window).width() < MOBILE );
    paraObjs = $('.parallax-scroll');

    /* If viewport is mobile, deactivate parallax */
    // TODO clean this up
    if (isMobile) {
      _.each( paraObjs, function(paraObj) {
        $(paraObj).css({
          backgroundPosition: '0 0',
          backgroundAttachment: 'scroll'
        });
      });
    } else {
      _.each( paraObjs, function(paraObj) {
        $(paraObj).css({
          backgroundPosition: '50% 0',
          backgroundAttachment: 'fixed'
        });
      });
    }

    initEvents();

  },

  initEvents = function() {

    $(window).scroll( onScroll );
    $(window).resize( _.debounce( onResize, 100 ) );

  },

  /* Activate or deactivate parallax based on screen size */
  onResize = function() {

    if ( $(window).width() < MOBILE ) {
      isMobile = true;
      _.each( paraObjs, function(paraObj) {
        $(paraObj).css({
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll'
        });
      });
      paraObjs = null;
    } else {
      isMobile = false;
      paraObjs = $('.parallax-scroll');
    }

  },

  /* Execute parallax effect */
  onScroll = function() {

    if (!isMobile) {

      _.each( paraObjs, function(paraObj) {

        // TODO if user is scrolled past elem, do not execute parallax
        var curScrollTop = $(window).scrollTop(),
            parallaxSpeed = $(paraObj).data('parallax-speed') || 5,
            yPos = -( ( curScrollTop - paraObj.offsetTop )  / parallaxSpeed ),
            coords = '50% ' + yPos + 'px';

        $(paraObj).css({
          backgroundPosition: coords,
          backgroundAttachment: 'fixed'
        });

      });

    }

  };

  return {
    init: init
  }

})();