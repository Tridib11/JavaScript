mainFuntion(5)
function mainFuntion(n){
    for(let i=0;i<n;i++){
        if(i==0 || i==n-1){
            printSingleRow(n);
        }
        else{
            partialRow(n);
        }
    }
}
function printSingleRow(n){
    var str="";
    for(let i=0;i<n;i++){
        str+="*";
    }
    console.log(str);
}
function partialRow(n){
    str="";
    str+="*";
    for (let index = 0; index < n-2; index++) {
        str+=" ";        
    }
    str+="*";
    console.log(str);
    
}
