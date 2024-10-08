// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

export function balancedNum(number: number): string {
  let array: number[] = number.toString().split('').map(Number)
  let length: number = array.length

  if (length <= 2) return "Balanced"

  let middle: number = Math.floor(length / 2)

  let left: number[] = array.slice(0, middle - (length % 2 === 0 ? 1 : 0))
  let right: number[] = array.slice(middle + 1)

  let leftSum: number = left.reduce((a, b) => a + b, 0)
  let rightSum: number = right.reduce((a, b) => a + b, 0)

  return leftSum === rightSum ? "Balanced" : "Not Balanced"
}
