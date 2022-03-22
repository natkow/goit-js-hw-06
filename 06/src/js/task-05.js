
document.getElementById("name-input").addEventListener("input", updateName);

function updateName() {
	let theName = document.getElementById("name-input").value;
	if (theName.length === 0) {
		theName = "Anonymous";
	}
	document.getElementById("name-output").innerHTML = theName;
}
