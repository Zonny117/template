$(function () {


    // let mod6 = $(".mMod6.hiddenbx").css("display")
    // let mod11 = $(".mMod11.hiddenbx").css("display")
    // let mod7 = $(".mMod7.hiddenbx").css("display")


    let none = $(".link").filter(function () {

        return $(this).css("display") === "none"


    });

    // console.log(none.length)

    // console.log(link)

    if (none.length === 3) {
        $(".ml").css({
            marginLeft: 0
        });
    };


    let mod = [
        $(".mMod8"),
        $(".mMod4"),
        $(".mMod9"),
        $(".mMod5")
    ]

    for (let x of mod) {
        if (x.css("display") === "none") {
            x.removeClass("page")
        }
    }


    let mobile = $(".dn").filter(function () {
        return $(this).css("display") === "none"
    })

    // console.log(mobile.length)

    if (mobile.length === 4) {
        $(".gnb.forMobile").css({
            display: "none"
        })
    }



    $(".mMod4 .swiper-slide").on('mousemove', function () {


        let tit = $(".tit", this).outerHeight(true);
        let txt = $(".txt", this).outerHeight(true);

        let height = tit + txt

        // console.log(height);

        if (height >= 390) {
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

        $(".lMod9").css({
            display: "block"
        });
        $("html,body").on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });

    $(".mag.forMobile").click(function () {

        $(".lMod9").css({
            display: "block"
        });

        $("html, body, #wrap").css({
            overflowY: "hidden"
        });

        $("body").addClass("on");

        $(".mSky").addClass("on");
    });

    $(".btn_close.forWeb").click(function () {

        $(".lMod9").css({
            display: "none"
        });
        $("html,body").off("mousewheel DOMMouseScroll");
    });

    $(".btn_close.forMobile").click(function () {

        $(".lMod9").css({
            display: "none"
        });
        $("html, body, #wrap").css({
            overflowY: "auto"
        });
        $("body").removeClass("on");
        $(".mSky").removeClass("on");
    });

    $(".gnb.forMobile").click(function () {

        // $("body").toggleClass("on");

        $(".mSky").toggleClass("on");

        $(".hiddenMobile").toggleClass("on");


        let txt = $("a", this).text();
        // console.log(txt)

        if (txt === "열기") {
            $("a", this).text(txt.replace(txt, "닫기"));
            $(this).addClass("on");
            $("html, body, #wrap").css({
                overflowY: "hidden"
            });

        } else if (txt === "닫기") {
            $("a", this).text(txt.replace(txt, "열기"));
            $(this).removeClass("on");
            $("html, body, #wrap").css({
                overflowY: "auto"
            });
        }

    }); /////////




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
        }, 1000, "easeInOutCirc");

    });



    let sns = $(".mMod11 a")

    // 초기상태 리턴
    if (sns.length === 0) {
        $(".mMod11, .link2").css({
            display: "none"
        })
        return;
    }

    for (let i = 0; i <= 3; i++) {



        // console.log(sns[i].text);

        switch (sns[i].text) {
            case "facebook":
                $(".facebook").text("페이스북")
                break;
            case "twitter":
                $(".twitter").text("트위터")
                break;
            case "instagram":
                $(".instagram").text("인스타그램")
                break;
            case "youtube":
                $(".youtube").text("유튜브")
                break;
        }
    }

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
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });



}); /////////////////////