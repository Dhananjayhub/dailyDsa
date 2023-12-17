function greet(paraame) {
  console.log("Hello " + paraame);
}

function paraame(user, func) {
  const message = func(user);
  console.log(message);
}

paraame("world", greet);
