checkMobile(850);

$(function () {
    if (/\.(mp4|mov)/i.test($(".background video").attr('src'))) {
        $(".bgImg").css('display', 'none');
    }
});

$(window).on('load orientationchange', function (e) {
    let rotate = window.orientation;
    if (rotate === 90) {
        $(".background").css('height', '1000px');
    } else {
        setTimeout(function () {
            resizeBackground();
        }, 100);
    }
});

$(window).on('load resize', function () {
    setTimeout(function () {
        if (!$("html").hasClass("ismobile")) {
            $(".background").css('height', '1000px');
        }
    }, 100);
});

$(window).on('load', function () {

    var mMod4 = new Swiper(".mMod4 .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod4 .swiper-pagination",
            clickable: true,
        },
        autoHeight: true,
    });
    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            clickable: true,
        },
        autoHeight: true,
    });

    $(".mMod9 .swiper-slide img").on('click', function () {

        $(".lMod9").addClass("on");

        let idx = mMod9.realIndex;

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            slidesPerView: 1,
            spaceBetween: 50,
        });

        $(".btn_close").on('click', function () {
            $(".lMod9").removeClass("on");
            lMod9.destroy();
        });
    });

    $(".btn_QR").on('click', function () {
        $(".qrpopup").addClass('on');
    });
    $(".btn_close").on('click', function () {
        $(".qrpopup").removeClass('on');
    });

    vh();
    control.module(".bluebg.first");
    control.module(".telWrap");
    control.module(".contact");
    control.popup('body', '.mMod9 .swiper-slide img, .btn_QR', '.btn_close');
    autoHeight(mMod4);
    autoHeight(mMod9);
    resize_mod9txt(false);
});

function resizeBackground() {
    let str = String($(window).innerHeight());
    $(".background").css('height', str);
}