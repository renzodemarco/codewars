// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case: name equals owner	 return 'Hello boss'
// otherwise	return 'Hello guest'

// My Solution:

export function greet(name: string, owner: string): string {
  return name === owner ? 'Hello boss' : 'Hello guest'
}