$(function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    let winW = $(window).innerWidth();
    let prot = 0;
    let pnum = 0;
    let page = $(".page").length;

    let ts, te, touch;

    $(".content").css({
        height: page * 100 + "vh"
    });


    // 리사이즈 이벤트 마지막에 한번 실행
    let timer = null;
    $(window).on("resize", function () {

        clearTimeout(timer);
        timer = setTimeout(resize, 300);

        function resize() {
            if (winW <= 850) {
                location.reload();
            } else {
                location.reload();
            }
        };
    });


    let scrollbx = $(".scrollbxw").height();
    let maintitlebx = $(".maintitlebx").height();


    // 페이지액션
    if (winW > 850) {

        // 스크롤 액션
        $(document).on("DOMMouseScroll mousewheel", function (e) {

            if (prot) return;
            prot = 1;
            setTimeout(function () {
                prot = 0;
            }, 800)

            e = window.event || e;

            let E = e.detail ? e.detail : e.wheelDelta;

            // console.log(E)

            if (/Firefox/i.test(navigator.userAgent)) {
                E = -E;
            }

            if (E < 0) {
                pnum++;

                if (pnum === (page)) {
                    pnum = pnum - 1;
                }


            } else {
                pnum--;
                if (pnum === -1) {
                    pnum = 0;
                }
            }

            // console.log(page + "페이지")
            // console.log(pnum + "페이지 넘버");

            $(".iTop").click(function (e) {
                e.preventDefault();
                pnum = 0;
            });

            let pos = $(window).height() * pnum;


            $("html,body").stop().animate({
                scrollTop: pos + "px"
            }, 800, "easeInOutCirc");

        });


        //터치 액션
        $(document).on('touchstart', function (e) {
            ts = e.originalEvent.touches[0].screenY;

            // console.log(ts)
        });


        $(document).on('touchend', function (e) {



            if (prot) return;
            prot = 1;
            setTimeout(function () {
                prot = 0;
            }, 800)

            te = e.originalEvent.changedTouches[0].screenY;

            touch = ts - te;

            if ($(".menu, .lMod9").hasClass("on")) return;



            let active;
            let tit = e.currentTarget.querySelector(".mMod4 .tit");
            let txt = e.currentTarget.querySelector(".mMod4 .txt");
            let h2 = e.currentTarget.querySelector(".mMod3 h2");
            let txt2 = e.currentTarget.querySelector(".mMod3 .txt");

            if (e.target === h2 || e.target === txt2) {
                
                if (scrollbx < maintitlebx) return;

            }

            if (e.target === tit || e.target === txt) {


                active = $(".mMod4 .swiper-slide-active .txt").outerHeight(true) + $(".mMod4 .swiper-slide-active .tit").outerHeight(true);
                // console.log(active)

                if ($(".mMod4 .swiper-slide-active").height() < active) return;
            };

            // console.log(h2)
            // console.log(txt2)

            // console.log(touch)  

            if (touch > 60) {
                pnum++;

                if (pnum === (page)) {
                    pnum = pnum - 1;
                }


            } else if (touch < -60) {
                pnum--;
                if (pnum === -1) {
                    pnum = 0;
                }
            };

            $(".iTop").click(function (e) {
                e.preventDefault();
                pnum = 0;
            });


            let pos = $(window).height() * pnum;


            $("html,body").stop().animate({
                scrollTop: pos + "px"
            }, 800, "easeInOutCirc");

        });
    };



    //스크롤 제어
    function prohibit_pageaction() {
        $("html,body").on('DOMMouseScroll mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }

    function allow_pageaction() {
        $("html,body").off('DOMMouseScroll mousewheel');
    };



    $(".scrollbxw").on("DOMMouseScroll mousewheel", function () {

        if (scrollbx < maintitlebx) {
            prohibit_pageaction();
        };
    });

    $(".mMod4 .swiper-slide").on("DOMMouseScroll mousewheel", function () {

        let mod4_height = $(".tit", this).outerHeight(true) + $(".txt", this).outerHeight(true);

        let slide_height = $(this).height();

        // console.log(slide_height)

        // console.log(mod4_height)

        if (mod4_height > slide_height) {
            prohibit_pageaction();
        } else {
            allow_pageaction();
        }

    });

    $(".scrollbxw, .mMod4 .swiper-slide").on("mouseleave", function () {
        allow_pageaction();
    });


    $(".btn_link").click(function () {
        $(".menu").addClass("on");
        prohibit_pageaction();
    });

    $(".btn_close").click(function () {
        $(".menu").removeClass("on");
        allow_pageaction();
    });

    $(".mag").click(function () {
        $(".lMod9").addClass("on");
        prohibit_pageaction();
    });

    $(".btn_close2").click(function () {
        $(".lMod9").removeClass("on");
        allow_pageaction();
    });



    //모바일

    $(".open").click(function () {
        $(".contentm").stop().animate({
            top: "0%"
        }, 800, 'easeOutCubic')
    });
    $(".close").click(function () {
        $(".contentm").stop().animate({
            top: "99%"
        }, 800, 'easeOutCubic')
    });

    if (winW <= 850) {
        $(".mMod9 .swiper-slide").click(function () {
            $(".lMod9").addClass("on");
        });
    }



    // iOS safari 모바일 컨텐츠 메뉴 스크롤 방지
    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    const body = document.querySelector('.scrollbx');
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

        $(".btn_link, .mMod9 .swiper-slide").click(function () {
            enable();
        });


        $(".btn_close, .btn_close2").click(function () {
            disable();
        });
    }

});