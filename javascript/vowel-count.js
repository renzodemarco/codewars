// Return the number (count) of vowels in the given string.

// My Solution:

function getCount(str) {
    vowels = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") vowels++;
    }
    return vowels;
}