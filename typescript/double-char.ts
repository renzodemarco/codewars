// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// My Solution:

export function doubleChar(s: string): string {
  return s.split('').map(l => l + l).join('')
}