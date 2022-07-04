$(function () {

    let exp = /\.(mov|mp4)/i.test($(".background video").attr('src'));

    if (exp) {
        $(".background img").css('display', 'none');
    }


    $(window).on('resize load', function () {
        let bgHeight = $(".background").position().top + $(".background").height();

        // console.log(String(bgHeight - 20));
        $(".brownbx").css({
            height: `${String(bgHeight - 20)}px`,
        });
    });

    var mMod4 = new Swiper(".mMod4 .swiper-container", {
        autoHeight: "true",
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod4 .swiper-pagination",
            clickable: true
        },
    });

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        autoHeight: "true",
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            clickable: true
        },
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
});