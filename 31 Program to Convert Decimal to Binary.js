function decimalToBinary(num, div = num, arr = []) {
    // console.log("binaryNumber");
    // base
    if (div <= 0) {
        arr.reverse();
        return arr.join("");
    }
    arr.push(div % 2)
    return decimalToBinary(num, Math.floor(div / 2), arr);
}
let prompt = require('prompt-sync')()
const start = Date.now();

console.log(decimalToBinary(prompt("enter the number to convert")))

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);

