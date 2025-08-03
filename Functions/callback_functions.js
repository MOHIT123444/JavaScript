//  What is the callback functions in Javascript

setTimeout(function () {
    console.log("timer");
},5000);

 function x(y){
console.log("x");
y();
 }
 x(function y(){ // this is the call back function
console.log("y");
 });


//Javascript is a synchronous and single threaded language


//Blcoking the main thread

//Power of Callbacks?

//Deep about event listners

//Clouseres demo with Event listners

//Scope demo with Event listners

//Garbage collections & removeEvenListners 









document.getElementById("clickMe").addEventListener("click",function xyz(){
 console.log("Button clciked");
})


