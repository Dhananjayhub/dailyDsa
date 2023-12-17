function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
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
let size1 = parseInt(prompt("Enter the size of the array: "));
let array1 = new Array(size1);  
enterIntegerInArray(array1, size1);
let size2 = parseInt(prompt("Enter the size of the array: "));
let array2 = new Array(size2);
enterIntegerInArray(array2, size2);
console.log("first array:");
printArray(array1);
console.log("second array:");
printArray(array2);
let newArray = mergeArrays(array1, array2);
console.log("Modified array:");
printArray(newArray);
