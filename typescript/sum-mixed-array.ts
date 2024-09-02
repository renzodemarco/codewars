// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution:

export function sumMix(x: any[]): number {
  const arr: number[] = x.map(n => Number(n))
  return arr.reduce((a, b) => a + b)
}