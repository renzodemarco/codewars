// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// My Solution:

function persistence(num) {
    let res = 0
    while (num.toString().length != 1) {
        num = num.toString().split('').reduce((a, b) => a * b)
        res++
    }
    return res
}