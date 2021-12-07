$(function () {

    let mod4 = $(".mMod4 .tit, .mMod4 .txt").length;
    let mod7 = $(".mMod7 a").length;

    // console.log(mod4)

    if (mod4 >= 2) {
        $(".mMod4.forWeb .swiper-slide").wrapInner('<div class="txtbx"></div>');
    }

    if (mod7 === 0) {
        $(".mMod10 a").css({
            margin: 0
        })
    }


    $(".contact").click(function () {

        $(".mMod6").addClass("on");

        $(this).addClass("on");
    });

    $(".mMod6 .btn_close").click(function () {


        $(".mMod6").removeClass("on");

        $(".contact").removeClass("on");

    });

    $(".btn_dot").click(function () {


        $(".topmenu").toggleClass("on");

        $("body").toggleClass("on");
    });


    $(".address").click(function () {

        $(".mMod5").toggleClass("on");

    });

    $(".mag").click(function () {

        $(".lMod9").css({
            display: "block"
        });

        $("body").addClass("on");
    });

    $(".lMod9 .btn_close").click(function () {

        $(".lMod9").css({
            display: "none"
        });

        $("body").removeClass("on");


    });

    let winw = $(window).innerWidth();

    if (winw <= 850) {
        $(".mMod9 .swiper-slide").click(function () {

            $(".lMod9").css({
                display: "block"
            });


        });
    }

})