let name = "Shahid Jamal";
let age = 20;

age = 21;

console.log(name, age);

const RollNo = 56;
console.log(RollNo);
//old tarika
var a = 10;
var a = 20;
console.log(a);
/*if(true){
var a=20;
}*/
/*function train(){
    var c=20;
}

var a=30;
console.log(c);*/

// data types
//Primitive Data type

// number,string,boolean,undefine,Null,BigInt,symbol

//number
let r = 20;
let s = 12.65;
console.log(r, s);
console.log(typeof s);

//string

let m = "Welcome to JavScript World";
let n = "Shahid Jamal";

console.log(m, n);

//boolean

let login = true;
let f = false;
console.log(login, f);

//undefine
let user;
//const p;
console.log(user);

//bigint
let num = 23215942646n;
console.log(num);

//null
let weather = null;
console.log(weather);
console.log(typeof weather);
//let wheatehr = current_weather("Delhi");
//55c
//null
//undefine

//symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);

//Non Primitive data types
//Objects,array,function

//array
let arr = [10, 20, 11, "Aehsan", true];
console.log(arr);
console.log(typeof arr);

//object
let user1 = {
  name: "Shahid",
  account: 75432,
  age: 21,
  category: "gen",
};

//function
/*function add() {
  console.log("Hello");
}

add();*/

/*let a = function add(){
    console.log("Hello");
}*/

//a();

let j=10;
j=30;

let str="Shahid";
//str[0]="Z";
str = "Zahid";
console.log(str);

//Non primitive data types are mutable

let arr1 =[10,20,30,40];
arr1.push(80);
arr1[1]=15;
console.log(arr1);

let obj ={
  name:"jamal",
  age:21
}
obj.name="Shahid";
console.log(obj);
console.log(obj.age);
