$(function () {

    let bg = $(".modbg").css("display");

    if (bg === "none") {
        $(".default").css({
            display: "block"
        });
    } else {
        $(".default").css({
            display: "none"
        });
    }

})