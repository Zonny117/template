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



    $(window).load(function () {

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
            background: '#fff',

            // content
            text: window.location.href,

            // corner radius relative to module width: 0.0 .. 0.5
            radius: 0,

            // quiet zone in modules
            quiet: 1,

            // modes
            // 0: normal
            // 1: label strip
            // 2: label box
            // 3: image strip
            // 4: image box
            mode: 4,

            mSize: 0.15,
            mPosX: 0.5,
            mPosY: 0.5,

            label: 'no label',
            fontname: 'sans',
            fontcolor: '#000',

            image: $(".qrlogo")[0]
        }

        $("#qr").qrcode(option);

        let qr = $("#qr img").attr('src');

        console.log(qr)

        $(".qrdown").attr('href', qr);
    });

    $(".qrcode").click(function () {
        $(".qrbx").addClass("on");
    });

    $(".qrbx .btn_close").click(function () {
        $(".qrbx").removeClass("on");
    });
});