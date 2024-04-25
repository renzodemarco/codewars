// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// My Solution:

function disemvowel(str) {
  const vocals = ['a', 'e', 'i', 'o', 'u']
  return str.split('').map(letter => vocals.includes(letter.toLowerCase()) ? '' : letter).join('')
}