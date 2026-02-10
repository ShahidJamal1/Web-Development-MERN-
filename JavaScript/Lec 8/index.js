//Object
//key value
const user = {
  name: "Shahid",
  age: 20,
  emailId: "shahid@gmail.com",
  balance: 5000,
};

//console.log(user);
//console.log(user.balance);
//CRUD operation:Create Read Update Delete

user.adhaar = 455962624595;
user.age = 21; //update
console.log(user);

delete user.emailId; //delete
console.log(user);

const user1 = {
  name: "Shahid",
  age: 20,
  emailId: "shahid@gmail.com",
  balance: 5000,
}
//these are important
//console.log(Object.keys(user1));
//console.log(Object.values(user1));
//console.log(Object.entries(user1));

//for(let keys in user1){
//  console.log(keys, user1[keys]);
//}//user.keys user["name"]  user["age"]

//const name=user1.name;
//const age=user1.age;

const { name, age, balance } = user1; //object ko destructure karna

const arr = [10, 20, 50, 47, 22];
const [first, second] = arr;
console.log(first, second);
console.log(name, age, balance);
//for of loop array per lagta h
//for(let keys of Object.keys(user)){
/*const temnparr = Object.keys(user);
console.log(temnparr);
for(let keys of temnparr){
    console.log(keys);
}*/

/*for (let values of Object.values(user1)) {
  console.log(values);
}*/

/*for (let values of Object.entries(user1)) {
  console.log(values);
}*/

for (let [keys,values] of Object.entries(user1)) {
  console.log(keys, values);
}

const user2 = {
  name: "Shahid",
  age: 20,
  emailId: "shahid@gmail.com",
  balance: 5000,
  greeting:function(){
    //console.log("Welcome to Development World");
    //console.log(`Welcome to Development World ${user.name}`);not preferred this way
    console.log(`Welcome to Development World ${this.name}`);//this keyword store the reference of user here
    return 786;
  }
}

const user3 = {
  name: "Jamal",
  account:155,
  greeting:function(){
    console.log(`You are on Right Path ${this.name}`);
    return 123;

  }
}
user3.greeting =user2.greeting;
user3.greeting();
const re = user3.greeting();
console.log(re);

//Nested object
const obj = {
  name:"Arman",
  age:21,
  balance:10000,
  address:{
    city: "Hyderabad",
    state:"Telngana"

  }
}

console.log(obj);
console.log(obj.address);
console.log(obj.address.state);

//shallow copy
/*const obj2={...obj};
obj2.name="Moon";
obj2.address.state ="Andhra";
console.log(obj2);
console.log(obj.address.state);
*/
//deep copy
const obj2 = structuredClone(obj);
console.log(obj2);
obj2.address.state = "Andhra";
console.log(obj);

//key : String || Symbol ke form me store hota h

const sym=("id");

const sde = {
  name:"Jamal",
  age:20,
  0:100,
  2:"Developer",
  [sym]:"Welcomes you"
}
console.log(sde);
console.log(sde[sym]);
