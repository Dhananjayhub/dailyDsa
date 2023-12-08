function replaceLineBreaksWithBR(str) {
    return text.replace(/(\r\n|\n|\r)/gm, '<br>');
}
let prompt = require('prompt-sync')()
console.log(prompt("Enter a string: "));