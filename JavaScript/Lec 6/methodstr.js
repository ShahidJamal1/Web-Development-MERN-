str=`Welcome to Development World`;

console.log(str.length);
console.log(str[2]);

str[3]="g";
console.log(str);//not changes because sting is immutable

//Upper Case
console.log(str.toUpperCase());

//Lower case
console.log(str.toLowerCase());

//find sun-string.
console.log(str.indexOf('Dev'));

//TO Check word is present or not
console.log(str.includes('to'));

//slice
console.log(str.slice(3,12));
console.log(str.slice(-3));//this gives from last element
//adding string
const a="Shahid";
const b="Jamal";
/*const c=a+" "+b;
console.log(c);*/
const c =a.concat(b);
console.log(c);

//replace string
console.log(a.replace("Sh","Z"));

//trim() is used for removing white spaces
const user="  Shahid Jamal  ";
console.log(user.trim());

//split the string
const names="Shahid,Jamal,Jameel,Sahil";
console.log(names.split(","));