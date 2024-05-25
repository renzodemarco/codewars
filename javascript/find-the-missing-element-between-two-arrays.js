// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// My Solution:

function findMissing(arr1, arr2) {
  const sumArr1 = arr1.reduce((acc, num) => acc + num, 0)
  const sumArr2 = arr2.reduce((acc, num) => acc + num, 0)
  return sumArr1 - sumArr2
}