/* 
    [템플릿 가이드라인 및 실시간 텍스트 입력 미리보기 JS]
    
    last update 06/21

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
    // const btnSave = document.querySelector("#frmSave .mButton1 .mBtn1");
    // const logo = document.querySelector("#file1Name");
    const tel = document.querySelector("#delegateTel");
    let span = document.createElement("span");
    let prevent = 1;


    // btnSave.removeAttribute('onclick');

    // function checkPic(item, switchBtn) {
    //     if (document.querySelector(`${switchBtn} .switch-button`).children[0].checked) {
    //         return /jpg|jpeg|png/i.test(item.value.split(".")[1]);
    //     } else {
    //         return true;
    //     }
    // }

    // function higlightBox(item) {
    //     document.querySelector(item).classList.add("selected");
    //     document.querySelector(`${item} .box`).style.display = "block";
    // }

    // btnSave.addEventListener("click", function () {
    //     // 클릭 할때마다 새로 생성
    //     const picture = [...document.querySelectorAll("#divTemplatePic input:first-child")];

    //     // 사진 이미지 체크
    //     let newPic = picture.filter(function (el) {
    //         return !checkPic(el, "#mMod9");
    //     });
    //     let okPic = picture.filter(function (el) {
    //         return checkPic(el, "#mMod9");
    //     });


    //     // 전부 true일 경우, 전송
    //     if (checkPic(logo, "#mMod1") && newPic.length === 0) {
    //         btnSave.setAttribute('onclick', 'lwin.pageSave()');
    //         btnSave.click();
    //     } else {
    //         // 로고 이미지 체크
    //         let isLogoSpan = logo.closest(".mFile1").children[2];

    //         //false 일 경우
    //         if (!checkPic(logo, "#mMod1")) {

    //             higlightBox(".mIList4 .list #mMod1");
    //             logo.style.backgroundColor = "#f45897";

    //             let span = document.createElement(`span`);
    //             span.style.color = "red";
    //             span.style.fontSize = "18px";
    //             span.innerText = "이미지 파일을 등록해주세요.";

    //             if (isLogoSpan === undefined) {
    //                 logo.closest(".mFile1").append(span);
    //             }
    //         }
    //         // true일 경우
    //         else {
    //             logo.removeAttribute('style');
    //             if (isLogoSpan !== undefined) {
    //                 isLogoSpan.remove();
    //             }
    //         }


    //         // 사진 이미지 체크
    //         if (newPic.length >= 1) {
    //             higlightBox(".mIList4 .list #mMod9");

    //             // false일 경우
    //             newPic.forEach(function (item) {
    //                 let isSpan = item.closest(".mFile1").children[2];

    //                 console.log("newpic", item);

    //                 item.style.backgroundColor = "#f45897";
    //                 let span = document.createElement(`span`);
    //                 span.style.color = "red";
    //                 span.style.fontSize = "18px";
    //                 span.innerText = "이미지 파일을 등록해주세요.";

    //                 if (isSpan === undefined) {
    //                     item.closest(".mFile1").append(span);
    //                 }

    //             });
    //             // true일 경우
    //             okPic.forEach(function (item) {
    //                 let isSpan = item.closest(".mFile1").children[2];
    //                 item.removeAttribute("style");

    //                 if (isSpan !== undefined) {
    //                     isSpan.remove();
    //                 }
    //             });
    //         }
    //         // 사진 1개 사용시, true일 경우
    //         else if (newPic.length === 0) {
    //             okPic.forEach(function (item) {
    //                 let isSpan = item.closest(".mFile1").children[2];
    //                 item.removeAttribute("style");

    //                 if (isSpan !== undefined) {
    //                     isSpan.remove();
    //                 }
    //             });
    //         }

    //         alert("jpg 혹은 png 파일을 등록해주세요.");
    //     }

    // });

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

    // 내부 iframe 전달 (수정영역 버튼)
    let guide = document.querySelectorAll(".jsBtnToggle4");
    let inputList = document.querySelectorAll(".mIList4 li");
    // console.log(inputList);


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


    // 메시지 수신 (사용자 정보입력 각 영역 색상 하이라이트 및 선택 영역 제외 나머지 닫힘)
    window.addEventListener('message', function (e) {
        // console.log(e.origin + " 윈도우 오리진")
        // if (e.origin !== "*") return;

        // console.log(e.data + "자식 메시지 수신");
        let mod = /mMod\d{1,2}|background/i.exec(e.data);

        if (/invitation_user/i.test(window.location.href)) {

            for (let i = 1; i < inputList.length; i++) {
                let offset = $(".mIList4 .list li").eq(i).offset().top;
                let bgOffset = $(".mIList4 .list li").eq(3).offset().top;

                if (mod[0] === "mMod4") {
                    offset = 225;
                } else if (mod[0] === "mMod9") {
                    offset = 515;
                }

                switch (mod[0]) {

                    case `mMod${i - 1}`:
                        inputList[i].style.backgroundColor = "#fff7fa";

                        $(".mIList4 .list li").eq(i).siblings().removeAttr("style").removeClass("selected").find(".box").slideUp(0);
                        $(".mIList4 .list li").eq(i).addClass("selected").find(".box").slideDown(0, function () {
                            $(".mIList4 .list").scrollTop(offset - 66);
                        });
                        $(".mILnb").addClass("selected");
                        // if ($(".mIList4 .list li:eq(" + i + ") .box").css("display") === "none") {
                        //     $(".mIList4 .list").scrollTop(8'fast' * i);
                        //     $(".mIList4 .list li .box").slideUp();
                        //     $(".mIList4 .list li:eq(" + i + ") .box").slideDown();
                        // }
                        break;
                    case "background":
                        inputList[3].style.backgroundColor = "#fff7fa";

                        $(".mIList4 .list li").eq(3).siblings().removeAttr("style").removeClass("selected").find(".box").slideUp(0);
                        $(".mIList4 .list li:eq(3)").addClass("selected").find(".box").slideDown(0, function () {
                            $(".mIList4 .list").scrollTop(bgOffset - 66);
                        });
                        $(".mILnb").addClass("selected");
                        // if ($(".mIList4 .list li:eq(3) .box").css("display") === "none") {
                        //     if (!($("#jsBackground").hasClass("selected"))) {
                        //         $(".mIList4 .list").scrollTop(80 * 1);
                        //         $(".mIList4 .list li .box").slideUp();
                        //         $(".mIList4 .list li:eq(3) .box").slideDown();
                        //     }
                        // }

                        break;
                }

                $(".jsBtnCloseUser2").on('click', function () {
                    $(".mIList4 .list").scrollTop(0);
                    $(".mIList4 .list li").eq(i).removeAttr("style").removeClass("selected").find(".box").slideUp(0);
                });

            }

        }
    });
}, 1000);

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

    // 수정영역 off시 사용자 패널 닫기 및 스타일 제거
    // $(".jsBtnToggle4").click(function () {
    //     if (!$(this).hasClass("selected")) {
    //         $(".mIList4 .list li").removeAttr("style").removeClass("selected").find(".box").slideUp();
    //     }
    // });


});