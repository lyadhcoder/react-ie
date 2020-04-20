(function ($) {
    "use strict";

    /*===================
    Main Menu
    =====================*/
    $('.header-menu a[href="#"]').on('click', function (event) {
        event.preventDefault();
    });

    /* Menu Maker */
    $(".main-menu").menumaker({
        title: '<span></span>',
        format: "multitoggle"
    });

    $($(window)).on('scroll', function () {
        if (!$('ul.nav').hasClass('open')) {
            $('#menu-button').removeClass('menu-opened');
        };
    });

    /*========================
    Sticky Nav
    ==========================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-main.style--one").removeClass("sticky fadeInDown animated");
        }
        else {
            $(".header-main.style--one").addClass("sticky fadeInDown animated");
        }
    });

    /*==================================
    Check Data
    ====================================*/
    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };

    /*==================================
    Owl Carousel
    ====================================*/
    var $owlCarousel = $('.owl-carousel');
    $owlCarousel.each(function () {
        var $t = $(this);

        $t.owlCarousel({
            items: checkData($t.data('owl-items'), 1),
            margin: checkData($t.data('owl-margin'), 0),
            loop: checkData($t.data('owl-loop'), true),
            smartSpeed: 450,
            autoplay: checkData($t.data('owl-autoplay'), true),
            autoplayTimeout: checkData($t.data('owl-speed'), 8000),
            center: checkData($t.data('owl-center'), false),
            animateIn: checkData($t.data('owl-animate-in'), false),
            animateOut: checkData($t.data('owl-animate-out'), false),
            nav: checkData($t.data('owl-nav'), false),
            navText: ['<img src="assets/img/icons/angle-left.svg" class="svg">', '<img src="assets/img/icons/angle-right.svg" class="svg">'],
            dots: checkData($t.data('owl-dots'), false),
            responsive: checkData($t.data('owl-responsive'), {})
        });
    });

    /*========================
    Video Popup
    ==========================*/
    var $popUpVideo = $('.popup-video');
    if ($popUpVideo.length) {
        $popUpVideo.magnificPopup({
            type: 'iframe'
        });
    };

    /*==================================
    Changing svg color 
    ====================================*/
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /*==================================
    Preloader 
    ====================================*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    /*==================================
    Isotope
    ====================================*/
    $(window).on('load', function () {
        $('.project-items').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            },
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        $('.project_filter li').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({
                filter: filterValue
            });
        });
    });

  

    /*============================================
    Back to top button
    ==============================================*/
    var $backToTopBtn = $('.back-to-top');

    if ($backToTopBtn.length) {
        var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

        backToTop();

        $(window).on('scroll', function () {
            backToTop();
        });

        $backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}(jQuery));