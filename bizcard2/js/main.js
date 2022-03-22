$(function () {


    //모듈제어
    let media = $(".media .dn").filter(function () {
        return $(this).css("display") === "none";
    });

    if (media.length === 2) {
        $(".media").css({
            display: "none"
        });
    }


    let mod9 = $(".mMod9").css("display");

    if (mod9 === "none") {
        $(".btn_vid").addClass("on").siblings().removeClass("on");
        $(".vidbx").addClass("on").siblings().removeClass("on");
    }

    let content = $(".content>.dn").filter(function () {
        return $(this).css("display") === "none";
    });

    if (content.length === 8) {
        $(".content").css({
            display: "none"
        });
    }


    function resize_content() {

        let wrap_pt = $("#wrap").css("paddingTop").split("px")[0];
        let logobx_height = $(".logobx").outerHeight(true);

        let height = parseInt(wrap_pt) + logobx_height

        // console.log(height)

        $(".content").css({
            minHeight: $(window).innerHeight() - height
        });

    }

    resize_content();


    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();

    $(window).resize(function () {
        vh();
        resize_content();
    });

    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if (lmod9.length >= 1) {
        lmod9.wrapInner('<div class="swiper-zoom-container"></div>')
    };

    let mag = $(".mMod9 .swiper-slide");

    if (mag.length >= 1) {
        mag.find("img").after("<a href='###' class='mag'>크게 보기</a>")
    }

    var mMod9 = new Swiper(".mMod9 .swiper-container", {
        spaceBetween: 30,
        grabCursor: true
    });

    $(".flex a").click(function () {

        let cl = $(this).attr("class");

        $(this).addClass("on").siblings().removeClass("on");

        // console.log(cl)

        switch (cl) {
            case "btn_pic":
                $(".picbx").addClass("on").siblings().removeClass("on");
                break;
            case "btn_vid":
                $(".vidbx").addClass("on").siblings().removeClass("on");
                break;
        }

    });

    // 모달 레이어팝업 바디 스크롤 막기
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

        $(".lMod9, html, body").addClass("on");

        if (iOS) {
            enable();
        }

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

        if (iOS) {
            disable();
        }
    });

    $(".btn_QR").click(function () {
        $(".qrpopup,html,body").addClass("on");

        if (iOS) {
            enable();
        }
    });

    $(".close2").click(function () {
        $(".qrpopup,html,body").removeClass("on");

        if (iOS) {
            disable();
        }
    })
});