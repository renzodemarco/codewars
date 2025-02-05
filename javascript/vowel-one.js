// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// My Solution:

function vowelOne(s) {
  vowels = ['a', 'e', 'i', 'o', 'u']
  return s.split('').map(c => vowels.includes(c.toLowerCase()) ? '1' : '0'). join('')
}