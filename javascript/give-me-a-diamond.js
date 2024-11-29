// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// My Solution:

function diamond(n) {
  if (n % 2 === 0 || n < 0) return null
  let res = ''
  const mid = Math.floor(n / 2)
  for (i = 0; i < n; i++) {
    const spaces = Math.abs(mid - i) 
    const stars = n - 2 * spaces
    res += ' '.repeat(spaces) + '*'.repeat(stars) + '\n'
  }
  return res
}