$(document).ready(function() {
		
	$(".iTop").click( function() {
		$("html, body").animate({ scrollTop : 0 }, 400);
		return false;
	});
		
	$(".mMod9 .more").click( function() {
		$( $(this).attr("href") ).addClass("active");
		return false;
	});
	$(".lMod9 .close").click( function() {
		$( $(this).attr("href") ).removeClass("active");
		return false;
	});
		
	$(".jsBtnShow1").click( function() {
		$( $(this).attr("href") ).show();
		return false;
	});
	
	$(".jsBtnClose1").click( function() {
		$( $(this).attr("href") ).hide();
		return false;
	});
	
});


