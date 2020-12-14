// Candies

function candies(children, candy) {
    return Math.floor(candy / children) * children
}


// Deposit Profit

function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let balance = deposit;
    while (balance < threshold) {
        balance = balance / 100 * (100 + rate)
        year++
    }
    return year
}


// Chunky Monkey

function chunkyMonkey(values, size) {
    let newArray = []
    let chunks = Math.floor(values.length / size)
    for (let i = 0; i < chunks; i++) {
        newArray.push(values.splice(0, size))
    }
    if (values.length % size != 0) {
        newArray.push(values.splice(0, values.length))
    }
    return(newArray)
}


// Century From Year

function centuryFromYear(num) {
    if (num % 100 == 0) {
        return (Math.floor(num/100))
    } else {
        return (Math.floor(num/100)+1)
    }
}


// Reverse a String

function reverseAString(str) {
    return str.split("").reverse().join("")
}


// Sort By Length

function sortByLength(strs) {
    return(strs.sort(function(a,b){return a.length-b.length}))
}


// Count Vowel Consonant

function countVowelConsonant(str) {
    let count = 0;
    const vowels = "aeiou";
    for (let i = 0; i < str.length; i++)   {
        if (vowels.includes(str[i])) {
            count = count + 1;
        } else {
            count = count +2;
        }
    }
    return count
}