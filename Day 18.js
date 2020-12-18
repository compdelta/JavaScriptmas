// Array previous less

// Given an array of integers, for each position i, search among
// the previous positions for the last (from the left) position
// that contains a smaller value. Store that value at position i
// in the answer. If no such value can be found, store -1 instead.


// The challenge suggests we should use unshift but I think it's
// simpler to use push. Anyway, here it is with push:

function arrayPreviousLess(nums) {
    resultArray = [-1]
    for (let i = 1; i < nums.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                resultArray.push(nums[j]);
                break;
            }
            if (j == 0) {
                resultArray.push(-1)
            }
        }
    }
    return resultArray
}


// And here it is with unshift:

function arrayPreviousLess(nums) {
    let resultArray = []
    for (let i = nums.length-1; i >= 0; i--) {
        if (i == 0) {
            resultArray.unshift(-1);
            break;
        }
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                resultArray.unshift(nums[j]);
                console.log(resultArray)
                break;
            }
            if (j == 0) {
                resultArray.unshift(-1);
            }
        }
    }
    return resultArray
}