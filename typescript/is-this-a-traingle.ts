// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// My Solution:

export function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && b + c > a && c + a > b
}
