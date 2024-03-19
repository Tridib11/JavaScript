"use strict";
function delayedCall(fn) {
    return fn(5, 3); // Calling the function passed to delayedCall with arguments 5 and 3
}
const sumNumbers = (a, b) => a + b; // Define a function to calculate the sum of two numbers
const result = delayedCall(sumNumbers); // Call delayedCall with the sumNumbers function
console.log("The sum of 5 and 3 is: " + result); // Output the result
