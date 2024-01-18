// const arr1=[1,2,3]
// const arr2=[3,4,5]
// const update=[...arr1,...arr2]
const obj={
    "id":1,
    "name":"Rohan",
    "help":"none"
}

const obj2={
    "name":"Tridib"
}

const update={...obj,...obj2}
console.log(update);
/*
For objects, the spread syntax { ...obj, ...obj2 } creates a new object by copying all key-value pairs from both obj and obj2 into the new object. If there are overlapping keys, the values from the second object (obj2 in this case) will overwrite the values from the first object (obj).
*/