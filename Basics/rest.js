// Rest parameter (...)
function extractingArgs(...args){
    return args[1];
}

function addAllArgs(...args){
    let sumofArgs = 0;
    let i =0;
    while(i< args.length){
        sumofArgs += args[i];
        i++;
    }
    console.log( sumofArgs);

}

addAllArgs(6,7,99);
addAllArgs(6,7,99);
addAllArgs(6,7,56738,390,28);
