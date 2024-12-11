// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// My Solution:

function greet(name) {
  const capitalizedName = name.split('').map((l, i) => i === 0 ? l.toUpperCase() : l.toLowerCase()).join('')
  return `Hello ${capitalizedName}!`
}