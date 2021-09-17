$(function () {

    let ts, te;

    $(document).on("touchstart", function (e) {
        ts = e.originalEvent.touches[0].screenY;

        // console.log(ts)
    })

    $(document).on("touchend", function (e) {

        te = e.originalEvent.changedTouches[0].screenY;

        // console.log(te);

        let touch = ts - te;

        console.log(touch)

        if (touch > 0) {
            $(".mMod2").css({
                height: "120%"
            })
        } else {
            $(".mMod2").css({
                height: "100%"
            })
        }

    }) /////////////////////////////////////////////////

    var slides = $(".mMod9 .swiper-slide").length;
    // 슬라이더 자동 줄맞춤
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



    let winW = $(window).innerWidth();
    // 슬라이더 개수 설정
    if (winW <= 768) {

        var mMod9 = new Swiper(".mMod9 .swiper-container", {
            slidesPerView: 1,
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
            slidesPerView: 3,
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
    })

    if (winW > 768) {

        slideImg.click(function () {

            $("#jsMod9").css({
                zIndex: "999999999",
                opacity: "1"
            });

        }); ///////////////////////////////

    } else {
        $(".more").click(function () {
            $("#jsMod9").css({
                zIndex: "999999999",
                opacity: "1"
            });
        })
    }



}); /////////////////////////////////