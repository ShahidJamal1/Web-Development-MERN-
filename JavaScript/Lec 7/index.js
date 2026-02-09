//Array

let marks = [74,51,100,90,40,84];
console.log(marks);
console.log(marks.length);

let arr = [85,20,"Shahid",true];
console.log(arr);
console.log(arr[2]);

arr[1] = 25;
console.log(arr);

//push:insert at element at end

arr.push(75);
arr.push("Jamal");
console.log(arr);

//pop operaton: Delete element from end
arr.pop();
console.log(arr);

//Add element in starting/first place
arr.unshift(50);
console.log(arr);

//delete first element
arr.shift();
console.log(arr);

//
let arr1 = [10,40,60,80,90,9];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

for(let num of arr1){
    console.log(num);
}

let arr2 = arr1;
arr2.push(30);
console.log(arr1);

//Object (non primitive):copy by reference hota h
//Primitive :Copy by value

const arr3 = [20,30,50,85,90,110];
arr3[3]= 80;
console.log(arr3);

console.log(arr3.slice(2,5));
arr3.splice(2,6);//ye element ko trim/remove kar deta h
console.log(arr3);
console.log(arr);

const arr4 = [10,20,50,60,70];
const arr5 = ["Shahid",56,true];
//arr.push(arr5) ;
//const arr6 = arr4.concat(arr5);
//console.log(arr6);
const arr6 = [30,"Jamal"];
//const arr7 = arr4.concat(arr5,arr6);
//const arr7 = [arr4,arr5,arr6];

//spread operator
const arr7 = [...arr4, ...arr5, ...arr6];
console.log(arr7);

const names = ["Alice","Jam","BOB","Charlie","Sam"];
console.log(names.toString());
console.log(names.indexOf("BOB"));
console.log(names.includes("Jam"));

names.sort();
names.reverse();
console.log(names);

//const a= [101,90,70,35,84];
const a =[10,"Shahid","Arman",true];
a.sort();//ye  diye gye element ko as a string or character treat karta h
console.log(a);

//sorting like dsa 
const s=[10,40,5,24,60,11,49];
//s.sort((x,y)=>x-y);//for ascending order
//-ve: me pahle x aaega fir y aaega
//+ve: me y aaega fr x aaega
s.sort((x, y) => y - x);//for descending order
console.log(s);

//2d array element access

//const ar=[10,30,20,[32,90,71],89];
const ar = [10, 30, 20, [32, 90,[41,25,99] ,71], 89];
console.log(ar[3]);
//console.log(ar[3][2]);
console.log(ar[3][2][1]);

const a1=ar.flat(Infinity);
console.log(a1);