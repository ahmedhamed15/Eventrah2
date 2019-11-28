$(window).scroll(function() {
    if($(this).scrollTop() > 800) {
        $('.scroll-top-button').css('right', '20px');
    } else {
        $('.scroll-top-button').css('right', '-200px');
    }
});

$('.scroll-top-button').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$('.eventrah-body, .services, .registeration-links, .login-page, .register-page, .management-links').css('minHeight', ($(window).height() - ($('.navbar').innerHeight() + $('footer').innerHeight() - 7)));

$('.services .service h3').on('click', function() {
    $(this).next('.service-menu').slideToggle();
    $(this).parents('.col-12').siblings().find('.service-menu').slideUp();
});