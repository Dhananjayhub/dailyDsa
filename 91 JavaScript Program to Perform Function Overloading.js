function performOperation() {
  let numArgs = arguments.length;

  switch (numArgs) {
    case 1:
      return arguments[0] * arguments[0];
    case 2:
      return arguments[0] + arguments[1];
    default:
      return "Operation not supported";
  }
}

console.log(performOperation(5));
console.log(performOperation(5, 10));
console.log(performOperation(1, 2, 3));
