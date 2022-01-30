// --------Code----------------
function alienLanguage(str) {
    const result = str.split(' ')
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].slice(0, result[i].length - 1).toUpperCase() + result[i][result[i].length - 1].toLowerCase();
    }
    return result.join(" ")
}
alienLanguage("My name is John")
// --------Code----------------
function longest(s1, s2) {
    return result = [...new Set(`${s1}${s2}`)].sort().join('')
}
longest("inmanylanguages", "theresapairoffunctions")
// --------Code----------------
function grabDoll(dolls) {
    var bag = [];

    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue
        bag.push(dolls[i])

        if (bag.length >= 3) break
    }

    return bag;
}

grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white", "Hello Kitty", "Hello Kitty", "Hello Kitty"]);
// --------Code----------------
function solve(s) {
    for (let i = Math.floor(s.length / 2); i > 0; i--) {
        let prefix = s.slice(0, i);
        let suffix = s.slice(-i);
        if (prefix == suffix) { return i }
    }
    return 0
}
console.log(solve("abcdabc"));
// --------Code----------------
function splitAndMerge(string, separator) {
    const newStr = string.split('')
    return newStr.join(separator)
}

console.log(splitAndMerge("My name is John", " "));

const cutLastLetter = (str) => {
    const newStr = str.slice(0, -1)
    return newStr
}

console.log(cutLastLetter('names'));


const returnLetters = (str) => {
    let letters
    let num
    if (str.length % 2 === 0) {
        num = str.length / 2
        letters = `${str[num - 1]}${str[num]}`

    }
    else {
        num = Math.floor(str.length / 2)
        letters = str[num]
    }
    return letters
}
console.log(returnLetters("abcvbba"));
console.log(returnLetters("1234"));

function solution(str) {
    let result = []
    if (!str.length) {
        return result
    }
    result = str.match(/.{1,2}/g);
    if (str.length % 2 !== 0) {
        result[result.length - 1] = result[result.length - 1] + "_"
    }
    return result;
}

solution("")