function isFunction(variable) {
  return typeof variable === 'function';
}
console.log(isFunction(Math.max));
console.log(isFunction("Math.max"));