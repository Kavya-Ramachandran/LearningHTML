let pattern=/[a-g]?[0-9]/;
const input=' 1';
const match1=pattern.test(input);
console.log(match1);
//patterns
let str = "Hello 2025!";
let hasdigits = /\d+/.test(str);
console.log(hasdigits);

let text = "Order 123, shipped on 2025-07-31";
let numbers = text.match(/\d+/g);
console.log(numbers);

let email = "user@example.com";
let isValid = /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
console.log(isValid); 

let sentence = "JavaScript is fun";
let dashed = sentence.replace(/\s+/g, "-");
console.log(dashed);

let date = "2025-07-31";
let regex = /(\d{4})-(\d{2})-(\d{2})/;
let match = date.match(regex);

if (match) {
  console.log(`Year: ${match[1]}, Month: ${match[2]}, Day: ${match[3]}`);
  
}
let text1= "London and New York are cities.";
let caps = text1.match(/\b[A-Z][a-z]+\b/g);
console.log(caps);

let messy = "Hello, world! @2025";
let clean = messy.replace(/[^\w\s]/g, "");
console.log(clean);

let inputs = "apple, banana; orange grape";
let items = inputs.split(/[\s,;]+/);
console.log(items);

//validate an email address

const email = "user@example.com";
const isValidEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);
console.log(isValidEmail); 

// Validate a US phone number

const phone = "(123) 456-7890";
const isValidPhone = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone);
console.log(isValidPhone); 
//validate a strong password

const password = "Str0ng@Pass";
const isStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
console.log(isStrong);  

//  extract all URLs 

const text = "Visit https://openai.com and http://example.org now!";
const urls = text.match(/https?:\/\/[^\s]+/g);
console.log(urls); 

//extract hashtags 

const post = "Loving the #summer and #beachVibes!";
const hashtags = post.match(/#\w+/g);
console.log(hashtags); 
// Remove all HTML tags

const html = "<p>Hello <strong>World</strong></p>";
const textOnly = html.replace(/<[^>]+>/g, "");
console.log(textOnly); 
//Match a Date 

const date = "2025-07-31";
const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(date);
console.log(isValidDate); 