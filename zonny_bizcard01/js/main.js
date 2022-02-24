$(function () {


    var main = new Swiper(".mainslide", {
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        allowTouchMove: false
    });

    let idx = main.activeIndex;



    $(".bottom ul li").click(function () {

        let idx = $(this).index();
        // console.log(idx);

        $(this).find('a').addClass("on").parents("li").siblings().find('a').removeClass("on");

        main.slideTo(idx, 1000);

    });

});