function trimString(str) {
  return str.trim();
}
let prompt = require('prompt-sync')()
const originalString = prompt("Enter a string: ");
const trimmedString = trimString(originalString);
console.log(trimmedString); 
