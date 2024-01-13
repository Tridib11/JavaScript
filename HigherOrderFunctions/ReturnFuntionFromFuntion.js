function add(a,b,cb){
    let result=a+b
    cb(result)

    return ()=>console.log(result);
}

let resultFunc=add(2,4,()=>{})
resultFunc();
