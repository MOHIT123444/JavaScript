

// behavioyus of this settime out + closures when let is used

function x(){
    for(let i = 0; i < 5; i++){
        setTimeout(function(){
        console.log(i);
    },i*1000);

    }
    console.log("Namaste Mohit");
}
x();

// behavioyus of this settime out + closures when var is used

function x(){
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
        console.log(i);
    },i*1000);

    }
    console.log("Namaste Mohit");
}
x();


// behaviour of var and let in for loop 
function z(){
    for(var i = 0; i < 5; i++){
        
        console.log(i);
    };

    
}

// using let in for loop

function z(){
    for(let i = 0; i < 5; i++){
        
        console.log(i);
    };

    
}

/// if have to print 0 to 4 in in using var then this is how:
function z(){
    for(var i = 1; i<=5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log("Namaste Mohit");
}
z();