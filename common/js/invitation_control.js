/* 
    [템플릿 가이드라인 및 실시간 텍스트 입력 미리보기 JS]
    
    last update 05/11

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


    // 메시지 수신 (사용자 정보입력 각 영역 색상 하이라이트)
    window.addEventListener('message', function (e) {
        // console.log(e.origin + " 윈도우 오리진")
        if (e.origin !== 'http://dev.hifactory.co.kr') return;

        // console.log(e.data + "자식 메시지 수신");

        let inputList, plus;

        function siblings(el) {
            let newArr = [...el.parentElement.children];
            return newArr.filter(function (item) {
                return item != el
            });
        }


        if (/invitation_ai/i.test(window.location.href)) {
            inputList = document.querySelectorAll("#mCSB_3 .mIList2>li");
            plus = 0;
        } else {
            inputList = document.querySelectorAll(".mIList4 li");
            plus = 1;
        }

        for (let i = 0; i < inputList.length; i++) {
            // console.log(siblings(inputList[i]));
            switch (e.data) {
                case `mMod${i}`:
                    inputList[i + plus].style.backgroundColor = "#fff7fa", siblings(inputList[i + plus]).forEach(function (item) {
                        item.removeAttribute("style");
                        $(".mIList4 .list li").removeClass("selected");
                    });
                    $(".mIList4 .list li:eq(" + (i + plus) + ")").addClass("selected");
                    if ($(".mIList4 .list li:eq(" + (i + plus) + ") .box").css("display") == "none") {
                        $(".mILnb").addClass("selected");
                        $(".mIList4 .list").scrollTop(80 * i);
                        $(".mIList4 .list li .tit .gRt input[type='checkbox']").prop("checked", false);
                        $(".mIList4 .list li .box").slideUp();
                        $("#labelInvitation" + i + "_1").prop("checked", true);
                        //$("#labelInvitation" + i + "_1").parent().parent().parent().siblings(".box").slideDown();
                        $(".mIList4 .list li:eq(" + (i + plus) + ") .box").slideDown();
                        //$("#jsBackground").removeClass("selected");
                    }
                    break;
                case "background":
                    inputList[2 + plus].style.backgroundColor = "#fff7fa", siblings(inputList[2 + plus]).forEach(function (item) {
                        item.removeAttribute("style");
                        $(".mIList4 .list li").removeClass("selected");
                    });
                    $(".mIList4 .list li:eq(" + (2 + plus) + ")").addClass("selected");
                    if ($(".mIList4 .list li:eq(" + (2 + plus) + ") .box").css("display") == "none") {
                        if (!($("#jsBackground").hasClass("selected"))) {
                            $(".mILnb").addClass("selected");
                            $(".mIList4 .list").scrollTop(80 * (1 + plus));
                            $(".mIList4 .list li .tit .gRt input[type='checkbox']").prop("checked", false);
                            $(".mIList4 .list li .box").slideUp();
                            $("#labelInvitation" + (1 + plus) + "_1").prop("checked", true);
                            $(".mIList4 .list li:eq(" + (2 + plus) + ") .box").slideDown();
                            //$("#jsBackground").addClass("selected");
                        }
                    }
                    break;
                case "helpOff":
                    inputList[i].removeAttribute('style');
                    break;
            }
        }
    });
}, 1000);