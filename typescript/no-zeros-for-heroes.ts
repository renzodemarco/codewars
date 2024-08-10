// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// My Solution:

export function noBoringZeros(n: number): number {
  if (n === 0) return n

  let str: string = n.toString()

  while (str.endsWith('0')) {
    str = str.slice(0, -1)
  }

  return parseInt(str)
}