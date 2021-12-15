$(function () {


    // 모듈 제어
    let mod6 = $(".mMod6").css("display")
    let mod5 = $(".mMod5").css("display")


    if (mod5 === "none" && mod6 === "none") {
        $(".topmenu, .contact").css({
            display: "none"
        })
    }

    let mod3 = $(".mMod3").css("display")
    let tel = $(".maintitle_bx .btn_tel").css("display")


    if (mod3 === "none" && tel === "none") {
        $(".main").css({
            display: "none"
        })
        $(".gnb").addClass("on");
    }


    let flex = $(".flex .dn").filter(function () {
        return $(this).css("display") === "none"
    })

    if (flex.length === 2) {
        $(".flex").css({
            display: "none"
        })
    }


    let foot = $("footer .dn").filter(function () {
        return $(this).css("display") === "none"
    })

    if (foot.length === 3) {
        $("footer").css({
            display: "none"
        })
    }







    let winw = $(window).innerWidth();





    if (winw <= 850) {
        let ts, te;


        $(document).on("touchstart", function (e) {
            ts = e.originalEvent.touches[0].screenY;

            // console.log(ts)
        })

        $(document).on("touchmove touchend", function (e) {


            let topmenu = $(".gnb").hasClass("top");

            // console.log(topmenu)

            if (topmenu) return;

            te = e.originalEvent.changedTouches[0].screenY;

            let touch = ts - te;

            // console.log(touch)


            // 스크롤 값 실시간으로 받아오려면 scroll 이벤트 사용
            $(document).on("scroll", function () {

                let sct = $(this).scrollTop();

                // console.log(sct)

                if (touch > 0) {
                    $(".gnb").addClass("on")
                } else if (touch < 0 && sct <= 300 && mod3 != "none" && tel != "none") {
                    $(".gnb").removeClass("on")
                }
            })


        })
    }





    $(window).on("DOMMouseScroll mousewheel", function (e) {


        e = window.event || e;

        let E = e.detail ? e.detail : e.wheelDelta;

        // console.log(E)

        if (/Firefox/i.test(navigator.userAgent)) {
            E = -E;
        }


        let sct = $(this).scrollTop();

        // console.log(sct)

        let topmenu = $(".gnb").hasClass("top");

        // console.log(topmenu)

        if (topmenu) return;


        if (E < 0) {
            $(".gnb").addClass("on")
        } else if (E > 0 && sct <= 300 && mod3 != "none" && tel != "none") {
            $(".gnb").removeClass("on")
        }

    });


    $(".contact").click(function () {

        $(".topmenu").toggleClass("on");
        $("body").toggleClass("on");
        $(".gnb").toggleClass("top");
        $(".contact").toggleClass("on");

    });

    $(".contact1").click(function () {

        $(this).css({
            display: "none"
        });

        $(".contact2").css({
            display: "block"
        });

    })
    $(".contact2").click(function () {

        $(this).css({
            display: "none"
        })

        $(".contact1").css({
            display: "block"
        });

    })


    $(".top_btnbx>a").click(function () {

        $(this).addClass("on").siblings().removeClass("on");

        let cl = $(this).attr("class");

        // console.log(cl)


        switch (cl) {
            case "btn_contact on":
                $(".mMod6").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address on":
                $(".mMod5").addClass("on").siblings().removeClass("on");
                break;
        }
    });

    $(".mag").click(function () {
        $(".lMod9").addClass("on");
        $("body").addClass("on");
    })

    $(".btn_close").click(function () {
        $(".lMod9").removeClass("on");
        $("body").removeClass("on");
    })


    if (winw <= 850) {
        $(".mMod9 img").click(function () {

            $(".lMod9").addClass("on");
            $("body").addClass("on");
        });
    }


    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    const body = document.querySelector('body');
    let ios_scroll = 0;

    function enable() {
        ios_scroll = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';

        // 탬플릿 리터럴은 ES6 부터 도입된 ``(백틱)을 이용한 문자열 표기법
        // ${}는 문자열 안에 변수을 삽입할 수 있게 한다. 이후 변수는 문자열로 자동 변환된다.
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
        $(".mMod9 img, .contact1").click(function () {
            enable();
        })

        $(".btn_close, .contact2").click(function () {
            disable();
        })

    }
})