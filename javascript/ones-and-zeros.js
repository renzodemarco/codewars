// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// My Solution:

const binaryArrayToNumber = arr => {
  const reversedArr = arr.reverse();
  let res = 0;
  for (i = 0; i < arr.length; i++) {
    res += reversedArr[i] * 2 ** i;
  }
  return res;
};