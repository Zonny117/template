$(function () {

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

    $(".mMod7 a").wrapInner('<p>');

    $(".btn_QR").on('click', function () {
        $(".qrpopup").addClass('on');
    });
    $(".btn_close").on('click', function () {
        $(".qrpopup").removeClass('on');
    });

    vh();
    control.module(".mediabx");
    control.module(".contact");
    control.popup('body', '.mMod9 .swiper-slide, .btn_QR', '.btn_close');
    autoHeight(mMod4);
    autoHeight(mMod9);
    resize_mod9txt(false);
});