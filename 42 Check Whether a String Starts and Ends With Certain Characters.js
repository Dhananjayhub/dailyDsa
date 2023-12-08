function checkStringStartsAndEndsWith(string, startsWith, endsWith) {
    if (string.startsWith(startsWith) && string.endsWith(endsWith)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkStringStartsAndEndsWith("Hello World", "Hello", "World")); 
console.log(checkStringStartsAndEndsWith("Hello World", "Hello", "World!")); 