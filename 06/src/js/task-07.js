
const element = document.querySelector("#font-size-control");
const initialValue = element.valueAsNumber;

element.addEventListener("input", applySizeChange);

function applySizeChange() {
	
	const currentSize = 100.00 * element.valueAsNumber / initialValue;
	document.getElementById("text").style.fontSize = `${currentSize}%`;
}
