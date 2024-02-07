const jwt = require("jsonwebtoken");
//decode,verify,generate

const value = {
  name: "Tridib",
  accountNumber: 123345,
  email: "tugrp@example.com",
};

//const token=jwt.sign(value,"tridib")
const token = jwt.verifiedvalue(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJpZGliIiwiYWNjb3VudE51bWJlciI6MTIzMzQ1LCJlbWFpbCI6InR1Z3JwQGV4YW1wbGUuY29tIiwiaWF0IjoxNzA3Mjk4NDIwfQ.CVlcWrYOevozt0vAQOCo0afNRS_eAyxzfSJuO1zcNsA",
  "tridib",
);
console.log(verifiedvalue);

// this token has been generated using this secret, and hence this token can only be verified using this secret
