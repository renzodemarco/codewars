// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...

// Because you're a nice person, you always round up the tip, regardless of the service.

// My Solution:

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case 'terrible':
      return 0
    case 'poor':
      return Math.ceil(amount * .05)
    case 'good':
      return Math.ceil(amount * .1)
    case 'great':
      return Math.ceil(amount * .15)
    case 'excellent':
      return Math.ceil(amount  * .2)
    default:
      return "Rating not recognised"
  }
}