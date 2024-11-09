// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// My Solution:

function multiTable(number) {
  let res = ''
  for (i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${number * i}${i !== 10 ? '\n' : ''}`
  }
  return res
}