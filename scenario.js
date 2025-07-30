const items = [{ record: "test1", active: true },
{ record: "test2", active: true },
{ record: "test3", active: false }];
const list = document.getElementById("active-list")

const active = items.filter(item => item.active);

active.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item.record;
    list.append(li);
});
// number 1 to 50 that should 
let a=50;
for(i=1;i<=a;i++){
    if(i%2==0 && i%5==0){
        console.log(`${i} %2 & %5` );
    }
    else if(i%2==0){
        console.log(`${i} %2`);
    }
    else if(i%5==0){
        console.log(`${i} %5`);
    }
    else{
        continue;
    }
}

let arr=[1,2,3,4,5,6,7,8,9,10];
 let numbers=arr.map((e)=>
    e*2
);
console.log(numbers);
//event capturing event bubbling
const parent=document.getElementById('parent');
const child=document.getElementById('child');


parent.addEventListener("click",()=>{
    console.log("parent is being clicked");
});

parent.addEventListener("click",()=>{
    console.log("parent is being clicked(capturing)");
},true);
parent.addEventListener("click",()=>{
    console.log("child is being clicked");
},);
//higher function with argument
function greet(name) {
  return `Hello, ${name}!`;
}

function sayHello(fn, name) {
  console.log(fn(name));
}

sayHello(greet, 'Alice')

//higher function with return a function

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyBy3 = multiplier(3);

console.log(multiplyBy3(5)); 
//some and find

const lst=[
  { name: "Tom", active: false },
  { name: "Jerry", active: true }

]
console.log(lst.some(user=>user.active))
console.log(lst.find(user=>user.active))
//array methods
// Initial product inventory
let inventory = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999, stock: 50 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 699, stock: 100 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150, stock: 30 },
  { id: 4, name: 'Coffee Maker', category: 'Appliances', price: 85, stock: 20 },
  { id: 5, name: 'Blender', category: 'Appliances', price: 120, stock: 15 },
  { id: 6, name: 'Monitor', category: 'Electronics', price: 300, stock: 60 }
];

// every
let allInStock = inventory.every(product => product.stock > 0);
console.log('All products in stock:', allInStock); // true

// some
let hasSmartphone = inventory.some(product => product.name === 'Smartphone');
console.log('Smartphone available:', hasSmartphone); // true

// find index
let indexOfBlender = inventory.findIndex(product => product.name === 'Blender');
console.log('Index of Blender:', indexOfBlender); // 4

// find
let laptop = inventory.find(product => product.id === 1);
console.log('Laptop details:', laptop);

// filter 
let electronics = inventory.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);

// map to uppercase
let productNames = inventory.map(product => product.name.toUpperCase());
console.log('Product names:', productNames);

// reduce
let totalStock = inventory.reduce((total, product) => total + product.stock, 0);
console.log('Total stock:', totalStock); 

// sort
let sortedByPrice = [...inventory].sort((a, b) => a.price - b.price);
console.log('Sorted by price:', sortedByPrice);

// reverse 
let reversedInventory = [...inventory].reverse();
console.log('Reversed inventory:', reversedInventory);

// concatenate 
let newInventory = [
  { id: 7, name: 'Air Purifier', category: 'Appliances', price: 200, stock: 40 }
];
let updatedInventory = inventory.concat(newInventory);
console.log('Updated inventory:', updatedInventory);

// slice 
let firstTwoProducts = inventory.slice(0, 2);
console.log('First two products:', firstTwoProducts);

// splice 
let removedProduct = inventory.splice(3, 1);
console.log('Removed product:', removedProduct);

// .some
let includesLaptop = inventory.some(product => product.name.includes('Laptop'));
console.log('Includes "Laptop":', includesLaptop);

let nestedInventory = [
  [{ id: 1, name: 'Laptop' }],
  [{ id: 2, name: 'Smartphone' }]
];
let flatInventory = nestedInventory.flat();
console.log('Flattened inventory:', flatInventory);


let anyOutOfStock = inventory.some(product => product.stock === 0);
console.log('Any product out of stock:', anyOutOfStock); // false

// find the first product 
let lowStockProduct = inventory.find(product => product.stock < 20);
console.log('Low stock product:', lowStockProduct);

//  find the index 
let lowStockIndex = inventory.findIndex(product => product.stock < 20);
console.log('Low stock product index:', lowStockIndex);
