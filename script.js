$(document).ready(function() {

     $('div[role=a]').on('click', function(event) {
        event.preventDefault();
        url = $(this).attr('href');
        target = $(this).attr('target');

        if(!target) {
            location.href = url;
        } else {
             window.open(url,'_blank');
        }
        
    });

    // menu mobile
    var pull        = $('.header-primary .hamburger'),
        menu        = $('.header-primary'),
        menuHeight  = menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        $('html').toggleClass('disable-scroll');
        pull.toggleClass('nav-mobile-open');
        menu.toggleClass('nav-is-open');
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    // zamykanie menu na mobile
    $("header nav ul li a").click(function(){
        var oknoPrzegladarki = $(window).width();
        if(oknoPrzegladarki < 1200) {
            $(".header nav").slideUp();
            $('.nav-mobile').removeClass('nav-mobile-open');
        }
    });
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('.header-primary').addClass('is-sticky');
        } else {
            $('.header-primary').removeClass('is-sticky');
        }
        
        // split box
        $('.screen-1').css('width', scrollTop / 4 + 100 + "px");

        
    });
    
    // typed
    /*var typedHeading = $('.landing-section-left .sub-heading-large').length;
    if(typedHeading) {
        var typed = new Typed('.landing-section-left .sub-heading-large', {
            strings: ["Mobile Application", "Desktop Application", "Brand Development"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1000,
            cursorChar: ''
        });
    }*/
    
    var $scrollingDiv = $(".landing-section-right .phone-1");
    var $scrollingDiv2 = $(".landing-section-right .phone-2");
    var mobileTrans = 1;
    if($(window).width()<900){
        mobileTrans = 0.5;
    }

    $(window).scroll(function(){
        $scrollingDiv.css("transform", "translateY(" + ($(window).scrollTop() * (-0.3* mobileTrans)) + "px" + ")");
        $scrollingDiv2.css("transform", "translateY(" + ($(window).scrollTop() * (-0.15*mobileTrans)) + "px" + ")"); 
    });
    
    // slidery
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        el: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        hashNavigation: {
            watchState: true,
        },
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
    
    
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500);
        return false;
    });
    
    AOS.init({
        offset: 200,
        duration: 800
        
    });

});

