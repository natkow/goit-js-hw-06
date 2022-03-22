
document.querySelector(".change-color").addEventListener("click", changeColor);

function changeColor() {
	const newColor = getRandomHexColor();

	document.querySelector("body").style.backgroundColor = newColor;
	document.querySelector("span.color").innerHTML = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
