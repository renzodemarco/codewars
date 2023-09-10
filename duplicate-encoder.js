// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// My Solution:

function duplicateEncode(word) {
    const letters = []
    const duplicatedLetters = []
    word.split('').forEach(i => {
        const letter = i.toLowerCase()
        if (letters.includes(letter) && !duplicatedLetters.includes(letter)) {
            duplicatedLetters.push(letter)
        }
        else if (!letters.includes(letter)) letters.push(letter)
    })
    return word.split('').map(letter => duplicatedLetters.includes(letter.toLowerCase()) ? ")" : "(" ).join('')
}