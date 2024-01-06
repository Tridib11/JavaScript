const pi=3.14
let radius;
let circumference;
// radius=window.prompt("Enter the radius of the circle")


document.getElementById("button").onclick=function(){
    radius=document.getElementById("radius").value
    radius=Number(radius)
    circumference=2*pi*radius
    document.getElementById("result").textContent=circumference+" cm";

}