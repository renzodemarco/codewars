// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// My Solution:

export function capitalize(s: string): string[] {
  return [
    s.split('').reduce((a, b, i) => a + (i % 2 === 0 ? b.toUpperCase() : b.toLowerCase()), ''),
    s.split('').reduce((a, b, i) => a + (i % 2 !== 0 ? b.toUpperCase() : b.toLowerCase()), '')
  ]
}