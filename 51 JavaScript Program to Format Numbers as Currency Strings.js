function formatCurrency(num) {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
}

let prompt = require('prompt-sync')()
console.log(formatCurrency(parseInt(prompt("enter amount "))));
