$(function () {

    let mod8 = $(".mMod8").length;

    if (mod8 === 0) {

        $(".youtubePlay").css({
            display: "none"
        })
    }

    let content = $(".mMod4, .mMod8, .mMod9, .mMod5, .mMod10").length;

    if (content === 0) {
        $(".content").css({
            display: "none"
        })
    }


    document.getElementsByClassName("vid").controls = false;

    var slides = $(".mMod9 .swiper-slide").length;
    // 슬라이더 중앙 정렬
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



    $(".youtubePlay").click(function () {

        $(".mMod8").fadeIn();

        $("video").get(0).pause();

    }); //////////////////////////////////

    $(".vid-exit").click(function () {

        $(".mMod8").hide();

        $("video").get(0).play();

        // 아이프레임 정지
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');


    }); ///////////////////////////////



    let winW = $(window).innerWidth();
    // 슬라이더 개수 설정
    if (winW <= 850) {

        var mMod9 = new Swiper(".mMod9 .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".mMod9 .swiper-button-next",
                prevEl: ".mMod9 .swiper-button-prev",
            }
        });
    } else {
        var mMod9 = new Swiper(".mMod9 .swiper-container", {
            loop:"true",
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".mMod9 .swiper-button-next",
                prevEl: ".mMod9 .swiper-button-prev",
            }
        });
    }

    var slideImg = $(".mMod9 .swiper-slide img");

    $(".slide-exit").click(function () {
        $("#jsMod9").css({
            zIndex: "-1",
            opacity: "0"
        })

        $("body").css({
            overflowY: "auto"
        })
    })

    if (winW > 768) {

        slideImg.click(function () {

            $("#jsMod9").css({
                zIndex: "999999999",
                opacity: "1"
            });

            $("body").css({
                overflowY: "hidden"
            })

        }); ///////////////////////////////

    } else {
        $(".more").click(function () {
            $("#jsMod9").css({
                zIndex: "999999999",
                opacity: "1"
            });
            $("body").css({
                overflowY: "hidden"
            })
        })
    }

}); /////////////////////////////////