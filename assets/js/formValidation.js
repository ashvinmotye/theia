// SELECT ALL INPUTS
	// sign-in form
	var username = document.forms["sign-in"]["username"];
	var password = document.forms["sign-in"]["password"];

	// sign-up form
	var fullname = document.forms["sign-up"]["fullname"];
	var newUsername = document.forms["sign-up"]["new-username"];
	var newPassword = document.forms["sign-up"]["new-password"];
	var confirmPassword = document.forms["sign-up"]["confirm-password"];

	// email subscription
	var email = document.forms["subscribe"]["email"];

// SELECT ALL ALERTS
	// from sign-in form
	var alertUsername = document.getElementById("a-username");
	var alertPassword = document.getElementById("a-password");

	// from sign-up form
	var alertFullname = document.getElementById("a-fullname");
	var alertNewUsername = document.getElementById("a-new-username");
	var alertNewPassword = document.getElementById("a-new-password");

	// from email subscription
	var alertEmail = document.getElementById("a-email");

// EVENT LISTENERS TO INPUT FIELDS
username.addEventListener("blur", usernameValidate, true);
password.addEventListener("blur", passwordValidate, true);
fullname.addEventListener("blur", fullnameValidate, true);
newUsername.addEventListener("blur", newUsernameValidate, true);
newPassword.addEventListener("blur", newPasswordValidate, true);
email.addEventListener("blur", emailValidate, true);

// VALIDATION FUNCTIONS
// validateIn for SIGN-IN FORM
function validateIn() {
	// username
	if (username.value == "") {
		alertUsername.textContent = "Username is required.";
		username.focus();
		return false;
	}

	// check username length
	if (username.value.length < 6 || username.value.length > 18) {
		alertUsername.textContent = "Between 6 and 18 characters.";
		username.focus();
		return false;
	}

	// username must contain only
		// letters
		// numbers
		// no whitespaces
	if (!(/^(?:[a-zA-Z])[a-zA-Z0-9]+$/.test(username.value))) {
		alertUsername.textContent = "Begin with a letter, followed by numbers only. No whitespaces.";
		username.focus();
		return false;
	}

	// password
	if (password.value == "") {
		alertPassword.textContent = "Password is required.";
		password.focus();
		return false;
	}

	// check length of password
	if (password.value.length < 8) {
		alertPassword.textContent = "8 or more characters.";
		password.focus();
		return false;
	}

	// check if password contains
		// one lowercase
		// one uppercase
		// one number
		// one special character from !@#$%^&*
	if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_.@#\$%\^&\*])/.test(password.value))) {
		alertPassword.textContent = "Must contain one lowercase, one uppercase, one number and one special character.";
		password.focus();
		return false;
	}
}

// validateUp for SIGN-UP FORM
function validateUp() {
	// fullname
	if (fullname.value == "") {
		alertFullname.textContent = "Full name is required.";
		fullname.focus();
		return false;
	}

	// check if
		// first char is not a whitespace
		// contains letters
		// approves presence of a whitespace in any position other than first
	if (!(/^(?:[a-zA-Z])[a-zA-Z\s]+$/.test(fullname.value))) {
		alertFullname.textContent = "Use only letters and first character cannot be a whitespace.";
		fullname.focus();
		return false;
	}

	// handles complete absence of a whitespace
	if (!(/\s/.test(fullname.value))) {
		alertFullname.textContent = "Separate first name and last name with a space.";
		fullname.focus();
		return false;
	}

	// username
	if (newUsername.value == "") {
		alertNewUsername.textContent = "Username is required.";
		newUsername.focus();
		return false;
	}

	// check length of username
	if (newUsername.value.length < 6 || newUsername.value.length > 18) {
		alertNewUsername.textContent = "Between 6 and 18 characters.";
		newUsername.focus();
		return false;
	}

	// username must contain only
		// letters
		// numbers
	if (!(/^(?:[a-zA-Z])[a-zA-Z0-9]+$/.test(newUsername.value))) {
		alertNewUsername.textContent = "Begin with a letter, followed by numbers only. No whitespaces.";
		newUsername.focus();
		return false;
	}

	// password
	if (newPassword.value == "") {
		alertNewPassword.textContent = "Password is required.";
		newPassword.focus();
		return false;
	}

	// check length of new password
	if (newPassword.value.length < 8) {
		alertNewPassword.textContent = "8 or more characters.";
		newPassword.focus();
		return false;
	}

	// check if password contains
		// one lowercase
		// one uppercase
		// one number
		// one special character from !@#$%^&*
	if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_.@#\$%\^&\*])/.test(newPassword.value))) {
		alertNewPassword.textContent = "Must contain one lowercase, one uppercase, one number and one special character.";
		newPassword.focus();
		return false;
	}

	// check is passwords match
	if (newPassword.value != confirmPassword.value) {
		alertNewPassword.textContent = "Passwords do not match.";
		newPassword.focus();
		return false;
	}
}

// validateMail for EMAIL SUBSCRIPTION FORM
function validateMail() {
	// empty field
	if (email.value == "") {
		alertEmail.textContent = "Email cannot be blank.";
		email.focus();
		return false;
	}

	// valid email
	if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))) {
		alertEmail.textContent = "Enter a valid email address.";
		email.focus();
		return false;
	}
}


// EVENT HANDLERS
// SIGN-IN FORM
	// username
	function usernameValidate() {
		if (username.value != "") {
			alertUsername.innerHTML = "";
			return true;
		}
	}

	// password
	function passwordValidate() {
		if (password.value != "") {
			alertPassword.innerHTML = "";
			return true;
		}
	}

// SIGN-UP FORM
	// fullname
	function fullnameValidate() {
		if (fullname.value != "") {
			alertFullname.innerHTML = "";
			return true;
		}
	}

	// username
	function newUsernameValidate() {
		if (newUsername.value != "") {
			alertNewUsername.innerHTML = "";
			return true;
		}
	}

	// password
	function newPasswordValidate() {
		if (newPassword.value != "") {
			alertNewPassword.innerHTML = "";
			return true;
		}
	}

// EMAIL SUBSCRIPTION FORM
	function emailValidate() {
		if (email.value != "") {
			alertEmail.innerHTML = "";
			return true;
		}
	}