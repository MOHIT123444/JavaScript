const Developer ={
    name: "Mohit Raj Purohit",
    age: 22.6,
    gender: "Male",
    occupation: "Software Developer",
    skills: ["DevOps","TypeScript","SQL", "MongoDB", "C++", "Java","Python"]

}
console.log(Developer["name"]); // use " " when calling property of object other wise property treated like an variable not string and throws arr
console.log(Developer.age); // other wise use . operator
console.log(Developer.name);