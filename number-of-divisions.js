// Calculate how many times a number can be divided by a given number.

// My Solution:

const divisions = (n, divisor) => {
    let count = 0;
    while (n / divisor >= 1) {
        n = n / divisor
        count++
    }
    return count
};