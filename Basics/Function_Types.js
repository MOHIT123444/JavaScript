// Here I discussed with me types of functions and other in Javascript

// Function Statement
function a(){
    console.log("a called");
}
a();

// Function Expression
var b = function(){
    console.log("b called");
}
b();
// Function Declaration

//Anonymous Function

function () {
    console.log("Anonymous Function called");

} // writing function like  throws error as per the ECMA Script 5 function should have identifier name

// in order to call is correctly this is how I can fo that 

let please = function () {
    console.log("Anonymous Function called");

}

//Named Function Expression

// Difference between Pram and Arguments?

// First Class Function

// Arrow Function

//Higher Order Function

//Pure Function
