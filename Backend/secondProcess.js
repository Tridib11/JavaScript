function logResponseBody(jsonBody){
    console.log(jsonBody);
}
function callbackFn(result){
    // console.log(result);
    result.json().then(logResponseBody)
}
var sendObj={
    method:"GET"
};

fetch("http://localhost:3000/?counter=7",sendObj).then(callbackFn)
