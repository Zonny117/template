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

	let iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


	const body = document.querySelector('body');
	let ios_scroll = 0;

	function enable() {
		ios_scroll = window.pageYOffset;
		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.top = `-${ios_scroll}px`;
		body.style.width = '100%';
	}

	function disable() {
		body.style.removeProperty('overflow');
		body.style.removeProperty('position');
		body.style.removeProperty('top');
		body.style.removeProperty('width');
		window.scrollTo(0, ios_scroll);
	}

	$(".more").click(function () {

		if (iOS) {
			enable();
		}

		$("html,body").css({
			overflow: "hidden"
		});
	});

	$(".close").click(function () {

		if (iOS) {
			disable();
		}


		$("html,body").css({
			overflow: "unset"
		});
	});



	$(".btn_QR").click(function () {


		if (iOS) {
			enable();
		}

		$(".qrpopup").addClass("on");

		$("html,body").css({
			overflow: "hidden"
		});
	});

	$(".btn_close").click(function () {


		if (iOS) {
			disable();
		}


		$("html,body").css({
			overflow: "unset"
		});


		$(".qrpopup").removeClass("on");

	});

});