function EquivalentKeyPresses(strArr) {
  // read the array
  function getFinalString(sequence){
    const stack = [];
    const keys =  sequence.split(',');
    for(let key of keys){
      if(key === '-B'){
        stack.pop();
      } else  {
        stack.push(key);
      }
    }
    return stack.join('');
  }
  const [first,second] = strArr;
  return getFinalString(first) === getFinalString(second) ? "true" : "false";
}