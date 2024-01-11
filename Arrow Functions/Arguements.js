// 2. 'arguments' keyword

/* argument keywords are those that are use in normla code so accept any number of arguments
    but its not availabe in arrowfunctions

    eg

    var ans=0
    function add1(){
    for(let i=0;i<arguments.length;i++){
        ans+=arguments[i]
    }
    return ans;
}

const answer=add1(1,2,3,4,5,6,6,7)
console.log(answer); //34     
*/

// for arrow functions we use spread operator
var ans=0
const addNumbers=(...nums)=>{
    for(let i=0;i<nums.length;i++){
        ans+=nums[i]
    }
    return ans;
}
let x=addNumbers(1,2,3,4,5,6,6,7)
console.log(x);  //34
