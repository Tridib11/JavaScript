/*
spread operator = allows an iterable such as an
array or string to be expanded
into seperate elements
(unpacks the elements)
*/
let numbers=[1,2,3,4,5,6]
let max=Math.max(numbers)
console.log(max); // NaN

let maxSpread=Math.max(...numbers)
console.log(maxSpread);//6

let userName="Ramaya"
console.log(...userName)
let letters=[...userName].join("")
console.log(letters)