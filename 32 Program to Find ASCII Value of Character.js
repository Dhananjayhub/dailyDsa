let prompt = require('prompt-sync')()
const start = Date.now();

console.log(prompt("enter the number").charCodeAt(0));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);