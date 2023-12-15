function printToScreen(){
    console.log("Print to Screen Called");
}

setTimeout(printToScreen,3*1000)//Asynchronus Stuff(Parralelised)
let counter=0
for(let i=0;i<1000;i++){
    counter+=i;
}
console.log(counter);