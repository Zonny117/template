$(function () {

    $(document).on("load", function () {
        iNoBounce.enable()
    });



    let contweb = $(".content.forWeb .dn").filter(function(){
        return $(this).css("display") === "none"
    });

    if(contweb.length === 6){
        $(".btn_menu_slide.forWeb").css({
            display:"none"
        })
    }

    let contmobile = $(".content.forMobile .dn").filter(function(){
        return $(this).css("display") === "none"
    });

    if(contmobile.length === 7){
        $(".btn_menu_slide_white").css({
            display:"none"
        })
    }



    $(".btn_menu_slide").click(function () {

        $(".content").toggleClass("on");
        $(this).toggleClass("on")

    }); //////////////////


    // 아이프레임 일시정지
    $(".btn_menu_slide.on").click(function () {
        if ($(".mMod8.forWeb").css("display") != "none") {
            $(".mMod8.forWeb iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });


    $(".btn_more").click(function () {
        $("#jsMod9.forWeb").css({
            opacity: 1,
            zIndex: 9999
        });
    });

    $(".btn_close").click(function () {
        $("#jsMod9.forWeb").css({
            opacity: 0,
            zIndex: -1
        });

    });




    $('.btn_menu_slide_white').click(function () {

        // $(".content.forMobile").stop().animate({
        //     top: 0
        // }, 800, 'easeOutCubic');
        // $(".content.forMobile").css({
        //     zIndex: 999
        // });

        $(".content.forMobile .module").stop().animate({
            top: 0
        }, 1000, 'easeOutQuart')

        $(".contentBG").css({
            opacity: 1
        })

        $(".menu_slidebx").stop().animate({
            top: 0
        }, 1000, 'easeOutQuart')

        $(".connectbx").addClass("on");
        $(".btn_menu_slide_white").addClass("on");

    }); ////////////////

    $(".btn_menu_slide_m").click(function () {


        if ($(".mMod8.forMoblie").css("display") != "none") {
            $(".mMod8.forMoblie iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }


        $(".content.forMobile .module").stop().animate({
            top: "100%"
        }, 1000, 'easeOutCubic')

        $(".content.forMobile").css({
            zIndex: 0
        });

        $(".contentBG").css({
            opacity: 0
        })
        $(".menu_slidebx").stop().animate({
            top: "-30%"
        }, 1000, 'easeOutCubic')

        $(".connectbx").removeClass("on");
        $(".btn_menu_slide_white").removeClass("on");

    }); ////////////


    $(".btn_more_m").click(function () {
        $("#jsMod9.forMobile").css({
            opacity: 1,
            zIndex: 99999
        });
    });

    $(".btn_close_m").click(function () {
        $("#jsMod9.forMobile").css({
            opacity: 0,
            zIndex: -1
        });

    });


}); //////////////////////