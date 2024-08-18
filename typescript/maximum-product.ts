// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// My Solution:

export function adjacentElementsProduct(arr: number[]): number {
  const products: number[] = []
  for (let i = 1; i < arr.length; i++) {
    products.push(arr[i] * arr[i - 1])
  }
  return Math.max(...products)
}