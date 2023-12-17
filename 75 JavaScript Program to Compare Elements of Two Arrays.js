function compareArrays(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
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
let size1 = parseInt(prompt("Enter the size first array: "));
let array1 = new Array(size1);  
enterIntegerInArray(array1, size1);
let size2 = parseInt(prompt("Enter the size second array: "));
let array2 = new Array(size2);
enterIntegerInArray(array2, size2);
console.log("first array:");
printArray(array1);
console.log("second array:");
printArray(array2);
console.log(compareArrays(array1, array2))