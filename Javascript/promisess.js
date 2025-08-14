async function getuserdata(id) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        }
        return Promise.reject(new Error(response.statusText));
    } catch (error) {
        console.error(error.message);
    }
}


Promise.all([getuserdata(1), getuserdata(2), getuserdata(1703)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

Promise.allSettled([getuserdata(1), getuserdata(2), getuserdata(103)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

Promise.any([getuserdata(1), getuserdata(2), getuserdata(103)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

Promise.race([getuserdata(1), getuserdata(2), getuserdata(103)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

async function getuser(id) {
        try {
            const response=await fetch(`https://dummyjson.com/users/${id}`)
            if(response.ok){
                const json=await response.json();
                return json;
            }return Promise.reject(new Error(response.statustext))
            
            }
            catch(error){
                console.log(error.message);
            }
        }
        
Promise.all([getuser(1),getuser(3)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
    
Promise.allSettled([getuser(1),getuser(2)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

Promise.any([getuser(1),getuser(2)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

Promise.race([getuser(1),getuser(2)])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

function getFetch() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

getFetch();

