$(document).ready(function() {
  /*
  * ----------------------------------------------------------------------------------------
  *  PARTICLE JS
  * ----------------------------------------------------------------------------------------
  */
 
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });

  /*
  * ----------------------------------------------------------------------------------------
  *  STICKY HEADER
  * ----------------------------------------------------------------------------------------
  */

  // grab the initial top offset of the navigation 
  var stickyNavTop = $('header').offset().top;
  
  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) { 
        $('header').addClass('sticky');
        $('.logo img').attr('src', './assets/img/logo-black.png');
    } else {
        $('header').removeClass('sticky'); 
        $('.logo img').attr('src', './assets/img/main-logo.png');
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });

  /*
  * ----------------------------------------------------------------------------------------
  *  SMOOTH SCROLL
  * ----------------------------------------------------------------------------------------
  */
  
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
    // $('header nav ul li a').removeClass('active');
    // event.target.classList.add('active');
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          // $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            // $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /*
  * ----------------------------------------------------------------------------------------
  *  ON SCROLL SECTION NAVIGATOR
  * ----------------------------------------------------------------------------------------
  */

  $('nav ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });

  /*
  * ----------------------------------------------------------------------------------------
  *  TINY SLIDER V2
  * ----------------------------------------------------------------------------------------
  */

  var slider = tns({
    "container": '.testimonialsHolder',
    "items": 1,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400,
    "controls": false,
    "navPosition": "bottom",
    "autoplay": true,
    "autoplayButtonOutput": false
  });

  /*
  * ----------------------------------------------------------------------------------------
  *  MY SCRIPT ON NAV
  * ----------------------------------------------------------------------------------------
  */

  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('header nav');
  var close = document.querySelector('nav .close');
  // var backdrop = document.querySelector('.backdrop');

  hamburger.addEventListener('mouseover', function(e) {
    hamburger.classList.add('hamburgerHover');
  })

  hamburger.addEventListener('mouseout', function(e) {
    hamburger.classList.remove('hamburgerHover');
  })

  hamburger.addEventListener('click', function(e) {
    nav.style.display = 'block';
    // backdrop.style.display = 'block';
  })

  close.addEventListener('click', function(e) {
    nav.style.display = 'none';
    // backdrop.style.display = 'none';
  })

  // backdrop.addEventListener('click', function(e) {
  //   nav.style.display = 'none';
  //   backdrop.style.display = 'none';
  // })

});
