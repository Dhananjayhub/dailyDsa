const obj = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
