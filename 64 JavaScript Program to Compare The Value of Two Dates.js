
function compareDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1 > d2) {
    return "Date1 is later than Date2";
  } else if (d1 < d2) {
    return "Date1 is earlier than Date2";
  } else {
    return "Date1 is equal to Date2";
  }
}

let prompt = require('prompt-sync')()
const date1 = prompt("Enter the first date: ");
const date2 = prompt("Enter the second date: ");
const result = compareDates(date1, date2);
console.log(result); 
