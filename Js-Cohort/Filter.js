function higherOrder(arr, callback) {
    return callback(arr);
}

function usingFilterFunction(arr) {
    const filter1 = arr.filter(x => x % 2 === 0);
    return filter1;
}

const arr = [1, 2, 3, 4, 5];
var answer = higherOrder(arr, usingFilterFunction);
console.log(answer);
