$(function () {

    history.scrollRestoration = "manual"

    let child = $("footer .mMod6, footer .mMod11, footer .mMod0").length;
    let openchild = $(".openTitle .mMod0, .openTitle .mMod3").length;
    let rbx = $(".rbx .mMod6, .rbx .mMod11").length;

    // console.log(child)

    if (child === 0) {

        $("footer").css({
            display: "none"
        }).removeClass("page");
    } ///////////////////

    if (openchild === 0) {
        $(".openTitle").css({
            display: "none"
        });
    } /////////////////////

    if (rbx === 0) {
        $(".rbx").css({
            display: "none"
        });
    } ////////////////////


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



        $(".openMenu").toggleClass("on");
        $("body").toggleClass("on");
        $(".gnb").toggleClass("on");
    }); //////////////

    





    let prot = 0;
    let pnum = 0;
    let page = $(".page").length;

    $(document).on("DOMMouseScroll mousewheel", function (e) {

        // 반응형 전환시 페이지 넘버 초기화
        if ($(window).innerWidth() <= 1366) {
           pnum=0;
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




    let first = $(".content").find("div").first();

    let maintitle = $(".maintitle").height() - 81;



    // console.log(maintitle)

    if ($(window).innerWidth() <= 1366) {

        first.css({
            paddingTop: maintitle + 50
        })

    }



});