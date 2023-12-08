function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
let prompt = require('prompt-sync')()
let inputString = prompt("enter the string ");
console.log(countVowels(inputString));

