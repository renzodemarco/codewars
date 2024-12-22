// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The tests will pass undefined when this argument is unused.

// My Solution:

function capitalize(word) {
  if (!word) return ''
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function titleCase(title, minorWords) {

  const minorWordsArray = minorWords
  ? minorWords.split(' ').map(w => w.toLowerCase())
  : [];

  return title.split(' ').map((w, i) => {
    if (i === 0) return capitalize(w)
    else if (minorWordsArray.includes(w.toLowerCase())) {
      return w.toLowerCase()
    }
    else return capitalize(w)
  }).join(' ')
}