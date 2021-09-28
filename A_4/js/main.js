$(function () {


    $(".menu ul li").click(function () {


        let cl = $("a", this).attr("class");


        switch (cl) {
            case "link1":
                $(".mMod4").toggleClass("on").siblings().removeClass("on");
                break;
            case "link2":
                $(".mMod7").toggleClass("on").siblings().removeClass("on");
                break;
            case "link3":
                $(".VI_wrap").toggleClass("on").siblings().removeClass("on");
                break;
            case "link4":
                $(".mMod5").toggleClass("on").siblings().removeClass("on");
                break;
            case "link5":
                $(".mMod6").toggleClass("on").siblings().removeClass("on");
                break;
        } /////////////////////////



        var tf = $(".hidden_wrap>div").is(".on");

        // console.log(tf)

        if (tf) {
            $(".btn_tel, .btn_top, .mSky").addClass("on");
        } else {
            $(".btn_tel, .btn_top, .mSky").removeClass("on");
        }


        $(this).toggleClass("hover").siblings().removeClass("hover");

    }); //////////////

}); ////////////////////////