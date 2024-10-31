// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// My Solution:

function flattenAndSort(array) {
  let res = []
  array.forEach(arr => arr.forEach(n => res.push(n)))
  return res.sort((a, b) => a - b)
}