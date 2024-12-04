// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// My Solution:

function alphabetPosition(text) {
  return text.split('').map(l => {
    const charCode = l.toUpperCase().charCodeAt(0)
    if (charCode > 64 && charCode < 91) return charCode - 64
  }).filter(Boolean).join(' ')
}