// Your task is to sum the differences between consecutive pairs in the array in descending order.

// My Solution:

function sumOfDifferences(arr) {
  let res = 0
  arr.sort((a, b) => b - a)
  for (i = 0; i < arr.length - 1; i++) {
    res += arr[i] - arr[i + 1]
  }
  return res
}