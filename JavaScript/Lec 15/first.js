/*function handleClick(){
    const elemnt = document.getElementById("first");
    elemnt.textContent ="Java Series is Coming soon....";
}*/

const element = document.getElementById("first");

/*element.onclick = function handleClick() {
  element.textContent = "Java Series is Coming soon....";
};

element.onclick = function handleClick() {
  element.textContent = "Coder Mode On...";
};*/ //we not use this because this type of event only perform one action and override other

/*element.addEventListener('click',()=>{
    element.textContent = "Java Series is Coming soon....";

})*/

element.addEventListener("mouseenter", () => {
  element.textContent = "Java Series is Coming soon....";
});

element.addEventListener("mouseenter", () => {
  element.style.backgroundColor = "blue";
});

element.addEventListener("mouseleave", () => {
  element.textContent = "You Become Developer";
});
element.addEventListener("mouseleave", () => {
  element.style.backgroundColor = "red";
});

/*const child1 = document.getElementById(child1);
child1.addEventListener('click', ()=>{
    child1.textContent = "I am Clicked Changes";
}) 
*/

/*const parent = document.getElementById("parent");
console.log(parent.children);

for (let child of parent.children) {
  child.addEventListener('click',()=>{
    child.textContent = "I am Changed";
  }) 
}
*/

//const grandparent = document.getElementById("grandparent");
//grandparent.addEventListener("click", (e) => {
  //console.log("Grandparent is clicked");
  //console.log(e.target);
  /*target se hame pta chalta h ki konsa element trigger kiya h aur hume har jagah 
  event listener ko lagana nhi padta h*/
  
//},/*true/false*/);

/*
const parent = document.getElementById("parent");

parent.addEventListener('click',(e)=>{
  e.target.textContent = "I am Clicked"
})
*/

const parent = document.getElementById("parent");

function handleClick(e){
  e.target.textContent = "I am clicked";
  parent.removeEventListener("click", handleClick); //ye event ko remove karne keliye use karte h
}

parent.addEventListener('click',handleClick);



/*
const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
  
  //console.log("Parent is clicked");
  console.log(e);
});

const child = document.getElementById("grandparent");
child.addEventListener("click", () => {
  //console.log("Child is clicked");
  console.log(e);
  e.stopPropagation();
});
*/
//capture phase on hai to:Top se down aaega us time pe evnet ko trigger kar diya jaaega
//capture phase off hai to : Event hai usko down to up (BUbbling phase bolte hai tb trigger kiya jata hai)