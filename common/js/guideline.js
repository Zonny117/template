$(window).on('load resize', function () {

    $('body').append(`<div id="help">
    <a href="javascript:void(0)" class="btn_help on">도움말 표시</a>
</div>`);


    let modarr = [".background", ".mMod0", ".mMod1", ".mMod3", ".mMod4", ".mMod5", ".mMod6", ".mMod7", ".mMod8", ".mMod9", ".mMod10", ".mMod11"];



    $(".btn_help").click(function () {

        $(this).toggleClass("on");

        if ($(this).hasClass("on")) {
            $(`${modarr}`).removeClass("help relative");


            $(".helptxt").remove();
        } else {
            $(`${modarr}`).filter(function () {
                if ($(this).css('position') !== "absolute" && $(this).css('position') !== "fixed" && $(this).css('position') !== "sticky") {
                    $(this).addClass('help relative').append(`<div class="helptxt">`);
                } else {
                    $(this).addClass('help').append(`<div class="helptxt">`);
                }

            });
        }





        // for (let i = 0; i < modarr.length; i++) {

        //     $(modarr[i]).wrapInner(`<div class="inner">`);
        // }


    });

});