// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// My Solution:

function findOdd(A) {
  for (i = 0; i < A.length; i++) {
    let repeated = A.filter(item => item === A[i])
    if (repeated.length % 2 !== 0) return A[i]
  }
}