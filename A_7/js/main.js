$(function () {


    $(".btn_dot").click(function () {

        $(".topmenu").toggleClass("on");


    });

    $(document).on("DOMMouseScroll mousewheel", function(){

        let scT = $(window).scrollTop();

        let wrap = $("#wrap").height();
        // console.log(scT)

        if(scT >= wrap){
            $(".titlebx").addClass("on")
        }
        else(
            $(".titlebx").removeClass("on")
        )
    });


}); ////////////////