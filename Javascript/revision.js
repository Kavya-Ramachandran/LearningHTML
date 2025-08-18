let formatName=" jOHN ";
let formatname=" ";
let formatted=formatName.trim();

let format=formatted.toLowerCase();
console.log(format);
if(formatname==(" ")){
    console.log("Invalid input");
}else{
    console.log("Valid input")
}

function formatNames(name){
    const trim=name.trim();
    if(trim==""){
        return "Invalid input";
    }else{
    return trim[0].toUpperCase()+ trim.slice(1).toLowerCase();
    }
}
console.log(formatNames("jOHN"));
console.log(formatNames(""));
console.log(formatNames("   "));


class person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    display(){
        console.log(`hello ${this.name} age is ${this.age}`)
    }
}
const person1=new person("prabha",27);
person1.display();


class car{
    constructor(name, brand,year){
        this.name=name;
        this.brand=brand;
        this.year=year;
    }

    getcar(){
        return(`${this.name} ${this.brand} ${this.year}`)
    }
}

class details extends car{
    constructor(name,brand,year,battery){
        super(name,brand,year);
        this.battery=battery;

    }

    getdetails(){
        return (`${this.battery}`)
    }
}

const car1=new details("tesla","model1",2024,23);
console.log(car1.getdetails());
console.log(car1.getcar());


const value=new Object();
value.name="kavya";
value.age=23;
console.log(value);

//promises

async function getdata(id) {
    try{
        const reponse=await fetch();
        if(Response.ok){
            const jsondata=await response.JSON();
            return jsondata;
        }return Promise.reject(new Error(response.statustext))

    }
    catch(error){
        return (error(error.message));
    }
    
}
Promise.all([getdata(1),getdata(2)])
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
}) 

async function val(id){
    try{
        const response=await fetch();
        if(response.ok){
            const jsondta=await response.json();
            return jsondta;
        }return Promise.reject(new Error(response.statusText));

    }catch(error){
        return (error.message)
    }
}
Promise.all([val(1),val(2)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

const add=(a,b)=>a+b;

console.log(add(1,2));

const num=[1,2,3];

num.forEach(nu=>{
    console.log(nu*2);
})

const numbers=[1,2,3];
const values=numbers.map((nu)=>{
    return nu*2;
})
console.log(values);

const a=2;
console.log(a++);
//console.log(a);


console.log(a--);
//console.log(a);

console.log(++a);
//console.log(a);

console.log(--a);
//console.log(a);

let capital="kavya";
let capitaing= capital.charAt(0).toUpperCase()+capital.slice(1).toLowerCase();
console.log(capitaing);

const user = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  contact: {
    email: "alice@example.com",
    phone: "123-456-7890"
  }
};

// const {
//     name,
//     address:{city,zip},
//     contact:{email}
// }=user;
const{address,conatct}=user;
// console.log(name);
console.log(address.city);

const number=[1,2,2,3,4,2,4,1,5,6];
const uniquenum=[...new Set(number)]
console.log(uniquenum);

function geolocator(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,error);
    }

}
function success(position){
    const latitude=position.coords.latitude();
    const longitude=position.coords.longitude();
    console.log(`latitutde:${latitude}, longitutde:${longitutde}`);
}
function error(position){
    switch (error.code){
        case error.PERMISSION_DENIED:
        console.log("user is restricted with permission denied");
        break;

        case error.POSITION_UNAVAILABLE:
            console.log("It has an error like position unavailable");
            break;
        
        case error.TIMEOUT:
                console.log("timeout");
                break;

        default:
            console.log("it has some more error")
            break;
        
    }
    
}


const web=new WebSocket();
document.getElementById("sendbtn").addEventListener('click',()=>{
web.send(document.getElementById("send data").value)

})

web.addEventListener(('open'),(e)=>{
    console.log("added");

})
web.addEventListener('message',(e)=>{
    console.log("message",e.value)
})

const worker=new WebWorker();
const calculation=document.getElementById('button1');

calculation.addEventListener('click',(e)=>{
    worker.postMessage("sum")
})
worker.onmessage=function(message){
    aleert(`${message.data}`)
}

self.onmessage=function(message){
    if(message.data=="sum"){
        let sum=0;
        for(i=0;i<1000;i++){
            sum+=i;
        }
    }
    self.postMessage(sum)
}

const worker=new WebWorker();
const calculate=document.getElementById("button1");

worker.addEventListener('click',()=>{
    worker.postmessage("sum")
})
worker.onmessage=function(message){
    alert(`${"sum"}`)

}


const valus=["kavya","sundhar","welcome"]
function gettingvalue(){
    for(const names of valus)
    yield names
}

const yielding=gettingvalue()
console.log((yielding().next()));

let value=[1,2,3,4]
let iterator={
    data:value,
    index:0,
next(){
if(this.data>this.index){
    return this.data[this.index++]
}
else{
    return "false";
}
}

}
console.log(iterator.next());

