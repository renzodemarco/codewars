// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// My Solution:

export function minValue(values: number[]): number {
  return parseInt(values.filter((num, index) => values.indexOf(num) === index).sort().join(''))
}