function intersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}
function enterIntegerInArray(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = parseInt(prompt("Enter "+ (i+1)+" integer: "));
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
enterIntegerInArray(array1);
let size2 = parseInt(prompt("Enter the size second array: "));
let array2 = new Array(size2);
enterIntegerInArray(array2);
console.log("first array:");
printArray(array1);
console.log("second array:");
printArray(array2);
let newArray = intersection(array1, array2);
console.log("intersection:");
printArray(newArray);

