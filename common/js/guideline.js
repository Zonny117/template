$(window).on('load resize', function () {
    let check = /iframePreview/i.test(window.location.href);

    // console.log(window.location.href);
    // if (check) {
    $('body').append(`<div id="help"><a href="javascript:void(0)" class="btn_help on">도움말 표시</a></div>`);
    let modarr = [".background", ".mMod0", ".mMod1", ".mMod3", ".mMod4 .swiper-slide", ".mMod5", ".mMod6", ".mMod7", ".mMod8", ".mMod9 .swiper-slide", ".mMod10", ".mMod11"];
    $(".btn_help").click(function () {
        let txt = $(this).text();


        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).text(txt.replace(/끄기/, '표시'));
            $(`${modarr}`).removeClass("help relative");
            $(".helptxt").remove();

        } else {
            $(this).text(txt.replace(/표시/, '끄기'));
            $(`${modarr}`).filter(function () {
                if ($(this).css('position') !== "absolute" && $(this).css('position') !== "fixed" && $(this).css('position') !== "sticky") {
                    $(this).addClass('help relative').append(`<div class="helptxt">`);
                } else {
                    $(this).addClass('help').append(`<div class="helptxt">`);
                }
            });
        }
    });
    // } else return;
});