// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Array/list will contain positives only.
// Array/list will always have even size

// My Solution:

function minSum(arr) {
  arr.sort((a, b) => a - b)
  let sum = 0
  while (arr.length > 0) {
    const first = arr.shift()
    const last = arr.pop()
    sum += first * last
  }
  return sum
}