// Build a function that returns an array of integers from n to 1 where n>0.

// My Solution:

const reverseSeq = n => {
    let res = [];
    for (i = n; i > 0; i--) {
        res.push(i);
    }
    return res;
};