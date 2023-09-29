// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// My Solution: 

function sortArray(array) {
    const oddNumbers = array.filter(number => number % 2 !== 0).sort((a, b) => a - b)
    let oddIndex = 0
    const result = array.map(n => {
        if (n % 2 === 0) return n
        else {
            return oddNumbers[oddIndex++]
        }
    })
    return result
}