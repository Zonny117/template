$(function () {



    $(window).on('DOMMouseScroll mousewheel', function () {

        let scT = $("body").scrollTop();

        let footer = $(".mMod5").offset().top;


        let value = scT - footer;

        // console.log(scT + "body")
        // console.log(value + "차이")
        // console.log(footer + "하단")

        // let prot = 0;

        // if (prot) return;

        // prot = 1;

        // setTimeout(function () {

        //     prot = 0;

        // }, 800);


        if (scT - value <= 994) {
            $(".mMod6").addClass("on");
        } else {
            $(".mMod6").removeClass("on");
        }
    }); ////////////////////


    $(".contact").click(function () {
        $(".pbx").toggleClass("none");
        $(".mMod6").toggleClass("none");

        let txt = $(this).text();
        // console.log(txt);

        if (txt === "contact") {
            $(this).text(txt.replace(txt, "close"))
            $(this).addClass("on")
        } else if (txt === "close") {
            $(this).text(txt.replace(txt, "contact"))
            $(this).removeClass("on")
        }

    });

    $(".btn_fold").click(function () {
        $(this).toggleClass("on");
        $(".background").toggleClass("on");
    });

    $(".btn_close").click(function () {
        $(".lMod9").css({
            opacity: 0,
            zIndex: -9
        })

        $("body").removeClass("on");
    });

    $(".mag").click(function () {
        $(".lMod9").css({
            opacity: 1,
            zIndex: 9999999
        })
        $("body").addClass("on");

    })

    $(".open").click(function () {
        $(this).toggleClass("on");
        $(".top_menu").toggleClass("on");

        $("body").toggleClass("on");

        $("iframe")[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

        let txt2 = $("a", this).text();

        // console.log(txt2)

        if (txt2 === "open") {
            $("a", this).text(txt2.replace(txt2, "close"))
        } else if (txt2 === "close") {
            $("a", this).text(txt2.replace(txt2, "open"))
        }
    });

   
}); /////////////////