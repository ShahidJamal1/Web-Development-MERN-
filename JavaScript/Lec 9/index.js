//function
function Dev() {
  console.log("Hey, Shahid Welcome to the Development World");
}

function addNumber(num1, num2, num3 = 0, num4 = 0) {
  const sum = num1 + num2;
  console.log(sum);
}

Dev();
addNumber(7, 9);
addNumber(88, 189);
addNumber(77, 20, 45);
addNumber(41, 17, 49, 20);

//Rest Operator
function addition(...n) {
  let sum = 0;
  for (let l of n) {
    sum = sum + l;
  }

  console.log(sum);
}

addition(88, 189);
addition(77, 20, 45);
addition(41, 17, 49, 20);
addition(41, 17, 49, 20, 44, 11, 19, 33);

const arr = [10, 20, 30, 40, 50];
const arr1 = [70, 80, 90];

const [first, second, ...num] = arr; //here use rest operator to catch the value
console.log(first, second, num);

const ans = [...arr, ...arr1]; //here use spread operator this operator use only on objet/array
console.log(ans);

//function: expression
const sumnum = function (num1, num2) {
  return num1 + num2;
};

console.log(sumnum(74, 19));

//Arrow function
/*const addition1 =(a,b)=>{
    return a+b;
}
*/
let arr2 = [45, 11, 56, 90, 47, 20];
arr2.sort((x, y) => x - y); //here used array function
console.log(arr2);

const addition1 = (a, b) => a + b;
console.log(addition1(56, 66));

//const squareNumber = (s) => s*s;
//if we have single parameter, no need of ()

const sNum = (s) => s * s;
console.log(sNum(6));

const greet = () => ({ name: "Jamal", age: 20 });
console.log(greet());

//another way of creating function
(function cast() {
  console.log("Welcome to this  coding journey");
})();

(() => {
  console.log("Nice Journey Keep it up");
})();

//call back function

function greet1() {
  console.log("Hey,How are you");
}

function sing() {
  console.log("I wanna sing for you");
}

function meet(callback) {
  console.log("I am going to meet my father after some times");
  callback();
  console.log("I meet my father yestarday");
}

meet(greet1);
meet(sing);

// zomato and blinkit merger example

//blinkit
function blikitOrderPlaced() {
  console.log("We have started packing your order ");
}

function zomatoOrderPlaced() {
  console.log("We have started preaparing your food ");
}

function payment(amount,callback){
    console.log(`${amount} payment has initialized`);
    console.log("Payment is Received");
    callback();
    //GST :government
    //Rider fees
    //company charges

}
payment(450,zomatoOrderPlaced);
payment(194,blikitOrderPlaced);