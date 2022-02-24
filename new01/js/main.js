$(function () {

    // 모듈제어
    let content = $(".content .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (content.length === 8) {
        $(".content, .scroll").css({
            display: "none"
        })
    };



    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    // iOS 100vh fix
    if (iOS) {
        $(window).bind("orientationchange", function (e) {
            var orientation = window.orientation;

            if (orientation == 90 || orientation == -90) {
                $(".mMod2").css({
                    height: "100vh"
                });
                // alert("landscape");
            } else {
                // alert("portrait");
                $(".mMod2").css({
                    height: "-webkit-fill-available"
                });
            }

        });

    }


    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();
    $(".mMod9 .swiper-slide").click(function () {
        $(".lMod9, html, body").addClass("on");

    });
    $(".btn_close").click(function () {
        $(".lMod9, html, body").removeClass("on");

    });


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