// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// My Solution:

export const distinct = (a: number[]): number[] => {
  const res: number[] = []
  a.forEach(n => {
    if (!res.includes(n)) res.push(n)
  })
  return res
}