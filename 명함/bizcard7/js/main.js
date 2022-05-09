$(function () {

    vh();

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    $(window).on('load resize', function () {
        vh();

        let winW = $(window).innerWidth() <= 850 ? true : false;

        if (winW) {
            $('html').addClass('ismobile');
        } else {
            $('html').removeClass('ismobile');
        }
    });

    // //모듈 제어
    $.fn.control = function (boolean) {
        let count = $(this).find(".dn").length;
        let dn = $(this).find('.dn').filter(function () {
            return $(this).css('display') === 'none';
        }).length;

        if (boolean || boolean === undefined) {
            if (count === dn) {
                $(this).css({
                    display: 'none'
                });
            }
        } else {
            return $(this).css('display') === 'none';
        }
    };

    $('.rbx').control();
    $('.teladbx').control();

    if ($(".rbx").control(false)) {
        $(".content").css({
            justifyContent: 'center',
            alignItems: 'center'
        });
    };

    if ($(".mMod6").control(false)) {
        $(".mod5bx, .btn_address").addClass("on").siblings().removeClass("on");
    };




    //배경사진 기본값
    if ($(".back").css('display') === "none") {
        $(".default").css({
            display: "block"
        });
    }



    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    // 사진 슬라이드
    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        grabCursor: "true",
        navigation: {
            prevEl: ".mMod9 .swiper-button-prev",
            nextEl: ".mMod9 .swiper-button-next"
        }
    });

    let mod9img = $(".mMod9 .swiper-slide").length;


    $(".leftbx .section_txt").after(`<span class="number">(${mod9img})</span>`);

    // 사진 확대
    $(".mMod9 .swiper-slide").click(function () {
        if (iOS) {
            enable();
        }
        $(".lMod9, html, body").addClass("on");

        let idx = $(this).index();

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            spaceBetween: 10,
            slidesPerView: 1,
            grabCursor: "true",
            navigation: {
                prevEl: ".lMod9 .swiper-button-prev",
                nextEl: ".lMod9 .swiper-button-next"
            },
            observer: true,
            observeParents: true,
        });


        $(".btn_close").click(function () {
            $(".lMod9, html, body").removeClass("on");

            lMod9.destroy();
        });
    });

    $(".btn_QR").click(function () {
        $(".qrpopup, html, body").addClass("on");
        if (iOS) {
            enable();
        }
    });


    $(".btn_close").click(function () {
        $(".qrpopup, html, body").removeClass("on");
        if (iOS) {
            disable();
        }
    });


    //연락처 주소 버튼
    $(".teladbx a").click(function () {

        let cl = $(this).attr('class').split(" ")[0];

        // console.log(cl)

        switch (cl) {
            case "btn_phone":
                $(".mod6bx, .btn_phone").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address":
                $(".mod5bx, .btn_address").addClass("on").siblings().removeClass("on");
                break;
        }
    });

    // 모바일 서브메뉴 버튼
    let arr = [$(".mMod4"), $(".mMod9"), $(".mMod8"), $(".mMod7")];

    $(window).load(function () {
        if ($('html').hasClass('ismobile')) {
            for (let i = 0; i < arr.length; i++) {
                // console.log(arr[i]);
                arr[i].find(".topflex").click(function () {
                    arr[i].find(".btn_open").toggleClass("on");
                    arr[i].find(".hiddenbx, .topflex, .topflex_info").toggleClass("on");

                    // 유튜브 정지
                    if (arr[i] === arr[2]) {
                        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                    }

                });
            }
        }

    });


    // popup_scroll('body', '.btn_QR, .mMod9 .swiper-slide', '.btn_close');

    // control.popup('body', '.btn_QR, .mMod9 .swiper-slide', '.btn_close');




    // 레이어 팝업 바디 스크롤 제어
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

    resize_mod9txt(false);

});