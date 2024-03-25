// Let's play! You have to return which player won! In case of a draw return Draw!.

// My Solution: 

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'
  const p1win = 'Player 1 won!'
  const p2win = 'Player 2 won!'
  if (p1 === 'rock' && p2 === 'scissors') return p1win
  if (p1 === 'rock' && p2 === 'paper') return p2win
  if (p1 === 'paper' && p2 === 'scissors') return p2win
  if (p1 === 'paper' && p2 === 'rock') return p1win
  if (p1 === 'scissors' && p2 === 'rock') return p2win
  if (p1 === 'scissors' && p2 === 'paper') return p1win
};