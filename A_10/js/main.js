$(function () {


    // 모듈 제어
    let mod4 = $(".mMod4 .tit, .mMod4 .txt").length;
    let mod7 = $(".mMod7 a").length;
    let mod10 = $(".mMod10 a").length;
    let mod6 = $(".mMod6").length;
    let content = $(".mMod3, .mMod8, .mMod9, .mMod4").length;
    let footer = $(".mMod5, .mMod11").length;
    let address = $(".mMod5").length;

    if (mod4 >= 2) {
        $(".mMod4.forWeb .swiper-slide").wrapInner('<div class="txtbx"></div>');
    }

    if (mod7 === 0) {
        $(".mMod10 a").css({
            margin: 0
        })
    }

    if (mod7 === 0 && mod10 === 0) {
        $(".topmenu").css({
            display: "none"
        })

        $(".btn_dot").css({
            display: "none"
        })
    }

    if (mod6 === 0) {
        $(".contact").css({
            display: "none"
        })
    }

    if (content === 0) {
        $(".content").css({
            height: "100vh"
        })
    }

    if (footer === 0) {
        $("footer").css({
            display: "none"
        })
    }

    if (address === 0) {
        $(".address").css({
            display: "none"
        })

        $(".flex").css({
            justifyContent: "flex-end"
        })
    }

    ///////////////////////////////////////////

    $(".contact").click(function () {

        $(".mMod6").addClass("on");

        $(this).addClass("on");
    });

    $(".mMod6 .btn_close").click(function () {


        $(".mMod6").removeClass("on");

        $(".contact").removeClass("on");

    });


    $(".btn_dot").click(function () {




        $(".topmenu").toggleClass("on");

        $("html").toggleClass("on");

        $("body").toggleClass("on");

        $("#wrap").toggleClass("on");

        $(".gnb1").toggleClass("on");
        $(".gnb2").toggleClass("on");


    });




    $(".address").click(function () {

        $(".mMod5.forWeb").toggleClass("on");

    });

    $(".mag").click(function () {

        $(".lMod9").css({
            display: "block"
        });

        $("body").addClass("on");
    });

    $(".lMod9 .btn_close").click(function () {

        $(".lMod9").css({
            display: "none"
        });

        $("body").removeClass("on");


    });

    let winw = $(window).innerWidth();

    if (winw <= 850) {
        $(".mMod9 .swiper-slide").click(function () {

            $(".lMod9").css({
                display: "block"
            });


        });
    }




    // let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    let naver = /naver/i.test(navigator.userAgent);


    // iOS에서만 작동
    // if (iOS) {

    //     $("html,body").on("touchmove", function () {

    //         let offset = $(".content").offset().top;
    //         // console.log(offset)

    //         if (offset < 0) {
    //             $(".gnb").removeClass("sticky");
    //         }
    //         ///// 0에만 반응시켜서 상단 메뉴만 안떨어지게 방지
    //         else if (offset === 0) {
    //             $(".gnb").addClass("sticky");
    //         }

    //     })
    // }

    // naver 주소창 fix
    if (naver && winw <= 850) {
        $("html, body").css({
            overflowX: "unset",
            overflowY: "unset"
        })
    }

})