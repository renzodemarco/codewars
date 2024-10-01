// Implement String#digit?, which should return true if given object is a digit (0-9), false otherwise.

// My Solution:

export function digit(s: string) {
  const n: number = parseInt(s)
  return n >= 0 && n < 10
}