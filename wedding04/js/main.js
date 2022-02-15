$(function () {

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    vh();

    $(window).on('resize', function () {
        vh()
    });


    //모듈제어
    let last = $(".lastslide .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (last.length === 4) {
        $(".lastslide").css({
            display: "none"
        });
    };


    var mainslide = new Swiper(".main", {
        effect: "creative",
        grabCursor: true,
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["0%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: ".btnbx2>.swiper-button-next",
            prevEl: ".btnbx2>.swiper-button-prev",
        }
    });


    $(".map").on('touchmove touchstart mouseenter', function () {
        mainslide.allowTouchMove = false;
    });

    $("body").on('touchstart click', function (e) {
        let tg = e.target;

        // console.log(tg);

        let map = e.currentTarget.querySelector(".map");

        // console.log(map);
        if (tg !== map) {
            mainslide.allowTouchMove = true;
        }

    });


});