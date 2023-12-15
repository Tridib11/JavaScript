"use strict";
function count(first,last){
    var sum=0;
    for(let i=first;i<=last;i++){
        sum+=i;
    }
    return sum;
}
function printToScreen(){
    console.log("10 seconds have passed");
} 
setTimeout(printToScreen,10*1000);//when you want to delegate a task of telling the main thread that amount of tasks have passed . This is the power of call backs that when you pass a funtion it as a power to call back the orginal function of x number of seconds thats what the set timeout function do
var ans=count(1,1000)
console.log(ans);