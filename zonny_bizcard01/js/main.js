$(window).load(function () {
    setTimeout(function () {
        $(".loading").fadeOut(500);

    }, 500);

});

$(function () {


    var main = new Swiper(".mainslide", {
        allowTouchMove: false,
    });

    let prot = 0;


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

        if ($(".text").hasClass("on")) {

            setTimeout(function () {
                $(".mMod4 .swiper-slide").each(function (index) {
                    $(this).delay(index * 100).animate({
                        transform: "translateX(0%)",
                        opacity: 1
                    }, 1500, 'easeOutCubic')
                });
            }, 600);
        }

        if ($(".media").hasClass("on")) {



            setTimeout(function () {


                $(".mMod8, .mMod9 .swiper-slide").each(function (index) {
                    $(this).delay(index * 100).animate({
                        transform: 'scale(1)',
                    }, 1500, 'easeOutCubic');
                });
            }, 500);
        }

        if (!$(".media").hasClass("on") && $(".mMod8").css('display') !== "none") {
            $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
    });



});