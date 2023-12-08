function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

let prompt = require('prompt-sync')()
const year = prompt("Enter a year: ");
console.log(`Is ${year} a leap year?`, isLeapYear(year) ? "Yes" : "No");
