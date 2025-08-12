//promise call back
function profile(success,failure){
  let data=false;
    if(data){
      success("successed");
    }else{
      failure("failed to recieve data");
    }
  }
profile((message)=>{
  console.log(message)},
(message)=>{
  console.log(message) });
//callback hell
  function profile(success,failure){
  let data=false;
    if(data){
      success("successed");
    }else{
      failure("failed to recieve data");
    }
  }
profile((message)=>{
  console.log(message)
    profile((newmsg)=>{
        console.log("new message")
    },
(newmsg)=>{
    console.log("error message");
    
})
},
  
(message)=>{
  console.log(message) });
//nested promise
const np = new Promise((resolve, reject) => {
    let data = true;

    if (data) {
        resolve("data is recieved");
    } else {
        reject("data not yet recieved")
    }
})
np.then((comment) => {
    console.log("success:" + comment);
    return "next chaining:"+comment;
})
.then((nextcomment)=>{
    console.log(nextcomment);
})

.catch((comment) => {
    console.log("Failure:" + comment);
}).finally(()=>{
    console.log("end"); 
});



