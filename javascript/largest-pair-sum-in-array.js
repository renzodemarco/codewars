// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

// My Solution:

function largestPairSum (numbers) {
  numbers.sort((a, b) => b - a)
  return ordered[0] + ordered[1]
}