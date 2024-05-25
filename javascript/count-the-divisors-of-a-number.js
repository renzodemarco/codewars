// Count the number of divisors of a positive integer n.

// My Solution:

function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            i === Math.sqrt(n) ? count++ : count += 2
        }
    }
    return count;
}