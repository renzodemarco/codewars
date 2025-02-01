// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// My Solution:

function moveZeros(arr) {
  let zeros = 0
  let res = []
  for (i = 0; i < arr.length; i++) {
    arr[i] !== 0 ? res.push(arr[i]) : zeros++
  }
  while (zeros > 0) {
    res.push(0)
    zeros--
  }
  return res
}