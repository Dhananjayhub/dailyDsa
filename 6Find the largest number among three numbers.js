const prompt = require("prompt-sync") ();

const num1 = parseFloat(prompt("enter num1 ="))
const num2 = parseFloat(prompt("enter num2 ="))
const num3 = parseFloat(prompt("enter num3 ="))

if (num1>num2 & num1>num3){
    console.log("num1 is largest", num1)

}
 else if(num2>num1 & num2>num3) {
    console.log("num2 is largest", num2)
}
else {
    console.log("num3 is largest", num3)
}