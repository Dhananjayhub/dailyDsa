function removeAllWhitespaces(text) {
  return text.replace(/\s+/g, '');
}
console.log(removeAllWhitespaces("   Hello, World!   "));
console.log(removeAllWhitespaces("Hello, World!"));