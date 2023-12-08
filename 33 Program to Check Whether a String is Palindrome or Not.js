function stringPalindrome(str) {
    if (str === str.split('').reverse().join('')) {
        return true;
    }
    return false;
}
let prompt = require('prompt-sync')()
const start = Date.now();

console.log(stringPalindrome(prompt("enter the string ")))

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
