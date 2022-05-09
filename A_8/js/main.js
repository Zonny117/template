$(function () {

    history.scrollRestoration = "manual"


    // 모듈제어
    let mod1 = $(".gnb .mMod1").css("display");

    if (mod1 === "none") {
        $(".gnb").css({
            justifyContent: "flex-end"
        })
    }

    let footer = $("footer .dn, footer .dn, footer .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    // console.log(footer.length)

    if (footer.length === 3) {

        $("footer").css({
            display: "none"
        }).removeClass("page");
    } ///////////////////


    let openchild = $(".openTitle .dn, .openTitle .dn").filter(function () {
        return $(this).css("display") === "none"
    })


    if (openchild.length === 2) {
        $(".openTitle").css({
            display: "none"
        });
    } /////////////////////


    function pagenumber() {
        let mod = [
            $(".mMod4"),
            $(".mMod5"),
            $(".mMod8"),
            $(".mMod9"),
            $(".flex")
        ]

        for (let x of mod) {
            if (x.css("display") === "none" && $(window).innerWidth() > 1366) {
                x.removeClass("page")
            }
        }

    }

    pagenumber();



    $(".mMod4 .swiper-slide").on('mousemove', function () {


        let tit = $(".tit", this).outerHeight(true);
        let txt = $(".txt", this).outerHeight(true);

        let height = tit + txt

        // console.log(height);

        if (height >= 400) {
            $("html,body").on('mousewheel DOMMouseScroll', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {

            $("html,body").off("mousewheel DOMMouseScroll");

        }

    });


    $(".mMod4 .swiper-slide").on('mouseleave', function () {

        $("html,body").off("mousewheel DOMMouseScroll");
    })

    $(".mMod5 .map").on('mousemove mouseenter', function () {
        $("html,body").on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });

    $(".mMod5 .map").on('mouseleave', function () {
        $("html,body").off("mousewheel DOMMouseScroll");
    });


    $(".mag.forWeb").click(function () {
        $(".lMod9").addClass("on");
        $("html,body").on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });

    $(".btn_close.forWeb").click(function () {
        $(".lMod9").removeClass("on");
        $("html,body").off("mousewheel DOMMouseScroll");
    });


    $(".mag.forMobile").click(function () {
        $(".lMod9").addClass("on");
        $("body").addClass("on");
        $("html, body, #wrap").css({
            overflowY: "hidden"
        });
    });

    $(".btn_close.forMobile").click(function () {
        $(".lMod9").removeClass("on");
        $("body").removeClass("on");
        $("html, body, #wrap").css({
            overflowY: "auto"
        });
    })

    $(".open").click(function () {


        if ($(window).innerWidth() > 1366) {

            // 공백 주의
            let txt = $(this).text();
            // console.log(txt)

            if (txt === "open") {
                $(this).text(txt.replace(txt, "close"))
                $(this).addClass("on")
                $("html,body").on('mousewheel DOMMouseScroll', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
            } else if (txt === "close") {
                $(this).text(txt.replace(txt, "open"))
                $(this).removeClass("on")
                $("html,body").off("mousewheel DOMMouseScroll");
            }

        }

        if ($(window).innerWidth() <= 1366) {
            $("html, body, #wrap").css({
                overflowY: "hidden"
            });
        }

        $(".openMenu").toggleClass("on");
        $("body").toggleClass("on");
        $(".gnb").toggleClass("on");
    }); //////////////



    $(".openMenu .gnb").click(function () {

        $("html, body, #wrap").css({
            overflowY: "auto"
        });

    }); //////////////////////



    let prot = 0;
    let pnum = 0;
    let page = $(".page").length;

    $(document).on("DOMMouseScroll mousewheel", function (e) {

        // 반응형 전환시 페이지 넘버 초기화
        if ($(window).innerWidth() <= 1366) {
            pnum = 0;
        }


        if (prot) return;
        prot = 1;
        setTimeout(function () {
            prot = 0;
        }, 1000)



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
        }, 1000, "easeInOutQuart");

    });



    function padding() {
        let maintitle = $(".maintitle").height()

        if ($(window).innerWidth() <= 1366) {
            $(".content").css({
                paddingTop: maintitle - 44 + "px"
            })
        } else {
            $(".content").css({
                paddingTop: 0
            })
        }
    }

    padding();

    $(window).resize(function () {

        padding();

        pagenumber();
    })


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

    $(".btn_QR").click(function () {
        $("html, body, .qrpopup").addClass("on");

        if (iOS) {
            enable();
        }

        $("html,body").on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");

        if (iOS) {
            disable();
        }

        $("html,body").off("mousewheel DOMMouseScroll");
    });


	resize_mod9txt(false);

});