// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// My Solution:

function isVow(a) {
  const vowels = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' };
  return a.map(n => vowels[n] || n);
}