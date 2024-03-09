const jwt=require("jsonwebtoken")
const secret="sup3rs3cr3t1"
let ans=jwt.sign({
  username:"harsh",
  password:"harsh123"
},secret)

console.log(ans)
jwt.verify(ans,secret,(err,originalString)=>{
  console.log("adsasd")
  console.log(originalString)
})
