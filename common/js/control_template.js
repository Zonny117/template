/* 
[하이팩토리 템플릿 제어 JS]
2022.04.01 - init
2022.04.07 - last update


code arranged by 정원중
https://github.com/Zonny117/template2022.03-/blob/main/common/js/control_template_%EC%84%A4%EB%AA%85.js

문제 발생시 제게 알려주세요.

*/
// 모듈제어 메소드
const control = {
    popup: function (e, t, o) {
        const n = document.querySelector(e);
        let l = 0,
            r = document.querySelectorAll(t),
            i = document.querySelectorAll(o);
        r.forEach(function (e) {
            e.addEventListener("click", function () {
                l = window.pageYOffset, n.style.overflow = "hidden", n.style.position = "fixed", n.style.top = `-${l}px`, n.style.width = "100%"
            })
        }), i.forEach(function (e) {
            e.addEventListener("click", function () {
                n.style.removeProperty("overflow"), n.style.removeProperty("position"), n.style.removeProperty("top"), n.style.removeProperty("width"), window.scrollTo(0, l)
            })
        })
    },
    module: function (e) {
        let t = document.querySelectorAll(`${e} .dn`);
        t.length === Array.prototype.slice.call(t).filter(function (e) {
            return "none" === window.getComputedStyle(e).display
        }).length && (document.querySelector(e).style.display = "none")
    },
    display: function (e) {
        let t = Array.prototype.slice.call(document.querySelectorAll(e));
        return t.filter(function (e) {
            return "none" === window.getComputedStyle(e).display
        }).length === t.length
    }
};
// 레이아웃 관련 함수
function vh() {
    window.addEventListener("load", function () {
        let e = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${e}px`)
    }), window.addEventListener("resize", function () {
        let e = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${e}px`)
    })
}

function checkMobile(e) {
    let t = document.querySelector("html");
    window.addEventListener("load", function () {
        window.innerWidth <= e ? t.classList.add("ismobile") : t.classList.remove("ismobile")
    }), window.addEventListener("resize", function () {
        window.innerWidth <= e ? t.classList.add("ismobile") : t.classList.remove("ismobile")
    })
}
// 스크롤 제어
let onePageWrap = document.querySelectorAll("html, body"),
    preventScroll = function (e) {
        e.preventDefault(), e.stopPropagation()
    };

function stopEvtScroll() {
    onePageWrap.forEach(function (e) {
        e.addEventListener("DOMMouseScroll", preventScroll, !1), e.addEventListener("touchmove", preventScroll, !1), e.addEventListener("mousewheel", preventScroll, !1)
    })
}

function letEvtScroll() {
    onePageWrap.forEach(function (e) {
        e.removeEventListener("DOMMouseScroll", preventScroll, !1), e.removeEventListener("touchmove", preventScroll, !1), e.removeEventListener("mousewheel", preventScroll, !1)
    })
}

function hasScroll(e) {
    let t = document.querySelector(e);
    return 0 == t.scrollHeight && 0 == t.clientHeight || t.scrollHeight > t.clientHeight
}

function stopKakaoScroll(e, t) {
    let o = /kakaotalk/i.test(navigator.userAgent);
    document.querySelectorAll(e).forEach(function (e) {
        o && void 0 === t ? (e.addEventListener("click", preventScroll, !1), e.addEventListener("touchmove", preventScroll, !1), e.addEventListener("mousewheel", preventScroll, !1)) : !0 === t && (e.removeEventListener("click", preventScroll, !1), e.removeEventListener("touchmove", preventScroll, !1), e.removeEventListener("mousewheel", preventScroll, !1))
    })
}
// 수정페이지 가이드라인
$(window).on("load", function () {
    let check = /iframePreview/i.test(window.location.href);
    // if (check) {
    if ($("#help").length === 0) {
        $("body").append('<div id="help"><a href="javascript:void(0)" class="btn_help on">도움말 표시</a></div>');
    }
    let e = [".background", ".mMod0", ".mMod1", ".mMod3", ".mMod4 .swiper-slide", ".mMod5", ".mMod6", ".mMod7", ".mMod8", ".mMod9 .swiper-slide", ".mMod10", ".mMod11"];
    $(".btn_help").click(function () {


        if ($(".background").hasClass("thumb") && $(this).hasClass("on")) {
            swal("배경사진이 안보여요!", "선택하신 배경사진은 외부 공유시 썸네일로 활용됩니다.", '../common/images/thumb_guide.PNG');
        }

        let t = $(this).text();
        $(this).toggleClass("on"), $(this).hasClass("on") ? ($(this).text(t.replace(/끄기/, "표시")), $(`${e}`).removeClass("help relative"), $(".helptxt").remove()) : ($(this).text(t.replace(/표시/, "끄기")), $(`${e}`).filter(function () {
            "absolute" !== $(this).css("position") && "fixed" !== $(this).css("position") && "sticky" !== $(this).css("position") ? $(this).addClass("help relative").append('<div class="helptxt">') : $(this).addClass("help").append('<div class="helptxt">')
        }))
    })
    // } else return;

});