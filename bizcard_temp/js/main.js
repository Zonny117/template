$(function () {

    $(".mMod9 .swiper-slide").click(function () {


        // loop 모드 순번 읽어오기 텍스트로 반환됨
        let idx = $(this).attr("data-swiper-slide-index");

        // 반환된 텍스트 정수로 전환
        let idx2 = parseInt(idx);

        // console.log(idx)


        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            loop: "true",
            slidesPerView: 1,
            initialSlide: idx2,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });


        // console.log(idx)
    })

    var mainswiper = new Swiper(".mainslide", {
        slidesPerView: "1",
        spaceBetween: 100,
        pagination: {
            el: ".mainslide .swiper-pagination",
            clickable: true,
        },
        // mousewheel: true,
        speed: 900,
    });





    // mMod9.on('slideChangeEnd', function (e) {
    //     var realIndex = e.slides.eq(e.activeIndex).attr('data-swiper-slide-index');
    //     $(".mMod9 .swiper-slide").click(function () {

    //         console.log(realIndex);
    //     });
    // })





    // $(".mMod4").on('mouseenter mousemove', function () {


    //     let height = $(".mMod4").outerHeight(true);

    //     if (height >= 272) {
    //         // 마우스 휠 옵션 제거
    //         mainswiper.mousewheel.disable();
    //     }

    // });

    // $(".mMod4").on('mouseleave', function () {
    //     // 마우스 휠 옵션 가동
    //     mainswiper.mousewheel.enable();
    // });

    // 지도는 항상 마지막 슬라이드
    let idx = $(".mainslide>.swiper-wrapper>.swiper-slide").length;

    // console.log(idx)

    $(".btn_map").click(function () {

        // 마지막 슬라이드로 이동
        mainswiper.slideTo(idx, 800);

    });


    $(".btn_play").click(function () {

        $(".mod8bx").addClass("on");

    });

    $(".btn_close").click(function () {
        $(".mod8bx").removeClass("on");
    });


    $(".mMod9 .swiper-slide").click(function () {
        $(".lMod9").addClass("on");
    });

    $(".btn_close2").click(function () {
        $(".lMod9").removeClass("on");
    });

});