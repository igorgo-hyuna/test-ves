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
    });

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

    var owl = $('.carousel-two');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 7
            }
        }
    });

    //B24 widget
    var popup = document.querySelector('[data-b24-crm-button-cont]');
    var buttonBlock = document.querySelector('[data-b24-crm-button-block]');
    //kiem tra nut bat hay tat
    var nutBat = true;

    popup.addEventListener("click", function() {
        if (nutBat) {
            popup.classList.add("b24-widget-button-bottom");
            buttonBlock.classList.remove("b24-widget-button-hide");
            buttonBlock.classList.add("b24-widget-button-show");
            //chuyển trạng thái nút tắt
            nutBat = false;

        } else {
            popup.classList.remove("b24-widget-button-bottom");
            buttonBlock.classList.add("b24-widget-button-hide");
            buttonBlock.classList.remove("b24-widget-button-show");
            //chuyển trạng thái nút bật
            nutBat = true;

        }

    });



    var bieuTuong = document.querySelectorAll('[data-b24-crm-button-icon]');
    var i = 0

    function hieuUng(i0, i1, i2) {
        bieuTuong[i0].classList.add("b24-widget-button-icon-animation");
        bieuTuong[i1].classList.remove("b24-widget-button-icon-animation");
        bieuTuong[i2].classList.remove("b24-widget-button-icon-animation");
    }



   var someTabTriggerEl = document.querySelector('#myTab')
  var tab = new bootstrap.Tab(someTabTriggerEl)

  tab.show()



});