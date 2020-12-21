// Sum of Two

// You have two integer arrays, a and b, and an integer value v. Determine whether 
// there is a pair of numbers, where one number is taken from a and the other from b, 
// that can be added together to get a sum of v. Return true if such a pair exists, 
// otherwise return false.

function sumOfTwo(nums1, nums2, value) {
    for (let i = 0; i < nums1.length; i ++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] + nums2[j] == value) {
                return true;
            }
        }
    }
    return false;
}