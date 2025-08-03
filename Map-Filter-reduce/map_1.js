// Map is used to transform Each element in an Array
const arr = [1,2,3,4,5];
function double(x){
return x*2;
}
function triple(x){ 
    return x*3;
}
function binary(x){
    return x.toString(2);
}
const output =arr.map(double); 
    //OR
    const result = arr.map((x) =>  x.toString(2)); // pasing arrow function for binary transformation of the each element of array.
console.log(output);
console.log(result);
 // Here I declare an arr and I have to tranform this array and want  to double the elements of this arr. So I use map for this. So here what I need a function which is call for each and every elements of the arr and return the output okay. So in arr.map(double) i pass the double function in the map function so map is a high order functions and double acts as call back function and due to map double function takes the each and every elements as argument and perform the logic and gives me the output which is double and hence I get the each and every element as doubled okay.
 