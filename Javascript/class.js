class student{
    constructor(name,rollnumber,marks){
        this.name=name;
       this.rollnumber=rollnumber;
        this.marks=marks;

    }
    displayInfo(){
        console.log(`Name: ${this.name},Rollnumber: ${this.rollnumber}, Marks: ${this.marks}`);
    }

}

class mark extends student{
    getgrade(){
        if(this.marks>=90){
            return "A";
        }
        else if(this.marks <=75 && this.marks<90){
            return "B";
        }
        else if(this.marks <=50 && this.marks < 75){
            return "C";
        }
        else if(this.marks<50){
            return "F";
        }
    }
    
}
const student1=new mark("Bob",100,73);
console.log(student1.getgrade());

