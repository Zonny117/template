$(function () {


    document.getElementsByClassName("vid").controls = false;

    // 네이버 인앱 브라우저 높이값 설정
    let naverapp = (/naver/i.test(navigator.userAgent));

    if (naverapp) {
        $(".hidden_sbx").css({
            maxHeight: "90%"
        })
    }; /////////////////////



    let menu = [
        $(".sub .mMod4, .sub .mMod10").length,
        $(".mMod7.forMobile").length,
        $(".mMod8.forMobile, .mMod9.forMobile").length,
        $(".mMod5.forMobile").length,
        $(".mMod6.forMobile").length
    ]

    for (i = 0; i <= 4; i++) {



        // console.log(menu[i])

        if (menu[i] === 0) {



            $(".link" + (i + 1) + "_li").css({
                display: "none"
            });

        }
        // console.log(".link" + (i + 1) + "_li")
    }



    $(".menu ul li").click(function () {


        let cl = $("a", this).attr("class");


        switch (cl) {
            case "link1":
                $(".sub").toggleClass("on").siblings().removeClass("on");
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