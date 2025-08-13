//get set
//basic object with get
const user={
    name:"kavya",
    lastName:"Ramachandran",

    get fullName(){
        return `My name is ${this.name}${this.lastName}`;
    },
    
};
console.log(user.fullName);

//object with get set

const student={
    name:" ",

    get names(){
        return this.name.toUpperCase();
    },
    set names(value){
        this.name=value.trim();

    }
}

student.names="   kavya    ";
console.log(student.names);

//getset with classes

class person{
    constructor(name,age){
        this._name=name;
        this._age=age;
    }

    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<3){
            console.log("name is short");
        }else{
         this._name=value;
        }
        
    }

    get age(){
        return this._age;
    }
    set age(value){
        if(value<18 || value>50){
            console.log("invalid age");
        }else{
            this._age=value;
        }
    }
}

const p1=new person('kavya',23);
p1.age=12;
console.log(p1.age)
console.log(p1);

//class with calculation

class rec{
    constructor(width,height){
        this.width=width;
        this.height=height;

    }

    get result(){
        return this.width* this.height;
    }
}

const value= new rec(10,3);
console.log(value.result);

class notification{
    constructor(message){
        this.message=message;
        this.read=false;
    }
    get status(){
        return this.read?"read":"unread"
    }
    markAsRead(){
        this.read=true;
    }
    markAsUnread(){
        this.read=false;
    }
}

const note=new notification("you have a message");
console.log(note.status);
note.markAsRead();
console.log(note.status);