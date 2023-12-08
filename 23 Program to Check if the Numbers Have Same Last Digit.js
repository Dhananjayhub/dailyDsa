// Q 23 Program to Check if the Numbers Have Same Last Digit
function sameLastDigit(num1, num2) {
    if (num1 % 10 === num2 % 10) {
        return true;
    }
    return false
}
let prompt = require('prompt-sync')()
const start = Date.now();

console.log(sameLastDigit(prompt("enter first no"), prompt("enter second no")))

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);