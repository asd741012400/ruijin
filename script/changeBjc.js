$(function(){
	$('input').bind('change' ,function(){
		if($(this).val() != ""){
			$(this).parent().css({
				"background" : "#fff"
			})
		}
		else
		{
			$(this).parent().css({
				"background" : "#f2f2f2"
			})
		}
	})

	$('header span').bind('click',function(){
		history.back(-1);
	})
})	

