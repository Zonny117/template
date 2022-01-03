$(function () {

    let mod6 = $(".mMod6").css("display");
    let tel = $(".mMod6").outerHeight(true);

    function mod9pt() {

        let height = tel - 80;


        // console.log(tel)
        // console.log(height)

        if (mod6 !== "none") {
            $(".mMod9").css({
                paddingTop: (150 + height) + "px"
            })
        } else(
            $(".mMod9").css({
                paddingTop: "246px"
            })
        )
    }


    function mod9pt_mobile() {
        let height = tel - 60;

        if (mod6 !== "none") {
            $(".mMod9").css({
                paddingTop: (80 + height) + "px"
            })
        } else(
            $(".mMod9").css({
                paddingTop: "139px"
            })
        )
    }


    let winw = $(window).innerWidth();

    if (winw <= 850) {
        mod9pt_mobile();

        $(window).resize(function () {
            mod9pt_mobile();
        })
    } else {
        mod9pt();

        $(window).resize(function () {
            mod9pt();
        })
    }


    let sct;

    $(document).on("scroll", function () {

        sct = $(window).scrollTop();

        // console.log(sct);

        if (sct >= 50) {
            $(".gnb").addClass("on");
        } else {
            $(".gnb").removeClass("on");
        }

    })

})