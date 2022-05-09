$(function () {

    //모듈제어
    let btnbx = $(".btnbx .dn").filter(function () {
        return $(this).css('display') === "none"
    }).length;

    if (btnbx === 4) {
        $(".btnbx").css({
            display: 'none'
        });
    }

    let logobx_height = $(".logobx").outerHeight(true);

    $(window).scroll(function () {
        let sct = $(this).scrollTop();


        if (sct >= logobx_height) {
            $(".logobx").addClass("on");
        } else {
            $(".logobx").removeClass("on");

        }


    });

    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    $(window).on('resize load', function () {
        vh();
    });

    var mMod9 = new Swiper('.mMod9 .swiper-container', {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
    });

    $(".mMod9 .mag").click(function () {

        if (iOS) {
            enable();
        }

        let idx = mMod9.realIndex;

        $(".lMod9, html, body").addClass("on");

        var lMod9 = new Swiper('.lMod9 .swiper-container', {
            initialSlide: idx,
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            observer: true,
            observeParents: true,
        });

        $(".btn_close").click(function () {
            lMod9.destroy();
        });
    });

    $(".btn_QR").click(function () {

        if (iOS) {
            enable();
        }

        $(".qrpopup, html, body").addClass("on");
    });

    $(".btn_close").click(function () {
        if (iOS) {
            disable();
        }
        $(".qrpopup, .lMod9, html, body").removeClass("on");
    });


    let map_top = $(".mMod5").offset().top;

    $(".btn_map").click(function () {
        // $(window).scrollTop(map_top - 80);
        $('html, body').stop().animate({
            scrollTop: map_top - 80
        }, 800, 'easeOutQuart')
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

    resize_mod9txt('bottom');

});