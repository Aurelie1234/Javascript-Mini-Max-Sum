function miniMaxSum(arr) {
    // Write your code here


let min = Math.min(...arr);
let max = Math.max(...arr);
let minSum = 0;
let maxSum = 0;


for (let i = 0; i < arr.length; i++){
     minSum += arr[i]
    }
for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i]
   }
console.log((minSum - max) +" "+ (maxSum - min));
}
