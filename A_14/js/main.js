$(window).on('load', function () {


    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();

    let back = $(".back1").css('display');

    if (back === "none") {
        $(".default").css({
            display: "block"
        })
    } else {
        $(".default").remove();
    }


    let paddingtop = $(".maintitlebx").css('padding-top');

    // console.log(paddingtop)

    let split = paddingtop.split(".")[0];

    // console.log(split)

    let winw = $(window).innerWidth();

    let height = $(".maintitlebx").outerHeight(true);
    let pureHeight = $(".maintitlebx").height();

    heightCalc();

    function heightCalc() {
        if (winw > 850) {

            // 리사이즈시 무한대로 더해지기 때문에 pureHieght = pureHeight + 350(pureHeight += 350)은 쓸 수 없다.
            pureHeight = $(".maintitlebx").height() + split;

            // console.log(pureHeight)

            $(".background").css({
                height: height + 250 + "px"
            })

        } else if (winw <= 850) {

            pureHeight = $(".maintitlebx").height() + 150;

            // console.log(pureHeight)

            $(".background").css({
                height: height + 80 + "px"
            })
        }
    }

    // $(window).easeScroll();

    $(".mMod7 a").click(function (e) {
        e.preventDefault();
        return false;
    });


    // 리사이즈
    $(window).on('resize', function () {

        winw = $(window).innerWidth();
        // console.log(winw)
        paddingtop = $(".maintitlebx").css('padding-top');

        split = paddingtop.split(".")[0];

        heightCalc();

        vh();

    })




    $(window).on("DOMMouseScroll mousewheel", function (e) {

        if ($(".topmenu").hasClass("on")) return;


        e = window.event || e;

        let E = e.detail ? e.detail : e.wheelDelta;

        // console.log(E)

        if (/Firefox/i.test(navigator.userAgent)) {
            E = -E;
        }



        if (E > 0) {
            $(".gnb").css({
                top: 0
            })
        } else if (E < 0) {
            $(".gnb").css({
                top: "-80px"
            })
        }

    })

    $(window).on('scroll', function () {


        let sct = $(window).scrollTop();


        // console.log(sct)

        let sctop = sct * 0.001
        // console.log(sctop)

        let bg = $(".background").offset().top;

        if ((sct + pureHeight) >= bg) {

            // 소수점 첫째자리까지 보임
            if (sctop.toFixed(1) >= 0.8 && winw > 850) {
                sctop = 0.8;
            } else if (sctop.toFixed(1) >= 0.8 && winw <= 850) {
                sctop = 1
            }


            $(".maintitlebx").addClass("on");

            $(".mMod3").addClass("on");

            $(".mMod7 a").stop().css({
                opacity: sctop,
                cursor: "pointer"
            }).unbind();

            // hover
            if (winw > 850 && sctop === 0.8) {
                $(".mMod7 a").on('mouseover', function () {
                    $(this).addClass("hover");
                })

                $(".mMod7 a").on("mouseout", function () {
                    $(this).removeClass("hover");
                })
            }

        } else {
            $(".maintitlebx").removeClass("on");


            $(".mMod3").removeClass("on");



            $(".mMod7 a").stop().css({
                cursor: "default"
            }).animate({
                opacity: "0"
            }, 100, "easeOutCubic").click(function (e) {
                e.preventDefault();
                return false;
            }).removeClass("hover");
        }

    });






    // 슬라이드 순번 넘버링 태그 추가
    $(".mMod4 .swiper-slide").each(function (index) {
        $(this).prepend("<div class='num'>" + (index + 1) + "</div>")
    });

    $(".mMod9 .swiper-slide").each(function (index) {
        $(this).prepend("<div class='num'>" + (index + 1) + "</div>")
    });



    $(".btn_dot").click(function () {
        $(".topmenu, html, body").addClass("on");
    });

    $(".btn_close").click(function () {
        $(".topmenu, html, body").removeClass("on");
    });

    $(".btn_close2").click(function () {
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
        $(".btn_dot, .mMod9 .swiper-slide").click(function () {
            enable();
        })

        $(".btn_close, .btn_close2").click(function () {
            disable();
        })
    }

})