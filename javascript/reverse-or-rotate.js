// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// My Solution:

function revrot(str, sz) {
  if (sz < 1 || str == "" || sz > str.length) return ""
  let res = ""
  for (i = 0; i + sz < str.length; i += sz) {
    const string = str.substring(i, i + sz)
    const sum = string.split('').reduce((a, b) => a + Number(b), 0)
    if (sum % 2 === 0) {
      res += string.split('').reverse().join('')
    }
    else {
      res += string.substring(1, string.length + 1)
      res += string[0]
    }
  }
  return res
}