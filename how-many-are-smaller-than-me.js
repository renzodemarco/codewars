// Write a function that given an array arr returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// My Solution:

function smaller(nums) {
    const res = nums.map((n, idx) => {
        let minors = 0
        for (i = idx; i < nums.length; i++) {
            if (nums[i] < n) minors++
        }
        return minors
    })
    return res
}