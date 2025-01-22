// You want to create secret messages. Here are the conditions:

// Your message is a string containing space separated words.

// You need to encrypt each word in the message using the following rules:

// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter.

// Keepin' it simple: There are no special characters in the input.

// My Solution:

function encryptThis(text) {
  const arr = text.split(' ').map(w => {
    const wordArr = w.split('')
    wordArr[0] = w.charCodeAt(0)
    const last = wordArr[wordArr.length - 1]
    wordArr[wordArr.length - 1] = wordArr[1]
    wordArr[1] = last
    return wordArr.join('')
  })
  return arr.join(' ')
}
