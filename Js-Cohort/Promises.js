function promiseBody(resolve){
    setTimeout(resolve,5000);
}
function medicine1Get(){
    var answer=new Promise(promiseBody)
    return answer
}
function printThing(){
    console.log("Medicine 1 received");
}
var medicinePromise=medicine1Get();
console.log(medicinePromise);
medicinePromise.then(printThing)