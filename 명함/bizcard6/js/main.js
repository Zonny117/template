function vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};



$(function () {

    let kakao = /kakaotalk/i.test(navigator.userAgent);
    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (kakao && iOS) {
        $(".navi_bottom.mobile").css({
            paddingBottom: '20px'
        });
    }

    $(window).on('load resize', function () {
        vh();
    });

    // 모듈 제어
    $.fn.control = function (count) {

        const dn = $(this).find(".dn").filter(function () {
            return $(this).css('display') === "none";
        }).length;

        if (count === dn) {
            $(this).css({
                display: 'none'
            });
        }

    }

    $.fn.control2 = function () {
        return $(this).filter(function () {
            return $(this).css('display') === "none";
        }).length;
    };

    $(".lbxflex").control(2);
    $(".rbx").control(5);
    $(".count").control(2);


    // 메인 박스 중앙 정렬
    if ($(".rbx").css('display') === "none") {
        $(".main").css({
            justifyContent: 'center'
        });
    }

    // 밑줄 제거
    if ($(".mMod9").css('display') === "none" && $(".mMod8").css('display') === "none") {
        $(".main").css({
            borderBottom: 'none'
        });
    }

    //지도 연락처 버튼 제어
    let count = $(".count .dn").control2();

    if (count === 2) {
        $(".teladbx").css({
            display: 'none'
        });
    }

    $(".teladbx a").click(function () {
        let cl = $(this).attr('class').split(" ")[0];

        if (count) return;


        $(this).addClass("on").siblings().removeClass("on");

        switch (cl) {
            case "btn_phone":
                $(".mod6bx").fadeIn(600), $(".mod5bx").fadeOut(0);
                break;
            case "btn_address":
                $(".mod5bx").fadeIn(600), $(".mod6bx").fadeOut(0), $(".btn_white").addClass("on");
                break;
        }

    });

    $(window).load(function () {

        //디폴트 이미지
        if ($(".back").css('display') === "none") {
            $(".default").css({
                display: "block"
            });
        }

        let ismobile = $(window).innerWidth() <= 850 ? true : false;


        //main 테두리 제거
        if (ismobile && $(".maindn1").control2() === 4) {
            $(".mMod3").css({
                borderBottom: 'none',
                marginBottom: 0,
                paddingBottom: 0
            });
        }
        if (ismobile && $(".maindn1, maindn2").control2() === 7) {
            $(".main").css({
                borderBottom: 'none'
            });
        }

        if ($('.navi_bottom.mobile').css('display') === "none") {
            $(".mSky").css({
                bottom: '10px'
            });
        }



        // 탭메뉴 슬라이드 버튼 사이징
        if (count && !ismobile) {
            $(".teladbx").css({
                width: "50%"
            });

            $(".btn_white").css({
                width: "97%",
                left: "1.5%"
            });

            $(".teladbx a").css({
                width: "100%"
            });
        } //
        else if (count && ismobile) {
            $(".btn_white").css({
                width: "97%"
            });

            $(".teladbx a").css({
                width: "100%"
            });
        }

        if ($(".mMod6").css('display') === "none") {
            $(".mod5bx, .btn_address").addClass("on").siblings().removeClass("on");
        }


        //갤러리 레이아웃
        $(".mMod9 .swiper-slide").addClass("grid-item");


        var msnry = new Masonry('.masonry', {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            // stagger: 100,
            gutter: '.gutter',
            percentPosition: true,
            horizontalOrder: true
        });

        imagesLoaded('.mMod9').on('progress', function () {
            msnry.layout();
        });

        window.addEventListener('message', function () {
            msnry.layout();
        });


        // 6장(mobile) /8장 이상 숨김 (DT)
        let item = $('.grid-item').length;

        let i = $(window).innerWidth() <= 850 ? 6 : 8;
        // console.log(item)
        if (item > i) {
            $(".mag").addClass("on");


            while (i < item) {
                $(".grid-item").eq(i).addClass("hide ani");

                i++;

            }
        }


        //더보기
        $(".mag").click(function () {
            $(this).removeClass("on");


            $(".grid-item").removeClass("hide");
            msnry.layout();


            setTimeout(function () {

                $(".ani").each(function (index) {
                    $(this).delay(index * 500).animate({
                        opacity: 1
                    }, 500, 'easeInOutSine');
                });

            }, 500);
        });

        // 링크 슬라이더 생성 및 말줄임 제어
        $(".mMod7 a").wrap('<div class="swiper-slide"></div>').wrapInner('<p></p>');

        var mMod7 = new Swiper(".mMod7 .swiper-container", {
            freeMode: true,
            slidesPerView: 'auto',
            spaceBetween: 8,
            navigation: {
                nextEl: ".mMod7 .swiper-button-next",
            },
            preventClicks: true,
        });


        if ($(".mMod7 a").length < 5) {
            $(".mMod7 .swiper-button-next").css({
                display: 'none'
            });
        }
    });


    //사진 확대 레이어
    $(".masonry .swiper-slide").click(function () {

        if (kakao) {
            prevent_Scroll_Kakao();
        }
        if (!$(".btn_help").hasClass("on")) return;

        $(".lMod9, html, body").addClass("on");
        enable();

        let idx = $(this).index() - 2;

        var lMod9 = new Swiper(".lMod9.on .swiper-container", {
            initialSlide: idx,
            slidesPerView: 'auto',
            direction: 'vertical',
            freeMode: true,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            grabCursor: true,
            mousewheel: true,
            preloadImages: true,
            updateOnImagesReady: true,
        });

        $(" .btn_close").click(function () {
            lMod9.destroy();
        });
    });


    //네비게이션 경계선
    $(document).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $(".gnb").addClass("on");
        } else if (sct < 80) {
            $(".gnb").removeClass("on");
        }
    });


    //qr 버튼
    $(".btn_QR").click(function () {
        $(".qrpopup, html, body").addClass("on");
        enable();
    });

    $(".btn_close").click(function () {
        if (kakao) {
            allow_Scroll_kakao();
        }

        $(".qrpopup, .lMod9, html, body").removeClass("on");
        disable();
    });


    // 레이어팝업 바디 스크롤 방지
    const body = document.querySelector('body');
    let ios_scroll = 0;

    function enable() {
        ios_scroll = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${ios_scroll}px`;
        body.style.width = '100%';
    };

    function disable() {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, ios_scroll);
    };


    //카카오 인앱브라우저 스크롤 방지
    function prevent_Scroll_Kakao() {
        $("body").on('touchmove mousewheel click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            return false;
        });
    };

    function allow_Scroll_kakao() {
        $("body").off('touchmove mousewheel click');
    };

    resize_mod9txt(false);
});