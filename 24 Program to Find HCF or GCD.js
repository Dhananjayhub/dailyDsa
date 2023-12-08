// Q 24 Program to Find HCF or GCD
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b); // 14, 17  17 14 14 3 3 2 2 1 1 0
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
let prompt = require("prompt-sync")();
const start = Date.now();

console.log(gcd(prompt("enter 1 "), prompt("enter 2 ")));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
