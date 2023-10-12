const prompt = require("prompt-sync") ();

const num1 = parseFloat(prompt("enter num1 ="))

let fact=1;

for(let i=1; i<=num1; i++){
    fact= i* fact;

}

console.log(fact);