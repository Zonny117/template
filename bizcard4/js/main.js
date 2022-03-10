$(function () {



    //모듈 제어
    $.fn.control = function () {

        return $(".dn", this).filter(function () {
            return $(this).css('display') === 'none';
        }).length;
    };



    // console.log($(".gallery").control())

    if ($(".gallery").control() === 2) {
        $(".gallery, .mediali").remove();
    }

    if ($(".bartrigger").control() === 3) {
        $(".bartrigger").css({
            display: "none"
        });
    }

    if ($(".mMod4").css('display') === 'none') {
        $(".txtli").remove();
    }

    if ($(".mMod5").css('display') === 'none') {
        $(".addli").remove();
    }

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

        let topidx = $(".top li").eq(idx);

        $(this).addClass("on").siblings().removeClass("on");


        $(this).find('a').addClass("on").parents("li").siblings().find('a').removeClass("on");

        main.slideTo(idx, 1000);

        topidx.addClass("on").siblings().removeClass("on first");


        if (!$(".media").hasClass("on") && $(".mMod8").length !== 0) {
            $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
    });

    $(".star").click(function () {
        $(".qrpopup").addClass("on");
    });

    $(".btn_close").click(function () {

        $("#qr img").remove();

        $(".qrpopup").removeClass("on");

    });


});