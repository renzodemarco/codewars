// Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Incomplete questions are marked with an underscore, "_".

// My Solution:

function possiblyPerfect(key, answers) {
  const responses = []
  for (i = 0; i < key.length; i++) {
    if (key[i] !== '_') {
      responses.push(key[i] === answers[i])
    }
  }
  return responses.every(n => n === responses[0])
}