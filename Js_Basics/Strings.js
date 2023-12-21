const name="Tridib"
const repo=50
console.log(`Hello my name is ${name} and my repo cout is ${repo}`); //String interpolation
//another way to implement String is
const gameName=new String('Tridib')
console.log(gameName[0]);
console.log(gameName.__proto__); //{}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString= gameName.substring(0, 4)
console.log(newString);


const anotherString= gameName.slice(-8, 4)
console.log(anotherString) ;



const newName="       Tridib  "
console.log(newName);
console.log(newName.trim());

const str="triidib/is/coding"
console.log(str.split('/'));