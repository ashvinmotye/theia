$(document).ready(function(){
	$(window).scroll(function(){
		var topPosition = $(this).scrollTop();
		var homeHeight = $('#home').height();

		// home header
		// move slower depending on position
		if (topPosition <= homeHeight+50) {
			$('#home-container').css({
				'transform' : 'translateY('+(topPosition/4)+'%)'
			});
		}

		// about section
		// appear one after the other
		if (topPosition > $('#about').offset().top - 50) {
			$('.features').each(function(i) {
				setTimeout(function(){
					$('.features').eq(i).addClass('animate-features');
				}, 300*(i+1));
			});
		}

		// team section
		// come inwards and settle
		// if (topPosition > $('#team').offset().top - 50) {
		// 	var move = Math.min(0, topPosition - $('#team').offset().top - 250);

		// 	$('#akshi').css({
		// 		'transform' : 'translate('+move+'px, '+Math.abs(move*0.8)+'px)'
		// 	});

		// 	$('#ashvin').css({
		// 		'transform' : 'translate('+Math.abs(move)+'px, '+Math.abs(move*0.8)+'px)'
		// 	});
		// }
	});
});