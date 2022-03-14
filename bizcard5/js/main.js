$(function () {


    $(window).on('resize load', function () {
        let ismobile = $(window).innerWidth() <= 850 ? true : false;

        if (ismobile) {
            $("html").addClass("ismobile");
        } else {
            $("html").removeClass("ismobile");
        }
        // console.log(ismobile);

    });

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        slidesPerView: 1,
        loop: "true",
        spaceBetween: 50,
        pagination: {
            el: ".mMod9 .swiper-pagination",
            type: 'fraction',
        },
        navigation: {
            nextEl: ".mMod9 .swiper-button-next",
            prevEl: ".mMod9 .swiper-button-prev",
        }
    });



    $(".btn_menu a").click(function () {
        let cl = $(this).attr('class').split(" ")[0];

        // console.log(cl)

        switch (cl) {
            case "btn_phone":
                $(".btn_phone, .mod6bx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_address":
                $(".btn_address, .mod5bx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_pic":
                $(".btn_pic, .mod9bx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_vid":
                $(".btn_vid, .mod8bx").addClass("on").siblings().removeClass("on");
                break;
        }
    });


    $(".btn_pic").click(function () {
        if ($(".mMod8").css('display') !== "none") {
            $(".mMod8 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
        }
    });


    $(".mag").click(function () {
        $(".lMod9, html, body").addClass("on");

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: mMod9.realIndex,
            loop: "true",
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });
    });


    if ($("html").hasClass("ismobile") || $(window).innerWidth() <= 850) {
        // console.log("모바일");

        $(".mMod9 .swiper-slide").click(function () {
            $(".lMod9, html, body").addClass("on");


            var lMod9 = new Swiper(".lMod9 .swiper-container", {
                initialSlide: mMod9.realIndex,
                loop: "true",
                slidesPerView: 1,
                spaceBetween: 30,
                observer: true,
                observeParents: true
            });
        });
    }

    $(".close1").click(function () {
        $(".lMod9, html, body").removeClass("on");
    });

    $(".btn_QR").click(function () {
        $(".qrpopup, html, body").addClass("on");
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");
    });
});