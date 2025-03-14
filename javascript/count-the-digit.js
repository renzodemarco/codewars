// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// My Solution:

function nbDig(n, d) {
  let count = 0
  for (k = 0; k <= n; k++) {
    const square = (k ** 2).toString()
    count += square.split('').filter(n => n === d.toString()).length
  }
  return count
}