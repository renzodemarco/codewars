// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// My Solution:

function sumDigits(number) {
  return number.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
}