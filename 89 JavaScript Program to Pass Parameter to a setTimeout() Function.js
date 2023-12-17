function greet(name) {
    console.log("Hello " + name);
  }
  
  setTimeout(() => {
    greet("world");
  }, 10000);

