// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// My Solution:

export function multiplicationTable(size: number): number[][] {
  const response: number[][] = []
  const array: number[] = []
  for (let i = 1; i <= size; i++) {
    array.push(i)
  }
  for (let i = 1; i <= size; i++) {
    const arr = array.map(n => n * i)
    response.push(arr)
  }
  return response
}