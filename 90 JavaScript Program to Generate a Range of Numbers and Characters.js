function generateRange(start, end) {
  const range = [];

  for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
    range.push(String.fromCharCode(i));
  }

  return range;
}

const numberRange = generateRange("0", "9");
console.log(numberRange);
const uppercaseRange = generateRange("A", "Z");
console.log(uppercaseRange);
const lowercaseRange = generateRange("a", "z");
console.log(lowercaseRange);
