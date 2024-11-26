// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

// Note: the result should be rounded down to the nearest integer.

// My Solution:

function predictAge(...ages) {
  return Math.floor(Math.sqrt(ages.reduce((a, b) => a + b * b, 0)) / 2)
}