$(window).on('load', function () {

    //모듈 제어

    let topmenu = $(".topmenu .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (topmenu.length === 2) {
        $(".topmenu, .btn_dot").css({
            display: "none"
        });
    }

    let back = $(".back1").css('display');

    if (back === "none") {
        $(".default").css({
            display: "block"
        })
    } 
    // else {
    //     $(".default").remove();
    // }

    let maintitle = $(".maintitlebx .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (maintitle.length === 2) {
        $(".maintitlebx").css({
            display: "none"
        });
    }

    let footer = $("footer .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (footer.length === 2) {
        $("footer").css({
            display: "none"
        });
    }



    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();


    let paddingtop = $(".maintitlebx").css('padding-top');

    // console.log(paddingtop)

    let ptnum = Math.round(paddingtop.split("px")[0]);


    let winw = $(window).innerWidth();

    let height = $(".maintitlebx").outerHeight(true);
    let pureHeight = $(".maintitlebx").height();

    heightCalc();

    function heightCalc() {
        // console.log(ptnum)

        if (winw > 850) {

            // 리사이즈시 무한대로 수치가 더해지기 때문에 pureHieght = pureHeight + 350(pureHeight += 350)은 쓸 수 없다. (고정 수치 사용)
            // 태블릿 가로모드에서 잘려보이기 때문에 패딩 퍼센트 값 (내용 길어져서 잘리는 건 어쩔 수 없음)
            pureHeight = $(".maintitlebx").height() + ptnum;

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

        ptnum = Math.round(paddingtop.split("px")[0]);


        heightCalc();

        vh();

    })






    //maintitle
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


            // $(".maintitlebx").addClass("on");

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
            // $(".maintitlebx").removeClass("on");


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

    $(".close1").click(function () {
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

        $(".close1, .btn_close2").click(function () {
            disable();
        })
    }


    $(".btn_QR").click(function () {
        $(".qrpopup").addClass("on");
    });

    $(".close2").click(function () {
        $(".qrpopup").removeClass("on");
    });


    //gnb
    // $(window).on("DOMMouseScroll mousewheel", function (e) {

    //     if ($(".topmenu").hasClass("on")) return;


    //     e = window.event || e;

    //     let E = e.detail ? e.detail : e.wheelDelta;

    //     // console.log(E)

    //     if (/Firefox/i.test(navigator.userAgent)) {
    //         E = -E;
    //     }



    //     if (E > 0) {
    //         $(".gnb").stop().animate({
    //             top: "0px"
    //         }, 400, "easeOutCubic")
    //     } else if (E < 0) {
    //         $(".gnb").stop().animate({
    //             top: "-80px"
    //         }, 400, "easeOutCubic")
    //     }

    // })

    // let ts, te, touch;

    // $(window).on("touchstart", function (e) {
    //     ts = e.originalEvent.touches[0].screenY;
    // })

    // $(window).on("touchstart", function (e) {

    //     te = e.originalEvent.changedTouches[0].screenY;

    //     touch = ts - te;

    //     // console.log(touch)
    //     if ($(".topmenu").hasClass("on")) return;


    //     if (touch > 0) {
    //         $(".gnb").stop().animate({
    //             top: "-80px"
    //         }, 300, "easeOutCubic")
    //     } else if (touch < 0) {
    //         $(".gnb").stop().animate({
    //             top: "0px"
    //         }, 300, "easeOutCubic")
    //     }

    // })


    // gnb

    // 초기 스크롤값
    let old = 0;
    let prot = 0;

    $(window).on('scroll', function () {



        if (prot) return;
        prot = 1;
        setTimeout(function () {
            prot = 0;
        }, 100);



        if ($(".topmenu").hasClass("on")) return;

        // 현재 스크롤값
        let newvalue = $(this).scrollTop();

        // 페이지 상단에서 네비게이션 고정
        if (newvalue <= 200) {
            $(".gnb").stop().animate({
                top: "0px"
            }, 300, "easeOutCubic")
            return;
        }

        //스크롤 다운 감지
        if (newvalue > old) {
            $(".gnb").stop().animate({
                top: "-80px"
            }, 300, "easeOutCubic")
            // alert("down");
        }
        //스크롤 업 감지
        else {
            // alert("up");
            $(".gnb").stop().animate({
                top: "0px"
            }, 300, "easeOutCubic")
        }

        // 초기 스크롤값 현재 값으로 업데이트
        old = newvalue;
    })

})