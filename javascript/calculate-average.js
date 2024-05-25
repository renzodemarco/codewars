// Write a function which calculates the average of the numbers in a given list.

// Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) return 0;
    else return array.reduce((acc,idx)=> acc + idx, 0) / array.length;
}