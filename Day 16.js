// Insert Dashes

// Transform a given sentence into a new one with dashes between
// each two consecutive letters (i.e. preserving spaces).

function insertDashes(arr) {
    let sectionArray = []
    let splitInput = arr.split(" ")
    for (let i = 0; i < splitInput.length; i++) {
        sectionArray.push(splitInput[i].split("").join("-"))
    }
    return sectionArray.join(" ")
}