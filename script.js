let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let errormsg = document.getElementById('error');
let button = document.getElementById('btn');

function checkPassword() {
	if (password.value === confirmPassword.value) {
		password.style.border = '1px solid green';
		confirmPassword.style.border = '1px solid green';
	} else {
		password.style.border = '1px solid red';
		confirmPassword.style.border = '1px solid red';
	}
}
password.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkPassword);
