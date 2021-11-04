$(function () {

    $(".btn_menu_slide").click(function () {

        $(".content").toggleClass("on");
        $(this).toggleClass("on")

    }); //////////////////



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

}); //////////////////////