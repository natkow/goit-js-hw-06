
const category = document.querySelector('ul');
const allChildren = category.children;
const catNum = [...allChildren].length;
console.log("Number of categories:", catNum);

for (let i of [...allChildren]) {
    console.log("Category:", i.firstElementChild.innerHTML);
    console.log("Elements:", i.lastElementChild.children.length);
}






