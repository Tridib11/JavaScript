let number=[1,2,3,4,5]
number.forEach(tripple)
number.forEach(display)
// function double(element){
//     console.log(element*2);
// }

//or
console.log(number);

function double(element,index,array){
    array[index]=element*2
}
function tripple(element,index,array){
    array[index]=element*3
}
function display(element){
    console.log(element);
}
console.log(number);