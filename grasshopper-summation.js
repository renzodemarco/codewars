// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// My Solution:

const summation = num => {
    let res = 0;
    for (i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}