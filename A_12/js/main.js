$(function () {

    $(document).on("DOMMouseScroll mousewheel", function (e) {

        e = window.event || e;

        let E = e.detail ? e.detail : e.wheelDelta;

        // console.log(E)

        if (/Firefox/i.test(navigator.userAgent)) {
            E = -E;
        }


        let sct = $(document).scrollTop();

        // console.log(sct)

        if (E < 0 && sct > 0) {
            $(".gnb").addClass("on")
        }

        if (E > 0 && sct <= 200) {
            $(".gnb").removeClass("on")
        }

    })

    let winw = $(window).innerWidth();

    $(".contact").click(function () {
        $(".topmenu").addClass("on");
        $(".dim").addClass("on");

        if (winw <= 850) {
            $("html,body").addClass("on");
        }

    })

    $(".btn_close1").click(function () {
        $(".topmenu").removeClass("on");
        $(".dim").removeClass("on");

        if (winw <= 850) {
            $("html,body").removeClass("on");
        }
    })

    $(".topmenu .section_txt").click(function () {
        $(this).addClass("on").siblings().removeClass("on");

        let cl = $(this).attr("class");

        //공백 기준 자르기 - 따옴표 사이 띄어쓰기
        let split = cl.split(" ")

        // console.log(split[0])



        switch (split[0]) {
            case "btn_contact":
                $(".mMod6").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address":
                $(".mMod5").addClass("on").siblings().removeClass("on");
                break;

        }
    })

    $(".mag").click(function () {
        $(".lMod9").addClass("on");
        $("html, body").addClass("on");
    })


    $(".btn_close2").click(function () {
        $(".lMod9").removeClass("on");
        $("html, body").removeClass("on");
    })


    let sns = $(".mMod11 a")

    if (sns.length === 0) {
        return;
    }

    for (let i = 0; i <= 3; i++) {

        // console.log(sns[i].text);

        // sns 치환코드는 소문자로만 받아오기 때문에 toLowerCase 함수 사용
        switch (sns[i].text.toLowerCase()) {
            case "facebook":
                $(".facebook").text("Facebook")
                break;
            case "twitter":
                $(".twitter").text("Twitter")
                break;
            case "instagram":
                $(".instagram").text("Instagram")
                break;
            case "youtube":
                $(".youtube").text("Youtube")
                break;
        }
    }
})