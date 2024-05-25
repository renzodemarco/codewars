// The examples below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Solution:

function accum(s) {
    let letters = s.split('');
    let result = [];
    for (i = 0; i < letters.length; i++) {
        result.push(letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i));
    }
    return result.join('-');
}