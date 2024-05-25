// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// My Solution:

function findEvenIndex(arr) {
    for (i = 0; i < arr.length; i++) {
        const first = arr.slice(0, i)
        const last = arr.slice(i + 1)
        if (first.reduce((a, b) => a + b, 0) === last.reduce((a, b) => a + b, 0)) return i
    }
    return -1
}