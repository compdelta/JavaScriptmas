// Domain Type

// From array of domains, return array of domain types.

function domainType(domains) {
    let topLevelArray = []
    let resultsArray = []

    function returnType(array) {
        for (let j = 0; j < array.length; j++) {
            switch(array[j]) {
                case "com":
                    resultsArray.push("commercial");
                    break;
                case "org":
                    resultsArray.push("organization");
                    break;
                case "net":
                    resultsArray.push("network");
                    break;
                case "info":
                    resultsArray.push("information");
                    break;
            }
        }
    }

    for (let i = 0; i < domains.length; i++) {
        let tempSplit = domains[i].split(".")
        topLevelArray.push(tempSplit[tempSplit.length-1])
    }

    returnType(topLevelArray)
    return resultsArray
}