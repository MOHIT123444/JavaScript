const name = "Mohit";
const repocount = 50;

// console.log(name + repocount + "Great"); // this is outdated way  

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //In modern days this syntaz is going to be used more by developers and as I'm developer then I should start using this .  This is called as string interpolation. 

const gameName = new String("Mohitdev");
console.log(typeof gameName);
console.log( gameName);
console.log( gameName.length);
console.log(gameName.__proto__); // actually here in output we got emtpy curly braces but this proto is not empty. If we want to see all prototype of string then run this syntax on chrome console where all prototypes are visible. 

console.log(gameName[0]);
console.log(`length of the string name that contains a word Mohit is ${name.length}`);

console.log(`here the upper case version of the word Mohit is : ${name.toUpperCase()}`);

console.log(name.toLowerCase());

console.log(`Here is the definition of chatAt and index Of:-`);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));4

const newString = gameName.substring(5,8);
console.log(`Here is the substring of Mohitdev ==>  ${newString}`);











