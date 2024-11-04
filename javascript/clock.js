// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// My Solution:

function past(h, m, s){
  return 1000 * (h * 3600 + m * 60 + s)
}