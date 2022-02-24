$(document).ready(function () {

	$(window).on("resize load", function () {
		$(".mMod2").height($(window).height());
	});

	let content = $(".content .dn").filter(function () {
		return $(this).css("display") === "none"
	})

	if (content.length === 6) {
		$(".content").css({
			display: "none"
		})

		$(".mMod2, .background").css({
			width: "100%"
		})

		$(".mMod6.forMobile").css({
			marginTop: "50px"
		})

		$(".mMod2 .modBg").css({
			paddingTop: "66px"
		})
	}

	$(".more").click(function(){

		$("html,body").css({
			overflow:"hidden"
		});
	});

	$(".close").click(function(){
		$("html,body").css({
			overflow:"unset"
		});
	});

});