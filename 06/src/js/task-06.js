
const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", validateContent);

function validateContent() {
	const validLength = inputElement.getAttribute("data-length");

	if (inputElement.value.length == validLength) {
		inputElement.className = "valid";
	} else {
		inputElement.className = "invalid";
	}
}
