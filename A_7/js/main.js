$(function () {






    $(document).on("mouseup touchstart touchend", function (e) {

        if ($(".topmenu").has(e.target).length === 0) {
            $(".topmenu").removeClass("on");
        }

        $(".btn_dot").click(function () {


            $(".topmenu").toggleClass("on");

        });

    });



    $(document).on("DOMMouseScroll mousewheel keydown keyup", function () {

        let scT = $(window).scrollTop();

        let wrap = $("#wrap").height();
        // console.log(scT)

        if (scT >= wrap) {
            $(".titlebx").addClass("on")
        } else(
            $(".titlebx").removeClass("on")
        )
    });
    $("html, body").on("touchmove", function () {

        let touch = $("#wrap").scrollTop();

        let mod2 = $(".mMod2").height();

        //    console.log(touch);

        if (touch >= mod2) {
            $(".titlebx").addClass("on")
        } else(
            $(".titlebx").removeClass("on")
        )


    }); ///////////////



    $(".mag").click(function () {

        $(".lMod9").addClass("on");

        $("body").css({
            overflowY: "hidden"
        });
    });

    $(".btn_close").click(function () {
        $(".lMod9").removeClass("on");

        $("body").css({
            overflowY: "auto"
        });

    });
}); ////////////////