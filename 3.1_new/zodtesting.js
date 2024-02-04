
const zod=require("zod")

//if this is an array of number with atleast 1 input,return true, else return false

function validateInput(arr){
    const schema=zod.array(zod.number())
    const response=schema.safeParse(arr)
    console.log(response);
}

validateInput(["1",2,3])