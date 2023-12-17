function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

console.log(validateEmail("john.doe@example.com"));
console.log(validateEmail("john.doe@example"));
console.log(validateEmail("john.doe@.com"));
console.log(validateEmail("john.doe"));
