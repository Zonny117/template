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


    $(".map").on('touchmove touchstart mouseenter mousemove', function () {
        mainslide.allowTouchMove = false;
    });

    $(".map").on('mouseleave', function () {
        mainslide.allowTouchMove = true;
    });

    $("body").on('touchstart touchmove', function (e) {
        let tg = e.target;

        // console.log(tg);

        let map = e.currentTarget.querySelector(".map");

        // console.log(map);
        if (tg !== map) {
            mainslide.allowTouchMove = true;
        }

    });

    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    $(".btn_QR").click(function () {
        $("html, body, .qrpopup").addClass("on");

        if (iOS) {
            enable();
        }
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });

    const body = document.querySelector('body');
    let ios_scroll = 0;

    function enable() {
        ios_scroll = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${ios_scroll}px`;
        body.style.width = '100%';
    }

    function disable() {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, ios_scroll);
    }

});