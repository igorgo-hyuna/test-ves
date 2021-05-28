$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".wrapper_mnu").fadeOut(600);
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".wrapper_mnu").fadeIn(600);
            $(".wrapper_mnu").css("rigth", "0");
        };
    });

    /* Menu open close sub menu*/
    $('.menu-item-has-children').click( function(){
      $(this).toggleClass('active');
    });

    /********** Sticky menu **********/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    if (window.pageYOffset > sticky) {
        navbar.classList.remove("no-sticky");
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("no-sticky");
    }
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.remove("no-sticky");
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.add("no-sticky");
        }
    }

    const wpcFormElement = $('.wpcf7-form');
    if(wpcFormElement.hasClass('sent') && window.location.href.indexOf("wpcf7") > -1){
        window.location.replace("https://mee.services/thank-you/");
    }

    /********************** OWL carousel ***************/
    var owl = $('.carousel-one');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 100000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });


});