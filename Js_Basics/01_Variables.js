const accountId=14455
let accountEmail="test@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
//Give a (;) or don't doesn't really matter

let accountState //when not assigned gives undefined

// accountId=2 //not allowed

accountEmail="hc.com"
accountPassword="212121"
accountCity="BLR"
console.log(accountId);

/*
Prefer Not to use var : Because of issue in Block Scope and in functional Scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])