// console.log("Namaste Doston!!!")
// const message = "Im the best coder name Mohit Raj Purohit"
// console.log(message)
// const faltuMessage = '      HI, i am Mohit Raj Purohit    '

// const lastFourDigits = '5745'
// const MaskedAccountNumber01 = lastFourDigit.padStart(16,'*')
// const MaskedAccountNumber02 = lastFourDigit.padEnd(16,'*')
// console.log(MaskedAccountNumber01)
// // console.log(lastFourDigit.slice(-4))
// // Google it brother BEcuase bhai mere 
// // console.log(lastFourDigit.slice(0, -4))

// const ConcatinatedString = `Last four digit of my account no.  is`.concat(' '+ MaskedAccountNumber01)

// const templateString = `Last four digit of my account no.  is ${lastFourDigits.padStart(16,'*')} `
// const bankbalance = 5678
// const templateString02 = 'I have ₹${bankbalance} in my account'



// DATATYPES   DATATYPES     DATATYPES       DATATYPES      DATATYPES 
// two types of datatypes Primitive and non-primitive/refrence data type.  

// 1. Primitive Datatype --> Call by value hote hai 
//  total 7 ==> String, Number, boolean, null, undefined,  symbol,  BigInt. 

// 2 Non primitive/refrence datatype --> Memofey mein inka refrencce direct allocate kiya ja sakta hai
// Arrays, Objects, functions .  

// Is jS is dynamically or static type language.  
// JavaScript is a dynamically typed language, which means that the type of a variable is determined at runtime, not at compile time. You do not need to declare the type of a variable explicitly, and the same variable can hold different types of data during the execution of the program.

console.log("--> Symbol <--");

const id = Symbol('123');
const anotherid = Symbol('123');


console.log(id === anotherid);


console.log("--> Type of <--");


const BigNumber = 12463131166323n;
console.log(typeof BigNumber);

const emptyNumber =  null;
console.log(typeof emptyNumber);

const undefNumber =  undefined;
console.log(typeof undefNumber);







