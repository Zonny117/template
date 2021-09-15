$(function () {

    var slides = $(".mMod9 .swiper-slide").length;

    if (slides >= 3) {
        $(".mMod9 .swiper-wrapper").css({
            justifyContent: "unset"
        })
    } else {
        $(".mMod9 .swiper-wrapper").css({
            justifyContent: "center"
        })
    }
    ////////////////////////////////



    $(".play_ico").click(function () {

        $(".mMod8").fadeIn();

    }); //////////////////////////////////

    $(".vid-exit").click(function () {

        $(".mMod8").hide();

        // 아이프레임 정지
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');


    }); ///////////////////////////////

    var slideImg = $(".mMod9 .swiper-slide img");

    slideImg.click(function () {

        $("#jsMod9").css({
            zIndex: "999999999",
            opacity: "1"
        });

    }); ///////////////////////////////

    $(".slide-exit").click(function () {
        $("#jsMod9").css({
            zIndex: "-1",
            opacity: "0"
        })
    })

}); /////////////////////////////////