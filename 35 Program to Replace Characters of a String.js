function replaceCharacters(str, char1, char2) {
  return str.replace(new RegExp(char1, 'g'), char2);
}
let prompt = require('prompt-sync')()
const inputString = prompt("enter the string ");
const replacedString = replaceCharacters(inputString, 'o', 'X');
console.log(replacedString); 
