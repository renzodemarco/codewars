// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// My Solution:

function incrementString(strng) {
  let numberStart = strng.length;
  for (i = strng.length - 1; i >= 0; i--) {
    if (!isNaN(strng[i])) {
      numberStart = i;
    } else {
      break;
    }
  }
  let letters = strng.slice(0, numberStart)
  let number = strng.slice(numberStart);

  if (numberStart === strng.length) {
    return letters + "1";
  }

  let incrementedNumber = (parseInt(number, 10) + 1).toString().padStart(number.length, '0');

  return letters + incrementedNumber;
}