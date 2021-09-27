$(function () {

    $(".menu ul li a").click(function () {

        var cl = $(this).attr("class");

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
        }


        var tf = $(".hidden_wrap>div").is(".on");

        // console.log(tf)

        if (tf) {
            $(".mSky").addClass("on");
        } else {
            $(".mSky").removeClass("on");
        }



    })


}); ////////////////////////