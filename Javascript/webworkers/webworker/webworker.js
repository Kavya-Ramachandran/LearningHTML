const worker=new Worker("work.js");

const calculate=document.getElementById('button1');
const bgcolor=document.getElementById('button2');

calculate.addEventListener('click',()=>{
    // let sum=0;
    // for(let i =0;i<1000000000000;i++){
    //     sum=sum+i;
    // }
    // alert(`The sum is:${sum}`);
    worker.postMessage("sum");
})
worker.onmessage=function(message){
    alert(`The sum is:${message.data}`);

}

bgcolor.addEventListener('click',()=>{
    if(document.body.style.background!=="red"){
        document.body.style.background='red'
    }else{
        document.body.style.background="white"
    }
})