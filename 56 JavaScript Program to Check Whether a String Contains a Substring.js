function isSubstring(str, substring) {
  return str.includes(substring);
}
let prompt = require('prompt-sync')()

const string = prompt("Enter a string: ");
const substringToCheck = prompt("Enter a substring: ");

const result = isSubstring(string, substringToCheck);
console.log(result); 
