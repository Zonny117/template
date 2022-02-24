$(function () {

    function currentTarget(e) {

        // console.log(e.target)


        let mod3h2 = e.currentTarget.querySelector(".mMod3").children[0];
        let mod3txt = e.currentTarget.querySelector(".mMod3").children[1];
        // console.log(mod3)



        if (e.target === mod3h2 || e.target === mod3txt) {
            console.log("영역입니다")
        } else {
            console.log("영역밖입니다")
        }



    }


    $("body").on("touchstart", currentTarget);


});