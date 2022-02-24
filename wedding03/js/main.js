$(function () {

    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if (lmod9.length >= 1) {
        lmod9.wrapInner('<div class="swiper-zoom-container"></div>')
    };


    //모듈 제어
    let content = $(".content .dn").filter(function () {
        return $(this).css("display") === "none";
    });

    if (content.length === 12) {
        $(".content").css({
            display: "none"
        });
        $(".mMod2").css({
            minHeight: "100vh"
        })
    } ////

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();


    $(".mMod9 .swiper-slide").click(function () {
        $(".lMod9,html,body").addClass("on");

    });
    $(".btn_close").click(function () {
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

        $(".mMod9 .swiper-slide").click(function () {
            enable();
        });
        $(".btn_close").click(function () {
            disable();
        });
    }
})