function StringCalculate(str){
    //  ** represent exponention 
    /* 
    For example : str =  "(2+(3-1)*3)**2" so output should be : 512
    ANother example :  str = (2-0)/(6/2) output should be 6
    as per the arithmetic rules we have to calculate the expression in the brackets first and then we have to calculate the expression outside the brackets.

    */
    let processedStr = str
        .replace(/(\d)(\()/g, '$1*$2')    // Add * between digit and (  .replace(/(/d)(\()?g, `$1*$2))  
        .replace(/(\))(\d)/g, '$1*$2')    // Add * between ) and digit  .replace(/(/d)(\()?g, `$1*$2)
        .replace(/(\))(\()/g, '$1*$2');   // Add * between ) and (      .replace(/(/d)(\()?g, `$1*$2) 

        try{
            const result = eval(processedStr);
            return Number.isInteger(result)?
            result:Math.floor(result);
        } catch(e){
            return 0;
        }
   // Replace ** with ^ for exponentiation 
}
let final  = StringCalculate("(2+(3-1)*3)**2");
console.log(final); // 512