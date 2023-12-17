function removeDuplicates(arr) {
  return [...new Set(arr)];
}
function enterIntegerInArray(array, size) {
  for (let i = 0; i < size; i++) {
    array[i] = parseInt(prompt("Enter an integer: "));
  }
}

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let prompt = require("prompt-sync")();
let size = parseInt(prompt("Enter the size of the array: "));
let array = new Array(size);
enterIntegerInArray(array, size);
console.log("Original array:");
printArray(array);
let newArray = removeDuplicates(array);
console.log("Modified array:");
printArray(newArray);
