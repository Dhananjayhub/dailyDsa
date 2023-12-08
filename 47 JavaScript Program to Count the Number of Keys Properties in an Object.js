// Sample object
const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

function countKeys(obj) {
  const keys = Object.keys(obj);
  
  return keys.length;
}

console.log(countKeys(obj)); 
