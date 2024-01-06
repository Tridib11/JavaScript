// let username;
// username=window.prompt("What is your username?")
// console.log(username);

// document.getElementById("name").textContent=`Your name is ${username}`

let username;
document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("name").value
    // console.log(username);
    document.getElementById("myh1").textContent=`Hello ${username}`
}