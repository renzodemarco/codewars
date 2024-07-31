// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.

// If the score < 0, return 0.

// My Solution:


export function checkExam(array1: string[], array2: string[]): number {
  let res: number = 0
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) res += 4
    if (array1[i] !== array2[i] && array2[i] !== "") res -= 1
  }
  return res > 0 ? res : 0
}