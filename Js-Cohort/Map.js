// const array=[1,2,3,4,5]
// const map1=array.map(x=>x+1)
// console.log(map1);



function higherOrder(arr,callback){
    return callback(arr)
}
function usingMapFunction(arr){
    const map1=arr.map(x=>x+1);
    return map1;
}
const arr=[1,2,3,4,5]
var answer=higherOrder(arr,usingMapFunction);
console.log(answer);