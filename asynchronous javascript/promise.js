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
