const button=document.getElementById("search-button")
const input=document.getElementById("city-input")
const cityName=document.getElementById("city-name")
const cityTime=document.getElementById("city-time")
const cityTemp=document.getElementById("city-temp")
async function getData(cityName){
    const promise=await fetch(
       `https://api.weatherapi.com/v1/current.json?key=94cb97f2ffb240a1a5b225045241601&q=${cityName}&aqi=yes#`
    )
    return await promise.json()
}
button.addEventListener('click',async ()=>{
    const value=input.value
    const result=await getData(value)
    cityName.innerText=`${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText=result.location.localtime
    cityTemp.innerText=result.current.temp_c
})