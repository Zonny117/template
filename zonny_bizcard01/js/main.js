$(window).load(function () {
    setTimeout(function () {
        $(".loading").fadeOut(500);

    }, 500);

});


$(function () {


    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if (lmod9.length >= 1) {
        lmod9.wrapInner('<div class="swiper-zoom-container"></div>')
    };

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    vh();

    $(window).resize(function () {
        vh();
    });

    var main = new Swiper(".mainslide", {
        allowTouchMove: false,
    });

    let prot = 0;

    $(".mMod9 .swiper-slide").click(function () {

        let idx = $(this).index();

        $(".lMod9").fadeIn(600);

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            zoom: {
                minRatio: 1,
                maxRatio: 2,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
        });
    });

    $(".close1").click(function () {
        $(".lMod9").fadeOut(600);
    });




    $(".mMod4 .swiper-slide").each(function (index) {
        $(".tit", this).prepend("<span class='number'>" + (index + 1) + "</span>")
    });



    $(".bottom ul li").click(function () {

        if (prot) return;
        prot = 1;
        setTimeout(function () {
            prot = 0;
        }, 1000);

        let idx = $(this).index();
        // console.log(idx);

        let topidx = $(".top li").eq(idx);




        $(this).find('a').addClass("on").parents("li").siblings().find('a').removeClass("on");

        main.slideTo(idx, 1000);

        topidx.addClass("on").siblings().removeClass("on, first").find("span").removeAttr("style").stop();

        if (topidx.hasClass("on")) {
            topidx.find('span').each(function (index) {
                $(this).delay(index * 100).animate({
                    transform: "translateY(0%)"
                }, 800, 'easeOutBack')
            });
        }

        // if ($(".text").hasClass("on")) {

        //     setTimeout(function () {
        //         $(".mMod4 .swiper-slide").each(function (index) {
        //             $(this).delay(index * 100).animate({
        //                 transform: "translateX(0%)",
        //                 opacity: 1
        //             }, 1500, 'easeOutCubic')
        //         });
        //     }, 600);
        // }

        // if ($(".media").hasClass("on")) {



        //     setTimeout(function () {


        //         $(".mMod8, .mMod9 .swiper-slide").each(function (index) {
        //             $(this).delay(index * 100).animate({
        //                 transform: 'scale(1)',
        //             }, 1500, 'easeOutCubic');
        //         });
        //     }, 500);
        // }

        if (!$(".media").hasClass("on") && $(".mMod8").css('display') !== "none") {
            $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
    });

    function generateQRCode() {

        var startNode = "BEGIN:VCARD" + "\n" + "VERSION:3.0" + "\n";
        var endNode = "END:VCARD";
        startNode += "N:" + "정원중" + "\n";
        startNode += "FN:" + "정원중" + "\n";
        // startNode += "EMAIL:" + email.value.trim() + "\n";
        startNode += "ORG:" + "디바이언스" + "\n";
        // startNode += "TITLE:" + title.value.trim() + "\n";
        startNode += "NOTE:" + "나야나" + "\n";
        startNode += "URL:" + window.location.href + "\n";
        startNode += "TEL;TYPE=CELL:" + "01035550958" + "\n";
        startNode += "ADR;TYPE=WORK:" + "미사 비즈타워 1003호" + "\n";

        startNode += endNode;


        var option = {
            // render method: 'canvas', 'image' or 'div'
            render: 'image',

            // version range somewhere in 1 .. 40
            minVersion: 6,
            maxVersion: 40,

            // error correction level: 'L', 'M', 'Q' or 'H'
            ecLevel: 'H',

            // offset in pixel if drawn onto existing canvas
            left: 0,
            top: 0,

            // size in pixel
            size: 300,

            // code color or image element
            fill: '#000',

            // background color or image element, null for transparent background
            background: "#fff",

            // content
            text: startNode,

            // corner radius relative to module width: 0.0 .. 0.5
            radius: 0,

            // quiet zone in modules
            quiet: 3,

            // modes
            // 0: normal
            // 1: label strip
            // 2: label box
            // 3: image strip
            // 4: image box
            mode: 4,

            mSize: 0.09,
            mPosX: 0.95,
            mPosY: 0.96,

            label: 'no label',
            fontname: 'sans',
            fontcolor: '#000',

            image: $(".qrlogo")[0]
        }
        $("#qr").qrcode(option);

    }

    $(".createQR").click(function () {
        generateQRCode()

    });

    $(".heart").click(function () {
        $(".qrpopup").addClass("on");
    });

    $(".btn_close").click(function () {

        $("#qr img").remove();

        $(".qrpopup").removeClass("on");

    });


});