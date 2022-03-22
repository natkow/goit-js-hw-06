
document.querySelector(".login-form").addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	const {
		elements: { email, password }
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		alert("Please fill in all the fields!");
	}
	
	const loginForm = {
		[email.name]: email.value,
		[password.name]: password.value
	}

	console.log(loginForm);
	
	event.currentTarget.reset();
}
