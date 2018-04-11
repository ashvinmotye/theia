$(document).ready(function(){
	// set click event to "user" on menu bar
	$('a[data-showForm=show-form]').on("click", function(){
		// add class to show form (translate)
		$('.form-container').addClass("form-translate");
		// change height and width of modal shadow
		$('.modal-shadow').css({
			"height": "100%",
			"width": "100%"
		});
		// bring user to top
		$('body','html').animate({
			'scrollTop' : $('#home').offset().top
		}, 300);

		document.querySelector('#home').scrollIntoView({ behavior: "smooth", block: "start" });

		return false;
	});

	// set click event to close modal button
	$('#close-modal').on('click', function(){
		// hide form
		$('.form-container').removeClass("form-translate");
		// hide modal shadow
		$('.modal-shadow').css({
			"height": "0%",
			"width": "0%"
		});
		
		return false;
	});

	// close form container if ECS key is pressed
	$(document).keydown(function(e) {
	    // ESC key pressed with key code of 27
	    if (e.keyCode == 27) {
	        // hide form
			$('.form-container').removeClass("form-translate");
			// hide modal shadow
			$('.modal-shadow').css({
				"height": "0%",
				"width": "0%"
			});
			return false;
	    }
	});

	// SUCCESSFUL FORM SUBMISSION
	// hide message on load
	$("div.success-message").hide();

	// hide feedback form on load
	$("div#user-comment").hide();

	// sign-in form on SUCCESSFUL submit
	$("form[name='sign-in']").on("submit", function() {
		if( (!($("form[name='sign-in'] input")=="") && !(validateIn() == false))) {
			// hide both forms
		    $("form[name='sign-in']").slideUp(300);
		    $("form[name='sign-up']").slideUp(300);

		    // show successful message
		    $("div.success-message").slideToggle(300);
		    // add username to message
		    $("span#signed-in").text("");
		    $("span#signed-in").append("Hello.<br>You have been signed in as "+$("input[name='username']").val()+".");

		    // set USER to <username> input by user
		    $('a[data-showForm=show-form]').text($("input[name='username']").val());
		    $('a[data-showForm=show-form]').css({"color": "#AED581"});

		    // feedback form on the page
		    $("div#user-comment").slideToggle(300);

		    // set email subscription to default
			$("#a-email").text("");
			$("form[name='subscribe']").show();
			$("input[name='email']").val("");
			$("#subscribe h1").text("Subscribe");
		}
		return false;
	});

	// sign-up form on SUCCESSFUL submit
	$("form[name='sign-up']").on("submit", function() {
		if( (!($("form[name='sign-up'] input")=="") && !(validateUp() == false))) {
			// hide both forms
		    $("form[name='sign-in']").slideUp(300);
		    $("form[name='sign-up']").slideUp(300);

		    // show successful message
		    $("div.success-message").slideToggle(300);
		    // add <username> to message
		    $("#signed-in").text("");
		    $("#signed-in").append("Hello.<br>You have been signed in as "+$("input[name='new-username']").val()+".");

		    // set USER to <username> input by user
		    $('a[data-showForm=show-form]').text($("input[name='new-username']").val());
		    $('a[data-showForm=show-form]').css({"color": "#AED581"});

		    // feedback form on the page
		    $("div#user-comment").slideToggle(300);

		    // set email subscription to default
			$("#a-email").text("");
			$("form[name='subscribe']").show();
			$("input[name='email']").val("");
			$("#subscribe h1").text("Subscribe");
		}
		return false;
	});

	// ADD FEEDBACK ON THE DOCUMENT
	// on submit of form[name='comment-section']
	$("form[name='comment-section']").on("submit", function() {
		// IF NOT EMPTY
			// get content from textarea[name='comment']
		if($("textarea[name='comment']").val().length < 10) {
			$('#a-comment').text("Comment cannot be less than 10 characters.");
			return false;
		} else {
			$('#a-comment').text("");
		}

		// get value from text area
		var userComment = $("textarea[name='comment']").val();

		// append comment to feedback
		$("div.user-feedback").prepend("<div class=\"feedback\"><p>" +userComment+ "</p><h3>" +$('a[data-showForm=show-form]').text() + "</h3></div>");

		// display success message
		$('#a-comment').text("Feedback submitted.");
		// clear textarea
		$("textarea[name='comment']").val("");

		return false;
	});

	// EMAIL SUBSCRIPTION
	$("form[name='subscribe']").on("submit", function(){
		$("#a-email").text("You will now receive our monthly newsletter.");
		$(this).hide(300);
		$("#subscribe h1").text("Subscribed!")
		return false;
	});

	// SIGN OUT button
	// implies reset all forms
	$('button#sign-out').on("click", function() {
		// reset all forms
		$('form').each(function() { 
			this.reset() 
		});

		//clear all form alerts
		$('form span.my-alert').each(function(){
			$(this).text(" ");
		});

		// show sign-in and sign-out forms
		$("form[name='sign-in']").slideToggle(300);
	    $("form[name='sign-up']").slideToggle(300);

		// hide successful message
		$("div.success-message").slideToggle(300);
	    // remove <username> from message
	    $("#signed-in").text("");
	    $("#signed-in").append("You have been signed out.");

	    // set <username> back to USER on menu
	    $('a[data-showForm=show-form]').text("User");
	    // change to default
	    $('a[data-showForm=show-form]').css({"color": "#F8F9F9"});
	    // add initial hover effect
	    $('a[data-showForm=show-form]').on({
	    	mouseenter: function(){
	    		$(this).css({"color": "#005C9E"});
	    	},
	    	mouseleave: function(){
	    		$(this).css({"color": "#F8F9F9"});
	    	}
	    })

		// hide feedback form
		$("div#user-comment").slideToggle(300);
		// clear success comment message
		$('#a-comment').text("");

		// set email subscription to default
		$("#a-email").text("");
		$("form[name='subscribe']").show();
		$("input[name='email']").val("");
		$("#subscribe h1").text("Subscribe");
	});
});
