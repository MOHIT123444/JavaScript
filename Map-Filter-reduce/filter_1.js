// filter function  used to filter the values inside an array
const arr = [5,4,3,7,8];
  // filter odd number for this array
   const oddnum  =  arr.filter((x) => x%2);  //  when the even number goes as argument then the value is 0 and 0 is a falsy value thus this function return falsy value in a even nnumber argument and thus even no. not prints and odd prints okay.
   console.log(oddnum);

   const evennum = arr.filter((x)=> x%2 ===0); // as even number goes as an arguement function check the 0 === 0 thus true return true and wg get all even elements from an array.

   // In this way using filter function we just filter out the values/elements froma an array based on the filter logic we wrote.
   console.log(evennum);





   