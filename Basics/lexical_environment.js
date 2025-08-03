// Lexical environment is local memory along with lexical environment of its parent. 

// 1st example
function a(){
    console.log(b);
}
var b  = 10;
a();

// 2nd example
function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b = 10;
a();

// 3rd example
function a(){
    var b = 20;
    c();
    function c(){
        
    }
}
a();
console.log(b); // this gives error because b is not defined in the global scope


// 4th example 
// Scope chain 
function a(){
    let b = 20; // local memory of a
    
function c(){
        function d(){
            console.log(b); 
        }
         // this is allowed because d is defined in the scope of c
    }
    c();
    
}
a();
