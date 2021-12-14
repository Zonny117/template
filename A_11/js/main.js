$(function () {

    let main = $(".maintitle_bx").css("display")

    let flex = $(".flex").css("display")

    let mod4 = $(".mMod4 .tit, .mMod4 .txt").length;

    if (mod4 >= 2) {
        $(".mMod4 .swiper-slide").wrapInner('<div class="txtbx"></div>');
    }

    if (main === "none") {
        $(".gnb").addClass("on");
    }

    if (main === "none" && flex === "none") {
        $(".gnb").removeClass("on");
    }



    $(document).on("touchmove touchstart touchend", function(){
        
        let sct = $(this).scrollTop();

        let flex_top = $(".flex").offset().top
        let mod4_top = $(".mMod4.forMobile").offset().top
        let foot_top = $("footer").offset().top



        // console.log(sct)

        let topmenu = $(".topmenu").is(".top");

        // console.log(topmenu)

        if (topmenu) return;
        
        if(sct >= flex_top || sct >= foot_top){
            $(".gnb").addClass("on")
        }
        else{
            $(".gnb").removeClass("on");
        }

        if (sct >= mod4_top) {
            $(".gnb").removeClass("on");
        }

    })



    $(window).on("DOMMouseScroll mousewheel", function () {

        let sct = $(this).scrollTop();

        let flex_top = $(".flex").offset().top
        let mod4_top = $(".mMod4.forWeb").offset().top
        let foot_top = $("footer").offset().top

        // console.log(sct + "스크롤")
        // console.log(flex_top)

        let topmenu = $(".topmenu").is(".top");

        // console.log(topmenu)

        if (topmenu) return;

        if (sct >= flex_top || sct >= foot_top) {
            $(".gnb").addClass("on");
        } else {
            $(".gnb").removeClass("on");
        }

        if (sct >= mod4_top) {
            $(".gnb").removeClass("on");
        }


    });


    $(".contact").click(function () {

        $(".topmenu").toggleClass("on");
        $("body").toggleClass("on");
        $(".gnb").toggleClass("top");
        $(".contact").toggleClass("on");

    });

    $(".contact1").click(function(){

        $(this).css({
            display:"none"
        });
        
        $(".contact2").css({
            display:"block"
        });

    })
    $(".contact2").click(function(){

        $(this).css({
            display:"none"
        })

        $(".contact1").css({
            display:"block"
        });

    })


    $(".top_btnbx>a").click(function () {

        $(this).addClass("on").siblings().removeClass("on");

        let cl = $(this).attr("class");

        // console.log(cl)


        switch (cl) {
            case "btn_contact on":
                $(".mMod6").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address on":
                $(".mMod5").addClass("on").siblings().removeClass("on");
                break;
        }
    });

    $(".mag").click(function () {
        $(".lMod9").addClass("on");
        $("body").addClass("on");
    })

    $(".btn_close").click(function () {
        $(".lMod9").removeClass("on");
        $("body").removeClass("on");
    })

    let winw = $(window).innerWidth();

    if (winw <= 850) {
        $(".mMod9 img").click(function () {

            $(".lMod9").addClass("on");
            $("body").addClass("on");
        });
    }


    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    const body = document.querySelector('body');
    let ios_scroll = 0;

    function enable() {
        ios_scroll = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${ios_scroll}px`;
        body.style.width = '100%';
    }

    function disable() {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, ios_scroll);
    }

    if (iOS) {
        $(".mMod9 img, .contact1").click(function () {
            enable();
        })

        $(".btn_close, .contact2").click(function () {
            disable();
        })

    }
})