// I need to duplicate the arr in the this arr itself;
function duplicateArray(arr){
    return arr.concat(arr);
}
let original = [1, 2, 3, 4, 5];
let duplicated =   duplicateArray(original);
console.log(duplicated);

// Manaul approach whithout useing concat method;
                    // |
                    // |
                    // V
// function reverseAndSwapCase(str){
//     let result = [];
//     for(let i =0;i<arr.length;i++){
//         result.push(arr[i]);
//     }
//     for(let i =0; i<arr.length;i++){
//         result.push(arr[i]);
//     }
//     return result;
// }

// let original = [1, 2, 3, 4, 5];
// let duplicated =   duplicateArray(original);
// console.log(duplicated);