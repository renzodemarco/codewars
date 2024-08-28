// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// My Solution:

export function evaporator(content: number, evapPerDay: number, threshold: number): number {
  let days: number = 0
  const limit: number = content * threshold / 100
  do {
    content -= content * (evapPerDay / 100)
    days++
  } while (content > limit)
    return days
}