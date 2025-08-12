// //for-in

// const value={
//     name:"kavya",
//     age:23,
//     degree:"BE"
// };
// for (let i in value){
//     console.log(i);
//     console.log(value[i]);
//     delete value.age;
//     console.log(value);
// } 

// const parent = {  
//     name:"kavya",
//     age:23,
//     degree:"BE"};
// const child = Object.keys(parent).filter((e)=>{
//     e!=="age";
// });
// const updated=Object.fromEntries(child);
// console.log(updated);
// //for-of
// //arr
// const num=[1,2,3,4,5];

// for (let n of num){
//     console.log(n);
// }
// //string
// const name="kavya";
// for(names of name){
//     console.log(names);
// }
// //map

// const map=new map([["name","kavya"],
//     ["age",23]
// ]);

// for (const m of map){
//     console.log(m);
// }

// //map
// const maps=new Map([["name","kavya"],
//     ["age",23]
//  ]);
//  for(let [key,value]of map){
//     console.log(`${key}:${value}`);
//  }

//  //looping
//  const person={
//     name:"kavya",
//     age:23,
//     degree:"BE"
//  };

//  for (let[key,value] of Object.entries(person)){
//     console.log(`${key.toUpperCase()}:${value}`);
//  }

//spread operator

const arr1=[1,2]
const arr2=[3,4];

const com=[...arr1,...arr2];
console.log(com);

//copy
const ori=[10,20,30];
const copy=[...ori];

copy[0]=99;
console.log(copy);
console.log(ori);

//function
function add(a,b,c){
    return a+b+c;
}
const nums=[1,2,3];
console.log(add(...nums));
//spread objects
 const user={name:"kavya",age:23,city:"Namakkal"};
 const updated={...user,location:"chennai"};

 console.log(updated);

 //merge

 const even=[2,4,6];
 const odd=[1,3,5];

 const merge=[...even,...odd];
 console.log(merge);

//shallow copy

const value=["a","b","c"]
const clone=[...value];
clone[1]="d";
console.log(clone);
console.log(value);
//string nto char

const name="kavya";
const char=[...name];
console.log(char);

//rest operator

function names(main, ...others) {
  console.log("Main:", main);
  console.log("Others:", others.join(", "));
}

names("Kavya", "Arun", "Meena");

//object destructuring
const users = {
  name: "Kavya",
  age: 23,
  city: "Bangalore",
  degree: "BE"
};

const { namese, ...rest } = users;

console.log(namese); 
console.log(rest); 

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10));     

//calculator
function calculate(operator, ...numbers) {
  switch (operator) {
    case "+":
      return numbers.reduce((a, b) => a + b, 0);
    case "*":
      return numbers.reduce((a, b) => a * b, 1);
    default:
      return "Unsupported operator";
  }
}

console.log(calculate("+", 1, 2, 3, 4));
console.log(calculate("*", 2, 3, 4));   
