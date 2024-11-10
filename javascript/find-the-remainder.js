// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// My Solution:

function remainder(n, m) {
  const max = Math.max(n, m)
  const min = Math.min(n, m)
  return min !== 0 ? max % min : NaN 
}