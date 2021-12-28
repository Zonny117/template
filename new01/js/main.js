$(function () {


    function vhfix() {
        // 100vh fixed layer fix
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vhfix();


    // 리사이즈 될때마다 호출
    $(window).resize(function () {
        vhfix();
    })


})