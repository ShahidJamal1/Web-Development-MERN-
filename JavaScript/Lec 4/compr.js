//comparison operator
let x=20;
let y=20;

//console.log(x>y);
//console.log(x>=y);
//console.log(x<y);
//console.log(x<=y);
//console.log(x==y);//number and string compare (string convert number)
console.log(x === y);//type check(dono same type ke hone chahiye===,uske baad wo comparison karta h)
let z = "130";
let w=Number(z);

console.log(w);

//let a="142";
let a = "142abc";//NaN is not a number (it is number)
let b=Number(a);

console.log(b);
//console.log( typeof b);

//Number -> String
let r = 10;
let s = String(r);

console.log(typeof s);
//console.log(s);

//Boolean ->Number
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));//not -> 0
console.log(Number(undefined));//undefined->NaN

//console.log(typeof String(undefined));

//Boolean me convert karna
//console.log(Boolean(-10));
console.log(Boolean(0));
console.log(Boolean("Hello World"));

//null is loosely equal to undefined  only
console.log(null==undefined);
console.log(null === 0);
console.log(null == "");
console.log(null == false);
console.log(null == true);

//>,<,>=,<=,(null--> number, undefined -->NaN)
console.log(null>=0);
console.log(null <= 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= undefined);
console.log(undefined >= 0);

console.log("Shahid">"Jamal");//ASCI Value ke base pr compare karta h
console.log(110<true);

//ek koi bhi type hai usko agar mujhr compare karna hai dusre kisi type se
//to dono number me convert honge 
console.log(null >= "");

console.log(NaN == NaN);//not equal h