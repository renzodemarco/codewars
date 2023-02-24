// Given a non-empty array of integers, return the result of multiplying the values together in order. 

// My Solution:

function grow(x) {
    return x.reduce((y, z) => y * z)
}