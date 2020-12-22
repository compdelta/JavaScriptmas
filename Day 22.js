// Extract Matrix Column

function extractMatrixColumn(matrix, column) {
    let returnArray = [];
    for (let array of matrix) {
        returnArray.push(array[column]);
    }
    return returnArray;
}