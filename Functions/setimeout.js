console.log("Start"); // first this code inn executed
setTimeout(function cb(){ // this function with timer registered in Web Api environment and timer is start
    console.log("Callback"); 
},5000);

console.log("End"); // second this one is printed


let startDate = new Date().getTime(); // get latest time in miliseconds
let endDate = startDate;
while(endDate < startDate+10000){ // this while loop end after 10 seconds so basically thi delays the cb function to executed after 10 seconds instead of 5 sec as per the timer because global execution context (GEC) which is reponsible for the whole code execution in call stack takes 10 seconds to exxecute whole code till cb() function  only waits in call stack queue wait for the call stack emepty when GEC execute whole code popped out then call stack empty and cb() function goes in callstack and immeditaly executed. 
    // that's why we should not block the main thread


    endDate = new Date().getTime();
}

console.log("While Expired");