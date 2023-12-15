let counter=1;
let counter2=1;
function printCounter(){
    console.log(counter);
    counter+=1;
}
setInterval(printCounter,1000);

for(let i=0;i<1000;i++){
    counter2+=1
}
console.log(counter2);