// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// My Solution:

export const min = (list: number[]): number => Math.min(...list)

export const max = (list: number[]): number => Math.max(...list)