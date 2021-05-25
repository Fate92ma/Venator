$(document).ready(function () {

    // Preloader

    $('.preloader').fadeOut(4000);

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Sticky Header

    $(window).scroll(function () {

        var windScro = $(window).scrollTop();

        if (windScro >= $(".pre-header").outerHeight()) {
            $("#home").css("paddingTop", $("header").innerHeight());
            $("header").addClass("fixed");
            $(".logo-img").css("visibility", "visible");
            $(".top i").css("visibility", "visible");

        } else {
            $("#home").css("padding-top", "0");
            $("header").removeClass("fixed");
            $(".logo-img").css("visibility", "hidden");
            $(".top i").css("visibility", "hidden");
        }
    });

    // Search Modal

    $(".search i").on("click", function () {
        $(".searchMe").css("visibility", "visible")
    });

    $(".closeMe").css("left", $(".searchMe input").innerHeight());
    $(".closeMe").css("top", $(".searchMe input").innerHeight() + 15);

    $(".closeMe").on("click", function () {
        $(".searchMe").css("visibility", "hidden")
    });

    // Smooth Scroll

    $('.list li a').click(function (event) {

         event.preventDefault()
        
        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Home Carousel

    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        interval: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Numbers

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1375) {
            $('.timer').countTo({
                onUpdate: true
            });
        }
    });

    // Features

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 2000
    });

    // Contact

    var placeAttr = "  ";

    $("[placeholder]").focus(function () {

        placeAttr = $(this).attr("placeholder");

        $(this).attr("placeholder", " ");

    }).blur(function () {

        $(this).attr("placeholder", placeAttr);

    });

    // Back to top

    $('.top i').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

    // Language

    $(".language i").mouseenter(function () {
        $(".tooltiptext").fadeIn()
    });

    $(".language i").mouseleave(function () {
        $(".tooltiptext").fadeOut()
    });

});

// Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}