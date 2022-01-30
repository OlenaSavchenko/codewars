
// --------Code----------------
function equal5(v1, v2) {
    var a = v1   //set number value to a
    var b = v2   //set number value to b
    console.log(a % b);
    return a % b;
}

equal5(100, 200)

// --------Code----------------
function persistence(num) {
    function multiply(result) {
        return result.reduce(function (a, b) { return a * b; });
    }
    let count = 0;
    while (num.toString().length > 1) {
        num = num.toString().split("");
        num = multiply(num);
        count++;
    }
    return count;
}
persistence(39)
// --------Code----------------
function getParticipants(handshakes) {
    if (!handshakes) return 1
    let result = 0;
    let sum = 0
    while (handshakes > sum) {
        sum = result * (result + 1) / 2;
        result++;
    }
    return result;

}

getParticipants(12)
// --------TASK 5----------------
function getScore(n) {
    let k = 0;
    return function inner() {
        k = k + n
        console.log(k + n);
        console.log(k);
        return k
    }

}
let test = getScore(50);
test(1)
test(2)
test(3)



