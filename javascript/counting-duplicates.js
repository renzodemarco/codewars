// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// My Solution:

function duplicateCount(text) {
    const textLowerCase = text.toLowerCase()
    const charCount = {}
    let count = 0

    for (let i = 0; i < textLowerCase.length; i++) {
        const char = textLowerCase[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char in charCount) {
        if (charCount[char] > 1) {
            count++
        }
    }
    return count
}