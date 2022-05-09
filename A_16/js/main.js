$(function () {

    //모듈제어
    let bg = $(".back").css('display');

    if (bg === "none") {
        $(".default").css({
            display: "block"
        });
    }

    let section1 = $(".section1 .dn").filter(function () {
        return $(this).css('display') === "none"
    });
    let section2 = $(".section2 .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (section1.length === 2) {
        $(".section1").css({
            display: "none"
        });
    }

    if (section2.length === 2) {
        $(".section2").css({
            display: "none"
        });
    }

    let contact = $(".topmenu .dn").filter(function () {
        return $(this).css('display') === "none"
    });

    if (contact.length === 2) {
        $(".topmenu, .contact").css({
            display: "none"
        });
    }




    // 초기 스크롤값
    let old = 0;
    let prot = 0;



    function vh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    vh();

    $(window).on('resize load', function () {
        vh();

        if ($(window).innerWidth() <= 850) {
            $("html").addClass("ismobile")
        } else(
            $("html").removeClass("ismobile")
        )

        if ($(".mMod3").css('display') === "none") {

            if ($("html").hasClass("ismobile")) {
                $(".maintitlebx").css({
                    paddingTop: '0px',
                    paddingBottom: '0',
                    minHeight: '0'
                });
            } else {
                $(".maintitlebx").css({
                    paddingTop: '80px',
                    paddingBottom: '0',
                });
            }



        }
    });



    $(window).on('scroll', function () {



        if ($(".topmenu").hasClass("on")) return;

        //스크롤 하단
        // console.log(sct + "스크롤")
        let sct = $(window).scrollTop();

        let winh = $(window).innerHeight();
        // let domh = $(document).height();

        let vw = sct + winh;
        // console.log(vw + "윈도우")
        // console.log(domh + "도큐먼트")

        let mod7 = Math.floor($(".mMod7").offset().top);

        // console.log(mod7 + "모듈7");


        //animation
        // let section1 = Math.floor($(".section1").offset().top - 500);
        // console.log(sct)
        // console.log(section1)
        if (vw >= mod7) {

            setTimeout(function () {
                $(".link").animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');

                $(".mMod7 a").each(function (index) {
                    $(this).delay(index * 100).animate({
                        top: 0,
                        opacity: 1,
                    }, 800, 'easeOutCirc')
                });
            }, 500)

        }

        if (vw > $(".mMod10").offset().top) {
            setTimeout(function () {
                $(".download").animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');

                $(".mMod10 a").delay(400).animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');
            }, 500);


        }

        if (vw > $(".mMod9").offset().top) {
            setTimeout(function () {
                $(".lbx").animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');

                $(".rbx").delay(400).animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');
            }, 500);
        }

        if (vw > $(".mMod8").offset().top) {
            setTimeout(function () {
                $(".video").animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');

                $(".iframebx").delay(400).animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');
            }, 500)

        }
        if (vw > $(".mMod4").offset().top) {
            setTimeout(function () {
                $(".lbx2").animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');

                $(".rbx2").delay(400).animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');
            }, 500)

        }



        if (vw > $(".mMod11").offset().top) {
            setTimeout(function () {
                $(".sns").animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc');


                $(".mMod11 a").each(function (index) {
                    $(this).delay(index * 100).animate({
                        top: 0,
                        opacity: 1,
                    }, 800, 'easeOutCirc')
                });
            }, 500)

        }


        if (prot) return;
        prot = 1;
        setTimeout(function () {
            prot = 0;
        }, 100);

        // 현재 스크롤값
        let newval = $(this).scrollTop();


        //스크롤 다운 감지
        if (newval > old) {
            $(".gnb").stop().animate({
                top: "-80px"
            }, 500, "easeOutCubic")
        }
        //스크롤 업 감지
        else {
            $(".gnb").stop().animate({
                top: "0px"
            }, 500, "easeOutCubic")
        }

        // 초기 스크롤값 현재 값으로 업데이트
        old = newval;

        //모바일 지도 애니메이션
        if (!$("html").hasClass("ismobile")) return;

        if (vw >= $(".mMod5.mobile").offset().top) {
            $(".ani5m").each(function (index) {
                $(this).delay(index * 100).animate({
                    top: 0,
                    opacity: 1,
                }, 800, 'easeOutCirc')
            });
        }

    });





    // 사진 확대용 컨테이너 추가
    let lmod9 = $(".lMod9 .swiper-slide");
    // console.log(lmod9.length)

    if (lmod9.length >= 1) {
        lmod9.wrapInner('<div class="swiper-zoom-container"></div>')
    };







    // 슬라이드 확대 버튼 생성
    let mag = $(".mMod9 .swiper-slide");

    if (mag.length >= 1) {
        mag.prepend('<a href="###" class="mag">크게 보기</a>');
    };

    // 말줄임용 박스 생성
    let link = $(".mMod7 a, .mMod10 a");

    // console.log(link)

    if (link.length >= 1) {
        link.wrapInner('<p></p>');
    };

    // console.log(mod7)

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

    $(".contact").click(function () {
        $(".topmenu, html, body").addClass("on");
        if (iOS) {
            enable();
        }

        //animation
        $(".ani6, .ani5").each(function (index) {
            $(this).delay(index * 100).animate({
                left: 0,
                opacity: 1,
            }, 800, 'easeOutCirc').delay(index * 100).animate({
                left: 0,
                opacity: 1,
            }, 800, 'easeOutCirc')
        });

    });

    $(".close1").click(function () {
        $(".topmenu, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });


    $(".mMod9 .swiper-slide").click(function () {

        let idx = $(this).index();


        var lMod9 = new Swiper(".lMod9 .swiper-container", {
            initialSlide: idx,
            zoom: {
                maxRatio: 2,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true
        });


        $(".lMod9, html, body").addClass("on");

        if (iOS) {
            enable();
        }

    });

    $(".btn_close2").click(function () {
        $(".lMod9, html, body").removeClass("on");

        if (iOS) {
            disable();
        }
    });

    $(".btn_QR").click(function () {
        $(".qrpopup").addClass("on");
    });

    $(".close2").click(function () {
        $(".qrpopup").removeClass("on");
    });

	resize_mod9txt(false);

});