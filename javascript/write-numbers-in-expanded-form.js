// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  const numArray = num.toString().split('')
  const res = numArray.map((n, i) => {
    if (n === '0') return false
    for (j = numArray.length - 1; j > i; j--) {
      n += '0'
    }
    return n
  }).filter(Boolean)
  return res.join(' + ')
}