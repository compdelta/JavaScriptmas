// Sum Odd Fibonacci Numbers

function sumOddFibonacciNumbers(num) {
    let numArray = [0,1];
    let value = 0;
    let sum = 0;

    // Creating array of Fibonacci numbers up to value of input
    while (value <= num) {
        value = (numArray[numArray.length-1] + numArray[numArray.length-2]);
        if (value <= num) {
            numArray.push(value)
        }
    }
    // Checking array & returning sum of odd numbers
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 != 0) {
            sum = sum + numArray[i]
        }
    }
    return(sum)
}


// Adjacent Elements Product

function adjacentElementsProduct(nums) {
    let largestProduct = 0;
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] * nums[i+1] > largestProduct) {
            largestProduct = nums[i] * nums[i+1]
        }
    }
    return largestProduct
}


// Avoid Obstacles

function avoidObstacles(nums) {
    nums.sort(function(a,b){return a-b});
   
   let interval = 2
   
   while (interval < nums[nums.length-1]) {
       if (nums.every((number) => (number % interval != 0))) {
           return interval;
       } else {
           interval = interval + 1;
       }
   }
}


// Valid Time

function validTime(str) {
    let timeArray = str.split(":")

    if (timeArray[0] <= 23 && timeArray[1] <= 59) {
        return true
    } else {
        return false
    }
}


// Extract Each Kth

function extractEachKth(nums, index) {
    return nums.filter(number => (number % index != 0))
}


// Maximal Adjacent Difference

function arrayMaximalAdjacentDifference(nums) {
    
    let maximal = 0;
    
    function difference(a,b) {
        return Math.abs(a-b);
    }
    
    for (i=0; i < nums.length-1; i++) {
        if (difference(nums[i], nums[i+1]) > maximal) {
            maximal = difference(nums[i], nums[i+1]);
        }
    }
    return maximal;
}