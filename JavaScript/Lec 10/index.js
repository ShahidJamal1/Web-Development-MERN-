//Execution context created
//Memory allocation
//a=undefine then 10
//b=undefine then 20
//addNumber=fncode
//sumResult1=undefine
//sumResult2=undefine

//execution phase

//console.log(a);
var a=10;
var b=20;
//console.log(a);

var sumResult1=addNumber(a,b);
console.log(sumResult1)

function addNumber(num1,num2){
    var sum = num1 + num2;
    return sum;
}

//var sumResult1= addNumber(a,b);
var sumResult2= addNumber(5,9);
//console.log(sumResult1,sumResult2);

//let & const
//memory allocation
//a=<uninitialized> (Temporal dead Zone) when execute then value will be store in this like 10
//b=<uninitialized> (Temporal dead Zone) then 20
//addition = <uninitialized> (Temporal dead Zone) EXECUTION phase coming then fncode coming
//result =<uninitialized> (Temporal dead Zone)
//Execution phase

let x = 10;
const y = 20;

const addition = function(n1,n2){
    const add = n1+n2;
    return add;
}
const result = addition(x,y);

console.log(result);