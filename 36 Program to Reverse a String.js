function reverseString(str) {
  return str.split('').reverse().join('');
}
let prompt = require('prompt-sync')()
const str = prompt("enter the string ");
console.log(reverseString(str))