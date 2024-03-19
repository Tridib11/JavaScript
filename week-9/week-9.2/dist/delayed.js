"use strict";
function runAfter1Sec(fn) {
    setTimeout(fn, 1000);
}
runAfter1Sec(function () {
    console.log("Hi there");
});
