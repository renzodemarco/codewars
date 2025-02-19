// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// My Solution:

function dontGiveMeFive(start, end) {
  let count = []
  for (i = start; i <= end; i++) {
    if (!i.toString().includes('5')) count.push(i)
  }
  return count.length
}