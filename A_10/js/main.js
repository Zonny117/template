$(function () {


    // 모듈 제어
    let mod4 = $(".mMod4 .tit, .mMod4 .txt").length;
    let mod7 = $(".mMod7").css("display");
    let mod10 = $(".mMod10").css("display");
    let content = $(".dn").filter(function () {
        return $(this).css("display") === "none"
    });

    // console.log(content.length)

    let sns = $(".mMod11 a").length;

    if(sns === 0){
        $(".mMod11").css({
            display:"none"
        })
    }

    let footer = $(".fdn").filter(function () {
        return $(this).css("display") === "none"
    })

    if (mod4 >= 2) {
        $(".mMod4.forWeb .swiper-slide").wrapInner('<div class="txtbx"></div>');
    }

    if (mod7 === "none") {
        $(".mMod10 a").css({
            margin: 0
        })
    }

    if (mod7 === "none" && mod10 === "none") {
        $(".topmenu").css({
            display: "none"
        })

        $(".btn_dot").css({
            display: "none"
        })
    }

    if (content.length >= 5) {
        $(".content").css({
            height: "100vh"
        })
    }

    if (footer.length === 3) {
        $("footer").css({
            display: "none"
        })
    }


    if ($(".address").css("display") === "none") {

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




    let naver = /naver/i.test(navigator.userAgent);
    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


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


    // naver app 주소창 fix
    if (naver && winw <= 850) {
        $("html, body").css({
            overflowX: "unset",
            overflowY: "unset"
        })
    }


    // iOS 모달 레이어 팝업시 바디 스크롤 막기
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
        $(".dot_web, .mMod9 .swiper-slide").click(function () {
            enable();
        });

        $(".dot_mobile, .lMod9 .btn_close").click(function () {
            disable();
        });
    }

    

})