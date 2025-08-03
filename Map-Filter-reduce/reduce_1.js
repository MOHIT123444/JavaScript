// Reduce function is use when I have to iterate over all the elements of arr and want a single out put like max no from arr, min no, sum of array etc where using whole array I on;y get one value.

// Normal function to findout the max element from an array
function findMax(arr){
    let max  = 0;
    for(let i = 0;i<arr.length;i++){
if(arr[i]>max){
    max = arr[i];
}
    }
    return max;

    
}
let arr = [5,6,3,4];
console.log(findMax(arr));  

// using Reduce to find out max element in an arr 

const output = arr.reduce(function(max,current){
    if(current > max){
        max  = current;
    }
    return max;
},0);

console.log(output);
 // this reduce method takes two arguments :  max that is the current max value and the current which is the current value in an array so current will iterate over the array from 0 to arr.length and constantly checking the max value and comparing it and whenever the current value(element of array) is greater than max value max value override by current value and so on and finally we get the largest number..





 const user = [
    {firstName: "Mohit", LastName: "RajPurohit",  age: 22},
    {firstName: "Donald", LastName: "RNi kaf rha  na wo",  age: 19},
    {firstName: "Arinish giri",  LastName: "RNi kaf rha  na wo",  age: 23},
    {firstName: "deepika", LastName: "Padukone",  age: 45}


        
 ];

 const output_1 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]
    }else{
        acc[curr.age] = ++acc[curr.age];
    }
    return acc;
},{});

