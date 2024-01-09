/*forEach()= method used to iterate over the elements
of an array and apply a specified function (callback)
to each element array.forEach(ca11back)  element, index, array are provided*/

let numbers=[1,2,3,4,5]
numbers.forEach(display)
function display(element){
    console.log(element);
}
console.log(numbers);