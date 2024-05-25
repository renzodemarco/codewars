// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// My Solution:

function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length
  return yourPoints > average
}
