// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Input: 6
// Output: "0+1+2+3+4+5+6 = 21"

// Input: -15
// Output: "15<0"

// Input: 0
// Output: "0=0"

// My Solution:

function SequenceSum(n) {
  if (n < 0) return `${n}<0`
  if (n === 0) return "0=0"
  let res = "0"
  let acc = 0
  for (i = 1; i <= n; i++) {
    res += `+${i}`
    acc += i
  }
  res += ` = ${acc}`
  return res
}