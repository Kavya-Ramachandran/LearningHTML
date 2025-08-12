function topropercase(name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
    
}
console.log(topropercase("subscribe"));
//function declaration

let arr=[1,2,3,4,5,6]
function getEvenNumbers(arr){
    let evennumbers=[];
    for(i=0;i<arr.length;i++)
    if(arr[i]%2==0)
    {
        evennumbers.push(arr[i])
    }
    return evennumbers;
}
//sum of array
console.log(getEvenNumbers(arr));
let sum=[1,2,3,4]
function sumArray(sum){
    let count=0;
    for(i=0;i<sum.length;i++){
        count+=sum[i];
    }
    return count;
}
console.log(sumArray(sum));
//max value


function findMax(arr){
    let max=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }return max;

}
console.log(findMax([1,2,3,4,5]));
//second largest no:
function secondLargest(arr) {
    let max = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num !== max) {
            second = num;
        }
    }
    return second;
}

console.log(secondLargest([10, 5, 8, 20])); 
