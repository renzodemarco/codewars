// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// My Solution: 

function oddOrEven(array) {
    let sum = 0;
    array.forEach(n => sum += n);
    if (array.length = 0) return [0];
    else if (sum % 2 == 0) return "even"
    else return "odd";
}