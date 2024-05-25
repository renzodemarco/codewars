// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solution:

function removeExclamationMarks(s) {
  return s.split('').map(l => {
    if (l !== '!') return l
  }).join('');
}