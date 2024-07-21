// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// My Solution:

function order(words){
  const wordsArray = words.split(' ')
  const numbersArray = wordsArray.map(word => {
    const arrayItem = []
    arrayItem.push(Number(word.split('').filter(char => !isNaN(char)).join()))
    arrayItem.push(word)
    return arrayItem
  })
  const sortedArray = numbersArray.sort()
  return sortedArray.map(item => item[1]).join(' ')
}
