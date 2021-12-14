$(function () {

    let main = $(".maintitle_bx").css("display")

    let flex = $(".flex").css("display")

    let mod4 = $(".mMod4 .tit, .mMod4 .txt").length;

    if (mod4 >= 2) {
        $(".mMod4 .swiper-slide").wrapInner('<div class="txtbx"></div>');
    }

    if (main === "none") {
        $(".gnb").addClass("on");
    }

    if (main === "none" && flex === "none") {
        $(".gnb").removeClass("on");
    }

    $(window).on("DOMMouseScroll mousewheel", function () {

        let sct = $(this).scrollTop();

        let flex_top = $(".flex").offset().top
        let mod4_top = $(".mMod4").offset().top
        let foot_top = $("footer").offset().top

        // console.log(sct + "스크롤")
        // console.log(flex_top)

        let topmenu = $(".topmenu").is(".top");

        // console.log(topmenu)

        if (topmenu) return;

        if (sct >= flex_top || sct >= foot_top) {
            $(".gnb").addClass("on");
        } else {
            $(".gnb").removeClass("on");
        }

        if (sct >= mod4_top) {
            $(".gnb").removeClass("on");
        }


    });


    $(".contact").click(function () {

        $(".topmenu").toggleClass("on");
        $("body").toggleClass("on");
        $(".gnb").toggleClass("top");
        $(this).toggleClass("on");
    });


    $(".top_btnbx>a").click(function () {

        $(this).addClass("on").siblings().removeClass("on");

        let cl = $(this).attr("class");

        // console.log(cl)


        switch (cl) {
            case "btn_contact on":
                $(".mMod6").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address on":
                $(".mMod5").addClass("on").siblings().removeClass("on");
                break;
        }
    });

    $(".mag").click(function () {
        $(".lMod9").addClass("on");
        $("body").addClass("on");
    })

    $(".btn_close").click(function () {
        $(".lMod9").removeClass("on");
        $("body").removeClass("on");
    })

    let winw = $(window).innerWidth();

    if (winw <= 850) {
        $(".mMod9 img").click(function () {

            $(".lMod9").addClass("on");
            $("body").addClass("on");
        });
    }
})