$(function () {

    let img = $(".background img").height();

    // console.log(img)

    if(img <=840){
        $(".btn_fold").css({
            display:"none"
        });
    }

    let top_menu = $(".top_menu .dn").filter(function(){
        return $(this).css("display") === "none"
    })

    // console.log(top_menu.length)

    if(top_menu.length === 5){
        $(".top_menu, .open").css({
            display:"none"
        });
    }


    $(window).on('scroll DOMMouseScroll mousewheel', function () {

        let scT = $("body").scrollTop();

        let footer = $(".mMod5").offset().top;
        // let mod3 = $(".mMod3").height();

        let value = scT - footer;
        // console.log(scT + "body")
        // console.log(value + "차이")
        // console.log(mod3 + "하단")

        // let prot = 0;

        // if (prot) return;

        // prot = 1;

        // setTimeout(function () {

        //     prot = 0;

        // }, 800);


        if (scT - value <= 694) {
            $(".mMod6").addClass("on");
            $(".lbx .mMod3 .txt").addClass("on");
            $(".mMod11.forWeb").addClass("on");
        } else {
            $(".mMod6").removeClass("on");
            $(".lbx .mMod3 .txt").removeClass("on");
            $(".mMod11.forWeb").removeClass("on");
        }

    }); ////////////////////


    $(".contact").click(function () {
        $(".pbx").toggleClass("none");
        $(".mMod6").toggleClass("none");

        let txt = $(this).text();
        // console.log(txt);

        if (txt === "contact") {
            $(this).text(txt.replace(txt, "close"))
            $(this).addClass("on")
        } else if (txt === "close") {
            $(this).text(txt.replace(txt, "contact"))
            $(this).removeClass("on")
        }

    });

    $(".btn_fold").click(function () {
        $(this).toggleClass("on");
        $(".background").toggleClass("on");
    });

    $(".btn_close").click(function () {
        $(".lMod9").css({
           display:"none"
        })

        $("body").removeClass("on");
    });

    $(".mMod9.forWeb .mag").click(function () {
        $(".lMod9.forWeb").css({
            display:"block"
        });
        $("body").addClass("on");

    })

    $(".mMod9.forMobile .mag").click(function () {
        $(".lMod9.forMobile").css({
            display:"block"
        });
        $("body").addClass("on");

    })

    $(".open").click(function () {
        $(this).toggleClass("on");
        $(".top_menu").toggleClass("on");

        $("body").toggleClass("on");


        let txt2 = $("a", this).text();

        // console.log(txt2)

        if (txt2 === "open") {
            $("a", this).text(txt2.replace(txt2, "close"))
        } else if (txt2 === "close") {
            $("a", this).text(txt2.replace(txt2, "open"))
        }
    });


}); /////////////////