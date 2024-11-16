// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// Make as few changes as possible.
// If the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// My Solution:

function solve(s){
  return s.split('').filter(l => l === l.toLowerCase()).length < s.split('').filter(l => l === l.toUpperCase()).length ?
    s.toUpperCase() :
    s.toLowerCase()
}