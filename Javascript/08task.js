const user = {
  name: 'Alex',
  address: {
    city: 'Chennai',
    pin: 600001,
    location: {
      lat: 13.08,
      long: 80.27,
    },
  },
};
function getCity(){
    if(user.address.city){
        console.log(user.address.city);
    }
    else{
        console.log("unknown");
    }
}
getCity(user);

const calculator = {
  a: 10,
  b: 20,
};
const sum=((e)=>{
    return e.a+e.b;
 
  });
 
  console.log(sum(calculator));

 const settings = {
  theme: 'dark',
  layout: 'grid',
};
function getsetting(settings,key){
console.log(Object.hasOwnProperty(settings,key));

}
getsetting(settings,"themes")

user1={name:'Alex',
    age:30,
};
user2=structuredClone(user1);
console.log(user1);
user2.age=40;
console.log(user1);
console.log(user2);
console.log(user1);

let string= "Hello World! Welcome To JS"

function slug(e){
    slug=e.toLowerCase();
    slug=slug.replace("!","");
    slug=slug.replaceAll(" ","-");
    console.log(slug);
}
slug(string);

