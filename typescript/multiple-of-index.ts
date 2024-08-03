// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// My Solution:

export function multipleOfIndex(array: number[]): number[] {
  const res: number[] = []
  array.forEach((num, i) => {
    if (num % i === 0 || num === 0) res.push(num)
  })
  return res
}