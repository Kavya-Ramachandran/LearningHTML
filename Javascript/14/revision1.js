function* myGen() {
  yield 10;
  yield 20;
  yield 30;
}
const g = myGen();
console.log(g.next().value); 
console.log(g.next().value); 

function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    const reset = yield a;
    [a, b] = reset ? [0, 1] : [b, a + b];
  }
}
const seq = fibonacci();
console.log(seq.next().value);
console.log(seq.next().value);      
console.log(seq.next().value);      
console.log(seq.next(true).value);  

const array = ['a', 'b', 'c'];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 

const arry = ['a', 'b', 'c'];
for (const item of arry) {
  console.log(item);
}

function createRangeIterator(start = 0, end = Infinity, step = 1) {
  let current = start;
  return {
    next() {
      if (current < end) {
        const result = { value: current, done: false };
        current += step;
        return result;
      }
      return { value: undefined, done: true };
    }
  };
}

const range = createRangeIterator(0, 5, 1);
console.log(range.next()); 
console.log(range.next()); 
console.log(range.next()); 
console.log(range.next()); 
console.log(range.next()); 
console.log(range.next()); 

const myIterable = {
  *[Symbol.iterator]() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
};

for (const value of myIterable) {
  console.log(value); 
}

const myIterabe = {
  items: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const item of myIterabe) {
  console.log(item); 
}

let options = {
  male: 'John',
  female: 'Gina',
  rel: 'Love',
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield [key, this[key]];
    }
  }
};

for (let [key, value] of options) {
  console.log(key, value);
}

class Polyline {
  #start;
  #checkpoints = [];

  constructor(start = { x: 0, y: 0 }) {
    this.#start = start;
  }

  to(checkpoint) {
    this.#checkpoints.push(checkpoint);
    return this;
  }

  *[Symbol.iterator]() {
    for (const checkpoint of this.#checkpoints) {
      yield* line({ start: this.#start, end: checkpoint });
      this.#start = checkpoint;
    }
  }
}

// object looping
const persons={
    name:"kavya",
    age:25,
    city:"Namakkal"
}
let text="";
for(x in persons)
{
    text+=persons[x]+ " ";

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