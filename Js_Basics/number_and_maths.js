const score=400
console.log(score);


//for explicitly definening that it is a number
const balance=new Number(100)
console.log(balance);


console.log(balance.toString());
console.log(balance.toFixed(2));//for till 2 decimal points 100.00

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));//gives roundoff value 23.9

const hundreds=1000000
console.log(hundreds.toLocaleString('en-in'));//10,00,000


//+++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));//positive stays positive but negative changes to positive

console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) //a formula from a range to a range :)