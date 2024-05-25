// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// My Solution:

function narcissistic(value) {
  let sum = 0
  let stringValue = value.toString()
  for (i = 0; i < stringValue.length; i++) {
    sum += stringValue[i] ** stringValue.length
  }
  return sum == stringValue
}