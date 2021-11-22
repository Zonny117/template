$(function () {

    // 새로고침시 상단으로
    history.scrollRestoration = "manual"


    // 푸터 영역 자식 요소 감지
    let child = $(".mMod10, footer .mMod7").length;

    // console.log(child)

    // 모듈 없으면 푸터 삭제 및 플렉스 박스 클래스 제거
    if (child === 0) {

        $("footer").css({
            display: "none"
        });

        $(".flex").removeClass("page");
    }

    // 사진 확대
    $(".mag.forWeb").click(function () {

        // 레이어 팝업시 바디 스크롤 이벤트 막기
        $("html,body").on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $(".lMod9").addClass("on");

    });

    $(".mag.forMobile").click(function () {

        $(".lMod9").addClass("on");

        $("#wrap").css({
            overflowY: "hidden"
        });

    });

    $(".btn_close.forWeb").click(function () {
        $(".lMod9").removeClass("on");
        // 레이어 팝업 닫은 후 바디 스크롤 이벤트 허용
        $("html,body").off("mousewheel DOMMouseScroll");
    });

    $(".btn_close.forMobile").click(function () {

        $(".lMod9").removeClass("on");


        $("#wrap").css({
            overflowY: "auto"
        });
    });



    let pnum = 0;
    let prot = 0;
    let page = $(".page").length;





    $(document).on("mousewheel DOMMouseScroll", function (e) {



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
            $(".titlebx").removeClass("on")
        });

        let pos = $(window).height() * pnum;

        $("html,body").stop().animate({
            scrollTop: pos + "px"
        }, 1000, "easeOutCubic");



        if (pnum > 0) {
            $(".titlebx").addClass("on")
        } else(
            $(".titlebx").removeClass("on")
        )


    });




    // 팝업메뉴
    $(document).on("mouseup touchstart touchend", function (e) {

        if ($(".topmenu").has(e.target).length === 0) {
            $(".topmenu").removeClass("on");
        }

        $(".btn_dot").click(function () {


            $(".topmenu").toggleClass("on");

        });

    });


    // 상단 메뉴 블러 모바일
    let ts, te;

    $(document).on("touchstart", function (e) {


        ts = e.originalEvent.touches[0].screenY;

    });

    $(document).on("touchend", function (e) {

        te = e.originalEvent.changedTouches[0].screenY;

        let touch = ts - te;

        // console.log(touch)


        if (touch > 30) {
            $(".titlebx").addClass("on");
        } else {
            $(".titlebx").removeClass("on");
        }
    });


}); ////////////////