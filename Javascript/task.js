 function myparagraph(){
    const paragraph=document.getElementById('mypara');


if(paragraph.style.display==='none'){
    paragraph.style.display='block'
}else{
    paragraph.style.display='none'
}
}

const background=document.getElementById('bg');

background.addEventListener('click',()=>{
    document.body.style.backgroundColor='lightblue';
})

const alertsign=document.getElementById('alertbtn');

alertsign.addEventListener('click',()=>{
    alert("Hello, this is the alert message to pop up!");
})

const inputfield=document.getElementById('input');
const buttonfield=document.getElementById('button');
const textfield=document.getElementById('display the text');

buttonfield.addEventListener('click',()=>{
    const text = inputfield.value.trim();
    if(text){
        textfield.textContent=text;
    }else{
        display.textContent="please enter some text";
    }
});