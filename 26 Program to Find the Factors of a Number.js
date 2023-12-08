// Q 26 Program to Find the Factors of a Number
function factorOfNumber(num, i = 1) {
    if (num % i === 0) {
        console.log(i);
    }
    if (i > num) {
        return;
    }
    return factorOfNumber(num, i + 1);
}
let prompt = require('prompt-sync')()
const start = Date.now();

factorOfNumber(prompt("enter the number  "))

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);