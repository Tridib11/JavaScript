/*map = accepts a callback and applies that function
to each element of an erray, then return a new array
the major difference between map and forEach is that
the map just c
*/

let number=[1,2,3,4,5].map(squ)
let newArray=number.map(square)
console.log(newArray);
function square(element){
    return Math.pow(element,2) 
}