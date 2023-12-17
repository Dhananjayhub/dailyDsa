function isArray(obj) {
  Array.isArray(obj) ? console.log("true") : console.log("false");
}
let obj = {name: "Alice", age: 25};
let arr = [1, 2, 3];
isArray(obj);   
isArray(arr);