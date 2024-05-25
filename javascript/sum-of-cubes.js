// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// My Solution:

function sumCubes(n){
    let res = 0;
    for (i = 1; i <= n; i++) {
      res += i ** 3;
    }
    return res;
}