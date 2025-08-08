const tasks = [
    { id: 1, name: 'Buy groceries', completed: false },
    { id: 2, name: 'Walk the dog', completed: true },
    { id: 3, name: 'Pay bills', completed: false },
    { id: 4, name: 'Read a book', completed: true },
];
const taskname = tasks.find((e) => {
    return e.name === "Pay bills"
}
);
// { id: 3, name: 'Pay bills', completed: false },
console.log(taskname);
const task = tasks.some((e) => {
    return e.completed === false;
});
console.log(task);
//true

const taskall = tasks.every((e) => {
    return e.completed;
})
console.log(taskall);
//false
const filter = tasks.filter((e) => {
    return e.completed;
});
console.log(filter);
// { id: 4, name: 'Read a book', completed: true },
const cart = [
    { id: 1, item: 'Phone', price: 799, quantity: 1 },
    { id: 2, item: 'Charger', price: 25, quantity: 2 },
    { id: 3, item: 'Headphones', price: 199, quantity: 1 },
    { id: 4, item: 'USB Cable', price: 15, quantity: 3 },
];

const products = cart.filter((e) => {
    return e.price > 100;
})
console.log(products);
//[{ id: 1, item: 'Phone', price: 799, quantity: 1 },{ id: 3, item: 'Headphones', price: 199, quantity: 1 }]
 
const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 7);
console.log(total, "total value");
//
const totl = cart.find((e) => {
    return e.price === 199
})
console.log(totl);
//

const item = cart.some((e) => {
    return e.quantity > 2;
});
console.log(item);

const all = cart.every((e) => {
    return e.quantity > 0;
})
console.log(all);

const students = [
    { name: 'Ali', score: 88 },
    { name: 'Zara', score: 94 },
    { name: 'Ravi', score: 67 },
    { name: 'Lina', score: 73 },
];

const above = students.filter((e) => {
    return e.score >= 70;
});
console.log(above);

const lowest = students.sort((a, b) => a.score - b.score);
console.log(lowest[0]);

const lowet = students.sort((a, b) => b.score - a.score);
console.log(lowet);

const below = students.filter((e) => {
    return e.score < 50;
});
console.log(below);

const passed = students.every((e) => {
    return e.score >= 60;
});
console.log(passed);

const taskss = [
    { title: 'Check email', done: false, category: 'work' },
    { title: 'Cook dinner', done: true, category: 'home' },
    { title: 'Submit report', done: false, category: 'work' },
    { title: 'Do laundry', done: true, category: 'home' },
];

const allarray = taskss.map((e) => {
    return e;
});
console.log(allarray);

const done = taskss.filter((e) => {
    {
        return e.done === false;
    }
});
console.log(done);

const notdone=taskss.find((e)=>{
    return e.done===false;
});
console.log(notdone);
const home = taskss.filter((item) => item.category == "home").every((e) => e.done == false);
console.log(home);

const allTasks = taskss.filter((item) => item.category === "home" && item.done === true);

allTasks.forEach((task) => {
    console.log(task);
});


const completed=taskss.filter((e)=>e.category=="work").every((e)=>e.done);
console.log(completed);

const count=taskss.reduce((count,task)=>count+task.done,0);
console.log(count);

