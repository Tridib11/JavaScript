const number=[1,2,3,4,5,6]
function double(n){
    return n*2;
}
//let newArr=number.forEach(double)
let newArr=number.map(double)
console.log(newArr);

//ForEach is for some printing perposes or some internal task doesnot returns anything
//Map returns a new array

