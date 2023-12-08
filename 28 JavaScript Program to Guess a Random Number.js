function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let prompt = require('prompt-sync')()
const start = Date.now();

console.log(random(parseInt(prompt("Enter min: ")), parseInt(prompt("Enter max: "))));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
