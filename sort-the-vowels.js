// Write a function which takes a input string s and return a string in the following way:

//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// My Solution:

function sortVowels(s) {
  if (!typeof s === 'string' || typeof s === 'undefined') return ''
  const res = []
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (i = 0; i < s.length; i++) {
    const letter = vowels.includes(s[i].toLowerCase()) ? `|${s[i]}` : `${s[i]}|`
    res.push(letter)
  }
  return res.join('\n')
}