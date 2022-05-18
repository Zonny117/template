/* 
    [템플릿 가이드라인 및 실시간 텍스트 입력 미리보기 JS]
    
    last update 05/18

    code arranged by 정원중

    
    ※ 내부 iframe 제어 및 css 코드는 
    /template/common/js/control_template.js
    /template/common/css/guideline.css
    위 경로 파일들을 참고해주세요.
    

    문제 발생시 연락주세요.
*/

// 타임아웃 설정 - 사용자 정보입력란 로딩 완료 후 실행
setTimeout(function () {
    console.log("타임아웃")
    let tel = document.querySelector("#delegateTel");
    let span = document.createElement(`span`);
    let prevent = 1;

    // 연락처 체크
    tel.addEventListener("change", function () {
        let test = /^\d{2,3}[-\s.]?\d{3,4}[-\s.]?\d{4}$/g.test(tel.value);
        // console.log(test + "연락처 체크");
        // console.log(tel.value.length);

        if (!test && prevent === 1) {

            span.style.color = "red";
            span.style.fontSize = "18px";
            span.innerText = "전화번호를 입력해주세요.";

            tel.parentElement.append(span);

            prevent = 0;

        } else if (test && tel.parentElement.childNodes.length > 1) {
            tel.parentElement.removeChild(tel.parentElement.childNodes[1]);

            prevent = 1;
        }
    });

    // 내부 iframe 전달 (실시간 텍스트 입력)
    let inputArr = ["#serviceName", "#titleSubject", "#titleContents", "#addressMemo", "#delegateTel", "#etcTel", "#attrLinkBtn"];
    let inputTitle = ["mMod0", "mMod3_tit", "mMod3_txt", "mMod5_tx", "mMod6_tel", "mMod6_txt", "mMod10"];
    let iframe = document.getElementById("iframePreview").contentWindow;

    for (let x = 0; x < inputArr.length; x++) {
        document.querySelector(inputArr[x]).addEventListener('keyup', function () {
            let val = this.value;
            iframe.postMessage(inputTitle[x] + "@@" + val, 'http://dev.hifactory.co.kr');
        });
    }

    let infinite = ["#addedTemplate4 .it", "#addedTemplate4 .textarea", "#addedTemplate7 input[name='linkBtnName']", "#divTemplatePic .textarea"];
    let infiniteTxt = ["mMod4_tit", "mMod4_txt", "mMod7_a", "mMod9_txt"];


    for (let x = 0; x < infinite.length; x++) {
        document.querySelectorAll(infinite[x]).forEach(function (item, index) {
            item.addEventListener('keyup', function () {
                let val = this.value;
                iframe.postMessage(infiniteTxt[x] + index + "@@" + val, 'http://dev.hifactory.co.kr');
                // console.log(infiniteTxt[x] + index);
            });
        });

    }

    // 내부 iframe 전달 (수정영역 버튼)
    let guide = document.querySelectorAll(".jsBtnToggle4");
    let inputList = document.querySelectorAll(".mIList4 li");

    setTimeout(function () {
        if (/invitation_user/i.test(window.location.href)) {
            // console.log('유저페이지')
            iframe.postMessage('userPage', 'http://dev.hifactory.co.kr');
        }
    }, 100);


    guide.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.classList.contains("selected")) {
                //수정영역 on;
                iframe.postMessage("guideOn", 'http://dev.hifactory.co.kr');
            } else {
                //수정영역 off;
                iframe.postMessage("guideOff", 'http://dev.hifactory.co.kr');
            }
        });

    })


    // 메시지 수신 (사용자 정보입력 각 영역 색상 하이라이트)
    window.addEventListener('message', function (e) {
        // console.log(e.origin + " 윈도우 오리진")
        if (e.origin !== 'http://dev.hifactory.co.kr') return;

        // console.log(e.data + "자식 메시지 수신");



        function siblings(el) {
            let newArr = [...el.parentElement.children];
            return newArr.filter(function (item) {
                return item != el
            });
        }


        if (/invitation_user/i.test(window.location.href)) {

            for (let i = 1; i < inputList.length; i++) {
                // console.log(siblings(inputList[i]));
                switch (e.data) {
                    case `mMod${i - 1}`:
                        inputList[i].style.backgroundColor = "#fff7fa", siblings(inputList[i]).forEach(function (item) {
                            item.removeAttribute("style");
                            $(".mIList4 .list li").removeClass("selected");
                        });
                        $(".mIList4 .list li").eq(i).addClass("selected");
                        if ($(".mIList4 .list li:eq(" + i + ") .box").css("display") == "none") {
                            $(".mILnb").addClass("selected");
                            $(".mIList4 .list").scrollTop(80 * i);
                            $(".mIList4 .list li .box").slideUp();
                            $(".mIList4 .list li:eq(" + i + ") .box").slideDown();
                        }
                        break;
                    case "background":
                        inputList[3].style.backgroundColor = "#fff7fa", siblings(inputList[3]).forEach(function (item) {
                            item.removeAttribute("style");
                            $(".mIList4 .list li").removeClass("selected");
                        });
                        $(".mIList4 .list li:eq(3)").addClass("selected");
                        if ($(".mIList4 .list li:eq(3) .box").css("display") == "none") {
                            if (!($("#jsBackground").hasClass("selected"))) {
                                $(".mILnb").addClass("selected");
                                $(".mIList4 .list").scrollTop(80 * 1);
                                $(".mIList4 .list li .box").slideUp();
                                $(".mIList4 .list li:eq(3) .box").slideDown();
                            }
                        }
                        break;
                }
            }
        }


    });
}, 1000);

// 사용자 패널 클릭 열고 닫기 및 수정영역 토글
$(function () {
    //.ti 클릭 이벤트 설정 이유 - li에 클릭 이벤트를 넣으면 li>input 박스 클릭할때도 발생함
    $(".mIList4 .list li .ti").click(function () {
        let box = $(this).parent().siblings(".box");

        if (box.css("display") == "none") {
            $(this).parent().parent().addClass("selected");
            box.slideDown();
        } else {
            $(this).parent().parent().removeClass("selected").removeAttr("style");
            box.slideUp();
        }
    });

    // 수정영역 off시 사용자 패널 닫기 및 스타일 제거
    // $(".jsBtnToggle4").click(function () {
    //     if (!$(this).hasClass("selected")) {
    //         $(".mIList4 .list li").removeAttr("style").removeClass("selected").find(".box").slideUp();
    //     }
    // });


});