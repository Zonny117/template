$(function () {


    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if(lmod9.length >= 1){
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

    $(".mMod9 .swiper-slide").click(function () {
        let idx = $(this).index();
        // console.log(idx);
        $(".lMod9, html, body").addClass("on");

        if (iOS) {
            enable();
        }

        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            zoom: true,
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,


        });

    });

    $(".btn_close").click(function () {



        $(".lMod9, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });


    $(".btn_QR").click(function () {
        $("html, body, .qrpopup").addClass("on");

        if (iOS) {
            enable();
        }
    });

    $(".close2").click(function () {
        $(".qrpopup, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });


});