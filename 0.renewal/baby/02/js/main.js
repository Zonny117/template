$(function () {

    var mMod4 = new Swiper(".mMod4 .swiper-container", {
        autoHeight: "true",
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod4 .swiper-pagination",
            clickable: true,
        },
    });

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        autoHeight: "true",
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            clickable: true,
        },
    });

    $(".mMod9 .swiper-slide").on('click', function () {

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

    vh();
    control.module('.section1');
    control.module('.section2');
    control.popup("body", '.mMod9 .swiper-slide, .btn_QR', ".btn_close");
    control.popupQR();
});