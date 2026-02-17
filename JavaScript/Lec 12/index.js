//forEach,Filter,reducer,map,set
const arr = [10,20,30,44,87,99];
let sum = 0;

arr.forEach((number)=>{
    sum+=number;
})

console.log(sum);

//filter
const arr1 = [10, 20, 30, 44, 87, 99];
//const newArr = arr.filter((number)=> number>25);

//console.log(newArr);

//another or simple way

//Array.prototype.filtering = function(compare){
arr1.filtering = function(compare){

    const ans = [];
    for(let num of this){
        if (compare(num)) {
            ans.push(num);
            
        }
    }

    return ans;
}

const newArr = arr1.filtering((num)=>num>25);
console.log(newArr);

//Map

const arr2 = [11,35,51,75,98];

const newArr1 = arr2.map((num)=> num*3);
console.log(newArr1);

//real world example
const products = [
  // Electronics
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    price: 200,
    inStock: true,
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    inStock: false,
  },
  {
    id: 4,
    name: "Monitor",
    category: "Electronics",
    price: 300,
    inStock: true,
  },
  {
    id: 5,
    name: "Keyboard",
    category: "Electronics",
    price: 75,
    inStock: true,
  },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  {
    id: 7,
    name: "A Brief History of Time",
    category: "Books",
    price: 30,
    inStock: true,
  },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  {
    id: 9,
    name: "Coffee Maker",
    category: "Appliances",
    price: 150,
    inStock: false,
  },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  {
    id: 12,
    name: "Microwave Oven",
    category: "Appliances",
    price: 220,
    inStock: true,
  },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  {
    id: 16,
    name: "Desk Lamp",
    category: "Home Goods",
    price: 35,
    inStock: true,
  },
  {
    id: 17,
    name: "Scented Candle",
    category: "Home Goods",
    price: 15,
    inStock: true,
  },
  {
    id: 18,
    name: "Picture Frame",
    category: "Home Goods",
    price: 22,
    inStock: false,
  },

  // Groceries
  {
    id: 19,
    name: "Organic Apples",
    category: "Groceries",
    price: 5,
    inStock: true,
  },
  {
    id: 20,
    name: "Artisan Bread",
    category: "Groceries",
    price: 8,
    inStock: true,
  },
];
const newProduct = products
  .filter((product) => product.price > 50).sort((a, b) => b.price - a.price).map((product) => ({ name: product.name, price: product.price }));
console.log(newProduct);

//const ans1 = products.map((product)=>({name:product.name, price:product.price}))
//console.log(ans1); 

//reduce 
// accumulator = sum =0,
//accumulator = 1200
const totalPrice = products.reduce((accumulator,currenValue)=>{
  if(currenValue.inStock)
  return accumulator+currenValue.price;
  else 
    return accumulator

},0);

console.log(totalPrice);

//Data Structure: Set
const arr3 = [10,20,10,30,40,2,10,20,50,];
console.log(arr3);

const s1 = new Set(arr3);
s1.add(25);
//s1.delete(10);
console.log(s1);
console.log(s1.has(45));
console.log(s1.size);
//s1.clear();

const email = ["ro@gm","ra@gm","sa@gm","ma@gm","ro@gm"];
//const uniquqEmail = [...new Set(email)];
//console.log(uniquqEmail);
const s2= new Set(email);

for(let num of s2){
  console.log(num);
}

//map;
const m1 = new Map([
  ["Rohit",40],
  [2,"Rohit"],
  [true, 11],
  [[10,30,11],"Mohit"]
]);

m1.set({name:"Manish",age:20}, false);
m1.get({ name: "Manish", age: 20 }, false);
console.log(m1);
//console.log(m1.size);

for(let [keys,value] of m1){
  console.log(keys,value);
}