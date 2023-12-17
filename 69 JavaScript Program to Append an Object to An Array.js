function appendObjectToArray(array, obj) {
  array.push(obj);
  return array;
}

const array = [{ key1: 'value1' }, { key2: 'value2' }];
const newObject = { key3: 'value3' };

const updatedArray = appendObjectToArray(array, newObject);
console.log(updatedArray);
