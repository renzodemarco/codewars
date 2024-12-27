// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.

// My Solution:

const leftLetters = {
  w: 4,
  p: 3,
  b: 2,
  s: 1
}

const rightLetters = {
  m: 4,
  q: 3,
  d: 2,
  z: 1
}

function alphabetWar(fight) {
  let left = 0
  let right = 0
  for (i = 0; i < fight.length; i++) {
    if (leftLetters[fight[i]]) left += leftLetters[fight[i]]
    if (rightLetters[fight[i]]) right += rightLetters[fight[i]]
  }
  return left > right ? "Left side wins!" : left < right ? "Right side wins!" : "Let's fight again!"
}