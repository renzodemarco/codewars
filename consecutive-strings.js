// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// My Solution: 

function longestConsec(strarr, k) {
    let longest = ''
    for (i = 0; k > 0 && i <= strarr.length - k; i++) {
        const word = strarr.slice(i, i + k).join('')
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest
}