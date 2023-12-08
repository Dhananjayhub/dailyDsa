// Q 22 Program to Find the Sum of Natural Numbers
function sumOfNatural(num, sum = 0, i = 1) {
    if (i > num) {
        return sum;
    }
    sum += i;
    return sumOfNatural(num, sum, i + 1)
}
let prompt = require('prompt-sync')()
const start = Date.now();
const temp = sumOfNatural(prompt("enter"))
console.log(temp)
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);