// You get an array of numbers, return the sum of all of the positives ones.

// My Solution:

function positiveSum(arr) {
    let solution = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) solution += arr[i]
    }
    return solution
}