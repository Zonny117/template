$(function () {




    //모듈 제어
    let maintitle = $(".maintitlebx .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (maintitle.length === 3) {
        $(".mMod2").css({
            paddingBottom: 0,
            height: 0
        });

        $(".mainbx .ani").css({
            display: "none"
        })
    }


    let bg = $(".background").css("display");

    if (bg === "none" && maintitle.length !== 3) {
        $(".default").css({
            display: "block"
        });
    }


    let topmenu = $(".topmenu .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (topmenu.length === 2) {
        $(".topmenu, .btn_dot").css({
            display: "none"
        });
    }

    let blue = $(".mMod6, .mMod9").filter(function () {
        return $(this).css("display") === "none"
    });

    if (blue.length === 2) {
        $(".blue").css({
            display: "none"
        });
    }


    let mod9 = $(".mMod9").css("display");

    if (mod9 === "none") {
        $(".blue").css({
            overflow: "hidden"
        });
    }

    let ani = $(".mMod8, .mMod5, footer").filter(function () {
        return $(this).css("display") === "none"
    });

    if (ani.length === 3) {
        $(".mMod4").css({
            overflow: "hidden"
        });
    }

    let footer = $("footer .dn").filter(function () {
        return $(this).css("display") === "none"
    });

    if (footer.length === 3) {
        $("footer").css({
            display: "none"
        });
    }

    let winw = $(window).innerWidth();

    // winw는 리사이즈 이벤트에서 실시간으로 값을 받을 수 있다.
    // dom ready > window load
    $(window).on('resize', function () {

        winw = $(window).innerWidth();

        mod9pt();

        // console.log(winw)
    })

    mod9pt();

    function mod9pt() {

        let mod6 = $(".mMod6").css("display");
        let tel = $(".mMod6").outerHeight(true);

        if (winw > 850) {
            let height = tel - 80;


            // console.log(tel)
            // console.log(height)

            if (mod6 !== "none") {
                $(".mMod9").css({
                    paddingTop: (150 + height) + "px"
                })
            } else(
                $(".mMod9").css({
                    paddingTop: "246px"
                })
            )
        } else if (winw <= 850) {

            let height = tel - 60;

            if (mod9 === "none") {
                $(".blue").css({
                    paddingTop: tel + "px"
                });

                $(".blue .ani").css({
                    display: "none"
                });
            } //////
            else if (mod6 !== "none") {
                $(".mMod9").css({
                    paddingTop: (80 + height) + "px"
                })


            } ////
            else(
                $(".mMod9").css({
                    paddingTop: "139px"
                })
            )
        }

    }


    function gnb() {

        $(window).on('scroll resize', function () {

            winw = $(window).innerWidth();
            // console.log(winw)

            if (winw <= 850) {


                let sct = $(window).scrollTop();

                // console.log(sct);

                if (sct >= 50) {
                    $(".gnb").addClass("on");
                } else {
                    $(".gnb").removeClass("on");
                }

            } else {
                $(".gnb").removeClass("on");
            }
        })


    }

    gnb();









    $(".btn_dot").click(function () {

        $(".topmenu").css({
            display: "block"
        });

        $("html,body").addClass("on");

        $(".ani").addClass("on");
    })

    $(".btn_close").click(function () {
        $(".topmenu").css({
            display: "none"
        });

        $("html,body").removeClass("on");

        $(".ani").removeClass("on");

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
        $(".btn_dot").click(function () {
            enable();
        })

        $(".btn_close").click(function () {
            disable();
        })
    }

})