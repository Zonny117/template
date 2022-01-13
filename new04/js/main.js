$(function () {

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();

    //모듈 제어
    let content = $(".content .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (content.length === 4) {
        $(".content").css({
            display: "none"
        });
    }

    let footer = $("footer .dn").filter(function () {
        return $(this).css("display") === "none"
    });


    if (footer.length === 2) {
        $("footer").css({
            display: "none"
        });
    }



    $(".mMod9 .swiper-slide").click(function () {
        $(".lMod9, html, body").addClass("on");

    });
    $(".btn_close").click(function () {
        $(".lMod9, html, body").removeClass("on");

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
        })


    }
})