// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// My Solution:

function removeParentheses(s){
  let parentheses = 0
  let res = ''
  for (i = 0; i < s.length; i++) {
    if (s[i] === '(') parentheses++
    if (!parentheses) res += s[i]
    if (s[i] === ')') parentheses--
  }
  return res
}