// const

// in const context time of declaration we have to initialize the variable as well other wise it will throw an error : Missing initiliazer in const decalration
const a; // this throws an error : Missing initializer in const declaration
a = 10; // even this is invalid and will throw an error : Missing initializer in const declaration
console.log(a); // this is invalid and will throw an error : Missing initializer in const declaration
 let b;// while this is valid
const c = 10; // this is valid


// let
// let is also hoisted but we cannot access it before the declaration. It will throw a ReferenceError: Cannot access 'x' before initialization. 
// during initializaition to declaration let variable is in a temporal dead zone.

let x = 10; // this is valid
console.log(x); // this is valid
let y; // this is valid

console.log(z); // this is invalid and will throw a ReferenceError: Cannot access 'z' before initialization.
let z = 20; 

// those errors are differnt incase okay. 
// If we try to print the vairable which is not defeined in whole program then the error is different
// Like 
console.log(i); // this is invalid and will throw a ReferenceError: i is not defined.
