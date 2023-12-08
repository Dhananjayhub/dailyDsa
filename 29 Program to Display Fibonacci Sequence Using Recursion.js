function fibonacciSeries(num, temp1 = 0, temp2 = 1) {
    console.log(temp1);
    //base
    if (temp2 > num) {
        return;
    }
    const temp = temp2;
    return fibonacciSeries(num, temp, temp2 + temp1);
}
function fibonacciSeries2(num, temp1 = 0, temp2 = 1, count = 1) {
    console.log(temp1);
    //base
    if (count >= num) {
        return;
    }
    const temp = temp2;
    return fibonacciSeries2(num, temp, temp2 + temp1, count + 1);
}
let prompt = require('prompt-sync')()
const start = Date.now();

fibonacciSeries(prompt("enter the max range"))
fibonacciSeries2(prompt("enter the no of "))

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);