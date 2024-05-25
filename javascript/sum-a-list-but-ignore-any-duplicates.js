// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// My Solution:

function sumNoDuplicates(numList) {
  const arr = []
  numList.forEach(n => {
    if (numList.findIndex(i => i === n) === numList.findLastIndex(i => i === n)) arr.push(n)
  })
  return arr.length > 0 ? arr.reduce((a, b) => a + b) : 0
}