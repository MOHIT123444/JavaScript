// getname();
// console.log(getname());
console.log(x);
var x  = 7;/// shows errr as let and const are not hoisted
// but var is hoisted
//   function getname(){
//     console.log("Namaste Javascript");
// }


// arrow function shows error as it is not hoisted


getname();
// getname(); if I invoke this function before defining it, it will show error as getname is not a function

var getname = () => {
    console.log("Namaste Javascript");
}
getname();

// same here if i call this fucntion before defining it, it will show error as checkout is not a function
// but if I call it after defining it, it will work fine
var checkout = function (){
    console.log("Checkout function");
}
