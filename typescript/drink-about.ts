// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// My Solution:

export function peopleWithAgeDrink(old: number): string {
  const drink = (old < 14) ? 'toddy' : (old < 18) ? 'coke' : (old < 21) ? 'beer' : 'whisky'
  return "drink " + drink
}