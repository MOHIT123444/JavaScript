// let arr= [1,2,3,4,5];

//     for(let num of arr){ // for of loop system for printing every eleemnt of an arry
//         console.log(num);
//     }

// let cities = ["Delhi", "Jaipur", "Gurgaon", "Noida", "Bangolore"];
// for(let city of cities) {
//     console.log(city.toUpperCase());
// }

//average marks of class 

// let marks = [20,40,50,39,45,55,43,34];
// let marks = [1,1,1,1,1,1];

// let sum = 0;
// for(let val of marks){ 
//     sum += val;
// }
// // console.log("total sum of marks:",sum);
// let avg= sum/marks.length;
// console.log(`Average marks are = ${avg}`);


// Question : For a given arr of prices there is 10% off on evvery prices store in arr so update the price of arr with discounted price

// let price = [250, 645,300, 900, 50];
// let discount = 10;  // 10 percent  discount

// for(let finalprice of price ) {
//     // let discountprice =  finalprice-(discount/100);
//     // console.log(`Discounted price is ${discountprice}`);
//     console.log(finalprice - (finalprice/discount));

   
// }

// Different array methods

//1. Push()

let food = ["Tomato", "Chips", "lichiy"];
food.push("apple"); // add element in array at last .. and this method change in original element
console.log(food);

// 2. pop()
let deleteditem = food.pop(); // pop delete end element from original array. While storing in a container shows deleted item. 
console.log(deleteditem);

//3. toString()
let marks = [23,56,67,45,78];
console.log(marks.toString()); // toString return a new array that is converted into string. 

//4. Concat() --> joins multiple arrays and return result

let marvelheroes = ["Captain America","iron man", "spiderman"];
let dcheroes = ["Superman", "Batman"];
let indianheroes = ["Shaktiman", "Krish"];

let heroes = marvelheroes.concat(dcheroes, indianheroes); //
console.log(heroes);

//5. Unshift --> add element at starting index

 marks.unshift(89); // element at first index 
console.log(marks);

//6. Shift --> remove element from starting index 
let val = marks.shift();
console.log("deleted elemeent from marks is :",val); // this shows which item is deleted
console.log(marks);







