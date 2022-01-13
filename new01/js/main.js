$(function () {


    // function vhfix() {
    //     // 100vh fixed layer fix
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // }

    // vhfix();


    // // 리사이즈 될때마다 호출
    // $(window).resize(function () {
    //     vhfix();
    // })

    // 모듈제어
    let content = $(".content .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (content.length === 7) {
        $(".content, .scroll").css({
            display: "none"
        })
    };

    let bg = $(".background").css("display");

    if (bg !== "none") {
        $(".vid").css({
            display: "none"
        })
    }

    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    // iOS 100vh fix
    if (iOS) {
        $(window).bind("orientationchange", function (e) {
            var orientation = window.orientation;

            if (orientation == 90 || orientation == -90) {
                $(".mMod2").css({
                    height: "100vh"
                });
                // alert("landscape");
            } else {
                // alert("portrait");
                $(".mMod2").css({
                    height: "-webkit-fill-available"
                });
            }

        });

    }




})