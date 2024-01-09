/*reduce the elements of an array
to a single value */

const prices=[5,30,10,25,15,20]
const total=prices.reduce(sum)
console.log(`Rs ${total.toFixed(2)}`);
function sum(previous,next){
    return previous+next
}