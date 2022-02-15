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

    $(".lMod9 .btn_close").click(function () {
        $(".lMod9, html, body").removeClass("on");
    });


    var qrcode = new QRCode(document.getElementById("qr"), {
        text: window.location.href,
        // width: 400,
        // height: 400,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
    });

    $(window).load(function () {

        let qr = $("#qr img").attr('src');

        $(".qrdown").attr('href', qr);
    });

    $(".qrcode").click(function () {
        $(".qrbx").addClass("on");
    });

    $(".qrbx .btn_close").click(function () {
        $(".qrbx").removeClass("on");
    });
});