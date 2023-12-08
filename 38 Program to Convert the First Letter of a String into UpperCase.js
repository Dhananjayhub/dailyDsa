function convertFirstLetterToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let prompt = require('prompt-sync')()
let inputString = prompt("enter the string ");
console.log(convertFirstLetterToUpperCase(inputString));

