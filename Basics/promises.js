/* pending
fulfilled
rejectted
settled*/

function SumOfThreeElemnts (...elements){
    return new Promise((resolve,rejct) => {
        if(elements.lenght > 3){
            PromiseRejectionEvent("Only three elements are allowed")
        }
        else {
            let sum  = 0;
            let  i =0;
            while(i<elements.length){
                sum += elements[i];
                i++;
            }
            resolve("Sum has been calculated:" + sum);
        }
    })
}

// we can consume any promises by attaching then() and catch() methods to the consumer
/* Then() method is use tonacces the result when the promis is fullfiled

Catch() method is use to access the result/error when the promise is rejected*/