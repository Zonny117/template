$(function () {






    $(document).mouseup(function (e) {

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

}); ////////////////