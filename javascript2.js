function greet()
{
    console.log("hello world")
}
greet();

function funct(user)
{
    return `Hello ${user}`
}
let user="navin!!";
let str=funct(user);
console.log(str);

let a=function(num1 , num2)
{
    return num1+num2
}

let result=a(2,3)
console.log(result)

let users = ["Navin", "Priya", "Aman"];

const addUser = function(name) {
    let welcomeMessage = `User ${name} added successfully!`;

    users.push(name);

    return welcomeMessage;
};

function listUsers() {
    console.log(" Current Users:");
    for (let i = 0; i < users.length; i++) {
        console.log(`- ${users[i]}`);
    }
}

function findUser(name) {
    let found = users.includes(name);

    return found;
}

console.log(addUser("Ravi"));    
console.log(addUser("Meena"));   

listUsers(); 

let isFound = findUser("Priya");
console.log(` Is Priy a in the list? ${isFound}`); 

let isFound2 = findUser("Sahil");
console.log(`Is Sahil in the list? ${isFound2}`); 
const stri="It is my name";
const newstr=stri.replace("name","js code")
console.log(newstr);

const textBox = document.getElementById("myTextBox");

textBox.addEventListener("keydown", function(event) {
    console.log(`You pressed: ${event.key}`);
});

let textBox=document.getElementById("Text box");
textBox.addEventListener("keydown",function(list){
    console.log(`it is a value for ${list.name}`);
});

const z=6

function c(){
    const x=2;
    output(x);
}
function b(){
    const y=4;
    output(y);
}

function output(value){
    const para=document.getElementById('p');
    para.textContent=`value:${value}`

}

let btn= document.getElementById("eg");

btn.addEventListener('click',(event)=>{
    if(
    btn.style.backgroundColor==="green"){
        btn.style.backgroundColor="blue";
    }
    else{
        btn.style.backgroundColor="green";
    }
    console.log("clicked");
    
}
);

btn.addEventListener('mouseout',(event)=>{
    btn.textContent="click me.."
    console.log("mouseout");
    
}
);


btn.addEventListener('mouseover',(event)=>{
    btn.textContent="I had not changed you click me"
    console.log("Hover");
    
}
);

let btn1=document.getElementById("key");
document.addEventListener('keydown',(a)=>{
    console.log(a.key);
    switch(a.key){
        case 'ArrowUp':
            btn1.textContent=Number(btn1.textContent)+1;
            break;
        case 'ArrowDown':
            btn1.textContent=Number(btn1.textContent)-1;
            break;
    }
});
//objects

let person={
    name:'kavya',
    lastName:'Ramachandran',
    DOB:'19/12/2001',
    Age:23,
    native:'Namakkal',
    exp:1,
    totalexp(){
    return this.exp+1;
},
};
function fav(animal){
    this.animal=animal
}
const favperson=new fav("dog");
console.log(favperson.animal);
console.log(person.totalexp());

const obj={
    name:"kavya",
    age:20

};
console.log(obj.name);

obj.course="cs";
console.log(obj);

obj.age=24;
console.log(obj);
function Books(name,author){
    this.name=name;
    this.author=author;
    this.desc=function(){

    
console.log(`the author name ${this.name} who wrote the book of ${this.author}`);
};}
 const a=new Books("harypotter","the hary");
 const b=new Books("name","author");
a.desc();
b.desc();
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); 
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(`I teach ${this.subject}.`);
  }
}

const prof = new Teacher("Lillian", "Math");
prof.introduce();  
prof.teach();   

const school = {
  name: "Sunrise Public School",
  location: "Chennai",
  showInfo() {
    console.log(`${this.name} is located in ${this.location}.`);
  }
};

school.showInfo();  

function Course(name, duration) {
  this.name = name;
  this.duration = duration;
}

const mathCourse = new Course("Mathematics", "3 months");

Course.prototype.describe = function () {
  console.log(`${this.name} course lasts for ${this.duration}.`);
};

mathCourse.describe();

class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, I am ${this.name}.`);
  }
}

class Professor extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  grade(paper) {
    console.log(`${this.name} graded the paper on ${paper}.`);
  }

  introduceSelf() {
    console.log(`My name is Professor ${this.name}, and I will be your ${this.subject} professor.`);
  }
}

class Student extends Person {
  #year; 

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}, a year ${this.#year} student.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

  getYear() {
    return this.#year;  
  }
}

const prof = new Professor("Lillian", "Physics");
const student1 = new Student("Aakash", 1);
const student2 = new Student("Priya", 2);

prof.introduceSelf();
student1.introduceSelf();

console.log(student2.canStudyArchery()); 

const jsonData = `[
  {"name": "Kavya", "grade": "A"},
  {"name": "Ravi", "grade": "B"}
]`;

const studentResults = JSON.parse(jsonData);
studentResults.forEach(s => {
  console.log(`${s.name} received grade ${s.grade}`);
});

const newJson = JSON.stringify(studentResults, null, 2);
console.log("JSON Output:\n", newJson);

const department = {
  name: "Science",
  professors: [],
  students: [],
  addProfessor(professor) {
    this.professors.push(professor);
  },
  addStudent(student) {
    this.students.push(student);
  },
  listMembers() {
    console.log(`Professors in ${this.name} Department:`);
    this.professors.forEach(p => p.introduceSelf());

    console.log(`Students in ${this.name} Department:`);
    this.students.forEach(s => s.introduceSelf());
  }
};

department.addProfessor(prof);
department.addStudent(student1);
department.addStudent(student2);
department.listMembers();
