// Complete the solution so that the function will break up camel casing, using a space between words.

// My Solution:

function solution(string) {
  const res = []
  for (i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      res.push(' ' + string[i])
    }
    else res.push(string[i])
  }
  return res.join('')
}