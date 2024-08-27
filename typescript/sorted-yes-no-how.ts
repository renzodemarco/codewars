// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My Solution:

export function isSortedAndHow(array: number[]): string {
  const asc = [...array].sort((a, b) => a - b)
  const desc = [...array].sort((a, b) => b - a)

  if (array.every((n, i) => n === asc[i])) return "yes, ascending"
  else if (array.every((n, i) => n === desc[i])) return "yes, descending"
  return "no"
}