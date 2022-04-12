/* 
[하이팩토리 템플릿 제어 JS]
2022.04.01 - init
2022.04.11 - last update


code arranged by 정원중
https://github.com/Zonny117/template2022.03-/blob/main/common/js/control_template_%EC%84%A4%EB%AA%85.js

문제 발생시 제게 알려주세요.

*/

// 모듈제어 메소드
const control = {
    popup: function (scrollBox, btnClick, btnClose) {
        const scroll_container = document.querySelector(scrollBox);
        let click = document.querySelectorAll(btnClick);
        let close = document.querySelectorAll(btnClose);
        let btn_help = document.querySelector(".btn_help");
        let scrollVal = 0;

        click.forEach(function (item) {
            item.addEventListener('click', function () {
                if (!btn_help.classList.contains("on")) return;
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
$(function () {

    let check = /iframePreview/i.test(window.location.href);
    // if (check) {
    if ($("#help").length === 0) {
        $('body').append(`<div id="help"><a href="javascript:void(0)" class="btn_help on">도움말 표시</a></div>`);
    }
    let modarr = [".background", ".mMod0", ".mMod1", ".mMod3", ".mMod4 .swiper-slide", ".mMod5", ".mMod6", ".mMod7", ".mMod8", ".mMod9 .swiper-slide", ".mMod10", ".mMod11"];
    $(".btn_help").click(function () {
        if ($(".background").hasClass("thumb") && $(this).hasClass("on")) {
            swal("배경사진이 안보여요!", "선택하신 배경사진은 외부 공유시 썸네일로 활용됩니다.", '../common/images/thumb_guide.PNG');
        }

        let txt = $(this).text();

        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).text(txt.replace(/끄기/, '표시'));
            $(`${modarr}`).removeClass("help relative");
            $(".helptxt").remove();
        } else {
            $(this).text(txt.replace(/표시/, '끄기'));
            $(`${modarr}`).filter(function () {
                if ($(this).css('position') !== "absolute" && $(this).css('position') !== "fixed" && $(this).css('position') !== "sticky") {
                    $(this).addClass('help relative').append(`<div class="helptxt">`);
                } else {
                    $(this).addClass('help').append(`<div class="helptxt">`);
                }
            });

            $(`${modarr}`).click(function () {
                if ($(".btn_help").hasClass("on")) return;

                $(".lMod9, html, body").removeClass("on");
                $("body, .scrollbx").removeAttr('style');

                let modtxt = $(this).attr('class');

                let reg = /mMod[0-9]{1,2}|background|swiper-slide/.exec(modtxt);

                if (reg[0] === 'swiper-slide') {
                    reg[0] = $(this).parents(".mMod9")[0] === undefined ? "mMod4" : "mMod9";
                }

                // console.log(reg[0]);

                switch (reg[0]) {
                    case "mMod0":
                        swal('서비스명을 입력해주세요.', '회사명, 자신의 이름 등 자신을 어필할 문구를 짧게 입력해주세요. \n\n※필수 입력 사항입니다!', '../common/images/uhmat.PNG');
                        break;
                    case "mMod1":
                        swal('로고를 넣어주세요.', '로고는 선택하신 템플릿에 따라 디자인이 다릅니다. \n최대한 배경색이 없는 투명한 로고 이미지일 수록 좋아요!');
                        break;
                    case "mMod3":
                        swal('타이틀 제목과 내용 영역입니다.', '사이트의 대표 문구를 입력할 시간이에요. \n 자신이 전하고자 하는 주제를 명확하게 전달하면 좋겠죠?');
                        break;
                    case "mMod4":
                        swal('보조내용 영역입니다.', '사이트의 본문에 해당하는 역할을 합니다. 사람들에게 전하고 싶은 내용을 담아주세요. \n\n※원하는 만큼 추가할 수 있어요!');
                        break;
                    case "mMod5":
                        swal('주소를 입력해주세요!', '회사의 주소나 행사장 위치 등을 안내할 수 있습니다. \n주변 교통을 이용해 찾아오는 방법도 메모해주시면 받는 분들에게 더 도움이 되겠죠?');
                        break;
                    case "mMod6":
                        swal('연락처 정보를 입력해주세요.', '대표 연락처는 하나만! 필요에 따라 이메일 주소나 팩스, 기타 번호등 자유롭게 적어주세요!');
                        break;
                    case "mMod7":
                        swal('링크 주소를 연결할 수 있어요.', '자신을 어필하는데 도움이 되는 유용한 외부 주소를 연결할 수 있어요.');
                        break;
                    case "mMod8":
                        swal('유튜브 주소를 입력하세요.', '원하는 유튜브 영상 주소를 입력하면 사이트에 첨부할 수 있어요!');
                        break;
                    case "mMod9":
                        swal('사진을 넣어주세요.', '사진은 원하는 만큼 넣을 수 있어요.');
                        break;
                    case "mMod10":
                        swal('첨부파일을 넣어주세요.', '받는 사람이 유용한 자료를 볼 수 있도록 파일 선정을 해봅시다! \n\n예) 안내 팜플렛, 약도, 프로모션 포스터 등');
                        break;
                    case "mMod11":
                        swal('SNS가 있나요?', '페이스북, 인스타그램, 유튜브, 트위터 중 선택해 자신의 계정과 연결해보세요. \n없어요? 그럼 당신은 인싸가 아님');
                        break;
                }

            });

        }


    });
    // } else return;
});