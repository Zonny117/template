$(document).ready(function() {
		

	// alert( $(document).height() )


	let content = $(".dn").filter(function(){
		return $(this).css("display") === "none"
	})

	let footer = $(".fdn").filter(function(){
		return $(this).css("display") === "none"
	})

	if(content.length === 5 && footer.length === 2){
		$(window).on("resize load", function(){
			$(".mMod2").height( $(window).height() );
		});
	}

	if(footer.length ===2){
		$("#footer").css({
			display:"none"
		})
	}
});


