$(function () {


    function vh() {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();

    function maintitle() {

        let mainHeight = $(".maintitlebx").outerHeight(true);

        // console.log(mainHeight)

        $(".maintitlebx").css({
            top: "-" + (mainHeight - 1) + "px"
        });
    };

    maintitle();

    $(window).resize(function () {
        maintitle();
        vh();
    });




    $(".mag").click(function () {
        $(".lMod9").css({
            display: "block"
        });

        $("html, body").css({
            overflow: "hidden"
        });
    });


    $(".btn_close").click(function () {
        $(".lMod9").css({
            display: "none"
        });

        $("html, body").css({
            overflow: "auto"
        });

    });

    let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


    const body = document.querySelector('body');
    let ios_scroll = 0;

    function enable() {
        ios_scroll = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${ios_scroll}px`;
        body.style.width = '100%';
    }

    function disable() {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, ios_scroll);
    }

    if (iOS) {

        $(".mag").click(function () {
            enable();
        });


        $(".btn_close").click(function () {
            disable();
        });
    }

})