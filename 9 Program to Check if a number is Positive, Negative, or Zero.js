const prompt = require("prompt-sync") ();

const num1 = parseFloat(prompt("enter num1 ="))
 
if(num1>0){
    console.log("positive")
}

else if(num1<0){
    console.log("nagative")

}
else{
    console.log ('zero')
}
