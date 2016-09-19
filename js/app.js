$(document).foundation();

// Mobile Menu
var menuToggle = function() {
    $('.menu-trigger').on('click', function() {
        $('nav ul').slideToggle('200');
    });
};

// Run menuToggle on Load
menuToggle();
// Run menuToggle on Resize
$(window).on('resize', function() {
    if (Foundation.MediaQuery.atLeast('medium')) {
        $('nav ul').css('display', 'block');
    } else {
        $('nav ul').css('display', 'none');
    }
});
