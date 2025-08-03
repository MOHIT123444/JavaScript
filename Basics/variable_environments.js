let a = 10;
function print(){
    let x = 20;
    console.log(x); // 20
}

console.log(a); // 10
console.log(x); // ReferenceError: x is not defined
// this is because value in function is the seperate execuion context of function which is not accessible outside the function and global exxecution context as well. Means variable envrionment of function is different from the global variable environment. So, if we want to access the variable x outside the function, we need to declare it in the global scope.