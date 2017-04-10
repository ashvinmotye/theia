$(document).ready(function(){
	// hide all with class hidden-onload
	$(".hidden-onload").hide();

	// add click event listener to show more button
	// change text value
	// depending on state
	$('#show-more').on('click', function(){
		$(".hidden-onload").slideToggle(300);
		$(this).toggleClass("square");

		if ($(this).hasClass('square'))
			$(this).text('Show less');
		else
			$(this).text('Show more');
	});
});