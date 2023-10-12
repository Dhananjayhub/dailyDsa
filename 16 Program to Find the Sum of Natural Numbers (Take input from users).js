const prompt = require("prompt-sync") ();

const num1 = parseFloat(prompt("enter num1 ="))
let sum=0;
for(let i=1; i<=num1; i++){
    sum=sum+i;
}
console.log(`${sum} result` );