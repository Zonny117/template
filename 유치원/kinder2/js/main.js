$(function () {

    control.module(".whitebox2");
    vh();

    let mMod9 = new Swiper('.mMod9 .swiper-container', {
        spaceBetween: 30,
        slidesPerView: 1,
        grabCursor: true,
    });


    $(".mMod9 .swiper-slide").click(function () {

        $(".lMod9").addClass("on");

        let lMod9 = new Swiper('.lMod9 .swiper-container', {
            initialSlide: mMod9.activeIndex,
            spaceBetween: 30,
            slidesPerView: 1,
            grabCursor: true,
            observer: true,
            observeParent: true,
        });


        $(".btn_close").click(function () {
            $(".lMod9").removeClass("on");

            lMod9.destroy();
        });
    });

    $(".btn_QR").click(function () {
        $(".qrpopup").addClass("on");
    });

    $(".btn_close").click(function () {
        $(".qrpopup").removeClass("on");
    });

    //팝업 바디 스크롤 제어
    control.popup('body', '.mMod9 .swiper-slide, .btn_QR', '.btn_close');

    //p 태그 리사이즈
    resize_mod9txt(false);


    // let bdt = [...document.querySelectorAll(".bdt")];


    // bdt.filter(function (el) {
        
    //     if(el.style.display === "none"){
    //         el.remove();
    //     }
    // });

    control.removeDN(".bdt");
});