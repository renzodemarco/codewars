// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// My Solution:

function sumArray(array) {
  if (!array || array.length < 3) return 0
  array.sort((a, b) => a - b)
  array.pop()
  array.shift()
  return array.reduce((a, b) => a + b)
}