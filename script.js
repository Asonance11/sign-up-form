let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let errormsg = document.getElementById('error');

function checkPassword() {
	if (password.value === confirmPassword.value) {
		return;
	} else {
		password.style.border = '1px solid red';
		confirmPassword.style.border = '1px solid red';
		errormsg.textContent = 'password does not match';
	}
}
password.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkPassword);
