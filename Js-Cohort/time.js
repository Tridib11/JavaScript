function calculateTime(n) {
    let startTime=new Date().getTime();
    let sum=0;
    for(let i=1;i<n;i++){
        sum+=i;
    }
    let endTime=new Date().getTime();
    console.log((endTime-startTime)/1000);
}
calculateTime(100000000000)