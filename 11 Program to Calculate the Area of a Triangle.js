const prompt = require("prompt-sync") ();

const h = parseInt(prompt("Enter a height : "));
let b = parseInt(prompt("Enter a base : "));

let area =0;
area = (h*b)/2;
console.log(area);