$(function() {
	$(window).scroll(function(){

		if ($(window).scrollTop() >=50){
			
			$('main-nav').addClass('scroll');
		} else {
			$('main-nav').removeClass('scroll');
	
		
	}});

	
	var root = $('html, body');
	
	$('a[href^="#]').click(function(){
		
		var href = $(this).attr(this, 'href');
		
		root.animate({ scrollTop: $(href).offset().top }, 500);
		
	});
	
	// interval and custom config passed to reveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('.row');
});


