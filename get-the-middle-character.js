// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// My Solution: 

function getMiddle(s) {
    const l = s.length
    return l % 2 !== 0 ? s[Math.floor(l/2)] : s[l/2 - 1] + s[l/2]
}