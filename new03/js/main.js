$(function () {

    // 모듈제어
    let content = $(".content .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (content.length === 8) {
        $(".content, .scroll").css({
            display: "none"
        })
    };


    

    // 영역 새로고침
    function reload() {

        $('.tigerbx').load(location.href + ' .tigerbx');
    }

    //회전 스크립트
    $(window).on("orientationchange", function (e) {

        var orientation = window.orientation;

        if (orientation == 90 || orientation == -90) {

            setTimeout(function () {

                reload();

            }, 100)


        } else {
            reload();

        }

    });

    reload();

    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }


    vh();

    //모바일 컨텐츠 모듈 비활성화일 때 메인박스 100vh
    function main_height() {

        let winw = $(window).innerWidth();
        let winh = $(window).innerHeight();

        // console.log(winw)

        if (winw <= 850 && content.length === 8) {

            // $(".maintitlebx").css({
            //     minHeight: "calc((var(--vh, 1vh) * 100) - 40px)"
            // });

            let minH = Math.round($(".maintitlebx").css('min-height').split("px")[0]);
            let paddingtop = Math.round($(".pbx").css('padding-top').split("px")[0]);
            let pbx_height = Math.round($(".pbx").height());


            // console.log(minH)

            let maintitle_height = minH - (paddingtop + pbx_height);

            if (pbx_height <= 310 && winh >= 686) {

                $(".pbx").css({
                    paddingBottom: maintitle_height + "px"
                });

            } else {

                $(".pbx").css({
                    paddingBottom: 82 + "%"
                });
            }

        } else if (winw <= 850 && content.length !== 7) {

            $(".pbx").css({
                paddingBottom: 82 + "%"
            });
        } else if (winw > 850) {
            $(".pbx").css({
                paddingBottom: 670 + "px"
            });
        }
    }


    main_height();




    // 리사이즈
    $(window).on('resize', function () {

        vh();


        main_height();


    })


    $(".mMod9 .swiper-slide").click(function () {

        $(".lMod9, html, body").addClass("on");
    })

    $(".btn_close").click(function () {

        $(".lMod9, html, body").removeClass("on");
    })




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

        $(".mMod9 .swiper-slide").click(function () {
            enable();
        });


        $(".btn_close").click(function () {
            disable();
        });
    }

})