const btn = document.querySelector("#counter");
let counterValue = 0;

const firstBtn = btn.firstElementChild;
const lastBtn = btn.lastElementChild;

const addValue = () => {
    counterValue += 1;
  console.log(counterValue);
};

const deleteValue = () => {
    counterValue -= 1;
  console.log(counterValue);
};

firstBtn.addEventListener("click", deleteValue);
lastBtn.addEventListener("click", addValue);