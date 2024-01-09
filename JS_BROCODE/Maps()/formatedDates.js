const dates=["2024-1-10","2025-2-20","2026-3-30"]
const newDates=dates.map(formatedDates)
console.log(newDates);
function formatedDates(element){
    const parts=element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}