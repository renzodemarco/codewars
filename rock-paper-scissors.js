// Let's play! You have to return which player won! In case of a draw return Draw!.

// My Solution: 

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'
  const winRules = { paper: 'rock', scissors: 'paper', rock: 'scissors' }
  if (p2 === winRules[p1]) return 'Player 1 won!'
  else return 'Player 2 won!'
};