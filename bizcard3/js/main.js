$(function () {



    //모듈 제어
    let guide = $(".guide .dn").filter(function () {
        return $(this).css("display") === "none";
    });
    let main = $(".maintitlebx .dn").filter(function () {
        return $(this).css("display") === "none";
    });

    // // .dn 찾는 메소드
    // $.fn.dn_finder = function () {
    //     return $(this).find(".dn").filter(function () {
    //         return $(this).css("display") === "none"
    //     }).length;
    // };

    // let maintit = $(".maintitlebx").dn_finder();


    if (guide.length === 6) {
        $(".content").css({
            padding: 0
        });

        $(".whitebg").css({
            display: "none"
        });

        $(".maintitlebx").addClass("on");
    }

    if (main.length === 2) {
        $(".maintitlebx").css({
            display: "none"
        });

        $(".whitebg").css({
            display: "none"
        });

        $(".mMod2").css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(var(--vh, 1vh) * 100)"
        });

        $(".logobx").css({
            marginTop: 0
        });
    }

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vh();

    $(window).resize(function () {
        vh();
    });

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


    function getScrollPosition() {
        return Math.floor(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
    }



    // 스크롤 바운스 배경처리
    $(window).scroll(function () {

        let sct = 0.01 * getScrollPosition()


        if ($(".content").innerHeight() > $(window).innerHeight() && iOS) {
            $(".hiddenbg").css({
                opacity: sct.toFixed(2)
            });
        }


        // console.log(sct.toFixed(2))
    });
});