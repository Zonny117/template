$(function () {

    var msnry = new Masonry('.rbx', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 8,
        // percentPosition: true,
    });

    imagesLoaded('.rbx').on('progress', function () {
        msnry.layout();
    });

    $(".mMod9 .swiper-slide").click(function () {
        let idx = $(this).index();

        $(".lMod9, html, body").addClass("on");

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });
    });

    $(".btn_close").click(function () {
        $(".lMod9, html, body").removeClass("on");
    });


});