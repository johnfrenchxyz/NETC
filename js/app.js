$(document).foundation();

// Mobile Menu
var menuToggle = function() {
    if (Foundation.MediaQuery.current === 'small' ) {
        $('.menu-trigger').siblings().hide();
        $('.menu-trigger').on('click', function() {
            $(this).siblings().slideToggle("fast");
        });
    } else {
        $('.menu-trigger').siblings().show();
        $('nav ul li').css('display', 'inline');
    }
};

// Run menuToggle on Load
menuToggle();
// Run menuToggle on Resize
$(window).on('resize', function() {
    menuToggle();
});
