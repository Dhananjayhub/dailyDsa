const prompt = require("prompt-sync") ();

// const a = prompt('Enter a first integer: ');
// const n = prompt('Enter a first integer: ');


 


let num = prompt("Enter first no");
let num2 = prompt("enter Second no");
let lcm=1;
for(let j = 2; j<=Math.max(num,num2);j){
    if(num%j===0  || num2%j===0){
        lcm*=j;
        if(num%j===0){
            num/=j;
        }
        if(num2%j===0){
            num2/=j; 
        }
        continue;
    }
    j++;
}
console.log(lcm);
// 5 10 
