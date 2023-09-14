// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// My Solution: 

function charConcat(string) {
    let res = []
    for (i = 0; i <= string.length / 2 - 1; i++) {
        res.push(string[i], string[string.length - 1 - i], i + 1)
    }
    return res.join('')
}