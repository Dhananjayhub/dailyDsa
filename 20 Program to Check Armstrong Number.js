// q 20 Program to Check Armstrong Number
function armstrongNumber(num, temp = num, sum = 0) {
    //base
    if (temp <= 0) {
        if (sum === num) {
            return true;
        }
        else {
            return false;
        }
    }
    sum += Math.pow(temp % 10, num.toString().length);
    return armstrongNumber(num, Math.floor(temp / 10), sum);
}
let prompt = require('prompt-sync')()
const start = Date.now();

// console.log(armstrongNumber(prompt("enter number   ")))

for (let i = 1; i < 1000000000; i++) {
    const temp = armstrongNumber(i);
    if (temp === true) {
        console.log(i);
    }
}

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);