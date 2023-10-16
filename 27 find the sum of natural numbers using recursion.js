// const prompt = require("prompt-sync") ();

// const num = prompt('Enter a first integer: ');




// let a = prompt("enter no ");
// let total = 0;
// let j = 1;
// function sum(a){
//     if(j>a){ 
//         return total;
//     }
//     total+=j;
//     j++;
//     console.log(j);
//     console.log(total);
//     return sum(a);
// }
// let b = sum(a)
// console.log(b);

let arr= [5,4,9,7,3,7]
let ans =[];
        let temp=0
        
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]) {
               temp= arr[i+1]
                arr[i+1]=arr[i];
                arr[i]= temp;
                
               
                
            }
            console.log(arr[i]);
            
                }
            
            
        
        