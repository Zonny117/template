$(function () {

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        spaceBetween: 30,
        grabCursor: true
    });

    let mag = $(".mMod9 .swiper-slide");

    if (mag.length >= 1) {
        mag.find("img").after("<a href='###' class='mag'>크게 보기</a>")
    }

    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if (lmod9.length >= 1) {
        lmod9.wrapInner('<div class="swiper-zoom-container"></div>')
    };

    $(".mMod9 .swiper-slide").click(function () {

        let idx = $(this).index();

        $(".lMod9, html, body").addClass("on");

        // if (iOS) {
        //     enable();
        // }

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            zoom: {
                minRatio: 1,
                maxRatio: 2,
            },
            initialSlide: idx,
            slidesPerView: 1,
            spaceBetween: 50,
            observer: true,
            observeParents: true
        });

    });

    $(".btn_close").click(function () {
        $(".lMod9, html, body").removeClass("on");

        // if (iOS) {
        //     disable();
        // }
    });
});