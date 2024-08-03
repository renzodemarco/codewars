// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// My Solution:

export function multipleOfIndex(array: number[]): number[] {
  return array.filter((num, i) => num % i === 0 || !num)
}