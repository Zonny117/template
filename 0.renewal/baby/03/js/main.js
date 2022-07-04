$(function () {


    var main = new Swiper(".mainSlideContainer", {
        slidesPerView: 1,
        pagination: {
            el: ".mainSlideContainer .main-swiper-pagination",
            clickable: true,
        },
        shortSwipes: false,
        longSwipesMs: 100,
        autoHeight: true,
    });


    var mMod4 = new Swiper(".mMod4 .swiper-container", {
        autoHeight: "true",
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod4 .swiper-pagination",
            type: 'fraction',
        },
        navigation: {
            nextEl: ".mMod4 .swiper-button-next",
            prevEl: ".mMod4 .swiper-button-prev",
        },
        allowTouchMove: false,
    });

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        autoHeight: "true",
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            type: 'fraction',
        },
        navigation: {
            nextEl: ".mMod9 .swiper-button-next",
            prevEl: ".mMod9 .swiper-button-prev",
        },
        allowTouchMove: false,
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
        $(".qrpopup").addClass("on");
    });

    $(".btn_close").on('click', function () {
        $(".qrpopup").removeClass("on");
    });

    vh();
    control.popup("body", ".mMod9 .swiper-slide, .btn_QR", ".btn_close");
    control.module(".lastSlide");

    autoHeight(mMod4);
    autoHeight(mMod9);
    resize_mod9txt(false);

    $(".btnbx").on('click', function () {
        setTimeout(function () {
            main.updateAutoHeight(300);
        }, 300);
    });

});