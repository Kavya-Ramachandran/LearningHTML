//call()vs method incvocation

const person={
    name:"kavya",

 value(lang){
    console.log(`Hello ${this.name} learning ${lang}`)
}};
person.value("javascript")

const persons={
    name:"kavya",
};
function values(lang){
    console.log(`Hello ${this.name} learning ${lang}`);
};
values.call(person,"javascript");

//invoking a constructor inside another

function Product(name, price){
    this.name=name;
    this.price=price;
};
function food(name,price){
    Product.call(this,name,price);
    this.category="food";
}
const cheese=new food("cheese",45);
const waffles=new food("wafles",100);
console.log(waffles.name);
console.log(waffles.price);
console.log(waffles.category);
console.log((cheese.name));
console.log((cheese.price));
console.log((cheese.category));

function people(name,age){
    this.name=name;
    this.age=age;
}
function degree(name,age){
    people.call(this,name,age);
    this.degree="BE";
}
const person1=new degree("Sundar",45);
console.log(person1.name);
console.log(person1.age);
console.log(person1.degree);

//bind
//const name=func.bind(thisarg,arg1,arg2...);

function binding(greeting,punctuation,){
    console.log(`${greeting} I am ${this.name} ${punctuation}`);
}

const person3={name:"kavya"};
const greet=binding.bind(person3,'Hi');
greet('!');

//
function local(greet,punct){
    console.log(`${greet} kavya. Your age is ${this.age} ${punct}`)
}

const localvalue={age:23};
const greeting=local.bind(localvalue,"Hello");
greeting("!");

async function userdata(id) {
    try{
        const response= await fetch(`https://dummyjson.com/users/${id}`);
        if(response.ok){
            const jsondata= await response.json();
            return jsondata;
        }return Promise.reject(new Error(response.statustext))
    }
    catch(error){
        console.log(error.message);
    }
    
}
Promise.all([userdata(1)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

Promise.allSettled([userdata(1),userdata(2)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
Promise.any([userdata(1),userdata(2)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

Promise.race([userdata(1),userdata(2)])

.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})