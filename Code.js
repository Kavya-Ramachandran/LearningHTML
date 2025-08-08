//Declare a variable name with your name and print a greeting:
let n="kavya";
console.log(`Hello ${n}`)
//calculate the sum
let a=3;
let b=5;
calculatesum=a+b;
console.log(calculatesum);
//vowels
function countVowels(str){
    const vowel="aeiouAEIOU";
    let count=0;

    for(let char of str){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world"))
//add the elements in array
let d=[1,3,5,7,9]
let count=0;
for(let i=0; i<d[i];i++)
{
    count+=d[i];
}
console.log(count);
//odd or even
let num=10;
if(num%2==0){
    console.log("it is even");
}
else{
    console.log("it is odd")
}

//1-5 using for

for(i=1;i<=5;i++){
  console.log(i);  
}


