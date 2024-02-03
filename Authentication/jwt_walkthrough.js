const fs=require("fs")
const jwt=require("jsonwebtoken")

const secret="superSec"

let answer=jwt.sign({
    userName:"Tridib",
    password:"123456"
},secret)
console.log(answer)

jwt.verify(answer,secret,(err,orginalString)=>{
    console.log(orginalString)
})

/*
In short, the "secret" in JSON Web Tokens (JWT) is a confidential key used to create and verify a signature, ensuring the integrity and authenticity of the token. It's crucial for security, and only parties with the correct secret key can validate or generate valid JWTs.
*/