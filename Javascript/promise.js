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

}).catch((comment) => {
    console.log("Failure:" + comment);
}).finally(()=>{
    console.log("end"); 
});

np();


//promise using callback

function profile(success,failure){
    let data=true;
    if(data){
        success("data has been recieved");
    }else{
            failure("data has been failed");
    }
}

function fetch(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    callback(null, data);  
  }, 1000);
}

fetch((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("data from callback:", data);
  }
});

function Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" };
      resolve(data);
    }, 1000);
  });
}
Promise()
  .then(data => {
    console.log("Data from promise:", data);
  })
  .catch(err => {
    console.error("Error:", err);
  });

  
  function oldStyleFunction(callback) {
  setTimeout(() => {
    callback(null, "This is from a callback");
  }, 1000);
}

function version() {
  return new Promise((resolve, reject) => {
    oldStyleFunction((err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

// version()
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

//   function function(callback) {
//   setTimeout(() => {
//     callback(null, "This is from a callback");
//   }, 1000);
// }

// function promisie() {
//   return new Promise((resolve, reject) => {
//    function((err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// }

promisie()
  .then(result => console.log(result))
  .catch(err => console.error(err));

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

