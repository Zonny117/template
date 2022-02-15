$(function () {



    //모듈 제어
    let btnbx = $(".btn_bx .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (btnbx.length === 2) {
        $(".btn_bx").css({
            display: "none"
        });
    }


    let sub = $(".sub .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (sub.length === 2) {
        $(".sub").css({
            display: "none"
        });
    }


    let content = $(".content .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (content.length === 9) {
        $(".content").css({
            display: "none"
        });

        $(".background").css({
            height: "100%"
        });
    }

    if ($(".back").css("display") !== "none") {
        $(".default").css({
            display: "none"
        });
    }




    let winw = $(window).innerWidth();


    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    let slidenum = $(".mMod9 .swiper-slide").length;

    if (slidenum >= 1) {
        $(".mMod9.mobile .swiper-slide").append('<a href="###" class="mag">크게 보기</a>');
    }

    $(".mMod9.web .swiper-slide").click(function () {


        // loop 모드 순번 읽어오기 텍스트로 반환됨
        let idx = $(this).attr("data-swiper-slide-index");

        // 반환된 텍스트 정수로 전환
        let idx2 = parseInt(idx);

        // console.log(idx)


        let lMod9 = new Swiper(".lMod9 .swiper-container", {
            loop: "true",
            slidesPerView: 1,
            initialSlide: idx2,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });


        // console.log(idx)
    });

    $(".mMod9.mobile .swiper-slide").click(function () {


        let idx = $(this).index();


        // console.log(idx)


        let lMod9 = new Swiper(".lMod9 .swiper-container", {
            slidesPerView: 1,
            initialSlide: idx,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });


        // console.log(idx)
    });

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

    // 지도는 항상 마지막 슬라이드
    let idx = $(".mainslide>.swiper-wrapper>.swiper-slide").length;

    // console.log(idx)

    $(".btn_map").click(function () {

        // 마지막 슬라이드로 이동
        mainswiper.slideTo(idx, 800);

    });


    // 지도 영역 슬라이드 정지
    $(".map").on('mouseenter mousemove touchstart touchmove', function () {
        mainswiper.allowTouchMove = false;
    });

    $(".map").on('mouseleave', function () {
        mainswiper.allowTouchMove = true;
    });


    // 모바일 지도 영역 밖 슬라이드 재실행
    $("body").on('touchstart touchmove', function (e) {

        let touch_map = e.currentTarget.querySelector(".map");

        if (e.target !== touch_map) {
            mainswiper.allowTouchMove = true;
        };
    });


    $(".btn_play").click(function () {

        $(".mod8bx").addClass("on");

    });

    $(".btn_close").click(function () {
        $(".mod8bx").removeClass("on");
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });



    if (winw > 850) {
        $(".mMod9 .swiper-slide").click(function () {
            $(".lMod9").addClass("on");
        });
    }

    if (winw <= 850) {
        $(".mMod9 .swiper-slide, .mag").click(function () {
            $(".lMod9,html,body").addClass("on");
        });
    }


    $(".btn_close2").click(function () {
        $(".lMod9,html,body").removeClass("on");
    });


    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


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

    if (iOS) {
        $(".mMod9 .swiper-slide, .mag").click(function () {
            enable();
        });
        $(".btn_close2").click(function () {
            disable();
        });
    }

});