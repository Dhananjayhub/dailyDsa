function objectToString(obj) {
    return JSON.stringify(obj);
}

// Example usage:
const exampleObject = { name: 'Alice', age: 25, occupation: 'Engineer' };
const objectStr = objectToString(exampleObject);
console.log(objectStr);  
