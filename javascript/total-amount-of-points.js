// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My Solution:

function points(games) {
  let res = 0
  for (i = 0; i < games.length; i++) {
    let x = games[i].split(':')[0]
    let y = games[i].split(':')[1]
    if (x > y) res += 3
    if (x === y) res++
  }
  return res
}