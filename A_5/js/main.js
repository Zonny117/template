$(function () {

    $(".btn_menu_slide").click(function () {

        $(".content").toggleClass("on");
        $(this).toggleClass("on")

    }); //////////////////


    // 아이프레임 일시정지
    $(".btn_menu_slide.on").click(function () {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });


    $(".btn_more").click(function () {
        $("#jsMod9").css({
            opacity: 1,
            zIndex: 9999
        });
    });

    $(".btn_close").click(function () {
        $("#jsMod9").css({
            opacity: 0,
            zIndex: -1
        });

    });




    $('.btn_menu_slide_white').click(function () {

        $(".content.forMobile").stop().animate({
            top: 0
        }, 800, 'easeOutCubic');

    }); ////////////////

    $(".btn_menu_slide_m").click(function () {

        $("iframe")[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

        $(".content.forMobile").stop().animate({
            top: "100%"
        }, 800, 'easeInOutQuart');


    }); ////////////





}); //////////////////////