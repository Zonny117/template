$(function () {

    var msnry = new Masonry('.mMod9', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 5,
        percentPosition: true,
    });

    imagesLoaded('.mMod9').on('progress', function () {
        msnry.layout();
    });

    var swiper = new Swiper(".mainslide", {
        grabCursor: true,
    });


});