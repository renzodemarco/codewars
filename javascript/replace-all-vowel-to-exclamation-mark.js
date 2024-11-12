// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// My Solution:

function replace(s){
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return s.split('').map(l => vowels.includes(l.toLowerCase()) ? '!' : l).join('')
}