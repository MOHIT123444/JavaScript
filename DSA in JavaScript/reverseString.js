// reverse the string and convert upper case to lower and lower case to uppper
function reverseAndSwapCase(str){
return str.split('').reverse().map(char => {
    if(char === char.toUpperCase()){
        return char.toLowerCase();
    }else  {
        return char.toUpperCase();
    }
})
.join('');
}

let input  = "Hello World";
let result = reverseAndSwapCase(input);
console.log(result); // Output: "DLROw OLLEh"