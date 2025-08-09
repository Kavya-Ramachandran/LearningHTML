// const task= new Promise((resolve,reject)=>{
// const heads=true;
// if(heads){
//      resolve("Wins");
// }else{
//      reject("lost");
// }
// })
// task.then((e)=>{
// console.log(e);
// })
// .catch((e)=>{
//     console.log(e);
// })

// const login=new Promise((resolve,reject)=>{
//     const username="admin";
//     const password='1234';
//     if(username==="admin"&& password==="1234"){
//         resolve("Login successful")
//     }else{
//         reject("Invalid Credentials");
//     }
// });
//     login.then((e)=>{
//         console.log(e);
//     }).catch((error)=>{
//         console.log(error.message);
//     })

// const delayed=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("times up")},3000)  
// })
// delayed
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((error)=>{
//     console.log(error.message)
// })
// // using function stetimeout
// function delayedtime(){
//     Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("timesup")},3000)

//         })
//         delayedtime
//         .then((e)=>console.log(e))
//         .catch((e)=>console.log(e))
    
// }

// //Multiple API Simulations with Promise.all()
// const api1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("API 1 done");
//   }, 1000);
// });

// const api2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("API 2 done");
//   }, 2000);
// });

// const api3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("API 3 done");
//   }, 3000);
// });

// function apisimulation(){
//     return Promise.any([api1,api2,api3])
// }
//     apisimulation()
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error.message)

//     })

// (()=>console.log(5+6))();

// const array=[[1,2,],[3,4],[5]];

// const arr=array.flat();
// console.log(arr);
// //methods
// const arrs=[1,2,3,4,5]
// const max=arrs.reduce((acc,curr)=>
//  curr>acc?curr:acc);
// console.log(max);

// const arrays=[1,[2,3],[4,5,[6,7,[8]]]]
// const flat=arrays.reduce((acc,curr)=>{
//   return acc.concat(curr);
// },[]);
// console.log(flat);

//  const flatten=arrays.flat(Infinity);
//  console.log(flatten)

// arr=[1,34,56,23,78,34]
//  const filtered= a.filter((e)=>{
//    return e>10;
   
//  });
//  console.log(filtered);

//  const map=a.map((e)=>{
//    return e*e;
//  });
//  console.log(map);
//  a=["hello" ,"kavya"]
//  function join(a){
//  return a.join(" ")
//  }

//  const res=join(a)
//  console.log(res)

//  const pop=arr.pop();
//  console.log(arr);

//  const index=arr.indexOf(34);
//  console.log(index);

// function reducefun(arr){
//   return arr.reduce((acc,curr)=>{
//     acc[curr]=(acc[curr]||0)+1;
//     return acc;
//   },{})

// }
// console.log(reducefun(arr));

// const arrau=[{
//   name:"kavya",
//   age:23
// }]
// const array=arrau.map((e)=>{
//   return e.name;
// })
// console.log(array)

// const ar=['a','g','r','c','h'];

// const arrays=ar.sort()
// console.log(arrays)

// even=[2,4,5,7];

// const evennumber=even.some((e)=>{
//   return e%2==0
// })
// console.log(evennumber)

// const people = [
//   {
//     name: "Alice Johnson",
//     gender: "female",
//     age: 24,
//     degree: "B.Tech",
//     salary: 55000,
//     schoolPercentage: { "10th": 88.5, "12th": 91.2 }
//   },
//   {
//     name: "Raj Verma",
//     gender: "male",
//     age: 27,
//     degree: "MCA",
//     salary: 65000,
//     schoolPercentage: { "10th": 76.3, "12th": 82.0 }
//   },
//   {
//     name: "Priya Sharma",
//     gender: "female",
//     age: 23,
//     degree: "B.Sc",
//     salary: 47000,
//     schoolPercentage: { "10th": 85.0, "12th": 89.3 }
//   },
//   {
//     name: "Amit Kumar",
//     gender: "male",
//     age: 29,
//     degree: "MBA",
//     salary: 72000,
//     schoolPercentage: { "10th": 78.0, "12th": 80.5 }
//   },
//   {
//     name: "Sneha Patel",
//     gender: "female",
//     age: 25,
//     degree: "B.Com",
//     salary: 50000,
//     schoolPercentage: { "10th": 90.0, "12th": 92.4 }
//   },
//   {
//     name: "Karan Mehta",
//     gender: "male",
//     age: 26,
//     degree: "B.Tech",
//     salary: 60000,
//     schoolPercentage: { "10th": 82.1, "12th": 84.7 }
//   },
//   {
//     name: "Meena Das",
//     gender: "female",
//     age: 22,
//     degree: "BA",
//     salary: 42000,
//     schoolPercentage: { "10th": 79.5, "12th": 81.2 }
//   },
//   {
//     name: "Rohit Singh",
//     gender: "male",
//     age: 28,
//     degree: "M.Tech",
//     salary: 75000,
//     schoolPercentage: { "10th": 86.0, "12th": 88.0 }
//   },
//   {
//     name: "Neha Reddy",
//     gender: "female",
//     age: 24,
//     degree: "BBA",
//     salary: 48000,
//     schoolPercentage: { "10th": 84.3, "12th": 87.6 }
//   },
//   {
//     name: "Vikram Joshi",
//     gender: "male",
//     age: 30,
//     degree: "PhD",
//     salary: 90000,
//     schoolPercentage: { "10th": 89.9, "12th": 93.1 }
//   }
// ];

// const find= people.filter((e)=>e.age>24 && e.schoolPercentage["12th"]>85)
// console.log(find);

//  const average= people.filter((e)=>{
//      return e.schoolPercentage["10th"]>=85 && e.age<25;
//  }).reduce((acc,curr)=>{
//      return acc=curr.salary+acc/acc;
//  },1);
//  console.log(average);
// let count = 0;

// const filter = people.filter((curr)=> curr.gender == "female" &&
//     curr.schoolPercentage["10th"] >= 85 &&
//     curr.age < 25)
// const average = filter.reduce((acc,curr)=>acc+curr.salary,0)
// console.log(average/filter.length);

// const average1 = people.reduce(
//   (acc, curr) => {
//     if (curr.gender === "female" && curr.schoolPercentage["10th"] >= 85 && curr.age < 25) {
//       acc.sum += curr.salary;
//       acc.count++;
//     }
//     return acc;
//   },
//   { sum: 0, count: 0 }
// );

// const result = average1.count > 0 ? average1.sum / average1.count : 0;
// console.log(result);
// //ternary operator
// let age = 20;
// let message = age >= 18 ? "votee" : "cannot vote";

// console.log(message); 

// let num = 7;
// let results= num % 2 === 0 ? "even" : "odd";
// console.log(results); 

// let score = 85;
// let grade = score >= 90 ? "A" :score >= 80 ? "B" : score >= 70 ? "C" : "Fail";
// console.log(grade);

// let value=-3;
// let number=value>0? "Positive" :value<0?"negative":"zero";
// console.log(number);

const user = {
  name: "Kavya",
  age: 20,
  isMember: true
};

const val=user.age>=18 && user.isMember ==true ? "welcome,member kavya": user.age>=18 && isMember==false ?"welcom, guest kavvya, please be a member soon":
"sorry kavya.you mut be atlest";