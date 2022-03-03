const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (let i of ingredients) {
  const elementList = document.createElement("li");
  elementList.classList.add("item");
  elementList.textContent = i;
  list.append(elementList);
}


