function countOccurrences(str, char) {
  return str.split(char).length - 1;
}
let prompt = require('prompt-sync')()
const str = prompt("enter the string ");
const char = prompt("enter the character ");
console.log(countOccurrences(str,char))