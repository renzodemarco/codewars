// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// My Solution:

export function validBraces(braces: string): boolean {
  const open: string[] = ["{", "[", "("]
  const close: string[] = ["}", "]", ")"]
  const stack: string[] = []
  braces.split('').forEach(char => {
    if (open.includes(char)) stack.push(char)
    const openIndex = open.indexOf(stack[stack.length - 1])
    const closeIndex = close.indexOf(char)
    if (closeIndex !== -1) {
      openIndex === closeIndex ? stack.pop() : stack.push(char)
    }
  })
  return stack.length === 0
}