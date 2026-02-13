//Scope and closure, HOF
//Global -> Accessible to everyone
//Functional -> Accessible only  to that function
//block level Scope -> Accessible only  to that block
//var did not accesible outof to block level scope

let a = 24;
const b = 16;

if (true) {
  console.log(b);
}

function greet() {
  let c = 31;
  console.log(c);
}
greet();

let global = 30;

function greet1() {
  let global = 40;

  function meet() {
    let global = 10;
    console.log(global);
  }

  meet();
}

greet1();

function createCounter() {
  let count = 0;
  function increment() {
    //console.log("I am increament function");
    count++;
    return count;
  }

  return increment;
}

const count = createCounter();
//console.log(count);
//count();
console.log(count());
console.log(count());
console.log(count());
console.log(count());

//Bank senario example for closure

function createBankAccount() {
  let balance = 600;

  return {
    deposit: function (amount) {
      if (typeof amount === "number" && amount > 0) {
        balance += amount;
        return balance;
      }
    },

    withdraw: function (amount) {
      if (typeof amount === "number" && amount > 0 && balance >= amount) {
        balance -= amount;
        return balance;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const customer = createBankAccount();
console.log(customer.deposit(100));
console.log(customer.withdraw(300));

//Higher order function

/*function double(){

    return function execute(){
        console.log("Welcome Back to Function World");
    }

    //return execute;
}

const n=double();
n();
*/

function double(value) {
  return function execute(num) {
    return num*value;
  };

  //return execute;
}

//const n = double(20);
//console.log(n(7));
const n = double(20)(7);
console.log(n);