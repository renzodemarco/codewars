// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// My Solution:

function countSmileys(arr) {
  let count = 0;
  arr.forEach(face => {
    if (
      (face.length === 3 && (face[0] === ':' || face[0] === ';') && (face[1] === '-' || face[1] === '~') && (face[2] === ')' || face[2] === 'D')) ||
      (face.length === 2 && (face[0] === ':' || face[0] === ';') && (face[1] === ')' || face[1] === 'D'))
    ) {
      count++;
    }
  });
  return count;
}