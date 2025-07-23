const b1 = document.getElementById("b1");
const heading = document.getElementById("heading");
let count=1;
b1.onclick = () => {
b1.textContent = "Try again!";
  heading.textContent={count} ;
  count+=1;
};
let str1="This is the first line of string";
let str2="This is the second line of the string";

console.log(str1+" "+str2)
console.log(str1.length)
console.log(str1[3]);
console.log(str1.charAt(2))
console.log(str1.charCodeAt(3));
console.log(str1.toUpperCase());
console.log(str1.slice(2,-1));
console.log(str1.substring(2,10));
console.log(str1.concat(str2));

let string="java_lama_ujha";
let arr=string.split("_")
console.log(arr[1])
console.log(string.includes ("java"));
console.log(string.replace("java","js"));
console.log(string.replaceAll("java","js"));
console.log(string.trim());

//arrays
let myrr=[];
let numbe=[10,20,30]
let strning=["apple", "banana","mango"]
//1.push
numbe.push(40);
console.log(numbe);

let myarr=[];
let num=[10,20,30,59,39,49,59]
let strin=["apple", "banana","mango"]
//1.push
num.push(40);
console.log(num);
//2.pop
num.pop();
console.log(num)
//3.shift
strin.shift();
console.log(strin)

//unshift
strin.unshift("blue")
console.log(strin)

//splice

num.splice(1,1,45)
console.log(num)
//slice
num.slice(1,5)
console.log(num);

const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}

let myArray=["fruits","flowers","names"]
myArray[0]="Movies";
myArray[1]="theatre";
console.log(myArray);
myArray=myArray.unshift("fruits")
console.log(myArray);
//map
let mapf=[1,2,3,4,5]
let numbers=mapf.map((e)=>
e*4);
console.log(numbers)
 let fahren=[32,68,35]
 let celsius=fahren.map((e)=>
(e-32)*5/9)
 console.log(celsius);
 //filter
let number=[1,2,3,4,5,6,7,8,9,0]
let even=number.filter((e)=>
e%2===0);
console.log(even);

let nums=[{
    name:"john",age:20,gender:"male"
},
{
    name:"jni",age:0,gender:"mdfale"
},
{
    name:"johnffef",age:30,gender:"male"
}]
let emp=nums.filter((e)=> e.gender=="male" && e.age>=25)

console.log(emp)
//reduce

let numb=[1,2,3,4,5];
adding=numb.reduce((quo,add)=> quo+add,0)
console.log(adding);

let max=[1,2,5,7,52,93,98]
answer=max.reduce((quo,ma)=>{
if(ma>quo){
    return ma;
}
else{
    return quo;
}},
max[0]);
console.log(answer);

let min=[2,3,4,5,6,7,8]
value= min.reduce((mi,num)=>
{
    if(num>mi){
        return mi;
    }
    else{
        return num;
    }
},min[0]);
console.log(value);
//array constructors
let fruit=new Array("banana");
console.log(fruit);
//if-else
let cheese = "Cheddar";
if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
//do-while
let i=1;
do{
    let multi=i*5;
    console.log(multi);
    i++;
}
while(i<=10);
//for-of-array
let a=["chrome","edge","IE","FIREFOX"]
for(const e of a)
{
if(e==="edge"){
    console.log("it had an array");
    break;
}
}
//for-in-object
let b = {
    name:"kavya",
    mail:"kavya@a",
    age:26
}
for(const e in b)
{
    console.log(e+":"+b[e]);
}

