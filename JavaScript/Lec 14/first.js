const newElement = document.createElement("h2");
newElement.textContent = "Welcome Back to Coding World";
newElement.id = "second";

console.log(newElement);

//select element
const element = document.getElementById("first");
element.after(newElement);
//element.before(newElement);

const newElement1 = document.createElement("h3");
newElement1.textContent = "Ramzan is Coming...........";
newElement1.id = "third";
//newElement1.className = "Ramzan";
newElement1.classList.add("Ramzan");
newElement1.classList.add("Eid");
//newElement1.classList.remove("Eid");

newElement1.style.backgroundColor = "aqua";
newElement1.style.fontSize = "30px";
newElement1.setAttribute("Hello", "ji");

console.log(newElement1);

element.after(newElement1);
//const element1 = document.getElementById("third");
//element1.before(newElement1);

console.log(newElement1.getAttribute("Hello"));
/*
const list = document.createElement("li");
list.textContent = "Milk"
const list1 = document.createElement("li");
list1.textContent = "Cake";
const list2 = document.createElement("li");
list2.textContent = "Sweets";
const list3 = document.createElement("li");
list3.textContent = "Biryani";

const unorderElement = document.getElementById("listing");
unorderElement.append(list,list1);
//unorderElement.append(list1);
unorderElement.prepend(list2);
list2.after(list3);
*/
const arr = ["Milk", "Cold-drink", "Tea", "Coffee", "Sharbat"];
const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

//array
for(let drinks of arr){
  const list = document.createElement("li");
  list.textContent = drinks;
  fragment.append(list);
}

unorderElement.append(fragment);

const s1 = document.getElementById("first");
s1.remove();

const mon = document.getElementById("month");
//console.log(month.children);

const lister = document.createElement("li");
//lister.textContent = "Help";
//mon.insertAdjacentElement("beforeend",lister)
