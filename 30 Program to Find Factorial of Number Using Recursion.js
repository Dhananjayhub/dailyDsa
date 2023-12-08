
function factorial(num, factorialNumber = 1, count = 1) {
    if (count > num) {
        return factorialNumber;
    }
    return factorial(num, factorialNumber * count, count + 1);
}
let prompt = require('prompt-sync')()
const start = Date.now();

console.log(factorial(120));

const end = Date.now();
console.log(`Execution time: ${(end - start)*10^6} ms`);
