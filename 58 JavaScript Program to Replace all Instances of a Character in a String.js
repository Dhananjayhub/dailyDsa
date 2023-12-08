function replaceAllInstances(string, targetChar, replacementChar) {
  return string.split(targetChar).join(replacementChar);
}

let prompt = require('prompt-sync')()
const string = prompt("Enter a string: ");
const targetChar = prompt("Enter the target character: ");
const replacementChar = prompt("Enter the replacement character: ");
const result = replaceAllInstances(string, targetChar, replacementChar);
console.log(result);
