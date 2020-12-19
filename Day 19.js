// Alphabet Subsequence
// Check whether the given string is a subsequence of the plaintext alphabet.

function alphabetSubsequence(str) {
    let codeArray = []
    for (let i = 0; i < str.length; i++) {
        if (!codeArray.includes(str.charCodeAt(i))) {
            codeArray.push(str.charCodeAt(i))
        } else {
            return false;
        }
    }
    if (codeArray.sort(function(a,b){return b-a}) == codeArray) {
        return true;
    } else {
        return false;
    }
}
