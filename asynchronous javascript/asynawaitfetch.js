// async await
let npromise = new Promise((resolve, reject)=>{
    let data=false;
    if(data){
        resolve("data recieved")
    }else{
        reject("data got some error")
    }
})
//newpromise.then(message=>console.log(message))
async function execute(){
try{

let message= await newpromise
console.log(message);
}
catch(error){
    console.log(error)
}
finally{
    console.log("end")
}
}
execute();

console.log("last message")

//throw

let newpromise = new Promise((resolve, reject)=>{
    let data=false;
    if(data){
        resolve("data recieved")
    }
    else{
        //reject("data got some error")
        throw new Error("search the correct data")
        //in this error is an abject. we can tell as object, constructor or method anything
    }
})
//newpromise.then(message=>console.log(message))
async function execute(){
try{

let message= await newpromise
console.log(message);
}
catch(error){
   // console.log(error)
   console.log(error.message)
}
finally{
    console.log("end")
}
}
execute();

console.log("last message")

//fetch
fetch("https://fakestoreapi.com/users")
.then((response)=>{
return (response.json());
})
.then((promise)=>{
    console.log(promise)
})
.catch ((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("end")
})
    
   //fetch 
   // using respone while the api link is not in the correct format it will throw an error object.
fetch("https://fakestoreapi.com/users/sd")
    .then((response) => {
        if(!response.ok){
            throw new Error("data not found")
        }else{
        return (response.json());
        }
        //console.log(response.ok)
    })
    .then((promise) => {
        console.log(promise)
    })
    .catch((error) => {
        console.log(error.message)
    })
  //  .finally(() => {
    //    console.log("end")
    //})
    
   //using async and await
   async function fetchdata(){
        try{
            let responce= await fetch("https://fakestoreapi.com/users")
            if(!responce.ok){
                throw new Error("data not found")
            }else{
                
                let data= await responce.json()
                console.log(data)
            }
        }
        catch(error){
            console.log(error)

        }
    }
    fetchdata()