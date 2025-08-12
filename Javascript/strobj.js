const user={
    firstName:"Alice",
    lastName:"Smith",
    
get fullName(){
    return (`My firstname is ${this.firstName} and my lastname is ${this.lastName} `);
},
set func(age){
    console.log(`My firstname is ${this.firstName} and my lastname is ${this.lastName}.The age is ${age}`)
    
},
};
Object.freeze(user),


user.firstName="bob";
console.log(Object.keys(user));
console.log(Object.values(user))
user.func=40;
user.func;
console.log(user);
console.log(user.fullName);


