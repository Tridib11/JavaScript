function getDayOfMonth(){
    const date= new Date();
    return date.getUTCDate();
}
function higherOrderAsync(callback){
    setTimeout(callback,getDayOfMonth()*1000);
}
function printText(){
    console.log("Success");
}

higherOrderAsync(printText)