// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// My Solution:

function high(x) {
    let points = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let arr = x.split(' ');
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        let word = 0
        for (z = 0; z < arr[i].length; z++) {
            word += points.indexOf(arr[i][z]) + 1;
        }
        newArr.push(word);
    }
    let mayor = newArr.indexOf(Math.max(...newArr));
    return arr[mayor];
}