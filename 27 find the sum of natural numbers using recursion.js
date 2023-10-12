const prompt = require("prompt-sync") ();

const num = prompt('Enter a first integer: ');




let a = prompt("enter no ");
let total = 0;
let j = 1;
function sum(a){
    if(j>a){ 
        return total;
    }
    total+=j;
    j++;
    console.log(j);
    console.log(total);
    return sum(a);
}
let b = sum(a)
console.log(b);