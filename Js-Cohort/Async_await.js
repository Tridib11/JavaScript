//Normal promise syntax
// function AsyncFunction(){
//     let p=new Promise(function(resolve){
//         resolve("hi there")
//     })
//     return p
// }
// function main(){
//     AsyncFunction().then(function(value){
//         console.log(value);
//     })
// }
// main();


//Async/Await Syntax  (new way of using promises)

function AsyncFunction(){
    let p=new Promise(function(resolve){
        resolve("hi there")
    })
    return p
}
async function main(){
    const val=await AsyncFunction()
    console.log(val);
    }
main();