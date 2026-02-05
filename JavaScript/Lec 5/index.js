//Number
let a=10;
let b=345.6874
let c = b.toFixed(1);//this return string
console.log(c);
console.log(typeof c);

console.log(b.toPrecision(6));

console.log(b.toString());

//
let n = new Number(20);//new keyword treated as object
let m = new Number(20);
//console.log(typeof n);
console.log(n==m);//getting false because both are treated as object and object is pointing differ

console.log(Boolean ([]));//this gives true because this is treated as object and object is refrencing only not check this is empty or not
console.log(Boolean(null));//this gives false because null means  nothing pointing any address 
// non primitive data :reference bases pe compare hote h
//primitive : copy by value hota h


//Math library
console.log(Math.abs(-5));
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.SQRT2);
console.log(Math.ceil(6.3));//upper value me lega
console.log(Math.floor(6.3));//lower value me lega
console.log(Math.log10(20));
console.log(Math.max(21,11,84,45));

console.log(Math.random());//this generate random value b/w [0,1], where 0 is included but 1 is not included

//Random Number Generator Game

//console.log(Math.floor(Math.random()*10));//0-9
console.log(Math.floor(Math.random() * 10)+1);//1-10

console.log(Math.floor(Math.random() * 6)+1);//1-6
//Math.floor(Math.random()*totalNumberOfOutcome) + kitna shift karana h;
//Math.floor(Math.random()*(max-min+1))+min
//15-25
console.log(Math.floor(Math.random() * 11) + 15);
//Math.floor(Math.random()*(max-min+1))+min
//47-65
console.log(Math.floor(Math.random()*19)+47);

//OTP Generate : 4 digit :1000-9999
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);