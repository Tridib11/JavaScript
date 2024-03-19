function runAfter1Sec(fn:()=>void){
    setTimeout(fn,1000)
}

runAfter1Sec(function(){
    console.log("Hi there");
    
})