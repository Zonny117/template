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
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            clickable: true,
        },
    });

    $(".mMod9 .swiper-slide").click(function () {
        let idx = mMod9.activeIndex;

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            loop: true,
            slidesPerView: 1,
            spaceBetween: 50,
            observer: true,
            observeParents: true,
        });

        $(".lMod9").addClass("on");

        $(".btn_close").click(function () {
            lMod9.destroy();

            $(".lMod9").removeClass("on");
        });

    });

    $(".btn_QR").click(function () {
        $(".qrpopup").addClass("on");
    });

    $(".btn_close").click(function () {
        $(".qrpopup").removeClass("on");
    });


    vh();
    autoHeight(mMod4);
    autoHeight(mMod9);
    resize_mod9txt(false);

    control.popup("body", ".btn_QR, .mMod9 .swiper-slide", ".btn_close");
    control.module(".content");
    control.module(".marginTop");
    control.module(".marginTop2");
});