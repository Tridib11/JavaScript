var counter=1;
function printAndIncrease(){
    console.clear()
    console.log(counter);
    counter+=1;
    setTimeout(printAndIncrease,1*1000);
}
setTimeout(printAndIncrease,1*1000);
//or

// setInterval(printAndIncrease,1000);

//or

// for(let i=0;i<=1000;i++){
//     setTimeout(printAndIncrease,(i+1)*1000);
// }