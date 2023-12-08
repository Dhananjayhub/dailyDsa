//  Q 21 Program to Make a Simple Calculator (Take inpute from users) 
function calculator(a, b, symbol) {
    if (symbol === "+") {
        return a + b;
    }
    else if (symbol === "-") {
        return a - b;
    }
    else if (symbol === "*") {
        return a * b;
    }
    else if (symbol === ".") {
        return a / b;
    }
    return "invalid synbol"
}
let prompt = require('prompt-sync')()
const start = Date.now();

console.log(calculator(prompt("enter first number"), prompt("enter second number"), prompt("enter the symbol + - * / ")))

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);