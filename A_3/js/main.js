$(function () {


    let content = $(".content .dn").filter(function () {
        return $(this).css("display") === "none"
    })

    let contmobile = $(".content .mdn").filter(function () {
        return $(this).css("display") === "none"
    })

    if (content.length === 4 || contmobile.length === 5) {
        $(".content").css({
            display: "none"
        })
    }


    document.getElementsByClassName("vid").controls = false;

    let slides = $(".mMod9 .swiper-slide").length;
    // 슬라이더 중앙 정렬
    // if (slides >= 3) {
    //     $(".mMod9 .swiper-wrapper").css({
    //         justifyContent: "unset"
    //     })
    // } else {
    //     $(".mMod9 .swiper-wrapper").css({
    //         justifyContent: "center"
    //     })
    // }
    ////////////////////////////////



    $(".youtubePlay").click(function () {

        $(".mMod8").fadeIn();

        // $("video").get(0).pause();

    }); //////////////////////////////////

    $(".vid-exit").click(function () {

        $(".mMod8").hide();

        // $("video").get(0).play();

        // 아이프레임 정지
        // $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');



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
            slidesPerView: slides,
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

    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

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

    $(".btn_QR").click(function () {
        $("html, body, .qrpopup").addClass("on");

        if (iOS) {
            enable();
        }
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });

    resize_mod9txt(false);




}); /////////////////////////////////