const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

//zod schema
const emailSchema = zod.string().email();
const paswordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = paswordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    const signature = jwt.sign({ username }, jwtPassword);
    return signature;
}

function verifyJwt(token) {
    let ans = true
    try {
        jwt.verify(token, jwtPassword);
    } catch (e) {
        ans = false
    }
    return ans;
}

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

//const ans=signJwt("oqibz@example.com","123456")

console.log(
    verifyJwt(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9xaWJ6QGV4YW1wbGUuY29tIiwiaWF0IjoxNzA3Mjk5OTE5fQ.k8TLd6aqaGR2phQwRNQeGseYuJLMh3ruOYbMYgD1RWY",
        jwtPassword,
    ),
);
