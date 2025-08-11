async function userdata(){
   try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/todos/ ${userId}`);
        if(!response.ok){
            throw new Error("error message ");

        }const data=await response.json();
        return data;
     
    }
    catch(error){
        console.log("error",error.message);
        throw error;
    }
}
userdata(1)
.then(data=>{
    console.log("user data:", data);
})
.catch((error)=>{
    console.log(error.message);
});

const libraryData = [
  {
    id: 1,
    name: "Aravind",
    role: "admin",
    borrowedBooks: [
      { title: "JavaScript: The Definitive Guide", category: "Programming", price: 1200, issuedOn: "2025-07-21", returned: false },
      { title: "CSS Mastery", category: "Web Design", price: 800, issuedOn: "2025-06-11", returned: true }
    ],
    ratings: [5, 4, 5, 3],
    membershipYears: 5
  },
  {
    id: 2,
    name: "Kavya",
    role: "member",
    borrowedBooks: [
      { title: "Eloquent JavaScript", category: "Programming", price: 900, issuedOn: "2025-07-25", returned: false },
      { title: "Design Patterns", category: "Software Engineering", price: 1500, issuedOn: "2025-05-20", returned: true },
      { title: "HTML & CSS", category: "Web Design", price: 700, issuedOn: "2025-07-29", returned: false }
    ],
    ratings: [4, 4, 5],
    membershipYears: 2
  },
  {
    id: 3,
    name: "Ravi",
    role: "librarian",
    borrowedBooks: [],
    ratings: [3, 3, 4, 2],
    membershipYears: 10
  },
  {
    id: 4,
    name: "Meera",
    role: "member",
    borrowedBooks: [
      { title: "Clean Code", category: "Software Engineering", price: 1300, issuedOn: "2025-06-15", returned: true }
    ],
    ratings: [5, 5, 4, 5],
    membershipYears: 4
  }
];
const data= libraryData.flatMap((e)=>e.borrowedBooks)//.filter((e)=>{
    //return e.borrowedBooks.price;})
     .reduce((acc,curr)=>{
    return acc+curr.price
},0)
console.log(data);
 
//Destructuring assignment
let a=[1,2,3,4];
let [d,f,,r]=a;
console.log(r);

const librayData = 
  {
    id: 1,
    name: "Aravind",
    role: "admin",
    borrowedBooks: [
      { title: "JavaScript: The Definitive Guide", category: "Programming", price: 1200, issuedOn: "2025-07-21", returned: false },
      { title: "CSS Mastery", category: "Web Design", price: 800, issuedOn: "2025-06-11", returned: true }
    ],
    ratings: [5, 4, 5, 3],
    membershipYears: 5
  }
  const {id,name,role,borrowedBooks:[obj1,obj2]}=librayData;

  console.log(obj1);
 
  let values=["hari","Mayiladudurai","React trainer"];
  let val={
    data:values,
    index:0,
    next(){
        if(this.data.length >this.index){
            return {data:this.data[this.index++],isover:false};
        }
        else{
            return {isover:true}
        }
    }
  }

  console.log(val.next());
  console.log(val.next());
  console.log(val.next());
  console.log(val.next());
  console.log(val.next());
  console.log(val.next());
  console.log(val.next());
  console.log(val.next());

//iterator:

let valued=["Kavya",23,"Namakkal"];
let value={
    data:value,
    index:0,
    next(){
        if(this.data.length>this.index){
            return{value:this.data[this.index++],isover:false}
        }else{
            return{value:" ",isover:true};
        }

    }
}
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());

//generator
function* id() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = id();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

function* simpleGenerator() {
  yield 'Hello';
  yield 'World';
  return 'Done';
}

const generator = simpleGenerator();

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 

function create(array) {
  let index = 0;

  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const it = create(['a', 'b', 'c']);

console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 

//
setTimeout(()=>{
console.log("It is an example where it runs after 2 secs");},2000);

//Check for marks greater than 50 and text greater than 5.
 
const arr = [
  { id: 1, name: "test user1", mark: 20, text: "abc" },
  { id: 2, name: "test user2", mark: 60, text: "abcdef" },
  { id: 3, name: "test user3", mark: 40, text: "ab"  },
]

const tasks=arr.filter((e)=>{
return e.mark>50 && e.text.length>5});

console.log(tasks);

<button id='btn'>click me</button>

const btn=document.getElementById("btn")
btn.addEventListener("event",()=>{
alert("my own event")});


async function getfetch(){
try{
let response= await fetch();
let value= await response.json();
console.log(data);
}
catch(error){
console.log("error:".error)
}
}
getfetch();


let obj={name:"kavya",
age:24,
degree:"BE"
}

const obj3=object.keys(obj).remove(age);

["name","age","degree"]

console.log(obj3);

//promise
console.log("Start");

new Promise((resolve, reject) => {
  console.log("Inside Promise");
  resolve("Resolved!");
})
.then(value => {
  console.log(value);
});

console.log("End");

// Dummy JSON data
const userData = {
  id: 1,
  name: "kavya",
  email: "kavya@example.com"
};

const postsData = [
  { id: 101, title: "post1", content: "This is the first post." },
  { id: 102, title: "post2", content: "This is the second post." }
];

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; 
      if (success) {
        resolve(postsData);
      } else {
        reject("Failed to fetch");
      }
    }, 1500);
  });
}

fetchUser()
  .then(user => {
    console.log("user fetched:", user);
    return fetchPosts();
  })
  .then(posts => {
    console.log(`number of posts fetched: ${posts.length}`);
  })
  .catch(error => {
    console.error("error in chained promises:", error);
  });

Promise.all([fetchUser(), fetchPosts()])
  .then(([user, posts]) => {
    console.log("promise.all results:");
    console.log("user:", user);
    console.log("posts:", posts);
  })
  .catch(error => {
    console.error("error in promise.all:", error);
  });

//promise
const user = Promise.resolve({ id: 1, name: "kavya" });
const posts = Promise.resolve([{ id: 101, title: "post 1" }]);

Promise.all([user, posts])
  .then(([userData, postsData]) => {
    console.log("promise.all result:");
    console.log(userData);
    console.log(postsData);
  })
  .catch(error => console.error(error));

//PROMISE any

  const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success from p2");
const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
  .then(result => {
    console.log("promise.any result:", result);  
  })
  .catch(error => {
    console.error("promise.any error:", error);
  });
//promise race
const fast = new Promise(resolve => setTimeout(() => resolve("fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("slow!"), 500));

Promise.race([fast, slow])
  .then(result => {
    console.log("promise.race result:", result);  
  })
  .catch(error => console.error(error));

