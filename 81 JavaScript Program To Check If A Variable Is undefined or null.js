function checkVariable(variable) {
  if (variable == null) {
    return true;
  } else {
    return false;
  }
}
const result1 = checkVariable("hello");
console.log(result1);

const result2 = checkVariable(undefined);
console.log(result2);

const result3 = checkVariable(null);
console.log(result3);
