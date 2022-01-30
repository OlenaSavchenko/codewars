
const obj = {
    name: "Ivan",
    "last name": "Rice",
    array: [{ 1: "one" }, { 2: "two" }],
    tabel: {
        history: 12,
        biology: 12,
        mathematics: 8,
        physics: 9,
        geography: { a: 85, b: { c: 89, d: 7 }, e: 71 },
    },
};

const cloneObjWithArr = (obj) => {
    const newObj = {}
    for (const key in obj) {
        //typeof "null" is obj, we need to exclude it
        if (typeof obj[key] === "object" && obj[key] !== null) {
            newObj[key] = cloneObjWithArr(obj[key])
        }
        newObj[key] = obj[key]

    }
    return newObj
}



// const clonedObj = cloneObj(obj);
// console.log("Object", obj);
// console.log("Cloned object", clonedObj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

console.log('cloneObjWithArr', cloneObjWithArr(obj));

const promise = new Promise((resolve, reject) => {

})
console.log(promise);

const obj1 = {
    formats: [
        { name: 'Paper books', isChecked: true },
        { name: 'Ebooks', isChecked: false },
        { name: 'Audio books', isChecked: false }
    ],
    genres: [
        { name: 'Business literature', isChecked: false },
        { name: 'Non-fiction', isChecked: false },
        { name: 'Adventures', isChecked: false }
    ],
    maxPrice: 500,
    minPrice: 182,
    searchString: ''
}
const getValues = (obj) => {
    const values = []
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            for (const el of obj[key]) {
                if (el.isChecked) {
                    values.push({ [key]: el.name.trim().toLowerCase().replace(' ', '-') })
                }
            }
        }
        else {
            values.push({ [key]: obj[key] })
        }

    }
    return values;
}

getValues(obj1)

const formString = (arr) => {
    let fStr = ''
    let gStr = ''
    let maxPriceStr = ''
    let minPriceStr = ''
    let searchStr = ''
    arr.forEach(element => {
        for (const key in element) {
            if (key === "formats") {
                fStr += `${element[key]},`
            }
            if (key === "genres") {
                gStr += `${element[key]},`
            }
            if (key === "maxPrice") {
                maxPriceStr = `${key.toLowerCase()}=${element[key]}`
            }
            if (key === "minPrice") {
                minPriceStr = `&${key.toLowerCase()}=${element[key]}`
            }
            if (key === "searchString") {
                element[key] !== "" ? searchStr = `&${key.toLowerCase()}=${element[key]}` : ''
            }

        }
        const genreStr = gStr !== "" ? `genre=${gStr.slice(0, -1)}&` : ""
        const formatStr = fStr !== "" ? `categories=${fStr.slice(0, -1)}&` : ""
        const queryStr = genreStr + formatStr + maxPriceStr + minPriceStr + searchStr
        console.log(queryStr);
        return queryStr;
    });

}


formString(getValues(obj1));
