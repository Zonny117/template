$(function () {




    //모듈제어
    $.fn.control = function (count) {
        const dn = $(this).find(".dn").filter(function () {
            return $(this).css('display') === "none";
        }).length;

        if (count === dn) {
            $(this).css({
                display: "none"
            });
        }
    }

    let bxarr = [".contact", ".orangebg", ".blackbg"];
    let dnarr = [2, 3, 3];
    let i = 0;

    while (i < 3) {

        $(bxarr[i]).control(dnarr[i]);
        i = i + 1;

    }



    if ($(".mMod6").css('display') === "none") {
        $(".mod5bx, .btn_address").addClass("on");
    }
    if ($(".mMod9").css('display') === "none") {
        $(".mod8bx, .btn_vid").addClass("on");
    }


    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if (lmod9.length >= 1) {
        lmod9.wrapInner('<div class="swiper-zoom-container"></div>')
    };

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    $(window).on('resize load', function () {
        let ismobile = $(window).innerWidth() <= 850 ? true : false;

        vh();

        if (ismobile) {
            $("html").addClass("ismobile");
        } else {
            $("html").removeClass("ismobile");
        }
        // console.log(ismobile);

    });

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            type: 'fraction',
        },
        navigation: {
            nextEl: ".mMod9 .swiper-button-next",
            prevEl: ".mMod9 .swiper-button-prev",
        }
    });



    $(".btn_menu a").click(function () {
        let cl = $(this).attr('class').split(" ")[0];

        // console.log(cl)

        switch (cl) {
            case "btn_phone":
                $(".btn_phone, .mod6bx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address":
                $(".btn_address, .mod5bx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_pic":
                $(".btn_pic, .mod9bx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_vid":
                $(".btn_vid, .mod8bx").addClass("on").siblings().removeClass("on");
                break;
        }
    });


    $(".btn_pic").click(function () {
        if ($(".mMod8").css('display') !== "none") {
            $(".mMod8 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        }
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


    $(".mag").click(function () {
        $(".lMod9, html, body").addClass("on");

        if (iOS) {
            enable();
        }

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: mMod9.realIndex,
            loop: "true",
            zoom: {
                minRatio: 1,
                maxRatio: 2
            },
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });
    });


    if ($("html").hasClass("ismobile") || $(window).innerWidth() <= 850) {
        // console.log("모바일");

        $(".mMod9 .swiper-slide").click(function () {
            $(".lMod9, html, body").addClass("on");
            if (iOS) {
                enable();
            }

            var lMod9 = new Swiper(".lMod9 .swiper-container", {
                initialSlide: mMod9.realIndex,
                loop: "true",
                zoom: {
                    minRatio: 1,
                    maxRatio: 2
                },
                slidesPerView: 1,
                spaceBetween: 30,
                observer: true,
                observeParents: true
            });
        });
    }

    $(".close1").click(function () {
        $(".lMod9, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });

    $(".btn_QR").click(function () {
        $(".qrpopup, html, body").addClass("on");

        if (iOS) {
            enable();
        }
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });
});