function insertItem(array, item, index) {
  array.splice(index, 0, item);
  return array;
}
function enterIntegerInArray(array,size) {
    for (let i = 0; i < size; i++) {
    array[i] = parseInt(prompt("Enter an integer: "));
  }
  }
  
  function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  }
  
  let prompt = require('prompt-sync')()
  let size = parseInt(prompt("Enter the size of the array: "));
  let array = new Array(size);
  enterIntegerInArray(array,size);
  console.log("Original array:");
  printArray(array);
  let item = parseInt(prompt("Enter the item to insert: "));
  let index = parseInt(prompt("Enter the index to insert: "));
  insertItem(array, item, index);
  console.log("Modified array:");   
  printArray(array);