// hello(wait)
// function hello(callback){
//     console.log("Hello");
//     callback()
// }

// function wait(){
//     console.log("Waiting");
// }

sum(diplayinginthepage,1,2)
function sum(callback,x,y){
    let result=x+y
    callback(result)
}

function display(result){
    console.log(result);
}

function diplayinginthepage(result){
    document.getElementById('displaying').textContent=result
}