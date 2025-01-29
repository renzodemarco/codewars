// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// My Solution:

function highestRank(arr) {
  const obj = {}
  arr.forEach(n => {
    obj[n] ? obj[n]++ : obj[n] = 1
  })
  const maxValue = Math.max(...Object.values(obj))
  const maxKeys = Object.keys(obj).filter(k => obj[k] === maxValue)
  return Math.max(...maxKeys)
}