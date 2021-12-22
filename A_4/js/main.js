$(function () {


    document.getElementsByClassName("vid").controls = false;

    // 네이버 인앱 브라우저 높이값 설정
    let naverapp = (/naver/i.test(navigator.userAgent));

    if (naverapp) {
        $(".hidden_sbx").css({
            maxHeight: "90%"
        })
    }; /////////////////////




    let link1 = $(".link1_dn").filter(function () {
        return $(this).css("display") === "none"
    })

    let link3 = $(".link3_dn").filter(function () {
        return $(this).css("display") === "none"
    })

    if (link1.length === 2) {
        $(".link1_li, .sub").css({
            display: "none"
        })
    }

    if (link3.length === 2) {
        $(".link3_li, VI_wrap").css({
            display: "none"
        })
    }

    console.log(link3.length)


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
            $(".btn_tel, .mSky").addClass("on");
        } else {
            $(".btn_tel, .mSky").removeClass("on");
        }


        $(this).toggleClass("hover").siblings().removeClass("hover");

    }); //////////////

}); ////////////////////////