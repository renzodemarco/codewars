// Greed is a dice game played with five six - sided dice.Your mission, should you choose to accept it, is to score a throw according to these rules.You will always be given an array with five six - sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   => 100 points
//  One   5   => 50 point

//  My Solution:

function score(dice) {
  const counts = {}
  let score = 0

  for (const die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }

  for (const num in counts) {
    const count = counts[num]
    const number = parseInt(num)

    if (count >= 3) {
      switch (number) {
        case 1:
          score += 1000;
          break;
        case 6:
          score += 600;
          break;
        case 5:
          score += 500;
          break;
        case 4:
          score += 400;
          break;
        case 3:
          score += 300;
          break;
        case 2:
          score += 200;
          break;
      }
      counts[num] -= 3;
    }
  }

  if (counts[1]) {
    score += counts[1] * 100;
  }

  if (counts[5]) {
    score += counts[5] * 50;
  }

  return score
}