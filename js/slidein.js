$(function(){
var menu = $('#slide_menu'),
	menuBtn = $('#button'),
	body = $(document.body),	
	menuWidth = menu.outerWidth();	            
		
	menuBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			menu.animate({'left' : 8 }, 120);
		} else {
			menu.animate({'left' : -140 }, 120);
		}		     
	});
});    