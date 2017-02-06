$(function(){
	$("[id^=hover]").hover(overFunc,outFunc);
	function overFunc(){
		$(this).css("background-color","#0080FF");
		$(this).css("color","blue");
		$(this).css("box-shadow","2px 3px 6px 3px #3d409f");
	}
	function outFunc(){
		$(this).css("background-color","gray");
        $(this).css("color","white");
		$(this).css("box-shadow","none");
	}
});

