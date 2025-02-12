// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// My Solution:

function towerBuilder(nFloors) {
  let res = []
  for (i = 1; i <= nFloors; i++) {
    const spaces = nFloors - i
    const bricks = i * 2 - 1
    const floor = " ".repeat(spaces) + "*".repeat(bricks) + " ".repeat(spaces)
    res.push(floor)
  }
  return res
}