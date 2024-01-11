// 4. This keyword 


// In normal js function syntax its referring to the local object


// const obj={
//     value:20,
//     myFunction:function(){
//         console.log("The value is "+this.value);
//     }
// }
// obj.myFunction()


//This keyword in ArrowFunction  wll give value is undefined
//because it considers the window object

const obj={
    value:20,
    myFunction:test=()=>{
        console.log("The value is "+this.value);
        console.log(this);
    }
}
obj.myFunction()