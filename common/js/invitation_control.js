/* 
    [템플릿 가이드 및 실시간 텍스트 반영 js]
    
    last update 07/05

    code arranged by 정원중

    
    ※ 내부 iframe 제어 및 css 코드는 
    /template/common/js/control_template.js
    /template/common/css/guideline.css
    위 경로 파일들을 참고해주세요.
    

    문제 발생시 연락주세요.
*/

// 타임아웃 설정 - 사용자 정보입력란 로딩 완료 후 실행
setTimeout(function () {


    console.log("컨트롤 로드");
    const logoInput = document.querySelector("#file1Name");
    const logo = document.querySelector("#file1");
    const tel = document.querySelector("#delegateTel");
    const iframe = document.getElementById("iframePreview").contentWindow;

    // 로고 체크
    logo.addEventListener('change', function () {
        removeSpan("#mMod1 .mFile1");

        if (!checkImg(this.value)) {
            logoInput.style.backgroundColor = "#f45897";
            if (this.value !== "") {
                createSpan("jpg 혹은 png 파일을 등록해주세요.", "#mMod1 .mFile1");
            } else {
                createSpan("이미지를 등록해주세요.", "#mMod1 .mFile1");
            }
        } else {
            logoInput.removeAttribute('style');
            removeSpan("#mMod1 .mFile1");
        }
    });
    /////////////////////

    // 연락처 체크
    tel.addEventListener("change", function () {
        let test = /^\d{2,3}[-\s.]?\d{3,4}[-\s.]?\d{4}$/g.test(tel.value);

        if (!test) {
            createSpan("전화번호를 입력해주세요.", "#mMod6 .gIt");
        } else {
            removeSpan("#mMod6 .gIt");
        }
    });
    ///////////////

    // 사진 체크
    warnPicList();

    let observerPic = new MutationObserver(function () {
        // console.log("변경감지");
        warnPicList();
        operateReset();
    });

    let config = {
        attributes: true,
        childList: true,
        characterData: true
    };

    observerPic.observe(document.querySelector("#divTemplatePic"), config);
    ////////////////

    // 내부 iframe 전달 (실시간 텍스트 입력)
    let inputArr = ["#serviceName", "#titleSubject", "#titleContents", "#addressMemo", "#delegateTel", "#etcTel", "#attrLinkBtn"];
    let inputTitle = ["mMod0", "mMod3_tit", "mMod3_txt", "mMod5_tx", "mMod6_tel", "mMod6_txt", "mMod10"];

    for (let x = 0; x < inputArr.length; x++) {
        document.querySelector(inputArr[x]).addEventListener('keyup', function () {
            let val = this.value;
            iframe.postMessage(inputTitle[x] + "@@normal@@" + val, "*");
        });
    }

    let infinite = ["#addedTemplate4 .it", "#addedTemplate4 .textarea", "#addedTemplate7 input[name='linkBtnName']", "#divTemplatePic .textarea"];
    let infiniteTxt = ["mMod4_tit", "mMod4_txt", "mMod7_a", "mMod9_txt"];


    for (let x = 0; x < infinite.length; x++) {
        document.querySelectorAll(infinite[x]).forEach(function (item, index) {
            item.addEventListener('keyup', function () {
                let val = this.value;
                iframe.postMessage(infiniteTxt[x] + index + "@@infinite@@" + val, "*");
                // console.log(infiniteTxt[x] + index);
            });
        });
    }

    // 텍스트 내용 삭제
    operateReset();


    let observerPlus = new MutationObserver(function () {
        operateReset();
    });

    observerPlus.observe(document.querySelector("#addedTemplate4"), config);
    observerPlus.observe(document.querySelector("#addedTemplate7"), config);
    /////////////////////////

    // 내부 iframe 전달 (수정영역 버튼)
    let guide = document.querySelectorAll(".jsBtnToggle4");

    guide.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.classList.contains("selected")) {
                //수정영역 on;
                iframe.postMessage("guideOn", "*");
            } else {
                //수정영역 off;
                iframe.postMessage("guideOff", "*");
            }
        });
    })
    //////////////////////

    // 메시지 수신 (사용자 정보입력 각 영역 색상 하이라이트 및 선택 영역 제외 나머지 닫힘)
    window.addEventListener('message', function (e) {
        if (/invitation_user/i.test(window.location.href)) {
            let menuList = $(".mIList4 .list li");
            let scrollbx = $(".mIList4 .list .scroll");

            // console.log(e.data + "자식 메시지 수신");
            let mod = /mMod\d{1,2}|background/i.exec(e.data);
            $(".mILnb").addClass("selected");
            scrollbx.scrollTop(0);

            for (let i = 0; i < menuList.length; i++) {
                switch (mod[0]) {
                    case `mMod${i}`:
                        menuList.eq(i + 1).siblings().removeClass("selected").find(".box").slideUp();
                        menuList.eq(i + 1).addClass("selected").find(".box").slideDown();
                        scrollbx.scrollTop(menuList.eq(i).offset().top - 66);
                        break;
                    case `background`:
                        menuList.eq(3).siblings().removeClass("selected").find(".box").slideUp();
                        menuList.eq(3).addClass("selected").find(".box").slideDown();
                        scrollbx.scrollTop(menuList.eq(3).offset().top - 66);
                        break;
                }
            }


        }
    });
    ////////////////////////

    //함수 모음

    // 이미지 확장자 체크
    function checkImg(value) {
        let split = value.split(".");
        let extension = split[split.length - 1];
        let regExp = /jpg|jpeg|png/i.test(extension);

        if (regExp) {
            return true;
        } else {
            return false;
        }
    };

    // 경고 문구 생성
    function createSpan(txt, target, specify) {
        let span = document.createElement('span');
        span.className = "warnSpan";
        span.style.display = "inline-block";
        span.style.color = "red";
        span.style.fontSize = "14px";
        span.style.marginTop = "5px";
        span.innerText = txt;

        if (specify === undefined) {
            if (document.querySelectorAll(`${target} .warnSpan`).length >= 1) return;
            document.querySelector(target).append(span);
        } else if (target === false && specify.children[2] === undefined) {
            specify.append(span);
        }
    };

    // 경고 문구 삭제
    function removeSpan(target, specify) {
        let t = document.querySelector(`${target} .warnSpan`);
        if (t !== null && specify === undefined) {
            t.remove();
        } else if (target === false && specify.children[2] !== undefined) {
            specify.children[2].remove();
        }
    };

    // 사진 리스트 오류 체크
    function warnPicList() {
        const pictureList = document.querySelectorAll("#photoFile1");

        // 변경 값
        pictureList.forEach(function (item) {
            item.addEventListener('change', function () {
                removeSpan(false, item.closest(".mFile1"));
                if (!checkImg(item.value)) {
                    item.previousElementSibling.style.backgroundColor = "#f45897";
                    if (item.value !== "") {
                        createSpan("jpg 혹은 png 파일을 등록해주세요.", false, item.closest(".mFile1"));
                    } else {
                        createSpan("이미지를 등록해주세요.", false, item.closest(".mFile1"));
                    }
                } else {
                    item.previousElementSibling.removeAttribute('style');
                    removeSpan(false, item.closest(".mFile1"));
                }
            });
        });
    }

    //텍스트 내용삭제
    function operateReset() {

        let btnReset = [...document.querySelectorAll(".btnResetTxt")];

        btnReset.forEach(function (item) {
            item.addEventListener('click', function () {
                item.previousElementSibling.value = "";

                const resetID = "#" + item.previousElementSibling.id;

                for (let i = 0; i < inputArr.length; i++) {

                    switch (resetID) {
                        case inputArr[i]:
                            iframe.postMessage(inputTitle[i] + "@@normal@@" + "", "*");
                            break;
                    }
                }
            });
        });

        for (let i = 0; i < infinite.length; i++) {
            document.querySelectorAll(infinite[i]).forEach(function (el, index) {
                el.nextElementSibling.addEventListener('click', function () {
                    iframe.postMessage(infiniteTxt[i] + index + "@@infinite@@" + "", "*");
                });
            });
        }
    }
    //////////////////////

}, 1000);
/////////////////

// 사용자 패널 클릭 열고 닫기 및 수정영역 토글
$(function () {
    //.ti 클릭 이벤트 설정 이유 - li에 클릭 이벤트를 넣으면 li>input 박스 클릭할때도 발생함
    $(".mIList4 .list li .ti").click(function () {
        let box = $(this).parent().siblings(".box");

        if (box.css("display") === "none") {
            $(this).parent().parent().addClass("selected");
            box.slideDown(0);
        } else {
            $(this).parent().parent().removeClass("selected").removeAttr("style");
            box.slideUp(0);
        }
    });
});
//////////////////////