// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// My Solution:

export function sameCase(a: string, b: string): number {
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
    return -1;
  }

  const isALower: boolean = a === a.toLowerCase();
  const isBLower: boolean = b === b.toLowerCase();

  return isALower === isBLower ? 1 : 0;
}