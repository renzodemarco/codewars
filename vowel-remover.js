// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// My Solution:

function shortcut (string) {
  return string
    .split('')
    .filter(l => l !== 'a' && l!== 'e' && l!== 'i' && l!== 'o' && l!== 'u')
    .join('')
}
