// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// My Solution:

export function countPositivesSumNegatives(input: any) {
  if (!input || input.length === 0) return [];

  let pos = 0;
  let neg = 0;

  for (const num of input) {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg += num;
    }
  }

  return [pos, neg];
}