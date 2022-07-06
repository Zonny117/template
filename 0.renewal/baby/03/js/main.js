$(function () {

    var main = new Swiper(".mainSlideContainer", {
        slidesPerView: 1,
        pagination: {
            el: ".mainSlideContainer .main-swiper-pagination",
            clickable: true,
        },
        autoHeight: true,
    });

    $(".mMod9 .swiper-slide").on('click', function () {

        $(".lMod9").addClass("on");

        let idx = $(this).index();

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

    resize_mod9txt(false);

    $(".btnbx").on('click', function () {
        setTimeout(function () {
            main.updateAutoHeight(300);
        }, 300);
    });


    // 슬라이드 삭제
    let slides = $(".slideModule").filter(function () {
        return $(this).css("display") === "none";
    });

    slides.remove();


    // 슬라이드 1개 일때 업데이트
    if ($(".mainSlideContainer .swiper-wrapper>.swiper-slide").length === 1) {
        main.update()
        main.allowTouchMove = false;
        $('.main-swiper-pagination').css('display', 'none');
    }
});