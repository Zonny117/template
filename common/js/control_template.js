/* 
[하이팩토리 템플릿 제어 JS]
2022.04.01 - init
2022.05.10 - last update


code arranged by 정원중
https://github.com/Zonny117/template/blob/main/common/js/control_template.js

문제 발생시 연락주세요.




    [모듈제어 메소드]

    popup - 레이어 팝업시 z축 하위 요소 스크롤 막기
    module - 부모요소 내 정보입력 요소들을 전부 사용하지 않을때 부모요소 미출력
    display - 디스플레이 미출력 여부 확인
    removeDN - 디스플레이 none 상태의 요소 html상에서 삭제 (module 메서드와 연동 가능)
*/
const control = {
    popup: function (scrollBox, btnClick, btnClose) {
        const scroll_container = document.querySelector(scrollBox);
        let click = document.querySelectorAll(btnClick);
        let close = document.querySelectorAll(btnClose);
        // let btn_help = document.querySelector(".btn_help");
        let scrollVal = 0;

        click.forEach(function (item) {
            item.addEventListener('click', function () {
                if (!document.querySelector('.btn_help').classList.contains("on")) return;
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
    }
};
/* 
    [레이아웃 관련 함수]

    vh - 뷰포트 높이값 로드, 리사이즈시 재설정, 
    뷰포트 높이값 반영할 요소에 css 속성 추가 필요 → height: calc(var(--vh, 1vh) * 100);

    checkMobile - 로드, 리사이즈시 가로값 계산 / 데스크탑, 모바일인지 확인할때 필요
*/
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

/* 
    [스크롤 제어]

    원페이지, 풀페이지 디자인 템플릿에서 스크롤 제어시 필요한 함수들
    이외 상황에선 거의 사용되지 않음.

    stopEvtScroll - 마우스 스크롤, 터치무브, 마우스 휠 이벤트 막기
    letEvtScroll - stopEvtScroll 함수 해제
    hasScroll - 선택한 요소 스크롤 생성 여부 확인 / 해당 요소 내용을 확인하기 위해 스크롤시 페이지가 넘어가는 것을 방지할 때 사용
    stopKakaoScroll - 카카오 인앱브라우저 스크롤시 url바 고정하기 사용 (아직 테스트 필요/확실하지 않음)
*/
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
// 메세지 수신/발신 invitation_control.js 참조
window.onload = function () {

    // let background = document.querySelectorAll(".background");

    // background.forEach(function (item) {
    //     // let cover = document.createElement("div");
    //     // cover.className = "bg_cover";
    //     // item.append(cover);
    //     setTimeout(function () {
    //         item.style.opacity = 1
    //     }, 100);
    // });


    // 레이아웃 표시 기능
    let check = /iframePreview/i.test(window.location.href);
    // if (check) {
    const helpBox = document.createElement('div');
    const btn_help = document.createElement('a');
    helpBox.id = "help";
    btn_help.setAttribute('href', 'javascript:void(0)');
    btn_help.classList.add('btn_help', 'on');
    btn_help.innerText = "도움말 표시";
    document.querySelector('body').append(helpBox);
    helpBox.append(btn_help);

    const modarr = [".background", ".mMod0", ".mMod1", ".mMod3", ".mMod4 .swiper-slide", ".mMod5", ".mMod6", ".mMod7", ".mMod8", ".mMod9 .swiper-slide", ".mMod10", ".mMod11"];
    const modarrNode = document.querySelectorAll(modarr);

    btn_help.addEventListener('click', function () {
        let txt = this.innerText;
        this.classList.toggle("on");

        if (this.classList.contains("on")) {
            this.innerText = txt.replace(/끄기/, '표시');
            modarrNode.forEach(function (item) {
                item.classList.remove('help', 'relative');
                item.removeChild(document.querySelector(".helptxt"));
            });
            window.parent.postMessage('helpOff', '*');
        } else {
            this.innerText = txt.replace(/표시/, '끄기');
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
                    if (btn_help.classList.contains('on')) return;
                    document.querySelectorAll('.lMod9, html, body').forEach(function (item) {
                        item.classList.remove('on');
                    });
                    document.querySelectorAll('body, .scrollbx').forEach(function (item) {
                        item.removeAttribute('style');
                    });

                    let modtxt = item.getAttribute('class');
                    let reg = /mMod[0-9]{1,2}|background|swiper-slide/.exec(modtxt);

                    if (item.closest(".mMod4")) {
                        reg[0] = "mMod4";
                    } else if (item.closest(".mMod9")) {
                        reg[0] = "mMod9";
                    }

                    // console.log(reg[0]);

                    window.parent.postMessage(reg[0], '*');

                    // switch (reg[0]) {
                    //     case "mMod0":
                    //         swal('서비스명을 입력해주세요.', '회사명, 자신의 이름 등 자신을 어필할 문구를 짧게 입력해주세요. \n\n※필수 입력 사항입니다!');
                    //         break;
                    //     case "mMod1":
                    //         swal('로고를 넣어주세요.', '로고는 선택하신 템플릿에 따라 디자인이 다릅니다. \n최대한 배경색이 없는 투명한 로고 이미지일 수록 좋아요!');
                    //         break;
                    //     case "mMod3":
                    //         swal('타이틀 제목과 내용 영역입니다.', '사이트의 대표 문구를 입력할 시간이에요. \n 자신이 전하고자 하는 주제를 명확하게 전달하면 좋겠죠?');
                    //         break;
                    //     case "mMod4":
                    //         swal('보조내용 영역입니다.', '사이트의 본문에 해당하는 역할을 합니다. 사람들에게 전하고 싶은 내용을 담아주세요. \n\n※원하는 만큼 추가할 수 있어요!');
                    //         break;
                    //     case "mMod5":
                    //         swal('주소를 입력해주세요!', '회사의 주소나 행사장 위치 등을 안내할 수 있습니다. \n주변 교통을 이용해 찾아오는 방법도 메모해주시면 받는 분들에게 더 도움이 되겠죠?');
                    //         break;
                    //     case "mMod6":
                    //         swal('연락처 정보를 입력해주세요.', '대표 연락처는 하나만! 필요에 따라 이메일 주소나 팩스, 기타 번호등 자유롭게 적어주세요!');
                    //         break;
                    //     case "mMod7":
                    //         swal('링크 주소를 연결할 수 있어요.', '자신을 어필하는데 도움이 되는 유용한 외부 주소를 연결할 수 있어요.');
                    //         break;
                    //     case "mMod8":
                    //         swal('유튜브 주소를 입력하세요.', '원하는 유튜브 영상 주소를 입력하면 사이트에 첨부할 수 있어요!');
                    //         break;
                    //     case "mMod9":
                    //         swal('사진을 넣어주세요.', '사진은 원하는 만큼 넣을 수 있어요.');
                    //         break;
                    //     case "mMod10":
                    //         swal('첨부파일을 넣어주세요.', '받는 사람이 유용한 자료를 볼 수 있도록 파일 선정을 해봅시다! \n\n예) 안내 팜플렛, 약도, 프로모션 포스터 등');
                    //         break;
                    //     case "mMod11":
                    //         swal('SNS가 있나요?', '페이스북, 인스타그램, 유튜브, 트위터 중 선택해 자신의 계정과 연결해보세요. \n없어요? 그럼 당신은 인싸가 아님');
                    //         break;
                    // }
                });
            });
        }
    });
    // }

    // 아이프레임 실시간 타이핑
    window.addEventListener('message', function (e) {
        let mod = /mMod[0-9]{1,2}(_[a-z]{1,3}(\d{1,})?)?/g.exec(e.data);
        let txt = /(?<=@@+)(.|\n)*/g.exec(e.data);
        let length;

        // console.log(txt[0])

        switch (mod[0]) {
            case 'mMod0':
                document.querySelectorAll(".mMod0 h2, .infowindow, .mMod5 .t, .qrbx .mMod0, .mMod0 span, span.mMod0").forEach(function (item) {
                    item.innerText = txt[0];
                });
                break;
            case 'mMod3_tit':
                document.querySelectorAll(".mMod3 span, .mMod3 h2").forEach(function (item) {
                    item.innerText = txt[0];
                });
                break;
            case 'mMod3_txt':
                document.querySelectorAll(".mMod3 .txt").forEach(function (item) {
                    item.innerText = txt[0];
                });
                break;
            case 'mMod5_tx':
                document.querySelectorAll(".mMod5 .tx").forEach(function (item) {
                    item.innerText = txt[0];
                });
                break;
            case 'mMod6_tel':
                document.querySelectorAll(".mMod6 .tel").forEach(function (item) {
                    item.innerText = txt[0];
                });
                break;
            case 'mMod6_txt':
                document.querySelectorAll(".mMod6 .txt").forEach(function (item) {
                    item.innerText = txt[0];
                });
                break;
            case 'mMod10':
                document.querySelectorAll(".mMod10 a").forEach(function (item) {
                    item.innerText = txt[0];
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
                    document.querySelectorAll(".mMod4 .tit")[i].innerText = txt[0];
                    break;
                case `mMod4_txt${[i]}`:
                    document.querySelectorAll(".mMod4 .txt")[i].innerText = txt[0];
                    break;
                case `mMod7_a${[i]}`:
                    targetLink[i].innerText = txt[0];
                    break;
                case `mMod9_txt${[i]}`:
                    document.querySelectorAll(".mMod9 .swiper-slide p")[i].innerText = txt[0];
                    break;
            }



            //단구조 외 템플릿
            if (document.querySelectorAll(".wrapmobile").length >= 1) {
                switch (mod[0]) {
                    case `mMod4_tit${[i]}`:
                        document.querySelectorAll(".wrapmobile .mMod4 .tit")[i].innerText = txt[0];
                        break;
                    case `mMod4_txt${[i]}`:
                        document.querySelectorAll(".wrapmobile .mMod4 .txt")[i].innerText = txt[0];
                        break;
                    case `mMod7_a${[i]}`:
                        document.querySelectorAll(".wrapmobile .mMod7 a")[i].innerText = txt[0];
                        break;
                }
            }

            if (document.querySelectorAll(".lbx .mMod7 a").length >= 1 && mod[0] === `mMod7_a${[i]}`) {
                document.querySelectorAll(".lbx .mMod7 a")[i].innerText = txt[0];
            }
            if (document.querySelectorAll(".mMod7.mobile a").length >= 1 && mod[0] === `mMod7_a${[i]}`) {
                document.querySelectorAll(".mMod7.mobile a")[i].innerText = txt[0];
            }
            if (document.querySelectorAll(".mMod9.mobile .swiper-slide p").length >= 1 && mod[0] === `mMod9_txt${[i]}`) {
                document.querySelectorAll(".mMod9.mobile .swiper-slide p")[i].innerText = txt[0];
            }
            if (document.querySelectorAll(".mMod4.mobile .swiper-slide").length >= 1) {
                if (mod[0] === `mMod4_tit${[i]}`) {
                    document.querySelectorAll(".mMod4.mobile .tit")[i].innerText = txt[0];
                } else if (mod[0] === `mMod4_txt${[i]}`) {
                    document.querySelectorAll(".mMod4.mobile .txt")[i].innerText = txt[0];
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

    window.addEventListener('message', function () {
        // console.log('메세지 테스트')
        relayout();
    });

}