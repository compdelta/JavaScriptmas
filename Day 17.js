// Different symbols naive
// Given a string, find the number of different characters in it.

function differentSymbolsNaive(str) {
    let stringArray = str.split("")
    let uniqueArray = []
    for (let i = 0; i < stringArray.length; i++) {
        if (!uniqueArray.includes(stringArray[i])) {
            uniqueArray.push(stringArray[i]);
        }
    }
    return uniqueArray.length;
}
