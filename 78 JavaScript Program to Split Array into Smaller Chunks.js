function splitArrayIntoChunks(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
function enterIntegerInArray(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = parseInt(prompt("Enter" +(i+1)+ "integer: "));
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
let chunkSize = parseInt(prompt("Enter the chunk size: "));
let chunks = splitArrayIntoChunks(array, chunkSize);
console.log("Modified array:");
printArray(chunks);