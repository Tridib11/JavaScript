//A funtion that takes a function as an arguement


function add(a,b,cb){
    let result=a+b
    cb(result)
}

function printResult(val){
    console.log(val);
}

add(2,4,printResult)

//or

add(2,4,(result)=>console.log(result))
add(254,2,(result)=>console.log(result))

