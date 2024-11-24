// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My Solution:

function getSize(width, height, depth) {
  return [2 * (width * height + height * depth + depth * width) , width * height * depth]
}
