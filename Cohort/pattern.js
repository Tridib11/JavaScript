// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 2 * i; j++) {
//         process.stdout.write("*");
//     }
//     console.log(); // Add a newline after each row
// }

//orr

//time taken

var startTime=new Date().getTime();
var star = starryPattern(10);
console.log(star);

function starryPattern(n) {
    var result = "";
    for (var i = 1; i <= n; i++) {
        result += printStar(i,n);
    }
    return result;
}

var endTime=new Date().getTime();

console.log((endTime-startTime)/1000 +"s");
function printStar(i,n) {
    var answer = "";
    for (let j = 0; j < i; j++) {
        answer += "**";
    }
    if (i !== n) {
        answer += "\n"; // Add a newline character if it's not the last iteration
    } // Add a newline character after each row
    return answer;
}
