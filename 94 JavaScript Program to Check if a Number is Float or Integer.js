function checkNumberType(number) {
  if (Number.isInteger(number)) {
    console.log(`${number} is an integer.`);
  } else {
    console.log(`${number} is a float.`);
  }
}
checkNumberType(23);
checkNumberType(2.3);