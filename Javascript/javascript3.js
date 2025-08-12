// object looping
const person={
    name:"kavya",
    age:25,
    city:"Namakkal"
}
let text="";
for(x in person)
{
    text+=person[x]+ " ";

};
console.log(text);
//object.entries
const fruit={
    banana:299,apple:39,jack:300
}

let text1="";
for(let [fruits,values] of Object.entries(fruit)){
    text1+= fruits+":"+values+"\n";
}
console.log(text1);
//asynchronous set timeout:
console.log("before waiting for the js to print");
setTimeout(()=>{
console.log("wait for 6 sec");},6000);
console.log("after waiting");
//set interval
setInterval(()=>{
    console.log("it should run every 1 second");
},1000);

//clear timeout
 let time= setTimeout(()=>{
    console.log("runs after 1 sec");
 },1000);
 clearTimeout(time);
 //clear interval
 let timer=setInterval(()=>{
    console.log("runsff every 1 sec");
 },1000);

 setTimeout(()=>{
     clearInterval(timer);
    console.log("stopped the reppitation");
 },5000);
 // synchronous callback
 function call(name,callback){
    console.log(`example for synchronous callback ${name}`);
    callback();
 }
 function good(){
    console.log("example for sync");
 }
 call("kavya",good);
 //asynchronous call back

 function fetchData(callback) {
  setTimeout(() => {
    console.log("data fetched");
    callback();
  }, 2000);
}
function fun2() {
  console.log("process");
}
fetchData(fun2);

function add(a,b,call){
    const result=a+b;
    call(result);
}
add(2,3,function(result){
    console.log(result);});

    