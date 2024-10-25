// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// My Solution:

function sumOfMinimums(arr) {
  return arr.map(a => Math.min(...a)).reduce((a, b) => a + b)
}