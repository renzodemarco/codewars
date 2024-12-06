// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// My Solution:

function vowelIndices(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let res = []
  word.split('').forEach((l, i) => {
    if (vowels.includes(l.toLowerCase())) res.push(i + 1)
  })
  return res
}