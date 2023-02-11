// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// My Solution:

function invert(array) {
    let newArr = [];
    array.forEach(n => newArr.push(-n))
    return newArr
}