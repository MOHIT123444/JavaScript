let MyDate = new Date();
console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toJSON());
console.log(MyDate.getUTCFullYear());
console.log(MyDate.toISOString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleString());
console.log(typeof MyDate);
console.log(MyDate.getDate());
console.log(MyDate.getMonth());
console.log(MyDate.getTime());
console.log(MyDate.getHours());
console.log(MyDate.getMinutes());
console.log(MyDate.getSeconds());






let NewDate =  new Date(2025,0,15);
console.log(NewDate);
console.log(NewDate.toDateString());
console.log(NewDate.toString());

let MyCreatedDate = new Date("2025-01-14"); // in such a way we can add date format as well. like new Date("01-14-2025")
console.log(MyCreatedDate.toLocaleString());
console.log(Date.now());

console.log(`Today is ${MyDate.getDay()}`);


NewDate.toLocaleString('default', {
    weekday : "long",
})











