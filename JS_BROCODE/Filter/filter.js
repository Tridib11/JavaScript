/* creates a new array by filtering
out elements */

let numbers=[1,2,3,4,5,6,7,7,8]
let evenNum=numbers.filter(isEven)
console.log(evenNum);
function isEven(element){
    return element%2===0;
}