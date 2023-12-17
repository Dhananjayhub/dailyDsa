function getRandomItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('The input should be a non-empty array.');
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function enterIntegerInArray(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = parseInt(prompt("Enter " + (i + 1) + " integer: ",));
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
enterIntegerInArray(array);
console.log("Original array:");
printArray(array);
let item = getRandomItem(array);
console.log("Random item:", item);