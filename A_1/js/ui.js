$(document).ready(function () {


	// alert( $(document).height() )


	let content = $(".dn").filter(function () {
		return $(this).css("display") === "none"
	})

	let footer = $(".fdn").filter(function () {
		return $(this).css("display") === "none"
	})

	if (content.length === 5 && footer.length === 2) {
		$(window).on("resize load", function () {
			$(".mMod2").height($(window).height());
		});
	}

	if (footer.length === 2) {
		$("#footer").css({
			display: "none"
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

	$(".btn_QR").click(function () {
		$("html, body, .qrpopup").addClass("on");

		if (iOS) {
			enable();
		}
	});

	$(".close2").click(function () {
		$(".qrpopup, html, body").removeClass("on");

		if (iOS) {
			disable();
		}
	});


	resize_mod9txt('bottom');
});