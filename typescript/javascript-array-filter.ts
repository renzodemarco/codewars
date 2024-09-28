// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) should == [2,4,6]

// My Solution:

export const getEvenNumbers = (arr: number[]): number[] => arr.filter(n => n % 2 === 0) 