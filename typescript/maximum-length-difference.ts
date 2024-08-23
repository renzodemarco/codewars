// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1.

// My Solution:

export const mxdiflg = (a1: string[], a2: string[]): number => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const maxLenA1 = Math.max(...a1.map(str => str.length));
  const minLenA1 = Math.min(...a1.map(str => str.length));
  const maxLenA2 = Math.max(...a2.map(str => str.length));
  const minLenA2 = Math.min(...a2.map(str => str.length));

  const diff1 = Math.abs(maxLenA1 - minLenA2);
  const diff2 = Math.abs(maxLenA2 - minLenA1);

  return Math.max(diff1, diff2);
};