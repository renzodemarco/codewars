// Given a string str, reverse it and omit all non-alphabetic characters.

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// My Solution:

function reverseLetter(str) {
  return str.split('')
            .filter(l => {
              const letter = l.charCodeAt(0)
              return letter > 64 && letter < 123
            })
            .reverse()
            .join('')  
}