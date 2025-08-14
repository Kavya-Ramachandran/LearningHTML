//extract first5 string:
const str="javascript";
console.log(str.slice(0,5))
//string starts wth includes
const sentence="Hello World!";
console.log(sentence.includes("Hello"))
//first letter capital
const input="welcome to javascript";
const overall=input.split(" ") .map((e)=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");
console.log(overall);
//count
const phrase="banana";
let count=0;
for(let i of phrase){
    if(i=="a"){
        count+=1;
    }

}
console.log(count);
//reverse a string

const word="hello";
console.log(word.split('').reverse().join(''));

//length of a string

const len="My name is kavya";
console.log(len.length);

//trim
const remove="  Kavya is my name   ";
console.log(remove.trim());

//if a string contains specific substring:

const sub="kavya Ramachandran";
console.log(sub.substring(0,7));

// how to find first and last occurence index

const words ="Javascript language is a frontend programming";
const occur= "i";

const first=words.indexOf(occur);
const last=words.lastIndexOf(occur);

console.log(`first occuerence ${first} and last occurence ${last}`);

//extract substring using indices 

const indices="My name is kavya";
console.log(indices.substring(0,9));

//replace a string
const replace="My name is kavya";

console.log(replace.replace("My","may"));

//array methods
const sales=[100,200,300];
const total=sales.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(total);

//filter

const products = [
  { name: "Shoes", price: 50 },
  { name: "Shirt", price: 25 },
  { name: "Jacket", price: 100 }
];
const filteredProducts=products.filter((e)=>{
   return  e.price<70
});
console.log(filteredProducts)

//map
const todos = [
  { id: 1, title: "Buy groceries" },
  { id: 2, title: "Clean house" }
];

const todo=todos.map((e)=>{
    return e.title;
})
console.log(todo)

//empty playlist

const playlists = [
  { name: "Pop", songs: [] },
  { name: "Rock", songs: ["Song1", "Song2"] }
];

const playl=playlists.filter((e)=>{
   return  e.songs.length>0;
})
console.log(playl);

// e-commerce

const cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1200 }
];

const totalvalue = cart.reduce((sum, item) => sum + item.price, 0);
const totalWithTax = totalvalue * 1.18;

//Billing – Extract Order Summaries

const orders = [
  { id: 101, items: 3, total: 2500 },
  { id: 102, items: 2, total: 1800 }
];

const summary = orders.map(({ id, total }) => (
    { id, total }
));
console.log(summary);

//User Management – Filter Admins

const users = [
  { name: "Amit", role: "admin" },
  { name: "Neha", role: "user" }
];

const admins = users.filter(user => 
    user.role === "admin");
console.log(admins);

//Check If Any Product Is Out of Stock

const product = [
  { name: "Phone", inStock: true },
  { name: "Charger", inStock: false }
];

const hasOutOfStock = product.some(p =>
     !p.inStock); 
     
console.log(hasOutOfStock);

//validate required fields

const form = {
  name: "John",
  email: "john@example.com",
  password: ""
};

const allFilled = Object.values(form).every(val => val !== "");

console.log(allFilled);

//Find a User by ID

const userss=[
    { id: 1, name: "Ravi" },
  { id: 2, name: "Meera" }];
  const selected=userss.find((u)=>{u.id==2});
  console.log(selected);

//Sort by Latest

const messages = [
  { text: "Hello", time: "2025-08-13T12:00:00" },
  { text: "Hi", time: "2025-08-13T15:00:00" }
];

const mess =messages.sort((a, b) => 
    new Date(b.time) - new Date(a.time));
console.log(mess);

//count logins per user

const logins = ["Amit", "Neha", "Amit", "Ravi", "Neha", "Amit"];

const loginCount = logins.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log(loginCount);

//Add Tags Without Duplicates
let tags = ["javascript", "frontend"];
let newTag = "react";

if (!tags.includes(newTag)) {
  tags.push(newTag);
}

console.log(newTag);

// Convert Array to Object 

const uses = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const userMap = uses.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(userMap);

