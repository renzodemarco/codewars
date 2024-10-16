// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// My Solution:

function findUniq(arr) {
  const numbers = {}
  
  for (const num of arr) {
    numbers[num] = (numbers[num] || 0) + 1
  }
  
  for (const num of arr) {
    if (numbers[num] === 1) return num
  }
}