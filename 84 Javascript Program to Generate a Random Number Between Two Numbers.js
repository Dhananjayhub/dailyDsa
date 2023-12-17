function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let prompt = require("prompt-sync")();
let min = parseInt(prompt("Enter the minimum number: "));
let max = parseInt(prompt("Enter the maximum number: "));
console.log("Random number between " + min + " and " + max + ": " + randomBetween(min, max));
