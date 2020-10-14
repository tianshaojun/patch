$(document).ready(function(){
	/* Slide Toogle */
	$("ul.expmenu li > div.header").click(function(){
		var arrow = $(this).find("span.arrow");

		if(arrow.hasClass("up")){
		     arrow.removeClass("up");
			 arrow.addClass("down");

			 //样式调节
			 $(this).css({
			   position: 'fixed',
			   top: '320px'
			 })
			 

		 }else if(arrow.hasClass("down")){
		    arrow.removeClass("down");
			arrow.addClass("up");
			
			//样式调节
			$(this).css({
			   position: 'fixed',
			   top: '320px'
		     })
        }

		$(this).parent().find("ul.menu").slideToggle();

	});
});