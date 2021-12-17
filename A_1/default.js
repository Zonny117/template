var guid="";
var naviTargetName="";
var naviX=0.0;
var naviY=0.0;

$(function(){
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
    if (urlParams.get('guid')!=null) { 
        guid=urlParams.get('guid'); 
        $("#phoneContactAddress").attr("href","/_UpLoad/MakeSiteList/"+guid+"/vCard.vcf");
    }

    lwin.pageLoading();
});

var lwin = {
    pageLoading : function() {
        if (guid!="") {
            $.ajax({
                type		: 'post',
                url			: '/API/pageLoading.asp',
                data		: { "guid":guid },
                success		: function(data){ var datas = JSON.parse(data);
                    /* 로그 */
                    if (datas.Result[0].RadioLogo=="logo") {
                        $("#logoTitle").hide(); $("#logoImg").show();
                        datas.Files.filter(function (obj) {
                            if (obj.Sort=="1") { $("#logoImg > h1 > img").attr("src","/_UpLoad/MakeSiteList/"+guid+"/B_"+obj.FileNm); }
                        });
                    } else {
                        $("#logoTitle").show(); $("#logoImg").hide();
                        $("#logoImg > h1 > span").html(datas.Result[0].ServiceName);
                    }

                    /* 배경 */
                    if (datas.Result[0].BackgroundYN!="Y") { $(".mMod2 > .background").attr("style","background-image:url();"); }
                    else { 
                        if (datas.Result[0].BackgroundType=="sample") {
                            $(".mMod2 > .background").attr("style","background-image:url(/_UpLoad/Template/Background/B_"+datas.Result[0].BackgroundCode+");"); 
                        } else {
                            $(".mMod2 > .background").attr("style","background-image:url(/_UpLoad/MakeSiteList/"+guid+"/B_"+datas.Result[0].BackgroundCode+");"); 
                        }
                    }
                    //console.log($("#background").css("backgroundImage"));

                    /* 타이틀 제목+내용 */
                    if (datas.Result[0].TitleYN!="Y") { $(".mMod3").attr("style","display:;"); }
                    else {
                        $(".mMod3 > h2").html(datas.Result[0].TitleSubject);
                        $(".mMod3 > p").html(datas.Result[0].TitleContents.replace(/\\n/gi,'</br>'));
                        $(document).attr("title",datas.Result[0].TitleSubject);
                    }

                    /* 링크연결 */
                    if (datas.Result[0].LinkBtnYN!="Y") { $(".mMod7").attr("style","display:;"); }
                    else {
                        $(".mMod7").empty();
                        if (datas.LinkBtn!=null) {
                            $.each(datas.LinkBtn, function(index, item){ 
                                $(".mMod7").append(`<a href="${item.LinkBtnUrl}">${item.LinkBtnName}</a>`);
                            });
                        }
                    }

                    /* Sns링크 */
                    if (datas.Result[0].SnsLinkYN!="Y") { $("#jsSky").attr("style","display:;"); }
                    else {
                        $("#jsSkyList, .mMod11").empty();
                        var temp1 = datas.Result[0].SnsLinkUrl.split(",");
                        $.each(temp1, function(index, item){ 
                            var temp2 = item.split("∝");
                            $("#jsSkyList").append(`<a href="${$.trim(temp2[1])}" class="${$.trim(temp2[0])}">${$.trim(temp2[0])}</a>`);
                            $(".mMod11").append(`<a href="${$.trim(temp2[1])}" class="${$.trim(temp2[0])}">${$.trim(temp2[0])}</a>`);
                        });
                    }

                    /* 보조내용 */
                    if (datas.Result[0].SubYN!="Y") { $(".mMod4").attr("style","display:;"); }
                    else {
                        $(".mMod4 > ul").empty();
                        if (datas.SubContents!=null) {
                            $.each(datas.SubContents, function(index, item){ 
                                $(".mMod4 > ul").append(`
                                <li>
                                    <div class="tit">${item.SubSubject}</div>
                                    <div class="txt">${item.SubContents}</div>
                                    <div class="dot">${ datas.SubContents.map(function(sub){ return `<span class="${parseInt(sub.Sort)==item.Sort ? 'selected' : ''}"></span>`}).join('\n') }</div>
                                </li>
                                `);
                            });
                        }
                    }

                    /* 유튜브 */
                    if (datas.Result[0].YoutubeYN!="Y") { $(".mMod8").attr("style","display:;"); }
                    else { $(".mMod8").html(datas.Result[0].YoutubeUrl); }

                    /* 사진 */
                    if (datas.Result[0].PhotoYN!="Y") { $(".mMod9").attr("style","display:;"); }
                    else { 
                        $(".mMod9 > .swiper-container > .swiper-wrapper, .lMod9 > .modBg > .swiper-container > .swiper-wrapper").empty();
                        datas.Files.filter(function (obj) {
                            if (obj.Sort=="2" || obj.Sort=="3" || obj.Sort=="4") { 
                                $(".mMod9 > .swiper-container > .swiper-wrapper, .lMod9 > .modBg > .swiper-container > .swiper-wrapper").append(`<div class="swiper-slide"><img src="${"/_UpLoad/MakeSiteList/"+guid+"/B_"+GJF_ThumbnailName(obj.FileNm,'B')}" alt=""></div>`); 
                            }
                        });
                    }

                    /* 지도 */
                    if (datas.Result[0].LocalYN!="Y") { $(".mMod5").attr("style","display:;"); }
                    else {
                        $(".lyd_title").html(datas.Result[0].TitleSubject);
                        $(".lyd_address").html(datas.Result[0].Address);
                        $(".lyd_addressMemo").html(datas.Result[0].AddressMemo);

                        
                        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                            mapOption = {
                                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                                level: 3 // 지도의 확대 레벨
                            };  

                        // 지도를 생성합니다    
                        var map = new kakao.maps.Map(mapContainer, mapOption); 

                        // 주소-좌표 변환 객체를 생성합니다
                        var geocoder = new kakao.maps.services.Geocoder();

                        // 주소로 좌표를 검색합니다
                        geocoder.addressSearch(datas.Result[0].Address, function(result, status) {

                            // 정상적으로 검색이 완료됐으면 
                            if (status === kakao.maps.services.Status.OK) {

                                naviTargetName=datas.Result[0].TitleSubject;
                                naviX=result[0].x;
                                naviY=result[0].y;
                                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                                // 결과값으로 받은 위치를 마커로 표시합니다
                                var marker = new kakao.maps.Marker({
                                    map: map,
                                    position: coords
                                });

                                // 인포윈도우로 장소에 대한 설명을 표시합니다
                                var infowindow = new kakao.maps.InfoWindow({
                                    content: '<div style="width:150px;text-align:center;padding:6px 0;">'+datas.Result[0].TitleSubject+'</div>'
                                });
                                infowindow.open(map, marker);

                                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                                map.setCenter(coords);
                            } 
                        });  
                        
                    }
                    
                    /* 첨부파일 */
                    if (datas.Result[0].AttrYN!="Y") { $(".mMod10").attr("style","display:;"); }
                    else {
                        datas.Files.filter(function (obj) {
                            if (obj.Sort=="5") { $(".mMod10").html(`<a href="${"/_UpLoad/MakeSiteList/"+guid+"/O_"+obj.FileNm}"><span>${datas.Result[0].AttrLinkBtn}</span></a>`); }
                        });
                    }

                    /* 대표연락처 */
                    if (datas.Result[0].DelegateYN!="Y") { $(".mMod6").attr("style","display:;"); }
                    else {
                        var DelgateTel = GJF_OnlyPhoneNumber(datas.Result[0].DelegateTel);
                        $(".DelegateTel, .mTel").html(`<a href="tel:${DelgateTel}">${DelgateTel}</a>`);
                        $(".EtcTel").html(datas.Result[0].EtcTel);
                    }

                    
                },
                error		: function(xhr,status,error) {
                    alert("error="+error);
                }
            });
        }
    },
}
// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('f756c31eaab61432f56c95420ca49f4f');

function navi() {
    Kakao.Navi.start({
        name: naviTargetName,
        x: naviX,
        y: naviY,
        coordType: 'wgs84',
    })
}
// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());