//array destructuring

let arr=[1,2,3,4]
//let[a,,,d]=arr
//let [a,x,s,d]=arr
//let[a,d,s]=arr
let [a1,...a2]=arr
console.log(a1);
//nest array
let ne =[1,2,3,4,5,[6,7,9,[10,100,[12,23,8]]]]
let [a,s,d,f,g,[h,m,j,[y,r,[e,l,i,o,p]]]]=ne
console.log(g)
//object destructuring
let obj={
    name:"kavya",
    id:1,

}
//swapping variables
let v = 1;
let b = 3;

[a, b] = [b, a];
console.log(v); 
console.log(b); 

const array = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);

// iterator
function makeIterator(array) {
  let k = 0;
  return {
    next: function () {
      if (k < array.length) {
        return { value: array[k++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}
const it = makeIterator(['a', 'b', 'c','d']);
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next());

function createbookiterator(books) {
  let index = 0;

  return {
    next: function() {
      if (index < books.length) {
        return { value: books[index++], done: false };
      } else {
        return { value: null, done: true };
      }
    }
  };
}
const books = [
  { title: "1984", author: "gorge" },
  { title: "habit", author: "author1" },
  { title: "geeks", author: "author2" }
];

const bookiterator = createbookiterator(books);

console.log(bookiterator.next()); 
console.log(bookiterator.next()); 
console.log(bookiterator.next()); 
console.log(bookiterator.next()); 
//generator

function * mygen(){
    yield 'hello';
    yield 'world';
    yield 'thanks';
    return 'done';
}

const gen=mygen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//
function *createbookiterator(book) {
for (let books of book){
    yield books;
}
}
const book = [
  { title: "1984", author: "gorge" },
  { title: "habit", author: "author1" },
  { title: "geeks", author: "author2" }
];

const bookiterators = createbookiterator(book);

console.log(bookiterators.next()); 
console.log(bookiterators.next()); 
console.log(bookiterators.next()); 
console.log(bookiterators.next()); 
//
function* count(){
    yield1;
    yield2;
    yield3;
}
const counts=count();
console.log(counts.next()); 
console.log(counts.next()); 
console.log(counts.next()); 
console.log(counts.next()); 
