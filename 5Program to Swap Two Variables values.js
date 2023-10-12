const prompt= require("prompt-sync") ();

var num1 =parseFloat(prompt("enter num1"))
var num2 =parseFloat(prompt("enter num2"))

var temp =0
temp= num1
num1= num2
num2= temp

console.log(num1  , + num2)