// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

// My Solution: 

function divisors(integer) {
  const res = []
  for (i = 2; i <= integer / 2; i++) {
    if (integer % i === 0) res.push(i)
  }
  return (res.length > 0) ? res : `${integer} is prime`
};