// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// My Solution:

var number = function (array) {
    newArr = [];
    for (i = 0; i < array.length; i++) {
        newArr.push(i + 1 + ": " + array[i]);
    }
    return newArr;
}