self.onmessage=function(message){
if(message.data==="sum"){
    let sum=0;
     for(let i =0;i<100000;i++){
        console.log(i);
         sum=sum+i;
     }

     self.postMessage(sum);
}
};