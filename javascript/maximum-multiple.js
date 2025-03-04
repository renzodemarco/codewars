// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions:
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// Notes:
// The parameters (divisor, bound) passed to the function are only positive values.

// My Solution:

function maxMultiple(divisor, bound) {
  let num = divisor;
  for (i = 2; i * divisor <= bound; i++) {
    num = i * divisor;
  }
  return num;
}