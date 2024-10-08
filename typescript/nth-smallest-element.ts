// Given an array/list of integers, find the Nth smallest element in the array.

// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

// My Solution:

export function nthSmallest(arr: number[], pos: number) {
  return arr.sort((a, b) => a - b)[pos - 1]
}