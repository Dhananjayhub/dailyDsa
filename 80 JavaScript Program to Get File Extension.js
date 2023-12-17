function getFileExtension(filename) {
  let index = filename.lastIndexOf(".");
  let extension = filename.slice(index + 1);
  return extension;
}
const result1 = getFileExtension("module.js");
console.log(result1);
const result2 = getFileExtension("test.txt");
console.log(result2);
