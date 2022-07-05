/* 
[하이팩토리 템플릿 제어 JS]
2022.04.01 - init
2022.07.04 - last update


code arranged by 정원중
https://github.com/Zonny117/template/blob/main/common/js/control_template.js

문제 발생시 연락주세요.

*/

// 모듈제어 메소드
const control = {
    popup: function (scrollBox, btnClick, btnClose) {
        const scroll_container = document.querySelector(scrollBox);
        let click = document.querySelectorAll(btnClick);
        let close = document.querySelectorAll(btnClose);
        // let btn_help = document.querySelector(".btn_help");
        let scrollVal = 0;

        click.forEach(function (item) {
            item.addEventListener('click', function () {
                scrollVal = window.pageYOffset;
                scroll_container.style.overflow = 'hidden';
                scroll_container.style.position = 'fixed';
                scroll_container.style.top = `-${scrollVal}px`;
                scroll_container.style.width = '100%';
            });

        });
        close.forEach(function (item) {
            item.addEventListener('click', function () {
                scroll_container.style.removeProperty('overflow');
                scroll_container.style.removeProperty('position');
                scroll_container.style.removeProperty('top');
                scroll_container.style.removeProperty('width');
                window.scrollTo(0, scrollVal);
            });
        });
    },
    module: function (target) {
        let controlTarget = document.querySelectorAll(`${target} .dn`);
        let count = controlTarget.length;
        let dnArr = Array.prototype.slice.call(controlTarget);
        let dn = dnArr.filter(function (index) {
            return window.getComputedStyle(index).display === "none"
        }).length;

        if (count === dn) {
            document.querySelector(target).style.display = "none"
        }
    },
    display: function (target) {
        let plural = Array.prototype.slice.call(document.querySelectorAll(target));

        let count = plural.filter(function (index) {
            return window.getComputedStyle(index).display === "none"
        }).length;

        if (count === plural.length) {
            return true;
        } else {
            return false;
        }
    },
    removeDN: function (target) {
        let bdt = [...document.querySelectorAll(target)];
        bdt.filter(function (el) {
            if (el.style.display === "none") {
                el.remove();
            }
        });
    },
    popupQR: function () {
        document.querySelector('.btn_QR').addEventListener('click', function () {
            document.querySelector(".qrpopup").classList.add("on");
        });
        document.querySelector(".qrpopup .btn_close").addEventListener('click', function () {
            document.querySelector(".qrpopup").classList.remove("on");
        });
    }
};
// 레이아웃 관련 함수
function vh() {
    window.addEventListener('load', function () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    window.addEventListener('resize', function () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
};

function checkMobile(val) {
    let target = document.querySelector('html');

    window.addEventListener('load', function () {
        let winW = window.innerWidth <= val ? true : false;

        if (winW) {
            target.classList.add('ismobile');
        } else {
            target.classList.remove('ismobile');
        }
    });
    window.addEventListener('resize', function () {
        let winW = window.innerWidth <= val ? true : false;

        if (winW) {
            target.classList.add('ismobile');
        } else {
            target.classList.remove('ismobile');
        }
    });
};

// 스크롤 제어
let onePageWrap = document.querySelectorAll('html, body');
let preventScroll = function (e) {
    e.preventDefault();
    e.stopPropagation();
};

function stopEvtScroll() {
    onePageWrap.forEach(function (item) {
        item.addEventListener('DOMMouseScroll', preventScroll, false);
        item.addEventListener('touchmove', preventScroll, false);
        item.addEventListener('mousewheel', preventScroll, false);
    });
};

function letEvtScroll() {
    onePageWrap.forEach(function (item) {
        item.removeEventListener('DOMMouseScroll', preventScroll, false);
        item.removeEventListener('touchmove', preventScroll, false);
        item.removeEventListener('mousewheel', preventScroll, false);
    });
};

function hasScroll(selector) {
    let target = document.querySelector(selector);

    return (target.scrollHeight == 0 && target.clientHeight == 0) || (target.scrollHeight > target.clientHeight);
};

function stopKakaoScroll(target, option) {

    let isKakao = /kakaotalk/i.test(navigator.userAgent);

    let t = document.querySelectorAll(target);

    t.forEach(function (item) {
        if (isKakao && option === undefined) {
            item.addEventListener('click', preventScroll, false);
            item.addEventListener('touchmove', preventScroll, false);
            item.addEventListener('mousewheel', preventScroll, false);
        } else if (option === true) {
            item.removeEventListener('click', preventScroll, false);
            item.removeEventListener('touchmove', preventScroll, false);
            item.removeEventListener('mousewheel', preventScroll, false);
        }
    });
};

// 수정페이지 가이드라인
window.onload = function () {

    // 레이아웃 표시 기능
    const modarr = [".background", ".mMod0", ".mMod1", ".mMod3", ".mMod4 .swiper-slide", ".mMod5", ".mMod6", ".mMod7", ".mMod8", ".mMod9 .swiper-slide", ".mMod10", ".mMod11"];
    const modarrNode = document.querySelectorAll(modarr);
    // const "*" = '*';

    if (/invitation_user/i.test(window.parent.location.href)) {
        guideOn();
    }


    function guideOn() {
        Array.prototype.slice.call(modarrNode).filter(function (el) {
            let position_check = window.getComputedStyle(el).position;
            if (position_check !== 'absolute' && position_check !== 'fixed' && position_check !== 'sticky') {
                el.classList.add("help", "relative");
            } else {
                el.classList.add("help");
            }
        });
        modarrNode.forEach(function (item) {
            const helpTxt = document.createElement('div');
            helpTxt.className = "helptxt";
            item.append(helpTxt);

            item.addEventListener('click', function () {
                if (document.querySelector(".helptxt") === null) return;

                if (item.closest(".mMod9")) {
                    document.querySelectorAll('.lMod9, html, body').forEach(function (item) {
                        item.classList.remove('on');
                    });
                    document.querySelectorAll('body, .scrollbx').forEach(function (item) {
                        item.removeAttribute('style');
                    });
                }

                let modtxt = item.getAttribute('class');
                let reg = /mMod[0-9]{1,2}|background|swiper-slide/.exec(modtxt);

                if (item.closest(".mMod4")) {
                    reg[0] = "mMod4";
                } else if (item.closest(".mMod9")) {
                    reg[0] = "mMod9";
                }

                // console.log(reg[0]);

                window.parent.postMessage(reg[0], "*");
            });
        });

        for (let i = 0; i < modarr.length; i++) {
            document.querySelectorAll(modarr[i]).forEach(function (item) {
                let brad = window.getComputedStyle(item).borderRadius;

                document.querySelectorAll(`${modarr[i]} .helptxt`).forEach(function (item2) {
                    item2.style.borderRadius = brad;
                });
            });

            let swiper;

            [...document.querySelectorAll('.helptxt')].filter(function (el) {
                document.querySelectorAll(`${modarr[i]} .helptxt`).forEach(function (t) {
                    t.addEventListener('click', function () {
                        swiper = this.closest(".mMod4") ? ".mMod4" : ".mMod9";

                        if (this.closest(swiper)) {
                            // console.log("true")
                            document.querySelectorAll(`${swiper} .helptxt`).forEach(function (item) {
                                item.classList.add("on");
                                if (item != el) {
                                    el.classList.remove("on");
                                }
                            });
                        } else {
                            if (this !== el) {
                                el.classList.remove("on");
                            } else {
                                el.classList.add("on");
                            }
                        }
                    });
                });
            });
        }
    }



    window.addEventListener('message', function (e) {

        // console.log(e.data);

        // console.log(e.origin + " 아이프레임 오리진");
        // if (e.origin !== "*") return;

        // 수정영역 Off
        if (e.data === "guideOff") {
            modarrNode.forEach(function (item) {
                item.classList.remove('help', 'relative');
                item.removeChild(document.querySelector(".helptxt"));
            });
        }
        // 수정영역 On
        else if (e.data === "guideOn") {
            guideOn();
        }

        // 아이프레임 실시간 타이핑
        // if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
        if (e.data === "guideOn" || e.data === "guideOff") return;

        let mod = /mMod[0-9]{1,2}(_[a-z]{1,3}(\d{1,})?)?/g.exec(e.data);
        // let txt = /(?<=@@+)(.|\n)*/g.exec(e.data);
        let txt = e.data.split(`${mod[0]}@@normal@@`)[1];
        let infiniteTxt = e.data.split(`${mod[0]}@@infinite@@`)[1];
        let length;
        // console.log(infiniteTxt);
        // console.log(txt)

        switch (mod[0]) {
            case 'mMod0':
                document.querySelectorAll(".mMod0 h2, .infowindow, .mMod5 .t, .qrbx .mMod0, .mMod0 span").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
            case 'mMod3_tit':
                document.querySelectorAll(".mMod3 span, .mMod3 h2").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
            case 'mMod3_txt':
                document.querySelectorAll(".mMod3 .txt").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
            case 'mMod5_tx':
                document.querySelectorAll(".mMod5 .tx").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
            case 'mMod6_tel':
                document.querySelectorAll(".mMod6 .tel").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
            case 'mMod6_txt':
                document.querySelectorAll(".mMod6 .txt").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
            case 'mMod10':
                document.querySelectorAll(".mMod10 a").forEach(function (item) {
                    item.innerText = txt;
                });
                break;
        };

        let mod7_Link = [...document.querySelectorAll(".mMod7 a")];


        let targetLink = mod7_Link.filter(function (el) {
            let target = el.getAttribute('target');
            let display = window.getComputedStyle(el.closest(".mMod7")).display;

            return target === '_blank' && display !== "none";
        });

        if (document.querySelectorAll(".mMod7 a p").length >= 1) {
            targetLink = document.querySelectorAll(".mMod7 a p");
        }


        // console.log(targetLink);

        if (/mMod4/g.test(mod[0])) {
            length = document.querySelectorAll(".mMod4 .swiper-slide").length;
        } else if (/mMod7/g.test(mod[0])) {
            length = targetLink.length;
        } else if (/mMod9/g.test(mod[0])) {
            length = document.querySelectorAll(".mMod9 .swiper-slide p").length;
        }

        for (let i = 0; i < length; i++) {
            switch (mod[0]) {
                case `mMod4_tit${[i]}`:
                    document.querySelectorAll(".mMod4 .tit")[i].innerText = infiniteTxt;
                    break;
                case `mMod4_txt${[i]}`:
                    document.querySelectorAll(".mMod4 .txt")[i].innerText = infiniteTxt;
                    break;
                case `mMod7_a${[i]}`:
                    targetLink[i].innerText = infiniteTxt;
                    break;
                case `mMod9_txt${[i]}`:
                    document.querySelectorAll(".mMod9 .swiper-slide p")[i].innerText = infiniteTxt;
                    break;
            }

            //단구조 외 템플릿
            if (document.querySelectorAll(".wrapmobile").length >= 1) {
                switch (mod[0]) {
                    case `mMod4_tit${[i]}`:
                        document.querySelectorAll(".wrapmobile .mMod4 .tit")[i].innerText = infiniteTxt;
                        break;
                    case `mMod4_txt${[i]}`:
                        document.querySelectorAll(".wrapmobile .mMod4 .txt")[i].innerText = infiniteTxt;
                        break;
                    case `mMod7_a${[i]}`:
                        document.querySelectorAll(".wrapmobile .mMod7 a")[i].innerText = infiniteTxt;
                        break;
                }
            }

            if (document.querySelectorAll(".lbx .mMod7 a").length >= 1 && mod[0] === `mMod7_a${[i]}`) {
                document.querySelectorAll(".lbx .mMod7 a")[i].innerText = infiniteTxt;
            }
            if (document.querySelectorAll(".mMod7.mobile a").length >= 1 && mod[0] === `mMod7_a${[i]}`) {
                document.querySelectorAll(".mMod7.mobile a")[i].innerText = infiniteTxt;
            }
            if (document.querySelectorAll(".mMod9.mobile .swiper-slide p").length >= 1 && mod[0] === `mMod9_txt${[i]}`) {
                document.querySelectorAll(".mMod9.mobile .swiper-slide p")[i].innerText = infiniteTxt;
            }
            if (document.querySelectorAll(".mMod4.mobile .swiper-slide").length >= 1) {
                if (mod[0] === `mMod4_tit${[i]}`) {
                    document.querySelectorAll(".mMod4.mobile .tit")[i].innerText = infiniteTxt;
                } else if (mod[0] === `mMod4_txt${[i]}`) {
                    document.querySelectorAll(".mMod4.mobile .txt")[i].innerText = infiniteTxt;
                }
            }
        }
    });
};

/* 
   [사진 모듈 빈 텍스트 여백 제거 및 이미지 하단 레디우스 제거]

    p 태그 방향에 따라 status 방향 지정 필수
    레디우스 제거가 필요없을시 status에 false 전달 필수
*/
function resize_mod9txt(status) {


    function relayout() {

        // let mod9img = [...document.querySelectorAll(".mMod9 .swiper-slide img")];
        let mod9_txt = [...document.querySelectorAll(".mMod9 .swiper-slide p")];

        // mod9img.filter(function () {
        if (status !== false) {
            mod9_txt.filter(function (el) {
                // console.log('레디우스가 있어요')
                if (el.innerText === "") {

                    el.previousElementSibling.removeAttribute('style');
                    el.style.padding = 0;
                    el.style.margin = 0;
                } else if (el.innerText !== "" && status === 'bottom') {
                    el.removeAttribute('style');
                    el.previousElementSibling.style.borderBottomLeftRadius = 0;
                    el.previousElementSibling.style.borderBottomRightRadius = 0;
                }
            });
        } else if (status === false) {
            mod9_txt.filter(function (el) {
                // console.log("레디우스가 없어요")
                if (el.innerText === "") {
                    el.style.padding = 0;
                    el.style.margin = 0;

                } else if (el.innerText !== "") {
                    el.removeAttribute('style');
                }
            });
        }
        // });
    }


    relayout();

    window.addEventListener('message', function (e) {
        // if (e.origin !== "*") return;
        // console.log('메세지 테스트')
        relayout();
    });

}

// 텍스트 입력시 swiper-slide autoHeight 자동 조정 반드시
// el은 swiper의 변수명을 넣는다. 반드시 변수가 정의되어있어야함.
function autoHeight(el) {
    window.addEventListener('message', function (e) {
        if (e.data === "guideOn" || e.data === "guideOff") return;
        let mod = /mMod[0-9]{1,2}(_[a-z]{1,3}(\d{1,})?)?/g.exec(e.data);
        // console.log(mod[0]);


        if (/mMod4/.test(mod[0])) {
            el.updateAutoHeight(600);
        } else if (/mMod9/.test(mod[0])) {
            el.updateAutoHeight(600);
        }
    });
}