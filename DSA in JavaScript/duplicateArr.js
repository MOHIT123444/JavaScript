function duplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length - 1; j > i; j--){
            if(arr[i] === arr[j]){
                console.log(i,j);
                
            }
            if(i === j){
                return -1;
            }
            if(arr[i] !== arr[j]){
                return -1;
            }
        }
        
}
}
let arr = [1,1, 3, 4, 5, 6, 7, 8, 9, 10];
let result = duplicate(arr);
console.log(result); // Output: -1