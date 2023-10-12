const prompt =require("prompt-sync") ();
const num1 = parseFloat(prompt("Enter first number: "));
if(num1 % 2 == 0){
    console.log("even")
}
else{
    console.log("odd")
}



