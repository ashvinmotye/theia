$(document).ready(function(){

	$(window).scroll(function(){
		// position of window from the top
		var topPos = $(this).scrollTop();

		// make links on nav active
		// based on distance from top
		// HOME
		if (topPos >= $('#home').offset().top-70) {
			$('a.scroll').removeClass('active');
			$('a[data-scrollTo=home]').addClass('active');
		}

		// ABOUT
		if (topPos >= $('#about').offset().top-70) {
			$('a.scroll').removeClass('active');
			$('a[data-scrollTo=about]').addClass('active');
		}

		// SLIDER
		if (topPos >= $('#slider').offset().top-70) {
			$('a.scroll').removeClass('active');
			$('a[data-scrollTo=slider]').addClass('active');
		}

		// TEAM
		if (topPos >= $('#team').offset().top-70) {
			$('a.scroll').removeClass('active');
			$('a[data-scrollTo=team]').addClass('active');
		}

		// FEEDBACK
		if (topPos >= $('#feedback').offset().top-70) {
			$('a.scroll').removeClass('active');
			$('a[data-scrollTo=feedback]').addClass('active');
		}
	});


	// set on click function to links
	$('a.scroll').on('click', function(){
		// get section id from the attribute of data-scrollTo
		var sectionId = $(this).attr('data-scrollTo');

		// animate the body and html
		$('body','html').animate({
			scrollTop : $('#'+sectionId).offset().top
		}, 700);
		
		return false;
	});
});