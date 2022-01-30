// --------Code----------------
function findEvenIndex(arr) {
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
        if (sum === leftSum) {
            return i

        }
        leftSum += arr[i];
    }
    return -1;
}

const arr = [1, 2, 3, 4, 3, 2, 1]

findEvenIndex(arr)
// --------Code----------------
function pushElement(arr) {
    var el = 1;
    //push el to arr
    arr.push(el)
    return arr.length
}
function popElement(arr) {
    //pop an element from arr
    arr.pop()
    console.log(arr.length);
    return arr.length
}

pushElement([1, 2, 3])
popElement([1, 2, 3])

// --------Code----------------
function pickIt(arr) {
    var odd = [], even = [];
    for (let i = 0; i <= arr.length - 1; i++) {

        arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])

    }
    return [odd, even];
}
pickIt([1, 2, 3, 4, 8, 1])

// --------Code----------------
function cutIt(arr) {
    const shortestStrLength = arr.reduce((acc, str) => acc.length < str.length ? acc.length : str.length, arr[0])
    console.log(shortestStrLength);
    const newArr = arr.map(string => string.substr(0, shortestStrLength))
    return newArr
}
console.log(cutIt(["abcc", "cfg", "fg"]));
// --------Code----------------
function giveMeFive(obj) {
    const arr = []
    for (key in obj) {
        if (key.length === 5) {
            arr.push(key)
        }
        if (obj[key].length === 5) {
            arr.push(obj[key])
        }

    }
    return arr
}

giveMeFive({ Our: "earth", is: "a", beautyful: "world" })
// --------Code----------------
const reverse = (arr) => {
    newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log("reverse", reverse(['one', 'two', 'three', 'four', 'five', 'six']));


const arr1 = [1, 2, 1, 3, 6, 4, 6]


const findDuplicates = (arr) => {
    return arr.filter((el, index, array) => array.indexOf(el) !== index)
}

findDuplicates(arr1)

function queueTime(customers, n) {
    let arr = new Array(n).fill(0);
    for (let customerTime of customers) {
        let idx = arr.indexOf(Math.min(...arr));
        arr[idx] += customerTime;
    }
    const time = Math.max(...arr)
    return time;
}



console.log(queueTime([4, 1, 0, 1], 1));