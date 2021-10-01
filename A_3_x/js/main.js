$(function () {

    document.getElementsByClassName("vid").controls = false;

    // let prot = 0;

    // let ts, te, touch;

    // let winH = $(window).innerHeight()


    // // 모바일 터치 이벤트
    // $(document).on("touchstart", function (e) {

    //     e.stopPropagation();


    //     ts = e.originalEvent.touches[0].screenY;
    // });

    // $(document).on("touchend", function (e) {

    //     e.stopPropagation();



    //     if (prot) return;

    //     prot = 1;

    //     setTimeout(function () {
    //         prot = 0;
    //     }, 500)


    //     te = e.originalEvent.changedTouches[0].screenY;

    //     touch = ts - te;

    //     // 컨텐츠 박스 슬라이드업
    //     if (touch > 0 && winW <= 768) {
    //         $(".mMod2").stop().animate({
    //             height: 0 + "%"
    //         }, 500, 'easeOutCubic')
    //     } //////////////////////////
    //     else if (touch < 0 && winW <= 768) {
    //         $(".mMod2").stop().animate({
    //             height: 100 + "%"
    //         }, 500, 'easeOutCubic')
    //     }

    // }); ////////////////////////////////////



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