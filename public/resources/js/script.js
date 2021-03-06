$(document).ready(function() {


    /* For the sticky navigation */
    $('.js--section-mission').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-mission').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-mission').offset().top}, 1000);
    });

    $('.js--scroll-to-services').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000);
    });

    $('.js--scroll-to-whoWeAre').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-whoWeAre').offset().top}, 1000);
    });

    $('.js--scroll-to-contact').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });



 /* MOBILE NAVIGATION*/
 $('.ui.accordion').accordion();
 $('.ui.dropdown').dropdown();
 $('.ui.sidebar').sidebar();

 $('.js--nav-icon').on("click", function() {
      $('.ui.sidebar').sidebar('toggle');
});

$('#moreSidebar').on("click", function() {
     $('.ui.sidebar').sidebar('toggle');
});

$('.js--nav-link-mission').click(function() {
     $('.ui.sidebar').sidebar('toggle');
});

$('.js--nav-link-services').click(function() {
     $('.ui.sidebar').sidebar('toggle');
});

$('.js--nav-link-whoWeAre').click(function() {
     $('.ui.sidebar').sidebar('toggle');
});

$('.js--nav-link-contact').click(function() {
     $('.ui.sidebar').sidebar('toggle');
});

});
