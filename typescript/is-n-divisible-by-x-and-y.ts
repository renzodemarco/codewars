// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// My Solution:

export function isDivisible(n: number, x: number, y: number): boolean {
  return n % x === 0 && n % y === 0;
} 