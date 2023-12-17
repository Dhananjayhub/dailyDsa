function area(length, width) {
  length = typeof length !== "undefined" ? length : 10;
  width = typeof width !== "undefined" ? width : 5;
  return length * width;
}
console.log(area());
console.log(area(10,30));
