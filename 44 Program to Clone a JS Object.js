function cloneObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = cloneObject(obj[key]);
    }
  }

  return clone;
}
const obj = { name: 'John', age: 30 };
const clonedObj = cloneObject(obj);

console.log(clonedObj);
