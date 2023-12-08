function replaceAllOccurrences(str, find, replace) {
  return str.split(find).join(replace);
}
let prompt = require('prompt-sync')()
const str = prompt("Enter a string: ")
const find = prompt("Enter the string to be replaced: ")
const replace = prompt("Enter the string to replace with: ")
console.log(replaceAllOccurrences(str, find, replace))