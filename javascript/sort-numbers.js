// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// My Solution:

function solution(nums){
  return !nums ? [] : nums.sort((a, b) => a - b)
}