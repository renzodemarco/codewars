// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// My Solution:

export function generateShape(int: number): string {
  let res: string = ""
  for (let i = 0; i < int; i++) {
    for(let j = 0; j < int; j++) {
      res += "+"
    }
    if (i !== int - 1 )res += "\n"
  }
  return res
}