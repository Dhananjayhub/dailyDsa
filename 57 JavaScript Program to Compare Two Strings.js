function compareStrings(str1, str2) {
  if (str1 === str2) {
    console.log('The strings are equal.');
  } else {
    console.log('The strings are not equal.');
  }
} 

let prompt = require('prompt-sync')()
const str1 = prompt("Enter the first string: ");
const str2 = prompt("Enter the second string: ");
compareStrings(str1, str2);